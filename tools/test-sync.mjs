#!/usr/bin/env node
// Слід · тести синхронізації прогресу app/sync.js (engine-sync-login): тристороннє злиття стану slid.v1 (merge3) і клієнт
// (черга офлайн, 409 → злиття й повтор, вхід «мій / не мій прогрес», помилки 401/429/503). Сервер — фейк у пам'яті з тією самою
// семантикою, що server/ (compare-and-set за rev, 409 { rev, data }, name відкидається). Без мережі й браузера.
// Запуск: node tools/test-sync.mjs
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { fileURLToPath } from "node:url";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const c = { console, JSON, Math, Promise }; vm.createContext(c); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/sync.js"), "utf8"), c, { filename: "app/sync.js" });
const Y = c.SLID_SYNC_CORE, J = x => JSON.parse(JSON.stringify(x));
let n = 0, fails = 0;
const eq = (a, b, what) => { n++; const A = JSON.stringify(J(a ?? null)), B = JSON.stringify(J(b ?? null)); if (A !== B) { fails++; console.log(`ПОМИЛКА ${what}\n  отримано:  ${A}\n  очікувано: ${B}`); } };
const M = (b, l, r) => J(Y.merge3(b, l, r));

// ---------- 1. Перелік полів: кожне поле стану рушія має правило (жодне не губиться мовчки) ----------
{ const app = fs.readFileSync(path.join(ROOT, "app/app.js"), "utf8"), fr = app.match(/const fresh = \(\) => \(\{([^\n]*)\}\);/);
  eq(!!fr, true, "fresh() знайдено в app/app.js");
  let top = fr[1]; while (/\{[^{}]*\}/.test(top)) top = top.replace(/\{[^{}]*\}/g, "0");   // лише верхній рівень
  const freshKeys = [...top.matchAll(/(?:^|[,{]\s*)([a-zA-Z]+)\s*:/g)].map(m => m[1]);
  eq(freshKeys.filter(k => !Y.FIELDS.includes(k)), [], "кожне поле fresh() має правило злиття");
  const used = new Set(); for (const f of fs.readdirSync(path.join(ROOT, "app")).filter(f => f.endsWith(".js") && f !== "sync.js"))
    for (const m of fs.readFileSync(path.join(ROOT, "app", f), "utf8").matchAll(/\bS\.([a-zA-Z]+)\b/g)) used.add(m[1]);
  eq([...used].filter(k => !Y.FIELDS.includes(k)).sort(), [], "кожне S.<поле> з app/*.js має правило злиття (нове поле — правило в sync.js)");
  eq(Y.FIELDS.filter(k => !used.has(k) && !freshKeys.includes(k)), [], "у переліку немає зайвих полів"); }

// ---------- 2. Правила полів ----------
const B = { xp: 100, days: { "2026-11-04": 40, "2026-11-05": 10 }, skills: { "math.frac": { ok: 3, total: 4 } }, grade: 6, name: "Оля", theme: "dark" };
eq(M(B, { ...B, xp: 120, days: { ...B.days, "2026-11-05": 30 } }, { ...B, xp: 130, days: { ...B.days, "2026-11-05": 40 } }), { xp: 150, days: { "2026-11-04": 40, "2026-11-05": 60 }, skills: B.skills, grade: 6, name: "Оля", theme: "dark" },
  "xp і days: бали з двох пристроїв сумуються (приріст від base)");
eq(M(null, { xp: 20, days: { d: 20 } }, { xp: 50, days: { d: 30 } }), { xp: 70, days: { d: 50 } }, "без base (перший вхід «мій прогрес») — сумуються");
eq(M(B, B, { ...B, xp: 90 }).xp, 90, "пристрій без змін — береться сервер (і менше значення)");
eq(M(B, { ...B, skills: { "math.frac": { ok: 4, total: 6 } } }, { ...B, skills: { "math.frac": { ok: 5, total: 5 }, "math.cmp": { ok: 1, total: 1 } } }).skills,
  { "math.frac": { ok: 6, total: 7 }, "math.cmp": { ok: 1, total: 1 } }, "skills: ok і total — лічильники");
eq(M({}, { name: "Оля", theme: "dark", subject: "math", unlockAll: true, weekOverride: 3 }, { name: "X", theme: "light", subject: "hist", unlockAll: false, weekOverride: null }),
  { name: "Оля", theme: "dark", subject: "math", unlockAll: true, weekOverride: 3 }, "поля пристрою — з пристрою");
eq(M({ grade: 6 }, { grade: 6 }, { grade: 7 }).grade, 7, "grade: змінено лише на сервері — сервер"); eq(M({ grade: 6 }, { grade: 5 }, { grade: 7 }).grade, 5, "grade: конфлікт — пристрій");
eq(M({}, { lessons: { a: { done: true, stars: 2, best: 50 }, b: { done: true, stars: 1, best: 10 } } }, { lessons: { a: { done: true, stars: 3, best: 40 }, c: { done: true, stars: 3, best: 30 } } }).lessons,
  { a: { done: true, stars: 3, best: 50 }, b: { done: true, stars: 1, best: 10 }, c: { done: true, stars: 3, best: 30 } }, "lessons: done — «або», зірки й best — максимум");
eq(M({}, { badges: { first: "2026-11-03", x: "2026-11-05" } }, { badges: { first: "2026-11-01", y: "2026-11-02" } }).badges, { first: "2026-11-01", x: "2026-11-05", y: "2026-11-02" }, "badges: об'єднання, раніша дата");
eq(M({}, { streak: { count: 2, last: "2026-11-04" } }, { streak: { count: 5, last: "2026-11-05" } }).streak, { count: 5, last: "2026-11-05" }, "streak: новіший last");
eq(M({}, { streak: { count: 3, last: "2026-11-05" } }, { streak: { count: 5, last: "2026-11-05" } }).streak, { count: 5, last: "2026-11-05" }, "streak: той самий день — більший count");
eq([M({}, { bestCombo: 4, prN: 9 }, { bestCombo: 7, prN: 3 }).bestCombo, M({}, { bestCombo: 4, prN: 9 }, { bestCombo: 7, prN: 3 }).prN], [7, 9], "bestCombo, prN — максимум");
{ const e = (l, d) => ({ l, at: l, sk: "math.x", d }), b = { errs: [e("a", "1"), e("b", "2")] };
  eq(M(b, { errs: [e("b", "2"), e("c", "4")] }, { errs: [e("a", "1"), e("b", "2"), e("d", "3")] }).errs, [e("b", "2"), e("d", "3"), e("c", "4")], "errs: видалене на пристрої зникає й на сервері, додане з обох боків — разом, за днем");
  eq(M(b, { errs: [e("a", "1"), e("b", "2"), e("a", "1")] }, { errs: [e("a", "1"), e("b", "2"), e("a", "1")] }).errs.length, 4, "errs: повтор того самого запису на обох — мультимножина (2 + 2 нові → 4)");
  const many = Array.from({ length: 70 }, (_, i) => e("l" + i, String(1000 + i)));
  eq(M({}, { errs: many.slice(0, 50) }, { errs: many.slice(20) }).errs.length, Y.ERR_CAP, "errs: ліміт 80 найновіших"); }
eq(M({ diag: { dg6: { date: "2026-10-01" } } }, { diag: { dg6: { date: "2026-11-01", res: [1] } } }, { diag: { dg6: { date: "2026-11-03", res: [0] } } }).diag, { dg6: { date: "2026-11-03", res: [0] } }, "diag: конфлікт — новіша дата");
eq(M({ diagRun: { dg6: { 0: 1 } } }, { diagRun: { dg6: { 0: 1, 1: 0 } } }, { diagRun: {} }).diagRun, {}, "diagRun: тест завершено на іншому пристрої — незавершеного запуску немає");
eq(M({ diagRun: { dg6: { 0: 1 } } }, { diagRun: { dg6: { 0: 1, 1: 0 } } }, { diagRun: { dg6: { 0: 1, 2: 1 } } }).diagRun, { dg6: { 0: 1, 1: 0, 2: 1 } }, "diagRun: відповіді з обох — разом");
eq(M({}, { diagRunRev: { dg6: 2 } }, { diagRunRev: { dg6: 3 } }).diagRunRev, { dg6: 3 }, "diagRunRev — максимум");
{ const P = (date, done) => ({ grade: 6, date, steps: [{ l: "a", done: done[0] }, { l: "b", done: done[1] }] });
  eq(M({}, { planByGrade: { math: { 6: P("2026-11-01", [true, false]) } } }, { planByGrade: { math: { 6: P("2026-11-01", [false, true]), 7: P("2026-11-02", [false, false]) } } }).planByGrade,
    { math: { 6: P("2026-11-01", [true, true]), 7: P("2026-11-02", [false, false]) } }, "planByGrade: той самий тест — кроки done «або»; інший клас — додано");
  eq(M({}, { plan: { math: P("2026-11-01", [true, true]) } }, { plan: { math: P("2026-11-04", [false, false]) } }).plan, { plan: { math: P("2026-11-04", [false, false]) } }.plan, "plan: новіший тест — його план"); }
eq(M({}, { mast: { a: { r: "01", d: "2026-11-02" } }, srs: { a: { box: 1, due: "2026-11-06" } } }, { mast: { a: { r: "11", d: "2026-11-04" } }, srs: { a: { box: 2, due: "2026-11-09" } } }),
  { mast: { a: { r: "11", d: "2026-11-04" } }, srs: { a: { box: 2, due: "2026-11-09" } } }, "mast — новіший d; srs — пізніший термін");
eq(M({ seen: { "p:a": 0 } }, { seen: { "p:a": 1, "p:b": 0 } }, { seen: { "p:a": 0, "p:c": 1 } }).seen, { "p:a": 1, "p:b": 0, "p:c": 1 }, "seen: за ключем");
eq(M({}, { skFix: ["f1"] }, { skFix: ["f1", "f2"] }).skFix, ["f1", "f2"], "skFix — об'єднання");
eq(M({ aiv: [1] }, { aiv: [1] }, { aiv: [1, 2], zz: { a: 1 } }), { aiv: [1, 2], zz: { a: 1 } }, "невідоме поле — не губиться (сервер)");
eq(M({ aiv: [1] }, { aiv: [1, 3] }, { aiv: [1, 2] }).aiv, [1, 3], "невідоме поле, конфлікт — пристрій");
eq(Y.strip({ name: "Оля", xp: 5 }), { xp: 5 }, "на сервер — без name");

// ---------- 3. Властивості: злиття без змін нічого не міняє, повтор не подвоює ----------
{ const S1 = { xp: 120, days: { d1: 30 }, skills: { k: { ok: 2, total: 3 } }, lessons: { a: { done: true, stars: 2, best: 40 } }, errs: [{ l: "a", d: "1" }], badges: { first: "1" }, streak: { count: 2, last: "2" }, srs: { a: { box: 1, due: "3" } }, grade: 6 };
  eq(M(S1, S1, S1), S1, "merge3(x, x, x) = x");
  const m = M({}, S1, { ...S1, xp: 200 });   // перший вхід: сума
  eq(M(m, m, m), m, "після злиття: повторне злиття з тим самим — без змін (бали не подвоюються)"); }

// ---------- 4. Клієнт із фейковим сервером ----------
function server() {
  const L = new Map(), codes = new Map(); let seq = 0;
  const S = { L, fail: null, calls: [], googleOk: true,
    async request(method, p, body, token) {
      S.calls.push(method + " " + p);
      if (S.fail) { const f = S.fail; if (f === "offline") throw new Error("offline"); return { status: f, data: null }; }
      const who = token && [...L.values()].find(x => x.tokens.includes(token));
      const issue = x => { const t = "t" + (++seq); x.tokens.push(t); return { status: 200, data: { id: x.id, token: t } }; };
      if (method === "POST" && p === "/v1/auth/google") { if (!S.googleOk) return { status: 401, data: null }; let x = L.get("g:" + body.idToken); if (!x) L.set("g:" + body.idToken, x = { id: "g" + body.idToken, tokens: [], rev: 0, data: null }); return issue(x); }
      if (method === "POST" && p === "/v1/pairing/claim") { const x = codes.get(String(body.code).toUpperCase()); if (!x) return { status: 401, data: null }; codes.delete(String(body.code).toUpperCase()); return issue(x); }
      if (!who) return { status: 401, data: null };
      if (method === "POST" && p === "/v1/pairing") { const code = "ABC" + (++seq); codes.set(code, who); return { status: 201, data: { code, expiresAt: "x" } }; }
      if (method === "GET" && p === "/v1/me") return { status: 200, data: { id: who.id, school: "school.ua" } };
      if (method === "GET" && p === "/v1/progress") return { status: 200, data: { rev: who.rev, data: J(who.data) } };
      if (method === "PUT" && p === "/v1/progress") { if (body.rev !== who.rev) return { status: 409, data: { rev: who.rev, data: J(who.data) } };
        const d = J(body.data); delete d.name; who.rev++; who.data = d; return { status: 200, data: { rev: who.rev, data: J(d) } }; }
      return { status: 404, data: null };
    } };
  return S;
}
function device(srv, state, store = { v: null }) {
  const D = { state: J(state), store, timers: [], canApply: true, applied: [] };
  D.client = Y.create({ api: "https://api", request: srv.request, load: () => J(store.v), persist: st => { store.v = st ? J(st) : null; },
    getState: () => J(D.state), setState: (d, how) => { if (!D.canApply) return false; D.applied.push(how); D.state = how === "replace" ? { ...J(d), name: D.state.name } : J(d); return true; },
    now: () => 1, setTimeout: (f) => { D.timers.push(f); return D.timers.length; }, clearTimeout: () => {} });
  D.save = patch => { Object.assign(D.state, patch); D.client.changed(); };
  return D;
}
{ const srv = server(), A = device(srv, { name: "Оля", xp: 100, lessons: { a: { done: true, stars: 2, best: 40 } }, grade: 6 });
  const r = await A.client.loginGoogle("u1", true);
  eq([r.ok, A.client.signedIn(), A.client.school(), srv.L.get("g:u1").data], [true, true, "school.ua", { xp: 100, lessons: { a: { done: true, stars: 2, best: 40 } }, grade: 6 }], "вхід «мій прогрес»: прогрес пристрою на сервері, name не передано");
  // другий пристрій: код прив'язки, свій прогрес — «мій»
  const code = (await A.client.pairing()).code, Bd = device(srv, { name: "Оля", xp: 30, lessons: { b: { done: true, stars: 3, best: 30 } }, grade: 6 });
  const rb = await Bd.client.claim(code.toLowerCase(), true);
  eq([rb.ok, Bd.state.xp, Object.keys(Bd.state.lessons).sort()], [true, 130, ["a", "b"]], "код прив'язки + «мій»: злито (бали сумуються, уроки разом)");
  await A.client.sync(); eq([A.state.xp, Object.keys(A.state.lessons).sort(), A.state.name], [130, ["a", "b"], "Оля"], "перший пристрій отримав злитий стан; ім'я лишилось");
  eq((await Bd.client.claim(code, true)).text, Y.MSG.claim401, "код одноразовий: повтор — 401 з поясненням");
  // обидва заробили бали офлайн
  srv.fail = "offline"; A.save({ xp: 150 }); Bd.save({ xp: 140 });
  const off = await A.client.sync();
  eq([off.s, A.store.v.dirty, A.client.status().s], ["offline", true, "offline"], "офлайн: запис лишається в черзі (dirty у slid.sync)");
  srv.fail = null; await A.client.sync(); await Bd.client.sync(); await A.client.sync();
  eq([A.state.xp, Bd.state.xp, srv.L.get("g:u1").data.xp], [160, 160, 160], "після мережі: 130 + 20 + 10 на обох і на сервері (409 → злиття → повтор)");
  await A.client.sync(); await Bd.client.sync(); await A.client.sync();
  eq([A.state.xp, Bd.state.xp], [160, 160], "повторні синхронізації бали не подвоюють");
  // урок відкрито: злиття відкладається, незлитий стан не відправляється
  Bd.save({ xp: 170 }); A.save({ xp: 165 }); await Bd.client.sync(); A.canApply = false; const puts = srv.calls.filter(x => x.startsWith("PUT")).length;
  eq([(await A.client.sync()).s, srv.L.get("g:u1").data.xp], ["later", 170], "урок відкрито: злиття «пізніше», сервер не перезаписано");
  A.canApply = true; await A.client.sync(); eq([A.state.xp, srv.L.get("g:u1").data.xp], [175, 175], "урок закрито: злито й відправлено");
  eq(srv.calls.filter(x => x.startsWith("PUT")).length > puts, true, "PUT після відкладеного злиття");
  // перезапуск сторінки: стан клієнта з slid.sync
  const A2 = device(srv, A.state, A.store); eq([A2.client.signedIn(), A2.client.status().s], [true, "idle"], "slid.sync переживає перезавантаження");
  // changed: пауза, один запит
  const before = srv.calls.length; A2.save({ xp: 176 }); A2.save({ xp: 177 }); eq([srv.calls.length, A2.timers.length >= 1], [before, true], "changed: не одразу, а з паузою");
  await A2.timers.at(-1)(); await new Promise(r => setTimeout(r, 0)); eq(srv.L.get("g:u1").data.xp, 177, "changed: відправлено після паузи");
  // токен відкликано
  srv.L.get("g:u1").tokens.length = 0; const r401 = await A2.client.sync();
  eq([r401.s, r401.code, A2.client.signedIn(), A2.store.v], ["error", 401, false, null], "401 при синхронізації — вихід на пристрої (прогрес лишається локально)");
  eq(A2.state.xp, 177, "після 401 прогрес на пристрої не зник"); }
{ // «не мій прогрес»: прогрес акаунта замінює пристрій, чужий локальний не зливається
  const srv = server(), A = device(srv, { xp: 50, lessons: { a: { done: true } }, grade: 6 }); await A.client.loginGoogle("u2", true);
  const C = device(srv, { name: "Петро", xp: 999, lessons: { z: { done: true } }, grade: 9 });
  await C.client.loginGoogle("u2", false);
  eq([C.state.xp, Object.keys(C.state.lessons), C.state.grade, srv.L.get("g:u2").data.xp, C.applied], [50, ["a"], 6, 50, ["replace"]], "«не мій»: пристрій отримав прогрес акаунта, чужий на сервер не пішов");
  const E = device(srv, { xp: 0 }); const srvNew = server(); const F = device(srvNew, { xp: 7 }); await F.client.loginGoogle("new", false);
  eq([F.state.xp ?? 0, srvNew.L.get("g:new").data], [0, null], "«не мій» на порожньому акаунті — пристрій очищено, сервер порожній"); void E; }
{ // помилки входу
  const srv = server(), A = device(srv, { xp: 1 }); srv.googleOk = false;
  eq((await A.client.loginGoogle("x", true)).text, Y.MSG.google401, "401 від auth/google — «акаунт не шкільний»"); srv.googleOk = true;
  for (const [f, msg] of [[429, Y.MSG[429]], [503, Y.MSG[503]], [500, Y.MSG[503]], ["offline", Y.MSG.offline]]) { srv.fail = f; eq((await A.client.loginGoogle("x", true)).text, msg, `вхід: ${f} → повідомлення`); }
  srv.fail = null; eq(A.client.signedIn(), false, "невдалий вхід — не увійшли");
  const nc = srv.calls.length; eq(await A.client.sync(), { s: "off" }, "без входу sync нічого не робить"); A.client.changed(); eq([A.timers.length, srv.calls.length - nc], [0, 0], "без входу changed нічого не робить");
  const off = Y.create({ api: "", request: srv.request, load: () => ({ token: "t" }), persist() {}, getState: () => ({}), setState() {}, now: () => 1, setTimeout() {}, clearTimeout() {} });
  eq([off.enabled, (await off.sync()).s], [false, "off"], "без адреси API — вимкнено"); }
console.log(`\n${n} перевірок, ${fails ? fails + " з помилками" : "усе гаразд"}`);
if (fails) process.exit(1);
