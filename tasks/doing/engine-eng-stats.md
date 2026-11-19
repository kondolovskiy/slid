---
claimed_from: todo
claimed_at: 2026-11-19T11:58:42.496Z
id: engine-eng-stats
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by: eng-stats
created: 2026-11-19
source: design-eng
---
# stats.mjs і профіль `eng`: метрики англійського тексту

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що є
stats.mjs:32 бере `profiles[c.id] || _default`. lib.mjs:96 `VOW` рахує склади за голосними (beautiful = 5 → «довге»); lib.mjs:100–109 `sentences()` ріже на «Mr.», «e.g.».

## Що зробити (docs/design/english.md §6.1)
1. Для eng: склади англійської — групи голосних (з німим `-e`), англійські скорочення в `sentences()`; `longWordShare` — за англійськими складами.
2. Метрика `maxText` (найдовший текст для читання на екрані) — для лімітів style/eng.md.
3. Профіль `eng` у style/profiles.json (діапазони 4, 5-6, 7-9, 10-11) — значення дає curate-eng-style (зміна профілів — через decisions.md); тут лише підтримка нових ключів.
4. Тести (фікстура з англійським текстом).

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
