# Математика 4–11: стартова діагностика й пули тренування

Запит Віктора, 2026-10-15. Створено лише задачі; реалізацію й навчальний контент не змінено.

## На чому ґрунтується аналіз

На початку підготовки задач локальна main перебувала на 57f9fc6 (пам’ять вересня), origin/main — на 8d438ca (пам’ять 14 жовтня). Проаналізовано доступну origin/main через git show, без checkout, merge чи зміни робочої гілки. Перед виконанням задач потрібна актуальна версія проєкту; посилання нижче — шляхи саме в ній. Під час аналізу новий fetch не виконувався. Перед комітом пакета виконано fetch і fast-forward локальної main до 8d438ca.

Прочитано AGENTS.md, handoff, INDEX, decisions D-024/D-025, pitfalls, словник/схему; docs/PERSONALIZATION.md; app/registry.js, app/learn.js, відповідні місця app/app.js; validate/playtest; завершені write-math-diag-g6, write-math-pool-g6m1 і engine-diag-pool-answers. Структурне покриття обчислено з усіх актуальних файлів content/math, а не зі старого plan.js.

## Уже зроблено

- Є SLID.diag, адаптивний тест після вибору класу, «Ще не знаю», відновлення, персональний план і повторний тест.
- Є dg6: 12 тем pre по два завдання та 6 cur по одному, разом 30; verified.
- Є SLID.pool, тренування після уроків, сесія до 4 + 2 задач, steps, джерела, Лейтнер 1/3/7/16/35 днів, помилки → план.
- Є 5 verified пулів 6-го класу, 184 вправи. comparison/list/factors, дроби/похибки, рисунки й метадані джерел уже підтримано.
- Математика 4–11 написана й verified, але жодного approved. Разом 50 розділів, 182 тематичні уроки без boss.

## Новий обсяг

| Клас | Діагностика | Нових пулів | Тематичних уроків у цих пулах |
|---|---|---:|---:|
| 4 | dg4 — нова | 6, включно з m4s1 | 21 |
| 5 | dg5 — нова | 6 | 26 |
| 6 | dg6 — чинна, регресія/кураторські правки | 0 | 23 уже покриті |
| 7 | dg7 — нова | 8 | 26 |
| 8 | dg8 — нова | 6 | 21 |
| 9 | dg9 — нова | 7 | 24 |
| 10 | dg10 — нова | 6 | 20 |
| 11 | dg11 — нова | 6 | 21 |

Початкова інвентаризація нових пулів містить 159 уроків; обов’язковий обсяг уточнює матриця required/optional/pending; орієнтир 954–1272 вправи (6–8 на урок, поняттєві винятки мінімум 5 з поясненням). Це план, не вже створені чи перевірені завдання. Складність — три рівні; вправи з реально відкритих джерел, а не штучні варіації для кількості.

## Порядок виконання

1. curate-math-personalization-map — матриця тем/передумов/уроків/форматів.
2. engine-math-diag-g4-baseline — чесна діагностика молодшого класу без неіснуючих уроків 1–3; engine-math-grade-plan-context — зміна класу й збережений план; engine-math-pool-answer-formats — потрібні формати старших класів. Існуюча curate-math-diag-g6-links лишається окремою залежністю.
3. write-math-diag-g4/g5/g7…g11 — сім стартових діагностик. Паралельно після матриці — пули 5-го (на них веде план dg6), потім 4-го й 7–11-го, по одному файлу/задачі на розділ. Старші пули залежать від потрібних форматів.
4. tools-math-personalization-qa — інструменти сценаріїв і покриття на чинному контенті/fixtures; не залежать від завершення всіх інженерних розширень.
5. verify-math-personalization-g4…g11 — незалежна перевірка змісту класу без очікування загального QA чи розширень інших класів. Авторські задачі переходять у review; після перевірки — у done.
6. qa-math-personalization-g4…g11 — технічне приймання окремого класу після його контентної перевірки, спільних інструментів і лише потрібних йому змін рушія. 5-й і 6-й не залежать від baseline 4-го чи форматів старших класів.
7. qa-math-personalization-release — фінальна регресія всіх required-класів, з обов’язковим реальним dg6 → ms2l4 → pms2 без зміни класу. До неї класове приймання явно фіксує ще недоступні міжкласові пули.
8. research-math-diag-duration — окремий пілот читання/розв’язання учнями; протокол можна готувати відразу, клас залучати після його технічного приймання. До пілоту 10–15 хв — неперевірена оцінка, не результат автоматичного плейтесту.

У depends_on авторська робота для початку незалежної перевірки може бути в review; інженерні та qa-залежності — done. Матриця може бути використана після перевірки куратором її required-частини; pending одного класу не блокує інші. Для розділів без required-уроків куратор вилучає відкладені авторські задачі з обов’язкових depends_on та очікуваних пулів, зберігаючи окремий перелік відкладеного; при поверненні required-тем відновлює залежності. claim.mjs показує чергу, але не виконує залежностей автоматично.

Разом 75 задач: 1 матриця, 3 задачі рушія, 1 інструментальна, 7 діагностик, 45 пулів, 8 незалежних перевірок змісту, 8 класових технічних приймань, 1 фінальна регресія, 1 учнівський пілот. У кожній — межі файлів, критерії готовності й залежності.

## Що не дублюємо

curate-math-diag-g6-links (навички/for/офіційні URL) лишається чинною; engine-practice-pool, пункт 2, деталізовано 45 задачами пулів, пункт 3 — окремою задачею форматів, пункт 4 — QA. При виконанні додати в оригінальну engine-practice-pool посилання на ці задачі й закривати лише фактично зроблені пункти.

Генератори вправ, добір діагностики з пулу, початкові SRS-коробки з результатів тесту, AI-перевірка розв’язання, історичні пули й повний курс 1–3 класів — поза цим пакетом. Чинні завершені задачі й уроки заново не створюємо.

## Загальне приймання

Для кожного класу працює стартова діагностика й коректний персональний план; кожен required-тематичний урок має перевірений пул; optional/pending явно відокремлені; після повторення передумови попереднього класу доступне тренування без зміни профілю; відповіді, джерела та методи незалежно перевірені; доступ після уроку, повторення, зміна класу й офлайн працюють. build запускає оркестратор після контентних пакетів; validate — 0 помилок, цільові тести зелені. approved ставить лише вчитель.

## Посилання на задачі

- [curate-math-personalization-map](todo/curate-math-personalization-map.md)
- [engine-math-diag-g4-baseline](todo/engine-math-diag-g4-baseline.md)
- [engine-math-grade-plan-context](todo/engine-math-grade-plan-context.md)
- [engine-math-pool-answer-formats](todo/engine-math-pool-answer-formats.md)
- [tools-math-personalization-qa](todo/tools-math-personalization-qa.md)

| Клас | Діагностика | Пули | Перевірка змісту й технічне приймання |
|---|---|---|---|
| 4 | [dg4](todo/write-math-diag-g4.md) | [g4m1](todo/write-math-pool-g4m1.md), [g4m2](todo/write-math-pool-g4m2.md), [g4m3](todo/write-math-pool-g4m3.md), [g4m4](todo/write-math-pool-g4m4.md), [g4m5](todo/write-math-pool-g4m5.md), [m4s1](todo/write-math-pool-m4s1.md) | [Зміст](todo/verify-math-personalization-g4.md) · [Інтеграція](todo/qa-math-personalization-g4.md) |
| 5 | [dg5](todo/write-math-diag-g5.md) | [ms0](todo/write-math-pool-ms0.md), [ms0b](todo/write-math-pool-ms0b.md), [ms2](todo/write-math-pool-ms2.md), [ms3](todo/write-math-pool-ms3.md), [ms4](todo/write-math-pool-ms4.md), [ms1](todo/write-math-pool-ms1.md) | [Зміст](todo/verify-math-personalization-g5.md) · [Інтеграція](todo/qa-math-personalization-g5.md) |
| 6 | Уже є dg6 | Уже є 5 пулів | [Зміст](todo/verify-math-personalization-g6.md) · [Інтеграція](todo/qa-math-personalization-g6.md) |
| 7 | [dg7](todo/write-math-diag-g7.md) | [g7m1](todo/write-math-pool-g7m1.md), [g7m2](todo/write-math-pool-g7m2.md), [g7m3](todo/write-math-pool-g7m3.md), [g7m4](todo/write-math-pool-g7m4.md), [g7m5](todo/write-math-pool-g7m5.md), [g7m6](todo/write-math-pool-g7m6.md), [g7m7](todo/write-math-pool-g7m7.md), [g7m8](todo/write-math-pool-g7m8.md) | [Зміст](todo/verify-math-personalization-g7.md) · [Інтеграція](todo/qa-math-personalization-g7.md) |
| 8 | [dg8](todo/write-math-diag-g8.md) | [g8m1](todo/write-math-pool-g8m1.md), [g8m2](todo/write-math-pool-g8m2.md), [g8m3](todo/write-math-pool-g8m3.md), [g8m4](todo/write-math-pool-g8m4.md), [g8m5](todo/write-math-pool-g8m5.md), [g8m6](todo/write-math-pool-g8m6.md) | [Зміст](todo/verify-math-personalization-g8.md) · [Інтеграція](todo/qa-math-personalization-g8.md) |
| 9 | [dg9](todo/write-math-diag-g9.md) | [g9m1](todo/write-math-pool-g9m1.md), [g9m2](todo/write-math-pool-g9m2.md), [g9m3](todo/write-math-pool-g9m3.md), [g9m4](todo/write-math-pool-g9m4.md), [g9m5](todo/write-math-pool-g9m5.md), [g9m6](todo/write-math-pool-g9m6.md), [g9m7](todo/write-math-pool-g9m7.md) | [Зміст](todo/verify-math-personalization-g9.md) · [Інтеграція](todo/qa-math-personalization-g9.md) |
| 10 | [dg10](todo/write-math-diag-g10.md) | [g10m1](todo/write-math-pool-g10m1.md), [g10m2](todo/write-math-pool-g10m2.md), [g10m3](todo/write-math-pool-g10m3.md), [g10m4](todo/write-math-pool-g10m4.md), [g10m5](todo/write-math-pool-g10m5.md), [g10m6](todo/write-math-pool-g10m6.md) | [Зміст](todo/verify-math-personalization-g10.md) · [Інтеграція](todo/qa-math-personalization-g10.md) |
| 11 | [dg11](todo/write-math-diag-g11.md) | [g11m1](todo/write-math-pool-g11m1.md), [g11m2](todo/write-math-pool-g11m2.md), [g11m3](todo/write-math-pool-g11m3.md), [g11m4](todo/write-math-pool-g11m4.md), [g11m5](todo/write-math-pool-g11m5.md), [g11m6](todo/write-math-pool-g11m6.md) | [Зміст](todo/verify-math-personalization-g11.md) · [Інтеграція](todo/qa-math-personalization-g11.md) |

- [Фінальна регресія пакета](todo/qa-math-personalization-release.md)
- [Протокол і учнівський пілот тривалості](todo/research-math-diag-duration.md)
