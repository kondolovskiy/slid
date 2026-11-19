---
claimed_from: todo
claimed_at: 2026-11-19T11:58:42.527Z
id: curate-eng-subject
type: curate
subject: eng
depends_on: [design-eng, engine-eng-lang-attr]
status: todo
claimed_by: orchestrator-eng
created: 2026-11-19
source: design-eng
---
# content/subjects/eng.js; «скоро» eng у catalog.js (4 клас) і його видалення
1. Зараз (до першого verified-розділу): у content/catalog.js змінити `grade: "5 клас"` → «4 клас» (перший клас предмета — 4, рішення людини 2026-11-19); `why` — українською (це картка головної, хром).
2. Коли є хоча б один verified-розділ 4 кл.: `content/subjects/eng.js` — `SLID.subject({ id: "eng", subject: "Англійська мова", short: "Англійська", icon: "globe", targetLang: "en", diagOrder, colors (з catalog.js + soft/mid/ink), skills, badges })`; навички — docs/design/english.md §7 (read, vocab, gram, phon, func, write, cult; `listen` — лише зі звуком); `name`/`hint` навичок — українською (картка прогресу — хром) або англійською — вирішити й записати в style/eng.md.
3. **У тому самому коміті** видалити `SLID.soon({ id: "eng" … })` (registry.js `soon()` не дедуплікує → дві картки).
4. `node tools/validate.mjs` — 0 помилок; build — оркестратор.

## Обмеження
Спільні файли куратора — не під час паралельного пакета (AGENTS.md §5). Build — оркестратор.
