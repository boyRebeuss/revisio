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
