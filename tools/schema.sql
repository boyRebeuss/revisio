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
CREATE INDEX IF NOT EXISTS erreurs_le ON erreurs (le);
CREATE INDEX IF NOT EXISTS appels_ia_le ON appels_ia (le);
CREATE INDEX IF NOT EXISTS seances_debut ON seances (debut);
