---
id: engine-eng-audio-files
type: engine
subject: eng
depends_on: [engine-eng-listen]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
blocked: human
---
> **Заблоковано рішенням людини:** docs/design/english.md §11.1 п. 2 — «поки без звуків і голосу»; коли звук дозволять, першим кроком — TTS. Не брати, доки людина не змінить рішення (memory/long/decisions.md).

# Записані аудіофайли: поле `audio`, кеш розділу на вимогу, перевірки

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

`audio: "audio/eng/<розділ>/<файл>.m4a"`; не в загальному precache sw.js — окремий кеш розділу («Завантажити звук розділу (N МБ)»); validate: файл існує, ліміти розміру, `credits`; TTS — запасний варіант. docs/design/english.md §5.3.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
