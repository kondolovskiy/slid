---
id: curate-math-matrix-v7
type: curate
subject: math
status: done
claimed_by: curator-matrix-v7
created: 2026-11-04
depends_on: [curate-math-matrix-v6, write-math-pool-g7m3-ister, write-math-pool-g7m4-ister, write-math-pool-g7m6-ister, write-math-pool-g7m8-ister, write-math-pool-g8m1-ister, write-math-pool-g8m2-ister, write-math-pool-g8m3-ister, write-math-pool-g8m4-ister, write-math-pool-g8m5-ister]
---
# Матриця персоналізації v7: уроки D-043 7–8 кл. з verified-пулами — pending → required

## Задача
Перевести з pending у required уроки, у яких урок і доповнений пул verified: g7m3l6–l7 (pg7m3), g7m4l5–l9 (pg7m4), g7m6l5 (pg7m6), g7m8l5–l6 (pg7m8), g8m1l6–l7 (pg8m1), g8m2l6–l7 (pg8m2), g8m3l6 (pg8m3), g8m4l5–l8 (pg8m4), g8m5l6–l8 (pg8m5). Формати (D-028), кількість і рівні — за фактичними пулами й рекомендаціями авторів і верифікаторів; сторінки — за FACT-рядками; рішення v6 (poolState, ключі джерел) — для узгодженості. Тести рівня не змінювати — питання в задачу. Знімок test-hyp не оновлювати (паралельно змінюються фінальні уроки math). Рев'ю — спільне для v6 + v7.

## Нотатки виконавця

**Змінено** (усі три документи й задачу dg7/dg8 захопили WIP-знімки оркестратора 591e3d5 / 5a1b47b / 99cd24f; цей коміт — лише ця задача й рядок inbox):
1. `docs/math-personalization-coverage.json` → **2026-11-04.v7** (previous v6, status draft). Змінено 22 рядки; решта 212 рядків, їхній порядок і `diagnostics` — без змін (генератор перевіряє JSON рядків до/після й кидає помилку на будь-яку іншу зміну).
   - Усі 22: `curricularScope: required`, `poolState: existing-verified` (як у v6), `exercises {6, 8, levels [3, 2, 1]}`, `preForSection` — як у `<розділ>l1` (g7m3 → sign-add…terms; g7m4, g7m6 → angles; g7m8 → lines, circle; g8m1 → power…function; g8m2 → parallel, tri-equal, tri-angles; g8m3 → power, function; g8m4 → tri-equal, tri-angles; g8m5 → poly…linear), `cur: []`, `sk` — без змін (у кожному пулі лише навичка рядка); `reason` — пул, серія, кількість/рівні, формати, посилання на звіт верифікатора.
   - Фактичні пули: усі по 8 вправ 3/3/2, крім g8m4l7 (8; 3/4/1) і g8m2l6/l7 (6; 3/2/1).
   - Формати: g7m3l6 number, expression, multi; g7m3l7 number, expression; g7m4l5 number, list; **g7m4l6 comparison, choice** (number прибрано); g7m4l7 number; **g7m4l8 choice, multi** (number прибрано); g7m4l9 number, multi; g7m6l5 number, choice; g7m8l5/l6 number, list; g8m1l6 number; g8m1l7 number, comparison; g8m2l6 number, choice, list, expression; g8m2l7 number, choice, expression; g8m3l6 number, multi, list, comparison, choice; g8m4l5/l6 number; g8m4l7/l8 number, exactRoot; **g8m5l6 list, expression, multi** (choice прибрано); g8m5l7/l8 number, list. Джерело — пропозиції авторів у tasks/done/write-math-pool-*-ister.md і inbox 04.11 (MATRIX/IDEA), підтверджені верифікаторами (g7m3, g7m6, g7m8, g8m4 — явно; решта — «без зауважень»). Формати в дужках у пропозиції автора (g7m4l7 list, comparison; g7m4l9 list, choice; g7m8l5 choice) матриця не вимагає — як choice у g6m4l7/l8 у v6.
   - evidence: межі доповнено сторінками вправ пулу (FACT 04.11 і `srcPage` вправ), напр. ist7a:48–51 → 48–53; ist7g:43–45 → 43–49, 69; ist8a:60–64 → 60–67; ist8g:141–143 → 141–146. Повна таблиця було → стало — «Зміни v7» у .md.
   - mer7g (pg7m4 e03–e08, п. 17, с. 161–162) → ключ **g7** (той самий URL Мерзляк, Якір, Геометрія 7, 2024; друк. = PDF) — як mer6 → m6b у v6.
   - `sources`: нових немає; `method` ist7a/ist7g/ist8a/ist8g (v7: межі з нотаток і звітів, PDF = друк. / друк. + 1, куратор PDF не відкривав) і g7 (п. 17 у pg7m4) доповнено.
2. `docs/math-personalization-coverage.md`: шапка (v7, примітка ¹⁰), розділ **«Зміни v7»** (таблиця 22 рядків: пул, формати було → стало, evidence було → стало; формати, рівні, джерела, діагностика, тести), «Обсяг» (7 кл. 36/0/0, 216–288; 8 кл. 33/0/0, 198–264; разом 199 / 11 / 24), 22 рядки реєстрів 7–8 кл. (`required ¹⁰`).
3. `docs/PERSONALIZATION_QA.md`: версія й лічильники (199 required / 48 пулів, 11 optional / 24 pending), «v6 — 5–6 кл., v7 — 7–8 кл.».
4. `tasks/todo/refine-math-diag-g7-g8-ister-required.md` — нова задача-питання для dg7/dg8 (окремо від g5–g6, щоб не змішувати тести).

**Діагностика: тести рівня не змінено.** `known` — лише з явних `lessons` cur-тем, тож хибного «вже знаєш» немає. Прогалини (у задачі п. 4): cur-проб немає (зокрема нова trig у g8m4l6–l8); g8m1l6 ← g7m1l2, а `linear` має `for` лише g8m5; g8m2l6/l7 ← g7m8l5, у dg8 немає pre-теми про коло.

**Не змінено (за задачею):** знімок tools/test-hyp.mjs §0 — оновить оркестратор після фінальних уроків math.

**Перевірки.**
- `node tools/personalization-qa.mjs` — Матриця 2026-11-04.v7: 52 розділи, 234 уроки, **199 required, 48 required-пулів**, 49 пулів, 1613 вправ; 0 помилок, 0 БРАКУЄ, 0 попереджень; Optional 11, Pending 24.
- `--strict` — rc 0; `--grade 7 --strict`, `--grade 8 --strict`, `--diag dg7 --strict`, `--diag dg8 --strict` — rc 0.
- Мутанти (in-memory `audit`, scratchpad `curate-math-matrix-v7/mut.mjs`): g7m4l6 + number → «немає формату number»; g8m5l6 + choice → «немає формату choice»; g8m2l6 min 7 → «6 вправ, потрібно 7–8»; g8m4l6 sk + geom → «sk … не тренує урок» і «немає навички geom»; g7m3l7 + multi → «немає формату multi».
- test-learn 2395 ✓, test-personalization-qa 109 ✓, test-validate 1138 ✓, test-make-tasks 48 ✓, test-graph-report 67 ✓. build і `npm run check` не запускав (за задачею; test-hyp знімок свідомо не оновлено).
- Генератори: scratchpad `curate-math-matrix-v7/v7.mjs` (JSON), `md7.mjs` (md), `facts.mjs` (факти пулів: кількість, рівні, формати, sk).

**Рецензенту (D-026, спільне рев'ю v6 + v7, скіл `engineering-review`, звіт reports/review/curate-math-matrix-v6.md або -v7.md):**
- JSON-diff v6 → v7: `git diff 7389479 591e3d5 -- docs/math-personalization-coverage.json` охоплює v6 + v7 разом; лише v7 — порівняти рядки 7–8 кл. (22 уроки вище) і `sources`.
- Формати проти пулів: `node tools/personalization-qa.mjs --grade 7 --strict`, `--grade 8 --strict`; пули content/math/pool-g7-g7m3.js, -g7m4, -g7m6, -g7m8, pool-g8-g8m1.js … -g8m5.
- Сумнівні рішення: (а) формати «в дужках» не вимагаються (g7m4l7, g7m4l9, g7m8l5); (б) g8m3l6 — усі п'ять форматів, частина з однією вправою (крихко при правці пулу); (в) mer7g → g7; (г) evidence не звірено куратором з PDF (лише нотатки й рендери авторів/верифікаторів).
