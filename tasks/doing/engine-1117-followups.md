---
claimed_from: todo
claimed_at: 2026-11-17T19:38:32.909Z
id: engine-1117-followups
type: engine
subject: all
status: todo
claimed_by: engine-followups-1117
created: 2026-11-17
source: student-playtest-1117
priority: P2
---
# Доробки після рев'ю хвилі 1 (*-1117)

Скіл `engine-change` (п. 1–3), для п. 4 — `math-pool-diag`/`content-author`; рев'ю D-026. Джерела: reports/review/engine-lab-column-digits-1117.md, reports/review/engine-diag-baseline-plan-1117.md, memory/short/inbox.md (рядки engine-appjs-1117).

1. **P2, app/lab.js:809** — стирання цифри з екранної клавіатури, коли приходить лише подія `input` (`value=""`, `deleteContentBackward`): код повертає `c.value` до старого значення до перевірки `!/\d/.test(c.value)`, гілка «стерти» не спрацьовує. Зберегти сире значення до повернення; додати сценарій стирання в tools/test-ui.mjs (сценарій 17). Зонд: reports/review/… або scratchpad reviewer-engine-1117/probe.mjs (відтворити заново).
2. **P3, app/lab.js** — Backspace у порожній клітинці на телефоні не повертає до попередньої клітинки.
3. **P2, tools/lib.mjs `diagCtx`** — передавати `allLessons`, щоб `see` у темі тесту рівня міг посилатися на урок іншого предмета (dgw7 `era` → «Лінія часу» з «Історії»); тест у tools/test-validate.mjs.
   **P3, app/app.js:437** — картка плану на головній для тем із `see` називає урок(и) і дає кнопку, як у плані після тесту.
4. **P2, зміст тестів рівня** (після п. 3): dgu5 тема `apos` → `see: ["u5s7l3"]`; dgw7 `era` → `see: ["l3"]`; переглянути решту baseline-тем (dg4, dgu5, dgh5, dgw7) — чи є уроки, на які варто послатися. Тест рівня → draft, верифікація.

## Критерії готовності
- node-тести й `node tools/test-ui.mjs` зелені; новий сценарій падає на старому коді.
- `node tools/validate.mjs --diag dgu5`, `--diag dgw7` — 0 помилок.
- План після dgu5 з «Апостроф» у прогалинах веде на u5s7l3 (симптом g5.md №3 у reports/qa/student-playtest-1117/ зник).
- reports/review/engine-1117-followups.md — «прийнято».

## Нотатки engine-followups-1117
Гілка `engine-followups-1117` (worktree), від 10277b8. Коміти: рушій/інструменти/тести/docs і зміст тестів рівня — окремо.

1. **app/lab.js, обробник `input` клітинки** — сире значення `raw` береться до відновлення поля; «стерти» з екранної клавіатури (input без keydown, поле порожнє) → «?» і фокус на попередню клітинку (як keydown Backspace).
2. **Backspace у порожній клітинці на телефоні** — порожня клітинка тримає невидимий заповнювач `CELL_NIL` (U+200B), тож видалення дає input з порожнім полем → повернення до попередньої клітинки й стирання її (як keydown Backspace). `typedDigit` заповнювач відкидає (тест у test-lab.mjs). Обмеження: якщо каретку поставлено перед заповнювачем без виділення, Backspace не дасть події (фокус виділяє вміст, тож зазвичай не так); на справжньому телефоні не перевірено.
3. **tools/lib.mjs `diagCtx(c, all)`** — `allLessons`: уроки лише інших предметів (id → {grade, subject}); validate.mjs і personalization-qa.mjs (`auditOther(…, subjects)`) передають усі предмети. Тести: test-validate.mjs (see на урок «Історії» 5 кл. — чисто; 7 кл. — «старшого класу»; вигаданий — помилка), test-personalization-qa.mjs.
   **app/app.js `planCard`** — новий `planBaseText`: тема з see — «Потренуй «…» — тема є в уроці «…» (клас)» (з дорослим поруч — «Повтори …»), кнопки `seeRow` на перші два уроки see. docs: CONTENT_SCHEMA §9, PERSONALIZATION «Baseline».
4. **Зміст** (статус → draft, завдання й порядок не змінено, rev не потрібен):
   - dgu5: abc→u5s4l4, stress→u5s5l1, root→u5s3l2, e-y→u5s5l2, apos→u5s7l3, syn→u5s2l3, main→u5s8l3, text→u5s1l3.
   - dgh5: seq, units→l3; gener→s1l7; past→l1; check→s3l7; names→h23; map→g5s7l1; symbols→h41; indep→h64; rights→h32.
   - dgw7 (уроки «Історії» 5–6 кл.): cent, era→l3; rome→g6s8-l3; split→g6s8-l6; christ→g6s8-l5; law→g6s6-l3; critic→l4; fact→l1; geo→h21; cause→g6s6-l1; anc — без see (уроку на хронологію держав Стародавнього світу немає).
   - dg4: place→g4m1l1; add→g4m2l1; sub→g4m2l2; units→g4m4l4, g4m4l1; parts→g4m5l1; mul, quot, ord — без see (уроку 4 кл., що повторює таблицю чи порядок дій, немає).
   Верифікатору: чи справді урок see вчить тему опори (вибір за outro.learned і екранами). `personalization-qa --diag dg4` пише «БРАКУЄ: dg4: ще не verified» — до верифікації.

Тести: test-lab 206/206, test-learn 2943, test-personalization-qa 156, test-validate 1660, `validate --diag dg4|dgu5|dgh5|dgw7` — 0/0; `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 217 ok, 0 ✗ (нові сценарії 20, 21). Сценарій 20 на старому lab.js — 4 ✗; сценарій 21 на старому app.js — 4 ✗. test-answer-ui.py / playtest — лише CI (немає Python playwright).
