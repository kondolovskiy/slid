/* Слід — персоналізація: діагностика класу, персональний план, пошук повторюваних помилок.
   Чиста логіка без DOM (тестується в Node: tools/test-learn.mjs). Стан дитини S передає рушій (app/app.js).
   Опис: docs/PERSONALIZATION.md. Схема тесту: docs/CONTENT_SCHEMA.md §9. */
window.SLID_LEARN = (() => {
  const OK = 1, BAD = 0, SKIP = -1;              // результат завдання тесту; SKIP — «ще не знаю»
  const PASS = 0.65;                             // частка з першої спроби, з якої повторення зараховано (як 2 зірки)
  const WIN = 6;                                 // скільки останніх відповідей теми/навички пам'ятаємо
  const ERR_DAYS = 14, ERR_CAP = 80;             // журнал помилок: давність і розмір

  /* ---------- Діагностика ---------- */
  const DIAG_TYPES = ["choice", "multi", "sort", "order", "number", "fracin", "shade", "numline", "lab"];
  /** Наступне завдання: перше без відповіді, якщо раніше в цій темі не було помилки (складніше після провалу базового не питаємо). */
  function nextItem(d, res) {
    const failed = new Set();
    for (let i = 0; i < d.items.length; i++) {
      const t = d.items[i].topic;
      if (i in res) { if (res[i] !== OK) failed.add(t); continue; }
      if (!failed.has(t)) return i;
    }
    return -1;
  }
  /** Скільки завдань ще можуть показати (для смужки прогресу). */
  function remaining(d, res) {
    const failed = new Set(); let n = 0;
    d.items.forEach((it, i) => { if (i in res) { if (res[i] !== OK) failed.add(it.topic); } else if (!failed.has(it.topic)) n++; });
    return n;
  }
  /** Підсумок тем: pre → ok | shaky | gap; cur → known | new. */
  function topicStatus(d, res) {
    const out = {};
    for (const t of d.topics) {
      const r = d.items.map((it, i) => it.topic === t.id ? res[i] : undefined).filter(x => x !== undefined);
      const all = d.items.filter(it => it.topic === t.id).length;
      const good = r.filter(x => x === OK).length;
      if (t.kind === "cur") out[t.id] = all && good === all ? "known" : "new";
      else out[t.id] = !r.length || r[0] !== OK ? "gap" : good === all ? "ok" : "shaky";
    }
    return out;
  }
  /** Рівень за часткою засвоєних тем-передумов (хитка — половина). */
  function level(d, topics) {
    const pre = d.topics.filter(t => t.kind !== "cur");
    const score = pre.reduce((a, t) => a + (topics[t.id] === "ok" ? 1 : topics[t.id] === "shaky" ? 0.5 : 0), 0);
    const share = pre.length ? score / pre.length : 1;
    const gaps = pre.filter(t => topics[t.id] === "gap").length, shaky = pre.filter(t => topics[t.id] === "shaky").length;
    const k = share >= 0.85 ? 2 : share >= 0.55 ? 1 : 0;
    return { share, gaps, shaky, ok: pre.length - gaps - shaky, total: pre.length, k,
      title: ["Почнемо з основ", "Добра база", "Міцна база"][k],
      text: ["Кілька тем із попередніх класів варто пройти ще раз — тоді нові уроки стануть набагато легшими.",
             "Більшість тем ти пам'ятаєш. Закриємо кілька прогалин — і рухаємось далі.",
             "Попередні класи ти пам'ятаєш добре. Можна сміливо братися за нове."][k] };
  }
  /** План із результату тесту. ctx: { week, sections: [{id, weeks}] поточного класу, hasLesson(id) }.
      Порядок: спершу теми, потрібні для найближчого розділу; серед них прогалини раніше за хиткі; далі — як у тесті. */
  function buildPlan(d, res, ctx = {}) {
    const topics = topicStatus(d, res), has = ctx.hasLesson || (() => true);
    const secs = ctx.sections || [], week = ctx.week || 1;
    // терміновість розділу: скільки тижнів до його початку (0 — уже йде); розділи, що минули, — у кінець
    const urg = id => { const s = secs.find(x => x.id === id); if (!s || !s.weeks) return 99; return s.weeks[1] < week ? 60 + (week - s.weeks[1]) : Math.max(0, s.weeks[0] - week); };
    const steps = [], seen = new Set();
    d.topics.map((t, n) => ({ t, n, st: topics[t.id] }))
      .filter(x => x.t.kind !== "cur" && (x.st === "gap" || x.st === "shaky"))
      .map(x => ({ ...x, u: Math.min(99, ...(x.t.for || []).map(urg)) }))
      .sort((a, b) => a.u - b.u || (a.st === "gap" ? 0 : 1) - (b.st === "gap" ? 0 : 1) || a.n - b.n)
      .forEach(x => { const own = x.st === "shaky" ? [...new Set(d.items.filter((it, i) => it.topic === x.t.id && it.lesson && i in res && res[i] !== OK).map(it => it.lesson))] : [];
        (own.length ? own : x.t.lessons || []).forEach(l => { if (has(l) && !seen.has(l)) { seen.add(l); steps.push({ l, why: x.st, topic: x.t.id, src: "diag", done: false }); } }); });
    const known = [...new Set(d.topics.filter(t => t.kind === "cur" && topics[t.id] === "known").flatMap(t => t.lessons || []).filter(has))];
    return { diag: d.id, date: ctx.day || null, topics, steps, known };
  }
  /** Зберігає результат тесту й план у стані. Незакриті кроки з помилок в уроках (src: "err") переходять у новий план; решту тест перераховує заново. */
  function finishDiag(S, subjectId, d, res, ctx) {
    const plan = buildPlan(d, res, ctx), old = S.plan[subjectId];
    if (old) for (const st of old.steps) if (st.src === "err" && !st.done && !plan.steps.some(x => x.l === st.l)) plan.steps.push(st);
    S.diag[d.id] = { done: true, date: plan.date, res: { ...res }, topics: plan.topics };
    S.plan[subjectId] = plan;
    return plan;
  }

  /* ---------- Повторювані помилки ---------- */
  const push = (str, ok) => ((str || "") + (ok ? "1" : "0")).slice(-WIN);
  const errsIn = str => (str || "").split("").filter(c => c === "0").length;
  /** Записує відповідь з першої спроби. ev: { l — урок, якому приписуємо (pre або сам урок), at — урок, де сталося, sk — "предмет.навичка", ok, day }. */
  function record(S, ev) {
    const m = S.mast[ev.l] || (S.mast[ev.l] = { r: "", d: null });
    m.r = push(m.r, ev.ok); m.d = ev.day;
    if (ev.sk) S.skw[ev.sk] = push(S.skw[ev.sk], ev.ok);
    if (!ev.ok) { S.errs.push({ l: ev.l, at: ev.at || ev.l, sk: ev.sk || null, d: ev.day }); if (S.errs.length > ERR_CAP) S.errs.splice(0, S.errs.length - ERR_CAP); }
  }
  /** Тема «просіла»: серед останніх відповідей ≥ 2 помилки і це щонайменше половина. */
  const weakRec = m => { const e = errsIn(m && m.r); return e >= 2 && e * 2 >= m.r.length; };
  const dayNum = d => Math.floor(Date.parse(d + "T00:00:00Z") / 864e5);
  /** Що варто повторити. ctx: { day, order(lessonId) → номер у програмі, hasLesson(id) }.
      Повертає [{ l, why: "topic" | "skill", n — помилок, of — відповідей, sk }]. */
  function detect(S, ctx = {}) {
    const has = ctx.hasLesson || (() => true), order = ctx.order || (() => 0), out = [], seen = new Set();
    for (const [l, m] of Object.entries(S.mast)) if (has(l) && weakRec(m)) { seen.add(l); out.push({ l, why: "topic", n: errsIn(m.r), of: m.r.length }); }
    // та сама навичка «сиплеться» в різних уроках: радимо найраніший за програмою з них — причина зазвичай там
    const today = ctx.day ? dayNum(ctx.day) : null, bySk = {};
    for (const e of S.errs) { if (!e.sk || !has(e.l)) continue; if (today != null && e.d && today - dayNum(e.d) > ERR_DAYS) continue; (bySk[e.sk] || (bySk[e.sk] = [])).push(e); }
    for (const [sk, list] of Object.entries(bySk)) {
      const w = S.skw[sk] || "", ls = [...new Set(list.map(e => e.l))];
      if (errsIn(w) < 3 || ls.length < 2) continue;
      const root = ls.sort((a, b) => order(a) - order(b))[0];
      if (!seen.has(root)) { seen.add(root); out.push({ l: root, why: "skill", n: errsIn(w), of: w.length, sk }); }
    }
    return out.sort((a, b) => b.n / b.of - a.n / a.of || order(a.l) - order(b.l));
  }
  /** Додає знайдені теми в план предмета (створює план, якщо його ще не було). Повертає нові кроки. */
  function syncPlan(S, subjectId, recs, day) {
    const plan = S.plan[subjectId] || (S.plan[subjectId] = { diag: null, date: day || null, topics: {}, steps: [], known: [] });
    const added = [];
    for (const r of recs) {
      if (plan.steps.some(st => st.l === r.l && !st.done)) continue;
      const st = { l: r.l, why: "errors", src: "err", n: r.n, of: r.of, done: false, date: day || null };
      if (r.sk) st.sk = r.sk;
      plan.steps.push(st); added.push(st);
    }
    return added;
  }
  /** Урок пройдено з часткою acc з першої спроби. Якщо це крок плану й результат добрий — крок виконано, «пам'ять» про помилки теми стирається.
      Повертає { closed: [кроки], retry: чи лишився незакритий крок із цим уроком }. */
  function lessonDone(S, subjectId, lessonId, acc, day) {
    const plan = S.plan[subjectId], out = { closed: [], retry: false };
    const mine = plan ? plan.steps.filter(st => st.l === lessonId && !st.done) : [];
    if (acc >= PASS) {
      mine.forEach(st => { st.done = true; st.doneAt = day || null; out.closed.push(st); });
      if (S.mast[lessonId]) S.mast[lessonId].r = "";
      // вікна навичок, де були помилки цієї теми, починаються з нуля: інакше порада «за навичкою» спрацює на вже закритих помилках
      S.errs.forEach(e => { if (e.l === lessonId && e.sk) S.skw[e.sk] = ""; });
      mine.forEach(st => { if (st.sk) S.skw[st.sk] = ""; });
      S.errs = S.errs.filter(e => e.l !== lessonId);
    } else out.retry = mine.length > 0;
    return out;
  }
  const todo = plan => plan ? plan.steps.filter(st => !st.done) : [];
  const isKnown = (S, subjectId, lessonId) => !!(S.plan[subjectId] && (S.plan[subjectId].known || []).includes(lessonId));

  /* ---------- Відповідь, яку дитина записує сама (тип екрана answer) ---------- */
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  /** Розбирає запис числа: «12», «−3,5», «7/12», «2 1/3», «-1 1/2». Повертає { n, d, frac — записано дробом, proper, lowest } або null. */
  function parseAns(v) {
    const t = String(v ?? "").replace(/[−–]/g, "-").replace(/\./g, ",").replace(/\s+/g, " ").trim();
    let m;
    if ((m = t.match(/^(-?)(\d{1,3}(?: \d{3})+)((?:,\d+)?)$/))) return parseAns(m[1] + m[2].replace(/ /g, "") + m[3]);   // 19 735 — розряди через пробіл
    if ((m = t.match(/^(-?)(\d+)(?:,(\d+))?$/))) { const k = (m[3] || "").length, n = +(m[2] + (m[3] || "")); return { n: m[1] ? -n : n, d: 10 ** k, frac: false, proper: true, lowest: true }; }
    if ((m = t.match(/^(-?)(?:(\d+) )?(\d+) ?\/ ?(\d+)$/))) {
      const w = +(m[2] || 0), a = +m[3], b = +m[4]; if (!b) return null;
      const n = w * b + a; return { n: m[1] ? -n : n, d: b, frac: true, proper: m[2] === undefined || a < b, lowest: gcd(a, b) === 1 };
    }
    return null;
  }
  /** Перевірка відповіді: "ok" | "form" (значення правильне, але дріб не скорочено чи не виділено цілу частину, а завдання цього вимагає) | "bad".
      s.answer — число або рядок у тому ж записі; s.reduced: true — дріб має бути нескоротним; s.mixed: true — неправильний дріб треба записати мішаним числом. */
  function checkAns(s, v) {
    const a = parseAns(typeof s.answer === "number" ? String(s.answer) : s.answer), u = parseAns(v);
    if (!a || !u) return "bad";
    if (a.n * u.d !== u.n * a.d) return "bad";
    if (u.frac && ((s.reduced && !u.lowest) || (s.mixed && (Math.abs(u.n) >= u.d && !(u.proper && Math.abs(u.n) % u.d !== 0 && String(v).trim().includes(" ")))))) return "form";
    if ((s.reduced || s.mixed) && a.frac && !u.frac) return "form";   // у завданні на дроби «0,4» замість 2/5 — не той запис
    if (u.frac && !u.proper) return "form";          // «1 5/3» — так мішані числа не записують
    return "ok";
  }

  /* ---------- Тренування: пул задач і інтервальне повторення (коробки Лейтнера на рівні теми) ---------- */
  const BOX_DAYS = [1, 3, 7, 16, 35];
  const addDay = (day, n) => new Date(Date.parse(day + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
  /** Тему пройдено вперше — перше повторення завтра. */
  function srsInit(S, lesson, day) { if (!S.srs[lesson]) S.srs[lesson] = { box: 0, due: addDay(day, BOX_DAYS[0]) }; }
  /** Підсумок сесії: results [{ lesson, ok }]. Тема без помилок піднімається на коробку, з помилкою — повертається в першу. Повертає [{ lesson, box, was, days }]. */
  function srsUpdate(S, results, day) {
    const by = {}; for (const r of results) by[r.lesson] = (by[r.lesson] ?? true) && !!r.ok;
    return Object.entries(by).map(([lesson, ok]) => {
      const was = S.srs[lesson] ? S.srs[lesson].box : -1, box = ok ? Math.min(BOX_DAYS.length - 1, was + 1) : 0;
      S.srs[lesson] = { box, due: addDay(day, BOX_DAYS[box]) };
      return { lesson, box, was, days: BOX_DAYS[box] };
    });
  }
  const isDue = (S, lesson, day) => !S.srs[lesson] || S.srs[lesson].due <= day;
  /** Добір сесії. ctx: { items: [{ key, lesson, lvl }] — лише з відкритих тем, focus: id теми або null (мікс), n, day, order(lesson) }.
      Тема: n−2 задачі з неї + 2 на повторення інших тем (спершу ті, чий строк настав найдавніше). Мікс: по колу з тем за строком.
      У межах теми: спершу ті, яких ще не бачили, далі — де помилялись, далі решта; від простішого рівня. */
  function pickSession(S, ctx) {
    const n = ctx.n || 6, order = ctx.order || (() => 0), day = ctx.day;
    const tier = it => S.seen[it.key] === undefined ? 0 : S.seen[it.key] ? 2 : 1;
    const byLesson = {}; ctx.items.forEach((it, i) => (byLesson[it.lesson] || (byLesson[it.lesson] = [])).push({ it, i }));
    const ranked = l => (byLesson[l] || []).slice().sort((a, b) => tier(a.it) - tier(b.it) || (a.it.lvl || 1) - (b.it.lvl || 1) || a.i - b.i).map(x => x.it);
    const dueKey = l => (S.srs[l] ? S.srs[l].due : "0000");
    const others = Object.keys(byLesson).filter(l => l !== ctx.focus).sort((a, b) => dueKey(a) < dueKey(b) ? -1 : dueKey(a) > dueKey(b) ? 1 : order(a) - order(b));
    const out = [];
    if (ctx.focus) {
      const mine = ranked(ctx.focus), nRev = Math.min(2, others.length, Math.max(0, n - 1));
      mine.slice(0, n - nRev).sort((a, b) => (a.lvl || 1) - (b.lvl || 1)).forEach(it => out.push({ ...it, review: false }));
      others.slice(0, nRev).forEach(l => out.push({ ...ranked(l)[0], review: true }));
    } else {
      const due = others.filter(l => isDue(S, l, day)), pool = (due.length ? due : others).slice(0, n), lists = pool.map(ranked);
      for (let r = 0; out.length < n && lists.some(x => x[r]); r++) lists.forEach(x => { if (x[r] && out.length < n) out.push({ ...x[r], review: true }); });
    }
    return out;
  }
  /** Перевірка пулу (валідатор). ctx: { sections: Map id → { grade, lessons: [id] }, skills }. */
  const POOL_TYPES = ["answer", "choice", "multi"];
  function validatePool(p, ctx) {
    const E = [], sec = ctx.sections.get(p.section), ids = new Set(), src = new Set((p.sources || []).map(x => x.id));
    if (!p.id) E.push("немає id"); if (!sec) return E.concat(`немає розділу «${p.section}»`);
    if (!["draft", "verified", "approved"].includes(p.status)) E.push("status має бути draft | verified | approved");
    if (!Array.isArray(p.sources) || !p.sources.length) E.push("немає sources — звідки взято задачі");
    for (const x of p.sources || []) if (!x.id || !x.title || !/^https?:\/\//.test(x.url || "")) E.push(`джерело «${x.id}»: потрібні id, title, url`);
    if (!Array.isArray(p.items) || !p.items.length) return E.concat("немає items");
    p.items.forEach((it, i) => {
      const w = `задача ${i + 1} «${it.id}»`;
      if (!it.id || ids.has(it.id)) E.push(`${w}: id порожній або повторюється`); ids.add(it.id);
      if (!(sec.lessons || []).includes(it.lesson)) E.push(`${w}: урок «${it.lesson}» не з розділу ${p.section}`);
      if (![1, 2, 3].includes(it.lvl)) E.push(`${w}: lvl має бути 1, 2 або 3`);
      if (!POOL_TYPES.includes(it.type)) E.push(`${w}: тип «${it.type}» не дозволено в пулі`);
      if (!it.title) E.push(`${w}: немає title`);
      if (!it.sk || !ctx.skills[it.sk]) E.push(`${w}: навичка sk «${it.sk}» не оголошена`);
      const [sid, ref] = String(it.src || "").split(/\s+(.*)/s);
      if (!src.has(sid) || !ref) E.push(`${w}: src має бути «<id джерела> <номер вправи чи сторінка>»`);
      if (!Array.isArray(it.steps) || !it.steps.length) E.push(`${w}: немає steps — розв'язання кроками`);
      if (it.type === "answer" && checkAns(it, typeof it.answer === "number" ? String(it.answer).replace(".", ",") : it.answer) !== "ok") E.push(`${w}: answer «${it.answer}» не читається або сам не проходить перевірку (reduced/mixed)`);
    });
    return E;
  }

  /* ---------- Перевірка тесту (валідатор) ---------- */
  /** Помилки в описі діагностики. ctx: { lessons: Map id → {grade}, sections: Map id → {grade}, skills: {} }. */
  function validate(d, ctx) {
    const E = [], T = new Map();
    if (!d.id) E.push("немає id"); if (!Number.isInteger(d.grade)) E.push("немає grade");
    if (!d.title || !d.why) E.push("потрібні title і why");
    if (!["draft", "verified", "approved"].includes(d.status)) E.push("status має бути draft | verified | approved");
    if (!Array.isArray(d.topics) || !d.topics.length) return E.concat("немає topics");
    if (!Array.isArray(d.items) || !d.items.length) return E.concat("немає items");
    for (const t of d.topics) {
      const w = `тема «${t.id}»`;
      if (!t.id || T.has(t.id)) E.push(`${w}: id порожній або повторюється`);
      T.set(t.id, t);
      if (!t.title) E.push(`${w}: немає title`);
      if (!["pre", "cur"].includes(t.kind)) E.push(`${w}: kind має бути pre | cur`);
      if (!Array.isArray(t.lessons) || !t.lessons.length || t.lessons.length > 2) E.push(`${w}: lessons — 1–2 id уроків`);
      for (const l of t.lessons || []) {
        const L = ctx.lessons.get(l);
        if (!L) E.push(`${w}: немає уроку ${l}`);
        else if (t.kind === "pre" && L.grade >= d.grade) E.push(`${w}: урок ${l} не з попередніх класів (kind: pre)`);
        else if (t.kind === "cur" && L.grade !== d.grade) E.push(`${w}: урок ${l} не з ${d.grade} класу (kind: cur)`);
      }
      for (const s of t.for || []) { const X = ctx.sections.get(s); if (!X) E.push(`${w}: for — немає розділу ${s}`); else if (X.grade !== d.grade) E.push(`${w}: for — розділ ${s} не з ${d.grade} класу`); }
      if (t.for && t.kind !== "pre") E.push(`${w}: for має сенс лише для kind: pre`);
      const n = d.items.filter(it => it.topic === t.id).length;
      if (t.kind === "pre" && n !== 2) E.push(`${w}: потрібно рівно 2 завдання (базове і складніше), є ${n}`);
      if (t.kind === "cur" && n !== 1) E.push(`${w}: потрібно рівно 1 завдання, є ${n}`);
    }
    d.items.forEach((it, i) => {
      const w = `завдання ${i + 1} (${it.type})`;
      if (!T.has(it.topic)) E.push(`${w}: невідома тема «${it.topic}»`);
      if (!DIAG_TYPES.includes(it.type)) E.push(`${w}: тип не дозволено в тесті`);
      if (it.poll || it.hyp) E.push(`${w}: poll/hyp у тесті не можна`);
      if (!it.title) E.push(`${w}: немає title`);
      if (!it.sk || !ctx.skills[it.sk]) E.push(`${w}: навичка sk «${it.sk}» не оголошена`);
      if (it.lesson && !(T.get(it.topic)?.lessons || []).includes(it.lesson)) E.push(`${w}: lesson «${it.lesson}» має бути одним з уроків теми`);
    });
    return E;
  }

  return { OK, BAD, SKIP, PASS, DIAG_TYPES, nextItem, remaining, topicStatus, level, buildPlan, finishDiag, record, detect, syncPlan, lessonDone, todo, isKnown, validate,
    parseAns, checkAns, BOX_DAYS, srsInit, srsUpdate, isDue, pickSession, POOL_TYPES, validatePool };
})();
