---
claimed_from: todo
claimed_at: 2026-11-19T13:27:09.630Z
id: engine-eng-build
type: engine
subject: eng
depends_on: [engine-eng-lang-core]
status: done
claimed_by: eng-build
created: 2026-11-19
source: design-eng
---
# Новий тип екрана `build`: речення з плиток-слів

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §5.5)
`{ type: "build", tiles: [...], answer: ["…", "…"], extra: [...] }` — дитина торкає плитки в рядок; кілька правильних порядків; плитки перемішані (`rowOrder`); до 2 плиток-пасток; перевірка — нормалізацією engine-eng-lang-core.
- Рушій (app.js), перевірка, validate (кожен answer = плитки; ≤ 9 плиток), lib.mjs GRADED/TYPES, learn.js DIAG_TYPES/POOL_TYPES (узгодити з engine-eng-diag-pool), playtest.py, журнал (`raw` = зібране речення), доступність (aria-label, клавіатура), 360 px.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.

## Із повторного рев'ю skills-eng (P3-6)
Скіли content-author:59 і content-verify:39 зараз відносять `build` до типів без нормалізації; після реалізації звір і виправ ці рядки (за D-026 — разом з рев'ю).

## Нотатки виконавця (2026-11-19, коміт 383303f)
**Що зроблено.** Новий мовний тип `build` (docs/design/english.md §5.5): `{ type: "build", tiles, answer: "…" | [...], extra?: [...], keepCase? }`.
- `app/lang.js`: `buildSplit` (розклад answer на плитки з поверненням, однакові плитки — за текстом), `buildOk` → `check` (lang "en" — `wordVerdict` над зібраним реченням і ключами без кінцевого `.!?…`; інакше — точно з нормалізацією пробілів і першої літери речення), `solution`, `buildTiles`, `buildText` (raw), `buildMarks` (місця проти найближчого answer), `buildOrder` (перемішування `rowOrder`; tiles ніколи не в правильному порядку — до 12 перемішувань, далі зсув по колу), `issues` (≥ 2 tiles; extra ≤ 2; разом ≤ 9; плитка — непорожній рядок без пробілів на краях, HTML і `$`, без змішаного письма; не всі однакові; кожен answer — усі tiles рівно раз через пробіл, поза плитками лише кінцевий знак і велика перша літера; answer не повторюються; keepCase boolean), `warnings(s, lang)` — пастка extra, яку рушій зарахує на місці плитки (та сама; для en — регістр чи AmE-правопис), `readText` — перший answer. `TYPES` + build.
- `app/app.js`: рядок `#bline` (role=group, aria-live) і банк `.bank .bt` (aria-pressed); дотик/Enter по плитці банку — у рядок / назад, по плитці рядка — прибрати (фокус повертається на плитку банку); «Перевірити» активна, коли в рядку ≥ 1 плитка; позначки по місцях + `#bline` «Речення — правильно/неправильно»; повідомлення «не на своїх місцях або зайві» / «бракує слів»; показ відповіді — усі answer через «або» (`inUi`); `answerSig` — зібране речення; `evRaw` — зібране речення; `evKey.ans` — перший answer; GRADED, gradeNow. Стилі — наявні `.ltext`/`.gopt` + inline (index.html не чіпав: під час паралельної роботи його не комітимо). Плитка ≥ 44×44 px.
- `app/learn.js`: `DIAG_TYPES`, `POOL_LANG` (→ POOL_TYPES, EXPLAIN_TYPES), `G_GRADED` + build; у пулі `answer` для build дозволено (ключ речення). **Узгодження з engine-eng-diag-pool:** допуск типу в тест рівня й пул додано тут (інакше падали інваріанти test-lang/test-learn «кожен мовний тип SLID_LANG.TYPES — у DIAG_TYPES і POOL_TYPES»); **окремі межі для build у тесті рівня/пулі (`DIAG_LANG_LIMITS`, `POOL_LANG_LIMITS`), `match` і сценарії test-ui для build у тесті/тренуванні eng лишаються engine-eng-diag-pool.**
- `tools/lib.mjs` GRADED, `langText` + build; `tools/validate.mjs` — case build, `lang.warnings(s, tl)`; `tools/playtest.py` — відповідь (плитки банку за solution), `lang_seen` (банк = перестановка tiles+extra, рядок порожній, tiles не в правильному порядку), хибна спроба (речення без останньої плитки → `#bline.is-bad`, відкат — прибрати всі плитки рядка).
- Документація: CONTENT_SCHEMA §4.1 (рядок таблиці, приклад, обмеження й попередження валідатора), §9, §10; EVIDENCE.md (raw build); ARCHITECTURE.md. Скіли (P3-6): content-author:58–59 і content-verify:38–39 — build більше не «без нормалізації»: регістр не важить, кінцевий знак необов'язковий, AmE/регістр-пастка зарахується, кожен порядок — в answer.

**Тести (TDD, спершу червоні).** test-lang: +60 перевірок build (check en/без мови, кілька порядків, однакові плитки, регістр, solution, buildText/Marks/Order з детермінованим rnd, issues, warnings); test-learn: пул з build; test-validate: 8 сценаріїв build (чисто з/без targetLang, answer не з плиток, 10 плиток, 3 пастки, AmE-пастка — попередження лише з en, poll); test-ui №28 (360 px, дотик, клавіатура, позначки й aria-label, «та сама відповідь», показ відповіді, кілька порядків, raw/ans у журналі, тест рівня без позначок з OK/BAD, без targetLang — точне порівняння, без горизонтальної прокрутки, плитки ≥ 44 px). Мутанти (без `mark(#bline)`, raw = індекси) — test-ui №28 червоний (2 ✗).

**Прогони.**
- `npm run check` — rc 0 (test-lang 391, test-learn 2951, test-validate 1912 — усе зелене; validate 0 помилок).
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 392 ok, 0 ✗.
- `python3 -m py_compile tools/playtest.py` — ок. playtest.py і test-answer-ui.py локально не запускались (немає Python playwright) — лише CI (job browser); живого змісту з build ще немає, тож гілки build у playtest.py вперше відпрацюють на першому розділі eng з build.

**Обмеження.** Примітка «In British English…» для build не показується (вона лише в word); aria-label «Речення»/«Слова» — українською всередині section lang=en (як наявні split/stress); index.html CSS не змінено — inline-стилі; тест рівня й тренування eng з build у браузері — engine-eng-diag-pool / engine-eng-playtest.

## Виправлення після рев'ю (reports/review/engine-eng-build.md, ea22a3a)
- **P1-1:** test-ui №28 «плитка ≥ 44 × 44 px» і №29 match «кнопки ≥ 44 × 44 px» міряють `offsetWidth/offsetHeight` (розмір розкладки без transform анімації `.screen` «in»), а не `getBoundingClientRect` (43.99998 під час `translateY`).
- **P3-1:** `buildIssues` — помилка для плитки без літери чи цифри (`"?"`, `"…"`): кінцевий знак зрізається з обох боків, тож речення без неї зараховувалось. Тести test-lang (+3: «?» у tiles, «…» в extra, «Yes,» — можна); CONTENT_SCHEMA §4.1 (обмеження).
- P3-2…P3-6 — окрема задача engine-eng-build-p3 (за рішенням координатора).

**Прогони.** `npm run check` — rc 0 (validate 0 помилок). `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 6 прогонів поспіль: усі `433 ok, 0 ✗`. Мутанти на копії в scratchpad (`BTILE="padding:2px 7px"`; у match `MBTN` без `min-height:44px`, `padding:1px 4px`) — `430 ok, 3 ✗`: «build: плитка ≥ 44 × 44 px» і двічі «match: кнопки ≥ 44 × 44 px» (висоти 28 px).
