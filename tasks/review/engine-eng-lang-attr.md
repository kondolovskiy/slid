---
claimed_from: todo
claimed_at: 2026-11-19T11:25:39.586Z
id: engine-eng-lang-attr
type: engine
subject: eng
depends_on: [design-eng]
status: review
claimed_by: eng-lang-attr
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

## Нотатки (eng-lang-attr, 2026-11-19)
**Коміт коду:** 78be412.

**Що змінено**
- `app/registry.js`: `SLID.TARGET_LANGS = ["en"]` (заморожено), `SLID.subjectLang(предмет | id)` → `"en"` / `""` (невідоме значення, регістр, сміття — `""`, без винятку).
- `tools/lib.mjs`: `TARGET_LANGS`, `subjectLang(c)`, `isEnglishSubject(c)` — завантажують app/registry.js у vm (одне джерело з рушієм). Рядок-id у lib — `""` (змісту там немає); для engine-eng-validate / -stats / content-checks передавати об'єкт предмета.
- `app/app.js`: `UI_LANG` (= `<html lang>`), `CL()`, `inL(h, c)`, `inUi(h)`, `uiA()`. Предмет з targetLang: `section.screen` плеєра (урок, тест, тренування) — `lang="en"`; хром усередині (eyebrow тесту, «Тренування · / Повторення ·», `.fix`-інструкції, лічильники/readout, «Підказка:», «Правильно:», «Правильна відповідь:», «Джерело:», `#unsupported`, типова мітка note «Чому дві дати?», типові «Правильно.»/«Не зовсім.»/«Пояснення» тренування) — `lang="uk"`; зміст у панелі (`fbOk`, `fbBad`, `fbText`, `fbTitle`), на підсумках (назва уроку, outro, pollText, learned, назви тем тесту, уроки в «Міцність тем»/recCard/«Варто повторити»/preNote) — `<span lang="en">` за предметом уроку. Без targetLang усі хелпери — тотожність (test-ui перевіряє: жодного `lang` у #stage і #dock).
- Поле `uk` екрана теорії (`intro`/`info`/`explore`) лише в уроці предмета з targetLang: `details.note.uktr lang="uk"`, закрито, «Переклад українською»; подія журналу `uk_open` (`item`) раз на показ екрана.
- `tools/validate.mjs`: `targetLang` поза TARGET_LANGS — помилка; `uk` порожній / на оцінюваному екрані / у тесті чи пулі / у предметі без targetLang — помилка. Обмеження «лише 4–5 кл.» — НЕ тут (engine-eng-validate).
- Docs: CONTENT_SCHEMA §1 (targetLang), §4 (uk), ARCHITECTURE («Мова змісту»), EVIDENCE (`uk_open`).

**Тести (TDD: сценарій test-ui №26 спершу червоний — section lang uk, немає блоку uk)**
- `node tools/test-lang.mjs` — 182 ✓ (нове: registry.subjectLang, TARGET_LANGS, lib = registry, живі предмети без чужих targetLang).
- `node tools/test-validate.mjs` — 1723 ✓ (7 нових випадків targetLang / uk).
- `npm run check` — rc 0 (validate: 0 помилок, 230 попереджень — як до зміни, живий зміст не змінено).
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` (Chromium /opt/pw-browsers/chromium) — 346 ok, 0 ✗ (сценарій 26: урок, тест рівня, тренування, підсумки, uk_open, регресія без targetLang, targetLang "xx").
- `python3 tools/test-answer-ui.py --suite regression` — НЕ запущено: Python-модуля playwright у контейнері немає; лише в CI (job browser).

**Відомі обмеження**
- `aria-label` усередині змісту («Відповідь», «Пропуск N», «Наголос у слові…», «… — правильно/неправильно») — українські, але в елементі з `lang="en"`: диктор читає їх англійським голосом (lang для атрибута не задати). Варіант на потім — винести такі підписи в `aria-labelledby` на прихований `span lang="uk"`.
- Поза плеєром (головна, сторінка предмета, розділ, план, «Тренування») назви уроків і розділів eng ще без `lang="en"` (задача — лише плеєр; recCard і теми тесту на плані вже мають). Пропоную окремий пункт в engine-eng-tools чи follow-up.
- Повідомлення LEARN.formHint/badHint і `msg` після помилки — хром (uk), як і має бути; посилання в них на зміст (одиниці тощо) не розмічені.

**Рецензенту перевірити:** повноту розмітки хрому/змісту в renderScreen, check, startPractice, кінцевих екранах; що для предметів без targetLang HTML плеєра байт у байт як раніше (хелпери повертають вхід); TDZ `C` у `CL()` (C оголошено `let` нижче, хелпери викликаються лише після старту); подію `uk_open` (без ПД, лише item); правила validate для `uk` у пулі/тесті (гілка `diag`) — окремого фікстурного випадку на пул немає.
