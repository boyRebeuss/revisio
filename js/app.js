import { NIVEAUX, matiere as trouverMatiere } from "../content/catalogue.js";
import { h } from "./dom.js";
import { bloc } from "./md.js";
import * as S from "./store.js";
import * as IA from "./gemini.js";
import { carteExercice, exerciceValide } from "./exercices.js";

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

function aller(hash) {
  location.hash = hash;
}

function entete({ titre, retour, couleur, droite }) {
  return h("header", { class: "barre", style: couleur ? { "--c": couleur } : null },
    retour ? h("a", { class: "retour-btn", href: retour, "aria-label": "Retour" }, "‹") : h("span", { class: "logo" }, "🎓"),
    h("h1", {}, titre),
    droite || null
  );
}

function page(...enfants) {
  app.replaceChildren(...enfants);
  window.scrollTo(0, 0);
}

function chargement() {
  page(h("div", { class: "centre" }, h("div", { class: "spinner" })));
}

function erreur(msg) {
  page(entete({ titre: "Oups", retour: "#/" }), h("main", {}, h("p", { class: "erreur" }, msg)));
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

function formulaireProfil(existant) {
  let avatar = existant?.avatar || S.AVATARS[Math.floor(Math.random() * S.AVATARS.length)];
  const prenom = h("input", { class: "champ", type: "text", maxlength: 20, placeholder: "Prénom", value: existant?.prenom || "" });
  const niveau = h("select", { class: "champ" },
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
  return h("form", {
    class: "carte form",
    onsubmit: (ev) => {
      ev.preventDefault();
      const p = prenom.value.trim();
      if (!p) { msg.textContent = "Écris un prénom."; return; }
      if (existant) S.modifierProfil(existant.id, { prenom: p, niveau: niveau.value, avatar });
      else S.ajouterProfil(p, niveau.value, avatar);
      aller(existant ? "#/reglages" : "#/");
    },
  },
    h("h2", {}, existant ? "Modifier le profil" : "Nouveau profil"),
    prenom, niveau, avatars, msg,
    h("button", { class: "btn plein", type: "submit" }, existant ? "Enregistrer" : "Créer le profil")
  );
}

// ---------- Accueil ----------

function statsMatiere(prog, id) {
  let vus = 0, faits = 0, reussis = 0;
  for (const [cle, c] of Object.entries(prog)) {
    if (!cle.startsWith(id + "/")) continue;
    if (c.vu) vus++;
    for (const r of Object.values(c.ex || {})) { faits++; if (r.ok) reussis++; }
  }
  return { vus, faits, reussis };
}

function aRevoir(prog) {
  const out = [];
  for (const [cle, c] of Object.entries(prog)) {
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
  const revoir = aRevoir(prog);
  page(
    entete({
      titre: "Révisio",
      droite: h("div", { class: "droite" },
        h("a", { class: "chip", href: "#/profils", title: "Changer d'élève" }, `${p.avatar} ${p.prenom}`),
        h("a", { class: "icone-btn", href: "#/reglages", "aria-label": "Réglages" }, "⚙︎")
      ),
    }),
    h("main", {},
      h("p", { class: "salut" }, `Salut ${p.prenom} ! `, h("span", { class: "niveau-txt" }, niv.long)),
      revoir.length ? h("a", { class: "carte revoir", href: "#/revoir" },
        h("span", { class: "gros" }, "🔁"),
        h("span", {}, h("strong", {}, "À revoir"), h("br"), `${revoir.reduce((s, r) => s + r.rates, 0)} exercice(s) à retravailler`)
      ) : null,
      h("div", { class: "grille" },
        niv.matieres.map((m) => {
          const st = statsMatiere(prog, m.id);
          return h("a", { class: "matiere", href: `#/m/${m.id}`, style: { "--c": m.couleur } },
            h("span", { class: "m-icone" }, m.icone),
            h("span", { class: "m-nom" }, m.nom),
            h("span", { class: "m-stat" },
              st.faits ? `${st.reussis}/${st.faits} réussis` : st.vus ? `${st.vus} chapitre(s) lus` : "À découvrir")
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
  if (!m) return aller("#/");
  chargement();
  let data;
  try { data = await charger(p.niveau, id); } catch { return erreur("Cette matière n'est pas encore disponible ou la connexion a échoué."); }
  const prog = S.progression(p.id);
  const groupes = [];
  for (const c of data.chapitres) {
    const g = c.theme || "";
    if (!groupes.length || groupes.at(-1).theme !== g) groupes.push({ theme: g, chapitres: [] });
    groupes.at(-1).chapitres.push(c);
  }
  page(
    entete({ titre: `${m.icone} ${m.nom}`, retour: "#/", couleur: m.couleur }),
    h("main", { style: { "--c": m.couleur } },
      groupes.map((g) => h("section", {},
        g.theme ? h("h2", { class: "theme" }, g.theme) : null,
        h("div", { class: "chapitres" },
          g.chapitres.map((c) => {
            const r = S.resumeChapitre(prog, `${id}/${c.id}`, c.exercices.length);
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
  if (!m) return aller("#/");
  chargement();
  let data;
  try { data = await charger(p.niveau, idM); } catch { return erreur("Impossible de charger ce chapitre."); }
  const idx = data.chapitres.findIndex((c) => c.id === idC);
  const c = data.chapitres[idx];
  if (!c) return aller(`#/m/${idM}`);
  const cle = `${idM}/${c.id}`;
  const ctx = { niveau: NIVEAUX[p.niveau].long, matiere: m.nom };
  const suivant = data.chapitres[idx + 1];

  const onglets = [
    ["cours", "📘 Cours"],
    ["exercices", "✏️ Exercices"],
    ["revoir", "🔁 À revoir"],
    ["ia", "✨ Demander"],
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
    entete({ titre: c.titre, retour: `#/m/${idM}`, couleur: m.couleur }),
    h("main", { style: { "--c": m.couleur } }, nav, corps)
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
  const liste = h("div", { class: "exos" },
    indices.map((i) =>
      carteExercice(c.exercices[i], i + 1, {
        ctx,
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
  const liste = aRevoir(prog);
  page(
    entete({ titre: "🔁 À revoir", retour: "#/" }),
    h("main", {},
      liste.length
        ? h("div", { class: "chapitres" },
            liste.map((r) => {
              const [idM, idC] = r.cle.split("/");
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
    const k = cle.value.trim();
    if (!/^[A-Za-z0-9_-]{30,60}$/.test(k)) { msg.className = "erreur"; msg.textContent = "Cette clé ne semble pas valide."; return; }
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
        h("a", { class: "btn", href: "#/profils" }, "+ Ajouter un élève")
      ),
      h("section", { class: "carte" },
        h("h2", {}, "✨ Intelligence artificielle (facultatif)"),
        h("p", {}, "Avec une clé Gemini gratuite, l'appli peut créer de nouveaux exercices, corriger les rédactions et répondre aux questions. Sans clé, tous les cours et exercices corrigés restent disponibles."),
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
        h("p", { class: "petit" }, "Confidentialité : seuls le chapitre étudié et les réponses ou questions écrites par l'élève sont envoyés à Google (jamais le prénom). Avec une clé gratuite, Google peut utiliser ces échanges pour améliorer ses services : ne pas y écrire d'informations personnelles.")
      ),
      h("section", { class: "carte" },
        h("h2", {}, "📱 Installer l'appli"),
        h("p", {}, "iPhone / iPad : dans Safari, bouton Partager → « Sur l'écran d'accueil »."),
        h("p", {}, "Android : dans Chrome, menu ⋮ → « Installer l'application »."),
        h("p", { class: "petit" }, "Les cours déjà ouverts restent disponibles hors connexion.")
      ),
      h("p", { class: "petit centre-txt" }, "Révisio — contenus conformes aux programmes officiels, rédigés avec l'aide d'une IA : en cas de doute, la parole du professeur prime.")
    )
  );
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
  if (!S.profilActif() && r !== "profils") return vueProfils();
  switch (r) {
    case undefined: return vueAccueil();
    case "profils": return vueProfils();
    case "profil": return vueModifierProfil(a);
    case "m": return vueMatiere(a);
    case "c": return vueChapitre(a, b, ["cours", "exercices", "revoir", "ia"].includes(c) ? c : "cours");
    case "revoir": return vueRevoir();
    case "reglages": return vueReglages();
    default: return vueAccueil();
  }
}

window.addEventListener("hashchange", router);
router();

if ("serviceWorker" in navigator && location.protocol === "https:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
