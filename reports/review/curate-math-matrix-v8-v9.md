# Рев'ю: refine-math-diag-for-ister (матриця v8) і curate-math-matrix-v9

Рецензент: engineering-reviewer (D-026, свіжий контекст, реалізацію не писав). Дата: 2026-11-04.

**Перевірений diff:** `6d142f5..1dfd002` (коміти e97e922, ac06d83, 9dc243c, a53bd59, 1dfd002) по `content/math/diag-g*.js`, `content/math/pool-g9-g9m4.js`,
`docs/math-personalization-coverage.{json,md}`, `docs/PERSONALIZATION_QA.md`, `docs/design/diag-hypothesis-math.md`, `tools/test-hyp.mjs`.
Пізніші коміти до 8cb1d33 цих файлів не зачіпають (лише world w9s1).

## Вердикт
- **refine-math-diag-for-ister — прийнято.**
- **curate-math-matrix-v9 — прийнято.**

Блокувальних знахідок (P1) немає. P2 немає. P3 — нижче.

## Що перевірено і як

### 1. Тести рівня: змінено лише `for`
Скрипт (scratchpad `review-v8v9/cmp.mjs`) завантажує dg5–dg9 з `6d142f5` і HEAD і порівнює весь об'єкт тесту без поля `topics[].for`:
dg5–dg9 — ідентичні (items, індекси, ключі, `rev`, `lessons`, `kind`, id). Змінено рівно 4 `for`:
dg5 `place`, `cmp` +ms0b; dg6 `geom` +ms4, +g6m4; dg8 `linear` +g8m1. dg7, dg9 — без змін.
Отже `diagRev` (найбільший `rev` завдань, app/learn.js:131–132), `resumeDiag` і збережені `S.diagRun`/`S.diag` не зачеплені.
`for` у рушії читають лише `buildPlan` (app/learn.js:111, 114 — терміновість кроку плану; план зберігається на момент завершення тесту
й не перераховується) і тіньовий app/hyp.js:348 (`diagPre`). Збережений прогрес дітей не змінюється.

### 2. `for` веде на опори нових уроків
Усі додані розділи — свого класу тесту (plan.js: ms0b — 5, ms4 і g6m4 — 6, g8m1 — 8), порядок — за plan.js.
Змістово: ms0bl6 (координатний промінь) ← розряди/порівняння; ms4l5 (площа поверхні) ← ms4l1 у `geom.lessons`; g8m1l6 (раціональні рівняння) ← g7m1l2.
g6m4l7/l8 ← `geom` — слабка опора (справжня — кути ms0bl2), автор це чесно зазначив (див. P3-3).
Матриця: `diagnostics[].topics[].for` і `forEvidence` чотирьох тем збігаються з файлами тестів (forEvidence — уроки відповідних розділів).

### 3. `preForSection` — правило перевірено скриптом
`review-v8v9/rule.mjs`: для кожного рядка 5–9 кл. очікуване = pre-теми тесту свого класу, чий `for` містить розділ, у порядку тесту.
- HEAD: 213 рядків — 0 розбіжностей.
- База `6d142f5`: 20 розбіжностей — рівно ті, що заявлено виправленими: ms3l3/ms4l1 зайвий `box`; g6m2l1–l5 бракує `rem`, `g6-div`;
  g6m3 ×6 зайвий `pct`; 7 рядків 9 кл. з `[]`. Інших змін preForSection немає.
- Рядки g9m8 — `[]` коректно (у dg9 немає pre-теми з `for` g9m8; винесено в tasks/todo/refine-math-diag-g9-ister-required.md).

### 4. Рядки v9 проти фактичних пулів (усі 18)
`review-v8v9/facts.mjs` рахує з pool-g9-g9m{3,4,5,6,8}.js кількість вправ, рівні, формати (answerKind) і sk для кожного уроку:
- усі 5 пулів і 37 відповідних уроків (g9-g9m3…g9m8) — `verified`;
- кількості й рівні збігаються з таблицею «Зміни v9» (8 × 3/3/2; g9m4l6 7 3/2/2; g9m8l1 7 3/3/1; g9m8l4, l5 8 3/4/1; g9m8l8 7 1/3/3);
- кожен формат рядка присутній у пулі (g9m8l10 — лише exactRoot, number справді немає); sk рядків = єдина sk вправ;
- `curricularScope: required`, `poolState: existing-verified`, `cur: []`;
- між v8 і v9 змінено лише ці 18 рядків (порядок рядків той самий, `diagnostics` ідентичні);
- personalization-qa: 217 required / 49 required-пулів / 11 optional / 6 pending — як у .md і PERSONALIZATION_QA.md.
Коментар шапки pool-g9-g9m4.js — лише коментар; вправи не змінено.

### 5. Знімок test-hyp §10
Нові числа зелені; пояснення в коментарі (tools/test-hyp.mjs:508–513) і в docs/design/diag-hypothesis-math.md узгоджені.
Мутант: dg6 `geom.for` повернуто до `["g6m3","g6m5"]` → test-hyp падає рівно на одній перевірці
«§2.1 передумови: отримано [181,181,22,209,209], очікувалось [181,184,22,209,209]» — підтверджує твердження автора «без цієї зміни — 181».
Інваріанти (а), (б), «D≤ рівня 1 — 0» не послаблено (diff змінює лише числа знімка).

### 6. Мутанти (копія через git archive у scratchpad, не в спільному дереві)
| Мутант | Ловить |
|---|---|
| dg6 `geom.for` без ms4/g6m4 | test-hyp ✗ (181≠184) |
| dg8 `linear.for` без g8m1 | personalization-qa `--diag dg8 --strict` rc 1 «dg8/linear: for не збігається з матрицею»; test-hyp — ні |
| dg5 `place.for` без ms0b | personalization-qa `--diag dg5 --strict` rc 1; test-hyp — ні |
| матриця dg6 `geom.for` старий | personalization-qa `--diag dg6 --strict` rc 1 |
| g9m5l5 + формат exactRoot | `--grade 9 --strict` rc 1 «немає формату exactRoot» |
| pg9m8 status draft | `--grade 9 --strict` rc 1 «pg9m8: ще не verified» |
| g9m8l8 levels [3,2,1] (у пулі 1 вправа рівня 1) | **не ловить** (rc 0) — P3-2 |
| g9m3l7 preForSection `["quad"]` | **не ловить** (rc 0) — P3-1 |

### 7. Прогони
- Живе дерево (лише читання): `node tools/personalization-qa.mjs` і `--strict`, `--grade 9 --strict`, `--diag dg5|dg6|dg7|dg8|dg9 --strict` — усі rc 0, 0 рядків ПОМИЛКА/БРАКУЄ/НЕ ПІДТРИМАНО/ПОПЕРЕДЖЕННЯ.
- `npm run check` — **у копії HEAD 1dfd002** (scratchpad `review-v8v9/head`, git archive + `git init` для test-diff-answers), бо в спільному дереві
  check запускає build (заборонено оркестратором): rc 0; test-learn 2395 ✓, test-hyp 619/619, test-validate 1138, test-graph-report 67,
  test-make-tasks 48, test-diff-answers 41/0; validate 0 помилок; граф math 0 помилок, 0 дрейфу.
  (Без `.git` test-diff-answers дає 9 ✗ — артефакт копії, не регресія.)

## Знахідки

**P3-1. `preForSection` і `forEvidence` не перевіряє жоден інструмент.** `grep preForSection tools/` — лише personalization-qa/test без перевірки правила;
мутант g9m3l7 `preForSection: ["quad"]` проходить `--strict`. Саме так з v4 жила неузгодженість g6m3 `pct` / g6m2 `rem, g6-div`, виправлена тут.
Пропозиція: у personalization-qa перевірка «preForSection = pre-теми тесту класу, чий for містить розділ, у порядку тесту» і «forEvidence.lesson ∈ розділ».

**P3-2. Мінімум рівнів `exercises.levels` не перевіряється.** Мутант g9m8l8 `levels [3,2,1]` при 1 вправі рівня 1 — rc 0. Поле `[1,2,1]` лише документує
норму (автор це зазначив). Або перевіряти в QA, або явно назвати поле довідковим у docs/PERSONALIZATION_QA.md.

**P3-3. `geom.for` + g6m4 — грубо на рівні розділу.** Опора потрібна лише g6m4l7/l8, але `for` піднімає терміновість прогалини `geom` перед усім
розділом «Раціональні числа» (buildPlan, app/learn.js:111) і додає ms0bl4, ms4l1 як діагностичні передумови всім урокам g6m4 у тіньовому hyp.js:348.
Ефект малий (g6m3 і так раніше), справжня опора (кути ms0bl2) — лише новим завданням; варто згадати в задачі на новий id dg6, коли вона буде.

**P3-4. Формати з однією вправою** (g9m6l6 list, g9m6l7 list, g9m8l9 number, g9m8l11 ratio і number) — правка пулу зламає strict; автор позначив.

**P3-5. `for` файлу тесту ↔ матриця ловить лише `personalization-qa --diag`, якого немає в `npm run check`** (там лише test-personalization-qa).
test-hyp ловить не всі зміни `for` (мутанти dg5/dg8 його проходять). Доречно додати `personalization-qa --strict` у check або CI.

## Не перевірено
- evidence і сторінки ist9a/ist9g проти PDF (куратор теж не відкривав; спираюся на звіти верифікаторів пулів).
- Браузерні тести (playtest, test-answer-ui, test-ui-ister) — зміна не торкається рушія чи UI.
- `npm run check` у живому дереві (лише в копії HEAD — через заборону build).
- Педагогічна якість самих пулів 9 кл. — предмет content-verify, не цього рев'ю.
