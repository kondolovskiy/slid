---
claimed_from: todo
claimed_at: 2026-11-05T14:52:52.079Z
id: engine-list-p3
type: engine
subject: math
status: todo
claimed_by: eng-listp3
created: 2026-11-05
depends_on: []
---
# Рушій `list` / `scale`: P3 з рев'ю engine-list

Скіл: `engine-change`. Джерело: reports/review/engine-list-quadratic.md (P3), inbox 05.11 orchestrator.

1. `LIST_PM` — дозволити `\s*` після «=» (перенос рядка з UI недосяжний, але регулярний вираз несиметричний).
2. Тест на масштаб `1 : 100000` при `scale: true` (зараз лише 1 : 10000).
3. `validatePool` (tools/validate.mjs): ± разом з `ordered: true` — помилка (поведінка невизначена).
4. `inputmode="decimal"` на телефоні не дає «:» — для вправ зі `scale` (і ratio) інший inputmode або кнопка «:»; перевірити в мобільному профілі Playwright.

Готово: тести зелені, diff-answers --old HEAD 4–11 без непояснених змін, рев'ю D-026 «прийнято».

## Нотатки виконавця
