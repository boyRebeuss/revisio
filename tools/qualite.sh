#!/bin/zsh
# Contrôles complémentaires : rendu Markdown, répartition des bonnes réponses QCM,
# saisies dont la réponse attendue serait refusée par le correcteur.
set -u
cd "${0:A:h}/.."
JSC=/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc
files=("$@"); (( ${#files} )) || files=(content/5e/*.js(N) content/1ere/*.js(N))
tmp=$(mktemp -d)
for f in $files; do
  { print -r "import data from '${f:A}';"
    print -r "import { bloc } from '${PWD}/js/md.js';"
    print -r "import { normaliser } from '${PWD}/js/correcteur.js';"
    cat <<'JS'
const pos = {}; let alertes = [];
const verif = (ou, s) => {
  const html = bloc(s);
  const brut = html.replace(/<pre[\s\S]*?<\/pre>/g, "").replace(/<[^>]+>/g, "");
  if (/\*\*/.test(brut)) alertes.push(ou + " : ** non fermé");
  if (/\$\{|\\\(|\\frac|\^\{/.test(s)) alertes.push(ou + " : LaTeX ou gabarit");
};
for (const c of data.chapitres) {
  verif(c.id + " cours", c.cours);
  c.exercices.forEach((e, i) => {
    const ou = c.id + " ex" + (i + 1);
    verif(ou, e.question); if (e.explication) verif(ou, e.explication); if (e.corrige) verif(ou, e.corrige);
    if (e.type === "qcm") pos[e.reponse] = (pos[e.reponse] || 0) + 1;
    if (e.type === "saisie") e.reponses.forEach((r) => { if (!normaliser(r)) alertes.push(ou + " : réponse vide après normalisation"); });
  });
}
print(FICHIER + " QCM bonnes réponses par position " + JSON.stringify(pos) + (alertes.length ? "\n  " + alertes.join("\n  ") : ""));
JS
  } | sed "s|FICHIER|'$f'|" > "$tmp/q.mjs"
  "$JSC" -m "$tmp/q.mjs" 2>&1
done
rm -rf "$tmp"
