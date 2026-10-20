#!/bin/zsh
# Usage : tools/verifier.sh [fichiers...]   (par défaut : tout content/)
set -u
cd "${0:A:h}/.."
JSC=/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc
files=("$@")
(( ${#files} )) || files=(content/*/*.js(N))
tmp=$(mktemp -d)
total=0
for f in $files; do
  w="$tmp/w.mjs"
  { cat tools/verifier.js
    print -r "import data from '${f:A}';"
    print -r "const e = verifier('$f', data); if (e.length) { print(e.join('\\n')); throw new Error('ECHEC'); }"
  } > "$w"
  if ! out=$("$JSC" -m "$w" 2>&1); then print -r -- "$out"; total=$((total+1)); else print -r -- "$out"; fi
done
rm -rf "$tmp"
(( total == 0 )) && print "OK" || { print "$total fichier(s) en erreur"; exit 1; }
