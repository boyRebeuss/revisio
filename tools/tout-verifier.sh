#!/bin/zsh
# Toutes les vérifications d'avant publication, d'un coup : correcteur, contenu, qualité, progression des élèves,
# affichage de l'appli (Chrome sans fenêtre, un écran par classe). Rapport gardé HORS du dépôt public :
# ../docs/tests/AAAA-MM-JJ_HHhMM.txt (tout le détail), ../docs/tests/journal-des-tests.md (une ligne par passage)
# et ../docs/tests/dernier.json (lu par publier-cloudflare.sh, qui l'envoie dans l'onglet Erreurs de /admin).
# Usage (depuis Web/) : zsh tools/tout-verifier.sh   → code de sortie 0 si tout passe.
set -u
cd "${0:A:h}/.."
tests=${PWD:h}/docs/tests
mkdir -p "$tests"
quand=$(date +%Y-%m-%d_%Hh%M)
rapport="$tests/$quand.txt"
tmp=$(mktemp -d)
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
typeset -a bilan
ko=0

etape() { # etape <nom> <commande…> : lance, garde la sortie, note OK ou ÉCHEC
  local nom=$1; shift
  print "== $nom" >> "$rapport"
  "$@" > "$tmp/sortie" 2>&1; local code=$?
  cat "$tmp/sortie" >> "$rapport"; print >> "$rapport"
  return $code
}

print "Vérifications du $(date '+%d/%m/%Y %H:%M') · dernier commit $(git rev-parse --short HEAD)$( [[ -n "$(git status --porcelain)" ]] && print ' + modifications non enregistrées')\n" > "$rapport"

# 1. Correcteur des réponses courtes
etape "Correcteur" zsh tools/tester-correcteur.sh
if grep -q "^OK :" "$tmp/sortie"; then bilan+=("correcteur : $(grep '^OK :' "$tmp/sortie" | sed 's/^OK : //')")
else bilan+=("correcteur : $(grep -c '^ÉCHEC' "$tmp/sortie") échec(s)"); ko=1; fi

# 2. Format du contenu
if etape "Contenu (verifier.sh)" zsh tools/verifier.sh; then bilan+=("contenu OK")
else bilan+=("contenu : $(tail -1 "$tmp/sortie")"); ko=1; fi

# 3. Qualité : les lignes en retrait sont des alertes
etape "Qualité (qualite.sh)" zsh tools/qualite.sh
n=$(grep -c '^  ' "$tmp/sortie")
if (( n == 0 )) && ! grep -qi "exception\|error" "$tmp/sortie"; then bilan+=("qualité OK")
else bilan+=("qualité : $n alerte(s)"); ko=1; fi

# 4. Progression des élèves conservée par rapport à la version publiée
if etape "Progression (verifier-progression.sh)" zsh tools/verifier-progression.sh; then bilan+=("progression conservée")
else bilan+=("progression : PROBLÈME"); ko=1; fi

# 5. Affichage : accueil de chaque classe et une page d'exercices, dans Chrome sans fenêtre
print "== Affichage" >> "$rapport"
if [[ -x "$CHROME" ]]; then
  port=$((8700 + RANDOM % 200))
  python3 -m http.server $port --bind 127.0.0.1 >/dev/null 2>&1 &
  serveur=$!
  sleep 1
  ecrans=0 rates=0
  # profil:adresse (5e par défaut, ?s 6e, ?v 3e, ?u 1re, ?w CM2 Sénégal)
  for p in "t:#/" "s:#/" "v:#/" "u:#/" "w:#/" "t:#/c/svt/terre-systeme-solaire/exercices"; do
    q=${p%%:*} h=${p#*:}
    "$CHROME" --headless=new --disable-gpu --user-data-dir="$tmp/chrome" --virtual-time-budget=6000 --timeout=8000 \
      --dump-dom "http://127.0.0.1:$port/_test.html?$q$h" > "$tmp/page.html" 2>/dev/null
    ecrans=$((ecrans + 1))
    # Attendu : des matières (accueil) ou des exercices, et aucun message d'erreur affiché
    if [[ $h == "#/" ]]; then attendu='class="grille"'; else attendu='class="exo'; fi
    if grep -q "$attendu" "$tmp/page.html" && ! grep -q 'class="erreur">[^<]' "$tmp/page.html"; then
      print "OK   ?$q$h" >> "$rapport"
    else
      print "ÉCHEC ?$q$h (page vide ou message d'erreur)" >> "$rapport"; rates=$((rates + 1))
    fi
  done
  kill $serveur 2>/dev/null
  if (( rates == 0 )); then bilan+=("affichage OK ($ecrans écrans)"); else bilan+=("affichage : $rates écran(s) sur $ecrans en échec"); ko=1; fi
else
  print "Chrome introuvable : affichage non vérifié" >> "$rapport"; bilan+=("affichage non vérifié (Chrome absent)"); ko=1
fi
print >> "$rapport"
rm -rf "$tmp"

resume=${(j: · :)bilan}
(( ko )) && etat="❌" || etat="✅"
print "$etat $resume" | tee -a "$rapport"
print -r -- "- $(date '+%d/%m/%Y %H:%M') · $(git rev-parse --short HEAD) · $etat $resume · détail : $quand.txt" >> "$tests/journal-des-tests.md"
# Pour /admin : le résumé et les lignes utiles du détail (alertes, échecs), pas les listes complètes
python3 - "$tests/dernier.json" "$rapport" "$resume" $(( 1 - ko )) <<'PY'
import json, sys, datetime
sortie, rapport, resume, ok = sys.argv[1:]
lignes = [l for l in open(rapport, encoding="utf-8").read().splitlines()
          if l.startswith(("==", "  ", "ÉCHEC", "OK :", "Chrome")) or "PROBLÈME" in l or "erreur" in l.lower()]
json.dump({"le": datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
           "ok": int(ok), "resume": resume, "details": "\n".join(lignes)[:4000]},
          open(sortie, "w", encoding="utf-8"), ensure_ascii=False)
PY
exit $ko
