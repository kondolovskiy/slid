# Верифікація: пул pe10s7 (англійська, 10 кл., розділ e10s7 «Ukraine and English-speaking countries»)

Верифікатор: verifier-pe10s7, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g10-e10s7.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s7.md. Опора: уроки `content/eng/g10-e10s7.js` (verified) і розділи g4–e10s6. Еталон звіту: reports/verify/write-eng-pool-g9-e9s9.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 6 правок у 5 вправах і в шапці: 2 фактичні неточності про bank holidays у Шотландії (a69, a77), 1 рамка фіналу уроку (a63), 1 build без «Start with» (a62), 1 hint (a48), а також статус і шапку. Нових TQ немає, людині вирішувати нічого не треба.

## 1. Програма, `src`
`sources`: `p1407`, `program: true`, title і url — як у facts/eng.md і в шапці розділу ✅. с. 22 — функція «аналізувати причини і наслідки» (a07–a09, func l1); с. 23 — теми «Україна», «Країни виучуваної мови» (устрій, ресурси, свята) і граматика so … that, so / therefore, due to, owing to, so, because — решта вправ ✅. `srcPage`/`adapted` немає ✅.

## 2. Факти
Усі факти пулу взято з уроків e10s7. Нових тверджень два (a69, a77), обидва неточні, обидва виправлено.

| Твердження (вправа) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| 24 oblasts, АР Крим, Kyiv і Sevastopol — special status, raions (a01, a04–a06, a15) | https://en.wikipedia.org/wiki/Administrative_divisions_of_Ukraine (ст. 133; Kyiv, Sevastopol — Chapter IX); WebSearch «Constitution of Ukraine Article 133 … Article 134»: https://rm.coe.int/constitution-of-ukraine/168071f58b , https://www.president.gov.ua/documents/constitution/konstituciya-ukrayini-rozdil-ix (текст ст. 133 у видачі) | ✅ |
| Крим — невід'ємна частина України (ст. 134), окупований з 2014, temporarily occupied (a03, a08, a15) | WebSearch-видача (президент.gov.ua розділ X, ст. 134: «невід'ємною складовою частиною»); https://en.wikipedia.org/wiki/Administrative_divisions_of_Ukraine | ✅ |
| UN GA Resolution 68/262 (березень 2014) підтримала територіальну цілісність, закликала не визнавати зміну статусу (a09) | https://en.wikipedia.org/wiki/United_Nations_General_Assembly_Resolution_68/262 (27 March 2014, «territorial integrity of Ukraine within its internationally recognized borders»); WebSearch: https://www.loc.gov/item/global-legal-monitor/2014-04-02/united-nations-resolution-declares-crimea-referendum-invalid/ (заклик до держав не визнавати зміни статусу) | ✅ |
| Rada — 450 MPs, єдиний законодавчий орган; Rada призначає прем'єра; Конституцію прийнято 28.06.1996 (a16–a27, a75, a76) | https://en.wikipedia.org/wiki/Verkhovna_Rada («sole body of legislative power», 450, 28 June 1996, appoints PM); прем'єр за поданням Президента і 5 років — reports/verify/write-eng-g10-e10s7.md (zakon.rada.gov.ua у цій сесії повертав 503) | ✅ |
| UK: Commons 650 elected, Lords не обираються, PM — лідер найбільшої партії, King Charles III (a28–a39) | https://en.wikipedia.org/wiki/House_of_Commons_of_the_United_Kingdom («elected body consisting of 650 members», «the unelected Lords»); CD https://dictionary.cambridge.org/dictionary/english/house-of-lords (звіт уроку) | ✅ |
| Свята України: 1.01, 15.07, 24.08, 28.06, 1.10, 25.12; до закону липня 2023 — 7.01 і 14.10 (a64, a65, a67, a71, a74, a75) | https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine ; WebSearch: https://www.ukrinform.net/rubric-society/3735767-parliament-changes-dates-of-three-holidays-christmas-statehood-day-day-of-defenders-of-ukraine.html , https://time.com/6299425/ukraine-moves-christmas-day | ✅ |
| Bank holidays 8 / 9 / 10; St Patrick’s — Northern Ireland; Boxing Day 26.12 (a64, a66, a68) | https://en.wikipedia.org/wiki/Public_and_bank_holidays_in_Scotland (9 днів у Шотландії); WebSearch «St Andrew's Day bank holiday Scotland banks open» (gov.scot, legislation.gov.uk asp/2007/2) | ✅ |
| a77 «In Scotland, we have nine bank holidays because we also have St Andrew’s Day» | https://en.wikipedia.org/wiki/Public_and_bank_holidays_in_Scotland: у Шотландії 2 January є, Easter Monday — немає; 9 ≠ «8 Англії + St Andrew’s» | ⚠️ → «we also have a bank holiday on 30 November because it’s St Andrew’s Day» |
| a69 «The banks are closed today because it’s St Andrew’s Day» | WebSearch (gov.scot / The Scotsman у видачі): закон 2007 р. не зобов'язує банки закриватися, шотландські банки зазвичай працюють за англійським календарем | ❌ → «Today is a bank holiday in Scotland because it’s St Andrew’s Day» |
| ресурси: chornozem, Kryvyi Rih, Donbas, North Sea oil and gas, остання глибока шахта 2015, wind farms (a40–a51) | дослівно з уроку l4 (звіт reports/verify/write-eng-g10-e10s7.md); нових чисел пул не додає | ✅ |

Оцінок політиків та імен посадовців України немає ✅. Канон героїв (glossary/eng-heroes.md, 10 кл.: 16 років, Tom 14): Oksana — karate (a59, канон pe5s6 / e10s2), Isla (Edinburgh), Owen (Wales), Tom — sports day у школі Emma, Taras — фото Carpathians ✅. Нових героїв немає.

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. У `build` перебрав усі перестановки плиток разом з `extra` (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s7-pe10s8/bin/chk.mjs`): зараховано лише порядки з ключа; граматичних порядків поза ключем, які не відсікає умова, немає.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | oblasts; raions | = | l1 info | — | ✅ |
| a02 word | republic | = | l1 info | — | ✅ |
| a03 gaps | occupied; territory; integral | = | l1 «Crimea is part of Ukraine» | recognised відсікає «by force» | ✅ |
| a04 match | 4 пари | = | l1 info | перебрав усі праві; Kyiv ≠ «one of the 24 regions» | ✅ |
| a05 multi | Kyiv, Sevastopol | = | l1 info | — | ✅ |
| a06 pick | [three] | = | l1 info | — | ✅ |
| a07 choice | No, it’s a big region… | = | l1 | — | ✅ |
| a08 choice | No. Russia has occupied it… | = | l1 | — | ✅ |
| a09 choice | supported territorial integrity | = | l1 info 2 | — | ✅ |
| a10–a12 stress | cap; pub; oc, ton; tu, oc, pub, ton | = | l1 `<u>` | §4 | ✅ |
| a13 gaps | capital; Oblast | = | l1 | — | ✅ |
| a14 build | Poltava Oblast is divided into raions. | = | l1 info | 1 порядок | ✅ |
| a15 gaps | republic; status; occupied; integral | = | l1 | — | ✅ |
| a16 choice | the Prime Minister | = | l2 info | — | ✅ |
| a17 multi | [0,2] | = | l2 info | — | ✅ |
| a18 choice | President proposes, Rada appoints | = | l2 «Elect, pass…» | — | ✅ |
| a19 match | 4 пари | = | l2 | elect ↔ «choose a person for a job, like the PM» відсікає приклад PM | ✅ |
| a20 gaps | election; passed | = | l2 | — | ✅ |
| a21 gaps | appoints; adopted | = | l2 | — | ✅ |
| a22 gaps | is elected; are elected | = | l2 (passive) | — | ✅ |
| a23 pick | [adopt] | = | l2 pick | — | ✅ |
| a24 gaps | is elected; was adopted; are passed | = | l2 | — | ✅ |
| a25 gaps | parliament; MPs | = | l2 | — | ✅ |
| a26 build | 2 порядки | = | l2 | «For five years the 450 MPs are elected…» — інше значення (тривалість процесу), не додаю | ✅ |
| a27 gaps | elect; pass; runs; leads | = | l2 | — | ✅ |
| a28 choice | King Charles III | = | l3 info | — | ✅ |
| a29 match | 4 пари | = | l3 info 2 | — | ✅ |
| a30 multi | [0,1] | = | l3 «And the USA?» | — | ✅ |
| a31 pick | [King] | = | l3 | — | ✅ |
| a32 choice | The parliament has two houses. | = | l3 | — | ✅ |
| a33 gaps | Commons; Lords | = | l3 | — | ✅ |
| a34 word | monarch | = | l3 info | — | ✅ |
| a35 gaps | monarchy; republics | = | l3 | — | ✅ |
| a36 gaps | monarch; power; advice | = | l3 info | — | ✅ |
| a37 gaps | makes; leads | = | l3 | — | ✅ |
| a38 build | The MPs are elected but the members of the House of Lords are not. | = | l3 | зворотні порядки фактично хибні; «Start with The MPs» | ✅ |
| a39 gaps | republic; monarchy; Commons; Representatives | = | l1, l3 | — | ✅ |
| a40 match | 4 пари | = | l4 info (exporter — форма export/exporters) | — | ✅ |
| a41 gaps | crops; fertile | = | l4 | — | ✅ |
| a42 pick | [iron ore] | = | l4 info 2 | — | ✅ |
| a43 gaps | so | = | l4 info | — | ✅ |
| a44 choice | such a windy day | = | l4 info | — | ✅ |
| a45 word | so | = | l4 | — | ✅ |
| a46 pick | [so] | = | l4 | — | ✅ |
| a47 gaps | such; so; that; such | = | l4 | — | ✅ |
| a48 choice | Coal was so important resource… | = | l4 info («you can leave out that») | hint «Remember: you can leave out that» відкидав дистрактор за учня (pitfall 17) | ⚠️ → hint-навігація |
| a49 gaps | in; mine | = | l4 intro («iron ore mine») | — | ✅ |
| a50 build | 1 порядок | = | l4 | — | ✅ |
| a51 gaps | gas; coal; so; electricity | = | l4 info 2 | — | ✅ |
| a52 gaps | because of; because | = | l5 info | — | ✅ |
| a53 choice | therefore | = | l5 | — | ✅ |
| a54 multi | due to, owing to | = | l5 | because of у варіантах немає ✅ | ✅ |
| a55 sort | 2/2/2 | = | l5 sort | — | ✅ |
| a56 pick | [Owing to] | = | l5 | — | ✅ |
| a57 gaps | Therefore; because | = | l5 | — | ✅ |
| a58 choice | …due to the wind was too strong. | = | l5 info | Due to на початку — як в уроці (boss Task 5) | ✅ |
| a59 choice | so that she can talk to Emma | = | l5 purpose | — | ✅ |
| a60 gaps | due to; Therefore | = | l5 | — | ✅ |
| a61 build | 2 порядки | = | l5 | фронтальний «Due to the bad weather the concert…» у ключі | ✅ |
| a62 build | Oksana is learning English so that she can talk to her penfriends. | = | l5 purpose | «So that she can talk to her penfriends(,) Oksana is learning English» складається з плиток, граматичне, у ключі немає | ⚠️ → «Start with Oksana» в умові |
| a63 gaps | so; so that; Therefore | = | l5 | «Our teacher booked a bigger boat so that…» — продовження фінального gaps уроку l5 («has booked a bigger boat so that») з тим самим ключем (pitfall 18) | ⚠️ → «Our teacher chose a bigger boat…» |
| a64 match | 4 пари | = | l6 info | — | ✅ |
| a65 choice | Because Ukraine declared… | = | l6 «Why these dates?» | — | ✅ |
| a66 choice | in Northern Ireland | = | l6 | — | ✅ |
| a67 multi | 25 December, 1 October | = | l6 info | — | ✅ |
| a68 pick | [eleven] | = | l6 | — | ✅ |
| a69 gaps | because | = | l6 | факт про банки (§2) | ❌ → виправлено |
| a70 gaps | due to; because | = | l6 | — | ✅ |
| a71 gaps | Therefore; because of | = | l6 info | — | ✅ |
| a72 match | 3 пари | = | l6 | — | ✅ |
| a73 word | declared | declared, proclaimed | l6 «Why these dates?» | proclaimed поза уроками, але правильна друга відповідь: OALD proclaim «proclaimed its independence» — лишити в ключі ✅ | ✅ |
| a74 gaps | honours; declared | = | l6 | — | ✅ |
| a75 gaps | August; June | = | l6 | — | ✅ |
| a76 build | 2 порядки | = | l2, l6 | фронтальне because-речення відсікає «Start with Constitution Day» | ✅ |
| a77 gaps | so; because | = | l6 | факт «nine because St Andrew’s» (§2) | ⚠️ → виправлено |

**Друга правильна відповідь:** due to / owing to / because of ніде не стоять разом в одному пропуску; so / therefore після крапки не протиставлено; such / so — за словом після пропуску ✅. Хибні варіанти неграматичні в реченні або суперечать фактам уроку ✅. AmE як хибного варіанта немає ✅. `word` без кінцевого `.!?` ✅. Правдивих тверджень у ролі «помилки» немає ✅. Покриття: 77 вправ, 6 уроків, кожна вправа рівнів 2–3 має `hint`.

**Питання автора:** a73 — proclaimed лишаю (OALD-приклад, див. §4). a38 — зворотні порядки хибні фактично, а «Start with The MPs» відсікає й «The MPs are not but…»; ✅. a61 — фронтальний порядок без коми в ключі, як у e10s8l5 build ✅.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії).** CD https://dictionary.cambridge.org/dictionary/english/<word>: capital «ˈkæp.ɪ.təl», republic «rɪˈpʌb.lɪk», occupy «ˈɒk.jə.paɪ» (US ˈɑk·jəˌpɑɪ), autonomous «ɔːˈtɒn.ə.məs», constitution (UK у статті; US «ˌkɑːn.stəˈtuː.ʃən»). OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: capital_1 «/ˈkæpɪtl/», republic «/rɪˈpʌblɪk/», occupy «/ˈɒkjupaɪ/», autonomous «/ɔːˈtɒnəməs/», constitution «/ˌkɒnstɪˈtjuːʃn/». Один наголос у кожному словнику, ключі `stress` збігаються, кожне слово підкреслене `<u>` в l1 ✅.
- **Вирази:** declare independence — CD https://dictionary.cambridge.org/dictionary/english/declare «The country declared independence in 1952»; proclaim — OALD https://www.oxfordlearnersdictionaries.com/definition/english/proclaim «The district unilaterally proclaimed its independence…», CD https://dictionary.cambridge.org/dictionary/english/proclaim «Brazil proclaimed itself independent» (a73).
- **Лексика** (`bin/lex.mjs` проти g4–e10s6 і e10s7 до `lesson` вправи): поза уроками лише форми exporter, resource і proclaimed у ключі a73 ✅. Слів з пізніших уроків розділу немає ✅.
- **BrE, без звуку:** maize, practise, sports day, Mum; AmE, IPA, A/B/C, «Listen» немає ✅. `keepCase` не вжито ✅.
- **Копії рамок уроків** (6-грами, `bin/ngram.mjs`): збігаються шаблонні інструкції та формули фактів (the Cabinet of Ministers runs the country; an integral part of Ukraine). Рамку фіналу l5 у a63 змінено ✅.
- **Авторське право** (WebSearch у лапках):

| Фрагмент | Запит | Результат |
|---|---|---|
| a63 «Our teacher booked a bigger boat so that everyone could sit inside» | "Our teacher booked a bigger boat so that everyone could sit inside" | збігу немає |
| a50 «The forests in the Carpathians were so beautiful that…» | "The forests in the Carpathians were so beautiful that" | збігу немає |

## 5. Правки (зроблені)
1. a69: «The banks are closed today because…» → «Today is a bank holiday in Scotland because it’s St Andrew’s Day» (банки в Шотландії не зобов'язані закриватися в St Andrew’s Day).
2. a77: «we have nine bank holidays because we also have St Andrew’s Day» → «we also have a bank holiday on 30 November because it’s St Andrew’s Day» (9 днів — не «8 + St Andrew’s»: у Шотландії є 2 January, немає Easter Monday); steps узгоджено.
3. a63: «Our teacher booked a bigger boat» → «Our teacher chose a bigger boat» (не продовжує рамку фіналу l5); steps.
4. a62: в умову додано «Start with <i>Oksana</i>» (фронтальне so that-речення з плиток).
5. a48: hint → «Look at the word after so or such in each sentence. Can you leave out that? Check the box “So … that, such … that”.» (без позиційного «last line» — попередження validate).
6. `status: "verified"`, `meta.factcheck`, шапка.

`node tools/validate.mjs --pool pe10s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s7` — без помилок; `euphony --pool pe10s7` — без зауважень. `test-answer-ui.py --suite content --pool pe10s7` не запускав: у контейнері немає Python-модуля playwright — лише CI (job browser).
