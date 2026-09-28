/* Слід — PWA: service worker (офлайн), індикатор мережі, встановлення на головний екран.
   Працює лише з http(s)-сторінки; в артефакті Claude чи з file:// тихо вимикається. */
(() => {
  const state = window.SLID_PWA = {
    deferred: null,
    standalone: matchMedia("(display-mode: standalone)").matches || navigator.standalone === true,
    ios: /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1),
    swReady: false,
    async install() {
      if (!state.deferred) return false;
      state.deferred.prompt();
      const { outcome } = await state.deferred.userChoice;
      state.deferred = null; notify();
      return outcome === "accepted";
    }
  };
  const notify = () => document.dispatchEvent(new CustomEvent("slid:pwa"));

  // мережа
  const chip = document.getElementById("chipNet");
  const net = () => { if (chip) chip.hidden = navigator.onLine; };
  addEventListener("online", net); addEventListener("offline", net); net();

  // встановлення (Chrome, Edge, Android)
  addEventListener("beforeinstallprompt", e => { e.preventDefault(); state.deferred = e; notify(); });
  addEventListener("appinstalled", () => { state.standalone = true; state.deferred = null; notify(); });

  // service worker
  const ok = "serviceWorker" in navigator && /^https?:$/.test(location.protocol) && !/claude\.ai|claudeusercontent/.test(location.hostname);
  if (ok) {
    addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").then(reg => {
        state.swReady = true; notify();
        reg.addEventListener("updatefound", () => {
          const w = reg.installing;
          w && w.addEventListener("statechange", () => {
            if (w.state === "installed" && navigator.serviceWorker.controller) {
              const t = document.getElementById("toast");
              if (t) { t.innerHTML = "<div>Оновлено уроки. Перезавантаж, щоб побачити нове.</div>"; setTimeout(() => t.innerHTML = "", 4000); }
            }
          });
        });
      }).catch(() => {});
    });
  }
})();
