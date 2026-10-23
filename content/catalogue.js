// Liste des niveaux et des matières. Chaque matière a son fichier
// content/<niveau>/<id>.js (voir tools/FORMAT.md).
export const NIVEAUX = {
  "6e": {
    nom: "6e",
    long: "Sixième",
    matieres: [
      { id: "francais", nom: "Français", icone: "📖", couleur: "#e2574c" },
      { id: "maths", nom: "Mathématiques", icone: "📐", couleur: "#3b7dd8" },
      { id: "histoire-geo", nom: "Histoire-Géographie", icone: "🌍", couleur: "#c98a1b" },
      { id: "emc", nom: "EMC", icone: "⚖️", couleur: "#7a5cc7" },
      { id: "anglais", nom: "Anglais", icone: "🇬🇧", couleur: "#1f8a70" },
      { id: "espagnol", nom: "Espagnol (bilangue)", icone: "🇪🇸", couleur: "#d9622b" },
      { id: "allemand", nom: "Allemand (bilangue)", icone: "🇩🇪", couleur: "#b8860b" },
      { id: "sciences", nom: "Sciences et technologie", icone: "🔬", couleur: "#3f9b3f" },
    ],
  },
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
      { id: "latin", nom: "Latin (LCA)", icone: "🏺", couleur: "#a0522d" },
    ],
  },
  "3e": {
    nom: "3e",
    long: "Troisième",
    matieres: [
      { id: "francais", nom: "Français (brevet)", icone: "📖", couleur: "#e2574c" },
      { id: "maths", nom: "Mathématiques (brevet)", icone: "📐", couleur: "#3b7dd8" },
      { id: "histoire-geo", nom: "Histoire-Géographie", icone: "🌍", couleur: "#c98a1b" },
      { id: "emc", nom: "EMC", icone: "⚖️", couleur: "#7a5cc7" },
      { id: "anglais", nom: "Anglais", icone: "🇬🇧", couleur: "#1f8a70" },
      { id: "espagnol", nom: "Espagnol", icone: "🇪🇸", couleur: "#d9622b" },
      { id: "allemand", nom: "Allemand", icone: "🇩🇪", couleur: "#b8860b" },
      { id: "cambridge", nom: "Cambridge (B1 Preliminary)", icone: "🎓", couleur: "#0f5e9c" },
      { id: "svt", nom: "SVT", icone: "🌱", couleur: "#3f9b3f" },
      { id: "physique-chimie", nom: "Physique-Chimie", icone: "⚗️", couleur: "#2b8fb3" },
      { id: "technologie", nom: "Technologie", icone: "⚙️", couleur: "#6b7280" },
      { id: "latin", nom: "Latin (LCA)", icone: "🏺", couleur: "#a0522d" },
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
      { id: "grec", nom: "Grec ancien (LCA)", icone: "🏛️", couleur: "#8a6d3b" },
    ],
  },
  "cm2-sn": {
    nom: "CM2 (SN)",
    long: "CM2 (Sénégal)",
    matieres: [
      { id: "francais", nom: "Langue et communication", icone: "📖", couleur: "#e2574c" },
      { id: "maths", nom: "Mathématiques", icone: "📐", couleur: "#3b7dd8" },
      { id: "decouverte-monde", nom: "Découverte du monde", icone: "🌍", couleur: "#c98a1b" },
      { id: "edd", nom: "Éducation au développement durable", icone: "🌱", couleur: "#3f9b3f" },
    ],
  },
};

export function matiere(niveau, id) {
  return NIVEAUX[niveau]?.matieres.find((m) => m.id === id);
}
