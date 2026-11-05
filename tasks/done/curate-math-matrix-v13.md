---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.667Z
id: curate-math-matrix-v13
type: curate
subject: math
status: done
claimed_by: cur-matrix-v13
created: 2026-11-05
depends_on: []
---
# Матриця персоналізації math → v13 (передумови й нотатки з пакета 05.11-4)

Файли: docs/math-personalization-coverage.md + .json (один виконавець; інших правок матриці паралельно немає). Після — незалежна перевірка (content-verify).

1. Рядок g9m4l5: передумова **g8m6l2** замість g8m6l1 (S = ½ah — g8m6l2 «Основа на висоту»; g9m4l5 #0, #3). Зараз рядок 804 — `g9m4l1, g8m6l1`.
2. Рядок g9m7l1: передумова `m1` хибна (g9m7l1 і pg9m7 a01–a08 без дробів) — мабуть, мало бути g9m7l2 → m1 (P = m/n; у графі prob-classic ← frac-read w 2). Перевір і виправ.
3. g7m4l9 → g7m4l6 — верифікатор графа відхилив як опору (l9 виводить нерівність трикутника з перетину кіл; h01–h08 без «проти більшого кута»); вирішити, чи лишати в реєстрі. g7m4l6 → g7m4l5 — підтверджено (pg7m4 e08).
4. «Зміни v11»: уточнити, що `for` впливає й на тіньові передумови гіпотез (app/hyp.js preIndex), не лише на buildPlan.
5. З tools-math-ister-p3 (inbox eng-tools-p3 IDEA): `sources.opened` у 10 джерелах Істера vs «PDF не відкривав»; coverage.md:5 — «урок без пулу» до pending; `poolState: planned` у старих рядках; формати на одній вправі (g8m3l6, g9m6l6/l7 list, g9m8l9, g9m8l11); формати «в дужках» у g7m4l7, g7m4l9, g7m8l5.

Джерела: inbox 05.11 (curator-graph-math MATRIX, verifier-graph-prob-tri MATRIX, eng-tools-p3 IDEA); reports/verify/graph-prob-tri.md.

## Нотатки виконавця
Виконавець: cur-matrix-v13, 2026-11-05, worktree `slid-wt-matrix` (гілка wt-matrix). Матриця **2026-11-05.v13** (draft), «Зміни v13» і примітка ¹⁶ у docs/math-personalization-coverage.md; .json; версія в docs/PERSONALIZATION_QA.md:3. Зміст уроків, пулів, тестів рівня, рушій і тести не змінено.

1. **g9m4l5** — `prerequisites` g9m4l1, g8m6l1 → g9m4l1, **g8m6l2**. Звірено: g9m4l5 #0 «$S = 1/2 a h$», #3 «Підставимо h = b sin γ у формулу S = 1/2 a h» і «Паралелограм діагональ ділить на два рівні трикутники» (#7 «Площа паралелограма»); g8m6l2 «Основа на висоту», info: «Трикутник: діагональ ділить паралелограм навпіл. Тому S = (a·h)/2». g8m6l1 (сума кутів многокутника) не потрібна. g9m4l1 лишається (#6 `pre: g9m4l1`).
2. **g9m7l1** — `ms2l5, m1` → `[]`: #0–#9 і pg9m7 a01–a08 лише цілі числа (правило добутку/суми), ні дробів, ні середнього. g6m6 (комбінаторика) — optional (D-048), required-опорою не стає. **g9m7l2** — `ms2l5, m1` → **m1**: m1 підтверджено (#1, #3 P = m/n, b01 5/12; граф `prob-classic ← frac-read` w 2); середнього (ms2l5) в уроці й b01–b08 немає — прибрано (поза буквою задачі, той самий критерій). g9m7l1 → l2 не додано (граф w 1, n = 36 дано в умові). g9m7l3 без змін (ms2l5: #1–#4, #7, #8, c03–c07; m1: c05 «звичайним дробом»).
3. **g7m4l9** — `g7m4l6` → **g7m4l2**: верифікатор графа відхилив l6 (перетин кіл #2–#4, h01–h08 без «проти більшого кута»); опора, яку зміст справді вживає, — рівнобедрений: #9 «4 см і 9 см», h03, h06, h07; граф `tri-ineq ← tri-isosc` w 1. g7m4l6 → g7m4l5 лишено (pg7m4 e08).
4. **«Зміни v11»** — уточнено на місці (позначка «уточнено в v13»): `for` впливає й на `SLID_HYP.preIndex` (тіньові передумови, app.js `presOf`), не лише на buildPlan.
5. IDEA eng-tools-p3:
   - `sources`: у 11 джерелах, де `method` каже «куратор не відкривав» (mnp56, ist6a, ist6b, ist7a, ist7g, ist8a, ist8g, ist9a, ist9g, ist5k, std1407), `opened` → **`recorded`**; ist5 лишає `opened` (межі § 13/14/18 куратор звіряв у v6). Поле не читає жоден інструмент (grep tools/, app/).
   - coverage.md:5 — визначення pending доповнено «урок без пулу» (`poolState: deferred`, 0–0).
   - `poolState`: 146 рядків `planned` → `existing-verified` (усі required з verified-пулом і вправами уроку, перевірено скриптом); тепер 227 existing-verified, 7 deferred, planned — 0.
   - Формати «в дужках» тепер вимагаються: g7m4l7 + list (f05), comparison (f03); g7m4l9 + list (h07), choice (h08); g7m8l5 + choice (d01). `--strict` rc 0.
   - Формати на одній вправі: не правка (вправи — не файли куратора); у «Зміни v13» — повний список 85 required-рядків (у v12 — 82; +3 від нових вимог) для авторів пулів.

Перевірки: `npm run check` — EXIT 0 (test-hyp 624 ✓, test-personalization-qa ✓; **знімки не зсунулись** — матриця не впливає на test-hyp, а test-personalization-qa на фікстурах; правок тестів немає → рев'ю D-026 не потрібне); `node tools/personalization-qa.mjs --strict` — rc 0 (52 розділи, 234 уроки, 219 required / 50 пулів, 11 optional, 4 pending, 1816 вправ — без змін); graph-report V9 «prerequisites матриці без пояснення» 2 → **0** (на HEAD — g7m4l9 → g7m4l6, g9m7l1 → m1; поза графом 396 → 394). reports/validate.json (лише дата) не комічу — звіти комітить оркестратор.

Далі: незалежна перевірка (content-verify) v13 — кожну правку передумов звірити з уроками; потім `review` у JSON і done.
