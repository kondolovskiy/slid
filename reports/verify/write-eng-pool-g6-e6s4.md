# Верифікація: пул pe6s4 (англійська, 6 кл., розділ e6s4 «Sport»)

Верифікатор: verifier-pe6s3-pe6s4 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g6-e6s4.js` (автор writer-pe6s4, 75 вправ a01–a75) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g6-e6s4.md. Зміст звіряв з уроками `content/eng/g6-e6s4.js` (verified, reports/verify/e6s4.md), e6s3 і раніших класів. Еталон — reports/verify/pe5s10.md.

**Вердикт: пул придатний, `status: "verified"` після правок.** Одна блокувальна знахідка: друга правильна відповідь у a03/a04, тепер вона в ключі. Ще один hint розкривав відповідь (a20), його виправлено. Разом 7 мінімальних правок, id вправ не змінював, їх і далі 75. Питань до вчителя немає, TQ не створював.

## 1. Схема, джерело, покриття

| Що | Результат |
|---|---|
| `node tools/validate.mjs --pool pe6s4` | 0 помилок, 0 попереджень (до правок і після) |
| `personalization-qa --pool pe6s4` | лише рядок «без матриці покриття»: 6 уроків, 75 вправ |
| `euphony --pool pe6s4` | зауважень немає |
| `sources`: `mpim`, `program: true`, title й url як у facts/eng.md; `src` — «mpim с. 16/20/21/22» | ✅ (с. 20 — «Спорт»; с. 21 — Could, аргументувати вибір, What a…; с. 22 — Past Continuous, when; с. 16 — читання) |
| `sk` вправи є серед оцінюваних `sk` її уроку | ✅ для всіх 75 |
| Матриця урок × sk (скрипт) | l1: vocab 112233, phon 123, write 123 · l2: gram 12223, vocab 123, func 123, phon 123, write 123 · l3: read 123, gram 11223, func 123 · l4: gram 11223, func 123, write 123 · l5: gram 12233, func 123, read 123 · l6: read 123, gram 1123, write 123, cult 123 · boss — без вправ. ✅ |
| Типи | gaps 22, choice 17, build 10, word 9, stress 6, pick 5, match 3, multi 2, sort 1 — усі в POOL_TYPES |

## 2. Факти (усі вже є в уроці e6s4l6; нових фактів пул не вводить)

| Твердження | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Ярослава Магучіх — з Дніпра (a74) | uk.wikipedia (curl): «Народження 19 вересня 2001… Дніпропетровськ», категорії «Уродженці Дніпра», «Спортсмени Дніпра» — https://uk.wikipedia.org/wiki/Ярослава_Магучіх; vikna.tv (WebSearch: «Українська спортсменка родом із Дніпра») — https://vikna.tv/dlia-tebe/novyny-ukrayiny/yaroslava-maguchih-otrymala-zoloto-zi-strybkiv-u-vysotu-na-olimpiadi-2024/ | ✅ |
| Вона займається легкою атлетикою, стрибками у висоту, і в серпні 2024 виграла стрибки у висоту на Олімпійських іграх у Парижі (a74, a75) | olympics.com (WebSearch): «claims women’s high jump gold… Sunday, 4 August» — https://olympics.com/en/news/paris-2024-athletics-women-high-jump-ukraine-mahuchikh-gold; World Athletics, Report 04 Aug 2024 — https://worldathletics.org/news/report/paris-2024-olympics-report-women-high-jump; lb.ua, 04.08.2024 — https://lb.ua/sport/2024/08/04/627816_druge_zoloto_ukraini_yaroslava.html; uk.wikipedia (MedalGold «2024 Париж — стрибки у висоту») | ✅ |
| Sports day у школах UK: зазвичай без уроків, діти біжать наввипередки (a73) | OALD sports day (curl): «a special day at school when there are no classes and children compete in sports events» — https://www.oxfordlearnersdictionaries.com/definition/english/sports-day; CD sports day (curl): «a day on which the children in a school compete in races, etc. against each other» — https://dictionary.cambridge.org/dictionary/english/sports-day; Twinkl, Egg and spoon race (WebSearch) — https://www.twinkl.com/teaching-wiki/egg-and-spoon-race | ✅ («usually no lessons» обережніше за OALD) |

Примітка: прямі curl до olympics.com, worldathletics.org і britannica.com проксі відхилив (403). Їхній зміст я бачив лише у фрагментах WebSearch.

## 3. Словники (curl, 2026-11-27)

| Слово (`stress`) | CD UK | OALD BrE | Опора `<u>` |
|---|---|---|---|
| athletics, gymnastics, volleyball, skiing | /æθˈlet.ɪks/, /dʒɪmˈnæs.tɪks/, /ˈvɒl.i.bɔːl/, /ˈskiː.ɪŋ/ — https://dictionary.cambridge.org/dictionary/english/<слово> | /æθˈletɪks/, /dʒɪmˈnæstɪks/, /ˈvɒlibɔːl/, /ˈskiːɪŋ/ — https://www.oxfordlearnersdictionaries.com/definition/english/<слово> | e6s4l1 info |
| prefer, exciting, difficult, dangerous | /prɪˈfɜːr/, /ɪkˈsaɪ.tɪŋ/, /ˈdɪf.ɪ.kəlt/, /ˈdeɪn.dʒər.əs/ | /prɪˈfɜː(r)/, /ɪkˈsaɪtɪŋ/, /ˈdɪfɪkəlt/, /ˈdeɪndʒərəs/ | e6s4l2 info |
| tennis, basketball | /ˈten.ɪs/, /ˈbɑː.skɪt.bɔːl/ | /ˈtenɪs/, /ˈbɑːskɪtbɔːl/ | e4s3 (`<u>ten</u>nis`, `<u>bas</u>ketball`) |
| football, judo | /ˈfʊt.bɔːl/, /ˈdʒuː.dəʊ/ | /ˈfʊtbɔːl/, /ˈdʒuːdəʊ/ | **ніде в eng не підкреслені** → правки a08, a09 |

У всіх слів один наголос, розмітка `+` збігається зі словниками.

## 4. Розв'язок і опора (D-019)

Кожну вправу я розв'язав сам до того, як дивився на ключ. **build:** через `SLID_LANG.check(…, "en")` перебрав усі впорядковані підмножини `tiles ∪ extra`: a36, a40, a58, a68 — по 109 600 станів, a26 — 13 699, a25 — 1 956, a10, a47, a49, a66 — по 325. Рушій приймає лише ключі (у a10 їх два). Порядки з підрядним реченням на початку («When I was four…», «When Tom came in, what…») відсікають «Start with I / It» або `keepCase` з великою першою плиткою. **word:** `wordVerdict` перевірив на ключі й на кандидатах. **gaps/pick/stress/match:** `check(solution)` = true.

| Вправи | Моя відповідь = ключ | Опора | Друга відповідь / дистрактори | Вердикт |
|---|---|---|---|---|
| a01, a02, a05, a06, a11, a12 | = | l1 info «Play, go or do?» (sport = do / play) | play sport (теж правильне) у варіантах a05 відсутнє; make — хибне | ✅ |
| **a03** word «On Saturdays, Emma and her mum ___ swimming.» | go | l1 info | **went** — граматичне (звичка в минулому), і контекст його не відсікає; у ключі не було | ❌ → правка: answer ["go", "went"]; ✅ після (спірне 1) |
| **a04** word «Polina loves the snow. Every winter, she ___ skiing…» | goes | l1 info | «loves» тягне до теперішнього, але «went» граматичне, і вправа тренує вибір go / play / do, а не час | ⚠️ → правка: answer ["goes", "went"] (узгоджено з a03); ✅ після |
| a07 stress | = | athletics — l1 `<u>`; tennis — e4s3 `<u>` | — | ✅ |
| a08, a09 stress | = | football і judo в уроках eng ніде не підкреслені (pitfalls-content п. 19) | — | ⚠️ → правки: a08 football → skiing, a09 judo → tennis; hint-и лишаються правдивими; ✅ після |
| a10 build | = | l1 | обидва порядки в ключі | ✅ |
| a13–a17, a27–a29 prefer | = | l2 info «I prefer tennis» (to, -s, -ing) | than, гола основа, prefer без -s — неграматичні; prefer to-інфінітив хибним ніде не стоїть | ✅ |
| a18, a19 vocab | = | l2 info «Why? Because…» | match a18: пари однозначні | ✅ |
| **a20** word «Tennis isn’t difficult… For him, it’s ___.» | easy | l2 info | hint «Look at the pairs: easy ↔ …» **прямо називав відповідь**; simple (= easy, CD) — друга правильна протилежність | ❌ → правка: hint «Look at the pairs: … ↔ difficult.», answer ["easy", "simple"]; ✅ після |
| a21–a23 stress | = | l2 `<u>`; basketball — e4s3 | — | ✅ |
| a24–a26 func | = | l2 info, build «Which sport do you prefer?» | a26: why — хибна плитка | ✅ |
| a30–a32 read | = | тексти в body | a30: swim у тексті не згадано, тож «couldn’t swim» не підтверджене; a32 — висновок «почав у 6 → у 7 міг» | ✅ (спірне 2) |
| a33–a40 could | = | l3 info «Can and could» | can / could протиставлені лише з маркерами Now / When I was…; did могло б бути в a38 («No, I didn’t»), але воно хибне за правилом уроку (l3 choice: «We don’t use did with could») | ✅ |
| a41–a51 Past Continuous | = | l4 info (was / were + -ing, questions) | дистрактори was read, were з I, was з they — неграматичні; a48 match — однозначний як бієкція | ✅ |
| a49 build «I was reading a book.» | = | l4 | «A book I was reading.» — маркований порядок, як у pe6s3 a57 | ⚠️ → правка: «Start with I.» в body; ✅ після |
| a52–a59 when / while | = | l5 info «Long action, short action» | while перед короткою дією — хибне за правилом уроку; while перед довгою ніде не оцінюється як помилка; a54 «Write when or while» відсікає as | ✅ |
| a56 gaps | was taking, kicked | l5 info | hint «Short action in the past → -ed.» давав морфологію відповіді | ⚠️ → hint «Short action → the Past Simple.» (як в уроці); ✅ після |
| a60–a62 read l5 | = | тексти в body | a62 (1): «It was raining when they started» суперечить «It was sunny» | ✅ |
| a63–a65 read l6 | = | тексти в body | a65: 2–2, потім гол Andrii «у нашій команді» → 3–2, Yaroslav’s team | ✅ (спірне 3) |
| a66–a72 gram/write l6 | = | l6 info «Writing sports news» (won, lost, fell; What a / an) | winned, a exciting, was singing з fans — неграматичні | ✅ |
| a73–a75 cult | = | l6 multi (sports day), gaps (Mahuchikh) | a75: June 2024 — пастка з уроку (sports day Emma «this year… in June») | ✅ (спірне 4) |

**Лексика** (скрипт проти g4-*, g5-*, e6s1–e6s3 і уроків e6s4 до `lesson`): поза уроками лише хибні форми (coulds, winned, kicks, kick), словоформи (goals, skated, kicking, opposites) та ім'я Oliver у l1 (з'являється в l2; ім'я, не лексика). ✅

**Копії уроків** (6-грами): лише рамки («One word in X’s message is wrong», «Use win or lose in the Past Simple», «kicked the ball into the goal») і факти про Магучіх. Ключ уроку з тим самим реченням вправи не повторюють: у a71 інший контекст і ключ lost, у l6 був won. ✅

**Авторське право** (WebSearch з лапками):

| Фрагмент | Запит | Результат |
|---|---|---|
| a31 «When I was five, I could swim, but I couldn’t play tennis. When I was seven…» | дослівно в лапках | дослівного збігу немає (є лише той самий шаблон could / couldn’t у British Council LearnEnglish Kids) |
| a62 «…were playing chess in the park… Then it started to rain. While they were running home…» | дослівно в лапках | дослівного збігу немає; спільна з Kid’s Box (CUP) лише коротка рамка «when it started to rain» (< 12 слів, вона є й в уроці) |
| a65 «They had two goals, and we had two goals. Then, at the end of the match…» | дослівно в лапках | дослівного збігу немає |

**BrE і механіка:** AmE, «Listen», IPA, `uk`, A/B/C не знайдено. «sports» — лише лічильне (Other sports, sports day, sports news). Ключі `word` без кінцевого `.!?`. Рекомендація (не блокує): у a64 і a65 «had one goal / had two goals» природніше «scored», але слово score в уроках не вводили. Лишаю як є.

**Герої** (glossary/eng-heroes.md): у Taras two brothers і сестра Zlata (a12, a16, a30, a45) — ✅ канон e5s1; Tom не вміє плавати, вміє кататися (a17, a38) — ✅; Oliver — однокласник Emma, грає в теніс — ✅. NOTE, нове: Mariia грає у volleyball (a01, a10) (канон: малює, не катається, не суперечить); Polina (Kharkiv) щозими катається на лижах у Карпатах (a04); Tom і Oliver грали у футбол о сьомій ранку (a41). Звести в style-sync.

## 5. Спірні пункти автора

1. a03 / a04 «went»: в a03 контекст минулий час не відсікає, тому це друга правильна відповідь. Обидва ключі доповнено на «went». Прецедент уроку («He ___ judo after school» → does) там опирається на теперішнє «Vlad’s favourite sport is judo».
2. a30, swim: дистрактор коректний, бо текст не каже, що Zlata не вміла плавати.
3. a65, висновок 3–2: опора є, рівень 3 доречний.
4. a75, June 2024: пастка з уроку l6, однозначно хибна.

## 6. Правки (зроблено)

1. **a03** answer `"go"` → `["go", "went"]`.
2. **a04** answer `"goes"` → `["goes", "went"]`.
3. **a08** stress: `+foot|ball` → `+ski|ing`, steps відповідно.
4. **a09** stress: `+ju|do` → `+ten|nis`, steps відповідно.
5. **a20** hint «Look at the pairs: easy ↔ …» → «Look at the pairs: … ↔ difficult.»; answer → `["easy", "simple"]`.
6. **a49** body + «Start with I.».
7. **a56** hint «Short action in the past → -ed.» → «Short action → the Past Simple.».
8. Статус пулу: `draft` → `verified`, `meta.factcheck` і заголовний коментар оновлено.

## 7. Вердикт

Уроки e6s4l1–l6 у пулі після правок: усі пари (урок, sk) мають рівні 1–3, неправильних ключів і завдань без опори немає. **pe6s4 — verified.** Людина-вчитель ставить `approved` після власного перегляду.
