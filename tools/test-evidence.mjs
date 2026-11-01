#!/usr/bin/env node
// Слід · вузлові тести журналу подій (app/evidence.js, docs/EVIDENCE.md): схема, серіалізація, черга й пакети, ротація,
// відмовостійкість (без сховища / збої запису), знімки стану (srs / plan / grade). Сховище — у пам'яті (контракт idbBackend);
// справжню IndexedDB, перезавантаження й офлайн перевіряє python3 tools/test-answer-ui.py --suite regression (evidence_checks).
// Запуск: node tools/test-evidence.mjs   (без залежностей)
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = fs.readFileSync(path.join(ROOT, "app/evidence.js"), "utf8");
const load = (extra = {}) => { const c = { console, Date, Promise, JSON, Math, setTimeout, clearTimeout, ...extra }; c.window = c; vm.createContext(c); vm.runInContext(SRC, c, { filename: "app/evidence.js" }); return c; };
let fails = 0, n = 0;
const eq = (got, exp, what) => { n++; const ok = JSON.stringify(got) === JSON.stringify(exp); if (!ok) { fails++; console.log(`ПОМИЛКА ${what}: отримано ${JSON.stringify(got)}, очікувалось ${JSON.stringify(exp)}`); } };
const truthy = (v, what) => eq(!!v, true, what);

const ctx = load(), E = ctx.SLID_EVIDENCE, C = E._core;

// ---------- 1. без IndexedDB (Node): вимкнено, жодних винятків, API працює ----------
eq(E.enabled, false, "без indexedDB журнал вимкнено");
E.log("answer", { x: 1 }); E.log("answer", () => { throw new Error("x"); }); E.observe({ srs: {} }); E.observe(null); E.newProfile();
eq((await E.stats()).enabled, false, "stats без сховища");
eq((await E.export()).events, [], "export без сховища — порожній");
// indexedDB, що кидає при зверненні (деякі приватні режими), — теж вимкнено, без винятку
{ const c = { console, Date, Promise, JSON, Math, setTimeout, clearTimeout }; c.window = c; Object.defineProperty(c, "indexedDB", { get() { throw new Error("SecurityError"); } });
  vm.createContext(c); vm.runInContext(SRC, c); eq(c.SLID_EVIDENCE.enabled, false, "indexedDB кидає → вимкнено"); }

// ---------- 2. sanitize ----------
const lim = { ...E.LIMITS, str: 5, arr: 3, depth: 3, bytes: 600 };
eq(C.sanitize(new Set([3, 1, 2]), lim), [1, 2, 3], "Set → відсортований масив");
eq(C.sanitize({ a: undefined, f() {}, n: NaN, i: Infinity, s: "абвгдеж", b: true, z: null }, lim), { n: null, i: null, s: "абвгд…", b: true, z: null }, "undefined/функції відкинуто, NaN → null, рядок обрізано");
eq(C.sanitize([1, 2, 3, 4, 5], lim), [1, 2, 3, "…+2"], "масив обрізано з позначкою");
eq(C.sanitize({ a: { b: { c: { d: 1 } } } }, lim), { a: { b: { c: "[…]" } } }, "глибина обмежена");
eq(C.sanitize(new Map([["k", 1]]), lim), { k: 1 }, "Map → об'єкт");
eq(C.sanitize(10n, lim), "10", "bigint → рядок");

// ---------- 3. схема події ----------
const env = (o = {}) => { let t = 1000, m = 0, timers = []; return { now: () => t, tzo: () => -120, mono: () => (m += 7), online: () => true,
  setTimeout: (f, ms) => { timers.push(f); return timers.length; }, clearTimeout: () => {}, version: async () => "abc123", tick: () => { const f = timers; timers = []; f.forEach(x => x()); }, adv: d => (t += d), ...o }; };
{ const e = C.makeEvent("answer", { raw: new Set([2, 1]), ok: true }, { ...env(), n: 5, sid: "S", pid: null });
  eq(Object.keys(e), ["v", "type", "eid", "t", "tzo", "n", "ms", "sid", "net", "synced", "d"], "поля події (без pid, доки не відомий)");
  eq(e.eid, "S.5", "eid = sid.n");
  eq([e.v, e.type, e.t, e.tzo, e.n, e.sid, e.net, e.synced], [1, "answer", 1000, -120, 5, "S", 1, 0], "значення полів");
  eq(e.d, { raw: [1, 2], ok: true }, "d — серіалізовано");
  eq(JSON.parse(JSON.stringify(e)), e, "подія — чистий JSON");
  const big = C.makeEvent("x", { a: "x".repeat(300), b: "y".repeat(300), c: "z".repeat(300) }, { ...env(), n: 1, sid: "S" }, { ...E.LIMITS, bytes: 400 });
  eq(big.d, { trunc: true, keys: ["a", "b", "c"] }, "завелика подія → trunc з ключами"); }

// ---------- 4. ротація ----------
eq([C.trimCount(10, { max: 10, keep: 8 }), C.trimCount(11, { max: 10, keep: 8 }), C.trimCount(0, { max: 10, keep: 8 })], [0, 3, 0], "trimCount");

// ---------- сховище в пам'яті з контрактом idbBackend ----------
function mem(opt = {}) {
  const st = { meta: {}, ev: new Map(), appends: 0, failNext: 0, initFail: !!opt.initFail };
  return { st,
    async init() { if (st.initFail) throw new Error("open"); st.meta.did ||= "D1"; st.meta.pid ||= "P1"; return { did: st.meta.did, pid: st.meta.pid }; },
    async setMeta(k, v) { st.meta[k] = v; },
    async append(list) { if (st.failNext > 0) { st.failNext--; throw new Error("quota"); } st.appends++; let seq = st.meta.seq || 0; for (const e of list) { e.seq = ++seq; st.ev.set(e.seq, structuredClone(e)); } st.meta.seq = seq; return seq; },
    async trim(l) { const k = C.trimCount(st.ev.size, l); [...st.ev.keys()].sort((a, b) => a - b).slice(0, k).forEach(x => st.ev.delete(x)); return k; },
    async all() { return [...st.ev.values()]; },
    async counts() { const v = [...st.ev.values()]; return { count: v.length, unsynced: v.filter(e => e.synced === 0).length }; },
    async clear() { st.ev.clear(); } };
}

// ---------- 5. черга, пакети, seq, did/pid/cv, dt, by ----------
{ const b = mem(), en = env(), J = C.create(b, en, { ...E.LIMITS, batch: 3, delay: 100 });
  J.observe({ grade: 6, srs: {}, plan: {} });                         // перший знімок — без подій
  J.log("screen", { i: 0 });
  J.log("answer", () => ({ i: 0, raw: "5" }));
  eq(b.st.ev.size, 0, "до flush нічого не записано (асинхронна черга)");
  en.tick(); await J.flush();
  const ev = [...b.st.ev.values()];
  eq(ev.map(e => [e.seq, e.type, e.did, e.pid, e.cv]), [[1, "screen", "D1", "P1", "abc123"], [2, "answer", "D1", "P1", "abc123"]], "seq наскрізний; did, pid, cv дописано під час запису");
  eq(ev[1].dt, 7, "answer.dt — мс від показу екрана");
  J.observe({ grade: 7, srs: { a: { box: 0, due: "2026-11-02" } }, plan: { math: { grade: 7, steps: [{ l: "x", src: "diag", done: false }] } }, planByGrade: { math: { 7: { grade: 7, diag: "dg7", steps: [{ l: "x", src: "diag", done: false }], known: ["k"] } } } });
  await J.flush();
  const ob = [...b.st.ev.values()].slice(2);
  eq(ob.map(e => e.type), ["grade", "srs", "plan"], "observe: grade, srs, plan");
  eq(ob.map(e => e.by), [2, 2, 2], "by — номер останньої явної події");
  eq(ob[0].d, { from: 6, to: 7 }, "grade from/to");
  eq(ob[1].d, { n: 1, part: 1, parts: 1, ch: [{ l: "a", from: null, to: { box: 0, due: "2026-11-02" } }] }, "srs — зміна коробки");
  eq(ob[2].d, { c: "math", grade: 7, diag: "dg7", steps: [{ l: "x", src: "diag", why: null, done: false }], base: [], known: 1 }, "plan — кроки за предметом і класом");
  J.observe({ grade: 7, srs: { a: { box: 0, due: "2026-11-02" } }, plan: {}, planByGrade: { math: { 7: { grade: 7, diag: "dg7", steps: [{ l: "x", src: "diag", done: false }], known: ["k"] } } } });
  await J.flush(); eq(b.st.ev.size, 5, "без змін — без подій (S.plan поточного класу — дзеркало planByGrade)");
  // пакет: batch=3 → запис мікрозадачею без таймера
  for (let i = 0; i < 7; i++) J.log("screen", { i });
  await Promise.resolve(); await new Promise(r => setImmediate(r)); await J.flush();
  eq(b.st.ev.size, 12, "усі 7 записано"); truthy(b.st.appends >= 4, "пакетами по 3");
  const s = await J.stats(); eq([s.enabled, s.count, s.unsynced, s.queued, s.dropped], [true, 12, 12, 0, 0], "stats");
  const x = await J.export(); eq([x.schema, x.did, x.events.length, x.events.map(e => e.seq).join()], [1, "D1", 12, "1,2,3,4,5,6,7,8,9,10,11,12"], "export у порядку seq");
  // новий профіль
  J.log("reset"); J.newProfile(); J.log("boot"); await J.flush();
  const last = [...b.st.ev.values()].slice(-2);
  eq(last[0].pid, "P1", "reset — зі старим pid"); truthy(last[1].pid && last[1].pid !== "P1", "після newProfile — новий pid"); eq(b.st.meta.pid, last[1].pid, "новий pid збережено"); eq(last[1].did, "D1", "did не змінюється"); }

// ---------- 6. ротація в сховищі ----------
{ const b = mem(), J = C.create(b, env(), { ...E.LIMITS, max: 10, keep: 6, batch: 4 });
  for (let i = 0; i < 25; i++) J.log("screen", { i });
  await J.flush();
  const seqs = [...b.st.ev.keys()].sort((a, b) => a - b);
  truthy(seqs.length <= 10 && seqs.length >= 6, "ротація: не більше max"); eq(seqs[seqs.length - 1], 25, "найновіші лишаються");
  eq(seqs, Array.from({ length: seqs.length }, (_, k) => 26 - seqs.length + k), "видаляються найстаріші"); }

// ---------- 7. відмовостійкість ----------
{ const b = mem({ initFail: true }), J = C.create(b, env(), E.LIMITS);
  J.log("screen", {}); await J.flush(); eq([J.enabled, b.st.ev.size], [false, 0], "init не вдався → вимкнено, без винятку");
  J.log("screen", {}); eq((await J.stats()).queued, 0, "після вимкнення черга не росте"); }
{ const b = mem(), J = C.create(b, env(), { ...E.LIMITS, batch: 2 }); b.st.failNext = 1;
  J.log("a", {}); J.log("b", {}); J.log("c", {}); await J.flush();
  eq([J.enabled, b.st.ev.size, (await J.stats()).dropped], [true, 1, 2], "один збій запису — пакет загублено, журнал працює далі");
  b.st.failNext = 9; for (let i = 0; i < 6; i++) J.log("x", {}); await J.flush();
  eq(J.enabled, false, "3 збої поспіль → вимкнено"); }
{ const b = mem(), J = C.create(b, env(), { ...E.LIMITS, queue: 3, delay: 1e9 });
  for (let i = 0; i < 5; i++) J.log("screen", { i }); await J.flush();
  eq([...b.st.ev.values()].map(e => e.d.i), [2, 3, 4], "ліміт черги в пам'яті: старі витісняються"); }
{ const en = env({ version: () => new Promise(() => {}), setTimeout, clearTimeout }), b = mem(), J = C.create(b, en, { ...E.LIMITS, versionWait: 10 });
  J.log("screen", {}); await J.flush(); eq([...b.st.ev.values()][0].cv, null, "SW не відповідає → cv null після очікування"); }
{ const b = mem(), J = C.create(b, env(), E.LIMITS); let calls = 0;
  J.log("x", () => { calls++; return { a: 1 }; }); eq(calls, 1, "функція даних обчислюється одразу (знімок моменту)"); }
// log не змінює переданих даних
{ const b = mem(), J = C.create(b, env(), E.LIMITS), S = { srs: { a: { box: 1 } }, plan: {}, grade: 5 }, before = JSON.stringify(S), set = new Set([1]);
  J.observe(S); J.log("answer", { raw: set, S }); S.srs.a.box = 2; J.observe(S); await J.flush();
  eq(JSON.stringify({ ...S, srs: { a: { box: 1 } } }), before, "observe/log не змінюють стану"); eq([...set], [1], "Set не змінено");
  eq([...b.st.ev.values()][0].d.S.srs.a.box, 1, "дані — копія на момент log"); }

// ---------- 8. справжній idbBackend на мінімальній IndexedDB у пам'яті (FakeIDB нижче) ----------
// Модель життя транзакції як у браузері: запити виконуються макрозадачею, транзакція завершується, коли після
// onsuccess (і мікрозадач-продовжень) не лишилося запитів. add з наявним ключем або унікальним індексом — помилка й abort.
function fakeIDB() {
  const dbs = new Map(), later = f => setTimeout(f, 0);
  const cmp = (a, b) => (a > b) - (a < b);
  function mkTx(db, names, mode) {
    const tx = { pending: 0, done: false, err: null, oncomplete: null, onerror: null, onabort: null, ops: [] };
    const fin = () => later(() => { if (tx.done || tx.pending) return; tx.done = true;
      if (tx.err) { for (const u of tx.ops.reverse()) u(); (tx.onerror || tx.onabort || (() => {}))(); } else tx.oncomplete && tx.oncomplete(); });
    const request = fn => { const r = { onsuccess: null, onerror: null }; tx.pending++;
      later(() => { tx.pending--; if (tx.err) { r.error = new Error("AbortError"); r.onerror && r.onerror(r.error); fin(); return; }   /* після abort запити отримують помилку */ try { r.result = fn(); r.onsuccess && r.onsuccess({ target: r }); } catch (e) { r.error = e; tx.err = e; r.onerror && r.onerror(e); } fin(); }); return r; };
    tx.objectStore = name => {
      if (!names.includes(name)) throw new Error("NotFoundError " + name);
      const st = db.stores.get(name);
      const keyOf = (v, k) => st.keyPath ? v[st.keyPath] : k;
      const keys = () => [...st.data.keys()].sort(cmp);
      const inRange = (k, q) => q == null ? true : typeof q === "object" && "upper" in q ? k <= q.upper : k === q;
      const write = (v, k, add) => { if (mode !== "readwrite" && mode !== "versionchange") throw new Error("ReadOnlyError");
        const key = keyOf(v, k); if (add && st.data.has(key)) throw new Error("ConstraintError key " + key);
        for (const [iname, ix] of st.indexes) if (ix.unique && v[ix.keyPath] !== undefined) for (const [kk, vv] of st.data) if (kk !== key && vv[ix.keyPath] === v[ix.keyPath]) throw new Error("ConstraintError " + iname);
        const had = st.data.has(key), old = st.data.get(key); st.data.set(key, structuredClone(v)); tx.ops.push(() => had ? st.data.set(key, old) : st.data.delete(key)); return key; };
      const store = {
        indexNames: { contains: n => st.indexes.has(n) },
        createIndex: (n, keyPath, o = {}) => { st.indexes.set(n, { keyPath, unique: !!o.unique }); },
        get: k => request(() => structuredClone(st.data.get(k))),
        put: (v, k) => request(() => write(v, k, false)),
        add: (v, k) => request(() => write(v, k, true)),
        count: q => request(() => keys().filter(k => inRange(k, q)).length),
        getAll: () => request(() => keys().map(k => structuredClone(st.data.get(k)))),
        getAllKeys: (q, n) => request(() => keys().filter(k => inRange(k, q)).slice(0, n ?? Infinity)),
        delete: q => request(() => { for (const k of keys()) if (inRange(k, q)) { const old = st.data.get(k); st.data.delete(k); tx.ops.push(() => st.data.set(k, old)); } }),
        clear: () => request(() => { const old = new Map(st.data); st.data.clear(); tx.ops.push(() => old.forEach((v, k) => st.data.set(k, v))); }),
        openCursor: (q, dir) => request(() => { const ks = keys().filter(k => inRange(k, q)); const k = dir === "prev" ? ks[ks.length - 1] : ks[0]; return k === undefined ? null : { key: k, value: structuredClone(st.data.get(k)) }; }),
        index: iname => { const ix = st.indexes.get(iname); if (!ix) throw new Error("NotFoundError index " + iname);
          const match = q => keys().filter(k => st.data.get(k)[ix.keyPath] === q);
          return { getKey: q => request(() => match(q)[0]), count: q => request(() => match(q).length) }; }
      };
      return store;
    };
    if (!tx.pending) fin();
    return tx;
  }
  return { dbs,
    open(name, ver) {
      const r = { onsuccess: null, onerror: null, onupgradeneeded: null, onblocked: null };
      later(() => {
        let db = dbs.get(name); const old = db ? db.version : 0;
        if (!db) { db = { version: 0, stores: new Map() }; dbs.set(name, db); }
        const handle = { close() {}, onversionchange: null,
          objectStoreNames: { contains: n => db.stores.has(n) },
          createObjectStore: (n, o = {}) => { db.stores.set(n, { keyPath: o.keyPath || null, data: new Map(), indexes: new Map() }); return mkTx(db, [n], "versionchange").objectStore(n); },
          transaction: (ns, mode = "readonly") => mkTx(db, [].concat(ns), mode) };
        r.result = handle;
        if (ver > old) { r.transaction = { objectStore: n => mkTx(db, [n], "versionchange").objectStore(n) }; db.version = ver; r.onupgradeneeded && r.onupgradeneeded({ oldVersion: old }); }
        r.onsuccess && r.onsuccess();
      });
      return r;
    } };
}
const KR = { upperBound: k => ({ upper: k }) };
const flushAll = async J => { await J.flush(); await J.flush(); };
{ const F = fakeIDB(), en = () => env({ setTimeout, clearTimeout });
  // seq зберігається в meta: другий екземпляр (нова сторінка) продовжує лічильник, а не перезаписує події
  const J1 = C.create(C.idbBackend(F, "t1", KR), en(), E.LIMITS);
  for (let i = 0; i < 3; i++) J1.log("screen", { i }); await flushAll(J1);
  const J2 = C.create(C.idbBackend(F, "t1", KR), en(), E.LIMITS);
  J2.log("boot", {}); J2.log("screen", { i: 9 }); await flushAll(J2);
  const all = (await J2.export()).events;
  eq(all.map(e => [e.seq, e.type]), [[1, "screen"], [2, "screen"], [3, "screen"], [4, "boot"], [5, "screen"]], "idb: seq продовжується в новому екземплярі, старі події на місці");
  eq(new Set(all.map(e => e.did)).size, 1, "idb: did спільний");
  eq((await J2.stats()).count, 5, "idb: counts");
  // add, а не put: якщо meta.seq розійшовся з даними — помилка запису (dropped), не перезапис
  F.dbs.get("t1").stores.get("meta").data.set("seq", 0);
  J2.log("screen", { i: "x" }); await flushAll(J2);
  const after = (await J2.export()).events;
  eq([after.length, after[0].d.i, (await J2.stats()).dropped], [5, 0, 1], "idb: розбіжність seq → dropped, події не перезаписано"); }
{ const F = fakeIDB(), J = C.create(C.idbBackend(F, "t2", KR), env({ setTimeout, clearTimeout }), { ...E.LIMITS, max: 10, keep: 6, batch: 4 });
  for (let i = 0; i < 25; i++) J.log("screen", { i }); await flushAll(J);
  const seqs = (await J.export()).events.map(e => e.seq);
  truthy(seqs.length >= 6 && seqs.length <= 10, "idb trim: у межах [keep, max] (" + seqs.length + ")");
  eq(seqs, Array.from({ length: seqs.length }, (_, k) => 26 - seqs.length + k), "idb trim: лишаються найновіші, без пропусків"); }
{ // відновлення черги після переходу зі сторінки (P3-1): stash → unstash; дублікати (пакет устиг записатися) відкидає eid
  const F = fakeIDB(); let box = null;
  const en = () => env({ setTimeout, clearTimeout, stash: l => { box = JSON.parse(JSON.stringify([...(box || []), ...l])); }, unstash: () => { const v = box || []; box = null; return v; } });
  const J1 = C.create(C.idbBackend(F, "t3", KR), en(), { ...E.LIMITS, delay: 1e9 });
  J1.log("screen", { i: 1 }); await flushAll(J1);                     // записано
  J1.log("lesson_end", { l: "x" }); J1.log("close", { end: true });  // ще в черзі
  eq(J1.stash(), 2, "stash: незаписані — синхронно");
  eq(box.map(e => e.type), ["lesson_end", "close"], "stash: що саме скинуто");
  // сторінку вивантажено, запис не відбувся; нова сторінка
  const J2 = C.create(C.idbBackend(F, "t3", KR), en(), E.LIMITS); J2.log("boot", {}); await flushAll(J2);
  const ev = (await J2.export()).events;
  eq(ev.map(e => [e.seq, e.type]), [[1, "screen"], [2, "lesson_end"], [3, "close"], [4, "boot"]], "відновлено перед boot нової сторінки");
  eq(ev[1].sid, ev[0].sid, "відновлена подія — з sid старої сторінки"); eq((await J2.stats()).recovered, 2, "stats.recovered");
  // stash, а потім запис таки встиг (visibilitychange без вивантаження): наступна сторінка не дублює
  J2.log("answer", { a: 1 }); J2.stash(); await flushAll(J2);
  const J3 = C.create(C.idbBackend(F, "t3", KR), en(), E.LIMITS); await flushAll(J3);
  const ev3 = (await J3.export()).events;
  eq([ev3.length, ev3.filter(e => e.type === "answer").length, (await J3.stats()).dup], [5, 1, 1], "дубль за eid відкинуто"); }
{ // стара база версії 1 (без індексу eid) оновлюється до 2 без втрати подій
  const F = fakeIDB();
  await new Promise(ok => { const r = F.open("t4", 1); r.onupgradeneeded = () => { const d = r.result; d.createObjectStore("events", { keyPath: "seq" }).createIndex("synced", "synced"); d.createObjectStore("meta"); };
    r.onsuccess = () => { const tx = r.result.transaction(["events", "meta"], "readwrite"); tx.objectStore("events").put({ v: 1, seq: 1, type: "old", synced: 0 }); tx.objectStore("meta").put(1, "seq"); tx.oncomplete = ok; }; });
  const J = C.create(C.idbBackend(F, "t4", KR), env({ setTimeout, clearTimeout }), E.LIMITS); J.log("boot", {}); await flushAll(J);
  eq((await J.export()).events.map(e => [e.seq, e.type]), [[1, "old"], [2, "boot"]], "версія 1 → 2: індекс eid додано, події лишились"); }

// ---------- 9. розмір підсумкових подій на справжньому змісті (рев'ю P2-1) ----------
// Перший і повторний (інший день, інші статуси) тест рівня кожного SLID.diag: зміни SRS-коробок (srsFromDiag), план (finishDiag)
// і diag_end — без trunc; частини srs разом дають усі зміни.
{ const { loadContent } = await import("./lib.mjs");
  const { subjects, learn: LL } = loadContent();
  let checked = 0, maxSrs = 0, maxParts = 0, maxOther = 0;
  for (const c of subjects) for (const d of c.diags || []) {
    const b = mem(), J = C.create(b, env(), E.LIMITS), S = { grade: d.grade, srs: {}, lessons: {}, diag: {}, plan: {}, planByGrade: {}, mast: {}, errs: [], skw: {} };
    J.observe(S);
    const pre = d.topics.filter(t => t.kind !== "cur" && !t.baseline);
    const runs = [[d.items.map(() => LL.OK), "2026-10-01"], [d.items.map((_, i) => i % 3 ? LL.OK : LL.BAD), "2026-11-15"], [d.items.map(() => LL.SKIP), "2026-12-20"]];
    let prev = {};
    for (const [arr, day] of runs) {
      const res = Object.fromEntries(arr.map((v, i) => [i, v]));
      const plan = LL.finishDiag(S, c.id, d, res, { grade: d.grade, day, week: 10, diags: c.diags, sections: c.sections.filter(x => x.grade === d.grade).map(x => ({ id: x.id, weeks: x.weeks, lessons: (x.lessons || []).map(l => l.id) })), hasLesson: () => true });
      J.log("diag_end", { c: c.id, diag: d.id, grade: d.grade, rev: S.diag[d.id]?.rev ?? null, res, topics: plan.topics, steps: (plan.steps || []).map(st => st.l), base: (plan.base || []).map(x => x.topic), known: plan.known || [] });
      J.observe(S);
      const want = new Set(Object.keys({ ...prev, ...S.srs }).filter(l => JSON.stringify(prev[l]) !== JSON.stringify(S.srs[l]))); prev = JSON.parse(JSON.stringify(S.srs));
      await J.flush();
      const ev = [...b.st.ev.values()].filter(e => !e.checked); ev.forEach(e => (e.checked = true));
      for (const e of ev) { const sz = JSON.stringify(e).length; if (e.type === "srs") maxSrs = Math.max(maxSrs, sz); else maxOther = Math.max(maxOther, sz);
        if (e.d && e.d.trunc) eq(e.type + " trunc", "без trunc", `${d.id} ${day}: подія ${e.type} обрізана`); }
      const srs = ev.filter(e => e.type === "srs"), got = srs.flatMap(e => e.d.ch.map(x => x.l));
      if (srs.length) { maxParts = Math.max(maxParts, srs.length); eq(srs.map(e => [e.d.part, e.d.parts, e.d.n]), srs.map((_, k) => [k + 1, srs.length, got.length]), `${d.id} ${day}: частини srs`); }
      eq(got.sort(), [...want].sort(), `${d.id} ${day}: усі зміни коробок у журналі`);
      checked++;
    }
    eq((await J.stats()).truncated, 0, `${d.id}: stats.truncated = 0`);
  }
  truthy(checked >= 24, `перевірено тестів × запусків: ${checked}`);
  truthy(maxSrs <= E.LIMITS.bigBytes && maxOther <= E.LIMITS.bigBytes, "розміри в межах");
  truthy(maxParts >= 2, `повторний великий тест дає кілька частин srs (${maxParts})`);
  console.log(`  розмір на змісті: найбільша srs ${maxSrs} Б (частин до ${maxParts}), інші підсумкові ${maxOther} Б; ліміт ${E.LIMITS.bigBytes}`); }

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-evidence: усі ${n} перевірок пройдено`);
process.exit(fails ? 1 : 0);
