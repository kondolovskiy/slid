# План: Англійська мова, 4 клас (content/eng/plan.js, e4s1–e4s8)

Автор плану — агент plan-eng-g4, 2026-11-19 (задача tasks/doing/curate-eng-plan-g4.md, роль — куратор плану). Еталон процесу — reports/verify/plan-ukr-g9.md.
Це звіт **автора** плану, а не незалежна верифікація. План має перевірити content-verifier зі свіжим контекстом.

## 0. Застереження: програма не та, якої вимагає ліцей

Наскрізна програма ліцею (docs/curriculum/program-2026-27.md) для 3–4 кл. вимагає **ТОП під керівництвом Шияна (наказ № 1273)**. Тексту людина не має, mon.gov.ua з контейнера віддає 403. Рішення людини (D-055, доповнення п. 7): «роби поки без цього». Тому **план складено за ТОП 3–4 під керівництвом Савченко (2018)**. Чи збігається іншомовна частина двох програм, **не звірено**. Коли текст № 1273 з'явиться, план треба звірити ще раз. id розділів при цьому не змінюються (вони ключі прогресу), можуть змінитися лише теми й рядки `plan`.

## 1. Джерело (відкрито в цій сесії)

| Сигла | Джерело | URL | Що звірено |
|---|---|---|---|
| **ТОП 3–4** | Типова освітня програма для ЗЗСО, 3–4 класи (титул — «розроблена під керівництвом О. Я. Савченко»), 2018, 141 с. | https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf (1 888 013 байт, SHA-1 `aa8d161a330bbede5b21484f47be92d12548f785`, PDF 1.5, 141 с.; текстовий шар є, `pdftotext -layout`) | с. 40 — рівні (Pre A1 на кінець 2 кл., A1 на кінець 4 кл.); с. 50–55 — дескриптори A1 «на кінець 4-го класу»; с. 56–60 — Pre A1 (кінець 2 кл.) і «Орієнтовні параметри» за класами; с. 60–61 — вступ до «Англійська мова»; с. 61–62 — 3 кл.; **с. 62–63 — 4 кл.** (с. 63 далі — «Німецька мова») |

Номер сторінки PDF збігається з друкованим (колонтитули с. 40, 50–63 перевірено). PDF і текст сторінок на час сесії — у `/tmp/claude-0/-home-user-slid/cdcc8e27-2339-504a-b8a4-5bf593ec4683/scratchpad/plan-eng-g4/dl/` (тека тимчасова).

**Сторінки 4 кл.** у задачах write-eng-g4-* і в docs/design/english.md §4.0 записано як «PDF с. 61–62». Насправді **с. 62–63**: на с. 61–62 — 3 кл., «4-ий клас» починається внизу с. 62. Це вже виправлено у facts/eng.md («ТОП 3–4», verified). Задачі write-eng-g4-* і §4.0 дизайну — пропозиція в inbox (не мої файли).

### Що каже програма про 4 кл. (дослівно, с. 62–63)

- **Тематика ситуативного спілкування → лексичний діапазон:**
  - Я, моя родина і друзі → місцепроживання, населені пункти;
  - Помешкання → види помешкань, умеблювання;
  - Відпочинок і дозвілля → спорт, улюблені дитячі герої, магазини і покупки;
  - Людина → гігієна, стан здоров'я;
  - Природа і навколишнє середовище України та країн виучуваної мови → довкілля, природні явища;
  - Подорож по Україні та до країн виучуваної мови → поїздка на канікулах, види транспорту, назви столиць, населених пунктів;
  - Свята та традиції → святкування в кафе;
  - Шкільне життя → шкільні події.
- **Мовленнєві функції** (як у 3 кл., але без «розуміти інформаційні вказівники» — та є лише в 3 кл., с. 61; уточнення верифікатора): привітатися, попрощатися, вибачитися, подякувати; представити себе чи когось; називати й описувати когось чи щось; ставити запитання й відповідати на них; розуміти й виконувати прості вказівки, інструкції, команди; вітати зі святом; виражати настрій; висловлювати уподобання.
- **Граматика (с. 63):**
  - Adjective — comparative and superlative forms;
  - Adverb — adverbs and adverbials of frequency and movement;
  - Clause — statements with subject + verb + object;
  - Conjunction — but/and/or; ‘because’ for causes and reasons;
  - Determiner — ‘how’ questions for time, measurement, size and quantity; ‘a/an’ with jobs;
  - Modality — ‘would like to’ + infinitive;
  - Verb — Present Continuous, Future Simple for plans and intentions.
- **Інвентар 3 кл. (с. 62), для концентричного повторення:**
  - there is(n't)/are(n't);
  - but/and/or;
  - a/an with jobs;
  - some/any in questions and negatives;
  - how-questions;
  - irregular plurals;
  - ’s for possession;
  - prepositions of place and direction;
  - object pronouns;
  - present simple;
  - past simple (regular/irregular);
  - was/were.
- **Як подавати граматику (с. 61):** програма рамкова, порядок тем не задає (с. 60: «не обмежує … у виборі порядку вивчення»; теми можна поєднувати). Інвентар «не є метою навчання … не розглядається як окремі лексичні або граматичні теми». Граматику засвоюють «імпліцитно шляхом сприймання мовленнєвих зразків», на рівні лексичних одиниць.

## 2. Розділ ↔ тема ↔ сторінка ↔ граматика

Порядок розділів — як у переліку тем програми (с. 62–63) і в орієнтовному плані дизайну (§4.0). Програма порядку не задає, а підручники CUP за класами невідомі (D-055, доп. п. 4). Граматика в колонці — **наш розподіл, концентричний**: позначка (3) — повторення інвентаря 3 кл. (с. 62), (4) — інвентар 4 кл. (с. 63), (ф) — мовленнєва функція, без граматичної позиції в інвентарі.

| id | Назва | Тижні | Тема / підтеми (с.) | Граматика (наш розподіл) | Функції й дескриптори A1 (с.) |
|---|---|---|---|---|---|
| e4s1 | Me, my family and friends: where we live | 1–5 | Я, моя родина і друзі — місцепроживання, населені пункти (62) | to be, have got, ’s (3; повторення); a/an with jobs (3, 4) | привітатися, представити себе/когось (62); пише ім'я, адресу, вік, національність у бланку (54) |
| e4s2 | My home | 6–9 | Помешкання — види помешкань, умеблювання (62) | there is/are (3); prepositions of place (3); some/any in questions and negatives (3) | описувати; описує предмет чи малюнок (55) |
| e4s3 | Free time: sports and heroes | 10–13 | Відпочинок і дозвілля — спорт, улюблені дитячі герої (63) | adverbs and adverbials of frequency (4); S + V + O (4); but/and/or (3, 4) | висловлювати уподобання (63); спілкується про уподобання у спорті (53); онлайн-допис про хобі (54) |
| e4s4 | Shops and shopping | 14–17 | Відпочинок і дозвілля — магазини і покупки (63) | how-questions for quantity: how many / how much (4); would like to + infinitive (4) | просить предмет; оперує числами, кількістю, вартістю (53); путівник торговим центром, вказівники (52) |
| e4s5 | Health and hygiene | 18–21 | Людина — гігієна, стан здоров'я (63) | because (4); imperatives (ф: «виконувати прості вказівки», 63); have got (3) — «I've got a headache» | виражати настрій (63); виконує прості інструкції (53) |
| e4s6 | Nature and weather | 22–26 | Природа і навколишнє середовище України та країн виучуваної мови — довкілля, природні явища (63) | Present Continuous (4); comparatives (4) | описувати; Україна і Велика Британія поруч |
| e4s7 | Holidays and travel | 27–31 | Подорож по Україні та до країн виучуваної мови — поїздка на канікулах, види транспорту, назви столиць, населених пунктів (63) | adverbials of movement (4); superlatives (4); was/were, Past Simple (3; повторення — розповідь про канікули); Future Simple for plans (4) — у тексті уроку «will», глосарій | розуміє короткий опис маршруту (52); пише короткі листівки (54) |
| e4s8 | Celebrations and school events | 32–35 | Свята та традиції — святкування в кафе; Шкільне життя — шкільні події (63) | how-questions for time (4); would like (повторення e4s4); Present Simple vs Present Continuous (3 + 4; зразки) | вітати зі святом (63); розуміє запрошення зустрітися в певному місці й часі (51); записки «пішов у магазин, повернусь о 5» (54); визначає час: «next week, last Friday, in November» (54) |

**Інвентар 4 кл. покрито весь:**
- comparative — e4s6; superlative — e4s7;
- frequency — e4s3; movement — e4s7;
- S + V + O — e4s3, наскрізно;
- but/and/or — e4s3; because — e4s5;
- how-questions: quantity — e4s4, time — e4s8, size і measurement — e4s6 / e4s7 (bigger, the longest; «How big…? How long…?» — авторові в «Специфіку»);
- a/an with jobs — e4s1;
- would like to — e4s4;
- Present Continuous — e4s6, e4s8;
- Future Simple — e4s7.

**Інвентар 3 кл.** повторюємо там, де він природний для теми. Об'єктні займенники й irregular plurals окремого рядка не мають, ідуть наскрізно (children, feet, teeth — у e4s5).

## 3. Тижні

Програма для 4 кл. годин за темами не розподіляє. Рішення людини: 35 тижнів, ≈ 6 уроків на розділ (D-055, доп. п. 2). 8 розділів на 35 тижнів: п'ять розділів по 4 тижні, три (e4s1, e4s6, e4s7) — по 5.
- **e4s1** дістав 5 тижнів, бо на початку року повторюємо інвентар 3 кл.
- **e4s6 і e4s7** — по 5 тижнів, бо мають найбільше граматики: Present Continuous з питаннями; comparatives; рух, superlatives, повторення Past Simple і will.

e4s1–e4s8 покривають тижні 1–35 без накладань і прогалин. Збіги з календарем — побічні, програма їх не вимагає: подарунки в e4s4 припадають на грудень, а шкільні події й свята в e4s8 — на кінець року.

## 4. Відхилення від орієнтовного плану (дизайн §4.0, задача) і чому

1. **Набір розділів, id і назви не змінено** (8 розділів e4s1–e4s8, назви як у §4.0). Тому нових задач немає і зайвих теж: write-eng-g4-e4s1…e4s8 і write-eng-pool-g4-* лишаються чинними.
2. **Comparatives перенесено з e4s7 в e4s6.** e4s7 у дизайні мав забагато граматики: will, comparatives і superlatives разом. Порівняння погоди й природи (colder, bigger) — природний контекст. Superlatives лишилися в e4s7 (столиці й міста: the biggest, the longest).
3. **Додано позиції, яких дизайн не розподілив:**
   - adverbials of movement — у e4s7 («Which way? Up, down, across, along», маршрут A → B, с. 52);
   - S + V + O — у e4s3;
   - how-questions for time — у e4s8 (запрошення: when / what time);
   - some/any — у e4s2 (повторення 3 кл.).
4. **Повторення Past Simple і was/were (інвентар 3 кл.) у e4s7** — урок «A postcard from my holiday». Без минулого часу «поїздку на канікулах» не розповісти, а в 3 кл. його вже вчили (с. 62). Нового в цьому уроці — лише жанр листівки (с. 54).
5. **«Future Simple for plans and intentions»** (с. 63) — у рядку плану «Plans for the summer: I will…». Термін — за глосарієм: «will (future)», не «Future Simple». **Пастка для автора:** для вже вирішених планів природна BrE-форма — be going to. Тож або контекст має відсікати другу відповідь (обіцянка, намір, рішення), або be going to треба прийняти в ключі (pitfalls-content.md «Англійська» п. 3). Внести в «Специфіку» write-eng-g4-e4s7.
6. **Imperatives у e4s5** — це не позиція інвентаря, а функція «розуміти та виконувати прості вказівки» (с. 63), як і в дизайні. Залишено.
7. **«Улюблені дитячі герої» (e4s3, урок 5)** — герої книжок і фільмів. Персонажів підручників CUP/OUP і захищені зображення не беремо (дизайн §8). Опис героя — власний; бажано українські казкові герої або власні персонажі. Внести в «Специфіку» write-eng-g4-e4s3.

## 5. Що не ввійшло і чому

- **Аудіювання** (дескриптори A1 с. 50–51, «Сприймання на слух») — поки без звуку (D-055 п. 4). Текстом не імітуємо.
- **Теми 3 кл. без пари в 4 кл.:**
  - «Харчування» — лише через кафе (e4s8 урок 1) і покупки (e4s4);
  - «Школа» (предмети, розклад) — лише через шкільні події (e4s8);
  - «Людина: зовнішність, професії» — професії в e4s1 (a/an with jobs).
  Окремих розділів-повторень 3 кл. немає: e4s1 відкриває рік повторенням to be / have got.
- **Онлайн-покупки, заявки «під наглядом дорослих»** (с. 54–55) — поза уроком. У e4s4 є лише вказівники й ціни.
- **Усний монолог і виступ** — у застосунку не перевірити. Їх замінюють письмові короткі тексти: бланк (e4s1), допис (e4s3), листівка (e4s7), записка (e4s8).

## 6. `requires`

Не вказано в жодному розділі. 4 кл. — перший клас предмета, уроків eng ще немає, а validate на ненаписаний урок у плані дає попередження. Зв'язки всередині класу автор розділу ставить у `requires` **свого файлу**, коли уроки вже будуть. Потрібні зв'язки:
- e4s5 → e4s1 (have got);
- e4s8 → e4s4 (would like) і e4s6 (Present Continuous);
- e4s7 → e4s6 (comparatives перед superlatives).

## 7. Знахідки для інших файлів (у inbox, не тут)

- **Обсяги тексту (с. 60, «Орієнтовні параметри», 4 кл.):**
  - читання — 100–150 слів;
  - письмо — 40–50 слів;
  - монолог — 5–6 речень;
  - діалог — 5 реплік.
  Дизайн §6.1 пропонує для тексту 4 кл. «до 50 слів». Це вдвічі-втричі менше за програму. Для curate-eng-style / style-eng-g4-5: 50 слів можна лишити як межу екрана, але це не обсяг тексту за програмою (STYLE).
- **Сторінки 4 кл.:** с. 62–63, а не 61–62 — у docs/design/english.md §4.0 і в «З програми» задач write-eng-g4-e4s1…e4s8.

## 8. Перевірка

- `node tools/validate.mjs --quiet` — **0 помилок**. Для content/eng/plan.js і e4s* попереджень немає. 230 попереджень у дереві — чужі файли й незавершена робота агентів рушія.
- Build не запускав (паралельна робота). plan.js підхопить `manifest()` з build.mjs, бо читає теку `content/eng/`.
- Апостроф у рядках — ’ (U+2019, глосарій). Лексика британська: flat, shopping centre, films, sports day, holiday(s), café.

**Упевненість:**
- висока — щодо тем, функцій і граматики 4 кл.: прочитано з PDF, сторінки звірено з колонтитулами;
- середня — щодо тижнів: годин за темами програма не дає;
- **низька — щодо відповідності програмі, якої вимагає ліцей (№ 1273):** текст не звірено (§0).

# Незалежна верифікація

Верифікатор: verifier-curate-eng-plan-g4 (content-verifier), 2026-11-19. Цей план я не писав. Склад, теми, граматику й сторінки звіряв із самим PDF програми (завантажив заново), а англійську — зі словниками, відкритими в сесії, а не зі звітом автора.

## В1. Джерела (відкрито в цій сесії)

| Сигла | Що відкрито | URL | Результат |
|---|---|---|---|
| ТОП 3–4 | PDF завантажено заново: 1 888 013 байт, SHA-1 `aa8d161a330bbede5b21484f47be92d12548f785` (як в автора), 141 с.; `pdftotext -layout`, с. 40, 50–55, 60–63 | https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf | ✅ с. 40: «на кінець 4-го класу – рівня А1»; с. 60: обсяги 4 кл. (читання 100–150 слів, письмо 40–50, монолог 5–6 речень, діалог 5 реплік) і «рамкова … не обмежує … у виборі порядку»; с. 61: граматика «імпліцитно»; 3 кл. — с. 61–62; **4 кл. — с. 62–63** (теми, функції, граматика), далі «Німецька мова». Дослівна транскрипція автора в §1 збігається з PDF; одне уточнення — функції (див. В6) |
| CD «sport» | [U] UK «all types of physical activity … do/play sport» | https://dictionary.cambridge.org/dictionary/english/sport | ✅ загальне значення в BrE — незлічуване *sport* |
| OALD «sport» | «When talking about sport or sports in general, the form is usually the uncountable sport in British English and the plural sports in North American English» | https://www.oxfordlearnersdictionaries.com/definition/english/sport_1 | ✅ → правка П1 |
| OALD «holiday» | «holidays [plural] … (North American English) the time from late November to early January … Happy Holidays!»; BrE *holiday(s)* = відпустка, канікули («the school/summer/Christmas holidays») | https://www.oxfordlearnersdictionaries.com/definition/english/holiday_1 | ✅ «Happy holidays!» — AmE → правка П3; «Holidays and travel», «holiday plans», «A postcard from my holiday» — BrE ✅ |
| CD «holiday» | «the holidays [plural] (US also the holiday season)» | https://dictionary.cambridge.org/dictionary/english/holiday | ✅ підтверджує OALD |
| CD Grammar «Will» | «We use will and be going to for decisions, intentions and plans. We use will when the decision is immediate and be going to when we have already made a plan»; «We usually use ’ll, not will, after I think» | https://dictionary.cambridge.org/grammar/british-grammar/will | ✅ → правка П4 |
| CD Grammar «Be going to» | «We use be going to to talk about future plans and intentions. Usually the decision … has already been made» | https://dictionary.cambridge.org/grammar/british-grammar/be-going-to | ✅ |
| CD «fill sth in» | «fill in a form» (also fill sth out) | https://dictionary.cambridge.org/dictionary/english/fill-in | ✅ «filling in a form» — BrE |
| CD «sports day», «shopping centre», «fair» | sports day — шкільне змагання (UK); «shopping centre … UK (US shopping center)»; «the school fair» | https://dictionary.cambridge.org/dictionary/english/sports-day · https://dictionary.cambridge.org/dictionary/english/shopping-centre · https://dictionary.cambridge.org/dictionary/english/fair | ✅ |

WebFetch до dictionary.cambridge.org у цій сесії не резолвить хост; сторінки відкрито через `curl` (HTTP 200) і прочитано текстом.

## В2. Теми й підтеми 4 кл. (с. 62–63) ↔ розділи

| Тема програми | Підтема | Де в плані | Вердикт |
|---|---|---|---|
| Я, моя родина і друзі | місцепроживання | e4s1 «Where do you live? Addresses», «About me: filling in a form» | ✅ |
| | населені пункти | e4s1 «Cities, towns and villages»; e4s7 «Capital cities…» | ✅ |
| Помешкання | види помешкань | e4s2 «Homes: a house or a flat?» | ✅ |
| | умеблювання | e4s2 «Furniture in my room» | ✅ |
| Відпочинок і дозвілля | спорт | e4s3 «Sports: play, go and do» | ✅ |
| | улюблені дитячі герої | e4s3 «Favourite heroes from books and films» | ✅ |
| | магазини і покупки | e4s4 весь | ✅ |
| Людина | гігієна | e4s5 «Keeping clean…», «Healthy habits…» | ✅ |
| | стан здоров’я | e4s5 «How do you feel?…», «What’s the matter?…», «At the doctor’s» | ✅ |
| Природа і навколишнє середовище України та країн виучуваної мови | довкілля | e4s6 «Nature in Ukraine and the UK», «Let’s help nature!» | ✅ |
| | природні явища | e4s6 «Seasons and weather», «It’s raining now!…» | ✅ |
| Подорож по Україні та до країн виучуваної мови | поїздка на канікулах | e4s7 «A postcard from my holiday», «Plans for the summer…» | ✅ |
| | види транспорту | e4s7 «Transport: by bus, by train, on foot» | ✅ |
| | назви столиць, населених пунктів | e4s7 «Capital cities: Kyiv, London and more» | ✅ |
| Свята та традиції | святкування в кафе | e4s8 «A party at a café: ordering food» | ✅ |
| Шкільне життя | шкільні події | e4s8 «School events: a concert, a sports day, a fair» | ✅ |

Усі 8 тем і 16 підтем покрито. Порядок і поєднання тем (e4s8 — дві теми) програма дозволяє (с. 60).

## В3. Граматика 4 кл. (с. 63) — позиції інвентаря

| Позиція | Розділ | Вердикт |
|---|---|---|
| comparative / superlative | e4s6 «Bigger, colder, faster» / e4s7 «The biggest and the longest» | ✅ |
| adverbs and adverbials of frequency / movement | e4s3 «How often?…», «My week…» / e4s7 «Which way? Up, down, across, along» | ✅ |
| S + V + O | наскрізно (окремого рядка нема — програма й не вимагає тем-граматики, с. 61) | ✅ |
| but/and/or; because | e4s3; e4s5 «Why? Because…» | ✅ |
| how-questions: time, measurement, size, quantity | quantity — e4s4; time — e4s8 «when and what time?»; size і measurement — у плані рядком не видно, автор відніс у «Специфіку» e4s6/e4s7 | ✅ (рекомендація Р2) |
| a/an with jobs | e4s1 «Jobs: a doctor, an engineer» | ✅ |
| would like to + infinitive | e4s4 «I’d like… I’d like to buy…» | ✅ |
| Present Continuous | e4s6 (два рядки), e4s8 «I play, I’m playing» | ✅ |
| Future Simple for plans and intentions | e4s7 «Plans for the summer: I think I’ll…» (після П4) | ✅ |

Розподіл між розділами — **наш, концентричний**: програма його не задає, і автор це позначив (заголовок §2, коментар plan.js). Позиції 3 кл. (some/any, ’s, Past Simple, was/were) як повторення — з інвентаря с. 62 ✅. Imperatives — не позиція інвентаря, а функція «розуміти та виконувати прості вказівки» (с. 62–63); позначено (ф) ✅.

## В4. Тижні

[1,5] [6,9] [10,13] [14,17] [18,21] [22,26] [27,31] [32,35]: 5+4+4+4+4+5+5+4 = 35, без прогалин і накладок ✅. Обґрунтування 5-тижневих розділів (e4s1 — повторення, e4s6/e4s7 — найбільше граматики) розумне; програма годин за темами не дає.

## В5. Англійська `title` / `why` / `plan`

Перевірено кожен рядок: рівень A1, речення короткі, лексика зі шкільного побуту, ’ і “ ” за глосарієм, Kyiv. Британська норма: flat, shopping centre, filling in a form, at the weekend, ill, At the doctor’s, holiday(s) = канікули, sports day, café ✅. Нічого з підручників CUP/OUP: назви й рядки загальні, без персонажів і назв серій ✅.
Знайдено й виправлено (див. В7): AmE-форми «sports» у загальному значенні та «Happy holidays!»; ненатуральне «To go shopping in English»; «I will…» для вже складених планів.

## В6. Функції (с. 62–63)

- Привітатися, представити себе — e4s1 ✅; описувати — e4s2, e4s6 ✅; ставити запитання — наскрізно ✅; виконувати вказівки — e4s5 ✅; вітати зі святом — e4s8 ✅; виражати настрій — e4s5 ✅; уподобання — e4s3 ✅.
- **Попрощатися, вибачитися, подякувати** окремим рядком у плані не названі. Це не дірка плану (функції не теми), але автори мають їх дати: Р1.
- Уточнення до §1 автора: «розуміти інформаційні вказівники» є лише в 3 кл. (с. 61), у 4 кл. її нема — виправлено в §1. Рядок e4s4 «signs and floors» спирається не на функцію, а на дескриптор A1 с. 52 (путівники торговим центром, вказівники) ✅.

## В7. Правки (зроблено в content/eng/plan.js)

| № | Було | Стало | Чому |
|---|---|---|---|
| П1 | e4s3 `title` «Free time: sports and heroes»; `why` «To talk about sports and your free time.» | «Free time: sport and heroes»; «To talk about sport and your free time.» | OALD: у загальному значенні BrE — *sport*, AmE — *sports*. Рядок «Sports: play, go and do» лишено: там злічуване (різні види спорту). id не змінено |
| П2 | e4s4 `why` «To go shopping in English. You can ask about prices…» | «To buy things in a shop. And to ask about prices and say what you would like.» | «go shopping in English» — ненатуральна сполука; тепер той самий зразок «To … . And to …», що в інших розділах |
| П3 | e4s8 `why` «…And to say “Happy holidays!”»; `plan` «Happy holidays! Celebrations in Ukraine and the UK» | «…And to say “Happy New Year!” or “Happy birthday!”»; «Happy New Year! Celebrations in Ukraine and the UK» | OALD: «Happy Holidays!» — North American English; у BrE *holidays* = канікули, що для учня 4 кл. ще й плутається з e4s7 |
| П4 | e4s7 `plan` «Plans for the summer: I will…» | «Plans for the summer: I think I’ll…» | CD Grammar: будь-який уже складений план — be going to; will — рішення в момент мовлення, «We usually use ’ll … after I think». Так зберігаємо «Future Simple for … intentions» програми (с. 63) і не вчимо ненатуральної форми; be going to — 5 кл. (дизайн §4.1, e5s9). Знімає відкрите питання автора «will чи be going to» на рівні плану |

## В8. Рекомендації (не блокують)

- **Р1.** «Специфіка» write-eng-g4-e4s4 і -e4s8: вибачитися, подякувати, попрощатися (Thank you, Sorry, Goodbye / See you) — у діалозі покупки й у кафе.
- **Р2.** «Специфіка» write-eng-g4-e4s6/e4s7: How big…? How long…? How far…? (how-questions for size і measurement, с. 63).
- **Р3.** Назва e4s3 тепер «Free time: sport and heroes» — оновити заголовки tasks/todo/write-eng-g4-e4s3.md, write-eng-pool-g4-e4s3.md і таблицю docs/design/english.md §4.0 (не мої файли; inbox).
- **Р4.** e4s7: у «Специфіці» вже є пастка will / be going to; з рядком «I think I’ll…» контекст завдань — спонтанне рішення чи невпевнений намір, be going to — у ключ як друга правильна відповідь.
- Відкрите в автора лишається відкритим: звірка з ТОП Шияна № 1273 (тексту нема, D-055 доп. п. 7); обсяг тексту 4 кл. (програма с. 60 — 100–150 слів, дизайн §6.1 — 50) — для curate-eng-style.

## В9. Прогін і вердикт

- `node tools/validate.mjs --quiet` після правок — **0 помилок** (230 попереджень — чужі файли; для content/eng/plan.js і e4s* попереджень нема). Build не запускав (паралельна робота агентів рушія).
- **Вердикт: план придатний** — теми, підтеми й граматика 4 кл. покриті повністю, тижні 1–35 без дір, англійська після 4 правок британська й природна. Застереження про програму (Савченко замість Шияна № 1273) лишається — його знімає лише людина текстом № 1273.
