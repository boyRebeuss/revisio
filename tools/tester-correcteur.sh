#!/bin/zsh
# Tests du correcteur de réponses courtes (js/correcteur.js).
cd "${0:A:h}/.."
JSC=/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc
tmp=$(mktemp -d)
cat > "$tmp/t.mjs" <<JS
import { reponseJuste } from '${PWD}/js/correcteur.js';
import cas from '${PWD}/tools/cas-correcteur.mjs';
let ko = 0;
for (const [s, r, acc, att] of cas) {
  const res = reponseJuste(s, r, acc);
  if (res !== att) { ko++; print("ÉCHEC : " + JSON.stringify(s) + " vs " + JSON.stringify(r) + (acc ? " (" + acc + ")" : "") + " → " + res + ", attendu " + att); }
}
print(ko ? ko + " échec(s) sur " + cas.length : "OK : " + cas.length + " cas");
JS
"$JSC" -m "$tmp/t.mjs"; rm -rf "$tmp"
