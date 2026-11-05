/* Слід — service worker. ЗГЕНЕРОВАНО tools/build.mjs із tools/sw.template.js — не редагуй sw.js вручну.
   Стратегія — атомарна версія (engine-sw-version-skew): сторінка (index.html) і всі файли застосунку беруться з кешу
   ЦІЄЇ версії (slid-<VERSION>), тож новий список скриптів і старий рушій не змішуються. Мережа — лише для того,
   чого в кеші цієї версії немає. Нова версія: встановлення (кожен файл перевіряється на сервері, cache: "no-cache") → skipWaiting →
   activate (старі кеші видаляються) → clients.claim → сторінка отримує controllerchange й перезавантажується,
   коли це безпечно (app/update.js: не посеред уроку чи тесту рівня). Google Fonts — з кешу з фоновим оновленням. */
const VERSION = "__VERSION__";
const CACHE = "slid-" + VERSION;
const FONTS = "slid-fonts";
const ASSETS = __ASSETS__;

self.addEventListener("install", e => {
  // cache: "no-cache" — кожен файл перевіряється на сервері (умовний запит; незмінний — 304 без завантаження), а не береться
  // із застарілого HTTP-кешу браузера (GitHub Pages: max-age=600) — інакше в нову версію потрапить старий app.js.
  // Не "reload": той щоразу завантажує всі ~58 МБ заново (рев'ю P1-1).
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: "no-cache" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("slid-") && k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// версія змісту для журналу подій (app/evidence.js, docs/EVIDENCE.md): сторінка питає через MessageChannel
self.addEventListener("message", e => {
  if (e.data === "slid:version" && e.ports && e.ports[0]) e.ports[0].postMessage(VERSION);
});

// лише з кешу цієї версії; немає — мережа (і докешувати в цю ж версію)
const fromCache = (req, key) => caches.open(CACHE).then(async c => {
  const hit = await c.match(key || req, { ignoreSearch: true });
  if (hit) return hit;
  const r = await fetch(req);
  if (r.ok && !r.redirected) c.put(key || req, r.clone());
  return r;
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

  // сторінка застосунку (/, /index.html): index.html цієї ж версії, що й скрипти; оновлення приходить новим SW
  if (req.mode === "navigate") {
    const scope = new URL(self.registration.scope), rel = url.pathname.slice(scope.pathname.length);
    if (rel === "" || rel === "index.html") { e.respondWith(fromCache(req, "./index.html")); return; }
    e.respondWith(fetch(req).catch(() => caches.open(CACHE).then(c => c.match("./index.html"))));
    return;
  }
  e.respondWith(fromCache(req));
});
