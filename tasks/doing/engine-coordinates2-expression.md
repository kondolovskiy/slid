---
write_group: personalization-shared
id: engine-coordinates2-expression
type: engine
subject: math
status: doing
claimed_by: engineer-coord-expr
created: 2026-10-31
depends_on: [verify-math-personalization-g9]
---
# coordinates2 з компонентами-виразами (рушій) + №13.5(4) у pg9m2/g9m2l3

Рішення людини (2026-10-31): закрити прогалину expression у g9m2l3 розширенням рушія. Підручник: Мерзляк, Якір «Геометрія 9» (2026), №13.5(4), відповідь $(p - m; k - n)$ (див. reports/verify/pg9m2.md).

1. **Рушій (app/learn.js checkAns / формат coordinates2):** дозволити компоненти пари, що є виразами зі змінними (як answerKind "expression"), з тією самою канонічною перевіркою еквівалентності, межами 2048 біт / ~0,8 с і повідомленнями form. Числові coordinates2 — без змін поведінки. Опис ключа в docs/CONTENT_SCHEMA.md §10; validate має перевіряти такий ключ.
2. **personalization-qa:** пара з компонентами-виразами закриває вимогу expression уроку (так само обережно, як rootList: лише якщо checkAns справді розбирає компоненти як вирази; наближення/неканонічне — ні).
3. Регресії: tools/test-learn.mjs, tools/test-personalization-qa.mjs, tools/test-answer-ui.py (поле coordinates2 з виразом у браузері: введення, клавіші змінних).
4. Незалежне рев'ю (D-026). Контент (додавання №13.5(4) у pool-g9-g9m2.js) — окремо автором і верифікатором після злиття рушія.

## Нотатки виконавця
