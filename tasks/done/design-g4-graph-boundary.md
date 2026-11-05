---
claimed_from: todo
claimed_at: 2026-11-05T14:52:52.142Z
id: design-g4-graph-boundary
type: design
subject: math
status: done
claimed_by: designer-g4
created: 2026-11-05
depends_on: [tests-hyp-g3-verified-lines]
---
# Перед G4: порожні передумови (pres) у тіні G3 для уроків ліній prob і tri

Джерело: reports/review/tests-hyp-g3-verified-lines.md п. 4 (P3-2), нотатки задачі tests-hyp-g3-verified-lines. Після переведення ліній prob/tri у verified тіньовий трекер для g6m6l1, g6m6l3, g9m7l1, ms0bl3, g7m2l2, g7m4l1/l3/l6/l9 бере pres за ребрами графа pre w2 / part — і отримує порожній список (вузли-входи comb-enum, prob-events, count-rules, angle-adj-vert, tri-angle-sum без передумов; частина ребер w1 свідомо). За D-038 (3в) на G4 граф діє одразу → ці уроки втратять усіх кандидатів P/S12.
Рішення (дизайн + D-NNN): (а) коли `graphPre` порожній — лишати старі pres; або (б) куратор графа додає вузли межі (напр. ms0bl2 «кути, вимірювання») з ребрами w2. Плюс `diff-plan` для prob/tri і перегляд лінії вчителем (D-038 2б). Не блокує нічого до G4.

## Нотатки виконавця
(designer-g4, 2026-11-05, worktree wt-g4)

**Зроблено:** docs/design/g4-graph-boundary.md (новий) — таблиця «урок → старі pres → граф-pres» для ліній frac, prob, tri (скрипт на живому змісті, граф 2026-11-05.3), причини, варіанти (а) / (б) / (в), вплив на план G4, ризики, обсяг, тести, рекомендація, 5 питань людині (D-049). docs/design/skill-graph-math.md — посилання в §7.1 (рядок G4, п. 4) і абзац після відкритого питання 10. content/, app/, tools/ не змінено.

**Знахідки:**
- Порожній graphPre за непорожніх старих pres: 12 пар — prob g6m6l1, g6m6l3, g9m7l1; tri ms0bl3, g7m2l2, g7m4l1, l3, l6, l9; frac g4m3l3 (w 2 лише на base div-table), g6m1l2 num і g6m2l1 cmp (пари без вузла) — і 5 тем (dg9/cur-g9m7, dg11/count, dg7/cur-g7m4, dg8/tri-equal, dg8/tri-angles). У рев'ю G3 frac не згадано.
- prob: старі pres — `requires` розділу (дроби, відсотки, статистика), для входів нерелевантні; порожнеча точніша.
- tri: бракує межі ms0bl2 «Скільки градусів у куті?» (dg7/angles): ms0bl3 #6, #7, g7m4l3 #4–#6, g7m2l2 #3, #4, #8 спираються на види й міру кута.
- `pre` екранів: граф заміняє, а не доповнює — 5 екранів frac втрачають свій урок (g4m3l3 #7, g6m2l2 #6, g6m2l3 #1, g6m2l4 #1, #8).
- Симуляція (б) (вузол angle-measure, teach ms0bl2, w 2 від tri-angle-sum і angle-adj-vert; у лінії й поза нею): analyzeGraph — 0 знахідок; нові pres ms0bl3, g7m2l2, g7m4l3, dg8/tri-angles → ms0bl2; dg7 #1, #11 прив'язуються типово.

**Рекомендація:** (в) — вузол межі для tri (curate + verify), правило «пара без вузла → старі pres/preWeak», об'єднання з `pre` екрана, розділ graph-report «Входи лінії»; повний fallback (а) — ні (хибні pres у prob, маскує прогалини).

**Скрипти** (scratchpad сесії, …/scratchpad/g4/): pres.mjs (таблиці §2), src.mjs, dump.mjs, sim.mjs / sim-out.mjs (варіант б).
**Не перевірено:** журнал пілоту (локально немає) — вплив на S12/P не виміряно; diff-plan ще не існує.
**Рев'ю:** дизайн — на незалежне рев'ю (D-026 для майбутніх змін рушія); технічне рішення — людині (§7 документа).
