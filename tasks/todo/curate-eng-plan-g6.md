---
id: curate-eng-plan-g6
type: curate
subject: eng
grade: 6
depends_on: [curate-eng-plan-g5]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# План «Англійська мова», 6 клас (content/eng/plan.js)

## Навіщо
Перший крок класу (як plan-ukr-g9): план → верифікація плану → задачі write-eng-g6-* (уже створено за орієнтовним планом нижче; якщо куратор змінить розділи — оновлює ці задачі: id нових розділів — нові задачі, зайві — у done з поясненням).

## Що зробити
1. Відкрити в сесії джерела (Джерела програми — docs/design/english.md §0: МП-ІМ (модельна програма «Іноземна мова. 5–9 класи», Редько В. Г. та ін., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (програма «Іноземні мови. 10–11 класи», рівень стандарту, наказ МОН № 1407 від 23.10.2017) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.) і звірити теми й підтеми класу; рівень і граматику — з інвентаря циклу. 
2. `content/eng/plan.js`: `SLID.section("eng", { id, grade, weeks (35 тижнів; години — docs/design/english.md §11 п. 6), title, why, plan (теми уроків: ситуація спілкування + граматика + лексика), requires })`, без `lessons`. **id розділів — ключі прогресу, після першого уроку не перейменовувати.**
3. Звіт `reports/verify/plan-eng-g6.md`: розділ ↔ тема/підтема ↔ сторінка програми, розподіл граматики (наш, за принципом концентричності — позначити), що з програми не ввійшло й чому.
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
- [ ] План у plan.js, звіт, рядки в inbox; задача → tasks/review для content-verifier зі свіжим контекстом (звірка з програмою).
