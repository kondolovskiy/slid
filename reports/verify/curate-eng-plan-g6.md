# Незалежна верифікація: план «Англійська мова», 6 клас (curate-eng-plan-g6)

Верифікатор: verifier-curate-eng-plan-g6 (content-verifier), 2026-11-20. План e6s1–e6s8 (коміт d7cbb40, content/eng/plan.js), звіт куратора reports/verify/plan-eng-g6.md і задачі tasks/todo/write-eng-g6-e6s1…e6s8 писав не я.
Еталон процесу — верифікація plan-eng-g5 (коміт 1d7bc29, reports/verify/plan-eng-g5.md «Незалежна верифікація», Р1–Р4).
Програму звіряв із самим PDF (завантажив заново в цій сесії), уроки 4–5 кл. — з файлами content/eng/g4-*.js і g5-*.js, а не з планом. Англійську звіряв зі словниками через `curl`: WebFetch ці хости не резолвить, а learnenglish.britishcouncil.org у сесії недоступний.

**Вердикт: план придатний.** 8 тем, 18 підтем і 7 функцій 6 кл. покрито. Граматика взята з інвентаря A2, вище A2 план не забігає. Розділи не спираються на граматику, яку вводять пізніше. Тижні — 1–35. Зроблено 9 дрібних правок: 1 у plan.js, 8 у задачах write-eng-g6-*. Блокувальних знахідок немає.

## В1. Джерела (відкрито в цій сесії)

| Що | URL | Результат |
|---|---|---|
| МП-ІМ, PDF: 633 159 байт, SHA-1 `43925b25c52b569201658248a0183b8c3ad90ff7` (як у куратора), 42 с., `pdftotext -layout` с. 3, 15–22 | https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf | ✅ с. 3: «Після закінчення адаптаційного циклу (5 – 6 класи) … досягають рівня А2». с. 20–21, розд. 4.2.2: 8 тем і 18 підтем, транскрипція куратора в §1 дослівно збігається. Функцій 7, і дві з них на с. 21 («висловлювати власні враження, почуття та емоції», «аргументувати власний вибір, точку зору»). с. 21–22, розд. 4.4: інвентар A2 спільний для 5–6 кл. Сторінки результатів (рецепти, меню, каталоги — с. 16; покупки й квитки — с. 17; онлайн-анкети — с. 18; «що вміє робити добре й не дуже», плани — с. 19) перевірено за колонтитулами ✅ |
| CD Grammar «Like» | https://dictionary.cambridge.org/grammar/british-grammar/like | ✅ «We use be like to talk about someone’s character… look like to talk about someone’s appearance». Там само: «be like to ask for a description of someone or something (e.g. their appearance, their character…)» і «My sister is like my mother (…similar)». Пастку в задачі e6s1 підтверджую |
| OALD like_1 | https://www.oxfordlearnersdictionaries.com/definition/english/like_1 | ✅ «He's very like his father» (similar to). Отже, рядок e6s1 l6 «she’s like her dad» — нормативна BrE |
| CD Grammar «Quite»; OALD quite | https://dictionary.cambridge.org/grammar/british-grammar/quite · https://www.oxfordlearnersdictionaries.com/definition/english/quite | ✅ CD: «‘a little, moderately but not very’». OALD: «(British English) … to some degree, fairly» |
| CD Grammar «Past continuous» | https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-i-was-working | ✅ питання з Past Continuous нормативні («What were you thinking about when…?»). Атрибуцію інвентаря див. В3 |
| CD chemist; OALD chemist, newsagent | https://dictionary.cambridge.org/dictionary/english/chemist · https://www.oxfordlearnersdictionaries.com/definition/english/chemist · https://www.oxfordlearnersdictionaries.com/definition/english/newsagent | ✅ CD: «A2 UK (UK also chemist’s); (US drugstore)». OALD: «Take this prescription to the chemist's»; «I'll go to the newsagent's…» |
| OALD sport_1 | https://www.oxfordlearnersdictionaries.com/definition/english/sport_1 | ✅ «[uncountable] (British English) (North American English sports [plural])», а перед іменником — «sports» в обох варіантах. «Sport», «kinds of sport», «Sports news» — BrE |
| OALD look_1 «be just looking» | https://www.oxfordlearnersdictionaries.com/definition/english/look_1 · https://dictionary.cambridge.org/dictionary/english/just-looking | ✅ «used in a shop to say that you are not ready to buy something» → у задачу e6s2 |
| OALD tradition (Oxford 3000 a2); CD tradition — B2 | https://www.oxfordlearnersdictionaries.com/definition/english/tradition · https://dictionary.cambridge.org/dictionary/english/tradition | ⚠️ рівні в словниках розходяться (OALD A2, CD B2). Слово взято з теми програми («традиції харчування») і вже є в e5s8l4 «How do you celebrate? Traditions». Прийнятно |
| Kyiv — столиця, на Дніпрі | https://dictionary.cambridge.org/dictionary/english/kyiv («the capital city of Ukraine…») · https://en.wikipedia.org/wiki/Kyiv («capital and most populous city of Ukraine… straddles both banks of the Dnieper River») · https://esu.com.ua/article-11194 («на обох берегах Дніпра») | ✅ e6s7 title, l1 |
| London — столиця UK, на Темзі | https://dictionary.cambridge.org/dictionary/english/london («the capital city of England and the United Kingdom… on the River Thames») · https://en.wikipedia.org/wiki/London («London is the capital of the United Kingdom») | ✅ e6s8 title, l1 |

### Рівні слів із назв, `why` і `plan` (CD, `https://dictionary.cambridge.org/dictionary/english/<слово>`, curl у сесії)

A1: beard, glasses, famous, expensive, mum. A2: friendly, kind, prefer, suitcase, passport, advice, sightseeing, visitor, capital, square (місце), document, dish, menu, project (шкільне), pack, pence, match (UK, US game), timetable (UK), change («the money that is returned…»). B1: shy, honest, ferry, main, rule, experiment, recipe, coin, note (UK, гроші).
Слова B1 у назвах (shy, ferry, main, rule, experiment, recipe) — слова самої теми, а main — позиція інвентаря A2 («limiting adjectives (main, only)», с. 21). Куратор уже позначив у задачах, що їх треба вводити з картинкою чи прикладом (D-019) ✅.

## В2. Теми, підтеми, функції (с. 20–21) ↔ розділи

Таблицю §2а куратора перевірив рядок за рядком на plan.js: 18 підтем → рядки `plan` ✅. Набір розділів і порядок збігаються з дизайном §4.2. Програма рамкова, порядок тем обирає вчитель (с. 20) ✅.

| Функція (с. 20–21) | Де в плані | Вердикт |
|---|---|---|
| описувати, розповідати, характеризувати | e6s1 (увесь), e6s3 l6, e6s7 | ✅ |
| запитувати та надавати інформацію | наскрізно (e6s2 l1–l2, e6s5 l2) | ✅ |
| розпитувати з метою роз'яснення та уточнення | рядком не названа | ⚠️ → П8: у задачу e6s5 (діалог квитка, l6) |
| порівнювати | e6s8 l4 «Kyiv and London: two capitals» | ✅ |
| пропонувати, приймати, відхиляти пропозицію | рядком не названа; куратор поклав її лише на «Shall I…?» на вибір автора e6s5 | ⚠️ → П2: у задачу e6s2 (Can I help you? — Yes, please / I’m just looking, thank you) |
| висловлювати враження, почуття, емоції | e6s4 l6 «What a match!», e6s6 l6, e6s8 l6 | ✅ |
| аргументувати вибір, точку зору | e6s4 l2 «…and why?», e6s6 l1 | ✅ |

## В3. Граматика: інвентар A2 (с. 21–22), дубль із 5 кл., порядок

**Звірка кожної позиції плану з текстом с. 21–22:**
look + adjective (Adjectives: «with ‘be’ and linking verbs»); degree adverbs; be like + noun (Clauses: Comparative); with/without (Preposition); noun phrases (Nouns); quantity all, both, a few, no; too; purpose (Subordinated: purpose); Past simple: affirmative, negative, questions, with ‘when’; Passives: Present / Past simple affirmative; sequencing (Adverbs); Could: abilities; Present simple for future: timetables; Present continuous for future arrangements; Have (got) to; May, might; Must; Should; Relative: defining with who, which, that; Present perfect: experiences; limiting adjectives main, only; Conditional: if + Present simple, real conditions; Reported statements with say and tell. Усе ✅. Позицій вище A2 в плані немає: first conditional, non-defining relatives, Future continuous і would (imagined situations) відкладено на 7 кл. (§2в куратора).

**Уточнення атрибуції (не блокує):**
- **Past Continuous** (e6s4): інвентар с. 22 дає лише «affirmative, background events, events in progress». Куратор у §2 приписав A2 ще й negative і questions. Їх можна вивести з Clauses «Negative declarative» і «Interrogatives» (с. 21), а CD Grammar питання наводить. Рядок «What were you doing at six o’clock?» лишаю, але в задачу e6s4 записав, звідки ця позиція (П6).
- **Past passive** (e6s7 l3 «When was it built?»): інвентар дає лише «Past simple affirmative». Рядок лишаю як питання-опору, яке учень розуміє, а пише відповідь «It was built in…». Записано в задачу e6s7 (П7).

**Дубль із 4–5 кл. Перевірено в самих розділах (grep по g4-*.js, g5-*.js і список усіх 106 уроків), а не лише в плані:**
- a few, must/mustn’t, should, have to, ever, I’ve, might, made with/from/of, was built, was/were + -ing, if, said/told, look like, quite, really — у 4–5 кл. жодного входження ✅. Звідси: нові позиції 6 кл. справді нові.
- ⚠️ **Знахідка: §2б куратора неповний.** Неправильні форми **went, swam, ate, saw** уже введено в **e4s7l5** «A postcard from my holiday»: інфо-екран «go → went, swim → swam, eat → ate, see → saw», вправи gaps і word. e5s9 вживає «swam», а «What did … do?» стоїть у назвах екранів e4s7 і e5s9. Куратор шукав went/saw лише в g5-*.js. Висновок не змінюється: у e6s3 систематизація irregular, negative і questions — розширення, не дубль. Але `requires` і рядок граматики задачі e6s3 мали пропуск. Виправлено (П3, П4).
- «too» трапляється раз у e4s2 («One shelf is too small»), побіжно, не як навчальна позиція. «both» — по разу в e4s3 і e5s10 ✅.
- e6s2 l4 «Pounds, pence and hryvnias: money» майже дослівно повторювала e4s4l4 «Prices: how much is it?»: там є інфо-екран «pounds (£) and pence (p)… hryvnias (₴)» і `learned` «Read prices in pounds, pence and hryvnias.». Підтема «Гроші» в 6 кл. законна, але рядок мав показувати розширення. Виправлено (П1).
- will / be going to (e4s7l6, e5s5l5, e5s9l3–l4), Can I…? / Could you…? (e5s2l6), some/any/much/many (e5s3l3–l4), What is she like? (e5s1l6; ще e4s3 «What is he like?»), superlatives (e4s7l4, e5s10l5) — у 6 кл. лише повторення. Так і сказано в плані й задачах ✅.

**Порядок розділів: ніщо не спирається на граматику, введену пізніше:**
- Past Simple irregular, negative і questions — e6s3 (тижні 9–13). Його вживають: e6s4 (Past Simple with when, «what happened in a match»), e6s6 l6 (враження про урок), e6s7 (passive built, Present Perfect з been/seen), e6s8 (said / told). Усі вони стоять пізніше ✅.
- have (got) to (e6s5) іде перед must (e6s6). Задача e6s5 прямо каже, що must — у e6s6 ✅.
- Present Perfect (e6s7) іде перед повторенням у e6s8 ✅. Past passive (e6s7 l3) спирається на форму built, яка збігається з Past Simple ✅.
- e6s1 і e6s2 стоять до e6s3, і минулого часу в їхніх рядках немає ✅.
- Дрібне: `why` e6s7 «places you have visited» вживає Present Perfect у картці розділу ще до уроку. Так само `why` e6s3 («meals you had»), e6s4, e6s8 показують граматику свого ж розділу. Прийнятно: це прев'ю розділу, а не пояснення. Р2.

**Навантаження:** 6 кл. закриває майже весь інвентар A2, але це відповідає с. 3: A2 наприкінці 6 кл. Три розділи по 5 тижнів (e6s3–e6s5) якраз ті, де граматики найбільше ✅.

## В4. Тижні, обсяг, `requires`

- Скрипт по plan.js: [1,4] [5,8] [9,13] [14,18] [19,23] [24,27] [28,31] [32,35] — 35 тижнів без прогалин і накладок; 8 × 6 рядків `plan`. У 4 і 5 кл. — теж 1–35 ✅.
- `requires` у plan.js немає. Обґрунтування те саме, що у В6 plan-eng-g5: app/registry.js:28 `Object.assign({}, old, sec, …)` — файл розділу успадковує поле плану. Скіл content-author каже «`requires` — у своєму файлі розділу» ✅.
- Таблицю §6 звірив з id і назвами уроків у файлах: усі 25 id існують і за змістом відповідають. Додано e4s7l5 → e6s3 (П4), e4s4l5 → e6s2 (I’d like to buy, «Can I help you?» — П2), e5s4l3 → e6s4 (питання be + -ing — П5). Внутрішні зв'язки 6 кл. (e6s4, e6s7 → e6s3; e6s8 → e6s7) — після злиття, як пропонує куратор ✅.

## В5. Англійська `title` / `why` / `plan`

Кожен рядок e6s1–e6s8 перевірено. Скрізь апостроф ’ і три крапки «…», прямих апострофів немає. Kyiv, the Dnipro, London, the Thames — за глосарієм. Терміни «the Past Continuous», «the Past Simple» — за glossary/eng.md.
BrE: chemist’s, newsagent’s, pounds and pence, sport / kinds of sport / sports news, match, timetable, return ticket (лише в задачі), suitcase ✅. AmE-лексики й правопису немає.
Цитат немає: усі рядки коротші за 12 слів, це загальні фрази теми, без персонажів і назв юнітів CUP/OUP ✅.

## В6. Спірні місця куратора (§4 п. 1–7 і «Спірне» в задачі)

| № | Рішення куратора | Вердикт |
|---|---|---|
| 1 | Склад розділів, id і теми не змінено | ✅ збігаються з с. 20–21 і дизайном §4.2 |
| 2 | adjective order — лише мінімум «розмір/довжина → колір» | ✅ «order» в інвентарі с. 21–22 немає; є «Noun phrases with determiners and adjectives» |
| 3 | too перенесено з e6s1 в e6s2 | ✅ «Modifying… with ‘too’» (с. 21); контекст покупок природний |
| 4 | can/could (requests) в e6s2 — лише повторення | ✅ e5s2l6 «Can I…? Could you repeat that, please?» існує; новими натомість стали purpose, quantity і too |
| 5 | e6s3: Present Simple passive + sequencing | ✅ обидва в інвентарі (с. 21–22), рецепт — с. 16. Наслідок для 7 кл.: дизайн §4.3 дає e7s7 «Passive (Present Simple, Past Simple)», e7s2 «sequencing adverbs» і e7s5 «Past Continuous vs Past Simple» — у 7 кл. це вже розширення. Рядок NOTE в inbox |
| 6 | e6s4: Could (abilities) | ✅ «Could: abilities, requests» (с. 21); результат с. 19 «що вміє робити добре й не дуже» |
| 7 | e6s5: will / be going to не нові | ✅ e4s7l6, e5s5l5, e5s9l3–l4 існують. Пастку другої правильної відповіді (Present Continuous / be going to; timetable — Present Simple / Present Continuous) в задачі сформульовано правильно |
| 8–11 | relative clauses в e6s6; Past passive і main/only в e6s7; reported speech і if без will в e6s8; назви не повторюють 4–5 кл. | ✅ (атрибуцію passive-питання див. В3) |

## В7. Плани 4–5 кл. ↔ назви уроків після style-eng-g4-5 (коміт 4f13dd8)

Скрипт порівняв `plan[i]` з `title` уроку i (без boss), а також `title`, `why` і `weeks` розділу в plan.js і в усіх 18 файлах g4-*.js і g5-*.js. Робоче дерево content/eng/g4-*, g5-* не має незакомічених змін. **Розбіжностей 0.** Куратор синхронізував 18 назв уже після коміту стиліста (d7cbb40 іде після 4f13dd8). Правок у 4–5 кл. не потрібно.

## В8. Правки (зроблено)

| № | Файл | Було → стало | Чому |
|---|---|---|---|
| П1 | content/eng/plan.js e6s2 l4 | «Pounds, pence and hryvnias: money» → «Paying and getting change: pounds and hryvnias» | рядок повторював e4s4l4. change (гроші) — CD A2 «the money that is returned to someone who has paid…» |
| П2 | write-eng-g6-e6s2 | + `requires` e4s4l5; гроші — розширити e4s4l4 (разом, change); функція «пропонувати/приймати/відхиляти»: Can I help you? — Yes, please / I’m just looking, thank you (OALD look_1) | В2, В3 |
| П3 | write-eng-g6-e6s3 | «розширення e5s9l5 — там лише regular» → «розширення e4s7l5 (went, swam, ate, saw) і e5s9l5 (regular)» | В3, знахідка |
| П4 | write-eng-g6-e6s3 | `requires` + e4s7l5; «Ostap — однокласник Тараса» → «друг Тараса (e5s1, e5s3)» | у розділах Ostap — «his best friend» (e5s1), «his friend Taras» (e5s3); однокласником ніде не названий |
| П5 | write-eng-g6-e6s4 | `requires` + e5s4l3 | питання be + -ing — опора для «What were you doing…?» |
| П6 | write-eng-g6-e6s4 | атрибуція Past Continuous negative/questions | В3 |
| П7 | write-eng-g6-e6s7 | «When was it built?» — питання-опора, продукція — affirmative | інвентар: Passives — лише affirmative |
| П8 | write-eng-g6-e6s5 | функція «розпитувати з метою роз’яснення» в діалозі квитка (l6) | В2 |
| П9 | write-eng-g6-e6s6 | «Daryna, Kateryna, Bohdan — той самий клас» → «Daryna, Zoriana, Bohdan» | style-eng-g4-5 перейменував однокласницю Andrii в e5s2 на Zoriana (grep: Kateryna лише в e4s3, e4s8; Zoriana — e5s2) |

id не змінено. Звіт куратора plan-eng-g6.md не редагував, бо це не мій файл. Що в ньому застаріло:
- §7: Dmytro у 6 кл. вже 8 років. У e4s1 і e4s7 йому 6, а героям додаємо два роки, як Oksana (10 → 12).
- §7: Oksana їздить до дядька Ivan в Odesa щороку в **липні**, а не «щочервня» (канон style-eng-g4-5, inbox).
- §7: однокласниця Andrii — Zoriana, а не Kateryna.
- §2б: пропущено e4s7l5.

## В9. Рекомендації (не блокують)

- **Р1.** Автору e6s1: канон зовнішності героїв задає він — NOTE в inbox. Не суперечити наявним картинкам 4–5 кл., якщо герої на них є.
- **Р2.** `why` e6s7 «places you have visited» за бажанням стиліста 6 кл. можна спростити («…and places you know»). Те саме прев'ю граматики є в e6s3 і e6s8, тож рішення — для всього класу.
- **Р3.** Куратору плану 7 кл.: passives (affirmative), sequencing і Past Continuous уже є в 6 кл. — у 7 кл. давати їх як розширення (питання й заперечення passive, used to тощо).

## В10. Прогін і вердикт

- `node tools/validate.mjs --quiet` після правок: **0 помилок, 235 попереджень**. Для content/eng/plan.js і e6s* попереджень немає. Build не запускав, бо паралельно працюють інженер і верифікатор 4–5 кл.
- **Вердикт: план придатний** (9 дрібних правок, з них 1 у plan.js). Задача → done. Людині блокувального нічого. На розсуд — Р2.
