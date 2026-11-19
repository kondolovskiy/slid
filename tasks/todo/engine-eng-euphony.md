---
id: engine-eng-euphony
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# euphony.mjs: українська милозвучність поруч з англійськими словами

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що є
euphony.mjs:20–24 — приголосні й голосні лише кириличні: латинське сусіднє слово ніколи не «приголосне», тож «в English» / «у Present Simple» не перевіряються; `EUPHONY = { ukr: true }` (validate :275).

## Що зробити
1. `--subject eng` перевіряє українську прозу; англійські фрагменти — пропускає.
2. Перед англійським словом у/в, і/й, з/із/зі — за **вимовою** першого звука англійського слова (`in English` → «в English»? «у English»?). Норму вирішує TQ у docs/teacher-questions.md (D-049), до відповіді — лише попередження, не помилка.
3. `EUPHONY.eng = true` у validate; довідка `--help`.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
