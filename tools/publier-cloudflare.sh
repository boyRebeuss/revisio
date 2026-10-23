#!/bin/zsh
# Envoie la version enregistrée (dernier commit) sur Cloudflare : https://revizz.kaurio-app.workers.dev
# (site + relais de l'IA src/worker.js, réglages dans wrangler.toml). À lancer depuis Web/, après version.sh et le commit.
# Connexion préalable : npx wrangler login
# Les dernières vérifications (tools/tout-verifier.sh, ../docs/tests/dernier.json) sont notées dans /admin (onglet Erreurs).
set -e
cd "${0:A:h}/.."
if [[ -n "$(git status --porcelain)" ]]; then
  echo "Des modifications ne sont pas enregistrées (commit) : rien n'est envoyé." >&2
  exit 1
fi
dernier=${PWD:h}/docs/tests/dernier.json
git=$(git log -1 --format='%h %s' | cut -c1-120)
dossier=$(mktemp -d)
trap 'rm -rf "$dossier"' EXIT
git archive HEAD | tar -x -C "$dossier"
cd "$dossier"
# Tables du journal (sans effet si elles existent déjà)
npx --yes wrangler d1 execute revizz-journal --remote --file tools/schema.sql >/dev/null
npx --yes wrangler deploy
# Publication et vérifications d'avant publication (s'il n'y en a pas eu : notée « non lancées »)
python3 - "$dernier" "$git" > publication.sql <<'PY'
import json, sys, os, datetime
chemin, git = sys.argv[1:]
t = json.load(open(chemin, encoding="utf-8")) if os.path.exists(chemin) else {}
q = lambda v: "NULL" if v is None else "'" + str(v).replace("'", "''") + "'"
le = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")
print(f"INSERT INTO publications (le, git, tests_le, ok, resume, details) VALUES ({q(le)}, {q(git)}, {q(t.get('le'))}, "
      f"{int(t.get('ok', 0))}, {q(t.get('resume', 'Vérifications non lancées (zsh tools/tout-verifier.sh)'))}, {q(t.get('details'))});")
PY
npx --yes wrangler d1 execute revizz-journal --remote --file publication.sql >/dev/null && echo "Publication notée dans /admin (onglet Erreurs)."
