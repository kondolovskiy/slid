# Верифікація: тест рівня dge10 (content/eng/diag-g10.js)

Верифікатор: verifier-write-eng-diag-g10, 2026-11-26/27. Задача: tasks/review/write-eng-diag-g10.md. Скіли: content-verify («Англійська»), math-pool-diag §2в. Еталони: reports/verify/write-eng-diag-g8.md, write-eng-diag-g9.md.

**Вердикт: `status: "verified"`.** Правки внесено в 9 завданнях (№14, 19, 21, 22, 23, 25, 26, 27, 28), а також у статус, meta і шапку. Неправильних ключів немає. Знайшов дві критичні проблеми: №22 (`build`) — в `answer` бракувало граматично правильного порядку; №26 — неточний факт («almost a day»). Решта правок — переодягнені копії рамок уроків з тим самим ключем (прецедент dge6–dge9) і одна підказка на екрані (№14). id тесту, id тем, порядок і кількість завдань (28) не змінено, тож `rev` не потрібен: dge10 ще не на main. Файли g10-*.js не чіпав, нових TQ немає. Build і commit не робив.

## 1. Дослівні збіги (власний скрипт n-грам)
Скрипт: `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-dge10/ng.cjs` (завантажувач `load.cjs`, дамп екранів `dump.cjs`). Що порівнює: body, text з розкритим ключем, **кожен варіант кожного пропуску**, opts і всі `answer` build. Проти чого: усі рядки екранів g4-*…g10-* (зокрема розкриті gaps уроків) і всі завдання dge4–dge9.
- 6-грами: 0 — і до правок, і після.
- 5-грами до правок — 3, після — 5. Усі вони — службові або побутові звороти, не рамки з ключем: «put the words in order» (інструкція), «to take part in the», «train to lviv leaves at» (e6s5l2, розклад потягів, інша тема), «in the park every morning» (e10s2l1 ек. 5, інша тема), «oksana writes about her village» (e5s7l2, there is/are). Автор писав, що 5-грам 0. Насправді є 3, але жодна не стосується ключа.
- 4-грами: рамки інструкцій та імен, «if I were you», «what should I do» (функціональні формули теми).
- Після правки №25 спершу знайшлася 4-грама «I’ve got a maths test» ← dge7 №21. Там та сама сцена: порада перед контрольною, «And you shouldn’t play computer games». Сцену замінив на змагання з карате.

**Переодягнені копії** (та сама рамка й ключ, ті самі дистрактори). Скрипт їх не ловить, тож кожне завдання я звірив вручну з повним дампом екранів уроку теми:

| № | Тема | Копія чого | Правка |
|---|---|---|---|
| 19 | phrv | e8s2l4 ек. 5: «Dmytro {*took up\|gave up} football last year, and now he plays… Mum {*gave up\|took up} sugar… we all {*get up\|work out}…». У тесті — та сама послідовність речень і пар: «Last autumn, I {took up} basketball, and now I go… I {gave up} chocolate bars… I {work out\|get up}» | «In January, I {*gave up\|took up} burgers and cola, and now I feel much better. My dad {*works out\|gets up} in the park every morning before work. I wanted to get fit too, so in March I {*took up\|gave up} basketball.» |
| 21 | cur-e10s3 | e10s3l6 ек. 5: «In Vinnytsia, Orysia {*used to\|…\|was used to} walk to school. Now she takes a bus, and she isn’t used to… But she’s getting used to…» — скелет речення за реченням (місто → used to + рух → тепер їздить транспортом → not used to → getting used to), той самий дистрактор was used to. Автор прибрав лише «walk to school» | «In Leeds, Ben {*used to\|was used to} speak only English at school. Now he goes to a school in Lviv, and at first he {*wasn’t used to\|didn’t use to} reading and writing in Ukrainian. But now he’s {*getting used to\|get used to} it.» |
| 23 | cur-e10s4 | e10s4l5 ек. 6: Oksana із Zelena Dolyna, «The workers will have repaired it {*by\|until} Friday… closed {*until\|by}». У тесті — та сама оповідачка, те саме село, workers і та сама пара until/by | Оповідач і місце: «Mykyta writes about the new playground near his school.» Граматика й ключі ті самі (by/until — бінарна тема) |
| 25 | cur-e10s6 | e10s6l5 — уся сцена «Tech help»: Bohdan «play games on my phone till midnight» (ек. 1). Ек. 4: «I {*wouldn’t\|won’t\|don’t} open that link» | Нова сцена: «I’ve got a karate competition on Saturday, and I’m really nervous… I’d ask your coach for some extra training if I {*were\|am\|will be} you. And I {*wouldn’t\|won’t\|didn’t} stay up late on Friday.» |
| 27 | cur-e10s7 | e10s7l5 ек. 12 (фінал): «cancelled {*due to\|because} the storm… {*Therefore\|Because}, … so {*that\|than} we can». У тесті — та сама послідовність (причина-іменник/погода → Therefore → so that + can) і та сама тема: погода скасовує | «The village library is closed this week {*owing to\|because} the repairs. The roof was very old. {*Therefore\|Because\|Although}, workers are putting on a new one. The librarian is bringing books to our school {*so that\|due to} we can still read them.» |
| 28 | cur-e10s8 | e10s8l3 ек. 1–2, 7: Zoriana, форма на курс програмування, «Mum says I shouldn’t put it off», «Don’t put it off!», «preparing for the NMT». Ключ «it off» дослівно стоїть у сюжеті уроку з тією самою героїнею | «Vadym wants to join the school photo club… he didn’t put {*it off\|off it}… a short interview for new members, and he’s preparing {*for it\|it for}. His friend Mykyta… He’ll fill {*in his form\|in it} after dinner.» |

Ці завдання залишив як паралельні: зміст у них новий, а збігається лише мінімальна граматична пара теми (за прецедентом dge8/dge9):
- №1: визначення honest = «always tells the truth». Це саме значення слова (e6s1l4 ек. 3, 9), а для базового лексичного завдання це прийнятно.
- №12: before / as soon as / until за таймлайном; e10s1l4 ек. 6, 10 — інший сюжет.
- №15: had been -ing / had + 3-тя форма / «hands were black because…». Кожен пропуск паралельний одному з екранів e10s5l4 (ек. 7, 8, 10), але сюжет новий (ремонт велосипеда). Межовий випадок: якщо вчитель вважатиме це копією, переписати пропуск 1.
- №16: passive by; e7s7l2 ек. 5 — інший зміст, плюс активний дистрактор.
- №17: finish / want / hope — список правила e8s2l3 ек. 3.
- №18: stop to / remember -ing / forget to — e10s2l4, новий сюжет.
- №20: used to для станів / would для дій.
- №24: if + Past Simple → would.
- №26: Although / However — e9s9l4 ек. 3–4.

Лексика (`vocab.cjs`: слова, яких немає в g4-*…g10-*). Усі нові слова правок є в уроках: burgers, cola, fit, karate, competition, coach, training, repairs, roof, librarian, interview, members, application, called. Слова «phoned», «builders» і «alphabet» в уроках відсутні, тому їх не брав.

## 2. Відповіді (розв'язано самостійно до звірки з ключем; після правок — ще раз)
Мої відповіді збіглися з ключем у всіх 28 завданнях. Нижче — друга правильна BrE-відповідь у кожному пропуску:

| № | Тема | Ключ ↔ дистрактори | Друга правильна? |
|---|---|---|---|
| 1 | pers | honest ↔ lazy, shy | ні |
| 2 | pastperf | had finished ↔ has finished, finishes | ні («finished» не варіант) |
| 3 | pastcont | were watching ↔ was / are watching | ні |
| 4 | usedto | used to have long ↔ use to; short (суперечить body) | ні |
| 5 | ingto | to try ↔ trying, try | ні |
| 6 | phrv | gave up ↔ took up, worked out (+ «eats apples instead») | ні |
| 7 | fut | are going to ↔ going to, is going to (will не варіант) | ні |
| 8 | cond | catches ↔ will catch, caught | ні |
| 9 | link | so cold ↔ such cold, so a cold | ні |
| 10 | pass | was made ↔ made, was make | ні |
| 11 | pers | open-minded; easy-going; self-confident | ні (описи — з e9s1l2 ек. 3, 5) |
| 12 | cur-e10s1 | before (5.30 → 6.00); as soon as (9.00 → 9.01); until | ні (as soon as для 30 хв — хибне; after — хибне за таймлайном) |
| 13 | pastperf | was raining; had taken (the day before); put on | ні |
| 14 | pastcont | was reading; rang; was talking | ні (**правка:** body «her phone rang» показував ключ пропуску 2, тепер «her friend called her») |
| 15 | cur-e10s5 | had been working (for four hours); had repaired (скільки — e10s5l4 ек. 8); had been cleaning | ні |
| 16 | pass | were painted; finished; was built | ні |
| 17 | ingto | doing; to go; to take | ні |
| 18 | cur-e10s2 | to rest; racing (спогад); to put on | ні («remember to race … on the last day» за змістом відпадає) |
| 19 | phrv | **після правки:** gave up burgers; works out in the park; took up basketball | ні (протилежні значення за змістом абсурдні) |
| 20 | usedto | used to be (стан); would bring; used to know (стан) | ні («used to bring» не варіант; would для станів — хибне, e9s1l4 ек. 3) |
| 21 | cur-e10s3 | **після правки:** used to speak; wasn’t used to reading; getting used to | ні (was used to + verb, didn’t use to + -ing, he’s get — неграматичні) |
| 22 | fut (build) | див. нижче | **❌ → виправлено** |
| 23 | cur-e10s4 | will have built; until 1 May; will have played | ні («will build» не варіант; e10s4l5 ек. 3 його дозволяє) |
| 24 | cond | had; would let; would take | ні |
| 25 | cur-e10s6 | **після правки:** were; wouldn’t; makes | ні («If I was you» не варіант; won’t/didn’t — не порада) |
| 26 | link | Although; However, | ні (Because… — хибне за змістом; «So,» — не наслідок) |
| 27 | cur-e10s7 | **після правки:** owing to + іменник; Therefore,; so that + can | ні (because + іменник, «Because, …», «Although, …», due to + речення — неграматичні) |
| 28 | cur-e10s8 | **після правки:** it off; for it; in his form | ні (off it, it for, fill in it — неграматичні, e10s8l4 ек. 3, 7) |

**№22, build (критично).** Плитки: I’ll / be / sitting / on the train / then. В `answer` були два порядки. Пропущено третій граматично правильний: «I’ll then be sitting on the train.» Це then у середній позиції в значенні «at that time». CD подає then «at that time (in the past or in the future): She was then sixteen years old» (https://dictionary.cambridge.org/dictionary/english/then). OALD подає «used to refer to a particular time in the past or future… or Rhodesia as it then was» (https://www.oxfordlearnersdictionaries.com/definition/english/then_1). Додав цей порядок в `answer`. Порядок «I’ll be sitting then on the train» не додавав: там прислівник часу стоїть перед обставиною місця, тож у BrE порядок ненормативний.

«Одне завдання не підказує інше»: ключ жодного завдання не видно в body чи text іншого. Єдина підказка була в межах одного завдання — body №14 (виправлено). AmE-написань серед хибних варіантів немає. Літер A/B/C, позиційних посилань, «Listen», IPA, `uk`, `fbText` і `hint` немає. Скрізь ≤ 3 пропуски; build — 5 плиток + 1 пастка (межа ≤ 7).

## 3. Опора (D-019): урок → екран
Усі `lessons` існують (validate — 0 помилок). `for` збігається з `requires` розділів 10 кл. Звірено з дампом екранів:

| Тема | Урок | Екрани з правилом |
|---|---|---|
| pers | e6s1l4; e9s1l2 | e6s1l4 ек. 3 (honest → always tells the truth); e9s1l2 ек. 3 (open-minded, easy-going, self-confident, bad-tempered), 5 (протилежності) |
| pastperf | e8s5l4; e8s5l5 | l4 ек. 3, 5 (had + 3-тя форма; take – took – taken); l5 ек. 3 (тло / події / раніше) |
| pastcont | e6s4l4; e6s4l5 | l4 ек. 3 (was/were + -ing); l5 ек. 3 (when + коротка, while + довга) |
| usedto | e7s5l3; e9s1l4 | e7s5l3 ек. 3, 6; e9s1l4 ек. 3 (would — лише дії; used to — дії й стани) |
| ingto | e8s2l3 | ек. 3 (finish + -ing; want, decide, hope + to) |
| phrv | e8s2l4 | ек. 3 (take up, give up, get up, work out; минулі форми) |
| fut | e9s2l3; e9s2l4 | e9s2l3 ек. 3 (going to за ознаками); e9s2l4 ек. 3 (will be + -ing, «at 8 pm on Saturday») |
| cond | e7s6l3; e8s8l5 | e7s6l3 ек. 3 (if + Present Simple, will); e8s8l5 ек. 3 (if + Past Simple → would) |
| link | e9s3l4; e9s9l4 | e9s3l4 ек. 3, 5 (so + adj + that; not so a); e9s9l4 ек. 3 (Although — одне речення; However — нове + кома) |
| pass | e7s7l2 | ек. 3 (was/were + 3-тя форма + by) |
| cur-e10s1 | e10s1l4 | ек. 3 (as soon as / before / until), 6 |
| cur-e10s2 | e10s2l4 | ек. 3 (stop + to), 5 (remember + -ing — спогад; forget + to) |
| cur-e10s3 | e10s3l6 | ек. 3 (used to + verb; be / get used to + -ing) |
| cur-e10s4 | e10s4l5 | ек. 3 (will have + 3-тя форма), 5 (by ↔ until) |
| cur-e10s5 | e10s5l4 | ек. 3, 6 (had been -ing, how long), 8 (how many → had + 3-тя форма) |
| cur-e10s6 | e10s6l5 | ек. 3 (If I were you, I’d / I wouldn’t), 6 (That makes sense) |
| cur-e10s7 | e10s7l5 | ек. 3 (owing to + іменник), 6 (Therefore,), 8 (so that + can) |
| cur-e10s8 | e10s8l4 | ек. 3 (займенник усередині: fill it in; іменник — обидва місця), 7 (prepare for it). Значення put off — e10s8l3 ек. 3 (той самий розділ, урок раніше), а позицію займенника вчить e10s8l4 |

**Відсутні теми** (opinions / discussion e9s9l1, e9s9l3; for/since e7s1l4; jobs e9s7l1, e9s7l5; країнознавство) — прийнятно:
- Формули думки в gaps майже неминуче дають другу правильну відповідь (I think / In my opinion / I believe).
- for/since наскрізно повторено в 10 кл. (e10s8l5; for + період — e10s5l4 ек. 3), тож тест його зачіпає (№15 «for four hours»).
- jobs і країнознавство — лексика без граматичної передумови для розділів 10 кл. (`for` тем має збігатися з requires).
- Покриття `requires` розділів 10 кл. повне: кожен розділ e10s1–e10s8 має ≥ 1 тему `pre`.

## 4. Факти (відкрито в цій сесії)
| Твердження | Джерела | Вердикт |
|---|---|---|
| №26 (до правки): «The journey [Kharkiv → Lviv] takes almost a day» | WebSearch: https://proizd.ua/en/from/2204001/to/2218000 (≈ 13,5–16 год, 1083 км), https://www.rome2rio.com/s/Kharkiv/%D0%91%D1%80%D1%8E%D1%85%D0%BE%D0%B2%D0%B8%D1%87%D1%96-%D0%9F%D0%B0%D0%BD%D1%81%D1%96%D0%BE%D0%BD%D0%B0%D1%82-%D0%9B%D1%8C%D0%B2%D1%96%D0%B2 (14 год 44 хв), https://www.omio.com/trains/kharkiv/lviv (найшвидше ≈ 13 год) | ⚠️ неточно (типово 13–16 год) → **виправлено:** «The train journey takes many hours.» |
| Lviv далеко від Kharkiv (захід ↔ північний схід) | https://en.wikipedia.org/wiki/Lviv («largest city in the western part»), https://en.wikipedia.org/wiki/Kharkiv («in the northeast»); proizd.ua вище (1083 км залізницею) | ✅ |
| Лижі в Українських Карпатах (№18) | WebSearch: https://www.skiresort.info/ski-resorts/ukrainian-carpathians, https://www.lonelyplanet.com/articles/spotlight-on-skiing-in-ukraines-carpathians-this-winter | ✅ |
| Leeds — місто в Англії (№21) | https://en.wikipedia.org/wiki/Leeds («a city in West Yorkshire, England»); WebSearch: https://www.britannica.com/place/Leeds-England | ✅ |

Решта — вигадані люди, місця й об'єкти: Zelena Dolyna, бібліотека, майданчик, фотоклуб, Motria, Yurii. За реальні факти вони себе не видають. Реальних установ і правил у тесті немає.

## 5. Форми й норма (словники, відкриті в цій сесії)
| Форма | Джерело | Вердикт |
|---|---|---|
| then = at that time, середня позиція | CD then; OALD then_1 (цитати — §2, №22) | ✅ (→ правка №22) |
| put off (put it off), stay up | У e10s8l3 ек. 3 put off подано як phrasal verb («decide to do something later»); позиція займенника — e10s8l4 ек. 3. Посилання автора на CD stay-up / put-off у нотатках задачі | ✅ |

BrE: crisps, flat, Grandad, came round, sun cream, half past nine, «5.00 pm» (TQ-123 «Як зараз»), лапки “ ” (TQ-122). AmE-лексики й AmE-правопису немає.

## 6. Авторське право (WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «always wants to try food from other countries, and he’s happy to hear other people’s ideas» | збігу немає |
| «I looked for my umbrella, but I couldn’t find it» + «had taken it» | немає |
| «On the way up the mountain, we were tired, so we stopped to rest» | немає |
| «Every Friday, he would bring us sweets from the bus station» | немає |

## 7. Рівень, педагогіка, прогін
- Рівень B1+ → B2: Future Perfect, Past Perfect Continuous, be/get used to, verb + -ing/to зі зміною значення, формальні owing to / therefore. Речення ≤ ~20 слів, інструкції однакові, `why` без «Year N». Чутливого змісту немає.
- `node tools/validate.mjs --diag dge10`: 0 помилок, 0 попереджень (до правок і після).
- `node tools/euphony.mjs --diag dge10`: 0 відхилень.
- test-answer-ui і playtest не запускав: Python-модуля playwright у контейнері немає, їх прожене CI (job browser).

## 8. Правки
Зроблено:
- №22: третій порядок в `answer` (❌ друга правильна відповідь).
- №26: неточний факт «almost a day» (⚠️).
- №14: body показував ключ.
- №19, 21, 23, 25, 27, 28: копії рамок уроків.
- status → verified, meta.factcheck, шапка.

Рекомендовано (не блокує): №15 — межовий паралелізм з e10s5l4 ек. 7 (§1). Якщо вчитель англійської вважатиме це копією, переписати пропуск 1 на іншу рамку часу.
