#!/bin/zsh
# Vérifie que la progression des élèves reste valable par rapport à la version publiée
# (git HEAD) : aucun chapitre supprimé ni déplacé, aucun exercice supprimé ni remplacé.
set -u
cd "${0:A:h}/.."
JSC=/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc
tmp=$(mktemp -d); ko=0
for f in content/*/*.js(N); do
  git cat-file -e "HEAD:$f" 2>/dev/null || { print "$f : nouveau fichier"; continue; }
  git show "HEAD:$f" > "$tmp/avant.mjs"
  cat > "$tmp/t.mjs" <<JS
import avant from '$tmp/avant.mjs';
import apres from '${PWD}/$f';
let pb = [];
avant.chapitres.forEach((c, i) => {
  const j = apres.chapitres.findIndex((x) => x.id === c.id);
  if (j < 0) return pb.push("chapitre supprimé " + c.id);
  if (j !== i) pb.push("chapitre déplacé " + c.id);
  const n = apres.chapitres[j];
  if (n.exercices.length < c.exercices.length) pb.push(c.id + " : exercices supprimés");
  c.exercices.forEach((e, k) => {
    const g = n.exercices[k];
    if (g && g.type !== e.type) print("  info : " + c.id + " ex" + (k + 1) + " " + e.type + " → " + g.type);
  });
});
print("$f : " + (pb.length ? "PROBLÈME\n  " + pb.join("\n  ") : "progression conservée"));
if (pb.length) throw new Error("KO");
JS
  "$JSC" -m "$tmp/t.mjs" 2>&1 | grep -v '^Exception\|^module code\|^$' || true
  "$JSC" -m "$tmp/t.mjs" >/dev/null 2>&1 || ko=1
done
rm -rf "$tmp"; exit $ko
