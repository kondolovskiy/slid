---
id: engine-eng-stats
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# stats.mjs і профіль `eng`: окремий лік українських і англійських слів

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що є
stats.mjs:32 бере `profiles[c.id] || _default`. lib.mjs:96 `VOW` рахує склади англійських слів за голосними (beautiful = 5 → «довге»); lib.mjs:100–109 `sentences()` ріже на «Mr.», «e.g.».

## Що зробити (docs/design/english.md §6.1)
1. Метрики українського тексту — без англійських фрагментів; нові метрики `enWordsPerScreen`, `enMaxText` (найдовший англійський текст екрана).
2. Склади англійської — групи голосних (з `-e` в кінці), англійські скорочення в `sentences()`.
3. Профіль `eng` у style/profiles.json — **значення дає curate-eng-style** (зміна профілів — через decisions.md); тут лише підтримка нових ключів.
4. Тести (фікстура з англійським текстом).

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
