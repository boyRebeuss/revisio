// Rendu du Markdown simplifié décrit dans tools/FORMAT.md.
// Tout le texte est échappé avant mise en forme : aucun HTML venant du
// contenu ou de l'IA ne peut s'exécuter.

export function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
}

export function bloc(src) {
  const lignes = String(src ?? "").replace(/\r/g, "").split("\n");
  const out = [];
  let i = 0;
  const debut = (re) => i < lignes.length && re.test(lignes[i]);

  while (i < lignes.length) {
    const l = lignes[i];
    const t = l.trim();
    if (!t) { i++; continue; }

    let m;
    if ((m = t.match(/^(#{2,4})\s+(.*)$/))) {
      const n = Math.min(m[1].length + 1, 5);
      out.push(`<h${n}>${inline(m[2])}</h${n}>`);
      i++;
    } else if (/^>/.test(t)) {
      const methode = /^>!/.test(t);
      const re = methode ? /^\s*>!/ : /^\s*>(?!!)/;
      const contenu = [];
      while (debut(re)) contenu.push(lignes[i++].replace(re, "").replace(/^ /, ""));
      out.push(`<div class="${methode ? "methode" : "retenir"}">${bloc(contenu.join("\n"))}</div>`);
    } else if (/^[-*]\s+/.test(t)) {
      const items = [];
      while (debut(/^\s*[-*]\s+/)) items.push(lignes[i++].trim().replace(/^[-*]\s+/, ""));
      out.push("<ul>" + items.map((x) => `<li>${inline(x)}</li>`).join("") + "</ul>");
    } else if (/^\d+[.)]\s+/.test(t)) {
      const items = [];
      while (debut(/^\s*\d+[.)]\s+/)) items.push(lignes[i++].trim().replace(/^\d+[.)]\s+/, ""));
      out.push("<ol>" + items.map((x) => `<li>${inline(x)}</li>`).join("") + "</ol>");
    } else if (/^\|.*\|$/.test(t)) {
      const rows = [];
      while (debut(/^\s*\|.*\|\s*$/)) rows.push(lignes[i++].trim());
      const cells = (r) => r.slice(1, -1).split("|").map((c) => c.trim());
      const corps = rows.filter((r) => !/^\|[\s:|-]+\|$/.test(r));
      const [tete, ...reste] = corps;
      out.push(
        '<div class="table"><table><thead><tr>' +
          cells(tete).map((c) => `<th>${inline(c)}</th>`).join("") +
          "</tr></thead><tbody>" +
          reste.map((r) => "<tr>" + cells(r).map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>").join("") +
          "</tbody></table></div>"
      );
    } else {
      const para = [];
      while (
        i < lignes.length &&
        lignes[i].trim() &&
        !/^\s*(#{2,4}\s|>|[-*]\s|\d+[.)]\s|\|)/.test(lignes[i])
      ) para.push(lignes[i++].trim());
      if (!para.length) { para.push(lignes[i++].trim()); }
      out.push(`<p>${para.map(inline).join("<br>")}</p>`);
    }
  }
  return out.join("\n");
}
