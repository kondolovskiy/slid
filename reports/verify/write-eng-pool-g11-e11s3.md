# Верифікація: пул pe11s3 (англійська, 11 кл., розділ e11s3 «Leisure: clubs, film, TV and the internet»)

Верифікатор: verifier-pe11s3-pe11s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g11-e11s3.js` (76 вправ a01–a76) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g11-e11s3.md. Опора: уроки `content/eng/g11-e11s3.js` (verified) і попередні розділи (e7s4, e8s1, e9s4, e9s5). Канон героїв — memory/long/glossary/eng-heroes.md (11 кл.: 17 років, Tom 15, Dmytro 13).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів і других правильних відповідей поза ключем я не знайшов. Зробив 3 правки в 3 вправах: 1 опора hint/steps, якої немає в тексті (a24), 2 суперечності канону героїв (a07, a13). Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI, бо Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources`: лише `p1407`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. `src`: с. 24 (тема «Дозвілля»: клуби за інтересами; кіно, театр, ТБ, Інтернет; улюблений фільм; характеристика фільму чи вистави) — l1, l2 vocab/read/write, l3 vocab/cult, l5; с. 25 (compound adjectives, question tags) — l3 gram/write, l4; с. 23 (функції «порівнювати», «демонструвати зацікавленість») — l2 func, l6. Збігається з шапкою розділу e11s3 ✅.

## 2. Факти (лише ті, що вже є в уроці e11s3l3)

| Твердження (вправи) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| 2021: Довженко-Центр попросив кінофахівців обрати 100 найкращих українських фільмів (a39, a40) | https://en.wikipedia.org/wiki/List_of_the_100_best_films_in_the_history_of_Ukrainian_cinema (curl raw: «selected in June 2021 by the National Oleksandr Dovzhenko Film Centre… through a poll»); https://suspilne.media/142099-100-najkrasih-filmiv-v-istorii-ukrainskogo-kino-rejting-dovzenko-centru/ (WebSearch: презентація 24 червня на X Книжковому Арсеналі) | ✅ |
| 1-ше — Shadows of Forgotten Ancestors (1965), 2-ге — Earth (1930) (a40) | ті самі + https://news.obozrevatel.com/kino/nazvan-luchshij-film-v-istorii-ukrainskogo-kino.htm (WebSearch) | ✅ (1965 — рік виходу, зйомки 1964; урок і пул пишуть 1965, як у реєстрі facts/eng-3.md №311) |
| Earth — німий фільм Довженка (a40) | https://en.wikipedia.org/wiki/Earth_(1930_film) (curl raw: «a 1930 Soviet Ukrainian silent film by Alexander Dovzhenko»); https://takflix.com/en/films/earth (WebSearch) | ✅ |
| Багато сцен Тіней знято в Криворівні, селі в Карпатах (a41; формулювання «Many scenes», D-057) | https://en.wikipedia.org/wiki/Shadows_of_Forgotten_Ancestors (curl raw: «location shooting of the village scenes took place in the Carpathian village of Kryvorivnia… indoor shooting… Dovzhenko»); https://zaxid.net/pamyatki_istoriyi_ta_kulturi_v_ukrayinskih_filmah_oglyad_filmiv_n1608537 (WebSearch) | ✅ |
| Kotsiubynsky у пулі не згадано; вигадані назви (The Pyrizhok Café, Lviv Teen Photo Club) — лише з уроків | — | ✅ |

## 3. Форми й наголос (словники відкрито в цій сесії через curl)
CD https://dictionary.cambridge.org/dictionary/english/<word> (UK | US) і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word> (BrE | NAmE):
membership ˈmem.bə.ʃɪp | ˈmem.bɚ.ʃɪp · /ˈmembəʃɪp/; community kəˈmjuː.nə.ti | kəˈmjuː.nə.t̬i · /kəˈmjuːnəti/; moderator ˈmɒd.ər.eɪ.tər | ˈmɑː.də.reɪ.t̬ɚ · /ˈmɒdəreɪtə(r)/; newcomer ˈnjuːˌkʌm.ər | ˈnuːˌkʌm.ɚ · /ˈnjuːkʌmə(r)/; member ˈmem.bər · /ˈmembə(r)/; documentary ˌdɒk.jəˈmen.tər.i | ˌdɑː.kjəˈmen.t̬ɚ.i · /ˌdɒkjuˈmentri/ (documentary_1). Наголошений склад у UK і US однаковий ✅. Підкреслення в уроках: membership, community, moderator, newcomer — e11s3l1 #3; <u>mem</u>ber — e9s5; docu<u>men</u>tary — e7s4, e9s4 (grep) ✅. У кожному наборі a09–a11 є слово з іншим наголошеним складом ✅.
Граматика: CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/question-tags (curl: «When tags follow imperatives, the tag verb is usually will… we can also use would, could, can and won’t»; «After the imperative with let’s, we can use shall») і …/questions-follow-up-questions (curl: «Follow-up questions are formed using the auxiliary verb or modal verb contained in the statement… A: I can’t watch horror movies. B: Can’t you?»). never = заперечне значення, тег позитивний — British Council LearnEnglish, «The trains are never on time, are they?» (WebSearch: https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/question-tags?page=3).

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` зараховує всі ключі. `build` перевірено перебором усіх перестановок усіх підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe11s3-pe11s4/bin/chk.mjs`): a15, a26, a42, a51 — зараховується лише ключ, іншого граматичного порядку з цих плиток немає; keepCase немає. Кінцевого `.!?` у ключах `word` немає.

**Пастки теми.** Question tags: після наказу серед варіантів лише will you, а can / could / won’t you ніде не хибні (a47, a49, a50, a52, a53, a76) ✅; Let’s → shall we, хибні — don’t we / aren’t we ✅; aren’t I лише з позитивним I’m, а a50 «I’m not late, am I?» правильне за правилом уроку «negative → positive tag» ✅; there + aren’t → are there (a53) ✅. Хибні теги — лише інше допоміжне дієслово чи займенник, а не тип 2 «positive + positive» ✅. Reply questions: хибні — інше допоміжне при тій самій полярності ✅; a70 «has never» → Hasn’t she? — як l6 match «I’ve never seen a play. → Haven’t you?» ✅. Compound adjectives: well-known після be ніде не хибне, хибні well-knowing / good-known ✅; a33 «an ___ film» відсікає prize-winning ✅. sign up for — хибне лише «of» і «for up» ✅. whereas (a27) — хибні речення без контрасту, за правилом уроку «whereas = and in contrast» ✅.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | за списком | = | l1 #3 | інших пар немає | ✅ |
| a02 choice | spoilers | = | l1 #3 | ні | ✅ |
| a03 word | up | = | l1 #3 | ні | ✅ |
| a04 gaps | members; meet up; newcomers; like-minded | = | l1 #3 | Zoriana — IT (канон) | ✅ |
| a05 pick | [newcomer] | = | l1 #3 | ні | ✅ |
| a06 choice | Be polite | = | текст | ні | ✅ |
| a07 multi | [0,2] | = | текст; l1 #3 | «started as a small online community» суперечить канону e9s5 (Taras і Myroslava відкривають клуб у School 5 library) | ⚠️ → «started at School 5 with just a few people» |
| a08 choice | like-minded | = | текст; l1 #3 | Daryna — сестра, theatre club (канон, фінал l7) | ✅ |
| a09–a11 stress | за словником | = | §3 | hint — стратегія | ✅ |
| a12 gaps | join; for | = | l1 #3, #9 | ні | ✅ |
| a13 pick | [to] | = | l1 #9 | «Last month Ostap signed up» суперечить e11s3l1 #6, де Ostap уже в групі клубу | ⚠️ → «Ostap’s cousin Marko» (канон e9s5: Marko хоче в клуб) |
| a14 gaps | joined; up for; join | = | l1 #3 | ні | ✅ |
| a15 build | ключ | = | l1 #3 | перебір: лише ключ | ✅ |
| a16, a17 gaps | newcomer; like-minded; meet up / meet up; newcomer; moderators; online community | = | l1 #3 | Yehor — малює (канон 11 кл.) | ✅ |
| a18 match | за списком | = | l2 #3 | інших пар немає | ✅ |
| a19 word | soap | = | l2 #3 | ні | ✅ |
| a20 gaps | sitcom; documentary; chat show | = | l2 #3, #4 | ні | ✅ |
| a21 pick | [episodes] | = | l2 #3 | ні | ✅ |
| a22, a23 | small screen / [0,2] | = | текст | ні | ✅ |
| a24 choice | watch different things | = | текст | hint і steps посилаються на whereas, а в тексті його немає («But at home it’s different») | ⚠️ → у тексті «…the same film, whereas at home…»; речення розбито (validate: 36 слів) |
| a25 gaps | advantage; that | = | l2 #5 | ні | ✅ |
| a26 build | ключ | = | l2 #5 | перебір: лише ключ | ✅ |
| a27 multi | [0,2] | = | l2 #5 | варіанти 1 і 3 граматичні, але без контрасту — хибні за правилом уроку | ✅ |
| a28–a30 gaps | episode; service / advantage; interval; whereas / stream; advantage; that; disadvantage; whereas | = | l2 #3, #5, #6; interval — e7s4l2 | ні | ✅ |
| a31 choice | action-packed | = | l3 #3 | ні | ✅ |
| a32 gaps | long-running; thought-provoking | = | l3 #3 | контекст відсікає world-famous і action-packed | ✅ |
| a33 word | award-winning | = | l3 #3 | an відсікає prize-winning | ✅ |
| a34–a36 | two-day; three-hour / two hours; two-hour; three parts / [three-parts] | = | l3 #3, #7 | ні | ✅ |
| a37 multi | [0,2,3] | = | l3 #3, #7 | ні | ✅ |
| a38 word | week | = | l3 #3 | ні | ✅ |
| a39–a41 | 100 best / [0,1] / Kryvorivnia | = | l3 #1, #5, фінал l3 | факти — §2 | ✅ |
| a42 build | ключ | = | l3 #3 | перебір: лише ключ | ✅ |
| a43, a44 gaps | action-packed; two hours; world-famous / award-winning; action-packed; thought-provoking; three-hour; well known | = | l3 #3, #7 | ні | ✅ |
| a45, a46 | doesn’t it; isn’t he / haven’t you | = | l4 #3 | ні | ✅ |
| a47 match | aren’t I; shall we; isn’t there; will you | = | l4 #6 | інших пар немає | ✅ |
| a48 gaps | have you; can you; wasn’t she | = | l4 #3 | ні | ✅ |
| a49 pick | [don’t we] | = | l4 #6 | will you і haven’t you — хибні кнопки, обидва правильні | ✅ |
| a50 gaps | am I; isn’t there; will you | = | l4 #3, #6 | aren’t I після I’m not — хибне | ✅ |
| a51 build | ключ | = | l4 #6 | перебір: лише ключ | ✅ |
| a52, a53 gaps | haven’t we; won’t he; can she; will you / aren’t I; are there; shall we; will you | = | l4 #3, #6 | ні | ✅ |
| a54 match | за списком | = | l5 #3 | інших пар немає | ✅ |
| a55–a57 | predictable; gripping / cast / [soundtrack] | = | l5 #3 | a56 «all the actors» відсікає acting | ✅ |
| a58–a60 | predictable / [0,3] / so predictable | = | текст; l5 #3 | Bohdan, Polina (Kharkiv) — канон | ✅ |
| a61 gaps | recommend; give | = | l5 #3 | ні | ✅ |
| a62 order | за планом | = | l5 #10 | інша будова й зміст, ніж l5 #10 | ✅ |
| a63 gaps | set; cast; special effects; gripping; give | = | l5 #3 | ні | ✅ |
| a64–a66 | in; stars / [is setting] / is set; stars; plot | = | l5 #3, #11 | ні | ✅ |
| a67 gaps | Did you; Are you | = | l6 #3 | ні | ✅ |
| a68 match | Can’t you; Are you; Does he; Didn’t you | = | l6 #3 | інших пар немає; Maksym — Ottawa (канон) | ✅ |
| a69 word | haven’t | = | l6 #3 | ні | ✅ |
| a70 pick | [Has] | = | l6 #6 (match «I’ve never… → Haven’t you?») | never — заперечне значення (§3) | ✅ |
| a71–a73 choice | What a shame / Did you? Oh no! / Can’t you? What a shame. Why not? | = | l6 #3, #5 | ні | ✅ |
| a74–a76 gaps | Have you; Didn’t you / Are you; Don’t you; I know what you mean / Won’t you; Can she; Has he; will you | = | l6 #3, #5; l4 #6 | ні | ✅ |

## 5. Інше
- **Канон героїв:** Kateryna й Artem (Kharkiv, drama club), Taras і Myroslava — модератори Lviv Teen Photo Club, Ostap, Orest, Marko (кузен Ostap), Emma, Liliia, Oliver, Ruby, Tom (live football), Daryna (сестра, theatre club), Andrii і Sofiia, Maksym (Ottawa), Bohdan (quiz show), Zoriana, Yehor, Polina, Halyna, Grandma Hanna, Zlata. Після правок a07 і a13 суперечностей не лишилося. Нових імен немає.
- **BrE:** flat, film, programme, colourful, at the weekend; the internet з малої ✅. AmE-форми хибними варіантами не дано ✅.
- **Без IPA, звуку, «Listen»** ✅. Літер A/B/C і позиційних посилань в `opts` немає ✅. Підказки не видають відповідь і не перелічують ключі в порядку пропусків ✅. Рамки уроків з тим самим ключем не повторюються (порівняв з l1 #6, #10, l2 #11, l4 #11, l5 #10, l6 #6–#8) ✅.
- **Авторське право** (WebSearch з лапками):

| Фрагмент | Запит | Результат |
|---|---|---|
| a07 «Newcomers often think their photos aren’t good enough, but nobody laughs at them» | `"Newcomers often think their photos aren't good enough, but nobody laughs at them"` | збігів немає |
| a24 «my sister Sofiia and I can never agree what to stream» | `"my sister Sofiia and I can never agree what to stream"` | збігів немає |

## 6. Прогін
`node tools/validate.mjs --pool pe11s3` — 0 помилок, 0 попереджень (після правок і зміни статусу). `node tools/personalization-qa.mjs --pool pe11s3 --strict` — 6 уроків, 76 вправ, у кожному уроці ≥ 3 вправи рівнів 1–3. `node tools/euphony.mjs --pool pe11s3` — без відхилень. `python3 tools/test-answer-ui.py --suite content --pool pe11s3` — у контейнері немає модуля playwright, прогін буде в CI (job browser).

## 7. Правки (зроблені)
a07 (перше речення тексту), a13 (Ostap → Ostap’s cousin Marko), a24 (текст: whereas, два речення), шапка, `status`, `meta.factcheck`. id вправ не змінювались.

**Вердикт: pe11s3 — verified.** Відкритих ❌ і ⚠️ немає.
