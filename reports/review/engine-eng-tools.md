# Рев'ю engine-eng-tools (D-026)

**Рецензент:** engineering-reviewer (не автор), 2026-11-19, свіжий контекст.
**Перевірено:** c7dac45 (make-tasks.mjs, lib.mjs `noPool`/`figCues`, validate.mjs `figRef(lang)`, fig-audit.mjs, personalization-qa.mjs, playtest-pick.mjs, тести test-make-tasks/test-validate/test-personalization-qa/test-playtest-pick, фікстура `tools/fixtures/make-tasks/content-eng/`, docs/CONTENT_SCHEMA.md §2, §10), 420d0ef (нотатки) і рядок AGENTS.md §3 у a52a6c8.

## Вердикт: **прийнято**

Блокувальних (P1) знахідок немає. Одна P2 (регресія на CRLF), яку краще закрити до злиття гілки, і кілька P3.

## Знахідки

### P2-1. Frontmatter із CRLF не читається: дедуплікація за `id` регресувала, за `section` не працює
`tools/make-tasks.mjs:37`: `match(/^---\n([\s\S]*?)\n---/)`. Коли файл задачі має CRLF (`---\r\n…`), regex не збігається, `head = ""`, і в `fm` для цього файлу всі поля `undefined`.
- **Регресія:** до c7dac45 `existingIds` шукав `^id:\s*(\S+)` по всьому файлу, тож CRLF працював. Відтворення в копії: у `tools/test-make-tasks.mjs:35` замінив `\n` на `\r\n` у фікстурі `pool-zz3-renamed.md`. HEAD дає 3 з 101 провалів («задача за id у frontmatter (перейменований файл)…», «fixture dry-run: лише zz1 і zz9», «--grade 8: створено лише zz1»), бо створює дублікат `write-math-pool-zz3`. Версія c7dac45^ на тій самій фікстурі ці перевірки проходить.
- **Нова дедуплікація:** перейменований CRLF-файл `---\r\nid: write-eng-g5-e5s1\r\ntype: write-section\r\nsubject: eng\r\nsection: e5s1\r\n---` → `make-tasks --subject eng --grade 5 --dry-run` усе одно пропонує `write-eng-g5-e5s1.md` (10 задач замість 9).
- Зараз у `tasks/` файлів із CRLF немає, а імена задач eng збігаються з тими, що генерує make-tasks, тож дублікатів на живій черзі немає (дедуплікація за іменем файлу спрацьовує). Ризик з'являється при checkout на Windows з `core.autocrlf=true` (`.gitattributes` немає), а AGENTS.md пишуть і для інших агентів.
- **Очікувано:** `/^---\r?\n([\s\S]*?)\r?\n---/` і тест із CRLF-фікстурою. Для `v(k)` змін не треба: `\S+` на `\r` не заходить. `doneIds` у `writePoolLang` (make-tasks.mjs:258) досі шукає по всьому файлу. Це працює, але читає frontmatter не так, як `fm`.

### P3-1. Англійські сигнали figCues: пропуски й хибні збіги (лише попередження)
Пробник на `figCues(…, "en")` (`lib.mjs:280-282`):
- **Пропуски (ref не спрацьовує):** «Look at my family photo», «Look at Tom's photo», «Look at picture A». Присвійних (my/your/his/her/our/their, `X's`) і літерних номерів немає, а в уроках англійської 4–5 кл. вони типові. Можна додати присвійні до визначників і `(?:picture|photo)\s+[A-Z]\b`.
- **Хибні збіги:** «I am in the drawing club» → ref «in the drawing» (`drawing` як герундій); «She can skate a figure 8» → ref «figure 8».
- Перевірене, що працює правильно: «Look at the end of the word», «Look at the sentences», «Draw a picture…», «Make a mind map…» і «taking photos» не спрацьовують; «on the poster», «under the picture», «Use this map», «Read the bar chart», «photo 3» спрацьовують.
- Незмінність ukr/math: `figCues(s)` і `figCues(s, null, "")` дають ідентичний результат. Англійські сигнали без `lang` не діють. Вихід `playtest-pick` на живому змісті збігається з c7dac45^ байт-у-байт (md5). Згенеровані задачі пулів ukr і math (порожня тека задач) однакові для старої й нової версій (`diff -r`), різниця лише в рядку підсумку («noPool чи»).

### P3-2. Шаблон задачі розділу eng трохи бідніший за еталонну `tasks/todo/write-eng-g5-e5s1.md`
Згенерований `write-eng-g5-e5s1` (порожня тека задач) за структурою, frontmatter (`id/type/subject/grade/section`), D-054, британською нормою, «без звуку», власними текстами, словниками й style/eng.md узгоджений з еталоном і зі скілами. Чого бракує: переліку типів екранів (gaps, pick, word, split, stress, build/match «якщо вже є в рушії»), пункту «4 клас робимо» в рядку рішень і орієнтира обсягу (≈ 5–7 уроків + boss; останнє частково покривають теми з плану). Блоком це не є.

### P3-3. Дрібне
- `make-tasks.mjs:55,264`: імена задач розгалужуються за `subjectLang(c)`, а шаблон — за `isEnglishSubject(c)`. Якщо колись з'явиться предмет із `targetLang`, відмінним від `en` (зараз `TARGET_LANGS` його відкидає, тож `subjectLang` = ""), він отримає імена `g<клас>` з українським шаблоном. Зараз недосяжно.
- `v(k)` бере `\S+`: значення в лапках (`section: "e5s1"`) чи списком (`section: ms3, ms4`) з розділом не зіставиться. Серед `write-section`/`write-pool` таких немає.
- Жорстко вписана залежність `engine-eng-diag-pool` у шаблоні пулу (`make-tasks.mjs:261`) узгоджена з наявною задачею `tasks/todo/write-eng-pool-g5-e5s1.md` (`depends_on: [… engine-eng-diag-pool …]`) і з прецедентом `engine-pool-lang` для ukr. Коли задача буде в done, вийде `depends_on: []`, як і в ukr.
- validate не перевіряє тип `noPool` (не-boolean тихо ігнорується). Автор про це написав. Можливе правило validate на потім.

## Відповіді на питання автора
- **Повнота дедуплікації:** ім'я файлу (новий і старий формат), `id` і `type + subject + section` діють. Задача пулу не блокує задачу розділу, задача іншого предмета теж (мутанти нижче). CRLF див. у P2-1.
- **Гілка за мовою змісту:** рушій (`app/`) не змінено. Розгалуження лише в `tools/` через `subjectLang`/`isEnglishSubject` з реєстру, без перевірок на `c.id === "eng"`, крім таблиць `LANG_POOL`/`exemplar` за id (так само, як для ukr).
- **validate.mjs поза переліком:** три виклики `figRef` отримують `subjectLang(c)`. Для предметів без мови змісту поведінка та сама (test-validate зелений; мутант нижче).
- **AGENTS.md §3:** рядок відповідає коду.

## Виконані перевірки (власні; копія HEAD a52a6c8 у scratchpad, `git archive` + `git init`)
- `npm run check`: rc 0 (test-make-tasks 101/101, test-diff-answers 55 ok, validate, graph-report, stats, fig-audit).
- `make-tasks --dry-run --tasks <копія tasks>` без `--subject` і з `--subject eng|ukr|math|hist|world`: усюди 0. `--write-pool --dry-run --subject ukr|eng|math`: 0 (ukr: 79 «задача вже є», 7 noPool; eng: 0 розділів з уроками; math: 50 «задача вже є»). Стара версія make-tasks на тій самій черзі дає 18 дублікатів `write-eng-e4s1.md…`.
- `make-tasks --subject eng --tasks <порожня>`: 18 задач `write-eng-g{4,5}-*.md`; шаблон звірено з наявною задачею (P3-2).
- Мутанти (усі вбиті): без `hasTaskFor` для розділу (2 провали) і для пулу (3); `hasTaskFor` без subject (18) і без type (2); `noPool` вимкнено в режимі пулів (7); `noPool` лише за назвою (make-tasks 3, test-personalization-qa падає); імена eng у старому форматі (18); залежність завжди `engine-pool-lang` (2); `figRef` у validate без lang (test-validate 1); fig-audit без lang (1); `cover` без `subjectLang` (test-playtest-pick 1); personalization-qa без перевірки noPool (AssertionError).
- CRLF-відтворення: P2-1.

## Не перевірено
- Браузерні прогони (test-answer-ui, test-ui, playtest): `app/` не змінено. Зміни playtest-pick покриті юніт-тестом, а вихід на живому змісті не змінився.
- Злиття `noPool` з plan.js у реєстрі перевірено лише через фікстуру test-make-tasks (мутант M3), окремо в app/registry.js не читав.
- Поведінку `figCues` en на справжньому змісті eng не перевіряв: уроків eng ще немає (є лише `content/eng/plan.js`).
