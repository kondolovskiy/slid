---
id: curate-math-matrix-v6
type: curate
subject: math
status: review
claimed_by: curator-matrix-v6
created: 2026-11-04
depends_on: [write-math-pool-ms0-ister, write-math-pool-ms0b-ister, write-math-pool-ms4-ister, write-math-pool-g6m3-ister, write-math-pool-g6m4-ister, write-math-pool-g6m6]
---
# Матриця персоналізації v6: уроки D-043 з verified-пулами — pending → required / optional

## Задача
Перевести уроки, у яких урок і доповнений пул verified, зі стану pending у робочий: ms0l7, ms0l8 (pms0), ms0bl6 (pms0b), ms4l5 (pms4), g6m3l7 (pg6m3), g6m4l7–l9 (pg6m4) — **required**; g6m6l1–l4 (pg6m6) — **optional** (рішення людини 04.11, inbox DECISION п. 2). Формати — D-028 з нотаток задач і звітів верифікаторів; кількість, рівні, сторінки — за фактичними пулами; виправити неповні межі сторінок (FACT 04.11). Оцінити, чи потрібні зміни dg5/dg6 (не змінювати — записати). P3: коментар test-learn «п'ять проб» → «чотири».

## Нотатки виконавця

**Змінено** (частину вже захопили WIP-знімки оркестратора a56564a/f07b379 — JSON і test-learn; фінальний — коміт цієї задачі):
1. `docs/math-personalization-coverage.json` → **2026-11-04.v6** (previous v5, status draft). 12 рядків; решта 222 рядків, їхній порядок і `diagnostics` — без змін (перевірено скриптом-генератором: порівняння JSON рядків до/після).
   - 8 required: `curricularScope: required`, `poolState: existing-verified`, `exercises {6, 8, levels}`, `preForSection` — як у першого чинного уроку розділу (ms0 → place…ord; ms0b → perim, units; ms4 → []; g6m3 → ord…geom; g6m4 → dec), `cur: []`; `reason` — опора на звіт верифікатора.
   - 4 optional (g6m6l1–l4): формати й `exercises {6, 8}` — довідкові (QA для optional їх не перевіряє), `preForSection: []`.
   - Формати: ms0l7, ms0l8, ms4l5, g6m3l7 — number; ms0bl6 — number, list; g6m4l7 — multi, number; g6m4l8 — multi, list (number прибрано); g6m4l9 — number, list; g6m6l1/l2/l4 — number; g6m6l3 — choice (number прибрано). Збігається з рекомендаціями верифікаторів.
   - `levels` (мінімум за рівнями): 3/2/1, крім **g6m4l7 — 2/2/1** (у пулі 2/3/2).
   - sk: ms0bl6 → масив `["cmp", "meas"]` (у пулі обидві: cmp 5, meas 3); ms4l5 лишається meas (у пулі лише meas).
   - evidence (було → стало): ms0l7 ist5:76–79 → 76–84; ms0l8 84–86 → 84–89; ms0bl6 104–107 → 104–109; ms4l5 ist6b:143–145 → 143–148; g6m3l7 ist6a:179, 183–185 → 179–180, 183–185; g6m4l7 ist6b:118–119 → 118–121 + m6b:140–145; g6m4l8 121–123 → 121–124 + m6b:147–151; g6m4l9 135–138 → 135–142; g6m6l1/l2 + ist5k:6–11.
   - Межі ist5 (§ 13: с. 76–84, №519–542; § 14: с. 84–89, №542–580; § 18: с. 104–109, №671–703) я звірив сам: PDF завантажено (curl, 101 МБ), pdftotext по сторінках, PDF = друк. + 4. ist6a/ist6b — без текстового шару: межі з нотаток авторів і звітів верифікаторів (рендер), не перевіряв повторно.
   - mer6 (сигла пулу pg6m4) у матриці — під ключем **m6b**: те саме видання (Мерзляк, Полонський, Якір 6, ч. 2, 2023), посилання за друкованими сторінками; так уже робили для a04–d08 pg6m4 (g6m4l1–l4 мають m6b). Межі п. 41 (с. 140–145) і п. 42 (с. 147–151) — з FACT автора пулу.
   - `sources`: нове `ist5k` (Google Drive, opened 2026-11-04); `method` ist5/ist6a/ist6b доповнено.
2. `docs/math-personalization-coverage.md`: шапка (v6, примітка ⁹), розділ **«Зміни v6»** (таблиця було → стало, формати, рівні, sk, evidence, діагностика, тести), «Обсяг» (5 кл. 27/0/2, 162–216; 6 кл. 28/4/0, 168–224; разом 177 / 11 / 46), 12 рядків реєстрів 5–6 кл., рядок g6m6l1–l4 у «Виключення…», відповідь на питання v5 про g6m6.
3. `docs/PERSONALIZATION_QA.md`: версія й лічильники (177 required / 48 пулів, 11 optional / 46 pending) + речення про перехід pending → required/optional.
4. `tools/test-learn.mjs:1150` — лише коментар: «п'ять проб відкинуто» → «чотири проби відкинуто (6, 16, 20, 24)» (P3-1, reports/review/refine-math-dg6-pct-rev3.md; очікування в тесті — `[6, 16, 20, 24]`).
5. `tasks/todo/refine-math-diag-g5-g6-ister-required.md` — питання/задача про dg5/dg6.

**Діагностика: тести рівня не змінено.** `buildPlan` бере `known` лише з явних `lessons` cur-тем, тож нові required без cur-проби не дають хибного «вже знаєш». Прогалини (нема cur-проб; `for` pre-тем не охоплює опор g6m4l7/l8 — кути ms0bl2, ms4l5 — ms4 без pre-тем, ms0bl6 — place/cmp без ms0b) — у задачі п. 5.

**Перевірки.**
- `node tools/personalization-qa.mjs` — Матриця 2026-11-04.v6: 52 розділи, 234 уроки, 177 required, 48 required-пулів, 49 пулів, 1521 вправа; **0 помилок, 0 попереджень**; Optional 11, Pending 46. БРАКУЄ лише «pg7m3/pg7m4/pg7m6/pg7m8: ще не verified» — пули 7 кл. закомічені draft (верифікатори/автор у роботі), матриця тут ні до чого.
- `--strict` — rc 1 з тієї самої причини (лише 4 рядки «ще не verified»); `--grade 4/5/6/8/9/10/11 --strict` — rc 0 кожен.
- Мутанти (in-memory `audit`, scratchpad `curate-math-matrix-v6/mut.mjs`): g6m4l8 + number → «немає формату number»; ms0bl6 + choice → «немає формату choice»; ms0l7 min 9 → «8 вправ, потрібно 9–8»; ms4l5 sk + geom → «немає навички geom»; g6m6l3 required з number → «немає формату number». Як є — 0 прогалин для 5 і 6 кл.
- `npm run check` — **rc 1 на test-hyp** (9 з 616): §0/§2.1/§2.3 — знімок змісту пулів (`hyp-replay --content-stats`) очікує 48 пулів / 1348 вправ, отримує 49 / 1521. test-hyp матриці не читає (grep: немає coverage/personalization у test-hyp.mjs і hyp-replay.mjs) — розбіжність спричинили пули (pg6m6 і нові серії, коміти ca3fc7b, 7389479, d3003b9, 045481a…), і пули 7–8 кл. ще змінюються паралельно (g7m4, g8m2, g8m3 — у роботі). Знімок §0 і абзац docs/design/diag-hypothesis-math.md варто оновити одним кроком, коли пакет пулів закінчено (оркестратор / окрема tests-задача), інакше він ламатиметься з кожним пулом. Я його не змінював.
- Решта кроків check окремо: test-math…test-evidence (у ланцюжку до test-hyp) — зелені (test-learn 2395 ✓); test-personalization-qa 109 ✓, test-validate 1138 ✓, test-graph-report 67 ✓, test-make-tasks 48 ✓, test-diff-answers 41 ok / 0 ✗, validate 0 помилок, graph-report 0 помилок, stats, fig-audit — rc 0.
- Браузерних тестів не запускав (за задачею).
- Генератори: scratchpad `curate-math-matrix-v6/v6.mjs` (JSON), `md.mjs` (md), `mut.mjs` (мутанти).

**Рецензенту (D-026, скіл `engineering-review`, звіт reports/review/curate-math-matrix-v6.md):**
- JSON-diff від v5: `git diff 7389479 -- docs/math-personalization-coverage.json` (змінено лише 12 рядків, version/previous/changes, sources ist5/ist5k/ist6a/ist6b).
- Формати проти пулів: `node tools/personalization-qa.mjs --grade 5 --strict`, `--grade 6 --strict`; пули content/math/pool-g5-ms0.js, pool-g5-ms0b.js, pool-g6-ms4.js, pool-g6-g6m3.js, pool-g6-g6m4.js, pool-g6-g6m6.js.
- Сумнівні рішення: (а) `poolState: existing-verified` для нових рядків, тоді як старі рядки з пулами, написаними після v2, лишаються `planned` (поле ніхто не читає); (б) mer6 → m6b; (в) optional g6m6 з `exercises {6, 8}` замість 0–0 (як у решти optional) — бо пул існує; (г) levels 2/2/1 для g6m4l7.
