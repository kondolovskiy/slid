---
id: curate-math-matrix-v9
type: curate
subject: math
status: done
claimed_by: curator-matrix-v9
created: 2026-11-04
depends_on: [curate-math-matrix-v7, refine-math-diag-for-ister, write-math-pool-g9m3-ister, write-math-pool-g9m4-ister, write-math-pool-g9m5-ister, write-math-pool-g9m6-ister, write-math-pool-g9m8]
---
# Матриця персоналізації v9: уроки D-043 9 кл. з verified-пулами — pending → required

## Задача
Перевести з pending у required уроки 9 кл., у яких урок і пул verified: g9m3l6–l7 (pg9m3), g9m4l5–l6 (pg9m4), g9m5l5 (pg9m5), g9m6l6–l7 (pg9m6), g9m8l1–l11 (pg9m8, новий розділ; boss l12 поза матрицею). Формати (D-028), кількість, рівні — за фактичними пулами й рекомендаціями авторів і верифікаторів; g9m8l8 має лише 1 вправу рівня 1 — мінімуми рівнів за фактичним. Заповнити `preForSection` рядків 9 кл. за `for` dg9 (рядок MATRIX inbox 04.11). Тест рівня не змінювати — питання в нову задачу. Оновити .md («Зміни v9»), PERSONALIZATION_QA.md; знімок test-hyp — лише якщо зсунеться. Рев'ю — спільне з refine-math-diag-for-ister.

## Нотатки виконавця

**Змінено:**
1. `docs/math-personalization-coverage.json` → **2026-11-04.v9** (previous v8, status draft). Змінено 18 рядків, `version`/`previous`/`changes` і `sources.ist9a.method`, `sources.ist9g.method` (дописано «v9: …»). Решта 216 рядків, їхній порядок і `diagnostics` — без змін: генератор порівнює JSON до/після без цих полів і кидає помилку на будь-яку іншу зміну.
   - Усі 18: `curricularScope: required`, `poolState: existing-verified`, `exercises {6, 8, levels [3, 2, 1]}` (**g9m8l8 — [1, 2, 1]**: фактично 1/3/3, h01 — єдина вправа рівня 1, верифікатор прийняв; прецедент — g6m4l7 [2, 2, 1] у v6), `cur: []`, `sk` — без змін (у кожному пулі лише навичка рядка), `reason` — пул, вправи, рівні, формати, звіт верифікатора.
   - `preForSection` за правилом v8 (pre-теми dg9, чий `for` містить розділ, у порядку тесту): g9m3l6/l7 → quad, func; g9m4l5/l6 → roots, pyth, similar; g9m5l5 → linear, power; g9m6l6/l7 → similar, polygon; g9m8l1–l11 → `[]` (у dg9 немає теми з `for` g9m8). Тепер усі рядки 9 кл. відповідають правилу (перевірено скриптом).
   - Формати (джерело — таблиці «для матриці» в tasks/done/write-math-pool-g9m3-ister.md, -g9m4-, -g9m5-, -g9m6-ister.md, write-math-pool-g9m8.md і NOTE inbox 04.11; підтверджено звітами reports/verify/write-math-pool-g9m*-ister.md, write-math-pool-g9m8.md): g9m3l6 number, coordinates2; g9m3l7 number, list; g9m4l5 number, exactRoot; g9m4l6 number; g9m5l5 number; g9m6l6 number, exactRoot, list; g9m6l7 number, ratio, list; g9m8l1, l2, l4, l5, l6 number; g9m8l3 number, list; g9m8l7 number, exactRoot, expression; g9m8l8 number, exactRoot; g9m8l9 number, exactRoot; **g9m8l10 exactRoot** (number прибрано — у пулі його немає); g9m8l11 number, exactRoot, ratio. choice/multi, не подані автором для матриці, не вимагаються (як у v6/v7).
   - Фактичні пули: по 8 вправ 3/3/2, крім g9m4l6 (7; 3/2/2), g9m8l1 (7; 3/3/1), g9m8l4, g9m8l5 (8; 3/4/1), g9m8l8 (7; 1/3/3).
   - evidence доповнено сторінками вправ пулу (`srcPage` і нотатки авторів, звірені верифікаторами за рендером; PDF = друк.): напр. ist9a:123–127 → 123–130; ist9g:119–125 → 119–128 (g9m4l5); ist9g:214–215 → 214–217, 243 (g9m8l1). Повна таблиця було → стало — «Зміни v9» у .md. Куратор PDF не відкривав.
2. `docs/math-personalization-coverage.md`: шапка (v9, примітка ¹²), розділ **«Зміни v9»** (таблиця 18 рядків: пул, рівні, формати й evidence було → стало, preForSection; формати, рівні, джерела, діагностика, тести), «Обсяг» (9 кл. 8/8, 42/0/0, 252–336; разом 217 / 11 / 6; 49 required-пулів), 18 рядків реєстру 9 кл. (`required ¹²`; g9m8l8 «6–8 (1/2/1)»).
3. `docs/PERSONALIZATION_QA.md`: версія й лічильники (217 required / 49 пулів, 11 optional / 6 pending), «v9 — 9 кл.», примітка про мінімум рівнів нижче 3/2/1 (g6m4l7, g9m8l8).
4. `content/math/pool-g9-g9m4.js` — лише коментар шапки: застарілий рядок «Матриця … v2: усі три уроки required» → v9, п'ять уроків (рекомендація верифікатора, reports/verify/write-math-pool-g9m4-ister.md); «Усі задачі — з … Мерзляк» → «a/b/c — з …» (d/e — Істер). Вправи не змінено; `validate --pool pg9m4` — 0/0.
5. `tasks/todo/refine-math-diag-g9-ister-required.md` — нова задача-питання для dg9: cur-проб нових уроків немає; g9m8 без pre-теми (кандидат `pyth.for` + g9m8; ms4l2 — лише новим завданням); опори поза `for`: g9m3l6 ← g7m7l3, g9m3l7 ← g8m4l2, g9m4l5 ← g8m6l1.

**Не змінено:** dg9 (тест рівня); `tools/test-hyp.mjs` — знімок §10 не зсунувся (619/619): після оновлення знімка в refine-math-diag-for-ister верифікатор pg9m8 змінив лише тексти k07, h02, без рівнів і id. Пояснення (б) («sol0 ≥ 1 на рівні 2 — лише в уроках з < 3 вправами рівня 1») покриває g9m8l8: скрипт (scratchpad `curate-math-matrix-v9/hyp.mjs`) — sol0Keys рівня 2 = pg6m4:f03 (g6m4l7, рівня 1 — 2), pg9m8:h02, h03 (g9m8l8, рівня 1 — 1); уроків з < 3 вправами рівня 1 рівно два — g6m4l7 і g9m8l8. (а) «нечиста перевірка рівня 1 — лише в уроках з 6 вправами» — лише g8m2l6, g8m2l7 (g9m4l6, g9m8l1, g9m8l8 мають по 7). Датований коментар §10 (refine-math-diag-for-ister) уже називає g9m8l8.

**Перевірки.**
- `node tools/personalization-qa.mjs` — Матриця 2026-11-04.v9: 52 розділи, 234 уроки, **217 required, 49 required-пулів**, 50 пулів, 1754 вправи; 0 ПОМИЛКА / БРАКУЄ / ПОПЕРЕДЖЕННЯ; Optional 11, Pending 6 (g4m1l4, ms0bl3, ms3l3, g11m2l1, g11m2l2, g11m5l3).
- `--strict`, `--grade 9 --strict`, `--diag dg9 --strict` — rc 0.
- Мутанти (in-memory `audit`, scratchpad `curate-math-matrix-v9/mut.mjs`): g9m8l10 + number → «немає формату number»; g9m4l6 + exactRoot → «немає формату exactRoot»; g9m3l6 + list → «немає формату list»; g9m8l8 min 8 → «7 вправ, потрібно 8–8»; g9m8l1 sk + meas → «sk … не тренує урок» і «немає навички meas».
- `npm run check` — rc 0 (test-hyp 619, test-validate 1138, test-make-tasks 48, test-graph-report 67, test-diff-answers 41 ok / 0 ✗; validate 0 помилок; граф 0 помилок, 0 дрейфу). Build з check змінив sw.js і reports/validate.json (разом зі змістом w9s1 паралельного автора) — не комічу, build — оркестратору.
- Генератори: scratchpad `curate-math-matrix-v9/v9.mjs` (JSON, з guard), `md9.mjs` (md, кожна заміна — рівно одне входження), `facts.mjs` (факти пулів).

**Рецензенту (D-026, спільне рев'ю з refine-math-diag-for-ister, скіл `engineering-review`):**
- JSON-diff v8 → v9: `git diff <коміт v8>..<цей коміт> -- docs/math-personalization-coverage.json` — 18 рядків 9 кл., `version/previous/changes`, `method` ist9a/ist9g.
- Формати проти пулів: `node tools/personalization-qa.mjs --grade 9 --strict`; пули content/math/pool-g9-g9m3.js … -g9m6.js, pool-g9-g9m8.js.
- Сумнівні рішення: (а) g9m8l8 `levels [1, 2, 1]` — QA перевіряє лише наявність рівнів, поле документує норму (читає make-tasks); (б) g9m8l1 лише `number` (2 вправи з 7; решта — choice), як у пропозиції автора; (в) формати з однією вправою: g9m6l6 list, g9m6l7 list, g9m8l9 number, g9m8l11 ratio і number — крихко при правці пулу; (г) g9m3l6 coordinates2 — обхід «розв'язок зі знаком x» до формату «множина пар»; (ґ) evidence не звірено куратором з PDF; (д) правка коментаря чужого файлу pool-g9-g9m4.js — за прямою рекомендацією верифікатора.
