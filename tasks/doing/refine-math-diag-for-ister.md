---
claimed_from: todo
claimed_at: 2026-11-04T12:29:56.603Z
id: refine-math-diag-for-ister
type: refine-diag
subject: math
status: todo
claimed_by: impl-refine-math-diag-for-ister
created: 2026-11-04
depends_on: [curate-math-matrix-v6, curate-math-matrix-v7]
---
# dg5–dg8: `for` pre-тем для опор нових required-уроків D-043 (рішення оркестратора 04.11)

Рішення (людина делегувала 04.11): **п. 1 — нових cur-проб не додаємо зараз** (known лише з явних cur-тем — коректно); **п. 2 — розширити `for` наявних pre-тем** (без нових завдань і без зміни items/rev), щоб тест рівня показував прогалини в опорах нових уроків. Переліки — tasks/todo/refine-math-diag-g5-g6-ister-required.md і refine-math-diag-g7-g8-ister-required.md (ті задачі закрити цією). Синхронізувати таблиці діагностик і `preForSection` рядків у docs/math-personalization-coverage.json/.md (матриця v8, draft); давню неузгодженість g6m3 `pct` у preForSection — виправити. Перевірка: personalization-qa `--diag dg5..dg8 --strict` — 0; npm run check — зелений (test-learn, test-hyp можуть мати знімки — оновити з поясненням). Скіли math-pool-diag + engine-change (тести); незалежне рев'ю D-026.

## Нотатки виконавця
