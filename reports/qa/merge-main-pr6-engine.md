# Злиття origin/main (PR #5) у PR #6 — рушій, інструменти, документація

Дата: 2026-10-30. База злиття 54225a6, наше (HEAD) 05d4ef0, main (MERGE_HEAD) 9966f7f.
Обсяг: app/app.js, app/learn.js, tools/validate.mjs, tools/playtest.py, tools/test-learn.mjs, tools/test-answer-ui.py,
docs/CONTENT_SCHEMA.md, docs/PERSONALIZATION.md, docs/PERSONALIZATION_QA.md, index.html, а також згенеровані sw.js і content/manifest.json.
Контент 4 класу (diag-g4, pool-g4-g4m1, pool-g4-g4m2, pool-g4-m4s1) змістово НЕ розв'язано: для прогонів тимчасово взято версії main
(`git checkout --theirs`), у індекс не додано — це робота окремого агента.

## Рішення по файлах

### app/learn.js
- **Baseline — main**: `level()` (`base` — boolean «усі слабкі — baseline», тексти k=0/1/2 разом із порадою для k=2), `buildPlan()` з `plan.base[].next`, `validate()` (заборона baseline при уроках молодших класів — `younger`, з id прикладів).
- **Сумісність збережених планів (нове)**: `baseCompat()` у `planFor()` — для `base[]` без `next` ставить `next = l ?? null`; поле `l` не видаляється. Працює і для плану з класом (`planByGrade`), і без класу.
- **З нашої сторони збережено** (злилося автоматично): перевірка `for — у розділі … немає уроків, нікуди вести` (спрацьовує, коли validate.mjs передає `sections[].lessons`).
- **divrem — main без змін**: `parseDivrem`, гілка в `checkAns`, заборона `unitForms` для divrem.
- **Сім форматів — наші повністю**: аналізатор, `checkAns`/`checkAns0` з межами 2048 біт / ~0,8 с, `formHint`, `ansText`, `validatePool` (`form`, `exactRoot`, `intervalSet`, `reduced` для ratio).
- `ANSWER_KINDS` = number, comparison, list, factors, **divrem**, ratio, coordinates2, coordinates3, exactRoot, intervalSet, expression, periodicSet. Повідомлення валідатора пулу будується з цього списку.
- `formHint` і `ansText` доповнено divrem («Неповну частку знайдено. Допиши остачу…», «3 (ост. 2)»), щоб app.js брав підказку «form» з одного місця.
- Експорт: `parseAns, parseDivrem, checkAns, formHint, ansText, ANSWER_KINDS, …`.

### app/app.js (основа — main, поверх — наші формати)
- Baseline-UI — main (`baseTopics`, `baseStart`, `baseRow`, `baseBlock`, планова картка, «До першого уроку», текст інтро тесту).
  Наші `baseGaps/baseNext/baseCard/baseHtml` прибрано.
- `baseTopics` читає `next: b.next ?? b.l ?? null` (дубль сумісності на рівні UI).
- `planCtx.sections[].lessons` — без boss (як було в нас і як у validate.mjs), щоб `next` не вказував на boss.
- Формати: `ANS_UI`, кнопки/підказки в `answerInput` (divrem-кнопка «ост.» і `inputmode=numeric` з main лишились), `.anskeys.sym`
  з вставкою в місце курсора, «k ∈ ℤ» для periodicSet, `autocapitalize/spellcheck off`; показ ключа через `LEARN.ansText` для символьних
  форматів (divrem — гілка main «q (ост. r)»); підказка «form» — `LEARN.formHint` для всіх видів (зокрема divrem).

### tools/validate.mjs
- Наш `subjectMaps(c)`: уроки й розділи лише свого предмета, розділи з `lessons` (без boss). Це надмножина варіанта main (main брав уроки предмета, але розділи всіх предметів).
- D-027 (`IMG_REQUIRED.hist = "warn"`, попередження «урок без зображення img (D-027…)») — збережено (94 попередження в повному прогоні).

### tools/playtest.py
- Основа main (заповнення divrem/масивів, перевірки `base`, `pre_base`, «перший урок класу не відкрився»).
- Додано з нашої: помилка, якщо після «усе пропущено» baseline-прогалина без `next`. Масив `ratio` вводиться через « : ».

### Тести
- **test-learn.mjs**: розділи main «12. divrem» і «11. Baseline» повністю; наш дубль baseline-блоку прибрано; додано «11б» — те, чого бракувало main:
  `for` у розділ без уроків, найтерміновіший розділ для `next`, `syncPlan` поряд із base, змішаний тест (звичайна pre + baseline) → звичайний текст,
  **сумісність планів з `l`** (4 перевірки). Тест `ANSWER_KINDS` тепер звіряє повний список із divrem; додано `formHint`/`ansText` для divrem. 780 перевірок.
- **test-answer-ui.py**: `baseline_checks` і `divrem_checks` — main (його baseline-сценарій ширший: ok/skip/mixed, повернення до плану, повторний тест);
  наш fixture-сценарій dg4 прибрано як дубль, бо його останнє твердження («картка зникає після першого уроку») суперечить поведінці main
  (`baseStart` веде на наступний непройдений урок). `answer_format_checks` — наш. Новий `baseline_compat_checks`: план із `base[].l` веде на урок у картці й у плані.
- test-personalization-qa.mjs злився автоматично.

### Документація
- CONTENT_SCHEMA §9: текст main + речення про `for` (той самий предмет, є уроки), `plan.base = [{topic, why, next}]`, сумісність `next ?? l`, приклад теми.
  §10: рядок divrem (main), потім наш блок символьних форматів.
- PERSONALIZATION.md: розділ «Baseline» main; наш дубль-абзац прибрано; додано сумісність `l` і вимогу до `for`; абзац про divrem перед абзацом про сім форматів.
- PERSONALIZATION_QA.md: текст main + `baseline_compat_checks`, `divrem_checks`, `answer_format_checks`.
- index.html: CSS `.anskeys.sym` (наш) збережено; блок скриптів, sw.js, content/manifest.json — перегенеровано `node tools/build.mjs`.

## Результати перевірок (після злиття)

| Команда | Результат |
|---|---|
| `node tools/build.mjs` | 114 скриптів, sw.js 201 файл |
| `node tools/test-learn.mjs` | 780 перевірок, усе гаразд |
| `node tools/test-personalization-qa.mjs` | 27 checks green |
| `node tools/test-math.mjs` | 17/17 |
| `node tools/test-lab.mjs` | 69/69 |
| `node tools/test-metrics.mjs` | 20 перевірок |
| `node tools/validate.mjs --quiet` | 0 помилок, 349 попереджень |
| Диференційна регресія checkAns (scratchpad/eng/reg-merge.mjs), 17 пулів content/math/pool-*.js, 520 answer-вправ (number 494, comparison 14, list 9, divrem 3) | ключі: 0 не «ok»; 9360 варіантів запису — 0 розбіжностей з learn.js main і 0 з learn.js PR #6 (для не-divrem) |
| `python3 tools/playtest.py --section dg4` / `dg5` / `m4s1` | exit 0 |
| `python3 tools/test-answer-ui.py --browser /opt/pw-browsers/chromium` (повний) | exit 0: 3 діагностики, 17 пулів, 535 вправ; усі regression-сценарії green |
| `python3 tools/test-answer-ui.py --suite regression` (повторно після останньої правки planCtx) | exit 0 |
| маркери конфлікту в коді/доках | немає |

Повний прогін test-answer-ui: «Реальні об’єкти: 3 діагностик, 17 пулів, 535 вправ», далі dg4 baseline fixture ok/skip/mixed, baseline compat, формати відповідей (10 fixture-вправ), divrem fixture — «Обрані браузерні сценарії: green». Під час повного прогону в app.js змінено одну річ (boss-фільтр у `planCtx`), тож regression-набір прогнано ще раз на фінальному коді — green.

## Відкриті ризики
- Символьних форматів у реальних пулах ще немає (7–11 класи не написані), тож диференційна регресія їх не покриває; їх покривають test-learn і `answer_format_checks`.
- Контент 4 класу в конфлікті add/add; прогони виконано на версіях main. Після змістового злиття (окремий агент) треба повторити validate, playtest dg4/m4s1 і test-answer-ui `--grade 4`.
- `baseCompat` дописує `next` у збережений об'єкт плану (поле `l` лишається): відкат на стару збірку PR #6 продовжить читати `l`.
- Наша UX-поведінка «картка baseline зникає після першого уроку» замінена поведінкою main (веде на наступний непройдений урок розділу) — свідоме рішення за правилом «baseline — main».
- Незалежне рев'ю цього злиття ще не проведено (AGENTS.md §3.10).
