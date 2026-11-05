# Рев'ю D-026: tests-hyp-snapshot-style-math

Рецензент: незалежний агент (engineering-review), свіжий контекст. Дата: 2026-11-05.
Перевірено коміт **7d3a033** (гілка wt-hypfix), повний diff: `tools/test-hyp.mjs` (знімок «§0 екрани уроків» + коментар), задача `tasks/doing → tasks/review`, рядок в `memory/short/inbox.md`.

## Суть зміни
`tools/test-hyp.mjs:539`: `[1624,691,74,1604,1152,87,39]` → `[1623,691,74,1603,1151,173,53]` (gradedScreens, choice, choice hyp/poll, fbBad, hint, pre, уроки з pre); рядки 534–538 — коментар із причиною і попереднім знімком. Інших змін коду в diff немає: поза коментарями diff `test-hyp.mjs` — рівно один рядок `eq(...)`, інші знімки й перевірки не торкнуто.

## Виконані перевірки (власні)
Копії дерева (`git archive HEAD`) у scratchpad `review-hypfix/{pre,head}`; у `pre/` 18 файлів `content/math/g*-*.js`, змінених між e8c30a1^ і HEAD, повернуто через `git show e8c30a1^:<path>`.
1. `pre/`, новий test-hyp → `ПОМИЛКА §0 екрани уроків: отримано [1624,691,74,1604,1152,87,39]`, 1 з 620 не пройшла — це рівно старий знімок; жодна інша перевірка не впала.
2. `pre/` + `tools/test-hyp.mjs` з 7d3a033^ → «усі 620 перевірок пройшли» (старий знімок зелений на старому змісті).
3. `head/`, новий test-hyp → «усі 620 перевірок пройшли». Отже тест чутливий до зсуву в обидва боки (без правки знімка HEAD червоний — це й був стан задачі).
4. Покроковий diff по уроках (власний скрипт `review-hypfix/perlesson.mjs`, ті самі GRADED і фільтр `!hyp && !poll`, що в `contentStats`, tools/hyp-replay.mjs:284–292):
   - pre +86 у рівно 14 уроках, де раніше pre не було: g7m1l4 6, g7m2l4 7, g7m3l5 6, g7m4l4 7, g7m5l4 6, g7m6l4 6, g7m7l5 6, g7m8l4 6, g8m1l5 6, g8m2l5 6, g8m3l5 5, g8m4l4 6, g8m5l5 7, g8m6l3 6 → 87 + 86 = 173, уроків 39 + 14 = 53. Кількість оцінюваних екранів, fbBad, hint, choice у цих уроках не змінилася.
   - g9m6l4: типи `intro,explore,choice,info,lab,number,choice,lab,choice` → `…,number,choice,choice` — прибрано другий `lab` (мав fbBad і hint) → оцінюваних −1, fbBad −1, hint −1; choice 0.
   - Інших розбіжностей між `pre/` і HEAD у типах екранів і лічильниках немає. Коментар у тесті й нотатки виконавця відповідають фактам.
5. `npm run check` у worktree — **EXIT 0** (test-hyp 620/620; validate 0 помилок, 72 попередження; graph-report 0 помилок). build не змінив `index.html`/`sw.js`/`content/manifest.json`; змінено лише `reports/validate.json`, `reports/style-math.md`, `reports/fig-audit-math.*` (перегенеровуються check, у коміт не входять — як і зазначив автор).

## Знахідки
- P1 — немає.
- P2 — немає.
- P3: `reports/*` (validate.json, style-math.md, fig-audit-math.*) у HEAD застарілі відносно змісту; не предмет цієї задачі, оновляться наступним комітом після check/build оркестратора.

## Не перевірено
- Браузерні прогони (`test-answer-ui.py --suite regression`, playtest) — зміна стосується лише node-знімка, рушій і зміст у цьому коміті не змінювались.
- Педагогічна якість самих pre у фіналах 7–8 кл. — предмет верифікації style-math-ister-followup (0d6eac3), не цього рев'ю.

## Вердикт
**прийнято**
