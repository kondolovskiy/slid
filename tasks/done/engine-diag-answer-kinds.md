---
claimed_from: todo
claimed_at: 2026-11-01T13:38:38.744Z
id: engine-diag-answer-kinds
type: engine
subject: math
status: done
claimed_by: agent-engine-diag-answer-kinds
created: 2026-11-01
depends_on: []
---
# Тип `answer` з answerKind у тесті рівня (SLID.diag)

Знайдено в refine-math-pools-new-kinds: DIAG_TYPES (app/learn.js:11) не має `answer`, тож проби на час/величини (dg4 №18 «9:10 + 45 хв», inbox 30.10) не можна записати як відповідь `time`/`quantity`. Додати `answer` з answerKind (time, quantity, decimals, form) у діагностику: вердикт без фідбеку, сумісність збережених тестів (rev, див. refine-math-diag-g6-coverage), validate, test-learn, test-answer-ui. Перед заміною dg4 №18 — рішення людини, чи проба не стає складнішою (handoff, відкрите питання 5).

Також (інструмент): `tools/diff-answers.mjs` режим «старий і новий зміст на одному learn.js» — зараз зміни змісту він не бачить (автор refine-math-pools-new-kinds порівнював окремим скриптом).

Незалежне рев'ю (D-026).

## Нотатки виконавця
Виконавець: agent-engine-diag-answer-kinds (worktree wt-diagans, один комплект з engine-learn-prefixes-p3b — одне рев'ю).

**Що зроблено (зміст dg4 №18 НЕ змінено — потрібне рішення людини, handoff, відкрите питання 6):**
- `app/learn.js`: `DIAG_TYPES` + `answer`; `DIAG_ANSWER_KINDS = number | time | quantity` (експортовано). `validate(d)`: answer з іншим answerKind (list, expression, coordinates…) — помилка «у тесті не дозволено»; `signed` дозволено й для answer. Поля answer (decimals, form improper/compound, units, ключ time…) перевіряє той самий `answerFieldIssues` у validate.mjs (checkScreen для діагностик уже його кликав) — `tools/validate.mjs` **не змінено**.
- Вердикт у тесті: плеєр (app.js `check` → `gradeNow` → `checkAns === "ok"`) — **app.js не змінено**. `form` («245 см» при compound, «37» при decimals 1) — BAD, без фідбеку, підказки й другої спроби. Тому формат має бути видно з умови/підказки під полем (answerUI: приклад часу ≠ ключ, одиниці quantity).
- Сумісність збережених тестів: той самий механізм `rev` / `itemRev` / `resumeDiag` / `diagRunRev` (refine-math-diag-g6-coverage). Заміна наявного завдання (напр. dg4 №18 multi → answer time) — на тому самому індексі й темі з `rev: N`. Тести: test-learn (number → answer time з rev 2: старий вердикт відкинуто, нова відповідь зберігається, завершений результат не перераховується) і браузерний сценарій (фікстура з rev 3 поверх dg6 ред. 2).
- `tools/diff-answers.mjs`: answer-завдання діагностик у прогоні; новий режим `--content-old <rev>` — зміст ревізії (git archive у тимчасову теку) проти робочого дерева, обидва поточним learn.js. Друкує вправи зі зміненими вердиктами (ключ було/стало, переходи ok→bad…, приклади), нові/вилучені; rc 1 — непояснені (вердикт змінився, хоча вправа та сама), ключ не проходить, **тест рівня: завдання змінене по суті без rev > редакції старого тесту** або змінена кількість/тема. `--old` і `--content-old` взаємовиключні. Для цього `manifest(root)` (build.mjs) і `loadContent(root)` (lib.mjs) отримали необов'язковий корінь (типово ROOT — поведінка без змін).
- Документація: CONTENT_SCHEMA §9 (answer у тесті), PERSONALIZATION.md (рядок про answer і rev).
- Тести: test-learn (+ блок diag answer: дозволені/заборонені формати, вердикти ok/form/bad → OK/BAD, rev), test-validate (окремий блок у кінці: 13 фікстур діагностики + повний прогін), test-answer-ui regression `diag_answer_checks` (time «10:05» → OK, «245 см» → BAD, «37» → BAD, без фідбеку, «:» на клавіатурі, підказка без ключа, reload/продовження, rev 3), сканер «підказка ≠ ключ» тепер бачить і answer-завдання діагностик.

**Мутації (виконавець, на робочому дереві з відновленням):** `gradeNow` answer `!== "bad"` (form → OK) — `diag_answer_checks` падає; DIAG_ANSWER_KINDS-перевірку прибрати — test-learn/test-validate падають; rev прибрати з dg6 #16 — `diff-answers --content-old b545831^` повідомляє «dg6#16: зміст змінено без rev».

**Перевірки:** test-lab 141, test-learn 1913, test-math 36, test-metrics 20, test-personalization-qa 105, test-validate 374 — зелені; validate 0 помилок / 255 попереджень; `diff-answers --old 2ebad5c --grades 4-11` — 0 непояснених (змінені вердикти — лише p3b, див. задачу engine-learn-prefixes-p3b); `diff-answers --content-old 2ebad5c --grades 4-11` — 0 змін, rc 0; `--content-old e04ad73^` показує 9 вправ refine-math-pools-new-kinds (те, що автор порівнював окремим скриптом); test-answer-ui `--suite regression` (chromium) — green.

**Відкрите (людині):** dg4 №18 — чи замінювати multi на answer time «9:10 + 45 хв» (складність проби; потрібен `rev: 2` у dg4). Чи зараховувати в тесті `form` як OK (зараз ні — суворо, як остаточний вердикт уроку). Інші answerKind у тесті — окремим рішенням.
