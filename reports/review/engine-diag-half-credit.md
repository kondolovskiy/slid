# Рев'ю: engine-diag-half-credit

- Рецензент: engineering-reviewer (свіжий контекст, реалізацію не писав), 2026-11-01.
- Гілка `wt-half`. Діапазон: `git diff b799dfa eb3ac42` (01acba8 реалізація, b51ddf9 злиття Evidence V2, 0fb479f, f9caa33, eb3ac42 «копія кореня → HALF»).
- Файли: app/app.js, app/learn.js, tools/validate.mjs, tools/diff-answers.mjs, tools/test-learn.mjs, tools/test-validate.mjs, tools/test-answer-ui.py, docs (PERSONALIZATION, CONTENT_SCHEMA §9, EVIDENCE).

## Вердикт: **прийнято**

Блокувальних знахідок (P1/P2) немає. Поведінка відповідає рішенню людини й методичному правилу задачі; зміни поза тестом рівня не виявлено. Три P3 — на розсуд автора, можна разом з наступною правкою.

## Що перевірено і як

| Що | Як | Результат |
|---|---|---|
| Збірка | `node tools/build.mjs` | змінює лише `VERSION` у `sw.js` (86640f8492 → 78b004fef5). Коміти build-артефактів не містять. За AGENTS §3.7 build під час паралельної роботи запускає оркестратор, тож це не дефект автора. Перед злиттям потрібен build і коміт `sw.js`, інакше PWA лишиться на старому кеші. Мій прогін відкочено |
| `npm run check` | прогін у worktree | rc 0: test-learn 2241, test-evidence 119, personalization-qa 105, test-validate 639, test-make-tasks 22; validate 0 помилок / 254 попередження (як до змін) |
| personalization-qa `--strict --grade 4..11` | 8 прогонів | rc 0 усі |
| `diff-answers --old b799dfa --grades 4-11` | 1246 вправ, 48615 записів | усі категорії checkAns = 0, НЕПОЯСНЕНІ 0 (**lesson-side без змін**; `checkAns`/`formHint`/`badHint` у diff не змінено). Блок «half» (39769 записів): 105 OK→HALF (вимаганий вигляд), 1623 BAD→HALF (корінь), непояснених 0 |
| `diff-answers --content-old b799dfa --grades 4-11` | | змінених вправ 0, НЕПОЯСНЕНІ 0, rc 0 (без `--old`: прапорці взаємовиключні) |
| `test-answer-ui.py --suite regression` (/opt/pw-browsers/chromium) | | rc 0, «Обрані браузерні сценарії: green», зокрема half-credit, decisions-1101, diag answer, Evidence, gen/SRS |
| Ручні проби `diagVerdict` | скрипти `scratchpad/half-rev-probe/{p,q,r}.mjs` | див. нижче, хибних HALF/OK не знайдено |
| Мутанти learn.js / validate.mjs | копія `git archive eb3ac42` у `scratchpad/half-rev-mut`, `half-rev-probe/mut.py` | 23/23 вбито |
| Мутанти app.js (браузер) | `half-rev-probe/mutapp.py` + `ui_one.py` (half_credit, decisions_1101, diag_answer, evidence) | 8/8 вбито |

### Проби вердикту (власні, не з тестів автора)
- reduced «3/4»: `6/8`, `9/12`, `0,75`, `0,750`, `6/8 кг` (з unit) → HALF з правильним formHint; `3/4`, `+3/4`, `x = 3/4`, ` 3/4 `, `3 / 4` → OK; `1/2`, `-3/4`, `3:4`, `3/4.`, `3/4 г` → BAD. Неправильне значення HALF не дає.
- mixed «8/3»: `8/3`, `16/6`, `2,(6)`, **`1 5/3`** → HALF («запиши мішаним числом»): вимаганого вигляду немає, значення правильне, тож це відповідає правилу. `2 4/6` → OK (скорочення mixed не вимагає), з `reduced` → HALF. `2,67`, `3 -1/3` → BAD.
- improper «2 2/3»: `2 2/3`, `2,(6)` → HALF; `8/3`, `16/6` → OK.
- корінь, ключ 24: `√576` (копія з умови, MSG.rootCopy), `2√144`, `4√36`, `∛13824`, `sqrt(576)`, `√(2·288)`, `√576+0` → HALF; `√577`, `-√576`, `√576 см` (без unit) → BAD. Ключ −24: `√576` → BAD, `-√576` → HALF. Дробові ключі (`√(9/16)` при 3/4) → HALF. Корінь, що не дорівнює ключу, HALF не отримує ніколи: гілка вимагає `rootNum(t, a)`, тобто точної рівності.
- compound 245 (м, см): `245 см`, `2,45 м`, `24,5 дм`, `2 м 450 мм`, `1 м 145 см` → HALF; `2 м 45 см`, `2м45см`, `2 м. 45 см.` → OK; `245`, `2 м 45`, `2 м 46 см`, `2 м 45 cм` (латинська c) → BAD. Без compound ті самі записи → OK, як було (engine-decisions-1101).
- decimals 1 / fractionOnly без вимоги вигляду (`2,40`, `12/5`, `37`, `0,75`) → OK.

### Мутанти (усі вбито)
learn.js: nextItem/remaining рахують HALF провалом; topicStatus: перше HALF → gap, HALF → ok, cur з HALF → known; корінь → OK і → BAD; без strip-перевірки; DIAG_FORM без compound / без mixed; усі form → HALF; DIAG_BOX.known 0; rank known 0; srsFromDiag знову пропускає cur; cur new не знімає запис; buildPlan не бере урок завдання з HALF; HALF ≠ 0,5. validate.mjs: reduced / compound / improper / mixed — попередження замість помилки; decimals — помилка; регулярний вираз без «скорот». app.js: без `diagNext` в обробнику «Далі» (показує «Складніше» проваленої теми); без `save()` у diagHalf; «Ще не знаю» видима; поле не заблоковано; HALF через `diagAnswer` без пояснення; Evidence `verdict:"form"`; diagNext `idx+1`; порожнє пояснення.

### Збережений прогрес
- `run.res[idx]=0.5` пишеться в `S.diagRun` одразу (до «Далі»): закриття на поясненні → продовження з наступного завдання (`nextItem`), другої спроби немає (браузерний сценарій і мутант A2).
- `resumeDiag`/`finishDiag` значення не фільтрують, тож 0,5 доходить до `S.diag[id].res`. `topicStatus` дає shaky/new, `level` рахує ½ через shaky, `buildPlan` (learn.js:116 `res[i] !== OK`) бере урок завдання з HALF. Старі res 1/0/−1 читаються так само (`passed` для них збігається з `=== OK`; test-learn і браузер, `planFor` = `topicStatus`).
- `srsFromDiag`: cur known → box 2 (P3-2), cur new знімає лише запис попереднього тесту (`src: "diag"`), записів уроку чи тренування не чіпає. Повторний тест перезаписує тільки свої записи. Старі профілі без запису — як раніше (задокументовано).
- diagOpen і практика спираються на збережені `topics`: тема з HALF — shaky, тож не відкривається як ok і не стає «знайомим».

### Старі браузерні сценарії: зміни виправдані рішенням
- `diag_answer_checks`: «245 см» → «2 м 45 см» з OK. За новим правилом compound «245 см» — HALF (вимаганий вигляд), тож старе очікування «form → OK» стало хибним. Сценарій і далі перевіряє: відповідь без фідбеку, rev 3, продовження після перезавантаження.
- `decisions_1101_checks` (1): reduced 6/8 OK і √576 BAD замінено на fractionOnly 0,75 OK і √577 BAD. Обидва старі очікування рішення людини скасувало. HALF для √ і reduced тепер перевіряє `half_credit_checks`.
- `gen_diag_srs_checks`: очікувані коробки доповнено cur known = 2 (P3-2). Регресію ці зміни не маскують: мутанти в тих самих гілках вбито.

### Валідатор
- На чинному змісті хибних помилок немає: 0 помилок, кількість попереджень та сама. Нова помилка спрацьовує лише для `diag && !pool`, `answer` у чинних SLID.diag поки немає, тож реальний зміст її не зачіпає. Уроки й пули не змінено (diff-answers `--content-old` = 0).

### Evidence V2
- `diagHalf` пише одну подію `answer` з `verdict:"half"`, `res:0.5`, `try:1`, `final:true`, `raw`; повторної події на «Далі» немає (браузер: `[(1,'half',0.5),(3,'half',0.5),(6,'half',0.5)]`). Інші вердикти тесту ті самі, що й раніше (bad 0 / ok 1 / form 1). Споживачів, які перелічують значення `verdict`, у tools/ й app/ немає, тож новий вердикт нічого не ламає. EVIDENCE.md оновлено. Сценарій журналу (`evidence_checks`) green.

## Знахідки

### P1 — немає
### P2 — немає

### P3
1. **app/learn.js:122**: коментар «Відповіді тесту зберігаються вердиктами (OK/BAD/SKIP)» застарів, бракує HALF (0,5).
2. **tools/test-answer-ui.py:1339**: docstring `diag_answer_checks` каже, що compound «245 см» → півбала перевіряє `half_credit_checks`. Фікстура `half_credit_checks` (1765–1771) має лише reduced, корінь і decimals, compound-HALF у браузері не перевіряється. Логіку покривають test-learn (мутант «DIAG_FORM без compound» вбито), тож це лише неточність опису. Виправити текст або додати в фікстуру quantity compound «245 см».
3. **tools/test-answer-ui.py:1681**: у фікстурі decisions-1101 (1) лишився заголовок «Сторона квадрата», а умова тепер «Обчисли √576». Косметика.

Примітка для оркестратора (не дефект гілки): перед злиттям виконати `node tools/build.mjs` і закомітити `sw.js` (VERSION 78b004fef5 на eb3ac42), інакше встановлений PWA не отримає новий learn.js/app.js. Відкрите питання (в) задачі (decimals як вміння) лишається на людині.

## Не перевірено
- Реальний `SLID.diag` з answer (таких ще немає): поведінку перевірено на фікстурах і на прогоні diff-answers, де всі 1246 вправ розглянуто так, ніби вони стоять у тесті.
- Ручний прохід на мобільному пристрої.
