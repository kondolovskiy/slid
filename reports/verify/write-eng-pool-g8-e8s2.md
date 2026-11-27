# Верифікація: пул pe8s2 (англійська, 8 кл., розділ e8s2 «Healthy living and free time»)

Верифікатор: verifier-pe8s2, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g8-e8s2.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g8-e8s2.md. Опора: уроки `content/eng/g8-e8s2.js` (verified, reports/verify/write-eng-g8-e8s2.md) і попередні розділи g4–g8-e8s1. Еталони: reports/verify/write-eng-pool-g6-*.md, -g7-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів немає, граматично правильних дистракторів у пулі не лишилося, збігів з опублікованими текстами я не знайшов. Зробив 20 правок у 17 вправах: 3 суперечності канону героїв, 2 stress без опори або з одним типом наголосу, слова поза уроками, 4 підказки, що видають відповідь, 1 правильний дистрактор, 1 друга відповідь у ключ. Нових TQ немає. Людині: нічого блокувального; рекомендація для уроку l1 — нижче (§6).

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. PDF я завантажив у цій сесії (https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`, колонтитули 32–35):
- с. 32: «Стиль життя», «Здоровий спосіб життя» → l1, l5;
- с. 33: «коментувати статистичні [дані]» → l6;
- с. 34: «Quantity: with plural nouns, with uncountable nouns, much and many», «Modifying: … ‘enough’» → l2;
- с. 35: «Verbs — Phrasal, patterns with verb + ’to-‘ infinitive or ‘-ing’ form» → l3, l4.
Усі `src` відповідають сторінкам ✅.

## 2. Факти

| Твердження (вправи) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Teenagers need 8–10 hours of sleep a night (a13, a15, a16, a24, a76) | AASM Teen Sleep Duration Health Advisory (WebSearch; aasm.org з контейнера — ENOTFOUND) https://aasm.org/advocacy/position-statements/teen-sleep-duration-health-advisory/ ; CDC (archive) «teenagers aged 13–18 years should sleep 8–10 hours per 24 hours» https://archive.cdc.gov/www_cdc_gov/healthyschools/features/students-sleep.htm (WebSearch). Те саме формулювання, що в verified-уроці l1 і facts у reports/verify/write-eng-g8-e8s2.md | ✅ |
| An hour of exercise a day (a15, a12) | WHO 2020, 5–17 років: «at least an average of 60 minutes per day of moderate- to vigorous-intensity… physical activity» (WebSearch) https://www.who.int/europe/news-room/fact-sheets/item/physical-activity ; BJSM/WHO таблиця https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/table/T4 (who.int, ncbi — ENOTFOUND через WebFetch) | ✅ |
| Kaniv — на Dnipro (a56: camping near Kaniv, kayaking on the Dnipro) | https://en.wikipedia.org/wiki/Kaniv (WebFetch: «The city rests on the Dnieper River») ; Encyclopedia of Ukraine https://www.encyclopediaofukraine.com/pages%5CK%5CA%5CKaniv.htm (WebSearch-резюме; WebFetch — ENOTFOUND) | ✅ |
| Vorokhta — у Карпатах, місце для походів (a63: hiking near Vorokhta) | https://en.wikipedia.org/wiki/Vorokhta (WebFetch: «located in the Carpathian Mountains on the Prut River», Ivano-Frankivsk Oblast) ; https://destinations.ua/archive-18-21/places-tips/520-travel-to-vorokhta-near-ivano-frankivsk-what-to-see-and-things-to-do («home for numerous hiking trails», WebSearch) ; https://www.worldatlas.com/cities/vorokhta-ukraine.html (WebSearch) | ✅ |
| Yaremche, Carpathians, Hoverla | з verified-уроку l5 | ✅ |

Медичних порад у пулі немає. Твердження про здоров'я — лише ті, що в уроці: сон, година активності, фрукти й овочі, менше junk food, вода. Поради в a60 (шолом, вода, перевірити велосипед, не їхати самому) — це безпека, а не медицина. Опитування — вигадані числа вигаданих класів.

## 3. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `gaps`, `pick`, `stress`, `word`, `match`, `build`: `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` — усі `solution` зараховуються. `build`: я перебрав усі перестановки всіх підмножин tiles + extra (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe8s2/bin/chk.mjs`). Ключі `word` — без кінцевого `.!?`.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | active; junk food | = | l1 info #3 | ні | ✅ |
| a02 sort | 3 / 3 | = | l1 #3, l1 sort | ні | ✅ |
| a03 word | late | = | l1 #3 «stay up late» | ні; hint «go to bed very late = stay up …» містив саме слово late | ⚠️ → hint виправлено |
| a04 pick | crisps, burger, sweets | = | l1 #3 (junk food: crisps, sweets, burgers) | ні | ✅ |
| a05 gaps | shouldn’t; should | = | l1 #5 | ні | ✅ |
| a06 choice | You should go… | = | l1 #5 | ні | ✅ |
| a07 pick | [to] | = | l1 #5 | ні | ✅ |
| a08 stress | <u>ac</u>tive, <u>mid</u>night | = | — | наголос правильний (CD, OALD), але обидва слова на першому складі (pitfalls-content п. 19) і жодне не підкреслене `<u>` в уроках g4–e8s2 (pitfalls-eng, verifier-e5s2) | ❌ → `+life|style`, `com|+pu|ter` |
| a09 stress | <u>ex</u>ercise, com<u>pu</u>ter, <u>en</u>ergy | = | l1 #3 `<u>`; computer — e4s5, e5s6 `<u>` | — | ✅ |
| a10 stress | teenager, lifestyle, computer, healthy, midnight | = | — | teenager і midnight без `<u>` в уроках | ⚠️ → `+ex|er|cise`, `ka|+ra|te`, `com|+pu|ter`, `+health|y`, `ath|+let|ics` (karate, athletics підкреслені в раніших уроках і є в e8s2 l2–l3) |
| a11 choice | sweets every evening | = | текст + l1 #3 | ні | ✅ |
| a12 multi | [0,1] | = | текст + l1 #3 | «active for an hour or more every day» — у тексті «after school I swim» без «every day» | ⚠️ → у текст додано «every day after school» |
| a13 choice | seven hours, not fine | = | текст + l1 #2–3 | ні | ✅ |
| a14 gaps | active; junk food | = | l1 #3 | ні | ✅ |
| a15 gaps | sleep; should; exercise | = | l1 #3, #5 | ні | ✅ |
| a16 gaps | should; sleep; shouldn’t | = | l1 #3, #5 | energy/exercise відсікає «at least eight hours a night» | ✅ |
| a17 gaps | many chips; much ketchup | = | l2 #3 | ketchup — поза уроками, а ключ залежить від його злічуваності | ⚠️ → salt (g6-e6s3) |
| a18 sort | 4 much / 4 many | = | l2 #3 | ні | ✅ |
| a19 word | many | = | l2 #3 | ні | ✅ |
| a20 gaps | enough milk; enough eggs | = | l2 #3 | ні | ✅ |
| a21 pick | [much] | = | l2 #3 | ні | ✅ |
| a22 build | We didn’t buy enough bread. | = | l2 #3 | 1956 перестановок — лише ключ; hint «Bread is uncountable» відкидав пастку many (п. 17) | ⚠️ → hint скорочено |
| a23 match | 4 пари | = | l2 #3, l2 match | перебрав усі праві — «it costs a lot» прив'язує money, «next one» — bus | ✅ |
| a24 choice | too much cola, not enough sleep | = | текст + l1, l2 | ні | ✅ |
| a25 multi | [0,2] | = | текст + l2 #3 | Dmytro (брат Оксани, 10 р., Zelena Dolyna) у команді Mr Hnatiuk (Lviv) — суперечить канону | ⚠️ → Orest (Lviv) |
| a26 gaps | enough; many | = | l2 #3 | ні | ✅ |
| a27 gaps | many; enough; much | = | l2 #3 | «our small flat» в Оксани — канон: house; hint підписував усі три пропуски | ⚠️ → kitchen; hint — питаннями |
| a28 gaps | much; many; enough sleep | = | l2 #3 | hint підписував пропуски | ⚠️ → hint — питаннями |
| a29 gaps | dancing; to join | = | l3 #3 | ні | ✅ |
| a30 sort | 4 / 4 | = | l3 #3 | ні | ✅ |
| a31 word | learning | = | l3 #3 | ні | ✅ |
| a32 choice | both | = | l3 #3 (start — both) | ні | ✅ |
| a33 gaps | swimming; to visit; to see | = | l3 #3 | «I avoid swimming» від Tom — канон e5s6: Tom не плаває | ⚠️ → «avoid cycling in the rain» |
| a34 pick | [visiting] | = | l3 #3 | started learning, enjoys reading — правильні | ✅ |
| a35 word | waiting / to wait | = | l3 #3 (hate — both) | обидва в ключі | ✅ |
| a36 build | Bohdan hopes to play for the school team. | = | l3 #3 | 1956 — лише ключ | ✅ |
| a37 gaps | drawing; to make | = | l3 #3 | ні | ✅ |
| a38 gaps | writing; to relax; to go; thinking | = | l3 #3 | ні | ✅ |
| a39 gaps | to try; doing; eating; to train; to get | = | l3 #3 | yellow belt — поза уроками (не ключ) | ⚠️ → «my first medal» |
| a40 match | 4 пари | = | l4 #3 | he/she/have і граматика відсікають інші пари | ✅ |
| a41 gaps | gave up; took up | = | l4 #3 | «My sister» в Ostap — нова родина поза каноном (кузени Marko, Arsen) | ⚠️ → «My cousin Marko … he» |
| a42 word | up | = | l4 #3 | ні | ✅ |
| a43 pick | [give] | = | l4 #3 | ні | ✅ |
| a44 word | got | = | l4 #3 | «Use get up» відсікає woke | ✅ |
| a45 gaps | eating; drinking | = | l4 #3 (give up + -ing) | ні | ✅ |
| a46 word | worked | = | l4 #3 | ні | ✅ |
| a47 build | 2 порядки | = | l4 #3 | 325 — лише обидва ключі | ✅ |
| a48 gaps | get up; work out | = | l4 #3 | alarm clock, straight away — поза уроками | ⚠️ → «On school days I get up at half past six.» |
| a49 gaps | took up; gave up | = | l4 #3, l3 intro | ні | ✅ |
| a50 gaps | took up; get up; gave up; work out | = | l4 #3 | «Last September I took up tennis» — канон: Bohdan грає в теніс з 4 кл. (pe4s3, l4 «tennis, like Bohdan»); Oliver — однокласник Emma в Англії, не партнер Bohdan у Kyiv | ⚠️ → running; Andrii |
| a51 match | 4 пари | = | l5 #3 | ні; лапки ‘ ’ → “ ” (TQ-122) | ✅ (лапки виправлено) |
| a52 word | camping | = | l5 #2–3 | tent → camping | ✅ |
| a53 gaps | rucksack; sleeping bag | = | l5 #3 | ні | ✅ |
| a54 choice | a tent | = | l5 #3 | ні | ✅ |
| a55 gaps | kayaking | = | l5 #3 | ні | ✅ |
| a56 pick | [to] | = | l5 #3 | ні | ✅ |
| a57 word | climbing | = | l5 #3 | ні | ✅ |
| a58 gaps | went; hiking; goes | = | l5 #3 | ні | ✅ |
| a59 choice | hiking and camping | = | l5 #3 | ні | ✅ |
| a60 multi | [0,2] | = | текст + l5 multi | «tips» уперше лише в boss l7 (пізніший урок, п. 20) | ⚠️ → advice |
| a61 multi | [0,2,3] | = | текст + l5 #3–4 | ні | ✅ |
| a62 gaps | skiing; helmet | = | l5 #3 | ні | ✅ |
| a63 gaps | hiking; map; sleeping bags | = | l5 #3 | ні | ✅ |
| a64 gaps | hiking; rucksack; tent; sleeping bag; kayaking | = | l5 #3 | ні | ✅ |
| a65 gaps | Half; All | = | l6 #3 | ні | ✅ |
| a66 choice | Only a few… | = | l6 #3 | ні | ✅ |
| a67 gaps | Most; More; A quarter; Nobody | = | l6 #3 | «Half … than» неграматичне; «A few goes» — теж | ✅ |
| a68 choice | going to the park | = | l6 #3 | ні | ✅ |
| a69 multi | [0,1] | = | l6 #3 | ні | ✅ |
| a70 multi | [0,1] | = | l6 #3 | 13 — most, не half | ✅ |
| a71 word | popular | popular, common | l6 #3 | «the most liked food» — граматично правильна відповідь на «20 out of 24 like pizza» | ⚠️ → liked у ключ |
| a72 gaps | survey; results | = | l6 intro, #3 | ні | ✅ |
| a73 gaps | more popular; the most popular | = | l6 #3 | дистрактор «the more popular hobby» граматичний (порівняння двох; п. 15) | ❌ → «the popularest», «more popular» |
| a74 gaps | half | = | l6 #3 | «report» у title — поза уроками | ✅ (title → «Complete the sentences.») |
| a75 gaps | a quarter; most; enough; should | = | l6 #3, l2 #3, l1 #5 | «nobody of us» неграматичне | ✅ (title) |
| a76 gaps | Most; a quarter; enough; Half; nobody | = | l6 #3, l2 #3 | «all eats», «half eats» неграматичні | ✅ (title) |

**Покриття:** 6 уроків, 76 вправ, boss l7 без вправ ✅. `sk` кожної вправи є серед `sk` її уроку. У кожної вправи lvl 2–3 є `hint`. `personalization-qa` — без помилок.

**Дієслова з обома формами (like / love / hate / start):** у пропусках з одним ключем їх немає. a32 — choice «both», a35 — `word` з обома ключами, a34 «started learning» — правильна частина тексту, не помилка ✅. **too much / many / not enough:** ключі за злічуваністю, enough — перед іменником; `word` на enough немає (much теж зарахувався б) ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос, curl у цій сесії** (CD https://dictionary.cambridge.org/dictionary/english/<word>, OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>_1): active — CD uk «ˈæk.tɪv», OALD «/ˈæktɪv/»; midnight — «ˈmɪd.naɪt», «/ˈmɪdnaɪt/»; computer — «kəmˈpjuː.tər», «/kəmˈpjuːtə(r)/»; teenager — «ˈtiːnˌeɪ.dʒər», «/ˈtiːneɪdʒə(r)/»; lifestyle — «ˈlaɪf.staɪl», «/ˈlaɪfstaɪl/»; exercise — «ˈek.sə.saɪz», «/ˈeksəsaɪz/»; healthy — «ˈhel.θi», «/ˈhelθi/»; energy — «ˈen.ə.dʒi», «/ˈenədʒi/»; karate — «kəˈrɑː.ti», «/kəˈrɑːti/»; athletics — «æθˈlet.ɪks», «/æθˈletɪks/». Наголоси автора були правильні. Вилучення в a08 і a10 зроблено через опору й одноманітність, а не через помилку наголосу.
- **Phrasal verbs, verb patterns, go + -ing** — в уроці (verified), CD-URL у reports/verify/write-eng-g8-e8s2.md. У пулі нових форм немає.
- **Лексика:** я звірив скриптом з g4–g7, e8s1 і e8s2 до `lesson` включно (`bin/lex.mjs`). Після правок лишилося: burger, teenager (у уроці — множина); moving, unhealthy (похідні); chip (chips — e5s3); wait, spent, taste, relax, carry (базова лексика A1–A2, не ключ); Kaniv, Vorokhta (назви місць, §2); hike, popularest (лише дистрактори). Ketchup, yellow belt, alarm clock, straight away, tips, report — замінено. Gym, space, cousins, paints — є в раніших розділах ✅.
- **Канон героїв** (glossary/eng-heroes.md): виправлено a25 (Dmytro), a27 (flat Оксани), a33 (Tom плаває), a41 (сестра Ostap), a50 (Bohdan «took up tennis», Oliver у Kyiv). Решта узгоджена: Zlata — сестра Тараса, лижі в Карпатах; Daryna — гори восени; Bohdan — теніс; Myroslava — Lviv; Kyrylo — history.
- **BrE:** crisps, chips, flat (вилучено), rucksack, fizzy drinks, biscuits, sports centre, practises, Mum, a quarter to six. AmE-правопису й лексики, IPA, A/B/C, «Listen» немає ✅.
- **Копії уроків** (`bin/ngram.mjs`, 6-грами проти g4–g11): збіги лише в інструкціях і формулах («Is it a healthy habit or not?», «only a few of us play», «eight to ten hours a night» не в ключі). Рамки з тим самим ключем не повторюються. Свою правку a39 я спершу написав як «hope to win a medal», а це рамка l3 з тим самим ключем, тому замінив на «hope to get my first medal» ✅.
- **Авторське право** (WebSearch з лапками, збігів немає):

| Фрагмент | Запит | Результат |
|---|---|---|
| a12 «I usually go to bed at eleven and sleep until seven» | ту саму фразу в лапках | збігу немає (форуми про сон) |
| a59 «put a map, water and food in our rucksacks and walked for six hours» | у лапках | збігу немає |
| a11 «I walk to school every day, and I play volleyball three times a week» | у лапках | збігу немає |

## 5. Правки (зроблені)
1. a03 hint → «Remember the sleep rule in the lesson: Don’t stay up …».
2. a08 words → `["+life|style", "com|+pu|ter"]`, steps.
3. a10 words → `["+ex|er|cise", "ka|+ra|te", "com|+pu|ter", "+health|y", "ath|+let|ics"]`, steps.
4. a12 текст: «every day after school I swim for an hour».
5. a17 ketchup → salt (текст і steps).
6. a22 hint → «Where does enough go with a noun?».
7. a25 Dmytro → Orest (body й варіант).
8. a27 flat → kitchen; hint — питаннями.
9. a28 hint — питаннями.
10. a33 «avoid swimming in cold water» → «avoid {*cycling|to cycle} in the rain», steps.
11. a39 «a yellow belt» → «my first medal».
12. a41 «My sister … she» → «My cousin Marko … he», hint, steps.
13. a48 → «On school days I {*get up|take up} at half past six.»
14. a50 body «his training», tennis → running («now I run»), Oliver → Andrii, steps.
15. a51 ‘house’ → “house”.
16. a60 tips → advice (body ×2, hint).
17. a71 answer + `liked`.
18. a73 дистрактори другого пропуску → `{*the most popular|the popularest|more popular}`.
19. a74–a76 title «Complete the report.» → «Complete the sentences.»
20. `status: "verified"`, `meta.factcheck`, шапка.

## 6. Рекомендації без правки (не мій файл)
- Урок e8s2l1 stress (екран #8): усі чотири слова з наголосом на першому складі (pitfalls-content п. 19). Рядок у inbox для style-sync.
- Урок e8s2l6 word (екран #7) «the most ___ activity»: liked — та сама друга відповідь, що в a71. Рядок у inbox.

## 7. Прогін
- `node tools/validate.mjs --pool pe8s2` — 0 помилок, 0 попереджень (після правок).
- `node tools/personalization-qa.mjs --pool pe8s2` — без помилок.
- `node tools/euphony.mjs --pool pe8s2` — чисто.
- Після правок я повторив перебір `check`: усі `solution` зараховуються, build приймає лише ключі.
- Браузерний прогін (`test-answer-ui.py`) — у CI: у контейнері немає Python-модуля playwright.

**Вердикт по пулу: verified.**
