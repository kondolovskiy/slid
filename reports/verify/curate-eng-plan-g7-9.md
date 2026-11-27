# Незалежна верифікація: план «Англійська мова», 7–9 клас (curate-eng-plan-g7-9)

Верифікатор: verifier-curate-eng-plan-g7-9 (content-verifier), 2026-11-25. Блоки e7s1–e9s9 у content/eng/plan.js, звіт куратора reports/verify/plan-eng-g7-8-9.md і рядки «Граматика» / «Специфіка» / `requires` у tasks/todo/write-eng-g7…g9-* писав не я. Блоки e10s*/e11s* не чіпав (їх перевіряє інший верифікатор).
Еталон — reports/verify/curate-eng-plan-g6.md. PDF програми завантажив сам у цій сесії. Уроки 4–6 кл. звіряв із файлами content/eng/g4-*.js, g5-*.js, g6-*.js, а не з планом. Англійську звіряв зі словниками через `curl`.

**Вердикт: план придатний.** 8 + 8 + 9 тем, 75 підтем (20 + 29 + 26) і функції 7–9 кл. покрито. Граматика взята з інвентаря B1 (с. 34–35) або з A2, яку відклали з 6 кл. Вище B1 план не забігає. Жоден розділ не спирається на граматику, яку вводять пізніше. Тижні в кожному класі — 1–35. Зроблено 12 дрібних правок: 6 у plan.js, 6 у задачах. Блокувальних знахідок немає. Людині: TQ-129 і TQ-130, які поставив куратор (нових TQ немає).

## В1. Джерела (відкрито в цій сесії)

| Що | URL | Результат |
|---|---|---|
| МП-ІМ, PDF: 633 159 байт, SHA-1 `43925b25c52b569201658248a0183b8c3ad90ff7` (як у куратора), 42 с.; `pdftotext -layout` с. 3, 21–22, 27–35 | https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf | ✅ с. 3: «(7 – 9 класи) – рівня В1». ✅ с. 32, розд. 5.2: «Навчальна програма є рамковою … Деякі теми можуть вивчатись інтегровано» (підстава для e7s7). ✅ с. 32, 5.2.1: 7 кл. — 8 тем, 20 підтем, 11 функцій. ✅ с. 32–33, 5.2.2: 8 кл. — 8 тем, 29 підтем, функції 7 кл. + «коментувати статистичні дані». ✅ с. 33, 5.2.3: 9 кл. — 9 тем, 26 підтем, 8 функцій. Транскрипція §1 куратора дослівно збігається. ✅ «Види дозвілля» в макеті (`-layout`) стоїть під «Стиль життя», а «Засоби масової інформації» починаються з рядка «Інтернет». Отже, перенесення в e8s2 правильне. ✅ с. 34–35, 5.4.1 — інвентар B1; с. 21–22 — інвентар A2 (для атрибуції, В3) |
| CD Grammar «Do» | https://dictionary.cambridge.org/grammar/british-grammar/do | ✅ «We also use emphatic do with imperatives. Do come and have dinner with us some time.» Рядок e7s2 l6 «Do have some more!» — нормативна BrE |
| CD chat show; OALD talk show, chat show | https://dictionary.cambridge.org/dictionary/english/chat-show · https://www.oxfordlearnersdictionaries.com/definition/english/talk-show · https://www.oxfordlearnersdictionaries.com/definition/english/chat-show | ✅ OALD talk show: «(British English also chat show)». OALD chat show: «(British English) (also talk show North American English, British English…)». Рядок e9s4 l2 «a quiz or a talk show?» — BrE допустимо, тому лишаю |
| CD argument | https://dictionary.cambridge.org/dictionary/english/argument | ⚠️ B1: «a disagreement, or the process of disagreeing», а «reason… why you support or oppose an idea» — лише B2. Учень B1 прочитав би «planning an argument» як «плануємо сварку». Виправлено (П5) |
| CD lifestyle | https://dictionary.cambridge.org/dictionary/english/lifestyle | B2. Куратор не виніс слово в назву, але воно стояло в `why` e8s2. Виправлено (П6); у рядку l1 лишаю, бо це слово теми «Стиль життя» |
| CD woollen | https://dictionary.cambridge.org/dictionary/english/woollen | ✅ «UK (US usually woolen)» — e9s3 l3 |
| CD athlete | https://dictionary.cambridge.org/dictionary/english/athlete | ✅ B1 «a person who is very good at sports…» — e7s5 |
| Рівні CD (curl, `https://dictionary.cambridge.org/dictionary/english/<слово>`) | — | B2: personality (e9s1), symptom (e7s3), youth (e9s5), device (e9s6), monument (e7s7, e9s8), composer (e8s4), survey (e8s2 l6), prediction (e9s2), profile (e8s1 l1), debate (e9s9 l6), lifestyle. B1: quality, historic, abroad, organisation, career, predict, tournament, interrupt, politely, invent. A2: instrument. A1: nationality. B2-слова — це слова самих тем програми. Їх треба вводити з опорою (Р1) |
| Tower of London: замок на Темзі, засновано наприкінці 1066 р. | https://en.wikipedia.org/wiki/Tower_of_London (REST summary: «founded toward the end of 1066») · WebSearch: https://www.britannica.com/topic/Tower-of-London, https://www.worldhistory.org/Tower_of_London/ | ✅, але дати розходяться (1066 / White Tower 1075–1079 / ≈ 1077). Головне — замок уже 21 раз згаданий у e6s8 («built more than 900 years ago»). Тому рядок e7s7 l5 замінено (П1) |
| St Paul’s Cathedral, London; новий собор Wren збудував після Великої пожежі 1666 р. | https://en.wikipedia.org/wiki/St_Paul%27s_Cathedral («an Anglican cathedral in London»; Wren і «rebuilding … lost in the Great Fire») · https://londonmuseum.org.uk/collections/london-stories/a-history-of-st-pauls-cathedral (через WebSearch: пожежа 1666 р. знищила Old St Paul’s; завершено 1710–1711) | ✅ рядок e7s7 l5. Роки будівництва в джерелах різні (≈ 1675–1711), це записано в задачу |
| Plast — скаутська організація України, Львів | https://en.wikipedia.org/wiki/Plast («National Scout Organization of Ukraine… founded in 1911 in Lviv»; в інфобоксі — 12 April 1912) · WebSearch: https://www.encyclopediaofukraine.com/pages%5CP%5CL%5CPlastUkrainianYouthAssociation.htm, https://en.plast.org.ua/about-history/ | ✅ назва в рядку e9s5 l2. Дата заснування — 1911 чи 1912, у задачу записано, як це подати. Хости en.plast.org.ua, hrp.org.uk і britannica.com у сесії не резолвляться, тож для них — лише сніпети WebSearch |

Збіги з підручниками. У плані немає фрагмента ≥ 12 слів поспіль, крім `why` з двох речень (шаблон проєкту «To … . And to …») і трьох рядків по 12–13 слів. Перевірив рядки, які могли б походити з підручника:

| Фрагмент | Запит | Результат |
|---|---|---|
| When I got to the library, it had closed | WebSearch у лапках | точних збігів немає |
| It was raining, and she had lost her key | WebSearch у лапках | точних збігів немає |
| I knew I was going to be a… / the future in the past | WebSearch у лапках | точних збігів немає |

## В2. Теми, підтеми, функції ↔ розділи

Таблицю §2а куратора звірив рядок за рядком з plan.js і с. 32–33: кожна з 75 підтем має рядок `plan` ✅.
- Функції 7 кл. «просити про допомогу» (e7s3 why), «надавати оцінку» і «оцінювати» (e7s4 l6, e7s5 l6), «обмінюватися думками» (e7s6) ✅.
- Функція 8 кл. «коментувати статистичні дані» — e8s2 l6, e8s7 l4/l6, e8s8 ✅.
- Функції 9 кл. «вести дискусію, привертаючи увагу» і «висловлювати згоду чи незгоду» — e9s9 l2–l3, l6 ✅.

e9s9 — розділ функцій, а не теми. Це прийнятно: функції класу на с. 33 є частиною програми, а розділ займає 3 тижні.

## В3. Граматика: інвентар B1 (с. 34–35), A2 (с. 21–22), дубль із 4–6 кл., порядок

**Чи не забігає вперед.** Кожну позицію плану звірив із с. 34–35. Усі нові позиції є в B1, або в A2 (відкладені з 6 кл.), або куратор чесно позначив їх «наш»: -ed/-ing, be allowed to, would для звичок, numbers. Позицій понад B1 немає. Past Perfect Continuous дано «лише впізнавати», і це є в B1. Єдине поза інвентарем — `why` e9s8 «could have been different»: це прев'ю розділу з Third Conditional, і в самому рядку плану — would have (Р2).

**Атрибуція: виправити в задачах, на рівень не впливає:**
- **Shall we…? (e7s6).** Це не нове: e5s6l5 «Let’s go! Saying yes or no» уже вчить «Shall we meet at ten?» (10 входжень у g5-e5s6.js). До того ж A2 с. 22: «Shall: offers and suggestions». Нове B1 тут — «Shall: plans and intentions, seeking advice». Виправлено (П7), `requires` + e5s6l5. Звіт куратора §2в і §4 п. 8 називають «Shall we» новим; звіт не мій, тому його не правив.
- **Second Conditional (e8s8).** «Would: imagined situations» — це позиція A2 (с. 22). У B1 стоїть «imagined situations in the past». Виправлено в задачі (П9). Висновок не змінюється, бо if + Past simple (imagined) і could + if є в B1.
- **Non-defining (e8s4), Future Continuous (e9s2), adverbs of certainty (e9s2), indefinite pronouns (e7s3), will be able to (e9s7)** є вже в A2 (с. 21–22). Задачі правильно позначають їх «відкладене з 6 кл.» ✅.
- **while (e7s5)** уже трапляється в e6s4l5: дистрактор «Vlad was riding his bike while he saw…» і fbText «While goes with a long action». Задача e7s5 називає це розширенням e6s4l4–l5 ✅. Питання з Past Continuous теж є в e6s4l4, тож у e7s5 новими лишаються used to і the first … to.

**Дубль із 4–6 кл.** Перевірив grep у g4–g6: used to, unless, as soon as, enough, myself / ourselves, per cent, ought (лише як частина *bought*), probably, definitely, being built, If I were / had, had + participle — 0 навчальних входжень ✅. whose (e5s1l3 «Whose is it?») — це інша позиція ✅. the other (e4s7, e5s7) — «on the other side», тобто не детермінатив ✅.
**Знахідка: Tower of London** у e6s8 уже згадано 21 раз, зокрема «built more than 900 years ago». Рядок e7s7 l5 «The Tower of London: questions and answers» повторював 6 кл. Замінено на St Paul’s (П1).
**Назви:** e8s7 l1 «Ukraine on the map: …» повторював назву e5s10l1 «Ukraine on the map». Виправлено (П4).

**Порядок у межах 7–9 кл.:**
- Present Perfect (e7s1) іде раніше, ніж recent past у e7s3 і PPC у e8s1 ✅.
- Present Simple passive (e6s3) і should (e6s6) ідуть раніше, ніж passive infinitive у e7s2. Його повторюють e9s2 l5 і e9s6 ✅.
- Past passive з by (e7s7) іде раніше, ніж e8s3 (Present Continuous passive) і e9s6 ✅.
- First Conditional (e7s6) → Second (e8s8) → Third (e9s8). Past Perfect (e8s5) іде раніше, ніж Third Conditional ✅.
- Reported statements (e8s3) ідуть раніше, ніж reported questions (e9s4). Defining / non-defining (e8s4) ідуть раніше, ніж whose / where (e9s5) ✅.
- used to (e7s5) іде раніше, ніж used to / would (e9s1). Compound adjectives (e8s4) ідуть раніше, ніж personality-слова e9s1 l2 ✅.
- Past Perfect (e8s5) вимагає дієприкметників, а вони є в e6s7l5 і e7s1. У `requires` задачі e8s5 їх не було. Додано (П8).

## В4. Тижні, обсяг, `requires`

- Скрипт по plan.js показав: 7 кл. — 7 × 5; 8 кл. — [1,4] [5,8] [9,13] [14,17] [18,22] [23,26] [27,30] [31,35]; 9 кл. — 8 × 4 + [33,35]. Прогалин і накладок немає. Кожен розділ має 6 рядків `plan`. Полів `requires` і `lessons` у plan.js немає ✅ (так само, як у 5–6 кл.).
- Скрипт перевірив `requires` у 24 задачах проти id уроків у файлах g4–g6: відсутніх id немає. За змістом кожен урок навчає того, на що посилається (назви уроків — у додатку скрипта; вибірково читав e6s7l5, e6s8l5, e5s10l1, e5s6l5).
- Додано: e5s6l5 → e7s6 (П7), e6s7l5 → e8s5 (П8). Для e7s3 уточнено внутрішній зв'язок: потрібні уроки e7s1 just / already, а не лише for / since (П10).

## В5. Англійська `title` / `why` / `plan`

Прочитав усі 24 × 8 рядків. Апостроф ’ і три крапки «…» скрізь, прямих лапок і апострофів немає (скрипт). AmE-правопису й лексики немає: скрипт шукав color, center, favorite, -ize, program, movie, vacation, soccer, apartment, sneakers, math, fall. Є BrE-форми: woollen, maths, programme, organisations, chemist’s, trainers, pen friend, lay the table, at the weekend.

**Природність:**
- «A famous composer, who…» — non-defining після неозначеного *a famous composer* звучить неприродно. Виправлено (П2).
- У рядку про Past Perfect у розділі про книжки був приклад про фільм. Замінено на приклад про бібліотеку (П3).
- «planning an argument» — див. В1 (П5).

Решта рядків — природна BrE рівня класу. Проблема рівня лише в B2-лексиці тем (Р1).

## В6. Спірні рішення куратора

| № | Рішення | Вердикт |
|---|---|---|
| 1 | Склад і id розділів не змінено (24) | ✅ збігаються з дизайном і с. 32–33 |
| 2 | «Види дозвілля» → e8s2 | ✅ перевірив макет с. 32 |
| 3 | e7s7 — одна секція на дві теми (TQ-130) | ✅ с. 32 дозволяє інтеграцію. Окремі розділи про Київ і Лондон уже були в 6 кл. (e6s7, e6s8). TQ-130 поставлено коректно |
| 4 | Населення України (TQ-129), тимчасово — перепис 2001 з роком | ✅ так само, як у D-049; у задачі e8s7 записано |
| 5 | ought to перенесено з e9s7 у e7s3 | ✅ «Ought: advice» (с. 34) підходить до контексту поради лікаря |
| 6 | Second Conditional складено з позицій інвентаря | ✅ з уточненням атрибуції (П9) |
| 7 | would для звичок, be allowed to, -ed/-ing позначено «наш» | ✅ це чесна позначка. Для 7–9 кл. прийнятно |
| 8 | e9s9 — 3 тижні | ✅ |

## В7. Правки (зроблено)

| № | Файл | Було → стало | Чому |
|---|---|---|---|
| П1 | plan.js e7s7 l5 | «The Tower of London: questions and answers» → «St Paul’s Cathedral: who was it designed by?» | Tower уже в e6s8 (21 згадка). St Paul’s — Wren (2 джерела); питання з by — позиція розділу |
| П2 | plan.js e8s4 l4 | «A famous composer, who…: extra information» → «My favourite band, which…: extra information» | non-defining потребує означеного антецедента |
| П3 | plan.js e8s5 l4 | «When we arrived, the film had started…» → «When I got to the library, it had closed: the Past Perfect» | приклад з теми розділу |
| П4 | plan.js e8s7 l1 | «Ukraine on the map: borders and neighbours» → «Where is Ukraine? Borders and neighbours» | назва повторювала e5s10l1 |
| П5 | plan.js e9s9 l5 | «First, also, finally: planning an argument» → «First, also, finally: putting your ideas in order» | argument на рівні B1 = сварка (CD) |
| П6 | plan.js e8s2 why | «a healthy lifestyle» → «healthy living» | lifestyle — B2; так само, як у назві розділу |
| П7 | write-eng-g7-e7s6 | «Shall we…? — нове» → нове: Shall — plans, seeking advice; Shall we…? — повторення e5s6l5; `requires` + e5s6l5 | В3 |
| П8 | write-eng-g8-e8s5 | `requires` + e6s7l5; після появи e7s1 — just / already; примітка про l4 | В3, дієприкметники |
| П9 | write-eng-g8-e8s8 | атрибуція Would: imagined situations — A2 с. 22 | В3 |
| П10 | write-eng-g7-e7s3 | внутрішній `requires`: + уроки e7s1 just / already | recent past «I’ve hurt my knee» |
| П11 | write-eng-g7-e7s7 | Tower → St Paul’s; факти й розбіжність років | В1 |
| П12 | write-eng-g9-e9s5 | Plast — 1911 / 12 April 1912, як подати | В1 |

`node tools/validate.mjs --quiet` після правок: 0 помилок, 235 попереджень (для plan.js і e7–e9 — жодного).

id не змінено. Звіт куратора plan-eng-g7-8-9.md не редагував, бо це не мій файл. Що в ньому застаріло: §2в і §4 п. 8 («Shall we» нове), §2б (while як нове), §2 e8s8 («Would — imagined situations» як B1), рядки plan у §2а (e7s7 l5, e8s4 l4, e8s5 l4, e8s7 l1, e9s9 l5).

## В8. Рекомендації (не блокують)

- **Р1.** Авторам 7–9 кл.: B2-слова тем (symptom, monument, composer, personality, youth, device, survey, prediction, profile, debate, lifestyle) вводити з картинкою чи прикладом до першого оцінюваного завдання (D-019). Так само для B1-слів у 6 кл. (curate-eng-plan-g6 В1).
- **Р2.** `why` e9s8 «how things could have been different»: could have немає в інвентарі. Можна замінити на «what would have happened if…». Це прев'ю, тож рішення — за стилістом 9 кл.
- **Р3.** Оркестратору: e7s5 з огляду на вже пройдене в e6s4 має небагато нового (used to, the first … to). Автору варто давати while і питання з Past Continuous саме як розширення, а не вводити заново.
- **Р4.** Куратору 10–11 кл. (inbox, рядок 526): мої правки не змінюють розподіл граматики 7–9 кл., крім атрибуції Shall we (повторення 5 кл.).

## В9. Вердикт

**План e7s1–e9s9 придатний.** Дванадцять правок (6 у plan.js, 6 у задачах) — дрібні. Задача → done. Людині блокувального нічого; відкриті TQ-129, TQ-130 (поставив куратор). Build і коміт не робив.
