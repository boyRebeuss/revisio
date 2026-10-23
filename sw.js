// Cache d'abord : l'appli reste dans la version installée jusqu'à ce que l'élève accepte
// la mise à jour (bandeau « Nouvelle version »). VERSION est écrit par tools/version.sh.
const VERSION = "b5062460";
const CACHE = "revisio-" + VERSION;
const SOCLE = [
  "./", "index.html", "css/style.css", "manifest.webmanifest",
  "js/demenagement.js", "js/app.js", "js/dom.js", "js/invitation.js", "js/journal.js", "js/md.js", "js/store.js", "js/gemini.js", "js/exercices.js", "js/correcteur.js", "js/version.js",
  "content/catalogue.js", "icons/icon.svg", "icons/icon-192.png",
];

const telecharger = (url) => fetch(url, { cache: "no-cache" }).then((r) => {
  if (!r.ok) throw new Error(url);
  return r;
});

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(SOCLE.map(async (u) => c.put(u, await telecharger(u))));
    // Les matières déjà ouvertes restent disponibles hors connexion après la mise à jour
    const deja = new Set();
    for (const n of await caches.keys()) {
      if (n === CACHE) continue;
      for (const r of await (await caches.open(n)).keys()) if (r.url.includes("/content/")) deja.add(r.url);
    }
    await Promise.allSettled([...deja].map(async (u) => c.put(u, await telecharger(u))));
    // Passage depuis l'ancien fonctionnement (revisio-v6, sans bandeau) : installation directe
    if (await caches.has("revisio-v6")) await self.skipWaiting();
    // Ancienne adresse GitHub Pages : installation directe, pour que le renvoi vers Cloudflare (js/demenagement.js)
    // s'applique au prochain lancement sans attendre « Mettre à jour »
    if (/(^|\.)github\.io$/.test(self.location.hostname)) await self.skipWaiting();
  })());
});

// L'appli demande l'installation de la nouvelle version quand l'élève clique « Mettre à jour »
self.addEventListener("message", (e) => {
  if (e.data === "mettre-a-jour") self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((k) => Promise.all(k.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // Relais de l'IA, liens d'invitation et page d'administration : toujours en direct (site Cloudflare)
  if (/^\/(api|i)\/|^\/admin/.test(url.pathname)) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const r = await c.match(e.request, { ignoreSearch: true });
    if (r) return r;
    try {
      const n = await telecharger(e.request);
      c.put(e.request, n.clone());
      return n;
    } catch {
      return (e.request.mode === "navigate" && (await c.match("index.html"))) || Response.error();
    }
  })());
});
