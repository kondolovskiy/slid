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

1. Спочатку чинна curate-math-diag-g6-links із власною незалежною перевіркою → done; потім curate-math-personalization-map — матриця тем/передумов/уроків/форматів на вже узгоджених навичках.
2. engine-math-diag-g4-baseline — чесна діагностика молодшого класу без неіснуючих уроків 1–3; engine-math-grade-plan-context — зміна класу й збережений план; engine-math-pool-answer-formats — потрібні формати старших класів. Спільні файли змінює один інтегратор за протоколом нижче; це обмеження одночасного запису, а не нові функціональні залежності.
3. write-math-diag-g4/g5/g7…g11 — сім стартових діагностик. Паралельно після матриці — пули 5-го (на них веде план dg6), потім 4-го й 7–11-го, по одному файлу/задачі на розділ. Старші пули залежать від потрібних форматів.
4. tools-math-personalization-qa — інструменти сценаріїв і покриття на чинному контенті/fixtures; не залежать від завершення всіх інженерних розширень.
5. verify-math-personalization-g4…g11 — незалежна перевірка змісту класу без очікування загального QA чи розширень інших класів. Авторські задачі переходять у review; після перевірки — у done.
6. qa-math-personalization-g4…g11 — технічне приймання окремого класу після його контентної перевірки, спільних інструментів і лише потрібних йому змін рушія. 5-й не залежить від baseline 4-го чи форматів старших класів. Для 6-го матриця може виявити власну потребу у форматах; у v2 це символьний вираз/повна пара координат, передані окремій refine-math-diag-g6-coverage. Відкладені формати 3D не повинні блокувати його required-частину.
7. qa-math-personalization-release — фінальна регресія всіх required-класів, з обов’язковим реальним dg6 → ms2l4 → pms2 без зміни класу. До неї класове приймання явно фіксує ще недоступні міжкласові пули.
8. research-math-diag-duration — окремий пілот читання/розв’язання учнями; протокол можна готувати відразу, клас залучати після його технічного приймання. До пілоту 10–15 хв — неперевірена оцінка, не результат автоматичного плейтесту.

У depends_on авторська робота для початку незалежної перевірки може бути в review; інженерні та qa-залежності — done. Матриця може бути використана після перевірки куратором її required-частини; pending одного класу не блокує інші. Для розділів без required-уроків куратор вилучає відкладені авторські задачі з обов’язкових depends_on та очікуваних пулів, зберігаючи окремий перелік відкладеного; при поверненні required-тем відновлює залежності. claim.mjs показує чергу, але не виконує залежностей автоматично.

Разом 75 задач: 1 матриця, 3 задачі рушія, 1 інструментальна, 7 діагностик, 45 пулів, 8 незалежних перевірок змісту, 8 класових технічних приймань, 1 фінальна регресія, 1 учнівський пілот. У кожній — межі файлів, критерії готовності й залежності.

## Що не дублюємо

curate-math-diag-g6-links (навички/for/офіційні URL) — явна передумова загальної матриці. engine-practice-pool уже оновлено: авторство пулів делеговано 45 задачам, формати — engine-math-pool-answer-formats, загальний браузерний QA — tools-math-personalization-qa. У старій задачі лишилися генератори, автоматизація make-tasks без дублів, вибір одиниці, майбутній добір діагностики з пулу та початкові SRS-коробки. Ні її завершення, ні AI не блокують поточний пакет.

Генератори вправ, добір діагностики з пулу, початкові SRS-коробки з результатів тесту, AI-перевірка розв’язання, історичні пули й повний курс 1–3 класів — поза цим пакетом. Чинні завершені задачі й уроки заново не створюємо.

## Спільні файли й порядок роботи

Дві групи редагування:

- **math-curation:** curate-math-diag-g6-links → власна незалежна перевірка → done → curate-math-personalization-map. Ключі навичок і предметна пам’ять мають одну базову лінію. Пакетне verify-math-personalization-g6 не блокує першу кураторську задачу.
- **personalization-shared:** engine-math-grade-plan-context, tools-math-personalization-qa, engine-math-diag-g4-baseline, engine-math-pool-answer-formats, залишкова engine-practice-pool та engine-ai-solution-check. Оркестратор призначає одного відповідального за інтеграцію та не більше одного активного редактора цієї групи в спільній робочій теці. До неї належать app/app.js, app/learn.js, app/registry.js за потреби, docs/CONTENT_SCHEMA.md, docs/PERSONALIZATION.md, tools/validate.mjs, tools/playtest.py, tools/test-*.mjs і tools/test-answer-ui.py; будь-які інші спільні файли узгоджуються до запису.

Перед першою зміною оркестратор записує в нотатках активної задачі «редактор групи: <ім’я>; редагування розпочато», а в інших doing-задачах цієї групи — «лише читання/дизайн; очікує передачі редагування». Нову задачу не допускає до запису, поки попередній редактор не інтегрував і не перевірив зміни та не записав «редагування передано: <наступна задача/ім’я або вільно>». Між сесіями перевірити ці записи й чинного виконавця; не вважати припинення відповіді автоматичною передачею. Для реалізації групи переважно використовувати одного розробника; незалежний рецензент читає результат після передачі редагування.

Рекомендований порядок для швидкого приймання 5–6 класів: контекст планів і міжкласового тренування → спільний QA → baseline 4-го → формати старших класів. Це порядок доступу до спільних файлів, не жорсткий граф залежностей: QA можна підготувати першим на чинному dg6, не очікуючи інших реалізацій. Генератори й AI отримують редагування поза активними змінами пакета; після них — потрібні регресії сумісності.

write_group у frontmatter — позначка для оркестратора; claim.mjs не встановлює блокування файлів і не перевіряє depends_on. Оркестратор вручну перевіряє обидві умови перед призначенням роботи. Автори різних content/math/diag-* і pool-* можуть працювати паралельно після своїх передумов; незалежні верифікатори беруть файл лише після завершення його автора. build та згенеровані index.html/sw.js/content/manifest.json змінює лише оркестратор у погоджене вікно без інших записів до тих самих файлів.

## Загальне приймання

Для кожного класу працює стартова діагностика й коректний персональний план; кожен required-тематичний урок має перевірений пул; optional/pending явно відокремлені; після повторення передумови попереднього класу доступне тренування без зміни профілю; відповіді, джерела та методи незалежно перевірені; доступ після уроку, повторення, зміна класу й офлайн працюють. build запускає оркестратор після контентних пакетів; validate — 0 помилок, цільові тести зелені. approved ставить лише вчитель.

## Посилання на задачі

- [curate-math-personalization-map](done/curate-math-personalization-map.md)
- [engine-math-diag-g4-baseline](todo/engine-math-diag-g4-baseline.md)
- [engine-math-grade-plan-context](done/engine-math-grade-plan-context.md)
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


## Уточнення обсягу 2026-10-16.v2

Кураторська [матриця](../docs/math-personalization-coverage.md) і [машинні дані](../docs/math-personalization-coverage.json) — **accepted для required-частини**, незалежний звіт reports/verify/math-personalization-coverage.md. Починати авторство можна після решти передумов конкретної задачі; optional/pending лишаються відкладеними. Початкові 50 розділів / 182 уроки залишаються повним інвентарем. Обов’язковий пакет: 48 пулів / 169 required-уроків; 7 optional та 6 pending окремо. Нові: 43 пули / 146 required-уроків / 876–1168 вправ; 5 чинних пулів 6 кл. (184 вправи) не переписуються заново.

| Клас | Required-уроки | Required-пули | Optional / pending уроки |
|---|---:|---:|---:|
| 4 | 20 | 6 | 0 / 1 |
| 5 | 24 | 6 | 0 / 2 |
| 6 | 23 | 5 | 0 / 0 |
| 7 | 26 | 8 | 0 / 0 |
| 8 | 21 | 6 | 0 / 0 |
| 9 | 24 | 7 | 0 / 0 |
| 10 | 18 | 6 | 2 / 0 |
| 11 | 13 | 4 | 5 / 3 |

Для 11 кл. write-math-pool-g11m2 (координати — pending за роком, площина — optional) та write-math-pool-g11m6 (НМТ — optional) відкладені, збережені у todo. Вони не входять до required depends_on verify-g11, очікуваних файлів і лічильників приймання. Їхні старі посилання в таблиці вище — початковий інвентар, не обов’язковий обсяг цієї версії. Решта 43 задач write-pool активні після прийняття матриці.

Нова наступна [refine-math-diag-g6-coverage](todo/refine-math-diag-g6-coverage.md) — ризик надто широкого known за однією cur-пробою. Додана до required depends_on verify/qa 6 класу; сама залежить від матриці та контракту форматів (символьна відповідь/пара координат для required-пулів 6 кл.). Матриця від неї не залежить. Закриту curate-math-diag-g6-links не перевідкривати. Нових загальних sk матриця не потребує; divis/prop зафіксовані.

Перелічені залежні задачі отримали конкретні scope біля уроків, нові нормативи, очікувані файли/пули й версію. Повернення відкладеної теми в required — нова версія матриці, відновлення залежностей і повторне приймання, не мовчазне розширення автором.
