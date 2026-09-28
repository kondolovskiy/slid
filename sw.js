/* Слід — service worker. ЗГЕНЕРОВАНО tools/build.mjs із tools/sw.template.js — не редагуй sw.js вручну.
   Стратегія: усі файли застосунку кешуються при встановленні (офлайн з першого запуску);
   свої файли — спершу з кешу; Google Fonts — з кешу з фоновим оновленням. */
const VERSION = "6d689242c5";
const CACHE = "slid-" + VERSION;
const FONTS = "slid-fonts";
const ASSETS = [
  "./index.html",
  "./manifest.webmanifest",
  "./app/pwa.js",
  "./app/registry.js",
  "./content/subjects/hist.js",
  "./content/subjects/math.js",
  "./content/hist/plan.js",
  "./content/hist/g5-s1.js",
  "./content/hist/g5-s2.js",
  "./content/hist/g5-s3.js",
  "./content/hist/g5-s4.js",
  "./content/math/plan.js",
  "./content/math/g4-m4s1.js",
  "./content/math/g5-ms1.js",
  "./content/catalog.js",
  "./app/app.js",
  "./img/h5-anna.jpg",
  "./img/h5-kma.jpg",
  "./img/h5-lviv.jpg",
  "./img/h5-map.jpg",
  "./img/h5-petryk.jpg",
  "./img/h5-sikorsky.jpg",
  "./img/h5-tryzub.jpg",
  "./img/hist-chron.jpg",
  "./img/hist-kyi.jpg",
  "./img/hist-layer.jpg",
  "./img/hist-mammoth.jpg",
  "./img/hist-sofia.jpg",
  "./img/hist-tree.jpg",
  "./img/trypillia-figurine.jpg",
  "./img/trypillia-house-model.jpg",
  "./img/trypillia-maidanetske.jpg",
  "./img/trypillia-pot.jpg",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

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
