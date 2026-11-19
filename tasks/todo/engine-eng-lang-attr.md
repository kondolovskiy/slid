---
id: engine-eng-lang-attr
type: engine
subject: eng
depends_on: [design-eng]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Позначка мови предмета: `targetLang: "en"`, `lang="en"` на змісті уроку, тесту й тренування

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що є
`index.html:2` — `lang="uk"` на всю сторінку; жодного `lang` на елементах (аудит 2026-11-19).

## Що зробити (docs/design/english.md §2)
1. `SLID.subject({ targetLang: "en" })` — нове поле (registry.js; validate: поки лише `"en"`).
2. Для предмета з `targetLang` рушій ставить `lang="en"` на контейнер **змісту** екрана уроку, тесту рівня й тренування (заголовок, текст, варіанти, поля, фідбек); хром рушія (кнопки, меню, службові повідомлення) лишається `lang="uk"`. Назва предмета на головній — українською (з subjects).
3. **Згорнутий український переклад правила** (рішення людини, docs/design/english.md §2 п. 5, §11.2 п. 5): поле екрана теорії `uk: "<p>…</p>"` — блок, закритий за замовчуванням (кнопка «Переклад українською» — хром), `lang="uk"`; лише в розділах 4–5 кл. (validate — engine-eng-validate). Подія журналу: відкрив чи ні (без ПД).
4. Хелпер `isEnglishSubject(subj)` / `subjectLang(id)` у спільному місці (tools/lib.mjs + app), щоб validate, stats і content-checks однаково вимикали українські правила для eng (engine-eng-validate, engine-eng-stats).

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
