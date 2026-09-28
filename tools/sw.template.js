/* Слід — service worker. ЗГЕНЕРОВАНО tools/build.mjs із tools/sw.template.js — не редагуй sw.js вручну.
   Стратегія: усі файли застосунку кешуються при встановленні (офлайн з першого запуску);
   свої файли — спершу з кешу; Google Fonts — з кешу з фоновим оновленням. */
const VERSION = "__VERSION__";
const CACHE = "slid-" + VERSION;
const FONTS = "slid-fonts";
const ASSETS = __ASSETS__;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("slid-") && k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // шрифти Google: з кешу, у фоні оновлюємо
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;

  // сторінка: мережа, а без мережі — збережена index.html
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { caches.open(CACHE).then(c => c.put("./index.html", r.clone())); return r; })
      .catch(() => caches.match("./index.html", { ignoreSearch: true })));
    return;
  }
  // решта своїх файлів: кеш → мережа (і докешувати нове)
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
