# Верифікація: тест рівня dge8 (content/eng/diag-g8.js)

Верифікатор: verifier-write-eng-diag-g8, 2026-11-26. Задача: tasks/review/write-eng-diag-g8.md. Скіли: content-verify (розділ «Англійська»), math-pool-diag §2в. Еталони: reports/verify/write-eng-diag-g6.md, write-eng-diag-g7.md.

**Вердикт: `status: "verified"` після змістових правок у 8 завданнях (№13, 18, 19, 21, 24, 26, 27, 28), плюс статус і meta.** Критичних знахідок дві: №18 мав другу правильну відповідь (collective noun + who), №21 — граматично правильний дистрактор (while + Past Simple). Решта правок — копії рамок уроків (прецедент dge6/dge7). id тесту, id тем, порядок і кількість завдань (28) не змінено. dge8 ще не на main (коміт fed08d6 лише в `claude/eng-g7-11`), тож `rev` не потрібен. Нових TQ немає; питань до людини немає. Файли g8-*.js (style-sync) не чіпав.

## 1. Дослівні збіги (власний скрипт n-грам)
Скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-dge8/ng.cjs` (body + text з розкритим ключем + opts кожного завдання проти всіх рядків екранів g4-*…g9-*, n = 7, 6, 5, 4).
- **До правок:** 7/6/5-грам — 0. 4-грами — лише граматичні рамки й службові звороти.
- Але скрипт не ловить «переодягнені» копії (та сама рамка, той самий ключ і той самий дистрактор, змінено одне-два слова). Їх я шукав, звіряючи кожне завдання з екранами уроку теми (dump.cjs у тій самій теці):

| № | Тема | Копія чого | Правка |
|---|---|---|---|
| 13 | forsince | e7s1l4 ек. 11: «My grandparents {*have lived\|live} … for fifty years … Grandad has {*known\|knew}» — ті самі ключі й дистрактори | «My grandad lives by the sea. He {*has had\|has} his little boat {*for\|since} forty years. My mum {*has been\|is} a doctor since 2015.» (had, been — e7s1l4 ек. 5) |
| 19 | enough | e7s4l6 ек. 4: «Emma is {*old enough\|enough old} … Tom is {*too\|enough} young to watch it», той самий знак «12+» | «Dmytro can’t climb the wall: he’s {*too\|enough} young. He isn’t {*old enough\|enough old} yet. Oksana can climb it, but the wall is very high. She says it’s too high {*to climb\|climbing} on her first day.» («old enough» більше не стоїть на екрані поруч із пропуском) |
| 24 | cur-e8s7 | e8s7l2 ек. 5 «We climbed {*Hoverla\|the Hoverla}», ек. 2/9 «swam in the Black Sea» | Нова назва за тим самим правилом: «walk around {*Lake Synevyr\|the Lake Synevyr} in the Carpathians»; «Some of my classmates have never seen {*the Black Sea\|Black Sea}!»; Dnipro (місто) без змін |
| 26 | cur-e8s8 | e8s8l5 ек. 4: «If I {*lived\|would live} in Dublin, I {*would see\|will see} Liam every weekend. If Maksym {*had\|would have}…» — та сама послідовність трьох пропусків і «every weekend» | «If Taras’s family {*had\|would have} a boat, they {*would travel\|will travel} along the coast. If Taras {*lived\|would live} by the sea, he would surf every day.» (ще й прибрано «sail» — слова немає в уроках 4–8 кл.) |
| 28 | if | e6s8l3 ек. 5: «If you {*like\|will like} animals, {*visit\|visits} the Natural History Museum» — та сама рамка, що й у dge7 №27 (виправлено там з тієї ж причини) | «If you {*are\|will be} interested in old buildings, {*go\|goes} to St Sophia’s Cathedral.» (interested in — e7s4l4) |

Після правок: 5-грам — 0; 4-грами — «lives by the sea», «boy who plays the», «are we allowed to», «you don’t have to», «have to turn off», «has never seen the», службові «a sign at the», «Andrii writes to Liam» — рамки або імена.
Лишив як паралельні завдання з новим змістом (за прецедентом dge6/dge7): №11, 14, 15, 16, 17, 20, 22, 23, 25 (функціональні формули May I…? / Are we allowed…? – No, you aren’t, said / told — неминучі для теми).

Лексика (`vocab.cjs`, слова, яких немає в g4-*…g8-*): bench (№10, ключ від нього не залежить), packed, cousin’s, grandmas, Synevyr (власна назва, правило «Lake + назва» — e8s7l2 ек. 3), дистрактори bore, leaved, calling. **during** (№27) ключ не визначав, але слова в уроках немає — замінено: «Talking when you play – no!» / «talk when you play».

## 2. Відповіді (розв’язано до звірки з ключем; після правок — повторно)
Ключі первинної версії збіглися з моїми 28 з 28. У `gaps`/`choice` рушій зараховує лише позначений варіант, тож на кожен пропуск — пошук другої правильної BrE-відповіді:

| № | Тема | Ключ ↔ дистрактори | Друга правильна? |
|---|---|---|---|
| 1 | ppadv | already (I did it this morning) / yet / since | ні («just» не варіант) |
| 2 | forsince | since 2022 / for / from | ні |
| 3 | ingadj | bored / boring / bore | ні |
| 4 | compmod | ₴300 ↔ ₴310 → a bit / much / very | ні |
| 5 | enough | old enough / enough old / too old (14, «14 and over») | ні |
| 6 | pastc | was riding / were riding / was ride | ні |
| 7 | said | told me / said / say | ні |
| 8 | pass | pancakes are / is / be | ні |
| 9 | must | mustn’t (sign «No running!») / don’t have to / must | ні |
| 10 | if | are / will be / were | ні («If you were tired, have a rest» — неграматичне змішування) |
| 11 | ppadv | yet (haven’t … ); just (look, it’s on top!); already | ні («already put» не варіант) |
| 12 | cur-e8s1 | has been painting ↔ is painting (for three hours, e8s1l2 ек. 8); Has ↔ Is; since one o’clock | ні; TQ-142 не зачеплено (paint — не live/learn/work, «has painted» не варіант) |
| 13 | forsince | **після правки:** has had ↔ has; for ↔ since; has been ↔ is (since 2015) | ні; had і be — стативні, PPC не виникає (TQ-142) |
| 14 | cur-e8s2 | enjoy ↔ want cycling; decided to join ↔ joining; hope to ride ↔ riding | ні |
| 15 | ingadj | exciting, interested (in), tiring | ні |
| 16 | cur-e8s3 | she ↔ I; was ↔ is; couldn’t ↔ can’t. Body: Daryna вже здорова, концерт минув — «is / can’t» хибні не через backshift-правило, а за змістом | ні; TQ-144 не зачеплено (сказане вже неправда) |
| 17 | compmod | ₴60 ↔ ₴120 → much; 10 ↔ 12 хв → a bit; as ↔ than | ні |
| 18 | cur-e8s4 | **❌ до правки:** «Halyna plays in a band {*which\|who} practises…» — band — collective human noun; CD Grammar «Relative pronouns»: «We often use who with collective human nouns (e.g. committee, government, group, panel, police, team)» (https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns). Хибний варіант «who» — правильний | **виправлено:** «Halyna’s band practises in a room {*which\|who} is next to our gym.» Решта: the boy who; an old piano which («that» не варіант) |
| 19 | enough | **після правки:** too ↔ enough (young); old enough ↔ enough old; too high to climb ↔ climbing | ні |
| 20 | cur-e8s5 | had started ↔ has started ↔ started (6.00 ↔ 6.20 — «started» означало б одночасність); had ↔ has; left ↔ leaved | ні (left видно в body — опора, не помилка) |
| 21 | pastc | **❌ до правки:** «While Andrii and Sofiia {*were walking\|walked} by the river, Sofiia took lots of photos» — while + Past Simple для двох паралельних тривалих дій граматичне (OALD while: «Shoes mended while you wait»; CD Grammar while: «Can you wait in the car while I run into the shop?» — https://www.oxfordlearnersdictionaries.com/definition/english/while_1, https://dictionary.cambridge.org/grammar/british-grammar/while); body лише позначає дію як long, що «walked» не відсікає | **виправлено:** дистрактор «was walking» (узгодження з they, e6s4l4 ек. 3). Решта: was taking ↔ took (body: taking photos — long), called ↔ was calling (short) — відсічено контекстом, як dge7 №26 |
| 22 | cur-e8s6 | May ↔ Am; to write ↔ write; aren’t ↔ don’t | ні («Can/Could I» не варіанти) |
| 23 | said | told ↔ said me; his ↔ my; said ↔ told it was red | ні; «had a new bike» не пропуск (TQ-144) |
| 24 | cur-e8s7 | **після правки:** Lake Synevyr ↔ the Lake Synevyr; the Black Sea ↔ Black Sea; Dnipro ↔ the Dnipro («stay in my cousin’s flat» — місто) | ні |
| 25 | pass | are made / made / is made; are served / serve / is served; was built / built / were built | ні |
| 26 | cur-e8s8 | **після правки:** had ↔ would have; would travel ↔ will travel (Taras dreams — уявне); lived ↔ would live | ні; be немає — was/were не виникає |
| 27 | must | have to ↔ don’t have to; don’t have to ↔ mustn’t; mustn’t ↔ don’t have to | ні («must» не варіант) |
| 28 | if | **після правки:** are ↔ will be; go ↔ goes; is ↔ will be | ні |

Перевірка «одне завдання не підказує інше»: жодне body/text не показує ключ іншого завдання (у тесті рівня після відповіді ключ не показують). Єдиний випадок «ключ на екрані поруч» — у первинному №19 («Oksana is old enough» поруч із пропуском old enough) — прибрано правкою. Назви тем (`topics[].title`, напр. «The Dnipro, Kyiv, Hoverla», «May I…? Are we allowed to…?») рушій показує лише на екрані результатів (app/app.js, renderDiagEnd / рядок 529), не під час тесту — не підказка.
AmE-написання серед хибних варіантів немає; літер A/B/C, позиційних посилань, «Listen», IPA немає.

## 3. Опора (D-019): урок → екран
Усі `lessons` існують (validate — 0 помилок), кожен вчить саме того, що перевіряє тема; `for` збігається з requires розділів 8 кл. (за нотатками автора, вибірково звірено):

| Тема | Урок | Екрани з правилом |
|---|---|---|
| ppadv | e7s1l2; e7s1l3 | l2 ек. 3 (just), 6 (already, «I did it at ten this morning» ек. 7); l3 ек. 3, 6 (yet / already) |
| forsince | e7s1l4 | 3 (for / since), 5 (have had, have known, has been; «Not: I live here since 2020») |
| ingadj | e7s4l4 | 3 (-ed / -ing, interested in, tired – tiring) |
| compmod | e7s4l5 | 3 (much / a bit, «Not: very better»), 6 (not as … as, «Not: as … than») |
| enough | e7s4l6 | 3 (old enough to, too + adj + to, «Not: enough old») |
| pastc | e6s4l4; e6s4l5 | l4 ек. 3 (was / were + -ing); l5 ек. 3 (long ↔ short, when / while) |
| said | e6s8l5 | 3 (told + person, said), 5 (I → he, my → his) |
| pass | e6s3l2; e6s7l3 | l2 ек. 3 (is / are made, is served); l3 ек. 3 (was / were built), 4 |
| must | e6s6l4; e6s5l5 | l4 ек. 3, 6 (mustn’t ↔ don’t have to); l5 ек. 3 (have to) |
| if | e6s8l3 | 3 (If + Present Simple, imperative, no will after if) |
| cur-e8s1 | e8s1l2 | 3 (have / has been + -ing), 5 (How long…? for / since), 8 («Not: I’m learning … for five years») |
| cur-e8s2 | e8s2l3 | 3 (enjoy + -ing; want, decide, hope + to) |
| cur-e8s3 | e8s3l4 | 3 (am → was, can → could, I → she), 6 (still true — обидві; минула подія — past) |
| cur-e8s4 | e8s4l3 | 3 (people → who / that; things → which / that) |
| cur-e8s5 | e8s5l4 | 3 (had + third form), 5 (leave – left – left) |
| cur-e8s6 | e8s6l4 | 3 (May I…? — very polite), 6 (are allowed to; Are we…? – No, you aren’t) |
| cur-e8s7 | e8s7l2 | 3 (the + rivers, seas; no article + cities, lakes «Lake Svitiaz», one mountain), 6 (the Dnipro — river ↔ Dnipro — city) |
| cur-e8s8 | e8s8l5 | 3 (if + Past Simple → would + verb, «Not: If I would live») |

## 4. Факти (відкрито в цій сесії)
| Твердження | Джерела | Вердикт |
|---|---|---|
| Lake Synevyr — озеро в Українських Карпатах (Закарпаття), навколо є стежка; купатися заборонено (тому «walk around», не «swim») | https://en.wikipedia.org/wiki/Synevyr («the largest lake in the Carpathian Mountains of Ukraine», «a scenic path around the lake», «Swimming … prohibited»); WebSearch: https://www.takeyourbackpack.com/backpacking-in-ukraine/hike-synevyr-lake-trail/, https://outdoorukraine.com/en/1917 | ✅ |
| St Sophia’s Cathedral — у Києві | https://en.wikipedia.org/wiki/Saint_Sophia_Cathedral,_Kyiv; WebSearch: https://whc.unesco.org/en/list/527 (Kyiv: Saint-Sophia Cathedral…) | ✅ |
| Kyiv — на Дніпрі («walk by the Dnipro») | https://en.wikipedia.org/wiki/Kyiv («straddles both banks of the Dnieper»); WebSearch: https://www.worldatlas.com/rivers/dnipro-river.html | ✅ |
| Dnipro — місто на однойменній річці | https://en.wikipedia.org/wiki/Dnipro; WebSearch: https://worldatlas.com/cities/dnipro-ukraine.html | ✅ |
| Odesa — на Чорному морі | https://en.wikipedia.org/wiki/Odesa; WebSearch: https://en.wikipedia.com/wiki/List_of_ports_in_Ukraine | ✅ |
Mr Bondar, Café Lypa, Café Sonia, Zelena Dolyna, міст 1912 р. — вигадані об’єкти канону, за реальні факти не видаються.

## 5. Форми й норма (словники, відкриті в цій сесії)
| Форма | Джерело | Вердикт |
|---|---|---|
| practise (дієслово) | CD https://dictionary.cambridge.org/dictionary/english/practise «practise verb UK (US practice)»; OALD https://www.oxfordlearnersdictionaries.com/definition/english/practise «practise (British English) (North American English practice)» | ✅ BrE |
| who з collective nouns | CD Grammar relative-pronouns (див. §2, №18) | підстава правки |
| while + simple form | OALD while_1, CD Grammar while (див. §2, №21) | підстава правки |
Решта BrE: flat, maths не вживається, holiday не вживається; AmE-лексики й правопису немає.

## 6. Авторське право (WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «I haven’t packed my toothbrush yet. But I’ve just put my chess book in» | збігу немає |
| «Our music teacher has given them an old piano which still sounds great» | немає |
| «couldn’t call Mum because she had left her phone at home» | немає |
| «Are we allowed to write in pencil in the test» | немає (лише довідки екзаменів, інший текст) |

## 7. Рівень, педагогіка, прогін
Рівень — A2+ → B1: речення до ~14 слів, граматика лише з уроків тем; інструкції однакові («Choose the correct answer.», «Fill in the gaps.»); `why` без «Year N»; `uk`, `fbText`, `hint` відсутні; ≤ 3 пропуски на `gaps`.
- `node tools/validate.mjs --diag dge8`: 0 помилок, 0 попереджень до й після правок.
- `node tools/euphony.mjs --diag dge8`: 0 відхилень.
- test-answer-ui / playtest не запускав: Python-модуля playwright у контейнері немає — CI. Build і commit не робив (за задачею).

## 8. Правки
Зроблені: №13, 18 (❌ друга правильна), 19, 21 (❌ правильний дистрактор), 24, 26, 27 (during → when you play, body і text), 28; status → verified, meta.factcheck, коментар-шапка.
Рекомендовані (не блокують): №20 body показує «left», тож пропуск left/leaved тривіальний — за бажанням автора замінити дієслово (forgotten, e8s5l4 ек. 5).
