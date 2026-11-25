---
claimed_from: todo
claimed_at: 2026-11-25T11:44:16.739Z
id: curate-eng-plan-g10-11
type: curate
subject: eng
grade: 
depends_on: [curate-eng-plan-g7-9]
status: review
claimed_by: curator-plan-eng-g10-11
created: 2026-11-19
source: design-eng
---
# План «Англійська мова», 10–11 клас (content/eng/plan.js)

## Навіщо
Перший крок класу (як plan-ukr-g9): план → верифікація плану → задачі write-eng-g10-* (уже створено за орієнтовним планом нижче; якщо куратор змінить розділи — оновлює ці задачі: нові розділи — нові задачі, зайві — у done з поясненням).

## Що зробити
1. Відкрити в сесії джерела (Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.) і звірити теми, підтеми, функції й граматику класу. 10–11 кл. — розділ П1407 для спеціалізованих шкіл (B2, с. 16–25), не рівень стандарту.
2. `content/eng/plan.js`: `SLID.section("eng", { id, grade, weeks (35 тижнів; години — docs/design/english.md §11.2 п. 2), title, why, plan, requires })` — **англійською** (рішення людини), без `lessons`. **id розділів — ключі прогресу.**
3. Звіт `reports/verify/plan-eng-g10-11.md` (українською — це звіт, не зміст): розділ ↔ тема/підтема ↔ сторінка програми; розподіл граматики (наш, концентричний — позначити); що не ввійшло й чому.
4. `node tools/validate.mjs` — 0 помилок.

## Орієнтовний план (docs/design/english.md §4)
### 10 клас — B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19)
Джерело: П1407 с. 22–23 (спеціалізовані школи, 10-ий клас, англійська), обсяги — с. 21.
- `e10s1` «Relationships and conflicts» — особистість та її якості; стосунки з товаришами; взаємодопомога; вирішення конфліктів. Граматика (пропозиція): Past Perfect with adverbial clauses of time.
- `e10s2` «Sport, health and leisure» — роль спорту; спортивні події; здоров'я та спорт. Граматика (пропозиція): verb + -ing vs to-infinitive; verbs taking gerund.
- `e10s3` «Food and habits» — національні страви; смаки; здорова та корисна їжа; шкідливі звички. Граматика (пропозиція): used to / would + infinitive.
- `e10s4` «Nature, weather and protection» — природні катаклізми; вплив погоди на здоров'я та настрій; захист природи. Граматика (пропозиція): going to / will for predictions; Future Continuous; Future Perfect.
- `e10s5` «Painting and Ukrainian artists» — жанри живопису; відомі художники; музей, виставка, галерея; українські митці. Граматика (пропозиція): Past Perfect Continuous.
- `e10s6` «Science and technology» — комп'ютерне обладнання; сучасні засоби комунікації та інформації. Граматика (пропозиція): first and second conditionals.
- `e10s7` «Ukraine and English-speaking countries» — адміністративний та політичний устрій; природні ресурси; державні свята. Граматика (пропозиція): so … that; so/therefore; due to, owing to.
- `e10s8` «Education and careers» — заклади освіти; освіта в Україні та за кордоном; сучасні професії. Граматика (пропозиція): phrasal and prepositional verbs; prepositions in time phrases.

### 11 клас — B2 (наприкінці 11 кл., рішення людини 2026-11-19)
Джерело: П1407 с. 23–25 (спеціалізовані школи, 11-ий клас, англійська), обсяги — с. 21.
- `e11s1` «Rights, responsibilities and tolerance» — права та обов'язки молоді; норми поведінки; толерантність, гуманність, благодійність; домашнє господарство. Граматика (пропозиція): reporting verbs + that-clause.
- `e11s2` «Food and recipes» — їжа й напої; корисна та шкідлива їжа; пріоритети в харчуванні; рецепти страв. Граматика (пропозиція): quantifiers with countable/uncountable nouns (overview).
- `e11s3` «Leisure: clubs, film, TV and the Internet» — клуби за інтересами; кіно, театр, телебачення, Інтернет; характеристика фільму/вистави. Граматика (пропозиція): present/past participles as adjectives; compound adjectives.
- `e11s4` «Art and festivals» — фестивалі; види та жанри мистецтва; мистецькі заклади; емоції. Граматика (пропозиція): adjectives with suffixes/prefixes; question tags.
- `e11s5` «Science and its impact» — галузі науки; вплив науково-технічного прогресу на людину і довкілля; наука в Україні та за кордоном. Граматика (пропозиція): modals + passive; passive forms (overview).
- `e11s6` «Travel and tourism» — подорож Україною та країнами виучуваної мови; види туризму. Граматика (пропозиція): linking words for chronological sequence; beforehand/afterwards.
- `e11s7` «Ukraine in the world; English-speaking countries» — ЄС, ООН, Рада Європи; право; етикет; міжнародні відносини; знаменні події; видатні люди. Граматика (пропозиція): defining vs non-defining relative clauses; reported speech with changed tenses.
- `e11s8` «Exams, careers and plans» — випускні іспити; міжнародні освітні програми; профорієнтація; престижні професії; плани на майбутнє. Граматика (пропозиція): first, second and third conditional; overview of all tense forms.

## Готово, коли
- [ ] План у plan.js, звіт, рядки в inbox; задача → tasks/review для content-verifier зі свіжим контекстом.

## Нотатки агента (curator-plan-eng-g10-11, 2026-11-25)
- План e10s1–e10s8, e11s1–e11s8 у кінці content/eng/plan.js (англійською, без `lessons` і `requires`), 16 × 6 рядків `plan`; тижні 10 кл. [1,4] [5,9] [10,13] [14,18] [19,22] [23,26] [27,31] [32,35]; 11 кл. [1,5] [6,9] [10,13] [14,17] [18,22] [23,26] [27,31] [32,35] = 35. У шапку plan.js додано абзац про П1407.
- Звіт: reports/verify/plan-eng-g10-11.md (П1407 з osvita.ua, SHA-1 38df1f7ff398f0921f2852bc77fd374c77e1c0ff, 72 с.; с. 17–25 звірено, с. 24 — за рендером: «клуби за інтересами» і «фестивалі» — тема «Дозвілля»; 10 кл. — 10 тем, 26 підтем, 7 функцій, 15 позицій граматики; 11 кл. — 10 тем, 34 підтеми, 11 функцій, 15 позицій; усі 30 позицій розподілено — §2б).
- Склад і id не змінено → нових задач немає, зайвих немає. Назви: e10s4 → «Weather, nature and natural disasters», e11s7 → «Ukraine in the world». У tasks/todo/write-eng-g10/11-* замінено «Тема й підтеми», «Граматика», заголовок (e10s4, e11s7), додано «Специфіка (plan-eng-g10-11)».
- Граматика (наш розподіл, §4): question tags → e11s3, participles → e11s4, reported speech → e11s1, separable/inseparable → e11s6, огляд часів — пасив e11s5 / актив e11s8; (наш) be/get used to, If I were you, reply questions, I wish.
- План 7–9 кл. (curator-plan-eng-g7-9) з’явився в plan.js під час роботи: повтори позначено за ним; 4 рядки 10 кл. переписано, щоб не дублювати e8s2, e8s5, e9s2. Після верифікації 7–9 — звірити (inbox).
- Спірне: «position of indirect object» (TQ-140); державні свята під час воєнного стану (TQ-141); фестивалі з «Дозвілля» в e11s4; (наш) граматика поза інвентарем; факти ООН / Рада Європи / ЄС, ст. 133 Конституції, НМТ — не звіряв, доручено авторам.
- validate: 0 помилок, 235 попереджень (для plan.js / e10s* / e11s* — жодного). Build не запускав, коміту немає.
