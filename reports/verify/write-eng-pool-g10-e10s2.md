# Верифікація: пул pe10s2 (англійська, 10 кл., розділ e10s2 «Sport, health and leisure»)

Верифікатор: verifier-pe10s2, 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g10-e10s2.js` за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s2.md. Опора: уроки `content/eng/g10-e10s2.js` (verified), e10s1 і g4–g9. Формат звіту — як reports/verify/write-eng-pool-g9-e9s9.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 11 правок у 10 вправах і шапці: 3 вправи `stress` без слова з розбіжністю BrE/AmE (a04–a06, spectator), 4 підказки, що розв'язували вправу (a28, a35, a42, a43), 1 суперечність канону героїв (a10), 2 звороти поза уроками (a12 «No wonder», a43 «passed me»), статус і шапка. Людині рішати нічого не треба. Для уроку e10s2l1 (не мій файл) — рядок в inbox: у `stress` #7 той самий spectator.

Спосіб: спершу розв'язав усі 70 вправ за «учнівським» дампом, де ключі приховано (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s1-pe10s2/bin/dump.mjs`), і лише потім звірив свої відповіді з ключем. Розбіжностей немає.

## 1. Програма, `src`
PDF П1407 я відкрив у цій сесії (https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf, curl; SHA-1 38df1f7ff398f0921f2852bc77fd374c77e1c0ff, 72 с.), `pdftotext`:
- с. 22: «Спорт і дозвілля — роль спорту в житті суспільства та людини; спортивні події/змагання; здоров'я та спорт», функція «аргументувати свою точку зору» → l1, l3, l5 (vocab, read, phon, func, write), l6 ✅;
- с. 23: «verbs taking gerund», «verb + ’-ing’ vs. + ’to’ infinitive» → l2, l4, l5 gram ✅.

## 2. Факти (усі — з уроку e10s2l3 / l5; джерела відкрито в цій сесії)
| Твердження (вправи) | Джерела | Вердикт |
|---|---|---|
| Перші сучасні Олімпійські ігри — Athens, 1896 (a21, a29) | https://en.wikipedia.org/wiki/1896_Summer_Olympics («the first international Olympic Games held in modern history», curl); WebSearch: https://www.britannica.com/EBchecked/topic/972056/Athens-1896-Olympic-Games, https://olympics.com/en/olympic-games/athens-1896 | ✅ |
| 1948 — змагання в Stoke Mandeville Hospital (Guttmann); перші Паралімпійські ігри — Rome, 1960 (a23, a24) | https://en.wikipedia.org/wiki/1960_Summer_Paralympics («the first international Paralympic Games, following on from the Stoke Mandeville Games of 1948», curl); WebSearch: https://www.paralympic.org/ipc/history, https://www.paralympic.org/feature/celebrating-60-years-rome-1960-first-paralympic-games | ✅ |
| Euro 2012 — Ukraine і Poland, вісім стадіонів, по чотири в країні; фінал у Kyiv; Spain — Italy 4–0 (a22, a28) | https://en.wikipedia.org/wiki/UEFA_Euro_2012 («eight venues, four in each host country», curl); WebSearch: https://www.uefa.com/uefaeuro/history/news/0254-0d7ed27f7896-1705085f8168-1000--ukraine-says-farewell-with-kyiv-finale/, https://www.aljazeera.com/amp/sports/2012/7/1/spain-crowned-european-champions | ✅ |
| Beijing 2022, Winter Paralympics: Ukraine 29 медалей, більше — лише China, країна-господарка (a26) | https://en.wikipedia.org/wiki/2022_Winter_Paralympics_medal_table (China 18/20/23 = 61, Ukraine 11/10/8 = 29, curl); WebSearch: https://www.nbcolympics.com/news/ukraine-finishes-second-behind-china-2022-winter-paralympic-medal-count, https://db.ipc-services.org/hira/paralympics/medal-standings/code/PG2022 | ✅ |
| WHO: регулярна фізична активність корисна для психічного здоров'я молоді (a47) | WebSearch: https://www.who.int/news-room/fact-sheets/detail/physical-activity (у підліток — «reduced anxiety and depression», «increased self-esteem»), https://www.who.int/europe/news-room/fact-sheets/item/physical-activity | ✅ |
| NHS: розминка перед вправами може допомогти запобігти травмам (a49 — саме «can help», не «stops all») | WebSearch: https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/ («warm up properly before exercising to prevent injury»), https://nidirect.gov.uk/conditions/sports-injuries | ✅ |

Прямий curl до who.int, nhs.uk, uefa.com, paralympic.org, britannica.com у цій сесії не резолвиться — ці джерела відкрито через WebSearch (сніпети з тих самих сторінок); Wikipedia й словники — curl. Ольгу Харлан пул не згадує.

Канон героїв (memory/long/glossary/eng-heroes.md): Oksana — karate (у каноні «вівторок і п'ятниця»), а a10 мала «I train four times a week» ⚠️ → «I train on Tuesdays and Fridays.» Решта ✅: Andrii — шахи з дідом у Chernihiv (a42), онлайн-шахи (a11; e10s2l1 «made friends all over the world»); Bohdan — теніс, травма руки (a45, a59; як e10s2l5); Kyrylo — volleyball (як e10s2l2); Taras, Myroslava, Mr Hnatiuk — athletics club, Lviv; Ostap — climbing; Tom (14) — skater, у вісім боявся води (у 4–5 кл. не вмів плавати); Emma, Amelia — клуб плавання; Grandad Mykola, Grandma Hanna, Zelena Dolyna; Mariia, Polina, Roksolana (Kharkiv); Kateryna, Daryna, Zoriana (Kyiv).

## 3. Словники (наголос у `stress`)
CD — https://dictionary.cambridge.org/dictionary/english/<word>, OALD — https://www.oxfordlearnersdictionaries.com/definition/english/<word>, Wiktionary — https://en.wiktionary.org/wiki/<word> (curl у цій сесії):

| Слово | CD (UK / US) | OALD (BrE / NAmE) чи Wiktionary | Вердикт |
|---|---|---|---|
| discipline | ˈdɪs.ə.plɪn / ˈdɪs.ə.plɪn | /ˈdɪsəplɪn/ (discipline_1) | ✅ |
| **spectator** | spekˈteɪ.tər / spekˈteɪ.t̬ɚ | OALD: /spekˈteɪtə(r)/ / **/ˈspekteɪtər/**; Wiktionary GA /ˈspɛkteɪtɚ/; Merriam-Webster «ˈspek-ˌtā-tər» | ❌ розбіжність BrE/AmE → прибрано з a04, a06 |
| athlete | ˈæθ.liːt | /ˈæθliːt/ | ✅ |
| competition | ˌkɒm.pəˈtɪʃ.ən / ˌkɑːm.pəˈtɪʃ.ən | /ˌkɒmpəˈtɪʃn/ | ✅ |
| Olympic | əˈlɪm.pɪk / oʊˈlɪm.pɪk | Wiktionary RP /əˈlɪmpɪk/ | ✅ |
| Paralympic | ˌpær.əˈlɪm.pɪk / ˌper.əˈlɪm.pɪk | Wiktionary RP /ˌpæɹəˈlɪmpɪk/ | ✅ |
| ceremony | ˈser.ɪ.mə.ni / ˈser.ə.moʊ.ni | /ˈserəməni/ / /ˈserəməʊni/ | ✅ (наголос той самий) |
| stadium | ˈsteɪ.di.əm | /ˈsteɪdiəm/ | ✅ |
| injury | ˈɪn.dʒər.i | /ˈɪndʒəri/ | ✅ |
| recover | rɪˈkʌv.ər | /rɪˈkʌvə(r)/ | ✅ |
| exercise | ˈek.sə.saɪz | /ˈeksəsaɪz/ (exercise_1) | ✅ |
| energy | ˈen.ə.dʒi | /ˈenədʒi/ | ✅ |

Усі слова підкреслені `<u>` в info свого уроку ✅. Після правки: a04 athlete, competition; a05 discipline, competition; a06 competition, discipline, athlete — у кожному наборі є різний наголошений склад ✅.

## 4. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. a70 (єдиний build): перебрав 1956 послідовностей плиток з `extra` (скрипт `…/verify-pe10s1-pe10s2/bin/chk.mjs`) — зараховується лише «What’s more, running doesn’t cost a lot», інших граматичних порядків немає ✅.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | 4 пари | = | l1 info «Sport in our lives» | перебрав усі праві | ✅ |
| a02 gaps | spectators; spirit; role model | = | l1 info | — | ✅ |
| a03 word | spectators / fans | = | l1 info | — | ✅ |
| a04–a06 stress | ath, ti / dis, ti / ti, dis, ath (після правки) | = | l1 `<u>` | spectator (§3) | ❌ → виправлено |
| a07 choice | to deal with stress | = | l1 info | — | ✅ |
| a08 multi | [0,1] | = | l1 | — | ✅ |
| a09 choice | Sport brings people together. | = | l1 info | — | ✅ |
| a10 gaps | keep; discipline | = | l1 | канон Oksana (§2) | ⚠️ → виправлено |
| a11 gaps | brings; deal | = | l1 | — | ✅ |
| a12 gaps | discipline; play; role model | = | l1 | «No wonder» — в уроках немає | ⚠️ → «So she is a …» |
| a13 gaps | playing; losing | = | l2 info «More verbs + -ing» | — | ✅ |
| a14 sort | -ing: give up, avoid, enjoy, finish; to: decide, hope, refuse, afford | = | l2 info 1–2 | дієслів з обома формами немає ✅ | ✅ |
| a15 word | to win | = | l2 info, choice | — | ✅ |
| a16 pick | buying | = | l2 info («afford … to») | — | ✅ |
| a17 choice | I kept to run all winter. | = | l2 info («Not: I kept to run») | started + обидві форми — обидві правильні ✅ | ✅ |
| a18 gaps | running; to run | = | l2 | — | ✅ |
| a19 gaps | jumping; staying; to lose | = | l2 | — | ✅ |
| a20 gaps | losing; making; staying; to win; to play | = | l2 | can’t stand + to не дано ✅ | ✅ |
| a21 choice | in Athens | = | l3 info 2 | — | ✅ |
| a22 multi | [0,1] | = | l3 info 4 | — | ✅ |
| a23 choice | in Rome | = | l3 info 3 | — | ✅ |
| a24 choice | watch the next Paralympics | = | l3 | — | ✅ |
| a25 multi | [0,2] | = | l3 | — | ✅ |
| a26 choice | China | = | l3 info 3 («Only China, the host country, won more») | §2 | ✅ |
| a27 match | 4 пари | = | l3 info «Talking about sports events» | перебрав усі праві | ✅ |
| a28 gaps | hosted; competed; ceremony | = | l3 info | hint «A city → hosts» називав відповідь | ⚠️ → hint виправлено |
| a29 word | were held | = | l3 info («hold → be held») | — | ✅ |
| a30–a32 stress | sta, lym / cer, lym, sta / lym, cer, lym | = | l3 `<u>` | §3 | ✅ |
| a33 gaps | hosted; took place | = | l3 | was held не стоїть поруч з took place ✅ | ✅ |
| a34 gaps | hosted; competed; took place | = | l3 | — | ✅ |
| a35 gaps | hosted; was held; competed; ceremony | = | l3 | hint «The competition → was …?» указував на єдиний варіант з was | ⚠️ → hint виправлено |
| a36 gaps | skating; to look | = | l4 info «stop» | — | ✅ |
| a37 gaps | to take; being | = | l4 info «remember» | — | ✅ |
| a38 choice | Do it and see what happens. | = | l4 info «try» | — | ✅ |
| a39 pick | bringing | = | l4 info | — | ✅ |
| a40 choice | We regret to tell you… | = | l4 info «regret» | — | ✅ |
| a41 gaps | to bring; to tell | = | l4 | — | ✅ |
| a42 gaps | playing; to call; playing | = | l4 | hint — перелік категорій у порядку пропусків («A memory, a job…, no more games») | ⚠️ → hint виправлено |
| a43 gaps | running; to drink; to tie; not checking | = | l4 | те саме в hint; «passed me» (обігнали) — в уроках немає | ⚠️ → hint і «ran past me» |
| a44 match | 4 пари | = | l5 info «Sport and your body» | перебрав усі праві | ✅ |
| a45 gaps | injury; rest; recovered | = | l5 info | — | ✅ |
| a46 word | injured | = | l5 info («be injured») | — | ✅ |
| a47 choice | Regular physical activity is good… | = | l5 choice (WHO) | §2 | ✅ |
| a48 multi | [0,2] | = | l5 intro (notice) | — | ✅ |
| a49 choice | No: a warm-up can help to prevent injuries… | = | l5 choice (NHS) | §2 | ✅ |
| a50 gaps | running; losing | = | l2, l5 | — | ✅ |
| a51 word | walking | = | l5 word | — | ✅ |
| a52 pick | finishing | = | l2 info («manage … to») | — | ✅ |
| a53–a55 stress | in, cov / ex, cov, en / en, cov, in | = | l5 `<u>` | §3 | ✅ |
| a56 choice | Tell your coach, and don’t train… | = | l5 intro, правило 3 | порада — слова Mr Hnatiuk з уроку | ✅ |
| a57 choice | Why not warm up first?… | = | l5 | — | ✅ |
| a58 multi | [0,1] | = | l5 info («cool down», «stretch») | — | ✅ |
| a59 gaps | injury; recover | = | l5 | — | ✅ |
| a60 gaps | warm up; cool down; running | = | l5 | — | ✅ |
| a61 gaps | injury; to stay; recovered; swimming | = | l5 | — | ✅ |
| a62 choice | For instance, … | = | l6 info «Supporting your opinion» | — | ✅ |
| a63 gaps | In; What’s more; For | = | l6 info | — | ✅ |
| a64 pick | down | = | l6 info («To sum up») | — | ✅ |
| a65 choice | PE lessons should be longer. | = | l6 | — | ✅ |
| a66 multi | [0,1] | = | l6 | — | ✅ |
| a67 choice | You can stay active without doing sport. | = | l6 | — | ✅ |
| a68 gaps | In; For | = | l6 | — | ✅ |
| a69 word | instance / example | = | l6 info («For instance = For example») | — | ✅ |
| a70 build | What’s more, running doesn’t cost a lot. | = | l6 info, build | 1 граматичний порядок | ✅ |

Пастки 10 кл. окремо: -ing / to після дієслів з обома формами — like / love / hate / prefer / start / begin / continue ніде не протиставлені (a14, a17) ✅; stop / remember / forget / try / regret — контекст однозначний (a36–a43) ✅; take place / be held / host — took place і was held ніде не стоять поруч як «правильний / хибний» (a28, a33–a35) ✅.

Лексика: grep по content/eng/g4–g9, g10-e10s1, g10-e10s2 — picnic, drawings, paints, suddenly, shook hands, physical activity, IT club, at once, tie, go past є; «no wonder», «passed (= overtook)» — немає (виправлено a12, a43). n-грами від 7 слів проти g4-*…g11-*: збігаються інструкції, визначення з info і формулювання фактів WHO / NHS / Paralympics (навмисно — факт як в уроці); копій рамок з тим самим ключем немає.

## 5. Авторське право
| Фрагмент | Запит | Результат |
|---|---|---|
| a66 «skiing is a great way to keep fit in winter. On the other hand, skis and boots cost a lot» | WebSearch у лапках | збігів немає |
| a08 «In our athletics club, nobody trains alone. When someone is tired, the others run next to them» | WebSearch у лапках | збігів немає |
| a67 «Some people say that only sport keeps you healthy. In my view, that isn’t true» | WebSearch у лапках | збігів немає |
| a07 «I started swimming because I was worried about exams. Now, after a hard day, I swim for an hour» | WebSearch у лапках | збігів немає |

## 6. Педагогіка й мова
Умови, `hint`, `steps` — англійською рівня 10 кл., BrE (practise, organised, learnt, warm-up) ✅. Медичних порад поза правилами уроку немає ✅. Літер A, B, C, IPA й «Listen» немає ✅.

## 7. Правки
Зроблені:
1. a04 words → athlete, competition; a05 → discipline, competition (hint «Are they stressed in the same place?»); a06 → competition, discipline, athlete (hint → «Remember the underlined parts in “Sport in our lives”.»); `steps` оновлено.
2. a10 «I train four times a week.» → «I train on Tuesdays and Fridays.»
3. a12 «No wonder she is a …» → «So she is a …».
4. a28 hint → «Remember the words for sports events in Lesson 3. Who does the action: the city or the teams?»
5. a35 hint → «For each gap: who or what is the subject? Does it do the action?»
6. a42 hint → «Remember the rules for remember, forget and stop in Lesson 4.»
7. a43 hint → «Remember the rules for forget, remember, stop and regret in Lesson 4.»; «three runners passed me» → «three runners ran past me».
8. `status: "verified"`, `meta.factcheck`, шапка.

Рекомендовано (не мій файл, рядок в inbox): e10s2l1 екран #7 `stress` має spectator (OALD NAmE /ˈspekteɪtər/) — замінити на інше слово уроку в наступному refine.

Прогін: `node tools/validate.mjs --pool pe10s2` — 0 помилок, 0 попереджень; `node tools/personalization-qa.mjs --pool pe10s2 --strict` — 6 уроків, 70 вправ, зауважень немає. `test-answer-ui.py --suite content --pool pe10s2` не запускав (Python-playwright у контейнері немає) — CI.

## 8. Вердикт
pe10s2 — **verified**. Відкритих ❌ і ⚠️ у пулі немає.
