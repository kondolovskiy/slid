---
claimed_from: todo
claimed_at: 2026-11-05T09:38:56.163Z
claimed_by: verifier-graph-prob-tri
id: verify-graph-prob-tri
type: verify
subject: math
status: done
created: 2026-11-05
depends_on: [curate-math-graph-ister-gaps]
---
# Верифікація ліній графа «prob» і «tri» (draft, graph.js v 2026-11-05.1)

Скіли: `content-verify` + `skill-graph`. Дизайн §5.1 (роль верифікатора), §5.2 (критерії); рішення й відхилення куратора — tasks/review/curate-math-graph-ister-gaps.md «Нотатки куратора графа».

- Лінія `prob`: comb-enum, comb-tree, prob-events, prob-classic6 (g6m6l1–l4, optional), count-rules, prob-classic (g9m7l1–l2); теми dg9/cur-g9m7, dg11/count, dg11/prob.
- Лінія `tri`: angle-adj-vert (g7m2l2), tri-angle-sum (ms0bl3 + g7m4l3), tri-congr, tri-isosc, ext-angle, side-angle, right-tri, right-tri-eq, tri-ineq (g7m4l1–l3, l5–l9); теми dg7/cur-g7m4, dg8/tri-equal, dg8/tri-angles.
- Кожне ребро w 2 — розв'язати типову задачу A й показати, де потрібне B; кожне `why` — звірити з екраном (індекси від 0); V9 без пояснення (requires g6m6 → g6m2l3; матриця g7m4l6 → g7m4l5, g7m4l9 → g7m4l6, g9m7l1 → m1) — прийняти відхилення або додати ребро; списки graph-report (типові вузли, boss).
- Звіт: `reports/verify/graph-prob-tri.md`; `st: verified` — для перевірених вузлів і ліній (правку graph.js робить верифікатор у межах звіту або куратор). `node tools/graph-report.mjs --line prob --strict`, `--line tri --strict` — 0.

## Нотатки верифікатора (verifier-graph-prob-tri, 2026-11-05)
Звіт: reports/verify/graph-prob-tri.md. Вердикт — обидві лінії прийнято. 15 вузлів → `verified`; з 9 ребер w 2 згоден з 9; обидва `same` (g6m6 ↔ g9m7, D-048) коректні.
Правки graph.js (v 2026-11-05.2): +3 ребра pre w 1 за steps пулу pg7m4 (`side-angle ← ext-angle` — e08, пояснює V9 g7m4l6 → l5; `tri-congr ← angle-adj-vert` — a04, a05, a08; `tri-isosc ← angle-adj-vert` — b05, b06); виправлено `why` `right-tri ← side-angle` (#10, f06, f07 його використовують).
V9: requires g6m6 → g6m2l3 — лишити (boss g6m6l5 #5 зводить 3/10 і 5/20 до спільного знаменника; boss поза teach); g7m4l9 → l6 і g9m7l1 → m1 — відхилено (рядок MATRIX в inbox).
`lines.prob.st` / `lines.tri.st` лишено `draft`: tools/test-hyp.mjs:746 жорстко чекає лише `frac` серед verified-ліній → tasks/todo/tests-hyp-g3-verified-lines.md (інженерна правка + рев'ю D-026).
Перевірки: validate 0 помилок; graph-report --line prob/tri --strict і --strict rc 0; npm run check EXIT 0.
