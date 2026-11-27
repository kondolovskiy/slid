# Верифікація: тест рівня dge9 (content/eng/diag-g9.js)

Верифікатор: verifier-write-eng-diag-g9, 2026-11-26. Задача: tasks/review/write-eng-diag-g9.md. Скіли: content-verify («Англійська»), math-pool-diag §2в. Еталони: reports/verify/write-eng-diag-g7.md, write-eng-diag-g8.md.

**Вердикт: `status: "verified"` після правок у 5 завданнях (№8, 16, 18, 24, 25), плюс статус, meta і шапка.** Неправильних ключів і других правильних відповідей немає. Критична знахідка одна: №8 приписував реальному Харківському зоопарку вигадане правило («On Sundays, the zoo is free»). Решта правок — переодягнені копії рамок уроків (прецедент dge6–dge8). id тесту, id тем, порядок і кількість завдань (29) не змінено. dge9 ще не на main (коміт dd53c31 є лише в `claude/eng-g7-11`), тож `rev` не потрібен. Файли g9-*.js (там працює style-sync) не чіпав. Нових TQ немає.

## 1. Дослівні збіги (власний скрипт n-грам)
Скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-dge9/ng.cjs` порівнює body, text з розкритим ключем, opts і **кожен варіант кожного пропуску** з усіма рядками екранів g4-*…g9-* і з усіма завданнями dge4–dge8. Перевірено n = 6, 5, 4.
- До правок і після них: 6- і 5-грам — 0. 4-грами — граматичні рамки, імена й службові звороти («did you use to», «we were going to», «pupils don’t have to», «where do you live», «Kyrylo writes about his»).
- Переодягнені копії (та сама рамка, той самий ключ, ті самі дистрактори) скрипт не ловить. Їх я шукав вручну: кожне завдання звірено з повним дампом екранів уроку теми (`dump.cjs` у тій самій теці).

| № | Тема | Копія чого | Правка |
|---|---|---|---|
| 16 | cur-e9s3 | e9s3l4 ек. 7: Zlata пише про новий одяг: «{*so\|such\|such a} comfortable that… {*such a\|so\|such} lovely dress… {*such\|such a\|so} cool shoes». У тесті була та сама авторка, та сама тема (одяг), ті самі три набори варіантів у тому самому порядку | «Mariia writes about the school concert»: «It was {*such a\|so\|such} long concert that we got home at ten. Our music teacher was {*so\|such\|such a} happy that she bought us pizza. And our parents were {*such\|such a\|so} loud fans that everyone in the hall could hear them!» |
| 18 | cur-e9s4 | e9s4l4 ек. 4: «Then she asked what {*I was working\|was I working…} on» (Present Continuous → reported) | Третє питання тепер «How often do you go camping?» → «Then she asked how often {*Daryna went\|did Daryna go} camping.» |
| 24 | cur-e9s7 | e9s7l2 ек. 10: «I’m keen {*on\|at} {*playing\|play} chess. I’m bad at {*drawing…}, so I can’t be an architect!»; у тесті було «keen {on} {designing}… I’m bad {at} cooking, so I won’t be a chef!» | «I love clothes, and I’m good {*at\|on} {*making\|to make} them. Last month, I made a dress for my sister! I’m also keen {*on\|of} designing T-shirts, so I’d like to work in fashion.» |
| 25 | must | e8s6l5 ек. 8: «at her old school, she {*had to\|has to\|must} wear a red jumper»; у тесті було «At my old school…, we {*had to\|must\|have to} wear a white shirt every day» | «At my old school in Lutsk, lessons started at eight, so we {*had to\|must\|have to} get up very early.» (Must has no past form — e8s6l5 ек. 7) |

Залишив як паралельні завдання, бо зміст у них новий, а збігається лише граматика теми (за прецедентом dge8): №12 (thought/was sure + would — сама тема e9s1l5), №14 (план із годинами і will be + -ing; дистрактори «will cleaning / will be clean» — типові для e9s2l4), №20 (whose / who / who’s), №21 (is/are being + третя форма), №22 (процес «First… Then… is used for»), №27 (коротка відповідь «Yes, I would» — функціональна формула), №28 (too / X enough / to + verb — той самий тип, що й у прийнятому dge8 №19), №29 (Although / So / However — мінімальний набір сполучників теми). №26 показує поза пропуском «wouldn’t have been late» (так само e9s8l5 ек. 6). Це рамка, а не ключ, тож лишив.
4-грама №25 «mustn’t eat in the» ← dge6 №24 («mustn’t eat in the museum»): інший тест, інший контекст, лишив.

Лексика (`vocab.cjs`: слова тесту, яких немає в g4-*…g9-*): лише назви тем і власні назви (Lutsk), а також дистрактор cutting. У моїй першій версії №16 було «heard» — замінив на «could hear». Нові слова правок (concert, pizza, loud, fans, hall, camping, how often, dress, T-shirts, fashion, get up) є в уроках.

## 2. Відповіді (розв’язано самостійно; після правок — ще раз)
Мої відповіді збіглися з ключем у всіх 29 завданнях. Для кожного пропуску я шукав другу правильну BrE-відповідь:

| № | Тема | Ключ ↔ дистрактори | Друга правильна? |
|---|---|---|---|
| 1 | usedto | used to / use to / uses to | ні |
| 2 | pastperf | had bought / has bought / had buy (the week before) | ні («bought» не варіант) |
| 3 | compadj | world-famous / old-fashioned / open-air | ні |
| 4 | said | didn’t have / don’t have (тепер кіт — вже неправда) / doesn’t have | ні |
| 5 | rel | the film that we watched (далі новий підмет) | ні: в інших двох after that іде дієслово (e8s4l3 ек. 3) |
| 6 | pass | be watered / watered / water | ні |
| 7 | ingto | avoids / wants / hopes + going | ні |
| 8 | must | don’t have to / mustn’t / have to (вхід вільний) | ні |
| 9 | cond2 | would go / will go / goes | ні («could» не варіант) |
| 10 | enough | tall enough / enough tall / too tall | ні |
| 11 | usedto | use ↔ used; didn’t use ↔ didn’t used; used ↔ use | див. нижче, TQ-158 |
| 12 | cur-e9s1 | were going to ↔ are going to / will; would ↔ will ×2 | ні |
| 13 | pastperf | was falling ↔ had fallen (за таймлайном сніг іде 9–10); had left ↔ was leaving / has left; walked ↔ had walked | ні |
| 14 | cur-e9s2 | will be cleaning / planting, won’t be sitting ↔ неграматичні форми | ні |
| 15 | compadj | five-day ↔ five-days; open-air ↔ old-fashioned («so we sat outside»); well-known ↔ world-famous («people in other cities don’t») | ні (обидва «an …» граматичні, відсікає зміст) |
| 16 | cur-e9s3 | **після правки:** such a long concert; so happy; such loud fans | ні (лічильне в однині → лише such a; множина → лише such) |
| 17 | said | told the coach ↔ said; his ↔ my; said that ↔ told that | ні |
| 18 | cur-e9s4 | where she lived ↔ did she live / lived she; if ↔ that; **після правки:** how often Daryna went ↔ did Daryna go | ні («she lives», «whether» не варіанти) |
| 19 | rel | who ↔ that (після коми); he rides ↔ he rides it; which ↔ who | ні |
| 20 | cur-e9s5 | whose ↔ who’s; who ↔ whose; whose ↔ who’s (будівля — CD Grammar: whose для «people, animals and things») | ні |
| 21 | pass | are being put / is being cleaned / are being brought ↔ активні форми чи неузгоджені | ні («are put» не варіант) |
| 22 | cur-e9s6 | are cut / is added / is used ↔ are cutting, is cut / are added, adds / uses, are used | ні |
| 23 | ingto | decided to eat; avoid buying; enjoy cooking | ні |
| 24 | cur-e9s7 | **після правки:** good at ↔ on; making ↔ to make; keen on ↔ of | ні |
| 25 | must | **після правки:** had to ↔ must / have to (минуле); don’t have to ↔ mustn’t («their choice»); mustn’t ↔ don’t have to («a rule») | ні |
| 26 | cur-e9s8 | had charged ↔ would have charged / charged; would have called ↔ would call / will call; hadn’t got ↔ wouldn’t have got / didn’t get | ні (змішаний умовний тут неможливий: усе в минулому) |
| 27 | cond2 | would you go ↔ you would go / will you go; could ↔ can (were); would ↔ did | ні |
| 28 | enough | too ↔ enough; big enough ↔ enough big; to wear ↔ wearing | ні |
| 29 | cur-e9s9 | Although ↔ However / So (без коми після However і з комою після підрядного — неграматично); so ↔ because / although (граматичні, але відпадають за змістом: «studied a lot because I felt calm»); However, ↔ Although, / Because, (з комою на початку речення — неграматично) | ні |

**№11 і TQ-158.** CD Grammar: «The negative of used to is most commonly didn’t use(d) to… Both forms are common, but many people consider the form with the final -d to be incorrect, and you should not use it in exams» (https://dictionary.cambridge.org/grammar/british-grammar/used-to). OALD, Grammar Point: «To form questions, use did: Did she use to have long hair? Note that the correct spelling is use to, not ‘used to’. The negative form is usually didn’t use to» (https://www.oxfordlearnersdictionaries.com/definition/english/used-to_2). Тест відповідає тимчасовому рішенню TQ-158 («Як зараз»: форма з -d — хибний варіант; так навчає e7s5l3 ек. 6, 7). **Якщо вчитель обере TQ-158 Б, у №11 треба замінити дистрактори пропусків 1–2** (наприклад, «using» і «wasn’t used»). Сам не змінював.

«Одне завдання не підказує інше»: ключ жодного завдання не видно в body чи text іншого. №3 і №15 мають спільні варіанти (world-famous, open-air, old-fashioned), але в тесті рівня ключ після відповіді не показують, тож це та сама перевірка знання, а не підказка. Назви тем рушій показує лише на екрані результатів. AmE-написань серед хибних варіантів немає. Літер A/B/C, позиційних посилань, «Listen» і IPA немає.

## 3. Опора (D-019): урок → екран
Усі `lessons` існують (validate — 0 помилок), і кожен урок вчить саме того, що перевіряє тема. Звірено з дампом екранів:

| Тема | Урок | Екрани з правилом |
|---|---|---|
| usedto | e7s5l3 | 3 (used to + verb, «Not: I use to»), 6 (didn’t use to, Did you use to…?) |
| pastperf | e8s5l4; e8s5l5 | l4 ек. 3 (had + третя форма, таймлайн), 5 (третя форма: left); l5 ек. 3 (тло — Past Continuous, події — Past Simple, раніше — Past Perfect) |
| compadj | e8s4l5 | 3 (world-famous, well-known, open-air, old-fashioned; a two-hour concert — no -s) |
| said | e8s3l4; e8s3l5 | l4 ек. 3 (don’t → didn’t; I → he/she, my → his/her), 6 (досі правда / минула подія); l5 ек. 3 (told + особа, said), 5 (we → they) |
| rel | e8s4l3; e8s4l4 | l3 ек. 3 (коли можна пропустити that; без зайвого it — ек. 7); l4 ек. 3 (з комами — who / which, не that) |
| pass | e7s2l4; e8s3l3 | e7s2l4 ек. 3 (should + be + третя форма), 6 (put → put); e8s3l3 ек. 3 (is/are being + третя форма) |
| ingto | e8s2l3 | 3 (enjoy, avoid + -ing; want, decide, hope + to) |
| must | e8s6l5 | 3 (mustn’t ↔ don’t have to ↔ have to), 7 (had to; must has no past form) |
| cond2 | e8s8l5; e8s8l6 | l5 ек. 3 (if + Past Simple → would), 6 (if … were); l6 ек. 3 (питання з would, could = would be able to, короткі відповіді) |
| enough | e7s4l6 | 3 (adj + enough to, too + adj + to, «Not: enough old») |
| cur-e9s1 | e9s1l5 | 3 (was/were going to; would після thought / was sure) |
| cur-e9s2 | e9s2l4 | 3 (will be / won’t be + -ing) |
| cur-e9s3 | e9s3l4 | 3 (so + adj + that), 5 (such a + adj + однина; such + adj + множина) |
| cur-e9s4 | e9s4l4 | 3 (wh-: без do, порядок як у ствердженні, дієслово «назад»), 5 (if / whether) |
| cur-e9s5 | e9s5l4 | 3 (whose + іменник для людей і речей; who’s = who is) |
| cur-e9s6 | e9s6l4 | 3 (is/are + третя форма для процесу), 6 (is used for + -ing) |
| cur-e9s7 | e9s7l2 | 3 (good at, keen on + -ing; «Not: good at draw») |
| cur-e9s8 | e9s8l5 | 3 (if + Past Perfect → would have + третя форма), 6 (hadn’t …, wouldn’t have) |
| cur-e9s9 | e9s9l4 | 3 (Although — одне речення; However — нове речення + кома), 6 (because / so) |

e9s9 не має requires на 8 кл., тож окремої передумови не має. Це узгоджено з нотатками автора.

## 4. Факти (відкрито в цій сесії)
| Твердження | Джерела | Вердикт |
|---|---|---|
| №8 (до правки): «A notice at the zoo in Kharkiv: On Sundays, the zoo is free for everyone» | Реальна установа, а правило вигадане; джерела немає | ❌ → **виправлено:** «the little museum in Zelena Dolyna» (вигадане село канону, див. dge8 §4) |
| Odesa — на Чорному морі («go to the sea… travel to Odesa», №12) | https://en.wikipedia.org/wiki/Odesa («on the northwestern shore of the Black Sea»); WebSearch: https://www.britannica.com/place/Odessa-Ukraine, https://www.encyclopediaofukraine.com/pages%5CO%5CD%5COdesa.htm | ✅ |
| В Українських Карпатах катаються на лижах (№9) | https://en.wikipedia.org/wiki/Bukovel («Ski resort in Ukraine»); WebSearch: https://bukovel.com/en/blog/istoriia-kurortu-bukovel, https://skiresort.info/ski-resort/bukovel | ✅ |
| Dnipro далеко від гір (№9) | WebSearch: https://worldatlas.com/cities/dnipro-ukraine.html (Dnieper Upland / Lowland), https://www.encyclopediaofukraine.com/pages%5CD%5CN%5CDniproUpland.htm (flat or gently undulating), https://www.britannica.com/place/Ukraine (Карпати — крайній захід) | ✅ |
Решта — вигадані люди й об’єкти (Mr Koval, Coach, Grandma Hanna, Uncle Petro, фотоклуб, паперова майстерня в Києві, кінотеатр просто неба в селі). За реальні факти вони себе не видають.

## 5. Форми й норма (словники, відкриті в цій сесії)
| Форма | Джерело | Вердикт |
|---|---|---|
| didn’t use to / Did you use to…? | CD Grammar used-to; OALD used-to_2 (цитати — §2, №11) | ✅ за TQ-158 «Як зараз» |
| whose для речей (building whose windows) | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/whose: «possession by people, animals and things… the book whose title» | ✅ |
| keen on doing | OALD https://www.oxfordlearnersdictionaries.com/definition/english/keen_1: «keen on doing something» | ✅ |
BrE: at weekends, greetings cards, flat не вживається, «9.00–10.00 pm» (TQ-123 «Як зараз»), лапки “ ” (TQ-122). AmE-лексики й AmE-правопису немає.

## 6. Авторське право (WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «Our village didn’t use to have a school bus» | збігу немає |
| «old newspapers are cut into small pieces. Then water is added» | немає (лише інструкції з виготовлення паперу, інший текст) |
| «Mum thought the holidays would be boring. In fact, they were great fun» | немає |
| «The grey coat is cheap, but it isn’t big enough for him» | немає |

## 7. Рівень, педагогіка, прогін
Рівень — B1 наприкінці 9 кл.: речення до ~16 слів, граматика лише з уроків тем, інструкції однакові («Choose the correct answer.», «Fill in the gaps.»), `why` без «Year N»; `uk`, `fbText`, `hint` відсутні; ≤ 3 пропуски на `gaps`. Чутливого змісту немає. Хвороба тата в №12 подана м’яко («the holidays were great fun»).
- `node tools/validate.mjs --diag dge9`: 0 помилок, 0 попереджень до й після правок.
- `node tools/euphony.mjs --diag dge9`: 0 відхилень.
- test-answer-ui і playtest не запускав, бо Python-модуля playwright у контейнері немає; їх прожене CI. Build і commit не робив (за задачею).

## 8. Правки
Зроблено: №8 (❌ вигаданий факт про реальний зоопарк), №16, 18, 24, 25 (копії рамок уроків); status → verified, meta.factcheck, шапка.
Рекомендовано (не блокує): після відповіді на TQ-158 перевірити №11 (§2). Окремо — у e7s5l3 ек. 7 так само.
