#!/bin/zsh
# Enregistre la clé Gemini des parents chez Cloudflare (secret GEMINI_KEY du site Revizz, jamais envoyé aux appareils).
# La clé est saisie dans une fenêtre macOS et n'est jamais affichée.
set -u
cd "${0:A:h}/.."
cle=$(osascript -e 'text returned of (display dialog "Colle la clé Gemini (Google AI Studio) :" default answer "" with hidden answer with title "Revizz" buttons {"Annuler", "OK"} default button "OK")' 2>/dev/null) || { print "Annulé."; exit 1; }
cle=$(print -rn -- "$cle" | tr -d '[:space:]')
[[ ${#cle} -ge 20 ]] || { print "Clé trop courte."; exit 1; }

# Vérifie la clé auprès de Google sans la faire apparaître dans la liste des processus
tmp=$(mktemp); chmod 600 "$tmp"
print -r -- "x-goog-api-key: $cle" > "$tmp"
http=$(curl -s -o /dev/null -w '%{http_code}' -H @"$tmp" "https://generativelanguage.googleapis.com/v1beta/models?pageSize=1")
rm -f "$tmp"
[[ $http == 200 ]] || { print "Google refuse cette clé (code $http)."; exit 1; }
print "Clé acceptée par Google."

print -rn -- "$cle" | npx --yes wrangler secret put GEMINI_KEY >/dev/null 2>&1 && print "Clé enregistrée chez Cloudflare." || { print "Échec de l'enregistrement chez Cloudflare (connexion : npx wrangler login)."; exit 1; }
