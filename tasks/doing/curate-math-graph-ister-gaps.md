---
claimed_from: todo
claimed_at: 2026-11-05T09:17:13.074Z
id: curate-math-graph-ister-gaps
type: graph
subject: math
status: todo
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
- **9 кл.** (writer-write-math-g9-gaps): g9m3l6 (системи 2-го степеня) ← g9m3l3, g7m7l3, g9m2l2, g8m5l2; g9m3l7 (задачі системами) ← g9m3l6, g8m4l2; g9m4l5 (S = ½ab sin γ) ← g9m4l1, g8m6l1; g9m4l6 (Герон, R, r) ← g9m4l5; g9m5l5 (нескінченна геом. прогресія) ← g9m5l3; g9m6l6 (дуга, сектор) ← g9m6l2, g9m6l1; g9m6l7 (площі подібних) ← g9m6l4, g9m6l2. g9m4l1 → тепер також ← g8m4l6–l7 (requires g9m4 уже містить g8m4l7).
- **9 кл., стереометрія g9m8:** g9m8l1 (площина, способи задання) ← ms4l2; g9m8l2 (мимобіжні, перпендикулярні прямі, Піфагор у просторі) ← g9m8l1, g8m4l2, g7m6l1; g9m8l3 (перпендикуляр, похила, проєкція, відстань) ← g9m8l2, g8m4l2; g9m8l4 (паралельні й перпендикулярні площини) ← g9m8l3; sk geom: `prism-surface` (g9m8l5; pre ms4l2 w2, Піфагор g8m4l2 w1), `prism-volume` (g9m8l6; pre ms4l2 w2, prism-surface w1), `pyramid-surface` (g9m8l7; pre prism-surface w1, Піфагор w2), `pyramid-volume` (g9m8l8; pre prism-volume w2, pyramid-surface w1); g9m8l9 (циліндр) ← g9m8l6, g9m6l2; g9m8l10 (конус: l² = h² + r²) ← g9m8l8, g9m8l9, g8m4l2; g9m8l11 (куля) ← g9m6l2; g9m8l12 — boss.

## Готово, коли
- Рішення куратора графа: які лінії відкривати й коли (або «відкласти до G4») — у нотатках; вузли/ребра, якщо вносяться, — з `why` за текстом уроку, `node tools/graph-report.mjs --strict` зелений, незалежний верифікатор лінії, рев'ю D-026 для змін інструментів.

## Додано 2026-11-05, сесія 3 (куратор пам'яті, inbox MATRIX eng-math-dg9 і P3 рев'ю refine-math-diag-g9-ister-required)
- **g9m4l5 «Площа через синус»: опора — g8m6l2 «Площі» ($S = 1/2 ah$), а не g8m6l1** (від g8m6l1 лише ідея «діагональ ділить паралелограм на трикутники»). Виправити в блоці вище (`g9m4l5 ← g9m4l1, g8m6l1` → g8m6l2 або обидва) і в реєстрі матриці docs/math-personalization-coverage.md (рядок g9m4 / `g9m4l5`, стовпець передумов) + json — наступна версія матриці (v12), «Зміни v12». Через це `polygon` → g9m4 у dg9 свідомо не додано (рішення оркестратора 05.11).
- P3 (рев'ю reports/review/refine-math-diag-g9-ister-required.md): docs/design/skill-graph-math.md:181 «g6m6 optional» — стосується лише уроків; коментар content/math/diag-g9.js:10 і «Зміни v11» — уточнити, що `for` впливає й на тіньові передумови (app/hyp.js ≈ 348). Правка коментаря — без зміни id тесту.
