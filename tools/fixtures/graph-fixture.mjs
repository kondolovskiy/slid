// Слід · фікстурне дерево для тестів графа вмінь (tools/test-validate.mjs, tools/test-graph-report.mjs; docs/CONTENT_SCHEMA.md §11).
// graphTree(mut) → { "шлях у дереві": "текст файлу" }: чисте дерево (0 помилок і 0 знахідок графа), mut(M) змінює модель перед записом.
// Модель: 4 розділи 5–6 кл. (fxa, fxz — однаковий weeks[0] для нічиєї V4), пул pfx, тест dgfx, граф з лінією fx.
const clone = x => JSON.parse(JSON.stringify(x));
export const scr = (sk, extra = {}) => ({ type: "choice", title: "Питання", body: "Скільки частин?", opts: ["1", "2"], correct: 0, sk,
  fbOk: "Так.", fbText: "Пояснення, чому саме так, для фікстури графа.", hint: "Подумай.", ...extra });
export const lesson = (id, sks, extra = {}) => ({ id, title: "Фікстура", why: "Перевірити граф умінь.", icon: "pot", status: "draft",
  outro: { text: "Готово.", learned: ["Перше", "Друге"] },
  screens: [{ type: "intro", title: "Початок", body: "Що тут?" }, { type: "info", title: "Теорія", body: "Пояснення." },
    ...sks.map(sk => typeof sk === "string" ? scr(sk) : scr(sk.sk, sk))], ...extra });
export const item = (id, lessonId, sk, extra = {}) => ({ id, lesson: lessonId, lvl: 1, sk, src: "src №1", type: "answer", title: `Задача ${id}`,
  body: "<p>Обчисли $2 + 2$.</p>", answer: 4, steps: ["$2 + 2 = 4$."], ...extra });
export const node = (id, sk, teach, extra = {}) => ({ id, sk, name: `Фікстура ${id}`, ...(teach ? { teach } : {}), st: "draft", ...extra });
export const why = "фікстура: екран 1";
const meta = { author: "test", created: "2026-11-01", factcheck: null, teacher: null };
const sec = (id, grade, weeks, lessons) => ({ id, grade, weeks, title: "Фікстура", why: "Регресійний тест графа вмінь: правила V1–V10.", meta, lessons });

export function baseModel() {
  return clone({
    sections: [
      sec("fxa", 5, [1, 4], [lesson("fxal1", ["frac", "frac", "frac"]), lesson("fxal2", ["frac", "frac", "part", "part"]), lesson("fxal3", ["frac"]), lesson("fxal4", ["frac"], { boss: true, title: "Фінал" })]),
      sec("fxb", 5, [5, 8], [lesson("fxbl1", ["frac", "frac"])]),
      sec("fxz", 5, [1, 4], [lesson("fxzl1", ["frac"])]),
      sec("fxc", 6, [1, 4], [lesson("fxcl1", ["frac"])])],
    pools: [{ id: "pfx", section: "fxa", status: "draft", meta, sources: [{ id: "src", title: "Фікстура", url: "https://example.org/" }],
      items: ["c01", "c02", "c03", "c04", "c05"].map(id => item(id, "fxal1", "frac")) }],
    diags: [{ id: "dgfx", grade: 6, title: "Тест-фікстура", why: "Регресійний тест графа вмінь.", status: "draft", meta,
      topics: [{ id: "p", title: "Передумова", kind: "pre", lessons: ["fxal1"], for: ["fxc"] }, { id: "c", title: "Тема класу", kind: "cur", lessons: ["fxcl1"] }],
      items: [{ topic: "p", type: "choice", sk: "frac", title: "Обери", opts: ["1", "2"], correct: 0 }, { topic: "p", type: "number", sk: "frac", title: "Скільки?", answer: 2 },
        { topic: "c", type: "choice", sk: "frac", title: "Обери ще", opts: ["1", "2"], correct: 1 }] }],
    graph: { v: "2026-11-01.1", lines: { fx: { lessons: ["fxal1", "fxal2"], topics: ["dgfx/p"], st: "draft" } },
      nodes: [node("na", "frac", ["fxal1"]), node("nb", "frac", ["fxal2"], { pre: [{ u: "na", w: 2, why }] }), node("nc", "part", ["fxal2"]),
        node("nd", "frac", ["fxbl1"], { pre: [{ u: "nb", w: 2, why }] }), node("nz", "frac", ["fxzl1"]), node("ncur", "frac", ["fxcl1"])] }
  });
}
export const N = (M, id) => M.graph.nodes.find(n => n.id === id);
export const L = (M, id) => M.sections.flatMap(s => s.lessons).find(l => l.id === id);
/** екран k-го оцінюваного завдання уроку (від 0; перші два екрани — intro і info) */
export const S = (M, id, k) => L(M, id).screens[2 + k];

export function graphTree(mut) {
  const M = baseModel(); if (mut) mut(M);
  const files = {};
  for (const s of M.sections) files[`content/math/g${s.grade}-${s.id}.js`] = `SLID.section("math", ${JSON.stringify(s, null, 1)});\n`;
  for (const p of M.pools) files[`content/math/pool-g5-${p.section}.js`] = `SLID.pool("math", ${JSON.stringify(p, null, 1)});\n`;
  for (const d of M.diags) files[`content/math/diag-g${d.grade}.js`] = `SLID.diag("math", ${JSON.stringify(d, null, 1)});\n`;
  if (M.graph) files["content/math/graph.js"] = `SLID.graph(${JSON.stringify(M.graphSubject || "math")}, ${JSON.stringify(M.graph, null, 1)});\n`;
  Object.assign(files, M.extraFiles || {});
  return files;
}
