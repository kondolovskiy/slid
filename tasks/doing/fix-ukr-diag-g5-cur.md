---
claimed_from: todo
claimed_at: 2026-11-06T07:49:50.007Z
id: fix-ukr-diag-g5-cur
type: fix-diag
subject: ukr
grade: 5
section: dgu5
status: todo
claimed_by: writer-fix-dgu5
created: 2026-11-06
depends_on: [write-ukr-diag-g5]
---
# dgu5: теми cur для u5s9l4 і u5s10l3 складеними завданнями

Верифікатор dgu5 (reports/verify/dgu5.md §4) прибрав теми `cur` u5s9l4 (однорідні члени: схеми, повторювані сполучники) і u5s10l3 (складне речення: сполучниковий і безсполучниковий зв'язок): завдання перевіряли не все ядро уроку, а «знайоме» відкриває урок без черги. Повернути їх складеними `multi` (твердження на кожне вміння `learned`; ескіз — у звіті §4), **до першої публікації тесту** — до злиття гілки з dgu5 у main (deploy). Доти дитина його не проходила, додавати завдання можна без нового id; після публікації — лише новим id тесту (CONTENT_SCHEMA §9 `rev`: додавати завдання на місці не можна).

Скіли `math-pool-diag` (2а) і `content-author`. Змінювати лише content/ukr/diag-g5.js. Завдання — у другу половину тесту, разом ≤ 26. `node tools/validate.mjs --diag dgu5` — 0 помилок; далі — content-verifier зі свіжим контекстом (status лишається draft до верифікації).

## Нотатки виконавця
