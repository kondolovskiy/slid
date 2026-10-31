---
id: refine-math-pool-g9m2-expr
type: refine
subject: math
grade: 9
status: doing
claimed_by: writer-pg9m2-expr
created: 2026-10-31
depends_on: [engine-coordinates2-expression]
---
# Додати №13.5(4) у pg9m2/g9m2l3 (coordinates2 з виразами)

Рушій тепер приймає coordinates2 з компонентами-виразами (CONTENT_SCHEMA §10, reports/review/engine-coordinates2-expression.md). Додати в l3 пулу content/math/pool-g9-g9m2.js вправу №13.5(4) (Мерзляк, Якір «Геометрія 9», 2026), ключ $(p - m; k - n)$ — див. reports/verify/pg9m2.md. ≤ 8 вправ на урок: замінити найслабшу, рівні ≥ 3/2/1. Перевірити опору в уроці g9m2l3. Пул — draft до повторної верифікації.
Перевірка: validate --pool pg9m2; personalization-qa --grade 9 --strict — без рядка про g9m2l3 expression (крім «не verified»).

## Нотатки виконавця
