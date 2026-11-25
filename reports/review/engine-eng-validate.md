# Рев'ю engine-eng-validate (D-026)

**Перевірено:** коміт 1015bd1 (tools/validate.mjs, tools/content-checks.mjs, app/app.js, tools/test-content-checks.mjs, tools/test-validate.mjs, tools/test-ui.mjs, docs/CONTENT_SCHEMA.md §1, §4) і fb8e13c (нотатки задачі). Порівняння — з 1015bd1^. Рецензент — не автор, свіжий контекст; усі прогони — на чистій копії HEAD (`git archive`) у власній теці scratchpad, робоче дерево не змінювалось (крім цього звіту й задачі).

**Вердикт: прийнято.** Блокувальних знахідок (P1) немає.

## Що перевірено по суті
- **Гілка за мовою.** `subjectLang(c)`: `""` — українські правила без змін; `"en"` — англійські; інша мова — правил немає. Українські правила (banned-phrases, «Пригадай»/ASK_RE, POS_RE, OPT_NUM_RE, рід у звертанні — екран і why уроку, latinInCyrillic, милозвучність) для tl вимкнено; для ukr/math/hist/world — множина попереджень **ідентична** до зміни (230 = 230, різниця 0 в обидва боки, порівняно reports/validate.json HEAD і 1015bd1^).
- **stripS лише з tl.** Англійські лапки “…”, ‘…’, "…" знімаються лише за `tl`; `.map(x => stripS(x, tl))` у bannedText правильний (без обгортки `map(stripS)` індекс масиву став би tl — автор це врахував). Для `uk` — `stripS(s.uk)` без tl, тобто лише «…», як для українського тексту. Правильно.
- **OPT_LETTERS_LANG.** Перевірив регекспове читання з app.js: прибрав `en` — validate завершується `ПОМИЛКА ЗАВАНТАЖЕННЯ: … не має літер для en`; інше форматування (`{ en: "ABC" }`, одинарні лапки) — теж ця помилка, а не мовчазний відкат на кирилицю (fail-closed). Літери в повідомленнях D-016 і ліміті варіантів — `optLetters(c)`.
- **TL() у плеєрі.** `optLetter` має один виклик (app/app.js:1227, рендер opts); `C` ставлять startLesson (:1003), тест рівня (:1014) і тренування (:1057) до рендеру, тож літери в уроці, тесті й тренуванні — з поточного предмета. Мутант «optLetter без мови» test-ui ловить: 3 ✗ (урок, тест, тренування) — літери збігаються з validate.
- **cyrillicInEnglish / FOREIGN_SKIP.** Екран, урок (title, why, outro), розділ і розділ плану, тест і назви тем; uk, credits, службові поля, формули й HTML-сутності пропущено. На живому змісті eng (content/eng/plan.js, 18 розділів плану) — 0 хибних попереджень.
- **Рішення автора про `uk`** (style/banned-phrases.txt і D-020 до тексту uk, без решти українських евристик) — погоджуюсь: це українська проза для дитини, а uk стоїть лише на неоцінюваних екранах теорії, тож правила питань і позицій до нього не стосуються.
- **soon:** дубль id і id справжнього предмета — помилка; на живому catalog.js (лише `nat`) — чисто.
- **style/eng-banned.txt** розбирається `parseBanned` (109 фраз), кожна фраза знаходить саму себе; файлів зі стрілкою «→» двічі немає.

## Знахідки

### P2-1. Ліміт maxText для задач пулу без тесту
tools/validate.mjs:532 — `maxTextItem(…, sectionLessons.get(p.section)?.grade)`. Мутант, що прибирає цей виклик, **виживає** (test-validate і test-content-checks зелені). Шлях відрізняється від тесту рівня (клас береться з розділу через `p.section`, а не з `d.grade`), тож має свій тест: фікстура `SLID.pool` для fxen із задачею, довшою за `maxText` профілю, → попередження «задача 1 … понад maxText». Код я прочитав: `sectionLessons` зберігає `grade`, а `p.section` — справжнє поле пулу, тож поведінка, найпевніше, правильна. Не блокує.

### P3-1. Хибні збіги OPT_NUM_EN
tools/content-checks.mjs:76 — збігається: «Your first answer was close.», «a second answer», «Answer 2 questions about the text.», «The answer A is a noun.». Перші два — природні звороти у fbBad/hint про спробу дитини, а не про позицію варіанта. Це лише попередження, але варто звузити: `answers?` після порядкового числівника — лише з артиклем `the` («the first answer»), а «Answer N» — не перед іменником у множині. Про хибні збіги варто написати в CONTENT_SCHEMA або pitfalls.

### P3-2. Евристики ASK_EN і POS_EN
tools/content-checks.mjs:52 — «read» вважається інструкцією вибору: choice з `title: "Read"` і body-твердженням проходить як «з питанням». wh-слово будь-де в тексті теж рахується питанням (автор це визнає). POS_EN знаходить «the first line of the poem» і «the last items you bought» у поясненні до choice. Межі відомі й описані в нотатках, тож це лише попередження.

### P3-3. `note.links` у cyrillicInEnglish
tools/content-checks.mjs:239 — FOREIGN_SKIP не має `links`, тож українська назва джерела в `note.links` («Типова освітня програма…») дасть попередження. Для eng це може бути легітимне джерело, як `credits`. Варіанти: додати до винятків або описати в CONTENT_SCHEMA, що назву посилання треба давати англійською.

### P3-4. Тести не мають сили для частини перемикачів
Мутанти виживають: (а) прибрано `tl ?` перед genderedAddress екрана й why уроку (validate.mjs:337, :495); (б) `if (!tl) linkNoQuestion` (validate.mjs:334). На англійському тексті ці українські правила й так не спрацьовують, тож перемикачі зараз не мають видимого ефекту і тест їх не відрізняє. Якщо їх лишати, можна додати фікстуру «кирилиця з родом / Пригадай у змісті eng → лише попередження про кирилицю».

### P3-5. Шлях помилки OPT_LETTERS_LANG без тесту
validate.mjs:55–56 — помилка завантаження без літер для мови з TARGET_LANGS працює (перевірено вручну, див. вище), але test-validate її не перевіряє. Регексп чутливий до форматування app.js (пробіли, лапки), тож тест-контроль був би корисний.

### P3-6. CONTENT_SCHEMA §1, §4 — дрібниці
- docs/CONTENT_SCHEMA.md:30 — речення «Відомі межі: `aria-label` … диктор читає мовою змісту» переїхало з абзацу про `targetLang` у кінець абзацу про `SLID.soon`, де воно не до речі. Його варто повернути в абзац про targetLang.
- docs/CONTENT_SCHEMA.md:97 — два дужкові вставки поспіль: «(у предметі з `targetLang: "en"` — A, B, C…) (український алфавіт без Ґ…)». Їх варто переставити: спершу українські літери, потім англійські.
- В нотатках сказано, що перевірка soon працює на «повному прогоні», але насправді цикл soon не залежить від `--section` (validate.mjs, блок `seenSoon`). Поведінка нормальна, неточне лише формулювання.

## Виконані перевірки (рецензент, копія HEAD у scratchpad)
- `node tools/test-content-checks.mjs` — 144 ok.
- `node tools/test-validate.mjs` — 1849 ok.
- `node tools/validate.mjs --quiet` — 0 помилок, 230 попереджень; на 1015bd1^ — 0 / 230; множини попереджень однакові (0 зникло, 0 додалось).
- `npm run check` (копія з `git init` для test-diff-answers) — rc 0.
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 363 ok, 0 ✗.
- Мутанти (19 у validate.mjs; запуск test-validate + test-content-checks): тести вбивають 15, виживають M6 (пул maxText; P2-1), M11/M11b (рід із tl), M15 (linkNoQuestion із tl; P3-4). Убито: stripS для en, uk + banned, uk + рід, bannedFor, soon (обидва), maxText тесту рівня, кирилиця (розділ/урок/тест), positionalRefs з мовою, літери D-016 і ліміт, OPT_NUM_EN, uk 4–5 кл., український список для en, cyrillicInEnglish замість latinInCyrillic.
- Мутант app.js `optLetter` без мови → test-ui 3 ✗ (урок, тест, тренування).
- OPT_LETTERS_LANG: без `en` / з пробілами / з одинарними лапками → помилка завантаження validate.
- Регекспи перевірено на прикладах (P3-1, P3-2), cyrillicInEnglish — на `accept`, `fig.label`, `lab`, `note.links`.

## Не перевірено
- `python3 tools/test-answer-ui.py --suite regression`: Python-модуля playwright у контейнері немає, тож лише в CI (job browser). Там перевіряються літери АБВ в ukr/math. Що для предметів без targetLang нічого не змінилось, видно з коду: `OPT_LETTERS_LANG[""]` — undefined, отже лишається OPT_LETTERS. test-ui це теж підтверджує («без targetLang: А, Б, В»).
- Плейтест розділів eng: уроків eng ще немає.
- Обмеження довжини речення за класом зі style/eng.md (≤ 8 / ≤ 12 слів) validate не перевіряє — автор це назвав обмеженням, у profiles.json потрібного ключа немає.
