---
claimed_from: todo
claimed_at: 2026-11-05T09:42:07.237Z
id: tests-hyp-snapshot-style-math
type: tests
subject: math
status: done
claimed_by: eng-hyp-style
created: 2026-11-05
depends_on: [style-math-ister-followup]
---
# test-hyp §0 «екрани уроків» після style-math-ister-followup

`npm run check` червоний з e8c30a1: `ПОМИЛКА §0 екрани уроків: отримано [1623,691,74,1603,1151,173,53], очікувалось [1624,691,74,1604,1152,87,39]`. Причина (очікувано): style-math-ister-followup додав `pre` у фінали 7–8 кл. (87 → 173 екрани з pre, 39 → 53 уроки) і прибрав lab «площа вчетверо» з g9m6l4 (оцінюваних екранів −1, fbBad −1, hint −1). Оновити знімок із коментарем-поясненням (як прецеденти), переконатися відтворенням на копії дерева без цих змін, що зсув — лише від них. Рев'ю D-026.

## Нотатки виконавця

eng-hyp-style, 2026-11-05.

**Змінено:** лише `tools/test-hyp.mjs` §10 — знімок «§0 екрани уроків» `[1624,691,74,1604,1152,87,39]` → `[1623,691,74,1603,1151,173,53]` з коментарем (дата, причина, попередній знімок). Рушій і `hyp-replay.mjs` не змінювались; інші знімки не зсунулися.

**Відтворення** (scratchpad `hypfix/`, дві копії дерева без .git): у `pre/` — 18 файлів `content/math/g*-*.js`, змінених між e8c30a1^ і HEAD, повернуто через `git show e8c30a1^:path`; у `mid/` — стан e8c30a1 (`git show e8c30a1:path`).
- `pre/`: `node tools/test-hyp.mjs` → усі 620 перевірок пройшли (старий знімок).
- `mid/`: рівно ті самі цифри, що й HEAD `[1623,691,74,1603,1151,173,53]` → верифікація 0d6eac3 (status verified + речення «І навпаки: площа вчетверо → сторони вдвічі» в теорії g9m6l4 — тип info, не оцінюваний) нічого в §0 не зсуває.
- Покроковий diff по уроках (скрипт `hypfix/perlesson.mjs`, ті самі GRADED і фільтри hyp/poll, що в contentStats):
  - pre: +86 оцінюваних екранів із pre у 14 фіналах, де раніше pre не було: g7m1l4 6, g7m2l4 7, g7m3l5 6, g7m4l4 7, g7m5l4 6, g7m6l4 6, g7m7l5 6, g7m8l4 6, g8m1l5 6, g8m2l5 6, g8m3l5 5, g8m4l4 6, g8m5l5 7, g8m6l3 6 → 87 + 86 = 173; уроків 39 + 14 = 53.
  - g9m6l4: прибрано один `lab` (типи `…,choice,lab,choice` → `…,choice,choice`), у нього були fbBad і hint → оцінюваних −1 (1623), fbBad −1 (1603), hint −1 (1151). choice 691 і choice hyp/poll 74 — без змін.
  Інших розбіжностей у типах екранів, pre, fbBad, hint між `pre/` і HEAD немає.

**Прогін:** `npm run check` у worktree — EXIT 0 (test-hyp: усі 620 перевірок пройшли; validate 0 помилок, 72 попередження).
`npm run check` перегенерував `reports/validate.json`, `reports/style-math.md`, `reports/fig-audit-math.*` (у HEAD вони застарілі відносно 0d6eac3 / профілю) — не комічу, це не предмет задачі.

**Рев'ю D-026:** потрібне незалежне (зміна тесту).
