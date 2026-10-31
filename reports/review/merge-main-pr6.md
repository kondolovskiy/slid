# Рев'ю: злиття origin/main (PR #5) у PR #6 — рушій, інструменти, тести, документація

- Рецензент: незалежний агент engineering-reviewer (AGENTS.md §3.10, §4; D-026). Реалізацію не писав.
- Дата: 2026-10-30.
- Коміт: `6a66b68` («Злити main (PR #5) у PR #6: найкраще з обох»), батьки `05d4ef0` (PR #6, наша сторона; містить `b5df4b1`) і `9966f7f` (main). База злиття `54225a6`.
- Обсяг: app/app.js, app/learn.js, tools/validate.mjs, tools/playtest.py, tools/test-learn.mjs, tools/test-answer-ui.py, tools/test-personalization-qa.mjs, docs/CONTENT_SCHEMA.md, docs/PERSONALIZATION.md, docs/PERSONALIZATION_QA.md. Зміст 4 класу (diag-g4, пули) — поза обсягом, лише як вхід для прогонів.
- Звіт інтегратора: reports/qa/merge-main-pr6-engine.md.

## Вердикт: **прийнято**

Блокувальних знахідок (P1/P2) немає. Нижче — P3: рекомендації, що не заважають закрити задачу.

## Як перевіряв, чи нічого не загубилося

Для кожної сторони взяв усі додані рядки з `git diff -U0 54225a6 <сторона>` у файлах обсягу й пошукав кожен рядок у `6a66b68` (скрипт `scratchpad/review-merge/lost.sh`). Рядки, яких у злитті немає, розібрав вручну:

- **main (19 рядків)**: усе — старі варіанти, які злиття замінило еквівалентом або надмножиною. Це `planCtx` (додано фільтр boss), `baseTopics` (додано `next ?? l`), `answerInput`/кнопки/reveal (розширено `ANS_UI`, а гілки divrem збережено дослівно), підказка «form» для divrem (тепер `LEARN.formHint`, текст той самий), старий білий список `answerKind` (тепер `ANSWER_KINDS` з divrem), експорт (додано `formHint/ansText/ANSWER_KINDS`), `sectionGrade`/`own` у validate.mjs (замінено на `subjectMaps`), ввід масиву в playtest (додано ratio), два абзаци доків (доповнено).
- **PR #6 (136 рядків, без index.html)**: baseline-UI PR #6 (`baseGaps/baseNext/baseCard/baseHtml`, інтро «Наприкінці — твій план…», «Почати з першого уроку») і baseline-частини learn.js (`l`, `onlyBase`, `firstOf`, строгий `baseline !== true`) свідомо замінено на main. Старий блок «12. baseline» у test-learn і fixture dg4 у test-answer-ui теж прибрано — їхнє покриття розібрано нижче. Символьні формати не втратили жодного рядка.
- `git diff b5df4b1 6a66b68 -- app/learn.js` дає 85 рядків змін, і всі вони — baseline/divrem/коментарі. Аналізатор, `checkAns0`, межі `BIG = 1n << 2048n`, `DEADLINE`, `BUDGET`, `canonExact`, `form`/`EXPR_FORMS`, `exactRoot`, `intervalSet`, `reduced` для ratio лишилися без змін.
- divrem з main присутній повністю: `parseDivrem`, гілка `checkAns` (learn.js:753), заборона `unitForms` (learn.js:847), `ANSWER_KINDS` (learn.js:826), кнопка «ост.» і захист від повторної вставки, `inputmode=numeric`, `oninput` (app.js:832–837, 892–895), reveal «q (ост. r)» (app.js:923), playtest.py:40–41, test-learn «12», `divrem_checks`.
- D-027: `IMG_REQUIRED.hist = "warn"` (validate.mjs:109, 129), docs/IMAGES.md — на місці. Повний validate дає 349 попереджень, з них частина — D-027.

## Пункти завдання

1. **Нічого не втрачено.** Див. вище. Диференційна регресія `checkAns`: 17 пулів, 535 вправ, 520 типу answer (number 494, comparison 15, list 8, divrem 3), 6243 варіанти запису. Ключ проходить сам себе у 520 з 520. Розбіжностей з learn.js main `9966f7f` — 0. Розбіжностей з learn.js PR #6 `b5df4b1` для не-divrem — 0. Для кожного «form» `formHint` повертає непорожній рядок. Скрипт: `scratchpad/review-merge/reg.mjs`.
2. **`baseCompat` у `planFor` (learn.js:15, 19, 31).** Для `base[]` без `next` ставить `next = l ?? null` і не видаляє `l`. Явний `next` (зокрема `null`) не перезаписує. Плани без `base` не чіпає (`p?.base || []`). Перевірив окремо (`scratchpad/review-merge/compat.mjs`):
   - старий `S.plan` без `planByGrade` при `S.grade = 4` мігрує в `planByGrade[4]`, `next` проставлено;
   - план dg6 без `base`: `todo` працює;
   - зіпсовані елементи `base` (`null`, число, рядок замість масиву) не кидають винятку;
   - перемикання 5 → 4 клас: план 4 класу читається з `next`.

   Повторний тест (`finishDiag` → `buildPlan`) будує новий `base` з `next`. Старі плани не ламаються.
3. **boss-фільтр (app.js:20).** `sections` з `planCtx` читає лише `buildPlan`, щоб вибрати `next`, а `learnCtx` бере звідти тільки `hasLesson/order`. Тож фільтр означає одне: `next` ніколи не вказує на boss і не падає на розділ, де є лише boss. Це збігається з `subjectMaps` у validate. `baseStart` (main) і далі може повести на boss, коли звичайні уроки розділу пройдено. Так і має бути: boss — наступний урок.
4. **Суворіший `subjectMaps` (validate.mjs:138–149).** Уроки й розділи лише свого предмета, `sections[].lessons` без boss. Це надмножина перевірок main: `for` на розділ іншого предмета тепер дає помилку «немає розділу». Перевірка «у розділі … немає уроків, нікуди вести» (learn.js:896) спрацьовує лише для baseline і лише тоді, коли передано `lessons`. Повний прогін: 0 помилок, тобто чинний зміст не зламано.
5. **`formHint`/`ansText` для divrem (learn.js:666, 676)** — тексти збігаються з колишнім вбудованим текстом main. app.js бере підказку «form» з `LEARN.formHint` для всіх видів (app.js:948). Reveal для divrem іде окремою гілкою main, для символьних — через `LEARN.ansText`. Браузерний `divrem_checks` і `answer_format_checks` — зелені.
6. **Тести.** test-learn: 780 перевірок. Блок «11» (main) і «11б» покривають усе, що перевіряв прибраний блок PR #6:
   - валідатор baseline: з уроком, без `for`, `cur`, `item.lesson`, звичайна `pre` без уроків, молодші класи, `for` на розділ без уроків;
   - найтерміновіший розділ, недоступний урок, `null` без розділів;
   - `lessonDone` не закриває прогалину, повторний тест закриває;
   - `syncPlan` поряд із `base`, змішаний текст;
   - сумісність `l` → `next` (4 перевірки).

   Fixture dg4 з PR #6 прибрано обґрунтовано: `baseline_checks` main ширший (ok/skip/mixed, вхід в урок, повернення, картка, повторний тест). Хибно-зеленого не знайшов: кожен сценарій має позитивні твердження про `base`, `next`, кнопки й тексти, а не лише відсутність помилок.
7. **UI картки baseline.** Обрано поведінку main: `baseStart` (app.js:30–31) веде на перший непройдений відкритий урок розділу `next`. Картка лишається до повторного тесту. Це узгоджено з докою (PERSONALIZATION.md, CONTENT_SCHEMA §9) і з «base закривається лише тестом».

## Знахідки

- **P3-1. Подвійний шар сумісності маскує тест (app.js:28, test-answer-ui.py:556).** `baseTopics` сам робить `next: b.next ?? b.l ?? null`. Тому браузерний `baseline_compat_checks` пройшов би й без `LEARN.baseCompat`, тобто як доказ саме `baseCompat` він не годиться. Рушійний шар покриває лише test-learn «11б». Рекомендація: лишити один шар (достатньо `planFor`) або явно описати в коментарі, що браузерний тест перевіряє UI-шар.
- **P3-2. Немає браузерної перевірки картки після *пройденого* першого уроку.** PR #6 перевіряв стан після `done`. Main перевіряє лише відкриття уроку, а не завершення. Поведінка main «веде на наступний непройдений урок» (`baseStart`) у браузері не покрита — лише читанням коду. Рекомендація: у `baseline_checks` позначити `start` пройденим і перевірити, що картка веде на наступний урок розділу, а `base` не змінився.
- **P3-3. Послаблено `baseline` (learn.js:880).** Раніше (PR #6) дозволялося лише `true` або відсутнє поле. Тепер дозволено будь-який boolean, і `baseline: false` = звичайна тема. Це свідомий вибір main, тест є («baseline має бути boolean»). Лише зауваження.
- **P3-4. Сумісність збережених даних PR #6 — тільки поле `base[].l`.** Порядок завдань у злитому `diag-g4` (=main) відрізняється від PR #6 (`05d4ef0`), а `S.diag[dg4].res` і `diagRun` прив'язані до індексів завдань. Профіль, що проходив тест на збірці PR #6, після оновлення прочитає старі відповіді не до тих завдань. Публікується лише main (pages.yml: `branches: [main]`), а порядок main збережено, тож для реальних учнів ризику немає. Але твердження «плани PR #6 сумісні» стосується лише `l`/`next`.
- **P3-5.** `node tools/validate.mjs` змінює `reports/validate.json` (лише поле `date`). Після мого прогону файл лишився зміненим у робочому дереві. Git-операцій я не робив, тож вирішити це має оркестратор.
- **P3-6.** Немає модульного тесту, що `subjectMaps` відкидає розділ, де є лише boss: дорогу до помилки «нікуди вести» видно тільки з коду. Перевірки з фіктивними `sections` у test-learn її не торкаються.

## Виконані перевірки (власний прогін)

| Команда | Результат |
|---|---|
| `node tools/test-learn.mjs` | 780 перевірок, усе гаразд |
| `node tools/test-personalization-qa.mjs` | 27 checks green |
| `node tools/test-math.mjs` | 17/17 |
| `node tools/validate.mjs --quiet` | 0 помилок, 349 попереджень |
| `node tools/build.mjs`, потім `git status` | 114 скриптів, sw.js 201 файл; змінено лише reports/validate.json (поле `date`) |
| Диференційна регресія `checkAns` (`scratchpad/review-merge/reg.mjs`) проти `9966f7f` і `b5df4b1` | 520 answer-вправ, 6243 варіанти: 0 / 0 розбіжностей, 0 битих ключів |
| Сумісність `planFor` (`scratchpad/review-merge/compat.mjs`) | legacy, без base, зіпсовані дані, перемикання класу — коректно |
| `python3 tools/test-answer-ui.py --browser /opt/pw-browsers/chromium` (повний) | exit 0: 3 діагностики, 17 пулів, 535 вправ; dg4 baseline ok/skip/mixed, baseline compat, формати (10 fixture), divrem — green |
| `python3 tools/playtest.py --section dg4` | exit 0 |

Журнал UI: `/tmp/claude-0/-home-user-slid/019b4ace-7221-55df-8577-39871bfa5ec5/scratchpad/review-merge/ui.log`.

## Неперевірене

- Символьні формати на реальних пулах: пулів 7–11 класів ще немає. Їх покривають лише test-learn і fixture `answer_format_checks`, межі 2048 біт / ~0,8 с — лише ці тести.
- Не перевіряв playtest для інших розділів, test-lab, test-metrics.
- Змістову правильність злитого контенту 4 класу.
- Ручну перевірку UI на мобільному пристрої.
