# План: Англійська мова, 5 клас (content/eng/plan.js, e5s1–e5s10)

Автор плану — агент plan-eng-g5, 2026-11-19 (задача tasks/doing/curate-eng-plan-g5.md, роль — куратор плану). Еталон процесу — reports/verify/plan-eng-g4.md (з розділом «Незалежна верифікація»).
Це звіт **автора** плану, а не незалежна верифікація. План має перевірити content-verifier зі свіжим контекстом.

## 1. Джерело (відкрито в цій сесії)

| Сигла | Джерело | URL | Що звірено |
|---|---|---|---|
| **МП-ІМ** | Модельна навчальна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін.), наказ МОН № 795 від 12.07.2021, 42 с. | https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (633 159 байт, SHA-1 `43925b25c52b569201658248a0183b8c3ad90ff7`, 42 с.; текстовий шар є, `pdftotext -layout`) | с. 3 — A2 після 6 кл.; с. 14 — соціолінгвістична й лінгвістична компетенція A2 (5–6 кл.); **с. 15–19 — результати на кінець 6 кл. (A2)**; **с. 20 — розд. 4.2 і 4.2.1 (5 кл.)**; **с. 21–22 — розд. 4.4, граматика A2 (англійська)**; с. 42 — модель тематичного планування |

Номери сторінок PDF збігаються з друкованими (колонтитули с. 14–22, 42). Текст сторінок на час сесії — у `/tmp/claude-0/-home-user-slid/cdcc8e27-2339-504a-b8a4-5bf593ec4683/scratchpad/plan-eng-g5/dl/` (тека тимчасова).

### Що каже програма про 5 кл. (дослівно, с. 20)

- **Загальне (розд. 4.2):** «Навчальна програма є рамковою, а отже, не обмежує діяльність учителів у виборі порядку вивчення та змісту кожної теми. Деякі теми можуть вивчатися інтегровано, напр., Відпочинок і дозвілля + Подорож, Одяг + Погода, Подорож + Країни, мова яких вивчається.»
- **Мовленнєві функції 5 кл.:** описувати, розповідати, характеризувати; порівнювати; аргументувати свій вибір; запитувати та надавати інформацію; розпитувати з метою роз'яснення та уточнення інформації; пропонувати, приймати, відхиляти пропозицію.
- **Теми → підтеми (11 тем, 22 підтеми):**
  - Я, моя родина, мої друзі → мої родинні зв'язки; професії батьків; мої друзі та їхні уподобання;
  - Одяг → види одягу; сезонний одяг;
  - Харчування → продукти харчування; улюблені страви; страви в Україні та країнах виучуваної мови;
  - Відпочинок і дозвілля → види відпочинку та занять; захоплення; канікули;
  - Природа → погода; природні явища;
  - Подорож → улюблені напрямки подорожі; **прогулянка містом/селом**;
  - Рідне місто/село → місцезнаходження; **основні історичні та культурні відомості**;
  - Свята і традиції → календар свят в Україні та країнах виучуваної мови; традиції святкування;
  - Шкільне життя → розклад уроків; робочий день; урок іноземної мови; види діяльності на уроці;
  - Україна → загальні відомості про Україну;
  - Країни виучуваної мови → загальні відомості про країни виучуваної мови.

**Розбіжність із дизайном і задачею.** Таблиця на с. 20 дає «Прогулянку містом/селом» під темою **«Подорож»**, а не «Рідне місто/село» (рядок іде одразу після «Улюблені напрямки подорожі», до рядка «Рідне місто/село»). Підтема «Основні історичні та культурні відомості» належить до «Рідного міста/села». В орієнтовному плані (docs/design/english.md §4.1, задача) її немає. У плані вона є (e5s7, урок 6), а прогулянку поставлено в e5s7 — див. §4 п. 2.

- **Граматика A2 (с. 21–22):** інвентар **спільний для 5–6 кл.** (рівень A2), за класами не поділений. Він «є орієнтовним і добирається відповідно до контексту …, потреб учнів та принципу концентричного навчання. Він не є метою навчання, тому й не розглядається як окремі граматичні теми» (с. 21). Повний перелік категорій англійської: Adjectives, Adverbs, Clauses, Conjunctions, Determiners, Future, Modality, Nouns, Passives, Past, Preposition, Present, Pronouns, Verbs, Reported speech.
- **Розподіл між 5 і 6 кл. і розділами — наш** (с. 15: «проміжні результати за класами визначають вчителі, орієнтуючись на кінцевий результат»).

## 2. Розділ ↔ тема ↔ сторінка ↔ граматика

Порядок розділів — як в орієнтовному плані дизайну (§4.1) і в задачах write-eng-g5-*. Програма порядку не задає (с. 20), підручники CUP за класами невідомі (D-054, доп. п. 4).
Граматика — **наш концентричний розподіл**. Позначки:
- (A2) — позиція інвентаря A2, с. 21–22;
- (4) — повторення й розширення 4 кл. (ТОП 3–4 с. 62–63; розділ 4 кл. в дужках);
- (ф) — мовленнєва функція 5 кл. (с. 20), а не граматична позиція.

| id | Назва | Тижні | Тема / підтеми (МП-ІМ с. 20) | Граматика (наш розподіл) | Функції (с. 20) і результати A2 (с.) |
|---|---|---|---|---|---|
| e5s1 | Me, my family and friends | 1–4 | Я, моя родина, мої друзі — родинні зв'язки; професії батьків; друзі та їхні уподобання | to be, have got (4: e4s1); possessive ’s (4, інвентар 3 кл.); possessive adjectives — Pronouns: possessive (A2); this/that/these/those — Determiners: demonstratives (A2); a/an with jobs (4: e4s1); Interrogatives Yes/No, Wh- (A2) | описувати, розповідати, характеризувати; описує родину (19); надає й просить особисту інформацію (18) |
| e5s2 | School life | 5–8 | Шкільне життя — розклад уроків; робочий день; урок іноземної мови; види діяльності на уроці | Present Simple: affirmative, negative, questions (A2); adverbs of frequency + Adverbs: position mid (A2; 4: e4s3); imperatives: affirmative, negative, instructions (A2; 4: e4s5); Can: permission, Could: requests (A2); час: half past seven (глосарій) | розпитувати з метою роз'яснення й уточнення (ф) — «Could you repeat that, please?»; описує розпорядок дня (19); розпитує й розповідає про навчання (18); розклади (16) |
| e5s3 | Food and drink | 9–12 | Харчування — продукти харчування; улюблені страви; страви в Україні та країнах виучуваної мови | Nouns: uncountables (A2); some/any, a lot of, much, many — Determiners: quantity (A2; 4: e4s2, e4s4 how much/how many); Would: questions with like (A2; 4: e4s4 I’d like) — пропозиція «Would you like…?» | пропонувати, приймати, відхиляти пропозицію (ф); меню (16); замовляє їжу (17); прості рецепти (16) |
| e5s4 | Clothes | 13–15 | Одяг — види одягу; сезонний одяг | Present Continuous: affirmative, negative, questions; events in progress (A2; 4: e4s6); Present Simple vs Present Continuous (A2; 4: e4s8); Plurals: regular and irregular — trousers, jeans, a pair of (A2) | описувати; порівнювати; аргументувати свій вибір (ф) — «I usually wear…, but today…» |
| e5s5 | Weather: rain, sun and storms | 16–18 | Природа — погода; природні явища | Comparatives: form, use + than (A2; 4: e4s6) — правопис hotter/wetter, more + довгі, better/worse; Will: predictions — прогноз погоди (A2, Future with will); it’s + weather | порівнювати (ф); прогноз погоди (15 — на слух; у нас лише читання); описує місця (19) |
| e5s6 | Free time, hobbies and holidays | 19–21 | Відпочинок і дозвілля — види відпочинку та занять; захоплення; канікули | like/love/hate + -ing; ‘ing’ forms as nouns: swimming (A2); can (ability) + adverbs of manner: well (A2: Adverbs — manner); Imperatives: suggestions (Let’s) (A2); Shall we…? (A2: Shall — suggestions) — авторові на вибір | пропонувати, приймати, відхиляти пропозицію (ф); що вміє добре й не дуже (19); пропонує, запрошує, вибачається (17); уподобання (17) |
| e5s7 | My town or village | 22–24 | Рідне місто/село — місцезнаходження; основні історичні та культурні відомості; **+ Подорож — прогулянка містом/селом** (інтеграція, с. 20) | there is/are (4: e4s2); prepositions of place: opposite, between (A2: Preposition; 4: e4s2); Imperatives + Coordinated clauses for directions (A2); adverbials of movement (4: e4s7) | запитує й пояснює, як пройти (17); з опорою на карту (18); пояснює маршрут: праворуч, спочатку, потім (19); брошури й карти (16) |
| e5s8 | Festivals and traditions | 25–27 | Свята і традиції — календар свят в Україні та країнах виучуваної мови; традиції святкування | ordinal numbers, dates (глосарій: 1 January — «the first of January»); Present Simple для традицій; was/were (4, інвентар 3 кл.; повторення); Exclamations: What a … (A2) — у вітальній листівці | вітальні листівки: день народження, Новий рік (18); занотовує дати (18) |
| e5s9 | Travel: places to see | 28–31 | Подорож — улюблені напрямки подорожі | would like to (4: e4s4); **be going to: questions, intentions** (A2); **Past Simple: affirmative, regular** — -ed і правопис (A2; 4: e4s7 листівка); перехід від e4s7 «I think I’ll…» | плани на вихідні й канікули (19); щоденник про екскурсії (19); розповідає про подію (18) |
| e5s10 | Ukraine and English-speaking countries | 32–35 | Україна — загальні відомості про Україну; Країни виучуваної мови — загальні відомості | Superlatives: form, the + superlatives (A2: Adjectives, Determiners; 4: e4s7); comparatives + than (повторення e5s5) | порівнювати (ф); описує місця (19); коротка презентація на знайому тему (19) — у нас письмова «fact file» |

**Покриття програми 5 кл.:** 11 тем і 22 підтеми покрито (таблиця вище). Дві теми — «Україна» і «Країни виучуваної мови» — об'єднано в e5s10, як в орієнтовному плані: так 10 розділів на 35 тижнів. Україна є в кожному розділі (дизайн §6.1): e5s3 і e5s5 — Україна й Велика Британія поруч; e5s7 — моє місто; e5s8 — календар свят; e5s9 — «We visited Lviv»; e5s10 — уся.

**Інвентар A2, що лишаємо на 6 кл. (дизайн §4.2):** Past Simple irregular, negative, questions (e6s3); Past Continuous, Past Simple with when (e6s4); Present Continuous for future, have (got) to (e6s5); must, should, relative clauses (e6s6); Present Perfect (e6s7); if + Present Simple, reported statements (e6s8); be like, modifying with too / very (e6s1); a few, both, all, no (e6s2); could (abilities), may/might, will be able to, passives — розподіляє куратор плану 6 кл.

## 3. Тижні

Програма годин за темами не розподіляє. Рішення людини: 35 тижнів, ≈ 6 уроків на розділ (D-054, доп. п. 2). 10 розділів на 35 тижнів — п'ять по 4 тижні й п'ять по 3: [1,4] [5,8] [9,12] [13,15] [16,18] [19,21] [22,24] [25,27] [28,31] [32,35]. Сума 35, без прогалин і накладок.
- **e5s1** — 4 тижні, бо на початку року повторюємо 4 кл.
- **e5s2** — 4 тижні: повний Present Simple (питання, заперечення) — ядро для решти року.
- **e5s3** — 4 тижні: countable / uncountable і квантифікатори — нова й об'ємна граматика.
- **e5s9** — 4 тижні: дві нові позиції (be going to, Past Simple).
- **e5s10** — 4 тижні: факти про країни (джерела, реєстр) і підсумок року.

Збіги з календарем побічні: одяг на сезон (e5s4) припадає на грудень, «Last New Year was great!» (e5s8) — на березень, після Нового року.

## 4. Відхилення від орієнтовного плану (дизайн §4.1, задача) і чому

1. **Набір розділів і id не змінено** (10 розділів e5s1–e5s10, теми як у §4.1). Тож нових задач немає, зайвих теж: write-eng-g5-e5s1…e5s10 і write-eng-pool-g5-* лишаються чинними. Назви в задачах українські (тема програми), у плані — англійські; розбіжності немає.
2. **«Прогулянка містом/селом» — підтема «Подорожі» (с. 20), але лишилася в e5s7** (урок «A walk around the town with a map»). Програма дозволяє інтегрувати теми (с. 20), а прогулянка за картою — природне продовження уроку про маршрут. В e5s9 тоді лишається «улюблені напрямки подорожі».
3. **Додано підтему «Основні історичні та культурні відомості»** (Рідне місто/село, с. 20) — e5s7, урок «My town: a bit of history». В орієнтовному плані її не було.
4. **can (ability) перенесено з e5s5 в e5s6.** Уміння — це хобі й спорт («I can swim well, but I can’t skate»; результат A2 с. 19: «розповідає про те, що вміє робити добре й не дуже»), а не погода. До e5s6 додано adverbs of manner (well), «ing forms as nouns» (Swimming is fun!) і Shall we…?
5. **В e5s5 додано will для прогнозу** («Tomorrow it will be sunny: a weather forecast»). Інвентар A2: Future with will; CD Grammar «Will»: «Will is used to make predictions about the future» (https://dictionary.cambridge.org/grammar/british-grammar/will). Прогноз — природний контекст для will, і він не плутається з be going to для планів (e5s9). Для 4 кл. верифікатор плану вже розвів will («I think I’ll…», e4s7) і be going to (5 кл.).
6. **В e5s2 додано Can (permission) / Could (requests)** — «Can I…? Could you repeat that, please?». Це функція 5 кл. «розпитувати з метою роз'яснення та уточнення інформації» (с. 20) і підтема «урок іноземної мови». Інвентар A2: Can: permission; Could: requests (с. 21).
7. **В e5s4 додано plurals** (trousers, jeans, shorts, a pair of…) — Nouns: Plurals (с. 22); одяг — їхній природний контекст.
8. **Exclamations: What a …** (с. 21) — в e5s8 у вітальній листівці. Рядком плану не винесено; авторові в «Специфіку».
9. **Назви англійською.** Не повторюють назв 4 кл.: «Weather: rain, sun and storms» (а не «Nature and weather», як e4s6); «Festivals and traditions» (а не «Holidays…»; див. §5); «Travel: places to see» (а не «Holidays and travel», як e4s7).

## 5. Англійська: BrE і природність (з урахуванням знахідок верифікатора 4 кл.)

Знахідки verifier-curate-eng-plan-g4 (reports/verify/plan-eng-g4.md В7): загальне *sport* (не *sports*), *holiday(s)* = канікули чи відпустка (не «Happy holidays!»), will / be going to, природні `why`. Як їх враховано:
- **holiday(s):** лише в значенні «канікули»: «Free time, hobbies and holidays», «The school holidays: what do you like doing?» (OALD holiday_1: «It's the school holidays at the moment» — https://www.oxfordlearnersdictionaries.com/definition/english/holiday_1). Свята — *festivals* (OALD festival: «a day or period of the year when people stop working to celebrate a special event, often a religious one» — https://www.oxfordlearnersdictionaries.com/definition/english/festival). Тому e5s8 — «Festivals and traditions», а не «Holidays and traditions»: у BrE це прочиталося б як «канікули».
- **sport:** у плані 5 кл. слова немає; хобі — «Swimming is fun!», «I can swim well, but I can’t skate».
- **will / be going to:** be going to — лише для вже складених планів (e5s9: «I’m going to visit my grandma: plans»; CD Grammar «Be going to»: «Usually the decision about the future plans has already been made» — https://dictionary.cambridge.org/grammar/british-grammar/be-going-to). will — лише прогноз (e5s5). **Пастка для автора e5s9** (pitfalls-content.md «Англійська» п. 3): у `gaps` і `choice` контекст має відсікати will (план уже складено: квитки куплено, «We decided last week»). Або will іде в ключ як друга правильна відповідь. І навпаки в e5s5: «It’s going to rain» (видно хмари) теж правильне, тож прогноз має бути саме прогнозом, без видимих ознак.
- **`why`** — той самий зразок, що в 4 кл.: «To … . And to …», лише Present Simple та інфінітиви, слова рівня A1–A2.
- **Лексика BrE** (CD / OALD, відкрито в сесії через curl):
  - jumper — CD «jumper noun [C] (CLOTHES) A2 UK», https://dictionary.cambridge.org/dictionary/english/jumper;
  - trousers, timetable, maths — за glossary/eng.md «Лексика BrE»;
  - at the seaside — OALD seaside: «(especially British English) … at the seaside», https://www.oxfordlearnersdictionaries.com/definition/english/seaside_1;
  - school uniform (CD uniform, https://dictionary.cambridge.org/dictionary/english/uniform);
  - weather forecast (OALD forecast_1, https://www.oxfordlearnersdictionaries.com/definition/english/forecast_1).
- **Чого уникнув:**
  - «go straight on» — в OALD straight_2 і CD straight знайшлося лише «straight ahead», тож у рядку плану — тільки «Turn left, turn right». Автор e5s7 перевіряє формулу маршруту за словником.
  - Назви страв (borshch / borscht) у плані не пишу. CD дає «borscht», а таблиця КМУ № 55 дає borshch; вирішує автор e5s3 з джерелом, TERM у inbox.
  - «four countries» про Велику Британію (e5s10) не пишу. Склад — «England, Scotland, Wales and Northern Ireland» (Britannica, https://www.britannica.com/place/United-Kingdom). Статус частин (country / province) неоднозначний, тож автор e5s10 бере формулювання з офіційного джерела в реєстр facts/eng.md.
- Апостроф ’ (U+2019) і лапки “ ” — за глосарієм. Kyiv, Lviv — за КМУ № 55.

## 6. `requires`

**У plan.js `requires` не ставлю.** Причини:
1. Уроків 4 кл. ще немає: є лише план e4s1–e4s8, а `requires` веде на **id уроків** (CONTENT_SCHEMA §2; validate шукає в `allLessonIds`). id уроків 4 кл. дасть автор розділу, тож будь-яке «e4s1l2» тепер — вигаданий id.
2. Навіть як «попередження розділу плану» це небезпечно. `SLID.section` зливає запис плану з файлом розділу (`Object.assign({}, old, sec)` у app/registry.js), тож `requires` з плану **успадкує файл e5sN**, якщо автор не задасть свій. А для розділу з уроками неіснуючий урок у `requires` — **помилка** validate. Хвиля 1 пише 4 і 5 кл. паралельно (дизайн §3), тож автор e5s2 може здати розділ раніше, ніж написано e4s3.

**Зв'язки, які треба поставити** (автор розділу 5 кл. — у `requires` свого файлу, на id уроків 4 кл., коли вони вже є; якщо ще немає — у нотатках задачі, а оркестратор додає пізніше):

| 5 кл. | спирається на (4 кл.) | що саме |
|---|---|---|
| e5s1 | e4s1 | to be, have got, a/an with jobs, родина |
| e5s2 | e4s3, e4s5, e4s8 | adverbs of frequency («How often?», «My week»); imperatives; час («when and what time?») |
| e5s3 | e4s4, e4s2, e4s8 | how much / how many, I’d like; some/any; кафе |
| e5s4 | e4s6, e4s8 | Present Continuous; «I play, I’m playing» |
| e5s5 | e4s6 | погода, «Bigger, colder, faster» |
| e5s6 | e4s3 | дозвілля, вподобання |
| e5s7 | e4s2, e4s7, e4s1 | there is/are, prepositions; «Which way?»; cities, towns and villages |
| e5s8 | e4s8, e4s7 | «Happy New Year!»; was/were у листівці |
| e5s9 | e4s7 | «I think I’ll…», листівка з Past Simple |
| e5s10 | e4s7, e4s6 | столиці, «The biggest and the longest»; природа України й Британії |

**Усередині 5 кл.:** e5s4 → e5s2 (Present Simple перед PS vs PC); e5s9 → e5s8 (was/were перед Past Simple); e5s10 → e5s5 (comparatives перед superlatives).

## 7. Що не ввійшло і чому

- **Аудіювання** (с. 15: оголошення, радіо, прогноз погоди на слух) — поки без звуку (D-054 п. 4). Прогноз в e5s5 — лише текст для читання. Аудіювання текстом не імітуємо.
- **Онлайн-транзакції й заявки** (с. 18: замовлення товарів, анкета на візу) — поза уроком. Бланки лишаємо в межах «про себе» (4 кл. e4s1).
- **Усний монолог і презентація** (с. 19) — у застосунку не перевірити. Їх замінюють письмові короткі тексти: «fact file» (e5s10), щоденник (e5s9), листівка (e5s8), опис друга (e5s1).
- **Рецепт** (с. 16) окремим рядком не виніс: він може стати текстом для читання в «Dishes from Ukraine and the UK» (e5s3). Авторові в «Специфіку».
- **Інвентар A2, відкладений на 6 кл.** — §2, наприкінці.

## 8. Перевірка

- `node tools/validate.mjs --quiet` — **0 помилок, 230 попереджень**; для content/eng/plan.js і e5s* попереджень немає (усі 230 — чужі файли й незавершена робота агентів рушія).
- Build не запускав (паралельна робота агентів рушія). plan.js у content/eng/ build уже підхоплює.
- 10 розділів × 6 рядків `plan`; тижні 1–35 без прогалин; id e5s1–e5s10 = `section` у задачах write-eng-g5-*.

**Упевненість:**
- висока — щодо тем, підтем і функцій 5 кл.: прочитано з PDF, колонтитули звірено;
- середня — щодо розподілу граматики A2 між 5 і 6 кл.: програма його не дає, розподіл наш;
- середня — щодо тижнів.
