import { NIVEAUX, matiere as trouverMatiere } from "../content/catalogue.js";
import { h, remplacer } from "./dom.js";
import { bloc } from "./md.js";
import * as S from "./store.js";
import * as IA from "./gemini.js";
import { carteExercice, exerciceValide } from "./exercices.js";
import * as F from "./invitation.js";
import * as J from "./journal.js";
import { VERSION, CHIFFRES } from "./version.js";

const app = document.getElementById("app");
const contenus = {};

// Seuls les fichiers déclarés dans le catalogue peuvent être chargés.
async function charger(niveau, id) {
  if (!trouverMatiere(niveau, id)) throw new Error("Matière inconnue");
  const cle = `${niveau}/${id}`;
  if (!contenus[cle]) {
    contenus[cle] = import(`../content/${niveau}/${id}.js`).then((m) => m.default).catch((e) => {
      delete contenus[cle];
      throw e;
    });
  }
  return contenus[cle];
}

// Si l'adresse est déjà la bonne, aucun « hashchange » : on réaffiche directement
function aller(hash) {
  if (location.hash === hash) router();
  else location.hash = hash;
}

// Redirection (lien périmé, matière inconnue) : remplace l'entrée d'historique
function rediriger(hash) {
  location.replace(hash);
}

function entete({ titre, retour, couleur, droite }) {
  return h("header", { class: "barre", style: couleur ? { "--c": couleur } : null },
    retour ? h("a", { class: "retour-btn", href: retour, "aria-label": "Retour" }, "‹") : h("span", { class: "logo" }, "🎓"),
    h("h1", {}, titre),
    droite || null
  );
}

function page(...enfants) {
  remplacer(app, ...enfants);
  window.scrollTo(0, 0);
}

function chargement() {
  page(h("div", { class: "centre" }, h("div", { class: "spinner" })));
}

function erreur(msg) {
  page(entete({ titre: "Oups", retour: "#/" }), h("main", {}, h("p", { class: "erreur" }, msg)));
}

// ---------- Code d'invitation ----------

// Carte d'activation de l'IA (code reçu des parents, ou lien /i/… qui le préremplit). apres() est appelé quand c'est fait.
function carteCode({ apres, refusable = false }) {
  const champ = h("input", { class: "champ", type: "text", autocomplete: "off", autocapitalize: "characters", spellcheck: "false", placeholder: "RVZ-XXXX-XXXX" });
  champ.value = F.codeRecu();
  const msg = h("p", { class: "erreur" });
  const btn = h("button", { class: "btn ia plein", type: "submit" }, "Activer l'IA");
  return h("form", {
    class: "carte ia-code",
    onsubmit: async (ev) => {
      ev.preventDefault();
      if (!champ.value) return;
      btn.disabled = true;
      btn.textContent = "Vérification…";
      msg.textContent = "";
      const erreurCode = await F.activer(champ.value);
      if (!erreurCode) { IA.oublierModeles(); apres(); return; }
      btn.disabled = false;
      btn.textContent = "Activer l'IA";
      msg.textContent = erreurCode;
      champ.select();
    },
  },
    h("h2", {}, "✨ Activer l'IA"),
    h("p", {}, F.codeRecu()
      ? "Tes parents t'ont envoyé un code : touche « Activer l'IA ». L'IA pourra ensuite créer des exercices, corriger tes rédactions et répondre à tes questions."
      : "Tape le code d'invitation reçu de tes parents (le même code peut servir sur plusieurs appareils) : l'IA pourra ensuite créer des exercices, corriger tes rédactions et répondre à tes questions."),
    h("div", { class: "saisie" }, champ, btn),
    msg,
    refusable ? h("button", { class: "btn lien", type: "button", onclick: () => { F.continuerSansIA(); apres(); } }, "Plus tard (continuer sans l'IA)") : null
  );
}

// ---------- Profils ----------

function vueProfils() {
  const liste = S.profils();
  const actif = S.profilActif();
  page(
    entete({ titre: "Qui révise ?", retour: actif ? "#/" : null }),
    h("main", {},
      liste.length ? h("div", { class: "profils" },
        liste.map((p) =>
          h("button", { class: "profil", onclick: () => { S.choisirProfil(p.id); aller("#/"); } },
            h("span", { class: "avatar" }, p.avatar),
            h("span", { class: "prenom" }, p.prenom),
            h("span", { class: "niveau" }, NIVEAUX[p.niveau]?.nom || "")
          )
        )
      ) : h("p", { class: "intro" }, "Bienvenue ! Crée un profil pour chaque élève : la progression est enregistrée sur cet appareil."),
      formulaireProfil()
    )
  );
}

function formulaireProfil(existant, { depuisReglages = false } = {}) {
  let avatar = existant?.avatar || S.AVATARS[Math.floor(Math.random() * S.AVATARS.length)];
  const prenom = h("input", { class: "champ", type: "text", maxlength: 20, placeholder: "Prénom", value: existant?.prenom || "" });
  const niveau = h("select", { class: "champ" },
    existant ? null : h("option", { value: "", selected: true, disabled: true }, "Choisis la classe…"),
    Object.entries(NIVEAUX).map(([id, n]) => h("option", { value: id, selected: existant?.niveau === id }, `${n.nom} — ${n.long}`))
  );
  const avatars = h("div", { class: "avatars" },
    S.AVATARS.map((a) =>
      h("button", {
        type: "button",
        class: "av" + (a === avatar ? " sel" : ""),
        onclick: (ev) => {
          avatar = a;
          avatars.querySelectorAll(".av").forEach((b) => b.classList.remove("sel"));
          ev.currentTarget.classList.add("sel");
        },
      }, a)
    )
  );
  const msg = h("p", { class: "erreur" });
  const btn = h("button", { class: "btn plein", type: "submit" }, existant ? "Enregistrer" : "Créer le profil");
  return h("form", {
    class: "carte form",
    onsubmit: (ev) => {
      ev.preventDefault();
      // Un seul enregistrement, même si on clique plusieurs fois
      if (btn.disabled) return;
      const p = prenom.value.trim();
      if (!p) { msg.textContent = "Écris un prénom."; return; }
      if (!niveau.value) { msg.textContent = "Choisis la classe."; return; }
      if (S.profilExistant(p, niveau.value, existant?.id)) { msg.textContent = `Il y a déjà un profil « ${p} » en ${NIVEAUX[niveau.value].nom}.`; return; }
      btn.disabled = true;
      btn.textContent = "Un instant…";
      if (existant) S.modifierProfil(existant.id, { prenom: p, niveau: niveau.value, avatar });
      else S.ajouterProfil(p, niveau.value, avatar, !depuisReglages);
      aller(existant || depuisReglages ? "#/reglages" : "#/");
    },
  },
    h("h2", {}, existant ? "Modifier le profil" : "Nouveau profil"),
    prenom, niveau, avatars, msg, btn
  );
}

// ---------- Accueil ----------

function statsMatiere(prog, niveau, id) {
  let vus = 0, faits = 0, reussis = 0;
  for (const [cle, c] of Object.entries(prog)) {
    if (!cle.startsWith(`${niveau}/${id}/`)) continue;
    if (c.vu) vus++;
    for (const r of Object.values(c.ex || {})) { faits++; if (r.ok) reussis++; }
  }
  return { vus, faits, reussis };
}

function aRevoir(prog, niveau) {
  const out = [];
  for (const [cle, c] of Object.entries(prog)) {
    const [n, idM] = cle.split("/");
    if (n !== niveau || !trouverMatiere(niveau, idM)) continue;
    const rates = Object.values(c.ex || {}).filter((r) => !r.ok).length;
    if (rates) out.push({ cle, titre: c.titre, rates });
  }
  return out;
}

function vueAccueil() {
  const p = S.profilActif();
  if (!p) return vueProfils();
  const niv = NIVEAUX[p.niveau];
  const prog = S.progression(p.id);
  const revoir = aRevoir(prog, p.niveau);
  page(
    entete({
      titre: "Revizz",
      droite: h("div", { class: "droite" },
        h("a", { class: "chip", href: "#/profils", title: "Changer d'élève" }, `${p.avatar} ${p.prenom}`),
        h("a", { class: "icone-btn", href: "#/reglages", "aria-label": "Réglages" }, "⚙︎")
      ),
    }),
    h("main", {},
      h("p", { class: "salut" }, `Salut ${p.prenom} ! `, h("span", { class: "niveau-txt" }, niv.long)),
      F.proposerCode() ? carteCode({ apres: vueAccueil, refusable: true }) : null,
      revoir.length ? h("a", { class: "carte revoir", href: "#/revoir" },
        h("span", { class: "gros" }, "🔁"),
        h("span", {}, h("strong", {}, "À revoir"), h("br"), `${revoir.reduce((s, r) => s + r.rates, 0)} exercice(s) à retravailler`)
      ) : null,
      h("div", { class: "grille" },
        niv.matieres.map((m) => {
          const st = statsMatiere(prog, p.niveau, m.id);
          return h("a", { class: "matiere", href: `#/m/${m.id}`, style: { "--c": m.couleur } },
            h("span", { class: "m-icone" }, m.icone),
            h("span", { class: "m-nom" }, m.nom),
            h("span", { class: "m-stat" },
              st.faits
                ? `✓ ${st.reussis} réussi${st.reussis > 1 ? "s" : ""}` + (st.faits > st.reussis ? ` · ${st.faits - st.reussis} à revoir` : "")
                : st.vus ? `${st.vus} chapitre${st.vus > 1 ? "s" : ""} lu${st.vus > 1 ? "s" : ""}` : "À découvrir")
          );
        })
      )
    )
  );
}

// ---------- Matière ----------

async function vueMatiere(id) {
  const p = S.profilActif();
  if (!p) return vueProfils();
  const m = trouverMatiere(p.niveau, id);
  if (!m) return rediriger("#/");
  chargement();
  let data;
  try { data = await charger(p.niveau, id); } catch { return erreur("Cette matière n'est pas encore disponible ou la connexion a échoué."); }
  const prog = S.progression(p.id);
  // Regroupe par thème (dans l'ordre de première apparition), même si les
  // chapitres d'un thème ne se suivent pas dans le fichier
  const parTheme = new Map();
  for (const c of data.chapitres) {
    const g = c.theme || "";
    if (!parTheme.has(g)) parTheme.set(g, { theme: g, chapitres: [] });
    parTheme.get(g).chapitres.push(c);
  }
  const groupes = [...parTheme.values()];
  page(
    entete({ titre: `${m.icone} ${m.nom}`, retour: "#/", couleur: m.couleur }),
    h("main", { style: { "--c": m.couleur } },
      groupes.map((g) => h("section", {},
        g.theme ? h("h2", { class: "theme" }, g.theme) : null,
        h("div", { class: "chapitres" },
          g.chapitres.map((c) => {
            const r = S.resumeChapitre(prog, `${p.niveau}/${id}/${c.id}`, c.exercices.length);
            const pct = r.total ? Math.round((100 * r.reussis) / r.total) : 0;
            return h("a", { class: "chapitre", href: `#/c/${id}/${c.id}` },
              h("span", { class: "c-titre" }, c.titre),
              h("span", { class: "c-etat" },
                r.faits ? `${r.reussis}/${r.total}` : r.vu ? "lu" : ""),
              h("span", { class: "jauge" }, h("span", { style: { width: pct + "%" } }))
            );
          })
        )
      ))
    )
  );
}

// ---------- Chapitre ----------

async function vueChapitre(idM, idC, onglet = "cours") {
  const p = S.profilActif();
  if (!p) return vueProfils();
  const m = trouverMatiere(p.niveau, idM);
  if (!m) return rediriger("#/");
  chargement();
  let data;
  try { data = await charger(p.niveau, idM); } catch { return erreur("Impossible de charger ce chapitre."); }
  const idx = data.chapitres.findIndex((c) => c.id === idC);
  const c = data.chapitres[idx];
  if (!c) return rediriger(`#/m/${idM}`);
  const cle = `${p.niveau}/${idM}/${c.id}`;
  // Accents significatifs en français et en espagnol (está ≠ esta), umlauts en allemand
  const langue = idM === "francais" || idM === "espagnol" ? "fr" : idM === "allemand" ? "de" : false;
  // Lettres difficiles à taper sur un clavier d'ordinateur : boutons sous les réponses courtes
  const accents = { espagnol: "áéíóúüñ¿¡", allemand: "äöüß", francais: "àâçéèêëîïôùûœ" }[idM] || "";
  const ctx = { niveau: NIVEAUX[p.niveau].long, matiere: m.nom, langue, accents };
  const suivant = data.chapitres[idx + 1];

  const onglets = [
    ["cours", "📘 Cours"],
    ["exercices", "✏️ Exos"],
    ["revoir", "🔁 À revoir"],
    ["ia", "✨ IA"],
  ];
  const nav = h("nav", { class: "onglets" },
    onglets.map(([o, lib]) => h("a", { class: o === onglet ? "actif" : "", href: `#/c/${idM}/${idC}/${o}` }, lib))
  );

  let corps;
  if (onglet === "cours") {
    S.marquerVu(p.id, cle, c.titre);
    corps = h("div", {},
      h("article", { class: "cours", html: bloc(c.cours) }),
      h("div", { class: "fin-cours" },
        h("a", { class: "btn plein", href: `#/c/${idM}/${idC}/exercices` }, "S'entraîner ✏️"),
        suivant ? h("a", { class: "btn", href: `#/c/${idM}/${suivant.id}` }, "Chapitre suivant ›") : null
      )
    );
  } else if (onglet === "exercices" || onglet === "revoir") {
    corps = zoneExercices({ p, c, cle, ctx, seulementRates: onglet === "revoir", idM, suivant });
  } else {
    corps = zoneQuestion({ ctx, c });
  }

  page(
    entete({ titre: `${m.icone} ${m.nom}`, retour: `#/m/${idM}`, couleur: m.couleur }),
    h("main", { style: { "--c": m.couleur } }, h("h2", { class: "titre-chap" }, c.titre), nav, corps)
  );
}

function zoneExercices({ p, c, cle, ctx, seulementRates, idM, suivant }) {
  const prog = S.progression(p.id);
  const ex = prog[cle]?.ex || {};
  const score = h("div", { class: "score" });
  const majScore = () => {
    const r = S.resumeChapitre(S.progression(p.id), cle, c.exercices.length);
    score.replaceChildren(
      h("span", {}, `${r.reussis} / ${r.total} réussis`),
      h("span", { class: "jauge large" }, h("span", { style: { width: (r.total ? (100 * r.reussis) / r.total : 0) + "%" } }))
    );
  };
  majScore();

  const indices = c.exercices.map((_, i) => i).filter((i) => !seulementRates || (ex[i] && !ex[i].ok));
  // Texte commun à une série : déplié à sa première apparition, replié ensuite
  const textesVus = new Set();
  const liste = h("div", { class: "exos" },
    indices.map((i) =>
      carteExercice(c.exercices[i], i + 1, {
        ctx,
        support: c.textes?.[c.exercices[i].texte],
        supportOuvert: !textesVus.has(c.exercices[i].texte) && !!textesVus.add(c.exercices[i].texte),
        precedent: ex[i],
        onResultat: (ok) => { S.noterExercice(p.id, cle, c.titre, i, ok); majScore(); },
      })
    )
  );
  if (seulementRates && !indices.length) {
    liste.append(h("p", { class: "vide" }, "Rien à revoir dans ce chapitre 🎉"));
  }

  const bonus = h("div", { class: "exos" });
  const zoneIA = h("div", { class: "carte ia-zone" });
  const majIA = () => {
    zoneIA.replaceChildren();
    if (!IA.disponible() && F.relais) {
      zoneIA.append(carteCode({ apres: router }));
      return;
    }
    if (!IA.disponible()) {
      zoneIA.append(h("p", {}, "✨ Avec une clé Gemini (gratuite, à ajouter dans les ", h("a", { href: "#/reglages" }, "Réglages"), "), l'IA peut créer d'autres exercices corrigés sur ce chapitre."));
      return;
    }
    const btn = h("button", {
      class: "btn ia plein",
      onclick: async () => {
        btn.disabled = true;
        btn.textContent = "L'IA prépare tes exercices…";
        try {
          const nouveaux = (await IA.genererExercices({ ...ctx, chapitre: c.titre, cours: c.cours })).filter(exerciceValide);
          if (!nouveaux.length) throw new Error("L'IA n'a pas produit d'exercice exploitable, réessaie.");
          const debut = bonus.querySelectorAll(".exo").length;
          if (!debut) bonus.append(h("h2", { class: "theme" }, "Exercices créés par l'IA"), h("p", { class: "petit" }, "Générés automatiquement : ils peuvent contenir des erreurs. Ils ne comptent pas dans ta progression."));
          nouveaux.forEach((e, k) => bonus.append(carteExercice(e, `IA ${debut + k + 1}`, { ctx })));
          btn.textContent = "✨ Encore d'autres exercices";
        } catch (err) {
          zoneIA.querySelector(".erreur")?.remove();
          zoneIA.append(h("p", { class: "erreur" }, err.message));
          btn.textContent = "✨ Réessayer";
        }
        btn.disabled = false;
      },
    }, "✨ Créer d'autres exercices avec l'IA");
    zoneIA.append(btn);
  };
  majIA();

  return h("div", {},
    score,
    liste,
    seulementRates ? null : bonus,
    seulementRates ? null : zoneIA,
    suivant ? h("div", { class: "fin-cours" }, h("a", { class: "btn", href: `#/c/${idM}/${suivant.id}` }, `Chapitre suivant : ${suivant.titre} ›`)) : null
  );
}

function zoneQuestion({ ctx, c }) {
  if (!IA.disponible() && F.relais) return carteCode({ apres: router });
  if (!IA.disponible()) {
    return h("div", { class: "carte" },
      h("p", {}, "✨ Pose une question sur ce chapitre et l'IA t'explique autrement."),
      h("p", {}, "Il faut d'abord ajouter une clé Gemini gratuite dans les ", h("a", { href: "#/reglages" }, "Réglages"), " (à faire par un parent).")
    );
  }
  const fil = h("div", { class: "fil" });
  const champ = h("textarea", { class: "champ", rows: 3, maxlength: 2000, placeholder: "Ex. : je ne comprends pas la différence entre… / tu peux me donner un autre exemple ?" });
  const btn = h("button", { class: "btn ia plein", type: "submit" }, "Envoyer");
  const form = h("form", {
    class: "carte",
    onsubmit: async (ev) => {
      ev.preventDefault();
      const q = champ.value.trim();
      if (!q) return;
      fil.append(h("div", { class: "bulle eleve" }, q));
      const att = h("div", { class: "bulle prof" }, h("div", { class: "spinner petit" }));
      fil.append(att);
      champ.value = "";
      btn.disabled = true;
      try {
        const rep = await IA.expliquer({ ...ctx, chapitre: c.titre, cours: c.cours, question: q });
        att.replaceChildren(h("div", { html: bloc(rep) }));
      } catch (err) {
        att.replaceChildren(h("p", { class: "erreur" }, err.message));
      }
      btn.disabled = false;
    },
  }, champ, btn);
  return h("div", {}, fil, form, h("p", { class: "petit" }, "Réponses générées par une IA : elles peuvent contenir des erreurs. En cas de doute, demande à ton professeur."));
}

// ---------- À revoir ----------

function vueRevoir() {
  const p = S.profilActif();
  if (!p) return vueProfils();
  const prog = S.progression(p.id);
  const liste = aRevoir(prog, p.niveau);
  page(
    entete({ titre: "🔁 À revoir", retour: "#/" }),
    h("main", {},
      liste.length
        ? h("div", { class: "chapitres" },
            liste.map((r) => {
              const [, idM, idC] = r.cle.split("/");
              const m = trouverMatiere(p.niveau, idM);
              if (!m) return null;
              return h("a", { class: "chapitre", href: `#/c/${idM}/${idC}/revoir`, style: { "--c": m.couleur } },
                h("span", { class: "c-titre" }, `${m.icone} ${r.titre}`),
                h("span", { class: "c-etat ko" }, `${r.rates} à revoir`)
              );
            })
          )
        : h("p", { class: "vide" }, "Rien à revoir pour l'instant 🎉")
    )
  );
}

// ---------- Réglages ----------

function vueReglages() {
  const actif = S.profilActif();
  const cle = h("input", { class: "champ", type: "password", autocomplete: "off", placeholder: S.reglages.cleGemini() ? "•••••••• (clé enregistrée)" : "Colle ta clé (commence par AIza…)" });
  const msg = h("p", {});
  const sauver = async () => {
    // Retire espaces, retours à la ligne et caractères invisibles ajoutés par le copier-coller
    const k = cle.value.replace(/[\s\u200B-\u200D\u2060\uFEFF]/g, "").replace(/^["'«»]+|["'«»]+$/g, "");
    if (!k) { msg.className = "erreur"; msg.textContent = "Colle d'abord la clé dans le champ."; return; }
    if (!/^[\x21-\x7E]{20,300}$/.test(k)) { msg.className = "erreur"; msg.textContent = "Colle la clé complète, sans autre texte autour."; return; }
    S.reglages.setCleGemini(k);
    IA.oublierModeles();
    cle.value = "";
    msg.className = "";
    msg.textContent = "Test de la clé…";
    try {
      await IA.expliquer({ niveau: "5e", matiere: "test", chapitre: "test", cours: "", question: "Réponds juste OK." });
      msg.className = "succes";
      msg.textContent = "✅ Clé enregistrée et fonctionnelle.";
    } catch (e) {
      msg.className = "erreur";
      msg.textContent = "Clé enregistrée, mais le test a échoué : " + e.message;
    }
    cle.placeholder = "•••••••• (clé enregistrée)";
  };

  page(
    entete({ titre: "Réglages", retour: "#/" }),
    h("main", {},
      h("section", { class: "carte" },
        h("h2", {}, "Élèves"),
        h("div", { class: "lignes" },
          S.profils().map((p) =>
            h("div", { class: "ligne" },
              h("span", {}, `${p.avatar} ${p.prenom} — ${NIVEAUX[p.niveau]?.nom}`),
              h("span", {},
                h("a", { class: "btn petit", href: `#/profil/${p.id}` }, "Modifier"),
                h("button", {
                  class: "btn petit rouge",
                  onclick: (ev) => {
                    const b = ev.currentTarget;
                    if (b.dataset.sur) { S.supprimerProfil(p.id); vueReglages(); }
                    else { b.dataset.sur = "1"; b.textContent = "Confirmer ?"; }
                  },
                }, "Supprimer")
              )
            )
          )
        ),
        h("a", { class: "btn", href: "#/nouveau" }, "+ Ajouter un élève")
      ),
      h("section", { class: "carte" },
        h("h2", {}, "✨ Intelligence artificielle (facultatif)"),
        h("p", {}, "Avec l'IA, l'appli peut créer de nouveaux exercices, corriger les rédactions et répondre aux questions. Sans IA, tous les cours et exercices corrigés restent disponibles."),
        F.relais && !S.reglages.cleGemini()
          ? (S.reglages.acces()
              ? h("div", {},
                  h("p", { class: "succes" }, "✅ L'IA est activée sur cet appareil (code d'invitation des parents)."),
                  h("button", {
                    class: "btn lien",
                    onclick: (ev) => {
                      const b = ev.currentTarget;
                      if (b.dataset.sur) { S.reglages.setAcces(null); IA.oublierModeles(); vueReglages(); }
                      else { b.dataset.sur = "1"; b.textContent = "Confirmer : il faudra un nouveau code pour la réactiver"; }
                    },
                  }, "Désactiver l'IA sur cet appareil"))
              : carteCode({ apres: vueReglages }))
          : null,
        h("h3", {}, F.relais ? "Ou utiliser sa propre clé Gemini (parents)" : "Utiliser une clé Gemini (parents)"),
        h("ol", {},
          h("li", {}, "Va sur ", h("a", { href: "https://aistudio.google.com/apikey", target: "_blank", rel: "noopener noreferrer" }, "aistudio.google.com/apikey"), " avec un compte Google adulte."),
          h("li", {}, "Clique « Create API key », copie la clé."),
          h("li", {}, "Colle-la ici. Elle reste uniquement sur cet appareil.")
        ),
        h("div", { class: "saisie" }, cle, h("button", { class: "btn plein", onclick: sauver }, "Enregistrer")),
        msg,
        S.reglages.cleGemini()
          ? h("button", { class: "btn lien", onclick: () => { S.reglages.setCleGemini(""); IA.oublierModeles(); vueReglages(); } }, "Supprimer la clé de cet appareil")
          : null,
        h("p", { class: "petit" }, "Confidentialité : seuls le chapitre étudié et les réponses ou questions écrites par l'élève sont envoyés à Google (jamais le prénom). Avec une clé gratuite, Google peut utiliser ces échanges pour améliorer ses services : ne pas y écrire d'informations personnelles. La clé utilisée avec le code d'invitation est une clé payante : Google ne s'en sert pas pour entraîner ses modèles.")
      ),
      h("section", { class: "carte" },
        h("h2", {}, "👨‍👩‍👧 Espace parents"),
        h("p", {}, F.relais
          ? "Réservé aux parents, avec le lien parents : bloquer ou réactiver l'IA des appareils des enfants, et historique des connexions de cet appareil."
          : "Historique des connexions de chaque élève sur cet appareil, protégé par un code parent."),
        h("a", { class: "btn", href: "#/parents" }, "🔒 Voir l'historique des connexions")
      ),
      h("section", { class: "carte" },
        h("h2", {}, "📱 Installer l'appli"),
        h("p", {}, "iPhone / iPad : dans Safari, bouton Partager → « Sur l'écran d'accueil »."),
        h("p", {}, "Android : dans Chrome, menu ⋮ → « Installer l'application »."),
        h("p", { class: "petit" }, "Les cours déjà ouverts restent disponibles hors connexion.")
      ),
      h("a", { class: "carte lien-carte", href: "#/apropos" }, "ℹ️ À propos de Revizz", h("span", { class: "petit" }, ` — version du ${VERSION.date}`))
    )
  );
}

// ---------- À propos ----------

function vueAPropos() {
  const nb = Object.values(NIVEAUX).reduce((s, n) => s + n.matieres.length, 0);
  const msg = h("p", { class: "petit" });
  const verifier = async (ev) => {
    const b = ev.currentTarget;
    if (!inscription) { msg.textContent = "Mise à jour automatique indisponible ici (appli non installée depuis Internet)."; return; }
    b.disabled = true;
    msg.textContent = "Recherche…";
    try { await inscription.update(); } catch { msg.textContent = "Pas de connexion : réessaie plus tard."; b.disabled = false; return; }
    // Laisse le temps à une nouvelle version de se télécharger
    setTimeout(() => {
      const nouvelle = inscription.waiting || inscription.installing;
      msg.textContent = nouvelle ? "Une nouvelle version est disponible : regarde en bas de l'écran." : "✅ Tu as la dernière version.";
      if (inscription.waiting) proposerMaj(inscription.waiting);
      b.disabled = false;
    }, 1500);
  };
  page(
    entete({ titre: "À propos", retour: "#/reglages" }),
    h("main", {},
      h("section", { class: "carte" },
        h("h2", {}, "🎓 Revizz"),
        h("p", {}, `Cours et exercices corrigés pour réviser la 6e, la 5e, la 3e et la 1re générale : ${nb} matières, environ ${CHIFFRES.chapitres} chapitres et ${CHIFFRES.exercices} exercices.`),
        h("p", {}, "Les contenus suivent les programmes officiels en vigueur à la rentrée 2026. Ils ont été rédigés et relus avec l'aide d'une IA : en cas de doute, la parole du professeur prime."),
        h("p", {}, `Version du ${VERSION.date} (${VERSION.empreinte})`),
        h("button", { class: "btn", onclick: verifier }, "Rechercher une mise à jour"),
        msg
      ),
      h("section", { class: "carte" },
        h("h2", {}, "🔐 Données et vie privée"),
        h("ul", {},
          h("li", {}, "Pas de compte, pas de publicité, pas de traceur."),
          F.relais && S.reglages.acces()
            ? h("li", {}, "Cet appareil est invité par les parents : la progression et les séances de révision de chaque élève (chapitres, exercices réussis, durée) leur sont envoyées. Jamais les réponses écrites ni les questions posées à l'IA.")
            : h("li", {}, "Les profils, la progression et l'historique des connexions restent uniquement sur cet appareil."),
          F.relais ? h("li", {}, "Pour améliorer l'appli, le site note une visite par jour et les messages d'erreur affichés, sous un identifiant anonyme tiré au hasard.") : null,
          h("li", {}, "L'IA (Gemini, facultative) ne reçoit que le chapitre étudié et ce que l'élève écrit, jamais son prénom.")
        )
      ),
      h("section", { class: "carte" },
        h("h2", {}, "🔄 Mises à jour"),
        h("p", {}, "Quand une nouvelle version est publiée, un bandeau le signale : tu peux mettre à jour tout de suite ou plus tard. La progression est conservée.")
      ),
      h("p", { class: "petit centre-txt" }, "Code source : ", h("a", { href: "https://github.com/boyRebeuss/revisio", target: "_blank", rel: "noopener noreferrer" }, "github.com/boyRebeuss/revisio"))
    )
  );
}

// ---------- Espace parents ----------

let parentOuvert = false;
let codeParents = ""; // code du lien parents vérifié (site Cloudflare), gardé en mémoire le temps de la visite

function vueParents() {
  // Site Cloudflare : l'Espace parents s'ouvre avec le lien parents créé dans /admin (pas de code sur l'appareil)
  const contenu = parentOuvert ? historiqueConnexions() : F.relais ? formLienParents() : !S.parents.aUnCode() ? formCodeParent() : formEntreeParent();
  page(entete({ titre: "Espace parents", retour: "#/reglages" }), h("main", {}, contenu));
}

function formCodeParent({ changer = false } = {}) {
  const c1 = h("input", { class: "champ", type: "password", autocomplete: "new-password", placeholder: "Nouveau code parent" });
  const c2 = h("input", { class: "champ", type: "password", autocomplete: "new-password", placeholder: "Le même code, encore une fois" });
  const msg = h("p", { class: "erreur" });
  const btn = h("button", { class: "btn plein", type: "submit" }, "Enregistrer le code");
  return h("form", {
    class: "carte",
    onsubmit: async (ev) => {
      ev.preventDefault();
      if (btn.disabled) return;
      if (c1.value.trim().length < 4) { msg.textContent = "Choisis un code d'au moins 4 caractères."; return; }
      if (c1.value.trim() !== c2.value.trim()) { msg.textContent = "Les deux codes ne sont pas identiques."; return; }
      btn.disabled = true;
      await S.parents.definir(c1.value);
      parentOuvert = true;
      vueParents();
    },
  },
    h("h2", {}, changer ? "Changer le code parent" : "🔒 Créer le code parent"),
    changer ? null : h("p", {}, "Ce code protège l'historique des connexions. Choisis-en un que les élèves ne connaissent pas."),
    c1, c2, msg, btn
  );
}

function formLienParents() {
  const champ = h("input", { class: "champ", type: "password", autocomplete: "off", placeholder: "Code parents (PAR-…)" });
  const msg = h("p", { class: "erreur" });
  const btn = h("button", { class: "btn plein", type: "submit" }, "Ouvrir");
  const ouvrir = async (code) => {
    btn.disabled = true;
    msg.textContent = "";
    const err = await F.verifierParents(code);
    if (!err) { parentOuvert = true; codeParents = code; vueParents(); return; }
    btn.disabled = false;
    msg.textContent = err;
    champ.select();
  };
  const recu = F.codeParentsRecu();
  if (recu) { btn.disabled = true; msg.textContent = ""; setTimeout(() => ouvrir(recu)); }
  return h("form", {
    class: "carte",
    onsubmit: (ev) => {
      ev.preventDefault();
      if (champ.value.trim() && !btn.disabled) ouvrir(champ.value);
    },
  },
    h("h2", {}, "🔒 Réservé aux parents"),
    h("p", {}, recu ? "Vérification du lien parents…" : "Ouvrez sur cet appareil le lien parents reçu (créé dans la page d'administration), ou tapez son code :"),
    h("div", { class: "saisie" }, champ, btn),
    msg
  );
}

function formEntreeParent() {
  const champ = h("input", { class: "champ", type: "password", autocomplete: "current-password", placeholder: "Code parent" });
  const msg = h("p", { class: "erreur" });
  const btn = h("button", { class: "btn plein", type: "submit" }, "Ouvrir");
  return h("div", {},
    h("form", {
      class: "carte",
      onsubmit: async (ev) => {
        ev.preventDefault();
        if (!champ.value || btn.disabled) return;
        btn.disabled = true;
        if (await S.parents.verifier(champ.value)) { parentOuvert = true; vueParents(); return; }
        btn.disabled = false;
        msg.textContent = "Code incorrect.";
        champ.select();
      },
    },
      h("h2", {}, "🔒 Réservé aux parents"),
      h("div", { class: "saisie" }, champ, btn),
      msg
    ),
    h("button", {
      class: "btn lien",
      onclick: (ev) => {
        const b = ev.currentTarget;
        if (b.dataset.sur) { S.parents.oublier(); vueParents(); }
        else { b.dataset.sur = "1"; b.textContent = "Confirmer : l'historique sera effacé et un nouveau code créé"; }
      },
    }, "Code oublié ?")
  );
}

const heure = (t) => new Date(t).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }).replace(":", " h ");
const jour = (t) => new Date(t).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

function duree(ms) {
  const min = Math.round(ms / 60000);
  if (min < 1) return "moins d'une minute";
  return min < 60 ? `${min} min` : `${Math.floor(min / 60)} h ${String(min % 60).padStart(2, "0")}`;
}

// IA des appareils des enfants, reliés au lien parents : bloquer ou réactiver, même depuis un autre appareil
function controleIA() {
  const corps = h("div", {}, h("p", { class: "petit" }, "Chargement…"));
  const charger = () => F.appelParents(codeParents, { action: "appareils" }).then(({ appareils }) => remplacer(corps,
    appareils.length ? null : h("p", { class: "vide" }, "Aucun appareil n'a encore activé l'IA avec le code relié à ce lien."),
    appareils.map((a) => {
      const btn = h("button", { class: a.bloque ? "btn plein" : "btn rouge" }, a.bloque ? "Réactiver l'IA" : "Bloquer l'IA");
      btn.onclick = async () => {
        btn.disabled = true;
        try { await F.appelParents(codeParents, { action: "ia", repere: a.repere, bloque: !a.bloque }); charger(); }
        catch (e) { btn.disabled = false; btn.textContent = e.message; }
      };
      const qui = a.eleves.length ? a.eleves.join(", ") : `code « ${a.code} »`;
      return h("div", { class: "ligne appareil-ia" },
        h("div", {},
          h("div", {}, `${a.bloque ? "⏸️" : "✅"} ${qui}`),
          h("div", { class: "petit" }, [a.plateforme, `IA activée le ${new Date(a.active).toLocaleDateString("fr-FR")}`,
            a.dernier ? `vu le ${new Date(a.dernier + "T12:00:00").toLocaleDateString("fr-FR")}` : ""].filter(Boolean).join(" · "))
        ),
        btn
      );
    })
  )).catch((e) => remplacer(corps, h("p", { class: "erreur" }, e.message)));
  charger();
  return h("section", { class: "carte" },
    h("h2", {}, "🤖 IA des appareils de vos enfants"),
    h("p", { class: "petit" }, "Bloquer met l'IA en pause sur l'appareil, aussitôt et même s'il n'est pas devant vous ; les cours et exercices restent disponibles."),
    corps
  );
}

function historiqueConnexions() {
  const hist = S.historique().slice().reverse();
  const parJour = new Map();
  for (const e of hist) {
    const j = jour(e.d);
    if (!parJour.has(j)) parJour.set(j, []);
    parJour.get(j).push(e);
  }
  // Appareil d'un parent (aucun profil d'élève) : pas d'historique à montrer
  const sansEleve = !S.profils().length;
  return h("div", {},
    F.relais && codeParents ? controleIA() : null,
    sansEleve ? null : h("section", { class: "carte" },
      h("h2", {}, "🕒 Historique des connexions"),
      h("p", { class: "petit" }, "Sur cet appareil uniquement. Une connexion se termine après 30 minutes sans activité."),
      hist.length ? null : h("p", { class: "vide" }, "Aucune connexion enregistrée pour l'instant."),
      [...parJour].map(([j, liste]) => h("div", { class: "jour" },
        h("h3", {}, j),
        h("div", { class: "lignes" },
          liste.map((e) => e.efface
            ? h("div", { class: "ligne petit" }, `${heure(e.d)} — historique effacé (${e.efface})`)
            : h("div", { class: "ligne" },
                h("span", {}, `${e.a} ${e.n}`),
                h("span", { class: "petit" }, `${heure(e.d)} → ${heure(e.f)} · ${duree(e.f - e.d)}` + (e.x ? ` · ${e.x} exercice${e.x > 1 ? "s" : ""}` : ""))
              ))
        )
      ))
    ),
    h("section", { class: "carte" },
      h("h2", {}, "Réglages parents"),
      h("div", { class: "actions-parents" },
        h("button", { class: "btn", onclick: () => { parentOuvert = false; codeParents = ""; aller(S.profilActif() ? "#/reglages" : "#/"); } }, "🔒 Verrouiller"),
        F.relais ? null : h("button", { class: "btn", onclick: (ev) => ev.currentTarget.replaceWith(formCodeParent({ changer: true })) }, "Changer le code parent"),
        sansEleve ? null : h("button", {
          class: "btn rouge",
          onclick: (ev) => {
            const b = ev.currentTarget;
            if (b.dataset.sur) { S.effacerHistorique(); vueParents(); }
            else { b.dataset.sur = "1"; b.textContent = "Confirmer l'effacement ?"; }
          },
        }, "Effacer l'historique")
      )
    )
  );
}

// ---------- Mise à jour ----------

let inscription = null;
let majDemandee = false;

// Bandeau discret : l'élève choisit le moment (la nouvelle version s'installe
// aussi d'elle-même à la prochaine ouverture de l'appli, une fois fermée)
function proposerMaj(sw) {
  document.querySelector(".maj")?.remove();
  const bandeau = h("div", { class: "maj", role: "status" },
    h("span", {}, "✨ Une nouvelle version de Revizz est disponible."),
    h("span", { class: "maj-btns" },
      h("button", { class: "btn petit", onclick: () => bandeau.remove() }, "Plus tard"),
      h("button", {
        class: "btn plein petit",
        onclick: (ev) => {
          ev.currentTarget.disabled = true;
          ev.currentTarget.textContent = "Mise à jour…";
          majDemandee = true;
          sw.postMessage("mettre-a-jour");
        },
      }, "Mettre à jour")
    )
  );
  document.body.append(bandeau);
}

function vueNouveauProfil() {
  page(entete({ titre: "Nouvel élève", retour: "#/reglages" }), h("main", {}, formulaireProfil(null, { depuisReglages: true })));
}

function vueModifierProfil(id) {
  const p = S.profils().find((x) => x.id === id);
  if (!p) return aller("#/reglages");
  page(entete({ titre: "Modifier", retour: "#/reglages" }), h("main", {}, formulaireProfil(p)));
}

// ---------- Routeur ----------

function router() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  const [r, a, b, c] = parts;
  if (r !== "parents") { parentOuvert = false; codeParents = ""; }
  // L'Espace parents s'ouvre aussi sur l'appareil d'un parent, sans profil d'élève
  if (!S.profilActif() && r !== "profils" && r !== "apropos" && r !== "parents") return vueProfils();
  S.noterActivite();
  switch (r) {
    case undefined: return vueAccueil();
    case "profils": return vueProfils();
    case "profil": return vueModifierProfil(a);
    case "nouveau": return vueNouveauProfil();
    case "m": return vueMatiere(a);
    case "c": return vueChapitre(a, b, ["cours", "exercices", "revoir", "ia"].includes(c) ? c : "cours");
    case "revoir": return vueRevoir();
    case "reglages": return vueReglages();
    case "apropos": return vueAPropos();
    case "parents": return vueParents();
    default: return vueAccueil();
  }
}

window.addEventListener("hashchange", router);
router();
J.demarrer();

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  S.noterActivite();
  inscription?.update().catch(() => {});
});

if ("serviceWorker" in navigator && location.protocol === "https:") {
  navigator.serviceWorker.register("./sw.js").then((reg) => {
    inscription = reg;
    // Nouvelle version déjà téléchargée lors d'une ouverture précédente
    if (reg.waiting && navigator.serviceWorker.controller) proposerMaj(reg.waiting);
    reg.addEventListener("updatefound", () => {
      const sw = reg.installing;
      sw?.addEventListener("statechange", () => {
        if (sw.state === "installed" && navigator.serviceWorker.controller) proposerMaj(sw);
      });
    });
  }).catch(() => {});
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (majDemandee) location.reload();
  });
}
