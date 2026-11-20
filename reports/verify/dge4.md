# Верифікація: тест рівня «Англійська мова, 4 клас» (dge4)

Верифікатор: verifier-dge4 (content-verify + math-pool-diag §2в), 2026-11-20. Файл: content/eng/diag-g4.js. Автор: writer-dge4, і цього тесту я не писав.
**Вердикт: придатний, `status: "verified"`.** Блокувальних знахідок немає. Зроблено 7 правок: це коментарі й метадані, зміст завдань не змінено. Людина потрібна лише для спостережень у кінці звіту, а не для вердикту.

## Прогін
- `node tools/validate.mjs --diag dge4`: 0 помилок, 0 попереджень (до правок і після).
- `build`: усі впорядковані підмножини плиток разом з `extra` перебрано через `SLID_LANG.check(…, "en")` з app/lang.js у node (scratchpad `verify-dge4/tools/perm.mjs`). №14 дає 300 кандидатів, зараховано лише «Mariia never plays basketball». №22 дає 1800 кандидатів, зараховано лише «I think I’ll go to the park».
- `word` №8 перевірено через `SLID_LANG.wordVerdict`. Зараховано «March», «march», «MARCH», «March.». «Marh» не зараховано, підказка — «Almost». Ключ без кінцевого знака ✅.
- Для кожного `gaps`, `pick` і `match` `SLID_LANG.solution` відтворює ключ, а `check` дає true.
- Браузерних прогонів не було: Python-playwright у контейнері немає (AGENTS.md §3). Повний прохід dge4 у браузері — у CI.

## Джерела, відкриті в цій сесії
| Твердження | Джерело (URL) | Вердикт |
|---|---|---|
| Опори 3 кл.: «члени родини», «місцепроживання», «моя кімната», «умеблювання», функція «представити себе» (с. 61); «місяці» (с. 62); граматика 3 кл.: there is(n’t)/are(n’t), ’a/an’ with jobs, some/any, irregular nouns – plural, ’s for possession, basic prepositions of place, present simple for daily routines (с. 62) | ТОП 3–4, PDF завантажено, SHA-1 aa8d161a330bbede5b21484f47be92d12548f785 збігається з facts/eng.md; https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf | ✅ усі 8 опор мають підставу. be (am/is/are) у переліку граматики окремо не названо, але воно потрібне для функцій «представити себе / описувати» (с. 61) |
| Рівні програми | ТОП 3–4, с. 40: «На кінець 2-го класу учні досягають рівня Pre А1, а на кінець 4-го класу – рівня А1» (той самий PDF; facts/eng.md «ТОП 3–4») | ⚠️ у коментарі файлу було «Pre A1 на кінець 3 кл.» → **виправлено** (правки 1–3, 6–7) |
| tooth → teeth, foot → feet, child → children | CD https://dictionary.cambridge.org/dictionary/english/tooth («plural teeth»), …/foot («plural feet»), …/child («plural children»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/tooth_1 («plural teeth»), …/foot_1 («plural feet»), …/child («plural children») | ✅ |
| hot → hotter | CD https://dictionary.cambridge.org/dictionary/english/hot («hotter \| hottest»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/hot_1 («comparative hotter, superlative hottest») | ✅ |
| any у запереченні, не some (№12) | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/some-and-any («He hasn’t got any homework. Not: He hasn’t got some homework.») + урок e4s2l5, екран 6 | ✅ |
| never перед основним дієсловом (№14) | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/never («Never usually goes directly before the main verb»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/never («You never help me.») | ✅ |
| cousin = дитина тітки чи дядька; aunt = сестра матері чи батька (№11) | OALD https://www.oxfordlearnersdictionaries.com/definition/english/cousin («a child of your aunt or uncle»); CD https://dictionary.cambridge.org/dictionary/english/aunt («the sister of someone’s father or mother…») | ✅ |
| Пори року в Україні: квітень і травень — весна, липень і серпень — літо, жовтень і листопад — осінь (№23) | Урок e4s6l1 (verified), learned «Name the four seasons and their months»; WebSearch «пори року в Україні…»: https://ukrainianlessons.com/months, https://www.pogodairadar.com.ua/pohodni-novyny/23-veresnya-osinnye-rivnodennya-ta-pochatok-astronomichnoyi-oseni--659bffe2-86b5-4fea-be19-b4e512e890ed (календарні сезони по три місяці) | ✅ (у межах календарних сезонів однозначно) |

Чисел, дат і фактів про країни в тесті немає. «28 °C в Odesa, 20 °C у London» — умовна ситуація, а не факт.

## Завдання: мій розв'язок → опора → вердикт
Усі завдання розв'язано до того, як я дивився на `correct` і `*`. Мої відповіді збіглися з ключем у 24 з 24 випадків.

| № | Тема | Мій розв'язок | Опора (ТОП 3 кл. / урок 4 кл.) | Друга правильна відповідь? | Вердикт |
|---|---|---|---|---|---|
| 1 | be (base) | am | ТОП с. 61, «представити себе»; e4s1l1 | — | ✅ |
| 2 | family (base) | He is her brother. | «члени родини» с. 61 | uncle, cousin відсікає «two children: Dmytro and me» | ✅ |
| 3 | poss (base) | Oksana’s | «’s for possession» с. 62 | — | ✅ |
| 4 | there (base) | are | с. 62 | — | ✅ |
| 5 | prep (base, pick) | under, on | с. 62 | інших слів місця в тексті немає; «Find two words» | ✅ |
| 6 | plural (base) | teeth | «irregular nouns – plural» с. 62; CD/OALD | — | ✅ |
| 7 | pres (base) | He lives in Kyiv. | с. 62 | — | ✅ |
| 8 | months (base, word) | March | «місяці» с. 62 | інших слів між February і April немає; ключ без знака | ✅ |
| 9 | be (2) | is / are / Are | с. 61 | — | ✅ |
| 10 | cur-e4s1 | a doctor / an engineer / an artist | e4s1l3: список професій (екран 3) і a/an (екран 5) | дистрактори або з a/an перед голосним, або іншої професії, яку відсікає дія з умови | ✅ |
| 11 | family (2, match) | aunt / uncle / grandma / cousin | с. 61; e4s1l2 | перебрано всі 16 пар — друга пара не підходить ніде (OALD cousin, CD aunt) | ✅ |
| 12 | cur-e4s2 | Are / are / any | e4s2l5, екрани 3 і 6 | пропуску some/any в питанні немає (пастка writer-pe4s2 обійдена); «aren’t some» неправильне (CD Grammar) | ✅ |
| 13 | poss (2, pick) | brothers | с. 62 | «mum’s bike» правильне | ✅ |
| 14 | cur-e4s3 (build) | Mariia never plays basketball. | e4s3l2, екрани 3 і 6 | «Mariia always plays basketball» суперечить умові «doesn’t play it»; повний перебір — нижче | ✅ |
| 15 | there (2) | is / are / isn’t | с. 62 | переліку немає (пастка verifier-e5s7) | ✅ |
| 16 | cur-e4s4 (sort) | many: eggs, apples, bananas; much: milk, water, rice | e4s4l3, екрани 3 і 4; усі слова є в уроці | — | ✅ |
| 17 | prep (2) | on / next to / under | с. 62 | «chair in the desk» і «shoes on the chair, on the floor» безглузді | ✅ |
| 18 | cur-e4s5 | Why / Because / because | e4s5l6, екрани 3 і 9 | «Where … ? – Because…» не відповідає питанню | ✅ |
| 19 | plural (2) | children / feet / teeth | с. 62; CD/OALD | — | ✅ |
| 20 | cur-e4s6 | Odesa is hotter than London today. | e4s6l5, екрани 3, 5, 6 | — | ✅ |
| 21 | pres (2) | lives / goes / does | с. 62 | — | ✅ |
| 22 | cur-e4s7 (build) | I think I’ll go to the park. | e4s7l6, екран 3, та сама модель, що на екрані 7 | «I’ll go to the park I think» (без коми) не зараховано — нижче | ✅ |
| 23 | months (2, sort) | spring: April, May; summer: July, August; autumn: October, November | e4s6l1 | — | ✅ |
| 24 | cur-e4s8 | play / am reading / is sleeping | e4s8l5, екрани 3 і 5 | маркери Every Saturday / Now / Look! однозначні | ✅ |

**Перестановки `build`.**
- №14. Серед повних наборів граматичні лише «Mariia never plays basketball» (ключ) і «Mariia always plays basketball». Друге суперечить умові.
- №22. Окрім ключа, розмовно можливе лише «I’ll go to the park, I think» з комою. Плитки без коми дають «I’ll go to the park I think» — пунктуаційно неповне речення, і урок e4s7l6 (verified, екран 7) має той самий ключ. Неповні рядки рушій не зараховує, бо кожен answer — це всі tiles. Пастка `extra` на місці плитки не дає правильного речення (validate мовчить).

**Одна проба — одна навичка.** Кожне завдання — одна тема. Складені gaps (№10, 12, 18, 24) охоплюють ядро `learned` одного уроку, як і вимагає CONTENT_SCHEMA §9 «Тема cur і known».
**cur — лише матеріал уроку з `lessons`.** Лексику й граматику звірено з дампом уроків: carpet, shelves, toys — e4s2; thirsty, a cold — e4s5; Odesa — e4s7; °C і модель «Today it’s … in Kyiv. In London…» — e4s6l5. ✅
**Порядок і адаптивність.** Базове завдання кожної опори (1–8) іде раніше за складніше. ✅
**Герої.** Sofiia — сестра Andrii (e4s1l1), тож її мама-лікарка, тато-інженер і тітка-художниця (№10) збігаються з e4s1l3. Taras — Lviv, два постери. Andrii — три полиці, немає TV, застуда. Oksana — брат Dmytro. ✅
**BrE, A/B/C, без звуку й IPA.** Mum, have got, lots of. Інструкції — шаблони glossary/eng.md. «Listen», IPA і позиційних посилань немає. ✅
**Рівень мови інструкцій.** 4 кл., речення до 8 слів, `uk` немає. ✅

## `see` baseline-тем: на урок повторення чи на e4s1
`see` веде на уроки, де тему повторюють: e4s1l1, e4s1l2, e4s2l2, e4s2l4, e4s5l2/e4s5l1, e4s1l5/e4s3l3, e4s6l1. **Це правильно.**
- docs/PERSONALIZATION.md «Baseline» для dge4 прямо дозволяє «`see` — перший урок e4s1 чи урок, де тему повторюють». CONTENT_SCHEMA §9 описує `see` як «1–3 id уроків, де цю тему повторюють».
- Я звірив `learned` кожного уроку `see`. Тема є в кожному: e4s1l2 «Use ’s», e4s2l2 «Use there is and there are», e4s2l4 «in, on, under, next to», e4s5l1 «one tooth, two teeth», e4s5l2 «children, teeth and feet», e4s1l5 «live and lives», e4s3l3 «plays, goes and does», e4s6l1 «four seasons and their months».
- Механіка (app/learn.js `buildPlan` і app/app.js `baseStart`, прочитано): `next` — перший урок `see`. `baseStart` бере перший непройдений **відкритий** урок розділу цього уроку. Якщо розділ закритий через `requires` (e4s2, e4s5, e4s6), він переходить до наступної опори. Опори з `for: e4s1` найтерміновіші, тож для новачка «з чого почати» на практиці — e4s1l1. Це збігається з english.md §7 («gap веде на e4s1»), а кнопки `see` додатково показують, де тему повторено.
- english.md §7 описує лише варіант «на e4s1». Це не суперечність, а неповнота дизайну. Рядок DOC — в inbox (текстом оркестратору).

## Правки (зроблені)
1. Коментар-шапка: «рівень Pre A1 на кінець 3 кл.» → «Pre A1 — на кінець 2 кл., A1 — на кінець 4 кл. (с. 40)». ТОП 3–4, с. 40 прямо каже «на кінець 2-го класу … Pre А1».
2. Шапка: «опор вхідного рівня Pre A1 (3 кл.…)» → «Pre A1–A1 (інвентар 3 кл.…)».
3. Коментар над `topics` — те саме.
4. Коментар над базовими завданнями: «(Pre A1)» → «(інвентар 3 кл.)».
5. Рядок «Статус» у шапці → verified, verifier-dge4.
6. `status: "draft"` → `"verified"`.
7. `meta.factcheck: "self"` → `"verifier-dge4 (reports/verify/dge4.md)"`.

Нотатки задачі неточності не мають: там «Pre A1–A1 (ТОП 3–4: 3 кл.)» і «Pre A1 → A1 … с. 40».

## Спостереження (не блокують; для автора, style-sync чи людини)
- **cur-e4s7 (№22)** перевіряє «I think I’ll + інфінітив» — це назва й перше вміння e4s7l6. won’t і «I’ll help you!» (решта `learned`) не перевіряються, тож «знайоме» може відкрити урок трохи раніше. Ціна невелика: урок лише відкривається без черги. Якщо колись робитимуть нову редакцію тесту (з `rev` після публікації), можна замінити це завдання на gaps з 3 пропусками: ’ll + verb / won’t / I’ll help.
- **cur-e4s3 (№14)** перевіряє значення never (пастка always) і місце перед дієсловом. usually і sometimes не перевіряються, але ядро уроку (значення + місце) покрито.
- **`see` plural:** `["e4s5l2", "e4s5l1"]` — teeth уперше з'являється в e4s5l1, тож порядок `["e4s5l1", "e4s5l2"]` природніший для кнопок. Автор узяв l2, бо там усі три форми. На `baseStart` порядок не впливає, тож рішення лишаю авторові.
- **№13 «Find the mistake» без фідбеку.** style/eng.md п. 6 вимагає «ніколи без правильної [форми] поруч». У тесті рівня фідбеку немає за дизайном (CONTENT_SCHEMA §9), так само як у дистракторів choice (tooths, hoter). Окремого TQ не відкриваю: це загальна властивість тестів рівня, а не цього файлу.
- **№8 «march» з малої зараховується** (регістр у `word` нормалізується). Велика літера місяців — не предмет завдання, тож це прийнятно.

## Авторське право
| Фрагмент (≥ 12 слів) | Запит (WebSearch, лапки) | Результат |
|---|---|---|
| №17 «My bag is on the chair, and my shoes are under the chair…» | `"My bag is on the chair, and my shoes are under the chair"` | дослівних збігів немає |
| №24 «Every Saturday, I play tennis with my dad. But today Dad is at work…» | `"Every Saturday, I play tennis with my dad. But today Dad is at work"` | дослівних збігів немає |
| №10 «My mum works in a hospital. She is a doctor. My dad builds bridges…» | `"My mum works in a hospital. She is a doctor. My dad builds bridges"` | дослівних збігів немає |
Решта текстів коротші за 12 слів поспіль або є шаблонними реченнями.

## Вердикт
dge4 — **verified**. Відкритих ❌ і ⚠️ немає. `approved` ставить лише людина-вчитель.
