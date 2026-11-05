---
claimed_from: todo
claimed_at: 2026-11-05T07:32:04.041Z
id: engine-coordinates-vector-name
type: engine
subject: math
status: todo
claimed_by: eng-coord
created: 2026-11-05
depends_on: []
---
# coordinates2/3: приймати назву вектора в записі відповіді

Джерело: handoff 05.11 «Пропозиції» (ENGINE P3), inbox 04.11 (writer pg11m2: b04), reports/research/mon-math-2026-11.md §2.3 п. 3; приклади pg11m2 b04, pg9m2 d04. Скіл `engine-change`; незалежне рев'ю D-026.

Зараз відповідь `c = (−13; −2; 17)` дає `bad`, хоча трійка правильна. Підручники (Мерзляк 10, Істер 9) пишуть `c(−13; −2; 17)` (D-047 — без «=»).

## Що зробити
1. У перевірці `coordinates2`/`coordinates3` (app/learn.js або app/math.js — знайди) приймати префікс назви: `c(…)`, `c = (…)`, `c→(…)`, `AB(…)`, `AB→ = (…)` — за умови, що назва збігається з назвою з умови / `answer` (якщо є) або будь-яка латинська назва; неправильна назва → `form` з підказкою (не `bad`). Вирішити й описати в CONTENT_SCHEMA.
2. Тести в tools/ (test-learn / test-math), мутанти; регресія test-answer-ui (Python) — описати сценарій, якщо в контейнері немає Python Playwright.
3. Без зміни ключів у змісті.

## Нотатки виконавця
