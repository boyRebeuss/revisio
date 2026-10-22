#!/bin/zsh
# Crée une nouvelle clé d'administration (secret ADMIN_KEY du site Revizz) et ouvre la page /admin avec le lien
# d'installation « admin#cle=… ». La clé est tirée au hasard et n'est jamais affichée dans le terminal.
set -u
cd "${0:A:h}/.."
cle=$(openssl rand -hex 24)
print -rn -- "$cle" | npx --yes wrangler secret put ADMIN_KEY --name revizz >/dev/null 2>&1 \
  || { print "Échec de l'enregistrement chez Cloudflare (connexion : npx wrangler login)."; exit 1; }
lien="https://revizz.kaurio-app.workers.dev/admin#cle=$cle"
print -rn -- "$lien" | pbcopy
open "$lien"
osascript -e 'display dialog "Nouvelle clé d'"'"'administration enregistrée.\n\nLa page /admin vient de s'"'"'ouvrir dans le navigateur (la clé y reste enregistrée).\n\nLe lien d'"'"'installation est copié : envoyez-le-vous (Notes, message à vous-même) pour l'"'"'ouvrir sur votre téléphone, puis effacez-le du presse-papiers." with title "Revizz" buttons {"OK"} default button "OK"' >/dev/null 2>&1
print "Clé d'administration créée ; page /admin ouverte ; lien d'installation copié dans le presse-papiers."
