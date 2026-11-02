---
claimed_from: todo
claimed_at: 2026-11-02T06:48:39.007Z
id: graph-frac-g2
type: graph
subject: math
status: todo
claimed_by: orchestrator-g2
created: 2026-11-02
depends_on: [engine-skg-g1]
---
# Skill Graph, етап G2: пілотна лінія «дроби» 4–6 кл.

Дизайн: docs/design/skill-graph-math.md (§5.1 ролі, §5.4 чернетка пілоту — 25 вузлів, 45 ребер, 30 `u`), CONTENT_SCHEMA §11, інструменти G1 (validate, `tools/graph-report.mjs`). Чернетка як дані й перевірка: scratchpad-скрипт `skg-pilot-graph.mjs`, генератор пілотної копії `g1-pilot-make.mjs` (шляхи — у нотатках оркестратора).

## Рішення людини (2026-11-02, чат) на §7.3 дизайну
1. Дрібність: **(б)** окремий вузол на кожне вміння, яке можна перевірити окремо (1–2 на урок).
2. Затвердження зв'язків: **(б)** верифікатор + учитель вибірково переглядає лінію до того, як рушій нею користується.
3. Граф змінює план дитини: **(в) так, одразу скрізь** (не лише в лінії й без окремого порогу «було/стало») — для G4: рушій бере граф там, де він є і верифікований; diff-plan лишається як звіт, не як ворота. ⚠ Відрізняється від рекомендації (б) — врахувати в G4.
4. Сила зв'язку: **(а)** дві градації («обов'язково» / «допомагає»).
5. Екран помилки в прогресі: **(а)** ні зараз, **потім (б)** — після тіні, якщо без цього поради гірші.
6. Передумови в тренуванні: **(в)** лише коли тест чи помилки показали слабку передумову (для G4).
7. Історія: **(а)** лише вміння, без вузлів-фактів.
8. Перша лінія: **(а)** дроби 4–6 кл.
9. Поодинокі завдання без вміння: **(а)** лишаються з навичкою, учителю — окремим списком.

## Що зробити (ролі §5.1)
1. **Куратор графа:** `content/math/graph.js` за чернеткою §5.4 (вузли, ребра з `why`, `lines: frac`, `st: draft`); `node tools/build.mjs`; `node tools/graph-report.mjs --line frac` — пояснити кожне старе ребро лінії (V9).
2. **Автор (розмітка `u`):** `u` у m3, m5, g6m1l4, g6m2l3, g6m2l4, g6m2l5, pms1, pg6m1, pg6m2, dg4, dg6 — точно за §5.4 (30 `u`); лише поле `u`, жодних інших змін змісту; `validate --section` кожного — 0 помилок.
3. **Верифікатор (незалежний):** `reports/verify/graph-frac.md` — кожен вузол і ребро за §5.1 (w 2 — розв'язати типову задачу й показати, де потрібне B), списки graph-report (за замовчуванням, пари без вузла, нічиї), відкрите питання dg6/frac-of → g6m2; `st: verified` для перевірених вузлів.
4. Приймання: validate 0 помилок; `graph-report --line frac --strict` rc 0; `diff-answers --content-old <база>` — 0 змін (`u` не впливає на перевірку); playtest розділів лінії зелений. Учитель (людина) — вибірковий перегляд лінії перед G4.
5. Онови §7.3 дизайну → «Ухвалені рішення» (куратор або оркестратор).

## Нотатки виконавця

### Автор розмітки `u` (2026-11-02, author-u-g2)
Лише поле `u` (30 шт.) — точно за §5.4 дизайну; тексти, відповіді, порядок не змінено. Номери — індекс від 0 (validate показує від 1: m3 #8 → «екран 9»).

| Файл | Об'єкт → `u` | К-ть |
|---|---|---|
| content/math/g5-ms1.js | m3 #8 → num-by-frac; m3 #9 → [frac-of-num, num-by-frac]; m5 #6 → frac-cmp-simple | 3 |
| content/math/pool-g5-ms1.js | pms1 c04, c05, c06 → num-by-frac | 3 |
| content/math/g6-g6m1.js | g6m1l4 #5, #7, #9 → divis-gcd | 3 |
| content/math/pool-g6-g6m1.js | pg6m1 d01, d03, d04, d07 → divis-gcd | 4 |
| content/math/g6-g6m2.js | g6m2l3 #1 → frac-cmp-simple; g6m2l3 #7 → frac-equiv; g6m2l4 #1 → frac-add-same; g6m2l5 #6, #8, #9 → frac-div | 6 |
| content/math/pool-g6-g6m2.js | pg6m2 e03, e05, e06, e07 → frac-div; e08 → [frac-div, frac-add-unlike] | 5 |
| content/math/diag-g4.js | теми parts → parts-equal, mul → mul-table, quot → div-table, units → units-lt | 4 |
| content/math/diag-g6.js | завдання #21 → num-by-frac; тема g6-lcm → [divis-lcm, divis-gcd] | 2 |
| **Разом** | | **30** |

Перевірки: звірено через `loadContent` — 30 `u`, кожен на оцінюваному об'єкті з тією ж `sk`, що й вузол (заголовки збігаються з §5.4: m5 #6 numline $5/4$, g6m2l5 #6 «склянки по $1/4$ л», dg6 #21 «Скільки сторінок у книжці?»). `validate --section ms1/g6m1/g6m2`, `--pool pms1/pg6m1/pg6m2`, `--diag dg4/dg6`: до появи graph.js — лише очікувані V2 «немає такого вузла (у предмета math ще немає графа)» (33 рядки, по одному на id у `u`), інших помилок 0; на копії з чернеткою графа (g1-pilot-make, без zz-u.js) і з graph.js куратора в робочому дереві — 0 помилок (попередження лише старі sentenceWords: ms1 m4, m6; g6m2l4). `graph-report --line frac --strict` на копії з чернеткою — rc 0, помилок 0, дрейфу 0. `diff-answers --content-old HEAD --grades 4-6`: 0 змінених вердиктів, 0 нових/вилучених, 0 тестів без rev, 0 непояснених («змінених 12» — 12 вправ пулів з новим полем `u`, вердикти ті самі). build не запускав.

### Куратор графа (2026-11-02, curator-graph-g2)
`content/math/graph.js` (`v: "2026-11-02.1"`): 25 вузлів (4 base) за таблицею §5.4 — id, `sk`, `teach` (зокрема `by: "u"` у num-by-frac, divis-gcd, frac-div) і ребра звірено з таблицею та `skg-pilot-graph.mjs` один в один; `name` мовою вчителя, у кожного ребра `why` з номером екрана (індекс від 0, як у §5.4) або форматом пулу; `lines.frac` — 18 уроків і 16 тем §5.4; усі вузли й лінія `st: "draft"`.
**Відступ від §5.4 — одне нове ребро:** `div-chunks` → `div-rem` pre **w 1** (g4m3l3 #7 «Пачки олівців», `pre: m4a`: 87 : 6 = 14, ост. 3 — лише задачі з остачею). Без нього V9 лишав без пояснення `pre` g4m3l3 #7 і `requires` g4m3 → m4a. Разом 46 ребер (28 w 2, 14 w 1, 4 part); V4 — m4a (4 кл., тиждень 14) раніше за g4m3 (тиждень 19). Нотатку додано в §5.4 дизайну. Верифікатору — погодити або відхилити.

**Перевірки** (дерево з `u` автора): `build` → `validate` — 0 помилок, графових попереджень 0; `graph-report --line frac --strict` rc 0 (помилок 0, дрейфу 0, V10б 0); `graph-report --strict` (увесь граф) rc 0. `validate --section g4m3` — 0/0.
**Дрейф до появи `u`** (копія HEAD 64f2511 + graph.js, scratchpad `g2-nou`): 0 помилок, 19 попереджень дрейфу, `--line frac --strict` rc 1 — усі очікувані й зникли з `u` автора: V7б «немає прив'язаних об'єктів» — parts-equal, mul-table, div-table, units-lt, num-by-frac, divis-gcd, frac-div (7); V7б «`by: "u"` без явного `u`» — num-by-frac (m3), divis-gcd (g6m1l4), frac-div (g6m2l5) (3); V8 «завдання baseline-теми без вузла» — dg4 завдання 3, 11 (mul), 7, 17 (quot), 4, 15 (units), 6, 21 (parts) (8); V8 «пара (null, num) без вузла, 4 об'єкти» — dg4#3, #11, #7, #17 (1).

**V9: кожне старе ребро лінії** (обидва кінці у графі; скрипт scratchpad `g2-v9.mjs` — найкоротший шлях `pre ∪ part`, для тем — лише w 2/part):
| Старе ребро | Як пояснює граф |
|---|---|
| pre m5 #4, #5 → m4a; requires ms1 → m4a | frac-mixed → div-rem (w 2) |
| pre g4m3l3 #7 → m4a; requires g4m3 → m4a | div-chunks → div-rem (w 1, нове ребро G2) |
| pre g6m2l2 #6 → g6m1l4; requires g6m2 → g6m1l4; матр. g6m2l2 → g6m1l4 | frac-reduce → divis-gcd (w 1: до кінця можна скоротити й кроками) |
| pre g6m2l3 #6 → g6m1l4; матр. g6m2l3 → g6m1l4 | frac-common-den → part divis-lcm |
| pre g6m2l3 #1 → m2; pre g6m2l4 #1 → m4 | той самий вузол через явний `u` (frac-cmp-simple, frac-add-same; §2.4 п. 6) |
| pre g6m2l4 #8 → m5; requires g6m2 → m5; матр. g6m2l4 → m5 | frac-add-unlike → frac-mixed (w 1: мішані числа лише в частині задач) |
| requires g6m2 → m2; матр. g6m2l3 → m2 | frac-common-den → frac-cmp-simple (w 2) |
| requires g6m2 → m4; матр. g6m2l4 → m4 | frac-add-unlike → part frac-add-same |
| матр. g6m2l4 → g6m2l3; g6m2l3 → g6m2l1 | part frac-common-den; part frac-equiv |
| матр. g6m2l1 → m1; g6m2l2 → g6m2l1; g6m2l5 → g6m2l2 | frac-equiv → frac-read; frac-reduce → frac-equiv; frac-mul → frac-reduce (усі w 2) |
| матр. g6m1l1, l2, l3, l4 → m4a | divis-mult → div-rem (w 2), решта через divis-mult |
| матр. m1, m2, m3, m4, m5 → g4m5l1 | через frac-read → frac-unit (w 2) |
| матр. m3 → g4m5l2 | frac-of-num → part-unit-of-num (w 2) — залишено (§5.4) |
| матр. m1 → g4m5l2 | frac-read → part-unit-of-num (w 1, m1 #7 «Шоколадка») — залишено |
| матр. m2, m4, m5 → g4m5l2; g6m2l5 → g4m5l2 | **як пряме ребро відхилено** (§5.4: порівняння, додавання, мішані числа, множення не спираються на «третину від 15»); у звіті «пояснені» лише транзитивно через frac-read → part-unit-of-num **w 1** — тобто «допомагає», на план не впливає |
| forEvidence dg4/mul, dg4/quot ← m4a | div-rem → mul-table, div-table (w 2) |
| forEvidence dg4/parts ← g4m5l2; dg5/parts ← m1 | part-unit-of-num → frac-unit → parts-equal; frac-read → frac-unit (w 2) |
| forEvidence dg6/rem ← g6m1l1 | divis-mult → div-rem (w 2) |
| forEvidence dg6/frac, dg6/frac-cmp, dg6/frac-add ← g6m2l4 | frac-add-unlike → part frac-add-same → frac-read; → part frac-common-den → frac-cmp-simple; → part frac-add-same |
| **forEvidence dg6/frac-of ← g6m2l4** | **без шляху w 2 — не додаю.** Додавання з різними знаменниками не використовує дріб від числа; ребро frac-add-unlike → frac-of-num було б вигадане. Це відкрите питання R3-P3-1 (§5.4): або frac-mul ← frac-of-num стає w 2 (intro g6m2l5 «частина від частини»), або `for`/`forEvidence` теми задуже широкі (правка dg6 з `rev` / матриці). До рішення `buildPlan` — як зараз (§4.3). Верифікатору. |
| **forEvidence dg6/mixed ← g6m2l4** | **без шляху w 2 — свідомо w 1:** frac-add-unlike → frac-mixed лише для g6m2l4 #8 (`pre: m5`) і частини вправ; w 2 означало б «без мішаних чисел додавання дробів не вийде», що хибно. Верифікатору: або лишити w 1 (тема в списку V9, план як зараз), або обрати інший `forEvidence` (g6m2l5/e-вправи з цілою частиною — теж w 1). |
| поза графом (кінець без вузла): forEvidence dg4/mul, quot ← g4m3l1; dg4/units ← g4m4l4, g4m5l3; dg5/parts ← ms3l2; dg6/frac-of ← g6m3l2; матр. g4m3l3 → g4m1l1 | уроки поза лінією (V8 поза лініями) — до наступних ліній |

Ребра графа без старого джерела (15 у звіті) — нові, усі з `why` на екран: зв'язки всередині розділу (g4m5l2 → g4m5l1, divis-* → divis-mult, divis-lcm/gcd → divis-prime), m2–m5 → m1 (frac-read), g4m5l2 → g4m3l3 (div-chunks w 1), g6m2l2 → g6m1l1/l2. Для верифікатора — переглянути як звичайні ребра.
Списки graph-report для верифікатора: типові вузли розщеплених пар — лише свої вміння (m3 → frac-of-num, g6m1l4 → divis-lcm, g6m2l5 → frac-mul; dg6 #10 0-від → frac-of-num); пари без вузла — g6m1l2 #9, g6m2l1 #8, #9 (0-від; питання 9 — а); нічиїх V4 немає; неоднозначних boss-об'єктів 12 (boss не в `lines`).
