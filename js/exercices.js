// Affichage et correction des exercices (qcm, vf, saisie, redaction).
import { h, remplacer } from "./dom.js";
import { bloc, inline } from "./md.js";
import * as IA from "./gemini.js";
import { reponseJuste } from "./correcteur.js";
import * as J from "./journal.js";

export { normaliser, reponseJuste } from "./correcteur.js";

// Vérifie un exercice (utile pour ceux produits par l'IA).
export function exerciceValide(e) {
  const txt = (v) => typeof v === "string" && v.trim().length > 0;
  if (!e || !txt(e.question)) return false;
  switch (e.type) {
    case "qcm":
      return Array.isArray(e.choix) && e.choix.length >= 2 && e.choix.every(txt) &&
        Number.isInteger(e.reponse) && e.reponse >= 0 && e.reponse < e.choix.length;
    case "vf":
      return typeof e.reponse === "boolean";
    case "saisie":
      return Array.isArray(e.reponses) && e.reponses.length > 0 && e.reponses.every(txt);
    case "redaction":
      return txt(e.corrige);
    default:
      return false;
  }
}

function melanger(t) {
  for (let i = t.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [t[i], t[j]] = [t[j], t[i]];
  }
  return t;
}

const LIBELLES = { qcm: "QCM", vf: "Vrai ou faux", saisie: "Réponse courte", redaction: "À rédiger" };

// ctx : { niveau, matiere } pour la correction par l'IA.
// precedent : { ok } si l'exercice a déjà été fait.
// support : texte commun à une série d'exercices (champ `texte`), ouvert ou replié.
// ref : « niveau/matière/chapitre#n » pour les exercices du contenu (pas ceux de l'IA) : résultats et signalements.
export function carteExercice(e, numero, { ctx, precedent, onResultat, support, supportOuvert = false, ref }) {
  const retour = h("div", { class: "retour", "aria-live": "polite" });
  const signal = h("div", { class: "signal" });
  const peutSignaler = ref && J.signalementPossible();
  let derniereSaisie = "";
  const ouvrirSignalement = () => {
    if (!signal.firstChild) signal.append(formulaireSignalement(e, ref, () => derniereSaisie, () => signal.replaceChildren()));
    signal.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };
  const carte = h("article", { class: "exo" + (precedent ? (precedent.ok ? " deja-ok" : " deja-ko") : "") },
    h("div", { class: "exo-tete" },
      h("span", { class: "exo-num" }, `Exercice ${numero}`),
      h("span", { class: "exo-type" }, LIBELLES[e.type] || ""),
      precedent ? h("span", { class: "exo-etat" }, precedent.ok ? "✓ réussi" : "✗ à revoir") : null,
      peutSignaler ? h("button", { class: "drapeau", title: "Signaler une erreur dans cet exercice", "aria-label": "Signaler une erreur dans cet exercice", onclick: ouvrirSignalement }, "🚩") : null
    ),
    support ? h("details", { class: "support", open: supportOuvert },
      h("summary", {}, supportOuvert ? "📄 Le texte" : "📄 Relire le texte"),
      h("div", { html: bloc(support) })
    ) : null,
    h("div", { class: "exo-question", html: bloc(e.question) })
  );

  let fini = false, premierEssai = true;
  const terminer = (ok, detail) => {
    if (fini) return;
    fini = true;
    // Seul le premier essai de chaque affichage compte dans les statistiques (pas « Refaire » après avoir vu la réponse)
    if (premierEssai && ref) J.noterResultat(ref, ok);
    premierEssai = false;
    carte.classList.remove("deja-ok", "deja-ko");
    carte.classList.add(ok ? "ok" : "ko");
    remplacer(retour,
      h("div", { class: "verdict" }, ok ? "✅ Bravo !" : "❌ Pas tout à fait."),
      detail || null,
      e.explication ? h("div", { class: "explication", html: bloc(e.explication) }) : null,
      h("div", { class: "fin-exo" },
        h("button", { class: "btn lien", onclick: recommencer }, "↺ Refaire"),
        peutSignaler ? h("button", { class: "btn lien doux", onclick: ouvrirSignalement }, "🚩 Signaler une erreur") : null)
    );
    onResultat?.(ok);
  };

  const zone = h("div", { class: "exo-zone" });
  const recommencer = () => {
    fini = false;
    carte.classList.remove("ok", "ko");
    retour.replaceChildren();
    construire();
  };

  function construire() {
    zone.replaceChildren();
    if (e.type === "qcm" || e.type === "vf") {
      // Les propositions de QCM sont mélangées à chaque affichage
      const ordre = e.type === "qcm" ? melanger(e.choix.map((_, i) => i)) : [0, 1];
      const choix = e.type === "qcm" ? ordre.map((i) => e.choix[i]) : ["Vrai", "Faux"];
      const bonne = e.type === "qcm" ? ordre.indexOf(e.reponse) : e.reponse ? 0 : 1;
      const boutons = choix.map((c, i) =>
        h("button", {
          class: "choix",
          html: inline(c),
          onclick: () => {
            if (fini) return;
            boutons.forEach((b, j) => {
              b.disabled = true;
              if (j === bonne) b.classList.add("bon");
            });
            if (i !== bonne) boutons[i].classList.add("mauvais");
            terminer(i === bonne);
          },
        })
      );
      zone.append(h("div", { class: e.type === "vf" ? "choix-liste vf" : "choix-liste" }, boutons));
    } else if (e.type === "saisie") {
      const champ = h("input", { type: "text", class: "champ", placeholder: "Ta réponse", autocomplete: "off", autocapitalize: "off", spellcheck: "false" });
      const valider = () => {
        if (fini || !champ.value.trim()) return;
        champ.disabled = true;
        derniereSaisie = champ.value.trim();
        const ok = reponseJuste(champ.value, e.reponses, ctx?.langue || false, e.question);
        terminer(ok, ok ? null : h("p", { class: "attendu" },
          "Réponse attendue : ", h("strong", {}, e.reponses[0]),
          // Le correcteur ne connaît pas toutes les écritures possibles : l'élève peut le corriger
          h("button", {
            class: "btn petit contester",
            onclick: (ev) => {
              carte.classList.replace("ko", "ok");
              retour.querySelector(".verdict").textContent = "✅ D'accord, ta réponse est comptée juste.";
              ev.currentTarget.remove();
              if (ref) J.noterContestation(ref);
              onResultat?.(true);
            },
          }, "Ma réponse était juste")
        ));
      };
      champ.addEventListener("keydown", (ev) => ev.key === "Enter" && valider());
      zone.append(h("div", { class: "saisie" }, champ, h("button", { class: "btn", onclick: valider }, "Valider")));
      if (ctx?.accents) zone.append(clavierAccents(champ, ctx.accents));
    } else if (e.type === "redaction") {
      const texte = h("textarea", { class: "champ", rows: 6, placeholder: "Rédige ta réponse ici (au brouillon si tu préfères), puis compare au corrigé." });
      const actions = h("div", { class: "actions" });
      const corrige = h("div", { class: "corrige" });
      const afficherCorrige = () => {
        corrige.replaceChildren(h("h4", {}, "Corrigé"), h("div", { html: bloc(e.corrige) }));
        actions.replaceChildren(
          h("span", { class: "question-auto" }, "As-tu réussi ?"),
          h("button", { class: "btn vert", onclick: () => { actions.replaceChildren(); terminer(true); } }, "Oui ✓"),
          h("button", { class: "btn rouge", onclick: () => { actions.replaceChildren(); terminer(false); } }, "Pas encore ✗")
        );
      };
      const boutonIA = IA.disponible()
        ? h("button", {
            class: "btn ia",
            onclick: async (ev) => {
              if (!texte.value.trim() || texte.value.trim().length < 15) {
                corrige.replaceChildren(h("p", { class: "erreur" }, "Écris d'abord une vraie réponse pour la faire corriger."));
                return;
              }
              ev.target.disabled = true;
              ev.target.textContent = "Correction en cours…";
              try {
                const r = await IA.corrigerRedaction({ ...ctx, question: e.question, corrige: e.corrige, reponse: texte.value });
                const note = h("div", { class: "note-ia" },
                  h("div", { class: "note" }, `${r.note}/20`),
                  h("p", { html: inline(r.appreciation) }),
                  r.points_forts.length ? h("div", {}, h("strong", {}, "Points forts"), h("ul", {}, r.points_forts.map((x) => h("li", { html: inline(x) })))) : null,
                  r.a_ameliorer.length ? h("div", {}, h("strong", {}, "À améliorer"), h("ul", {}, r.a_ameliorer.map((x) => h("li", { html: inline(x) })))) : null,
                  h("p", { class: "petit" }, "Correction automatique : elle peut se tromper, compare aussi avec le corrigé.")
                );
                texte.disabled = true;
                terminer(r.note >= 10, h("div", {}, note, h("h4", {}, "Corrigé"), h("div", { html: bloc(e.corrige) })));
                corrige.replaceChildren();
                actions.replaceChildren();
              } catch (err) {
                ev.target.disabled = false;
                ev.target.textContent = "✨ Faire corriger par l'IA";
                corrige.replaceChildren(h("p", { class: "erreur" }, err.message));
              }
            },
          }, "✨ Faire corriger par l'IA")
        : null;
      actions.append(h("button", { class: "btn", onclick: afficherCorrige }, "Voir le corrigé"));
      if (boutonIA) actions.append(boutonIA);
      zone.append(texte, actions, corrige);
    }
  }

  construire();
  carte.append(zone, retour, signal);
  return carte;
}

const MOTIFS = [
  ["question", "La question contient une erreur"],
  ["correction", "La correction ou l'explication est fausse"],
  ["refusee", "Ma réponse était juste mais elle a été refusée"],
  ["pas-clair", "Ce n'est pas clair"],
  ["autre", "Autre chose"],
];

// Petit formulaire « Signaler une erreur » : motif, quelques mots, et la réponse tapée si l'élève choisit de la joindre
function formulaireSignalement(e, ref, saisie, fermer) {
  let motif = "";
  const message = h("p", { class: "petit" });
  const mot = h("textarea", { class: "champ", rows: 2, maxlength: 300, placeholder: "Explique en quelques mots (facultatif). N'écris pas ton nom." });
  const joindre = h("label", { class: "joindre", hidden: true }, h("input", { type: "checkbox", checked: true }), h("span", {}));
  const motifs = MOTIFS.filter(([m]) => m !== "refusee" || e.type === "saisie").map(([m, lib]) =>
    h("button", {
      type: "button", class: "choix",
      onclick: (ev) => {
        motif = m;
        motifs.forEach((b) => b.classList.toggle("bon", b === ev.currentTarget));
        const s = saisie();
        joindre.hidden = !(m === "refusee" && s);
        joindre.querySelector("span").textContent = ` Joindre ma réponse : « ${s} »`;
      },
    }, lib));
  const envoyer = h("button", {
    class: "btn plein",
    onclick: async () => {
      if (!motif) { message.textContent = "Choisis d'abord ce qui ne va pas."; return; }
      envoyer.disabled = true;
      message.textContent = "Envoi…";
      try {
        await J.signalerExercice({
          ref, motif, commentaire: mot.value.trim(),
          question: e.question.replace(/\s+/g, " ").slice(0, 300),
          reponse: !joindre.hidden && joindre.querySelector("input").checked ? saisie() : "",
        });
        boite.replaceChildren(h("p", { class: "merci" }, "Merci ! Ton signalement est transmis : l'exercice sera vérifié."));
      } catch (err) {
        envoyer.disabled = false;
        message.textContent = err.message;
      }
    },
  }, "Envoyer");
  const boite = h("div", { class: "signalement" },
    h("h4", {}, "🚩 Qu'est-ce qui ne va pas ?"),
    h("div", { class: "choix-liste" }, motifs),
    mot, joindre, message,
    h("div", { class: "actions" }, envoyer, h("button", { class: "btn", onclick: fermer }, "Annuler"))
  );
  return boite;
}

// Boutons qui insèrent une lettre accentuée là où se trouve le curseur
function clavierAccents(champ, lettres) {
  return h("div", { class: "accents", "aria-label": "Lettres accentuées" },
    [...lettres].map((l) => h("button", {
      type: "button",
      class: "accent",
      // mousedown sans effet : le champ garde le curseur (et le clavier du téléphone reste ouvert)
      onmousedown: (ev) => ev.preventDefault(),
      onclick: () => {
        if (champ.disabled) return;
        const d = champ.selectionStart ?? champ.value.length, f = champ.selectionEnd ?? d;
        champ.setRangeText(l, d, f, "end");
        champ.focus();
      },
    }, l))
  );
}
