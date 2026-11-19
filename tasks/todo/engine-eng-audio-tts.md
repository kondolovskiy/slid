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
> **Заблоковано рішенням людини:** docs/design/english.md §11 — рішення §11 п. 7 (аудіо: варіант В). Не брати, доки рішення не записане в memory/long/decisions.md.

# Звук через TTS пристрою: поле `say`, кнопка «Послухати», чесний запасний режим

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що зробити (docs/design/english.md §5.3, варіант В, крок 1)
1. `say: "text"` або `say: true` (озвучити мовний матеріал екрана) → кнопка «Послухати»; `speechSynthesis`, `en-GB` → запасний `en-*`; швидкість 0,85–1 (кнопка «повільніше»).
2. Немає англійського голосу → «Звук недоступний на цьому пристрої», текст показано; оцінюване аудіювання стає «уважним читанням» (журнал `noAudio`).
3. Журнал подій: голос (назва, локальний чи мережевий), `noAudio` — без ПД (docs/EVIDENCE.md).
4. test-ui: підміна `speechSynthesis` (є голос / немає голосу); playtest не має залежати від звуку.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
