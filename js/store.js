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

// Même prénom (sans tenir compte des majuscules ni des accents) et même classe
export function profilExistant(prenom, niveau, sauf) {
  const n = (x) => x.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  return profils().find((p) => p.id !== sauf && p.niveau === niveau && n(p.prenom) === n(prenom)) || null;
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
  noterActivite(true);
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

// Historique des connexions (visible seulement dans l'espace parents) :
// [{ p: id, n: prénom, a: avatar, d: début, f: dernière activité, x: exercices faits }]
// Une connexion se termine après 30 min sans activité ou au changement d'élève.
const PAUSE = 30 * 60 * 1000;

export function noterActivite(exercice = false) {
  const p = profilActif();
  if (!p) return;
  const t = Date.now();
  const hist = lire("historique", []);
  let der = hist[hist.length - 1];
  if (!der || der.p !== p.id || t - der.f > PAUSE) {
    der = { p: p.id, n: p.prenom, a: p.avatar, d: t, f: t, x: 0 };
    hist.push(der);
  }
  der.f = t;
  if (exercice) der.x = (der.x || 0) + 1;
  ecrire("historique", hist.slice(-1000));
}

export const historique = () => lire("historique", []);

export function effacerHistorique(motif) {
  ecrire("historique", motif ? [{ efface: motif, d: Date.now() }] : []);
}

// Code parent : seule une empreinte (PBKDF2) est enregistrée
async function empreinte(code, sel) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(code.trim()), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: new TextEncoder().encode(sel), iterations: 200000 }, base, 256);
  return btoa(String.fromCharCode(...new Uint8Array(bits)));
}

export const parents = {
  aUnCode: () => !!lire("codeParent", null),
  async definir(code) {
    const sel = crypto.getRandomValues(new Uint32Array(4)).join("-");
    ecrire("codeParent", { sel, e: await empreinte(code, sel) });
  },
  async verifier(code) {
    const c = lire("codeParent", null);
    return !!c && (await empreinte(code, c.sel)) === c.e;
  },
  // Code oublié : l'historique est effacé avec le code (une trace de l'effacement reste)
  oublier() {
    localStorage.removeItem(P + "codeParent");
    effacerHistorique("code parent oublié");
  },
};

// Réglages communs à l'appareil
export const reglages = {
  cleGemini: () => lire("gemini", ""),
  setCleGemini: (k) => (k ? ecrire("gemini", k) : localStorage.removeItem(P + "gemini")),
};
