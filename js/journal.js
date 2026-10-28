// Journal lu par les parents dans la page /admin (site Cloudflare seulement).
// Pour tous les appareils : une visite par jour et les erreurs affichées, sous un identifiant anonyme tiré au hasard.
// Pour les appareils invités (code d'invitation) : progression et séances de révision de chaque élève.
// Pour tous, sans rien qui désigne l'élève : réussites et échecs par exercice (premier essai), « Ma réponse était juste »,
// et les signalements d'erreur envoyés par l'élève (avec sa réponse seulement s'il choisit de la joindre).
// Jamais les réponses écrites par l'élève ni les questions posées à l'IA.
import * as S from "./store.js";
import { relais } from "./invitation.js";
import { VERSION } from "./version.js";

function appareil() {
  let id = localStorage.getItem("revisio.appareil");
  if (!/^[0-9a-f]{16}$/.test(id ?? "")) {
    id = [...crypto.getRandomValues(new Uint8Array(8))].map((b) => b.toString(16).padStart(2, "0")).join("");
    localStorage.setItem("revisio.appareil", id);
  }
  return id;
}

// Type d'appareil et navigateur, sans plus de détail (« iPad · Safari »)
function plateforme() {
  const ua = navigator.userAgent;
  const os = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? "iPad" : /iPhone/.test(ua) ? "iPhone"
    : /Android/.test(ua) ? "Android" : /Windows/.test(ua) ? "Windows" : /Macintosh/.test(ua) ? "Mac" : /Linux/.test(ua) ? "Linux" : "autre";
  const nav = /Edg\//.test(ua) ? "Edge" : /SamsungBrowser/.test(ua) ? "Samsung" : /Firefox|FxiOS/.test(ua) ? "Firefox"
    : /Chrome|CriOS/.test(ua) ? "Chrome" : /Safari/.test(ua) ? "Safari" : "autre";
  return `${os} · ${nav}${matchMedia("(display-mode: standalone)").matches ? " · appli installée" : ""}`;
}

const ecran = () => location.hash.replace(/^#\/?/, "").split("/")[0] || "accueil";

function envoyer(genre, donnees) {
  const headers = { "Content-Type": "application/json" };
  const acces = S.reglages.acces();
  if (acces) headers["x-acces"] = acces.pass;
  return fetch("/api/journal", {
    method: "POST", headers, keepalive: true,
    body: JSON.stringify({ genre, appareil: appareil(), plateforme: plateforme(), version: VERSION.empreinte, ...donnees }),
  });
}

// La même erreur au plus une fois par heure, et 30 au plus par jour depuis cet appareil
function signaler(type, message) {
  message = String(message ?? "").trim().slice(0, 400);
  if (!relais || !message || !navigator.onLine) return;
  const t = Date.now(), jour = new Date().toISOString().slice(0, 10);
  let vu = {};
  try { vu = JSON.parse(localStorage.getItem("revisio.signale") || "{}"); } catch {}
  if (vu.jour !== jour) vu = { jour, n: 0, der: {} };
  const cle = `${type}|${ecran()}|${message}`;
  if (vu.n >= 30 || t - (vu.der[cle] || 0) < 3_600_000) return;
  vu.n++;
  vu.der[cle] = t;
  localStorage.setItem("revisio.signale", JSON.stringify(vu));
  envoyer("erreur", { type, message, ecran: ecran() }).catch(() => {});
}

// Progression résumée par chapitre : titre, ouvert ou non, exercices faits et réussis, dernière activité
function resume(prog) {
  const r = {};
  for (const [cle, c] of Object.entries(prog)) {
    const ex = Object.values(c.ex || {});
    r[cle] = { t: c.titre || "", v: c.vu ? 1 : 0, f: ex.length, r: ex.filter((e) => e.ok).length, d: Math.max(c.vu || 0, ...ex.map((e) => e.d || 0)) };
  }
  return r;
}

// Résultats par exercice (« niveau/matière/chapitre#n ») : [essais, échecs, contestations], envoyés par lots
const RESULTATS = "revisio.resultats";
const lireResultats = () => { try { return JSON.parse(localStorage.getItem(RESULTATS) || "{}"); } catch { return {}; } };

function compter(ref, i) {
  if (!relais || !/^[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+#\d+$/.test(ref ?? "")) return;
  const r = lireResultats(), t = r[ref] ?? [0, 0, 0];
  t[i] = Math.min(t[i] + 1, 50);
  r[ref] = t;
  localStorage.setItem(RESULTATS, JSON.stringify(r));
  if (!attenteR) attenteR = setTimeout(envoyerResultats, 60_000);
}
export const noterResultat = (ref, ok) => { compter(ref, 0); if (!ok) compter(ref, 1); };
export const noterContestation = (ref) => compter(ref, 2);

let attenteR = null;
function envoyerResultats() {
  clearTimeout(attenteR);
  attenteR = null;
  const r = lireResultats();
  if (!relais || !navigator.onLine || !Object.keys(r).length) return;
  // Retiré tout de suite (un exercice fait pendant l'envoi repart dans le lot suivant) ; remis si l'envoi échoue
  localStorage.removeItem(RESULTATS);
  envoyer("resultats", { resultats: r }).then((x) => { if (!x.ok) throw 0; }).catch(() => {
    const n = lireResultats();
    for (const [k, t] of Object.entries(r)) n[k] = (n[k] ?? [0, 0, 0]).map((v, i) => Math.min(v + t[i], 50));
    localStorage.setItem(RESULTATS, JSON.stringify(n));
  });
}

/** Le signalement d'une erreur dans un exercice n'est possible que sur le site Cloudflare (relais). */
export const signalementPossible = () => !!relais;

/** Signalement envoyé par l'élève (10 au plus par jour depuis cet appareil). */
export async function signalerExercice({ ref, question, motif, commentaire, reponse }) {
  if (!navigator.onLine) throw new Error("Pas de connexion internet : réessaie plus tard.");
  const jour = new Date().toISOString().slice(0, 10);
  let n = {};
  try { n = JSON.parse(localStorage.getItem("revisio.signalements") || "{}"); } catch {}
  if (n.jour !== jour) n = { jour, n: 0 };
  if (n.n >= 10) throw new Error("Tu as déjà envoyé beaucoup de signalements aujourd'hui : merci, réessaie demain.");
  const r = await envoyer("signalement", { exercice: ref, question, motif, commentaire, reponse, ecran: ecran() }).catch(() => null);
  if (!r?.ok) throw new Error("L'envoi n'a pas marché : réessaie dans un moment.");
  localStorage.setItem("revisio.signalements", JSON.stringify({ jour, n: n.n + 1 }));
}

let attente = null;

function envoyerEleves() {
  clearTimeout(attente);
  attente = null;
  if (!relais || !S.reglages.acces() || !navigator.onLine) return;
  const hist = S.historique();
  const eleves = S.profils().map((p) => ({
    id: p.id, prenom: p.prenom, niveau: p.niveau, avatar: p.avatar,
    progression: resume(S.progression(p.id)),
    seances: hist.filter((s) => s.p === p.id && s.d).slice(-50).map((s) => ({ d: s.d, f: s.f, x: s.x || 0 })),
  }));
  envoyer("eleves", { eleves }).catch(() => {});
}


export function demarrer() {
  if (!relais) return;
  const jour = new Date().toISOString().slice(0, 10);
  if (localStorage.getItem("revisio.visite") !== jour) {
    envoyer("visite", {}).then((r) => r.ok && localStorage.setItem("revisio.visite", jour)).catch(() => {});
  }
  envoyerEleves();
  envoyerResultats();
  // Après un exercice : envoi groupé une minute plus tard (ou dès que l'appli passe en arrière-plan)
  addEventListener("revisio-progression", () => {
    if (S.reglages.acces() && !attente) attente = setTimeout(envoyerEleves, 60_000);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") { envoyerEleves(); envoyerResultats(); }
  });
  addEventListener("error", (e) => {
    // « Script error. » sans fichier : erreur d'un script étranger (extension, traduction de Safari…), sans détail ni intérêt
    if (!e.filename && /^Script error\.?$/.test(e.message)) return;
    signaler("plantage", `${e.message} (${(e.filename || "").split("/").pop()}:${e.lineno})`);
  });
  addEventListener("unhandledrejection", (e) => signaler("plantage", e.reason?.message ?? String(e.reason)));
  // Tout message d'erreur affiché (zones « .erreur ») : exactement ce que l'élève a vu
  new MutationObserver((lots) => {
    for (const l of lots) {
      for (const n of l.addedNodes) {
        const el = n.nodeType === 1 ? n : n.parentElement;
        if (!el) continue;
        const errs = el.matches?.(".erreur") ? [el] : [...(el.querySelectorAll?.(".erreur") ?? [])];
        if (!errs.length && el.closest?.(".erreur")) errs.push(el.closest(".erreur"));
        errs.forEach((x) => x.textContent.trim() && !x.closest("[data-consigne]") && signaler("affichée", x.textContent));
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
}
