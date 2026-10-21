// Revizz sur Cloudflare : sert le site et relaie l'IA Gemini avec la clé des parents (secret GEMINI_KEY, jamais envoyée
// au navigateur). L'IA est réservée aux appareils invités : un code d'invitation à usage unique (créé dans /admin) est
// échangé contre un laissez-passer propre à l'appareil. Le journal (base D1, voir tools/schema.sql) alimente la page /admin.

const INVITE = /^RVZ-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
const PASS = /^[0-9a-f]{32}$/;
const APPAREIL = /^[0-9a-f]{16}$/;

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
const maintenant = () => new Date().toISOString();
const coupe = (v, n) => String(v ?? "").slice(0, n);
/** Instant ISO d'il y a n jours (même format que les dates enregistrées). */
const depuis = (jours) => new Date(Date.now() - jours * 86400_000).toISOString();

/** Code tiré au hasard : 31 caractères sans ambiguïté (ni 0/O, ni 1/I/L), tirage sans biais. */
function nouveauCode() {
  const a = "ABCDEFGHJKMNPQRSTUVWXYZ23456789", out = [];
  while (out.length < 8) for (const b of crypto.getRandomValues(new Uint8Array(16))) if (b < 248 && out.length < 8) out.push(a[b % 31]);
  return `RVZ-${out.slice(0, 4).join("")}-${out.slice(4).join("")}`;
}

/** Laissez-passer de l'appareil (en-tête x-acces), avec le nom donné au code ; null sinon. */
async function invite(request, env) {
  const pass = request.headers.get("x-acces") ?? "";
  return PASS.test(pass) && env.CODES ? await env.CODES.get(`pass:${pass}`, "json") : null;
}

/** Code d'invitation → laissez-passer de l'appareil ; le code est effacé (transmis à quelqu'un d'autre, il ne marche plus). */
async function activer(request, env) {
  const { code = "" } = await request.json().catch(() => ({}));
  // Accepte aussi le code tapé sans « RVZ- » ni tirets, en minuscules
  const brut = String(code).toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/^RVZ(?=.{8}$)/, "");
  const c = `RVZ-${brut.slice(0, 4)}-${brut.slice(4)}`;
  const inv = INVITE.test(c) ? await env.CODES.get(`invite:${c}`, "json") : null;
  if (!inv) return json({ error: "Code inconnu ou déjà utilisé. Demande un nouveau code à tes parents." }, 403);
  await env.CODES.delete(`invite:${c}`);
  const pass = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
  await env.CODES.put(`pass:${pass}`, JSON.stringify({ ...inv, code: c, utilise: maintenant() }));
  return json({ pass, nom: inv.nom });
}

/**
 * Journal envoyé par le site (js/journal.js). Pour tous : une visite par jour et par appareil, erreurs affichées.
 * Pour les appareils invités seulement : progression et séances de chaque élève (jamais les réponses écrites).
 */
async function journal(request, env) {
  const e = await request.json().catch(() => null);
  if (!e || !APPAREIL.test(e.appareil ?? "")) return json({ error: "demande invalide" }, 400);
  const inv = await invite(request, env), qui = coupe(inv?.nom, 60), appareil = e.appareil;
  const plateforme = coupe(e.plateforme, 40), geo = coupe(request.cf?.country, 4);
  if (e.genre === "visite") {
    await env.DB.prepare("INSERT OR REPLACE INTO visites (jour, appareil, qui, plateforme, geo) VALUES (?, ?, ?, ?, ?)")
      .bind(maintenant().slice(0, 10), appareil, qui, plateforme, geo).run();
  } else if (e.genre === "erreur") {
    await env.DB.prepare("INSERT INTO erreurs (le, qui, appareil, plateforme, version, genre, message, ecran, geo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
      .bind(maintenant(), qui, appareil, plateforme, coupe(e.version, 20), coupe(e.type, 20), coupe(e.message, 400), coupe(e.ecran, 60), geo).run();
  } else if (e.genre === "eleves") {
    if (!inv) return json({ error: "réservé aux appareils invités" }, 403);
    const eleves = Array.isArray(e.eleves) ? e.eleves.slice(0, 12) : [];
    const lignes = [];
    for (const el of eleves) {
      const id = coupe(el.id, 20);
      if (!id) continue;
      const prog = JSON.stringify(el.progression ?? {});
      if (prog.length > 200_000) continue;
      lignes.push(env.DB.prepare(`INSERT OR REPLACE INTO eleves (appareil, eleve, qui, prenom, niveau, avatar, maj, progression)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).bind(appareil, id, qui, coupe(el.prenom, 40), coupe(el.niveau, 6), coupe(el.avatar, 8), maintenant(), prog));
      for (const s of (Array.isArray(el.seances) ? el.seances.slice(-50) : [])) {
        if (!Number.isFinite(s.d) || !Number.isFinite(s.f)) continue;
        lignes.push(env.DB.prepare("INSERT OR REPLACE INTO seances (appareil, eleve, debut, fin, exercices) VALUES (?, ?, ?, ?, ?)")
          .bind(appareil, id, Math.trunc(s.d), Math.trunc(s.f), Math.max(0, Math.trunc(s.x) || 0)));
      }
    }
    if (lignes.length) await env.DB.batch(lignes);
  } else {
    return json({ error: "demande invalide" }, 400);
  }
  return json({ ok: true });
}

/** Tableau de bord : visites des 14 derniers jours, appareils, demandes à l'IA (30 jours), erreurs. */
async function tableau(env) {
  // Ménage : erreurs gardées 90 jours, demandes à l'IA 180 jours, visites et séances 1 an
  await env.DB.batch([
    env.DB.prepare("DELETE FROM erreurs WHERE le < ?").bind(depuis(90)),
    env.DB.prepare("DELETE FROM appels_ia WHERE le < ?").bind(depuis(180)),
    env.DB.prepare("DELETE FROM visites WHERE jour < ?").bind(depuis(365).slice(0, 10)),
    env.DB.prepare("DELETE FROM seances WHERE debut < ?").bind(Date.now() - 365 * 86400_000),
  ]);
  const q = (sql, ...args) => env.DB.prepare(sql).bind(...args).all().then((r) => r.results);
  const [jours, appareils, ia, iaJours, erreurs] = await Promise.all([
    q("SELECT jour, COUNT(*) AS appareils FROM visites WHERE jour >= ? GROUP BY jour ORDER BY jour", depuis(13).slice(0, 10)),
    q(`SELECT CASE WHEN qui <> '' THEN qui ELSE 'Sans code · ' || substr(appareil, 1, 4) END AS nom, MAX(jour) AS dernier,
       COUNT(*) AS jours, plateforme, geo FROM visites GROUP BY nom ORDER BY dernier DESC LIMIT 200`),
    q(`SELECT qui, eleve, COUNT(*) AS appels, SUM(statut <> 200) AS echecs, SUM(jetons_entree) AS jetons_entree,
       SUM(jetons_sortie) AS jetons_sortie, GROUP_CONCAT(DISTINCT usage) AS usages FROM appels_ia WHERE le >= ?
       GROUP BY qui, eleve ORDER BY appels DESC`, depuis(30)),
    q("SELECT substr(le, 1, 10) AS jour, COUNT(*) AS appels FROM appels_ia WHERE le >= ? GROUP BY jour ORDER BY jour", depuis(13)),
    q("SELECT COUNT(*) AS n FROM erreurs WHERE le >= ?", depuis(7)),
  ]);
  return { jours, appareils, ia, iaJours, erreurs7: erreurs[0].n };
}

/** Élèves des appareils invités : progression et séances des 60 derniers jours. */
async function eleves(env) {
  const q = (sql, ...args) => env.DB.prepare(sql).bind(...args).all().then((r) => r.results);
  const [liste, seances] = await Promise.all([
    q("SELECT appareil, eleve, qui, prenom, niveau, avatar, maj, progression FROM eleves ORDER BY maj DESC"),
    q("SELECT appareil, eleve, debut, fin, exercices FROM seances WHERE debut >= ? ORDER BY debut DESC", Date.now() - 60 * 86400_000),
  ]);
  return liste.map((el) => ({
    ...el,
    progression: JSON.parse(el.progression || "{}"),
    seances: seances.filter((s) => s.appareil === el.appareil && s.eleve === el.eleve).map(({ debut, fin, exercices }) => ({ debut, fin, exercices })),
  }));
}

/** Liste du KV (invite:… ou pass:…) avec le contenu ; la liste peut garder une minute un élément effacé. */
async function contenu(env, prefixe) {
  const { keys } = await env.CODES.list({ prefix: prefixe });
  const tous = await Promise.all(keys.map(async (k) => ({ cle: k.name, valeur: await env.CODES.get(k.name, "json") })));
  return tous.filter((e) => e.valeur).map((e) => ({ cle: e.cle, ...e.valeur }));
}

/** Comparaison en temps constant (pas d'indice sur la clé par la durée de réponse). */
function egal(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

/** Page /admin (clé d'administration : secret ADMIN_KEY, en-tête x-admin). */
async function admin(request, env) {
  if (!env.ADMIN_KEY) return json({ error: "Clé d'administration pas encore créée" }, 503);
  if (!egal(request.headers.get("x-admin") ?? "", env.ADMIN_KEY)) return json({ error: "Clé d'administration incorrecte" }, 403);
  const { action, nom = "", cle = "", appareil = "", eleve = "" } = await request.json().catch(() => ({}));
  const n = String(nom).trim().slice(0, 60);
  if (action === "nouveau") {
    if (!n) return json({ error: "Indique pour qui est le code" }, 400);
    const code = nouveauCode();
    await env.CODES.put(`invite:${code}`, JSON.stringify({ nom: n, cree: maintenant().slice(0, 10) }), { expirationTtl: 30 * 86400 });
    return json({ code });
  }
  // Les laissez-passer eux-mêmes ne quittent jamais le serveur : on les désigne par un repère (8 premiers caractères)
  if (action === "codes") {
    const passes = (await contenu(env, "pass:")).map(({ cle, ...p }) => ({ ...p, repere: cle.slice(5, 13) }));
    return json({ invitations: await contenu(env, "invite:"), passes });
  }
  if (action === "retirer") {
    const c = String(cle);
    const tous = [...(await contenu(env, "invite:")), ...(await contenu(env, "pass:"))]
      .filter((e) => e.cle === `invite:${c}` || (/^[0-9a-f]{8}$/.test(c) && e.cle.startsWith(`pass:${c}`)));
    await Promise.all(tous.map((e) => env.CODES.delete(e.cle)));
    return json({ retires: tous.length });
  }
  if (action === "tableau") return json(await tableau(env));
  if (action === "eleves") return json(await eleves(env));
  if (action === "oublier-eleve") {
    const a = coupe(appareil, 16), e = coupe(eleve, 20);
    await env.DB.batch([
      env.DB.prepare("DELETE FROM eleves WHERE appareil = ? AND eleve = ?").bind(a, e),
      env.DB.prepare("DELETE FROM seances WHERE appareil = ? AND eleve = ?").bind(a, e),
    ]);
    return json({ ok: true });
  }
  if (action === "erreurs") return json((await env.DB.prepare("SELECT * FROM erreurs ORDER BY id DESC LIMIT 300").all()).results);
  if (action === "gemini") {
    const t0 = Date.now();
    const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=5", { headers: { "x-goog-api-key": env.GEMINI_KEY ?? "" } }).catch(() => null);
    return json({ statut: r?.status ?? 0, ok: !!r?.ok, ms: Date.now() - t0, cle: !!env.GEMINI_KEY });
  }
  return json({ error: "demande invalide" }, 400);
}

/**
 * Gemini avec la clé des parents, pour les appareils invités. Seules deux demandes sont relayées : la liste des modèles
 * et la génération d'une réponse. Chaque demande est notée (élève, usage, modèle, jetons), sans la question ni la réponse.
 */
async function gemini(request, env, url, ctx) {
  if (!env.GEMINI_KEY) return json({ error: { message: "L'IA n'est pas encore configurée." } }, 503);
  const inv = await invite(request, env);
  if (!inv) return json({ error: { code: 403, message: "Accès à l'IA retiré. Demande un nouveau code à tes parents." } }, 403);
  const chemin = url.pathname.slice("/api/gemini/".length);
  const base = "https://generativelanguage.googleapis.com/v1beta/";
  if (request.method === "GET" && chemin === "models") {
    const r = await fetch(`${base}models?pageSize=200`, { headers: { "x-goog-api-key": env.GEMINI_KEY } });
    return new Response(r.body, { status: r.status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
  }
  if (request.method !== "POST" || !/^models\/[a-z0-9.\-]+:generateContent$/.test(chemin)) return json({ error: { message: "demande invalide" } }, 400);
  const corps = await request.text();
  if (corps.length > 100_000) return json({ error: { message: "demande trop longue" } }, 413);
  const t0 = Date.now();
  const r = await fetch(base + chemin, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_KEY }, body: corps });
  const texte = await r.text();
  let u = {};
  try { u = JSON.parse(texte).usageMetadata ?? {}; } catch {}
  ctx.waitUntil(env.DB.prepare("INSERT INTO appels_ia (le, qui, eleve, usage, modele, statut, ms, jetons_entree, jetons_sortie) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(maintenant(), coupe(inv.nom, 60), coupe(request.headers.get("x-eleve") ? decodeURIComponent(request.headers.get("x-eleve")) : "", 60),
      coupe(request.headers.get("x-usage"), 20), chemin.slice(7, chemin.indexOf(":")), r.status, Date.now() - t0,
      u.promptTokenCount ?? 0, (u.candidatesTokenCount ?? 0) + (u.thoughtsTokenCount ?? 0)).run().catch(() => {}));
  return new Response(texte, { status: r.status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // Lien d'invitation court « /i/ABCD2345 » → le site, qui propose « Activer l'IA » (le code n'est pas utilisé ici :
    // un aperçu de lien dans une messagerie ne le gâche pas)
    if (url.pathname.startsWith("/i/")) {
      const m = /^\/i\/([A-Za-z0-9]{4})-?([A-Za-z0-9]{4})$/.exec(url.pathname);
      const vers = m ? `/?invitation=RVZ-${m[1].toUpperCase()}-${m[2].toUpperCase()}` : "/";
      return new Response(null, { status: 302, headers: { Location: vers, "Cache-Control": "no-store" } });
    }
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    if (env.LIMITER) {
      const { success } = await env.LIMITER.limit({ key: request.headers.get("CF-Connecting-IP") ?? "inconnu" });
      if (!success) return json({ error: { code: 429, message: "Trop de demandes, réessaie dans une minute." } }, 429);
    }
    if (!env.CODES || !env.DB) return json({ error: "service indisponible" }, 503);
    if (request.method === "POST" && url.pathname === "/api/activer") return activer(request, env);
    if (request.method === "POST" && url.pathname === "/api/journal") return journal(request, env);
    if (request.method === "POST" && url.pathname === "/api/admin") return admin(request, env);
    if (url.pathname.startsWith("/api/gemini/")) return gemini(request, env, url, ctx);
    return json({ error: "demande invalide" }, 404);
  },
};
