#!/usr/bin/env node
// Слід · реплей гіпотез «обчислення чи поняття» (docs/design/diag-hypothesis-math.md §4.1, етап E1).
// Вхід — журнал у форматі SLID_EVIDENCE.export() + зміст (дерево репозиторію); той самий app/hyp.js, детерміновано.
// Вихід — reports/hyp/<дата>.md і .json з метриками §4.1.
//   node tools/hyp-replay.mjs <export.json> [--root DIR] [--out DIR] [--date YYYY-MM-DD]
//   node tools/hyp-replay.mjs <export.json> --events   — лише події hyp_* реплею і підсумки diag_end.hyp (JSON у stdout; «застосунок = реплей», test-answer-ui)
//   --fixture FILE — JS-вираз функції без аргументів, що змінює SLID_SUBJECTS (та сама фікстура, що її регресія застосовує на сторінці)
//   node tools/hyp-replay.mjs <export.json> --graph-diff   — лише порівняння старих і нових pres / preWeak (JSON у stdout; Skill Graph G3)
//   Skill Graph G3 (docs/design/skill-graph-math.md §4.2): поруч зі звичайним реплеєм — тіньовий трекер з pres / preWeak за графом
//   (лінії verified; поза ними — як зараз); у звіті — різниця. Події й метрики реплею (--events, --content-stats) — за старими pres.
//   node tools/hyp-replay.mjs --content-stats [--root DIR] [--json]   — цифри §0, §2.1, §2.3 на справжньому змісті
//     (логіка scratchpad-скриптів рецензента й автора дизайну: hyp-rev-count, -natural, -probe, hyp-fix-delayed, hyp-r3-sol-v2,
//     hyp-r4-check) і та сама модель через app/hyp.js (види перевірок, sol/sol0).
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { fileURLToPath } from "node:url";
import { loadContent, GRADED, exitFlushed } from "./lib.mjs";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Зміст, SLID_LEARN і SLID_HYP (app/hyp.js вантажиться окремо в контекст із тим самим SLID_LEARN — щоб HYP_FILE міг підмінити модуль).
    hypFile — інший файл модуля (самоперевірка тестів на мутантах); типово root/app/hyp.js. fixture — текст функції `() => {…}`,
    що змінює SLID_SUBJECTS до побудови покажчиків (фікстури регресії hyp_checks: той самий зміст, що на сторінці). */
export function hypEnv(root = ROOT, hypFile = null, fixture = null) {
  const c = loadContent(root);
  if (fixture) vm.runInNewContext(`(${fixture})()`, { SLID_SUBJECTS: c.subjects, SLID_LEARN: c.learn }, { filename: "fixture.js" });
  const ctx = { console, SLID_LEARN: c.learn }; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(hypFile || path.join(root, "app/hyp.js"), "utf8"), ctx, { filename: "app/hyp.js" });
  const math = Object.values(c.subjects).find(s => s.id === "math");
  const pool = new Map(), lessons = new Map();
  for (const p of math.pools || []) for (const it of p.items) pool.set(p.id + ":" + it.id, { ...it, key: p.id + ":" + it.id, pool: p });
  for (const sec of math.sections) for (const l of sec.lessons || []) lessons.set(l.id, { l, sec });
  const diags = new Map((math.diags || []).map(d => [d.id, d]));
  return { root, learn: c.learn, hyp: ctx.SLID_HYP, math, pool, lessons, diags, pres: ctx.SLID_HYP.preIndex(math), graph: c.learn.graphBind ? c.learn.graphBind(math) : null };
}

const localDay = (t, tzo) => new Date(t - (tzo || 0) * 6e4).toISOString().slice(0, 10);
const seedOf = (E, s) => E.learn.genHash(s).toString(36).padStart(7, "0").slice(0, 8);
const share = (a, b) => b ? Math.round(1000 * a / b) / 1000 : null;

/* ---------- Реплей журналу ---------- */
/** exp — { events: [...] } (SLID_EVIDENCE.export()). Повертає { profiles, events — події hyp_* з did/pid/t, hyps — зведення за hid, notes }. */
export function replay(exp, E) {
  const H = E.hyp, all = (exp.events || []).filter(e => e && e.type && e.d !== undefined).slice().sort((a, b) => (a.seq ?? 0) - (b.seq ?? 0));
  const groups = new Map();
  for (const e of all) { const k = (e.did ?? exp.did ?? "?") + "|" + (e.pid ?? "?"); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
  const out = [], hyps = new Map(), profiles = [], notes = { unresolved: 0, cvGuess: 0, otherSubject: 0, bootDiff: 0, hypOff: 0 };
  const GD = { graphV: E.graph?.g?.v ?? null, lines: (E.graph?.lines || []).map(x => x.id), answers: 0, inLine: 0, presDiff: 0, preWeakDiff: 0, examples: [], events: [] };
  for (const [k, evs] of groups) {
    const [did, pid] = k.split("|"), T0 = H.tracker({ seed: seedOf(E, k), persist: 1 });
    // G3: тіньовий трекер з pres / preWeak за графом — ті самі виклики, лише інші pres / preWeak у onAnswer; його події — у GD.events
    const T2 = H.tracker({ seed: seedOf(E, k), persist: 1 }), Sd = { diag: {} }, dRev = {};
    const T = new Proxy(T0, { get: (t, m) => typeof t[m] !== "function" ? t[m] : m === "onAnswer" ? t[m].bind(t)
      : (...a) => { const r = t[m](...a), r2 = T2[m](...a); if (Array.isArray(r2)) for (const x of r2) GD.events.push({ ...x, did, pid }); return r; } });
    // persist і стан між завантаженнями (§3.3, §9 п. 34) — з подій застосунку про сховище, не з його hyp_open:
    //  - boot.hyp.store === 0 (localStorage недоступний) — persist: 0 у цьому завантаженні (sid) від boot;
    //  - hyp_lost (slid.hyp самоочищено) — persist: 0 від події d.n того самого завантаження (sid): її застосунок записав, а трекер ще не
    //    обробив (відповідь між capture і answer()); d.n null чи немає — від самої hyp_lost. Номер дає застосунок, тож місце не виводиться
    //    з порядку подій і не залежить від того, де в app.js стоїть save() (§9 п. 36; раніше — «остання не-hyp подія +0,5»);
    //  - boot.hyp.open === null (застосунок не завантажив стану: немає ключа — без сховища, після hyp_lost / hyp_off чи скидання) —
    //    відкрити свій pend (як pagehide застосунку без сховища) і почати з порожнього стану без подій. open: n — звірити з реплеєм (notes.bootDiff).
    // Журнали без boot.hyp (до tools-diff-answers-p3, лише робочі гілки) — втрату стану реплей не бачить.
    const sidOf = e => e.sid ?? "?", lost0 = new Map();
    for (const e of evs) if (e.type === "hyp_lost" && !lost0.has(sidOf(e))) lost0.set(sidOf(e), Number.isInteger(e.d?.n) ? e.d.n : e.n ?? -Infinity);
    const lostAt = e => lost0.has(sidOf(e)) && (e.n ?? Infinity) >= lost0.get(sidOf(e));
    let prevSid = null, noStore = false;
    const prof = { did, pid, events: evs.length, fresh: false, answers: 0, cvGuess: 0 };
    // weak — уроки тем gap/shaky за останнім diag_end кожного тесту (як S.diag[id].topics у app.js); done — уроки з lesson_end
    // (S.lessons[l].done ставиться за будь-якої точності) — app.js передає їх трекеру як a.done (superseded, §9 п. 10).
    // Профіль не з початку журналу: уроки, пройдені до журналу, невідомі (у boot лише кількість) — покриває зріз accuracyNotFresh, §9 п. 16
    let run = 0; const seen = {}, lvl = {}, weakBy = {}, done = new Set();
    const first = evs[0]; prof.fresh = !!(first && ((first.type === "boot" && first.d?.lessons === 0) || first.type === "reset"));
    const push = (e, list) => { for (const x of list) {
      const r = { ...x, did, pid, t: e.t, seq: e.seq ?? null }; out.push(r);
      if (x.type === "hyp_open") hyps.set(x.d.hid, { open: r, probes: [], close: null, next: [], raw: e.d?.raw, pair: [x.d.h.l, x.d.h.sk], d0: localDay(e.t, e.tzo), did, pid, fresh: prof.fresh });
      else if (x.d.hid && hyps.has(x.d.hid)) { const h = hyps.get(x.d.hid); if (x.type === "hyp_probe") h.probes.push(r); if (x.type === "hyp_close") h.close = r; }
    } };
    for (const e of evs) {
      const d = e.d || {}, day = localDay(e.t, e.tzo);
      if (e.cv === null || e.cv === undefined) { notes.cvGuess++; prof.cvGuess++; }
      if (e.type === "hyp_off") { notes.hypOff++; prof.hypOff = (prof.hypOff || 0) + 1; }
      if (String(e.type).startsWith("hyp_")) continue;   // події застосунку — лише hyp_lost / hyp_off (вище) і порівняння, реплей рахує свої
      if (sidOf(e) !== prevSid) noStore = false;
      prevSid = sidOf(e);
      if (e.type === "boot" && d.hyp) {
        if (d.hyp.store === 0) noStore = true;
        if (d.hyp.open === null) { push(e, T.flush()); T.load({ v: 1, scr: 0 }); }
        else if (Number.isInteger(d.hyp.open) && d.hyp.open !== T.open.length) { notes.bootDiff++; prof.bootDiff = (prof.bootDiff || 0) + 1; }
      }
      T.setPersist(noStore || lostAt(e) ? 0 : 1);
      switch (e.type) {
        case "boot": push(e, T.tick({ t: e.t, day })); break;   // app.js: старт — гіпотези, старші за 7 днів, → expired
        case "reset": push(e, T.onReset({ t: e.t, day })); break;
        case "lesson_start": case "practice_start": case "diag_start": run++;
          if (e.type === "diag_start" && Number.isInteger(d.rev)) dRev[d.diag] = d.rev;
          if (e.type === "practice_start") for (const it of d.items || []) if (it.key) lvl[it.key] = it.lvl ?? null;
          break;
        case "diag_end": {
          const dg = E.diags.get(d.diag);
          const w = weakBy[d.diag] = new Set();
          for (const [tid, st] of Object.entries(d.topics || {})) if (st === "gap" || st === "shaky") (dg?.topics.find(t => t.id === tid)?.lessons || []).forEach(l => w.add(l));
          Sd.diag[d.diag] = { done: true, res: d.res || {}, rev: Number.isInteger(d.rev) ? d.rev : dRev[d.diag] ?? null };   // як S.diag — для nodeState (G3)
          // «Ще не знаю» цього тесту — лічильником (застосунок пише його в diag_end.hyp, §9 [E2-p3]); для «застосунок = реплей» — запис diag_end
          if (!d.c || d.c === "math") { const x = { type: "diag_end", d: { hyp: T.onDiagEnd({ diag: d.diag }) } }; out.push({ ...x, did, pid, t: e.t, seq: e.seq ?? null }); prof.diagSkip = (prof.diagSkip || 0) + x.d.hyp.skip; }
          break; }
        case "screen": if (d.c && d.c !== "math") break; push(e, T.onScreen({ item: d, t: e.t, day })); break;
        case "lesson_end": if (d.l) done.add(d.l); push(e, T.onLessonEnd({ l: d.l, acc: d.acc, run, t: e.t, day })); break;
        case "close": push(e, T.flush()); break;
        case "answer": {
          if (d.c && d.c !== "math") { notes.otherSubject++; break; }
          const base = d.mode === "practice" ? E.pool.get(d.key) : d.mode === "diag" ? E.diags.get(d.l)?.items[d.i] : E.lessons.get(d.l)?.l.screens[d.i];
          // gen: той самий набір, що бачила дитина (genAt з журналу), — числа умови й ключ екземпляра
          const s = base && base.gen && Number.isInteger(d.genAt) ? E.learn.genInstance(base, "", d.genAt) || base : base;
          if (!s) { notes.unresolved++; break; }
          prof.answers++;
          const dg = d.mode === "diag" ? E.diags.get(d.l) : null;
          const ls = dg ? (s.lesson ? [s.lesson] : dg.topics.find(t => t.id === s.topic)?.lessons || [d.l]) : [d.l];
          const pres = [...new Set([...ls.flatMap(l => E.pres[l] || []), ...(s.pre ? [s.pre] : [])])].filter(l => !ls.includes(l));
          const a = { s, item: { mode: d.mode, l: d.l, i: d.i, key: d.key ?? null, type: d.type, sk: d.sk ?? s.sk ?? null, hyp: !!d.hyp },
            raw: d.raw, verdict: d.verdict, try: d.try, hint: !!d.hint, final: !!d.final, dt: e.dt, t: e.t, day,
            lvl: d.key ? (lvl[d.key] ?? s.lvl ?? null) : null, unseen: d.key ? seen[d.key] === undefined : undefined, run, ls, pres,
            preWeak: pres.some(l => Object.values(weakBy).some(w => w.has(l))), done: ls.filter(l => done.has(l)), cv: e.cv ?? null };
          // gen (Dg): набір значень і індекс — з журналу (d.gv, d.genAt, E2), кількість наборів — зі змісту (genAll)
          if (d.gv !== undefined && d.gv !== null) { a.gv = d.gv; a.genAt = d.genAt; a.genN = base.gen ? (E.learn.genAll(base)?.envs?.length ?? 0) : 0; }
          // наступні 3 відкладені відповіді першої спроби на пару (для «хибної тривоги» й «пропущеного поняття», §4.1)
          if (d.mode === "practice" && (d.try ?? 1) === 1) for (const h of hyps.values())
            if (h.did === did && h.pid === pid && h.pair[0] === d.l && h.pair[1] === a.item.sk && day > h.d0 && h.next.length < 3) h.next.push(d.verdict === "bad" ? 0 : 1);
          push(e, T.onAnswer(a));
          // G3: нові pres / preWeak за графом (лише в лініях verified), той самий вхід — тіньовому трекеру
          const nw = graphPres(E, d, s, ls, a, Sd);
          GD.answers++; if (nw.line) GD.inLine++;
          const dp = JSON.stringify([...pres].sort()) !== JSON.stringify([...nw.pres].sort()), dw = a.preWeak !== nw.preWeak;
          if (dp) GD.presDiff++; if (dw) GD.preWeakDiff++;
          if ((dp || dw) && GD.examples.length < 20) GD.examples.push({ at: { mode: d.mode, l: d.l, i: d.i ?? null, key: d.key ?? null }, sk: a.item.sk, line: nw.line, u: nw.nodes, pre: nw.pre,
            pres, presNew: nw.pres, preWeak: a.preWeak, preWeakNew: nw.preWeak });
          for (const x of T2.onAnswer({ ...a, pres: nw.pres, preWeak: nw.preWeak })) GD.events.push({ ...x, did, pid });
          if (d.mode === "practice" && d.final && d.key) seen[d.key] = 1;
          break; }
      }
    }
    push(evs[evs.length - 1] || { t: 0 }, T.flush());
    profiles.push(prof);
  }
  GD.old = hypSummary(out); GD.new = hypSummary(GD.events);
  const key = x => JSON.stringify(x.d.h ? { ...x.d.h } : x.d), oo = out.filter(x => x.type === "hyp_open"), nn = new Map(GD.events.filter(x => x.type === "hyp_open").map(x => [x.d.hid, x]));
  GD.openDiff = oo.filter(x => !nn.has(x.d.hid) || key(nn.get(x.d.hid)) !== key(x)).map(x => ({ hid: x.d.hid, at: x.d.at, old: { rule: x.d.h.rule, sig: x.d.h.sig, top: x.d.h.top, pexec: x.d.h.pexec },
    new: nn.has(x.d.hid) ? { rule: nn.get(x.d.hid).d.h.rule, sig: nn.get(x.d.hid).d.h.sig, top: nn.get(x.d.hid).d.h.top, pexec: nn.get(x.d.hid).d.h.pexec } : null })).slice(0, 50);
  const { events: _e, ...graph } = GD;
  return { profiles, events: out, hyps, notes, graph };
}

/* ---------- Skill Graph G3: старі й нові pres / preWeak (docs/design/skill-graph-math.md §4.2) ----------
   Нові — лише для об'єктів у лініях verified (inLine; поза графом — як зараз): вузли пари (live вузли об'єкта за правилом §2.4 +
   вузли з teach ∋ урок пари й тією самою sk) → прямі pre w 2 і part → уроки teach (pres, кандидати P і S12); preWeak — хоч один із цих
   вузлів-передумов слабкий за nodeState (BAD або «Ще не знаю» його завдання в pre-темі останнього результату тесту; HALF — ні;
   завдання з rev, новішим за результат, — ні). Правила hyp-1 у застосунку не змінюються (тінь, §4.2). */
function graphPres(E, d, s, ls, a, Sd) {
  const B = E.graph, L = E.learn;
  if (!B || !B.g || !L.graphPre) return { line: null, pres: a.pres, preWeak: a.preWeak, nodes: null, pre: null };
  const e = d.mode === "practice" ? B.items.get(String(d.key)) : d.mode === "diag" ? B.ditems.get(`${d.l}#${d.i}`) : B.screens.get(`${d.l}#${d.i}`);
  const line = d.mode === "diag" ? L.inLine(B, { topic: `${d.l}/${s.topic}` })[0] : ls.map(l => L.inLine(B, { l })[0]).find(Boolean);
  if (!line) return { line: null, pres: a.pres, preWeak: a.preWeak, nodes: e ? e.live : null, pre: null };
  const gp = L.graphPre(B, { ls, sk: a.item.sk, nodes: e ? e.live : [] });
  return { line, pres: gp.lessons, preWeak: gp.pre.some(id => L.nodeState(Sd, B, id)?.weak), nodes: e ? e.live : [], pre: gp.pre };
}
/** Зведення подій трекера для порівняння «старі / нові pres»: відкриття, S12, правила, top, перевірки P (усі й чисті), закриття. */
function hypSummary(evs) {
  const o = { open: 0, s12: 0, rules: {}, top: {}, probeP: 0, probePclean: 0, probes: 0, close: {} };
  for (const x of evs) {
    if (x.type === "hyp_open") { o.open++; if (x.d.h.sig.includes("S12")) o.s12++; o.rules[x.d.h.rule] = (o.rules[x.d.h.rule] || 0) + 1; o.top[x.d.h.top] = (o.top[x.d.h.top] || 0) + 1; }
    if (x.type === "hyp_probe") { o.probes++; if (x.d.kind === "P") { o.probeP++; if (x.d.sol === 0) o.probePclean++; } }
    if (x.type === "hyp_close") o.close[x.d.why] = (o.close[x.d.why] || 0) + 1;
  }
  return o;
}

/* ---------- Метрики §4.1 ---------- */
const CLEAN_GROUPS = { "D≤+F": ["D≤", "F"], Dg: ["Dg"], "D>": ["D>"], "D°": ["D°"], P: ["P"] };
export function metrics(R, E) {
  const H = E.hyp, hs = [...R.hyps.values()], M = {};
  const opens = hs.map(h => h.open.d);
  M.hypotheses = hs.length;
  M.coverage = { known: share(opens.filter(o => o.h.top !== "unk").length, hs.length), unsure: share(opens.filter(o => o.h.pexec >= .2 && o.h.pexec <= .8).length, hs.length), amb: opens.filter(o => o.amb).length };
  M.rules = {}; for (const o of opens) M.rules[o.h.rule] = (M.rules[o.h.rule] || 0) + 1;
  const RES = ["D≤", "D>", "F", "P", "Dg"];
  const resolved = h => h.probes.some(p => RES.includes(p.d.kind) && p.d.gap.days <= 7);
  const pairKey = h => [h.did, h.pid, ...h.pair].join("|");
  const pairs = new Map(); for (const h of hs) pairs.set(pairKey(h), (pairs.get(pairKey(h)) || false) || resolved(h));
  M.resolvable = { hyps: share(hs.filter(resolved).length, hs.length), pairs: share([...pairs.values()].filter(Boolean).length, pairs.size), pairCount: pairs.size };
  // точність лише за чистими перевірками (sol: 0, не A); прогноз — pexec перед цією перевіркою
  // P2-2: профіль, чий журнал не починається з порожнього стану (ротація, прогрес до Evidence V2), — «небачене» за журналом
  // ненадійне (вправа могла бути розв'язана до початку журналу), тож його перевірки — окремим зрізом accuracyNotFresh, не в головній точності
  const acc = {}, accStale = {}, brier = {}, base = { always_calc: [0, 0], always_rule: [0, 0] }, cls = {}, weakSig = {};
  const cell = (o, k) => (o[k] ||= { n: 0, ok: 0, m: { exec_ok: 0, exec_bad: 0, know_ok: 0, know_bad: 0 } });
  for (const h of hs) {
    let prior = H.CLS.map(c => h.open.d.h.prior[c]);
    const lvl = h.open.d.h.lvl ?? 1;   // вправа уроку чи тесту рівня (lvl немає) — рівень 1 (§9 п. 7)
    for (const p of h.probes) {
      const d = p.d, before = prior; prior = H.CLS.map(c => d.post[c]);
      if (d.kind === "A" || d.sol !== 0 || !["ok", "form", "bad"].includes(d.res)) continue;
      const ok = d.res !== "bad", pe = before[0] + before[1];
      const L = H.LIK[d.kind]; const pOk = before.reduce((s, x, i) => s + x * L[i], 0);
      if (h.fresh) { (brier[d.kind] ||= { n: 0, sum: 0 }); brier[d.kind].n++; brier[d.kind].sum += (pOk - (ok ? 1 : 0)) ** 2;
        base.always_calc[1]++; base.always_rule[1]++; if (ok) base.always_calc[0]++; else base.always_rule[0]++; }
      if (Math.abs(pe - .5) < 1e-9) continue;
      const g = Object.keys(CLEAN_GROUPS).find(k => CLEAN_GROUPS[k].includes(d.kind));
      const hit = (pe > .5) === ok, mk = (pe > .5 ? "exec_" : "know_") + (ok ? "ok" : "bad");
      for (const key of [g, `${g}|lvl${lvl}`, `${g}|sol0=${d.sol0 ? "≥1" : "0"}`]) { const c = cell(h.fresh ? acc : accStale, key); c.n++; if (hit) c.ok++; c.m[mk]++; }
      if (!h.fresh) continue;
      const top = H.topOf(before).top, cc = (cls[top] ||= { n: 0, ok: 0 }); cc.n++; if (ok) cc.ok++;
      const rule = h.open.d.h.rule, sig = h.open.d.h.sig;
      for (const w of [rule === "P8" && "P8 (S6)", rule === "P6" && "P6 (S3)", sig.includes("S11") && "S11"].filter(Boolean)) { const c = (weakSig[w] ||= { n: 0, ok: 0 }); c.n++; if (hit) c.ok++; }
    }
  }
  for (const c of [...Object.values(acc), ...Object.values(accStale)]) c.acc = share(c.ok, c.n);
  M.accuracy = acc; M.accuracyNotFresh = accStale;
  M.brier = Object.fromEntries(Object.entries(brier).map(([k, v]) => [k, { n: v.n, brier: Math.round(1000 * v.sum / v.n) / 1000 }]));
  M.baselines = { always_calc: share(...base.always_calc), always_rule: share(...base.always_rule), only_detect: "не реалізовано в E1 (потрібен реплей record/detect з порожнього стану, E4)" };
  M.byClass = Object.fromEntries(Object.entries(cls).map(([k, v]) => [k, { n: v.n, okShare: share(v.ok, v.n) }]));
  M.weakSignals = Object.fromEntries(Object.entries(weakSig).map(([k, v]) => [k, { n: v.n, acc: share(v.ok, v.n) }]));
  // rule / pre — лише за P і S12, описово
  const preTop = hs.filter(h => h.open.d.h.top === "pre"), preP = preTop.filter(h => h.probes.some(p => p.d.kind === "P" && p.d.sol === 0));
  M.rulePre = { topPre: preTop.length, withP: preP.length, pBad: preP.filter(h => h.probes.find(p => p.d.kind === "P" && p.d.sol === 0).d.res === "bad").length, s12: opens.filter(o => o.h.sig.includes("S12")).length };
  // «виправлено поясненням» (A ✔) — описово
  const aOf = f => { const xs = hs.filter(f).map(h => h.probes.find(p => p.d.kind === "A")).filter(Boolean); return { n: xs.length, ok: share(xs.filter(p => p.d.res !== "bad").length, xs.length) }; };
  M.fixedByExplanation = { exec: aOf(h => h.open.d.h.pexec > .5), know: aOf(h => h.open.d.h.pexec < .5) };
  // хибна тривога «поняття» і пропущене поняття — за наступними 3 відкладеними відповідями на пару
  const fa = hs.filter(h => h.open.d.h.pexec < .4 && h.next.length >= 3), mc = hs.filter(h => h.open.d.h.pexec > .6 && h.next.length >= 3);
  M.falseAlarm = { n: fa.length, share: share(fa.filter(h => h.next.every(x => x)).length, fa.length) };
  M.missedConcept = { n: mc.length, share: share(mc.filter(h => h.next.filter(x => !x).length >= 2).length, mc.length) };
  M.closes = {}; for (const h of hs) { const w = h.close ? h.close.d.why : "open"; M.closes[w] = (M.closes[w] || 0) + 1; }
  // P3-R2-1 (рев'ю E1): superseded окремо для гіпотез з тесту рівня — урок теми, пройдений до тесту, закриває їх на першому повторному проході
  M.supersededByMode = {}; for (const h of hs) if (h.close?.d.why === "superseded") { const m = h.open.d.at.mode; M.supersededByMode[m] = (M.supersededByMode[m] || 0) + 1; }
  M.kinds = {}; for (const h of hs) for (const p of h.probes) { const k = `${p.d.kind}${p.d.sol ? " (sol 1)" : ""}`; M.kinds[k] = (M.kinds[k] || 0) + 1; }
  M.ambList = hs.filter(h => h.open.d.amb).map(h => ({ hid: h.open.d.hid, at: h.open.d.at, raw: h.raw, sig: h.open.d.h.sig.filter(s => s.startsWith("S1:")), probe: h.probes.find(p => p.d.kind !== "A")?.d.res ?? null }));
  M.cost = "E5 (вставлені перевірки) — у тіні немає";
  return M;
}

function reportMd(R, M, meta) {
  const L = [`# Реплей гіпотез (${meta.date})`, "", `_tools/hyp-replay.mjs, правила ${meta.rv}, журнал ${meta.input}. Метрики — docs/design/diag-hypothesis-math.md §4.1._`, ""];
  L.push(`Профілів (did+pid): ${R.profiles.length}; з порожнього стану: ${R.profiles.filter(p => p.fresh).length}. Відповідей математики: ${R.profiles.reduce((a, p) => a + p.answers, 0)}; не знайдено в змісті: ${R.notes.unresolved}; «Ще не знаю» в тестах рівня (лічильник diag_end, не гіпотези): ${R.profiles.reduce((a, p) => a + (p.diagSkip || 0), 0)}.`);
  if (R.notes.cvGuess) L.push("", `**cvGuess:** ${R.notes.cvGuess} подій без \`cv\` — зміст узято з поточного дерева.`);
  if (R.notes.bootDiff) L.push("", `**bootDiff:** ${R.notes.bootDiff} завантажень, де застосунок завантажив інше число відкритих гіпотез (\`boot.hyp.open\`), ніж мав реплей, — кілька вкладок, профіль не з початку журналу чи втрата стану (§9 п. 32, 34).`);
  if (R.notes.hypOff) L.push("", `**hypOff:** ${R.notes.hypOff} вимкнень тіні (\`hyp_off\`: виняток чи бюджет 400 мс) — після них до перезавантаження застосунок подій не пише, а реплей пише: ці профілі не порівнювати «застосунок = реплей».`);
  L.push("", "| Метрика | Значення |", "|---|---|");
  L.push(`| Гіпотез | ${M.hypotheses} |`, `| Покриття (top ≠ unk) | ${M.coverage.known ?? "—"} |`, `| Невизначені (0,2 ≤ pexec ≤ 0,8) | ${M.coverage.unsure ?? "—"} |`,
    `| Розв'язність (гіпотези / пари) | ${M.resolvable.hyps ?? "—"} / ${M.resolvable.pairs ?? "—"} (пар ${M.resolvable.pairCount}) |`,
    `| Хибна тривога «поняття» | ${M.falseAlarm.share ?? "—"} (n = ${M.falseAlarm.n}) |`, `| Пропущене поняття | ${M.missedConcept.share ?? "—"} (n = ${M.missedConcept.n}) |`,
    `| Базові: завжди calc / завжди rule | ${M.baselines.always_calc ?? "—"} / ${M.baselines.always_rule ?? "—"} |`, `| Базове «лише detect» | ${M.baselines.only_detect} |`);
  L.push("", "## Точність exec/know (лише чисті перевірки, sol: 0)", "", "| Вид · зріз | n | точність | exec ✔ | exec ✘ | know ✔ | know ✘ |", "|---|---|---|---|---|---|---|");
  for (const [k, c] of Object.entries(M.accuracy).sort()) L.push(`| ${k} | ${c.n} | ${c.acc} | ${c.m.exec_ok} | ${c.m.exec_bad} | ${c.m.know_ok} | ${c.m.know_bad} |`);
  if (!Object.keys(M.accuracy).length) L.push("| — | 0 | — | | | | |");
  const stale = R.profiles.filter(p => !p.fresh).length;
  L.push("", `**Профілі не з початку журналу:** ${stale} (журнал не починається з \`boot\` з \`lessons: 0\` чи \`reset\` — ротація або прогрес до Evidence V2). «Небачену» вправу для них визначено лише за журналом, тож їхні перевірки — окремо, у точність вище не входять.`);
  if (Object.keys(M.accuracyNotFresh).length) { L.push("", "| Вид · зріз (не з початку) | n | точність |", "|---|---|---|"); for (const [k, c] of Object.entries(M.accuracyNotFresh).sort()) L.push(`| ${k} | ${c.n} | ${c.acc} |`); }
  L.push("", "## Види перевірок", "", ...Object.entries(M.kinds).map(([k, v]) => `- ${k}: ${v}`), "", "## Закриття", "", ...Object.entries(M.closes).map(([k, v]) => `- ${k}: ${v}`));
  if (M.closes.superseded) L.push(`- superseded за місцем помилки: ${Object.entries(M.supersededByMode).map(([k, v]) => `${k} ${v}`).join(", ")} (з тесту рівня — ${M.supersededByMode.diag || 0} з ${M.closes.superseded}; помітна частка — переглянути правило, P3-R2-1)`);
  L.push("", "## Правила відкриття", "", ...Object.entries(M.rules).map(([k, v]) => `- ${k}: ${v}`));
  L.push("", "## Калібрування (Brier, P(✔) за видом)", "", ...Object.entries(M.brier).map(([k, v]) => `- ${k}: ${v.brier} (n = ${v.n})`));
  L.push("", "## Слабкі сигнали", "", ...(Object.entries(M.weakSignals).map(([k, v]) => `- ${k}: точність ${v.acc} (n = ${v.n})`)));
  L.push("", "## rule / pre (описово)", "", `top = pre: ${M.rulePre.topPre}; з чистою перевіркою P: ${M.rulePre.withP}, з них ✘: ${M.rulePre.pBad}; S12 при відкритті: ${M.rulePre.s12}.`);
  L.push("", "## «Виправлено поясненням» (A, описово)", "", `exec: ${M.fixedByExplanation.exec.ok ?? "—"} (n = ${M.fixedByExplanation.exec.n}); know: ${M.fixedByExplanation.know.ok ?? "—"} (n = ${M.fixedByExplanation.know.n}).`);
  L.push("", "## Неоднозначні відповіді (amb: 1) — для вчителя", "");
  if (!M.ambList.length) L.push("Немає.");
  else { L.push("| hid | вправа | запис | класи з mis | перевірка |", "|---|---|---|---|---|"); for (const a of M.ambList) L.push(`| ${a.hid} | ${a.at.key || a.at.l + "#" + a.at.i} | ${JSON.stringify(a.raw)} | ${a.sig.join(", ")} | ${a.probe ?? "—"} |`); }
  L.push("", `Ціна: ${M.cost}.`, "");
  const G = R.graph;
  if (G) {
    L.push("## Граф умінь (G3, тінь): старі й нові pres / preWeak", "", `_docs/design/skill-graph-math.md §4.2. Граф ${G.graphV ?? "—"}, лінії verified: ${G.lines.join(", ") || "—"}. Нові — лише в лініях; поза ними — як зараз. Метрики вище — за старими pres (hyp-1)._`, "",
      `Відповідей: ${G.answers}, у лініях: ${G.inLine}; інші pres: ${G.presDiff}; інший preWeak: ${G.preWeakDiff}; відкриттів з іншим сигналом / правилом: ${G.openDiff.length}.`, "",
      "| Зведення | старі pres | нові pres |", "|---|---|---|");
    for (const [k, name] of [["open", "hyp_open"], ["s12", "S12 при відкритті"], ["probes", "hyp_probe"], ["probeP", "перевірки P"], ["probePclean", "чисті P"]]) L.push(`| ${name} | ${G.old[k]} | ${G.new[k]} |`);
    L.push(`| правила | ${JSON.stringify(G.old.rules)} | ${JSON.stringify(G.new.rules)} |`, `| top | ${JSON.stringify(G.old.top)} | ${JSON.stringify(G.new.top)} |`, `| закриття | ${JSON.stringify(G.old.close)} | ${JSON.stringify(G.new.close)} |`);
    if (G.examples.length) { L.push("", "| спроба | sk | лінія | вузли | pres → нові | preWeak → новий |", "|---|---|---|---|---|---|");
      for (const x of G.examples) L.push(`| ${x.at.key || x.at.l + "#" + x.at.i} (${x.at.mode}) | ${x.sk} | ${x.line ?? "—"} | ${(x.u || []).join(", ")} → ${(x.pre || []).join(", ")} | ${x.pres.join(", ") || "—"} → ${x.presNew.join(", ") || "—"} | ${x.preWeak} → ${x.preWeakNew} |`); }
    L.push("");
  }
  return L.join("\n");
}

/* ---------- Цифри змісту §0, §2.1, §2.3 ---------- */
export function contentStats(E) {
  const { math: m, learn: LEARN } = E, lv = x => x.lvl || 1, cnt = (a, f) => a.reduce((o, x) => (o[f(x)] = (o[f(x)] || 0) + 1, o), {});
  const lessons = m.sections.flatMap(s => s.lessons || []);
  const scr = lessons.flatMap(l => l.screens.map((s, i) => ({ ...s, _l: l.id, _i: i })));
  const graded = scr.filter(s => GRADED.includes(s.type) && !s.hyp && !s.poll);
  const items = m.pools.flatMap(p => p.items.map(it => ({ ...it, key: p.id + ":" + it.id, pool: p })));
  const answers = items.filter(i => i.type === "answer");
  const pairs = {}; items.forEach(i => (pairs[i.lesson + "|" + i.sk] ||= []).push(i));
  const skL = {}; scr.filter(s => s.sk).forEach(s => (skL[s.sk] ||= new Set()).add(s._l));
  const S0 = {
    gradedScreens: graded.length, byType: cnt(graded, s => s.type), choiceHypPoll: scr.filter(s => s.type === "choice" && (s.hyp || s.poll)).length,
    fbBad: graded.filter(s => s.fbBad).length, hint: graded.filter(s => s.hint).length, pre: graded.filter(s => s.pre).length,
    preLessons: new Set(graded.filter(s => s.pre).map(s => s._l)).size,
    pools: m.pools.length, poolItems: items.length, lvl: cnt(items, lv), steps: items.every(i => Array.isArray(i.steps) && i.steps.length),
    poolHint: items.filter(i => i.hint).length, poolPre: items.filter(i => i.pre).length, gen: items.filter(i => i.gen).length,
    itemTypes: cnt(items, i => i.type), answerNumber: answers.filter(i => (i.answerKind || "number") === "number").length,
    pairs: Object.keys(pairs).length, pairs2a1: Object.values(pairs).filter(p => p.filter(i => i.type === "answer" && lv(i) === 1).length >= 2).length,
    diags: (m.diags || []).length, diagItems: (m.diags || []).reduce((a, d) => a + d.items.length, 0),
    skLessons: Object.fromEntries(Object.entries(skL).map(([k, v]) => [k, v.size]).sort((a, b) => b[1] - a[1]).slice(0, 4)),
    pureTitle: answers.filter(i => /^\s*\$[^$]+\$\s*$/.test(i.title || "")).length, poolAnswers: answers.length
  };
  // §2.1 і §2.3: перша focus-сесія уроку (pickSession з порожнім S), помилка на одній із 4 вправ теми, решта ✔; наступна сесія — інший день, той самий focus
  const L1 = [...new Set(items.map(i => i.lesson))];
  const c21 = { errors: 0, A: 0, Dle: 0, Dgt: 0, Dseen: 0, none: 0, anyUnseen: 0, F: 0, natDle: 0, natAny: 0, byLvl: {} };
  const c23 = {}, sol0hist = {}, pairSizes = {};
  for (const l of L1) {
    const s1 = LEARN.pickSession({ seen: {}, srs: {}, lessons: {} }, { items, focus: l, n: 6, day: "2026-11-01" }).filter(x => !x.review);
    const ses = new Set(LEARN.pickSession({ seen: {}, srs: {}, lessons: {} }, { items, focus: l, n: 6, day: "2026-11-01" }).map(x => x.key));
    const bySk = {}; s1.forEach(x => bySk[x.sk] = (bySk[x.sk] || 0) + 1); Object.values(bySk).forEach(n => pairSizes[n] = (pairSizes[n] || 0) + 1);
    s1.forEach((it, k) => {
      c21.errors++; const b = (c21.byLvl[lv(it)] ||= { errors: 0, Dle: 0 }); b.errors++;
      if (s1.slice(k + 1).some(o => o.sk === it.sk && lv(o) <= lv(it))) c21.A++;
      const S = { seen: {}, srs: {}, lessons: {} }; s1.forEach(o => S.seen[o.key] = o === it ? 0 : 1);
      const pair = items.filter(o => o.lesson === l && o.sk === it.sk && o.key !== it.key && o.type === "answer");
      const le = pair.filter(o => lv(o) <= lv(it));
      if (le.some(o => S.seen[o.key] === undefined)) { c21.Dle++; b.Dle++; } else if (le.length) c21.Dseen++; else c21.none++;
      if (pair.some(o => S.seen[o.key] === undefined)) { c21.anyUnseen++; if (!le.some(o => S.seen[o.key] === undefined)) c21.Dgt++; }
      if (items.some(o => o.lesson === l && !ses.has(o.key) && (o.type === "choice" || o.type === "multi" || o.answerKind === "comparison"))) c21.F++;
      const s2 = LEARN.pickSession(S, { items, focus: l, n: 6, day: "2026-11-02" }).filter(x => !x.review);
      const nat = s2.filter(o => o.key !== it.key && o.sk === it.sk && o.type === "answer" && S.seen[o.key] === undefined);
      if (nat.some(o => lv(o) <= lv(it))) c21.natDle++; if (nat.length) c21.natAny++;
      // §2.3 (hyp-r3-sol-v2): природна перевірка — перша вправа пари в сесії наступного дня; пояснення дня помилки → sol0
      const c = (c23[lv(it)] ||= { errors: 0, clean: 0, cleanDle: 0, cleanDgt: 0, seen: 0, none: 0, sol0: 0 }); c.errors++;
      const s0 = s1.slice(k + 1).filter(o => o.sk === it.sk).length; sol0hist[s0] = (sol0hist[s0] || 0) + 1; if (s0) c.sol0++;
      const f = s2.find(o => o.sk === it.sk && o.key !== it.key && o.type === "answer");
      if (!f) c.none++; else if (S.seen[f.key] !== undefined) c.seen++; else { c.clean++; if (lv(f) <= lv(it)) c.cleanDle++; else c.cleanDgt++; }
    });
  }
  // §2.1 «Чого немає»: джерела зв'язку урок → передумови (hyp-fix-delayed)
  const poolLessons = new Set(L1), secOf = {}; for (const s of m.sections) for (const x of s.lessons || []) secOf[x.id] = s;
  const preScr = {}; for (const s of m.sections) for (const x of s.lessons || []) for (const sc of x.screens) if (sc.pre) (preScr[x.id] ||= new Set()).add(sc.pre);
  const diagPre = {}; for (const d of m.diags || []) for (const t of d.topics) if (t.kind === "pre" && !t.baseline) for (const sid of t.for || []) for (const pl of t.lessons || []) (diagPre[sid] ||= new Set()).add(pl);
  const pre = { poolLessons: poolLessons.size, viaPreScreens: 0, viaRequires: 0, viaDiagTopicFor: 0, any: 0, anyWithPrePool: 0 };
  for (const l of poolLessons) {
    const sec = secOf[l], a = preScr[l] || new Set(), b = new Set(sec?.requires || []), c = diagPre[sec?.id] || new Set();
    if (a.size) pre.viaPreScreens++; if (b.size) pre.viaRequires++; if (c.size) pre.viaDiagTopicFor++;
    const al = new Set([...a, ...b, ...c]); if (al.size) pre.any++; if ([...al].some(p => poolLessons.has(p))) pre.anyWithPrePool++;
  }
  return { s0: S0, s21: c21, s23: c23, sol0hist, pairSizes, pre, module: moduleModel(E, items, L1) };
}

/** Та сама модель §2.3, але через app/hyp.js: сесія 1 (помилка на вправі k, друга спроба ✔), сесія 2 наступного дня; беремо
    першу подію hyp_probe гіпотези не виду A — її kind, sol, sol0. A (той самий день) — окремо, з рівнем вправи-перевірки. */
function moduleModel(E, items, L1) {
  const { learn: LEARN, hyp: H } = E, lv = x => x.lvl || 1, byKey = new Map(items.map(i => [i.key, i]));
  const r = {}, A = { any: 0, le: 0 };
  const ans = (T, it, day, run, verdict, tr, final, unseen) => T.onAnswer({ s: it, item: { mode: "practice", l: it.lesson, i: 0, key: it.key, type: it.type, sk: it.sk },
    raw: verdict === "bad" ? "" : "ok", verdict, try: tr, hint: tr > 1 && !!it.hint, final, dt: 9000, t: Date.parse(day + "T10:00:00Z") + run * 6e4, day, lvl: it.lvl ?? null, unseen, run, ls: [it.lesson], pres: [] });
  for (const l of L1) {
    const s1 = LEARN.pickSession({ seen: {}, srs: {}, lessons: {} }, { items, focus: l, n: 6, day: "2026-11-01" }).filter(x => !x.review);
    s1.forEach((it, k) => {
      const T = H.tracker({ seed: "model" }), ev = [];
      s1.forEach((o, j) => { if (j === k) { ev.push(...ans(T, o, "2026-11-01", 1, "bad", 1, false, true), ...ans(T, o, "2026-11-01", 1, "ok", 2, true, true)); } else ev.push(...ans(T, o, "2026-11-01", 1, "ok", 1, true, true)); });
      const S = { seen: {}, srs: {}, lessons: {} }; s1.forEach(o => S.seen[o.key] = o === it ? 0 : 1);
      const s2 = LEARN.pickSession(S, { items, focus: l, n: 6, day: "2026-11-02" }).filter(x => !x.review);
      s2.forEach(o => ev.push(...ans(T, o, "2026-11-02", 2, "ok", 1, true, S.seen[o.key] === undefined)));
      const hid = ev.find(e => e.type === "hyp_open")?.d.hid, pr = ev.filter(e => e.type === "hyp_probe" && e.d.hid === hid);
      const a = pr.find(p => p.d.kind === "A"); if (a) { A.any++; if (lv(byKey.get(a.d.key)) <= lv(it)) A.le++; }
      // notClean / sol0Keys — ключі вправ з помилкою (test-hyp перевіряє, з яких уроків вони беруться)
      const f = pr.find(p => p.d.kind !== "A"), c = (r[lv(it)] ||= { errors: 0, clean: 0, kinds: {}, sol0ge1: 0, none: 0, notClean: [], sol0Keys: [] });
      c.errors++;
      if (!f) { c.none++; c.notClean.push(it.key); return; }
      if (f.d.sol === 0) { c.clean++; c.kinds[f.d.kind] = (c.kinds[f.d.kind] || 0) + 1; } else c.notClean.push(it.key);
      if (f.d.sol0 >= 1) { c.sol0ge1++; c.sol0Keys.push(it.key); }
    });
  }
  return { byLvl: r, A };
}

function printStats(st) {
  const { s0, s21, s23, pre, module: M } = st;
  const lines = [
    "§0 зміст: оцінюваних екранів " + s0.gradedScreens + " " + JSON.stringify(s0.byType) + `; choice hyp/poll ${s0.choiceHypPoll}; fbBad ${s0.fbBad}, hint ${s0.hint}, pre ${s0.pre} (у ${s0.preLessons} уроках)`,
    `   пули ${s0.pools}, вправ ${s0.poolItems}, lvl ${JSON.stringify(s0.lvl)}, steps у всіх: ${s0.steps}, hint ${s0.poolHint}, pre ${s0.poolPre}, gen ${s0.gen}; типи ${JSON.stringify(s0.itemTypes)}, answerKind number ${s0.answerNumber}`,
    `   пар (урок, sk) ${s0.pairs}, з ≥ 2 answer рівня 1 — ${s0.pairs2a1}; тести рівня ${s0.diags}, завдань ${s0.diagItems}; sk за уроками ${JSON.stringify(s0.skLessons)}`,
    `   title — чистий вираз: ${s0.pureTitle} з ${s0.poolAnswers} answer`,
    `§2.1 помилок першої сесії ${s21.errors}: A ${s21.A}; D≤ ${s21.Dle} (рівень 1 — ${s21.byLvl[1]?.Dle ?? 0}/${s21.byLvl[1]?.errors ?? 0}, рівень 2 — ${s21.byLvl[2]?.Dle ?? 0}/${s21.byLvl[2]?.errors ?? 0}); D> ${s21.Dgt}; D° ${s21.Dseen}; нічого з lvl ≤ ${s21.none}; будь-яка небачена ${s21.anyUnseen}; F ${s21.F}; природно наступної сесії D≤ / будь-яка ${s21.natDle} / ${s21.natAny}`,
    `   передумови: уроків з пулом ${pre.poolLessons}, requires ${pre.viaRequires}, теми тестів ${pre.viaDiagTopicFor}, pre екранів ${pre.viaPreScreens}, разом ${pre.any}, з пулом передумови ${pre.anyWithPrePool}`,
    `§2.3 (скрипт редакції 4) чисті наступного дня: рівень 1 — ${s23[1].clean}/${s23[1].errors} (D≤ ${s23[1].cleanDle}, D> ${s23[1].cleanDgt}), рівень 2 — ${s23[2].clean}/${s23[2].errors} (D≤ ${s23[2].cleanDle}, D> ${s23[2].cleanDgt}); sol0 ≥ 1 — ${s23[1].sol0}/${s23[1].errors} і ${s23[2].sol0}/${s23[2].errors}; пари першої сесії ${JSON.stringify(st.pairSizes)}`,
    `   §2.3 через app/hyp.js (цифри документа з E1): рівень 1 — чисті ${M.byLvl[1].clean}/${M.byLvl[1].errors} ${JSON.stringify(M.byLvl[1].kinds)}, sol0 ≥ 1 ${M.byLvl[1].sol0ge1}; рівень 2 — чисті ${M.byLvl[2].clean}/${M.byLvl[2].errors} ${JSON.stringify(M.byLvl[2].kinds)}, sol0 ≥ 1 ${M.byLvl[2].sol0ge1}; A (той самий день) ${M.A.any}, з них lvl ≤ ${M.A.le}`
  ];
  console.log(lines.join("\n"));
}

/* ---------- CLI ---------- */
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const argv = process.argv.slice(2), opt = n => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : null; };
  const root = path.resolve(opt("--root") || ROOT), E = hypEnv(root, null, opt("--fixture") ? fs.readFileSync(opt("--fixture"), "utf8") : null);
  if (argv.includes("--content-stats")) {
    const st = contentStats(E);
    if (argv.includes("--json")) console.log(JSON.stringify(st, null, 1)); else printStats(st);
  } else {
    const input = argv.find((a, i) => !a.startsWith("--") && !["--root", "--out", "--date", "--fixture"].includes(argv[i - 1]));
    if (!input) { console.error("Використання: node tools/hyp-replay.mjs <export.json> [--out DIR] [--date YYYY-MM-DD] | --content-stats [--json]"); process.exit(2); }
    const exp = JSON.parse(fs.readFileSync(input, "utf8")), R = replay(exp, E);
    if (argv.includes("--events")) { console.log(JSON.stringify(R.events)); await exitFlushed(0); }
    if (argv.includes("--graph-diff")) { console.log(JSON.stringify(R.graph, null, 1)); await exitFlushed(0); }   // не process.exit(): у pipe обрізав би JSON (tools-euphony-json-pipe)
    const M = metrics(R, E);
    const date = opt("--date") || new Date().toISOString().slice(0, 10), dir = path.resolve(opt("--out") || path.join(root, "reports/hyp"));
    fs.mkdirSync(dir, { recursive: true });
    const meta = { date, rv: E.hyp.RULES_VERSION, input: path.basename(input) };
    fs.writeFileSync(path.join(dir, `${date}.json`), JSON.stringify({ meta, profiles: R.profiles, notes: R.notes, metrics: M, events: R.events, graph: R.graph }, null, 1));
    fs.writeFileSync(path.join(dir, `${date}.md`), reportMd(R, M, meta));
    const nd = R.events.filter(e => e.type === "diag_end").length;
    console.log(`hyp-replay: ${R.events.length - nd} подій hyp_* і ${nd} підсумків diag_end, гіпотез ${M.hypotheses} → ${path.relative(process.cwd(), path.join(dir, date + ".md"))}`);
  }
}
