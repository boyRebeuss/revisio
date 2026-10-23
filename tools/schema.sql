-- Journal de Revizz (base D1 « revizz-journal »), lu par la page /admin.
-- « qui » : nom donné au code d'invitation (vide sans code) ; « appareil » : identifiant anonyme du navigateur ;
-- « eleve » : identifiant du profil sur l'appareil ; « geo » : pays de connexion (code ISO, Cloudflare).
-- Création ou mise à jour : npx wrangler d1 execute revizz-journal --remote --file tools/schema.sql
CREATE TABLE IF NOT EXISTS erreurs (id INTEGER PRIMARY KEY, le TEXT NOT NULL, qui TEXT, appareil TEXT, plateforme TEXT,
  version TEXT, genre TEXT, message TEXT, ecran TEXT, geo TEXT);
CREATE TABLE IF NOT EXISTS visites (jour TEXT NOT NULL, appareil TEXT NOT NULL, qui TEXT, plateforme TEXT, geo TEXT,
  PRIMARY KEY (jour, appareil));
CREATE TABLE IF NOT EXISTS appels_ia (id INTEGER PRIMARY KEY, le TEXT NOT NULL, qui TEXT, eleve TEXT, usage TEXT, modele TEXT,
  statut INTEGER, ms INTEGER, jetons_entree INTEGER, jetons_sortie INTEGER);
-- Seulement pour les appareils invités (avec un code) : progression et séances de révision de chaque élève
CREATE TABLE IF NOT EXISTS eleves (appareil TEXT NOT NULL, eleve TEXT NOT NULL, qui TEXT, prenom TEXT, niveau TEXT, avatar TEXT,
  maj TEXT, progression TEXT, PRIMARY KEY (appareil, eleve));
CREATE TABLE IF NOT EXISTS seances (appareil TEXT NOT NULL, eleve TEXT NOT NULL, debut INTEGER NOT NULL, fin INTEGER, exercices INTEGER,
  PRIMARY KEY (appareil, eleve, debut));
-- Pour tous, sans rien qui désigne l'élève : réussites au premier essai par exercice (« niveau/matière/chapitre#n », n à partir de 0),
-- contestations « Ma réponse était juste », cumulées par jour
CREATE TABLE IF NOT EXISTS resultats (jour TEXT NOT NULL, exercice TEXT NOT NULL, essais INTEGER NOT NULL DEFAULT 0,
  echecs INTEGER NOT NULL DEFAULT 0, contestes INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (jour, exercice));
-- Erreurs d'exercices signalées par les élèves (« reponse » : seulement si l'élève a choisi de la joindre) ; « traite » : vu dans /admin
CREATE TABLE IF NOT EXISTS signalements (id INTEGER PRIMARY KEY, le TEXT NOT NULL, qui TEXT, appareil TEXT, version TEXT, geo TEXT,
  exercice TEXT, question TEXT, motif TEXT, commentaire TEXT, reponse TEXT, traite TEXT);
-- Vérifications faites avant chaque publication (tools/tout-verifier.sh), envoyées par tools/publier-cloudflare.sh
CREATE TABLE IF NOT EXISTS publications (id INTEGER PRIMARY KEY, le TEXT NOT NULL, git TEXT, tests_le TEXT, ok INTEGER, resume TEXT, details TEXT);
CREATE INDEX IF NOT EXISTS erreurs_le ON erreurs (le);
CREATE INDEX IF NOT EXISTS appels_ia_le ON appels_ia (le);
CREATE INDEX IF NOT EXISTS seances_debut ON seances (debut);
