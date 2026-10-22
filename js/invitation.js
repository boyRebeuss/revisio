// IA avec la clé des parents, sur le site Cloudflare (relais src/worker.js) : un code d'invitation (réutilisable tant que les parents ne l'ont pas retiré)
// (créé dans la page /admin, envoyé en lien /i/…) est échangé contre un laissez-passer propre à cet appareil.
import { reglages } from "./store.js";

const SANS_IA = "revisio.sansIA";
const EN_ATTENTE = "revisio.invitation"; // code reçu par lien, pas encore utilisé (session en cours)

// Le relais n'existe que sur le site Cloudflare (pas sur GitHub Pages ni sur le serveur de test local)
export const relais = !/(^|\.)github\.io$|^localhost$|^127\.0\.0\.1$/.test(location.hostname);

// Lien d'invitation « /?invitation=RVZ-… » : le code est mis de côté puis retiré de l'adresse
// (il ne sert que si l'élève touche « Activer l'IA »)
const lien = new URLSearchParams(location.search).get("invitation");
if (lien) {
  sessionStorage.setItem(EN_ATTENTE, lien);
  history.replaceState(null, "", location.pathname + location.hash);
}

export const codeRecu = () => sessionStorage.getItem(EN_ATTENTE) || "";

// Lien parents « /p/… » (créé dans /admin) → « /?parents=PAR-…#/parents » : le code est mis de côté puis retiré de
// l'adresse ; l'Espace parents le vérifie auprès du relais. Il n'est jamais enregistré sur l'appareil.
const PARENTS_RECU = "revisio.lienParents";
const lienParents = new URLSearchParams(location.search).get("parents");
if (lienParents) {
  sessionStorage.setItem(PARENTS_RECU, lienParents);
  history.replaceState(null, "", location.pathname + location.hash);
}
export function codeParentsRecu() {
  const c = sessionStorage.getItem(PARENTS_RECU) || "";
  sessionStorage.removeItem(PARENTS_RECU);
  return c;
}

// Renvoie "" si le code parents est valable, sinon le message d'erreur
export async function verifierParents(code) {
  let r;
  try {
    r = await fetch("/api/parents", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }) });
  } catch {
    return "Pas de connexion Internet.";
  }
  const d = await r.json().catch(() => ({}));
  return r.ok && d.ok ? "" : d.error || "Service indisponible, réessaie plus tard.";
}

export function proposerCode() {
  if (!relais || reglages.cleGemini() || reglages.acces()) return false;
  return !!codeRecu() || localStorage.getItem(SANS_IA) !== "1";
}

export function continuerSansIA() {
  localStorage.setItem(SANS_IA, "1");
  sessionStorage.removeItem(EN_ATTENTE);
}

// Renvoie "" si l'IA est activée, sinon le message d'erreur à afficher
export async function activer(code) {
  let r;
  try {
    r = await fetch("/api/activer", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }) });
  } catch {
    return "Pas de connexion Internet.";
  }
  const d = await r.json().catch(() => ({}));
  if (!r.ok || !d.pass) return d.error || "Service indisponible, réessaie plus tard.";
  reglages.setAcces({ pass: d.pass, nom: d.nom || "" });
  localStorage.removeItem(SANS_IA);
  sessionStorage.removeItem(EN_ATTENTE);
  return "";
}
