# План: Англійська мова, 6 клас (content/eng/plan.js, e6s1–e6s8)

Автор плану — агент curator-plan-eng-g6, 2026-11-20 (задача curate-eng-plan-g6, роль — куратор плану). Еталон процесу — reports/verify/plan-eng-g5.md (з розділом «Незалежна верифікація», рекомендації Р1–Р4 і §6 `requires`).
Це звіт **автора** плану, а не незалежна верифікація. План має перевірити content-verifier зі свіжим контекстом.

## 1. Джерело (відкрито в цій сесії)

| Сигла | Джерело | URL | Що звірено |
|---|---|---|---|
| **МП-ІМ** | Модельна навчальна програма «Іноземна мова. 5–9 класи» (Редько В. Г. та ін.), наказ МОН № 795 від 12.07.2021, 42 с. | https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (633 159 байт, SHA-1 `43925b25c52b569201658248a0183b8c3ad90ff7` — той самий файл, що в plan-eng-g5; `pdftotext -layout`) | с. 3 — A2 після 6 кл.; с. 14 — компетенції A2 (5–6 кл.); **с. 15–19 — результати на кінець 6 кл.**; **с. 20–21 — розд. 4.2.2 (6 кл.)**; **с. 21–22 — розд. 4.4, граматика A2 (англійська)** |

Текст сторінок на час сесії — у `/tmp/claude-0/-home-user-slid/cdcc8e27-2339-504a-b8a4-5bf593ec4683/scratchpad/plan-eng-g6/dl/` (тека тимчасова). Колонтитули с. 20, 21, 22 звірено.

### Що каже програма про 6 кл. (дослівно, с. 20–21)

- **Розд. 4.2 (с. 20):** програма рамкова; порядок і зміст тем — вибір учителя; теми можна поєднувати.
- **Мовленнєві функції 6 кл. (с. 20–21):** описувати, розповідати, характеризувати; запитувати та надавати інформацію; розпитувати з метою роз'яснення та уточнення інформації; порівнювати; пропонувати, приймати, відхиляти пропозицію; **висловлювати власні враження, почуття та емоції** (с. 21); **аргументувати власний вибір, точку зору** (с. 21).
- **Теми → підтеми (8 тем, 18 підтем):**
  - Я, моя родина, мої друзі → зовнішність; риси характеру;
  - Покупки → відвідування магазинів; види магазинів; асортимент товарів; гроші;
  - Харчування → традиції харчування; назви страв;
  - Спорт → види спорту; спортивні уподобання;
  - Подорож → транспорт; підготовка до подорожі; проїзні документи;
  - Шкільне життя → улюблені навчальні предмети; види діяльності на уроках (с. 21);
  - Україна → Київ, визначні місця (с. 21);
  - Країни виучуваної мови → столиця; визначні місця (с. 21).
- **Граматика A2 (с. 21–22):** інвентар спільний для 5–6 кл., «орієнтовний … добирається відповідно до … принципу концентричного навчання … не розглядається як окремі граматичні теми» (с. 21). За класами не поділений. **Розподіл між 5 і 6 кл. і між розділами — наш** (с. 15: «проміжні результати за класами визначають вчителі»).

Розбіжностей між дизайном (docs/design/english.md §4.2) і програмою щодо тем і підтем немає: 8 тем дизайну = 8 тем с. 20–21. Дизайн не називав двох нових функцій с. 21 (враження й почуття; аргументувати точку зору) — їх враховано (§2, остання колонка).

## 2. Розділ ↔ тема ↔ сторінка ↔ граматика

Порядок розділів і id — як в орієнтовному плані (дизайн §4.2) і в задачах write-eng-g6-*. Граматика — **наш концентричний розподіл**. Позначки:
- (A2) — позиція інвентаря с. 21–22, нова для учня;
- (5) / (4) — повторення чи розширення вже пройденого (id уроку в дужках);
- (наш) — вибір без прямої позиції в інвентарі;
- (ф) — мовленнєва функція 6 кл. (с. 20–21).

| id | Назва | Тижні | Тема / підтеми (МП-ІМ) | Граматика (наш розподіл) | Функції і результати A2 (с.) |
|---|---|---|---|---|---|
| e6s1 | Describing people | 1–4 | Я, моя родина, мої друзі — зовнішність; риси характеру (с. 20) | look + adjective — Adjectives: with linking verbs (A2); What does she look like? / What is she like? — розширення (5: e5s1l6); noun phrases with adjectives: long dark hair (A2: Nouns — noun phrases; порядок прикметників у інвентарі не названо — мінімум «розмір/довжина → колір», **наш**); with / without for possession (A2: Preposition); degree adverbs very, quite, really (A2: Adjectives — modifying with degree adverbs); be like + noun: She’s like her dad (A2: Clauses — comparative) | описувати, характеризувати (ф); описує людей (19); розуміє опис особи (16) |
| e6s2 | Shopping and money | 5–8 | Покупки — відвідування магазинів; види магазинів; асортимент товарів; гроші (с. 20) | Quantity: a few, both, all, no (A2); too + adjective (A2: Adjectives — modifying with ‘too’); purpose to-infinitive: To buy some bread (A2: Clauses — subordinated, purpose); повторення: how much / how many (4: e4s4l3; 5: e5s3l4), Can I…? / Could I…? (5: e5s2l6), I’d like (4: e4s4l5) | запитувати й надавати інформацію; аргументувати вибір (ф: «I’ll take the blue one, because…»); робить покупки, питає ціну (17); каталоги, оголошення (16) |
| e6s3 | Food traditions and dishes | 9–13 | Харчування — традиції харчування; назви страв (с. 20) | **Past Simple: irregular, negative, questions** (A2; розширення 5: e5s9l5 — там лише regular affirmative; was/were — e5s8l5); Passives: Present Simple affirmative — It’s made with… (A2); adverbs of sequence first, then, after that, finally (A2: Adverbs — sequencing); imperatives у рецепті (5: e5s2l5) | розповідати (ф); прості рецепти (16); розповідає про подію (18); меню (16) |
| e6s4 | Sport | 14–18 | Спорт — види спорту; спортивні уподобання (с. 20) | **Past Continuous**: affirmative, negative, questions; background events, events in progress (A2); **Past Simple with when** (A2: Past simple — with ‘when’ in subordinate clauses); Could: abilities — I could swim when I was five (A2); повторення: play / go / do (4: e4s3l1), can (5: e5s6l4), What a…! (5: e5s8) | висловлювати враження й емоції (ф, с. 21); аргументувати вибір (ф: «Which sport do you prefer and why?»); новини про спорт (16); що вміє добре й не дуже (19) |
| e6s5 | Getting ready for a trip | 19–23 | Подорож — транспорт; підготовка до подорожі; проїзні документи (с. 20) | Present Simple for future: timetables (A2: Present simple for future — timetables and plans); Present Continuous for future arrangements (A2); have (got) to: obligation, questions (A2); might: possibility (A2: May, might); повторення без дубля — will (4: e4s7l6; 5: e5s5l5), be going to (5: e5s9l3–l4): лише в порівнянні з новими формами; Shall I…? (A2: Shall — offers) — на вибір автора | запитує інформацію про подорож і транспорт, купує квитки (17); розклади (16); плани на канікули (19); підтверджує домовленості (18) |
| e6s6 | School life: subjects and lessons | 24–27 | Шкільне життя — улюблені навчальні предмети; види діяльності на уроках (с. 21) | **Must: obligation** — must / mustn’t (A2); **Should: advice, questions** (A2); **defining relative clauses with who, which, that** (A2: Clauses — relative); повторення: Past Simple у підсумковому уроці (e6s3), Can I…? (5: e5s2l6) | аргументувати точку зору (ф: «My favourite subject and why»); висловлювати враження (ф: «The best lesson of the year»); розпитує й розповідає про навчання (18) |
| e6s7 | Kyiv, the capital of Ukraine | 28–31 | Україна — Київ, визначні місця (с. 21) | **Present Perfect: experiences up to now, ever / never** (A2; been to); **Passives: Past Simple affirmative** — It was built in… (A2); the + specifying adjectives, limiting adjectives the main…, the only… (A2: Determiners, Adjectives — position); superlatives — повторення (5: e5s10l5) | описувати (ф); ілюстровані брошури й карти, пам'ятки (16); тексти про місця й культуру (16) |
| e6s8 | London, the capital of the UK | 32–35 | Країни виучуваної мови — столиця; визначні місця (с. 21) | **if + Present Simple: real conditions** — If it rains, go to a museum! (A2: Conditional; головне речення — імператив чи Present Simple; first conditional з will — **наш** перенос на 7 кл.); **reported statements with say and tell** (A2: Reported speech; без вимоги backshift); повторення: Present Perfect і Past passive (e6s7), comparatives / superlatives (5: e5s10l4, e5s10l5) | порівнювати (ф: «Kyiv and London: two capitals»); висловлювати враження (ф: «A post from London: what I liked most»); онлайн-дописи про враження (18); коротка презентація (19) — у нас письмовий допис |

**Покриття програми 6 кл.:** 8 тем і 18 підтем — кожна має щонайменше один рядок `plan` (таблиця в §2а). Сім функцій — наскрізно; дві нові (враження й почуття; аргументувати точку зору) — окремими рядками в e6s2, e6s4, e6s6, e6s8.

### 2а. Підтема → рядок плану

| Тема | Підтема | Рядок плану |
|---|---|---|
| Я, моя родина, мої друзі | зовнішність | e6s1 l1–l3, l6 |
| | риси характеру | e6s1 l4–l6 |
| Покупки | відвідування магазинів | e6s2 l5 «Can I help you? In a clothes shop», l6 |
| | види магазинів | e6s2 l1, l2 |
| | асортимент товарів | e6s2 l3 «A few, both, all, no: a shopping list», l1 |
| | гроші | e6s2 l4 «Pounds, pence and hryvnias: money» |
| Харчування | традиції харчування | e6s3 l6 «Food traditions in Ukraine and the UK» |
| | назви страв | e6s3 l1, l2 |
| Спорт | види спорту | e6s4 l1 |
| | спортивні уподобання | e6s4 l2 «Which sport do you prefer and why?» |
| Подорож | транспорт | e6s5 l1, l2 |
| | підготовка до подорожі | e6s5 l3, l4 |
| | проїзні документи | e6s5 l5 «Tickets and passports…», l6 |
| Шкільне життя | улюблені навчальні предмети | e6s6 l1, l3 |
| | види діяльності на уроках | e6s6 l2 |
| Україна | Київ, визначні місця | e6s7 l1–l6 |
| Країни виучуваної мови | столиця | e6s8 l1, l4 |
| | визначні місця | e6s8 l2, l3, l6 |

### 2б. Граматика 5 кл. — без дубля (перевірено в самих розділах content/eng/g5-*.js)

| Уже є в 5 кл. (урок) | У 6 кл. |
|---|---|
| Past Simple affirmative, лише regular, -ed і правопис (e5s9l5: visited, stayed, travelled) | irregular, negative, questions — e6s3 (розширення) |
| was / were (e5s8l5) | повторення в e6s3 |
| «What is she like?» про характер (e5s1l6) | контраст з «What does she look like?» і be like + noun — e6s1 (розширення) |
| can (ability) (e5s6l4) | could (abilities, минуле) — e6s4 |
| Can I…? / Could you…? (e5s2l6) | лише повторення в діалозі магазину — e6s2 |
| some / any / much / many / a lot of (e5s3l3–l4) | нові a few, both, all, no — e6s2 |
| will для прогнозу (e5s5l5); be going to: plans, questions (e5s9l3–l4); I think I’ll (e4s7l6) | Present Continuous for arrangements і Present Simple for timetables — нові; will / going to — лише в порівнянні — e6s5 |
| comparatives (e5s5), superlatives (e5s10l5) | повторення в e6s7, e6s8 |
| What a…! (e5s8) | повторення в e6s4 l6 |

Пошук у g5-*.js (grep) не знайшов went, saw, didn’t, a few, too + прикметник, must, should, have to, ever been — нових позицій 6 кл. у 5 кл. немає. «both» трапляється раз (e5s10, у тексті) — не як навчальна позиція.

### 2в. Інвентар A2, що лишаємо на 7 кл. (концентрично, B1)

Future continuous (will be doing); will be able to; Present Simple for future з when («When we arrive, …»); first conditional з will; non-defining relative clauses і relative без займенника; negative interrogatives; Would: imagined situations, «it would be»; adverbs of certainty (probably, perhaps) і indefinite pronouns (something, anything) — авторам e6s5 і e6s2 на вибір, рядком плану не винесено. Причина — навантаження 6 кл. і рівень B1 у 7–9 кл. (МП-ІМ с. 3).

## 3. Тижні

Програма годин за темами не розподіляє. Рішення людини: 35 тижнів, ≈ 6 уроків на розділ (D-055, доп. п. 2). 8 розділів на 35 тижнів — три по 5 і п'ять по 4: [1,4] [5,8] [9,13] [14,18] [19,23] [24,27] [28,31] [32,35]. Сума 35, без прогалин і накладок (перевірено скриптом по plan.js; 4 і 5 кл. теж по 35).
- **e6s3, e6s4, e6s5** — по 5 тижнів: найважча граматика року (Past Simple у повному обсязі; Past Continuous з when; три способи говорити про майбутнє й have to).
- **e6s1** — 4 тижні, бо на початку року повторюємо 5 кл.
- Решта — по 4: одна-дві нові позиції.

Кожен розділ — 6 рядків `plan` (+ фінальний boss у файлі розділу), як у 4–5 кл.

## 4. Відхилення від орієнтовного плану (дизайн §4.2, задачі) і чому

1. **Набір розділів, id і теми не змінено** (e6s1–e6s8). Нових задач немає, зайвих теж. У задачах write-eng-g6-* рядок «Граматика» замінено на остаточний розподіл плану, додано «Специфіка (plan-eng-g6)»: пастки другої правильної відповіді, BrE, `requires`, герої.
2. **adjective order (e6s1) — не позиція інвентаря A2** (с. 21–22 його не називають). Лишив мінімум у межах «noun phrases with determiners and adjectives»: long dark hair, big blue eyes. Повне правило порядку (opinion — size — age…) — не в 6 кл.
3. **too перенесено з e6s1 в e6s2** («It’s too big! Too small, too expensive»): природний контекст — покупки й розмір одягу. В e6s1 — very, quite, really і look + adjective.
4. **can/could (requests) з e6s2 — лише повторення**: Can I…? / Could you…? уже в e5s2l6. Натомість нові: purpose to-infinitive, a few / both / all / no, too.
5. **e6s3: додано Present Simple passive і sequencing** — «It’s made with…» і рецепт (програма с. 16: прості рецепти). Past Simple — розширення regular affirmative з e5s9l5.
6. **e6s4: додано Could (abilities)** — «I could swim when I was five» (с. 22: Could: abilities; результат с. 19 — що вміє робити добре).
7. **e6s5: will / be going to — не нові.** Вони вже є (e4s7l6, e5s5l5, e5s9l3–l4). Нові — Present Continuous for arrangements, Present Simple for timetables, have (got) to, might. Порівняння форм — головна пастка другої правильної відповіді (§5).
8. **e6s6: relative clauses лишилися тут** (як у дизайні); фінальний урок — враження («The best lesson of the year»), а не порівняння шкіл UK / UA: воно вже є в e5s2l7 «Letters from two schools».
9. **e6s7: додано Past Simple passive** («When was it built?») — пам'ятки дають природний контекст; the main / the only — Determiners і Adjectives: position (limiting adjectives main, only — с. 21).
10. **e6s8: reported statements лишилися тут** (як у дизайні); if + Present Simple — з імперативом чи Present Simple в головному реченні, без will (first conditional — 7 кл.).
11. **Назви англійською.** Не повторюють назв 4–5 кл.: «Shopping and money» (e4s4 — «Shops and shopping»), «School life: subjects and lessons» (e5s2 — «School life»), «Getting ready for a trip» (e4s7 — «Holidays and travel», e5s9 — «Travel: places to see»).

## 5. Англійська: BrE і природність (з урахуванням знахідок верифікаторів 4–5 кл.)

Перевірено в CD / OALD (curl, у сесії):
- **chemist’s** — CD chemist: «A2 UK (UK also chemist’s); (US drugstore)» — https://dictionary.cambridge.org/dictionary/english/chemist
- **newsagent** — CD «noun [C] UK» — https://dictionary.cambridge.org/dictionary/english/newsagent
- **return ticket** — CD «UK a ticket for travel to a place and back again» — https://dictionary.cambridge.org/dictionary/english/return-ticket. Рядок «A return ticket to …, please» не взяв: це приклад словника. Рядок плану — «Buying a train ticket at the station».
- **pitch** (football pitch) — CD «B2 [C] UK (US field)» — https://dictionary.cambridge.org/dictionary/english/pitch. BrE, але B2 — у назви не виносив.
- **try something on** — OALD «b2» — https://www.oxfordlearnersdictionaries.com/definition/english/try-on. У назви не виносив («Can I help you? In a clothes shop»).
- **be like / look like** — CD Grammar «Like»: «We use be like to talk about someone’s character or personality. We use look like to talk about someone’s appearance»; «My sister is like my mother» (similar to) — https://dictionary.cambridge.org/grammar/british-grammar/like. Але там само: «be like to ask for a description of someone or something (e.g. their appearance, their character…)». Отже, «What is she like?» з відповіддю про зовнішність — не помилка. Пастку внесено в задачу e6s1.
- **quite** — CD Grammar «Quite»: з градуйованим прикметником «a little, moderately but not very»; з неградуйованим — «very» — https://dictionary.cambridge.org/grammar/british-grammar/quite. У BrE quite ≠ very. Пастку внесено в задачу e6s1.
- **ferry** — CD B1 — https://dictionary.cambridge.org/dictionary/english/ferry; **pack** — CD A2 — https://dictionary.cambridge.org/dictionary/english/pack; **sightseeing** — CD A2 — https://dictionary.cambridge.org/dictionary/english/sightseeing (замість *sights*: рівень і значення неоднозначні — CD sight показує лише B1/B2 значення «зір», «вид»).
- **Рівні слів у назвах** (CD): advice, prefer, suitcase, friendly — A2; recipe, experiment, rule, shy, honest, timetable (одне зі значень), blog — B1. *blog* у план не взяв («A post from London», як e4s3l6 «A post about my hobby»). recipe, experiment, rule, shy — слова самої теми, лишив; автор вводить їх з картинкою чи прикладом (D-019), позначено в задачах.
- **sport** (BrE, загальне) — назва e6s4 «Sport»; «sports» лише як прикметник («Sports news») чи види спорту («Which sport…», «different sports … which ones you prefer» у `why` — про конкретні види) — OALD sport_1 (facts/eng.md №14).
- **holiday(s)** у плані 6 кл. немає. **Kyiv, the Dnipro, London, the Thames** — glossary/eng.md (КМУ № 55; the Dnipro з артиклем — facts/eng.md №13). Kyiv on the Dnipro і the Thames through London — уже перевірив verifier-e4s6 (memory/short/inbox.md: ЕСУ article-11194; en/uk.wikipedia).
- Апостроф ’ (U+2019) і три крапки «…» — як у 4–5 кл.; `why` — зразок «To … . And to …», Present Simple та інфінітиви.

**Пастки другої правильної відповіді, винесені в задачі** (pitfalls-content.md «Англійська» п. 3, 12):
- e6s5: timetable — Present Simple, але й Present Continuous; arrangement — Present Continuous, але й be going to;
- e6s6: must / have to у правилах — обидва; who / that, which / that — обидва;
- e6s3: made with / from / of; e6s2: no + noun / not any;
- e6s8: said (that) she likes / liked — без вимоги backshift;
- e6s4: when / while і порядок підрядного речення.

**Нічого з CUP/OUP:** назви загальні (теми програми), без персонажів, серій і назв юнітів. «What a match!», «If it rains, go to a museum!» — звичайні фрази; на точний збіг із підручниками я не перевіряв — верифікатору.

## 6. `requires`

**У plan.js `requires` не ставлю** — як у 5 кл. (plan-eng-g5 §6, В6). Уроки 4–5 кл. тепер існують, тож помилки validate не було б. Але app/registry.js зливає запис плану з файлом розділу (`Object.assign({}, old, sec, …)`), і `requires` з плану успадкував би файл e6sN без відома автора. Скіл content-author прямо каже: «`requires` — у своєму файлі розділу, не в plan.js». Зв'язки — автору розділу, у свій файл; id уроків 4–5 кл. нижче звірено з файлами content/eng/g4-*.js, g5-*.js.

| 6 кл. | спирається на | що саме |
|---|---|---|
| e6s1 | e5s1l6 | «What is she like?», прикметники характеру |
| e6s2 | e4s4l1, e4s4l4, e5s3l4, e5s2l6 | магазини; ціни; how much / how many; Can I…? / Could you…? |
| e6s3 | e5s9l5, e5s8l5, e5s3l6 | Past Simple regular; was / were; страви України й UK |
| e6s4 | e4s3l1, e5s6l4, e4s6l2 | play / go / do; can (ability); форма -ing (Present Continuous) |
| e6s5 | e4s7l1, e4s7l6, e5s9l3, e5s5l5 | by bus / by train; I think I’ll; be going to; will |
| e6s6 | e5s2l1, e5s2l5, e5s2l6 | предмети, розклад; дії на уроці й імперативи; Can I…? |
| e6s7 | e4s7l3, e5s10l1, e5s10l5, e5s7l6 | столиці; Ukraine on the map; superlatives; history and culture |
| e6s8 | e4s7l3, e5s10l3, e5s10l4 | London; склад UK; порівняння країн |

**Усередині 6 кл.** (id уроків 6 кл. ще немає — оркестратор додає після злиття): e6s4 → e6s3 (Past Simple irregular, negative, questions перед Past Continuous і when); e6s7 → e6s3 (неправильні форми перед Present Perfect); e6s8 → e6s7 (Present Perfect, Past passive).

## 7. Герої (та сама серія, що в 4–5 кл.)

Рядки плану не прив'язані до героїв, крім e6s8 l5 «Emma told me about London». Канон — memory/short/inbox.md, рядки NOTE (герої). Головне для 6 кл.:
- **Вік:** герої на два роки старші, ніж у 4 кл. (Oksana — 10 уже у вересні 4 кл., тож у 6 кл. їй 12).
- **Oksana** — Zelena Dolyna (один магазин, кінотеатру й музею немає — e5s7), мама Olena (nurse), тато Petro, бабуся й дідусь Mykola і Hanna (живуть з ними), брат Dmytro (6 років), кузен Denys, подруга Halyna, кішка Murka; щочервня їздить до дядька Ivan в Odesa (e5s6l6).
- **Andrii** — Kyiv, сестра Sofiia, бабуся Nina й дідусь Vasyl у Chernihiv, друг Yaroslav; у класі — Ms Lysenko (англійська), Bohdan, Daryna, Kateryna; без шкільної форми; шахи з дідом. Природний гід у e6s7.
- **Mariia** — Kharkiv, єдина дитина (не писати «my brother»), мама dentist, тато police officer, малює й грає на гітарі.
- **Taras** — Lviv, two brothers і молодша сестра Zlata (канон e5s1), друг Ostap, однокласниця Yaryna, фотографує; собака й кішка. Поїздка до Lviv — e6s5.
- **Emma** — Англія (місто не назване), мама Sarah, кішка Snowy, шкільна форма, плаває; клас їздив до Києва в грудні (e5s4). **Tom** — катається, не плаває.
- Одне ім'я — одна людина, одне місце (PITFALL verifier-e4s1). **Зовнішність героїв ще ніде не зафіксована:** автор e6s1 задає канон (NOTE у inbox), решта розділів 6 кл. йому не суперечать.

## 8. Що не ввійшло і чому

- **Аудіювання** (с. 15: оголошення, радіо, спортивні результати на слух) — поки без звуку (D-055 п. 4). Спортивні новини (e6s4 l6) — текст для читання.
- **Онлайн-анкета на візу, онлайн-транзакції** (с. 18) — поза уроком; проїзні документи (e6s5 l5) — квиток і паспорт у межах «показати, мати з собою».
- **Медичні послуги, скарги** («Їжа холодна», с. 17) — не тема 6 кл. за с. 20–21; «It’s too big!» (e6s2 l6) — найближча функція.
- **Усний монолог і презентація** (с. 19) — замінено письмовими: опис людини (e6s1), допис (e6s8 l6), сторінка для туристів (e6s7 l6).
- **Інвентар A2, відкладений на 7 кл.** — §2в.

## 9. Назви уроків 4–5 кл. у plan.js синхронізовано з verified-розділами

Порівняв скриптом `plan[i]` з `title` уроку i (без boss) в усіх content/eng/g4-*.js, g5-*.js. Розбіжностей було 18; усі виправлено в plan.js за назвою з файлу розділу. Файли розділів не змінював.
- З доручення: e4s5 l2 «Stay healthy every day»; e5s6 l1 «Free time: at home and outside», l5 «Let’s go! Saying yes or no», l6 «School holidays: what do you like doing?»; e5s7 l4 «Excuse me, where is the bus stop?»; e5s8 l5 «Our New Year party was great! Was and were»; e5s10 l6 «Facts about my country».
- Поза дорученням, ті самі розбіжності 4 кл. (автори скоротили назви): e4s1 l1, l2, l5, l6; e4s3 l3, l4; e4s5 l3, l4; e4s7 l1, l6 (пробіл перед «…» — як у розділі); e4s8 l1.
- Назви розділів і `why` у плані й файлах збігаються. Style-sync (style-eng-g4-5) зараз працює в g4-*, g5-*: якщо він змінить назви уроків, plan.js знову розійдеться. Рядок у inbox.

## 10. Перевірка

- `node tools/validate.mjs --quiet` — **0 помилок, 235 попереджень**; для content/eng/plan.js і e6s* попереджень немає. Решта — чужі файли й незавершена робота інших агентів.
- Build не запускав (паралельна робота style-sync та інженера).
- 8 розділів × 6 рядків `plan`; тижні 1–35 без прогалин; id e6s1–e6s8 = `section` у задачах write-eng-g6-*.

**Упевненість:**
- висока — щодо тем, підтем і функцій 6 кл.: прочитано з PDF, колонтитули звірено;
- середня — щодо розподілу граматики A2: програма його не дає, розподіл наш; дубля з 5 кл. немає (перевірено в розділах);
- середня — щодо тижнів.
