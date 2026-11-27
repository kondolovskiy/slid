# Верифікація: пул pe11s7 (англійська, 11 кл., розділ e11s7 «Ukraine in the world»)

Верифікатор: verifier-pe11s7-pe11s8, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g11-e11s7.js` (64 вправи a01–a64) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g11-e11s7.md. Опора: уроки `content/eng/g11-e11s7.js` (verified). Канон героїв: memory/long/glossary/eng-heroes.md (11 кл.: 17 років; Emma, Orysia (з Vinnytsia), Isla (Edinburgh), Owen (Wales) — друзі й однокласниці Emma; Kateryna — подруга Mariia, drama club).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів я не знайшов. Зробив 2 правки: одна друга правильна відповідь (a02) і одна копія рамки фіналу уроку (a55). Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI, бо Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources`: лише `p1407`, `program: true`, url як у facts/eng.md; `srcPage` і `adapted` немає ✅. `src`: с. 23 — функції (порівнювати — l3 func; підводити підсумки — l6 func), с. 24 — лексика «Україна в світі» / «Країни виучуваної мови», с. 25 — defining / non-defining, overview of relative pronouns. Це збігається з шапкою розділу e11s7 ✅.

## 2. Факти (лише ті, що вже є в уроках e11s7; нових фактів пул не додає)

| Твердження (вправи) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| ООН: 1945, 51 засновник, серед них Ukrainian SSR (a05, a06, a13, a15) | https://research.un.org/en/unmembers/founders ; https://en.wikipedia.org/wiki/Ukraine_and_the_United_Nations (WebSearch) | ✅ |
| ООН: 193 члени, штаб-квартира в New York (a04, a05, a07, a13) | https://www.un.org/en/about-us (193 Member States); https://en.wikipedia.org/wiki/Headquarters_of_the_United_Nations (curl raw: «New York City») | ✅ |
| Рада Європи: Україна — член з 1995, штаб-квартира в Strasbourg (a04, a06, a15) | https://www.coe.int/en/web/execution/ukraine (9 November 1995); https://www.britannica.com/topic/Council-of-Europe (Strasbourg) | ✅ |
| ЄС: заявка 2022, кандидат — червень 2022, переговори — 2024, Україна не член (a06, a14, a15) | https://enlargement.ec.europa.eu/news/eu-opens-accession-negotiations-ukraine-2024-06-25_en ; https://www.kmu.gov.ua/en/news/ukraina-ofitsiino-rozpochala-peremovyny-pro-vstup-z-ies ; https://www.president.gov.ua/en/news/den-zaradi-yakogo-pracyuvali-vsi-ukrayina-rozpochala-peregov-91749 (кандидат — червень 2022) | ✅ |
| UNICEF — агенція ООН для дітей; WFP — їжа (a05, a09) | https://en.wikipedia.org/wiki/UNICEF (curl raw: «agency of the United Nations… aid to children»); https://www.wfp.org/news/wfp-and-ukraine-renew-school-meals-partnership-after-40-million-meals-served-frontline-regions | ✅ |
| Загальна декларація: 10 December 1948, Paris; Human Rights Day (a20, a21, a24) | https://research.un.org/en/docs/humanrights/undhr ; https://www.un.org/en/node/124428 (WebSearch: Palais de Chaillot) | ✅ |
| Конвенція 1950; Україна ратифікувала 1997; ЄСПЛ у Strasbourg (a20, a24) | https://www.coe.int/en/web/human-rights-convention/the-convention-in-1950 ; https://www.coe.int/en/web/execution/ukraine (набрання чинності 11.09.1997); https://archive.khpg.org/en/958941462 (ратифікація 17.07.1997) | ✅ |
| Етикет: непарна кількість квітів, парна — на похорон; не тиснуть руку через поріг; капці (a26, a27, a30, a38) | https://culturalatlas.sbs.com.au/ukrainian-culture/ukrainian-culture-etiquette ; https://www.expat.com/en/guide/europe/ukraine/6790-dos-and-don-ts-in-ukraine.html | ✅ (звичай, як в уроці: «Some people think…») |
| Англія: tip ≈ 10–15 %, service charge = чайові вже включено (a29, a30, a37, a39) | https://huffingtonpost.co.uk/entry/a-guide-to-tipping-in-britain-how-much-should-you-tip-and-where-does-the-money-really-go_uk_5bb1ebf5e4b027da00d4f328 ; https://www.which.co.uk/news/article/tipping-do-you-know-where-your-money-really-goes-aPE9G4P9jaoA | ✅ |
| Gareth Jones: Barry, 1905; Soviet Ukraine, 1933; помер 1935 (a41–a47) | https://en.wikipedia.org/wiki/Gareth_Jones_(journalist) (curl raw: birth_place Barry; 1905–1935); https://nation.cymru/culture/hitler-stalin-and-mr-jones-the-story-of-a-true-welsh-hero-2/ ; https://holodomormuseum.org.ua/en/news/memorial-plaque-to-man-of-truth-gareth-jones-unveiled-in-wales/ | ✅ |
| Kalush Orchestra — 2022; Eurovision 2023 у Liverpool від імені України; Tvorchi — 6-те місце (a50, a54, a55) | https://kyivindependent.com/sweden-wins-eurovision-2023-ukraine-places-6/amp ; https://www.npr.org/2023/05/11/1175184982/eurovision-2023-ukraine-tvorchi ; https://en.wikipedia.org/wiki/Ukraine_in_the_Eurovision_Song_Contest_2023 | ✅ |
| Faraday: британська з 1947, передана Україні 1996, прапор — 6 February 1996, Akademik Vernadsky; Vernadsky — перший президент Академії наук (a50, a57, a63, a64) | https://uac.gov.ua/en/vernadsky-station-en/station-history-en/ ; https://en.wikipedia.org/wiki/Vernadsky_Research_Base | ✅ |
| Nebyliv, 1891; поселенці на преріях, пшениця; понад мільйон канадців з українським корінням (a56, a58, a62) | https://www.encyclopediaofukraine.com/pages%5CP%5CY%5CPylypowIvan.htm ; https://www.ualberta.ca/en/canadian-institute-of-ukrainian-studies/centres-and-programs/kule-centre/ukrainians-in-alberta.html ; https://thecanadianencyclopedia.ca/en/article/ukrainian-canadians (2021: 1 258 635 / 1 359 655) | ✅ |
| Космонавт з Chernivtsi Oblast, досліди з рослинами, US shuttle Columbia, 1997 (a50, a64) | https://www.britannica.com/biography/Leonid-Kadenyuk ; https://www.nasa.gov/wp-content/uploads/2016/01/kadenyuk.pdf (WebSearch) | ✅ |

Імен Pylypow, Eleniak, Kadenyuk, Vernadsky у вправах немає, тож примітку КМУ55 не дублюємо ✅. D-057: поселенці — лише як в уроці ✅.

## 3. Наголос (словники відкрито в цій сесії через curl)
CD https://dictionary.cambridge.org/dictionary/english/<word> (UK / US) і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>:
agency ˈeɪ.dʒən.si · /ˈeɪdʒənsi/; provide prəˈvaɪd · /prəˈvaɪd/; member ˈmem.bər; membership ˈmem.bə.ʃɪp · /ˈmembəʃɪp/; candidate ˈkæn.dɪ.dət · /ˈkændɪdət/; organisation ˌɔː.ɡən.aɪˈzeɪ.ʃən · OALD organization /ˌɔːɡənaɪˈzeɪʃn/ (варіант organisation є в статті); humanitarian hjuːˌmæn.ɪˈteə.ri.ən · /hjuːˌmænɪˈteəriən/. Наголошений склад у UK і US однаковий ✅. Усі слова підкреслені `<u>` в e11s7l1 ✅. У кожному наборі a10–a12 є слова з різним наголошеним складом ✅.
**enter:** CD «[T] to become a member of a particular organization»; OALD «enter something (formal) to become a member of an institution» — тому в a02 «applied to enter the EU» теж правильно.

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт
Кожну вправу я спершу розв'язав сам, а тоді звірив з ключем. `SLID_LANG.check(…, solution, "en")` зараховує всі ключі (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe11s7-pe11s8/bin/chk.mjs`). Кінцевого `.!?` у ключах `word` немає. Копії рамок я шукав 7-грамами проти всіх g*-e*.js (`…/bin/ngram.mjs`).

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | за списком | = | l1 #3 | founding member теж «belongs», але тоді member state лишається без пари | ✅ |
| a02 word | join | join | l1 #3 | **enter** («applied to enter the EU») — правильне за CD і OALD, а контекст його не відсікає | ❌ → answer ["join", "enter"] |
| a03 gaps | membership; founding; headquarters | = | l1 #3 | ні | ✅ |
| a04–a06 | Strasbourg / 51; 193; UNICEF; WFP / [0,2,4] | = | l1 intro, #3, #7 | правдиві твердження всі в ключі | ✅ |
| a07, a08 | who; where / where | = | l1 #6 | «in which» — два слова; that/which після school + I gave — неправильно | ✅ |
| a09 pick | where | = | l1 #6, #10 | «volunteers that help» — правильне, не позначене | ✅ |
| a10–a12 stress | за словником | = | §3 | ні | ✅ |
| a13–a15 | 193 / candidate / 2024 | = | текст вправи | ні | ✅ |
| a16 match | за списком | = | l2 #3, #7 | ні | ✅ |
| a17 gaps | judge; fine; illegal | = | l2 #3 | «lawyer… decides» — ні | ✅ |
| a18 word | equality | = | l2 #7 | «rights» не дає «the idea that…» | ✅ |
| a19 gaps | who; which | = | l2 #9 | that з комами — хибне | ✅ |
| a20 sort | 3/3 | = | l2 #9 | Paris, where… — як у gaps l2 | ✅ |
| a21 pick | that | = | l2 #12 | «Laws that protect» правильне | ✅ |
| a22–a24 gaps | speech; trial / which; who; fair / 1948; which; who | = | l2 intro, #3, #7, #9 | that у defining (a24 «A person ___ can’t») не серед варіантів | ✅ |
| a25 match | за списком | = | l3 #3, #7 | ні | ✅ |
| a26 word | even | = | l3 #2–3 | body задає пару odd/even; «small numbers» — не за змістом | ✅ |
| a27 gaps | threshold; superstition; custom | = | l3 #3 | ні | ✅ |
| a28–a30 | rude / £2–3 / [0,2,4] | = | l3 intro, #7 | ні | ✅ |
| a31 gaps | Both; whereas | = | l3 #5 | ні | ✅ |
| a32 build | Unlike Emma’s family, Orysia’s family gives guests slippers. | = | l3 #5 | кома в плитці «Emma’s family,» фіксує порядок; перебір — 1 порядок | ✅ |
| a33 pick | unlike | = | l3 #5 | ні | ✅ |
| a34–a36 | who; which / [0,2,4] / that | = | l2 #9, l3 #11 | ні | ✅ |
| a37–a39 gaps | bill; service charge / odd; threshold; Both / tip; whereas; rude; Both | = | l3 #3, #5, #7 | ні | ✅ |
| a40 gaps | who; whom | = | l4 #3 | ні | ✅ |
| a41 multi | [0,2] | = | l4 #5 | ні | ✅ |
| a42 gaps | where; whose; when | = | l4 #5 | «the day that» не серед варіантів | ✅ |
| a43 pick | whom (farmer) | = | l4 #3 | ні | ✅ |
| a44 build | 2 порядки | = | l4 #3, #9 | перебір: зараховуються лише 2 ключі. Питання «Is Gareth Jones the journalist about whom I wrote my post?» складається з плиток, але воно не поєднує два твердження Owen | ✅ |
| a45–a47 gaps | who; whose / who; whose; whom / which; whose; whom | = | l4 #3, #5 | ні | ✅ |
| a48 gaps | which; which | = | l5 #3 | ні | ✅ |
| a49 choice | the fact that… | = | l5 #4 | ні | ✅ |
| a50 sort | 3/3 | = | l5 #6 | ні | ✅ |
| a51 pick | that | = | l5 #3 | ні | ✅ |
| a52 build | 2 порядки | = | l5 #7 | перебір: лише ключі | ✅ |
| a53, a54 gaps | which; which / which; who; which | = | l5 #3, #7 | ні | ✅ |
| a55 gaps | which; who; which | = | l5 #7 | третє речення — дослівна рамка фіналу l5 («The UK hosted the contest on behalf of Ukraine, {which\|who\|what}…») з тим самим ключем і дистракторами | ⚠️ → «Our neighbours invited us to watch it on their big TV, {which\|who\|what} was very kind.»; steps |
| a56–a58 | wheat / [0,1] / families | = | l6 #3–#5, #2 (roots) | ні | ✅ |
| a59 match | за списком | = | l6 #9 | інших пар немає | ✅ |
| a60 choice | So, we all agree… | = | l6 #9 | ні | ✅ |
| a61 gaps | To sum up; Overall; point; agree | = | l6 #9 | ні | ✅ |
| a62–a64 gaps | settled; roots / handed over; raised; station / In conclusion; who; who; who | = | l6 #2, #9 | ні | ✅ |

**Пастки теми.** who / that і which / that у defining ніде не протиставлено; whom ніде не стоїть хибним там, де можливий who-додаток; після прийменника — лише whom; which про все речення — лише which ✅. hint не видають відповідей і не перелічують їх у порядку пропусків ✅. Правдиве за уроком твердження ніде не подано як помилку ✅. Лексика — з уроків e11s7 і раніших (нові слова правок: neighbours, invite — є в e4s8, e10s1) ✅. Канон героїв не порушено ✅.

## 5. Авторське право
Тексти власні. Дослівний пошук (WebSearch з лапками) найдовших фрагментів: «Until 1996, the station was British, and its name was Faraday» (a57) і «Kateryna’s drama club will perform at a festival in Kharkiv, which means that they have to practise» (a49) — збігів немає ✅.

## 6. Прогін
`node tools/validate.mjs --pool pe11s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s7` — 6 уроків, 64 вправи, правило ≥ 3 і рівні 1–3 виконано; `euphony --pool pe11s7` — без зауважень. `test-answer-ui.py --suite content --pool pe11s7` не запускав, бо в контейнері немає Python-модуля playwright; прогін буде в CI.

## 7. Правки
Зроблено (2): a02 — answer + «enter»; a55 — нове третє речення замість рамки фіналу l5, steps. `status: "verified"`, meta.factcheck. Відкритих ❌ і ⚠️ немає.
