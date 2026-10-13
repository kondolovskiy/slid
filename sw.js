/* Слід — service worker. ЗГЕНЕРОВАНО tools/build.mjs із tools/sw.template.js — не редагуй sw.js вручну.
   Стратегія: усі файли застосунку кешуються при встановленні (офлайн з першого запуску);
   свої файли — спершу з кешу; Google Fonts — з кешу з фоновим оновленням. */
const VERSION = "f59d32944f";
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
  "./content/hist/g6-g6s1.js",
  "./content/hist/g6-g6s2.js",
  "./content/hist/g6-g6s3.js",
  "./content/hist/g6-g6s4.js",
  "./content/hist/g6-g6s5.js",
  "./content/hist/g7-g7s1.js",
  "./content/hist/g7-g7s2.js",
  "./content/hist/g7-g7s3.js",
  "./content/hist/g7-g7s4.js",
  "./content/hist/g7-g7s5.js",
  "./content/hist/g8-g8s1.js",
  "./content/hist/g8-g8s2.js",
  "./content/hist/g8-g8s3.js",
  "./content/hist/g8-g8s4.js",
  "./content/hist/g8-g8s5.js",
  "./content/math/plan.js",
  "./content/math/g10-g10m1.js",
  "./content/math/g10-g10m2.js",
  "./content/math/g10-g10m3.js",
  "./content/math/g10-g10m4.js",
  "./content/math/g10-g10m5.js",
  "./content/math/g10-g10m6.js",
  "./content/math/g4-g4m1.js",
  "./content/math/g4-g4m2.js",
  "./content/math/g4-g4m3.js",
  "./content/math/g4-g4m4.js",
  "./content/math/g4-g4m5.js",
  "./content/math/g4-m4s1.js",
  "./content/math/g5-ms0.js",
  "./content/math/g5-ms0b.js",
  "./content/math/g5-ms1.js",
  "./content/math/g5-ms2.js",
  "./content/math/g5-ms3.js",
  "./content/math/g5-ms4.js",
  "./content/math/g6-g6m1.js",
  "./content/math/g6-g6m2.js",
  "./content/math/g6-g6m3.js",
  "./content/math/g6-g6m4.js",
  "./content/math/g6-g6m5.js",
  "./content/math/g7-g7m1.js",
  "./content/math/g7-g7m2.js",
  "./content/math/g7-g7m3.js",
  "./content/math/g7-g7m4.js",
  "./content/math/g7-g7m5.js",
  "./content/math/g7-g7m6.js",
  "./content/math/g7-g7m7.js",
  "./content/math/g7-g7m8.js",
  "./content/math/g8-g8m1.js",
  "./content/math/g8-g8m2.js",
  "./content/math/g8-g8m3.js",
  "./content/math/g8-g8m4.js",
  "./content/math/g8-g8m5.js",
  "./content/math/g8-g8m6.js",
  "./content/math/g9-g9m1.js",
  "./content/math/g9-g9m2.js",
  "./content/math/g9-g9m3.js",
  "./content/math/g9-g9m4.js",
  "./content/math/g9-g9m5.js",
  "./content/math/g9-g9m6.js",
  "./content/math/g9-g9m7.js",
  "./content/catalog.js",
  "./app/lab.js",
  "./app/app.js",
  "./img/h5-anna.jpg",
  "./img/h5-kma.jpg",
  "./img/h5-lviv.jpg",
  "./img/h5-map.jpg",
  "./img/h5-petryk.jpg",
  "./img/h5-sikorsky.jpg",
  "./img/h5-tryzub.jpg",
  "./img/hist/g6s2/animal-pot.jpg",
  "./img/hist/g6s2/house.jpg",
  "./img/hist/g6s2/pottery-making.jpg",
  "./img/hist/g6s2/talianky.jpg",
  "./img/hist/g6s3/pectoral.jpg",
  "./img/hist/g6s3/sarmatians-trajan.jpg",
  "./img/hist/g6s3/solokha-comb.jpg",
  "./img/hist/g6s5/chern.jpg",
  "./img/hist/g6s5/penk.jpg",
  "./img/hist/g6s5/zarub.jpg",
  "./img/hist/g7s1/oleg-igor.jpg",
  "./img/hist/g7s1/olga.jpg",
  "./img/hist/g7s1/svyatoslav.jpg",
  "./img/hist/g7s2/oranta.jpg",
  "./img/hist/g7s2/sofia.jpg",
  "./img/hist/g7s2/zlatnyky.jpg",
  "./img/hist/g7s3/cuman-statues.jpg",
  "./img/hist/g7s3/dolobsk.jpg",
  "./img/hist/g7s3/spas.jpg",
  "./img/hist/g7s4/lviv-1618.jpg",
  "./img/hist/g7s4/seal-yurii.jpg",
  "./img/hist/g7s5/krewo-act.jpg",
  "./img/hist/g8s1/lublin-matejko.jpg",
  "./img/hist/g8s1/ostroh-bible.jpg",
  "./img/hist/g8s2/beauplan-sich.jpg",
  "./img/hist/g8s2/cossacks-boplan.jpg",
  "./img/hist/g8s2/khotyn-fortress.jpg",
  "./img/hist/g8s3/khmelnytsky-hondius.jpg",
  "./img/hist/g8s3/khmelnytsky-kyiv.jpg",
  "./img/hist/g8s4/doroshenko.jpg",
  "./img/hist/g8s4/vyhovsky.jpg",
  "./img/hist/g8s5/mazepa.jpg",
  "./img/hist/g8s5/poltava-martin.jpg",
  "./img/hist/g8s5/rozumovsky-tocque.jpg",
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
