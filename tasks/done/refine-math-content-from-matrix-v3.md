---
claimed_from: todo
claimed_at: 2026-11-01T11:44:08.359Z
id: refine-math-content-from-matrix-v3
type: content
subject: math
status: done
claimed_by: agent-refine-math-content-from-matrix-v3
created: 2026-11-01
depends_on: [curate-math-matrix-v3]
---
# Правки змісту, винесені з матриці v3 (tasks/done/curate-math-matrix-v3.md, reports/verify/math-matrix-v3.md)

Кожен пункт — окремий виконавець або партія; змінений файл → draft → незалежна перевірка; після — додати формат/evidence у матрицю (v3.x).
1. pg8m4: вправа exactRoot для g8m4l2/l3 (mer8g №513, 517, 530(2), 545–548) і list/choice для g8m4l2 — ротація в межах 8 вправ.
2. dg8 poly-2 «одночлен × многочлен»: у g7m3l2 немає окремого екрана (Алгебра 7 п. 10) — змінити пробу (нова ред. dg8, rev) або дописати екран у g7m3l2 (refine-math-lessons-g7-g9-support).
3. dg7 №16 (ms0bl1) «CB = AB − AC» — опора міркуванням; додати речення в ms0bl1 або змінити пробу.
4. Проба `angles` «за шкалою» без fig транспортира — потрібен fig/lab транспортира (запит до рушія) або переформулювати.
5. pm4s1: list-вправа для m4a (№160, №168).
6. pg9m1 a08 → №2.14(1) (comparison).
7. sk-теги вправ поза навичками уроку: pg7m7 b01/b02, pg8m1 b04/b07, pg8m3 d09, pg8m6 a06, pg9m3 d06.
8. Дрібне в матриці: g9m3l1 evidence + a9:104 (№11.24); блок `review` у JSON — посилання на reports/verify/math-matrix-v3.md; синхронізувати скорочені назви тем dg8/dg9; ms4l2 sk `meas` vs екрани geom.

## Нотатки виконавця

### 2026-11-01, agent-refine-math-content-from-matrix-v3 (автор змісту; пп. 1, 5, 6, 7, 8)

**Пункти 2, 3, 4 — окремо** (проби діагностик dg8 poly-2, dg7 №16 і транспортир `angles` — не робилися цим виконавцем; потрібна окрема задача / рішення людини / запит до рушія).

**Вправи (кожну звірено з текстовим шаром PDF підручника; сторінки друковані = сторінки PDF у mer8g, g4a, a9).** Вилучені вправи правильні (verified), вилучено лише через межу 8 і як найбільш дубльовані того самого рівня; їхні id не використовувати знову.

| Пул · урок | Вправа | Було | Стало | Джерело, сторінка |
|---|---|---|---|---|
| pg8m4 · g8m4l2 | b01 → **b09** (lvl 1) | №530(1) катети 3 і 4 → 5 (number; трійка 3-4-5 — на 4 екранах уроку) | №530(2) катети 6 і 9 → `exactRoot` «3√13» (√117 → form, 10,8 → bad) | mer8g №530(2), с. 139 |
| pg8m4 · g8m4l2 | b04 → **b10** (lvl 2) | №536 висота 35, основа 24 → 37 (та сама схема «половина + гіпотенуза», що й b05) | №541 гіпотенуза 26, катети 5 : 12 → `list` «10; 24» | mer8g №541, с. 140 |
| pg8m4 · g8m4l3 | + **c08** (lvl 2; було 7 вправ) | — | №513 проєкції 5 і 20 → катети, `list` із коренями «5√5; 10√5» (rootList → exactRoot; √125; √500 → form) | mer8g №513, с. 136 |
| pm4s1 · m4a | a08 → **a12** (lvl 3) | №168, перше питання «остача 4» → 5 (number) | №168, друге питання «А остачу 5?» → `list` [6, 8] (6 → bad, 6; 7; 8 → bad) | g4a №168, с. 64 |
| pg9m1 · g9m1l1 | a08 → **a09** (lvl 2) | №2.26(3) знижка 50 % → 10 грн (number, «радше арифметика») | №2.14(1) $-3a > -3b$ → $a < b$, `comparison` «<» | a9 №2.14(1), с. 19 |

Рівні: g8m4l2 3/3/2, g8m4l3 3/3/2, m4a 3/3/2, g9m1l1 3/4/1 (мінімум 3/2/1 дотримано; number у g9m1l1 лишає a06).

**sk вправ (п. 7; зміст не змінено, лише тег = навичка екранів уроку, D-029).** Екрани порахував скриптом: g7m7l2 func 5; g8m1l2 ops 5; g8m3l4 func 5; g9m3l4 eq 5.

| Вправа | Було | Стало |
|---|---|---|
| pg7m7 b01, b02 (g7m7l2) | eq | func |
| pg8m1 b04, b07 (g8m1l2) | expr | ops |
| pg8m3 d09 (g8m3l4) | expr | func |
| pg9m3 d06 (g9m3l4) | expr | eq |
| pg8m6 a06 | — | не чіпав (інший автор) |

**Матриця (п. 8), docs/math-personalization-coverage.json і .md** — новий підрозділ «Доповнення v3 (refine-math-content-from-matrix-v3)» у «Зміни v3», позначки ⁶ у реєстрі; версію не піднімав (2026-11-01.v3):
- формати: g8m4l2 number → number, list, exactRoot; g8m4l3 number, list → number, list, exactRoot; m4a number → number, list; g9m1l1 без змін (comparison уже був; a08 → a09);
- g9m3l1 evidence a9:63–82 → a9:63–82,104 (№11.24) + пояснення різниці з d06;
- ms4l2 sk meas → ["geom", "meas"] (екрани geom 5 / meas 1; у pms4 b01, b02, b08 geom, b03–b07 meas — як g4m2l3);
- назви тем dg8 (6) і dg9 (11) = `title` у diag-g8.js / diag-g9.js; у .md — у таблицях dg8/dg9 (зміни в межах секцій);
- JSON `review.v3` → reports/verify/math-matrix-v3.md (+ речення в розділі «Джерела»); `changes` доповнено; «Не змінено»: закриті пункти позначено. Шлях tasks/doing у р. 102 уже був виправлений до мене.

**Статуси:** pg8m4, pm4s1, pg9m1, pg7m7, pg8m1, pg8m3, pg9m3 → `draft`, `factcheck: null`, `meta.revised: "2026-11-01 refine-math-content-from-matrix-v3"`, шапки з переліком змін.

**Перевірки (мої прогони):**
- `validate --pool` pg8m4, pm4s1, pg9m1, pg7m7, pg8m1, pg8m3, pg9m3 — 0 помилок, 0 попереджень; повний `validate` — 0 помилок, 255 попереджень.
- Ключі через `SLID_LEARN.checkAns` (scratchpad v3chk/chk.mjs): b09 «3√13», «3*sqrt(13)», «3√13 см» ok; √117 form; 10,8 і 13√3 bad. b10 «10; 24»/«24; 10» ok; «5; 12», «10» bad. c08 обидва порядки ok; «√125; √500» form; одне число, десяткові bad. a12 «6; 8»/«8; 6» ok; «6», «6; 7; 8», «5» bad. a09 «<» ok, «>», «=» bad.
- `personalization-qa --strict`: 5, 6 — rc 0; 4, 7, 8, 9 — rc 1 лише «ще не verified»: мої pm4s1, pg7m7, pg8m1, pg8m3, pg8m4, pg9m1, pg9m3 + чужі draft pg4m4, pg8m6. Форматних, sk- і рівневих прогалин 0; попереджень про sk вправ більше немає.
- `test-personalization-qa` 96 green; `test-learn` 1631 гаразд; `test-answer-ui --suite content --grade 4/7/8/9` — green.
- build, commit не робив; app/, tools/ не змінював.

**Сумнівні місця / для верифікатора:**
- b09, c08: exactRoot у геометрії 8 кл. спирається на g8m3l3 (винесення множника, pg8m3 c-вправи), а не на екрани g8m4l2/l3; в умові прямо сказано, як записати («a√b, винеси множник»), hint дає розклад. g8m3 у плані йде перед g8m4, але `prerequisites` рядків g8m4l2/l3 у матриці g8m3l3 не містять — чи додавати (рішення куратора).
- c08 — `list` із коренями: аудит зараховує як exactRoot (rootList). Окремої вправи з одним коренем `answerKind: "exactRoot"` у l3 немає.
- a12 (4 кл.) — list уже є в pg4m1; формулювання «через крапку з комою» як там.
- SK_RETAG (app/learn.js) для перетегованих вправ — пропозиція інженеру в inbox (ENGINE).
