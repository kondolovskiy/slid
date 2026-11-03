---
id: curate-math-ister-gaps-matrix
type: curate
subject: math
status: review
claimed_by: curator-matrix-ister-gaps
created: 2026-11-03
depends_on: [write-math-g5-coord-ray-motion, write-math-g6-perp-parallel-graphs, write-math-g6-probability, write-math-g6m3-circle-diagrams, write-math-g7-algebra-gaps, write-math-g7-geometry-gaps, write-math-g8-algebra-gaps, write-math-g8-trig-acute, write-math-g9-gaps, write-math-g9m8-lines-planes, write-math-g9m8-prisms-pyramids, write-math-g9m8-solids-revolution]
---
# Матриця персоналізації v5: нові уроки D-043 (Істер) — pending; тести, що рахували живий зміст

## Задача

Пакет нових draft-уроків математики за Істером (D-043) — 52 тематичні уроки й 2 boss — був поза матрицею: `personalization-qa` 53 помилки (52 «Урок поза матрицею» + «Кількість розділів не збігається»), test-learn 6 падінь, test-hyp 1 падіння, `npm run check` червоний. Потрібно: рядки матриці, версія, задачі на пули, тести.

## Нотатки виконавця

**Що змінено (коміти f1e085a, ce2fd98, 0e73c7a — WIP-знімки оркестратора посеред роботи; фінальний — коміт цієї задачі).**

1. `docs/math-personalization-coverage.json` → **2026-11-03.v5** (previous v4, status draft). 52 нові рядки, усі `pending`, `poolState: "deferred"`, `exercises {0, 0, []}`, `diagnostic {preForSection: [], cur: []}` — як чинні pending (g4m1l4, ms3l3, g11m2l1). Причина: «Новий урок D-043 (за Істером), draft; пул — задача write-math-pool-…; перехід у required — після verified уроку й пулу». Чинні 182 рядки не змінено ні змістом, ні порядком (перевірено скриптом: відфільтровані старі рядки v5 === рядки v4). Нові рядки вставлено після найближчого попередника в порядку уроків розділу; g6m6 і g9m8 — нові розділи (50 → 52, тож перевірка кількості розділів знову зелена). Додано 10 джерел (`mnp56`, `ist5`, `ist6a/b`, `ist7a/g`, `ist8a/g`, `ist9a/g`; URL — reports/math-ister-map.md §1).
   - `sk` — з екранів уроку (D-029; перевірено в генераторі: sk ∈ sk екранів і оголошена). Дві навички: ms0bl6 cmp 3 / meas 3 → cmp; ms4l5 meas 7 / geom 2 → meas (масив — лише коли пул має обидві).
   - `formats` — попередні `number` (g8m5l6 — `choice`, бо немає числових екранів). Для pending strict форматів не вимагає; автор пулу визначає справжні формати (D-028).
   - `evidence` — сторінки з нотаток авторів (tasks/review/write-math-*); PDF куратор повторно **не відкривав** — це зазначено в `sources[*].method` і в «Зміни v5».
   - `prerequisites` — з IDEA GRAPH (inbox 2026-11-03); для уроків без рядка — сусідні уроки розділу. Лише звіт V9 graph-report.
   - **Boss** (g6m6l5, g9m8l12) — поза матрицею, як усі boss (`audit` бере лише `!l.boss`).
2. `docs/math-personalization-coverage.md`: шапка (v5, 51 boss / 234 уроки / 52 розділи), таблиця «Обсяг» (pending за класами; розділи 5 і 6 кл. були застарілі ще з v4 — виправлено й позначено), розділ «Зміни v5» (примітка ⁸), 52 рядки в реєстрах 5–9 кл., питання до Віктора (g6m6 — «додаткові теми» МНП 5–6: required чи optional).
3. `docs/PERSONALIZATION_QA.md` — версія й лічильники; одне речення: новий урок без пулу — pending (у матриці, але не в знаменнику, мінімумі й strict).
4. `tools/test-hyp.mjs` §0 — снапшот екранів 1306/565/52/1288/915/30/16 → 1620/695/74/1599/1142/54/30 з коментарем (пакет D-043; пули й тести рівня не змінились, решта рядків §0–§2.3 — без змін). `docs/design/diag-hypothesis-math.md` — абзац «Оновлення 2026-11-03» з тими самими числами (тест «відтворює цифри документа»).
5. `tools/test-learn.mjs` (≈ 1128–1150), блок «пули 6 кл.: сталі id»:
   - літера вправи рахується за **історичним списком** тематичних уроків редакції 2026-10-13 (`HIST`, pg6m1–5), а не за поточним індексом у розділі (вставка g6m3l7, g6m4l7–l8 перед старими зсувала літери → хибне падіння «сталі id і уроки збережено»). Список звірено з відповідністю літера → урок у пулах (a:l1 … e:l5) і з git 2e380a0 (найстаріша ревізія в клоні; boss — l5/l6).
   - якорі: усі pg6m1–5 є (перевірка не порожня); історичні уроки є в розділі.
   - 6–8 вправ: історичні (required) уроки — **строго** 6–8 як і було; новий урок — 0 (пулу ще немає, pending) або 6–8. Перевірку для required не послаблено.
   - «нові вправи — лише нові id»: порівняння з `ADDED` — лише для історичних уроків; вправи нових уроків (майбутні write-math-pool-g6m3/g6m4-ister) не можуть брати жодного id старої сітки (зокрема вилученого) чи з `ADDED` — нова перевірка.
6. 20 задач `tasks/todo/write-math-pool-<розділ>-ister.md` (доповнення наявного пулу: ms0, ms0b, ms4, g6m3, g6m4, g7m3, g7m4, g7m6, g7m8, g8m1–g8m5, g9m3–g9m6) і `write-math-pool-g6m6.md`, `write-math-pool-g9m8.md` (нові пули). `make-tasks --write-pool` не підходить: створює задачі лише на required-уроки, а розділ із наявним пулом пропускає (dry-run v5: 0 задач; g6m6, g9m8 — «відкладено»), тож задачі написано скриптом за зразком write-math-pool-g11m2.md (з посиланнями на джерела, вільні серії id, правило test-learn для pg6m3/pg6m4).

**Як контракт трактує 6–8 для pending.** `personalization-qa` перевіряє кількість/рівні/формати/навички пулу лише для `required` (рядок `rows.filter(r => r.curricularScope === 'required')`); pending/optional — лише інвентар і sk (попередження). test-learn у блоці pg6m1–5 тепер так само: required (історичні) — строго, pending (нові, без вправ) — 0 дозволено, а щойно автор пулу додасть вправи — знову 6–8.

**Мутанти (копія дерева в scratchpad, `node tools/test-learn.mjs`).**
| Мутант | Результат |
|---|---|
| M1: pg6m4 e01 перенесено в новий урок g6m4l7 | ✗ «сталі id і уроки збережено» + 6–8 для l7 |
| M2: e02 → e10 | ✗ «сталі id» + «нові вправи — лише нові id» |
| M3: e01–e04 → g6m4l4 (l5 = 4, l4 = 12) | ✗ «сталі id» + 6–8 для l4 і l5 |
| M4: 3 вправи e01–e03 → новий g6m4l8 | ✗ «сталі id» + 6–8 для l8 (3) і l5 (5) |
| M5: HIST pg6m4 за поточним індексом (як до виправлення) | ✗ «сталі id» + 6–8 для l7 |
| N0: нова f01 у g6m4l7 (легітимно, але 1 вправа) | ✗ лише 6–8 для l7 |
| N1: вилучений e05 знову, у новому уроці | ✗ «не на старих id» + «вилучені id» |
| N2: e09 (з ADDED) у новому уроці | ✗ «не на старих id» |
| N3: нова e10 в історичному уроці | ✗ «нові вправи — лише нові id» + 6–8 |

**Перевірки.**
- `node tools/personalization-qa.mjs` — Матриця 2026-11-03.v5: 52 розділи, 234 уроки, 169 required, 48 required-пулів; 0 помилок, 0 попереджень; pending 58.
- `npm run check` — rc 0 (test-learn 2384 ✓, test-hyp 616 ✓, Personalization QA 108 ✓, test-make-tasks 48 ✓, test-diff-answers 40 ok / 0 ✗, validate, graph-report, stats, fig-audit без помилок).
- `node tools/make-tasks.mjs --write-pool --dry-run` — 0 нових; відкладено g6m6, g9m8, g11m2, g11m6.
- Браузерні тести не запускав (паралельно playtest qa-runner; app/ не змінено).

**Відомі обмеження / для рецензента.**
- Сторінки `evidence` — зі слів авторів; не звірені куратором з PDF.
- `formats` нових рядків — заглушки до пулу; при переході в required їх треба звірити з verified-пулом.
- Порядок рядків у JSON для нових розділів: g6m6 стоїть після ms4 (як у змісті), перед g6m4 — бо матриця й зміст мають різний порядок розділів 6 кл. після v4; порядок рядків на перевірки не впливає.
- Генератори (не в репозиторії): scratchpad `curate-math-ister-gaps-matrix/gen.mjs`, `tasks.mjs`.

**Рецензенту (D-026):** diff тестів (`git diff 3c17aca -- tools/test-learn.mjs tools/test-hyp.mjs`), JSON-diff матриці (старі рядки незмінні), задачі tasks/todo/write-math-pool-*-ister.md, g6m6, g9m8. Скіл `engineering-review`; звіт — reports/review/curate-math-ister-gaps-matrix.md.
