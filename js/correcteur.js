// Correction des réponses courtes (exercices « saisie »). Sans dépendance au
// DOM : testable avec tools/tester-correcteur.sh.
//
// Tolérances (appliquées à la saisie de l'élève ET aux réponses attendues) :
// - majuscules, espaces, apostrophes typographiques, virgule décimale ;
// - accents ignorés, sauf en français quand la réponse attendue en porte ;
// - mots d'appui en tête (articles, pronoms sujets, « en » devant une date),
//   préfixes « x = », « f'(x) = », « S(…) » : retirés de la saisie si la
//   réponse attendue n'en a pas ;
// - nombres : unités et mots après le nombre ignorés (« 17 190 ans »), séparateur
//   de milliers, fraction ↔ décimal, pourcentage ↔ décimal ;
// - écritures mathématiques : « * », « ^2 »/« ² », « exp(x) »/« e^x », « racine ».

const COMBINANTS = /[\u0300-\u036f]/g;
const aDesAccents = (s) => /[\u0300-\u036f]/.test(String(s).normalize("NFD"));

export function normaliser(s, accents = false) {
  let t = String(s ?? "").normalize("NFD");
  if (!accents) t = t.replace(COMBINANTS, "");
  t = t
    .normalize("NFC")
    .toLowerCase()
    .replace(/[’‘`´ʼ]/g, "'")
    .replace(/[−–—]/g, "-")
    .replace(/[«»"“”]/g, "")
    .replace(/(\d),(\d)/g, "$1.$2")
    .replace(/\s+/g, " ")
    .trim();
  // La ponctuation d'ouverture/fermeture est ignorée, sauf si elle est la réponse
  const nu = t.replace(/^[¿¡]+/, "").replace(/[\s.!?;:]+$/, "");
  return nu || t;
}

const MOTS_APPUI = [
  "le", "la", "les", "l'", "un", "une", "des", "du", "de la", "de l'", "en", "au", "aux",
  "the", "a", "an", "in", "el", "los", "las", "lo", "unos", "unas",
  "je", "j'", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "que", "qu'",
  "yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes",
  "i", "you", "he", "she", "it", "we", "they",
].sort((a, b) => b.length - a.length);
const RE_APPUI = new RegExp("^(?:" + MOTS_APPUI.map((m) => m.replace(/'/g, "'")).join("|") + ")(?:\\s+|(?<='))");

// Retire les mots d'appui en tête tant qu'il reste quelque chose.
function sansAppui(s) {
  let t = s;
  for (let i = 0; i < 4; i++) {
    const m = t.match(RE_APPUI);
    if (!m || m[0].length >= t.length) break;
    t = t.slice(m[0].length);
  }
  return t;
}

// « x = 5 », « f'(x) = 6x − 5 », « E(X) = 0,7 », « S(2 ; −5) » → partie utile
function sansPrefixe(s) {
  return s
    .replace(/^[a-z]{1,2}(?:'|′)?(?:\s*\([a-z]\))?\s*=\s*(?=\S)/, "")
    .replace(/^[a-z]\s*(?=\()/, "");
}

// Forme compacte pour les écritures mathématiques et les mots composés
function compacte(s) {
  // Les tirets ne se suppriment que dans les mots (« asylum-seeker »), pas en maths
  const mots = !/[\d=+*/^()√]/.test(s);
  return s
    .replace(/²/g, "^2").replace(/³/g, "^3")
    .replace(/\bracine(?:\s+carree)?(?:\s+de)?\s*/g, "√").replace(/\bsqrt\s*/g, "√")
    .replace(/\bexp\s*\(([^()]+)\)/g, "e^$1")
    .replace(/\^\(([^()]+)\)/g, "^$1")
    .replace(/(?<=\p{L}|\))\s*\*\s*|\s*\*\s*(?=\p{L}|\()/gu, "")
    .replace(/(\p{L})\s*-\s*(\p{L})/gu, "$1-$2")
    .replace(/(\p{L}{2})-(?=\p{L}{2})/gu, (m, x) => (mots ? x : m))
    .replace(/[,;]/g, "")
    .replace(/\s+/g, "")
    .replace(/^\((.*)\)$/, "$1");
}

// Nombre éventuellement suivi d'une unité ou d'un mot : { v, pct, frac } ou null
function nombre(s) {
  const t = s.replace(/^\+/, "").replace(/(\d)\s+(?=\d{3}(?!\d))/g, "$1").replace(/\s*pour\s*cents?\b|\s*pourcents?\b|\s*percent\b/g, " %");
  // Unité permise : %, symbole, h/s/m/g/l/j, ou mot de 2 lettres ou plus
  // (une lettre seule est une variable : « 6x » n'est pas le nombre 6)
  const m = t.match(/^(-?\d+(?:\.\d+)?)(?:\s*\/\s*(\d+(?:\.\d+)?))?\s*(%|[°€$£µ][\p{L}\/²³.\s]*|[hsmglj]|\p{L}[\p{L}\/²³.'\s]+)?$/u);
  if (!m) return null;
  const v = m[2] ? parseFloat(m[1]) / parseFloat(m[2]) : parseFloat(m[1]);
  if (!Number.isFinite(v)) return null;
  return { v, pct: m[3] === "%", frac: !!m[2] };
}

function nombresEgaux(a, b) {
  if (!a || !b) return false;
  // Deux fractions se comparent telles quelles (exercices de simplification)
  if (a.frac && b.frac) return false;
  const proche = (x, y) => Math.abs(x - y) < 1e-9 * Math.max(1, Math.abs(y));
  if (a.pct === b.pct) return proche(a.v, b.v);
  return a.pct ? proche(a.v / 100, b.v) : proche(a.v, b.v / 100);
}

// accents = true (français) : dès que la réponse attendue ou la saisie porte
// un accent, les accents comptent (« a » ≠ « à »).
export function reponseJuste(saisie, attendues, accents = false) {
  return attendues.some((r) => {
    const strict = accents && (aDesAccents(r) || aDesAccents(saisie));
    const b = normaliser(r, strict);
    const a = normaliser(saisie, strict);
    if (!a || !b) return false;

    const formesA = new Set([a]);
    if (sansAppui(b) === b) formesA.add(sansAppui(a));
    if (sansPrefixe(b) === b) for (const f of [...formesA]) formesA.add(sansPrefixe(f));

    const cb = compacte(b);
    const nb = nombre(b);
    for (const f of formesA) {
      if (f === b || compacte(f) === cb) return true;
      if (nb && nombresEgaux(nombre(f), nb)) return true;
    }
    return false;
  });
}
