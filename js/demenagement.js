// Revizz a déménagé sur Cloudflare (22/10/2026) : l'ancienne adresse GitHub Pages renvoie vers la nouvelle.
// Script classique chargé avant l'appli : la redirection se fait avant tout affichage.
if (/(^|\.)github\.io$/.test(location.hostname)) {
  location.replace("https://revizz.kaurio-app.workers.dev/?demenage=1" + location.hash);
}
