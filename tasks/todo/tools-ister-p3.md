---
id: tools-ister-p3
type: engine
status: todo
claimed_by:
created: 2026-11-03
depends_on: [math-ister-migration]
---
# P3 з рев'ю math-ister-migration (reports/review/math-ister-migration.md)
1. P3-1: екран «Тренування» — заголовки розділів за порядком програми (клас, тижні), а не за порядком файлів пулів (app/app.js ≈ 424).
2. P3-2: `personalization-qa --grade` — `counts.exercises` для пулу з `also` рахувати лише вправи уроків цього класу.
3. P3-3: мутанти, що вижили: `Array.isArray(p.also)` і `typeof id` у validatePool; клас вправи в tools/diff-answers.mjs — тести.
4. P3-8: тест — пройдений урок не замикається, коли перед ним вставлено новий (`unlocked`, app/app.js:166); браузерний сценарій «Тренування» з `also`.
Незалежне рев'ю (D-026).

## Нотатки виконавця
