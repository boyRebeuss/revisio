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
// - écritures mathématiques : « * », « ^2 »/« ² », « exp(x) »/« e^x », « racine » ;
// - nombres écrits en lettres (« six cas », « vingt-cinq »), « 1 chance sur 2 », « environ »/« ≈ » ;
// - unités de physique (N, V, W, J, Ω, kg.m-3, « mètres par seconde », cm3 = cm³) ;
// - dates : « 8/5/1945 » = « 8 mai 1945 » ; une date complète vaut l'année ou le mois attendu ;
// - apostrophe oubliée ou remplacée par une espace (« l ile », « nitrate dargent » non) ;
// - en français, espagnol et allemand, les espaces entre les mots comptent (« por que » ≠ « porque »).

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
    const suite = t.slice(m[0].length);
    // « You don't run » n'est pas l'impératif « Don't run » ; « a island », « an book » sont fautifs
    if (m[0].trim() === "you" && /^(don't|do not)\b/.test(suite)) break;
    if ((m[0].trim() === "a" && /^[aeiou]/.test(suite)) || (m[0].trim() === "an" && /^[b-df-hj-np-tv-z]/.test(suite))) break;
    t = t.slice(m[0].length);
  }
  return t;
}

// « x = 5 », « f'(x) = 6x − 5 », « E(X) = 0,7 », « S(2 ; −5) » → partie utile
function sansPrefixe(s) {
  return s
    .replace(/^(?:[a-z]{1,2}|delta|δ)(?:'|′)?(?:\s*\([^()=]{1,8}\))?\s*(?:=|≈)\s*(?=\S)/, "")
    .replace(/^(?:environ|approximativement|à peu près|a peu pres|≈|~)\s*/, "")
    .replace(/^[a-z](?:'|′)?\s*(?=\()/, "");
}

// Participes passés anglais (réguliers en -ed et irréguliers courants)
const PARTICIPE = /^(?:\p{L}+ed|got|gotten|been|had|done|gone|seen|made|taken|given|written|eaten|drunk|known|grown|shown|thrown|flown|driven|ridden|spoken|broken|chosen|forgotten|fallen|begun|swum|sung|run|come|become|bought|brought|thought|taught|caught|found|left|lost|met|read|said|sent|spent|told|won|heard|kept|slept|felt|built|put|cut|let|hit|set|understood|stood|worn|torn|born)$/u;

// Forme compacte pour les écritures mathématiques et les mots composés
function compacte(s, espaces = false) {
  // Les tirets ne se suppriment que dans les mots (« asylum-seeker »), pas en maths
  const mots = !/[\d=+*/^()√]/.test(s);
  // En langue, les espaces entre les mots comptent (« auf stehe », « por que »)
  // (un chiffre seul ne fait pas une écriture mathématique : « um 6 Uhr auf stehe »)
  const garder = espaces && !/[=+*/^()√]/.test(s);
  return s
    // Contractions anglaises (« I've » = « I have ») ; « 's » reste ambigu (is/has)
    .replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot").replace(/\bshan't\b/g, "shall not")
    .replace(/(?<!\bam)n't\b/g, " not").replace(/'ve\b/g, " have").replace(/'re\b/g, " are").replace(/\bi'm\b/g, "i am")
    .replace(/'ll\b/g, " will")
    // « 's » = has devant un participe passé (she's got, she's lived), sinon is ;
    // « 'd » = had devant un participe passé ou « better », sinon would
    .replace(/\b(it|that|there|what|where|who|he|she)'s\s+(\p{L}+)/gu, (m, s, v) => `${s} ${PARTICIPE.test(v) ? "has" : "is"} ${v}`)
    .replace(/\b(it|that|there|what|where|who|he|she)'s\b/g, "$1 is")
    .replace(/'d\s+(\p{L}+)/gu, (m, v) => ` ${PARTICIPE.test(v) || v === "better" ? "had" : "would"} ${v}`)
    .replace(/'d\b/g, " would")
    .replace(/\bcan not\b/g, "cannot")
    .replace(/(?<![a-z])pi(?![a-z])/g, "π")
    .replace(/²/g, "^2").replace(/³/g, "^3")
    .replace(/\bracine(?:\s+carree)?(?:\s+de)?\s*/g, "√").replace(/\bsqrt\s*/g, "√")
    .replace(/\bexp\s*\(([^()]+)\)/g, "e^$1")
    .replace(/\^\(([^()]+)\)/g, "^$1")
    .replace(/(?<=\p{L}|\))\s*\*\s*|\s*\*\s*(?=\p{L}|\()/gu, "")
    .replace(/(\p{L})\s*-\s*(\p{L})/gu, "$1-$2")
    // En langue, le trait d'union compte (« contre-plongée » ≠ « contreplongée »)
    .replace(/(\p{L}{2})-(?=\p{L}{2})/gu, (m, x) => (mots && !garder ? x : m))
    // En allemand, la virgule devant weil, dass, la relative… est obligatoire : elle compte
    .replace(/\s*,\s*/g, espaces === "de" && mots ? " , " : ",")
    .replace(/[,;]/g, garder && espaces !== "de" ? " " : garder ? "," : "")
    .replace(/\s+/g, garder ? " " : "")
    .trim()
    .replace(/^\((.*)\)$/, "$1");
}

// Nombres écrits en lettres (français, anglais, espagnol), jusqu'à 9 999
const UNITES_L = {
  zero: 0, "zéro": 0, un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10,
  onze: 11, douze: 12, treize: 13, quatorze: 14, quinze: 15, seize: 16, vingt: 20, trente: 30, quarante: 40,
  cinquante: 50, soixante: 60, cent: 100, cents: 100, mille: 1000,
  one: 1, two: 2, three: 3, four: 4, five: 5, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
  thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20,
  thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100, thousand: 1000,
  dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10,
};
const MOT_NOMBRE = new RegExp("^(?:" + Object.keys(UNITES_L).join("|") + "|et|and)$");
// « vingt-cinq mètres » → « 25 mètres » ; « un chat » reste tel quel (article)
function enChiffres(s) {
  const mots = s.split(/(\s+|-)/);
  let i = 0, total = 0, courant = 0, lu = 0;
  for (; i < mots.length; i++) {
    const m = mots[i];
    if (/^(\s+|-)$/.test(m)) continue;
    if (!MOT_NOMBRE.test(m)) break;
    lu++;
    if (m === "et" || m === "and") continue;
    const v = UNITES_L[m];
    // Deux nombres qui ne se composent pas (« fifteen nine », « deux trois ») : ce n'est pas un nombre
    const d = courant % 100;
    if (v < 100 && d && !(v === 20 && d % 100 === 4)) {
      const dizaine = d % 10 === 0 && d >= 10;
      if (!dizaine || !(v < 10 || ((d === 60 || d === 80) && v < 20))) return s;
    }
    if (v === 100) courant = (courant || 1) * 100;
    else if (v === 1000) { total += (courant || 1) * 1000; courant = 0; }
    else if (v === 20 && courant % 100 === 4) courant = courant - 4 + 80; // quatre-vingt
    else courant += v;
  }
  if (!lu || /^(et|and)$/.test(mots[0])) return s;
  const reste = mots.slice(i).join("").trim();
  // Un article seul (« un », « une », « one ») devant un mot n'est pas un nombre
  if (lu === 1 && /^(un|une|one)$/.test(mots[0]) && reste && !/^(sur|chance|out|in)\b/.test(reste)) return s;
  return String(total + courant) + (reste ? " " + reste : "");
}

// Unités écrites avec des puissances : kg.m-3 → kg/m³, m.s-1 → m/s, cm3 → cm³
function unitesPuissance(u) {
  return u
    .replace(/(\p{L})\s*[.·]?\s*(\p{L}{1,3})\s*(?:\^)?\s*(?:-|⁻)\s*([123¹²³])(?=\s|$)/gu, (m, a, b, e) =>
      a + "/" + b + ({ 1: "", "¹": "", 2: "²", "²": "²", 3: "³", "³": "³" })[e])
    .replace(/\b(k?m|[cdm]m|m)([23])(?=\s|\/|$)/g, (m, b, e) => b + (e === "2" ? "²" : "³"))
    .replace(/\s+par\s+/g, "/");
}

// Nombre éventuellement suivi d'une unité ou d'un mot : { v, pct, frac } ou null
// Réécritures appliquées à la saisie et aux réponses attendues avant comparaison
function reecrire(s) {
  const t = enChiffres(s)
    .replace(/\b(sur|out of)\s+(.+)$/, (m, x, y) => x + " " + enChiffres(y))
    // « 1 chance sur 2 », « une sur deux », « 3 sur 10 » → fraction ; « 50/50 » → 1/2
    .replace(/^(\d+)\s*(?:chances?\s+)?(?:sur|out of)\s+(\d+)$/, "$1/$2")
    .replace(/^50\s*\/\s*50$/, "1/2")
    // jj/mm/aaaa → « j mois aaaa »
    .replace(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/, (m, j, mo, a) => (+mo >= 1 && +mo <= 12 ? `${+j} ${NOMS_MOIS[+mo - 1]} ${a}` : m))
    // « 08 mai 1945 », « le 1er mai » → « 8 mai 1945 », « 1 mai »
    .replace(/^(?:le\s+)?0?(\d{1,2})(?:er)?\s+(?=\p{L})/u, "$1 ");
  // « 44 g de CO2 » : le complément (formule chimique) après l'unité ne compte pas
  const t2 = t.replace(/^(-?\d[\d\s.]*\s*\p{L}{1,3})\s+(?:(?:de|d'|of)\s+)?\p{L}[\p{L}\d₀-₉]*[\d₀-₉][\p{L}\d₀-₉]*(\s+(?:par|per)\s+\p{L}+)?$/u, "$1$2");
  if (t2 !== t) return reecrire(t2);
  // Unité après le nombre : kg.m-3, m s-1, cm3, « mètres par seconde »
  const m = t.match(/^(-?\d+(?:\s\d{3})*(?:\.\d+)?(?:\s*\/\s*\d+)?\s*)(\p{L}.*)$/u);
  return m ? m[1] + unitesPuissance(m[2]) : t;
}

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
  // Unité permise : %, symbole, h/s/m/g/l/j/f (franc CFA), ou mot de 2 lettres ou plus
  // (une lettre seule est une variable : « 6x » n'est pas le nombre 6)
  const m = t.match(/^(-?\d+(?:\.\d+)?(?:e-?\d+)?)(?:\s*\/\s*(\d+(?:\.\d+)?))?\s*(%[\p{L}\s']*|[°€$£µω][\p{L}\/²³.\s]*|[hsmgljnvwf]|\p{L}[\p{L}\/²³.'\s]+)?$/u);
  if (!m) return null;
  if (/^(π|pi\b)/.test((m[3] || "").trim())) return null;
  const v = m[2] ? parseFloat(m[1]) / parseFloat(m[2]) : parseFloat(m[1]);
  if (!Number.isFinite(v)) return null;
  let u = unitesPuissance((m[3] || "").trim());
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
  ["€", "euro", "eur"], ["f", "franc", "fcfa", "f cfa", "franc cfa", "francs cfa", "cfa", "f.cfa"], ["$", "dollar", "usd"], ["h", "heure", "hour", "hr"], ["min", "minute", "mn"],
  ["°c", "°", "degre", "degre celsius", "degres celsius", "celsius"], ["s", "seconde", "second", "sec"], ["pt", "point"], ["an", "annee", "year", "ano"], ["°", "degre", "degree", "grado"],
  ["km", "kilometre", "kilometer"], ["m", "metre", "meter"], ["g", "gramme", "gram"], ["kg", "kilogramme", "kilo"],
  ["l", "litre", "liter"], ["j", "jour", "day"], ["j", "joule"], ["kj", "kilojoule"], ["n", "newton"], ["v", "volt"],
  ["w", "watt"], ["kw", "kilowatt"], ["ω", "ohm"], ["a", "ampere"], ["ma", "milliampere"], ["cm³", "cm cube", "centimetre cube", "ml", "millilitre"],
  ["m²", "metre carre", "m carre"], ["cm²", "cm carre", "centimetre carre"], ["km²", "km carre", "kilometre carre"],
  ["m/s", "metre/seconde"], ["km/h", "kilometre/heure"], ["kg/m³", "kilogramme/metre cube"], ["g/cm³", "gramme/centimetre cube"],
];
// Forme canonique d'une unité (« mètres par seconde » → « m/s », « habitants/km2 » → « habitant/km² »)
function canon(u) {
  return unitesPuissance(u)
    .split("/")
    .map((x) => {
      const r = radical(x.trim());
      const g = SYNONYMES.find((g) => g.includes(r));
      return g ? g[0] : r;
    })
    .join("/");
}
const radical = (u) =>
  u.replace(/[.\s]+$/, "").replace(/^(?:(?:of|de|du)\s+|d')/, "").replace(/(?<=\p{L}{2})s(?=\/|$)/gu, "");
function unitesCompatibles(x, y) {
  if (!x || !y) return true; // unité absente d'un côté : tolérée
  const a = radical(x), b = radical(y);
  if (a === b || canon(x) === canon(y)) return true;
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

const NOMS_MOIS = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
// Unités demandées par l'énoncé : « Convertis 2,5 kg en grammes », « (en km/h) », « in metres »
function unitesCibles(enonce) {
  if (!enonce) return [];
  const t = normaliser(enonce);
  return [...t.matchAll(/\b(?:en|in|combien de|combien d'|how many)\s*((?:[\p{L}°€$£µω]+(?:\s*\/\s*[\p{L}²³]+|[²³]|\s+(?:par|cubes?|carres?)\s+[\p{L}]+|\s+(?:cubes?|carres?))?))/gu)]
    .map((m) => m[1])
    .filter((u) => SYNONYMES.some((g) => g.includes(canon(u).split("/")[0])) || /[\/²³]/.test(u));
}

// L'énoncé impose-t-il une unité (mot d'au moins 2 lettres de la liste des unités) ?
function uniteImposee(enonce) {
  if (!enonce) return false;
  const mots = normaliser(enonce).split(/[^\p{L}°€$£/²³]+/u).filter((m) => m.length >= 2);
  return mots.some((m) => SYNONYMES.some((g) => g.includes(radical(m))));
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
  // « Convertis en grammes » : « 2500 kg » est refusé même si l'énoncé parle de kg
  const cibles = unitesCibles(enonce);
  if (a.u && cibles.length && !b.u && !cibles.some((c) => unitesCompatibles(a.u, c))) return false;
  // Nombre nu face à « 375 kJ » alors que l'énoncé demande des joules : refusé
  if (b.u && !a.u && uniteImposee(enonce) && !uniteDeLEnonce(b.u, enonce)) return false;
  // Une date attendue (« 14 juillet ») exige le mois
  if (b.u && !a.u && MOIS.test(radical(b.u))) return false;
  // Deux fractions se comparent telles quelles (exercices de simplification)
  if (a.frac && b.frac) return false;
  const proche = (x, y) => Math.abs(x - y) < 1e-9 * Math.max(1, Math.abs(y));
  if (a.pct === b.pct) return proche(a.v, b.v);
  // « Calcule le rendement en % » attendu « 92 » : « 92 % » convient
  if (a.pct && !b.pct && /%|pour ?cent|pourcentage|percent/i.test(enonce) && proche(a.v, b.v)) return true;
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
  // « Donne le résultat sous forme de fraction » : toutes les réponses attendues sont
  // des fractions et l'énoncé parle de fraction → un décimal (« 0,4 ») ne suffit pas
  const fractionExigee = chiffrees.length > 0 && chiffrees.every((n) => n.frac) && /fraction/i.test(enonce);
  if (fractionExigee && nombre(normaliser(saisie)) && !nombre(normaliser(saisie)).frac) return false;
  // Recopier l'écriture de l'énoncé (« Écris 3/4 sous forme décimale » → « 3/4 ») ne répond pas
  const ns = nombre(normaliser(saisie));
  const ecrit = (x) => compacte(normaliser(x))
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => "^" + [...m].map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(c)).join(""))
    .replace(/(?<=\d)[x*·.](?=10\^)/g, "×");
  if (ns && (ns.frac || ns.puissance) && enonce && ecrit(enonce).includes(ecrit(saisie))) {
    const memeForme = chiffrees.some((n) => n.frac === ns.frac && n.puissance === ns.puissance);
    if (!memeForme) return false;
  }
  // Notation scientifique demandée : a × 10^n avec 1 ≤ a < 10
  if (puissanceExigee && /scientifique/i.test(enonce) && !/^-?[1-9](?:[.,]\d+)?\s*[×x*.]\s*10/.test(normaliser(saisie))) return false;
  // Heure attendue « 8.40 » : « 8.4 » n'est pas la même heure
  const heureAttendue = attendues.some((r) => /^\d{1,2}[.:]\d{2}$/.test(String(r).trim()));
  if (heureAttendue && /heure|time|o'clock|\b[ap]\.?m\b|\bat\b|à quelle/i.test(enonce) && /^\d{1,2}[.,:]\d$/.test(String(saisie).trim())) return false;
  // Même heure écrite autrement : 8.40 = 8:40 = 8h40 = 8 h 40
  const hm = (x) => { const m = String(x).trim().toLowerCase().match(/^(\d{1,2})\s*[.:h]\s*(\d{2})(?:\s*min)?$/); return m ? +m[1] * 60 + +m[2] : null; };
  if (heureAttendue && hm(saisie) != null && attendues.some((r) => hm(r) === hm(saisie))) return true;
  // « do not you? », « is not it? » : la forme non contractée devant le sujet n'est pas de l'anglais
  const nonInverse = /\b(?:do|does|did|is|are|was|were|have|has|had|can|could|will|would|should|must|shall)\s+not\s+(?:i|you|he|she|it|we|they|there)\b/;
  if (nonInverse.test(normaliser(saisie)) && !attendues.some((r) => nonInverse.test(normaliser(r)))) return false;
  // Nombre sans unité : il se compare seulement aux réponses dans l'unité de la première
  // (« 0,45 A » et « 450 mA » attendues : « 450 » seul est refusé)
  const premiere = normaliser(attendues[0] ?? "").match(/^-?\d[\d\s.,]*\s*([^\d\s].*)?$/);
  const uniteRef = premiere?.[1]?.trim() || "";
  const nu = ns && !ns.u && !ns.pct;
  return attendues.some((r) => {
    if (nu && uniteRef) {
      const nr = nombre(normaliser(r));
      if (nr && nr.u && !unitesCompatibles(nr.u, uniteRef)) return false;
    }
    const strict = fr && (aDesAccents(r) || aDesAccents(saisie));
    const b = reecrire(normaliser(r, strict, de));
    const a0 = normaliser(saisie, strict, de);
    if (!a0 || !b) return false;
    const a = reecrire(a0);

    const formesA = new Set([a]);
    if (sansAppui(b) === b) formesA.add(sansAppui(a));
    if (sansPrefixe(b) === b) for (const f of [...formesA]) formesA.add(reecrire(sansPrefixe(f)));

    // Apostrophe oubliée ou remplacée par une espace : « l ile » = « l'île »
    const apo = (x) => x.replace(/\b(l|d|j|m|n|s|t|c|qu|jusqu|lorsqu|puisqu)'\s*/g, "$1 ");
    if (/'/.test(b)) for (const f of [...formesA]) if (apo(f) !== f || !/'/.test(f)) formesA.add(f);
    const espaces = de ? "de" : fr;
    const cb = compacte(b, espaces);
    const nb = nombre(b);
    // Année (ou mois et année) attendue : une date complète avec la même année convient
    const an = b.match(/^(?:(\p{L}+)\s+)?(\d{3,4})$/u);
    if (an && (!an[1] || MOIS.test(an[1]))) {
      for (const f of formesA) {
        const d = f.match(/^(?:\d{1,2}\s+)?(\p{L}+)\s+(\d{3,4})(?:\s.*)?$/u);
        if (d && d[2] === an[2] && MOIS.test(d[1]) && (!an[1] || radical(d[1]) === radical(an[1]))) return true;
      }
    }
    for (const f of formesA) {
      if (f === b || compacte(f, espaces) === cb || (apo(b) !== b && apo(f) === apo(b))) return true;
      if (nb && nombresEgaux(nombre(f), nb, enonce, fractionAttendue)) return true;
    }
    return false;
  });
}
