---
claimed_from: todo
claimed_at: 2026-11-20T08:28:12.085Z
id: curate-eng-plan-g6
type: curate
subject: eng
grade: 6
depends_on: [curate-eng-plan-g5]
status: review
claimed_by: curator-plan-eng-g6
created: 2026-11-19
source: design-eng
---
# План «Англійська мова», 6 клас (content/eng/plan.js)

## Навіщо
Перший крок класу (як plan-ukr-g9): план → верифікація плану → задачі write-eng-g6-* (уже створено за орієнтовним планом нижче; якщо куратор змінить розділи — оновлює ці задачі: нові розділи — нові задачі, зайві — у done з поясненням).

## Що зробити
1. Відкрити в сесії джерела (Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.) і звірити теми, підтеми, функції й граматику класу.
2. `content/eng/plan.js`: `SLID.section("eng", { id, grade, weeks (35 тижнів; години — docs/design/english.md §11.2 п. 2), title, why, plan, requires })` — **англійською** (рішення людини), без `lessons`. **id розділів — ключі прогресу.**
3. Звіт `reports/verify/plan-eng-g6.md` (українською — це звіт, не зміст): розділ ↔ тема/підтема ↔ сторінка програми; розподіл граматики (наш, концентричний — позначити); що не ввійшло й чому.
4. `node tools/validate.mjs` — 0 помилок.

## Орієнтовний план (docs/design/english.md §4)
### 6 клас — A2 (наприкінці 6 кл., МП-ІМ с. 3)
Джерело: МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- `e6s1` «Зовнішність і характер» — зовнішність; риси характеру. Граматика (пропозиція): adjective order (basic); be like + noun; modifying adverbs (very, quite, too).
- `e6s2` «Покупки» — відвідування магазинів; види магазинів; асортимент товарів; гроші. Граматика (пропозиція): How much/many; quantity (a few, both, all, no); can (permission), could (requests).
- `e6s3` «Харчування: традиції й страви» — традиції харчування; назви страв. Граматика (пропозиція): Past Simple (regular and irregular): affirmative, negative, questions.
- `e6s4` «Спорт» — види спорту; спортивні уподобання. Граматика (пропозиція): Past Continuous; Past Simple with when.
- `e6s5` «Подорож» — транспорт; підготовка до подорожі; проїзні документи. Граматика (пропозиція): will / be going to / Present Continuous for future; have (got) to.
- `e6s6` «Шкільне життя» — улюблені навчальні предмети; види діяльності на уроках. Граматика (пропозиція): must/should; relative clauses with who/which/that.
- `e6s7` «Україна: Київ і визначні місця» — Київ, визначні місця. Граматика (пропозиція): Present Perfect (experiences, ever/never).
- `e6s8` «Країни виучуваної мови: столиця й визначні місця» — столиця; визначні місця. Граматика (пропозиція): if + Present Simple (real conditions); reported statements with say/tell (вступ).

## Готово, коли
- [ ] План у plan.js, звіт, рядки в inbox; задача → tasks/review для content-verifier зі свіжим контекстом.

## Нотатки агента (curator-plan-eng-g6, 2026-11-20)
- План e6s1–e6s8 у content/eng/plan.js (англійською, без `lessons` і `requires`), 8 × 6 рядків `plan`, тижні [1,4] [5,8] [9,13] [14,18] [19,23] [24,27] [28,31] [32,35] = 35.
- Звіт: reports/verify/plan-eng-g6.md (МП-ІМ с. 20–22 звірено з PDF, SHA-1 як у plan-eng-g5; 8 тем, 18 підтем, 7 функцій; граматика — наш концентричний розподіл, без дубля з g5-*.js — §2б; відкладене на 7 кл. — §2в; `requires` — таблиця §6 з реальними id 4–5 кл.; герої — §7).
- Склад розділів і id не змінено → нових задач немає, зайвих немає. У tasks/todo/write-eng-g6-e6s1…e6s8 рядок «Граматика» замінено на остаточний, додано «Специфіка (plan-eng-g6)».
- Синхронізовано 18 назв уроків 4–5 кл. у plan.js з verified-розділами (звіт §9; 7 з доручення + 11 у 4 кл.).
- Спірне: adjective order не в інвентарі A2 (лишено мінімум); too → e6s2; will/going to в e6s5 — лише повторення; `requires` не в plan.js (скіл), хоча уроки 4–5 кл. уже є.
- validate: 0 помилок, 235 попереджень (жодного для plan.js / e6s*). Build не запускав.
