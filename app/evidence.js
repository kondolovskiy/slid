/* Слід — журнал подій (Evidence V2, docs/EVIDENCE.md). Історія того, що робила дитина: екрани, спроби відповіді,
   кінці уроків/тренувань/тестів рівня, зміни SRS-коробок і плану, клас. Лише для дослідження якості діагностики;
   поточний стан і поведінка застосунку (localStorage «slid.v1», record/detect/SRS/план) від журналу НЕ залежать.

   Принципи:
   - log(type, data) — синхронний, нічого не повертає й ніколи не кидає; data — об'єкт або функція без побічних ефектів
     (обчислюється одразу, у try/catch: помилка в ній губить лише цю подію);
   - запис у IndexedDB — асинхронною чергою, пакетами; без IndexedDB (приватний режим, старий браузер, file://) події
     тихо губляться, застосунок працює як раніше;
   - нічого не йде в мережу; поле synced (0) — для майбутньої синхронізації;
   - приватність: лише анонімні випадкові id пристрою (did) і профілю (pid), без імені;
   - ротація: понад LIMITS.max подій — найстаріші видаляються до LIMITS.keep; подія обрізається до LIMITS.bytes.
   Консоль: SLID_EVIDENCE.stats(), SLID_EVIDENCE.export() (об'єкт), SLID_EVIDENCE.download() (файл JSON). */
(() => {
  const SCHEMA = 1, DB_NAME = "slid-evidence", DB_VER = 1, EV = "events", META = "meta";
  const LIMITS = { max: 15000, keep: 13500, queue: 1000, batch: 40, delay: 1200, str: 300, arr: 60, depth: 6, bytes: 2048, versionWait: 1000 };

  /* ---------- чисті функції (перевіряє tools/test-evidence.mjs) ---------- */
  /** Копія даних, придатна для JSON і structured clone: Set → відсортований масив, Map → об'єкт, функції/undefined відкинуто,
      нескінченні числа → null, довгі рядки й масиви обрізано, глибина обмежена. */
  function sanitize(v, lim = LIMITS, depth = 0) {
    if (v === null || v === undefined) return v === null ? null : undefined;
    const t = typeof v;
    if (t === "string") return v.length > lim.str ? v.slice(0, lim.str) + "…" : v;
    if (t === "number") return Number.isFinite(v) ? v : null;
    if (t === "boolean") return v;
    if (t === "bigint") return String(v);
    if (t === "function" || t === "symbol") return undefined;
    if (depth >= lim.depth) return "[…]";
    const tag = Object.prototype.toString.call(v);   // не instanceof: дані можуть прийти з іншого realm (iframe, vm)
    if (tag === "[object Set]") v = [...v].sort((a, b) => (a > b) - (a < b));
    else if (tag === "[object Map]") v = Object.fromEntries(v);
    else if (tag === "[object Date]") return Number.isFinite(v.getTime()) ? v.toISOString() : null;
    if (Array.isArray(v)) {
      const out = v.slice(0, lim.arr).map(x => { const y = sanitize(x, lim, depth + 1); return y === undefined ? null : y; });
      if (v.length > lim.arr) out.push("…+" + (v.length - lim.arr));
      return out;
    }
    const out = {};
    for (const k of Object.keys(v)) { const y = sanitize(v[k], lim, depth + 1); if (y !== undefined) out[k] = y; }
    return out;
  }
  /** Подія без місця в сховищі: seq, did, pid, cv дописує flush. Завелика d замінюється переліком ключів (trunc). */
  function makeEvent(type, data, env, lim = LIMITS) {
    let d = sanitize(data, lim);
    if (d === undefined) d = null;
    const e = { v: SCHEMA, type: String(type).slice(0, 40), t: env.now(), tzo: env.tzo(), n: env.n, ms: Math.round(env.mono()), sid: env.sid, net: env.online() ? 1 : 0, synced: 0, d };
    if (env.pid) e.pid = env.pid;
    if (JSON.stringify(e).length > lim.bytes) e.d = { trunc: true, keys: d && typeof d === "object" ? Object.keys(d).slice(0, 30) : [] };
    return e;
  }
  /** Скільки найстаріших подій видалити: нічого, доки count ≤ max; інакше — до keep. */
  const trimCount = (count, lim = LIMITS) => count > lim.max ? count - lim.keep : 0;
  const rid = () => { try { if (crypto.randomUUID) return crypto.randomUUID(); const b = crypto.getRandomValues(new Uint8Array(16)); return [...b].map(x => x.toString(16).padStart(2, "0")).join(""); } catch (e) { return Math.random().toString(36).slice(2) + Date.now().toString(36); } };

  /** Порівняння знімків стану після save(): зміни SRS-коробок, планів (за предметом і класом) і класу. */
  function stateSnap(S) {
    const plans = {};
    for (const [c, p] of Object.entries(S.plan || {})) if (p && !Number.isInteger(p.grade)) plans[c + "|-"] = JSON.stringify(p);
    for (const [c, by] of Object.entries(S.planByGrade || {})) for (const [g, p] of Object.entries(by || {})) plans[c + "|" + g] = JSON.stringify(p);
    return { grade: S.grade ?? null, srsJ: JSON.stringify(S.srs || {}), plans };
  }
  function stateDiff(a, b) {
    const out = [];
    if (a.grade !== b.grade) out.push(["grade", { from: a.grade, to: b.grade }]);
    if (a.srsJ !== b.srsJ) {
      const A = JSON.parse(a.srsJ), B = JSON.parse(b.srsJ), ch = [];
      for (const l of new Set([...Object.keys(A), ...Object.keys(B)])) if (JSON.stringify(A[l]) !== JSON.stringify(B[l])) ch.push({ l, from: A[l] ?? null, to: B[l] ?? null });
      if (ch.length) out.push(["srs", { n: ch.length, ch: ch.slice(0, 40) }]);
    }
    for (const k of new Set([...Object.keys(a.plans), ...Object.keys(b.plans)])) if (a.plans[k] !== b.plans[k]) {
      const [c, g] = k.split("|"), p = b.plans[k] ? JSON.parse(b.plans[k]) : null;
      out.push(["plan", { c, grade: g === "-" ? null : +g, diag: p?.diag ?? null,
        steps: p ? (p.steps || []).map(st => ({ l: st.l, src: st.src || null, why: st.why || null, done: !!st.done })) : null,
        base: p ? (p.base || []).map(b => b.topic) : null, known: p ? (p.known || []).length : null }]);
    }
    return out;
  }

  /* ---------- сховище: IndexedDB ---------- */
  const req = r => new Promise((ok, no) => { r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error); });
  const done = tx => new Promise((ok, no) => { tx.oncomplete = () => ok(); tx.onerror = tx.onabort = () => no(tx.error || new Error("abort")); });
  function idbBackend(idb) {
    let db = null;
    const open = () => new Promise((ok, no) => {
      const r = idb.open(DB_NAME, DB_VER);
      r.onupgradeneeded = () => { const d = r.result;
        if (!d.objectStoreNames.contains(EV)) d.createObjectStore(EV, { keyPath: "seq" }).createIndex("synced", "synced");
        if (!d.objectStoreNames.contains(META)) d.createObjectStore(META); };
      r.onsuccess = () => { db = r.result; db.onversionchange = () => { try { db.close(); } catch (e) {} db = null; }; ok(); };
      r.onerror = () => no(r.error); r.onblocked = () => no(new Error("blocked"));
    });
    return {
      async init() {   // id пристрою й профілю: створюються один раз (транзакція серіалізує вкладки)
        await open();
        const tx = db.transaction(META, "readwrite"), m = tx.objectStore(META);
        let did = await req(m.get("did")), pid = await req(m.get("pid"));
        if (!did) { did = rid(); m.put(did, "did"); }
        if (!pid) { pid = rid(); m.put(pid, "pid"); }
        await done(tx); return { did, pid };
      },
      async setMeta(k, v) { const tx = db.transaction(META, "readwrite"); tx.objectStore(META).put(v, k); await done(tx); },
      /** Додає пакет: seq — наскрізний лічильник пристрою (meta.seq) у тій самій транзакції. */
      async append(list) {
        const tx = db.transaction([EV, META], "readwrite"), m = tx.objectStore(META), s = tx.objectStore(EV);
        let seq = (await req(m.get("seq"))) || 0;
        for (const e of list) { e.seq = ++seq; s.put(e); }
        m.put(seq, "seq"); await done(tx); return seq;
      },
      async trim(lim) {
        const tx = db.transaction(EV, "readwrite"), s = tx.objectStore(EV), n = trimCount(await req(s.count()), lim);
        if (n > 0) { const keys = await req(s.getAllKeys(null, n)); if (keys.length) s.delete(IDBKeyRange.upperBound(keys[keys.length - 1])); }
        await done(tx); return n;
      },
      async all() { const tx = db.transaction(EV, "readonly"); return req(tx.objectStore(EV).getAll()); },
      async counts() { const tx = db.transaction(EV, "readonly"), s = tx.objectStore(EV);
        const [count, unsynced, first, last] = await Promise.all([req(s.count()), req(s.index("synced").count(0)), req(s.openCursor()), req(s.openCursor(null, "prev"))]);
        return { count, unsynced, first: first ? first.value.seq : null, last: last ? last.value.seq : null, firstT: first ? first.value.t : null, lastT: last ? last.value.t : null }; },
      async clear() { const tx = db.transaction(EV, "readwrite"); tx.objectStore(EV).clear(); await done(tx); }
    };
  }

  /* ---------- журнал ---------- */
  /** env: { now, tzo, mono, online, version() → Promise<string|null>, setTimeout, clearTimeout }; backend — як idbBackend або null. */
  const MICRO = {};   // позначка «запис уже заплановано мікрозадачею» (не id таймера)
  function create(backend, env, lim = LIMITS) {
    let queue = [], timer = null, chain = Promise.resolve(), ready = null, ids = null, cv, enabled = !!backend, fails = 0, dropped = 0, written = 0, n = 0, snap = null, cause = null, scrT = null, pidNew = null;
    const sid = rid();
    const disable = () => { enabled = false; dropped += queue.length; queue = []; };
    if (backend) ready = backend.init().then(r => { ids = r; }, () => disable());
    const verP = () => cv !== undefined ? Promise.resolve(cv) : Promise.race([Promise.resolve().then(env.version).catch(() => null), new Promise(ok => env.setTimeout(() => ok(null), lim.versionWait))]).then(v => (cv = v || null));
    function schedule() {
      if (timer || !enabled) return;
      if (queue.length >= lim.batch) { timer = MICRO; Promise.resolve().then(() => { timer = null; api.flush(); }); return; }
      timer = env.setTimeout(() => { timer = null; api.flush(); }, lim.delay);
    }
    async function write() {
      if (!enabled) return;
      await ready; if (!enabled || !ids) { disable(); return; }
      await verP();
      if (pidNew) { const p = pidNew; pidNew = null; try { await backend.setMeta("pid", p); } catch (e) {} ids.pid = p; }
      while (queue.length && enabled) {
        const list = queue.splice(0, lim.batch);
        for (const e of list) { e.did = ids.did; if (!e.pid) e.pid = ids.pid; e.cv = cv; }
        try { await backend.append(list); written += list.length; fails = 0; }
        catch (e) { dropped += list.length; if (++fails >= 3) disable(); }
      }
      if (enabled && written) try { await backend.trim(lim); } catch (e) {}
    }
    const api = {
      SCHEMA, LIMITS: lim,
      get enabled() { return enabled; },
      log(type, data) {
        try {
          if (!enabled) return;
          const d = typeof data === "function" ? data() : data;
          const mono = env.mono();
          const e = makeEvent(type, d, { ...env, mono: () => mono, n: ++n, sid, pid: pidNew || (ids && ids.pid) || null }, lim);
          if (type === "screen") scrT = mono;
          else if (type === "answer" && scrT !== null) e.dt = Math.round(mono - scrT);   // час від показу екрана до цієї спроби
          if (type !== "srs" && type !== "plan" && type !== "grade") cause = e.n; else e.by = cause;
          if (queue.length >= lim.queue) { queue.shift(); dropped++; }
          queue.push(e); schedule();
        } catch (e) {}
      },
      /** Викликається після кожного save(): перший виклик — знімок без подій, далі — події srs / plan / grade про зміни. */
      observe(S) {
        try {
          if (!enabled || !S) return;
          const b = stateSnap(S);
          if (snap) for (const [type, d] of stateDiff(snap, b)) api.log(type, d);
          snap = b;
        } catch (e) {}
      },
      /** Новий анонімний профіль (після «Скинути прогрес»); id пристрою лишається. */
      newProfile() { try { if (enabled) { pidNew = rid(); snap = null; } } catch (e) {} },
      /** Записати чергу зараз. Промис завжди виконується (без відхилення). */
      flush() { if (timer && timer !== MICRO) { env.clearTimeout(timer); timer = null; } chain = chain.then(write).catch(() => {}); return chain; },
      async stats() {
        await api.flush();
        const base = { schema: SCHEMA, enabled, queued: queue.length, dropped, written, sid, cv: cv ?? null, did: ids?.did ?? null, pid: ids?.pid ?? null };
        if (!enabled) return base;
        try { return { ...base, ...(await backend.counts()) }; } catch (e) { return base; }
      },
      /** Увесь журнал для дослідження: { schema, exportedAt, did, events: [...] } у порядку seq. */
      async export() {
        await api.flush();
        let events = [];
        if (enabled) try { events = (await backend.all()).sort((a, b) => a.seq - b.seq); } catch (e) {}
        return { schema: SCHEMA, app: "slid", exportedAt: new Date(env.now()).toISOString(), did: ids?.did ?? null, cv: cv ?? null, dropped, events };
      },
      async clear() { await api.flush(); if (enabled) try { await backend.clear(); } catch (e) {} }
    };
    return api;
  }

  /* ---------- браузер ---------- */
  const g = typeof window !== "undefined" ? window : globalThis;
  let idb = null;
  try { idb = g.indexedDB || null; if (idb && typeof idb.open !== "function") idb = null; } catch (e) { idb = null; }
  const perf = () => { try { return performance.now(); } catch (e) { return 0; } };
  const env = {
    now: () => Date.now(), tzo: () => new Date().getTimezoneOffset(), mono: perf,
    online: () => { try { return navigator.onLine !== false; } catch (e) { return true; } },
    setTimeout: (f, ms) => setTimeout(f, ms), clearTimeout: t => clearTimeout(t),
    /** Версія змісту = VERSION активного service worker (sw.js); без нього — null. */
    version: () => new Promise(ok => {
      try {
        const c = navigator.serviceWorker && navigator.serviceWorker.controller;
        if (!c || typeof MessageChannel === "undefined") return ok(null);
        const ch = new MessageChannel(); ch.port1.onmessage = e => ok(typeof e.data === "string" ? e.data : null);
        c.postMessage("slid:version", [ch.port2]);
      } catch (e) { ok(null); }
    })
  };
  let backend = null;
  try { if (idb) backend = idbBackend(idb); } catch (e) { backend = null; }
  const api = create(backend, env);
  api.download = async () => {
    try {
      const data = await api.export(), a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], { type: "application/json" }));
      a.download = `slid-evidence-${new Date(env.now()).toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
      return data.events.length;
    } catch (e) { return 0; }
  };
  api._core = { sanitize, makeEvent, trimCount, stateSnap, stateDiff, create, idbBackend };
  try {
    addEventListener("pagehide", () => api.flush());
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") api.flush(); });
  } catch (e) {}
  g.SLID_EVIDENCE = api;
})();
