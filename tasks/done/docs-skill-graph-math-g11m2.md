---
claimed_from: todo
claimed_at: 2026-11-05T07:32:03.957Z
id: docs-skill-graph-math-g11m2
type: docs
status: done
claimed_by: eng-math-dg9
created: 2026-11-05
depends_on: [curate-math-g11m2-to-g10]
---
# docs/design/skill-graph-math.md:181 — пара «нічиї» g11m1/g11m2 застаріла (P3-4)

За D-047 g11m2 «Координати й вектори» перенесено в 10 кл. (weeks [25, 35]; facts/math №224). У переліку паралельних розділів (правило V4, «нічия») пара g11m1/g11m2 більше не діє: пар 7, не 8. Виправити рядок 181 і, якщо `graph-report` перелічує «паралельні розділи», звірити з ним (`node tools/graph-report.mjs`).

Джерело: reports/review/curate-math-g11m2-to-g10.md (P3-4), рядок inbox eng-math-g11 05.11. Зміна docs у `docs/design/` — розробник або куратор графа; незалежне рев'ю не обов'язкове (лише текст), але звір із graph-report.

## Нотатки виконавця
2026-11-05, eng-math-dg9. docs/design/skill-graph-math.md:181 — перелік нічиїх V4 звірено з `weeks[0]` файлів розділів (скрипт у scratchpad: однаковий клас і тиждень початку): 7 пар — g7m1/g7m2, **g7m3/g7m6** (з D-043 g7m6 стартує з тижня 9, g7m4 — з 17; старий текст «g7m3/g7m4» теж був застарілий), g8m1/g8m2, g8m3/g8m4, g8m5/g8m6, g9m1/g9m2, g10m1/g10m2; g11m1/g11m2 прибрано (g11m2 — 10 кл., тиждень 25). Окремо згадано 6 кл. g6m6/ms4 (тиждень 33; g6m6 optional) — теж нічия за правилом, хоч не пара алгебра/геометрія. graph-report перелічує лише нічиї, через які йдуть ребра графа, — зараз «—» (reports/graph-math.md), розбіжності немає; `graph-report` — 0 помилок, 0 дрейфу.
