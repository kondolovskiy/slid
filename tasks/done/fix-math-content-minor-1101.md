---
claimed_from: todo
claimed_at: 2026-11-01T14:38:27.265Z
id: fix-math-content-minor-1101
type: fix
subject: math
status: done
claimed_by: agent-fix-math-content-minor-1101
created: 2026-11-01
---
# Дрібні правки змісту з handoff 2026-11-01 («без задачі»)

- pool-g11-g11m1.js b03, b07, c02: `\text{lg}` → `\lg` (рушій уже підтримує, D/глосарій 2026-11-01).
- g11-g11m6.js рядки ~558, 610, 776: `"sin " γ` → `"sin"\,γ`.
- pool-g10-g10m2.js: сигла джерела `mer10` → `m10` (як в інших пулах 10 кл.).
- pool-g4-g4m4.js a08: `adapted: true` (у підручнику «9 год 30 хв вечора», у пулі «21:30»).
- diag-g10.js №18 (cur-g10m2): позитивне формулювання аксіоми А2 як шостий варіант multi — лише якщо не змінює ключ інших тверджень; інакше потрібна ред. rev (тоді не роби, запиши).
Змінені файли → status "draft" → незалежний верифікатор (лише змінені місця).

## Нотатки виконавця
Виконавець: agent-fix-math-content-minor-1101, 2026-11-01. Змінені файли — лише content/math/{pool-g11-g11m1,g11-g11m6,pool-g10-g10m2,pool-g4-g4m4}.js; змінені місця позначено в шапці кожного файлу.

Було → стало:
- pool-g11-g11m1.js (pg11m1): `\\text{lg}` → `\\lg` — 22 входження у b03 (title, steps), b07 (title, body, steps), c02 (title, body, steps) + шапка (там прибрано застаріле «рушій не знає \\lg»). app/math.js: `lg` є в COMMANDS і FN; `\\lg` рендериться як назва функції прямим шрифтом (span.mfn замість span.mt), перед `\\,` зайвого пробілу не додає — вигляд той самий. Ключі b03 −5, b07 2, c02 3 → checkAns "ok". status pool: verified → draft.
- g11-g11m6.js: `"sin " γ` → `"sin"\\,γ` (у шаблонних рядках, бекслеш подвоєно, як у diag-g10/g10m5); заодно в тих самих формулах `"sin " 30°` → `"sin"\\,30°` — разом 6 замін у рядках 558 (g11m6l4, шпаргалка), 610 (g11m6l4, hint), 776 (g11m6l5, hint). status g11m6l4, g11m6l5: verified → draft (l1–l3 не чіпав).
- pool-g10-g10m2.js (pg10m2): сигла `mer10` → `m10` (sources.id і 16 src). status: verified → draft. Ключі всіх answer-задач — checkAns "ok".
- pool-g4-g4m4.js (pg4m4): a08 — додано `adapted: true`. Ключ "22:57" — checkAns "ok". status: verified → draft.
- diag-g10.js №18 (cur-g10m2, multi): НЕ змінено. Шостий варіант (позитивне формулювання А2) змінює `opts` і `correct`, а за CONTENT_SCHEMA §9 (rev) зміна варіантів/ключа можна лише заміною на місці з `rev: N`, а додати варіант без нового завдання не можна. Потрібна окрема задача з `rev` (або відмова від бажаної правки) — рішення оркестратора.

Перевірки: validate --pool pg11m1 / pg10m2 / pg4m4, --section g11m6, --diag dg10 — 0 помилок. personalization-qa --grade 4/10/11 --strict — rc 1 лише через «pg4m4 / pg10m2 / pg11m1: ще не verified» (мої draft).
Відкрите (ENGINE): tools/validate.mjs MATH_COMMANDS не містить "lg" (на відміну від app/math.js COMMANDS) — validate --pool pg11m1 дає 21 попередження «непідтримана команда \\lg». Це хибні попередження; потрібно додати "lg" у MATH_COMMANDS валідатора (інженерна задача, tools/ я не чіпав).
Верифікатору: перевірити лише змінені місця (рендер \\lg у b03/b07/c02; "sin"\\,γ у g11m6l4/l5; сигли m10; adapted a08).
