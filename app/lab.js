/* Слід — лабораторія: інтерактивні інструменти для уроків (передусім математики), як у Brilliant.
   Дитина змінює параметри повзунками або перетягує точки й одразу бачить, що змінюється: графік,
   фігура, числова пряма, площа, дроби, діаграма, терези, просторове тіло.
   Модуль «чистий»: під час завантаження не чіпає DOM, тож валідатор запускає його в Node
   і перевіряє вирази, мету (goal) і розв'язок (solution). Схема: docs/CONTENT_SCHEMA.md §8. */
(() => {
const G = typeof window !== "undefined" ? window : globalThis;

/* ================= Вирази =================
   Мініпарсер без eval (працює під суворим CSP): числа, змінні-параметри, + - * / ^, порівняння,
   && || !, виклики функцій, неявне множення (2x, 3(x+1), 2sin(x)). Десятковий знак у виразах — крапка. */
const FACT = n => { n = Math.round(n); let r = 1; for (let i = 2; i <= n; i++) r *= i; return n < 0 ? NaN : r; };
const isPt = p => p && typeof p === "object" && "x" in p && "y" in p;
const FN = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
  sind: a => Math.sin(a * Math.PI / 180), cosd: a => Math.cos(a * Math.PI / 180), tand: a => Math.tan(a * Math.PI / 180),
  sqrt: Math.sqrt, abs: Math.abs, exp: Math.exp, ln: Math.log, lg: Math.log10, log: (b, x) => Math.log(x) / Math.log(b),
  root: (n, x) => x < 0 && Math.round(n) % 2 === 1 ? -Math.pow(-x, 1 / n) : Math.pow(x, 1 / n), cbrt: Math.cbrt,
  min: Math.min, max: Math.max, floor: Math.floor, ceil: Math.ceil, sign: Math.sign,
  round: (x, d = 0) => { const m = Math.pow(10, d); return Math.round(x * m) / m; },
  mod: (a, b) => ((a % b) + b) % b, fact: FACT, C: (n, k) => FACT(n) / (FACT(k) * FACT(n - k)), A: (n, k) => FACT(n) / FACT(n - k),
  deg: r => r * 180 / Math.PI, rad: d => d * Math.PI / 180,
  if: (c, a, b) => c ? a : b,
  // геометрія: аргументи — точки {x, y}
  pt: (x, y) => ({ x, y }), X: p => p.x, Y: p => p.y,
  dist: (p, q) => Math.hypot(q.x - p.x, q.y - p.y),
  angle: (a, b, c) => { const u = Math.atan2(a.y - b.y, a.x - b.x), v = Math.atan2(c.y - b.y, c.x - b.x); let d = Math.abs(u - v) * 180 / Math.PI; return d > 180 ? 360 - d : d; },
  area: (...p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a.x * b.y - b.x * a.y; } return Math.abs(s) / 2; },
  slope: (p, q) => (q.y - p.y) / (q.x - p.x),
  // аналіз: перший аргумент — функція, оголошена в fns з id
  d: (f, a) => { const h = 1e-5; return (f(a + h) - f(a - h)) / (2 * h); },
  integ: (f, a, b) => { const n = 400, h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h); return s * h / 3; },
  mean: (...v) => v.reduce((x, y) => x + y, 0) / v.length
};
const CONST = { pi: Math.PI, e: Math.E, inf: Infinity };
const BIN = { "||": 1, "&&": 2, "==": 3, "!=": 3, "<": 4, ">": 4, "<=": 4, ">=": 4, "+": 5, "-": 5, "*": 6, "/": 6, "^": 8 };
const near = (a, b) => Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));

function tokenize(src) {
  const T = [], s = String(src), re = /(\d+(?:\.\d+)?|\.\d+)|([A-Za-z_][A-Za-z0-9_]*)|(<=|>=|==|!=|&&|\|\||[-+*/^(),<>!])/y;
  let i = 0;
  while (i < s.length) {
    if (/\s/.test(s[i])) { i++; continue; }
    re.lastIndex = i; const m = re.exec(s);
    if (!m) throw new Error(`незрозумілий символ «${s[i]}» у виразі «${s}»`);
    i = re.lastIndex;
    T.push(m[1] != null ? { t: "n", v: +m[1] } : m[2] ? { t: "id", v: m[2] } : { t: "op", v: m[3] });
  }
  return T;
}
function parse(src, fnames) {
  const T = tokenize(src); let i = 0;
  const op = (t, v) => t && t.t === "op" && t.v === v;
  const expect = v => { if (!op(T[i], v)) throw new Error(`у виразі «${src}» очікувалось «${v}»`); i++; };
  function primary() {
    const t = T[i++];
    if (!t) throw new Error(`вираз «${src}» обірвався`);
    if (t.t === "n") return { k: "n", v: t.v };
    if (t.t === "id") {
      if (op(T[i], "(") && (FN[t.v] || fnames.has(t.v))) {
        i++; const args = [];
        if (!op(T[i], ")")) { args.push(expr(0)); while (op(T[i], ",")) { i++; args.push(expr(0)); } }
        expect(")"); return { k: "call", f: t.v, args };
      }
      return { k: "v", v: t.v };
    }
    if (op(t, "(")) { const e = expr(0); expect(")"); return e; }
    if (op(t, "-")) return { k: "neg", a: expr(7) };
    if (op(t, "+")) return expr(7);
    if (op(t, "!")) return { k: "not", a: expr(7) };
    throw new Error(`у виразі «${src}» несподіване «${t.v}»`);
  }
  function expr(minP) {
    let left = primary();
    for (;;) {
      const t = T[i]; if (!t) break;
      let o, p, implicit = false;
      if (t.t === "op" && BIN[t.v] != null) { o = t.v; p = BIN[o]; }
      else if (t.t === "n" || t.t === "id" || op(t, "(")) { o = "*"; p = 6; implicit = true; }
      else break;
      if (p < minP) break;
      if (!implicit) i++;
      left = { k: "b", o, a: left, b: expr(o === "^" ? p : p + 1) };
    }
    return left;
  }
  const ast = expr(0);
  if (i < T.length) throw new Error(`у виразі «${src}» зайве «${T[i].v}»`);
  return ast;
}
function build(n) {
  switch (n.k) {
    case "n": { const v = n.v; return () => v; }
    case "v": {
      const name = n.v;
      // параметр уроку має пріоритет над сталою з тим самим ім'ям (e, pi)
      const c = CONST[name];
      return e => { const v = e[name]; if (v !== undefined) return v; if (c !== undefined) return c; throw new Error(`невідома змінна «${name}»`); };
    }
    case "neg": { const a = build(n.a); return e => -a(e); }
    case "not": { const a = build(n.a); return e => !a(e); }
    case "call": {
      const args = n.args.map(build), name = n.f;
      return e => { const f = typeof e[name] === "function" ? e[name] : FN[name]; if (typeof f !== "function") throw new Error(`невідома функція «${name}»`); return f(...args.map(a => a(e))); };
    }
    case "b": {
      const a = build(n.a), b = build(n.b);
      switch (n.o) {
        case "+": return e => a(e) + b(e);
        case "-": return e => a(e) - b(e);
        case "*": return e => a(e) * b(e);
        case "/": return e => a(e) / b(e);
        case "^": return e => Math.pow(a(e), b(e));
        case "<": return e => a(e) < b(e);
        case ">": return e => a(e) > b(e);
        case "<=": return e => { const x = a(e), y = b(e); return x < y || near(x, y); };
        case ">=": return e => { const x = a(e), y = b(e); return x > y || near(x, y); };
        case "==": return e => near(a(e), b(e));
        case "!=": return e => !near(a(e), b(e));
        case "&&": return e => a(e) && b(e);
        case "||": return e => a(e) || b(e);
      }
    }
  }
  throw new Error("невідомий вузол виразу");
}
const CACHE = new Map();
/** Компілює вираз у функцію від середовища. fnames — імена функцій, оголошених у fns. */
function compile(src, fnames = new Set()) {
  if (typeof src === "number") return () => src;
  const key = src + "|" + [...fnames].join(",");
  if (!CACHE.has(key)) CACHE.set(key, build(parse(src, fnames)));
  return CACHE.get(key);
}

/* ================= Середовище стану =================
   Параметри — числа; let — похідні значення; points — точки {x, y}; fns з id — функції від x.
   Усе обчислюється ліниво, тож порядок оголошення не важливий. */
const fnNames = spec => new Set((spec.fns || []).filter(f => f.id).map(f => f.id));
function makeEnv(spec, state) {
  const names = fnNames(spec), env = Object.assign(Object.create(null), state);
  const lazy = (id, fn) => { let busy = false, has = false, v;
    Object.defineProperty(env, id, { enumerable: true, get() { if (has) return v; if (busy) throw new Error(`циклічне означення «${id}»`); busy = true; try { v = fn(); has = true; } finally { busy = false; } return v; } }); };
  for (const [id, ex] of Object.entries(spec.let || {})) { const c = compile(ex, names); lazy(id, () => c(env)); }
  for (const [id, p] of Object.entries(spec.points || {})) {
    const [xe, ye] = pointExprs(id, p), cx = compile(xe, names), cy = compile(ye, names);
    lazy(id, () => ({ x: cx(env), y: cy(env) }));
  }
  if (spec.kind === "column" && spec.input) lazy("col", () => { let v = 0, i = 0; while (env["d" + i] !== undefined) { if (env["d" + i] < 0) return NaN; v += env["d" + i] * Math.pow(10, i); i++; } return v; });
  for (const f of spec.fns || []) if (f.id && f.y != null) { const c = compile(f.y, names); env[f.id] = x => { const e = Object.create(env); e.x = x; return c(e); }; }
  return env;
}
/** Вирази координат точки; скорочення at:[x, y] + drag:true створює приховані параметри Ax, Ay. */
function pointExprs(id, p) {
  if (p.at && p.drag === true) return [id + "x", id + "y"];
  if (p.at) return [String(p.at[0]), String(p.at[1] ?? 0)];
  return [String(p.x ?? 0), String(p.y ?? 0)];
}
function ev(src, env, names) { return compile(src, names || fnNames({ fns: Object.values(env).length ? [] : [] }))(env); }

/* ================= Параметри ================= */
function paramList(spec) {
  const out = [];
  for (const [id, p] of Object.entries(spec.params || {})) out.push({ id, min: p.min ?? 0, max: p.max ?? 10, step: p.step ?? 1, start: p.start ?? p.min ?? 0, label: p.label, unit: p.unit || "", hide: !!p.hide, fmt: p.fmt, out: p.out !== false && spec.values !== false });
  // стовпчик з input: true — цифри відповіді d0 (одиниці), d1, … як приховані параметри; −1 = ще не вписано («?»)
  if (spec.kind === "column" && spec.input) { const n = columnDigits(spec, Object.fromEntries(out.map(p => [p.id, p.start])));
    for (let i = 0; i < n; i++) out.push({ id: "d" + i, min: -1, max: 9, step: 1, start: -1, hide: true }); }
  // перетягувані точки at:[x,y] — приховані параметри в межах поля
  const v = spec.view || (spec.kind === "numline" ? [-10, 10] : [-6, 6, -6, 6]);
  for (const [id, p] of Object.entries(spec.points || {})) if (p.at && p.drag === true) {
    const step = p.step ?? spec.snap ?? 1;
    out.push({ id: id + "x", min: p.min?.[0] ?? v[0], max: p.max?.[0] ?? v[1], step, start: p.at[0], hide: true });
    if (spec.kind !== "numline") out.push({ id: id + "y", min: p.min?.[1] ?? v[2], max: p.max?.[1] ?? v[3], step, start: p.at[1], hide: true });
  }
  return out;
}
const clean = v => Math.round(v * 1e9) / 1e9;
/** Межі параметра: числа або вирази від інших параметрів (max: "n" — не більше, ніж частин). */
function bounds(p, state) {
  const b = v => typeof v === "number" ? v : (() => { try { return compile(String(v))(state || {}); } catch (e) { return NaN; } })();
  let lo = b(p.min), hi = b(p.max);
  if (!isFinite(lo)) lo = typeof p.min === "number" ? p.min : -1e9; if (!isFinite(hi)) hi = typeof p.max === "number" ? p.max : 1e9;
  return [lo, Math.max(lo, hi)];
}
function snap(p, v, state) { const [lo, hi] = bounds(p, state), base = typeof p.min === "number" ? p.min : 0;
  let s = clean(base + Math.round((v - base) / p.step) * p.step);
  while (s > hi + 1e-9) s = clean(s - p.step); while (s < lo - 1e-9) s = clean(s + p.step); return s; }
function columnDigits(spec, st) { try { const a = Math.round(Math.abs(compile(String(spec.a ?? "a"))(st))), b = Math.round(Math.abs(compile(String(spec.b ?? "b"))(st))), op = spec.op || "+";
  return String(op === "+" ? a + b : op === "-" ? a - b : op === ":" ? Math.floor(a / b) : a * b).length; } catch (e) { return 0; } }
/** Ділення куточком: кроки {pos — індекс останньої цифри діленого, cur — неповне ділене, q — цифра частки, sub = q·b, rem}. */
function longDivision(a, b) {
  const ds = String(a).split("").map(Number), steps = []; let cur = 0, started = false;
  ds.forEach((d, i) => { cur = cur * 10 + d; if (!started && cur < b && i < ds.length - 1) return; started = true;
    const q = Math.floor(cur / b); steps.push({ pos: i, cur, q, sub: q * b, rem: cur - q * b }); cur = cur - q * b; });
  return steps;
}
function startState(spec) { return Object.fromEntries(paramList(spec).map(p => [p.id, p.start])); }

/* ================= Форматування чисел і шаблонів ================= */
function num(v, d = 2) {
  if (typeof v === "boolean") return v ? "так" : "ні";
  if (typeof v !== "number" || !isFinite(v)) return v === Infinity ? "∞" : v === -Infinity ? "−∞" : "—";
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  let s = Math.abs(r).toFixed(d).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "").replace(".", ",");   // нулі прибираємо лише після коми
  if (Math.abs(r) >= 10000) s = s.replace(/^\d+/, m => m.replace(/\B(?=(\d{3})+$)/g, "\u202F"));   // 10 000: класи вузьким пробілом (4870 — без)
  return (r < 0 && s !== "0" ? "−" : "") + s;
}
function piLabel(v) {
  const r = v / Math.PI; if (Math.abs(r) < 1e-9) return "0";
  for (const d of [1, 2, 3, 4, 6]) { const n = Math.round(r * d); if (Math.abs(r * d - n) < 1e-6) {
    const sg = n < 0 ? "−" : "", a = Math.abs(n), top = (a === 1 ? "" : a) + "π"; return sg + (d === 1 ? top : top + "/" + d); } }
  return num(v);
}
/** Многочлен за коефіцієнтами від старшого: [2, -1, 0] → «2x^2 - x». */
function poly(cs, v = "x") {
  let out = ""; const n = cs.length - 1;
  cs.forEach((c, i) => { const p = n - i; if (!isFinite(c) || near(c, 0)) return;
    const a = Math.abs(c), co = (near(a, 1) && p > 0) ? "" : num(a), vp = p === 0 ? "" : p === 1 ? v : `${v}^${p}`;
    out += out ? (c < 0 ? " - " : " + ") + co + vp : (c < 0 ? "-" : "") + co + vp; });
  return out || "0";
}
/** Шаблон із вставками {вираз|формат}: формат — кількість знаків, c (коефіцієнт), s (доданок зі знаком), deg, pi. */
function fill(tpl, env, names) {
  return String(tpl).replace(/\{([^{}|]+)(?:\|([a-z0-9]+))?\}/g, (_, ex, f) => {
    if (f === "poly") { try { return poly(ex.split(";").map(x => compile(x.trim(), names)(env))); } catch (e) { return "?"; } }
    let v; try { v = compile(ex.trim(), names)(env); } catch (e) { return "?"; }
    if (f === "c") return v === 1 ? "" : v === -1 ? "-" : num(v).replace("−", "-");
    if (f === "s") return near(v, 0) ? "" : (v < 0 ? "- " : "+ ") + num(Math.abs(v));
    if (f === "deg") return num(v, 0) + "°";
    if (f === "pi") return piLabel(v);
    if (f === "time" || f === "hm") { const mins = Math.round(f === "time" ? v * 60 : v), h = Math.floor(mins / 60), m = ((mins % 60) + 60) % 60;   // time: години → 14:30; hm: хвилини → 2 год 15 хв
      return f === "time" ? `${h}:${String(m).padStart(2, "0")}` : (h ? `${h} год` : "") + (h && m ? " " : "") + (m || !h ? `${m} хв` : ""); }
    return num(v, /^\d$/.test(f || "") ? +f : 2);
  });
}

/* ================= Кольори ================= */
const COL = { accent: "var(--accent)", blue: "#3B82C4", green: "var(--ok)", red: "var(--bad)", gold: "var(--gold)", purple: "#8B5CC4", muted: "var(--muted)", ink: "var(--ink)" };
const SERIES = ["accent", "blue", "green", "purple", "gold"];
const col = (c, i = 0) => COL[c] || c || COL[SERIES[i % SERIES.length]];
const t = (x, y, s, o = {}) => `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${o.size || 12}" ${o.anchor ? `text-anchor="${o.anchor}"` : ""} fill="${o.fill || "var(--ink)"}" ${o.bold ? 'font-weight="700"' : ""} ${o.italic ? 'font-style="italic" font-family="var(--mathf)"' : ""} paint-order="stroke" stroke="var(--surface)" stroke-width="3">${s}</text>`;
const safe = f => { try { const v = f(); return typeof v === "number" ? v : v; } catch (e) { return NaN; } };

/* ================= Види інструментів =================
   render(spec, env, view) → { w, h, body, handles: [{x, y, set(px, py) → {param: value}}], alt } */
const KINDS = {};

/* ---- plane: координатна площина з графіками, точками, відрізками, кутами ---- */
KINDS.plane = {
  render(spec, env) {
    const names = fnNames(spec);
    const [x0, x1, y0, y1] = spec.view || [-6, 6, -6, 6], W = 320;
    const H = spec.h || Math.max(160, Math.min(400, Math.round(W * (y1 - y0) / (x1 - x0))));
    const X = x => (x - x0) / (x1 - x0) * W, Y = y => H - (y - y0) / (y1 - y0) * H;
    const E = ex => typeof ex === "number" ? ex : safe(() => compile(String(ex), names)(env));
    const P = ref => Array.isArray(ref) ? { x: E(ref[0]), y: E(ref[1]) } : safe(() => env[ref]);
    let g = "";
    // сітка й осі
    const gs0 = spec.grid ?? 1, gs = Array.isArray(gs0) ? gs0[0] : gs0, gsy = Array.isArray(gs0) ? gs0[1] : gs0, xstep = spec.xstep != null ? E(spec.xstep) : autoStep(x1 - x0), ystep = spec.ystep != null ? E(spec.ystep) : autoStep(y1 - y0);
    if (gs) {
      for (let x = Math.ceil(x0 / gs) * gs; x <= x1 + 1e-9; x += gs) g += `<line x1="${X(x).toFixed(1)}" x2="${X(x).toFixed(1)}" y1="0" y2="${H}" stroke="var(--line)" stroke-width="1"/>`;
      for (let y = Math.ceil(y0 / gsy) * gsy; y <= y1 + 1e-9; y += gsy) g += `<line y1="${Y(y).toFixed(1)}" y2="${Y(y).toFixed(1)}" x1="0" x2="${W}" stroke="var(--line)" stroke-width="1"/>`;
    }
    if (spec.axes !== false) {
      const ax = Math.min(H - 1, Math.max(1, Y(0))), ay = Math.min(W - 1, Math.max(1, X(0)));
      g += `<line x1="0" x2="${W}" y1="${ax}" y2="${ax}" stroke="var(--ink)" stroke-width="1.6"/><path d="M${W} ${ax} l-8 -4 v8 z" fill="var(--ink)"/>`;
      g += `<line y1="0" y2="${H}" x1="${ay}" x2="${ay}" stroke="var(--ink)" stroke-width="1.6"/><path d="M${ay} 0 l-4 8 h8 z" fill="var(--ink)"/>`;
      g += t(W - 6, ax - 8, spec.xname || "x", { anchor: "end", italic: true, size: 14 }) + t(ay + 8, 14, spec.yname || "y", { italic: true, size: 14 });
      const lab = (v, pi) => pi ? piLabel(v) : num(v);
      for (let x = Math.ceil(x0 / xstep) * xstep; x <= x1 + 1e-9; x += xstep) if (Math.abs(x) > 1e-9 && X(x) > 8 && X(x) < W - 14)
        g += `<line x1="${X(x)}" x2="${X(x)}" y1="${ax - 3}" y2="${ax + 3}" stroke="var(--ink)"/>` + t(X(x), Math.min(H - 3, ax + 15), lab(x, spec.xpi), { anchor: "middle", size: 11, fill: "var(--muted)" });
      for (let y = Math.ceil(y0 / ystep) * ystep; y <= y1 + 1e-9; y += ystep) if (Math.abs(y) > 1e-9 && Y(y) > 18 && Y(y) < H - 6)
        g += `<line y1="${Y(y)}" y2="${Y(y)}" x1="${ay - 3}" x2="${ay + 3}" stroke="var(--ink)"/>` + t(ay - 6 < 14 ? ay + 6 : ay - 6, Y(y) + 4, lab(y, spec.ypi), { anchor: ay - 6 < 14 ? "start" : "end", size: 11, fill: "var(--muted)" });
      if (X(0) > 0 && X(0) < W && Y(0) > 0 && Y(0) < H) g += t(ay - 5, ax + 14, "0", { anchor: "end", size: 11, fill: "var(--muted)" });
    }
    // заливки: площа під графіком, між графіками, область нерівності
    (spec.fills || []).forEach((f, i) => {
      const c1 = compile(String(f.y), names), top = f.y2 === "top", bot = f.y2 === "bottom" || f.y2 == null && false;
      const c2 = (f.y2 == null || top || f.y2 === "bottom") ? null : compile(String(f.y2), names);
      const a = Math.max(x0, f.from != null ? E(f.from) : x0), b = Math.min(x1, f.to != null ? E(f.to) : x1);
      if (!(b > a)) return;
      const N = 120, up = [], dn = [];
      for (let k = 0; k <= N; k++) { const x = a + (b - a) * k / N, e = Object.create(env); e.x = x;
        const yA = clampY(safe(() => c1(e)), y0, y1), yB = top ? y1 : f.y2 === "bottom" ? y0 : c2 ? clampY(safe(() => c2(e)), y0, y1) : clampY(0, y0, y1);
        if (isFinite(yA) && isFinite(yB)) { up.push(`${X(x).toFixed(1)} ${Y(yA).toFixed(1)}`); dn.unshift(`${X(x).toFixed(1)} ${Y(yB).toFixed(1)}`); } }
      if (up.length > 1) g += `<path d="M${up.join(" L")} L${dn.join(" L")} Z" fill="${col(f.color, i)}" opacity="${f.opacity ?? 0.25}"/>`;
    });
    // многокутники
    (spec.polys || []).forEach((p, i) => { const pts = (p.pts || p).map(P); if (pts.some(q => !isPt(q) || !isFinite(q.x))) return;
      g += `<polygon points="${pts.map(q => X(q.x).toFixed(1) + "," + Y(q.y).toFixed(1)).join(" ")}" fill="${col(p.color, i)}" fill-opacity="${p.opacity ?? 0.18}" stroke="${col(p.color, i)}" stroke-width="2" stroke-linejoin="round"/>`; });
    // кола
    (spec.circles || []).forEach((c, i) => { const o = P(c.c), r = E(c.r); if (!isPt(o) || !(r > 0)) return;
      g += `<ellipse cx="${X(o.x).toFixed(1)}" cy="${Y(o.y).toFixed(1)}" rx="${(r / (x1 - x0) * W).toFixed(1)}" ry="${(r / (y1 - y0) * H).toFixed(1)}" fill="${c.fill ? col(c.color, i) : "none"}" fill-opacity=".15" stroke="${col(c.color, i)}" stroke-width="2" ${c.dash ? 'stroke-dasharray="6 4"' : ""}/>`; });
    // графіки функцій
    (spec.fns || []).forEach((f, i) => {
      const c = col(f.color, i), dash = f.dash ? 'stroke-dasharray="7 5"' : "", wdt = f.width || 2.6;
      if (f.x != null) { const xv = E(f.x); if (isFinite(xv)) g += `<line x1="${X(xv)}" x2="${X(xv)}" y1="0" y2="${H}" stroke="${c}" stroke-width="${wdt}" ${dash}/>`; return; }
      const cf = compile(String(f.y), names), a = Math.max(x0, f.from != null ? E(f.from) : x0), b = Math.min(x1, f.to != null ? E(f.to) : x1), N = 240;
      let d = "", prev = null, lastPt = null;
      for (let k = 0; k <= N; k++) {
        const x = a + (b - a) * k / N, e = Object.create(env); e.x = x; const y = safe(() => cf(e));
        if (typeof y !== "number" || !isFinite(y) || Math.abs(y) > 1e7) { prev = null; continue; }
        const sx = X(x), sy = Y(y);
        if (prev != null && Math.abs(sy - prev) > H * 1.2 && (y > y1 || y < y0 || prev < 0 || prev > H)) { prev = null; }
        const cy = Math.max(-H, Math.min(2 * H, sy));
        d += (prev == null ? "M" : "L") + sx.toFixed(1) + " " + cy.toFixed(1); prev = sy;
        if (sy >= 0 && sy <= H) lastPt = [sx, sy];
      }
      if (d) g += `<path d="${d}" fill="none" stroke="${c}" stroke-width="${wdt}" stroke-linecap="round" stroke-linejoin="round" ${dash}/>`;
      if (f.label && lastPt) { const lx = f.labelAt != null ? X(E(f.labelAt)) : null; let ly = lastPt[1];
        if (lx != null) { const e = Object.create(env); e.x = E(f.labelAt); ly = Y(safe(() => cf(e))); }
        g += t(Math.min(W - 4, lx ?? lastPt[0] - 4), Math.max(14, Math.min(H - 6, ly - 8)), fill(f.label, env, names), { anchor: "end", fill: c, bold: true, size: 13 }); }
    });
    // прямі через дві точки
    (spec.lines || []).forEach((l, i) => { const p = P(l.through[0]), q = P(l.through[1]); if (!isPt(p) || !isPt(q) || (p.x === q.x && p.y === q.y)) return;
      const dx = q.x - p.x, dy = q.y - p.y, k = 4 * Math.max(x1 - x0, y1 - y0) / Math.hypot(dx, dy);
      g += `<line x1="${X(p.x - dx * k).toFixed(1)}" y1="${Y(p.y - dy * k).toFixed(1)}" x2="${X(p.x + dx * k).toFixed(1)}" y2="${Y(p.y + dy * k).toFixed(1)}" stroke="${col(l.color, i)}" stroke-width="2.2" ${l.dash ? 'stroke-dasharray="7 5"' : ""}/>`; });
    // відрізки й вектори
    (spec.segs || []).forEach((s, i) => { const p = P(s.a ?? s[0]), q = P(s.b ?? s[1]); if (!isPt(p) || !isPt(q) || ![p.x, p.y, q.x, q.y].every(isFinite)) return;
      const c = col(s.color, s.color ? 0 : 6), x1s = X(p.x), y1s = Y(p.y), x2s = X(q.x), y2s = Y(q.y);
      g += `<line x1="${x1s.toFixed(1)}" y1="${y1s.toFixed(1)}" x2="${x2s.toFixed(1)}" y2="${y2s.toFixed(1)}" stroke="${s.color ? c : "var(--ink)"}" stroke-width="${s.width || 2.4}" stroke-linecap="round" ${s.dash ? 'stroke-dasharray="6 5"' : ""}/>`;
      if (s.arrow) { const a = Math.atan2(y2s - y1s, x2s - x1s), L = 11; g += `<path d="M${x2s.toFixed(1)} ${y2s.toFixed(1)} L${(x2s - L * Math.cos(a - .4)).toFixed(1)} ${(y2s - L * Math.sin(a - .4)).toFixed(1)} L${(x2s - L * Math.cos(a + .4)).toFixed(1)} ${(y2s - L * Math.sin(a + .4)).toFixed(1)} Z" fill="${s.color ? c : "var(--ink)"}"/>`; }
      if (s.label) { const mx = (x1s + x2s) / 2, my = (y1s + y2s) / 2, n = Math.hypot(x2s - x1s, y2s - y1s) || 1;
        g += t(mx + (y2s - y1s) / n * -14, my + (x2s - x1s) / n * 14 + 4, fill(s.label, env, names), { anchor: "middle", fill: s.color ? c : "var(--ink)", bold: true }); } });
    // кути
    (spec.angles || []).forEach((a, i) => { const A = P(a.from), B = P(a.at), Cc = P(a.to); if (![A, B, Cc].every(isPt)) return;
      const u = Math.atan2(-(A.y - B.y) * H / (y1 - y0), (A.x - B.x) * W / (x1 - x0)), v = Math.atan2(-(Cc.y - B.y) * H / (y1 - y0), (Cc.x - B.x) * W / (x1 - x0));
      let d = v - u; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
      const r = a.r || 24, bx = X(B.x), by = Y(B.y), c = col(a.color, i + 1), deg = FN.angle(A, B, Cc);
      if (a.right !== false && Math.abs(deg - 90) < 1e-6) { const s = r * 0.6, ux = Math.cos(u), uy = Math.sin(u), vx = Math.cos(v), vy = Math.sin(v);
        g += `<path d="M${bx + ux * s} ${by + uy * s} L${bx + (ux + vx) * s} ${by + (uy + vy) * s} L${bx + vx * s} ${by + vy * s}" fill="none" stroke="${c}" stroke-width="2"/>`; }
      else g += `<path d="M${bx} ${by} L${(bx + r * Math.cos(u)).toFixed(1)} ${(by + r * Math.sin(u)).toFixed(1)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${(bx + r * Math.cos(v)).toFixed(1)} ${(by + r * Math.sin(v)).toFixed(1)} Z" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="1.8"/>`;
      if (a.label !== false) { const m = u + d / 2, lr = r + 16; g += t(bx + lr * Math.cos(m), by + lr * Math.sin(m) + 4, a.label ? fill(a.label, env, names) : num(deg, a.digits ?? 0) + "°", { anchor: "middle", fill: c, bold: true }); } });
    // точки
    const handles = [];
    Object.entries(spec.points || {}).forEach(([id, p], i) => {
      const q = safe(() => env[id]); if (!isPt(q) || !isFinite(q.x) || !isFinite(q.y)) return;
      const sx = X(q.x), sy = Y(q.y), c = col(p.color, 0), drag = !!p.drag;
      if (drag) g += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="13" fill="${c}" opacity=".18"/>`;
      g += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${p.size || (drag ? 7 : 5)}" fill="${p.hollow ? "var(--surface)" : c}" stroke="${p.hollow ? c : "var(--surface)"}" stroke-width="${p.hollow ? 2.5 : 2}"/>`;
      const label = p.label === false ? "" : (p.label != null ? fill(p.label, env, names) : (/^[A-Z]\w?$/.test(id) ? id : "")) + (p.coords ? `(${num(q.x)}; ${num(q.y)})` : "");
      if (label) g += t(sx + 9, sy - 9, label, { bold: true, fill: c });
      if (drag) {
        const [xe, ye] = pointExprs(id, p), only = typeof p.drag === "string" ? p.drag.split(/\s*,\s*/) : null;
        const mx = /^[A-Za-z_]\w*$/.test(xe) && (!only || only.includes(xe)) ? xe : null, my = /^[A-Za-z_]\w*$/.test(ye) && (!only || only.includes(ye)) ? ye : null;
        handles.push({ x: sx, y: sy, set: (px, py) => { const o = {}; if (mx) o[mx] = x0 + px / W * (x1 - x0); if (my) o[my] = y0 + (H - py) / H * (y1 - y0); return o; } });
      }
    });
    (spec.texts || []).forEach(tx => { const p = P(tx.at); if (isPt(p)) g += t(X(p.x), Y(p.y), fill(tx.t, env, names), { anchor: tx.anchor || "middle", fill: col(tx.color, 6), bold: tx.bold }); });
    return { w: W, h: H, body: g, handles, alt: spec.alt || "Координатна площина" };
  }
};
function autoStep(span) { for (const s of [0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000]) if (span / s <= 12) return s; return Math.pow(10, Math.ceil(Math.log10(span / 10))); }
function clampY(y, y0, y1) { if (!isFinite(y)) return NaN; const m = (y1 - y0) * 2; return Math.max(y0 - m, Math.min(y1 + m, y)); }

/* ---- numline: числова пряма з точками, стрибками й проміжками ---- */
KINDS.numline = {
  render(spec, env) {
    const names = fnNames(spec), [a, b] = spec.view || [-10, 10], W = 320, pad = 16, top = (spec.jumps || []).length ? 52 : 24, H = top + 46;
    const X = x => pad + (x - a) / (b - a) * (W - 2 * pad), y = top, E = ex => safe(() => compile(String(ex), names)(env));
    const tick = spec.tick ?? autoStep(b - a) , lstep = spec.labels ?? tick;
    let g = "";
    (spec.intervals || []).forEach((iv, i) => { const c = col(iv.color, i), f = iv.from == null ? -Infinity : E(iv.from), to = iv.to == null ? Infinity : E(iv.to);
      const xa = isFinite(f) ? X(Math.max(a, f)) : pad - 8, xb = isFinite(to) ? X(Math.min(b, to)) : W - 4;
      g += `<rect x="${xa}" y="${y - 7}" width="${Math.max(0, xb - xa)}" height="14" rx="7" fill="${c}" opacity=".3"/>`;
      [[f, iv.open?.[0]], [to, iv.open?.[1]]].forEach(([v, open]) => { if (isFinite(v) && v >= a && v <= b) g += `<circle cx="${X(v)}" cy="${y}" r="6" fill="${open ? "var(--surface)" : c}" stroke="${c}" stroke-width="2.5"/>`; }); });
    g += `<line x1="${pad - 10}" x2="${W - 4}" y1="${y}" y2="${y}" stroke="var(--ink)" stroke-width="2"/><path d="M${W - 4} ${y} l-8 -5 v10 z" fill="var(--ink)"/>`;
    const n = Math.round((b - a) / tick);
    for (let k = 0; k <= n; k++) { const v = clean(a + k * tick), major = Math.abs(v / lstep - Math.round(v / lstep)) < 1e-6;
      g += `<line x1="${X(v)}" x2="${X(v)}" y1="${y - (major ? 8 : 5)}" y2="${y + (major ? 8 : 5)}" stroke="var(--ink)" stroke-width="${major ? 1.8 : 1}"/>`;
      const lx = X(v), lab = spec.pi ? piLabel(v) : spec.fmt ? fill(`{v|${spec.fmt}}`, { v }) : num(v), half = lab.length * 3.6;   // крайні підписи не виходять за поле
      if (major) g += t(Math.max(half + 1, Math.min(W - half - 1, lx)), y + 26, lab, { anchor: "middle", size: 13, fill: Math.abs(v) < 1e-9 ? "var(--ink)" : "var(--muted)", bold: Math.abs(v) < 1e-9 }); }
    const jumps = (spec.jumps || []).flatMap(j => { if (j.repeat == null) return [j]; const n = Math.max(0, Math.min(60, Math.round(E(j.repeat)))), f0 = E(j.from), by = E(j.by);
      return [...Array(n)].map((_, k) => ({ ...j, from: f0 + k * by, to: f0 + (k + 1) * by, label: k === n - 1 ? j.label : null })); });
    jumps.forEach((j, i) => { const f = E(j.from), to = E(j.to); if (!isFinite(f) || !isFinite(to) || Math.abs(to - f) < 1e-9) return;
      const c = col(j.color, i), x1 = X(f), x2 = X(to), h = Math.min(36, 10 + Math.abs(x2 - x1) / 4), dir = Math.sign(x2 - x1);
      g += `<path d="M${x1} ${y - 6} Q${(x1 + x2) / 2} ${y - 6 - 2 * h} ${x2} ${y - 6}" fill="none" stroke="${c}" stroke-width="2.4"/><path d="M${x2} ${y - 5} l${-dir * 9} -7 l${dir * 1} 10 z" fill="${c}"/>`;
      if (j.label) g += t((x1 + x2) / 2, y - 10 - h, fill(j.label, env, names), { anchor: "middle", fill: c, bold: true }); });
    const handles = [];
    Object.entries(spec.points || {}).forEach(([id, p]) => {
      const xv = safe(() => env[id]?.x); if (!isFinite(xv)) return; const sx = X(Math.max(a, Math.min(b, xv))), c = col(p.color, 0);
      if (p.drag) g += `<circle cx="${sx}" cy="${y}" r="14" fill="${c}" opacity=".18"/>`;
      g += `<circle cx="${sx}" cy="${y}" r="${p.drag ? 8 : 6}" fill="${p.hollow ? "var(--surface)" : c}" stroke="${p.hollow ? c : "var(--surface)"}" stroke-width="2.5"/>`;
      const label = p.label === false ? "" : p.label != null ? fill(p.label, env, names) : id;
      if (label && !(spec.jumps || []).length) g += t(sx, y - 14, label, { anchor: "middle", bold: true, fill: c });
      else if (label) g += t(sx, y + 42, label, { anchor: "middle", bold: true, fill: c, size: 11 });
      const [xe] = pointExprs(id, p);
      if (p.drag && /^[A-Za-z_]\w*$/.test(xe)) handles.push({ x: sx, y, set: px => ({ [xe]: a + (px - pad) / (W - 2 * pad) * (b - a) }) });
    });
    return { w: W, h: H, body: g, handles, alt: spec.alt || "Числова пряма" };
  }
};

/* ---- rect: прямокутник a × b на клітинках (площа, периметр, множення, розподільна властивість) ---- */
KINDS.rect = {
  render(spec, env) {
    const names = fnNames(spec), E = ex => safe(() => compile(String(ex), names)(env));
    const a = Math.max(0, E(spec.a ?? "a")), b = Math.max(0, E(spec.b ?? "b")), [ma, mb] = spec.max || [Math.max(a, 10), Math.max(b, 6)];
    const W = 320, u = Math.min((W - 40) / ma, 230 / mb), H = Math.round(mb * u + 40), ox = 30, oy = 26, c = col(spec.color, 0);
    let g = "";
    if (spec.ghost !== false) g += `<rect x="${ox}" y="${oy}" width="${ma * u}" height="${mb * u}" fill="none" stroke="var(--line)" stroke-dasharray="3 4"/>`;
    const split = spec.split != null ? Math.max(0, Math.min(a, E(spec.split))) : null, splitY = spec.splitY != null ? Math.max(0, Math.min(b, E(spec.splitY))) : null;
    if (splitY != null) {   // розріз в обидва боки: (a + b)(c + d) — чотири частини різними кольорами
      const xs = split != null ? [0, split, a] : [0, a], ys = [0, splitY, b]; let k = 0;
      for (let i = 0; i + 1 < xs.length; i++) for (let j = 0; j + 1 < ys.length; j++) g += `<rect x="${ox + xs[i] * u}" y="${oy + ys[j] * u}" width="${(xs[i + 1] - xs[i]) * u}" height="${(ys[j + 1] - ys[j]) * u}" fill="${col(null, k++)}" opacity=".3"/>`;
    } else if (split != null) {
      g += `<rect x="${ox}" y="${oy}" width="${split * u}" height="${b * u}" fill="${c}" opacity=".35"/><rect x="${ox + split * u}" y="${oy}" width="${(a - split) * u}" height="${b * u}" fill="${col(spec.color2 || "blue")}" opacity=".3"/>`;
    } else g += `<rect x="${ox}" y="${oy}" width="${a * u}" height="${b * u}" fill="${c}" opacity=".3"/>`;
    if (spec.cells !== false) { for (let i = 1; i < a; i++) if (i <= a) g += `<line x1="${ox + i * u}" x2="${ox + i * u}" y1="${oy}" y2="${oy + b * u}" stroke="${c}" stroke-opacity=".55"/>`;
      for (let j = 1; j < b; j++) g += `<line x1="${ox}" x2="${ox + a * u}" y1="${oy + j * u}" y2="${oy + j * u}" stroke="${c}" stroke-opacity=".55"/>`; }
    g += `<rect x="${ox}" y="${oy}" width="${a * u}" height="${b * u}" fill="none" stroke="${c}" stroke-width="2.6"/>`;
    if (split != null) g += `<line x1="${ox + split * u}" x2="${ox + split * u}" y1="${oy - 4}" y2="${oy + b * u + 4}" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>`;
    if (splitY != null) g += `<line y1="${oy + splitY * u}" y2="${oy + splitY * u}" x1="${ox - 4}" x2="${ox + a * u + 4}" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>`;
    if (spec.labels !== false) {
      const sl = spec.splitLabels, syl = spec.splitYLabels;   // власні підписи частин (шаблони), напр. дробами: ["{p}/4", "{4-p}/4"]
      if (split != null && split > 0 && split < a) g += t(ox + split * u / 2, oy - 8, sl ? fill(sl[0], env, names) : num(split), { anchor: "middle", bold: true }) + t(ox + (split + a) * u / 2, oy - 8, sl ? fill(sl[1], env, names) : num(a - split), { anchor: "middle", bold: true });
      else g += t(ox + a * u / 2, oy - 8, spec.aLabel ? fill(spec.aLabel, env, names) : num(a) + (spec.unit ? " " + spec.unit : ""), { anchor: "middle", bold: true });
      if (splitY != null && splitY > 0 && splitY < b) g += t(ox - 8, oy + splitY * u / 2 + 4, syl ? fill(syl[0], env, names) : num(splitY), { anchor: "end", bold: true }) + t(ox - 8, oy + (splitY + b) * u / 2 + 4, syl ? fill(syl[1], env, names) : num(b - splitY), { anchor: "end", bold: true });
      else g += t(ox - 8, oy + b * u / 2 + 4, spec.bLabel ? fill(spec.bLabel, env, names) : num(b) + (spec.unit ? " " + spec.unit : ""), { anchor: "end", bold: true });
    }
    const handles = [];
    const pa = /^[A-Za-z_]\w*$/.test(String(spec.a ?? "a")) ? String(spec.a ?? "a") : null, pb = /^[A-Za-z_]\w*$/.test(String(spec.b ?? "b")) ? String(spec.b ?? "b") : null;
    if (spec.drag !== false && (pa || pb)) { const hx = ox + a * u, hy = oy + b * u;
      g += `<circle cx="${hx}" cy="${hy}" r="13" fill="${c}" opacity=".2"/><circle cx="${hx}" cy="${hy}" r="7" fill="${c}" stroke="var(--surface)" stroke-width="2"/>`;
      handles.push({ x: hx, y: hy, set: (px, py) => { const o = {}; if (pa) o[pa] = (px - ox) / u; if (pb) o[pb] = (py - oy) / u; return o; } }); }
    return { w: W, h: H, body: g, handles, alt: spec.alt || `Прямокутник ${num(a)} на ${num(b)}` };
  }
};

/* ---- fraction: смужки, круги й сотка (дроби, відсотки, рівні дроби) ---- */
KINDS.fraction = {
  render(spec, env) {
    const names = fnNames(spec), E = ex => safe(() => compile(String(ex), names)(env)), W = 320;
    const items = spec.items || [{ shape: "bar", n: "n", k: "k" }];
    const circles = items.filter(i => i.shape === "circle"), others = items.filter(i => i.shape !== "circle");
    let g = "", y = 6;
    others.forEach((it, j) => { const c = col(it.color, j);
      if (it.shape === "grid") { const k = Math.round(E(it.k)), s = Math.min(16, (W - 20) / 10), ox = (W - s * 10) / 2;
        for (let i = 0; i < 100; i++) { const r = Math.floor(i / 10), cc = i % 10; g += `<rect x="${ox + cc * s}" y="${y + r * s}" width="${s - 1.5}" height="${s - 1.5}" rx="2" fill="${i < k ? c : "var(--chip)"}" stroke="var(--line)" stroke-width=".8"/>`; }
        if (it.label) g += t(W / 2, y + 10 * s + 16, fill(it.label, env, names), { anchor: "middle", bold: true }); y += 10 * s + (it.label ? 26 : 8); return; }
      const n = Math.max(1, Math.round(E(it.n))), k = Math.round(E(it.k)), lw = it.label ? 56 : 0, bw = W - 8 - lw, h = 40;
      for (let i = 0; i < n; i++) g += `<rect x="${(lw + 4 + i * bw / n).toFixed(1)}" y="${y}" width="${(bw / n).toFixed(1)}" height="${h}" fill="${i < k ? c : "var(--surface)"}" stroke="var(--ink)" stroke-width="1.5"/>`;
      if (k > n) g += t(W - 4, y - 2, `+${k - n}`, { anchor: "end", fill: "var(--bad)", bold: true });
      if (it.label) g += t(lw - 4, y + h / 2 + 5, fill(it.label, env, names), { anchor: "end", bold: true, size: 14 });
      y += h + 14; });
    if (circles.length) { const r = Math.min(70, (W / circles.length - 16) / 2);
      circles.forEach((it, j) => { const n = Math.max(1, Math.round(E(it.n))), k = Math.round(E(it.k)), cx = W / circles.length * (j + .5), cy = y + r + 2, c = col(it.color, j);
        for (let i = 0; i < n; i++) { const a0 = -Math.PI / 2 + i * 2 * Math.PI / n, a1 = a0 + 2 * Math.PI / n;
          g += n === 1 ? `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${k >= 1 ? c : "var(--surface)"}" stroke="var(--ink)" stroke-width="1.5"/>`
            : `<path d="M${cx} ${cy} L${(cx + r * Math.cos(a0)).toFixed(1)} ${(cy + r * Math.sin(a0)).toFixed(1)} A${r} ${r} 0 0 1 ${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)} Z" fill="${i < k ? c : "var(--surface)"}" stroke="var(--ink)" stroke-width="1.5" stroke-linejoin="round"/>`; }
        if (k > n) g += t(cx + r, cy - r + 4, `+${k - n}`, { anchor: "end", fill: "var(--bad)", bold: true });
        if (it.label) g += t(cx, cy + r + 20, fill(it.label, env, names), { anchor: "middle", bold: true, size: 14 }); });
      y += 2 * r + (circles.some(c => c.label) ? 30 : 8); }
    return { w: W, h: Math.max(40, y), body: g, handles: [], alt: spec.alt || "Модель дробу" };
  }
};

/* ---- chart: стовпчаста або кругова діаграма, середнє значення ---- */
KINDS.chart = {
  render(spec, env) {
    const names = fnNames(spec), E = ex => safe(() => compile(String(ex), names)(env)), W = 320;
    const bars = (spec.bars || []).map((b, i) => ({ label: b.label, v: Math.max(0, E(b.v)), c: col(b.color, spec.mono ? 0 : i) }));
    let g = "", H;
    if (spec.pie) { H = 200; const tot = bars.reduce((a, b) => a + b.v, 0) || 1, cx = 100, cy = 100, r = 88; let a = -Math.PI / 2;
      bars.forEach((b, i) => { const da = b.v / tot * 2 * Math.PI; if (b.v <= 0) return;
        g += da >= 2 * Math.PI - 1e-9 ? `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${b.c}"/>` : `<path d="M${cx} ${cy} L${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)} A${r} ${r} 0 ${da > Math.PI ? 1 : 0} 1 ${(cx + r * Math.cos(a + da)).toFixed(1)} ${(cy + r * Math.sin(a + da)).toFixed(1)} Z" fill="${b.c}" stroke="var(--surface)" stroke-width="2"/>`;
        a += da; });
      bars.forEach((b, i) => { const yy = 30 + i * 24; g += `<rect x="205" y="${yy - 11}" width="14" height="14" rx="3" fill="${b.c}"/>` + t(225, yy, spec.legend === false || spec.legend === "label" ? b.label : spec.legend === "value" ? `${b.label} · ${num(b.v)}` : `${b.label} · ${num(b.v / tot * 100, 0)}\u00A0%`, { size: 12 }); });
      return { w: W, h: Math.max(H, 30 + bars.length * 24), body: g, handles: [], alt: spec.alt || "Кругова діаграма" }; }
    H = 200; const max = spec.max ?? Math.max(1, ...bars.map(b => b.v)), pl = 30, pb = 26, pt = 18, bw = (W - pl - 6) / Math.max(1, bars.length), Y = v => pt + (H - pt - pb) * (1 - v / max);
    const st = autoStep(max / 0.6) ; for (let v = 0; v <= max + 1e-9; v += st) g += `<line x1="${pl}" x2="${W - 4}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/>` + t(pl - 5, Y(v) + 4, num(v), { anchor: "end", size: 10, fill: "var(--muted)" });
    bars.forEach((b, i) => { const x = pl + i * bw + bw * .18, w = bw * .64, y = Y(Math.min(max, b.v));
      g += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${Math.max(0, H - pb - y).toFixed(1)}" rx="3" fill="${b.c}"/>` + t(x + w / 2, y - 5, num(b.v), { anchor: "middle", size: 11, bold: true }) + t(x + w / 2, H - 8, b.label, { anchor: "middle", size: 11, fill: "var(--muted)" }); });
    if (spec.mean) { const m = bars.reduce((a, b) => a + b.v, 0) / Math.max(1, bars.length); g += `<line x1="${pl}" x2="${W - 4}" y1="${Y(m)}" y2="${Y(m)}" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6 4"/>` + t(W - 6, Y(m) - 6, `середнє ${num(m, 1)}`, { anchor: "end", fill: "var(--bad)", bold: true, size: 11 }); }
    return { w: W, h: H, body: g, handles: [], alt: spec.alt || "Стовпчаста діаграма" };
  }
};

/* ---- column: дії в стовпчик (+, −, ·) з переносами; параметр step відкриває розряди по одному ---- */
KINDS.column = {
  render(spec, env) {
    const names = fnNames(spec), E = ex => safe(() => compile(String(ex), names)(env)), op = spec.op || "+";
    const a = Math.round(Math.abs(E(spec.a ?? "a"))), b = Math.round(Math.abs(E(spec.b ?? "b"))), st = spec.step != null ? E(spec.step) : Infinity;
    if (op === ":") return divRender(spec, env, a, b, st);
    const res = op === "+" ? a + b : op === "-" ? a - b : a * b, D = n => String(n).split("").reverse().map(Number);
    const da = D(a), db = D(b), cw = 24, top = 30, rh = 32;
    const rows = []; let resultRow, marks = {}, resShown;   // marks: перенос/позика над розрядом
    if (op === "*" && db.length > 1) {
      const parts = db.map((d, j) => ({ digits: D(a * d), shift: j }));
      resShown = st > parts.length;
      rows.push({ digits: da, shift: 0 }, { digits: db, shift: 0, op: "·" }, { line: true });
      parts.forEach((p, j) => rows.push({ ...p, hidden: j >= st, op: j > 0 ? "+" : "" }));
      rows.push({ line: true }); resultRow = { digits: D(res), shift: 0, hidden: !resShown, result: true }; rows.push(resultRow);
    } else {
      let c = 0; const out = D(res);
      if (op === "+") for (let i = 0; i < out.length; i++) { const s = (da[i] || 0) + (db[i] || 0) + c; c = s >= 10 ? 1 : 0; if (c && i < st) marks[i + 1] = "1"; }
      if (op === "-") { const w = da.slice(); for (let i = 0; i < w.length; i++) if (w[i] < (db[i] || 0)) { let k = i + 1; while (w[k] === 0) { w[k] = 9; if (k < st) marks[k] = "·"; k++; } w[k]--; if (i < st) marks[k] = "·"; w[i] += 10; } }
      if (op === "*") for (let i = 0; i < out.length; i++) { const s = (da[i] || 0) * (db[0] || 0) + c; c = Math.floor(s / 10); if (c && i < st && i + 1 < da.length) marks[i + 1] = String(c); }
      rows.push({ digits: da, shift: 0 }, { digits: db, shift: 0, op: op === "*" ? "·" : op === "-" ? "−" : "+" }, { line: true });
      if (spec.input) { marks = spec.carries ? marks : {}; const n = String(res).length; resultRow = { digits: [...Array(n)].map((_, i) => env["d" + i]), shift: 0, result: true, input: true }; }
      else resultRow = { digits: D(res), shift: 0, upto: st, result: true };
      rows.push(resultRow);
    }
    const ncol = Math.max(...rows.filter(r => r.digits).map(r => r.digits.length + r.shift)) + 1, W = 320, R = W / 2 + ncol * cw / 2;
    const H = top + rows.reduce((h, r) => h + (r.line ? 8 : rh), 0) + 10;
    let g = "", y = top; const handles = [];
    if (isFinite(st) && !(op === "*" && db.length > 1) && st >= 1 && st <= resultRow.digits.length) g += `<rect x="${R - st * cw}" y="${top - 26}" width="${cw}" height="${H - top + 18}" rx="6" fill="var(--accent)" opacity=".1"/>`;
    for (const [i, m] of Object.entries(marks)) g += t(R - (+i + .5) * cw, top - 8, m, { anchor: "middle", size: 13, fill: "var(--bad)", bold: true });
    for (const r of rows) {
      if (r.line) { g += `<line x1="${R - ncol * cw}" x2="${R}" y1="${y + 2}" y2="${y + 2}" stroke="var(--ink)" stroke-width="2"/>`; y += 8; continue; }
      if (r.op) g += t(R - ncol * cw + 4, y + 20, r.op, { size: 20, fill: "var(--muted)" });
      r.digits.forEach((d, i) => { const vis = !r.hidden && (r.upto == null || i < r.upto); const x = R - (i + r.shift + .5) * cw;
        if (r.input) { const empty = !(d >= 0); g += `<rect x="${x - 10}" y="${y + 3}" width="20" height="26" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>` + t(x, y + 22, empty ? "?" : String(d), { anchor: "middle", size: 20, fill: empty ? "var(--muted)" : "var(--accent)", bold: true });
          handles.push({ x, y: y + 16, tap: () => ({ ["d" + i]: d >= 9 ? 0 : (d < 0 ? 0 : d + 1) }), set: () => ({}) }); return; }
        g += vis ? t(x, y + 22, String(d), { anchor: "middle", size: 22, fill: r.result ? "var(--accent)" : "var(--ink)", bold: r.result, italic: false })
                 : `<rect x="${x - 8}" y="${y + 6}" width="16" height="20" rx="3" fill="none" stroke="var(--line)" stroke-dasharray="3 3"/>`; });
      y += rh;
    }
    return { w: W, h: H, body: g, handles, alt: spec.alt || `Обчислення в стовпчик: ${a} ${op} ${b}` };
  }
};

function divRender(spec, env, a, b, st) {
  const steps = longDivision(a, b), A = String(a), cw = 22, rh = 28, W = 320, top = 12;
  const ox = Math.max(14, Math.min(60, W / 2 - (A.length + String(b).length + 2) * cw / 2)), X = i => ox + (i + .5) * cw, bar = ox + A.length * cw + 6;
  const shown = spec.input ? 0 : Math.min(steps.length, isFinite(st) ? Math.max(0, st) : steps.length);
  const num = (str, endPos, y, o = {}) => str.split("").map((ch, k) => t(X(endPos - str.length + 1 + k), y, ch, { anchor: "middle", size: 20, ...o })).join("");
  let g = num(A, A.length - 1, top + 20), y = top + rh, handles = [];
  g += `<line x1="${bar}" x2="${bar}" y1="${top}" y2="${top + 2 * rh}" stroke="var(--ink)" stroke-width="2"/><line x1="${bar}" x2="${W - 10}" y1="${top + rh}" y2="${top + rh}" stroke="var(--ink)" stroke-width="2"/>`;
  g += t(bar + 10, top + 20, String(b), { size: 20 });
  // частка під дільником: цифри відкриваються по кроках або вписуються дотиком
  steps.forEach((s, k) => { const qx = bar + 10 + k * cw + cw / 2, qy = top + rh + 22;
    if (spec.input) { const d = env["d" + (steps.length - 1 - k)], empty = !(d >= 0), idx = steps.length - 1 - k;
      g += `<rect x="${qx - 10}" y="${qy - 18}" width="20" height="26" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>` + t(qx, qy, empty ? "?" : String(d), { anchor: "middle", size: 20, fill: empty ? "var(--muted)" : "var(--accent)", bold: true });
      handles.push({ x: qx, y: qy - 6, tap: () => ({ ["d" + idx]: d >= 9 ? 0 : (d < 0 ? 0 : d + 1) }), set: () => ({}) }); }
    else if (k < shown) g += t(qx, qy, String(s.q), { anchor: "middle", size: 20, fill: "var(--accent)", bold: true });
    else g += `<rect x="${qx - 8}" y="${qy - 16}" width="16" height="20" rx="3" fill="none" stroke="var(--line)" stroke-dasharray="3 3"/>`; });
  // проміжні кроки: віднімання й знесення наступної цифри
  for (let k = 0; k < shown; k++) { const s = steps[k], SUB = String(s.sub);
    if (s.q === 0 && k > 0 && k < steps.length - 1) continue;   // нуль у частці: нічого не віднімаємо, просто зносимо наступну цифру
    if (s.q === 0 && k > 0) { g += num(String(s.rem), s.pos, y + 20, { fill: s.rem ? "var(--bad)" : "var(--ink)", bold: true }); if (s.rem) g += t(X(s.pos) + 16, y + 18, "остача", { size: 11, fill: "var(--bad)" }); y += rh; continue; }   // остання цифра частки — 0: лишається остача
    if (k > 0) { g += num(String(s.cur), s.pos, y + 20); y += rh; }
    g += t(X(s.pos - Math.max(SUB.length, String(s.cur).length)) + 4, y + 2, "−", { size: 16, fill: "var(--muted)" }) + num(SUB, s.pos, y + 20, { fill: "var(--muted)" });
    const w = Math.max(SUB.length, String(s.cur).length); g += `<line x1="${X(s.pos - w + 1) - cw / 2}" x2="${X(s.pos) + cw / 2}" y1="${y + 26}" y2="${y + 26}" stroke="var(--ink)" stroke-width="1.6"/>`;
    y += rh;
    if (k === steps.length - 1) { g += num(String(s.rem), s.pos, y + 20, { fill: s.rem ? "var(--bad)" : "var(--ink)", bold: true }); if (s.rem) g += t(X(s.pos) + 16, y + 18, "остача", { size: 11, fill: "var(--bad)" }); y += rh; } }
  if (shown > 0 && shown < steps.length) { const n = steps[shown]; g += num(String(n.cur), n.pos, y + 20, { fill: "var(--accent)" }); y += rh; }
  const full = spec.input ? 0 : steps.filter((q, k) => q.q !== 0 || k === 0).length * 2 + 1;   // висота не стрибає між кроками
  return { w: W, h: Math.max(y + 12, top + 2 * rh + 16, top + full * rh + 12), body: g, handles, alt: spec.alt || `Ділення куточком: ${a} : ${b}` };
}

/* ---- balance: терези для рівнянь (коробки x і гирі по 1) ---- */
KINDS.balance = {
  render(spec, env) {
    const names = fnNames(spec), E = ex => safe(() => compile(String(ex), names)(env)), W = 320, H = 190;
    const xv = E(spec.x ?? "x"), side = s => (s || []).map(([kind, n]) => ({ kind, n: Math.max(0, Math.round(E(n))) }));
    const L = side(spec.left), R = side(spec.right), w = s => s.reduce((a, it) => a + it.n * (it.kind === "x" ? xv : +it.kind || 1), 0);
    const lw = w(L), rw = w(R), tilt = Math.max(-12, Math.min(12, (rw - lw) / Math.max(1, Math.abs(lw) + Math.abs(rw)) * 40)) * Math.PI / 180;
    const cx = W / 2, cy = 70, arm = 98, lx = cx - arm * Math.cos(tilt), ly = cy - arm * Math.sin(tilt), rx = cx + arm * Math.cos(tilt), ry = cy + arm * Math.sin(tilt);
    let g = `<path d="M${cx} ${cy} L${cx - 22} ${H - 8} H${cx + 22} Z" fill="var(--chip)" stroke="var(--muted)" stroke-width="1.5"/><line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="5" fill="var(--ink)"/>`;
    const pan = (px, py, items) => { let s = `<line x1="${px}" y1="${py}" x2="${px - 44}" y2="${py + 36}" stroke="var(--muted)"/><line x1="${px}" y1="${py}" x2="${px + 44}" y2="${py + 36}" stroke="var(--muted)"/><path d="M${px - 54} ${py + 36} H${px + 54} l-8 8 H${px - 46} Z" fill="var(--muted)"/>`;
      const icons = []; items.forEach(it => { for (let i = 0; i < it.n; i++) icons.push(it.kind); });
      // розкладка «потоком»: ширина значка залежить від підпису (x, 1, 500…)
      let cx0 = px - 50, row = 0, shown = 0; const wOf = k => k === "x" ? 16 : Math.max(16, 7 + String(k).length * 6.5);
      for (const k of icons) { const w = wOf(k); if (cx0 + w > px + 52) { row++; cx0 = px - 50; } if (row > 2) break;
        const ix = cx0, iy = py + 36 - 17 - row * 17; cx0 += w + 1; shown++;
        s += k === "x" ? `<rect x="${ix}" y="${iy}" width="16" height="16" rx="3" fill="var(--accent)"/><text x="${ix + 8}" y="${iy + 12}" font-size="11" text-anchor="middle" fill="var(--accent-ink)" font-style="italic" font-family="var(--mathf)">x</text>`
          : `<rect x="${ix}" y="${iy}" width="${w}" height="16" rx="8" fill="var(--gold)"/><text x="${ix + w / 2}" y="${iy + 12}" font-size="10" text-anchor="middle" fill="#fff" font-weight="700">${k}</text>`; }
      if (icons.length > shown) s += t(px, py + 60, `ще +${icons.length - shown}`, { anchor: "middle", size: 11, fill: "var(--muted)" });
      return s; };
    g += pan(lx, ly, L) + pan(rx, ry, R);
    const state = Math.abs(lw - rw) < 1e-9 ? "рівновага" : lw > rw ? "переважує ліва шалька" : "переважує права шалька";
    g += t(cx, 18, state, { anchor: "middle", bold: true, fill: Math.abs(lw - rw) < 1e-9 ? "var(--ok)" : "var(--muted)", size: 13 });
    return { w: W, h: H, body: g, handles: [], alt: spec.alt || `Терези: ${state}` };
  }
};

/* ---- solid: просторове тіло, яке можна обертати пальцем (паралелепіпед, призма, піраміда) ---- */
KINDS.solid = {
  view: () => ({ yaw: -0.6, pitch: 0.42 }),
  render(spec, env, view) {
    const names = fnNames(spec), E = ex => safe(() => compile(String(ex), names)(env)), W = 320, H = spec.h || 240;
    const { V, F } = solidMesh(spec, E);
    if (!V.length) return { w: W, h: H, body: "", handles: [], alt: "" };
    const cyw = Math.cos(view.yaw), syw = Math.sin(view.yaw), cp = Math.cos(view.pitch), sp = Math.sin(view.pitch);
    const ctr = V.reduce((a, v) => [a[0] + v[0] / V.length, a[1] + v[1] / V.length, a[2] + v[2] / V.length], [0, 0, 0]);
    const R = Math.max(...V.map(v => Math.hypot(v[0] - ctr[0], v[1] - ctr[1], v[2] - ctr[2]))) || 1, sc = (Math.min(W, H) / 2 - 20) / R;
    const rot = v => { const x = v[0] - ctr[0], y = v[1] - ctr[1], z = v[2] - ctr[2]; const x1 = x * cyw + z * syw, z1 = -x * syw + z * cyw; const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp; return [x1, y2, z2]; };
    const P = V.map(rot), S = P.map(p => [W / 2 + p[0] * sc, H / 2 - p[1] * sc]);
    const vis = F.map(f => { const a = P[f[0]], b = P[f[1]], c = P[f[2]]; return ((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])) > 1e-9; });
    const edges = new Map(); F.forEach((f, fi) => f.forEach((v, k) => { const w = f[(k + 1) % f.length], key = v < w ? v + "-" + w : w + "-" + v; const e = edges.get(key) || { a: v, b: w, vis: false }; e.vis = e.vis || vis[fi]; edges.set(key, e); }));
    let g = "";
    F.forEach((f, fi) => { if (vis[fi]) g += `<polygon points="${f.map(i => S[i].map(z => z.toFixed(1)).join(",")).join(" ")}" fill="${col(spec.color, 0)}" fill-opacity="${spec.cubes ? .16 : .12 + .1 * (fi % 3)}"/>`; });
    if (spec.cubes && spec.shape === "box") { const a = Math.round(E(spec.a ?? "a")), b = Math.round(E(spec.b ?? "b")), c = Math.round(E(spec.c ?? "c"));
      const line = (p, q) => { const s1 = S[0] && [W / 2 + rot(p)[0] * sc, H / 2 - rot(p)[1] * sc], s2 = [W / 2 + rot(q)[0] * sc, H / 2 - rot(q)[1] * sc]; return `<line x1="${s1[0].toFixed(1)}" y1="${s1[1].toFixed(1)}" x2="${s2[0].toFixed(1)}" y2="${s2[1].toFixed(1)}" stroke="${col(spec.color, 0)}" stroke-opacity=".6" stroke-width="1"/>`; };
      // сітка одиничних кубиків на видимих гранях паралелепіпеда (грані 0..5 у порядку solidMesh)
      const faceGrid = [
        (k) => { let s = ""; for (let i = 1; i < a; i++) s += line([i, 0, 0], [i, 0, c]); for (let j = 1; j < c; j++) s += line([0, 0, j], [a, 0, j]); return s; },
        (k) => { let s = ""; for (let i = 1; i < a; i++) s += line([i, b, 0], [i, b, c]); for (let j = 1; j < c; j++) s += line([0, b, j], [a, b, j]); return s; },
        (k) => { let s = ""; for (let i = 1; i < a; i++) s += line([i, 0, 0], [i, b, 0]); for (let j = 1; j < b; j++) s += line([0, j, 0], [a, j, 0]); return s; },
        (k) => { let s = ""; for (let i = 1; i < a; i++) s += line([i, 0, c], [i, b, c]); for (let j = 1; j < b; j++) s += line([0, j, c], [a, j, c]); return s; },
        (k) => { let s = ""; for (let i = 1; i < c; i++) s += line([0, 0, i], [0, b, i]); for (let j = 1; j < b; j++) s += line([0, j, 0], [0, j, c]); return s; },
        (k) => { let s = ""; for (let i = 1; i < c; i++) s += line([a, 0, i], [a, b, i]); for (let j = 1; j < b; j++) s += line([a, j, 0], [a, j, c]); return s; }];
      F.forEach((f, fi) => { if (vis[fi] && faceGrid[fi]) g += faceGrid[fi](); }); }
    for (const e of edges.values()) g += `<line x1="${S[e.a][0].toFixed(1)}" y1="${S[e.a][1].toFixed(1)}" x2="${S[e.b][0].toFixed(1)}" y2="${S[e.b][1].toFixed(1)}" stroke="var(--ink)" stroke-width="${e.vis ? 2.2 : 1.4}" ${e.vis ? "" : 'stroke-dasharray="5 4" stroke-opacity=".6"'} stroke-linecap="round"/>`;
    (spec.marks || []).forEach(m => { const i = m.v; if (S[i]) g += `<circle cx="${S[i][0]}" cy="${S[i][1]}" r="4" fill="var(--accent)"/>` + t(S[i][0] + 7, S[i][1] - 7, m.label, { bold: true }); });
    if (spec.labels !== false && spec.shape === "box") { const a = E(spec.a ?? "a"), b = E(spec.b ?? "b"), c = E(spec.c ?? "c");
      const mid = (p, q, s) => { const m = rot([(p[0] + q[0]) / 2, (p[1] + q[1]) / 2, (p[2] + q[2]) / 2]); return t(W / 2 + m[0] * sc, H / 2 - m[1] * sc + 4, s, { anchor: "middle", bold: true, fill: "var(--accent)" }); };
      g += mid([0, 0, c], [a, 0, c], num(a)) + mid([a, 0, c], [a, b, c], num(b)) + mid([a, 0, 0], [a, 0, c], num(c)); }
    g += t(W - 6, H - 8, "обертай пальцем", { anchor: "end", size: 10, fill: "var(--muted)" });
    return { w: W, h: H, body: g, handles: [], alt: spec.alt || "Просторове тіло", rotate: true };
  }
};
function solidMesh(spec, E) {
  const sh = spec.shape || "box";
  if (sh === "box") { const a = E(spec.a ?? "a"), b = E(spec.b ?? "b"), c = E(spec.c ?? "c"); if (![a, b, c].every(v => v > 0)) return { V: [], F: [] };
    // вершини: x — довжина a, y — висота b, z — глибина c
    const V = [[0, 0, 0], [a, 0, 0], [a, b, 0], [0, b, 0], [0, 0, c], [a, 0, c], [a, b, c], [0, b, c]];
    const F = [[0, 4, 5, 1], [3, 2, 6, 7], [0, 1, 2, 3], [4, 7, 6, 5], [0, 3, 7, 4], [1, 5, 6, 2]];
    return { V, F }; }
  const n = Math.max(3, Math.round(E(spec.n ?? 4))), r = E(spec.r ?? 1), h = E(spec.h ?? 2); if (!(r > 0 && h > 0)) return { V: [], F: [] };
  const base = [...Array(n)].map((_, i) => { const a = i * 2 * Math.PI / n + Math.PI / n; return [r * Math.cos(a), 0, r * Math.sin(a)]; });
  if (sh === "prism") { const top = base.map(v => [v[0], h, v[2]]), V = base.concat(top);
    const F = [[...Array(n)].map((_, i) => i), [...Array(n)].map((_, i) => 2 * n - 1 - i)]; for (let i = 0; i < n; i++) { const j = (i + 1) % n; F.push([i, n + i, n + j, j]); }
    return { V, F }; }
  if (sh === "pyramid") { const V = base.concat([[0, h, 0]]); const F = [[...Array(n)].map((_, i) => i)]; for (let i = 0; i < n; i++) F.push([i, n, (i + 1) % n]); return { V, F }; }
  return { V: [], F: [] };
}

/* ================= Монтування в DOM (лише в браузері) ================= */
function mount(host, spec, opt = {}) {
  const K = KINDS[spec.kind], fmt = opt.fmt || (s => s), params = paramList(spec), names = fnNames(spec);
  let state = startState(spec), locked = false, view = K.view ? K.view() : {}, last = null;
  const visible = params.filter(p => !p.hide);
  host.classList.add("lab");
  host.innerHTML = `<div class="lab-stage"><svg role="img" aria-label="${(spec.alt || "Інтерактивна модель").replace(/"/g, "&quot;")}"></svg></div>
    ${spec.show ? `<div class="lab-read" aria-live="polite"></div>` : ""}
    ${visible.length ? `<div class="lab-ctl">${visible.map(p => `<div class="lab-p"><span class="lab-pl">${fmt(p.label ?? `$${p.id}$`)}</span><button type="button" class="lab-nb" data-nb="${p.id}" data-d="-1" aria-label="Зменшити на крок">−</button><input type="range" data-p="${p.id}" min="${typeof p.min === "number" ? p.min : 0}" max="${typeof p.max === "number" ? p.max : 100}" step="${p.step}" value="${p.start}" aria-label="${String(p.label ?? p.id).replace(/[$"<>]/g, "")}"><button type="button" class="lab-nb" data-nb="${p.id}" data-d="1" aria-label="Збільшити на крок">+</button><output data-o="${p.id}" ${p.out ? "" : "hidden"}></output></div>`).join("")}</div>` : ""}`;
  const svg = host.querySelector("svg"), read = host.querySelector(".lab-read");
  function draw() {
    const env = makeEnv(spec, state);
    let r; try { r = K.render(spec, env, view); } catch (e) { r = { w: 320, h: 60, body: `<text x="10" y="30" fill="var(--bad)">${String(e.message)}</text>`, handles: [] }; }
    last = r; svg.setAttribute("viewBox", `0 0 ${r.w} ${r.h}`); svg.innerHTML = r.body;
    if (read) read.innerHTML = [].concat(spec.show).map(s => `<div>${fmt(fill(s, env, names))}</div>`).join("");
    host.querySelectorAll("output[data-o]").forEach(o => { const p = params.find(q => q.id === o.dataset.o), v = state[p.id]; o.textContent = (p.fmt === "pi" ? piLabel(v) : p.fmt === "deg" ? num(v, 0) + "°" : num(v, 3)) + (p.unit ? " " + p.unit : ""); });
  }
  function setParams(o, user) {
    let changed = false;
    for (const [k, v] of Object.entries(o)) { const p = params.find(q => q.id === k); if (!p || !isFinite(v)) continue; const s = snap(p, v, state); if (state[k] !== s) { state[k] = s; changed = true; } }
    if (!changed) return;
    for (const p of params) { const s = snap(p, state[p.id], state); if (s !== state[p.id]) state[p.id] = s; }   // залежні межі
    syncInputs();
    draw(); if (user && opt.onChange) opt.onChange({ ...state });
  }
  function syncInputs() { host.querySelectorAll("input[data-p]").forEach(i => { const p = params.find(q => q.id === i.dataset.p), [lo, hi] = bounds(p, state);
    i.min = lo; i.max = hi; i.value = state[p.id]; }); }
  host.querySelectorAll("input[data-p]").forEach(i => i.addEventListener("input", () => { if (!locked) setParams({ [i.dataset.p]: +i.value }, true); }));
  host.querySelectorAll("button[data-nb]").forEach(b => b.addEventListener("click", () => { if (locked) return; const p = params.find(q => q.id === b.dataset.nb); setParams({ [p.id]: state[p.id] + p.step * +b.dataset.d }, true); }));
  // перетягування точок і обертання тіл
  let drag = null;
  const toSvg = e => { const m = svg.getScreenCTM(); if (!m) return null; const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return { x: p.x, y: p.y, k: 1 / m.a }; };
  svg.addEventListener("pointerdown", e => {
    if (locked) return; const p = toSvg(e); if (!p) return;
    let best = null, bd = 30 * Math.max(1, p.k);
    (last?.handles || []).forEach(h => { const d = Math.hypot(h.x - p.x, h.y - p.y); if (d < bd) { bd = d; best = h; } });
    if (best) drag = { h: best, idx: last.handles.indexOf(best), x0: e.clientX, y0: e.clientY }; else if (last?.rotate) drag = { rot: true, x: e.clientX, y: e.clientY }; else return;
    svg.setPointerCapture(e.pointerId); e.preventDefault();
  });
  svg.addEventListener("pointermove", e => { if (!drag) return; e.preventDefault();
    if (drag.rot) { view.yaw += (e.clientX - drag.x) * 0.01; view.pitch = Math.max(-1.4, Math.min(1.4, view.pitch + (e.clientY - drag.y) * 0.01)); drag.x = e.clientX; drag.y = e.clientY; draw(); return; }
    const p = toSvg(e); const h = last.handles[drag.idx] || drag.h; if (p && !h.tap) setParams(h.set(p.x, p.y), true); });
  const end = e => { if (drag && drag.h && drag.h.tap && Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < 8) setParams(drag.h.tap(), true); drag = null; };
  svg.addEventListener("pointerup", end); svg.addEventListener("pointercancel", end);
  svg.style.touchAction = "none";
  syncInputs(); draw();
  return {
    get: () => ({ ...state }),
    set: o => setParams(o, false),
    reset: () => { state = startState(spec); syncInputs(); draw(); },
    lock: () => { locked = true; host.querySelectorAll("input,button").forEach(i => i.disabled = true); host.classList.add("locked"); },
    mark: cls => { host.classList.remove("is-ok", "is-bad"); if (cls) host.classList.add(cls); }
  };
}

/* ================= Перевірка ================= */
function check(spec, state, goal) { try { return !!compile(String(goal), fnNames(spec))(makeEnv(spec, state)); } catch (e) { return false; } }

/** Валідація для tools/validate.mjs: повертає список помилок українською. graded — чи це екран type:"lab". */
function validate(spec, screen = {}) {
  const errs = [], graded = screen.type === "lab";
  if (!spec || !KINDS[spec.kind]) return [`lab.kind має бути одним із: ${Object.keys(KINDS).join(", ")}`];
  const params = paramList(spec), names = fnNames(spec);
  for (const p of params) {
    if (!/^[A-Za-z_]\w*$/.test(p.id) || p.id === "x" && spec.kind === "plane") errs.push(`параметр «${p.id}»: недопустиме ім'я${p.id === "x" ? " (x зарезервовано для графіків)" : ""}`);
    const st0 = startState(spec), [lo, hi] = bounds(p, st0);
    if (!(p.step > 0) || (typeof p.min === "number" && typeof p.max === "number" && !(p.max > p.min))) errs.push(`параметр «${p.id}»: потрібно min < max і step > 0`);
    for (const k of ["min", "max"]) if (typeof p[k] === "string") try { compile(p[k])(st0); } catch (e) { errs.push(`параметр «${p.id}».${k}: ${e.message}`); }
    if (p.start < lo - 1e-9 || p.start > hi + 1e-9 || Math.abs(snap(p, p.start, st0) - p.start) > 1e-9) errs.push(`параметр «${p.id}»: start=${p.start} поза [min; max] або не на кроці step`);
  }
  // усі вирази мають компілюватися й обчислюватися на стартовому стані
  const exprs = [];
  const walk = (o, path) => { if (o == null) return; if (typeof o === "string" && /^(y|y2|x|r|from|to|a|b|c|n|k|v|split|splitY|step|repeat|by|xstep|ystep|h)$/.test(path.split(".").pop())) exprs.push([path, o]);
    else if (Array.isArray(o)) o.forEach((v, i) => walk(v, path + "." + i)); else if (typeof o === "object") for (const [k, v] of Object.entries(o)) if (!["params", "show", "label", "alt", "kind", "color", "color2", "shape", "unit", "aLabel", "bLabel", "splitLabels", "splitYLabels", "texts", "points"].includes(k)) walk(v, path ? path + "." + k : k); };
  walk(spec, "");
  for (const [p, ex] of exprs) { if (["y2"].includes(p.split(".").pop()) && ["top", "bottom"].includes(ex)) continue; try { compile(ex, names); } catch (e) { errs.push(`${p}: ${e.message}`); } }
  for (const [id, p] of Object.entries(spec.points || {})) for (const ex of pointExprs(id, p)) try { compile(ex, names); } catch (e) { errs.push(`points.${id}: ${e.message}`); }
  for (const [id, ex] of Object.entries(spec.let || {})) try { compile(ex, names); } catch (e) { errs.push(`let.${id}: ${e.message}`); }
  const tplExprs = s => [...String(s).matchAll(/\{([^{}|]+)(?:\|([a-z0-9]+))?\}/g)].flatMap(m => m[2] === "poly" ? m[1].split(";") : [m[1]]).map(x => x.trim());
  const tpls = [].concat(spec.show || [], (spec.fns || []).map(f => f.label), (spec.segs || []).map(s => s.label), (spec.angles || []).map(a => a.label), (spec.texts || []).map(x => x.t),
    Object.values(spec.points || {}).map(p => p.label), (spec.jumps || []).map(j => j.label), (spec.items || []).map(i => i.label), spec.aLabel, spec.bLabel, ...(spec.splitLabels || []), ...(spec.splitYLabels || [])).filter(x => typeof x === "string");
  for (const s of tpls) for (const ex of tplExprs(s)) try { compile(ex, names); } catch (e) { errs.push(`шаблон «${s}»: ${e.message}`); }
  if (errs.length) return errs;
  const st0 = startState(spec), env0 = makeEnv(spec, st0);
  try { KINDS[spec.kind].render(spec, env0, KINDS[spec.kind].view ? KINDS[spec.kind].view() : {}); } catch (e) { errs.push(`малювання: ${e.message}`); }
  for (const [p, ex] of exprs) { if (["top", "bottom"].includes(ex)) continue;
    try { const e = Object.create(env0); e.x = 0.37; compile(ex, names)(e); } catch (er) { errs.push(`${p}: ${er.message}`); } }
  for (const [id] of Object.entries(spec.points || {})) try { const p = env0[id]; if (!isFinite(p.x) || !isFinite(p.y)) errs.push(`точка ${id} не має скінченних координат на старті`); } catch (e) { errs.push(`точка ${id}: ${e.message}`); }
  for (const s of tpls) for (const ex of tplExprs(s)) try { compile(ex, names)(env0); } catch (e) { errs.push(`шаблон «${s}»: ${e.message}`); }
  if (graded) {
    if (!screen.goal) errs.push("type:\"lab\" потребує goal — умову, яку має виконати дитина");
    if (!screen.solution) errs.push("type:\"lab\" потребує solution — значення параметрів, що виконують goal (для показу відповіді й плейтесту)");
    if (screen.goal) { try { compile(String(screen.goal), names); } catch (e) { errs.push(`goal: ${e.message}`); return errs; }
      if (check(spec, st0, screen.goal)) errs.push("goal уже виконано на стартовому стані — завдання розв'язане ще до початку");
      if (screen.solution) { const sol = { ...st0, ...screen.solution };
        for (const [k, v] of Object.entries(screen.solution)) { const p = params.find(q => q.id === k); if (!p) errs.push(`solution: немає параметра «${k}»`); else if (Math.abs(snap(p, v, sol) - v) > 1e-9) errs.push(`solution.${k}=${v} недосяжне повзунком (поза межами або не на кроці)`); }
        if (!check(spec, sol, screen.goal)) errs.push("solution не виконує goal — перевір мету або розв'язок"); }
    }
  }
  return errs;
}

G.SLID_LAB = { KINDS, compile, makeEnv, startState, paramList, fill, num, check, validate, mount, FN };
})();
