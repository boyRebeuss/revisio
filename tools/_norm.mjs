export function normaliser(s) {
  const t = String(s ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
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
