---
claimed_from: todo
claimed_at: 2026-11-05T14:52:52.113Z
id: fix-math-pools-ordered-scale
type: write-pool
subject: math
status: done
claimed_by: writer-pools-os
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
writer-pools-os, 2026-11-05 (worktree wt-poolsos).

**Що змінено (id ті самі, ключі не змінено):**
- `pool-g8-g8m2.js` e07 (ist8g №7.7, с. 52) — `ordered: true`. Умова: «Запиши $\angle C$ і $\angle D$», ключ `[41, 132]`: ∠C = 180° − 139° = 41°, ∠D = 180° − 48° = 132° — порядок збігається.
- `pool-g8-g8m4.js` a02 (mer8g №427, с. 105) — `ordered: true`. Умова: «Знайди сторони $B_1C_1$ і $A_1C_1$», ключ «10.5; 15» ($B_1C_1$ = 1,5 · 7, $A_1C_1$ = 1,5 · 10) — порядок збігається.
- `pool-g8-g8m4.js` a03 (mer8g №429, с. 105) — `ordered: true` **і правка тексту умови**: було «Знайди сторони трикутника $DEF$. Запиши три числа через «;».» — порядок не названо (CONTENT_SCHEMA §10: з `ordered` умова мусить назвати порядок). Стало «Запиши $DE$, $EF$ і $DF$ через «;».»; ключ «25; 20; 35» = $DE$, $EF$, $DF$ (steps у тому ж порядку) — ключ не змінено. Верифікатору: звірити саме цей рядок.
- `pool-g9-g9m6.js` f08 (ist9g №24.15, с. 201) — `scale: true` (ключ 10000, натуральний > 1). Умова не змінена.
- `±` з `ordered` ніде не поєднано. Статуси pg8m2, pg8m4, pg9m6 → draft, у шапках — рядок про правку, `meta.revised`.

**Вердикти (прямий checkAns):** f08: «10000», «1 : 10000», «1:10 000», «1 ∶ 10000» — ok; «2 : 20000», «1 : 1000», «10000 : 1» — bad. e07 «132; 41», a02 «15; 10,5», a03 «35; 20; 25» / «20; 25; 35» — bad; ключі — ok.

**Перевірка:** validate --pool pg8m2 / pg8m4 / pg9m6 — 0/0; build; `npm run check` EXIT 0. Знімки test-hyp **не зсунулися** (625 перевірок, без правок тесту).

**diff-answers:**
- `--old HEAD --grades 4-11` — rc 0, 0 непояснених (той самий learn.js; змін вердиктів рушія немає).
- `--content-old HEAD --grades 4-11` — змінено 4 вправи, змінені вердикти в 3: pg8m2:e07 «132; 41», pg8m4:a02 «15; 10.5», pg8m4:a03 «35; 20; 25» — ok → bad «Перевір порядок…». f08 — без змін у прогоні (записів «1 : n» у наборі проб немає; перевірено напряму, див. вище).
- `test-diff-answers` (фікстура learn-b799dfa, вимагає rc 0 усього diff-answers) упав: ті самі 3 записи — непояснені. **Інженерна зміна:** у `tools/diff-answers.mjs` нова категорія «ordered переставлений запис у list з ordered — bad «Перевір порядок»» (незалежна класифікація: list з `ordered: true`, старий ok, новий bad з точною підказкою, і є перестановка елементів запису, яку новий рушій зараховує) + рядок у шапці. Після неї test-diff-answers 47 ok / 0 ✗; на фікстурі b799dfa — 3 у категорії, 0 непояснених. Мутант (текст підказки в learn.js копії змінено) → 0 у категорії, 3 непояснені, rc 1. Прогін — на копії дерева в scratchpad (tmp git-репозиторій з фікстурою як HEAD).
- → потрібне **рев'ю D-026** для `tools/diff-answers.mjs` (engineering-review) окрім `content-verify` пулів.

## Нотатки верифікатора
verifier-fix-math-pools-ordered-scale, 2026-11-05 (worktree wt-poolsos). Звіт: reports/verify/pools-ordered-scale.md.
- e07, a02, a03, f08 розв'язано незалежно; ключі правильні; порядок у ключах = порядок, названий в умовах. Умови звірено з PDF (ist8g с. 52, mer8g с. 105, ist9g с. 201).
- Нова умова a03 («Запиши $DE$, $EF$ і $DF$ через «;».») — природна й однозначна.
- checkAns (node vm): правильні записи — ok, переставлені — bad з «Перевір порядок…»; f08 «1 : 10000», «1:10 000», «1 ∶ 10000» — ok, «2 : 20000», «1 : 1000», «10000 : 1» — bad.
- validate --pool ×3 — 0/0. Пули → verified. Правок контенту немає.
- Задачу не переміщено в done: потрібен ще вердикт інженерного рев'ю tools/diff-answers.mjs (D-026).
