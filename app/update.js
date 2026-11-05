/* Слід — оновлення застосунку без змішування версій (engine-sw-version-skew; docs/PUBLISHING.md «Оновлення PWA»).
   Новий service worker після встановлення одразу стає активним (skipWaiting + clients.claim) — сторінка отримує
   controllerchange. Сторінка, що вже працює, лишається консистентною (свої скрипти вже завантажено), але далі її
   обслуговує кеш нової версії, тож її перезавантажуємо — лише коли це безпечно: не посеред уроку чи тесту рівня
   (плеєр закрито), без відкритого аркуша, не на онбордингу й не під час введення тексту. Доти — тост «Є оновлення».
   Окремий файл, а не app/pwa.js: старий SW (до цієї зміни) роздає свої файли з будь-якого кешу, тож у змішаній
   сторінці стара pwa.js; файла update.js у старому кеші немає — він приходить з мережі новим і лагодить і цей випадок.
   Без service worker (file://, артефакт Claude) нічого не робить. */
(() => {
  const sw = navigator.serviceWorker;
  if (!sw || !/^https?:$/.test(location.protocol)) return;
  const U = window.SLID_UPDATE = { pending: false, had: !!sw.controller, reloads: 0 };
  const $ = id => document.getElementById(id);
  U.safe = () => {
    const p = $("player"), sh = $("sheetHost"), ae = document.activeElement;
    if (p && !p.hidden) return false;                                  // урок, тренування чи тест рівня
    if (sh && sh.children.length) return false;                         // аркуш уроку / діалог
    if (document.body && document.body.classList.contains("onb-mode")) return false;   // онбординг: ім'я й клас ще не збережено
    if (ae && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)) return false;
    return true;
  };
  let timer = 0, told = false;
  U.reload = () => { U.reloads++; location.reload(); };   // тест підміняє, щоб порахувати
  const tick = () => {
    if (!U.pending) return;
    if (U.safe()) { clearInterval(timer); timer = 0; U.pending = false; U.reload(); return; }
    if (!told) { told = true; const t = $("toast");
      if (t) { t.innerHTML = "<div>Є оновлення. Застосунок перезапуститься, коли закінчиш урок.</div>"; setTimeout(() => { if (t.textContent.startsWith("Є оновлення")) t.innerHTML = ""; }, 4000); } }
  };
  sw.addEventListener("controllerchange", () => {
    // перше встановлення: сторінку щойно завантажено з мережі, перезавантажувати нема чого
    if (!U.had) { U.had = true; return; }
    U.pending = true; tick();
    if (U.pending && !timer) timer = setInterval(tick, 1000);
  });
})();
