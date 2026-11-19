---
id: curate-eng-subject
type: curate
subject: eng
depends_on: [design-eng, engine-eng-lang-attr]
status: done
claimed_by: 
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

## Нотатки orchestrator-eng (2026-11-19)
- content/subjects/eng.js створено: `targetLang: "en"`, `diagOrder: 5`, `short: "Англійська"`, `icon: "voice"` (globe вже має world), кольори з catalog.js + soft/mid/ink, навички read, vocab, gram, phon, func, write, cult (`listen` — лише зі звуком, D-054), значок `estar`.
- **Назви й підказки навичок — українською:** картка прогресу й назва предмета — інтерфейс рушія (D-054: українською — лише хром), закриває P3-3 рев'ю curate-eng-agents-rule. Записати в style/eng.md (curate-eng-style).
- `SLID.soon({ id: "eng" })` видалено з content/catalog.js тим самим комітом (дубль картки). Перед тим тимчасово було «4 клас».
- **Чому не чекали першого verified-розділу:** `SLID.section("eng", …)` у plan.js кидає «Невідомий предмет», якщо предмета немає (app/registry.js:26), тож subjects/eng.js потрібен до curate-eng-plan-g4. Предмет без розділів на головній не показується; з планом без уроків — картка «план» і «уроки готуються» (app/app.js:381, :391), як було з ukr.
- `node tools/validate.mjs` — 0 помилок, 230 попереджень. build — оркестратор після етапу B (паралельно працюють агенти рушія).
