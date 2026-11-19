---
id: curate-eng-plan-g5
type: curate
subject: eng
grade: 5
depends_on: [curate-eng-plan-g4]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# План «Англійська мова», 5 клас (content/eng/plan.js)

## Навіщо
Перший крок класу (як plan-ukr-g9): план → верифікація плану → задачі write-eng-g5-* (уже створено за орієнтовним планом нижче; якщо куратор змінить розділи — оновлює ці задачі: нові розділи — нові задачі, зайві — у done з поясненням).

## Що зробити
1. Відкрити в сесії джерела (Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.) і звірити теми, підтеми, функції й граматику класу.
2. `content/eng/plan.js`: `SLID.section("eng", { id, grade, weeks (35 тижнів; години — docs/design/english.md §11.2 п. 2), title, why, plan, requires })` — **англійською** (рішення людини), без `lessons`. **id розділів — ключі прогресу.**
3. Звіт `reports/verify/plan-eng-g5.md` (українською — це звіт, не зміст): розділ ↔ тема/підтема ↔ сторінка програми; розподіл граматики (наш, концентричний — позначити); що не ввійшло й чому.
4. `node tools/validate.mjs` — 0 помилок.

## Орієнтовний план (docs/design/english.md §4)
### 5 клас — A1 → A2 (вхід A1; A2 — наприкінці 6 кл.)
Джерело: МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- `e5s1` «Я, моя родина, мої друзі» — мої родинні зв'язки; професії батьків; мої друзі та їхні уподобання. Граматика (пропозиція): to be; have got; possessive 's; possessive adjectives; this/that/these/those.
- `e5s2` «Шкільне життя» — розклад уроків; робочий день; урок іноземної мови; види діяльності на уроці. Граматика (пропозиція): Present Simple (affirmative, negative, questions); adverbs of frequency; imperatives.
- `e5s3` «Харчування» — продукти харчування; улюблені страви; страви в Україні та країнах виучуваної мови. Граматика (пропозиція): countable/uncountable; some/any; much/many/a lot of; would like.
- `e5s4` «Одяг» — види одягу; сезонний одяг. Граматика (пропозиція): Present Continuous; Present Simple vs Present Continuous.
- `e5s5` «Природа» — погода; природні явища. Граматика (пропозиція): it's + weather; can (ability); comparatives (form).
- `e5s6` «Відпочинок і дозвілля» — види відпочинку та занять; захоплення; канікули. Граматика (пропозиція): like/love/hate + -ing; Let's…; suggestions.
- `e5s7` «Рідне місто/село» — прогулянка містом/селом; місцезнаходження. Граматика (пропозиція): there is/are; prepositions of place; imperatives for directions.
- `e5s8` «Свята і традиції» — календар свят в Україні та країнах виучуваної мови; традиції святкування. Граматика (пропозиція): dates, ordinal numbers; was/were.
- `e5s9` «Подорож» — улюблені напрямки подорожі. Граматика (пропозиція): be going to (plans); Past Simple affirmative (regular verbs).
- `e5s10` «Україна і країни виучуваної мови» — загальні відомості про Україну; загальні відомості про країни виучуваної мови. Граматика (пропозиція): comparatives and superlatives; the + superlatives.

## Готово, коли
- [ ] План у plan.js, звіт, рядки в inbox; задача → tasks/review для content-verifier зі свіжим контекстом.
