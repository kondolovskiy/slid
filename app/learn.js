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
  /** Зберігає результат тесту й план у стані. Незакриті кроки з помилок в уроках (src: "err") переходять у новий план; решту тест перераховує заново. */
  function finishDiag(S, subjectId, d, res, ctx = {}) {
    const old = planFor(S, subjectId, { ...ctx, grade: d.grade }), plan = buildPlan(d, res, ctx);
    if (old) for (const st of old.steps) if (st.src === "err" && !st.done && (!ctx.hasLesson || ctx.hasLesson(st.l)) && !plan.steps.some(x => x.l === st.l)) plan.steps.push(st);
    S.diag[d.id] = { done: true, date: plan.date, res: { ...res }, topics: plan.topics };
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
      const n = w * b + a; if (![w, a, b, n].every(Number.isSafeInteger)) return null; return { n: m[1] ? -n : n, d: b, frac: true, proper: m[2] === undefined || a < b, lowest: gcd(a, b) === 1 };
    }
    return null;
  }
  const sameAns = (a, b) => BigInt(a.n) * BigInt(b.d) === BigInt(b.n) * BigInt(a.d);

  /* ---------- Точні й символьні відповіді: власний розбір у дерево, жодного eval учнівського вводу ----------
     Вузли: num {v: [p, q] BigInt}, var {n}, pi, add {a: [{s: ±1, e}]}, mul {f: [{d — ділення, e}]}, pow {b, e},
     root {n — показник 2|3|4, a}, abs {a}, fn {fn, a, base — для log_a}, eq {l, r}. */
  const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const FN = ["arcctg", "arcsin", "arccos", "arctan", "arctg", "sqrt", "sin", "cos", "ctg", "cot", "tan", "tg", "ln", "lg", "log", "pi"];
  const norm = v => String(v ?? "").replace(/(\d)\.(?=\d)/g, "$1,").replace(/[−–—]/g, "-").replace(/[*×∙⋅]/g, "·").replace(/÷/g, ":").replace(/[  ]/g, " ")
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
  const bgcd = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
  // Межа розміру й часу точної арифметики: вкладені степені ((x+1)^12)^12… дають числа на мільйони біт.
  // Переповнення кидає TOO; checkAns відповідає «bad», точне порівняння виразів переходить на числове.
  const TOO = { tooBig: true }, BIG = 1n << 2048n;
  let DEADLINE = Infinity;
  const guard = () => { if (Date.now() > DEADLINE) throw TOO; };
  const Q = (p, q = 1n) => { if (q === 0n) return null; if (q < 0n) { p = -p; q = -q; } if (p > BIG || -p > BIG || q > BIG) throw TOO; const g = bgcd(p, q) || 1n; return [p / g, q / g]; };
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
    function term() {
      const f = [];
      for (let d = false; ; ) {
        const e = power(); if (!e) return null; f.push({ d, e });
        if (take("·")) d = false; else if (take("/") || take(":")) d = true; else if (implicit(peek())) d = false; else break;
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
    for (let p = 2n; p * p <= rr; p++) { let e = 0; while (rr % p === 0n) { rr /= p; e++; } if (e) fs.push([p, e]); }
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
    if (a.size * b.size > 1024 || (BUDGET -= a.size * b.size) < 0) return null;
    let m = new Map();
    for (const [ka, qa] of a) for (const [kb, qb] of b) {
      const [na, ra, pa] = ka.split(":"), [nb, rb, pb] = kb.split(":"), k = +pa + +pb;
      let red;
      if (na === "1") red = [[1n, 1n], +nb, BigInt(rb)]; else if (nb === "1") red = [[1n, 1n], +na, BigInt(ra)];
      else if (na === nb) red = rootRed(+na, BigInt(ra) * BigInt(rb)); else return null;   // корені різних степенів не змішуємо
      if (!red || k > 3) return null;
      m = xadd(m, X(qmul(qmul(qa, qb), red[0]), red[1], red[2], k));
    }
    return m.size > 64 ? null : m;
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
     і раціональна частина — лише раз; або (така сума) / ціле. Інакше значення правильне, але запис не спрощено (√3+√3, 2√3·√6, 32−24). */
  const ratLit = e => e.k === "num" || (e.k === "mul" && e.f.every(t => t.e.k === "num") && e.f.length === 2 && e.f[1].d);   // 2 або (1/3)
  function canonTerm(t) {
    let num = 0, root = 0, pi = 0, den = 0;
    for (const { d, e } of t.k === "mul" ? t.f : [{ d: false, e: t }]) {
      if (d) { if (e.k !== "num" || e.v[1] !== 1n || ++den > 1) return false; }
      else if (ratLit(e)) { if (++num > 1) return false; } else if (e.k === "root") { if (++root > 1) return false; } else if (e.k === "pi") { if (++pi > 1) return false; } else return false;
    }
    return true;
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
    let sum = 0, num = 0, den = 0;
    for (const { d, e } of u.f) {
      if (d) { if (natNum(e) === null || natNum(e) < 2n || ++den > 1) return false; }
      else if (e.k === "add") { if (++sum > 1 || !canonSum(e)) return false; }
      else if (ratLit(e)) { if (++num > 1) return false; } else return false;
    }
    return sum === 1;
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
  const elemOf = (v, exact) => exact ? exactOf(v) : ratOf(parseAns(v));
  /** «±» і «∓» → усі варіанти знаків (не більше 4 знаків у записі). */
  function expandPM(t) {
    const n = (t.match(/[±∓]/g) || []).length; if (n > 4) return [];
    return Array.from({ length: 2 ** n }, (_, mask) => { let j = 0; return t.replace(/[±∓]/g, c => { const plus = !((mask >> j++) & 1); return (c === "±") === plus ? "+" : "-"; }); });
  }
  // У списку «;» відділяє числа з десятковою комою; без «;» кома є роздільником. Елементи — числа або точні значення (√, π, ±).
  function parseList(v, exact) {
    const parts = Array.isArray(v) ? v : String(v ?? "").split(/[;\n]/.test(String(v)) ? /[;\n]/ : /,/);
    const values = parts.flatMap(p => exact && /[±∓]/.test(String(p)) ? expandPM(String(p)) : [p]).map(p => elemOf(p, exact));
    if (!values.length || values.some(x => !x) || values.some((x, i) => values.slice(0, i).some(y => xeq(x.x, y.x)))) return null;
    return values;
  }
  /** Впорядковані координати (3; −2) / A(3; -2) / [3, -2]: рівно n компонент, порядок і знак важливі. */
  function parsePoint(v, n, exact) {
    let parts = Array.isArray(v) ? v.map(String) : null;
    if (!parts) { let t = norm(v).replace(/^[A-Za-z]\s*(?=\()/, ""); const m = t.match(/^\((.*)\)$/s); if (m) t = m[1]; parts = t.split(t.includes(";") ? ";" : ","); }
    const xs = parts.length === n ? parts.map(p => elemOf(String(p).replace(/^\s*-\s+/, "-"), exact)) : [];
    return xs.length && xs.every(Boolean) ? xs : null;
  }
  /** Відношення a : b (: c) додатних чисел; порядок членів важливий. */
  function parseRatio(v) {
    const parts = Array.isArray(v) ? v.map(String) : norm(v).split(/[:∶]/);
    const xs = parts.length >= 2 && parts.length <= 3 ? parts.map(p => parseAns(String(p).trim())) : [];
    return xs.length && xs.every(x => x && x.proper && x.n > 0) ? xs : null;
  }
  /** Проміжок або об'єднання: (-∞; 3], [1; 2) ∪ {5}, ∅, R. Повертає канонічний відсортований список злитих проміжків або null. */
  function parseSet(v, exact) {
    const t = norm(v).replace(/[Øø]/g, "∅").replace(/^[A-Za-z](?:\s*\([A-Za-z]\))?\s*[=∈]\s*/, "");
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
      t = norm(t).replace(/[,;]?\s*(?:де\s*)?[kmn]\s*[∈є]\s*[ZzℤΖ]\s*\.?$/, "");
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
    let ex; try { ex = sameExact(a, b); } catch (e) { if (e !== TOO) throw e; ex = null; DEADLINE = Date.now() + 400; }
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
    if (a.size * b.size > 400 || (BUDGET -= a.size * b.size) < 0) return null;
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
  function primitive(n) {
    for (const { d, e } of factorsOf(n)) {
      if (isConst(e)) continue;
      if (d) return false;                      // множник зі змінною в знаменнику — це не розклад
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
  /** Пояснення для результату "form": що саме не так із записом. */
  function formHint(s, v) {
    const kind = s.answerKind || "number";
    if (kind === "number") { const u = parseAns(v); return !u?.frac ? "Значення правильне. Запиши відповідь звичайним дробом." : s.reduced && !u.lowest ? "Значення правильне, але дріб ще можна скоротити." : "Значення правильне. Запиши відповідь мішаним числом: ціла частина, пробіл, дріб."; }
    if (kind === "divrem") return "Неповну частку знайдено. Допиши остачу: кнопка «ост.» і число.";
    if (kind === "ratio") return "Відношення правильне. Запиши його натуральними числами без спільного дільника, наприклад 2 : 3.";
    if (kind === "expression") return { expanded: "Вираз правильний. Розкрий дужки й зведи подібні доданки.", factored: "Вираз правильний. Розклади його на множники до кінця.",
      reduced: "Вираз правильний. Скороти дріб.", simplified: "Вираз правильний, але його можна спростити." }[s.form] || "Спробуй ще раз.";
    return "Значення правильне, але запис не спрощено: обчисли, зведи подібні, винеси множник з-під кореня й позбудься кореня в знаменнику.";
  }
  /** Відбиток записаної відповіді для другої спроби: однакові відбитки — та сама відповідь іншим записом («5», «05», « 5 »),
      і повторна перевірка нічого б не змінила. Число й частка з остачею — за розібраним значенням разом із ознаками запису,
      від яких залежить "form" (дріб, нескоротність, мішане число, пробіл у дробу). Інші answerKind і нерозібраний запис —
      нормалізований рядок: пробіли згорнуто, біля знаків пунктуації й дій прибрано, «−» → «-», крапка → кома.
      Плеєр усе одно не блокує відповідь, яку checkAns приймає (app.js sameAsTried), тож відбиток лише економить спробу. */
  function answerSig(s, v) {
    const kind = s?.answerKind || "number", t = String(v ?? "").replace(/\s+/g, " ").trim();
    if (kind === "number") {
      const u = parseAns(t) || parseAns(t.replace(/[,.]$/, ""));   // «5,» — недописана кома, те саме число
      if (u) { const g = gcd(u.n, u.d) || 1; return `n:${u.n / g}/${u.d / g}` + (u.frac ? `|f${+u.lowest}${+u.proper}${+/ /.test(t)}` : ""); }
    }
    if (kind === "divrem") { const u = parseDivrem(t); if (u) return `d:${u.q}|${u.r}`; }
    return "s:" + t.replace(/[−–—]/g, "-").replace(/\./g, ",").replace(/ ?([;:,()[\]{}+\-·*×/^=<>∪]) ?/g, "$1");
  }
  /** Ключ для показу «Правильна відповідь». */
  function ansText(s) {
    const a = s.answer, kind = s.answerKind || "number";
    if (!Array.isArray(a)) return String(a) + (kind === "periodicSet" ? ", k ∈ ℤ" : "");
    if (kind === "divrem") return `${a[0]} (ост. ${a[1]})`;
    if (kind === "ratio") return a.join(" : ");
    if (kind === "coordinates2" || kind === "coordinates3") return "(" + a.join("; ") + ")";
    return a.join("; ") + (kind === "periodicSet" ? ", k ∈ ℤ" : "");
  }
  /** Посилання на джерело вправи: «№1» + srcPage → «№1, с. 56»; якщо сторінка вже є в посиланні («с. 56, №1»), srcPage не дописуємо (CONTENT_SCHEMA §10). */
  function srcRef(ref, page) {
    const r = String(ref ?? "").trim();
    if (page === undefined || page === null || /(^|[^\p{L}])с\.\s*\d/u.test(r)) return r;
    return r ? `${r}, с. ${page}` : `с. ${page}`;
  }
  /** Які кнопки й підказку показати під полем числової відповіді (answerKind number), щоб не підказувати
      учню 4 класу дроби й мінус, яких у програмі ще немає. grade — клас вправи; signed — розділ зі знаковими числами.
      «−»: прапорець signed, від'ємний ключ або 6+ клас (від'ємні числа — 6 клас: у класі знак з'являється завжди й не видає відповіді).
      «/» і пробіл (дроби, мішані числа): дробовий ключ, прапорці fractionOnly / mixed / reduced або 5+ клас (звичайні дроби).
      dec: десятковий ключ без дробових кнопок — підказка про кому. */
  function numberKeys(s, grade, signed) {
    const a = String(s.answer ?? "").replace(/[−–]/g, "-").trim(), g = Number(grade) || 0;
    const minus = !!s.signed || !!signed || /^-/.test(a) || g >= 6;
    const frac = /\//.test(a) || !!(s.fractionOnly || s.mixed || s.reduced) || g >= 5;
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
      answerKind: number (типово), comparison (< > =), list (без порядку і повторів), factors (прості множники),
      divrem (частка й остача; лише частка при ненульовій остачі — "form", при нульовій — "ok"),
      ratio, coordinates2, coordinates3, exactRoot, intervalSet, expression, periodicSet (docs/CONTENT_SCHEMA.md §10).
      Числа: reduced — нескоротний дріб; mixed — виділити цілу частину; fractionOnly — лише звичайний/мішаний дріб; tol — абсолютна похибка. */
  function checkAns(s, v) {
    DEADLINE = Date.now() + 800;
    try { return checkAns0(s, v); } catch (e) { if (e === TOO) return "bad"; throw e; } finally { DEADLINE = Infinity; }
  }
  /** Ключ answerKind "list" так, як його розбирає checkAns (той самий parseList і exactKey): для кожного елемента
      { exact — точний розбір (корені/π), root — є радикал ⁿ√ з n ≥ 2, tidy — канонічний запис, approx — наближене значення }.
      null — не list або ключ не розібрано. Потрібно tools/personalization-qa.mjs (list із коренями закриває формат exactRoot). */
  function listKey(s) {
    if ((s?.answerKind || "number") !== "list") return null;
    DEADLINE = Date.now() + 800; BUDGET = 50000;
    try {
      const ex = exactKey(s.answer), a = parseList(s.answer, ex);
      return a && a.map(x => ({ exact: ex, root: [...x.x.keys()].some(k => !k.startsWith("1:")), tidy: x.tidy, approx: xnum(x.x) }));
    } catch (e) { if (e === TOO) return null; throw e; } finally { DEADLINE = Infinity; }
  }
  function checkAns0(s, v) {
    const kind = s.answerKind || "number", tidy = xs => xs.every(x => x.tidy) ? "ok" : "form", ex = exactKey(s.answer);
    BUDGET = 50000;
    if (kind === "comparison") return /^[<>=]$/.test(String(s.answer).trim()) && String(v).trim() === String(s.answer).trim() ? "ok" : "bad";
    if (kind === "list") {
      const a = parseList(s.answer, ex), u = parseList(v, ex);
      return a && u && a.length === u.length && a.every(x => u.some(y => xeq(x.x, y.x))) ? tidy(u) : "bad";
    }
    if (kind === "coordinates2" || kind === "coordinates3") {
      const n = kind === "coordinates2" ? 2 : 3, a = parsePoint(s.answer, n, ex), u = parsePoint(v, n, ex);
      return a && u && a.every((x, i) => xeq(x.x, u[i].x)) ? tidy(u) : "bad";
    }
    if (kind === "exactRoot") { const a = exactOf(s.answer), u = exactOf(v); return a && u && xeq(a.x, u.x) ? tidy([u]) : "bad"; }
    if (kind === "ratio") {
      const a = parseRatio(s.answer), u = parseRatio(v), B = BigInt;
      if (!a || !u || a.length !== u.length || !a.every((x, i) => B(x.n) * B(a[0].d) * B(u[i].d) * B(u[0].n) === B(u[i].n) * B(u[0].d) * B(x.d) * B(a[0].n))) return "bad";
      return s.reduced && !(u.every(x => !x.frac && x.d === 1) && u.reduce((g, x) => gcd(g, x.n), 0) === 1) ? "form" : "ok";
    }
    if (kind === "intervalSet") {
      const a = parseSet(s.answer, ex), u = parseSet(v, ex), same = (x, y) => cmpEnd(x, y) === 0 && typeof x === typeof y;
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
    if (kind !== "number" || (s.tol !== undefined && (!Number.isFinite(s.tol) || s.tol < 0))) return "bad";
    const a = parseAns(typeof s.answer === "number" ? String(s.answer) : s.answer), u = parseAns(v);
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
    if (s.fractionOnly && !u.frac) return "form";
    if (u.frac && ((s.reduced && !u.lowest) || (s.mixed && (Math.abs(u.n) >= u.d && !(u.proper && Math.abs(u.n) % u.d !== 0 && String(v).trim().includes(" ")))))) return "form";
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
  const ANSWER_KINDS = ["number", "comparison", "list", "factors", "divrem", "ratio", "coordinates2", "coordinates3", "exactRoot", "intervalSet", "expression", "periodicSet"];
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
      if (it.form !== undefined && (kind !== "expression" || !EXPR_FORMS.includes(it.form) || exprOf(it.answer)?.k === "eq")) E.push(`${w}: form (${EXPR_FORMS.join(" | ")}) — лише для expression без «=»`);
      if (it.form === "factored" && exprOf(it.answer) && !isProduct(exprOf(it.answer))) E.push(`${w}: form factored — ключ має бути добутком`);
      if (kind === "intervalSet" && it.type === "answer") { BUDGET = 50000; const set = parseSet(it.answer, exactKey(it.answer)); if (set && set.raw !== set.length) E.push(`${w}: intervalSet — частини ключа перетинаються або дотикаються, злий їх`); }
      if (kind === "exactRoot" && it.type === "answer" && ![...(exactOf(it.answer)?.x.keys() || [])].some(k => !k.startsWith("1:1:0"))) E.push(`${w}: exactRoot потребує кореня або π у відповіді; раціональне число — answerKind number`);
      if (it.signed !== undefined && (typeof it.signed !== "boolean" || it.type !== "answer" || kind !== "number")) E.push(`${w}: signed має бути boolean для числової answer`);
      if (it.tol !== undefined && (it.type !== "answer" || kind !== "number" || !Number.isFinite(it.tol) || it.tol < 0)) E.push(`${w}: tol має бути скінченним числом ≥ 0 для числової answer`);
      if (it.type === "answer" && checkAns(it, typeof it.answer === "number" ? String(it.answer).replace(".", ",") : it.answer) !== "ok") E.push(`${w}: answer «${it.answer}» не читається або сам не проходить перевірку (reduced/mixed)`);
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
      if (it.poll || it.hyp) E.push(`${w}: poll/hyp у тесті не можна`);
      if (!it.title) E.push(`${w}: немає title`);
      if (!it.sk || !ctx.skills[it.sk]) E.push(`${w}: навичка sk «${it.sk}» не оголошена`);
      for (const [flag, types] of [["signed", ["number"]], ["hideCount", ["shade", "numline"]], ["hideDen", ["fracin"]]]) {
        if (it[flag] !== undefined && (typeof it[flag] !== "boolean" || !types.includes(it.type))) E.push(`${w}: ${flag} має бути boolean для ${types.join(" | ")}`);
      }
      if (it.lesson && !(T.get(it.topic)?.lessons || []).includes(it.lesson)) E.push(`${w}: lesson «${it.lesson}» має бути одним з уроків теми`);
    });
    return E;
  }

  return { OK, BAD, SKIP, PASS, DIAG_TYPES, planFor, practiceItems, nextItem, remaining, topicStatus, level, buildPlan, finishDiag, record, detect, syncPlan, lessonDone, todo, isKnown, validate,
    parseAns, parseDivrem, checkAns, listKey, answerSig, formHint, ansText, srcRef, numberKeys, ANSWER_KINDS, BOX_DAYS, srsInit, srsUpdate, isDue, pickSession, POOL_TYPES, validatePool };
})();
