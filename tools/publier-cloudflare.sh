#!/bin/zsh
# Envoie la version enregistrée (dernier commit) sur Cloudflare : https://revizz.kaurio-app.workers.dev
# (site + relais de l'IA src/worker.js, réglages dans wrangler.toml). À lancer depuis Web/, après version.sh et le commit.
# Connexion préalable : npx wrangler login
set -e
cd "${0:A:h}/.."
if [[ -n "$(git status --porcelain)" ]]; then
  echo "Des modifications ne sont pas enregistrées (commit) : rien n'est envoyé." >&2
  exit 1
fi
dossier=$(mktemp -d)
trap 'rm -rf "$dossier"' EXIT
git archive HEAD | tar -x -C "$dossier"
cd "$dossier"
# Tables du journal (sans effet si elles existent déjà)
npx --yes wrangler d1 execute revizz-journal --remote --file tools/schema.sql >/dev/null
npx --yes wrangler deploy
