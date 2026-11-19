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
> **Заблоковано рішенням людини:** docs/design/english.md §11 — рішення §11 п. 7 (хто записує, ліцензія голосу, ліміт кешу). Не брати, доки рішення не записане в memory/long/decisions.md.

# Записані аудіофайли: поле `audio`, кеш розділу на вимогу, перевірки

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §5.3, крок 3)
1. `audio: "audio/eng/<розділ>/<файл>.m4a"` (AAC; MP3 — запасний формат, рішення research-eng-audio).
2. sw.js/build.mjs: аудіо **не** в загальному precache; окремий кеш розділу: кнопка «Завантажити звук розділу (N МБ)» + кешування після першого відтворення; очищення при новій версії (docs/PUBLISHING.md — без змішування версій).
3. validate: файл існує, ≤ 200 КБ на кліп, ≤ 2 МБ на розділ (межі — за рішенням людини), `credits` аудіо.
4. TTS — запасний варіант, коли файлу немає в кеші й мережі немає.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
