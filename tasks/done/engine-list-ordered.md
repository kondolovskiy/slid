---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.697Z
id: engine-list-ordered
type: engine
subject: math
status: done
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
Виконавець: eng-list (worktree wt-list), разом з engine-list-quadratic (той самий код list). Рев'ю D-026 — ще не проведено.

**п. 1 — `ordered: true` для list** (app/learn.js `checkCore`, `badHint`, `hintTexts`, `listKey`, `validatePool`):
- з `ordered` елементи порівнюються по місцях; повтори дозволено (`50; 50`); «form» через нескорочений запис на своєму місці — як і без ordered.
- Переставлений запис — **bad** (не form: значення на місцях неправильні, а form = «значення правильне» — hyp.js рахує його як ✔), з підказкою `badHint` «Перевір порядок: запиши величини в тій послідовності, у якій їх названо в умові.» — лише коли це ті самі значення в іншому порядку (`listOrder`, з одиницями `132°; 41°` теж); інакше — звичайне «Зміни відповідь». formCode — null.
- validatePool: `ordered` — boolean лише для answer list; `ordered` разом з `multiset` — помилка («multiset не потрібен»).
- Перевірено на ключах вправ: pg8m4 a02 (`"10.5; 15"`, см) і a03 (`"25; 20; 35"`) з `ordered: true` — ключ ok, переставлений — bad з підказкою, `10,5 см; 15 см` — ok.
- **Пули не змінював.** Автору пулів (окрема задача): додати `ordered: true` у pg8m2 e07 (∠C, ∠D), pg8m4 a02 (B₁C₁, A₁C₁), a03 (DE, EF, DF); умови вже називають порядок («Запиши ∠C і ∠D через крапку з комою»). id ті самі. Після — прибрати з pitfalls-engine рядок «list не перевіряє порядок» (куратор).

**п. 2 — масштаб «1 : N» (pg9m6 f08):** нове поле `scale: true` для числової answer (ключ — натуральне n > 1): «1 : 10000», «1:10 000», «1 ∶ 10000» при ключі 10000 — **ok**, як і «10000». Лише перший член рівно 1: «2 : 20000», «10000 : 1», «1 : 1000», «1 : 10000/1» — bad. Без `scale` — як раніше (bad: там «1 : n» може означати інше число). validatePool: scale — boolean лише для number з натуральним ключем > 1. Альтернативні ключі не знадобились.
- **Пул не змінював.** Автору пулів: у pg9m6 f08 дописати `scale: true` (той самий id, той самий ключ 10000). Оцінювальна зміна → рядок в inbox «→ teacher-questions».

Документація: CONTENT_SCHEMA §10 (list `ordered`, number `scale`, «у/в» у list). Тести, мутанти, diff-answers, check — у нотатках engine-list-quadratic (спільний комплект): мутанти ordered (ігнор, без повторів, tidy→ok, без підказки, підказка на будь-що, без stripUnit у підказці, hintTexts, listKey) і scale (вимкнено, будь-який перший член, без прапорця, дріб у другому члені), validatePool (ordered, ordered+multiset, scale, ключ scale) — усі вбито. Браузер (Node Playwright): ordered «132°; 41°» → «Перевір порядок…», «41°; 132°» → ok; scale «1 : 1000» → bad, «1 : 10 000» → ok.
