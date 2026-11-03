---
claimed_from: todo
claimed_at: 2026-11-03T09:09:37.087Z
id: math-ister-migration
type: engine
status: done
claimed_by: orchestrator-ister
created: 2026-11-03
depends_on: []
---
# Математика 5–9: перехід на програму Істера (D-043)

Звіт-основа: reports/curriculum-artynov-2026.md §3. Ліцей «Артинов» працює за Істером (Математика 5–6, наказ № 795; Алгебра 7–9 і Геометрія 7–9, наказ № 883).

1. **Дослідження:** тексти модельних програм Істера 5–6, Алгебра 7–9, Геометрія 7–9 і зміст підручників Істера 5–9 (Генеза) — таблиця «тема Істера → наш розділ/урок → клас/порядок», прогалини й зайве. Звіт reports/math-ister-map.md.
2. **Дизайн міграції** (docs/design/math-ister.md): як переставити розділи між класами без зміни id (правило 11) — поле `grade`/`weeks` у файлах розділів і plan.js, імена файлів, diag-g*, pool-*, graph.js, матриця персоналізації, збережений прогрес дітей. Відомо: подільність — 5 кл. (у нас g6m1); відсотки, кругові діаграми, коло/круг, об'єм — 6 кл. (у нас ms3, ms4); сума кутів трикутника — 5 кл.
3. **Нотація:** звірити glossary/math.md «Вирішено 2026-10-13» (Мерзляк) з Істером → «Вирішено 2026-11-03»; задача на виправлення контенту.
4. **Прогалини:** задачі write-*/revise-* на теми Істера, яких бракує.
Незалежне рев'ю інженерних змін (D-026); верифікація контенту (content-verify).

## Нотатки виконавця

### 2026-11-03 · orchestrator-ister — етапи 1–3 (дослідження, дизайн, реалізація)
- **Дослідження:** reports/math-ister-map.md (дослідник — субагент; вибірково звірено оркестратором: зміст Істер 5 § 1–49 — подільність § 26–32; Істер 6 с. 174 — `C = πd`, `C = 2πr` (скан); Істер 5 § 23 — `P = 2a + 2b`, `P = 2(a + b)`, тож теза звіту §5 «периметр 5 кл. — (a + b) · 2» неповна: так лише в прикладі формули § 11).
- **Дизайн:** docs/design/math-ister.md.
- **Реалізація** (коміти aad5018, build 01c539f):
  - уроки між розділами (id без змін): ms3l3, ms4l1 → ms0b; розділи g6m1 → 5 кл., ms3 «Відсотки» → 6 кл. (тижні 1–4), ms4 «Об'єм» → 6 кл. (33–35); тижні 5–6 кл.; g7m6 перед g7m4; файли `git mv` за класом;
  - рушій: поле пулу `also` — app/learn.js (practiceItems, validatePool), app/app.js (екран «Тренування»: розділи пулу з also, без дублів), tools/personalization-qa.mjs, tools/diff-answers.mjs; CONTENT_SCHEMA §10;
  - тести: test-learn (also: видимість 4/5/6 кл., ключі, 8 помилок validatePool), test-personalization-qa (also у матриці, без also — помилка); оновлено тести, прив'язані до живого dg6 (теми №21, №27, known), test-hyp §2.1 (135/145/9/157/157, docs/design/diag-hypothesis-math.md), CLI-тест `--pool pg6m1 --grade 6`;
  - dg5 (№26 rev 2 — ознаки подільності; for), dg6 (злиття g6-div/g6-lcm у pre, pct → cur pct/pct-of), graph.js 2026-11-03.1, матриця 2026-11-03.v4 (draft).
  - `npm run check` — зелений (validate 0 помилок / 265 попереджень, як до змін; personalization-qa 0; graph-report 0).
- **Далі:** незалежне рев'ю (engineering-reviewer) → reports/review/math-ister-migration.md; нотація (glossary) і контент — задачі fix-*/revise-*; прогалини — write-*.

### 2026-11-03 · orchestrator-ister — етапи 4–5 і приймання
- **Рев'ю (D-026):** reports/review/math-ister-migration.md — «прийнято» для фінального diff (повторне рев'ю 2). Виправлено P1-1 (фікстури регресії; QA-хук `window.__slidStart`), P2-1 (`unlocked`), P2-3 (dg5/dg6 draft → верифікація); P2-2 — питання людині (handoff); P3 — tasks/todo/tools-ister-p3.md. Додатково: g6m1 `requires: ["m4a"]`.
- **Браузерна регресія:** `python3 tools/test-answer-ui.py --suite regression` — green (exit 0).
- **Нотація:** glossary «Вирішено 2026-11-03»; fix-math-notation-ister — done (verified, reports/verify/fix-math-notation-ister.md).
- **Контент:** revise-math-ms0b-ister, revise-math-ms3-ms4-ister — done (verified); verify-math-ister-diag — dg5 verified, dg6 draft → refine-math-dg6-pct-rev3.
- **Прогалини:** 8 задач write-math-* у todo (+ write-math-g6m3-circle-diagrams — пріоритет через g9m7).
- `npm run check` — зелений; build закомічено окремими комітами.
- Playtest (по одному): ms0b 7, g6m1 5, ms3 3, ms4 3, g6m3 6, g7m4 4, g7m6 4, g9m2 5, g9m5 4 уроків — пройдено.
