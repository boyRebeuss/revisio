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
    // Espaces insécables dans les nombres (« 8 000 ») pour ne pas les couper
    .replace(/(\d) (?=\d{3}(?!\d))/g, "$1&nbsp;")
    // Typographie française : pas de retour à la ligne avant » ! ? : ; ni après «
    .replace(/« /g, "«&nbsp;").replace(/ ([»!?:;])/g, "&nbsp;$1")
    // Grec (dont polytonique) dans une police qui affiche bien esprits et accents
    .replace(/[\u0370-\u03FF\u1F00-\u1FFF][\u0370-\u03FF\u1F00-\u1FFF\u0300-\u036f\s’',.;·]*[\u0370-\u03FF\u1F00-\u1FFF\u0300-\u036f]|[\u0370-\u03FF\u1F00-\u1FFF]/g, (m) => `<span class="grc">${m}</span>`)
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
    if (t === "~~~") {
      const code = [];
      i++;
      while (i < lignes.length && lignes[i].trim() !== "~~~") code.push(lignes[i++]);
      i++;
      out.push(`<pre class="code"><code>${esc(code.join("\n"))}</code></pre>`);
    } else if ((m = t.match(/^(#{2,4})\s+(.*)$/))) {
      const n = Math.min(m[1].length + 1, 5);
      out.push(`<h${n}>${inline(m[2])}</h${n}>`);
      i++;
    } else if (/^>/.test(t)) {
      const methode = /^>!/.test(t);
      const re = methode ? /^\s*>!/ : /^\s*>(?!!)/;
      const contenu = [];
      while (debut(re)) {
        contenu.push(lignes[i++].replace(re, "").replace(/^ /, ""));
        // Ligne de texte collée sous l'encadré sans « > » : elle en fait partie (comme en Markdown)
        while (i < lignes.length && lignes[i].trim() && !/^\s*(>|#{2,4}\s|[-*]\s|\d+[.)]\s|\||~~~)/.test(lignes[i])) {
          contenu.push(lignes[i++].trim());
        }
      }
      out.push(`<div class="${methode ? "methode" : "retenir"}">${bloc(contenu.join("\n"))}</div>`);
    } else if (/^[-*]\s+/.test(t)) {
      // Une puce décalée de 2 espaces ou plus est une sous-puce de la précédente
      const items = [];
      while (debut(/^\s*[-*]\s+/)) {
        const brut = lignes[i++];
        const texte = brut.trim().replace(/^[-*]\s+/, "");
        if (/^\s{2,}/.test(brut) && items.length) items.at(-1).sous.push(texte);
        else items.push({ texte, sous: [] });
      }
      out.push("<ul>" + items.map((x) =>
        `<li>${inline(x.texte)}` + (x.sous.length ? "<ul>" + x.sous.map((y) => `<li>${inline(y)}</li>`).join("") + "</ul>" : "") + "</li>"
      ).join("") + "</ul>");
    } else if (/^\d+[.)]\s+/.test(t)) {
      const items = [];
      while (debut(/^\s*\d+[.)]\s+/)) items.push(lignes[i++].trim().replace(/^\d+[.)]\s+/, ""));
      out.push("<ol>" + items.map((x) => `<li>${inline(x)}</li>`).join("") + "</ol>");
    } else if (/^\|.*\|$/.test(t)) {
      const rows = [];
      while (debut(/^\s*\|.*\|\s*$/)) rows.push(lignes[i++].trim());
      const cells = (r) => r.slice(1, -1).split("|").map((c) => c.trim());
      // Ligne de séparation « |---|---| » (au moins un tiret) ; « | | | » est un en-tête vide
      const corps = rows.filter((r) => !/^\|[\s:|]*-[\s:|-]*\|$/.test(r));
      let [tete, ...reste] = corps;
      // En-tête vide (« | | | ») : tableau sans ligne d'en-tête
      const sansTete = cells(tete).every((c) => !c);
      out.push(
        '<div class="table"><table>' +
          (sansTete ? "" : "<thead><tr>" + cells(tete).map((c) => `<th>${inline(c)}</th>`).join("") + "</tr></thead>") +
          "<tbody>" +
          reste.map((r) => "<tr>" + cells(r).map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>").join("") +
          "</tbody></table></div>"
      );
    } else {
      const para = [];
      while (
        i < lignes.length &&
        lignes[i].trim() &&
        !/^\s*(#{2,4}\s|>|[-*]\s|\d+[.)]\s|\||~~~\s*$)/.test(lignes[i])
      ) para.push(lignes[i++].trim());
      if (!para.length) { para.push(lignes[i++].trim()); }
      out.push(`<p>${para.map(inline).join("<br>")}</p>`);
    }
  }
  return out.join("\n");
}
