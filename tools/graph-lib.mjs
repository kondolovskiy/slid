// Слід · Skill Graph: прив'язка об'єктів до вмінь (docs/design/skill-graph-math.md §2.4) і правила V1–V10 (§3).
// Спільне для tools/validate.mjs (помилки графа, дрейф, V10б) і tools/graph-report.mjs (звіт, --strict, --since, --uses).
// Схема даних — docs/CONTENT_SCHEMA.md §11. Рушій граф поки не читає (етап G1): тут лише перевірка й звіт.
//
// Клас кожного правила — за тим, хто спричиняє порушення і де його виправити (таблиця §3):
//   error — помилка validate (червоний CI): V1а, V2, V3, V5, V6а, V7а, V10а;
//   drift — дрейф: попередження validate, помилка лише в graph-report --strict: V1б, V4, V6б, V7б, V8 (у лініях);
//   warn  — V10б (u на gone-вузол): попередження, не блокує нікого.
// Кожна знахідка має refs (lessons / diags / pools / nodes, line) — validate --section показує лише ті, що стосуються розділу (R4-P3-3).
import crypto from "node:crypto";
import { GRADED } from "./lib.mjs";

export const DRIFT_TAIL = "потрібна правка graph.js — допиши в inbox для куратора (IDEA GRAPH)";
export const ID_RE = /^[a-z][a-z0-9-]*$/;
const ST = ["draft", "verified", "approved"];
export const isGraded = s => !!s && GRADED.includes(s.type) && !s.poll && !s.hyp;
const str = x => typeof x === "string" && x.trim() !== "";

// хеш вмісту об'єкта для --since (§3, R3-P3-2): без пояснень і підказок, із sk, u, варіантами й ключем; позиція (урок#i) не входить
const NOT_CONTENT = new Set(["fbOk", "fbBad", "fbText", "fbTitle", "hint", "note", "cap", "eyebrow", "steps", "src", "srcPage"]);
const stable = x => Array.isArray(x) ? `[${x.map(stable).join(",")}]` : x && typeof x === "object"
  ? `{${Object.keys(x).sort().map(k => JSON.stringify(k) + ":" + stable(x[k])).join(",")}}` : JSON.stringify(x) ?? "null";
export const contentHash = o => crypto.createHash("sha1").update(stable(Object.fromEntries(Object.entries(o).filter(([k]) => !NOT_CONTENT.has(k))))).digest("hex").slice(0, 12);
export const nodeHash = n => crypto.createHash("sha1").update(stable(n)).digest("hex").slice(0, 12);

/** u об'єкта → { ids, bad }: рядок або масив 1–2 різних непорожніх рядків (V2) */
function parseU(u) {
  if (u === undefined) return { ids: [], bad: null };
  const ids = Array.isArray(u) ? u : [u];
  if (!ids.length || ids.length > 2 || ids.some(x => !str(x)) || new Set(ids).size !== ids.length)
    return { ids: ids.filter(str), bad: `u — рядок або масив з 1–2 різних id вузлів, отримано ${JSON.stringify(u)}` };
  return { ids, bad: null };
}
const teachList = n => (Array.isArray(n.teach) ? n.teach : []).map(t => typeof t === "string" ? { l: t } : t && typeof t === "object" && typeof t.l === "string" ? { l: t.l, by: t.by } : null).filter(Boolean);

/**
 * Аналіз графа одного предмета c (з loadContent: c.sections, c.pools, c.diags, c.skills, c.graph).
 * opts: origin (розділ → файл), poolOrigin (пул → файл), diagOrigin (тест → файл), graphFile (файл SLID.graph).
 * Повертає { issues, nodes, active, objects, lessons, topics, ties, lines, splitPairs, typical, graph }.
 */
export function analyzeGraph(c, { origin = {}, poolOrigin = {}, diagOrigin = {}, graphFile } = {}) {
  const g = c.graph || null, GF = graphFile || `content/${c.id}/graph.js`;
  const issues = [];
  const add = (cls, rule, where, msg, refs = {}) => issues.push({ cls, rule, where, msg: cls === "drift" ? `граф, дрейф ${rule}: ${msg} — ${DRIFT_TAIL}` : `граф ${rule}: ${msg}`,
    lessons: refs.lessons || [], diags: refs.diags || [], pools: refs.pools || [], nodes: refs.nodes || [], line: refs.line ?? null });

  // ---- зміст предмета: уроки (порядок V4), теми тестів
  const lessons = new Map(), topics = new Map();
  for (const sec of c.sections) (sec.lessons || []).forEach((l, idx) =>
    lessons.set(l.id, { l, sec: sec.id, grade: sec.grade, wk: sec.weeks?.[0] ?? 0, idx, boss: !!l.boss, file: origin[sec.id] || c.id }));   // як у validate
  for (const d of c.diags || []) for (const t of d.topics || []) topics.set(`${d.id}/${t.id}`, { d, t, items: (d.items || []).map((it, i) => [it, i]).filter(([it]) => it.topic === t.id) });

  // ---- V1а: формат графа й вузлів
  const nodes = new Map(), raw = g && Array.isArray(g.nodes) ? g.nodes : [];
  if (g) {
    if (!str(g.v)) add("error", "V1а", GF, "v — непорожній рядок версії графа (дата + номер, напр. «2026-11-15.1»)");
    if (!Array.isArray(g.nodes)) add("error", "V1а", GF, "nodes — масив вузлів");
    if (g.lines !== undefined && (!g.lines || typeof g.lines !== "object" || Array.isArray(g.lines))) add("error", "V1а", GF, "lines — об'єкт { <id лінії>: { lessons, topics, st } }");
  }
  raw.forEach((n, k) => {
    if (!n || typeof n !== "object" || Array.isArray(n)) return add("error", "V1а", `${GF}#вузол ${k + 1}`, "вузол має бути об'єктом");
    const W = `${GF}#${str(n.id) ? n.id : `вузол ${k + 1}`}`, refs = { lessons: teachList(n).map(t => t.l), nodes: str(n.id) ? [n.id] : [] };
    const e = msg => add("error", "V1а", W, msg, refs);
    if (!str(n.id) || !ID_RE.test(n.id)) e(`id ${JSON.stringify(n.id)} — формат [a-z][a-z0-9-]*`);
    else if (nodes.has(n.id)) e(`id «${n.id}» не унікальний`);
    else { if (c.skills?.[n.id]) e(`id «${n.id}» збігається з навичкою sk — простори імен окремі`); nodes.set(n.id, n); }
    if (!c.skills?.[n.sk]) e(`sk «${n.sk}» не оголошена в content/subjects/${c.id}.js`);
    if (!str(n.name)) e("name — одне речення мовою вчителя («учень уміє …»)");
    if (!ST.includes(n.st)) e(`st «${n.st}» — draft | verified | approved`);
    if (n.teach !== undefined && !Array.isArray(n.teach)) e("teach — масив уроків (id або { l, by: \"u\" })");
    const seenL = new Set();
    for (const t of Array.isArray(n.teach) ? n.teach : []) {
      if (typeof t === "string") { if (!t) e("teach: порожній id уроку"); }
      else if (!t || typeof t !== "object" || typeof t.l !== "string" || Object.keys(t).some(x => x !== "l" && x !== "by")) { e(`teach: елемент ${JSON.stringify(t)} — id уроку або { l, by: "u" }`); continue; }
      else if (t.by !== undefined && t.by !== "u") e(`teach ${t.l}: by «${t.by}» — дозволено лише "u"`);
      const l = typeof t === "string" ? t : t.l;
      if (seenL.has(l)) e(`teach: урок ${l} двічі`); seenL.add(l);
    }
    if (n.base !== undefined && n.base !== true) e("base — лише true");
    if (n.base === true) {
      if (!(Number.isInteger(n.g) && n.g >= 1 && n.g <= 11)) e("base-вузол потребує g — клас опори (ціле 1–11)");
      if (Array.isArray(n.teach) && n.teach.length) e("base-вузол — без teach (опора молодших класів без уроку)");
    } else if (n.g !== undefined) e("g — лише для base-вузла (клас звичайного вузла = клас першого уроку teach)");
    for (const kind of ["pre", "part", "same"]) {
      if (n[kind] === undefined) continue;
      if (!Array.isArray(n[kind])) { e(`${kind} — масив ребер`); continue; }
      n[kind].forEach((x, j) => {
        if (!x || typeof x !== "object") return e(`${kind} ${j + 1}: ребро — об'єкт { u${kind === "pre" ? ", w" : ""}, why }`);
        if (!str(x.u)) e(`${kind} ${j + 1}: u — id вузла`);
        if (kind === "pre" && x.w !== 1 && x.w !== 2) e(`pre ${x.u}: w ${JSON.stringify(x.w)} — 1 («допомагає») або 2 («без цього не вийде»)`);
        if (!str(x.why)) e(`${kind} ${x.u ?? j + 1}: why — непорожній рядок (екран, вправа чи пункт підручника)`);
      });
    }
    if (n.gone !== undefined && !str(n.gone)) e("gone — id вузла, що замінює цей");
  });
  const lines = g && g.lines && typeof g.lines === "object" && !Array.isArray(g.lines) ? g.lines : {};
  for (const [id, ln] of Object.entries(lines)) {
    const W = `${GF}#lines.${id}`, e = msg => add("error", "V1а", W, msg, { line: id });
    if (!ID_RE.test(id)) e(`id лінії «${id}» — формат [a-z][a-z0-9-]*`);
    if (!ln || typeof ln !== "object") { e("лінія — об'єкт { lessons, topics, st }"); continue; }
    if (!Array.isArray(ln.lessons) || ln.lessons.some(x => !str(x))) e("lessons — масив id уроків");
    if (ln.topics !== undefined && (!Array.isArray(ln.topics) || ln.topics.some(x => !str(x) || !/^[^/\s]+\/[^/\s]+$/.test(x)))) e("topics — масив «<тест>/<тема>»");
    if (!ST.includes(ln.st)) e(`st «${ln.st}» — draft | verified | approved`);
  }

  // ---- V2, V10а: ребра й gone
  const isGone = id => nodes.has(id) && nodes.get(id).gone !== undefined;
  const active = new Map([...nodes].filter(([id]) => !isGone(id)));
  const nref = n => ({ lessons: teachList(n).map(t => t.l), nodes: [n.id] });
  const adj = new Map();   // pre ∪ part: id → [{ to, w, kind }]
  for (const n of nodes.values()) {
    const W = `${GF}#${n.id}`, targets = new Set(), list = [];
    for (const kind of ["pre", "part", "same"]) for (const x of Array.isArray(n[kind]) ? n[kind] : []) {
      if (!x || !str(x.u)) continue;
      if (x.u === n.id) { add("error", "V2", W, `${kind} ${x.u}: петля (ребро на себе)`, nref(n)); continue; }
      if (!nodes.has(x.u)) { add("error", "V2", W, `${kind} ${x.u}: немає такого вузла`, nref(n)); continue; }
      const key = (kind === "same" ? "same:" : "dir:") + x.u;
      if (targets.has(key)) add("error", "V2", W, `${kind} ${x.u}: ребро вже є${kind === "same" ? "" : " (pre і part разом — дублікат)"}`, nref(n)); targets.add(key);
      if (isGone(x.u)) add("error", "V10а", W, `${kind} ${x.u}: ребро на gone-вузол — веди на «${nodes.get(x.u).gone}»`, nref(n));
      if (kind !== "same") list.push({ to: x.u, w: kind === "part" ? 2 : x.w, kind });
    }
    adj.set(n.id, list);
    if (str(n.gone)) {
      if (n.gone === n.id) add("error", "V2", W, "gone: петля (вузол перенаправлено на себе)", nref(n));
      else if (!nodes.has(n.gone)) add("error", "V2", W, `gone: немає вузла «${n.gone}»`, nref(n));
      else if (isGone(n.gone)) add("error", "V10а", W, `gone: «${n.gone}» теж gone — ланцюжки перенаправлень заборонені, веди одразу на «${nodes.get(n.gone).gone}»`, nref(n));
    }
  }
  // ---- V3: цикли pre ∪ part; same між вузлами, з'єднаними шляхом
  { const col = new Map(), stack = [], seen = new Set();
    const dfs = u => { col.set(u, 1); stack.push(u);
      for (const { to } of adj.get(u) || []) {
        if (col.get(to) === 1) { const cyc = stack.slice(stack.indexOf(to)), key = [...cyc].sort().join(",");
          if (!seen.has(key)) { seen.add(key); add("error", "V3", `${GF}#${to}`, `цикл у pre ∪ part: ${[...cyc, to].join(" → ")}`,
            { lessons: cyc.flatMap(id => teachList(nodes.get(id)).map(t => t.l)), nodes: cyc }); } }
        else if (!col.get(to)) dfs(to); }
      stack.pop(); col.set(u, 2); };
    for (const u of nodes.keys()) if (!col.get(u)) dfs(u); }
  const reachMemo = new Map();
  const reach = (a, strong = false) => { const k = (strong ? "s:" : "a:") + a; if (reachMemo.has(k)) return reachMemo.get(k);
    const r = new Set(), q = [a]; while (q.length) for (const { to, w } of adj.get(q.pop()) || []) if ((!strong || w === 2) && !r.has(to)) { r.add(to); q.push(to); }
    reachMemo.set(k, r); return r; };
  { const done = new Set();
    for (const n of nodes.values()) for (const x of Array.isArray(n.same) ? n.same : []) {
      if (!x || !nodes.has(x.u) || x.u === n.id) continue; const key = [n.id, x.u].sort().join("~"); if (done.has(key)) continue; done.add(key);
      if (reach(n.id).has(x.u) || reach(x.u).has(n.id)) add("error", "V3", `${GF}#${n.id}`, `same ${x.u}: вузли вже з'єднані шляхом pre/part — same лише між незалежними`,
        { lessons: [...teachList(n), ...teachList(nodes.get(x.u))].map(t => t.l), nodes: [n.id, x.u] }); } }

  // ---- V7а, V1б (teach), V6а, V6б
  const typical = new Map();   // «урок|sk» → [id типових вузлів]
  const splitPairs = new Set();
  for (const n of active.values()) {
    const W = `${GF}#${n.id}`, T = teachList(n);
    if (n.base !== true && !T.length) add("error", "V7а", W, "вузол без teach і не base — до нього нічого не прив'язати", nref(n));
    for (const t of T) {
      if (!lessons.has(t.l)) { add("drift", "V1б", W, `teach: немає уроку ${t.l} у предметі ${c.id}`, { lessons: [t.l], nodes: [n.id] }); continue; }
      const key = `${t.l}|${n.sk}`;
      if (!t.by) (typical.get(key) || typical.set(key, []).get(key)).push(n.id); else splitPairs.add(key);
      if (!lessons.get(t.l).l.screens?.some(s => isGraded(s) && s.sk === n.sk)) add("drift", "V6б", W, `урок ${t.l} у teach не має жодного оцінюваного екрана з sk «${n.sk}»`, { lessons: [t.l], nodes: [n.id] });
    }
  }
  for (const [key, ids] of typical) if (ids.length > 1) { const [l, sk] = key.split("|");
    add("error", "V6а", `${GF}#${ids[0]}`, `у парі (${l}, ${sk}) кілька типових вузлів без by: ${ids.join(", ")} — лишити один, решті teach { l: "${l}", by: "u" }`, { lessons: [l], nodes: ids }); }
  // пара лише з вузлами by: "u" (без типового) дозволена: об'єкти без u лишаються без вузла (§2.4 п. 7)

  // ---- прив'язка об'єктів (§2.4)
  const redirect = id => { const n = nodes.get(id); return n && str(n.gone) && nodes.has(n.gone) && !isGone(n.gone) ? n.gone : id; };
  const objects = [];
  // u об'єкта: формат (V2), наявність (V2), V10б, V5 (sk = sk вузла); повертає розв'язані id
  const checkU = (o, s) => {
    const { ids, bad } = parseU(s.u); const refs = o.refs; o.uIds = ids;
    if (bad) add("error", "V2", o.where, bad, refs);
    const out = [];
    for (const id of ids) {
      if (!nodes.has(id)) { add("error", "V2", o.where, `u «${id}»: немає такого вузла${g ? "" : ` (у предмета ${c.id} ще немає графа)`}`, refs); continue; }
      const n = nodes.get(id);
      if (isGone(id)) add("warn", "V10б", o.where, `u «${id}» — вузол позначено gone; онови u: ${id} → ${n.gone} (до оновлення прив'язка йде через перенаправлення)`, refs);
      if (o.kind === "topic") { if (!o.sks.includes(n.sk)) add("error", "V5", o.where, `u «${id}»: sk вузла «${n.sk}» не серед sk завдань теми (${o.sks.join(", ") || "—"})`, refs);
        if (o.baseline && n.base !== true) add("error", "V5", o.where, `u «${id}»: baseline-тема прив'язується лише до base-вузла`, refs); }
      else if (n.sk !== o.sk) add("error", "V5", o.where, `u «${id}»: sk вузла «${n.sk}» ≠ sk ${o.kind === "screen" ? "екрана" : o.kind === "item" ? "вправи" : "завдання"} «${o.sk}»`, refs);
      out.push(redirect(id));
    }
    return [...new Set(out)];
  };
  const typicalOf = (l, sk) => typical.get(`${l}|${sk}`) || [];
  for (const sec of c.sections) for (const l of sec.lessons || []) {
    const info = lessons.get(l.id);
    (l.screens || []).forEach((s, i) => {
      const where = `${info.file}#${l.id} екран ${i + 1} (${s.type})`;
      if (!isGraded(s)) { if (s.u !== undefined) add("error", "V2", where, "u — лише на оцінюваному екрані (не intro/info/explore, не poll/hyp)", { lessons: [l.id] }); return; }
      const o = { kind: "screen", where, file: info.file, l: l.id, ls: [l.id], sk: s.sk, boss: info.boss, i, pre: s.pre, refs: { lessons: [l.id] }, key: `${l.id}|${contentHash(s)}`, explicit: s.u !== undefined };
      if (o.explicit) { o.nodes = checkU(o, s); o.how = "u"; }
      else if (info.boss) { const cand = [...active.values()].filter(n => n.sk === s.sk && teachList(n).some(t => !t.by && lessons.get(t.l)?.sec === info.sec && !lessons.get(t.l)?.boss)).map(n => n.id);
        o.nodes = cand.length === 1 ? cand : []; o.how = cand.length === 1 ? "boss" : cand.length ? "ambiguous" : "none"; o.cand = cand; }
      else { o.nodes = typicalOf(l.id, s.sk).slice(0, 1); o.how = o.nodes.length ? "typical" : "none"; }
      objects.push(o);
    });
  }
  for (const p of c.pools || []) (p.items || []).forEach((it, i) => {
    const where = `content/${c.id}/pool#${p.id} задача ${i + 1} «${it.id}» (${it.type})`;
    const o = { kind: "item", where, file: poolOrigin[p.id] || `content/${c.id}/pool#${p.id}`, pool: p.id, id: it.id, l: it.lesson, ls: [it.lesson], sk: it.sk, boss: false, refs: { pools: [p.id] }, key: `${p.id}:${it.id}|${contentHash(it)}`, explicit: it.u !== undefined };
    if (o.explicit) { o.nodes = checkU(o, it); o.how = "u"; } else { o.nodes = typicalOf(it.lesson, it.sk).slice(0, 1); o.how = o.nodes.length ? "typical" : "none"; }
    objects.push(o);
  });
  for (const d of c.diags || []) {
    const DF = diagOrigin[d.id] || `content/${c.id}/diag-g${d.grade}.js`, D = `${DF}#${d.id}`;
    for (const t of d.topics || []) {
      const its = topics.get(`${d.id}/${t.id}`)?.items || [], ls = Array.isArray(t.lessons) ? t.lessons : [];
      const to = { kind: "topic", where: `${D} тема «${t.id}»`, file: DF, diag: d.id, topic: t.id, tkey: `${d.id}/${t.id}`, l: ls[0] ?? null, ls, sks: [...new Set(its.map(([it]) => it.sk))],
        baseline: !!t.baseline, refs: { diags: [d.id] }, key: `${d.id}/${t.id}|${contentHash({ ...t, title: undefined })}`, explicit: t.u !== undefined };
      const tu = to.explicit ? checkU(to, t) : null, union = new Set();
      for (const [it, i] of its) {
        // lesson завдання (CONTENT_SCHEMA §9: «який саме урок перевіряє») звужує типові вузли до цього уроку — рев'ю G1, P2-1
        const lsI = str(it.lesson) ? [it.lesson] : ls;
        const o = { kind: "ditem", where: `${D} завдання ${i + 1} (${it.type})`, file: DF, diag: d.id, topic: t.id, tkey: to.tkey, i, l: it.lesson || ls[0] || null, ls: lsI, sk: it.sk, boss: false,
          refs: { diags: [d.id] }, key: `${d.id}/${t.id}|${contentHash(it)}`, explicit: it.u !== undefined };
        if (o.explicit) { o.nodes = checkU(o, it); o.how = "u"; }
        else if (tu) { o.nodes = tu; o.how = "u-topic"; }
        else { o.nodes = [...new Set(lsI.flatMap(l => typicalOf(l, it.sk).slice(0, 1)))]; o.how = o.nodes.length ? "typical" : "none"; }
        o.nodes.forEach(x => union.add(x)); objects.push(o);
      }
      to.nodes = tu || [...union]; to.how = tu ? "u" : to.nodes.length ? "items" : "none"; objects.push(to);
    }
  }

  // ---- V7б: вузол без прив'язаних об'єктів; by: "u" без явного u у своєму уроці
  const bound = new Map([...active.keys()].map(id => [id, 0]));
  for (const o of objects) if (o.kind !== "topic") for (const id of o.nodes) if (bound.has(id)) bound.set(id, bound.get(id) + 1);
  for (const n of active.values()) {
    const W = `${GF}#${n.id}`;
    if (!bound.get(n.id) && (n.base === true || teachList(n).length)) add("drift", "V7б", W, "до вузла не прив'язано жодного оцінюваного об'єкта (екрана, вправи, завдання тесту)", nref(n));
    for (const t of teachList(n).filter(t => t.by && lessons.has(t.l)))
      if (!objects.some(o => o.kind !== "topic" && (o.how === "u" || o.how === "u-topic") && o.nodes.includes(n.id) && (o.l === t.l || o.ls.includes(t.l))))
        add("drift", "V7б", W, `teach { l: "${t.l}", by: "u" }, але в уроці ${t.l} (екрани, вправи, завдання тесту) немає жодного явного u на «${n.id}»`, { lessons: [t.l], nodes: [n.id] });
  }

  // ---- V4: правило класу — порядок уроку (клас, weeks[0] розділу, індекс у розділі); нічия — дозволена, у звіт
  const order = n => n.base === true ? { grade: n.g, wk: -1, sec: "", idx: -1, l: `base, ${n.g} кл.` }
    : teachList(n).map(t => lessons.has(t.l) && { ...lessons.get(t.l), lid: t.l }).filter(Boolean).sort((a, b) => a.grade - b.grade || a.wk - b.wk || a.idx - b.idx)[0];
  const ties = [];
  for (const n of active.values()) { const A = order(n); if (!A) continue;
    for (const { to, kind } of adj.get(n.id) || []) { const m = active.get(to); const B = m && order(m); if (!B) continue;
      const refs = { lessons: [...teachList(n), ...teachList(m)].map(t => t.l), nodes: [n.id, to] };
      const why = B.grade > A.grade ? `«${to}» (${B.lid || B.l}, ${B.grade} кл.) — старший клас, ніж «${n.id}» (${A.lid || A.l}, ${A.grade} кл.)`
        : B.grade < A.grade ? null
        : B.sec === A.sec ? (B.idx > A.idx ? `«${to}» (${B.lid}) — пізніший урок розділу ${A.sec}, ніж «${n.id}» (${A.lid})` : null)
        : B.wk > A.wk ? `«${to}» (${B.lid || B.l}, розділ з тижня ${B.wk}) — пізніше за «${n.id}» (${A.lid || A.l}, тиждень ${A.wk})` : null;
      if (why) add("drift", "V4", `${GF}#${n.id}`, `${kind} ${to}: передумова пізніша за урок — ${why}`, refs);
      else if (B.grade === A.grade && B.sec !== A.sec && B.wk === A.wk) ties.push({ from: n.id, to, a: A.lid || A.l, b: B.lid || B.l, wk: A.wk }); } }

  // ---- V1б (lines), V8: покриття в лініях
  const inTeach = new Set([...active.values()].flatMap(n => teachList(n).map(t => t.l)));
  const lineInfo = {};
  for (const [id, ln] of Object.entries(lines)) {
    if (!ln || typeof ln !== "object") continue;
    const W = `${GF}#lines.${id}`, ls = new Set(Array.isArray(ln.lessons) ? ln.lessons.filter(str) : []), ts = new Set(Array.isArray(ln.topics) ? ln.topics.filter(str) : []);
    for (const l of ls) if (!lessons.has(l)) add("drift", "V1б", W, `lessons: немає уроку ${l} у предметі ${c.id}`, { lessons: [l], line: id });
      else if (!inTeach.has(l)) add("drift", "V8", W, `урок ${l} лінії «${id}» не в teach жодного вузла`, { lessons: [l], line: id });
    for (const t of ts) if (!topics.has(t)) add("drift", "V1б", W, `topics: немає теми ${t} (тест/тема) у предметі ${c.id}`, { diags: [t.split("/")[0]], line: id });
    const objs = objects.filter(o => o.kind === "topic" || o.kind === "ditem" ? ts.has(o.tkey) : ls.has(o.l));
    const pairs = new Map();
    for (const o of objs) {
      if (o.how === "ambiguous") add("drift", "V8", o.where, `boss-урок ${o.l} у лінії «${id}»: неоднозначно (${o.cand.join(", ")}) — постав u або прибери boss-урок з lines`, { ...o.refs, line: id });
      if (o.kind === "ditem" && !o.nodes.length) add("drift", "V8", o.where, `завдання теми ${o.tkey} лінії «${id}» не прив'язане до жодного вузла (§2.4 п. 5)${topics.get(o.tkey)?.t.baseline ? " — baseline-тема потребує u на base-вузол" : ""}`, { ...o.refs, line: id });
      if (o.kind !== "topic" && o.how === "none") { const k = `${o.l}|${o.sk}`; (pairs.get(k) || pairs.set(k, []).get(k)).push(o); }
    }
    for (const [k, os] of pairs) if (os.length >= 3) { const [l, sk] = k.split("|");
      add("drift", "V8", W, `пара (${l}, ${sk}) без вузла — ${os.length} оцінюваних об'єктів (дозволено < 3, §2.4 п. 7): ${os.map(o => o.kind === "screen" ? `${o.l}#${o.i + 1}` : o.kind === "item" ? `${o.pool}:${o.id}` : `${o.diag}#${o.i + 1}`).join(", ")}`, { lessons: [l], line: id }); }
    lineInfo[id] = { lessons: ls, topics: ts, objects: objs, smallPairs: [...pairs].filter(([, os]) => os.length < 3),
      nodes: new Set([...[...active.values()].filter(n => teachList(n).some(t => ls.has(t.l))).map(n => n.id), ...objs.flatMap(o => o.nodes)]) };
  }
  return { issues, graph: g, graphFile: GF, nodes, active, adj, reach, objects, lessons, topics, ties, lines: lineInfo, rawLines: lines, splitPairs, typical, teachList, order };
}

/** Знахідки, що стосуються лінії id (для --line --strict): позначені цією лінією, вузлами чи уроками лінії,
 *  а також загальні помилки формату графа (без вузла й уроку) — зламаний граф лінію не приймає. */
export const issuesOfLine = (A, id) => { const L = A.lines[id]; if (!L) return [];
  return A.issues.filter(is => is.line === id || (is.line === null && (is.nodes.some(n => L.nodes.has(n)) || is.lessons.some(l => L.lessons.has(l))
    || (is.cls === "error" && !is.nodes.length && !is.lessons.length && !is.diags.length && !is.pools.length)))); };
