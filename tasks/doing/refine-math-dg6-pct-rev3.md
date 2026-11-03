---
claimed_from: todo
claimed_at: 2026-11-03T20:25:11.294Z
id: refine-math-dg6-pct-rev3
type: refine-diag
subject: math
grade: 6
section: dg6
status: todo
claimed_by: impl-refine-math-dg6-pct-rev3
created: 2026-11-03
depends_on: [math-ister-migration]
---
# dg6: cur-проби відсотків (№7, №27) — заміна з rev 3

Після D-043 відсотки (ms3) — 6 кл., тож у dg6 вони стали cur-темами `pct` (№7, ms3l1) і `pct-of` (№27, ms3l2). Одне базове завдання не перевіряє ядра уроку (CONTENT_SCHEMA §9; reports/verify/verify-math-ister-diag.md — чернетки завдань і ключі в §5). Замінити на місці з `rev: 3` (складені multi/sort), оновити `tools/test-learn.mjs` (≈1106–1111: список rev dg6) — інженерна частина, незалежне рев'ю (D-026); content-verify. Після — dg6 `status: "verified"` (зараз draft). Рекомендація верифікатора куратору матриці: `frac-of.for` + ms3, `geom.for` + ms4.

## Нотатки виконавця
