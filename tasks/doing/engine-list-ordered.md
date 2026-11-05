---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.697Z
id: engine-list-ordered
type: engine
subject: math
status: todo
claimed_by: eng-list
created: 2026-11-05
depends_on: []
---
# Рушій: `list` з порядком (`ordered: true`); масштаб «1 : N» при ключі number

Скіл `engine-change`; рев'ю D-026. Схема — docs/CONTENT_SCHEMA.md §10.
1. `list` не перевіряє порядок: «Запиши ∠C і ∠D» → «132; 41» зараховано, хоча ∠C = 41° (pg8m2 e07; pg8m4 a02, a03). Поле `ordered: true`: переставлена відповідь → form «Перевір, яка величина перша» (або bad). Після — позначити ці вправи в пулах (автор пулів).
2. pg9m6 f08 (масштаб): запис «1 : 10000» при ключі number 10000 не зараховується (ratioNum лише при ключі-дробі). Варіант — режим «масштаб» або альтернативні ключі.
Можна виконати разом з engine-list-quadratic (той самий код list).

Джерело: inbox 05.11 verifier-fix-math-pools-ister-formats ENGINE, writer-pools-ister ENGINE, orchestrator.

## Нотатки виконавця
