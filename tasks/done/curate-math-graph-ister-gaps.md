---
claimed_from: todo
claimed_at: 2026-11-05T09:17:13.074Z
id: curate-math-graph-ister-gaps
type: graph
subject: math
status: done
claimed_by: curator-graph-math
created: 2026-11-05
depends_on: []
---
# Граф умінь: пропозиції вузлів і ребер для нових уроків D-043 (Істер, 03.11)

Зібрано куратором пам'яті 2026-11-05 зі старого inbox (рядки `IDEA GRAPH` авторів 03.11). **graph.js не змінено.** Зараз `content/math/graph.js` (v 2026-11-03.1) має лише лінію «дроби» 4–6 кл.; нижче — сировина для майбутніх ліній (геометрія 7–9, тригонометрія, стереометрія, ймовірність, алгебра 8–9). Працювати за скілом `skill-graph` (docs/design/skill-graph-math.md §2–§3; `why` з посиланням на екран, вага w за правилами §3); автори пропонували вузли без звірки з правилами — кожне ребро перевірити за текстом уроку.

## Блок пропозицій (як у inbox; `←` = pre)
- **g6m3l7** (кругові діаграми): вузол на розсуд; ← g6m3l5 (коло, круг), відсоток від числа ms3l2 / g6m3l4. (writer-write-math-g6m3-circle-diagrams)
- **g6m6** (writer-write-math-g6-probability): `comb-enum` (перебір і таблиця, g6m6l1); `comb-tree` (дерево варіантів, g6m6l2; pre comb-enum w2); `prob-events` (види подій, g6m6l3); `prob-classic6` (P = m/n, g6m6l4; pre prob-events w1, frac-reduce w1); g9m7l1/l2 — same/pre від цих вузлів. g6m6 — optional (D-048).
- **7 кл., sk geom** (writer-write-math-g7-geometry-gaps): `ext-angle` (g7m4l5; pre сума кутів g7m4l3 w2, суміжні кути g7m2 w2); `side-angle` (g7m4l6; pre ext-angle w1, рівнобедрений g7m4l2 w1); `right-tri` (g7m4l7; pre сума кутів w2, side-angle w1); `right-tri-eq` (g7m4l8; pre ознаки g7m4l1 w2, right-tri w2); `tri-ineq` (g7m4l9; pre side-angle w1); `perp-dist` (g7m6l5; pre вертикальні/суміжні g7m2 w2); `circ-in-out` (g7m8l5; pre серединний перпендикуляр g7m8l3 w2, right-tri-eq w1, дотична g7m8l2 w2); `inscribed-angle` (g7m8l6; pre ext-angle w1 — доведення, коло g7m8l1 w2).
- **7 кл., sk expr:** g7m3l6 (тотожності), g7m3l7 (сума/різниця кубів) — вузлів не пропонували; g7m3 у graph.js немає.
- **8 кл.** (writer-write-math-g8-algebra-gaps): g8m1l6 (раціональні рівняння, ОВР) ← g8m1l1, g8m1l2, g7m1 (лінійні рівняння; урок уточнити); g8m1l7 (стандартний вигляд) ← g8m1l3; g8m3l6 (y = x², графічне розв'язування) ← g7m5l1; g8m5l6 (тричлен, розклад) ← g8m5l2, g8m5l3, g7m3l4; g8m5l7 (біквадратні, заміна, розклад) ← g8m5l1, g8m5l2, g8m1l6, g8m3l1; g8m5l8 (задачі на дробові рівняння) ← g8m1l6, g8m5l2, g8m5l4.
- **8 кл., тригонометрія й чотирикутники** (writer-write-math-g8-trig-acute; вузлів не пропонував): g8m4l5 (бісектриса), g8m4l6–l8 (sin/cos/tg гострого кута, табличні кути, розв'язування — sk trig, уперше в 8 кл.), g8m2l6–l7 (вписаний / описаний чотирикутник; requires g7m8l6, g7m8l2 уже є).
- **9 кл.** (writer-write-math-g9-gaps): g9m3l6 (системи 2-го степеня) ← g9m3l3, g7m7l3, g9m2l2, g8m5l2; g9m3l7 (задачі системами) ← g9m3l6, g8m4l2; g9m4l5 (S = ½ab sin γ) ← g9m4l1, **g8m6l2** (виправлено 05.11: S = ½ah — g8m6l2 «Основа на висоту», g9m4l5 #0, #3; від g8m6l1 — лише «діагональ ділить паралелограм», #7); g9m4l6 (Герон, R, r) ← g9m4l5; g9m5l5 (нескінченна геом. прогресія) ← g9m5l3; g9m6l6 (дуга, сектор) ← g9m6l2, g9m6l1; g9m6l7 (площі подібних) ← g9m6l4, g9m6l2. g9m4l1 → тепер також ← g8m4l6–l7 (requires g9m4 уже містить g8m4l7).
- **9 кл., стереометрія g9m8:** g9m8l1 (площина, способи задання) ← ms4l2; g9m8l2 (мимобіжні, перпендикулярні прямі, Піфагор у просторі) ← g9m8l1, g8m4l2, g7m6l1; g9m8l3 (перпендикуляр, похила, проєкція, відстань) ← g9m8l2, g8m4l2; g9m8l4 (паралельні й перпендикулярні площини) ← g9m8l3; sk geom: `prism-surface` (g9m8l5; pre ms4l2 w2, Піфагор g8m4l2 w1), `prism-volume` (g9m8l6; pre ms4l2 w2, prism-surface w1), `pyramid-surface` (g9m8l7; pre prism-surface w1, Піфагор w2), `pyramid-volume` (g9m8l8; pre prism-volume w2, pyramid-surface w1); g9m8l9 (циліндр) ← g9m8l6, g9m6l2; g9m8l10 (конус: l² = h² + r²) ← g9m8l8, g9m8l9, g8m4l2; g9m8l11 (куля) ← g9m6l2; g9m8l12 — boss.

## Готово, коли
- Рішення куратора графа: які лінії відкривати й коли (або «відкласти до G4») — у нотатках; вузли/ребра, якщо вносяться, — з `why` за текстом уроку, `node tools/graph-report.mjs --strict` зелений, незалежний верифікатор лінії, рев'ю D-026 для змін інструментів.

## Додано 2026-11-05, сесія 3 (куратор пам'яті, inbox MATRIX eng-math-dg9 і P3 рев'ю refine-math-diag-g9-ister-required)
- **g9m4l5 «Площа через синус»: опора — g8m6l2 «Площі» ($S = 1/2 ah$), а не g8m6l1** (від g8m6l1 лише ідея «діагональ ділить паралелограм на трикутники»). Виправити в блоці вище (`g9m4l5 ← g9m4l1, g8m6l1` → g8m6l2 або обидва) і в реєстрі матриці docs/math-personalization-coverage.md (рядок g9m4 / `g9m4l5`, стовпець передумов) + json — наступна версія матриці (v12), «Зміни v12». Через це `polygon` → g9m4 у dg9 свідомо не додано (рішення оркестратора 05.11).
- P3 (рев'ю reports/review/refine-math-diag-g9-ister-required.md): docs/design/skill-graph-math.md:181 «g6m6 optional» — стосується лише уроків; коментар content/math/diag-g9.js:10 і «Зміни v11» — уточнити, що `for` впливає й на тіньові передумови (app/hyp.js ≈ 348). Правка коментаря — без зміни id тесту.

## Нотатки куратора графа (curator-graph-math, 2026-11-05, worktree wt-graph)

### Рішення: що відкрито зараз
Граф дитині нічого не змінює до G4 (D-038; G3 — лише тінь `graphPre` у hyp-replay), а на G4 за рішенням 3 (в) рушій бере граф **скрізь, де він є і `verified`**. Тому кожна відкрита лінія мусить бути **цілою** (V8: усі уроки лінії в `teach`, теми лінії покриті) і пройти верифікатора; окремі вузли «з inbox» без опор дали б ребра в нікуди й половинчасті лінії. Відкрив дві лінії, для яких пропозиції повні й опори або вже є у графі, або вміщуються в лінію (обидві `st: draft`, вузли `draft`), `graph.js` v 2026-11-05.1:

**`prob` — комбінаторика й ймовірність 6, 9 кл.** (уроки g6m6l1–l4, g9m7l1–l2; теми dg9/cur-g9m7, dg11/count, dg11/prob; 87 об'єктів, 6 вузлів):
- `comb-enum` (g6m6l1) ← `mul-table` w 1; `comb-tree` (g6m6l2) ← `comb-enum` w 2; `prob-events` (g6m6l3) — без передумов; `prob-classic6` (g6m6l4) ← `frac-read` w 2, `prob-events` w 1, `frac-reduce` w 1.
- `count-rules` (g9m7l1) **same** `comb-tree`; `prob-classic` (g9m7l2) ← `frac-read` w 2, `count-rules` w 1, `frac-reduce` w 1, **same** `prob-classic6`.
- Відхилення від пропозиції автора: `prob-classic6` ← `frac-reduce` лишив w 1 (у pg6m6 немає `reduced` — нескорочений дріб приймається), додав `frac-read` w 2 (P = m/n — зміст дробу, g6m6l4 #2, #4, #8). **g9m7 ↔ g6m6 — лише `same`, не `pre`:** уроки g6m6 optional (D-048 п. 2), g9m7l1/l2 пояснюють правило добутку й P = m/n заново; `pre` на optional-урок дав би на G4 крок плану, якого в програмі немає.

**`tri` — трикутники 5, 7 кл.** (уроки ms0bl3, g7m2l2, g7m4l1–l3, l5–l9; теми dg7/cur-g7m4, dg8/tri-equal, dg8/tri-angles; 131 об'єкт, 9 вузлів):
- опори: `angle-adj-vert` (g7m2l2), `tri-angle-sum` (**teach ms0bl3 і g7m4l3** — сума кутів уперше в 5 кл., ms0bl3 #3; без цього g7m4l2 #3, #7 «(180 − ∠A) : 2» спирався б на пізніший урок l3 — V4), `tri-congr` (g7m4l1), `tri-isosc` (g7m4l2) ← `tri-angle-sum` w 2.
- нові уроки D-043: `ext-angle` (l5) ← `angle-adj-vert` w 2, `tri-angle-sum` w 2, `tri-isosc` w 1; `side-angle` (l6) ← `tri-angle-sum` w 1, `tri-isosc` w 1; `right-tri` (l7) ← `tri-angle-sum` w 2, `side-angle` w 1; `right-tri-eq` (l8) ← `tri-congr` w 2, `right-tri` w 2; `tri-ineq` (l9) ← `tri-isosc` w 1.
- Відхилено з пропозиції (ребра — лише за текстом уроку): `side-angle` ← `ext-angle` і `tri-ineq` ← `side-angle` — так доводить підручник Істера, але уроки l6 і l9 цього не використовують (l6 — модель «сторона й кут навпроти», l9 — перетин кіл); через це V9 показує 2 ребра матриці без пояснення (g7m4l6 → g7m4l5, g7m4l9 → g7m4l6) — свідомо, для верифікатора. Додано, чого не було в пропозиції: `ext-angle` ← `tri-isosc` w 1 (l5 #4, #8), `side-angle` ← `tri-isosc` w 1 (#4, #9).

Лінія «дроби» не змінена (нові ребра лише **від** нових вузлів до `frac-read`, `frac-reduce`, `mul-table`; їхні `st` і ребра ті самі).

**Перевірка:** `graph-report --line prob --strict`, `--line tri --strict`, `--line frac --strict` і `--strict` (весь граф) — 40 вузлів, помилок 0, дрейфу 0, V10б 0; `npm run check` — EXIT 0; знімки тестів (test-learn, test-hyp, test-graph-report, test-evidence) **не зсунулися** — нові вузли не зачіпають фікстур дробів.

**Для верифікатора лінії** (задача tasks/todo/verify-graph-prob-tri.md):
- V9 без пояснення: requires g6m6 → g6m2l3 (жоден екран g6m6 не зводить до спільного знаменника; g6m6l4 #1 порівнює 1/4 і 2/4 — однакові знаменники) — пропоную відхилити; матриця g9m7l1 → m1 (правило добутку дробів не потребує) — відхилити; g7m4l6 → g7m4l5, g7m4l9 → g7m4l6 — див. вище.
- Сторонні об'єкти типових вузлів: ms0bl3 #5 lab «Зроби трикутник рівнобедреним» і g7m4l3 #4 lab «кут 45°» потрапляють до `tri-angle-sum` (у парах по 1 об'єкту — нижче порогу окремого вузла, §2.4 п. 7).
- Boss g6m6l5, g7m4l4 — неоднозначні (у лінії не додано, лише звіт).

### Відкладено (до наступних ліній G5; дитині до G4 нічого не змінюють)
Порядок ліній — дизайн §5.3 (дроби → рівняння й нерівності 5–9 → функції → геометрія 7–11 → решта); кожна лінія — окремою задачею з верифікатором, сировина — блок пропозицій вище (виправлений).
- **g6m3l7** (кругові діаграми) — до лінії «відсотки й дані 5–6»: опори ms3l2 / g6m3l4 (відсоток) і g6m3l5 (коло) вузлів не мають.
- **7 кл., g7m6l5 `perp-dist`, g7m8l5 `circ-in-out`, g7m8l6 `inscribed-angle`** — до лінії «паралельні прямі й коло 7» (продовження `tri`): опори g7m6l1–l3, g7m8l1–l3 вузлів не мають. Звірити за текстом: `perp-dist` ← `angle-adj-vert`; `circ-in-out` ← `right-tri-eq` (як g7m4l8 #7 «точка на бісектрисі»); `inscribed-angle` ← `ext-angle` — лише якщо урок справді доводить через зовнішній кут.
- **7 кл. expr g7m3l6–l7, 8 кл. алгебра (g8m1l6–l7, g8m3l6, g8m5l6–l8), 9 кл. g9m3l6–l7, g9m5l5** — до лінії «рівняння й нерівності 5–9» (наступна за §5.3) і «вирази / функції»: опори (g7m1 лінійні рівняння, g7m3, g7m5, g8m1l1–l2, g8m3l1, g8m5l1–l4, g9m3l3) вузлів не мають; g8m1l6 ← g7m1 — урок уточнити.
- **8 кл. g8m4l5–l8 (sk trig уперше), g8m2l6–l7** — до лінії «геометрія 8» (подібність, Піфагор g8m4l1–l2 як опори; g8m2l6–l7 ← g7m8l6, g7m8l2 — через лінію кола 7).
- **9 кл. g9m4l5–l6, g9m6l6–l7** — до лінії «геометрія 9»; **опора g9m4l5 — g8m6l2** (S = ½ah), не g8m6l1 (виправлено в блоці вище; реєстр матриці — рядком MATRIX в inbox, бо матрицю зараз змінює автор пулів в іншому worktree).
- **9 кл. стереометрія g9m8** — до окремої лінії «стереометрія 9» після «геометрії 8–9»: опори Піфагор g8m4l2, ms4l2 (об'єм) вузлів не мають.

### P3 рев'ю refine-math-diag-g9-ister-required (виправлено)
- docs/design/skill-graph-math.md (§3, V4, рядок про нічиї): «g6m6 optional» → optional лише уроки g6m6l1–l4 у матриці (D-048 п. 2), не розділ; для V4 g6m6 — звичайний розділ.
- content/math/diag-g9.js, коментар (рядки 10–12): `for` впливає не лише на buildPlan, а й на тіньові передумови гіпотез (app/hyp.js `preIndex`: уроки pre-теми стають передумовами кожного уроку розділів `for`). Лише коментар — id, завдання, ключі, `rev` без змін.
- «Зміни v11» у docs/math-personalization-coverage.md — не чіпав (матрицю змінює інший worktree): рядок MATRIX в inbox.

## Верифікація лінії (verifier-graph-prob-tri, 2026-11-05)
reports/verify/graph-prob-tri.md: лінії `prob` і `tri` прийнято, вузли `verified`, +3 ребра w 1 і 1 `why` (див. звіт §4). Уточнення до нотаток куратора: «жоден екран g6m6 не зводить до спільного знаменника» — неточно, boss g6m6l5 #5 (3/10 = 6/20 > 5/20); `requires` g6m6 → g6m2l3 лишається. `lines.*.st` → verified — разом з tasks/todo/tests-hyp-g3-verified-lines.md.
