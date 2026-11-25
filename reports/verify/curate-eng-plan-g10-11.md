# Незалежна верифікація: план «Англійська мова», 10–11 клас (curate-eng-plan-g10-11)

Верифікатор: verifier-curate-eng-plan-g10-11 (content-verifier), 2026-11-25. Блоки e10s1–e10s8, e11s1–e11s8 у content/eng/plan.js (коміт e50789c; робоче дерево plan.js без змін), звіт куратора reports/verify/plan-eng-g10-11.md і рядки «З програми» / «Специфіка» в tasks/todo/write-eng-g10-*, write-eng-g11-* писав не я. Еталон процесу — reports/verify/curate-eng-plan-g6.md.
Програму звіряв із самим PDF, завантаженим у цій сесії. Повторення звіряв із поточними блоками e7s*–e9s* у plan.js, а не зі звітом куратора 7–9. Ці блоки зараз верифікує інший агент, тож після його правок звірку треба повторити (NOTE в inbox). Словники відкривав через curl.

**Вердикт: план придатний.** Усі 10 + 10 тем, усі підтеми (29 у 10 кл., 37 в 11 кл.), 7 + 11 функцій і 15 + 15 позицій граматики покрито. Тижні — 1–35 без прогалин. Позначки повторень 7–9 кл. збігаються з поточними блоками. Блокувальних знахідок немає. Зроблено 10 дрібних правок у 9 задачах write-eng-g10/11-*; plan.js не змінював.

## В1. Джерела (відкрито в цій сесії)

| Що | URL | Результат |
|---|---|---|
| П1407: 1 014 380 байт, SHA-1 `38df1f7ff398f0921f2852bc77fd374c77e1c0ff` (як у куратора), 72 с.; `pdftotext -layout` с. 16–25; с. 24 відрендерено в PNG | https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf | ✅ с. 16 — титул розділу спеціалізованих шкіл. с. 17 — «Навчальна програма є рамковою… проміжні результати за класами визначають вчителі». с. 21 — обсяги (350–400 / 400–450 слів, монолог 12–13 / 13–14 речень, письмо 150–180 / 180–200, діалог 9 реплік). с. 22 — рамковість, інтеграція «Україна + Країни…, Шкільне життя + Робота і професії», концентричний інвентар; теми, функції й лексика 10 кл. с. 23 — решта лексики й граматика 10 кл., теми й функції 11 кл. с. 24 — лексика 11 кл. с. 25 — граматика 11 кл. Транскрипція куратора в §1 дослівна. Сторінки збігаються з колонтитулами |
| П1407 с. 24, рендер | той самий PDF | ✅ «клуби за інтересами» і «фестивалі» стоять у клітинці «Дозвілля», а не в «Харчуванні» чи «Мистецтві». Висновок куратора підтверджую |
| МП-ІМ, SHA-1 `43925b25c52b569201658248a0183b8c3ad90ff7`, інвентар B1 с. 34–35 | https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf | ✅ потрібен для статусу «нове» чи «повт.». с. 34: «Compund adjectives», «so … that», «Relative: defining; non-defining…», «Subordinated: reason, purpose, result». с. 35: «Past perfect continuous: affirmative…», «Used to: no longer true», «Past simple: … regret», «Phrasal, patterns with verb + ’to-‘ infinitive or ‘-ing’ form» |
| CD make-up | https://dictionary.cambridge.org/dictionary/english/make-up | ✅ «to forgive someone and be friendly with them again after an argument or disagreement» |
| CD fill-in; OALD fill-in | https://dictionary.cambridge.org/dictionary/english/fill-in · https://www.oxfordlearnersdictionaries.com/definition/english/fill-in | ⚠️ **знахідка.** Куратор (звіт §5, задача e10s8) пише «fill out — mainly US, CD fill-in». Насправді в CD позначка «mainly US» стоїть при прикметнику **fill-in** («adjective [before noun] mainly US»). Для дієслова CD дає: «fill in … (also fill something out)». OALD: «fill something in (especially British English) (also fill something out British and North American English)». Тобто fill out — теж BrE, і позначати його помилкою не можна. Виправлено в задачі e10s8 (П2) |
| CD conflict, tolerance, prestigious, housework | https://dictionary.cambridge.org/dictionary/english/conflict (…/tolerance, …/prestigious, …/housework) | ✅ B2, C2, C1, B1 — як у куратора |
| CD afterwards | https://dictionary.cambridge.org/dictionary/english/afterwards | ✅ «(US usually afterward)» — пастку в задачі e11s6 сформульовано правильно |
| CD Grammar «Used to» | https://dictionary.cambridge.org/grammar/british-grammar/used-to | ✅ «Negative: didn’t use to… some people consider the form with the final -d to be incorrect» (задача e10s3) |
| CD Grammar «Past perfect simple» / «Past perfect simple or past simple?» | https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-i-had-worked · https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-or-past-simple | ⚠️ на сторінці, на яку посилається задача e10s1, про when / after з двома часами нічого немає. Опора для пастки — друга сторінка: «The music started when the curtains opened» / «The music had (already) started when the curtains opened». Посилання виправлено (П1) |
| Державні свята під час воєнного стану (TQ-141) | https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine · https://uk.wikipedia.org/wiki/Свята_та_пам'ятні_дні_в_Україні | ✅ en: «During martial law a public holiday is not a non-working day»; «From 2023 Christmas is only officially celebrated in Ukraine on 25 December». uk: «норми ст. 73 КЗпП України на період воєнного стану не застосовуються»; День захисників перенесено на 1 жовтня 14.07.2023. Обидва джерела — Вікіпедія, тобто лише відправна точка. Першоджерело (zakon.rada.gov.ua, закон «Про організацію трудових відносин в умовах воєнного стану») у сесії не відкрилося: 503 і обрив тунелю. Сайти news.dtkt.ua, kadroland.com, prokadry.com.ua, buhgalter911.com недоступні. Для TQ, тобто питання вчителю, цього досить. Автор e10s7 бере чинний перелік з першоджерела, як і сказано в задачі |
| «position of indirect object» (TQ-140) | WebSearch `"phrasal and prepositional verbs" "position of indirect object" syllabus` → https://highered.mheducation.com/sites/0073350176/student_view0/topic21/esl.html, https://dspace.ut.ee/bitstreams/4db8d24a-e4d6-4493-b81a-bf777548cb79/download | ⚠️ дослівного джерела формулювання не знайдено. Обидва прочитання реальні: місце додатка при частці і непрямий додаток із to/for. Див. В6 |

Фактів із датами, числами чи іменами в рядках `title` / `why` / `plan` 10–11 кл. немає. Членство в ООН, РЄ, кандидатство в ЄС, ст. 133 Конституції і НМТ — лише в задачах, з вимогою звірити за першоджерелом. Їх я не перевіряв: перевірка буде на рівні розділу.

## В2. Теми, підтеми, функції ↔ розділи

Таблицю §2а куратора перевірив рядок за рядком на plan.js і на с. 22–24. Кожна підтема має рядок `plan` або явну вказівку в задачі ✅.

**Лічба у звіті куратора хибна (не блокує):** у §1 і в нотатках задачі — «26 підтем» (10 кл.) і «34 підтеми» (11 кл.). За програмою 10 кл. має 29 різних підтем (32, якщо рахувати «Країни виучуваної мови» окремо). 11 кл. має 37: 4+4+5+3+4+2+5+3+4+3. Таблиця §2а куратора сама містить 29 і 37 рядків, тож покриття повне, помилка лише в підсумкових числах. Звіт куратора не правлю, бо це не мій файл.

Слабкі місця покриття (прийнятні, бо закрито задачею):
- «благодійна діяльність» (Україна в світі) — рядка `plan` немає. Покрито через e11s1 l5 і задачу e11s7 (гуманітарна допомога в l1).
- «міжнародні відносини» — лише в задачі e11s7 і загально в l6.

| Функція | Де | Вердикт |
|---|---|---|
| 10: описувати ситуації, аналізувати причини й наслідки | e10s1 l5–l6, e10s7 l4–l5 | ✅ |
| 10: припущення, прогноз | e10s4 l2, l4–l5 | ✅ |
| 10: події в логічній послідовності з власною думкою | e10s5 l4, l6 | ✅ |
| 10: обговорювати перспективи | e10s6 l6, e10s8 l6 | ✅ |
| 10: давати поради, реагувати | e10s3 l5, e10s6 l5 | ✅ |
| 10: аргументувати | e10s2 l6, e10s6 l6 | ✅ |
| 10: вступати в дискусію, привертаючи увагу | e10s1 l6 «Can I say something?» | ✅ |
| 11: описувати життєві події, проблеми, досягнення | e11s6 l5–l6 | ✅ |
| 11: емоційне ставлення | e11s4 l3, l6 | ✅ |
| 11: порівнювати звичаї, стилі життя | e11s2 l4, e11s7 l3 | ✅ |
| 11: перспективи, поради | e11s8 l4–l5 | ✅ |
| 11: висловлювати й аргументувати думку | e11s1 l6, e11s5 l5 | ✅ |
| 11: **вступати в дискусію, привертаючи увагу** | у звіті й задачах 11 кл. не призначено | ⚠️ → П5: у задачу e11s1 (l6, `dialog`) |
| 11: підтримувати дискусію | e11s1 l6 | ✅ |
| 11: висловлювати побажання | e11s8 l6 | ✅ |
| 11: зацікавленість | e11s3 l4, l6 | ✅ |
| 11: підсумки обговорення; завершувати розмову | e11s7 l6, e11s8 l6 | ✅ |

## В3. Граматика: інвентар с. 23 і 25 ↔ розділи

Усі 30 позицій звірено з PDF. Таблиця §2б куратора повна ✅. Окремо:
- **10: «prepositions of reason and purpose: due to, owing to, so, because»**. План покриває лише reason (e10s7 l5 «reasons and results»), а **purpose** не названо ⚠️. Покриття додано в задачу e10s7: so (that) + can / could як розширення purpose з 6 кл. (П4).
- **Past Perfect Continuous (e10s5) і compound adjectives (e11s3)** куратор позначив «нове». Відносно нашого плану це правда. Але обидві позиції є в інвентарі B1 МП-ІМ (с. 35 і с. 34), а в плані 7–9 кл. їх немає. Для 10–11 кл. це не помилка: учень їх ще не бачив. Уточнено в задачах (П9, П10) і передано NOTE верифікатору 7–9.
- Поділ «overview of all tense forms» (пасив — e11s5, актив — e11s8), перенесення question tags і participles між e11s3 та e11s4, reported speech у e11s1 — ✅. с. 22 дозволяє і порядок, і поєднання, а функції класу ці рішення підтримують.
- Порядок усередині класу: e10s5 спирається на Past Perfect з e10s1. e10s8 вводить місце додатка раніше за e11s6 (separable / inseparable). e11s8 повторює умовні речення після e10s6. Нічого не спирається на пізніше введене ✅.
- Задача e11s6 мала хибну атрибуцію: «перенесено з e11s1». У дизайні §4.7 цю позицію не розподілено ніде. Виправлено (П3).

## В4. Повторення ↔ поточні блоки e7s*–e9s*

Кожну позначку «повт.» у звіті куратора (§2, §2б, §6) і в задачах звірив із рядками поточного plan.js (дамп скриптом):

| Позначка | Рядок 7–9 зараз | Вердикт |
|---|---|---|
| Past Perfect з when — e8s5 l4 | «When we arrived, the film had started: the Past Perfect» (верифікатор 7–9 під час моєї роботи змінив на «When I got to the library, it had closed: the Past Perfect» — позиція та сама) | ✅ |
| -ing / to — e8s2 l3 | «I enjoy cycling, I want to try climbing: -ing or to?» | ✅ |
| phrasal verbs — e8s2 l4 | «Take up a sport, give up fast food: phrasal verbs» | ✅ |
| used to — e7s5 l3; used to / would — e9s1 l4 | «I used to play football…»; «When I was little, I used to… and I would…» | ✅ |
| going to — e9s2 l3; Future Continuous — e9s2 l4 | «It’s going to be a hot summer: predictions»; «In 2050 we will be living…» | ✅ |
| first conditional, unless — e7s6 l3–l4; second — e8s8 l5–l6; third — e9s8 l5 | збігаються | ✅ |
| so … that — e9s3 l4; although / however / so — e9s9 l4 | збігаються | ✅ |
| for / since — e7s1 l4 | «We’ve lived here for ten years: for and since» | ✅ |
| reported — e8s3 l4–l5, e9s4 l4–l5 | statements; questions, requests | ✅ |
| question tags — e8s1 l4 | «You like music, don’t you? Question tags» | ✅ |
| participles — e7s4 l4 | «Bored or boring? Interested or interesting?» | ✅ |
| passive — e7s2 l4, e7s7 l2–l3, e8s3 l3, e9s2 l5, e9s6 l2, l4 | збігаються | ✅ |
| relatives — e8s4 l3–l4, e9s5 l3–l5 | збігаються | ✅ |
| quantifiers — e7s2 l3, e8s2 l2 | збігаються | ✅ |
| sequencing — e9s9 l5; joining a discussion — e9s9 l3 | збігаються | ✅ |
| housework — e7s1 l1; jobs — e9s7; personality — e9s1 l2 | збігаються | ✅ |

**Паралельні правки верифікатора 7–9** (git diff plan.js на кінець моєї сесії): e7s7 l5, e8s2 why, e8s4 l4 («My favourite band, which…: extra information» — non-defining лишився), e8s5 l4, e8s7 l1, e9s9 l5 («First, also, finally: putting your ideas in order» — sequencing лишився). Номери рядків і граматичні позиції, на які посилаються 10–11 кл., не змінилися ✅.

Дослівних дублів рядків `plan` у всьому плані eng немає (скрипт). Тематичні перетини, яких куратор не позначив, дописано в задачі як «не дублювати»:
- клуби в e11s3 l1 ↔ e7s5 l2, e7s6 l1, e9s5 (П6);
- фестиваль у e11s4 ↔ e7s6 l6 (П7);
- здоров’я в e10s2 l5 ↔ e8s2 l1–l2 (П8).

Ідентифікатори уроків 4–6 кл. у `requires` (29 штук) звірив з файлами content/eng/g5-*.js і g6-*.js: усі існують і за назвою підходять ✅.

## В5. Англійська `title` / `why` / `plan`

Кожен рядок перевірено. Прямих апострофів і «...» немає. Kyiv, the UK, the EU, the UN, the Council of Europe — без помилок. BrE: neighbours, favourite, organised, colourful, programmes; «sports events» — атрибутивно, що нормативно для BrE (facts/eng.md №14). AmE-правопису й лексики немає. Рядки «By the time I came, they had left», «I used to love sweets, Grandma would bake», «If I were you, I’d…», «We won, which surprised everyone», «Pick it up, look after it» — граматично правильні. Усі рядки коротші за 12 слів, без персонажів і назв юнітів CUP/OUP, тож авторське право не зачеплене ✅.

## В6. TQ-140, TQ-141 і граматика поза програмою

| Питання | Оцінка |
|---|---|
| **TQ-140** «position of indirect object» (с. 23, категорія Phrasal Verb) | ✅ питання поставлено коректно. Формулювання програми неоднозначне: дослівно «indirect object», але стоїть у рядку phrasal / prepositional verbs. Тимчасовий варіант А (місце додатка: fill it in) природно відповідає категорії, а варіант Б (give it back to him) покриває буквальне прочитання. Обидва посильні на B1–B2, і e10s8 l4 легко розширити до Б без зміни id. Залишаю |
| **TQ-141** державні свята під час воєнного стану | ✅ передумови підтверджено двома відкритими джерелами (Вікіпедія, див. В1): ст. 73 КЗпП не діє, Різдво — 25 грудня з 2023 р., День захисників — 1 жовтня. Тимчасове рішення («public holidays», не писати, що в ці дні не працюють) безпечне за будь-якої відповіді вчителя |
| be / get used to + -ing (e10s3 l6) | ✅ прийнятно. Це головна пастка до позиції «used to / would» (CD Grammar «Used to»: «Not: We are used to go…»). с. 22: інвентар «добирається відповідно до комунікативної ситуації, потреб учнів» |
| If I were you, I’d… (e10s6 l5) | ✅ обслуговує функцію «давати поради» (с. 22) у межах позиції «second conditional». Пастку were / was задача формулює |
| reply questions (e11s3 l6) | ✅ обслуговує функцію «демонструвати зацікавленість» (с. 23) і спирається на позицію question tags (all tenses) |
| I wish + Past Simple (e11s8 l6) | ✅ прийнятно. Обслуговує функцію «висловлювати побажання» (с. 23). Опора є навіть у B1 МП-ІМ с. 35: «Past simple: … regret». wish + would і mixed conditionals задача прямо забороняє — правильно |

Усі чотири позначено «(наш)» і в звіті, і в задачах, обсяг — лише в одному рядку кожна. Інвентар не розширено.

## В7. Тижні, обсяг, `requires`

- Скрипт по plan.js: у 10 і 11 кл. — 8 розділів × 6 рядків, тижні 1–35, 35 унікальних, без прогалин і накладок ✅.
- `requires` у plan.js немає — так само, як у 5–6 кл. Зв’язки на 7–9 кл. дано рядками в задачах, оркестратор додасть id після написання ✅.
- Нові id відповідають задачам (`section`), id розділів не змінено. Змінено лише назви e10s4 і e11s7 — прийнятно ✅.

## В8. Правки (зроблено, лише tasks/todo/write-eng-g10/11-*)

| № | Задача | Було → стало | Чому |
|---|---|---|---|
| П1 | e10s1 | посилання «CD Grammar «Past perfect simple»» → «Past perfect simple or past simple?» з прикладом і URL | на першій сторінці опори для пастки немає |
| П2 | e10s8 | «fill out — mainly US, CD fill-in» → fill out теж BrE (OALD, CD), не позначати помилкою | В1, знахідка |
| П3 | e11s6 | «(план: перенесено з e11s1 — звіт §4)» → «(у дизайні §4.7 не розподілено; поставлено сюди — звіт §4 п. 5)» | хибна атрибуція |
| П4 | e10s7 | + purpose: so (that) + can / could | позиція «reason and purpose» покрита лише наполовину |
| П5 | e11s1 | + функція «вступати в дискусію, привертаючи увагу» в l6 | в 11 кл. не призначена |
| П6 | e11s3 | + клуби: повт. e7s5 l2, e7s6 l1, e9s5 — не дублювати | В4 |
| П7 | e11s4 | + e7s6 l6 (шкільний фестиваль) не дублювати | В4 |
| П8 | e10s2 | + не дублювати e8s2 l1–l2 | В4 |
| П9 | e10s5 | «нове» → «нове в нашому плані (B1 МП-ІМ с. 35 є, у плані 7–9 немає)» | В3 |
| П10 | e11s3 | те саме для compound adjectives (МП-ІМ с. 34) | В3 |

plan.js не змінював, блоки e7–e9 не чіпав. Звіт куратора не редагував. Що в ньому застаріло: лічба підтем (В2), «fill out — mainly US» (§5), атрибуція separable / inseparable в задачі e11s6.

## В9. Рекомендації (не блокують)

- **Р1.** Після верифікації плану 7–9 кл. повторити звірку В4: позначки «повт.» у задачах 10–11 посилаються на рядки 7–9 за номером.
- **Р2.** Верифікатору чи куратору плану 7–9: Past Perfect Continuous і compound adjectives є в інвентарі B1 МП-ІМ (с. 34–35), але не в плані 7–9. Або додати їх у 9 кл., або залишити на 10–11 кл. і записати це у звіті 7–9.
- **Р3.** Куратору: у звіті plan-eng-g10-11.md виправити лічбу підтем (29 / 37) і §5 про fill out.

## В10. Прогін і вердикт

- `node tools/validate.mjs --quiet`: **0 помилок, 235 попереджень**. Для plan.js і e10s*, e11s* попереджень немає. Build не запускав, коміту немає.
- **Вердикт: план придатний** (10 дрібних правок у задачах, у plan.js — 0). Задача → done. Блокувального для людини нічого немає; відповіді вчителя чекають TQ-140 і TQ-141.
