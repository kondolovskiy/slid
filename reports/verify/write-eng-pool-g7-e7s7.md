# Верифікація: пул pe7s7 «Kyiv and London: history and culture» (англійська, 7 кл.)

Верифікатор: verifier-pe7s7-pe8s1 (content-verifier), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g7-e7s7.js` (85 вправ a01–a85) за скілами `content-verify` (§2–§5, «Англійська») і `math-pool-diag` §2в. Задача — tasks/review/write-eng-pool-g7-e7s7.md. Опора — уроки content/eng/g7-e7s7.js (verified, reports/verify/write-eng-g7-e7s7.md) і раніші уроки e4–e7s6. Еталони — reports/verify/write-eng-pool-g6-*.md, -g7-*.md.

**Вердикт: пул придатний, `verified`.** Зробив 30 мінімальних замін у 20 вправах. Блокувальні знахідки такі.
- 3 правильні дистрактори: «opened» в a54, a55, a84. Неперехідне *open* правильне, тож «The Underground opened in 1863» — теж правильна відповідь.
- 1 правдивий дистрактор: «Kateryna is a poem by Shevchenko» в a21. Поема «Катерина» справді існує.
- 4 вправи з лексикою пізнішого уроку чи розділу (D-019): *war* в a30, a31, a36, a37; *hundred*, *grandmother*, *neighbour*, *Italian*.
- 1 суперечність канону: a73.
- 1 вигадана деталь про реальний музей: a12.

Решта — hint, що видавав відповідь, і невідповідність року в hint. TQ не створюю, людині питань немає.

## 1. Програма (`sources`, `src`)
`sources` — `mpim`, `program: true`, без `srcPage` і `adapted`. Сторінки `src` (с. 32 — пам'ятки Києва й столиці країни, мова якої вивчається; с. 34 — one of the + superlative, similar to / the same as; с. 35 — Passives: Present / Past simple) звірено з нотатками автора та звітом уроку e7s7 (MP-IM, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf). У вправах на one of / similar to стоїть с. 34, на пасив — с. 35, на тематику — с. 32. ✅

## 2. Факти (лише з уроку e7s7, без нових) → джерела, відкриті в цій сесії → вердикт

| Твердження в пулі | Де в уроці | Відкрито в цій сесії | Вердикт |
|---|---|---|---|
| British Museum: opened 1759; free (a41, a43, a76, a81, a84) | l4 #5 | https://en.wikipedia.org/wiki/British_Museum («opened to the public in 1759»; «charges no admission fee except for loan exhibitions»); друге джерело — у звіті уроку (britishmuseum.org/history) | ✅ |
| London Underground: 1863, the oldest underground railway (a41, a54, a66, a77, a84) | l4 #1, #5 | https://en.wikipedia.org/wiki/London_Underground («the world's first underground passenger railway», 10 January 1863) | ✅ |
| Globe: first built 1599, destroyed by fire 1613; new Globe opened 1997 near the old place (a43, a55, a79, a85) | l4 #5 | https://en.wikipedia.org/wiki/Globe_Theatre («built in 1599… fire… destroyed it on 29 June 1613… Shakespeare's Globe, opened in 1997 about 230 m from the original site»); WebSearch → https://shakespearesglobe.com/discover/shakespeares-world/the-third-globe | ✅ |
| St Paul’s: old cathedral destroyed in the Great Fire 1666; new one by Wren; hit by bombs in WWII, not destroyed; dome (a56–a58, a65–a70, a79, a85) | l5 #3 | https://en.wikipedia.org/wiki/St_Paul%27s_Cathedral (Wren; «Great Fire… gutted… Old St Paul's»; «hit by bombs on 10 October 1940 and 17 April 1941, but it survived the Blitz»; dome) | ✅ |
| St Michael’s: built 12th c., destroyed 1930s, rebuilt 1990s (a38–a40, a72, a82) | l3 #6 | https://en.wikipedia.org/wiki/St._Michael%27s_Golden-Domed_Monastery (1108–1113; demolished 1935–1937; reopened 30 May 1999) | ✅ |
| St Sophia’s: 11th c., not destroyed (a39, a40, a71, a72, a77, a79, a82) | l3 #6 | https://en.wikipedia.org/wiki/Saint_Sophia_Cathedral,_Kyiv («11th century»; «The cathedral was saved from demolition») | ✅ |
| St Andrew’s Church — Rastrelli (a20–a22, a67, a73, a77, a82) | l2 #4 | https://uk.wikipedia.org/wiki/Андріївська_церква_(Київ) («за проєктом архітектора Франческо Бартоломео Растреллі») | ✅ |
| Kobzar — Shevchenko; Kyiv founded by Kyi, Shchek, Khoryv, Lybid (legend) (a20–a22, a25) | l2 #4 | звіт уроку: https://en.wikipedia.org/wiki/Kobzar_(book), https://en.wikipedia.org/wiki/Kyi,_Shchek_and_Khoryv | ✅ (дослівно як в уроці) |
| Monument to Prince Volodymyr 1853; Khmelnytskyi monument між Софією й Михайлівським, one of the oldest (a73, a78, a81, a82) | l1 #1, l4 #7, l6 #2 | звіт уроку (en/uk.wikipedia, ukrinform) | ✅ (дослівно як в уроці) |
| **a21 ❌: «Kateryna is a {painting\|poem} by Shevchenko»** | l2 #4: «Kateryna – a painting» | https://en.wikipedia.org/wiki/Kateryna_(poem) (поему написав Шевченко, 1838–1839, Kobzar 1840; картина 1842 — «to illustrate his own poem»); https://uk.wikipedia.org/wiki/Катерина_(поема) | ❌ дистрактор «poem» правдивий → замінено на «statue» |
| **a12 ⚠️→✅:** «[National Museum of TS] is visited every day… drawings kept in glass boxes… paintings in the next room» | — | у джерелах уроку немає. Вигадані розклад і планування реального музею | прибрано (§5) |

Вигадані місця подано як вигадані, з героями: шкільний музей Daryna, будинки на вулиці Bohdan, церкви в селі бабусі Daryna, міст і бібліотека в селі дідусів Kyrylo, школа George, «our town» (a42), «a town by the sea» (a63). Жодне з них не названо реальною пам'яткою. a79 «destroyed by fire» стосується лише першого Globe і старого St Paul’s, як і в уроці. ✅

### Форми й наголос (curl у цій сесії; CD UK — https://dictionary.cambridge.org/dictionary/english/<w>, OALD — https://www.oxfordlearnersdictionaries.com/definition/english/<w>)

| Слово | CD UK | OALD | Ключ | Вердикт |
|---|---|---|---|---|
| statue / painting / monument / artist | ˈstætʃ.uː / ˈpeɪn.tɪŋ / ˈmɒn.jə.mənt / ˈɑː.tɪst | /ˈstætʃuː/ /ˈpeɪntɪŋ/ /ˈmɒnjumənt/ /ˈɑːtɪst/ | 1-й | ✅ |
| collection | kəˈlek.ʃən | /kəˈlekʃn/ | 2-й | ✅ |
| architect / similar | ˈɑː.kɪ.tekt / ˈsɪm.ɪ.lər | /ˈɑːkɪtekt/ /ˈsɪmələ(r)/ | 1-й | ✅ |
| design / destroy | dɪˈzaɪn / dɪˈstrɔɪ | /dɪˈzaɪn/ (design_1) /dɪˈstrɔɪ/ | 2-й | ✅ |
| **open** (a54, a55, a84) | [ I ] «to become or make something ready to provide a service» | open_2: «[intransitive, transitive] (of a shop, business, etc.) to start business for the first time: A theme park opened on the same site.» | «was opened» єдиний ключ при дистракторі «opened» | ❌ → дистрактор замінено |

У кожному `stress` є слово з іншим наголошеним складом (collection, design, destroy). Усі слова підкреслені `<u>` в l1–l4 цього розділу: monument, statue, painting, artist, collection — у l1; architect, design — у l2; destroy — у l3; similar — у l4. Підхід такий самий, як у самому l4 #10 (прецедент — звіт pe7s1, спірне 2). ✅

## 3. Завдання: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я спершу розв'язав сам, а тоді звірив із ключем. Для всіх 5 `build` перебрав усі перестановки всіх підмножин tiles + extra через `SLID_LANG.check(…, "en")` з app/lang.js (node vm, скрипт `chk.mjs` у scratchpad). Ключі `word` прогнав через `wordVerdict`. Лексику перевірив скриптом `lex.mjs`: слова кожної вправи порівняв з усіма уроками e4–e7s6 та e7s7 до уроку вправи включно.

| Вправа | Моя відповідь | Опора | Друга правильна? / зауваження | Вердикт |
|---|---|---|---|---|
| a01 choice | She paints pictures | текст на екрані; l1 #3 artist | ні | ✅ |
| a02 multi | 0, 2 | текст на екрані | ні | ✅ |
| a03 choice | old things from the school | текст на екрані; l1 collection | ні | ✅ |
| a04 match | за місцем | l1 #3 | кожен правий лягає лише до одного лівого | ✅ «two hundred» → «lots of» (hundred — лише з e8s1l7) |
| a05 word | collection | l1 #3 | ні («Use one of the museum words») | ✅ «about a hundred» → «lots of» |
| a06 word | paintings | l1 #3 | pictures — у ключі | ✅ |
| a07, a08 gaps | are kept, is kept; is visited, are kept, is kept | l1 #5 | ні | ✅ |
| a09 pick | [is kept] | l1 #5 | ні | ✅ |
| a10, a11 gaps | toys, are kept; artist, painting, are kept | l1 #3, #5 | ні | ✅ |
| a12 gaps | is visited, collection, are kept, are | l1 #3, #5, #6 | — | ✅ після правки (§5: вигадана деталь про реальний музей) |
| a13–a15 stress | див. §2 | l1 #3 `<u>` | — | ✅ |
| a16 gaps | was painted, was built | l2 #3 | ні (build не ергативне) | ✅ |
| a17 choice | 2 | l2 #3, #7 | ні | ✅ grandmother → grandma (grandmother — лише з e8s5) |
| a18 build | The statue was made by a famous artist. | l2 #3, #8 | перебір: рівно 2 порядки (ствердження й питання), обидва в `answer` | ✅ |
| a19 pick | [paint] | l2 #3 | ні; Sofiia — сестра Andrii, тож «Aunt Iryna» — за каноном | ✅ |
| a20 choice | Taras Shevchenko | l2 #4 | ні | ✅ |
| a21 gaps | Rastrelli, painting, sister | l2 #4 | **❌ до правки: «poem» — правда (поема «Катерина», §2)** | ✅ виправлено → statue |
| a22 multi | 1, 2 | l2 #4 | ні | ✅ |
| a23 match | за місцем | l2 #3–#4 | architect (ім.) ↔ «She plans…» (людина); design (дієсл.) ↔ «make a plan…» — частина мови однозначно розводить пари | ✅ |
| a24 word | architect | l2 #3 | engineer (e4s1) не відповідає означенню уроку «designs buildings» | ✅ neighbour → uncle (neighbour — лише з e8s4) |
| a25 word | founded | l2 #4 | ні («Use the verb found») | ✅ |
| a26, a27 gaps | was painted, were made; was built, was designed, by | l2 #3 | ні | ✅ |
| a28 gaps | was built, was designed, are kept, is visited | l1, l2 | — | ✅ hint і steps: «1900» → «1910» (у тексті 1910) |
| a29 choice | in the 1990s | текст на екрані | ні | ✅ |
| a30 choice, a31 multi | the white church; 0, 2 | текст на екрані; l3 #2 «the building we see today is new» | **D-019: war уперше в l5** | ✅ виправлено: «wasn’t destroyed in the war» → «was never destroyed»; опція a31 «…in the war» → «…in the 1940s»; grandmother → grandma |
| a32 gaps | Was, was, Were, weren’t | l3 #5 | ні | ✅ |
| a33 word | was | l3 #5 | ні | ✅ |
| a34 build | When were the houses rebuilt? | l3 #5, #9 | перебір: лише ключ | ✅ |
| a35 choice | 2 | l3 #4–#5 | ні | ✅ hint «When + was + …?» видавав відповідь → посилання на правило |
| a36 pick | [wasn’t] | l3 #5 | war (l5) | ✅ «in the war» → «in the 1940s» |
| a37 word | weren’t | l3 #5 | were not — у ключі, `contractions` | ✅ «in the war» → «in the 1940s» |
| a38 choice | in the 1990s | l3 #6 | ні | ✅ |
| a39 gaps | 11th, 1930s, St Sophia’s | l3 #6 | ні | ✅ |
| a40 multi | 0, 3 | l3 #6 (11th < 12th; rebuilt → будівля з 1990-х) | ні | ✅ (спірне автора: висновок «будівля сьогодні» — міркування, як l3 #2 fbText) |
| a41–a43 | the British Museum; the church; 1, 2 | l4 #1, #4, #5; тексти | ні | ✅ |
| a44–a46 | people, houses; trees; the oldest, houses | l4 #4 | a45: «ones» теоретично можливе, але hint «a plural noun» і правило уроку відсікають | ✅ |
| a47 build | It’s one of the oldest houses in his street. | l4 #7 | перебір: рівно 2 порядки, обидва в `answer` | ✅ |
| a48 pick | [room] | l4 #4 | ні | ✅ |
| a49 gaps | similar to, the same as, rooms | l4 #8 | similar with / the same to — неграматичні (CD, урок) | ✅ |
| a50–a52 stress | див. §2 | `<u>` у l1–l4 | — | ✅ |
| a53 gaps | schools, similar to | l4 | ні | ✅ |
| a54 gaps | was opened, the oldest, as | l4 #4–#5, #8 | **❌ до правки: «The London Underground opened in 1863» правильне (OALD open_2 [intransitive])** | ✅ дистрактор → «were opened»; hint «didn’t open anything» → «One railway: was or were?» |
| a55 gaps | places, the same as, was opened, similar to | l4 | **❌ до правки: «The theatre opened in 1997» правильне** | ✅ дистрактор → «is opened»; hint → «1997 – the past» |
| a56–a58 | Wren; 2; 0, 3 | нотатки на екрані; l5 #3 | ні | ✅ |
| a59 word | by | l5 #5 | ні | ✅ |
| a60 gaps | Who, Was | l5 #5 | «When was the bridge designed by?» — неграматичне | ✅ |
| a61 build | Who was your school designed by? | l5 #5, #8 | перебір: лише ключ | ✅ |
| a62 choice | 1 | l5 #5 | ні | ✅ hint «Who + was + it + painted + …?» дослівно видавав відповідь → посилання на правило |
| a63 pick | [did] | l5 #5 | ні | ✅ |
| a64 gaps | designed by, Was, wasn’t | l5 #5–#6 | ні | ✅ Italian (немає в уроках) → famous; hint «Who was it designed …? … was, not did» видавав відповідь і відкидав дистрактори → питання-навігація |
| a65 match | за місцем | l5 #3 | ні | ✅ |
| a66, a69 gaps | 1666, Wren, dome; architect, dome | l5 #3, l4 (1863 — Underground) | ні | ✅ |
| a67 choice | They were both architects | l2, l5 | «lived in Kyiv» відкидається з уроку (Wren — London) | ✅ |
| a68, a70 word | dome; architects | l5 #3; l2 #3 | ні | ✅ |
| a71, a72 choice | St Sophia’s; St Sophia’s | тексти; l3 #6 | ні | ✅ (спірне автора: «Kyrylo’s cousin» — новий епізод, суперечностей немає) |
| a73 multi | 0, 2 | текст; e7s1 Present Perfect | **канон: l6 #5 George «I love art and old paintings», а тут «I don’t like museums very much»** | ✅ виправлено → «I haven’t got much time, so I won’t go to museums this time»; steps відповідно |
| a74 choice | Go to Shakespeare’s Globe | l4 #5 | ні | ✅ |
| a75 order | 0-1-2-3 | l6 #8 | ні | ✅ |
| a76 choice | British Museum | l4 #5 (free), l6 | лише ця відповідь стосується і history, і грошей | ✅ (спірне автора прийнято) |
| a77 match, a78 gaps, a79 multi | за місцем; St Michael’s, art; 0, 1 | l2–l6 | ні | ✅ |
| a80 word | were | l3 #5 | ні | ✅ |
| a81 gaps | was built, Was, houses | l1–l4 | «Did the British Museum opened» — неграматичне | ✅ |
| a82 gaps | was, by, was, Were | l3, l5 | ні | ✅ hint «was or were, not did» відкидав дистрактори → посилання на правило |
| a83 gaps | to go, to see | l6 #8 | ні | ✅ |
| a84 gaps | was opened, similar to, was opened | l4, l6 | **❌ до правки: «It opened in 1759» правильне** | ✅ дистрактор → «were opened»; hint → «One museum: was or were?» |
| a85 gaps | Was, was, was built, was | l3, l5 | «a new cathedral built» неграматичне (build не ергативне) | ✅ hint «was, not did» → посилання на правило |

**Покриття** (урок × `sk` оцінюваних неhyp-екранів → рівні): l1 read/vocab/gram/write/phon 1-2-3; l2 gram 1-2-2-3, cult/vocab/write 1-2-3; l3 read 1-2-3, gram 1-1-2-2-3-3, cult 1-2-3; l4 read 1-2-3, gram 1-1-2-2-2-3, phon/write 1-2-3; l5 read 1-2-3, gram 1-1-2-2-3-3, cult/vocab 1-2-3; l6 read/func/cult/gram/write 1-2-3. Збігається з таблицею автора. Boss l7 без вправ.

**Копії уроків** (pitfall 18, 7-грами проти g*.js і diag-*.js eng, скрипт `ngram.mjs`). Збіги є лише у фактових фразах (destroyed in the Great Fire of London, one of the oldest museums in the world), шаблонних інструкціях («One word in X’s message is wrong») і формулі «Was it destroyed in the war? – No, it wasn’t» в a64 (новий контекст — театр і гід). Речень уроку з тим самим ключем немає.

**Механіка й BrE** (grep). AmE, «Listen / You hear», IPA, `uk`, літери A/B/C і позиційні посилання не знайдено. Ключі `word` без кінцевого `.!?`. `validate --pool pe7s7` — 0/0; `personalization-qa --pool pe7s7` — лише «ще не verified» до зміни статусу; `euphony --pool pe7s7` без зауважень. `test-answer-ui.py --suite content --pool` не запускав: у контейнері немає Python-модуля playwright, прогін — у CI.

## 4. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| a03 (шкільний музей Daryna) | `"It isn't big, but it's got an interesting collection: old school bags, old books"` | збігу немає |
| a43 (лист George) | `"The theatre we visited was opened in 1997, near the place of the first Globe"` | збігу немає (лише загальні сторінки про Globe) |

Решта — короткі власні сцени з героями канону; за 7-грамами збігів з уроками поза фактовими фразами немає.

## 5. Педагогіка, вік, герої
- Рівні наростають, `steps` короткі, у формулах уроку. Неприйнятного для віку немає. Hint, що дослівно складали відповідь чи відкидали дистрактор (pitfall 17), виправлено: a35, a62, a64, a82, a85; hint a54, a55, a84 переписано разом із дистрактором.
- **a12:** про реальний Національний музей Тараса Шевченка вправа стверджувала «is visited every day», «in glass boxes», «in the next room». У джерелах уроку цього немає, тож деталі прибрано. Тепер: «It is visited by lots of school classes. It has got a big collection of his drawings. They are kept there, and his paintings are there too» — це спирається на l1 #5.
- **Канон** (glossary/eng-heroes.md). Тітка Iryna — artist, тітка Andrii ✅. Sofiia — сестра Andrii ✅. Ms Lysenko, Bohdan, Daryna, Zoriana, Kyrylo — клас Andrii, Kyiv ✅. George — London ✅. Суперечність a73 виправлено. Нові деталі (дядько Daryna — архітектор, будинки на вулиці Bohdan, село дідусів Kyrylo) канону не суперечать.

## 6. Правки (зроблені)

| Вправа | Було | Стало | Чому |
|---|---|---|---|
| a21 | `{*painting\|poem}` | `{*painting\|statue}` | ❌ правдивий дистрактор (поема «Катерина») |
| a54 | `{*was opened\|opened}`; hint «The railway didn’t open anything…» | `{*was opened\|were opened}`; «One railway: was or were?…» | ❌ неперехідне open правильне (OALD open_2) |
| a55 | `{*was opened\|opened}`; «the theatre didn’t open anything» | `{*was opened\|is opened}`; «1997 – the past» | ❌ те саме |
| a84 | `{*was opened\|opened}` (1759); hint «The museum didn’t open anything…» | `{*was opened\|were opened}`; «One museum: was or were?…» | ❌ те саме |
| a30, a31 | grandmother’s; «wasn’t destroyed in the war»; опція «…destroyed in the war» | grandma’s; «was never destroyed»; «…destroyed in the 1940s» | war — уперше в l5; grandmother — з e8s5 (D-019) |
| a36, a37 | «in the war» | «in the 1940s» | war — уперше в l5 |
| a04, a05 | two hundred / about a hundred | lots of | hundred — лише з e8s1l7 |
| a17 | grandmother (×3) | grandma | з e8s5 |
| a24 | Daryna’s neighbour | Daryna’s uncle | neighbour — з e8s4 |
| a64 | An Italian architect; hint з відповіддю | A famous architect; hint-навігація | Italian немає в уроках; pitfall 17 |
| a73 | I don’t like museums very much, so I won’t go to them; steps | I haven’t got much time, so I won’t go to museums this time; steps | канон: George любить мистецтво (l6 #5) |
| a12 | every day; glass boxes; in the next room | by lots of school classes; It has got…; there too | вигадані деталі про реальний музей |
| a28 | hint і steps «1900» | «1910» | у тексті 1910 |
| a35, a62, a82, a85 | hint зі структурою відповіді / «not did» | посилання на правило уроку | pitfall 17 |
| файл | `status: "draft"`, factcheck self | `status: "verified"`, factcheck verifier-pe7s7-pe8s1 | — |

Рекомендовано: нічого блокувального. Людині (вчителю) питань немає. Остаточний статус `approved` ставить лише людина.
