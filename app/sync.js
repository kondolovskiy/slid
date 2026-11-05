/* Слід · синхронізація прогресу між пристроями (engine-sync-login; сервер — docs/BACKEND.md, API v1).
   Офлайн-перший: без адреси API (app/config.js) або без входу модуль нічого не робить, застосунок працює як раніше.
   Синхронізується лише slid.v1 (без name); slid.evidence.pending і slid.hyp — локальні дані пристрою.

   Злиття — тристороннє (merge3): base — стан, який пристрій востаннє бачив на сервері; local — стан пристрою; remote — сервер.
   Лічильники (xp, days, skills) = remote + приріст на пристрої від base (повторне злиття не подвоює бали); зірки, best, bestCombo,
   prN — максимум; done — «або»; badges — об'єднання з ранішою датою; errs — мультимножина (додане й видалене на пристрої
   переноситься на сервер), сортування за днем і ліміт 80; решта словників — за ключем: змінилось лише на одному боці — беремо
   його, на обох — правило поля (новіша дата / новіший термін SRS / пристрій). Поля пристрою (name, theme, subject, unlockAll,
   weekOverride) — завжди з пристрою. Невідоме поле (напр. майбутнє aiv) — за ключем, конфлікт — пристрій; жодне не губиться.
   Перелік полів звіряє tools/test-sync.mjs із fresh() в app/app.js.

   Стан клієнта — localStorage «slid.sync»: { token, id, school, rev, base, dirty, replace }. dirty — «черга» офлайн-записів:
   стан пристрою змінився й ще не на сервері; відправка — при появі мережі, поверненні у вкладку, після save (з паузою). */
(function (g) {
  "use strict";
  const ERR_CAP = 80;
  const isObj = x => !!x && typeof x === "object" && !Array.isArray(x);
  const obj = x => isObj(x) ? x : {};
  const clone = x => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
  function canon(x) {
    if (x === undefined) return "u";
    if (x === null || typeof x !== "object") return JSON.stringify(x);
    if (Array.isArray(x)) return "[" + x.map(canon).join(",") + "]";
    return "{" + Object.keys(x).sort().filter(k => x[k] !== undefined).map(k => JSON.stringify(k) + ":" + canon(x[k])).join(",") + "}";
  }
  const eq = (a, b) => canon(a) === canon(b);
  const keys = (...os) => [...new Set(os.flatMap(o => Object.keys(obj(o))))];
  const num = x => typeof x === "number" && Number.isFinite(x) ? x : 0;
  const later = (a, b) => String(a ?? "") > String(b ?? "");

  /** Одне значення: змінилось лише на одному боці — воно; на обох — conflict(l, r, b). undefined — поля немає. */
  function pick3(b, l, r, conflict) { if (eq(l, b)) return clone(r); if (eq(r, b) || eq(l, r)) return clone(l); return clone(conflict(l, r, b)); }
  /** Словник: pick3 за кожним ключем. */
  function map3(b, l, r, conflict) {
    const out = {}; b = obj(b); l = obj(l); r = obj(r);
    for (const k of keys(b, l, r)) { const v = pick3(b[k], l[k], r[k], (x, y, z) => conflict(x, y, z, k)); if (v !== undefined) out[k] = v; }
    return out;
  }
  const counter = (b, l, r) => num(r) + Math.max(0, num(l) - num(b));
  function counterMap(b, l, r) { const out = {}; b = obj(b); l = obj(l); r = obj(r); for (const k of keys(l, r)) { const v = counter(b[k], l[k], r[k]); if (v) out[k] = v; } return out; }
  const either = f => (l, r) => l === undefined ? r : r === undefined ? l : f(l, r);
  const localWins = (l, r) => l;

  /** План: новіша дата тесту; та сама — план пристрою, позначки done кроків — «або» з серверними. */
  const planC = either((l, r) => {
    if (later(r.date, l.date)) return r; if (later(l.date, r.date)) return l;
    const rd = new Set((Array.isArray(r.steps) ? r.steps : []).filter(s => s && s.done).map(s => s.l));
    return { ...l, steps: (Array.isArray(l.steps) ? l.steps : []).map(s => s && !s.done && rd.has(s.l) ? { ...s, done: true } : s) };
  });
  /** errs — мультимножина записів: remote − (видалене на пристрої) + (додане на пристрої); за днем (стабільно), останні ERR_CAP. */
  function errs3(b, l, r) {
    const A = x => Array.isArray(x) ? x : [], count = xs => { const m = new Map(); for (const e of xs) { const k = canon(e); m.set(k, (m.get(k) || 0) + 1); } return m; };
    const B = count(A(b)), L = count(A(l)), out = [];
    const drop = new Map([...B].map(([k, n]) => [k, Math.max(0, n - (L.get(k) || 0))]));
    for (const e of A(r)) { const k = canon(e), d = drop.get(k) || 0; if (d) { drop.set(k, d - 1); continue; } out.push(clone(e)); }
    const add = new Map([...L].map(([k, n]) => [k, Math.max(0, n - (B.get(k) || 0))]));
    for (const e of A(l)) { const k = canon(e), a = add.get(k) || 0; if (a) { add.set(k, a - 1); out.push(clone(e)); } }
    const sorted = out.map((e, i) => [e, i]).sort((x, y) => String(x[0]?.d ?? "").localeCompare(String(y[0]?.d ?? "")) || x[1] - y[1]).map(x => x[0]);
    return sorted.slice(-ERR_CAP);
  }
  function lessons3(l, r) {
    const out = {}; l = obj(l); r = obj(r);
    for (const k of keys(l, r)) {
      const a = l[k], c = r[k];
      if (!isObj(a) || !isObj(c)) { out[k] = clone(isObj(a) ? a : c); continue; }
      out[k] = { ...clone(c), ...clone(a), done: !!(a.done || c.done), stars: Math.max(num(a.stars), num(c.stars)), best: Math.max(num(a.best), num(c.best)) };
    }
    return out;
  }
  function badges3(l, r) { const out = {}; l = obj(l); r = obj(r); for (const k of keys(l, r)) out[k] = l[k] === undefined ? r[k] : r[k] === undefined ? l[k] : (later(l[k], r[k]) ? r[k] : l[k]); return out; }
  function skills3(b, l, r) {
    const out = {}; b = obj(b); l = obj(l); r = obj(r);
    for (const k of keys(l, r)) out[k] = { ...clone(obj(r[k])), ...clone(obj(l[k])), ok: counter(obj(b[k]).ok, obj(l[k]).ok, obj(r[k]).ok), total: counter(obj(b[k]).total, obj(l[k]).total, obj(r[k]).total) };
    return out;
  }
  const streak3 = (l, r) => { if (!isObj(l)) return clone(r); if (!isObj(r)) return clone(l);
    if (later(r.last, l.last)) return clone(r); if (later(l.last, r.last)) return clone(l); return { ...clone(l), count: Math.max(num(l.count), num(r.count)) }; };
  /** diagRun: тест завершено чи почато знову на одному боці (запису немає) — без запису; обидва відповідали — відповіді разом, пристрій перемагає. */
  const diagRunC = (l, r) => l === undefined || r === undefined ? undefined : { ...clone(obj(r)), ...clone(obj(l)) };

  /** Поля стану й правила. «Пристрій» — значення з пристрою, на сервер теж іде, але чужим не перезаписується. */
  const DEVICE = ["name", "theme", "subject", "unlockAll", "weekOverride"];
  const RULES = {
    grade: (b, l, r) => pick3(b, l, r, localWins),
    xp: counter, days: counterMap, skills: skills3,
    lessons: (b, l, r) => lessons3(l, r), badges: (b, l, r) => badges3(l, r), streak: (b, l, r) => streak3(l, r),
    bestCombo: (b, l, r) => Math.max(num(l), num(r)), prN: (b, l, r) => Math.max(num(l), num(r)),
    polls: (b, l, r) => map3(b, l, r, localWins), seen: (b, l, r) => map3(b, l, r, localWins), skw: (b, l, r) => map3(b, l, r, localWins),
    diag: (b, l, r) => map3(b, l, r, either((x, y) => later(y.date, x.date) ? y : x)),
    diagRun: (b, l, r) => map3(b, l, r, diagRunC),
    diagRunRev: (b, l, r) => map3(b, l, r, either((x, y) => Math.max(num(x), num(y)))),
    diagSkip: (b, l, r) => map3(b, l, r, localWins),
    plan: (b, l, r) => map3(b, l, r, planC),
    planByGrade: (b, l, r) => map3(b, l, r, (x, y, z) => map3(z, x, y, planC)),
    mast: (b, l, r) => map3(b, l, r, either((x, y) => later(y.d, x.d) ? y : x)),
    srs: (b, l, r) => map3(b, l, r, either((x, y) => later(y.due, x.due) ? y : x)),
    errs: errs3,
    skFix: (b, l, r) => [...new Set([...(Array.isArray(r) ? r : []), ...(Array.isArray(l) ? l : [])])],
  };
  const FIELDS = [...DEVICE, ...Object.keys(RULES)];

  /** Злиття стану: base — останній бачений серверний стан (null — ще не бачив: лічильники сумуються), local, remote. */
  function merge3(base, local, remote) {
    const b = obj(base), l = obj(local), r = obj(remote), out = {};
    for (const k of keys(b, l, r)) {
      let v;
      if (DEVICE.includes(k)) v = clone(l[k]);
      else if (RULES[k]) v = RULES[k](clone(b[k]), clone(l[k]), clone(r[k]));
      else v = pick3(b[k], l[k], r[k], localWins);
      if (v !== undefined) out[k] = v;
    }
    return out;
  }
  /** На сервер — без name (рішення: ім'я дитини не передається). */
  const strip = s => { const o = clone(obj(s)); delete o.name; return o; };
  const hasProgress = s => num(obj(s).xp) > 0 || Object.keys(obj(obj(s).lessons)).length > 0 || Object.keys(obj(obj(s).diag)).length > 0;

  /* ---------- клієнт ---------- */
  const MSG = {
    google401: "Цей акаунт не шкільний. Увійди акаунтом своєї школи.",
    claim401: "Код невірний або вже не діє. Візьми новий код на іншому пристрої.",
    auth401: "Вхід на цьому пристрої більше не діє. Увійди знову.",
    429: "Забагато спроб. Зачекай хвилину й спробуй знову.",
    503: "Сервер зараз недоступний. Спробуй пізніше.",
    offline: "Немає інтернету. Спробуй, коли з'явиться мережа.",
  };
  const errText = (code, ctx) => code === 401 ? MSG[ctx + "401"] || MSG.auth401 : code === 429 ? MSG[429] : code === "offline" ? MSG.offline : MSG[503];

  /** env: { api, request(method, path, body, token) → Promise<{ status, data }> (мережа — throw), load() / persist(st) — slid.sync,
      getState(), setState(data, how: "merge"|"replace") → false, якщо зараз не можна (урок відкрито), now(), setTimeout, clearTimeout, onChange() } */
  function create(env) {
    let st = null, busy = null, timer = null, status = { s: "off" };
    try { const v = env.load(); if (isObj(v) && typeof v.token === "string" && v.token) st = v; } catch (e) {}
    const persist = () => { try { env.persist(st); } catch (e) {} };
    const set = s => { status = s; try { env.onChange && env.onChange(status); } catch (e) {} };
    if (st) status = { s: st.dirty ? "pending" : "idle" };
    const call = async (m, p, body, tok) => { try { return await env.request(m, p, body, tok); } catch (e) { return { status: "offline" }; } };
    function schedule(ms) { if (!st) return; if (timer) env.clearTimeout(timer); timer = env.setTimeout(() => { timer = null; api.sync(); }, ms); }

    async function run() {
      for (let i = 0; i < 4 && st; i++) {
        const local = env.getState();
        if (st.dirty && !st.replace) {
          if (st.base && st.rev && eq(strip(local), st.base)) { st.dirty = false; persist(); continue; }
          const data = strip(local), r = await call("PUT", "/v1/progress", { rev: st.rev || 0, data }, st.token);
          if (r.status === 200) { st.rev = r.data.rev; st.base = r.data.data ?? data; st.dirty = false; st.at = env.now(); persist(); return { s: "ok", at: st.at }; }
          if (r.status !== 409) return fail(r.status);
          if (!apply(r.data)) { schedule(10000); return { s: "later" }; }
          continue;
        }
        const r = await call("GET", "/v1/progress", null, st.token);
        if (r.status !== 200) return fail(r.status);
        if (!st.replace && r.data.rev === st.rev) { st.at = env.now(); persist(); return { s: "ok", at: st.at }; }
        if (!apply(r.data)) { schedule(10000); return { s: "later" }; }
        if (!st.dirty) return { s: "ok", at: st.at = env.now() };
      }
      return st ? { s: "later" } : { s: "off" };
    }
    /** Серверна версія { rev, data } → злити (або замінити — вхід «це не мій прогрес»), запам'ятати як base. */
    function apply(srv) {
      const data = isObj(srv && srv.data) ? srv.data : null, local = env.getState();
      const how = st.replace ? "replace" : "merge", next = how === "replace" ? (data || {}) : merge3(st.base, local, data || {});
      if (how === "replace" || !eq(strip(next), strip(local))) { if (env.setState(clone(next), how) === false) return false; }
      st.rev = srv.rev || 0; st.base = data; st.replace = false; st.dirty = !eq(strip(next), data || {}); persist();
      return true;
    }
    function fail(code) {
      if (code === 401) { st = null; persist(); return { s: "error", code, text: errText(401, "auth") }; }   // токен відкликано — вихід на пристрої
      schedule(code === "offline" ? 60000 : 30000);
      return { s: code === "offline" ? "offline" : "error", code, text: errText(code) };
    }
    async function login(path, body, ctx, mine) {
      const r = await call("POST", path, body);
      if (r.status !== 200 && r.status !== 201) return { ok: false, text: errText(r.status, ctx) };
      st = { token: r.data.token, id: r.data.id, school: null, rev: 0, base: null, dirty: !!mine, replace: !mine }; persist();
      const me = await call("GET", "/v1/me", null, st.token); if (me.status === 200 && st) { st.school = me.data.school || null; persist(); }
      const res = await api.sync();
      return { ok: true, res };
    }
    const api = {
      enabled: !!env.api, merge3, strip, hasProgress,
      signedIn: () => !!st, school: () => st && st.school, status: () => status,
      /** Вхід шкільним акаунтом. mine — дитина підтвердила, що прогрес на пристрої її (злити); інакше прогрес акаунта замінить пристрій. */
      loginGoogle: (idToken, mine) => login("/v1/auth/google", { idToken }, "google", mine),
      claim: (code, mine) => login("/v1/pairing/claim", { code: String(code || "") }, "claim", mine),
      async pairing() { if (!st) return { ok: false, text: MSG.auth401 }; const r = await call("POST", "/v1/pairing", {}, st.token);
        if (r.status === 401) { fail(401); set({ s: "off" }); }
        return r.status === 200 || r.status === 201 ? { ok: true, code: r.data.code, expiresAt: r.data.expiresAt } : { ok: false, text: errText(r.status) }; },
      signOut() { if (timer) env.clearTimeout(timer); timer = null; st = null; persist(); set({ s: "off" }); },
      /** Після кожного save: стан змінився — у чергу, відправка з паузою. */
      changed() { if (!st || st.dirty) { if (st) schedule(3000); return; } st.dirty = true; persist(); set({ s: "pending" }); schedule(3000); },
      sync() {
        if (!st || !env.api) return Promise.resolve({ s: "off" });
        if (busy) return busy;
        set({ s: "busy" });
        busy = run().catch(() => ({ s: "error", text: MSG[503] })).then(r => { busy = null; set(st ? r : { s: "off", text: r.text }); return r; });
        return busy;
      },
    };
    return api;
  }

  const SYNC = { merge3, strip, hasProgress, create, FIELDS, DEVICE, ERR_CAP, MSG };
  g.SLID_SYNC_CORE = SYNC;
  if (typeof module !== "undefined" && module.exports) module.exports = SYNC;

  /* ---------- браузер: адреса з app/config.js, fetch без кешу (SW відповіді API не кешує: інший origin, або no-store) ---------- */
  if (typeof window === "undefined" || !g.document) return;
  const cfg = g.SLID_CONFIG || {}, base = typeof cfg.api === "string" ? cfg.api.replace(/\/+$/, "") : "";
  const KEY = "slid.sync";
  g.SLID_SYNC = {
    core: SYNC, googleClientId: typeof cfg.googleClientId === "string" ? cfg.googleClientId : "",
    /** app.js передає доступ до стану; повертає клієнт або null (синхронізацію вимкнено — немає адреси API). */
    init(hooks) {
      if (!base) return null;
      const client = create({
        api: base,
        async request(method, path, body, token) {
          const ac = typeof AbortController !== "undefined" ? new AbortController() : null, t = ac && setTimeout(() => ac.abort(), 15000);
          try {
            const h = { Accept: "application/json" }; if (body) h["Content-Type"] = "application/json"; if (token) h.Authorization = "Bearer " + token;
            const res = await fetch(base + path, { method, headers: h, body: body ? JSON.stringify(body) : undefined, cache: "no-store", credentials: "omit", signal: ac && ac.signal });
            let data = null; try { data = await res.json(); } catch (e) {}
            return { status: res.status, data };
          } finally { if (t) clearTimeout(t); }
        },
        load: () => { try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { return null; } },
        persist: st => { if (st) localStorage.setItem(KEY, JSON.stringify(st)); else localStorage.removeItem(KEY); },
        getState: hooks.getState, setState: hooks.setState, onChange: hooks.onChange,
        now: () => Date.now(), setTimeout: (f, ms) => setTimeout(f, ms), clearTimeout: t => clearTimeout(t),
      });
      addEventListener("online", () => client.sync());
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") client.sync(); });
      setTimeout(() => client.sync(), 1500);
      return client;
    },
    /** Google Identity Services: скрипт вантажиться лише на вимогу (мережа), кнопка — у el; cb(idToken). */
    googleButton(el, cb) {
      const id = g.SLID_SYNC.googleClientId; if (!id) return Promise.resolve(false);
      const ready = () => { try { g.google.accounts.id.initialize({ client_id: id, callback: r => cb(r && r.credential) }); g.google.accounts.id.renderButton(el, { theme: "outline", size: "large", text: "signin_with", locale: "uk" }); return true; } catch (e) { return false; } };
      if (g.google && g.google.accounts && g.google.accounts.id) return Promise.resolve(ready());
      return new Promise(ok => { const s = document.createElement("script"); s.src = "https://accounts.google.com/gsi/client"; s.async = true;
        s.onload = () => ok(ready()); s.onerror = () => ok(false); document.head.appendChild(s); });
    },
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
