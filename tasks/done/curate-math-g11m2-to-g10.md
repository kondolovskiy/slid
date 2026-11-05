---
claimed_from: todo
claimed_at: 2026-11-05T06:48:17.134Z
id: curate-math-g11m2-to-g10
type: curate
subject: math
status: done
claimed_by: eng-math-g11
created: 2026-11-05
depends_on: [fix-math-pool-g11m6-order]
---
# math: g11m2 → 10 клас, матриця v10, вектор без «=» (D-047; reports/research/mon-math-2026-11.md §2)

Скіли `math-pool-diag`, `content-author`; зміни tools/тестів — `engine-change` + рев'ю D-026.
1. **Перенос у 10 кл.** (прецедент g6m1 → 5 кл., D-043): content/math/plan.js `g11m2` grade 10, weeks після g10m4 (≈ [25, 35]); файли `g11-g11m2.js` → `g10-g11m2.js`, `pool-g11-g11m2.js` → `pool-g10-g11m2.js` (git mv), `grade`, коментарі. id не змінювати.
2. **Матриця v10** (docs/math-personalization-coverage.md): g11m2l1–l2 pending → required (10 кл.), l3 — optional; g11m6 — optional, прибрати «deferred»; рядок 522 і коментар diag-g11.js:6.
3. **Діагностика:** cur для g11m2 у content/math/diag-g10.js (нове завдання з `rev`, якщо потрібно), прибрати g11m2 з diag-g11.js; граф — якщо рядки прив'язані до класу (скіл `skill-graph`).
4. **Вектор без «=»** у g11m2 (звіт §2.3 — перелік рядків l2, l3, l4). «=» лишається між векторами, у довжині, скалярному добутку. Відповіді coordinates3 не змінюються.
5. Знімки тестів (test-hyp §10, test-personalization-qa тощо), якщо зсунуться, — з коментарем; рев'ю D-026.
Змінені уроки й diag → `draft` і верифікація.

## Нотатки виконавця
- 2026-11-05, eng-math-g11 (worktree wt-math). Скіли math-pool-diag, content-author, engine-change (знімки); skill-graph не знадобився — у content/math/graph.js рядків g11m2 немає.
- **Перенос у 10 кл.** (як g6m1, D-043): `git mv` content/math/g11-g11m2.js → **g10-g11m2.js**, pool-g11-g11m2.js → **pool-g10-g11m2.js**; `grade: 10`, `weeks: [25, 35]` у файлі розділу й plan.js (запис g11m2 перенесено після g10m6, коментар у шапці plan.js). id розділу, уроків, бейджа, пулу й вправ не змінено. Шапки файлів оновлено (пул: «pending (рік вивчення…)» → матриця v10). Пул pg11m2 — лише коментарі, лишається verified.
- **Вектор без «=»** (звіт §2.3, glossary 5–9): g11m2l2 — рядки 243, 276/338 (`show` лабораторії `OM→({a|0}; …)`), 287, 302 (`$AB→(4 - 1; …)$, тобто $AB→(3; 4; 12)$`), 309, 354, 363 (Оля: `$3a→(6; -1; 4)$`, `$3a→(6; -3; 12)$`), 370, 382; g11m2l3 — 435, 459, 494, 554; g11m2l4 — 666 (як 302), 673, 698. «=» лишився лише в $|a→| = …$ і $a→ * b→ = …$. Ключі, типи, варіанти — без змін. **g11m2l2, l3, l4 → draft** (l1 не змінювався — verified). validate --section g11m2: 0 помилок; 4 давні попередження профілю sentenceWords 10–11 кл. (були й до переносу — той самий профіль).
- **Матриця v10** (docs/math-personalization-coverage.json/.md, draft до рев'ю): g11m2l1–l2 pending → **required (10 кл.)**, формати D-028 за пулом і нотатками автора: number, coordinates3, exactRoot, **list** (expression прибрано), exercises 6–8 [3,2,1], existing-verified, preForSection [tri]; l3 — optional, 10 кл.; рядки перенесено в блок 10 кл. g11m6l1–l4 — optional, existing-verified, 6–8 (не deferred); `deferredSections: []`; нове джерело `std1407` (програма № 1407, цитати зі звіту — DOCX я не відкривав). md: «Зміни v10» ¹³, шапка, Обсяг (219 required / 50 пулів / 11 optional / 4 pending), dg10 tri, рядок про cur dg11, реєстри 10/11 кл., виключення (g11m2l1–l2 «Вирішено v10», g11m6), «Відкладені розділи — немає».
- **Діагностика:** cur-проби g11m2 у dg10 **не додано**: CONTENT_SCHEMA §9 забороняє додавати завдання в опублікований тест без нового id, а заміна на місці з `rev` забрала б cur іншого розділу; прецедент — «нових cur-проб не додаємо» (refine-math-diag-for-ister, 04.11). Натомість лише `for`: pre-тема dg10 `tri` (Піфагор, g8m4l2) + g11m2 (forEvidence g11m2l1 — формула відстані, екран 7). dg10 → **draft** (завдання, індекси, ключі, rev не змінено). dg11 — лише коментар (g11m2 там і не перевірявся), лишається verified.
- **Тести:** test-hyp §10 «теми тестів» 184 → 186 (коментар 2026-11-05 curate-math-g11m2-to-g10); docs/design/diag-hypothesis-math.md — датований абзац. personalization-qa: 0 помилок, бракує лише «dg10: ще не verified», «pg11m6: ще не verified»; make-tasks — 0 нових задач. `npm run check` EXIT 0.
- **Потрібно:** верифікація g11m2l2–l4 (лише запис векторів) і зв'язку dg10 tri → g11m2; незалежне рев'ю матриці v10 і D-026 для tools/test-hyp.mjs. docs/design/skill-graph-math.md:181 («g11m1/g11m2 — нічия, 8 пар») тепер застарілий — рядок в inbox.

## Нотатки верифікатора
- 2026-11-05, verifier-math-g11-d047 (скіли content-verify, math-pool-diag). Звіт — reports/verify/math-g11-d047.md §2–3.
- g11m2l2–l4: «=» перед координатами прибрано скрізь (grep `→ = (`, `) = (` — 0); «=» лише в довжині, скалярному добутку, рівняннях. Нотація звірена з Мерзляк 10 с. 216–217, 229 (PDF 4book, sha256 2e184991…) і Нелін 10 § 17 (subjectum). Усі 20 оцінюваних завдань розв'язано незалежно — ключі правильні й не змінились; опора D-019 — є.
- Правка: l2 info «Довжина вектора $a→(x; y; z)$ дорівнює …» (раніше x, y, z не прив'язані до $a→$). g11m2l2, l3, l4 → **verified**.
- dg10: tri.for + g11m2 — обґрунтовано (g11m2l1 «Відстань і середина» спирається на Піфагора; Мерзляк 10 т. 38.1; узгоджено з §9 — лише метадані, rev не потрібен). dg10 → **verified**.
- У done не переношу: лишаються рев'ю матриці v10 і D-026 (tools/test-hyp.mjs).
- **Раунд 2 (2026-11-05, eng-math-g11; рев'ю reports/review/curate-math-g11m2-to-g10.md):**
  - P2-1: у tools/test-personalization-qa.mjs якір тепер `/^pg11m[26][:/]/`, тож ловить і прогалини рядків (`pg11m2/g11m2l1: …`). Коментар оновлено. Мутанти на копії дерева (scratchpad): a07, a08 lvl 3→2 — rc 1; той самий мутант зі старим якорем — rc 0.
  - P3-1: pg11m6 і dg10 уже verified (14b6517), тож виняток «ще не verified» прибрано. Мутанти «pg11m2 → draft» і «pg11m6 → draft» — rc 1; без мутації — rc 0.
  - P3-2: у матриці v10 рядки g11m6 мають `existing-verified`, і пул справді verified. `reason` у .json і «Зміни v10» у .md переписано. `personalization-qa --strict` — rc 0.
  - P3-3: у tools/test-hyp.mjs прибрано застарілий коментар «A — 449» (тепер посилання на знімок M.A.le).
  - P3-4 (skill-graph-math.md:181) лишається в inbox.
