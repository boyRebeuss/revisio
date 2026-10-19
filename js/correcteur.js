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

// allemand = true : ä/ö/ü s'écrivent ae/oe/ue et ß = ss, l'umlaut n'est donc pas ignoré
export function normaliser(s, accents = false, allemand = false) {
  let t = String(s ?? "");
  if (allemand) t = t.normalize("NFC").replace(/ß/g, "ss").replace(/[äÄ]/g, "ae").replace(/[öÖ]/g, "oe").replace(/[üÜ]/g, "ue");
  t = t.normalize("NFD");
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
    .replace(/^[a-z](?:'|′)?\s*(?=\()/, "");
}

// Participes passés anglais (réguliers en -ed et irréguliers courants)
const PARTICIPE = /^(?:\p{L}+ed|got|gotten|been|had|done|gone|seen|made|taken|given|written|eaten|drunk|known|grown|shown|thrown|flown|driven|ridden|spoken|broken|chosen|forgotten|fallen|begun|swum|sung|run|come|become|bought|brought|thought|taught|caught|found|left|lost|met|read|said|sent|spent|told|won|heard|kept|slept|felt|built|put|cut|let|hit|set|understood|stood|worn|torn|born)$/u;

// Forme compacte pour les écritures mathématiques et les mots composés
function compacte(s) {
  // Les tirets ne se suppriment que dans les mots (« asylum-seeker »), pas en maths
  const mots = !/[\d=+*/^()√]/.test(s);
  return s
    // Contractions anglaises (« I've » = « I have ») ; « 's » reste ambigu (is/has)
    .replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot").replace(/\bshan't\b/g, "shall not")
    .replace(/n't\b/g, " not").replace(/'ve\b/g, " have").replace(/'re\b/g, " are").replace(/\bi'm\b/g, "i am")
    .replace(/'ll\b/g, " will")
    // « 's » = has devant un participe passé (she's got, she's lived), sinon is ;
    // « 'd » = had devant un participe passé ou « better », sinon would
    .replace(/\b(it|that|there|what|where|who|he|she)'s\s+(\p{L}+)/gu, (m, s, v) => `${s} ${PARTICIPE.test(v) ? "has" : "is"} ${v}`)
    .replace(/\b(it|that|there|what|where|who|he|she)'s\b/g, "$1 is")
    .replace(/'d\s+(\p{L}+)/gu, (m, v) => ` ${PARTICIPE.test(v) || v === "better" ? "had" : "would"} ${v}`)
    .replace(/'d\b/g, " would")
    .replace(/\bcan not\b/g, "cannot")
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
  // Écriture en puissance ou scientifique (« 2⁶ », « 4,2 × 10^9 »)
  const puissance = /\^|[⁰¹²³⁴⁵⁶⁷⁸⁹]|[×x*.]\s*10\s*\^/.test(s.replace(/(?<=\p{L})[²³]/gu, ""));
  const t = s
    // Notation scientifique : 4,2 × 10^9 ; 4,2.10^9 ; 4,2*10⁹ ; 10^-2
    .replace(/10([⁻]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (m, e) => "10^" + [...e].map((c) => "⁻⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(c) === 0 ? "-" : "⁻⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(c) - 1).join(""))
    .replace(/^(-?\d+(?:\.\d+)?)\s*(?:×|x|\*|\.)\s*10\s*\^\s*\(?(-?\d+)\)?/, "$1e$2")
    .replace(/^10\s*\^\s*\(?(-?\d+)\)?/, "1e$1")
    // Puissance simple : 2⁶ ou 2^6 = 64
    .replace(/^(\d+(?:\.\d+)?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/, (m, b, e) => b + "^" + [...e].map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(c)).join(""))
    .replace(/^(\d+(?:\.\d+)?)\s*\^\s*(\d{1,2})$/, (m, b, e) => String(Math.pow(parseFloat(b), parseInt(e, 10))))
    .replace(/^\+/, "").replace(/(\d)(?:st|nd|rd|th|er|re|e|eme|ème|º|ª)(?=\s|$)/g, "$1").replace(/(\d)\s+(?=\d{3}(?!\d))/g, "$1").replace(/\s*pour\s*cents?\b|\s*pourcents?\b|\s*percent\b/g, " %");
  // Unité permise : %, symbole, h/s/m/g/l/j, ou mot de 2 lettres ou plus
  // (une lettre seule est une variable : « 6x » n'est pas le nombre 6)
  const m = t.match(/^(-?\d+(?:\.\d+)?(?:e-?\d+)?)(?:\s*\/\s*(\d+(?:\.\d+)?))?\s*(%[\p{L}\s']*|[°€$£µ][\p{L}\/²³.\s]*|[hsmglj]|\p{L}[\p{L}\/²³.'\s]+)?$/u);
  if (!m) return null;
  const v = m[2] ? parseFloat(m[1]) / parseFloat(m[2]) : parseFloat(m[1]);
  if (!Number.isFinite(v)) return null;
  let u = (m[3] || "").trim();
  // « 2 millions » = 2 000 000
  let v2 = v;
  const mult = u.match(/^(millions?|milliards?|mille|thousands?|millones?|mil)\b\s*(?:de\s+|d'|of\s+)?/);
  if (mult) {
    v2 = v * (/^milliard/.test(mult[1]) ? 1e9 : /^(million|millon)/.test(mult[1]) ? 1e6 : 1e3);
    u = u.slice(mult[0].length).trim();
  }
  // Après « % », les mots (« d'abstention ») jouent le rôle d'une unité
  const pct = u.startsWith("%");
  return { puissance, v: v2, pct, frac: !!m[2], u: pct ? u.slice(1).trim() : u };
}

// Unités équivalentes (le pluriel et le point final sont ignorés)
const SYNONYMES = [
  ["€", "euro", "eur"], ["$", "dollar", "usd"], ["h", "heure", "hour", "hr"], ["min", "minute", "mn"],
  ["s", "seconde", "second", "sec"], ["pt", "point"], ["an", "annee", "year", "ano"], ["°", "degre", "degree", "grado"],
  ["km", "kilometre", "kilometer"], ["m", "metre", "meter"], ["g", "gramme", "gram"], ["kg", "kilogramme", "kilo"],
  ["l", "litre", "liter"], ["j", "jour", "day"],
];
const radical = (u) =>
  u.replace(/[.\s]+$/, "").replace(/^(?:(?:of|de|du)\s+|d')/, "").replace(/(?<=\p{L}{2})s(?=\/|$)/gu, "");
function unitesCompatibles(x, y) {
  if (!x || !y) return true; // unité absente d'un côté : tolérée
  const a = radical(x), b = radical(y);
  if (a === b) return true;
  if (a.length >= 3 && b.length >= 3 && (a.startsWith(b) || b.startsWith(a))) return true;
  const mot1 = a.split(/[\s']/)[0], mot2 = b.split(/[\s']/)[0];
  return SYNONYMES.some((g) => g.includes(radical(mot1)) && g.includes(radical(mot2)));
}

// Unité tapée alors que la réponse attendue n'en a pas : acceptée seulement si
// l'énoncé l'emploie (« 1700 km » est refusé si la question parle de mètres)
function uniteDeLEnonce(u, enonce) {
  if (!enonce) return true;
  const mots = normaliser(enonce).split(/[^\p{L}°€$£/²³]+/u).filter(Boolean);
  return mots.some((m) => unitesCompatibles(u, m));
}

const MOIS = /^(janvier|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre|january|february|march|april|may|june|july|august|september|october|november|december|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b/;

function nombresEgaux(a, b, enonce, fractionAttendue) {
  if (!a || !b) return false;
  // Si une fraction est attendue (« 3/2 »), une fraction non simplifiée (« 9/6 ») ne
  // doit pas passer par l'écriture décimale (« 1,5 ») de la liste
  if (a.frac && fractionAttendue) return false;
  // « 4 June » n'est pas « 4 July » : des unités différentes rendent la réponse fausse
  if (!unitesCompatibles(a.u, b.u)) return false;
  if (a.u && !b.u && !uniteDeLEnonce(a.u, enonce)) return false;
  // Une date attendue (« 14 juillet ») exige le mois
  if (b.u && !a.u && MOIS.test(radical(b.u))) return false;
  // Deux fractions se comparent telles quelles (exercices de simplification)
  if (a.frac && b.frac) return false;
  const proche = (x, y) => Math.abs(x - y) < 1e-9 * Math.max(1, Math.abs(y));
  if (a.pct === b.pct) return proche(a.v, b.v);
  return a.pct ? proche(a.v / 100, b.v) : proche(a.v, b.v / 100);
}

// accents = true (français) : dès que la réponse attendue ou la saisie porte
// un accent, les accents comptent (« a » ≠ « à »).
// langue : "fr" (ou true) = accents significatifs (français, espagnol) ; "de" = umlauts significatifs.
// enonce (facultatif) : texte de la question, pour juger une unité ajoutée par l'élève.
export function reponseJuste(saisie, attendues, langue = false, enonce = "") {
  const fr = langue === true || langue === "fr", de = langue === "de";
  const fractionAttendue = attendues.some((r) => nombre(normaliser(r))?.frac);
  // Si toutes les réponses chiffrées sont écrites en puissance, l'élève doit en écrire une
  const chiffrees = attendues.map((r) => nombre(normaliser(r))).filter(Boolean);
  const puissanceExigee = chiffrees.length > 0 && chiffrees.every((n) => n.puissance);
  if (puissanceExigee && nombre(normaliser(saisie)) && !nombre(normaliser(saisie)).puissance) return false;
  return attendues.some((r) => {
    const strict = fr && (aDesAccents(r) || aDesAccents(saisie));
    const b = normaliser(r, strict, de);
    const a = normaliser(saisie, strict, de);
    if (!a || !b) return false;

    const formesA = new Set([a]);
    if (sansAppui(b) === b) formesA.add(sansAppui(a));
    if (sansPrefixe(b) === b) for (const f of [...formesA]) formesA.add(sansPrefixe(f));

    const cb = compacte(b);
    const nb = nombre(b);
    for (const f of formesA) {
      if (f === b || compacte(f) === cb) return true;
      if (nb && nombresEgaux(nombre(f), nb, enonce, fractionAttendue)) return true;
    }
    return false;
  });
}
