#!/bin/zsh
# Met à jour le numéro de version (js/version.js et sw.js) d'après le contenu des fichiers de l'appli.
# Un nouveau numéro fait apparaître « Nouvelle version disponible » chez les élèves.
# Usage : tools/version.sh            (à lancer avant chaque publication)
#         tools/version.sh --verifier (échoue si la version n'est pas à jour)
set -u
cd "${0:A:h}/.."
fichiers=(index.html manifest.webmanifest css/**/*(.N) js/**/*.js(.N) content/**/*.js(.N) icons/*(.N))
fichiers=(${fichiers:#js/version.js})
emp=$(cat $fichiers | shasum -a 256 | cut -c1-8)
if [[ "${1:-}" == "--verifier" ]]; then
  grep -q "\"$emp\"" sw.js && grep -q "\"$emp\"" js/version.js && { print "Version à jour ($emp)"; exit 0; }
  print "Version pas à jour : lancer tools/version.sh"; exit 1
fi
grep -q "\"$emp\"" sw.js && { print "Version déjà à jour ($emp)"; exit 0; }
date=$(date +%d/%m/%Y)
# Nombre de chapitres et d'exercices, arrondi (affiché dans « À propos »)
JSC=/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc
tmp=$(mktemp -d)
{ i=0; for f in content/*/*.js; do print -r "import m$i from '${f:A}';"; i=$((i+1)); done
  print -r "const t = [$(for ((j=0; j<i; j++)); do print -n "m$j,"; done)];"
  print -r 'let c = 0, e = 0; for (const m of t) for (const x of m.chapitres) { c++; e += x.exercices.length; }'
  print -r 'const arr = (n) => { const p = n < 1000 ? 10 : n < 5000 ? 100 : 500; return String(Math.round(n / p) * p).replace(/\B(?=(\d{3})+$)/g, " "); };'
  print -r 'print(arr(c) + "|" + arr(e));'
} > $tmp/c.mjs
IFS='|' read chap exo <<< "$("$JSC" -m $tmp/c.mjs)"
rm -rf $tmp
print -r "// Écrit par tools/version.sh : ne pas modifier à la main.
export const VERSION = { date: \"$date\", empreinte: \"$emp\" };
export const CHIFFRES = { chapitres: \"$chap\", exercices: \"$exo\" };" > js/version.js
sed -i '' -E "s/^const VERSION = .*/const VERSION = \"$emp\";/" sw.js
print "Nouvelle version : $date ($emp)"
