---
claimed_from: todo
claimed_at: 2026-11-19T12:21:32.820Z
id: engine-eng-validate
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: review
claimed_by: eng-validate
created: 2026-11-19
source: design-eng
---
# validate.mjs і content-checks.mjs для англійської: англійські правила замість українських, A/B/C

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §2, §6.3, §11.1)
1. Для eng (targetLang) **вимкнути** українські правила: заборонені фрази (style/banned-phrases.txt), рід у звертанні, українські наказові `ASK_RE`, позиційні посилання українською, милозвучність (`EUPHONY`), `OPT_NUM_RE` («другий варіант»).
2. **Увімкнути** англійські відповідники: `ASK_RE` (choose, select, complete, match, find, fill, tick, put, write, which, what…), позиційні посилання («the first option», «the last line»), «option N»; список англійських кальок (style/eng-banned.txt — створює curate-eng-style) як попередження.
3. Кирилиця в змісті eng — попередження (усі тексти англійською, рішення людини); дозволено лише в `credits` і в полі `uk` (згорнутий переклад правила) — а `uk` дозволено лише на неоцінюваних екранах теорії розділів 4–5 кл.
4. **Літери варіантів A, B, C** для eng (`OPT_LETTERS`, validate :44, :345; app.js:981) — з предмета, не глобально.
5. `soon` з тим самим id, що й справжній предмет, — помилка (validate :487).
6. Довжина англійського тексту на екрані — за профілем `eng` (style/eng.md).
7. Тести: tools/test-content-checks.mjs, фікстура eng.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.

## Нотатки (eng-validate, 2026-11-19)
**Коміт:** 1015bd1. Файли: tools/validate.mjs, tools/content-checks.mjs, app/app.js, tools/test-content-checks.mjs, tools/test-validate.mjs, tools/test-ui.mjs, docs/CONTENT_SCHEMA.md (§1, §4). sw.js/index.html/manifest не комічено (build — оркестратор).

**Що зроблено (гілка — `subjectLang(c)`: "" — українські правила як раніше; "en" — англійські; інша мова — правил немає):**
1. Для предмета з targetLang вимкнено: style/banned-phrases.txt, «Пригадай» + ASK_RE, `CC.choiceNoQuestion` / `positionalRefs` українською, `OPT_NUM_RE`, рід у звертанні (екран і why уроку), `latinInCyrillic`, милозвучність (`EUPHONY && !tl`). `sentences()` для довгих речень — з мовою.
2. Англійські: `CC.ASK_EN` (choose, read, select, pick, complete, match, find, fill, tick, put, write, sort, click, tap, mark, circle, underline, guess + which/what/who/whose/whom/where/when/why/how), `POS_EN` (first…last + texts/lines/items/cards/statements/rows; «the first word» — ні), `CC.OPT_NUM_EN` («the second option», «option B/2», «Answer C»; літера лише велика A–H). Кальки — `style/<предмет>-banned.txt` (eng → style/eng-banned.txt від curate-eng-style, 99 фраз); немає файлу — мовчки. Формат як banned-phrases.txt, плюс необов'язкове «фраза → як краще». Спільний парсер `CC.parseBanned` (український список — той самий regex, що й раніше). Для en ще й короткі лапки “…”, ‘…’, "…" (≤ 4 слів) — згадка, не порушення.
3. `CC.cyrillicInEnglish`: екран (checkScreen — уроки, тести, пули), урок (title, why, outro), розділ і розділ плану (title, why, plan), тест (title, why, назви тем). Одне попередження на об'єкт; кирилична літера в латинському слові — з кодом. Не перевіряються uk, credits, службові поля, формули. `uk` не в 4–5 кл. — **помилка** (як решта правил uk). **Рішення про uk і українські правила:** до тексту `uk` застосовую style/banned-phrases.txt і рід у звертанні (D-020) — це українська проза для дитини; решту українських евристик (питання, позиції) — ні, бо uk лише на неоцінюваних екранах.
4. Літери: app/app.js `OPT_LETTERS_LANG={en:"A…Z"}`, `optLetter` бере мову `TL()` поточного предмета (урок, тест, тренування); validate парсить обидва переліки з app.js (помилка завантаження, якщо для мови з TARGET_LANGS літер немає) і вживає їх у ліміті варіантів і повідомленнях D-016.
5. soon з id справжнього предмета й повтор id soon — помилка (повний прогін).
6. Ліміт тексту: профіль уроку вже мав maxText (engine-eng-stats) — тепер попередження називає екран з найдовшим текстом; для завдань тесту рівня й задач пулу — окреме попередження понад верхню межу maxText профілю класу.

**Тести (TDD, спершу червоні):** test-content-checks (+43 перевірки: en п. 10/11, OPT_NUM_EN, кирилиця, parseBanned); test-validate (+блок fxen: чистий розділ, контролі «без targetLang — українське правило спрацьовує / кирилична А», кальки з фікстури style/fxen-banned.txt і без файлу, uk 4/5/6 кл., uk з українськими правилами, літера A у D-016, 27 варіантів > 26, maxText уроку з номером екрана і тесту рівня, кирилиця в темі тесту, soon); старі фікстури uk (fxtl, 8 кл.) переведено на 5 кл.; test-ui сценарій 26 — літери A,B,C в уроці, A,B в тесті й тренуванні, А,Б,В без targetLang.

**Прогони:** `node tools/test-content-checks.mjs` — 144 ok; `node tools/test-validate.mjs` — 1849 ok; `npm run check` — rc 0; `node tools/validate.mjs` — 0 помилок, 230 попереджень, множина попереджень ідентична до зміни (порівняно reports/validate.json); `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 363 ok, 0 ✗. `python3 tools/test-answer-ui.py --suite regression` — не запущено: у контейнері немає Python-модуля playwright (CI, job browser); перевіряє літери АБВ… в ukr/math (letters_cbrt_checks) — поведінка для предметів без targetLang не змінилась.

**Обмеження:** ліміт довжини речення за класом (4–5: ≤ 8 слів, 6–9: ≤ 12; style/eng.md) validate не перевіряє — у profiles.json немає ключа максимальної довжини речення (лише середня sentenceWords у профілі); лишилось «дуже довге речення > 25 слів». figRef/fig-audit — українські сигнали (engine-eng-tools). ASK_EN — евристика: wh-слово будь-де в title/body вважається питанням.
