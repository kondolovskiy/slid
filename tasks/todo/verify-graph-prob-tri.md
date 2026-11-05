---
id: verify-graph-prob-tri
type: verify
subject: math
status: todo
created: 2026-11-05
depends_on: [curate-math-graph-ister-gaps]
---
# Верифікація ліній графа «prob» і «tri» (draft, graph.js v 2026-11-05.1)

Скіли: `content-verify` + `skill-graph`. Дизайн §5.1 (роль верифікатора), §5.2 (критерії); рішення й відхилення куратора — tasks/review/curate-math-graph-ister-gaps.md «Нотатки куратора графа».

- Лінія `prob`: comb-enum, comb-tree, prob-events, prob-classic6 (g6m6l1–l4, optional), count-rules, prob-classic (g9m7l1–l2); теми dg9/cur-g9m7, dg11/count, dg11/prob.
- Лінія `tri`: angle-adj-vert (g7m2l2), tri-angle-sum (ms0bl3 + g7m4l3), tri-congr, tri-isosc, ext-angle, side-angle, right-tri, right-tri-eq, tri-ineq (g7m4l1–l3, l5–l9); теми dg7/cur-g7m4, dg8/tri-equal, dg8/tri-angles.
- Кожне ребро w 2 — розв'язати типову задачу A й показати, де потрібне B; кожне `why` — звірити з екраном (індекси від 0); V9 без пояснення (requires g6m6 → g6m2l3; матриця g7m4l6 → g7m4l5, g7m4l9 → g7m4l6, g9m7l1 → m1) — прийняти відхилення або додати ребро; списки graph-report (типові вузли, boss).
- Звіт: `reports/verify/graph-prob-tri.md`; `st: verified` — для перевірених вузлів і ліній (правку graph.js робить верифікатор у межах звіту або куратор). `node tools/graph-report.mjs --line prob --strict`, `--line tri --strict` — 0.
