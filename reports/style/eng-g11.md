# Синхронізація стилю: англійська 11 кл. (style-eng-g11)

Дата: 2026-11-27 · скіл `style-sync` · розділи e11s1–e11s8 (усі `verified`; статус і id не змінено).
База diff: HEAD 5988f40 (правки не закомічені; `git diff HEAD -- content/eng/g11-*.js`). Змінено лише content/eng/g11-e11s1…e11s8.js. dge11 (content/eng/diag-g11.js, паралельний агент), g10, plan.js, style/, decisions.md не чіпав.
Перевірка: `node tools/validate.mjs --section e11s1…e11s8` — 0 помилок у кожному; 1 попередження (e11s6l6 readWordsPerScreen 67 > 65, §1 п. 1 і §6). Повний `node tools/validate.mjs` — 0 помилок. `node tools/stats.mjs --subject eng` → reports/style-eng.md. Build не запускав.
Еталон процесу — reports/style/eng-g10.md, reports/verify/style-eng-g10.md.

## 1. Що змінено

| # | Пункт | Правка | Де |
|---|---|---|---|
| 1 | Обсяг тексту читання 11 кл. — 400–450 слів (П1407 с. 21). Лічба лише уривків (без питань): e11s2l6 402, e11s3l5 429, e11s4l6 407, e11s5l6 413, e11s7l6 402, e11s8l2 428 — норма; **e11s6l6 389**; у e11s1 текст читання є лише у фіналі (e11s1l7, «The missing money box») — **341** (так само, як e10s1l7 у 10 кл.) | Дописано речення **без нових фактів** (дії й думки вигаданих героїв). **e11s1l7**: ч. 1 «More people were still arriving, and the queue for Bohdan’s cakes went all the way to the door.»; ч. 2 «It was true that Yehor was quiet and didn’t talk much, but that didn’t make him a thief.» і в кінці «Then Andrii, Kyrylo and Yehor went to look for the teachers together.»; ч. 3 «Yehor laughed too, and suddenly the whole day felt bright again.» і в кінці «Yehor drew a small picture of a dog for it.» → **410**. **e11s6l6**: ч. 1 «We shared our sandwiches and played cards until late at night.»; ч. 3 «In both places, I took hundreds of photos.» → **408**. maxText після правок ≤ 147 (межа 190). Ключі й варіанти не змінено. Другорядні тексти (e11s2l1 291, e11s6l2 294 — у плані автора «≈ 290») не чіпав | e11s1l7 #6–#8, e11s6l6 #4, #6 |
| 2 | Герої: **Maksym** — кузен Andrii в Ottawa (e4s7, e6s7, e8s8, e9s8), а в e11s5 Maksym — research assistant у лабораторії в Kharkiv | → **Pavlo** (у предметі не траплявся): 8 місць (шапка, intro l2, body і fbText l2, gaps l2 і фінал l7 — ім'я поза `{*…}`) | e11s5 l2, l7 |
| 3 | Герої: прізвище **Hrytsenko** уже є (Mrs Hrytsenko — пілотка, e4s1 і pool-g4-e4s1); новій кар'єрній радниці його не даємо (прецедент Tkachuk → Kostenko, style-eng-g10) | Ms Hrytsenko → **Ms Klymenko** (Klymenko не траплялося): шапка, intro l4, `match` left l4, `info` l4 | e11s8 l4 |
| 4 | Герої: **Solomiia** уже є (e5s8, день народження 1 June) | → **Uliana** (не траплялося): шапка, фінал ч. 2 (текст, hint, fbBad), fbText main idea | e11s8 l7 |
| 5 | Oksana: e11s4l2 «I want to study art history at university», а в e11s5 (пізніше) «I want to study veterinary medicine», у e11s8 — вагається між vet і art history, мрія vet з 9–10 кл. | e11s4l2 intro → «I’m thinking of studying art history at university, so…» (thinking of + -ing — e10s8). Узгоджено з e11s8 «This year, I’ve become interested in art history too» | e11s4l2 #0 |
| 6 | Oksana, e11s8: у l4 «Oksana has finally made up her mind», «I’ve finally made up my mind» (до дня відкритих дверей), а у фіналі вона хвилюється «What if she had made the wrong choice?» і вирішує на зворотному шляху «I’ve made up my mind» | l4 `match` left «Oksana has finally made up» → «Oksana thinks she has made up» (права половина «her mind.» та сама); l4 фінал `gaps` «I’ve finally made up my {*mind…}» → «I think I’ve made up my {*mind…}». Ключ `mind` і варіанти head / choice не змінено | e11s8l4 #4, #11 |
| 7 | Emma: e11s5 (зима) «I’d like to be an astronomer… I’m not very good at chemistry», а e11s8l5 «Now I’m studying biology and chemistry, and I’m thinking of becoming a doctor» | → «When I was fifteen, I wanted to be a firefighter, and this winter I wanted to be an astronomer. But now I’m thinking of becoming a doctor.» Питання екрана (де навчання довше — Ukraine) і решта уроку від цього не залежать | e11s8l5 (choice «Where does a medicine degree take longer?») |
| 8 | Назва фіналу «Ukraine in the world: section final» повторює назву розділу і «section final» (інші фінали 10–11 кл. — тематичні: «Our club cookbook», «Ukraine and the UK: two countries») | → «Our class project: Ukraine in the world» (intro «Can you finish the project?»). `short`, бейдж і id не змінено; у plan.js фіналів немає | e11s7l7 title |
| 9 | Фінали без підказок: e11s2l7, e11s3l7, e11s4l7, e11s6l7 — 0 (e11s1l7 і e11s7l7 — 5, e11s8l7 — 7, e11s5l7 — 9; у 10 кл. після синхронізації — від 3) | 12 нових `hint` (по 3 у кожному з чотирьох фіналів; лише `gaps`; навідне питання чи правило, не відповідь) — §2 | 4 фінали |
| 10 | Наявні hint у фіналах із мітками в порядку пропусків (PITFALL verifier-style-eng-g10) | Переставлено порядок, текст той самий: e11s7l7 T3 «The same for two people → …; + noun → …; two facts → …»; e11s8l7 T1 «take it again → ? a plan of what to revise → ? the last day → ?»; T2 «last Saturday → ? in progress when… → ? since March → ?»; T4 «finished before July → ? in progress next year → ? a timetable → ?»; e11s5l7 T2 «Which one protects your eyes? Which one is for liquids?» | e11s5l7, e11s7l7, e11s8l7 |
| 11 | Однакові `fbOk` у сусідніх екранах (11 повторів «Well done!» / «Good eye!» / «Right.») | Другий з пари → «Brilliant!» (слово з набору 7–10 кл.); повторів поспіль тепер немає | e11s1l4, e11s2 l2, l4, l6, e11s3 l1, l3, e11s4l3, e11s5l6, e11s7l2, e11s8 l2, l3 |

Без правок (перевірено): шаблонні інструкції збігаються з 7–10 кл.; назви розділів і уроків, `why` розділів — як у plan.js; `why` уроків — без граматики, якої ще не було; назви фіналів — тематичні (крім п. 8).

## 2. Нові `hint` (повний текст, для верифікатора)
| Завдання | Hint |
|---|---|
| e11s2l7 T2 (plenty of / hardly any) | Which phrase means almost none, and which means more than enough? Then read the end of each sentence. (порядок обернений до пропусків) |
| e11s2l7 T6 (Neither / either) | Which word means one or the other, and which means not one and not the other? (порядок обернений) |
| e11s2l7 T9 (cloves / pinch / tablespoons) | Look at each food. How do you usually measure oil, garlic and salt in a recipe? (порядок не той: garlic, salt, oil) |
| e11s3l7 T2 (episode / subtitles / binge-watch) | Which word is for the words at the bottom of the screen, which is for one part of a series, and which is for watching a lot at once? (порядок 2–1–3) |
| e11s3l7 T4 (two-hour / ten-minute / well known) | What comes after each gap: a noun or no noun? Remember the rules for compounds with numbers and for adjectives after be. |
| e11s3l7 T5 (haven’t you / shall we / could he / will you) | What do we add after a request, and what after Let’s? In the other sentences, find the auxiliary or the modal verb. (порядок 4–2, потім 1, 3) |
| e11s4l7 T3 (moving / amazed / impressive) | In each sentence, is it the thing that causes the feeling or the person who has it? |
| e11s4l7 T5 (priceless / careful) | Read the words after the colon: what do they tell you about the rushnyk? And how should you hold something very old? |
| e11s4l7 T9 (found / disappointing / recommend) | Which verb can go before it + an adjective when you give your opinion? And which form of a verb comes after I’d? |
| e11s6l7 T1 (active / cultural / guesthouse) | Which gap is about a place to stay? And which kind of tourism is about history and art, and which is about sport and adventure? (порядок 3–2–1) |
| e11s6l7 T5 (me up / after my plants / it up) | Is each verb separable or prepositional? Then check where the pronoun or the object goes. |
| e11s6l7 T7 (At first / Meanwhile / eventually / At) | Which word means after a long time, which means at the same time, and which shows a change? And which preposition goes with the end of? (порядок 3–2–1–4) |

Жоден не стоїть у `pick` і не є питанням «так / ні», що відкидає один дистрактор; категорії, де вони є, — не в порядку пропусків.

## 3. Герої 11 кл. — одна картина (звірено з 4–10 кл.)
- **Вік (+1 до 10 кл.):** Oksana, Emma, Andrii, Mariia, Taras, Daryna, Zoriana, Bohdan — 17; Tom 15; Dmytro 13; Yustyna 20. Emma — Year 12 (e11s8), у 10 кл. Year 11.
- **Oksana:** останній рік ліцею в Poltava (e11s6, e11s8); мрія vet з дитинства (e9–e10, e11s5, e11s8); з 11 кл. — ще й art history (e11s4 «thinking of», e11s8 вагається, обирає veterinary medicine у Kharkiv, мистецтво — хобі; рішення остаточне на зворотному шляху — §1 пп. 5–6). Zelena Dolyna — село (немає кінотеатру, e11s3).
- **Emma:** у 15 — firefighter (e9), зима 11 кл. — astronomer (e11s5), травень — думає про медицину (e11s8; §1 п. 7). Orysia «moved here… two years ago» (e11s7) = «last year» у e10s3 — узгоджено.
- **Andrii:** клас Ms Lysenko (Daryna, Zoriana, Kyrylo, Bohdan, новий Yehor); торік у серпні — Emma в England, у липні — Карпати з класом (e11s6 = e10s4l6).
- **Нові 11 кл. (у 4–10 кл. не трапляються):** Ms Romaniuk, Yehor (e11s1); Olesia, Yarema (персонажі вигаданого фільму, e11s3); Mr Levchenko (e11s4); Dr Shapoval, Pavlo, Mr Ivanenko (e11s5); Mrs Popovych (e11s6); Ms Klymenko, Uliana, Yustyna (e11s8). Перейменовано через збіг: Maksym → Pavlo, Hrytsenko → Klymenko, Solomiia → Uliana (§1 пп. 2–4).
- **Kateryna, Artem** — Kharkiv, знайомі Mariia (e11s3, e11s4 = e10s2l6). **Isla** — Edinburgh (e11s4 = e10s3). **Owen** — Cardiff (e11s7 = e10s7).
- **Відкрито (не правив):** Leah / «one cousin, Jack» (e5s1) і Taras / спорт — давні, з 4–5 кл.; дві поїздки Oksana на дні відкритих дверей у Kharkiv (e11s5 — біологічна лабораторія університету, e11s8 — ветеринарний) — різні заходи, суперечності немає.

## 4. Терміни й нотація
- **the third form** — скрізь (e11s1, e11s5 — 54, e11s6, e11s8); «past participle» — лише в коментарі шапки e11s4. **email**, **the internet**, **penfriend** — однаково; e-mail, Internet, pen friend / pen pal — 0. **chat show** (місток «also talk show» раз, e11s3l2).
- Імена історичних осіб: Volodymyr Vernadskyi (людина) / Akademik Vernadsky (станція) — однаково в e11s5 і e11s7; Pylypiw, Eleniak, Kadenyuk — однаково в e11s7. **Нове рішення D-057** (inbox, orchestrator, 2026-11-27): історичні особи — усталене англійське написання (Volodymyr Vernadsky) з приміткою про КМУ55. Застосування — окрема задача fix-eng-historic-names; у цій задачі не правив.

## 5. Прапорці stats «нетипово для сім'ї» (після правок)
Уроки читання з текстом 400–450 слів (e11s2l6, e11s3l5, e11s4l6, e11s5l6, e11s6l6, e11s7l6, e11s8l2) і фінал e11s1l7 — rwps 64–67, maxText 143–165; e11s4l4 longWordShare 0,19 (unusual, colourful, priceless — тема уроку); e11s3l4 / l6 sentenceWords 5,3 / 5,0 (короткі теги й reply questions — тема); e11s4l5 gradedShare 0,50 (межа профілю, 4 info про фестивалі), e11s3l5 / e11s4l6 0,83. Усе пояснюється змістом уроку. За профіль виходить лише **e11s6l6 readWordsPerScreen 67 > 65** — після доведення тексту до 408 слів (як e10s4l6 у 10 кл.). Скорочувати перевірені неуривкові екрани не став; пропозиція до профілю — §6.

## 6. Складність: 9 → 10 → 11 кл. і остаточна пропозиція профілю «10-11»
Звичайні уроки / фінали; сер. ± sd, min–max (після правок, reports/style-eng.md).

| Метрика | 9 кл. (54 / 9) | 10 кл. (48 / 8) | 11 кл. (48 / 8) | «10-11» зараз | Пропозиція |
|---|---|---|---|---|---|
| screens | 10,4 ± 0,8 / 8,9 | 11,1 ± 0,7; 9–12 / 9,9 | 11,4 ± 0,8; 10–12 / 10,2 | 6–12 | без змін |
| gradedShare | 0,66 / 0,89 | 0,65 ± 0,06; 0,55–0,82 / 0,89 | 0,64 ± 0,07; 0,50–0,83 / 0,89 | 0,5–0,9 | без змін |
| readWordsPerScreen | 39 ± 5; 30–49 | 44 ± 8; 35–67 / 34 | 48 ± 9; 36–67 / 36 (до 65) | 8–65 | **8–70** |
| maxReadWords | 73 ± 10 | 92 ± 20; до 140 / до 186 | 104 ± 27; до 168 / до 150 | ≤ 200 | без змін |
| maxText | 68 ± 10 | 88 ± 21; до 137 / до 183 | 100 ± 27; до 165 / до 147 | ≤ 190 | без змін |
| sentenceWords | 6,5 ± 0,6 | 7,4 ± 0,7; 6,0–8,5 | 7,6 ± 0,9; 5,0–9,0 / 7,1 | 4–16 | **4–13** |
| longWordShare | 0,082; max 0,175 | 0,076; max 0,158 | 0,095; max 0,19 | ≤ 0,24 | **≤ 0,22** |
| typeVariety | 5,5 / 5,0 | 5,7 / 4,9 | 5,8 / 4,1 | 2–6 | без змін |

- 10 → 11 кл. — плавно: rwps +4, maxText +12, sentenceWords +0,2, longWordShare +0,02, screens +0,3 (тексти 350–400 → 400–450 слів, П1407 с. 21). Між розділами 11 кл. рівно: звичайні уроки rwps 36–55, з другорядним текстом ≈ 290 слів (e11s2l1, e11s6l2) — 58–62, уроки читання 64–67.
- **Остаточна пропозиція (рядок STYLE в inbox; рішення — decisions.md, людина чи куратор):** `eng."10-11".readWordsPerScreen` [8, 65] → **[8, 70]** (факт 67 у 10 і 11 кл.: урок читання з трьома уривками по 120–160 слів на 10 екранах); `sentenceWords` [4, 16] → **[4, 13]** (факт 5,0–9,0; запас 4 слова; плавно після «7-9» 12); `longWordShare` [0, 0,24] → **[0, 0,22]** (факт max 0,19; 7-9 — 0,18). Решта (screens 6–12, gradedShare 0,5–0,9, maxReadWords 200, maxText 190, typeVariety 2–6) — без змін.
- ENGINE (повтор style-eng-g6/g7/g10): тепер сім'я «10-11» повна (96 уроків), z-прапорці лишаються майже лише на уроках читання; поріг |z| ≥ 3 чи z у межах типу уроку прибрав би шум.

## 7. Для точкової повторної верифікації
Ключі (`correct`, `{*…}`, `answer`, `tiles`, `extra`) не змінено ніде (механічна звірка з HEAD 5988f40 — однаково у 8 файлах з 8); `opts` не змінено ніде.
1. **e11s1l7** — п'ять речень у трьох уривках (§1 п. 1): ч. 1 «Bohdan sold the last cake» лишається хибним (черга за тортами не каже, що їх продано); ч. 2 «What did Andrii suggest?» — без змін; ч. 3 «She thought Yehor had taken it» хибне. Yehor малює — так у e11s1 (постери).
2. **e11s6l6** — два речення (нічний потяг; фото). Питання ч. 1 і ч. 3 не зачеплено.
3. **Перейменування:** e11s5 Maksym → Pavlo; e11s8 Ms Hrytsenko → Ms Klymenko, Solomiia → Uliana (у т. ч. hint і fbBad фіналу).
4. **e11s8l4** `match` left «Oksana thinks she has made up» і фінал l4 «I think I’ve made up my {*mind|head|choice}» — правильна половина / ключ ті самі; перевірити, що інших пар у match не з'явилося.
5. **e11s8l5** — репліка Emma (astronomer → doctor); питання про тривалість навчання не зачеплено.
6. **e11s4l2 #0** «I’m thinking of studying art history…» (intro, не оцінюється).
7. **e11s7l7** — нова назва уроку.
8. **12 нових `hint`** (§2) — що відповідей не видають (особливо e11s2l7 T6, e11s3l7 T4, e11s4l7 T5, e11s6l7 T1) — і 5 переставлених (§1 п. 10).
Без впливу на зміст: 11 замін `fbOk`.

## 8. Не зроблено / наступні кроки
- Профіль «10-11» — §6, рядок STYLE в inbox (decisions.md — людина чи куратор).
- D-057 (історичні особи) — задача fix-eng-historic-names; у g11: Vernadskyi → Vernadsky + примітка (e11s5, e11s7); Pylypiw / Eleniak / Kadenyuk уже усталені, потрібна лише примітка.
- Автору dge11 (паралельно; рядок в inbox): Maksym → Pavlo, Hrytsenko → Klymenko, Solomiia → Uliana; Emma — doctor (травень), astronomer (зима); Oksana — vet у Kharkiv, art history — хобі.
- Leah / Jack і Taras / спорт — для куратора героїв (давні).
- Плейтест e11s1–e11s8 — після build оркестратора (Python-модуля playwright у контейнері немає — лише CI).
