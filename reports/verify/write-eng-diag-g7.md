# Верифікація: тест рівня dge7 (content/eng/diag-g7.js)

Верифікатор: verifier-write-eng-diag-g7, 2026-11-25/26. Задача: tasks/review/write-eng-diag-g7.md. Скіли: content-verify (розділ «Англійська»), math-pool-diag §2в. Еталон: reports/verify/write-eng-diag-g6.md.

**Вердикт: `status: "verified"`. Змістових правок дві (№17, №27), плюс статус і meta.** Неправильних ключів, другої правильної відповіді й завдань без опори я не знайшов. Порядок і кількість завдань (27) я не змінював, id тесту й тем теж. Тест ще не опублікований: коміт b3aa97a є лише в гілці `claude/eng-g7-11`, на main його немає. Тому `rev` не потрібен. Питань до людини немає, TQ не додавав.

## 1. Дослівні збіги з уроками (скрипт n-грам)
Скрипт: `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-dge7/ngram.mjs`. Він звіряє body, text і opts кожного завдання з усіма екранами g4-*…g7-*, n = 6, 5, 4. Файли g7-* взято в поточному стані робочого дерева, з правками style-sync.
- **6-грам — 0.** 5-грами лише на рамках: «got a cold. What does…» (e4s5l7), «Which sentence is correct? If…» (e6s8l3, e7s6l3), «built in the 19th century» (e6s7l3, тут лише інше століття).
- 4-грами — граматичні рамки, які завдання саме й перевіряє («Did you use to», «Do I have to», «if it is sunny», «has had a sore throat», «cost the same as»), та службові («What does she say?»). Паралельні завдання з новим змістом, як-от №8, №18, №19, №23, №24, №26, я лишив без змін, за прецедентом dge6.

| № | Тема | Знахідка | Правка |
|---|---|---|---|
| 17 | made | «The plum cake {*is\|are} made with plums…» копіює e6s3l2 ек. 11 «My mum’s apple cake {*is\|are} made with apples»: та сама рамка, той самий ключ і той самий дистрактор, змінено лише фрукт (PITFALL verifier-pe4s1, verifier-pe5s10) | «The fruit salad {*is\|are} made with apples, pears and bananas.» (fruit salad — e6s3, pears — e6s2) |
| 27 | if | Завдання №10 (choice) показує «If you go to Lviv, visit the old town.», а №27 питав «If you {come} to Lviv, {visit} the old town». Перше підказувало відповідь на складніше завдання тієї самої теми. До того ж це рамка e6s8l3 ек. 5 («If you {like} …, {visit\|visits} …») | Новий контекст: «Emma is going to visit Oksana in Zelena Dolyna in January. Oksana gives her advice.» → «If you {*are\|will be} hungry, {*try\|tries} Grandma Hanna’s deruny. If it {*snows\|will snow}, wear warm boots.» Залишковий 4-грам «if you are hungry» — половина `match` e6s8l3, там це не пропуск |

Скрипт лексики (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-dge7/vocab.mjs`) не знайшов в уроках 4–7 кл. таких слів: nuts, onions, dragons (назва фільму), weekends (є «weekend»), cleaned, taken (дистрактор). Від жодного з них ключ не залежить, тож це не ⚠️.

## 2. Відповіді (розв’язано самостійно; ключі збіглися 27 з 27)
У `gaps` і `choice` рушій зараховує лише позначений варіант. Тому для кожного пропуску я окремо шукав другу правильну BrE-відповідь:

| № | Тема | Ключ ↔ дистрактори | Друга правильна? |
|---|---|---|---|
| 1 | ever | has / have / is | ні |
| 2 | ppps | visited … two days ago | ні: «has visited … ago» хибне за e6s7l5 ек. 5 |
| 3 | irr | came / comed / comes (yesterday) | ні |
| 4 | made | are (biscuits) | ні |
| 5 | built | was / were / is (in 1965) | ні |
| 6 | should | hot tea and rest; без пальта — погана порада; should to — неграматичне | ні |
| 7 | haveto | has to / have to / has | ні |
| 8 | too | 35 < 37 → too small; «very big» хибне | ні |
| 9 | pastc | were watching | ні |
| 10 | if | If you go… | ні |
| 11 | ever | Have; haven’t; never («have ever been» у ствердженні неграматичне) | ні |
| 12 | cur-e7s1 | Have; No, not yet (No, already — безглуздо); already («I’ve yet watered» неграматичне) | ні |
| 13 | ppps | climbed (після ever); climbed ↔ have climbed (last summer); was ↔ has been | ні |
| 14 | cur-e7s2 | be roasted / be cut / be baked; «should cut» без be — неграматичне з onions як підметом; «be roast» — OALD дає лише roasted | ні |
| 15 | irr | went, saw, had | ні |
| 16 | cur-e7s3 | has had (since Sunday); took (On Monday); for (three days). Середа: пн–ср = 3 дні, узгоджено | ні |
| 17 | made | are; is; is served | ні |
| 18 | cur-e7s4 | 100 ↔ 105 хв → a bit (much — велика різниця, e7s4l5 ек. 3); as ↔ than; as ↔ like | ні |
| 19 | built | were; were built; in the | ні |
| 20 | cur-e7s5 | used to; Did; didn’t | ні |
| 21 | should | Should I read; should ↔ do; shouldn’t (перед тестом) | ні |
| 22 | cur-e7s6 | is; will have; won’t (had / didn’t — минуле для майбутнього плану) | ні |
| 23 | haveto | Do; do ↔ are; doesn’t ↔ don’t | ні |
| 24 | too | too ↔ to; small (книжки не вміщаються); the grey one (₴850 ≤ ₴900, книжки вміщаються) | ні |
| 25 | cur-e7s7 | Was ↔ Did; was the school rebuilt ↔ the school was rebuilt; wasn’t ↔ didn’t | ні |
| 26 | pastc | was reading; when; came. «while Dad was coming» граматичне, але body позначає повернення як коротку дію (short), а «while + коротка дія» хибне за e6s4l5 ек. 3, 8 | ні: контекст відсікає |
| 27 | if | are; try; snows | ні |

AmE-написання серед хибних варіантів немає. Літер A/B/C і позиційних посилань немає, «Listen» і IPA теж немає.

## 3. Опора (D-019): урок → екран
Усі `lessons` існують, validate дає 0 помилок, і кожен урок навчає саме того, що перевіряє тема:

| Тема | Урок | Екрани з правилом |
|---|---|---|
| ever | e6s7l4 | 3 (have / has been, never), 4 |
| ppps | e6s7l5 | 3 (have + третя форма), 5 (PP ↔ PS, «two days ago», «last summer») |
| irr | e6s3l4 | 3 (came, went, saw, had…) |
| made | e6s3l2 | 3 (is / are made with, is served) |
| built | e6s7l3 | 3 (was / were built, When was it built?), 4 (in the Nth century) |
| should | e6s6l5 | 3 (should + verb, no to), 5 (Should I…? – Yes, you should) |
| haveto | e6s5l5 | 3 (has to / don’t have to), 5 (Do I have to…? – Yes, you do; Does … – No, she doesn’t) |
| too | e6s2l6 | 3 (too + adjective, very ↔ too, «Not: It’s to big»), 7 (I’ll take the blue one = the blue T-shirt) |
| pastc | e6s4l4; e6s4l5 | l4 ек. 3 (was / were + -ing); l5 ек. 3 (довга дія ↔ коротка, when / while) |
| if | e6s8l3 | 3 (If + Present, імператив; no will after if) |
| cur-e7s1 | e7s1l3 | 3 (yet у питанні, No, not yet), 6 (already ↔ yet) |
| cur-e7s2 | e7s2l4 | 3 (can / should / must + be + третя форма), 6 (roasted, cut, baked, served) |
| cur-e7s3 | e7s3l4 | 3 (since / for), 5 (PS для finished time ↔ PP для How long) |
| cur-e7s4 | e7s4l5 | 3 (much / a bit), 6 (as … as, not as … as, the same as, «Not: the same like, as … than») |
| cur-e7s5 | e7s5l3 | 3 (used to), 6 (didn’t use to, Did you use to…? – No, I didn’t) |
| cur-e7s6 | e7s6l3 | 3 (If + Present, will), 6 (won’t) |
| cur-e7s7 | e7s7l3 | 5 (Was it destroyed? When was it rebuilt? wasn’t; «Don’t use did») |

`for` збігається з `requires` розділів 7 кл.: e7s1 → e6s7l4, e6s7l5, e6s3l4, e6s5l5; e7s2 → e6s3l2, e6s6l5; e7s3 → e6s6l5, e6s5l5, e6s7l5; e7s4 → e6s2l6; e7s5 → e6s3l4, e6s4l4, e6s4l5; e7s6 → e6s8l3; e7s7 → e6s7l3, e6s3l2.

**Покриття ядра `cur` (CONTENT_SCHEMA §9):** у e7s1l3 не перевірено «haven’t … yet» у запереченні, у e7s4l5 — «even» (питання автора). Межа тесту — 3 пропуски на `gaps`. Обидва пропуски перевіряють те саме вміння, що й наявні пропуски (вибір already ↔ yet; модифікатор порівняльного ступеня much ↔ a bit). Тому це прийнятно, не ⚠️.

## 4. Відкриті питання автора
- **Порівняльні 5 кл. (e5s5l3–l4 у requires e7s4):** 11-ту тему не додаю. Порівняльні вже перевіряє dge6 (тема `comp`, e5s10l4–l5), а №18 сам спирається на порівняльний ступінь (shorter than). Пропуск лише робить тест коротшим, змісту не спотворює.
- **even у e7s4l5:** див. §3, прийнятно.
- **Вигадані дати** (школа в Zelena Dolyna 1890 / 1975 / 2005, школа Марії в Kharkiv 1965, будинки на вулиці Тараса, XIX ст.): усі стосуються вигаданих об’єктів канону, без назв реальних будівель, тож за факти не видаються. Збігів з датами в уроках немає (grep «1965|1890|1975|2005» по content/eng знайшов лише g9-e9s3, там інший контекст). «Destroyed by a fire» для 7 кл. не лякає. Суперечностей з каноном не знайшов: Mariia — Kharkiv, Vlad «prefers volleyball to tennis» (e6s4), Grandma Hanna — бабуся Оксани (e6s3l2).

## 5. Факти (відкрито в цій сесії)
| Твердження | Джерела | Вердикт |
|---|---|---|
| Hoverla — гора в Україні, на неї сходять улітку (№13) | https://en.wikipedia.org/wiki/Hoverla (2061 m, Chornohora, літній маршрут від Zarosliak); https://uk.wikipedia.org/wiki/Говерла (найвища гора України, популярна для літнього туризму); WebSearch: https://karpaty.rocks/en/node/25063 (маршрут Zaroslyak — Hoverla) | ✅ |
| У Lviv є old town (№10) | https://en.wikipedia.org/wiki/Old_Town_(Lviv) (історичний центр, ЮНЕСКО 1998); WebSearch: https://whc.unesco.org/en/decisions/2784 (рішення ЮНЕСКО, сам сайт з сесії не резолвиться) | ✅ |
Britannica і whc.unesco.org із цього середовища не резолвляться.

## 6. Форми й норма (curl, словники відкрито в цій сесії)
| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| roasted | https://dictionary.cambridge.org/dictionary/english/roast («Have these red peppers been roasted?») | https://www.oxfordlearnersdictionaries.com/definition/english/roast_1 («past participle roasted») | ✅ «be roast» хибне |
| rebuilt | …/english/rebuild («rebuilt \| rebuilt»; «was completely rebuilt… destroyed by fire») | …/rebuild («past participle rebuilt») | ✅ |
| at weekends | …/english/weekend («at the weekend UK… at weekends») | …/weekend («What do you usually do at weekends?») | ✅ BrE |
| Did you use to / didn’t use to | https://dictionary.cambridge.org/grammar/british-grammar/used-to («Did you use to work with Kevin Harris?») | …/used-to_2 («I didn’t use to like him much») | ✅ |
| not yet; a bit + comparative; the same as | — | …/yet_1 («No, not yet»), …/bit_1 («costs a bit more»), …/same_1 («the same as mine») | ✅ |
| biscuit (BrE) | …/english/biscuit (UK) | …/biscuit («(British English) a small flat dry cake») | ✅ |
Решта BrE: maths, the doctor, hot dog. AmE-лексики немає.

## 7. Авторське право (WebSearch з лапками)
| Фрагмент | Результат |
|---|---|
| «If it is sunny on Saturday, we will have a picnic by the river» | дослівного збігу немає |
| «The chicken must be roasted for an hour. The onions should be cut first» | немає |
| «has had a sore throat since Sunday» + «took her to the doctor» | немає |
| «Have your grandparents ever been to England» + «never been on a ferry» | немає |

## 8. Рівень, педагогіка, прогін
Речення не довші за 12 слів, граматика лише з уроків тем. Інструкції однакові («Choose the correct answer.», «Fill in the gaps.»). `why` без «Year N». `uk`, `fbText` і `hint` відсутні.
- `node tools/validate.mjs --diag dge7`: 0 помилок, 0 попереджень до правок і після них.
- `node tools/validate.mjs --quiet`: 0 помилок (236 попереджень, жодне не стосується dge7).
- `node tools/euphony.mjs --diag dge7`: зауважень немає.
- `python3 tools/test-answer-ui.py --diag dge7` не запускав: у контейнері немає Python-модуля playwright, прогін лишається для CI. Build і commit не робив (за задачею).
