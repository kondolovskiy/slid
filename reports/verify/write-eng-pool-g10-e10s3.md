# Верифікація: пул pe10s3 (англійська, 10 кл., розділ e10s3 «Food and habits»)

Верифікатор: verifier-pe10s3-pe10s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g10-e10s3.js` (88 вправ a01–a88) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s3.md. Опора: уроки `content/eng/g10-e10s3.js` (verified) і попередні розділи g4–g9, e10s1–e10s2. Канон героїв — memory/long/glossary/eng-heroes.md (10 кл.: 16 років, Tom 14, Dmytro 12).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів і других правильних відповідей поза ключем я не знайшов. Зробив 3 правки в 3 вправах: 1 правдиве за уроком твердження стояло як хибне (a88), 2 суперечності канону героїв (a06/a43, a32). Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI: Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources`: лише `p1407`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. `src`: с. 22 (тема «Харчування», функція «давати поради») — vocab, read, cult, func, phon, write і gram l1, l4 (прийменники лексики); с. 23 (use(d) to / would, verbs + -ing / to) — gram l2, l3, l5, l6 і write l3, l6. Сторінки збігаються з розділом e10s3 (шапка, верифікований) ✅.

## 2. Факти (лише ті, що вже були в уроках e10s3l1, e10s3l4)

| Твердження (вправи) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Burns Night — 25 January, день народження Robert Burns; haggis з neeps and tatties (a01, a05, a16) | https://www.visitscotland.com/things-to-do/events/burns-night ; https://www.scotsman.com/arts-and-culture/when-burns-night-date-origins-traditions-and-how-host-proper-burns-supper-1423727 ; https://en.wikipedia.org/wiki/Burns_supper (WebSearch) | ✅ |
| 2022: UNESCO — culture of Ukrainian borscht cooking, список, що потребує термінової охорони (a02) | https://ich.unesco.org/en/USL/culture-of-ukrainian-borscht-cooking-01852 ; https://www.npr.org/2022/07/01/1109319174/unesco-declares-ukraine-borsch-ukrainian-heritage (WebSearch) | ✅ |
| Sainsbury’s 2022 змінив «Kiev» на «Kyiv»; M&S — chilled chicken Kiev з 1979 (a03, a18) | https://www.retailgazette.co.uk/blog/2022/03/sainsburys-to-rename-chicken-kiev-to-kyiv-to-support-ukraine/ ; https://www.grocerygazette.co.uk/2022/03/04/sainsburys-ms-chicken-kiev/ (1979, «one of the first ready meals») (WebSearch) | ✅ |
| NHS: frozen і tinned рахуються, картопля — ні (starch), сік — максимум 1 порція, хоч скільки випив; 80 g (a44–a46) | https://www.nhs.uk/live-well/eat-well/5-a-day/5-a-day-what-counts/ (WebSearch-уривки; curl на nhs.uk проксі відхилив, 403); https://www.bhf.org.uk/informationsupport/heart-matters-magazine/nutrition/5-a-day/what-counts-as-5-a-day ; https://www.bda.uk.com/foodfacts/fruit_vegetables__how_get_five-a-day (WebSearch) | ✅ |
| Решта (Grandad у готелі, Vasyl у пекарні, кафе мами Orysia тощо) — вигадані деталі героїв, не ключ; звірено з каноном (§5) | — | ✅ |

## 3. Форми й наголос (словники відкрито в цій сесії через curl)
CD https://dictionary.cambridge.org/dictionary/english/<word> (UK | US) і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word> (BrE):
national ˈnæʃ.ən.əl | = · OALD national_1 /ˈnæʃnəl/; regional ˈriː.dʒən.əl | = · /ˈriːdʒənl/; savoury ˈseɪ.vər.i | ˈseɪ.vɚ.i · savoury_1 /ˈseɪvəri/; ingredient ɪnˈɡriː.di.ənt | = · /ɪnˈɡriːdiənt/; potato pəˈteɪ.təʊ | pəˈteɪ.t̬oʊ · /pəˈteɪtəʊ/; Ukrainian juːˈkreɪ.ni.ən | = · ukrainian_1 /juːˈkreɪniən/; delicious dɪˈlɪʃ.əs | = · /dɪˈlɪʃəs/; protein ˈprəʊ.tiːn | ˈproʊ.tiːn · /ˈprəʊtiːn/; carbohydrate ˌkɑː.bəʊˈhaɪ.dreɪt | ˌkɑːr.boʊˈhaɪ.dreɪt · /ˌkɑːbəʊˈhaɪdreɪt/; vitamin ˈvɪt.ə.mɪn | ˈvaɪ.t̬ə- · /ˈvɪtəmɪn/; fibre ˈfaɪ.bər | ˈfaɪ.bɚ · /ˈfaɪbə(r)/; balanced ˈbæl.ənst | = · /ˈbælənst/. Наголошений склад у UK і US однаковий, отже BrE/AmE розбіжності немає ✅. Кожне слово `stress` раніше було підкреслене `<u>`: national, regional, savoury, ingredient, protein, carbohydrate, vitamin, fibre, balanced — e10s3l1/l4; potato — e5s3; Ukrainian — e4s1; delicious — e7s2 ✅. У кожному наборі є слово з іншим наголошеним складом ✅.
`word`: fussy — CD «fussy eater UK All my children were fussy eaters»; picky — CD «The children are such picky eaters»; choosy — CD «difficult to please»; kick — CD idiom «kick the habit» ✅. Граматика used to / would / be used to — CD Grammar, як у розділі (reports/verify/write-eng-g10-e10s3.md).

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` зараховує всі ключі. `build` перевіряв перебором усіх перестановок усіх підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s3-pe10s4/bin/chk.mjs`). Зараховуються лише ключі: a29, a38, a72, a73, a83 (по 1 порядку; інші граматичні порядки суперечать контексту: «prefer bananas to apples», «crisps instead of fruit»). Кінцевого `.!?` у ключах `word` немає. Лексику перевіряв скриптом `lex.mjs` проти g4–g9, e10s1–e10s2 і уроків e10s3 до поточного: поза уроками лише picky, choosy (друга відповідь у ключі), форми sold, snack, lentil. Слів з пізніших уроків немає. 6-грами (`ngram.mjs`) — лише інструкції й визначення з info у `match`/`sort`.

**Пастки теми.** would зі станами (have = own, be, like, know, live, have long hair) скрізь хибне; would і used to з діями ніде не протиставлені (у кожному пропуску лише одне з них, a32, a39, a40). Past Simple для одноразової події / «скільки разів» — у ключі (a35, a37, a40, a41); Past Simple для звички ніде не хибний. **didn’t used to** не з'являється ніде (TQ-158): у a39 пастки «didn’t use», «wasn’t used to»; у a80, a84 «didn’t use to» хибне лише тому, що після нього немає дієслова («didn’t use to short hair»), а не через правопис. prefer to + verb = prefer + -ing ніде не протиставлені (a25 «I prefer to drink tea» — правильне; a31 лише eating серед правильних варіантів). Have you tried to + verb серед хибних немає (a69 — read / reads).

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 choice | on 25 January | = | l1 #5 | ні | ✅ |
| a02 choice | borscht | = | l1 #4 | hint — навігація | ✅ |
| a03 choice | “Kyiv” comes from Ukrainian | = | l1 #6 | ні | ✅ |
| a04 choice | chicken and beetroot | = | текст на екрані | ні | ✅ |
| a05 multi | [0,2] | = | текст; l1 #5 (Edinburgh) | ні | ✅ |
| a06 choice | his are better | = | текст на екрані | «My grandad is a cook» суперечило a43 «used to be a cook in a big hotel» (той самий дідусь Emma) | ⚠️ → «used to be a cook, and he still makes chicken Kyiv» |
| a07 match | за info l1 | = | l1 #3 | кожен лівий перебрав з усіма правими — інших пар немає | ✅ |
| a08 gaps | ingredients; savoury | = | l1 #3 | «sweet pudding» суперечить «isn’t sweet at all» | ✅ |
| a09 word | regional | = | l1 #3 | «Use the word region» відсікає national | ✅ |
| a10 gaps | with; after | = | l1 #3 | ні | ✅ |
| a11 gaps | after; in; with | = | l1 #3, #8 | ні | ✅ |
| a12 pick | [from] | = | l1 #3 | ні | ✅ |
| a13–a15 stress | за словником | = | §3 | hint — стратегія | ✅ |
| a16 gaps | national; with | = | l1 #5 | «Scotland’s regional dish» — не з уроку | ✅ |
| a17 gaps | savoury; ingredients | = | l1 #3 | ні | ✅ |
| a18 gaps | named; started; was changed | = | l1 #6, #12 | «has started / has changed» з 1979 / 2022 неграматичні | ✅ |
| a19 match | за info l2 | = | l2 #3 | інших пар немає | ✅ |
| a20 gaps | sweet; bland | = | l2 #3 | ні | ✅ |
| a21 word | fussy / picky / choosy / difficult | = | l2 #1, #3 | синоніми в ключі | ✅ |
| a22 gaps | to; have | = | l2 #5 | ні | ✅ |
| a23 gaps | on; eat; than | = | l2 #5 | ні | ✅ |
| a24 pick | [to] | = | l2 #5 | ні | ✅ |
| a25 multi | [0,2,4] | = | l2 #5 | prefer to drink — правильне, у ключі | ✅ |
| a26 choice | No, thanks… delicious, but I’m full | = | l2 #9 | Grandma Nina — канон (Andrii) | ✅ |
| a27 choice | No, thanks. I’d rather have some tea… | = | l2 #9 | Uncle Oleh — канон (Mariia) | ✅ |
| a28 sort | 3/3 | = | l2 #5, #9 | Tom — fussy (канон l2) | ✅ |
| a29 build | I prefer apples to bananas. | = | l2 #5 | перебір: лише ключ | ✅ |
| a30 gaps | on; stand; have | = | l2 #5 | ні | ✅ |
| a31 gaps | fussy; eating; than | = | l2 #3, #5 | «to eat» серед варіантів немає | ✅ |
| a32 gaps | used to; would | = | l3 #3 | Grandad Mykola зараз має собак Bim і Sirko (e5s1), а тут «used to have a dog called Sirko» — плутає канон | ⚠️ → «a big black dog» |
| a33 choice | We used to have a big garden. | = | l3 #3 | ні | ✅ |
| a34 sort | 3/3 | = | l3 #3, #4 | ні | ✅ |
| a35 gaps | used to; went | = | l3 #3, #5 | кінотеатр — у Poltava (у селі немає, канон) | ✅ |
| a36 pick | [would] (have long hair) | = | l3 #3 | ні | ✅ |
| a37 multi | [0,2] | = | l3 #5 | ні | ✅ |
| a38 build | Did you use to walk to school? | = | l3 #3, #9 | перебір: лише ключ | ✅ |
| a39 gaps | didn’t use to; would | = | l3 #3 | TQ-158 — див. вище | ✅ |
| a40 gaps | used to; would; ran away | = | l3 #3, #5 | ні | ✅ |
| a41 choice | He ate ten syrnyky. | = | l3 #5 | ні | ✅ |
| a42 multi | [0,2] | = | текст; Vasyl — батько мами Andrii, Chernihiv (канон) | ні | ✅ |
| a43 choice | Grandad often cooked for a lot of people. | = | l3 #5 | дідусь-кухар — канон | ✅ |
| a44 choice | the UK’s health service | = | l4 #2 fbText (hyp) | ні | ✅ |
| a45 choice | frozen peas | = | l4 #1 | ні | ✅ |
| a46 choice | one | = | l4 #7 | ні | ✅ |
| a47 match | за info l4 | = | l4 #3 | carbohydrates / vitamins обидва в множині, але за значенням пара одна | ✅ |
| a48 sort | 3/3 | = | l4 #3, #5 (lentils high in protein) | ні | ✅ |
| a49 word | balanced / healthy / good | = | l4 #3 | синоніми в ключі | ✅ |
| a50–a51 gaps | in; for / in; in; for | = | l4 #5 | ні | ✅ |
| a52 pick | [of] | = | l4 #5 | ні | ✅ |
| a53 choice | fizzy drinks | = | текст | ні | ✅ |
| a54 multi | [0,2,3] | = | текст | ні | ✅ |
| a55 choice | Fruit is a better snack than crisps. | = | текст («instead of crisps») | ні | ✅ |
| a56–a58 stress | за словником | = | §3 | ні | ✅ |
| a59–a61 gaps | in; for / in; in; processed / balanced; instead of; in; for | = | l4 #3, #5, #7 | ні | ✅ |
| a62 match | за info l5 | = | l5 #3 | інших пар немає | ✅ |
| a63 gaps | give up; down on | = | l5 #3 | give in / break неграматичні з fizzy drinks | ✅ |
| a64 word | broken / kicked / given up | = | l5 #2, #3 | ні | ✅ |
| a65 choice | You should go to bed earlier. | = | l5 #5, #6 | ні | ✅ |
| a66 sort | 3/3 | = | l5 #5 | ні | ✅ |
| a67 choice | I’m not sure that would work for me. | = | l5 #5 | ні | ✅ |
| a68–a69 gaps | drinking; go / turn; to put; reading | = | l5 #5 | ні | ✅ |
| a70 pick | [to] | = | l5 #5 | ні | ✅ |
| a71 multi | [0,1,4] | = | l5 #5 | ні | ✅ |
| a72 build | Why don’t you drink more water? | = | l5 #5 | перебір: лише ключ («drink water more» — неприродно) | ✅ |
| a73 build | Have you tried eating fruit instead of crisps? | = | l5 #5, #9 | перебір: лише ключ | ✅ |
| a74 gaps | snack; having; try | = | l5 #3, #5 | ні | ✅ |
| a75 choice | Leave your phone in the kitchen at night. | = | текст; Taras — канон l5 | ні | ✅ |
| a76 multi | [0,1] | = | текст | ні | ✅ |
| a77 choice | keep his nails short | = | текст; l5 #11 | ні | ✅ |
| a78 gaps | used to; swimming | = | l6 #3 | Tom у swimming club з 7 кл. — канон | ✅ |
| a79 choice | normal for her now | = | l6 #3 | ні | ✅ |
| a80 gaps | used to; isn’t used to; washing | = | l6 #3 | ні | ✅ |
| a81 pick | [pay] | = | l6 #3 | hryvnias — e4s4 | ✅ |
| a82 multi | [0,2,4] | = | l6 #3 | ні | ✅ |
| a83 build | I’m getting used to school lunches. | = | l6 #3 | перебір: лише ключ | ✅ |
| a84–a85 gaps | wasn’t used to; am used to / used to; getting; training | = | l6 #3 | ні | ✅ |
| a86–a87 choice | It’s getting easier / likes tea with milk | = | текст | ні | ✅ |
| a88 multi | [0,1] | = | текст | ❌ канон і правдиве твердження як «хибне»: в уроці e10s3l6 (#5, gaps «Fill in the gaps») Orysia в Англії «takes a bus, and she isn’t used to getting up so early», а тут «I’m used to sleeping a bit longer now», і хибний варіант «Orysia gets up earlier in England» за уроком правдивий | → «but I go by bus, so I still get up early»; варіант → «Orysia walks to school in England.»; hint, steps |

## 5. Інше
- **Канон героїв:** Isla (Edinburgh), Owen; Grandma Hanna і Grandad Mykola (живуть з Oksana), Dmytro 12; Vasyl і Nina (Chernihiv); Uncle Oleh (Mariia); дідусь Emma — кухар; Tom — fussy, swimming club; Orysia (Vinnytsia, клас Emma). Після правок a06, a32, a88 суперечностей немає. Нових імен немає.
- **BrE:** crisps, fizzy drinks, wholegrain, fibre, yoghurt, flat, canteen ✅. AmE-написання хибним варіантом ніде не стоїть ✅.
- **Чутливе:** звички побутові (нігті, сніданок, перекуси, телефон), без речовин і медичних порад; без оцінок тіла ✅.
- **Без IPA, звуку, «Listen»** ✅. Літер A/B/C і позиційних посилань в `opts` немає ✅. Підказки не видають відповідь: навігація до екрана або питання-стратегія ✅.
- **Авторське право** (WebSearch з лапками, найдовші фрагменти):

| Фрагмент | Запит | Результат |
|---|---|---|
| a43 «On busy days, he would cook for three hundred people» | `"On busy days, he would cook for three hundred people"` | збігів немає |
| a76 «I got into the habit of making a sandwich in the evening» | `"I got into the habit of making a sandwich in the evening"` | збігів немає |

## 6. Прогін
`node tools/validate.mjs --pool pe10s3` — 0 помилок, 0 попереджень (після правок і зміни статусу). `node tools/personalization-qa.mjs --pool pe10s3 --strict`: 6 уроків, 88 вправ, кожен урок ≥ 3 вправи рівнів 1–3. `node tools/euphony.mjs --pool pe10s3` — 0 відхилень. `python3 tools/test-answer-ui.py --suite content --pool pe10s3` — у контейнері немає модуля playwright, прогін буде в CI (job browser).

## 7. Правки (зроблені)
a06 (дідусь «used to be a cook… still makes»), a32 (собака без імені Sirko), a88 (текст, варіант 4, hint, steps), шапка, `status`, `meta.factcheck`. id вправ не змінювались.

**Вердикт: pe10s3 — verified.** Відкритих ❌ і ⚠️ немає.
