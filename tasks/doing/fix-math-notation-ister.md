---
claimed_from: todo
claimed_at: 2026-11-03T10:05:18.712Z
id: fix-math-notation-ister
type: fix-section
subject: math
grade: 6-9
section: g6m3, g7m4, g9m2, g9m5
status: todo
claimed_by: writer-fix-math-notation-ister
created: 2026-11-03
depends_on: [math-ister-migration]
---
# Нотація 6–9 кл. за Істером (D-043, glossary «Вирішено 2026-11-03»)

## Що виправити (лише запис і термін, без зміни змісту, id, ключів відповідей)
1. **Довжина кола, 6 кл.:** `$l$` → `$C$` (`$C = 2πr$`, `$C = πd$`) — `content/math/g6-g6m3.js` (g6m3l5, фінал), а також пули/тести 6 кл., якщо там є `$l$` для довжини кола (`grep -n "\$l" content/math/pool-g6-g6m3.js content/math/diag-g6.js`).
2. **Ознаки рівності трикутників словами:** «І / ІІ / ІІІ ознака» (і латиницею «I ознака») → «перша / друга / третя ознака» (у потрібному відмінку) — `content/math/g7-g7m4.js`, `content/math/pool-g7-g7m4.js`, `content/math/diag-g8.js` (тест рівня: лише текст, тож без `rev`; варіанти `choice` не переставляти), а також усі інші файли content/math з такими записами (`grep -n "І ознак\|ІІ ознак\|ІІІ ознак\|I ознак" content/math/*.js`).
3. **Вектор з координатами без «=»:** `$\overrightarrow{AB} = (x; y)$` → `$\overrightarrow{AB}(x; y)$` там, де це позначення вектора з координатами (не рівність двох векторів і не обчислення) — `content/math/g9-g9m2.js`, `content/math/pool-g9-g9m2.js`. Відповіді coordinates2 не змінювати.
4. **Геометрична прогресія — `$b_n$`:** `$a_n = a_1 · q^{n-1}$` → `$b_n = b_1 · q^{n-1}$` і далі в текстах про геометричну прогресію (арифметична лишається `$a_n$`) — `content/math/g9-g9m5.js`, `content/math/pool-g9-g9m5.js`.
5. Змінені уроки → `status: "draft"`; пули/тести лишають статус, але в заголовному коментарі — рядок про правку. Перевірка: `node tools/validate.mjs` (0 помилок), для пулів — `--pool <id>`.
Прочитати: скіл `content-author` (уроки) і `math-pool-diag` (пули, тест рівня: без rev лише за незмінної суті завдання); glossary/math.md «Вирішено 2026-11-03».

## Нотатки виконавця
