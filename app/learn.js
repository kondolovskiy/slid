/* Слід — персоналізація: діагностика класу, персональний план, пошук повторюваних помилок.
   Чиста логіка без DOM (тестується в Node: tools/test-learn.mjs). Стан дитини S передає рушій (app/app.js).
   Опис: docs/PERSONALIZATION.md. Схема тесту: docs/CONTENT_SCHEMA.md §9. */
window.SLID_LEARN = (() => {
  const OK = 1, BAD = 0, SKIP = -1;              // результат завдання тесту; SKIP — «ще не знаю»
  const PASS = 0.65;                             // частка з першої спроби, з якої повторення зараховано (як 2 зірки)
  const WIN = 6;                                 // скільки останніх відповідей теми/навички пам'ятаємо
  const ERR_DAYS = 14, ERR_CAP = 80;             // журнал помилок: давність і розмір

  /* ---------- Діагностика ---------- */
  const DIAG_TYPES = ["choice", "multi", "sort", "order", "number", "fracin", "shade", "numline", "lab", "answer"];
  /* answer у тесті (engine-diag-answer-kinds): лише формати, де вердикт — «правильно / ні» без розмови. Плеєр у тесті не показує
     ні фідбеку, ні підказки form/bad і не дає другої спроби, тож зараховується лише checkAns === "ok": «form» (значення правильне,
     запис ні — «2 м 45», «245 см» при compound, «37» при decimals 1) — BAD, як і остаточний вердикт уроку. Тому формат запису
     має бути зрозумілий з умови й підказки під полем (answerUI): час «Г:ХХ», величина з одиницями, десятковий дріб.
     Інші answerKind (вирази, множини, координати…) — після окремого рішення: у них багато form-вердиктів, які в уроці пояснюють. */
  const DIAG_ANSWER_KINDS = ["number", "time", "quantity"];
  /** Активний план предмета/класу. Старий S.plan лишається сумісним активним посиланням;
      planByGrade зберігає плани інших класів, не чіпаючи загальний прогрес. */
  // План, збережений до злиття PR #6 і main, мав у base поле l замість next: читаємо next ?? l (l лишається, нічого не губиться).
  const baseCompat = p => { for (const b of p?.base || []) if (b && b.next === undefined) b.next = b.l ?? null; return p; };
  function planFor(S, subjectId, ctx = {}) {
    const grade = ctx.grade ?? S.grade;
    S.plan ||= {};
    if (!Number.isInteger(grade)) return baseCompat(S.plan[subjectId]);
    S.planByGrade ||= {};
    const plans = S.planByGrade[subjectId] ||= {}, legacy = S.plan[subjectId];
    if (legacy) {
      const oldGrade = legacy.grade ?? (ctx.diags || []).find(d => d.id === legacy.diag)?.grade ?? grade;
      if (!plans[oldGrade]) { legacy.grade = oldGrade; plans[oldGrade] = legacy; }
    }
    // Старий профіль міг мати результати кількох тестів, але тільки останній план.
    const d = (ctx.diags || []).find(d => d.grade === grade), rec = d && S.diag?.[d.id];
    if (!plans[grade] && rec?.done && rec.res) plans[grade] = buildPlan(d, rec.res, { ...ctx, day: rec.date });
    if (plans[grade]) S.plan[subjectId] = plans[grade]; else delete S.plan[subjectId];
    return baseCompat(plans[grade]);
  }
  function storePlan(S, subjectId, plan, grade) {
    S.plan ||= {};
    if (Number.isInteger(grade)) {
      plan.grade = grade; S.planByGrade ||= {};
      (S.planByGrade[subjectId] ||= {})[grade] = plan;
    }
    S.plan[subjectId] = plan;
    return plan;
  }
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
  /** Рівень за часткою засвоєних тем-передумов (хитка — половина). Базові вміння (baseline) рахуються так само, як інші передумови.
      base — скільки з незасвоєних тем базові: уроку для них немає, тож текст радить потренувати їх із дорослим. */
  function level(d, topics) {
    const pre = d.topics.filter(t => t.kind !== "cur");
    const score = pre.reduce((a, t) => a + (topics[t.id] === "ok" ? 1 : topics[t.id] === "shaky" ? 0.5 : 0), 0);
    const share = pre.length ? score / pre.length : 1;
    const gaps = pre.filter(t => topics[t.id] === "gap").length, shaky = pre.filter(t => topics[t.id] === "shaky").length;
    const k = share >= 0.85 ? 2 : share >= 0.55 ? 1 : 0;
    // baseline-опори не мають уроків у застосунку: радимо потренувати їх з дорослим, а не «пройти ще раз»
    const weak = pre.filter(t => topics[t.id] === "gap" || topics[t.id] === "shaky"), base = weak.length > 0 && weak.every(t => t.baseline);
    return { share, gaps, shaky, ok: pre.length - gaps - shaky, total: pre.length, k, base,
      title: ["Почнемо з основ", "Добра база", "Міцна база"][k],
      text: (base ? ["Кілька вмінь із попередніх класів варто потренувати з учителем або дорослим — тоді нові уроки стануть набагато легшими.",
                     "Більшість умінь ти пам'ятаєш. Кілька варто потренувати з учителем або дорослим — і рухаємось далі.",
                     "Попередні класи ти пам'ятаєш добре. Одне-два вміння варто потренувати з учителем або дорослим — і можна братися за нове."]
                  : ["Кілька тем із попередніх класів варто пройти ще раз — тоді нові уроки стануть набагато легшими.",
                     "Більшість тем ти пам'ятаєш. Закриємо кілька прогалин — і рухаємось далі.",
                     "Попередні класи ти пам'ятаєш добре. Можна сміливо братися за нове."])[k] };
  }
  /** План із результату тесту. ctx: { week, sections: [{id, weeks, lessons: [id]}] поточного класу, hasLesson(id) }.
      Порядок: спершу теми, потрібні для найближчого розділу; серед них прогалини раніше за хиткі; далі — як у тесті.
      Baseline-опора (topic.baseline, уроків немає) кроком не стає: вона йде в plan.base з next — першим уроком
      найтерміновішого розділу з for. base не закривається уроками, лише повторним тестом. */
  function buildPlan(d, res, ctx = {}) {
    const topics = topicStatus(d, res), has = ctx.hasLesson || (() => true);
    const secs = ctx.sections || [], week = ctx.week || 1;
    // терміновість розділу: скільки тижнів до його початку (0 — уже йде); розділи, що минули, — у кінець
    const urg = id => { const s = secs.find(x => x.id === id); if (!s || !s.weeks) return 99; return s.weeks[1] < week ? 60 + (week - s.weeks[1]) : Math.max(0, s.weeks[0] - week); };
    const steps = [], seen = new Set(), base = [];
    d.topics.map((t, n) => ({ t, n, st: topics[t.id] }))
      .filter(x => x.t.kind !== "cur" && (x.st === "gap" || x.st === "shaky"))
      .map(x => ({ ...x, u: Math.min(99, ...(x.t.for || []).map(urg)) }))
      .sort((a, b) => a.u - b.u || (a.st === "gap" ? 0 : 1) - (b.st === "gap" ? 0 : 1) || a.n - b.n)
      .forEach(x => { if (x.t.baseline) {
          const sec = [...(x.t.for || [])].sort((a, b) => urg(a) - urg(b)).map(id => secs.find(s => s.id === id)).find(s => s && (s.lessons || []).some(has));
          base.push({ topic: x.t.id, why: x.st, next: sec ? sec.lessons.find(has) : null }); return; }
        const own = x.st === "shaky" ? [...new Set(d.items.filter((it, i) => it.topic === x.t.id && it.lesson && i in res && res[i] !== OK).map(it => it.lesson))] : [];
        (own.length ? own : x.t.lessons || []).forEach(l => { if (has(l) && !seen.has(l)) { seen.add(l); steps.push({ l, why: x.st, topic: x.t.id, src: "diag", done: false }); } }); });
    const known = [...new Set(d.topics.filter(t => t.kind === "cur" && topics[t.id] === "known").flatMap(t => t.lessons || []).filter(has))];
    return { diag: d.id, grade: d.grade, date: ctx.day || null, topics, steps, known, base };
  }
  /* ---------- Редакції тесту (refine-math-diag-g6-coverage) ----------
     Відповіді тесту зберігаються вердиктами (OK/BAD/SKIP) за індексом завдання: S.diagRun[id][i] — розпочатий тест,
     S.diag[id].res[i] — завершений. Якщо завдання замінили на місці (той самий індекс і тема, інший тип/ключ/зміст), йому
     ставлять rev: N — номер редакції тесту, з якої діє новий зміст. Редакція тесту — найбільший rev його завдань (без rev — 1).
     Розпочатий тест пам'ятає свою редакцію (S.diagRunRev[id]; збережений до цього поля — редакція 1). При продовженні
     вердикти завдань, новіших за редакцію запуску, відкидаються: ці завдання покажуть знову (відповідь на старий зміст не
     зараховується новому); решта відповідей і порядок показу не змінюються. Завершений результат S.diag не перераховується
     новою оцінкою: план, known і теми лишаються такими, як їх отримано, до повторного тесту (rev результату — для довідки).
     Додавати, вилучати чи переставляти завдання цим механізмом не можна — для такої зміни потрібен новий id тесту. */
  // Редакція завдання: ціле rev ≥ 2, інакше 1 — один розбір для diagRev і resumeDiag (рев'ю refine-math-diag-g6-coverage P3-2)
  const itemRev = it => Number.isInteger(it?.rev) && it.rev > 1 ? it.rev : 1;
  const diagRev = d => Math.max(1, ...(d?.items || []).map(itemRev));
  /** Готує розпочатий тест до продовження чинною редакцією. Повертає { res, rev, dropped — індекси відкинутих вердиктів }. */
  function resumeDiag(S, d) {
    if (!S.diagRun || typeof S.diagRun !== "object") S.diagRun = {};
    if (!S.diagRunRev || typeof S.diagRunRev !== "object") S.diagRunRev = {};
    const res = S.diagRun[d.id] && typeof S.diagRun[d.id] === "object" ? S.diagRun[d.id] : (S.diagRun[d.id] = {});
    const rev = diagRev(d), keys = Object.keys(res), saved = S.diagRunRev[d.id];
    const from = Number.isInteger(saved) && saved >= 1 ? saved : keys.length ? 1 : rev, dropped = [];
    if (from < rev) for (const k of keys) { const it = d.items[k]; if (!it || itemRev(it) > from) { delete res[k]; dropped.push(Number(k)); } }
    S.diagRunRev[d.id] = Math.max(from, rev);
    return { res, rev, dropped };
  }
  /** Зберігає результат тесту й план у стані. Незакриті кроки з помилок в уроках (src: "err") переходять у новий план; решту тест перераховує заново. */
  function finishDiag(S, subjectId, d, res, ctx = {}) {
    const old = planFor(S, subjectId, { ...ctx, grade: d.grade }), plan = buildPlan(d, res, ctx);
    if (old) for (const st of old.steps) if (st.src === "err" && !st.done && (!ctx.hasLesson || ctx.hasLesson(st.l)) && !plan.steps.some(x => x.l === st.l)) plan.steps.push(st);
    S.diag[d.id] = { done: true, date: plan.date, res: { ...res }, topics: plan.topics, rev: diagRev(d) };
    if (S.diagRunRev) delete S.diagRunRev[d.id];
    storePlan(S, subjectId, plan, d.grade);
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
  function syncPlan(S, subjectId, recs, day, ctx = {}) {
    const plan = planFor(S, subjectId, ctx) || storePlan(S, subjectId, { diag: null, date: day || null, topics: {}, steps: [], known: [] }, ctx.grade ?? S.grade);
    const added = [];
    for (const r of recs) {
      if (ctx.hasLesson && !ctx.hasLesson(r.l)) continue;
      if (plan.steps.some(st => st.l === r.l && !st.done)) continue;
      const st = { l: r.l, why: "errors", src: "err", n: r.n, of: r.of, done: false, date: day || null };
      if (r.sk) st.sk = r.sk;
      plan.steps.push(st); added.push(st);
    }
    return added;
  }
  /** Урок пройдено з часткою acc з першої спроби. Якщо це крок плану й результат добрий — крок виконано, «пам'ять» про помилки теми стирається.
      Повертає { closed: [кроки], retry: чи лишився незакритий крок із цим уроком }. */
  function lessonDone(S, subjectId, lessonId, acc, day, ctx = {}) {
    const plan = planFor(S, subjectId, ctx), out = { closed: [], retry: false };
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
  const isKnown = (S, subjectId, lessonId, ctx) => !!planFor(S, subjectId, ctx)?.known?.includes(lessonId);

  /* ---------- Перетегування навичок у збереженому прогресі ----------
     Журнал помилок S.errs пам'ятає sk вправи. 2026-10-31 sk вправ пулів і екранів ms3 узгоджено з тим, що урок справді тренує
     (engine-math-skill-sync): старі записи інакше ще 14 днів зводили б помилки до чужої навички («Навичка сиплеться»). Правило
     [урок, де сталося (at), було, стало] додаємо лише тоді, коли в цьому уроці (екрани й пул) старого sk більше немає, а всі такі
     екрани/вправи отримали один новий sk — тоді помилку можна віднести однозначно (tools/test-learn.mjs звіряє правила з контентом).
     Вікно S.skw кожної старої навички, з якої щось перенесено, починається з нуля (як у lessonDone): нулі в ньому могли прийти
     з перетегованих записів, тож лишене вікно дало б пораду за старою навичкою; ціна — щонайбільше пропущена порада, не хибна.
     Вікно нової навички наповнять нові відповіді. Не мігруються S.skills (сумарні лічильники екрана «Прогрес»: уроку в них
     немає) і кроки плану з sk (описують пораду, дану тоді). Пошкоджений стан (не масиви) міграція пропускає, а не падає. */
  // id змінено на «…b», коли правила змінилися щодо першої редакції (коміт a7d2459, id без «b»). Профіль, що вже пройшов
  // першу редакцію (prev), отримує лише правила, яких у ній не було: спільні вже застосовано, а ms3l1/ms3l2 frac/part → pct
  // повертають і її записи pct → frac/part назад. Boss ms3l4: лише однозначні frac → pct, cmp → data (part розійшовся на pct і data).
  const SK_RETAG = { id: "sk-2026-10-31b", rules: [
    ["g4m1l3", "math.num", "math.cmp"], ["g4m3l3", "math.num", "math.div"], ["ms0l5", "math.num", "math.expr"], ["ms0bl4", "math.geom", "math.meas"],
    ["ms3l1", "math.frac", "math.pct"], ["ms3l2", "math.part", "math.pct"], ["ms3l3", "math.cmp", "math.data"], ["ms3l3", "math.part", "math.data"],
    ["ms3l4", "math.frac", "math.pct"], ["ms3l4", "math.cmp", "math.data"],
    ["g8m1l4", "math.expr", "math.func"], ["g8m3l2", "math.expr", "math.num"], ["g9m3l4", "math.func", "math.eq"],
    ["g9m5l1", "math.expr", "math.num"], ["g9m5l2", "math.expr", "math.num"], ["g9m5l3", "math.expr", "math.num"], ["g9m6l2", "math.geom", "math.meas"]],
    prev: { id: "sk-2026-10-31", rules: [
      ["g4m1l3", "math.num", "math.cmp"], ["g4m3l3", "math.num", "math.div"], ["ms0l5", "math.num", "math.expr"], ["ms0bl4", "math.geom", "math.meas"],
      ["ms3l1", "math.pct", "math.frac"], ["ms3l2", "math.pct", "math.part"], ["g8m1l4", "math.expr", "math.func"], ["g8m3l2", "math.expr", "math.num"],
      ["g9m3l4", "math.func", "math.eq"], ["g9m5l1", "math.expr", "math.num"], ["g9m5l2", "math.expr", "math.num"], ["g9m5l3", "math.expr", "math.num"],
      ["g9m6l2", "math.geom", "math.meas"]] } };
  /* Друга міграція (engine-learn-list-prefixes-p3), окремий id: правила для sk, змінених у змісті 2026-11-01. У кожному з цих
     уроків старий sk мали лише перетеговані вправи (звірено з попередньою версією змісту, tools/test-learn.mjs — знімок вправ):
     pg8m6 a06 meas → geom (write-math-pools-multiset-compound, c21bb60); pg7m7 b01/b02 eq → func, pg8m1 b04/b07 expr → ops,
     pg8m3 d09 expr → func, pg9m3 d06 expr → eq (refine-math-content-from-matrix-v3, 90fa02e). */
  const SK_RETAG2 = { id: "sk-2026-11-01", rules: [
    ["g8m6l1", "math.meas", "math.geom"], ["g7m7l2", "math.eq", "math.func"], ["g8m1l2", "math.expr", "math.ops"],
    ["g8m3l4", "math.expr", "math.func"], ["g9m3l4", "math.expr", "math.eq"]] };
  // Усі міграції за порядком: кожна виконується один раз за власним id (S.skFix).
  const SK_MIGRATIONS = [SK_RETAG, SK_RETAG2];
  /** Один раз переносить sk записів журналу помилок за міграцією fix (без fix — усіма SK_MIGRATIONS по черзі) і скидає вікна
      старих навичок. Повертає кількість змінених записів. */
  function migrateSk(S, fix) {
    if (fix === undefined) return SK_MIGRATIONS.reduce((n, f) => n + migrateSk(S, f), 0);
    if (!S || typeof S !== "object") return 0;
    if (!Array.isArray(S.skFix)) S.skFix = [];
    if (S.skFix.includes(fix.id)) return 0;
    const done = fix.prev && S.skFix.includes(fix.prev.id) ? new Set(fix.prev.rules.map(r => r.join(">"))) : null;
    const rules = done ? fix.rules.filter(r => !done.has(r.join(">"))) : fix.rules;
    let n = 0; const moved = new Set();
    if (Array.isArray(S.errs)) for (const e of S.errs) for (const [at, from, to] of rules)
      if (e && typeof e === "object" && (e.at || e.l) === at && e.sk === from) { e.sk = to; moved.add(from); n++; break; }
    if (S.skw && typeof S.skw === "object") for (const sk of moved) if (sk in S.skw) S.skw[sk] = "";
    S.skFix.push(fix.id);
    return n;
  }

  /* ---------- Відповідь, яку дитина записує сама (тип екрана answer) ---------- */
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  /** Розбирає запис числа: «12», «−3,5», «7/12», «2 1/3», «-1 1/2». Повертає { n, d, frac — записано дробом, proper, lowest } або null. */
  function parseAns(v) {
    const t = String(v ?? "").replace(/[−–]/g, "-").replace(/\./g, ",").replace(/\s+/g, " ").trim();
    let m;
    if ((m = t.match(/^(-?)(\d{1,3}(?: \d{3})+)((?:,\d+)?)$/))) return parseAns(m[1] + m[2].replace(/ /g, "") + m[3]);   // 19 735 — розряди через пробіл
    if ((m = t.match(/^(-?)(\d+)(?:,(\d+))?$/))) { const k = (m[3] || "").length, n = +(m[2] + (m[3] || "")), d = 10 ** k; if (!Number.isSafeInteger(n) || !Number.isSafeInteger(d)) return null; return { n: m[1] ? -n : n, d, frac: false, proper: true, lowest: true }; }
    if ((m = t.match(/^(-?)(?:(\d+) )?(\d+) ?\/ ?(\d+)$/))) {
      const w = +(m[2] || 0), a = +m[3], b = +m[4]; if (!b) return null;
      const n = w * b + a; if (![w, a, b, n].every(Number.isSafeInteger)) return null; return { n: m[1] ? -n : n, d: b, frac: true, proper: m[2] === undefined || a < b, lowest: gcd(a, b) === 1, whole: m[2] !== undefined };
    }
    return null;
  }
  const sameAns = (a, b) => BigInt(a.n) * BigInt(b.d) === BigInt(b.n) * BigInt(a.d);

  /* ---------- Точні й символьні відповіді: власний розбір у дерево, жодного eval учнівського вводу ----------
     Вузли: num {v: [p, q] BigInt}, var {n}, pi, add {a: [{s: ±1, e}]}, mul {f: [{d — ділення, e}]}, pow {b, e},
     root {n — показник 2|3|4, a}, abs {a}, fn {fn, a, base — для log_a}, eq {l, r}. */
  const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const FN = ["arcctg", "arcsin", "arccos", "arctan", "arctg", "sqrt", "sin", "cos", "ctg", "cot", "tan", "tg", "ln", "lg", "log", "pi"];
  /* Кириличні двійники латинських літер (engine-math-answer-g11-issues п. 1): на українській розкладці «5х + С» виглядає так само,
     як «5x + C», а кнопок літер у полі немає. У символьних записах (вирази, координати-вирази, межі, серії) кирилична літера, яка
     зовні збігається з латинською, читається як латинська; інші кириличні літери, як і раніше, роблять запис нерозбірним (bad).
     Нові «ok» можливі лише там, де раніше запис не розбирався взагалі. number має власний префікс («х = 3»), list — CYR_LAT. */
  const CYR_TWIN = { "а": "a", "е": "e", "і": "i", "к": "k", "о": "o", "р": "p", "с": "c", "у": "y", "х": "x",
    "А": "A", "В": "B", "Е": "E", "І": "I", "К": "K", "М": "M", "Н": "H", "О": "O", "Р": "P", "С": "C", "Т": "T", "Х": "X" };
  const latin = t => t.replace(/[аеікорсухАВЕІКМНОРСТХ]/g, c => CYR_TWIN[c]);
  const norm = v => latin(String(v ?? "")).replace(/(\d)\.(?=\d)/g, "$1,").replace(/[−–—]/g, "-").replace(/[*×∙⋅]/g, "·").replace(/÷/g, ":").replace(/[  ]/g, " ")
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, m => "^(" + [...m].map(c => SUP.indexOf(c)).join("") + ")").trim();
  function lex(t) {
    const out = []; let i = 0, m;
    while (i < t.length) {
      const c = t[i], rest = t.slice(i);
      if (c === " ") i++;
      else if ((m = /^\d+(?:,\d+)?/.exec(rest))) { if (m[0].length > 16) return null; out.push({ t: "num", v: m[0] }); i += m[0].length; }
      else if ((m = /^[a-zA-Z]+/.exec(rest))) {
        for (let j = 0; j < m[0].length;) {
          const f = FN.find(f => m[0].startsWith(f, j));
          if (f) { out.push(f === "pi" ? { t: "pi" } : f === "sqrt" ? { t: "root", v: 2 } : { t: "fn", v: f }); j += f.length; }
          else out.push({ t: "id", v: m[0][j++] });
        }
        i += m[0].length;
      }
      else if (c === "π") { out.push({ t: "pi" }); i++; }
      else if (/[Ͱ-Ͽ]/.test(c)) { out.push({ t: "id", v: c }); i++; }
      else if ("√∛∜".includes(c)) { out.push({ t: "root", v: "√∛∜".indexOf(c) + 2 }); i++; }
      else if ("+-·/:^()|=_".includes(c)) { out.push({ t: c }); i++; }
      else return null;
    }
    return out.length && out.length <= 240 ? out : null;
  }
  const bgcd = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; let i = 0; while (b) { const t = a % b; a = b; b = t; i++; } if (STEPS !== Infinity) spend(i); return a; };
  // Межа розміру й часу точної арифметики: вкладені степені ((x+1)^12)^12… дають числа на мільйони біт.
  // Переповнення кидає TOO; checkAns відповідає «bad», точне порівняння виразів переходить на числове.
  const TOO = { tooBig: true }, BIG = 1n << 2048n;
  /* Межа роботи однієї перевірки — бюджет операцій STEPS, а не годинник: той самий запис дає той самий вердикт на швидкому
     й повільному пристрої (рев'ю engine-math-answer-formats-followup P3-6). Крок — ітерація НСД (bgcd), розкладу підкореневого
     (rootRed0), множення точних чисел і многочленів (xmul, pmul). Найважчим правильним записам (12-й степінь суми з коренями,
     дроби з 8-значними знаменниками) треба < 10⁵ кроків; STEP_MAX = 3·10⁶ вичерпується за ≈ 0,05–0,1 с на ноутбуці 2026 р.
     (tools/diff-answers.mjs --time). Межі розміру (2048 біт, 64 доданки, BUDGET) — як і раніше. Годинник DEADLINE лишився
     лише запобіжником (CLOCK_MS = 3 с, перевірка раз на 65536 кроків) для шляху, якого лічильник не бачить, на дуже
     повільному пристрої; на звичайних записах він не спрацьовує, тож вердикт від швидкості пристрою не залежить. */
  const STEP_MAX = 3e6, STEP_GRANT = 1.5e6, CLOCK_MS = 3000;
  let DEADLINE = Infinity, STEPS = Infinity, CLOCK = 0;
  // LIMIT — у цій перевірці спрацювала межа кроків, розміру чи бюджету: «bad» тоді означає «не вдалося перевірити», і дитина
  // бачить «запис занадто складний, спрости» (badHint), а не звичайне «неправильно». На саму відповідь checkAns не впливає.
  let LIMIT = false;
  const tooBig = () => { LIMIT = true; return TOO; };
  // USED — кроки останнього виклику limited разом з усіма поновленнями STEPS (STEP_GRANT, половини пари); CLOCK_HIT — спрацював
  // годинник-запобіжник. work() віддає їх тестам: межу роботи перевіряють лічильником, а не стіночним часом (флейк під навантаженням).
  let USED = 0, CLOCK_HIT = false, WORK = { steps: 0, clock: false };
  const spend = n => { USED += n; if ((STEPS -= n) < 0) throw tooBig(); if ((CLOCK += n) >= 65536) { CLOCK = 0; if (Date.now() > DEADLINE) { CLOCK_HIT = true; throw tooBig(); } } };
  const guard = () => spend(1);
  /** Межі на один виклик fn (checkAns, listKey, pairKey, підказки): кроки й годинник-запобіжник; після — без меж. */
  function limited(fn, onTooBig) {
    DEADLINE = Date.now() + CLOCK_MS; STEPS = STEP_MAX; CLOCK = 0; BUDGET = 50000; USED = 0; CLOCK_HIT = false;
    try { return fn(); } catch (e) { if (e === TOO) return onTooBig(); throw e; } finally { DEADLINE = Infinity; STEPS = Infinity; WORK = { steps: USED, clock: CLOCK_HIT }; }
  }
  /** Робота останнього обмеженого виклику (checkAns, підказки): { steps — витрачено кроків, clock — спрацював годинник }. Для тестів. */
  const work = () => ({ ...WORK, max: STEP_MAX, grant: STEP_GRANT });
  const Q = (p, q = 1n) => { if (q === 0n) return null; if (q < 0n) { p = -p; q = -q; } if (p > BIG || -p > BIG || q > BIG) throw tooBig(); const g = bgcd(p, q) || 1n; return [p / g, q / g]; };
  const qadd = (a, b) => Q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]), qmul = (a, b) => Q(a[0] * b[0], a[1] * b[1]);
  function parseTree(tokens) {
    let i = 0, inAbs = 0;
    const peek = () => tokens[i], take = t => tokens[i]?.t === t ? tokens[i++] : null;
    // множення без знака: 2x, 3ab, 2√3, 2(x + 1); число після іншого множника без «·» — помилка (2 1/3, x2)
    const implicit = tk => tk && (["id", "pi", "fn", "root", "("].includes(tk.t) || (tk.t === "|" && !inAbs));
    function sum() {
      const a = []; let s = take("-") ? -1 : (take("+"), 1);
      for (;;) { const e = term(); if (!e) return null; a.push({ s, e }); if (take("+")) s = 1; else if (take("-")) s = -1; else break; }
      return a.length === 1 && a[0].s === 1 ? a[0].e : { k: "add", a };
    }
    // Мішане число «3 1/3» — окремий доданок виразу (x^3/3 + 3 1/3, п. 3): ціле, ціле, «/», ціле, правильний дріб, на початку
    // доданка, далі — лише «+», «−», «)», «=», «|» чи кінець. В інших місцях (2·3 1/3, x^2 1/3, 1/2 1/3, 3 1/3x) — як і раніше помилка.
    // Два числа поспіль лексер дає лише з пробілом між ними, тож «31/3» лишається 31/3.
    function mixedNum() {
      const [w, a, sl, b] = tokens.slice(i, i + 4);   // після числа доданок закінчується: «3 1/3x», «3 1/3·x», «3 1/3^2» лишають зайві лексеми → null
      if (!w || w.t !== "num" || a?.t !== "num" || sl?.t !== "/" || b?.t !== "num" || [w, a, b].some(x => x.v.includes(","))) return null;
      const W = BigInt(w.v), A = BigInt(a.v), B = BigInt(b.v);
      if (B === 0n || A >= B || A === 0n) return null;
      i += 4; return { k: "num", v: Q(W * B + A, B), dd: 0 };
    }
    function term() {
      const f = [], mx = mixedNum(); if (mx) return mx;
      for (let d = false; ; ) {
        const at = i, e = power(); if (!e) return null; f.push({ d, e });
        // число одразу після дужок-множника — теж множення: (3x + 5)4x = (3x + 5)·4x. Лише після «( … )» без степеня:
        // x²3 = x^(2)3, (x + 1)^2 3, sin(x)2, √(3)2, |x|2 лишаються помилкою, як x2 і 2 1/3
        const paren = tokens[at].t === "(" && tokens[i - 1]?.t === ")" && e.k !== "pow" && peek()?.t === "num";
        if (take("·")) d = false; else if (take("/") || take(":")) d = true; else if (paren || implicit(peek())) d = false; else break;
      }
      return f.length === 1 ? f[0].e : { k: "mul", f };
    }
    function power() {
      const b = atom(); if (!b || !take("^")) return b;
      const neg = !!take("-"), e = power();
      return e && { k: "pow", b, e: neg ? { k: "add", a: [{ s: -1, e }] } : e };
    }
    function atom() {
      const tk = tokens[i++]; if (!tk) return null;
      if (tk.t === "num") { const [w, f = ""] = tk.v.split(","); return { k: "num", v: Q(BigInt(w + f), 10n ** BigInt(f.length)), dd: f ? f.replace(/0+$/, "").length : w.length >= 7 ? w.length : 0 }; }
      if (tk.t === "id") return { k: "var", n: tk.v };
      if (tk.t === "pi") return { k: "pi" };
      if (tk.t === "(") { const e = sum(); return e && take(")") ? e : null; }
      if (tk.t === "|") { if (inAbs) return null; inAbs++; const e = sum(); inAbs--; return e && take("|") ? { k: "abs", a: e } : null; }
      if (tk.t === "root") { const a = atom(); return a && { k: "root", n: tk.v, a }; }   // √ бере один множник: 2√3x = 2·√3·x; √(3x) — у дужках
      if (tk.t !== "fn") return null;
      let base = null, pw = null, a;
      if (tk.v === "log" && (!take("_") || !(base = atom()))) return null;
      if (take("^") && !(pw = atom())) return null;                       // sin^2 x
      if (peek()?.t === "(") a = atom();
      else {                                                              // sin 2x, cos πk: аргумент — множники до оператора, дужки чи наступної функції; sin x(1 + cos x) = sin x · (1 + cos x)
        const f = []; let e = power(); if (!e) return null; f.push({ d: false, e });
        while (peek() && ["id", "pi", "root"].includes(peek().t)) { if (!(e = power())) return null; f.push({ d: false, e }); }
        a = f.length === 1 ? f[0].e : { k: "mul", f };
      }
      if (!a) return null;
      const node = { k: "fn", fn: tk.v, a, base };
      return pw ? { k: "pow", b: node, e: pw } : node;
    }
    const l = sum(); if (!l) return null;
    const r = take("=") ? sum() : undefined;
    return r === null || i !== tokens.length ? null : r ? { k: "eq", l, r } : l;
  }
  const parseExpr = v => { const t = lex(norm(v)); return t && parseTree(t); };
  const kids = n => n.k === "add" ? n.a.map(t => t.e) : n.k === "mul" ? n.f.map(t => t.e) : n.k === "pow" ? [n.b, n.e] : n.k === "eq" ? [n.l, n.r]
    : n.k === "fn" ? (n.base ? [n.a, n.base] : [n.a]) : n.k === "root" || n.k === "abs" ? [n.a] : [];
  const varsOf = (n, out = new Set()) => { if (n.k === "var") out.add(n.n); kids(n).forEach(k => varsOf(k, out)); return [...out]; };
  const has = (n, k) => n.k === k || kids(n).some(x => has(x, k));
  const treeSize = n => 1 + kids(n).reduce((s, k) => s + treeSize(k), 0);
  const isConst = n => !varsOf(n).length;
  const natNum = n => n.k === "num" && n.v[1] === 1n && n.v[0] >= 0n ? n.v[0] : null;
  // Найдовша значуща десяткова частина в записі; ціле від 7 цифр (110714871779/100000000000) теж вважається наближенням.
  const maxDec = n => Math.max(n.dd || 0, ...kids(n).map(maxDec));
  // Рядок-підпис дерева (для пошуку однакових доданків і множників).
  const sig = n => n.k === "num" ? n.v.join("/") : n.k === "var" ? n.n : n.k === "pi" ? "π" : n.k === "add" ? "(" + n.a.map(t => (t.s < 0 ? "-" : "+") + sig(t.e)).join("") + ")"
    : n.k === "mul" ? "[" + n.f.map(t => (t.d ? "/" : "*") + sig(t.e)).join("") + "]" : n.k + (n.fn || n.n || "") + "{" + kids(n).map(sig).join(",") + "}";
  // Бюджет точних обчислень на одну перевірку: короткий запис на кшталт (√2+√3+…)^12 не має підвішувати сторінку.
  let BUDGET = 0;

  // Наближене значення для перевірки тотожності виразів у випадкових точках.
  const FNUM = { sin: Math.sin, cos: Math.cos, tg: Math.tan, tan: Math.tan, ctg: x => 1 / Math.tan(x), cot: x => 1 / Math.tan(x), arcsin: Math.asin,
    arccos: Math.acos, arctg: Math.atan, arctan: Math.atan, arcctg: x => Math.PI / 2 - Math.atan(x), ln: Math.log, lg: Math.log10 };
  function fval(n, env) {
    switch (n.k) {
      case "num": return Number(n.v[0]) / Number(n.v[1]);
      case "var": return n.n in env ? env[n.n] : NaN;
      case "pi": return Math.PI;
      case "add": return n.a.reduce((s, t) => s + t.s * fval(t.e, env), 0);
      case "mul": return n.f.reduce((s, t) => { const x = fval(t.e, env); return t.d ? s / x : s * x; }, 1);
      case "pow": { const b = fval(n.b, env), e = fval(n.e, env); return b < 0 && !Number.isInteger(e) ? NaN : Math.pow(b, e); }
      case "root": { const a = fval(n.a, env); return n.n === 3 ? Math.cbrt(a) : a < 0 ? NaN : n.n === 2 ? Math.sqrt(a) : Math.pow(a, 1 / n.n); }
      case "abs": return Math.abs(fval(n.a, env));
      case "fn": { const a = fval(n.a, env); if (n.fn !== "log") return FNUM[n.fn](a); const b = fval(n.base, env); return b > 0 && b !== 1 && a > 0 ? Math.log(a) / Math.log(b) : NaN; }
      default: return NaN;
    }
  }

  // Точне число: сума q · ⁿ√r · π^k, q раціональне, r без n-х степенів. Map "n:r:k" → [p, q].
  const RED = new Map();
  function rootRed(n, r) {                       // ⁿ√r = c · ⁿ'√r', r ≥ 1 ціле
    if (r < 1n || r > 10n ** 10n) return null;   // шкільні підкореневі малі; межа тримає розклад швидким
    const key = n + ":" + r; if (RED.has(key)) return RED.get(key); if (RED.size > 5000) RED.clear();
    const res = rootRed0(n, r); RED.set(key, res); return res;
  }
  function rootRed0(n, r) {
    const fs = []; let c = 1n, rr = r;
    let n0 = 0;
    for (let p = 2n; p * p <= rr; p++) { n0++; let e = 0; while (rr % p === 0n) { rr /= p; e++; } if (e) fs.push([p, e]); }
    if (STEPS !== Infinity) spend(n0);                              // не більше 10⁵ ітерацій на виклик (r ≤ 10¹⁰)
    if (rr > 1n) fs.push([rr, 1]);
    const left = fs.map(([p, e]) => { c *= p ** BigInt(Math.floor(e / n)); return [p, e % n]; }).filter(x => x[1]);
    let g = n; for (const [, e] of left) { let a = g, b = e; while (b) [a, b] = [b, a % b]; g = a; }
    const r2 = left.reduce((s, [p, e]) => s * p ** BigInt(e / g), 1n);
    return [[c, 1n], r2 === 1n ? 1 : n / g, r2];
  }
  const X = (q, n = 1, r = 1n, k = 0) => q[0] === 0n ? new Map() : new Map([[`${n}:${r}:${k}`, q]]);
  function xadd(a, b, s = 1n) {
    const m = new Map(a);
    for (const [key, q] of b) { const v = m.has(key) ? qadd(m.get(key), [s * q[0], q[1]]) : [s * q[0], q[1]]; if (v[0] === 0n) m.delete(key); else m.set(key, v); }
    return m;
  }
  function xmul(a, b) {
    guard();
    if (a.size * b.size > 1024 || (BUDGET -= a.size * b.size) < 0) { LIMIT = true; return null; }
    let m = new Map();
    for (const [ka, qa] of a) for (const [kb, qb] of b) {
      const [na, ra, pa] = ka.split(":"), [nb, rb, pb] = kb.split(":"), k = +pa + +pb;
      let red;
      if (na === "1") red = [[1n, 1n], +nb, BigInt(rb)]; else if (nb === "1") red = [[1n, 1n], +na, BigInt(ra)];
      else if (na === nb) red = rootRed(+na, BigInt(ra) * BigInt(rb)); else return null;   // корені різних степенів не змішуємо
      if (!red || k > 3) return null;
      m = xadd(m, X(qmul(qmul(qa, qb), red[0]), red[1], red[2], k));
    }
    if (m.size > 64) { LIMIT = true; return null; }
    return m;
  }
  const xrat = m => !m.size ? [0n, 1n] : m.size === 1 && m.has("1:1:0") ? m.get("1:1:0") : null;
  const xnum = m => [...m].reduce((s, [key, q]) => { const [n, r, k] = key.split(":"); return s + Number(q[0]) / Number(q[1]) * Math.pow(Number(r), 1 / n) * Math.PI ** k; }, 0);
  const xeq = (a, b) => xadd(a, b, -1n).size === 0;
  function xroot(n, q) {
    if (q[0] < 0n) { if (n % 2 === 0) return null; const x = xroot(n, [-q[0], q[1]]); return x && xadd(new Map(), x, -1n); }
    const red = rootRed(n, q[0] * q[1] ** BigInt(n - 1));                 // ⁿ√(p/q) = ⁿ√(p·qⁿ⁻¹) / q
    return q[0] === 0n ? new Map() : red && X(qmul(red[0], [1n, q[1]]), red[1], red[2]);
  }
  function xinv(m) {                                                        // лише одночлен без π: 1/(q·ⁿ√r) = ⁿ√(rⁿ⁻¹)/(q·r)
    if (m.size !== 1) return null;
    const [[key, q]] = m, [n, r, k] = key.split(":");
    if (k !== "0") return null;
    const red = rootRed(+n, BigInt(r) ** BigInt(n - 1));
    return red && X(qmul(red[0], Q(q[1], q[0] * BigInt(r))), red[1], red[2]);
  }
  function xval(n, env) {
    const xv = c => xval(c, env);
    switch (n.k) {
      case "num": return X(n.v);
      case "var": return env && n.n in env ? X(env[n.n]) : null;
      case "pi": return X([1n, 1n], 1, 1n, 1);
      case "add": { let m = new Map(); for (const t of n.a) { const v = xv(t.e); if (!v) return null; m = xadd(m, v, BigInt(t.s)); } return m.size > 64 ? null : m; }
      case "mul": { let m = X([1n, 1n]); for (const t of n.f) { let v = xv(t.e); if (v && t.d) v = xinv(v); if (!v || !(m = xmul(m, v))) return null; } return m; }
      case "pow": {
        const e = xv(n.e), q = e && xrat(e), b = xv(n.b);
        if (!b || !q || q[1] !== 1n || q[0] > 12n || q[0] < -12n) return null;
        let m = X([1n, 1n]); for (let j = 0n; j < (q[0] < 0n ? -q[0] : q[0]); j++) if (!(m = xmul(m, b))) return null;
        return q[0] < 0n ? xinv(m) : m;
      }
      case "root": { const a = xv(n.a), q = a && xrat(a); return q && xroot(n.n, q); }
      case "abs": { const a = xv(n.a); return a && (xnum(a) < 0 ? xadd(new Map(), a, -1n) : a); }
      default: return null;
    }
  }
  // Запис коренів «спрощений»: ціле підкореневе без n-х степенів, без кореня в знаменнику, без кореня в степені чи під коренем.
  function tidyRoots(n, den = false) {
    if (n.k === "root") { const r = natNum(n.a), red = r && rootRed(n.n, r); return !den && !!red && red[0][0] === 1n && red[1] === n.n && red[2] === r; }
    if (n.k === "mul") return n.f.every(t => tidyRoots(t.e, den || t.d));
    if (n.k === "pow") return !has(n.b, "root") && tidyRoots(n.e, den);
    return kids(n).every(k => tidyRoots(k, den));
  }
  /* Канонічний точний запис: доданки c · ⁿ√r · π / d (не більше одного числа, кореня, π і цілого дільника), кожен радикал
     і раціональна частина — лише раз; або (така сума) / ціле. Інакше значення правильне, але запис не спрощено (√3+√3, 2√3·√6, 32−24).
     Ціле число й цілий дільник — без спільного множника: 2√2/2, (2 + 2√5)/2, (−6 + 2√14)/2, (2/4)√3 — нескорочений дріб, "form". */
  const ratLit = e => e.k === "num" || (e.k === "mul" && e.f.every(t => t.e.k === "num") && e.f.length === 2 && e.f[1].d);   // 2 або (1/3)
  const intLit = e => e.k === "num" && e.v[1] === 1n ? e.v[0] : null;
  const ratVal = e => e.k === "num" ? e.v : Q(e.f[0].e.v[0] * e.f[1].e.v[1], e.f[0].e.v[1] * e.f[1].e.v[0]);   // 2, 0,5, (1/3) → [p, q]
  let NOGCD = false;                             // formHint: чи стане запис канонічним, якщо лише скоротити дріб
  const litReduced = e => NOGCD || e.k !== "mul" || intLit(e.f[0].e) === null || intLit(e.f[1].e) === null || bgcd(e.f[0].e.v[0], e.f[1].e.v[0]) === 1n;
  function canonTerm(t) {
    let num = 0, root = 0, pi = 0, den = 0, c = 1n, dv = 1n;
    for (const { d, e } of t.k === "mul" ? t.f : [{ d: false, e: t }]) {
      if (d) { if (e.k !== "num" || e.v[1] !== 1n || ++den > 1) return false; dv = e.v[0]; }
      else if (ratLit(e)) { if (++num > 1 || !litReduced(e)) return false; c = intLit(e) ?? 1n; } else if (e.k === "root") { if (++root > 1) return false; } else if (e.k === "pi") { if (++pi > 1) return false; } else return false;
    }
    return NOGCD || bgcd(c, dv) === 1n;
  }
  function canonSum(t) {
    const terms = t.k === "add" ? t.a.map(x => x.e) : [t];
    if (!terms.every(canonTerm)) return false;
    const keys = terms.map(e => { const v = xval(e); return v && v.size === 1 ? [...v.keys()][0] : null; });
    return keys.every(Boolean) && new Set(keys).size === keys.length;
  }
  function canonExact(t) {
    if (!tidyRoots(t)) return false;
    if (canonSum(t)) return true;
    const u = t.k === "add" && t.a.length === 1 ? t.a[0].e : t;          // −(1 + √2)
    if (u !== t && canonSum(u)) return true;
    // c · (сума) / d: 2(1 + √5), (−1 + √5)/2, (1/3)(3 + √3) — одна канонічна сума, число й цілий дільник
    if (u.k !== "mul") return false;
    let sum = null, num = 0, den = 0, c = 1n, dv = 1n, cq = 1n;
    for (const { d, e } of u.f) {
      if (d) { if (natNum(e) === null || natNum(e) < 2n || ++den > 1) return false; dv = natNum(e); }
      else if (e.k === "add") { if (sum || !canonSum(e)) return false; sum = e; }
      else if (ratLit(e)) { if (++num > 1 || !litReduced(e)) return false; const q = ratVal(e); c = q[0]; cq = q[1]; } else return false;
    }
    if (!sum) return false;
    // (p/q)(сума) — те саме, що p(сума)/q: знаменник множника йде в НСД разом із дільником (рев'ю followup P3-1, (1/2)(2 + 2√5))
    dv *= cq;
    // (сума)/d: спільний множник числа перед дужками, цілих коефіцієнтів суми й дільника — нескорочений дріб
    const cs = sum.a.map(t => { const v = xval(t.e); return v && v.size === 1 ? [...v.values()][0] : null; });
    return NOGCD || dv === 1n || !cs.every(q => q && q[1] === 1n) || cs.reduce((g, q) => bgcd(g, c * q[0]), dv) === 1n;
  }
  const ratOf = a => a && a.proper ? { x: X(Q(BigInt(a.n), BigInt(a.d))), tidy: true } : null;
  /** Точне число з рядка: { x — Map, tidy — канонічний запис } або null. Спершу звичайний запис числа (розряди, мішані дроби), далі корені й π. */
  function exactOf(v) {
    const a = parseAns(v);
    if (a) return ratOf(a);
    const t = parseExpr(v);
    try { const x = t && t.k !== "eq" && isConst(t) && xval(t); return x ? { x, tidy: canonExact(t) } : null; }
    catch (e) { if (e === TOO) return null; throw e; }
  }
  /** Елемент списку, координата, межа: якщо ключ не містить коренів/π — лише число, як у чинному list; інакше точне значення. */
  const exactKey = v => /[√∛∜π±∓]|sqrt|pi/.test(Array.isArray(v) ? v.join(";") : String(v ?? ""));
  const elemOf = (v, exact) => exact ? exactOf(v) : ratOf(parseAns(v)), elemOf0 = elemOf;
  /** «±» і «∓» → усі варіанти знаків (не більше 4 знаків у записі). */
  function expandPM(t) {
    const n = (t.match(/[±∓]/g) || []).length; if (n > 4) return [];
    return Array.from({ length: 2 ** n }, (_, mask) => { let j = 0; return t.replace(/[±∓]/g, c => { const plus = !((mask >> j++) & 1); return (c === "±") === plus ? "+" : "-"; }); });
  }
  // У списку «;» відділяє числа з десятковою комою; без «;» кома є роздільником. Елементи — числа або точні значення (√, π, ±).
  // multi — ключ із multiset: повтори дозволено (мультимножина, рішення 2026-10-31, п. 8); інакше повтор — null, як і раніше.
  function parseList(v, exact, multi = false) {
    const parts = Array.isArray(v) ? v : String(v ?? "").split(/[;\n]/.test(String(v)) ? /[;\n]/ : /,/);
    const values = parts.flatMap(p => exact && /[±∓]/.test(String(p)) ? expandPM(String(p)) : [p]).map(p => elemOf(p, exact));
    if (!values.length || values.some(x => !x) || (!multi && values.some((x, i) => values.slice(0, i).some(y => xeq(x.x, y.x))))) return null;
    return values;
  }
  /* Префікс «x =» в list (як у number, CONTENT_SCHEMA §10): «x = 1; x = −2», «x₁ = 1; x₂ = −2», «x1 = 1, x2 = 3», «x = 1».
     Ключ list змінної не містить, тож префікс знімається, лише коли формули умови ($…$ у title, body, q, text) мають рівно
     одну кандидатну змінну — малу латинську літеру, і префікс — саме вона (кирилична «х», «у»… = латинська; індекси 1–4).
     Не кандидати: назва функції перед «(змінна)» (f(x), g(t)), літера з індексом «_» (a_n, log_a), аргумент \vec / \overline /
     \text, ліва частина «y = …», якщо ця літера більше ніде в умові не трапляється (нулі $y = (x + 5)^2 - 9$ → лише x), і
     літера, якій умова дає числове значення ($\sqrt{a^2}$ при $a = 4,6$ — це дане, не невідоме).
     Кілька кандидатів (параметр і змінна $3x^2 - bx + 12 = 0$, система x і y, $y = kx + b$), жодного, різні літери в записі,
     літера не та — запис лишається як є, тобто «неправильно», як і раніше (рев'ю P1-1). */
  const LIST_PRE = /^\s*([a-zA-Zа-яґєії])\s*(?:_?\{?[1-4]\}?|[₁₂₃₄])?\s*=\s*(?=[-−–+]?\s*(?:[\d√∛∜π(]|sqrt|pi))/u;
  const CYR_LAT = { "а": "a", "е": "e", "і": "i", "к": "k", "о": "o", "р": "p", "с": "c", "у": "y", "х": "x" };
  const TEX_ARG = /\\(?:vec|overrightarrow|overline|bar|hat|text|mathrm|operatorname|mathbb)\s*(?:\{[^{}]*\}|[a-zA-Z])/g;
  const TEX_WORD = /\\[a-zA-Z]+|\b(?:arcsin|arccos|arctg|arcctg|arctan|sin|cos|tg|ctg|tan|cot|log|lg|ln|sqrt|max|min|mod)\b/g;
  /** Єдина кандидатна змінна умови вправи або null. */
  function taskVar(s) {
    const text = ["title", "body", "q", "text"].map(k => typeof s?.[k] === "string" ? s[k] : "").join(" "), all = new Map(), lhs = new Map(), skip = new Set();
    const inc = (m, c) => m.set(c, (m.get(c) || 0) + 1);
    for (const m of text.matchAll(/\$([^$]+)\$/g)) {
      // § — не літера й не початок формули: «\sin x = 1» не робить x заданим
      const t = m[1].replace(TEX_ARG, " § ").replace(TEX_WORD, " § ").replace(/_\s*(?:\{[^{}]*\}|[a-zA-Z0-9])/g, "_");
      for (const [, c] of t.matchAll(/([a-z])\s*_/g)) skip.add(c);                          // a_n, log_a: назва послідовності, основа
      for (const [, c] of t.matchAll(/([a-z])\s*\(\s*[a-z]\s*\)/g)) skip.add(c);          // f(x), g(t): назва функції
      for (const c of t.match(/[a-z]/g) || []) inc(all, c);
      for (const g of t.matchAll(/(?:^|[,;])\s*([a-z])\s*=(?!=)(\s*[-−–]?\s*\d[\d,.\s]*$)?/g)) { inc(lhs, g[1]); if (g[2]) skip.add(g[1]); }   // «y = …»; «a = 4,6» — дане число, не невідоме
    }
    const cand = [...all.keys()].filter(c => !skip.has(c) && all.get(c) > (lhs.get(c) || 0));
    return cand.length === 1 ? cand[0] : null;
  }
  // «x₁,₂ = ±3», «x_{1,2} = (1 ± √5)/2» (п. 8): один запис з «±» на обидва корені — та сама літера умови, що й для «x₁ = …»
  const LIST_PM = /^\s*([a-zA-Zа-яґєії])\s*(?:₁\s*,\s*₂|_?\{?\s*1\s*,\s*2\s*\}?)\s*=\s*([^;\n=]*[±∓][^;\n=]*)$/u;
  function listPre(s, v) {
    if (typeof v !== "string") return v;
    const pm = LIST_PM.exec(v);
    if (pm) return taskVar(s) === (CYR_LAT[pm[1]] || pm[1]) ? [pm[2].trim()] : v;
    const parts = v.split(/[;\n]/.test(v) ? /[;\n]/ : /,/), lets = new Set();
    const bare = parts.map(p => { const m = LIST_PRE.exec(p); if (!m) return p; lets.add(CYR_LAT[m[1]] || m[1]); return p.slice(m[0].length); });
    if (!lets.size) return v;
    const [x] = lets;
    return lets.size === 1 && taskVar(s) === x ? bare : v;
  }
  /* Назва перед координатами, що не змінює відповідь (рішення 2026-10-31, п. 5): точка чи вектор з 1–2 великих латинських літер,
     можна з «=» (A(3; 1), AB = (3; 1), AB(3; 1)), \vec{AB} = (…), \overrightarrow{AB} = (…). Мала літера без «=» — лише в числовому
     шляху (m(-4; 0), як і раніше); у символьному ключі k(p − m; k − n) — множник, не назва.
     Правило єдиної назви з умови (engine-learn-list-prefixes-p3): якщо умова питає про одну названу точку чи вектор
     (askedPoint: «точки $B$», «вектора $\overrightarrow{AB}$», «вершини $C$»), назва в записі має бути саме нею — «CD = (−3; 1)»
     чи «A(1; 6)» при «знайди точку B» не зараховуються. Якщо умова такої назви не має — будь-яка назва, як у D-030 (2) («M = (6; -33)»,
     «B = (3; 5)»), крім назв даних точок умови («A(3; 5)», коли $A(4; -3)$ — дана) — варіант B оркестратора, уточнення D-030 (2).
     Значення правильне, а назву відкинуто — «form» з поясненням (nameMsg), не «ok». */
  const NAME_AT = /^(?:\\(?:vec|overrightarrow)\s*\{\s*([A-Z]{1,2})\s*\}|([A-Z]{1,2})|([a-z]))\s*(=?)\s*(?=\()/;
  // Назва з індексом чи штрихом — образ точки «A_1(…)», «A₁(…)», «A1(…)», «A'(…)» (engine-learn-prefixes-p3b). Ніколи не зараховується
  // (нове правило назви — рішення людини), але якщо значення правильне — «form» з поясненням «запиши лише координати», а не мовчазне «bad».
  const IMG_AT = /^([A-Z]{1,2})\s*(?:_\s*\{?\s*\d{1,2}\s*\}?|[₀-₉]{1,2}|\d{1,2}|['’′ʼ]{1,2})\s*=?\s*(?=\()/;
  // Текст умови для пошуку назви: без HTML-тегів (лише справжніх — «<» у формулі лишається) і без прикладів формату
  // («Наприклад, $(1; 5]$ — це всі числа $y$…» до кінця абзацу): приклад не називає шукане.
  const stmtText = s => ["title", "body", "q", "text"].map(k => typeof s?.[k] === "string" ? s[k] : "").join(" </p> ")
    .replace(/наприклад[^]*?(?=<\/p>|$)/giu, " ").replace(/<\/?[a-zA-Z][^<>]*>/g, " ");
  // Слово перед формулою, що називає шукане: «координати точки $B$», «вектора $\vec{AB}$», «вершини $C$», «кінця», «центра», «образ».
  const ASK_WORD = /(?:^|[^а-яґєії])(?:точк|вершин|вектор|кін[еця]|центр|образ)[а-яґєії]*\s*$/iu;
  const ASKED = new WeakMap(), NO_NAMES = { ask: null, given: new Set(), objs: new Set() };
  /** Назви умови: { ask — єдина назва точки чи вектора, про яку питає умова (формула-назва без координат, перед нею — ASK_WORD), або null;
      given — назви точок і векторів із даними координатами ($A(4; -3)$, $\\vec{AB} = (…)$);
      objs — решта назв з формул умови, без координат: відрізок $BC$, пряма $AO$, довільна точка $X$ з означення, промінь $OX$ (p3b) }. */
  function askedPoint(s) {
    if (!s || typeof s !== "object") return null;
    if (ASKED.has(s)) return ASKED.get(s);
    const text = stmtText(s), names = new Set(), given = new Set();
    // шукане — лише в реченні із запитанням («Знайди координати точки $B$»), не в означенні («кожна точка $X$ переходить…»)
    const ask = text.split(/(?<=[.?!])\s+(?=[^$]*(?:\$[^$]*\$[^$]*)*$)|<\/p>/).filter(x => /знайд|визнач|які координати|яких координат/i.test(x)).join(" </p> ");
    for (const m of ask.matchAll(/\$([^$]+)\$/g)) {
      if (!ASK_WORD.test(ask.slice(Math.max(0, m.index - 40), m.index))) continue;
      const n = m[1].trim().match(/^(?:\\(?:vec|overrightarrow)\s*\{\s*([A-Z]{1,2})\s*\}|([A-Z]{1,2}))$/);
      if (n) names.add(n[1] || n[2]);
    }
    // точка з даними координатами — дане, не шукане: «симетрична точці A відносно точки $M(2; -3)$» (заголовок «…точки $M$»)
    for (const [, f] of text.matchAll(/\$([^$]+)\$/g)) for (const g of f.matchAll(/(?:\\(?:vec|overrightarrow)\s*\{\s*([A-Z]{1,2})\s*\}|(?<![A-Za-z])([A-Z]{1,2}))\s*=?\s*\(/g)) given.add(g[1] || g[2]);
    for (const g of given) names.delete(g);
    // назви об'єктів умови: окремий токен з 1–2 великих латинських літер у формулі (не частина слова чи TeX-команди: \Delta, ABCD), \vec{AB}
    const objs = new Set();
    for (const [, f] of text.matchAll(/\$([^$]+)\$/g)) for (const g of f.matchAll(/\\(?:vec|overrightarrow)\s*\{\s*([A-Z]{1,2})\s*\}|(?<![A-Za-z\\])([A-Z]{1,2})(?![A-Za-z])/g)) { const n = g[1] || g[2]; if (!given.has(n)) objs.add(n); }
    const r = { ask: names.size === 1 ? [...names][0] : null, given, objs };
    ASKED.set(s, r); return r;
  }
  /** Довжина назви на початку запису t (0 — назви немає або її не можна зняти). low — мала літера дозволена (числовий шлях). */
  // Варіант B (рев'ю engine-learn-list-prefixes-p3, уточнення D-030 (2)): шукана назва є — лише вона; немає — будь-яка назва
  // з 1–2 великих літер, з «=» чи \vec (D-030 (2)), крім назв даних точок умови (given): «A(3; 5)», коли $A(4; -3)$ — дана початкова точка,
  // і крім інших назв з формул умови (objs, p3b): «BC = (…)» для середини відрізка $BC$, «AO = (…)», «X(…)», «OX = (…)».
  function nameLen(s, t, low) {
    const m = NAME_AT.exec(t); if (!m) return 0;
    if (m[3]) return low && !m[4] ? m[0].length : 0;
    const { ask, given, objs } = askedPoint(s) || NO_NAMES, big = m[1] || m[2];
    if (ask) return big === ask ? m[0].length : 0;
    return given.has(big) || objs.has(big) ? 0 : m[0].length;
  }
  /** Впорядковані координати (3; −2) / A(3; -2) / AB = (3; −2) / [3, -2]: рівно n компонент, порядок і знак важливі. s — вправа (назва з умови). */
  function parsePoint(v, n, exact, s) {
    let parts = Array.isArray(v) ? v.map(String) : null;
    if (!parts) { let t = norm(v); t = t.slice(nameLen(s, t, true)); const m = t.match(/^\((.*)\)$/s); if (m) t = m[1]; parts = t.split(t.includes(";") ? ";" : ","); }
    const xs = parts.length === n ? parts.map(p => elemOf(String(p).replace(/^\s*-\s+/, "-"), exact)) : [];
    return xs.length && xs.every(Boolean) ? xs : null;
  }
  /* coordinates2 з компонентами-виразами: (p − m; k − n). Символьний ключ — якщо хоч одна компонента ключа містить змінну;
     інакше працює числовий parsePoint без змін. Компонента зі змінною перевіряється як answerKind "expression" (sameExpr, form),
     числова компонента — як у числовому coordinates2 (число чи точний корінь, без арифметики). */
  // Компоненти верхнього рівня: назва точки A(…) і зовнішні дужки знімаються, лише якщо дужка закривається в кінці запису.
  // sym — запис дитини до символьного ключа: мала літера перед дужками — множник (k(p − m; k − n)), не назва точки.
  function splitPair(v, sym = false, s = null) {
    if (Array.isArray(v)) return v.map(String);
    let t = norm(v);
    const close = i => { let d = 0; for (let j = i; j < t.length; j++) { if (t[j] === "(") d++; else if (t[j] === ")" && !--d) return j; } return -1; };
    const nl = nameLen(s, t, !sym); if (nl && close(nl) === t.length - 1) t = t.slice(nl);
    if (t[0] === "(" && close(0) === t.length - 1) t = t.slice(1, -1);
    const sep = t.includes(";") ? ";" : ",", parts = []; let d = 0, from = 0;
    for (let j = 0; j < t.length; j++) { if (t[j] === "(") d++; else if (t[j] === ")") d--; else if (t[j] === sep && !d) { parts.push(t.slice(from, j)); from = j + 1; } }
    return parts.concat(t.slice(from));
  }
  /** Дерева компонент символьного ключа coordinates2 або null (числовий ключ — старий шлях). */
  function symPair(s) {
    if (s?.answerKind !== "coordinates2") return null;
    const parts = splitPair(s.answer); if (parts.length !== 2) return null;
    const ts = parts.map(p => parseExpr(p));
    return ts.every(Boolean) && ts.some(t => varsOf(t).length) ? ts : null;
  }
  /** Перевірка кожної компоненти: [{ sym — компонента-вираз, r: "ok" | "form" | "bad" }] або null (не дві компоненти, невідома form).
      Кожна компонента-вираз має власну половину кроків (STEP_MAX / 2) і власний бюджет BUDGET: важка перша компонента
      не забирає перевірку в другої. */
  function pairSym(s, v, a) {
    const kp = splitPair(s.answer), up = splitPair(v, true, s), ex = exactKey(s.answer);
    if (up.length !== 2 || (s.form !== undefined && !EXPR_FORMS.includes(s.form))) return null;
    return a.map((ka, i) => {
      if (!varsOf(ka).length) {
        const x = elemOf(kp[i].replace(/^\s*-\s+/, "-"), ex), y = elemOf(up[i].replace(/^\s*-\s+/, "-"), ex);
        return { sym: false, r: x && y && xeq(x.x, y.x) ? (y.tidy ? "ok" : "form") : "bad" };
      }
      const u = parseExpr(up[i]);
      if (ka.k === "eq" || !u || u.k === "eq") return { sym: true, r: "bad" };
      STEPS = STEP_MAX / 2; BUDGET = 50000;
      // форма — з тим запасом, який sameExpr дав собі після переходу на числове порівняння (STEP_GRANT), як у звичайному expression
      const same = sameExpr(ka, u), r = !same ? "bad" : exprForm(s.form, ka, u) ? "ok" : "form";
      return { sym: true, r };
    });
  }
  // Останній результат pairSym з checkAns: formHint одразу після checkAns не перевіряє пару вдруге.
  let PAIR_LAST = null;
  const worst = rs => rs.some(x => x.r === "bad") ? "bad" : rs.some(x => x.r === "form") ? "form" : "ok";
  /** Відношення a : b (: c) додатних чисел; порядок членів важливий. */
  function parseRatio(v) {
    const parts = Array.isArray(v) ? v.map(String) : norm(v).split(/[:∶]/);
    const xs = parts.length >= 2 && parts.length <= 3 ? parts.map(p => parseAns(String(p).trim())) : [];
    return xs.length && xs.every(x => x && x.proper && x.n > 0) ? xs : null;
  }
  /* Префікс перед множиною intervalSet: «x ∈ (…)», «D(f) = (…)», «-n ∈ […)» (рішення 2026-10-31, п. 5) — лише один і лише назва,
     про яку питає умова (engine-learn-list-prefixes-p3, правило єдиної назви): askedSet(s) — множина дозволених префіксів.
       • Область значень («область значень», «у яких межах змінюється значення»): функція — y, f(x), E(f) / E(y); не аргумент.
       • Інакше: єдина «гола» формула умови з малою латинською літерою без знаків відношення й TeX-команд ($-n$, $m$, $a$, $x$);
         якщо такої немає або їх кілька — єдина змінна умови (taskVar). Область визначення — ще D(f) / D(y).
     Якщо умова назви не дає (null) — давнє правило: одна літера, можна з «(літера)», перед «=» чи «∈» (x ∈ …, D(f) = …).
     «n ∈ [-4; 3)» при «яких значень набуває −n», «x ∈ …» при «знайди a», «x ∈ y ∈ (…)» не зараховуються. */
  const pfx = t => norm(t).replace(/\s+/g, "");
  const SETS = new WeakMap();
  function askedSet(s) {
    if (!s || typeof s !== "object") return null;
    if (SETS.has(s)) return SETS.get(s);
    const text = stmtText(s), forms = [...text.matchAll(/\$([^$]+)\$/g)].map(m => m[1].trim()), out = new Set();
    const fns = new Set(); for (const f of forms) { if (/(?:^|[^a-zA-Z\\])f\s*\(\s*x\s*\)\s*=/.test(f)) fns.add("f"); if (/(?:^|[^a-zA-Z\\_])y\s*=(?!=)/.test(f)) fns.add("y"); }
    const bare = [...new Set(forms.filter(f => /[a-z]/.test(f) && !/[\\=<>≤≥∈∉≠]/.test(f) && !/^[A-Z]\s*\(\s*[a-z]\s*\)$/.test(f) && !/^[a-z]\s*\(/.test(f) && parseExpr(f)).map(pfx))];
    for (const f of forms) { const m = f.match(/^([DE])\s*\(\s*([a-z])\s*\)$/); if (m) out.add(`${m[1]}(${m[2]})`); }
    if (/област\S*\s+значень|меж\S*\s+змінюється\s+значення/i.test(text)) {
      if (fns.has("f")) out.add("f(x)").add("E(f)");
      if (taskVar(s) !== "y") out.add("y").add("E(y)").add("E(f)");   // E(f) — і для функції, заданої як y = … (рев'ю P3-3)
      out.label = "range";
    } else {
      if (bare.length === 1) out.add(out.label = bare[0]);
      else { const x = taskVar(s); if (x) out.add(out.label = x); }
      if (/област\S*\s+визначення/i.test(text)) for (const f of fns) out.add(`D(${f})`);
    }
    const r = out.size ? out : null;
    SETS.set(s, r); return r;
  }
  /** Проміжок або об'єднання: (-∞; 3], [1; 2) ∪ {5}, ∅, R — без префікса (див. askedSet). s — вправа запису дитини (для ключа — null). */
  function setText(v, s = null) {
    let t = norm(v).replace(/[Øø]/g, "∅");
    const at = t.search(/[=∈]/), pre = at > 0 ? t.slice(0, at) : "";
    if (pre && !/[[\]{};∪∞]/.test(pre)) {
      const names = askedSet(s);
      if (names ? names.has(pfx(pre)) : /^[A-Za-z](?:\s*\([A-Za-z]\))?\s*$/.test(pre)) t = t.slice(at + 1).trim();
    }
    return t;
  }
  function parseSet(v, exact, s = null) {
    // межа чи елемент — періодичний дріб «0,(3)» = 1/3 (п. 5), як у number; ключ із коренями — так само
    const elemOf = (p, ex) => elemOf0(p, ex) || ratOf(parsePeriodic(p));
    const t = setText(v, s);
    if (/^(∅|\{\s*\})$/.test(t)) return Object.assign([], { raw: 0 });
    const INF = /^([+-]?)(?:∞|inf)$/, ivs = [];
    const split2 = s => s.includes(";") ? s.split(";") : s.split(",");
    for (const part of t.split(/\s*[∪U]\s*/)) {
      let m;
      if (/^(R|ℝ)$/.test(part)) { ivs.push({ lo: -1, hi: 1, lc: false, hc: false }); continue; }
      if ((m = part.match(/^\{(.+)\}$/))) { for (const p of split2(m[1])) { const e = elemOf(p.trim(), exact); if (!e) return null; ivs.push({ lo: e, hi: e, lc: true, hc: true }); } continue; }
      if (!(m = part.match(/^([[(])(.*)([\])])$/))) return null;
      const ends = split2(m[2]).map(s => s.trim()); if (ends.length !== 2) return null;
      const [lo, hi] = ends.map((s, j) => { const inf = s.replace(/\s+/g, "").match(INF); if (!inf) return elemOf(s, exact); return (inf[1] === "-" ? j === 0 : j === 1) ? (j ? 1 : -1) : null; });
      const lc = m[1] === "[", hc = m[3] === "]";
      if (lo === null || hi === null || (lo === -1 && lc) || (hi === 1 && hc)) return null;
      const c = cmpEnd(lo, hi); if (c > 0 || (c === 0 && !(lc && hc))) return null;
      ivs.push({ lo, hi, lc, hc });
    }
    ivs.sort((a, b) => cmpEnd(a.lo, b.lo) || (b.lc - a.lc));
    const out = [];
    for (const iv of ivs) {
      const cur = out[out.length - 1], c = cur && cmpEnd(iv.lo, cur.hi);
      if (cur && (c < 0 || (c === 0 && (cur.hc || iv.lc)))) { const h = cmpEnd(iv.hi, cur.hi); if (h > 0) { cur.hi = iv.hi; cur.hc = iv.hc; } else if (h === 0) cur.hc ||= iv.hc; }
      else out.push({ ...iv });
    }
    out.raw = ivs.length;                       // скільки частин записано: більше, ніж після злиття, — ключ неканонічний
    return out;
  }
  // Межа проміжку: −1 = −∞, 1 = +∞, інакше точне число.
  function cmpEnd(a, b) {
    if (typeof a === "number" || typeof b === "number") return (typeof a === "number" ? a * 2 : 0) - (typeof b === "number" ? b * 2 : 0) || 0;
    return xeq(a.x, b.x) ? 0 : Math.sign(xnum(a.x) - xnum(b.x));
  }
  /** Періодична множина: серії з параметром k (n, m) ∈ ℤ, «;» між серіями, ± і (−1)^k. Повертає відсортовані значення у вікні або null. */
  const PER_W = 30, PER_K = 1000, PER_MAX = 8;
  function periodicValues(v) {
    const out = []; let fams = 0, dec = 0;
    for (let t of Array.isArray(v) ? v.map(String) : [String(v ?? "")]) {
      t = norm(t).replace(/[,;]?\s*(?:д[еe]\s*)?[kmn]\s*[∈є]\s*[ZzℤΖ]\s*\.?$/, "");   // norm: «де» → «дe», «к» → «k»
      for (const fam of t.split(/;|,\s*(?=[a-zA-ZͰ-Ͽ]\s*=)/).flatMap(f => expandPM(f.trim().replace(/^[a-jo-zA-ZͰ-Ͽ]\s*=\s*/, "")))) {
        const tree = parseExpr(fam), vars = tree && tree.k !== "eq" ? varsOf(tree) : [];
        if (vars.length !== 1 || !"kmn".includes(vars[0]) || ++fams > PER_MAX) return null;
        const f = k => fval(tree, { [vars[0]]: k });
        if (Math.abs(f(1) - f(0)) < 1e-9 && Math.abs(f(2) - f(0)) < 1e-9) return null;   // «серія»-стала без k
        dec = Math.max(dec, maxDec(tree));
        let n = 0;
        for (let k = -PER_K; k <= PER_K; k++) { const x = f(k); if (Math.abs(x) <= PER_W) { out.push(x); n++; } }
        if (n < 2) return null;
      }
    }
    return out.length ? Object.assign(out.sort((a, b) => a - b), { dec }) : null;
  }
  function samePeriodic(a, b) {
    const near = (x, ys) => { let lo = 0, hi = ys.length - 1; while (lo < hi) { const mid = (lo + hi) >> 1; if (ys[mid] < x - 1e-9) lo = mid + 1; else hi = mid; } return Math.abs(ys[lo] - x) <= 1e-9 * (1 + Math.abs(x)); };
    const inner = x => Math.abs(x) <= PER_W - 4;
    return a.filter(inner).every(x => near(x, b)) && b.filter(inner).every(x => near(x, a));
  }
  /** Вираз або рівняння. Префікс f(x) =, y' = знімається; «y = …» лишається рівнянням. */
  const FPREF = /^\s*[A-Za-z](?:['′]+(?:\([A-Za-z]\))?|\([A-Za-z]\))\s*=/;
  function exprOf(v) {
    let t = norm(v); if (FPREF.test(t) && !t.replace(FPREF, "").includes("=")) t = t.replace(FPREF, "");
    return parseExpr(t);
  }
  function rng(seed) { return () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  /** Тотожність. Спершу точно в 12 раціональних точках (многочлени, дроби, корені, π, модуль); якщо вираз має sin/log/дробовий
      степінь — у 48 числових точках, і тоді десяткові дроби, довші за ключ (і за 2 знаки), — наближення, не зараховуються.
      Рівняння рівносильні, якщо L − R пропорційні. */
  function sameExpr(a, b) {
    let ex; try { ex = sameExact(a, b); } catch (e) { if (e !== TOO) throw e; ex = null; if (STEPS !== Infinity) { STEPS = STEP_GRANT; DEADLINE = Math.max(DEADLINE, Date.now() + 400); } }
    if (ex !== null) return ex;
    if (maxDec(b) > Math.max(2, maxDec(a))) return false;
    return sameNum(a, b);
  }
  function sameExact(a, b) {
    const vars = [...new Set([...varsOf(a), ...varsOf(b)])], R = rng(1030), pairs = [];
    const xf = (n, env) => { if (n.k !== "eq") return xval(n, env); const l = xval(n.l, env), r = l && xval(n.r, env); return r && xadd(l, r, -1n); };
    const ff = (n, env) => n.k === "eq" ? fval(n.l, env) - fval(n.r, env) : fval(n, env);
    let keyOk = 0;
    for (let i = 0; i < 12; i++) {
      const env = {}, fenv = {};
      for (const x of vars) { let p = BigInt(1 + Math.floor(R() * 19)), q = BigInt(1 + Math.floor(R() * 6)); if (i % 2 && R() < 0.5) p = -p; env[x] = Q(p, q); fenv[x] = Number(env[x][0]) / Number(env[x][1]); }
      const xa = xf(a, env), xb = xf(b, env);
      if ((!xa && Number.isFinite(ff(a, fenv))) || (!xb && Number.isFinite(ff(b, fenv)))) return null;   // поза точною арифметикою
      if (xa) { keyOk++; if (xb) pairs.push([xa, xb]); }
    }
    if (pairs.length < 6 || pairs.length * 2 < keyOk) return false;
    if (a.k !== "eq") return pairs.every(([x, y]) => xeq(x, y));
    const p0 = pairs.find(([x, y]) => x.size && y.size); if (!p0) return false;
    for (const [x, y] of pairs) { const l = xmul(x, p0[1]), r = xmul(p0[0], y); if (!l || !r) return null; if (!xeq(l, r)) return false; }
    return true;
  }
  function sameNum(a, b) {
    const vars = [...new Set([...varsOf(a), ...varsOf(b)])], R = rng(20261030), pairs = [];
    const f = (n, env) => n.k === "eq" ? fval(n.l, env) - fval(n.r, env) : fval(n, env);
    let keyOk = 0;
    for (let i = 0; i < 48; i++) {
      const env = {}; for (const x of vars) { const r = 0.2 + 2.8 * R(); env[x] = i % 2 && R() < 0.5 ? -r : r; }
      const x = f(a, env), y = f(b, env);
      if (Number.isFinite(x)) { keyOk++; if (Number.isFinite(y)) pairs.push([x, y]); }
    }
    if (pairs.length < 6 || pairs.length * 2 < keyOk) return false;
    let c = 1;
    if (a.k === "eq") { const [x0, y0] = pairs.reduce((m, p) => Math.abs(p[1]) > Math.abs(m[1]) ? p : m); if (Math.abs(x0) < 1e-9 || Math.abs(y0) < 1e-9) return false; c = x0 / y0; }
    return pairs.every(([x, y]) => Math.abs(x - c * y) <= 1e-10 * (1 + Math.abs(x) + Math.abs(c * y)));
  }
  // Форми виразу: expanded — стандартний вигляд многочлена; factored — добуток не менше ніж із стількох множників, як у ключі;
  // reduced — нескоротний дріб (степені чисельника й знаменника не вищі, ніж у ключі); simplified — не довший за ключ.
  function monomial(n) {
    const fs = n.k === "mul" ? n.f : [{ d: false, e: n }], seen = {};
    for (let i = 0; i < fs.length; i++) {
      const { d, e } = fs[i];
      if (e.k === "num") { if (!d && i > 0) return null; continue; }
      const v = d ? null : e.k === "var" ? e : e.k === "pow" && e.b.k === "var" && natNum(e.e) >= 2n ? e.b : null;
      if (!v || v.n in seen) return null; seen[v.n] = e.k === "var" ? 1 : String(natNum(e.e));
    }
    return Object.keys(seen).sort().map(x => x + "^" + seen[x]).join("·");
  }
  const unNeg = n => n.k === "add" && n.a.length === 1 ? unNeg(n.a[0].e) : n;
  function factorCount(n) {
    n = unNeg(n); if (isConst(n)) return 0;
    if (n.k === "mul") return n.f.reduce((s, t) => s + (t.d ? 0 : factorCount(t.e)), 0);
    const p = n.k === "pow" ? natNum(n.e) : null;
    return p ? Number(p) * factorCount(n.b) : 1;
  }
  const isProduct = n => { n = unNeg(n); return (n.k === "mul" && n.f.length > 1) || (n.k === "pow" && !isConst(n.b)); };
  function polyDeg(n) {
    if (isConst(n)) return 0;
    switch (n.k) {
      case "var": return 1;
      case "add": return Math.max(...n.a.map(t => polyDeg(t.e)));
      case "mul": return n.f.reduce((s, t) => t.d ? (isConst(t.e) ? s : Infinity) : s + polyDeg(t.e), 0);
      case "pow": { const p = natNum(n.e); return p === null ? Infinity : polyDeg(n.b) * Number(p); }
      default: return Infinity;
    }
  }
  function fracDeg(n) {
    n = unNeg(n);
    if (n.k !== "mul") return [polyDeg(n), 0];
    return n.f.reduce(([a, b], t) => t.d ? [a, b + polyDeg(t.e)] : [a + polyDeg(t.e), b], [0, 0]);
  }
  // Многочлен з раціональними коефіцієнтами: Map "x:2,y:1" → [p, q] або null.
  const P1 = () => new Map([["", [1n, 1n]]]);
  function padd(a, b, s = 1n) { const m = new Map(a); for (const [k, q] of b) { const v = m.has(k) ? qadd(m.get(k), [s * q[0], q[1]]) : [s * q[0], q[1]]; if (v[0] === 0n) m.delete(k); else m.set(k, v); } return m; }
  function pmul(a, b) {
    guard();
    if (a.size * b.size > 400 || (BUDGET -= a.size * b.size) < 0) { LIMIT = true; return null; }
    let m = new Map();
    for (const [ka, qa] of a) for (const [kb, qb] of b) {
      const e = {}; for (const part of (ka + "," + kb).split(",").filter(Boolean)) { const [x, n] = part.split(":"); e[x] = (e[x] || 0) + +n; }
      m = padd(m, new Map([[Object.keys(e).sort().map(x => x + ":" + e[x]).join(","), qmul(qa, qb)]]));
    }
    return m.size > 200 ? null : m;
  }
  function poly(n) {
    switch (n.k) {
      case "num": return n.v[0] === 0n ? new Map() : new Map([["", n.v]]);
      case "var": return new Map([[n.n + ":1", [1n, 1n]]]);
      case "add": { let m = new Map(); for (const t of n.a) { const p = poly(t.e); if (!p) return null; m = padd(m, p, BigInt(t.s)); } return m; }
      case "mul": { let m = P1(); for (const t of n.f) { let p = poly(t.e); if (p && t.d) { const c = p.size === 1 && p.get(""); p = c ? new Map([["", Q(c[1], c[0])]]) : null; } if (!p || !(m = pmul(m, p))) return null; } return m; }
      case "pow": { const e = natNum(n.e), b = poly(n.b); if (e === null || e > 12n || !b) return null; let m = P1(); for (let i = 0n; i < e; i++) if (!(m = pmul(m, b))) return null; return m; }
      default: return null;
    }
  }
  // Зміст многочлена: НСД цілих коефіцієнтів; null — якщо коефіцієнт не цілий або це не многочлен.
  const content = p => p && [...p.values()].every(q => q[1] === 1n) ? [...p.values()].reduce((g, q) => bgcd(g, q[0]), 0n) : null;
  const factorsOf = n => { n = unNeg(n); return n.k === "mul" ? n.f : [{ d: false, e: n }]; };
  // Зведений многочлен з дробовими коефіцієнтами (x − 1/2, x + 0,5): старший коефіцієнт ±1 — розклад a(x − x₁)(x − x₂) повний.
  function monic(p) {
    const deg = k => k.split(",").filter(Boolean).reduce((s, x) => s + +x.split(":")[1], 0), top = Math.max(...[...p.keys()].map(deg));
    const lead = [...p].filter(([k]) => deg(k) === top);
    return lead.length === 1 && lead[0][1][1] === 1n && (lead[0][1][0] === 1n || lead[0][1][0] === -1n);
  }
  // Кожен множник зі змінною — примітивний: цілі коефіцієнти без спільного дільника (3x + 6, 0,5x + 1 — не до кінця).
  const varDen = n => (n.k === "mul" && n.f.some(t => t.d && !isConst(t.e))) || kids(n).some(varDen);
  function primitive(n) {
    for (const { d, e } of factorsOf(n)) {
      if (isConst(e)) continue;
      if (d || varDen(e)) return false;         // змінна в знаменнику — це не розклад: 1/x · …, x^2(3 + 6/x)
      const base = e.k === "pow" && natNum(e.e) ? e.b : e, p = base.k === "var" ? null : poly(base);
      if (p && content(p) !== 1n && !monic(p)) return false;
    }
    return true;
  }
  // Немає однакових доданків (x + x) чи однакових множників (x · x) ніде в записі.
  function noRepeats(n) {
    if (n.k === "add") { const ks = n.a.map(t => { const e = t.e, f = e.k === "mul" && e.f[0].e.k === "num" && !e.f[0].d ? { k: "mul", f: e.f.slice(1) } : e; return e.k === "num" ? "#" : sig(f.k === "mul" && f.f.length === 1 && !f.f[0].d ? f.f[0].e : f); }); if (new Set(ks).size < ks.length) return false; }
    if (n.k === "mul") { const ks = n.f.filter(t => !t.d && t.e.k !== "num").map(t => sig(t.e)); if (new Set(ks).size < ks.length) return false; }
    return kids(n).every(noRepeats);
  }
  function exprForm(form, key, u) {
    if (form === "expanded") { const sg = (u.k === "add" ? u.a.map(t => t.e) : [u]).map(monomial); return sg.every(x => x !== null) && new Set(sg).size === sg.length; }
    if (form === "factored") return isProduct(u) && factorCount(u) >= factorCount(key) && primitive(u);
    if (form === "reduced") {
      const [a, b] = fracDeg(u), [ka, kb] = fracDeg(key); if (!(a <= ka && b <= kb)) return false;
      const fs = factorsOf(u), part = d => fs.filter(t => t.d === d).reduce((m, t) => m && (m = pmul(m, poly(t.e) || new Map([["?", [1n, 1n]]]))), P1());
      const cn = content(part(false)), cd = content(part(true));
      return cn !== null && cd !== null && bgcd(cn, cd) === 1n;
    }
    if (form === "simplified") return treeSize(u) <= treeSize(key) && noRepeats(u);
    return true;
  }
  const EXPR_FORMS = ["expanded", "factored", "reduced", "simplified"];
  /* ---------- Тексти підказок «form» / «bad» — одним словником: hintTexts(s) віддає всі, які дитина може побачити у вправі s,
     і tools/test-answer-ui.py звіряє кожен приклад із них (та з підказки під полем) з ключем самої вправи. ---------- */
  const MSG = {
    frac: "Значення правильне. Запиши відповідь звичайним дробом.",
    reduce: "Значення правильне, але дріб ще можна скоротити.",
    mixed: "Значення правильне. Запиши відповідь мішаним числом: ціла частина, пробіл, дріб.",
    improper: "Значення правильне. Запиши відповідь неправильним дробом — без цілої частини.",
    divrem: "Неповну частку знайдено. Допиши остачу: кнопка «ост.» і число.",
    ratio: "Відношення правильне. Запиши його натуральними числами без спільного дільника, наприклад 2 : 3.",
    rootReduce: "Значення правильне. Скороти дріб: поділи числа в чисельнику й знаменник на спільний дільник.",
    simplify: "Значення правильне, але запис не спрощено: обчисли, зведи подібні, винеси множник з-під кореня й позбудься кореня в знаменнику.",
    limit: "Запис занадто складний для перевірки. Спрости його й спробуй ще раз.",
    rootNum: "Значення правильне. Обчисли корінь і запиши відповідь числом.",
    rootCopy: "Це вираз з умови. Обчисли корінь і запиши відповідь числом.",
    constC: "Вираз правильний. Сталу запиши великою латинською літерою C.",
    denom: "Знаменник-добуток візьми в дужки: 1/(3y), бо 1/3y — це y/3.",
    parenPow: "Степінь пиши через знак ^. Число одразу після дужок — це множник, а не показник.",
    expandParen: "Вираз правильний. Розкрий дужки й зведи подібні доданки.",
    expandLike: "Вираз правильний. Зведи подібні доданки й запиши многочлен стандартного вигляду.",
    power: "Вираз правильний. Запиши його одним степенем: основа, ^ і показник.",
    factored: "Вираз правильний. Розклади його на множники до кінця.",
    reduced: "Вираз правильний. Скороти дріб.",
    simplified: "Вираз правильний, але його можна спростити.",
    setRange: "Проміжок правильний, але тут шукають значення функції (y, E(f)), а не аргументу.",
    setName: "Проміжок правильний, але назва перед ним не та. Запиши лише проміжок.",
    pointName: "Координати правильні, але назва перед ними не та. Запиши лише координати.",
    pointImage: "Координати правильні. Назву з індексом чи штрихом тут не пишуть — запиши лише координати.",
    listSep: "Без «;» кома розділяє числа. Якщо в числах є десяткова кома, відокремлюй їх знаком «;».",
    retry: "Спробуй ще раз."
  };
  const DEC_WORD = ["цілим числом, без коми", "з одним знаком після коми", "з двома знаками після коми", "з трьома знаками після коми"];
  const decMsg = n => n === 0 ? "Значення правильне. Запиши відповідь цілим числом, без коми." : `Значення правильне. Запиши відповідь десятковим дробом ${DEC_WORD[n] || `з ${n} знаками після коми`}.`;
  const givenMsg = g => `Координати правильні, але ${g} — дана точка умови. Запиши лише координати.`;
  const objMsg = g => `Координати правильні, але ${g} — інше позначення з умови, а не шукана точка. Запиши лише координати.`;
  const unitMsg = s => `Перевір одиницю: тут відповідь записують у «${s.unit}». Одиницю можна й не писати.`;

  /* ---------- Час (answerKind "time", рішення 2026-10-31, п. 1): ключ «9:55», 24-годинний ---------- */
  const TIME_KEY = /^([01]?\d|2[0-3]):[0-5]\d$/;
  /** Хвилини від півночі: «9:55», «09:55», «9.55» (у полі — «9,55»), «9 год 55 хв», «9 год. 55 хв.», «9 год»; інакше null.
      Після «:»/«.» хвилини — рівно дві цифри («9:5», «955» — null: дитина бачить формат). */
  function parseTime(v) {
    const t = String(v ?? "").toLowerCase().replace(/\s+/g, " ").trim();
    const m = t.match(/^(\d{1,2}) ?[:.,] ?(\d{2})$/) || t.match(/^(\d{1,2}) ?год[.,]?(?: ?(\d{1,2}) ?хв[.,]?)?$/);
    if (!m) return null;
    const h = +m[1], mi = +(m[2] || 0);
    return h <= 23 && mi <= 59 ? h * 60 + mi : null;
  }
  // Приклад формату під полем і в підказці — завжди не ключ цієї вправи.
  const TIME_EX = ["7:05", "8:40"];
  const timeExample = s => TIME_EX.find(e => parseTime(e) !== parseTime(s?.answer));
  const timeMsg = s => `Запиши час годинами й хвилинами через двокрапку, хвилини — двома цифрами: ${timeExample(s)}.`;

  /* ---------- Складені величини (answerKind "quantity", п. 2): ключ — число в найменшій з units ---------- */
  const QTY = [
    ["довжина", { "мм": 1, "см": 10, "дм": 100, "м": 1000, "км": 1e6 }],
    ["маса", { "г": 1, "кг": 1e3, "ц": 1e5, "т": 1e6 }],
    ["час", { "с": 1, "хв": 60, "год": 3600, "доба": 86400 }],
    ["гроші", { "коп": 1, "грн": 100 }]];
  const QTY_ALIAS = { "доби": "доба", "діб": "доба" };
  const qtyDim = u => QTY.find(([, t]) => u in t);
  const QTY_NAMES = [...QTY.flatMap(([, t]) => Object.keys(t)), ...Object.keys(QTY_ALIAS)].sort((a, b) => b.length - a.length);
  // число — і з розрядами через пробіл (2 543 см, як у number: групи рівно по 3 цифри, рев'ю verify refine-math-pools-new-kinds);
  // «25 43 см», «2 5430 см» не розбираються
  const QTY_RE = new RegExp(`^(\\d{1,3}(?: \\d{3})+(?:,\\d{1,15})?|\\d{1,15}(?:,\\d{1,15})?) ?(${QTY_NAMES.join("|")})(?![\\p{L}])[.,]?(?: |$|(?=\\d))`, "u");
  /** units вправи: { dim, table, units — від більшої до меншої } або null (порожньо, різні величини, повтор, невідома одиниця). */
  function qtyUnits(s) {
    const us = Array.isArray(s?.units) ? s.units : [], d = typeof us[0] === "string" && qtyDim(us[0]);
    return d && us.every(u => typeof u === "string" && u in d[1]) && new Set(us).size === us.length ? { dim: d[0], table: d[1], units: [...us].sort((a, b) => d[1][b] - d[1][a]) } : null;
  }
  /** Запис величини: «2 м 45 см», «245 см», «2,45 м», «3 год. 20 хв.» → [{ v — [p, q], u, dim, f — множник до найменшої одиниці таблиці, int }] або null.
      Кожна одиниця — щонайбільше раз; між частинами — пробіл. */
  function parseQty(v) {
    let t = String(v ?? "").toLowerCase().replace(/(\d)\.(?=\d)/g, "$1,").replace(/\s+/g, " ").trim();
    const parts = [];
    while (t) {
      const m = QTY_RE.exec(t); if (!m) return null;
      const u = QTY_ALIAS[m[2]] || m[2], d = qtyDim(u), [w, f = ""] = m[1].replace(/ /g, "").split(",");
      parts.push({ v: Q(BigInt(w + f), 10n ** BigInt(f.length)), u, dim: d[0], f: d[1][u], int: !f });
      t = t.slice(m[0].length).trim();
    }
    return parts.length && new Set(parts.map(p => p.u)).size === parts.length ? parts : null;
  }
  const qtyKey = s => { const a = parseAns(String(s.answer ?? "").replace(".", ",")); return a && !a.frac && a.n >= 0 ? [BigInt(a.n), BigInt(a.d)] : null; };
  // «form: compound» — складений запис у units: цілі частини від більшої одиниці до меншої, кожна менша за одну більшу одиницю
  // (2 м 45 см; 245 см чи 2 м 145 см — ні). Нульову частину можна писати або ні.
  function compoundOk(U, parts) {
    let prev = -1;
    for (const p of parts) {
      const i = U.units.indexOf(p.u);
      if (i < 0 || i <= prev || !p.int || (i > 0 && p.v[0] >= BigInt(U.table[U.units[i - 1]] / U.table[p.u]))) return false;
      prev = i;
    }
    return true;
  }
  function checkQty(s, v) {
    const U = qtyUnits(s), key = qtyKey(s), parts = parseQty(v);
    if (!U || !key || !parts || parts.some(p => p.dim !== U.dim)) return "bad";
    const total = parts.reduce((acc, p) => qadd(acc, qmul(p.v, [BigInt(p.f), 1n])), [0n, 1n]);
    const want = qmul(key, [BigInt(U.table[U.units[U.units.length - 1]]), 1n]);
    if (total[0] * want[1] !== want[0] * total[1]) return "bad";
    return s.form === "compound" && !compoundOk(U, parts) ? "form" : "ok";
  }
  const decStr = q => { for (let k = 0n; k < 16n; k++) if ((10n ** k) % q[1] === 0n) { const n = q[0] * 10n ** k / q[1], t = String(n).padStart(Number(k) + 1, "0"); return k ? t.slice(0, -Number(k)) + "," + t.slice(-Number(k)) : t; } return `${q[0]}/${q[1]}`; };
  /** Ключ величини у складеному записі: 245 при [м, см] → «2 м 45 см»; дробова частина — у найменшій одиниці. */
  function qtyText(s) {
    const U = qtyUnits(s), key = qtyKey(s); if (!U || !key) return String(s.answer ?? "");
    const last = U.units[U.units.length - 1]; let rest = qmul(key, [BigInt(U.table[last]), 1n]); const out = [];
    for (const u of U.units) {
      const f = BigInt(U.table[u]);
      if (u === last) { const q = Q(rest[0], rest[1] * f); if (q[0] || !out.length) out.push(decStr(q) + " " + u); }
      else { const n = rest[0] / (rest[1] * f); if (n) { out.push(n + " " + u); rest = Q(rest[0] - n * rest[1] * f, rest[1]); } }
    }
    return out.join(" ");
  }
  const qtyList = U => U.units.join(", ");
  const qtyForeignMsg = U => `Перевір одиницю: тут відповідь записують у ${qtyList(U)}.`;
  const qtyMissingMsg = U => `Допиши одиниці: ${qtyList(U)}.`;
  const qtyTailMsg = U => `Після кожного числа напиши одиницю: ${qtyList(U)}.`;
  const qtyFracMsg = U => `Звичайний дріб тут не розбирається: запиши величину десятковим дробом або меншими одиницями (${qtyList(U)}).`;
  const qtyClockMsg = U => `Тут час записують одиницями, а не через двокрапку: ${U.units.join(", потім ")}.`;
  const qtyFormMsg = U => `Значення правильне. Запиши його в ${U.units.join(" і ")}: спершу більші одиниці, потім менші, цілими числами.`;

  /* ---------- Число: префікс «x =», періодичний дріб, decimals, improper ---------- */
  // «x = 5», «b = 1» у number — та сама відповідь (п. 5); одна латинська чи кирилична літера перед «=» і число після нього.
  // Явний «+» перед додатним числом: «+16», «x = +16» = 16 (verify pg10m1 b02). Лише один «+» одразу перед цифрою:
  // «+-16», «+ 16», «++16» не розбираються; від'ємне число «+» не змінює, бо «+» разом із «-» не знімається.
  const NUM_PREFIX = /^\s*[A-Za-zА-ЯҐЄІЇа-яґєії]\s*=\s*(?=[-−–+]?\d)/u;
  const numPre = v => typeof v === "string" ? v.replace(NUM_PREFIX, "").replace(/^\s*\+(?=\d)/, "") : v;
  /** Періодичний десятковий дріб «-0,(3)», «1,2(36)» → { n, d, frac: false, periodic: true } (п. 6) або null. */
  function parsePeriodic(v) {
    const m = String(v ?? "").replace(/[−–]/g, "-").replace(/\./g, ",").replace(/\s+/g, "").match(/^(-?)(\d{1,6}),(\d{0,6})\((\d{1,6})\)$/);
    if (!m) return null;
    const a = BigInt(m[2] + m[3]), full = BigInt(m[2] + m[3] + m[4]);
    let n = full - a, d = 10n ** BigInt(m[3].length) * (10n ** BigInt(m[4].length) - 1n); const g = bgcd(n, d) || 1n; n /= g; d /= g;
    return { n: Number(m[1] ? -n : n), d: Number(d), frac: false, proper: true, lowest: true, periodic: true };
  }
  const numOf = v => { const t = numPre(v); return parseAns(t) || parsePeriodic(t); };
  const decCount = u => u.frac || u.periodic ? -1 : String(u.d).length - 1;   // знаків після коми в записі (d = 10^k)

  /** Пояснення для результату "form": що саме не так із записом. */
  function formHint(s, v) {
    const kind = s.answerKind || "number"; v = stripUnit(s, v);
    const nm = ["intervalSet", "coordinates2", "coordinates3"].includes(kind) ? limited(() => nameMsg(s, v), () => null) : null; if (nm) return nm;
    if (kind === "number") {
      const u = numOf(v);
      if (!u && limited(() => { const a = parseAns(typeof s.answer === "number" ? String(s.answer) : s.answer); return !!a && rootNum(v, a); }, () => false)) return rootCopy(s, v) ? MSG.rootCopy : MSG.rootNum;
      if (s.decimals !== undefined && u && decCount(u) !== s.decimals) return decMsg(s.decimals);
      if (s.form === "improper" && u?.frac && u.whole) return MSG.improper;
      // mixed і ключ з цілою частиною: десятковий чи періодичний запис (1,(63) при 1 7/11) одразу веде до мішаного числа,
      // а не через «звичайним дробом» → «мішаним числом» (рев'ю engine-math-answer-kinds-new P3-5)
      if (!u?.frac && s.mixed) { const a = parseAns(typeof s.answer === "number" ? String(s.answer) : s.answer); if (a && a.frac && Math.abs(a.n) > a.d && a.n % a.d) return MSG.mixed; }
      return !u?.frac ? MSG.frac : s.reduced && !u.lowest ? MSG.reduce : MSG.mixed;
    }
    if (kind === "divrem") return MSG.divrem;
    if (kind === "ratio") return MSG.ratio;
    if (kind === "quantity") { const U = qtyUnits(s); return U ? qtyFormMsg(U) : MSG.retry; }
    if (kind === "coordinates2" && s.form !== undefined && symPair(s)) {   // «form» дала компонента-вираз — підказка expression, інакше — про корені
      const a = symPair(s), up = splitPair(v, true, s);
      let rs = PAIR_LAST && PAIR_LAST.s === s && PAIR_LAST.v === v ? PAIR_LAST.rs : null;
      if (!rs) rs = limited(() => pairSym(s, v, a), () => null);
      const i = rs ? rs.findIndex(x => x.sym && x.r === "form") : -1;
      if (i >= 0) return exprHint(s.form, a[i], up[i]);
    }
    if (kind === "expression") {
      const a = exprOf(s.answer), u = exprOf(v);
      if (a && u && limited(() => !!constC(s, a, u), () => false)) return MSG.constC;
      return exprHint(s.form, a, v);
    }
    if (["exactRoot", "list", "coordinates2", "coordinates3", "intervalSet"].includes(kind) && unreducedOnly(s, kind, v)) return MSG.rootReduce;
    return MSG.simplify;
  }
  // Межі проміжків запису (без ∞): для «Скороти дріб» у intervalSet (рев'ю followup P3-2, (-∞; 2√2/2]).
  const setBounds = (v, s) => setText(v, s).split(/\s*[∪U]\s*/).flatMap(part => part.replace(/^[[({]|[\])}]$/g, "").split(part.includes(";") ? ";" : ",")).filter(x => !/∞|inf/.test(x));
  // Хоч один елемент запису неканонічний лише через нескорочений дріб (2√2/2, (2 ± 2√5)/2), а без вимоги НСД — канонічний.
  function unreducedOnly(s, kind, v) {
    const lv = kind === "list" ? listPre(s, v) : v;   // «x = 2√2/2; …» — та сама підказка, що й без префікса
    const parts = kind === "exactRoot" ? [String(v ?? "")] : kind === "list" ? (Array.isArray(lv) ? lv : String(lv ?? "").split(/[;\n]/.test(String(lv)) ? /[;\n]/ : /,/))
      : kind === "intervalSet" ? setBounds(v, s) : splitPair(v, kind === "coordinates2" && !!symPair(s), s);
    const loose = t => { NOGCD = true; try { return canonExact(t); } finally { NOGCD = false; } };
    return limited(() => parts.flatMap(p => expandPM(String(p))).some(p => { const t = parseExpr(p); return t && t.k !== "eq" && isConst(t) && !canonExact(t) && loose(t); }), () => false);
  }
  /** Підказка «form» для виразу (key — дерево ключа, v — запис дитини або компоненти пари). */
  function exprHint(form, key, v) {
    if (form === "expanded") return /[()]/.test(String(v)) ? MSG.expandParen : MSG.expandLike;
    if (form === "simplified" && key) { const k = unNeg(key), u = exprOf(v);   // «подай у вигляді степеня»: ключ — один степінь, запис — ні
      if (k.k === "pow" && !isConst(k.b) && !(u && unNeg(u).k === "pow")) return MSG.power; }
    return { factored: MSG.factored, reduced: MSG.reduced, simplified: MSG.simplified }[form] || MSG.retry;
  }
  /** Пояснення для «bad», коли звичайне «Зміни відповідь» не допоможе (app.js, після checkAns === "bad"); null — звичайне повідомлення.
      Межа кроків чи розміру — «запис занадто складний»; чужа одиниця при unit — лише якщо без неї число правильне (п. 7);
      знаменник-добуток без дужок (k/6p), якщо з дужками значення збігається з ключем; час не в форматі ГГ:ХХ; величина
      без одиниць чи в одиницях іншої величини. Приклади в текстах не збігаються з ключем вправи (hintTexts, test-answer-ui).
      r — результат checkAns(s, v), щойно обчислений тим самим викликом (app.js): тоді перевірка не повторюється, LIMIT — від неї. */
  function badHint(s, v, r) {
    if ((r === undefined ? checkAns(s, v) : r) !== "bad") return null;
    if (LIMIT) return MSG.limit;
    const t = String(v ?? ""), kind = s.answerKind || "number";
    if (s.unit && foreignUnit(s, t)) { const bare = stripUnit(s, t).replace(foreignRe(s), "$1"); return checkAns(s, bare) !== "bad" ? unitMsg(s) : null; }
    if (kind === "time") return parseTime(t) === null ? timeMsg(s) : null;
    // list без «;»: кома — роздільник, тож «1,5, 2» (у полі «1.5, 2» стає «1,5, 2») — це три числа (a11y-followup, відкрите (б))
    // лише запис із самих чисел через кому (не «x₁,₂ = …», не «y_{1,2}»)
    if (kind === "list") return /^[\d\s,.+\-−–]+$/.test(t) && /\d,\d/.test(t) ? MSG.listSep : null;
    if (kind === "quantity") {
      const U = qtyUnits(s), parts = parseQty(t); if (!U) return null;
      if (parts && parts.some(p => p.dim !== U.dim)) return qtyForeignMsg(U);
      if (parts) return null;
      if (numOf(t)) return qtyMissingMsg(U);
      // рев'ю engine-math-answer-kinds-new P3-4: «2 м 45» (без останньої одиниці), «2 9/20 м», «3:20» при [год, хв] — пояснити формат
      const w = t.toLowerCase().replace(/\s+/g, " ").trim(), tail = w.match(/^(.*\S) (\d+(?:[.,]\d+)?)$/);
      if (tail && parseQty(tail[1])) return qtyTailMsg(U);
      if (/\d\s*\/\s*\d/.test(w)) return qtyFracMsg(U);
      if (U.dim === "час" && /^\d{1,2} ?: ?\d{1,2}$/.test(w)) return qtyClockMsg(U);
      return null;
    }
    if (kind === "expression" || (kind === "coordinates2" && symPair(s))) {
      const w = norm(t).replace(/\/\s*(\d+(?:,\d+)?[A-Za-zͰ-Ͽ][A-Za-zͰ-Ͽ\d^]*|[A-Za-zͰ-Ͽ](?:\^\d+)?[A-Za-zͰ-Ͽ][A-Za-zͰ-Ͽ\d^]*)/g, "/($1)");
      if (w !== norm(t) && checkAns(s, w) !== "bad") return MSG.denom;
      // «(x + 5)2» замість «(x + 5)^2» (рев'ю P3-1): число після дужок — множник; якщо зі «^» запис правильний — підказка
      const p = norm(t).replace(/\)\s*(\d+)(?![\d,])/g, ")^$1");
      if (p !== norm(t) && checkAns(s, p) !== "bad") return MSG.parenPow;
    }
    return null;
  }
  /** Усі тексти «form»/«bad», які дитина може побачити у вправі s (formHint, badHint): для звірки «підказка ≠ ключ». */
  function hintTexts(s) {
    const kind = s?.answerKind || "number", out = [MSG.limit, MSG.simplify, MSG.retry], U = kind === "quantity" && qtyUnits(s);
    if (s?.unit) out.push(unitMsg(s));
    if (kind === "number") out.push(MSG.rootNum, MSG.rootCopy, MSG.frac, MSG.reduce, MSG.mixed, MSG.improper, ...(s.decimals !== undefined ? [decMsg(s.decimals)] : []));
    if (kind === "divrem") out.push(MSG.divrem);
    if (kind === "ratio") out.push(MSG.ratio);
    if (kind === "expression") out.push(MSG.constC);
    if (kind === "expression" || kind === "coordinates2") out.push(MSG.denom, MSG.parenPow, MSG.expandParen, MSG.expandLike, MSG.power, MSG.factored, MSG.reduced, MSG.simplified);
    if (["exactRoot", "list", "coordinates2", "coordinates3", "intervalSet"].includes(kind)) out.push(MSG.rootReduce);
    if (kind === "list") out.push(MSG.listSep);
    if (kind === "intervalSet") { const lab = askedSet(s)?.label; out.push(MSG.setRange, MSG.setName, ...(lab && lab !== "range" ? [`Проміжок правильний, але тут шукають значення ${lab.replace(/-/g, "−")}.`] : [])); }
    if (kind === "coordinates2" || kind === "coordinates3") { const { ask, given, objs } = askedPoint(s) || NO_NAMES;
      out.push(MSG.pointName, MSG.pointImage, ...(ask ? [`Координати правильні, але тут шукають ${ask}.`] : []), ...[...given].map(givenMsg), ...[...objs].map(objMsg)); }
    if (kind === "time") out.push(timeMsg(s));
    if (U) out.push(qtyForeignMsg(U), qtyMissingMsg(U), qtyFormMsg(U), qtyTailMsg(U), qtyFracMsg(U), ...(U.dim === "час" ? [qtyClockMsg(U)] : []));
    return out;
  }
  /** Відбиток записаної відповіді для другої спроби: однакові відбитки — та сама відповідь іншим записом («5», «05», « 5 »),
      і повторна перевірка нічого б не змінила. Число й частка з остачею — за розібраним значенням разом із ознаками запису,
      від яких залежить "form" (дріб, нескоротність, мішане число, пробіл у дробу, кількість знаків після коми). Час — за хвилинами.
      Інші answerKind і нерозібраний запис — нормалізований рядок: пробіли згорнуто, біля знаків пунктуації й дій прибрано,
      «−» → «-», крапка → кома. Плеєр усе одно не блокує відповідь, яку checkAns приймає (app.js sameAsTried), тож відбиток лише економить спробу. */
  function answerSig(s, v) {
    const kind = s?.answerKind || "number", t = String(stripUnit(s, String(v ?? "")) ?? "").replace(/\s+/g, " ").trim();   // «7 см» = «7» при unit «см»
    if (kind === "number") {
      const n = numPre(t), u = parseAns(n) || parseAns(n.replace(/[,.]$/, ""));   // «5,» — недописана кома, те саме число
      if (u) { const g = gcd(u.n, u.d) || 1; return `n:${u.n / g}/${u.d / g}` + (u.frac ? `|f${+u.lowest}${+u.proper}${+/ /.test(n)}` : "") + (s.decimals !== undefined ? `|k${decCount(u)}` : ""); }
    }
    if (kind === "divrem") { const u = parseDivrem(t); if (u) return `d:${u.q}|${u.r}`; }
    if (kind === "time") { const u = parseTime(t); if (u !== null) return `t:${u}`; }
    // list: елементи — так, як їх ділить parseList (без «;» кома — роздільник): «1.2» (одне число 1,2) ≠ «1,2» (два числа)
    if (kind === "list") return "l:" + t.split(/[;\n]/.test(t) ? /[;\n]/ : /,/).map(sigText).join("|");
    return "s:" + sigText(t);
  }
  const sigText = t => t.trim().replace(/[−–—]/g, "-").replace(/\./g, ",").replace(/ ?([;:,()[\]{}+\-·*×/^=<>∪]) ?/g, "$1");
  /** Ключ для показу «Правильна відповідь». */
  function ansText(s) {
    const a = s.answer, kind = s.answerKind || "number";
    if (kind === "quantity") return qtyText(s);
    if (!Array.isArray(a)) return String(a) + (kind === "periodicSet" ? ", k ∈ ℤ" : "");
    if (kind === "divrem") return `${a[0]} (ост. ${a[1]})`;
    if (kind === "ratio") return a.join(" : ");
    if (kind === "coordinates2" || kind === "coordinates3") return "(" + a.join("; ") + ")";
    return a.join("; ") + (kind === "periodicSet" ? ", k ∈ ℤ" : "");
  }
  /** Запис ключа, який сам має проходити перевірку (validatePool, tools/validate.mjs): число — з комою, величина — складеним записом. */
  const keyInput = s => (s.answerKind || "number") === "quantity" ? qtyText(s) : typeof s.answer === "number" ? String(s.answer).replace(".", ",") : s.answer;
  /** Посилання на джерело вправи: «№1» + srcPage → «№1, с. 56»; якщо сторінка вже є в посиланні («с. 56, №1»), srcPage не дописуємо (CONTENT_SCHEMA §10). */
  function srcRef(ref, page) {
    const r = String(ref ?? "").trim();
    if (page === undefined || page === null || /(^|[^\p{L}])с\.\s*\d/u.test(r)) return r;
    return r ? `${r}, с. ${page}` : `с. ${page}`;
  }
  /** Які кнопки й підказку показати під полем числової відповіді (answerKind number), щоб не підказувати
      учню 4 класу дроби й мінус, яких у програмі ще немає. grade — клас вправи; signed — розділ зі знаковими числами.
      «−»: прапорець signed, від'ємний ключ або 6+ клас (від'ємні числа — 6 клас: у класі знак з'являється завжди й не видає відповіді).
      «/» і пробіл (дроби, мішані числа): дробовий ключ, прапорці fractionOnly / mixed / reduced / form improper або 5+ клас (звичайні дроби).
      dec: десятковий ключ без дробових кнопок — підказка про кому. */
  /** Підказка під полем числа для decimals і form "improper" (app.js answerUI; verify refine-math-pools-new-kinds): загальна
      «Мішане число — через пробіл: 2 1/3» тут веде не туди. null — для вправи без цих полів (лишається загальна підказка).
      Приклад — перший із кандидатів, який checkAns цієї вправи не зараховує (test-answer-ui «підказка ≠ ключ»). */
  function numberHelp(s) {
    if ((s?.answerKind || "number") !== "number") return null;
    const pick = xs => xs.find(x => checkAns(s, x) === "bad");
    if (Number.isInteger(s.decimals) && s.decimals >= 0) {
      const n = s.decimals; if (!n) return "Запиши відповідь цілим числом, без коми.";
      const ex = pick(["3", "4", "6"].map(w => w + "," + "5".padStart(n, "0"))) || "";
      return `Десятковий дріб — через кому, ${DEC_WORD[n] || `з ${n} знаками після коми`}${ex ? ": " + ex : ""}.`;
    }
    if (s.form === "improper") { const ex = pick(["7/3", "9/4", "11/5"]); return `Неправильний дріб — через риску, без цілої частини${ex ? ": " + ex : ""}.`; }
    return null;
  }
  function numberKeys(s, grade, signed) {
    const a = String(s.answer ?? "").replace(/[−–]/g, "-").trim(), g = Number(grade) || 0;
    const minus = !!s.signed || !!signed || /^-/.test(a) || g >= 6;
    const frac = /\//.test(a) || !!(s.fractionOnly || s.mixed || s.reduced || s.form === "improper") || g >= 5;
    return { minus, frac, dec: !frac && /[.,]/.test(a) };
  }
  function parseFactors(v) {
    const parts = String(v ?? "").trim().split(/\s*[*·×]\s*/);
    let product = 1n;
    for (const part of parts) {
      const m = part.match(/^(\d+)(?:\s*\^\s*(\d+))?$/);
      if (!m) return null;
      const p = Number(m[1]), power = Number(m[2] || 1);
      if (!Number.isSafeInteger(p) || p < 2 || !Number.isSafeInteger(power) || power < 1 || power > 52) return null;
      for (let k = 2; k <= Math.sqrt(p); k += k === 2 ? 1 : 2) if (p % k === 0) return null;
      product *= BigInt(p) ** BigInt(power);
      if (product > BigInt(Number.MAX_SAFE_INTEGER)) return null;
    }
    return product;
  }
  /** Ділення з остачею: «3 ост. 2», «3 (ост. 2)», «3 ост 2», «3, ост. 2», «3 остача 2» або масив [3, 2]. Лише частка («3») — { q, r: null }.
      Кома замість крапки після «ост» допустима (поле відповіді замінює крапки на коми). */
  function parseDivrem(v) {
    if (Array.isArray(v)) return v.length === 2 && v.every(x => Number.isSafeInteger(x) && x >= 0) ? { q: v[0], r: v[1] } : null;
    // латинські o/c замість кириличних і крапка в кінці («3 ост. 2.») не роблять відповідь неправильною
    const t = String(v ?? "").toLowerCase().replace(/o/g, "о").replace(/c/g, "с").replace(/\s+/g, " ").trim().replace(/ ?\.$/, ""), num = x => { const n = Number(x.replace(/ /g, "")); return Number.isSafeInteger(n) ? n : null; };
    const D = "(\\d{1,3}(?: \\d{3})+|\\d+)";
    // «4, ост. 5», «4 остача 5», «4 (остача: 5)» — та сама відповідь іншим записом (QA 4 кл., D-6)
    const O = "ост(?:ача)? ?[.,:]? ?";
    let m = t.match(new RegExp(`^${D} ?,? ?(?:\\( ?${O}${D} ?\\)|${O}${D})$`));
    if (m) { const q = num(m[1]), r = num(m[2] ?? m[3]); return q === null || r === null ? null : { q, r }; }
    if ((m = t.match(new RegExp(`^${D}$`)))) { const q = num(m[1]); return q === null ? null : { q, r: null }; }
    return null;
  }
  /** Перевірка відповіді: "ok" | "form" (правильне значення, потрібен інший запис) | "bad".
      answerKind: number (типово), comparison (< > =), list (без порядку; повтори — лише з multiset), factors (прості множники),
      divrem (частка й остача; лише частка при ненульовій остачі — "form", при нульовій — "ok"),
      ratio, coordinates2, coordinates3, exactRoot, intervalSet, expression, periodicSet, time, quantity (docs/CONTENT_SCHEMA.md §10).
      Числа: reduced — нескоротний дріб; mixed — виділити цілу частину; form improper — без цілої частини; fractionOnly — лише
      звичайний/мішаний дріб; decimals — рівно n знаків після коми; tol — абсолютна похибка. Межа — limited (кроки, не годинник). */
  function checkAns(s, v) {
    LIMIT = false; PAIR_LAST = null;
    return limited(() => checkAns0(s, stripUnit(s, v)), () => { LIMIT = true; return "bad"; });
  }
  /* Одиниця в полі (CONTENT_SCHEMA §10): якщо в задачі є unit (і unitForms), дописана та сама одиниця після числа — після
     кожного елемента list чи всього запису — знімається: «70°; 110°», «7 см», «60 грн», «60 грн.», «8 %», «12 см2», «70º» = без одиниці.
     Одиниця знімається лише після цифри, «)» чи π і лише перед «;», переносом, «,» без цифри за нею або кінцем запису
     (у coordinates2/3 і ratio — ще перед «)» і «:»), тож «5 км» при unit «м» не стає «5 к». Крапка (у полі — кома) одразу після
     одиниці в кінці запису чи елемента знімається разом з нею. Чужа одиниця лишається в записі (bad), badHint пояснює. Без unit — без змін. */
  const reEsc = x => x.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
  // «раз»: «рази», «разів», «раза» — та сама одиниця (п. 7); «º» (порядковий індикатор) замість «°».
  const UNIT_SYN = { "раз": ["рази", "разів", "раза"] };
  const unitAlts = forms => [...new Set(forms.filter(f => typeof f === "string" && f.trim()).map(f => f.trim())
    .flatMap(f => [f, ...(UNIT_SYN[f] || [])])
    .flatMap(f => [f, f.replace(/²/g, "2"), f.replace(/²/g, "^2"), f.replace(/³/g, "3"), f.replace(/³/g, "^3")])
    .flatMap(f => f.includes("°") ? [f, f.replace(/°/g, "º")] : [f]))]
    .sort((a, b) => b.length - a.length).map(f => reEsc(f).replace(/\s+/g, "\\s*").replace(/C$/, "[CС]"));
  const PAIRISH = ["coordinates2", "coordinates3", "ratio"];
  const unitRe = (alts, pair) => new RegExp(`([\\d)π])\\s*(?:${alts.join("|")})(?:\\s*[.,](?=\\s*(?:[;\\n]|$)))?(?=\\s*(?:[;\\n${pair ? ")" : ""}]${pair ? "|:" : ""}|,(?!\\d)|$))`, "giu");
  const UNIT_RE = new Map();
  const ownUnit = s => { const forms = [s.unit, ...(Array.isArray(s.unitForms) ? s.unitForms : [])], pair = PAIRISH.includes(s.answerKind), key = forms.join("\u0001") + pair;
    if (!UNIT_RE.has(key)) { if (UNIT_RE.size > 500) UNIT_RE.clear(); const alts = unitAlts(forms); UNIT_RE.set(key, alts.length ? unitRe(alts, pair) : null); } return UNIT_RE.get(key); };
  function stripUnit(s, v) {
    if (!s || typeof s.unit !== "string" || !s.unit.trim() || typeof v !== "string" || s.answerKind === "comparison") return v;
    const re = ownUnit(s); return re ? v.replace(re, "$1") : v;
  }
  // Поширені одиниці шкільних задач: чужа з них після числа — підказка «перевір одиницю».
  const UNITS = ["мм", "см", "дм", "м", "км", "мм²", "см²", "дм²", "м²", "км²", "га", "мм³", "см³", "дм³", "м³", "мг", "г", "кг", "ц", "т", "с", "хв", "год",
    "грн", "коп", "%", "°", "°C", "л", "мл", "км/год", "м/с", "м/хв", "км/хв"];
  const FOREIGN_RE = [unitRe(unitAlts(UNITS), false), unitRe(unitAlts(UNITS), true)];
  const foreignRe = s => FOREIGN_RE[+PAIRISH.includes(s.answerKind)];
  function foreignUnit(s, v) { const re = foreignRe(s); re.lastIndex = 0; const t = stripUnit(s, v); return typeof t === "string" && re.test(t); }
  /** Ключ coordinates2 з компонентами-виразами так, як його розбирає checkAns (splitPair, symPair, pairSym):
      для кожної компоненти { expr — перевіряється як expression, vars — змінні, tidy — ключ сам проходить перевірку (з form), text — запис }.
      null — не coordinates2, числовий ключ або ключ не розібрано. Потрібно tools/personalization-qa.mjs (пара виразів закриває формат expression)
      і клавішам поля (app.js). Не викликати зсередини checkAns: limited після себе знімає межі. */
  function pairKey(s) {
    return limited(() => {          // як checkAns0 (checkCore): результат не залежить від попередніх викликів
      const a = symPair(s), r = a && pairSym(s, s.answer, a), t = splitPair(s.answer);
      return r && r.map((x, i) => ({ expr: x.sym, vars: varsOf(a[i]), tidy: x.r === "ok", text: t[i].trim() }));
    }, () => null);
  }
  /** Ключ answerKind "list" так, як його розбирає checkAns (той самий parseList і exactKey): для кожного елемента
      { exact — точний розбір (корені/π), root — є радикал ⁿ√ з n ≥ 2, tidy — канонічний запис, approx — наближене значення,
      rat — точний запис раціонального елемента «p/q» або «p» (інакше null) }.
      null — не list або ключ не розібрано. Потрібно tools/personalization-qa.mjs (list із коренями закриває формат exactRoot).
      Не викликати зсередини checkAns: limited після себе знімає межі. */
  function listKey(s) {
    if ((s?.answerKind || "number") !== "list") return null;
    return limited(() => {
      const ex = exactKey(s.answer), a = parseList(s.answer, ex, s.multiset === true);
      const rat = m => { const q = xrat(m); return q ? (q[1] === 1n ? String(q[0]) : `${q[0]}/${q[1]}`) : null; };
      return a && a.map(x => ({ exact: ex, root: [...x.x.keys()].some(k => !k.startsWith("1:")), tidy: x.tidy, approx: xnum(x.x), rat: rat(x.x) }));
    }, () => null);
  }
  /* Стала первісної (п. 2): умова про первісну чи інтеграл, ключ має доданок «+ C» (велика латинська C, малої c у ключі немає), запис — малу c (латинську чи
     кириличну) і жодної великої C, а в умові вправи (title, body, q, text, hint — формули й текст поза тегами) окремої латинської
     «c» немає: тоді c — та сама стала, і запис з C замість c порівнюємо з ключем. Повертає дерево з C замість c або null. */
  const constTerm = a => a.k === "add" && a.a.some(t => t.e.k === "var" && t.e.n === "C");
  const swapVar = (n, from, to) => n.k === "var" ? (n.n === from ? { k: "var", n: to } : n)
    : n.k === "add" ? { ...n, a: n.a.map(t => ({ ...t, e: swapVar(t.e, from, to) })) } : n.k === "mul" ? { ...n, f: n.f.map(t => ({ ...t, e: swapVar(t.e, from, to) })) }
    : n.k === "pow" ? { ...n, b: swapVar(n.b, from, to), e: swapVar(n.e, from, to) } : n.k === "eq" ? { ...n, l: swapVar(n.l, from, to), r: swapVar(n.r, from, to) }
    : n.k === "fn" ? { ...n, a: swapVar(n.a, from, to), base: n.base && swapVar(n.base, from, to) } : n.k === "root" || n.k === "abs" ? { ...n, a: swapVar(n.a, from, to) } : n;
  // C — стала первісної, лише якщо вправа про первісну чи інтеграл (рев'ю P3-1: у ключі «a + b + C» C — просто змінна)
  const stmtInt = s => /первісн|інтеграл|\\int|∫/i.test(["title", "body", "q", "text"].map(k => typeof s?.[k] === "string" ? s[k] : "").join(" "));
  const stmtC = s => /(^|[^a-zA-Z])c(?![a-zA-Z])/.test(["title", "body", "q", "text", "hint"].map(k => typeof s?.[k] === "string" ? s[k] : "").join(" ")
    .replace(/<[^>]*>/g, " ").replace(/\\[a-zA-Z]+/g, " ").replace(/[a-zA-Z]{2,}/g, " "));
  function constC(s, a, u) {
    if (a.k === "eq" || !constTerm(a)) return null;
    const ka = varsOf(a), ku = varsOf(u);
    return ka.includes("C") && !ka.includes("c") && ku.includes("c") && !ku.includes("C") && !stmtC(s) && stmtInt(s) ? swapVar(u, "c", "C") : null;
  }
  /* Число коренем (п. 4): запис — стала з коренем (√576, 2√9, ∛27), точне значення якої раціональне й дорівнює ключу.
     Лише "form" («обчисли корінь»), ніколи "ok"; межа точної арифметики — не "form", а звичайне "bad". */
  /** Запис дослівно є формулою (чи частиною формули між «=») умови: «√576» при «Обчисли $\\sqrt{576}$» (рев'ю g11 P3-2) — тоді «значення
      правильне» нічого не каже, підказка інша (MSG.rootCopy). Порівняння — без пробілів, \\sqrt{n} = √n, \\sqrt[3]{n} = ∛n. */
  const rootTex = f => f.replace(/\\sqrt\s*\[\s*3\s*\]\s*\{([^{}]*)\}/g, "∛$1").replace(/\\sqrt\s*\[\s*4\s*\]\s*\{([^{}]*)\}/g, "∜$1")
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, "√$1").replace(/\\[,;! ]|\s+/g, "").replace(/[−–]/g, "-");
  const rootCopy = (s, v) => { const w = rootTex(norm(numPre(String(v ?? "")))).replace(/sqrt/g, "√");
    return [...stmtText(s).matchAll(/\$([^$]+)\$/g)].some(m => rootTex(m[1]).split("=").includes(w)); };
  function rootNum(v, a) {
    const t = parseExpr(numPre(v)); if (!t || t.k === "eq" || !isConst(t) || !has(t, "root")) return false;
    const lim = LIMIT;
    let ok = false;
    try { const x = xval(t), q = x && xrat(x); ok = !!q && BigInt(a.n) * q[1] === q[0] * BigInt(a.d); }
    catch (e) { if (e !== TOO) throw e; }
    if (!ok) LIMIT = lim;   // невдала спроба не змінює підказку до «bad» (раніше такий запис просто не розбирався)
    return ok;
  }
  /* Назва відкинута, а значення правильне (рев'ю engine-learn-list-prefixes-p3, P2-1): «M(1; -5)», коли M — дана точка, «n ∈ [-4; 3)»
     при −n. Не «ok» (назва хибна), а «form» з поясненням (nameMsg); якщо й без назви запис неправильний — звичайне «bad», без підказки. */
  function dropName(s, v) {
    const kind = s.answerKind || "number", t = norm(v);
    if (kind === "intervalSet") { const at = t.search(/[=∈]/), pre = at > 0 ? t.slice(0, at) : ""; const rest = t.slice(at + 1).trim(); return pre && !/[[\]{};∪∞]/.test(pre) && !/[=∈]/.test(rest) ? rest : null; }   // «x ∈ y ∈ …» — bad
    if (kind === "coordinates2" || kind === "coordinates3") { const m = NAME_AT.exec(t) || IMG_AT.exec(t), rest = m && t.slice(m[0].length); return m && !m[3] && !NAME_AT.test(rest) && !IMG_AT.test(rest) ? rest : null; }   // «AB = AB = (…)», «A₁ = A(…)» — bad
    return null;
  }
  function checkAns0(s, v) {
    const r = checkCore(s, v);
    if (r !== "bad" || typeof v !== "string") return r;
    const bare = dropName(s, v);
    return bare !== null && checkCore(s, bare) !== "bad" ? "form" : r;
  }
  /** Текст для «form» через відкинуту назву або null (formHint). Відповіді не розкриває: лише назву з умови. */
  function nameMsg(s, v) {
    const kind = s.answerKind || "number"; if (typeof v !== "string" || !["intervalSet", "coordinates2", "coordinates3"].includes(kind)) return null;
    const bare = dropName(s, v);
    if (bare === null || checkCore(s, v) !== "bad" || checkCore(s, bare) === "bad") return null;
    if (kind === "intervalSet") {
      const names = askedSet(s), lab = names?.label;
      return lab === "range" ? MSG.setRange : lab ? `Проміжок правильний, але тут шукають значення ${lab.replace(/-/g, "−")}.` : MSG.setName;
    }
    const t = norm(v), m = NAME_AT.exec(t), { ask, given, objs } = askedPoint(s) || NO_NAMES, big = m && (m[1] || m[2]);
    return ask ? `Координати правильні, але тут шукають ${ask}.` : !m && IMG_AT.test(t) ? MSG.pointImage : big && given.has(big) ? givenMsg(big) : big && objs.has(big) ? objMsg(big) : MSG.pointName;
  }
  function checkCore(s, v) {
    const kind = s.answerKind || "number", tidy = xs => xs.every(x => x.tidy) ? "ok" : "form", ex = exactKey(s.answer);
    BUDGET = 50000;
    if (kind === "comparison") return /^[<>=]$/.test(String(s.answer).trim()) && String(v).trim() === String(s.answer).trim() ? "ok" : "bad";
    if (kind === "list") {
      const ms = s.multiset === true, a = parseList(s.answer, ex, ms), u = parseList(listPre(s, v), ex, ms);
      if (!a || !u || a.length !== u.length) return "bad";
      if (ms) { const left = [...u]; for (const x of a) { const i = left.findIndex(y => xeq(x.x, y.x)); if (i < 0) return "bad"; left.splice(i, 1); } return tidy(u); }   // мультимножина (п. 8)
      return a.every(x => u.some(y => xeq(x.x, y.x))) ? tidy(u) : "bad";
    }
    if (kind === "coordinates2" || kind === "coordinates3") {
      const sp = symPair(s); if (sp) { const rs = pairSym(s, v, sp); PAIR_LAST = rs && { s, v, rs }; return rs ? worst(rs) : "bad"; }
      const n = kind === "coordinates2" ? 2 : 3, a = parsePoint(s.answer, n, ex), u = parsePoint(v, n, ex, s);
      return a && u && a.every((x, i) => xeq(x.x, u[i].x)) ? tidy(u) : "bad";
    }
    if (kind === "exactRoot") {
      const a = exactOf(s.answer); let u = exactOf(v);
      if (!u && a && xrat(a.x)) { const p = parsePeriodic(v); u = p && ratOf(p); }   // -0,(3) до раціонального ключа (п. 6)
      return a && u && xeq(a.x, u.x) ? tidy([u]) : "bad";
    }
    if (kind === "ratio") {
      const a = parseRatio(s.answer), u = parseRatio(v), B = BigInt;
      if (!a || !u || a.length !== u.length || !a.every((x, i) => B(x.n) * B(a[0].d) * B(u[i].d) * B(u[0].n) === B(u[i].n) * B(u[0].d) * B(x.d) * B(a[0].n))) return "bad";
      return s.reduced && !(u.every(x => !x.frac && x.d === 1) && u.reduce((g, x) => gcd(g, x.n), 0) === 1) ? "form" : "ok";
    }
    if (kind === "intervalSet") {
      const a = parseSet(s.answer, ex), u = parseSet(v, ex, s), same = (x, y) => cmpEnd(x, y) === 0 && typeof x === typeof y;
      if (!a || !u || a.length !== u.length || !a.every((x, i) => same(x.lo, u[i].lo) && same(x.hi, u[i].hi) && x.lc === u[i].lc && x.hc === u[i].hc)) return "bad";
      return tidy(u.flatMap(x => [x.lo, x.hi]).filter(x => typeof x === "object"));
    }
    if (kind === "periodicSet") {   // десяткові дроби, довші за ключ і за 2 знаки, — наближення (arctg 2 ≈ 1,1071487)
      const a = periodicValues(s.answer), u = periodicValues(v);
      return a && u && u.dec <= Math.max(2, a.dec) && samePeriodic(a, u) ? "ok" : "bad";
    }
    if (kind === "expression") {
      const a = exprOf(s.answer); let u = exprOf(v);
      if (!a || !u || (s.form !== undefined && (!EXPR_FORMS.includes(s.form) || a.k === "eq"))) return "bad";
      // стала первісної малою «c» замість «C» (п. 2): значення правильне, але умова просить велику C — "form" з підказкою, не "ok"
      const cu = constC(s, a, u); if (cu && !sameExpr(a, u)) return sameExpr(a, cu) ? "form" : "bad";
      // ключ «y = …», а дитина записала лише праву частину; або навпаки — зайвий «y =» з нової змінної
      if (a.k === "eq" && u.k !== "eq" && a.l.k === "var") u = { k: "eq", l: a.l, r: u };
      else if (a.k !== "eq" && u.k === "eq" && u.l.k === "var" && !varsOf(a).includes(u.l.n)) u = u.r;
      if ((a.k === "eq") !== (u.k === "eq") || !sameExpr(a, u)) return "bad";
      return exprForm(s.form, a, u) ? "ok" : "form";
    }
    if (kind === "factors") { const a = parseFactors(s.answer), u = parseFactors(v); return a !== null && u !== null && a === u ? "ok" : "bad"; }
    if (kind === "divrem") {
      const a = Array.isArray(s.answer) ? parseDivrem(s.answer) : null, u = parseDivrem(v);
      if (!a || !u || u.q !== a.q) return "bad";
      return u.r === null ? (a.r === 0 ? "ok" : "form") : u.r === a.r ? "ok" : "bad";
    }
    if (kind === "time") { const a = TIME_KEY.test(String(s.answer ?? "").trim()) ? parseTime(s.answer) : null, u = parseTime(v); return a !== null && a === u ? "ok" : "bad"; }
    if (kind === "quantity") return checkQty(s, v);
    if (kind !== "number" || (s.tol !== undefined && (!Number.isFinite(s.tol) || s.tol < 0))) return "bad";
    const a = parseAns(typeof s.answer === "number" ? String(s.answer) : s.answer), u = numOf(v);
    if (a && !u && rootNum(v, a)) return "form";   // √576 при ключі 24 (п. 4): значення правильне, корінь не обчислено
    if (!a || !u) return "bad";
    if (s.tol > 0) {
      // Порівнюємо десяткову межу точно: 3,15 при 3,14 ± 0,01 проходить,
      // але навіть дуже мала похибка не перетворюється на ширший допуск через округлення JS.
      const m = String(s.tol).match(/^(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/);
      const shift = Number(m[3] || 0) - (m[2] || "").length;
      const tn = BigInt(m[1] + (m[2] || "")) * 10n ** BigInt(Math.max(0, shift)), td = 10n ** BigInt(Math.max(0, -shift));
      const diff = BigInt(a.n) * BigInt(u.d) - BigInt(u.n) * BigInt(a.d);
      if ((diff < 0n ? -diff : diff) * td > tn * BigInt(a.d) * BigInt(u.d)) return "bad";
    } else if (!sameAns(a, u)) return "bad";
    // decimals — запис: рівно n знаків після коми (37,0 при «округли до десятих»); tol перевіряє значення (п. 4)
    if (s.decimals !== undefined && decCount(u) !== s.decimals) return "form";
    if (s.form === "improper" && (!u.frac || u.whole)) return "form";   // лише неправильний дріб (п. 3)
    if (s.fractionOnly && !u.frac) return "form";
    if (u.frac && ((s.reduced && !u.lowest) || (s.mixed && (Math.abs(u.n) >= u.d && !(u.proper && Math.abs(u.n) % u.d !== 0 && String(numPre(v)).trim().includes(" ")))))) return "form";
    if ((s.reduced || s.mixed) && a.frac && !u.frac) return "form";   // у завданні на дроби «0,4» замість 2/5 — не той запис
    if (u.frac && !u.proper) return "form";          // «1 5/3» — так мішані числа не записують
    return "ok";
  }

  /* ---------- Тренування: пул задач і інтервальне повторення (коробки Лейтнера на рівні теми) ---------- */
  const BOX_DAYS = [1, 3, 7, 16, 35];
  /** У поточному класі видно також закриті теми; у молодших — лише справді пройдені.
      Пули шукаємо заново: доданий пізніше пул відкриється без повторного уроку. */
  function practiceItems(S, subject) {
    return (subject.pools || []).flatMap(pool => {
      const sec = subject.sections.find(s => s.id === pool.section);
      if (!sec || sec.grade > S.grade) return [];
      const ids = new Set((sec.lessons || []).map(l => l.id));
      return pool.items.filter(it => ids.has(it.lesson) && (sec.grade === S.grade || S.lessons?.[it.lesson]?.done))
        .map(it => ({ ...it, key: pool.id + ":" + it.id, pool }));
    });
  }
  const addDay = (day, n) => new Date(Date.parse(day + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
  /** Тему пройдено вперше — перше повторення завтра. */
  function srsInit(S, lesson, day) { if (!S.srs[lesson]) S.srs[lesson] = { box: 0, due: addDay(day, BOX_DAYS[0]) }; }
  /** Підсумок сесії: results [{ lesson, ok }]. Тема без помилок піднімається на коробку, з помилкою — повертається в першу. Повертає [{ lesson, box, was, days }].
      Пройдений урок без запису SRS (пул з'явився після уроку, srsInit не було) стартує з коробки уроку — як тема, пройдена з пулом
      (engine-srs-retest-p3). Наявні записи не змінюються; тема без запису й без пройденого уроку — як раніше, з −1. */
  function srsUpdate(S, results, day) {
    const by = {}; for (const r of results) by[r.lesson] = (by[r.lesson] ?? true) && !!r.ok;
    return Object.entries(by).map(([lesson, ok]) => {
      const was = S.srs[lesson] ? S.srs[lesson].box : S.lessons?.[lesson]?.done ? 0 : -1, box = ok ? Math.min(BOX_DAYS.length - 1, was + 1) : 0;
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
  const ANSWER_KINDS = ["number", "comparison", "list", "factors", "divrem", "ratio", "coordinates2", "coordinates3", "exactRoot", "intervalSet", "expression", "periodicSet", "time", "quantity"];
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
      if (it.srcPage !== undefined && (!Number.isSafeInteger(it.srcPage) || it.srcPage < 1)) E.push(`${w}: srcPage має бути додатним цілим числом`);
      if (it.adapted !== undefined && typeof it.adapted !== "boolean") E.push(`${w}: adapted має бути boolean`);
      if (it.unitForms !== undefined && it.answerKind === "divrem") E.push(`${w}: unitForms не для divrem — лише unit`);
      if (it.unitForms !== undefined && (!Array.isArray(it.unitForms) || it.unitForms.length !== 3 || it.unitForms.some(x => typeof x !== "string" || !x.trim()))) E.push(`${w}: unitForms має містити три непорожні рядки (1 / 2–4 / 5+)`);
      const kind = it.answerKind || "number";
      if (it.answerKind !== undefined && (it.type !== "answer" || !ANSWER_KINDS.includes(it.answerKind))) E.push(`${w}: answerKind має бути ${ANSWER_KINDS.join(" | ")} для answer`);
      for (const flag of ["reduced", "mixed", "fractionOnly"]) {
        if (it[flag] !== undefined && (typeof it[flag] !== "boolean" || it.type !== "answer" || !(kind === "number" || (flag === "reduced" && kind === "ratio")))) E.push(`${w}: ${flag} має бути boolean для числової answer${flag === "reduced" ? " або ratio" : ""}`);
      }
      const sp = it.type === "answer" && kind === "coordinates2" ? symPair(it) : null;
      const formOk = sp ? EXPR_FORMS.includes(it.form) : kind === "expression" ? EXPR_FORMS.includes(it.form) && exprOf(it.answer)?.k !== "eq"
        : kind === "number" ? it.form === "improper" : kind === "quantity" ? it.form === "compound" : false;
      if (it.form !== undefined && (it.type !== "answer" || !formOk)) E.push(`${w}: form (${EXPR_FORMS.join(" | ")}) — лише для expression без «=» або coordinates2 з компонентами-виразами; improper — для number; compound — для quantity`);
      // нові поля (рішення 2026-10-31): improper, decimals, multiset, time, quantity
      const ka = kind === "number" && it.type === "answer" ? parseAns(typeof it.answer === "number" ? String(it.answer) : it.answer) : null;
      if (it.form === "improper" && kind === "number" && (!ka?.frac || ka.whole || Math.abs(ka.n) < ka.d || it.mixed)) E.push(`${w}: form improper — ключ має бути неправильним дробом без цілої частини («7/3»), без mixed`);
      if (it.decimals !== undefined) {
        if (!Number.isInteger(it.decimals) || it.decimals < 0 || it.decimals > 6 || it.type !== "answer" || kind !== "number") E.push(`${w}: decimals — ціле 0–6 для числової answer`);
        else if (typeof it.answer !== "string" || !ka || ka.frac || decCount(ka) !== it.decimals) E.push(`${w}: decimals ${it.decimals} — ключ рядком рівно з ${it.decimals} знаками після коми («37,0»)`);
        if (it.fractionOnly || it.mixed || it.reduced || it.form !== undefined) E.push(`${w}: decimals не поєднується з fractionOnly / mixed / reduced / form`);
      }
      if (it.multiset !== undefined && (typeof it.multiset !== "boolean" || it.type !== "answer" || kind !== "list")) E.push(`${w}: multiset має бути boolean для answerKind list`);
      if ((kind === "time" || kind === "quantity") && it.type === "answer" && (it.unit !== undefined || it.unitForms !== undefined)) E.push(`${w}: ${kind} — без unit/unitForms${kind === "quantity" ? " (одиниці — у units)" : ""}`);
      if (kind === "time" && it.type === "answer" && !TIME_KEY.test(String(it.answer ?? "").trim())) E.push(`${w}: time — ключ «Г:ХХ» або «ГГ:ХХ» у 24-годинному форматі («9:55»)`);
      if (it.units !== undefined && (it.type !== "answer" || kind !== "quantity")) E.push(`${w}: units — лише для answerKind quantity`);
      if (kind === "quantity" && it.type === "answer") {
        const U = qtyUnits(it), key = qtyKey(it);
        if (!U) E.push(`${w}: quantity — units: непорожній масив різних одиниць однієї величини (${QTY.map(([d, t]) => d + ": " + Object.keys(t).join(" ")).join("; ")})`);
        if (!key || (typeof it.answer !== "number" && typeof it.answer !== "string")) E.push(`${w}: quantity — ключ: невід'ємне число в найменшій з units`);
        else if (it.form === "compound" && key[1] !== 1n) E.push(`${w}: quantity form compound — ключ має бути цілим числом найменшої одиниці`);
      }
      if (it.form === "factored" && !sp && exprOf(it.answer) && !isProduct(exprOf(it.answer))) E.push(`${w}: form factored — ключ має бути добутком`);
      if (it.form === "factored" && sp && sp.some(t => varsOf(t).length && !isProduct(t))) E.push(`${w}: form factored — кожна компонента-вираз ключа має бути добутком`);
      if (sp && sp.some(t => t.k === "eq")) E.push(`${w}: coordinates2 — компонента ключа не може бути рівнянням`);
      // точна арифметика ключа — у limited, як у checkAns: вердикт не залежить від порядку вправ і попередніх викликів (BUDGET, STEPS)
      // ключ, важчий за межу перевірки (TOO), тут не оцінюємо: його відхиляє завершальна checkAns(ключ) — «не читається» (рев'ю P3-3)
      if (kind === "intervalSet" && it.type === "answer") { const set = limited(() => parseSet(it.answer, exactKey(it.answer)), () => TOO); if (set && set !== TOO && set.raw !== set.length) E.push(`${w}: intervalSet — частини ключа перетинаються або дотикаються, злий їх`); }
      if (kind === "periodicSet" && it.type === "answer" && (periodicValues(it.answer)?.dec || 0) > 2) E.push(`${w}: periodicSet — десятковий запис ключа довший за 2 знаки, це наближення; запиши точно (π/6, arctg 2)`);
      LIMIT = false;   // exactOf сам ловить межу й дає null, а LIMIT позначає, що null — від межі, не від ключа
      const xr = kind === "exactRoot" && it.type === "answer" ? limited(() => exactOf(it.answer), () => null) : undefined;
      if (xr !== undefined && !(xr === null && LIMIT) && ![...(xr?.x.keys() || [])].some(k => !k.startsWith("1:1:0"))) E.push(`${w}: exactRoot потребує кореня або π у відповіді; раціональне число — answerKind number`);
      if (it.signed !== undefined && (typeof it.signed !== "boolean" || it.type !== "answer" || kind !== "number")) E.push(`${w}: signed має бути boolean для числової answer`);
      if (it.tol !== undefined && (it.type !== "answer" || kind !== "number" || !Number.isFinite(it.tol) || it.tol < 0)) E.push(`${w}: tol має бути скінченним числом ≥ 0 для числової answer`);
      if (it.type === "answer" && checkAns(it, keyInput(it)) !== "ok") E.push(`${w}: answer «${it.answer}» не читається або сам не проходить перевірку (reduced/mixed)`);
    });
    return E;
  }

  /* ---------- Перевірка тесту (валідатор) ---------- */
  /** Помилки в описі діагностики. ctx: { lessons: Map id → {grade} уроків предмета, sections: Map id → {grade}, skills: {} }. */
  function validate(d, ctx) {
    const E = [], T = new Map();
    const younger = [...ctx.lessons].filter(([, L]) => L.grade < d.grade).map(([id]) => id);
    if (!d.id) E.push("немає id"); if (!Number.isInteger(d.grade)) E.push("немає grade");
    if (!d.title || !d.why) E.push("потрібні title і why");
    if (d.signed !== undefined && typeof d.signed !== "boolean") E.push("signed має бути boolean");
    if (!["draft", "verified", "approved"].includes(d.status)) E.push("status має бути draft | verified | approved");
    if (!Array.isArray(d.topics) || !d.topics.length) return E.concat("немає topics");
    if (!Array.isArray(d.items) || !d.items.length) return E.concat("немає items");
    for (const t of d.topics) {
      const w = `тема «${t.id}»`;
      if (!t.id || T.has(t.id)) E.push(`${w}: id порожній або повторюється`);
      T.set(t.id, t);
      if (!t.title) E.push(`${w}: немає title`);
      if (!["pre", "cur"].includes(t.kind)) E.push(`${w}: kind має бути pre | cur`);
      if (t.baseline !== undefined && typeof t.baseline !== "boolean") E.push(`${w}: baseline має бути boolean`);
      if (t.baseline === true) {
        // опора з класів, яких у застосунку немає: виміряне вміння без уроку повторення
        if (t.kind !== "pre") E.push(`${w}: baseline лише для kind: pre`);
        if (t.lessons !== undefined && !(Array.isArray(t.lessons) && !t.lessons.length)) E.push(`${w}: baseline-тема не має lessons (уроків молодших класів немає)`);
        if (!Array.isArray(t.for) || !t.for.length) E.push(`${w}: baseline-тема потребує for — розділи ${d.grade} класу, з яких почати`);
        if (younger.length) E.push(`${w}: baseline заборонено — у предмета є уроки молодших класів (${younger.slice(0, 3).join(", ")}); посилайся на них у lessons`);
      } else if (!Array.isArray(t.lessons) || !t.lessons.length || t.lessons.length > 2) E.push(`${w}: lessons — 1–2 id уроків`);
      for (const l of t.lessons || []) {
        const L = ctx.lessons.get(l);
        if (!L) E.push(`${w}: немає уроку ${l}`);
        else if (t.kind === "pre" && L.grade >= d.grade) E.push(`${w}: урок ${l} не з попередніх класів (kind: pre)`);
        else if (t.kind === "cur" && L.grade !== d.grade) E.push(`${w}: урок ${l} не з ${d.grade} класу (kind: cur)`);
      }
      for (const s of t.for || []) { const X = ctx.sections.get(s); if (!X) E.push(`${w}: for — немає розділу ${s}`); else if (X.grade !== d.grade) E.push(`${w}: for — розділ ${s} не з ${d.grade} класу`);
        else if (t.baseline === true && X.lessons && !X.lessons.length) E.push(`${w}: for — у розділі ${s} немає уроків, нікуди вести`); }
      if (t.for && t.kind !== "pre") E.push(`${w}: for має сенс лише для kind: pre`);
      const n = d.items.filter(it => it.topic === t.id).length;
      if (t.kind === "pre" && n !== 2) E.push(`${w}: потрібно рівно 2 завдання (базове і складніше), є ${n}`);
      if (t.kind === "cur" && n !== 1) E.push(`${w}: потрібно рівно 1 завдання, є ${n}`);
    }
    d.items.forEach((it, i) => {
      const w = `завдання ${i + 1} (${it.type})`;
      if (!T.has(it.topic)) E.push(`${w}: невідома тема «${it.topic}»`);
      if (!DIAG_TYPES.includes(it.type)) E.push(`${w}: тип не дозволено в тесті`);
      if (it.type === "answer" && !DIAG_ANSWER_KINDS.includes(it.answerKind || "number")) E.push(`${w}: answerKind «${it.answerKind}» у тесті не дозволено — лише ${DIAG_ANSWER_KINDS.join(" | ")} (вердикт без фідбеку)`);
      if (it.poll || it.hyp) E.push(`${w}: poll/hyp у тесті не можна`);
      if (!it.title) E.push(`${w}: немає title`);
      if (!it.sk || !ctx.skills[it.sk]) E.push(`${w}: навичка sk «${it.sk}» не оголошена`);
      for (const [flag, types] of [["signed", ["number", "answer"]], ["hideCount", ["shade", "numline"]], ["hideDen", ["fracin"]]]) {
        if (it[flag] !== undefined && (typeof it[flag] !== "boolean" || !types.includes(it.type))) E.push(`${w}: ${flag} має бути boolean для ${types.join(" | ")}`);
      }
      if (it.lesson && !(T.get(it.topic)?.lessons || []).includes(it.lesson)) E.push(`${w}: lesson «${it.lesson}» має бути одним з уроків теми`);
      if (it.rev !== undefined && (!Number.isInteger(it.rev) || it.rev < 2)) E.push(`${w}: rev — ціле ≥ 2: редакція тесту, з якої діє новий зміст завдання`);
    });
    return E;
  }

  return { OK, BAD, SKIP, PASS, DIAG_TYPES, DIAG_ANSWER_KINDS, planFor, practiceItems, nextItem, remaining, topicStatus, level, buildPlan, diagRev, resumeDiag, finishDiag, record, detect, syncPlan, lessonDone, todo, isKnown, work, SK_RETAG, SK_RETAG2, SK_MIGRATIONS, migrateSk, validate,
    parseAns, parseDivrem, checkAns, badHint, hintTexts, keyInput, timeExample, quantityUnits: s => qtyUnits(s)?.units || null, stripUnit, listKey, pairKey, answerSig, formHint, ansText, srcRef, numberKeys, numberHelp, ANSWER_KINDS, BOX_DAYS, srsInit, srsUpdate, isDue, pickSession, POOL_TYPES, validatePool };
})();
