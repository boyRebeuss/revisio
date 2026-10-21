#!/bin/zsh
# Envoie la version enregistrée (dernier commit) sur Cloudflare : https://revizz.kaurio-app.workers.dev
# À lancer depuis Web/, après version.sh et le commit. Connexion préalable : npx wrangler login
set -e
cd "${0:A:h}/.."
if [[ -n "$(git status --porcelain)" ]]; then
  echo "Des modifications ne sont pas enregistrées (commit) : rien n'est envoyé." >&2
  exit 1
fi
dossier=$(mktemp -d)
trap 'rm -rf "$dossier"' EXIT
mkdir "$dossier/site" && git archive HEAD | tar -x -C "$dossier/site"
rm -f "$dossier/site/.gitignore" "$dossier/site/.nojekyll"
cd "$dossier"
npx --yes wrangler deploy --name revizz --assets site --compatibility-date 2026-10-01
