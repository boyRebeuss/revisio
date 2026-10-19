// Profils et progression, stockés dans le navigateur (localStorage).
const P = "revisio.";

function lire(cle, defaut) {
  try {
    const v = localStorage.getItem(P + cle);
    return v == null ? defaut : JSON.parse(v);
  } catch {
    return defaut;
  }
}
function ecrire(cle, v) {
  localStorage.setItem(P + cle, JSON.stringify(v));
}

export const AVATARS = ["🦊", "🐼", "🦁", "🐸", "🐙", "🦄", "🐯", "🐧", "🐨", "🦉", "🐬", "🚀"];

export function profils() {
  return lire("profils", []);
}

export function profilActif() {
  const id = lire("actif", null);
  return profils().find((p) => p.id === id) || null;
}

export function choisirProfil(id) {
  ecrire("actif", id);
}

export function ajouterProfil(prenom, niveau, avatar, activer = true) {
  const p = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), prenom, niveau, avatar };
  ecrire("profils", [...profils(), p]);
  if (activer) ecrire("actif", p.id);
  return p;
}

export function modifierProfil(id, champs) {
  ecrire("profils", profils().map((p) => (p.id === id ? { ...p, ...champs } : p)));
}

export function supprimerProfil(id) {
  ecrire("profils", profils().filter((p) => p.id !== id));
  localStorage.removeItem(P + "prog." + id);
  if (lire("actif", null) === id) localStorage.removeItem(P + "actif");
}

// Progression : { "<niveau>/<matiere>/<chapitre>": { titre, vu, ex: { "<n>": { ok, d } } } }
// (le niveau est dans la clé : changer de classe ne mélange pas les résultats)
export function progression(profilId) {
  const prog = lire("prog." + profilId, {});
  // Anciennes clés « matiere/chapitre » : rattachées au niveau actuel du profil
  const anciennes = Object.keys(prog).filter((k) => k.split("/").length === 2);
  if (anciennes.length) {
    const niveau = profils().find((p) => p.id === profilId)?.niveau;
    if (niveau) {
      for (const k of anciennes) {
        prog[`${niveau}/${k}`] = prog[`${niveau}/${k}`] || prog[k];
        delete prog[k];
      }
      ecrire("prog." + profilId, prog);
    }
  }
  return prog;
}

function majChapitre(profilId, cle, f) {
  const prog = progression(profilId);
  prog[cle] = f(prog[cle] || { ex: {} });
  ecrire("prog." + profilId, prog);
}

export function marquerVu(profilId, cle, titre) {
  majChapitre(profilId, cle, (c) => ({ ...c, titre, vu: Date.now() }));
}

export function noterExercice(profilId, cle, titre, n, ok) {
  majChapitre(profilId, cle, (c) => ({ ...c, titre, ex: { ...c.ex, [n]: { ok, d: Date.now() } } }));
}

export function resumeChapitre(prog, cle, total) {
  const ex = prog[cle]?.ex || {};
  const faits = Object.keys(ex).filter((n) => +n < total);
  return {
    vu: !!prog[cle]?.vu,
    faits: faits.length,
    reussis: faits.filter((n) => ex[n].ok).length,
    rates: faits.filter((n) => !ex[n].ok).map(Number),
    total,
  };
}

// Réglages communs à l'appareil
export const reglages = {
  cleGemini: () => lire("gemini", ""),
  setCleGemini: (k) => (k ? ecrire("gemini", k) : localStorage.removeItem(P + "gemini")),
};
