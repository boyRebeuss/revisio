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
print -r "// Écrit par tools/version.sh : ne pas modifier à la main.
export const VERSION = { date: \"$date\", empreinte: \"$emp\" };" > js/version.js
sed -i '' -E "s/^const VERSION = .*/const VERSION = \"$emp\";/" sw.js
print "Nouvelle version : $date ($emp)"
