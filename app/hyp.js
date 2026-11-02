/* Слід · гіпотези «обчислення чи поняття» (математика), етапи E1–E2 — чистий модуль без DOM і без сховища.
   Дизайн: docs/design/diag-hypothesis-math.md (редакція 4.1). Для кожної помилки першої спроби — розподіл по класах
   slip / calc / rule / pre / unk (§1.1) за сигналами S1–S6, S8–S14 (§1.2) і правилами P1–P10, P2′ (§1.3); подальші відповіді
   на ту саму пару (урок, sk) — перевірки видів A, D≤, D>, D°, Dg, F, P (§2.1, §2.3), оновлення за таблицею L (§2.4), закриття.
   Модуль нічого не пише: tracker().onAnswer(...) повертає події [{ type, d }] (hyp_open / hyp_probe / hyp_close / hyp_fmt, §3.2),
   які app.js (етап E2) передасть у EV.log. Розбір і перевірка записів — app/learn.js (SLID_LEARN: checkAns, numVal, formCode…).
   Етап E2 (тіньовий режим): app.js викликає трекер після setDock і пише події через EV.log, а стан — в окремий ключ localStorage
   «slid.hyp» (state() / load() / mergeState(); сховищем керує app.js). На екран, slid.v1, record/detect/SRS/план модуль не впливає.
   Метрики рахує лише tools/hyp-replay.mjs з журналу тим самим модулем. */
window.SLID_HYP = (() => {
  const RULES_VERSION = "hyp-1";
  const CLS = ["slip", "calc", "rule", "pre", "unk"];
  const LEARN = () => window.SLID_LEARN;
  const r3 = x => Math.round(x * 1000) / 1000;
  const DAY = 864e5;

  /* ---------- Параметри rv hyp-1 (початкові припущення, калібрує E4; зміна будь-якого — нова RULES_VERSION) ---------- */
  // Апріорні розподіли правил P3–P10 (§1.3), порядок CLS. P2/P2′ обчислюються з кількості класів у mis.
  const PRIOR = {
    P3: [.05, .10, .70, .10, .05], P4: [.05, .10, .65, .15, .05], P5: [.60, .20, .10, .05, .05], P6: [.40, .15, .35, .05, .05],
    P7: [.15, .10, .60, .10, .05], P8: [.20, .50, .15, .05, .10], P9: [0, .05, .15, .30, .50], P10: [.10, .15, .25, .15, .35]
  };
  // P(перевірка ✔ | клас) за видами (§2.4). A розподіл не оновлює.
  const LIK = {
    "D≤": [.90, .85, .20, .25, .50], "D>": [.70, .60, .10, .10, .30], "D°": [.90, .85, .45, .40, .55],
    Dg: [.90, .85, .30, .30, .50], F: [.90, .90, .25, .35, .50], P: [.90, .90, .75, .20, .50]
  };
  const TH = {
    dtFast: 2500,            // S11: перша спроба швидша — на рівні ≥ 2
    near: 0.1, far: 0.5,     // S6 (частка ключа), S14
    patDays: 7, preDays: 14, // S8, S12
    expDays: 7,              // без перевірки — expired
    close: 0.8,              // confirmed: pexec ≥ 0,8 (обчислення) або ≤ 0,2 (поняття/передумова) після чистої перевірки
    pass: 0.65,              // superseded: урок пройдено знову з ≥ 65 %
    seenDays: 3,             // D°: ≥ 3 дні від показу розв'язання цієї вправи
    genDays: 35, genMin: 20, // Dg: набір не показано за 35 днів, у вправи ≥ 20 наборів
    unsure: [0.2, 0.8], topMin: 0.45,
    mods: { s9: 0.5, s10ok: 2, s10okHint: 1.5, s10bad: 1.5, s11: 1.5, s12: 2.5 },
    sameRule: 2,             // L(✘ | rule) × 2, якщо помилка перевірки — той самий код mis/мутанта
    cap: { open: 50, errs: 200, gens: 10, shown: 400, pres: 12, closed: 200 }
  };

  /* ---------- Дрібні допоміжні ---------- */
  const dayNum = d => Math.floor(Date.parse(d + "T00:00:00Z") / DAY);
  const dayDiff = (a, b) => dayNum(b) - dayNum(a);
  const dist = arr => Object.fromEntries(CLS.map((c, i) => [c, arr[i]]));
  const norm1 = arr => { const s = arr.reduce((a, b) => a + b, 0) || 1; return arr.map(x => x / s); };
  const round = arr => arr.map(r3);
  const pexecOf = arr => r3(arr[0] + arr[1]);
  /** top — найімовірніший клас (за порядком CLS при рівності); p < 0,45 → unk (§1.3). */
  function topOf(arr) { let i = 0; arr.forEach((x, k) => { if (x > arr[i]) i = k; }); return { top: arr[i] < TH.topMin ? "unk" : CLS[i], p: r3(arr[i]) }; }
  const clsOf = code => { const c = String(code).split(":")[0]; return CLS.includes(c) && c !== "unk" ? c : null; };
  const pureTitle = s => typeof s?.title === "string" && /^\s*\$[^$]+\$\s*$/.test(s.title) ? s.title.trim().slice(1, -1) : null;
  const kindOf = s => s?.type === "answer" ? (s.answerKind || "number") : s?.type === "number" ? "number" : null;

  /* ---------- Раціональні числа (BigInt) для мутантів ---------- */
  const bg = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
  const Qn = (p, q = 1n) => { if (q === 0n) return null; if (q < 0n) { p = -p; q = -q; } const g = bg(p, q) || 1n; return [p / g, q / g]; };
  const qadd = (a, b, s = 1n) => Qn(a[0] * b[1] + s * b[0] * a[1], a[1] * b[1]);
  const qmul = (a, b) => Qn(a[0] * b[0], a[1] * b[1]);
  const qdiv = (a, b) => b[0] === 0n ? null : Qn(a[0] * b[1], a[1] * b[0]);
  const BIGQ = 1n << 256n;
  function qpow(a, e) {
    if (e[1] !== 1n) return null;                        // дробовий показник — не обчислюємо (27^(2/3))
    let n = e[0]; const neg = n < 0n; if (neg) n = -n; if (n > 64n) return null;
    let r = [1n, 1n]; for (let i = 0n; i < n; i++) { r = qmul(r, a); if (r[0] > BIGQ || -r[0] > BIGQ || r[1] > BIGQ) return null; }
    return neg ? (r[0] === 0n ? null : Qn(r[1], r[0])) : r;
  }
  const qeq = (a, b) => !!a && !!b && a[0] === b[0] && a[1] === b[1];
  const finQ = q => { let d = q; for (const f of [2n, 5n]) while (d % f === 0n) d /= f; return d === 1n; };
  /** Раціональне → запис змісту: ціле, десятковий дріб з комою (скінченний, якщо frac не вимагає звичайного дробу) або «p/q». */
  function qtext([p, q], frac = false) {
    if (q === 1n) return String(p);
    if (!frac && finQ(q)) { let k = 0n, d = q; while (10n ** k % d) k++; const n = p * (10n ** k / q), neg = n < 0n, s = String(neg ? -n : n).padStart(Number(k) + 1, "0");
      return (neg ? "-" : "") + s.slice(0, -Number(k)) + "," + s.slice(-Number(k)); }
    return `${p}/${q}`;
  }

  /* ---------- Розбір чистого виразу умови (§1.4: лише title = «$…$») ----------
     Мова змісту: + − · * × : (ділення), / (дріб), ^, дужки, десяткова кома, однолітерні змінні, неявне множення «2m».
     Вузли: n {v: [p, q]}, v {n}, neg {a}, бінарні "+", "-", "*", ":", "/", "^" {a, b}; par: true — вузол узято в дужки. */
  function lexT(src) {
    const t = String(src).replace(/\\cdot|\\times|[·×∙⋅]/g, "*").replace(/[−–—]/g, "-").replace(/\\left|\\right/g, "").replace(/\\,|\\ /g, " ");
    const out = []; let i = 0;
    while (i < t.length) {
      const c = t[i];
      if (/\s/.test(c)) { i++; continue; }
      const m = t.slice(i).match(/^\d+(?:[,.]\d+)?/);
      if (m) { const [w, f = ""] = m[0].split(/[,.]/); out.push({ t: "n", v: Qn(BigInt(w + f), 10n ** BigInt(f.length)) }); i += m[0].length; continue; }
      if (/[a-zA-Z]/.test(c)) { if (/[a-zA-Z]/.test(t[i + 1] || "")) return null; out.push({ t: "v", v: c }); i++; continue; }
      if ("+-*:/^()".includes(c)) { out.push({ t: c }); i++; continue; }
      return null;
    }
    return out;
  }
  /** ltr: true — дії + − · : зліва направо без пріоритету (мутант ord-ltr); дріб «/» і степінь лишаються тісними. */
  function parseT(src, ltr = false) {
    const tk = lexT(src); if (!tk || !tk.length) return null;
    let i = 0;
    const peek = () => tk[i] && tk[i].t, take = () => tk[i++];
    function atom() {
      const x = take(); if (!x) throw 0;
      if (x.t === "n") return { k: "n", v: x.v };
      if (x.t === "v") return { k: "v", n: x.v };
      if (x.t === "(") { const e = expr(); if (take()?.t !== ")") throw 0; return { ...e, par: true }; }
      throw 0;
    }
    function pow() {
      const b = atom();
      if (peek() === "^") { take(); const e = peek() === "-" ? (take(), { k: "neg", a: pow() }) : pow(); return { k: "^", a: b, b: e }; }
      return b;
    }
    function frac() { let a = pow(); while (peek() === "/") { take(); a = { k: "/", a, b: pow() }; } return a; }
    function unary() { if (peek() === "-") { take(); return { k: "neg", a: unary() }; } if (peek() === "+") { take(); return unary(); } return frac(); }
    const implicit = () => ["n", "v", "("].includes(peek());
    function term() {
      let a = unary();
      for (;;) {
        if (peek() === "*" || peek() === ":") { const op = take().t; a = { k: op, a, b: unary() }; }
        else if (implicit()) a = { k: "*", a, b: frac() };
        else return a;
      }
    }
    function expr() {
      if (ltr) {
        let a = unary();
        for (;;) {
          if (["+", "-", "*", ":"].includes(peek())) { const op = take().t; a = { k: op, a, b: unary() }; }
          else if (implicit()) a = { k: "*", a, b: frac() };
          else return a;
        }
      }
      let a = term();
      while (peek() === "+" || peek() === "-") { const op = take().t; a = { k: op, a, b: term() }; }
      return a;
    }
    try { const e = expr(); return i === tk.length ? e : null; } catch (e) { return null; }
  }
  const hasVar = n => n.k === "v" || ["a", "b"].some(k => n[k] && hasVar(n[k]));
  function evalT(n) {
    switch (n.k) {
      case "n": return n.v;
      case "v": return null;
      case "neg": { const a = evalT(n.a); return a && [-a[0], a[1]]; }
      case "+": case "-": { const a = evalT(n.a), b = evalT(n.b); return a && b && qadd(a, b, n.k === "+" ? 1n : -1n); }
      case "*": { const a = evalT(n.a), b = evalT(n.b); return a && b && qmul(a, b); }
      case ":": case "/": { const a = evalT(n.a), b = evalT(n.b); return a && b && qdiv(a, b); }
      case "^": { const a = evalT(n.a), b = evalT(n.b); return a && b && qpow(a, b); }
    }
    return null;
  }
  const PREC = { "+": 1, "-": 1, "*": 2, ":": 2, "/": 3, neg: 2, "^": 4, n: 5, v: 5 };
  /** Дерево → запис для checkAns (answerKind expression / number). */
  function printT(n) {
    const wrap = (c, need) => need ? `(${printT(c)})` : printT(c);
    switch (n.k) {
      case "n": return n.v[0] < 0n ? `(${qtext(n.v)})` : qtext(n.v);
      case "v": return n.n;
      case "neg": return "-" + wrap(n.a, PREC[n.a.k] <= 2);
      case "^": return wrap(n.a, PREC[n.a.k] < 5 || (n.a.k === "n" && n.a.v[1] !== 1n)) + "^" + wrap(n.b, PREC[n.b.k] < 5);
      default: { const p = PREC[n.k]; return wrap(n.a, PREC[n.a.k] < p) + ({ "*": "*", ":": "/", "/": "/" }[n.k] || ` ${n.k} `) + wrap(n.b, PREC[n.b.k] <= p); }
    }
  }
  const intLit = n => n && n.k === "n" && n.v[1] === 1n;
  const intVal = n => intLit(n) ? n.v[0] : n && n.k === "neg" && intLit(n.a) ? -n.a.v[0] : null;
  const simpleFrac = n => n && n.k === "/" && intLit(n.a) && intLit(n.b) ? [n.a.v[0], n.b.v[0]] : null;
  /** Замінює вузли, для яких f повертає не undefined (знизу догори); changed — чи щось замінено. */
  function mapT(n, f, st) {
    const m = { ...n }; if (n.a) m.a = mapT(n.a, f, st); if (n.b) m.b = mapT(n.b, f, st);
    const r = f(m); if (r !== undefined && r !== null) { st.changed = true; return r; } return m;
  }
  const sameT = (a, b) => printT(a) === printT(b);
  /** Каталог мутантів-правил рушія (§1.4). Кожен: дерево правильного виразу → дерево хибного або null (правило не застосовне). */
  const MUTANTS = [
    ["ord-ltr", (t, src) => { const l = parseT(src, true); return l && !hasVar(l) && !sameT(l, t) ? l : null; }],
    ["frac-add-naive", t => { if (t.k !== "+" && t.k !== "-") return null; const a = simpleFrac(t.a), b = simpleFrac(t.b); if (!a || !b) return null;
      const s = t.k === "+" ? 1n : -1n, q = Qn(a[0] + s * b[0], a[1] + s * b[1]); return q && { k: "n", v: q }; }],
    ["frac-mul-num", t => { if (t.k !== "+") return null; const a = simpleFrac(t.a), b = simpleFrac(t.b); if (!a || !b) return null;
      const q = Qn(a[0] * b[0], a[1] === b[1] ? a[1] : a[1] * b[1]); return q && { k: "n", v: q }; }],
    ["pow-mul-exp", t => { const st = {}; const r = mapT(t, n => { if (n.k !== "*" || n.a.k !== "^" || n.b.k !== "^" || !sameT(n.a.a, n.b.a)) return;
      const m = intVal(n.a.b), k = intVal(n.b.b); if (m === null || k === null) return; return { k: "^", a: n.a.a, b: { k: "n", v: [m * k, 1n] } }; }, st); return st.changed ? r : null; }],
    ["pow-as-mul", t => { const st = {}; const r = mapT(t, n => { if (n.k !== "^") return; const e = intVal(n.b); if (e === null || e < 2n) return; return { k: "*", a: { ...n.a, par: true }, b: { k: "n", v: [e, 1n] } }; }, st); return st.changed ? r : null; }],
    // (−a)ⁿ без урахування парності: дитина пише −aⁿ. Для непарного n це правильне значення — такий мутант дає ключ і не застосовується.
    ["neg-pow-sign", t => { const st = {}; const r = mapT(t, n => { if (n.k !== "^" || !n.a.par || n.a.k !== "neg" || intVal(n.b) === null) return; return { k: "neg", a: { k: "^", a: n.a.a, b: n.b } }; }, st); return st.changed ? r : null; }],
    ["neg-exp", t => { const st = {}; const r = mapT(t, n => { if (n.k !== "^" || n.b.k !== "neg") return; return { k: "neg", a: { k: "^", a: n.a, b: n.b.a } }; }, st); return st.changed ? r : null; }]
  ];
  /** Хибні відповіді, які дають мутанти на цій вправі: [{ code, v }]. Лише number/answer (number, exactRoot, expression) з title = «$…$»;
      мутант, що дає ключ (checkAns → ok чи form), не застосовується. */
  function mutants(s) {
    const src = pureTitle(s), kind = kindOf(s); if (!src || !["number", "exactRoot", "expression"].includes(kind)) return [];
    const t = parseT(src); if (!t) return [];
    const out = [];
    for (const [code, f] of MUTANTS) {
      const m = f(t, src); if (!m) continue;
      let v;
      if (hasVar(m)) { if (kind !== "expression") continue; v = printT(m); }
      else { const q = evalT(m); if (!q) continue; v = qtext(q, src.includes("/")); }   // умова з дробами — відповідь дробом
      if (["ok", "form"].includes(LEARN().checkAns(s, v))) continue;
      if (!out.some(o => o.v === v)) out.push({ code, v });
    }
    return out;
  }

  /* ---------- Збіг запису з розміченою хибною відповіддю (§5.2) ---------- */
  const ROOTISH = /[√∛∜π]|sqrt|pi/;
  /** raw ↔ { v }: { how: "exact" } | { how: "form", mf: 1 } | { how: "approx" } | null. */
  function misMatch(s, v, raw) {
    const LN = LEARN(); if (raw === null || raw === undefined || String(raw).trim() === "") return null;
    const kind = kindOf(s) || "number", k = kind === "number" && ROOTISH.test(String(v)) ? "exactRoot" : kind;
    const r = LN.checkAns({ ...s, answerKind: k, answer: v }, String(raw));
    if (r === "ok") return { how: "exact" };
    if (r === "form") return { how: "form", mf: 1 };
    const x = LN.numVal(String(v));
    if (!x || x.fin) return null;                          // скінченні десяткові й цілі — лише точно
    const t = String(LN.stripUnit(s, String(raw))).replace(/\s+/g, "").replace(/[−–]/g, "-").replace(/\./g, ",");
    const m = t.match(/^(-?)(\d+),(\d+)$/); if (!m) return null;
    const dig = m[3].length; if (dig < 2 && !(dig === 1 && Math.abs(x.x) >= 10)) return null;
    const N = Number((m[1] ? "-" : "") + m[2] + m[3]), sc = x.x * 10 ** dig;
    return N === Math.round(sc) || N === Math.trunc(sc) ? { how: "approx" } : null;
  }
  /** S1: коди розмітки mis, з якими збігся запис. choice — mis[індекс]; answer/number — масив { v, c } за правилом §5.2. */
  function misCodes(s, raw) {
    const mis = s && s.mis; if (!mis) return null;
    if (s.type === "choice") { const c = mis[raw]; return c === undefined ? null : { codes: [].concat(c), how: "index" }; }
    if (!Array.isArray(mis)) return null;
    for (const e of mis) { const m = e && misMatch(s, e.v, raw); if (m) return { codes: [].concat(e.c), how: m.how, mf: m.mf, v: e.v }; }
    return null;
  }

  /* ---------- Числові сигнали S3–S6, S14 ---------- */
  /** Ключ і запис як числа. answer/number — лише answerKind number/exactRoot; choice — лише варіанти без формули «$…$»,
      текст яких після зняття однакового нечислового закінчення («см²») розбирається як число (§1.2). */
  function numPair(s, raw) {
    const LN = LEARN();
    if (s.type === "choice") {
      const o = s.opts || [], a = o[raw], b = o[s.correct];
      if (typeof a !== "string" || typeof b !== "string" || a.includes("$") || b.includes("$")) return null;
      const tail = x => x.match(/[^\d]*$/)[0], ta = tail(a), tb = tail(b); if (ta !== tb) return null;
      const ra = a.slice(0, a.length - ta.length).trim(), rb = b.slice(0, b.length - tb.length).trim();
      if (!LN.parseAns(ra) || !LN.parseAns(rb)) return null;
      return { r: LN.numVal(ra), k: LN.numVal(rb), rs: ra, ks: rb };
    }
    const kind = kindOf(s); if (kind !== "number" && kind !== "exactRoot") return null;
    if (raw === null || raw === undefined) return null;
    const rs = String(LN.stripUnit(s, String(raw))), ks = LN.keyInput ? String(LN.keyInput(s)) : String(s.answer);
    const r = LN.numVal(rs), k = LN.numVal(ks); return r && k ? { r, k, rs, ks } : null;
  }
  const qOf = x => x.rat ? [x.p, x.q] : null;
  const eqNum = (a, b) => { const qa = qOf(a), qb = qOf(b); return qa && qb ? qeq(Qn(qa[0], qa[1]), Qn(qb[0], qb[1])) : Math.abs(a.x - b.x) <= 1e-9 * (1 + Math.abs(a.x)); };
  const scaled = (x, f) => x.rat ? { rat: true, p: x.p * f[0], q: x.q * f[1], x: x.x * Number(f[0]) / Number(f[1]) } : { rat: false, x: x.x * Number(f[0]) / Number(f[1]) };
  /** Запис десяткового числа без знака: «1145», «19,21» (розряди через пробіл знято); інакше null. */
  const decStr = t => { const u = String(t).replace(/\s+/g, "").replace(/[−–]/g, "-").replace(/\./g, ","); return /^-?\d+(?:,\d+)?$/.test(u) ? u : null; };
  function digitSlip(rs, ks) {
    const a = decStr(rs), b = decStr(ks); if (!a || !b || (a[0] === "-") !== (b[0] === "-")) return false;
    const x = a.replace(/^-/, ""), y = b.replace(/^-/, ""); if (x.length !== y.length || x.length < 2 || x.indexOf(",") !== y.indexOf(",")) return false;
    const diff = [...x].map((c, i) => c !== y[i] ? i : -1).filter(i => i >= 0);
    if (diff.length === 1) return diff[0] !== x.length - 1;            // одна цифра, не остання (остання ±… — це S6, близькість)
    return diff.length === 2 && diff[1] === diff[0] + 1 && x[diff[0]] === y[diff[1]] && x[diff[1]] === y[diff[0]];   // дві сусідні переставлено
  }
  function numSignals(s, raw) {
    const np = numPair(s, raw); if (!np || !np.r || !np.k) return null;
    const { r, k } = np, o = {};
    const kz = k.rat ? k.p === 0n : Math.abs(k.x) < 1e-12;
    if (!kz && eqNum(r, scaled(k, [-1n, 1n]))) o.S3 = 1;
    if (digitSlip(np.rs, np.ks)) o.S4 = 1;
    if (!kz) for (let e = 1; e <= 9 && !o.S5; e++) for (const f of [[10n ** BigInt(e), 1n], [1n, 10n ** BigInt(e)]]) if (eqNum(r, scaled(k, f))) o.S5 = 1;
    const d = Math.abs(r.x - k.x), intKey = k.rat && k.q === 1n;
    o.near = d > 1e-12 && d <= (intKey ? Math.max(1, TH.near * Math.abs(k.x)) : TH.near * Math.abs(k.x));
    o.far = kz ? d > 1e-12 : d / Math.abs(k.x) > TH.far;
    return o;
  }
  const emptyRaw = raw => raw === null || raw === undefined || (typeof raw === "string" && !raw.trim()) || (Array.isArray(raw) && !raw.length);
  /** S13: «Ще не знаю», порожньо або не розібрано (лише number / exactRoot / expression: не число й не вираз) і badHint = null. */
  function unparsed(s, raw) {
    if (emptyRaw(raw)) return true;
    const kind = kindOf(s); if (!["number", "exactRoot", "expression"].includes(kind)) return false;
    const LN = LEARN(), t = String(LN.stripUnit(s, String(raw)));
    if (LN.numVal(t) || parseT(t.replace(/^\s*[A-Za-z]\s*=\s*/, ""))) return false;
    return LN.badHint(s, t) === null;
  }

  /* ---------- Апріорний розподіл: сигнали → правило → модифікатори (§1.2, §1.3) ---------- */
  /** Сигнали й правило для помилки першої спроби. ctx: { hist — попередні помилки першої спроби [{ pk, codes, t }],
      run — правильні першої спроби цієї сесії на парі [{ lvl }], pre — S12, try2 — "ok"|"bad"|undefined, hint2, dt, lvl, t }. */
  function assess(s, raw, ctx = {}) {
    const sig = [], skip = ctx.verdict === "skip";
    const mis = skip ? null : misCodes(s, raw);
    const muts = skip || mis ? [] : mutants(s), mut = muts.find(m => misMatch(s, m.v, raw));
    const num = skip || emptyRaw(raw) ? null : numSignals(s, raw);
    const codes = mis ? mis.codes.map(String) : mut ? [mut.code] : [];
    if (mis) sig.push(...mis.codes.map(c => "S1:" + c));
    if (mut) sig.push("S2:" + mut.code);
    // S8: на тій самій парі за 7 днів уже ≥ 2 помилки першої спроби з тим самим кодом S1/S2 (поточна не рахується; поведінка та сама, що й за буквальним прочитанням, лише S8 не дописується поруч із S1/S2, §9 п. 3)
    let s8 = null; const per = {};
    for (const e of ctx.hist || []) for (const c of e.codes || []) if ((per[c] = (per[c] || 0) + 1) >= 2 && !s8) s8 = c;
    if (s8) sig.push("S8:" + s8);
    const n = num || {};
    if (!mis && !mut) { if (n.S3) sig.push("S3"); if (n.S4) sig.push("S4"); if (n.S5) sig.push("S5"); }
    const s6 = !mis && !mut && !n.S3 && !n.S4 && !n.S5 && n.near;
    if (s6) sig.push("S6");
    const s13 = skip || unparsed(s, raw);
    if (s13) sig.push("S13");
    const s14 = !mis && !mut && !s8 && !n.S3 && !n.S4 && !n.S5 && !s6 && !s13 && n.far;
    if (s14) sig.push("S14");
    const sk = s.sk, unit = sk === "meas" || sk === "dec";
    let rule, pr;
    if (mis) {
      const ks = [...new Set(mis.codes.map(clsOf).filter(Boolean))];
      if (ks.length <= 1) { rule = "P2"; const X = ks[0] || "unk"; pr = CLS.map(c => c === X ? .75 : .0625); }
      else { rule = "P2′"; pr = CLS.map(c => ks.includes(c) ? .75 / ks.length : .25 / (5 - ks.length)); }
    }
    else if (mut) rule = "P3";
    else if (s8) rule = "P4";
    else if (n.S4 || (n.S5 && !unit)) rule = "P5";
    else if (n.S3) rule = "P6";
    else if (n.S5 && unit) rule = "P7";
    else if (s6) rule = "P8";
    else if (s13) rule = "P9";
    else rule = "P10";
    pr = (pr || PRIOR[rule]).slice();
    // модифікатори
    const M = TH.mods;
    if (ctx.pre) { sig.push("S12"); pr[3] *= M.s12; }
    if ((ctx.run || []).filter(x => (x.lvl ?? 1) >= (ctx.lvl ?? 1)).length >= 2) { sig.push("S9"); pr[2] *= M.s9; pr[3] *= M.s9; }
    if (ctx.try2 === "ok") { sig.push(ctx.hint2 ? "S10+h" : "S10+"); const w = ctx.hint2 ? M.s10okHint : M.s10ok; pr[0] *= w; pr[1] *= w; }
    else if (ctx.try2 === "bad") { sig.push(ctx.hint2 ? "S10-h" : "S10-"); pr[2] *= M.s10bad; pr[3] *= M.s10bad; }
    if (typeof ctx.dt === "number" && ctx.dt < TH.dtFast && (ctx.lvl ?? 1) >= 2) { sig.push("S11"); pr[0] *= M.s11; }
    const post = round(norm1(pr));
    return { rule, sig, codes, amb: rule === "P2′" ? 1 : 0, prior: post, ...topOf(post), pexec: pexecOf(post), mf: mis?.mf || 0 };
  }

  /** Оновлення гіпотези перевіркою (§2.4): post ∝ prior · L(результат | клас); res ok/form — ✔, bad — ✘. */
  function update(prior, kind, res, same) {
    const L = LIK[kind]; if (!L || !["ok", "form", "bad"].includes(res)) return prior.slice();
    const ok = res !== "bad";
    const lk = L.map((p, i) => ok ? p : (1 - p) * (i === 2 && same ? TH.sameRule : 1));
    return round(norm1(prior.map((p, i) => p * lk[i])));
  }

  /* ---------- Зв'язок «урок → уроки-передумови» (§2.1, «Чого немає»): requires розділу, теми pre тестів рівня, pre екранів ---------- */
  function preIndex(subject) {
    const out = {}, secOf = {}, lessonSet = new Set();
    for (const sec of subject.sections || []) for (const l of sec.lessons || []) { secOf[l.id] = sec; lessonSet.add(l.id); }
    const expand = id => lessonSet.has(id) ? [id] : ((subject.sections || []).find(x => x.id === id)?.lessons || []).map(l => l.id);
    const diagPre = {};
    for (const d of subject.diags || []) for (const t of d.topics || []) if (t.kind === "pre" && !t.baseline) for (const sid of t.for || []) (diagPre[sid] ||= new Set()) && (t.lessons || []).forEach(l => diagPre[sid].add(l));
    for (const sec of subject.sections || []) for (const l of sec.lessons || []) {
      const all = new Set([...(sec.requires || []).flatMap(expand), ...(diagPre[sec.id] || []), ...l.screens.filter(x => x.pre).map(x => x.pre)]);
      all.delete(l.id); if (all.size) out[l.id] = [...all];
    }
    return out;
  }

  /* ---------- Трекер: стан відкритих гіпотез і події (§2.3, §3.2, §3.3) ---------- */
  function randId() {
    const A = "abcdefghijklmnopqrstuvwxyz0123456789"; let s = "";
    try { const b = new Uint8Array(8); (window.crypto || globalThis.crypto).getRandomValues(b); b.forEach(x => { s += A[x % 36]; }); return s; }
    catch (e) { for (let i = 0; i < 8; i++) s += A[Math.floor(Math.random() * 36)]; return s; }
  }
  /** opts: { seed — 8 символів префікса hid/prb (реплей і тести — детерміновано; інакше випадковий на завантаження), persist — 0/1 у hyp_open }. */
  function tracker(opts = {}) {
    const seed = String(opts.seed || randId()).slice(0, 12);
    let persist = opts.persist ? 1 : 0, cnt = 0, scr = 0;
    let open = [], errs = [], gens = {}, shown = {}, passed = {}, runRes = { run: null, list: [] }, pend = null, closed = [], dskip = {};
    const nid = () => `${seed}.${++cnt}`;
    const pk = (l, sk) => `${l}|${sk ?? ""}`;
    const inPair = (h, l, sk) => h.ls.includes(l) && (h.sk ?? null) === (sk ?? null);
    const tOf = a => typeof a.t === "number" ? a.t : dayNum(a.day) * DAY;
    const grpOf = post => { const e = pexecOf(post); return e >= TH.close ? "exec" : e <= r3(1 - TH.close) ? "know" : null; };
    const closeEv = (h, why, extra = {}) => (closed.push(h.hid), closed.length > TH.cap.closed && closed.shift(), { type: "hyp_close", d: { hid: h.hid, why, ...topOf(h.post), pexec: pexecOf(h.post), ...(why === "confirmed" ? { grp: grpOf(h.post) } : {}), n: h.n, rv: RULES_VERSION, ...extra } });
    function expire(t) {
      const ev = [];
      open = open.filter(h => { if (t - h.t0 > TH.expDays * DAY) { ev.push(closeEv(h, "expired")); return false; } return true; });
      errs = errs.filter(e => t - e.t <= TH.preDays * DAY).slice(-TH.cap.errs);
      return ev;
    }
    /** Пояснення пари показано (екран уроку l, фінальна спроба іншої вправи пари): у день помилки — sol0, пізніше — sol: 1. */
    function explained(match, day) {
      for (const h of open) if (match(h)) { if (day === h.d0) h.x0++; else h.sol = 1; }
    }
    /** Урок пройдено (lesson_end ≥ 65 % або a.done від app.js): для superseded — «пройдено знову». */
    const markPassed = (l, day) => { passed[l] = day || true; const ks = Object.keys(passed); if (ks.length > TH.cap.shown) delete passed[ks[0]]; };
    function doOpen(p, try2, hint2) {
      const a = p.a, as = assess(a.s, a.raw, { ...p.ctx, try2, hint2 });
      const ev = [];
      if (open.length >= TH.cap.open) { const old = open.shift(); ev.push(closeEv(old, "expired", { cap: 1 })); }
      const h = { hid: nid(), l: a.item.l, ls: p.ls, sk: a.item.sk ?? null, key: a.item.key ?? null, lvl: a.lvl ?? null, mode: a.item.mode,
        rule: as.rule, codes: as.codes, post: as.prior, t0: tOf(a), d0: a.day, scr0: p.scr0, x0: 0, sol: 0, n: 0, aSent: 0,
        run: a.run ?? null, pres: (a.pres || []).slice(0, TH.cap.pres),
        prev: p.ls.filter(l => passed[l] || (a.done || []).includes(l)) };   // уроки пари, пройдені до відкриття (superseded — лише «знову»)
      open.push(h);
      errs.push({ pk: pk(h.l, h.sk), l: h.l, codes: as.codes, t: h.t0 });
      ev.push({ type: "hyp_open", d: { ...(as.amb ? { amb: 1 } : {}), hid: h.hid,
        at: { mode: a.item.mode, l: a.item.l, i: a.item.i ?? null, key: a.item.key ?? null, try: 1 },
        h: { l: h.l, sk: h.sk, lvl: h.lvl, rule: as.rule, sig: as.sig, prior: dist(as.prior), pexec: as.pexec, top: as.top, p: as.p },
        rv: RULES_VERSION, persist } });
      return ev;
    }
    /** Відкриває гіпотезу, що чекала другої спроби (екран закрито без неї) — без S10. */
    function flush() { if (!pend) return []; const p = pend; pend = null; return doOpen(p); }
    const sameScreen = (p, a) => p.a.item.mode === a.item.mode && p.a.item.l === a.item.l && p.a.item.i === a.item.i && (p.a.item.key ?? null) === (a.item.key ?? null);
    /** Вид перевірки для відкритої гіпотези h і відповіді a (§2.1, §2.3); null — відповідь не перевірка цієї гіпотези. */
    function probeKind(h, a) {
      const it = a.item, s = a.s || {};
      if (it.mode !== "practice" || (a.try ?? 1) !== 1 || it.hyp) return null;
      const pair = inPair(h, it.l, it.sk), pre = !pair && h.pres.includes(it.l);
      const sameLesson = h.ls.includes(it.l);
      const isF = s.type === "choice" || s.type === "multi" || (s.type === "answer" && s.answerKind === "comparison");
      if (!pair && !pre && !(isF && sameLesson)) return null;
      const sameDay = a.day === h.d0;
      // A: той самий день після показаного пояснення (власне пояснення вправи з помилкою є завжди, крім тесту рівня)
      if ((pair || isF) && sameDay && (h.mode !== "diag" || h.x0 > 0)) return "A";
      // P того самого дня після пояснення — не перевірка (як D: «інший день», §9 п. 7)
      if (pre) return a.unseen && (a.lvl ?? 1) === 1 && !(sameDay && (h.mode !== "diag" || h.x0 > 0)) ? "P" : null;
      if (isF) return a.unseen ? "F" : null;
      if (s.type !== "answer" && s.type !== "number") return null;
      const le = (a.lvl ?? 1) <= (h.lvl ?? 1);
      if (a.gv) {   // gen: інший набір чисел за значеннями (§3.3 gens)
        const fresh = !(gens[it.key] || []).some(g => JSON.stringify(g.gv) === JSON.stringify(a.gv) && dayDiff(g.d, a.day) <= TH.genDays);
        if (fresh && le && (a.genN ?? 0) >= TH.genMin) return "Dg";
      }
      if (a.unseen && !a.gv) return le ? "D≤" : "D>";
      const last = shown[it.key];
      return last && dayDiff(last, a.day) >= TH.seenDays ? "D°" : null;
    }
    /** Головний вхід (§3.3). a: { s — вправа/екран зі змісту, item: { mode, l, i, key, type, sk, hyp }, raw, verdict, try, hint, final,
        dt, t — мс, day — "YYYY-MM-DD", lvl, unseen — S.seen[key] === undefined до цієї спроби, run — id сесії (урок/тренування/тест),
        ls — уроки пари (тест рівня: уроки теми; інакше [item.l]), pres — уроки-передумови, preWeak — тема pre тесту gap/shaky,
        gv, genN, genAt — набір, кількість наборів і індекс gen-вправи, done — пройдені уроки (S.lessons) }. Повертає [{ type, d }]. */
    function onAnswer(a) {
      const ev = [], it = a.item || {}, t = tOf(a), tr = a.try ?? 1, mine = [];
      if (it.hyp || a.verdict === "hyp") return ev;
      if (pend && !(tr > 1 && sameScreen(pend, a))) ev.push(...flush());
      ev.push(...expire(t));
      if (a.run !== runRes.run) runRes = { run: a.run, list: [] };
      // 1) перевірка відкритих гіпотез (одна перевірка — усі гіпотези пари, спільний prb)
      if (tr === 1) {
        const hits = open.map(h => [h, probeKind(h, a)]).filter(x => x[1]);
        if (hits.length) {
          const prb = nid(), res = a.verdict === "half" ? "form" : a.verdict;   // half (тест рівня) — значення правильне, як form
          let pcodes = null;
          for (const [h, kind] of hits) {
            if (kind === "A") { if (h.aSent) continue; h.aSent = 1; }
            if (res === "bad" && pcodes === null) pcodes = assess(a.s, a.raw, {}).codes;
            const same = res === "bad" && (pcodes || []).some(c => h.codes.includes(c)) ? 1 : 0;
            // Перша перевірка не виду A закриває гіпотезу (§9 п. 10): розв'язання, показане після неї, — пояснення пари, тож чистих
            // перевірок далі бути не може. Чиста (sol 0) оновлює розподіл → confirmed за групою (pexec ≥ 0,8 чи ≤ 0,2) або undecided;
            // нечиста (sol 1) розподілу не змінює → undecided. n — скільки перевірок оновили розподіл (0 або 1).
            const clean = kind !== "A" && h.sol === 0, counted = kind !== "A" && ["ok", "form", "bad"].includes(res);
            if (clean && counted) { h.post = update(h.post, kind, res, same); h.n++; }
            ev.push({ type: "hyp_probe", d: { hid: h.hid, prb, kind, key: it.key ?? null, ...(a.genAt !== undefined ? { genAt: a.genAt } : {}),
              gap: { scr: scr - h.scr0, min: Math.round((t - h.t0) / 6e4), days: dayDiff(h.d0, a.day) }, sol: h.sol, sol0: h.x0, shown: 0, res, same,
              post: dist(h.post), pexec: pexecOf(h.post), rv: RULES_VERSION } });
            if (counted) { ev.push(closeEv(h, clean && grpOf(h.post) ? "confirmed" : "undecided")); h.closed = 1; }
          }
          open = open.filter(h => !h.closed);
        }
      }
      // 2) нова гіпотеза або hyp_fmt
      // P1: form, а в тесті рівня й half (півбала, LEARN.diagVerdict: вимаганого вигляду немає чи корінь не обчислено) — гіпотези немає
      if (tr === 1 && (a.verdict === "form" || a.verdict === "half")) ev.push({ type: "hyp_fmt", d: { key: it.key ?? null, l: it.l, i: it.i ?? null,
        fc: LEARN().formCode(a.s, a.raw), ...(a.verdict === "half" ? { half: 1 } : {}), rv: RULES_VERSION } });
      // «Ще не знаю» в тесті рівня — не гіпотеза (завжди P9, top unk), лише лічильник за тестом: його пише diag_end (onDiagEnd, §9 [E2-p3])
      if (tr === 1 && a.verdict === "skip" && it.mode === "diag") dskip[it.l] = (dskip[it.l] || 0) + 1;
      else if (tr === 1 && (a.verdict === "bad" || a.verdict === "skip")) {
        const ls = a.ls && a.ls.length ? a.ls.slice() : [it.l], key = pk(it.l, it.sk);
        const hist = errs.filter(e => e.pk === key && t - e.t <= TH.patDays * DAY);
        const preHit = !!a.preWeak || ((a.pres || []).length && errs.some(e => a.pres.includes(e.l) && t - e.t <= TH.preDays * DAY));
        const p = { a, ls, scr0: scr, ctx: { hist, run: runRes.list.filter(x => x.pk === key), pre: !!preHit, dt: a.dt, lvl: a.lvl, verdict: a.verdict } };
        if (a.final || it.mode === "diag") mine.push(...doOpen(p)); else pend = p;
      } else if (tr > 1 && pend && sameScreen(pend, a)) { const p = pend; pend = null; mine.push(...doOpen(p, a.verdict === "bad" ? "bad" : "ok", !!a.hint)); }
      ev.push(...mine);
      const own = new Set(mine.filter(e => e.type === "hyp_open").map(e => e.d.hid));
      if (tr === 1 && a.verdict === "ok") runRes.list.push({ pk: pk(it.l, it.sk), lvl: a.lvl });
      // 3) пояснення пари після фінальної спроби (у тренуванні — розв'язання, і правильної вправи теж; у тесті рівня фідбеку немає)
      if (a.final && it.mode === "practice") {
        // власне пояснення вправи з помилкою не рахується (§2.3) — ні щойно, ні коли та сама вправа трапиться знову
        explained(h => inPair(h, it.l, it.sk) && !own.has(h.hid) && !(h.key && h.key === it.key), a.day);
      }
      if (a.final && it.key) {
        shown[it.key] = a.day; const ks = Object.keys(shown); if (ks.length > TH.cap.shown) delete shown[ks[0]];
        if (a.gv) { const g = (gens[it.key] ||= []); g.push({ gv: a.gv, cv: a.cv ?? null, d: a.day }); if (g.length > TH.cap.gens) g.shift(); }
      }
      return ev;
    }
    /** Показ екрана (подія screen): екран уроку з пари — пояснення (§2.3 п. 1); інший екран закриває очікування другої спроби. */
    function onScreen(x) {
      const ev = [], it = x.item || {};
      if (pend && !(it.mode === pend.a.item.mode && it.l === pend.a.item.l && it.i === pend.a.item.i)) ev.push(...flush());
      ev.push(...expire(tOf(x)));
      scr++;
      if (it.mode === "lesson") explained(h => h.ls.includes(it.l), x.day);
      return ev;
    }
    /** Підсумок уроку. superseded — лише якщо урок пари пройдено **знову** (інша сесія, ≥ 65 %), тобто він уже був пройдений до
        відкриття гіпотези або в сесії з помилкою. Перший прохід уроку теми після тесту рівня — це пояснення (екрани → sol0 / sol: 1), не закриття. */
    function onLessonEnd(x) {
      const ev = [...flush()], run = x.run ?? null;
      for (const h of open) if (h.ls.includes(x.l) && h.run === run && !h.prev.includes(x.l)) h.prev.push(x.l);   // сесія з помилкою — урок пройдено
      if ((x.acc ?? 0) < TH.pass) return ev;
      open = open.filter(h => {
        if (!h.ls.includes(x.l) || h.run === run) return true;
        if (h.prev.includes(x.l)) { ev.push(closeEv(h, "superseded")); return false; }
        h.prev.push(x.l); return true;
      });
      markPassed(x.l, x.day);
      return ev;
    }
    /** «Скинути прогрес»: усі відкриті → reset (до EV.log("reset"), §3.3); стан очищено. */
    function onReset() { const ev = [...flush(), ...open.map(h => closeEv(h, "reset"))]; open = []; errs = []; gens = {}; shown = {}; passed = {}; closed = []; dskip = {}; runRes = { run: null, list: [] }; return ev; }
    /** Тест рівня завершено (diag_end): підсумок для поля hyp події diag_end — скільки «Ще не знаю» з минулого diag_end цього тесту
        (разом з відповідями до перезавантаження чи «Пізніше»); лічильник обнуляється. Не подія: app.js кладе його в diag_end. */
    function onDiagEnd(x) { const id = x && x.diag, n = dskip[id] || 0; delete dskip[id]; return { skip: n, rv: RULES_VERSION }; }
    /** Старт / час минув: старші за 7 днів без перевірки → expired. */
    function tick(x) { return [...expire(tOf(x))]; }
    /** Стан для slid.hyp (§3.3): крім open/probed/gens — errs, shown, passed (§9 п. 11), closed (hid закритих — злиття вкладок),
        scr (лічильник екранів — gap.scr після перезавантаження) і pend (гіпотеза, що чекає другої спроби, без s — вправу app.js
        знаходить знову за item; §9 п. 17 [E2]), dskip — «Ще не знаю» тестів рівня до їх diag_end ({ id тесту: n }, §9 [E2-p3]). */
    const state = () => JSON.parse(JSON.stringify({ v: 1, rv: RULES_VERSION, open, probed: {}, gens, errs, shown, passed, closed, cnt, scr, dskip,
      pend: pend ? { ...pend, a: { ...pend.a, s: undefined } } : null }));
    /** resolve(a) → вправа/екран зі змісту для відкладеного pend (a.item, a.genAt); немає — pend відкидається. */
    function load(st, resolve) {
      if (!st || st.v !== 1) return false;
      open = Array.isArray(st.open) ? st.open : []; gens = st.gens || {}; errs = st.errs || []; shown = st.shown || {}; passed = st.passed || {};
      closed = Array.isArray(st.closed) ? st.closed : []; cnt = st.cnt || cnt; scr = Number.isInteger(st.scr) ? st.scr : scr; pend = null;
      dskip = st.dskip && typeof st.dskip === "object" ? st.dskip : {};
      if (st.pend && st.pend.a && resolve) { let s = null; try { s = resolve(st.pend.a); } catch (e) {} if (s) pend = { ...st.pend, a: { ...st.pend.a, s } }; }
      return true;
    }
    /** Закриті в іншій вкладці (злиття slid.hyp) — геть із пам'яті без подій. */
    function drop(hids) { const x = new Set(hids || []); if (x.size) open = open.filter(h => !x.has(h.hid)); }
    return { onAnswer, onScreen, onLessonEnd, onReset, onDiagEnd, tick, flush, state, load, drop, setPersist: v => { persist = v ? 1 : 0; },
      get open() { return open.map(h => ({ ...h })); }, get pending() { return !!pend; }, seed };
  }

  /** Злиття стану цієї вкладки (mine) зі збереженим іншою (stored), §3.3 «Кілька вкладок»: закриті в будь-якій — закриті (closed);
      відкриті — об'єднання за hid (версія mine має пріоритет), ≤ cap.open найновіших; errs — об'єднання за 14 днів; shown, passed —
      пізніший день; gens — об'єднання наборів за gv (≤ cap.gens); cnt, scr, pend, dskip — лише mine (pend іншої вкладки там і лишається;
      dskip — лічильник «Ще не знаю» тесту, який іде в цій вкладці). */
  function mergeState(mine, stored) {
    if (!stored || stored.v !== 1) return mine;
    const C = TH.cap, later = (a, b) => (typeof a === "string" && typeof b === "string" ? (a > b ? a : b) : a || b);
    const closed = [...new Set([...(stored.closed || []), ...(mine.closed || [])])].slice(-C.closed), shut = new Set(closed);
    const byHid = new Map(); for (const h of [...(stored.open || []), ...(mine.open || [])]) if (h && h.hid && !shut.has(h.hid)) byHid.set(h.hid, h);
    const open = [...byHid.values()].sort((a, b) => (a.t0 ?? 0) - (b.t0 ?? 0)).slice(-C.open);
    const all = [...(stored.errs || []), ...(mine.errs || [])], newest = all.reduce((m, e) => Math.max(m, e.t || 0), 0), seenE = new Set();
    const errs = all.filter(e => { const k = `${e.pk}|${e.t}|${e.l}`; if (seenE.has(k) || newest - (e.t || 0) > TH.preDays * DAY) return false; seenE.add(k); return true; })
      .sort((a, b) => a.t - b.t).slice(-C.errs);
    const mergeDays = (a = {}, b = {}) => { const o = { ...a }; for (const [k, v] of Object.entries(b)) o[k] = later(o[k], v); return o; };
    const gens = {}; for (const src of [stored.gens || {}, mine.gens || {}]) for (const [k, list] of Object.entries(src)) {
      const g = (gens[k] ||= []); for (const x of list || []) { const j = g.findIndex(y => JSON.stringify(y.gv) === JSON.stringify(x.gv));
        if (j >= 0) { if (later(g[j].d, x.d) === g[j].d && g[j].d !== x.d) continue; g.splice(j, 1); } g.push(x); }
      if (g.length > C.gens) g.splice(0, g.length - C.gens); }
    return { ...mine, open, closed, errs, gens, shown: mergeDays(stored.shown, mine.shown), passed: mergeDays(stored.passed, mine.passed), probed: { ...(stored.probed || {}), ...(mine.probed || {}) } };
  }

  return { RULES_VERSION, CLS, PRIOR, LIK, TH, tracker, mergeState, assess, update, mutants, misMatch, misCodes, numSignals, preIndex, parseT, printT, evalT, topOf };
})();
