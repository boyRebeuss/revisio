// Affichage et correction des exercices (qcm, vf, saisie, redaction).
import { h } from "./dom.js";
import { bloc, inline } from "./md.js";
import * as IA from "./gemini.js";

// accents = true : les accents comptent (orthographe en français)
export function normaliser(s, accents = false) {
  let t = String(s ?? "").normalize("NFD");
  if (!accents) t = t.replace(/[̀-ͯ]/g, "");
  t = t
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[−–—]/g, "-")
    .replace(/(\d),(\d)/g, "$1.$2")
    .replace(/\s+/g, " ")
    .trim();
  // La ponctuation d'ouverture/fermeture est ignorée, sauf si elle est la réponse
  const nu = t.replace(/^[¿¡]+/, "").replace(/[\s.!?;:]+$/, "");
  return nu || t;
}

// accents = true (français) : si la réponse attendue porte des accents, ils comptent.
export function reponseJuste(saisie, attendues, accents = false) {
  const nombre = (x) => (/^-?\d+(\.\d+)?$/.test(x) ? parseFloat(x) : NaN);
  return attendues.some((r) => {
    const strict = accents && /[\u0300-\u036f]/.test(String(r).normalize("NFD"));
    const a = normaliser(saisie, strict);
    if (!a) return false;
    const b = normaliser(r, strict);
    if (a === b || a.replace(/ /g, "") === b.replace(/ /g, "")) return true;
    const na = nombre(a.replace(/ /g, "")), nb = nombre(b.replace(/ /g, ""));
    return !isNaN(na) && !isNaN(nb) && Math.abs(na - nb) < 1e-9;
  });
}

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
export function carteExercice(e, numero, { ctx, precedent, onResultat }) {
  const retour = h("div", { class: "retour", "aria-live": "polite" });
  const carte = h("article", { class: "exo" + (precedent ? (precedent.ok ? " deja-ok" : " deja-ko") : "") },
    h("div", { class: "exo-tete" },
      h("span", { class: "exo-num" }, `Exercice ${numero}`),
      h("span", { class: "exo-type" }, LIBELLES[e.type] || ""),
      precedent ? h("span", { class: "exo-etat" }, precedent.ok ? "✓ réussi" : "✗ à revoir") : null
    ),
    h("div", { class: "exo-question", html: bloc(e.question) })
  );

  let fini = false;
  const terminer = (ok, detail) => {
    if (fini) return;
    fini = true;
    carte.classList.remove("deja-ok", "deja-ko");
    carte.classList.add(ok ? "ok" : "ko");
    retour.replaceChildren(
      h("div", { class: "verdict" }, ok ? "✅ Bravo !" : "❌ Pas tout à fait."),
      detail || null,
      e.explication ? h("div", { class: "explication", html: bloc(e.explication) }) : null,
      h("button", { class: "btn lien", onclick: recommencer }, "↺ Refaire")
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
        const ok = reponseJuste(champ.value, e.reponses, !!ctx?.accents);
        terminer(ok, ok ? null : h("p", { class: "attendu" }, "Réponse attendue : ", h("strong", {}, e.reponses[0])));
      };
      champ.addEventListener("keydown", (ev) => ev.key === "Enter" && valider());
      zone.append(h("div", { class: "saisie" }, champ, h("button", { class: "btn", onclick: valider }, "Valider")));
    } else if (e.type === "redaction") {
      const texte = h("textarea", { class: "champ", rows: 6, placeholder: "Rédige ta réponse ici (au brouillon si tu préfères), puis compare au corrigé." });
      const actions = h("div", { class: "actions" });
      const corrige = h("div", { class: "corrige" });
      const afficherCorrige = () => {
        corrige.replaceChildren(h("h4", {}, "Corrigé"), h("div", { html: bloc(e.corrige) }));
        actions.replaceChildren(
          h("span", { class: "question-auto" }, "As-tu réussi ?"),
          h("button", { class: "btn vert", onclick: () => terminer(true) }, "Oui ✓"),
          h("button", { class: "btn rouge", onclick: () => terminer(false) }, "Pas encore ✗")
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
      actions.append(h("button", { class: "btn", onclick: afficherCorrige }, "Voir le corrigé"), boutonIA);
      zone.append(texte, actions, corrige);
    }
  }

  construire();
  carte.append(zone, retour);
  return carte;
}
