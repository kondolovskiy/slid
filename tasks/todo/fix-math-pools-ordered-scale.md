---
id: fix-math-pools-ordered-scale
type: write-pool
subject: math
status: todo
claimed_by:
created: 2026-11-05
depends_on: [engine-list-ordered]
---
# Пули math: `ordered: true` і `scale: true` там, де рушій уже вміє

Скіл: `math-pool-diag`. Джерело: inbox 05.11 eng-list, orchestrator (engine-list-ordered → done, reports/review/engine-list-quadratic.md).

Що зробити (лише нові поля, **id вправ ті самі**):
1. `content/math/pool-g8-g8m2.js` — e07 («Запиши ∠C і ∠D»): `ordered: true`.
2. `content/math/pool-g8-g8m4.js` — a02, a03: `ordered: true`.
3. `content/math/pool-g9-g9m6.js` — f08 («Запиши число n із масштабу 1 : n»): `scale: true`.
4. Не поєднувати `ordered` з ± (рушій не підтримує; P3 engine-list-p3).
5. `node tools/validate.mjs --pool pg8m2|pg8m4|pg9m6` — 0 помилок; `npm run check`. Якщо зсунеться знімок test-hyp (§0/§10) — оновити з поясненням зсуву → це зміна тесту, рев'ю D-026.
6. Статус пулів → draft, задача в review → `content-verify` (перевірити, що порядок у ключі відповідає умові).
7. Після приймання куратор закриває в pitfalls-engine (сесія 5) рядки «list не перевіряє порядок» і «ключ number не приймає 1 : 10000».

Оцінювання — тимчасово, до відповіді вчителя: TQ-070 (ordered), TQ-071 (scale).

## Нотатки виконавця
