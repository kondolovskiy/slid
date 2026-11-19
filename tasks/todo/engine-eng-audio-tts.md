---
id: engine-eng-audio-tts
type: engine
subject: eng
depends_on: [engine-eng-lang-attr, research-eng-audio]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
blocked: human
---
> **Заблоковано рішенням людини:** docs/design/english.md §11.1 п. 2 — «поки без звуків і голосу»; коли звук дозволять, першим кроком — TTS. Не брати, доки людина не змінить рішення (memory/long/decisions.md).

# Звук через TTS пристрою: поле `say`, кнопка «Послухати», чесний запасний режим

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §5.3 — коли звук дозволять; перший крок за рішенням людини)
1. `say` → кнопка «Послухати»; `speechSynthesis`, `en-GB` → запасний `en-*`; швидкість 0,85–1.
2. Немає англійського голосу → «Звук недоступний на цьому пристрої», текст показано; аудіювання стає уважним читанням (журнал `noAudio`).
3. Журнал: голос і `noAudio` без ПД. test-ui: підміна `speechSynthesis`.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
