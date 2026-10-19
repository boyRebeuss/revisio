// Déverrouillage de la clé Gemini intégrée avec le code famille.
// Chiffrement : PBKDF2-SHA256 (code famille + sel) → AES-256-GCM.
import { CLE_CHIFFREE } from "./cle-famille.js";
import { reglages } from "./store.js";

const SANS_IA = "revisio.sansIA";

export const cleIntegree = () => !!CLE_CHIFFREE;

export function proposerCode() {
  return cleIntegree() && !reglages.cleGemini() && localStorage.getItem(SANS_IA) !== "1";
}

export function continuerSansIA() {
  localStorage.setItem(SANS_IA, "1");
}

// Majuscules, accents et espaces ne comptent pas (même règle dans tools/chiffrer.swift)
export const normaliserCode = (code) =>
  code.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "");

const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

// Renvoie true si le code est bon (la clé est alors enregistrée sur l'appareil).
export async function deverrouiller(code) {
  const c = CLE_CHIFFREE;
  if (!c) return false;
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(normaliserCode(code)), "PBKDF2", false, ["deriveKey"]);
  const aes = await crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt: b64(c.sel), iterations: c.iter },
    base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]
  );
  try {
    const clair = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64(c.iv) }, aes, b64(c.data));
    reglages.setCleGemini(new TextDecoder().decode(clair));
    localStorage.removeItem(SANS_IA);
    return true;
  } catch {
    return false;
  }
}
