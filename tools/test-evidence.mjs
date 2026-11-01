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
  eq(Object.keys(e), ["v", "type", "t", "tzo", "n", "ms", "sid", "net", "synced", "d"], "поля події (без pid, доки не відомий)");
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
  eq(ob[1].d, { n: 1, ch: [{ l: "a", from: null, to: { box: 0, due: "2026-11-02" } }] }, "srs — зміна коробки");
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

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-evidence: усі ${n} перевірок пройдено`);
process.exit(fails ? 1 : 0);
