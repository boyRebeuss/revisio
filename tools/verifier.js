// Vérifie un fichier de contenu (appelé par verifier.sh avec JavaScriptCore).
function verifier(nom, data) {
  const err = [];
  const txt = (v) => typeof v === "string" && v.trim().length > 0;
  if (!data || !Array.isArray(data.chapitres) || data.chapitres.length === 0) {
    return [nom + " : pas de chapitres"];
  }
  const ids = new Set();
  let nEx = 0;
  for (const [i, c] of data.chapitres.entries()) {
    const ou = nom + " chap " + (c.id || i);
    if (!/^[a-z0-9-]+$/.test(c.id || "")) err.push(ou + " : id invalide");
    if (ids.has(c.id)) err.push(ou + " : id en double");
    ids.add(c.id);
    if (!txt(c.titre)) err.push(ou + " : titre manquant");
    if (!txt(c.cours) || c.cours.length < 300) err.push(ou + " : cours trop court");
    if (/<[a-z\/]/i.test(c.cours || "")) err.push(ou + " : HTML interdit dans le cours");
    if (!Array.isArray(c.exercices) || c.exercices.length < 4) err.push(ou + " : moins de 4 exercices");
    for (const [j, e] of (c.exercices || []).entries()) {
      nEx++;
      const o = ou + " ex " + (j + 1);
      if (!txt(e.question)) err.push(o + " : question manquante");
      switch (e.type) {
        case "qcm":
          if (!Array.isArray(e.choix) || e.choix.length < 2 || !e.choix.every(txt)) err.push(o + " : choix invalides");
          else if (!Number.isInteger(e.reponse) || e.reponse < 0 || e.reponse >= e.choix.length) err.push(o + " : reponse hors limites");
          if (!txt(e.explication)) err.push(o + " : explication manquante");
          break;
        case "vf":
          if (typeof e.reponse !== "boolean") err.push(o + " : reponse doit être true/false");
          if (!txt(e.explication)) err.push(o + " : explication manquante");
          break;
        case "saisie":
          if (!Array.isArray(e.reponses) || e.reponses.length === 0 || !e.reponses.every(txt)) err.push(o + " : reponses invalides");
          if (!txt(e.explication)) err.push(o + " : explication manquante");
          break;
        case "redaction":
          if (!txt(e.corrige)) err.push(o + " : corrige manquant");
          break;
        default:
          err.push(o + " : type inconnu " + e.type);
      }
    }
  }
  print(nom + " : " + data.chapitres.length + " chapitres, " + nEx + " exercices");
  return err;
}
