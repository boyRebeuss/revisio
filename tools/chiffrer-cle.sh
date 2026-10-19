#!/bin/zsh
# Intègre la clé Gemini dans l'appli, chiffrée par un code famille.
# La clé et le code sont saisis dans des fenêtres macOS et ne sont jamais affichés.
set -u
cd "${0:A:h}/.."
demander() { # $1 = message
  osascript -e "text returned of (display dialog \"$1\" default answer \"\" with hidden answer with title \"Révisio\" buttons {\"Annuler\", \"OK\"} default button \"OK\")" 2>/dev/null
}
cle=$(demander "Colle la clé Gemini (Google AI Studio) :") || { print "Annulé."; exit 1; }
cle=$(print -rn -- "$cle" | tr -d '[:space:]')
[[ ${#cle} -ge 20 ]] || { print "Clé trop courte."; exit 1; }

# Vérifie la clé auprès de Google sans la faire apparaître dans la liste des processus
tmp=$(mktemp); chmod 600 "$tmp"
print -r -- "x-goog-api-key: $cle" > "$tmp"
http=$(curl -s -o /dev/null -w '%{http_code}' -H @"$tmp" "https://generativelanguage.googleapis.com/v1beta/models?pageSize=1")
rm -f "$tmp"
[[ $http == 200 ]] || { print "Google refuse cette clé (code $http)."; exit 1; }
print "Clé acceptée par Google."

code=$(demander "Choisis le code famille (au moins 10 caractères, par ex. 3 mots + un nombre). Majuscules, accents et espaces ne comptent pas :") || { print "Annulé."; exit 1; }
court=$(print -rn -- "$code" | tr -d '[:space:]')
(( ${#court} >= 10 )) || { print "Code trop court (10 caractères minimum, hors espaces)."; exit 1; }
code2=$(demander "Retape le code famille :") || { print "Annulé."; exit 1; }
[[ $code == "$code2" ]] || { print "Les deux codes sont différents."; exit 1; }

print -rn -- "$cle"$'\n'"$code" | swift tools/chiffrer.swift js/cle-famille.js
