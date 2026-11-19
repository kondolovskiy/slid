---
id: curate-eng-subject
type: curate
subject: eng
depends_on: [design-eng, engine-eng-lang-attr]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# content/subjects/eng.js; прибрати «скоро» eng з catalog.js
1. `content/subjects/eng.js`: `SLID.subject({ id: "eng", subject: "Англійська мова", short: "Англійська", icon: "globe", targetLang: "en", diagOrder, colors (з catalog.js + soft/mid/ink), skills, badges })`; навички — docs/design/english.md §7 (listen, read, vocab, gram, phon, func, write, cult) — затвердити.
2. **У тому самому коміті** видалити `SLID.soon({ id: "eng" … })` з content/catalog.js (інакше дві картки — registry.js `soon()` не дедуплікує).
3. Порядок: робити тоді, коли є хоча б один verified-розділ 5 кл. (інакше предмет порожній на головній) — або домовитись про прихований режим (рішення оркестратора).
4. `node tools/validate.mjs` — 0 помилок; build — оркестратор.

## Обмеження
Спільні файли куратора — не під час паралельного пакета (AGENTS.md §5). Build — оркестратор.
