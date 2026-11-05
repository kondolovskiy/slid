---
claimed_from: todo
claimed_at: 2026-11-05T09:42:07.237Z
id: tests-hyp-snapshot-style-math
type: tests
subject: math
status: todo
claimed_by: eng-hyp-style
created: 2026-11-05
depends_on: [style-math-ister-followup]
---
# test-hyp §0 «екрани уроків» після style-math-ister-followup

`npm run check` червоний з e8c30a1: `ПОМИЛКА §0 екрани уроків: отримано [1623,691,74,1603,1151,173,53], очікувалось [1624,691,74,1604,1152,87,39]`. Причина (очікувано): style-math-ister-followup додав `pre` у фінали 7–8 кл. (87 → 173 екрани з pre, 39 → 53 уроки) і прибрав lab «площа вчетверо» з g9m6l4 (оцінюваних екранів −1, fbBad −1, hint −1). Оновити знімок із коментарем-поясненням (як прецеденти), переконатися відтворенням на копії дерева без цих змін, що зсув — лише від них. Рев'ю D-026.

## Нотатки виконавця
