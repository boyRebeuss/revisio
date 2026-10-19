// Liste des niveaux et des matières. Chaque matière a son fichier
// content/<niveau>/<id>.js (voir tools/FORMAT.md).
export const NIVEAUX = {
  "5e": {
    nom: "5e",
    long: "Cinquième",
    matieres: [
      { id: "francais", nom: "Français", icone: "📖", couleur: "#e2574c" },
      { id: "maths", nom: "Mathématiques", icone: "📐", couleur: "#3b7dd8" },
      { id: "histoire-geo", nom: "Histoire-Géographie", icone: "🌍", couleur: "#c98a1b" },
      { id: "emc", nom: "EMC", icone: "⚖️", couleur: "#7a5cc7" },
      { id: "anglais", nom: "Anglais", icone: "🇬🇧", couleur: "#1f8a70" },
      { id: "espagnol", nom: "Espagnol", icone: "🇪🇸", couleur: "#d9622b" },
      { id: "allemand", nom: "Allemand", icone: "🇩🇪", couleur: "#b8860b" },
      { id: "cambridge", nom: "Cambridge (A2 Key)", icone: "🎓", couleur: "#0f5e9c" },
      { id: "svt", nom: "SVT", icone: "🌱", couleur: "#3f9b3f" },
      { id: "physique-chimie", nom: "Physique-Chimie", icone: "⚗️", couleur: "#2b8fb3" },
      { id: "technologie", nom: "Technologie", icone: "⚙️", couleur: "#6b7280" },
    ],
  },
  "1ere": {
    nom: "1re",
    long: "Première générale",
    matieres: [
      { id: "francais", nom: "Français (bac)", icone: "📖", couleur: "#e2574c" },
      { id: "maths", nom: "Spé Mathématiques", icone: "📐", couleur: "#3b7dd8" },
      { id: "ses", nom: "Spé SES", icone: "📊", couleur: "#b8487a" },
      { id: "amc", nom: "Spé AMC", icone: "🗽", couleur: "#1f6fa8" },
      { id: "histoire-geo", nom: "Histoire-Géographie", icone: "🌍", couleur: "#c98a1b" },
      { id: "emc", nom: "EMC", icone: "⚖️", couleur: "#7a5cc7" },
      { id: "anglais", nom: "Anglais (LVA)", icone: "🇬🇧", couleur: "#1f8a70" },
      { id: "espagnol", nom: "Espagnol (LVB)", icone: "🇪🇸", couleur: "#d9622b" },
      { id: "ens-scientifique", nom: "Enseignement scientifique", icone: "🔬", couleur: "#2b8fb3" },
    ],
  },
};

export function matiere(niveau, id) {
  return NIVEAUX[niveau]?.matieres.find((m) => m.id === id);
}
