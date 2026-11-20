# Верифікація: пул pe5s9 «Travel: places to see» (англійська, 5 кл.)

Верифікатор: verifier-pe5s9 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g5-e5s9.js` (автор writer-pe5s9, 65 вправ a01–a65) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Задача: tasks/review/write-eng-pool-g5-e5s9.md. Зміст звіряв з уроками content/eng/g5-e5s9.js (verified) і reports/verify/e5s9.md.

**Вердикт: пул придатний, `status: "verified"`.** Блокувальних знахідок (неправильна відповідь, друга правильна відповідь, вправа без опори, збіг з опублікованим текстом) немає. Правок 4 (дрібні, зроблені мною): дві суперечності героїв усередині пулу (a08, a09) і два задовгі пояснення (a15, a36). Людині — нічого; TQ не додавав.

## 1. Прогін

| Перевірка | Результат |
|---|---|
| `node tools/validate.mjs --pool pe5s9` | 0 помилок, 0 попереджень (до й після правок) |
| `node tools/personalization-qa.mjs --pool pe5s9 --strict` | до правок — лише «ще не verified»; після `verified` — без зауважень. Кожна пара урок × `sk` (20 пар, l1–l6) — ≥ 3 вправи, рівні 1, 2, 3 є в кожній |
| `build` — усі перестановки всіх підмножин плиток з `extra` через `SLID_LANG.check(s, perm, "en")` (app/lang.js у node vm), по 1956 станів | a29 → 1 (ключ); a38 (keepCase) → 1 (ключ); a64 → 2, обидва в `answer`. Повні перестановки (120 на вправу) переглянув: граматичних порядків поза ключем немає («This summer is Sofiia…» без коми — ні, NOTE verifier-e4s6) |
| Ключі `word` (13) | жоден не має кінцевого `.!?`; ключ у нижньому регістрі зараховується (a18 «carpathians», a42 «how») |
| `python3 tools/test-answer-ui.py --suite content --pool pe5s9` | не запускав: Python-модуля playwright у контейнері немає (AGENTS.md §3) — лише CI |
| Лексика | скрипт: усі слова пулу є в g4-*.js і g5-e5s1…e5s9.js, крім «since» (лише в ключі a04) і навмисно хибних дистракторів (likked, studyed, tryed). «tried», «showed» — правильні -ed-форми з правил l5 |
| Мова пояснень (5 кл.: ≤ 8 слів) | скрипт по `hint`/`steps`: 14 речень по 9–12 слів; більшість — приклад-речення з тексту вправи чи дослівно з уроку («After a t or d sound, -ed is an extra part.» — l5). Скоротив a15 hint (12 → 7) і a36 steps (10 → 7); решту 9–11-слівних прикладів лишив |
| BrE, без звуку й IPA, без A/B/C | AmE-правопису й лексики немає (travelled, flat, holiday); «Listen», «You hear», `/…/`, позиційних посилань немає; `uk` немає |

## 2. Факти: твердження → джерела (відкрито в цій сесії) → вердикт

Нових фактів пул не додає: усі з екрана «Places in Ukraine» (e5s9l1) і facts/eng.md (рядок 13: Kyiv, Odesa, the Dnipro).

| Твердження (вправи) | Джерела | Вердикт |
|---|---|---|
| Odesa — on the Black Sea (a05, a06, a57) | ЕСУ «Одеса»: «північно-західному узбережжі Чорного моря» — https://esu.com.ua/article-75184; en.wikipedia: «The city lies on the northwestern coast of the Black Sea» — https://en.wikipedia.org/wiki/Odesa | ✅ |
| Hoverla — a mountain in the Carpathians (a05, a18) | ЕСУ «Говерла»: «найвища вершина Українських Карпат і всієї України… Вис. 2061 м» — https://esu.com.ua/article-25087; en.wikipedia: «the highest mountain in Ukraine and part of the Ukrainian Carpathians» — https://en.wikipedia.org/wiki/Hoverla | ✅ |
| Kyiv — the capital (a05); on the Dnipro (a59 «walked along the Dnipro» у Kyiv) | ЕСУ «Київ»: «столиця України… на обох берегах Дніпра» — https://esu.com.ua/article-11194; en.wikipedia: «the capital and most populous city of Ukraine… straddles both banks of the Dnieper» — https://en.wikipedia.org/wiki/Kyiv; uk.wikipedia: «столиця та найбільше місто України… у середній течії Дніпра» — https://uk.wikipedia.org/wiki/Київ | ✅ |
| Lviv — an old town (a05, a06) | ЕСУ «Львів»: «1998 на 22-й конф. у м. Кіото… істор. частину Л. занесено до Світ. спадщини ЮНЕСКО» — https://esu.com.ua/article-59572; en.wikipedia Old Town (Lviv): UNESCO World Heritage since 1998 — https://en.wikipedia.org/wiki/Old_Town_(Lviv) | ✅ |
| Kamianets-Podilskyi — an old castle (a07, a50) | ЕСУ: «комплекс Старого та Нового замків… відновлювальні роботи в Старому замку» — https://esu.com.ua/article-10947; en.wikipedia: «located in the historic city of Kamianets-Podilskyi, Ukraine» — https://en.wikipedia.org/wiki/Kamianets-Podilskyi_Castle | ✅ |

Не резолвляться в сесії (для довідки): www.britannica.com, www.encyclopediaofukraine.com, zakon.rada.gov.ua, minio.kyivcity.gov.ua, www.esu.com.ua (з www; без www — працює).

## 3. Форми й наголос (curl, відкрито в сесії)

| Форма | Джерело, дослівно | Вердикт |
|---|---|---|
| seaside — 1-й склад (a19–a21) | CD «ˈsiː.saɪd» — https://dictionary.cambridge.org/dictionary/english/seaside; OALD «/ˈsiːsaɪd/» — https://www.oxfordlearnersdictionaries.com/definition/english/seaside_1 | ✅ |
| museum — 2-й склад | CD «mjuːˈziː.əm» — https://dictionary.cambridge.org/dictionary/english/museum; OALD «/mjuˈziːəm/» — https://www.oxfordlearnersdictionaries.com/definition/english/museum | ✅ |
| countryside — 1-й склад | CD «ˈkʌn.tri.saɪd» — https://dictionary.cambridge.org/dictionary/english/countryside; OALD «/ˈkʌntrisaɪd/» — https://www.oxfordlearnersdictionaries.com/definition/english/countryside | ✅ |
| holiday — 1-й склад | CD «ˈhɒl.ə.deɪ» — https://dictionary.cambridge.org/dictionary/english/holiday; OALD «/ˈhɒlədeɪ/» — https://www.oxfordlearnersdictionaries.com/definition/english/holiday_1 | ✅ |
| travelled (BrE; a56, a57, a62) | OALD travel_1: «travelled … (US English traveled)» — https://www.oxfordlearnersdictionaries.com/definition/english/travel_1; CD travel: «US usually -l-», «He travelled over 1,000 miles» — https://dictionary.cambridge.org/dictionary/english/travel | ✅ |
| stopped, tried, studied (a54–a56, a61) | CD: «my phone just stopped working», «I tried to open the window», «I studied music at college» — https://dictionary.cambridge.org/dictionary/english/stop, …/try, …/study; Wiktionary: «simple past and past participle stopped / tried / studied» — https://en.wiktionary.org/wiki/stop, https://en.wiktionary.org/wiki/try, https://en.wiktionary.org/wiki/study | ✅ |
| on the beach і at the beach — обидва нормативні | OALD beach_1: «on the beach … tourists sunbathing on the beach», «at the beach … She often spent summer days at the beach» — https://www.oxfordlearnersdictionaries.com/definition/english/beach_1 | ✅ у пулі «at» поруч із beach хибним варіантом ніде не стоїть (a14: on / in) |

## 4. Завдання → звідки відповідь → вердикт

Кожну вправу розв'язав сам до перегляду `correct`/`answer`; розбіжностей із ключем немає. Опора — екрани уроків e5s9 (номер екрана — порядковий, intro = #1).

| Вправа | Моя відповідь | Опора (D-019) | Друга правильна відповідь? | Вердикт |
|---|---|---|---|---|
| a01 gaps | to go, to visit | l1 #4 «I’d like = I want. Then: to + verb» | going / go — ні | ✅ |
| a02 word | to | l1 #4 | ні | ✅ |
| a03 pick | going | l1 #4, «Not: I’d like go» | інших помилок у тексті немає | ✅ |
| a04 word | because (as, since — у ключі) | l1 #4, #8 | ключ розширено as / since — коректно (спірне 2: приймати ширше, ніж учили, — правильно) | ✅ |
| a05 match | sea, old towns, mountains, capital | l1 #3 «Places in Ukraine» | Hoverla → лише mountains, Odesa → лише sea, «capital» → лише Kyiv; Lviv ↔ old towns — розв'язок єдиний | ✅ |
| a06 gaps | Lviv, Odesa, because | l1 #3, #4 | «Odesa … old towns» — l1 #3 дає old town лише Lviv; «but» — нелогічне | ✅ |
| a07 choice | an old castle | на екрані | ні | ✅ |
| a08 choice | because she loves mountains | на екрані | ні | ✅ (правка 1) |
| a09 multi | 0, 1, 3 | на екрані | ні | ✅ (правка 2) |
| a10 match | in the sea, a mountain, a bike, a museum | l2 #3 | climb лише mountain; swim лише in the sea; ride лише a bike — єдиний | ✅ |
| a11 gaps | at the seaside, in the countryside, in a big city | l2 #3 | ні (спірне 5: «at the seaside» для музеїв свідомо не дано — погоджуюсь) | ✅ |
| a12 gaps | countryside, museum, seaside | l2 #3 | «a countryside» / «a beach in London» — ні | ✅ |
| a13 gaps | to, in | l1 #4 (go to), l2 #3 | «swim on the sea» — ні | ✅ |
| a14 gaps | at, on, in | l2 #3, #5 | «at» поруч з beach немає | ✅ |
| a15 pick | on | l2 #3 «Not: on the seaside» | ні | ✅ (правка 4, hint) |
| a16 choice | 0 | l2 #3, #6 | дистрактори нелогічні | ✅ |
| a17 match | countryside, seaside, big city, mountains | l2 #3 | бієкція єдина | ✅ |
| a18 word | mountains / Carpathians | l1 #3, l2 #3 | «forest» відсікає «climb Hoverla»; обидві в ключі | ✅ |
| a19–a21 stress | sea, se, hol, coun | l2 #3 `<u>`, l2 #7 | один нормативний наголос (§3) | ✅ |
| a22 choice | at the seaside | на екрані | ні | ✅ |
| a23 choice | because she loves the countryside | на екрані | ні | ✅ |
| a24 multi | 0, 2 | на екрані | ні | ✅ |
| a25 gaps | am, is | l3 #3 | ні | ✅ |
| a26 word | is | l3 #3, #5 | «was going to» граматичне, але body «Emma’s plan for Saturday» (теперішній план) відсікає; так само в уроці l3 #5 | ✅ |
| a27 gaps | visit, buy | l3 #3 «Not: going to visits» | ні | ✅ |
| a28 pick | takes | l3 #3 | ні | ✅ |
| a29 build | My sister isn’t going to come with us. | l3 #3 (isn’t going to) | перестановки — §1 | ✅ |
| a30 choice | I’ll go to the shop! | l3 #6 «You decide now → I’ll» | дистрактори відрізняються часом (every year, last year) — не will vs going to | ✅ |
| a31 match | going to travel, close the window, help her, make a sandwich | l3 #6, #7 | бієкція єдина; will ↔ going to розведено змістом (квитки) | ✅ |
| a32 gaps | are, I’ll | l3 #3, #6 | «I’m close» неграматичне (спірне 3: дистрактор граматичний, а не на правило — прийнятно для рівня 3 func; правило в hint і steps) | ✅ |
| a33 gaps | am | l3 #3 | ні | ✅ |
| a34 word | not | l3 #3 | «also / still» граматичні, але body «she isn’t going to take her bike» відсікає | ✅ |
| a35 gaps | are, is, not, swim | l3 #3, #10 | ні | ✅ |
| a36 gaps | Are, am | l4 #3 | ні | ✅ (правка 4, steps) |
| a37 word | is | l4 #3, #5 «we don’t say he’s» | ні | ✅ |
| a38 build | Is Sofiia going to travel this summer? | l4 #3, #7 | §1 | ✅ |
| a39 pick | Do | l4 #2, #3 | ні | ✅ |
| a40 gaps | Are, am, isn’t | l4 #3; l3 intro (тато працює) | ні | ✅ |
| a41 match | In a small hotel., Next Monday., By bus. | l4 #3, #6 | єдиний | ✅ |
| a42 word | How | l4 #1, #6 | ні | ✅ |
| a43 gaps | Where, When, Who | l4 #6 | ні | ✅ |
| a44 choice | Andrii | на екрані | ні | ✅ |
| a45 choice | by train | на екрані | ні | ✅ |
| a46 multi | 0, 2 | на екрані | ні | ✅ |
| a47 gaps | played, visited | l5 #3 | ні (часова ознака є) | ✅ |
| a48 gaps | liked, loved | l5 #3 | ні | ✅ |
| a49 word | stayed | l5 #3 | «lived» відсікає body «stay → ?»; часова ознака Last summer | ✅ |
| a50 pick | visit | l5 #3 | ні | ✅ |
| a51 choice | started | l5 #6 «After a t or d sound, -ed is an extra part» | ні | ✅ |
| a52 multi | wanted, started | l5 #6 | ні | ✅ |
| a53 pick | visited, wanted, started | l5 #6 | інших слів на t/d + -ed у тексті немає (walked, looked) | ✅ |
| a54 gaps | stopped, studied | l5 #6 | ні | ✅ |
| a55 word | tried | l5 #6 (try → tried) | «wanted» відсікає body «try → ?»; Yesterday | ✅ |
| a56 gaps | travelled, stopped, tried, studied | l5 #6 | ні | ✅ |
| a57 choice | by train. | на екрані | ні | ✅ |
| a58 multi | 0, 1, 3 | на екрані; l6 #2 (план vs минуле) | ні | ✅ |
| a59 choice | visit Andrii’s school | на екрані | ні (спірне 4: «план чи минуле» на рівні 3 read — доречно, l6 #4 того самого типу) | ✅ |
| a60 word | cooked | l5 #3, l6 #3 | «had / made dinner» відсікає body «cook → ?» (як l6 #7 «climb → ?») | ✅ |
| a61 word | stopped | l5 #6 | body «stop → ?»; This morning | ✅ |
| a62 gaps | travelled, walked, was, going to | l6 #2, e5s8l5 (was) | ні | ✅ |
| a63 gaps | visited, are going to visit | l6 #2, #8 | ні (часові ознаки Yesterday / Tomorrow) | ✅ |
| a64 build | Tomorrow we’re going to visit the old castle. / …tomorrow. | l6 #8 | обидва порядки в ключі (§1) | ✅ |
| a65 pick | visited | l3 #3, l6 #2 | ні | ✅ |

**Спірне автора:**
1. l5 phon через choice / multi / pick, а не `stress` — **погоджуюсь.** Навичка phon у l5 — «-ed як окремий склад» (l5 #6, #7), не наголос; `stress` тут тренував би інше. Тип `choice`/`multi`/`pick` у пулі дозволений (POOL_TYPES, app/learn.js:2011), відповідь виводиться з правила «after a t or d sound» за написанням, без звуку й без IPA, аудіювання не імітує.
2. a04 as / since у ключі — коректно: це правильні відповіді, не вчені в уроці; приймати їх треба (інакше дитина, що знає більше, отримає «неправильно»).
3. a32 I’ll / I’m — прийнятно; рішення в мить мовлення підказує hint і steps.
4. Рівень 3 read — multi з 4 тверджень або «план чи минуле» — доречно.
5. a11 без «at the seaside» для музеїв — погоджуюсь.

## 5. Герої (inbox: NOTE герої eng, writer-pe5s9, style-eng-g4-5)

Звірив із каноном: Oksana — у липні в Odesa в дядька (a22, a35), у серпні Carpathians з татом (a28, a62); Mariia — єдина дитина, «my brother» немає; Tom «tried to swim» (a55) — не суперечить «Tom не вміє плавати»; Sofiia — лише сестра Andrii; Daryna — Kyiv, тітка в Odesa, сестра, Lviv улітку (a14, a29, a49, a56); Andrii — бабуся в Chernihiv, тато працює (a25, a40), Lviv до Taras у п’ятницю потягом (a43, a45); щоденник Emma (a57–a59) узгоджений з boss T7 (Day 2 — walked around Odesa, Day 3 — beach, Day 4 — Kyiv). Нові деталі автора (Sofiia хотіла б у Carpathians; Mariia — до Oksana в село; Andrii з татом минулого літа в Kamianets-Podilskyi) канону не суперечать.

Знайшов дві суперечності **всередині пулу й з уроком** — виправив:
- **a08:** Andrii «I’d like to visit Odesa because I love the sea» — суперечило a06 («Andrii loves old towns… I’d like to go to Lviv») і l1 #9 (Andrii хоче до Lviv). Тепер «I’d like to visit Lviv because I love old towns»; дистрактор «because she loves old towns» тепер є в тексті (про Andrii) — вправа на уважне читання стала кращою. Ключ (1) не змінився.
- **a09:** у сцені «My family can’t choose» мама Mariia хотіла до Lviv (old towns), а в l2 intro і a24 — та сама сцена, мама хоче в гори. Тепер «Mum would like to go to the Carpathians because she loves mountains»; варіант 0 «Mum would like to go to the Carpathians.»; ключ [0, 1, 3] не змінився.

## 6. Авторське право (WebSearch, дослівно в лапках)

| Фрагмент (≥ 12 слів) | Результат |
|---|---|
| “Mum would like to go to Lviv because she loves old towns” (a09, до правки) | збігів немає |
| “In the summer I’d like to visit her because I love the countryside” (a23) | збігів немає |
| “Mum would like to go to the mountains because she loves walking in the forest” (a24) | збігів немає |
| “We aren’t going to take the car. We’re going to walk to our flat” (a46) | збігів немає |
| “Today we walked around Odesa. In the morning we visited a museum” (a58) | збігів немає |
| “Yesterday we travelled to Kyiv. Today Andrii and Sofiia showed us the city” (a59) | збігів немає |
| “Great news! Dad has got the tickets. We’re going to travel to Lviv by train” (a45) | збігів немає |
| “Yesterday we travelled here by bus. This morning we walked to a river” (a62) | збігів немає |
| “We walked around the old town and looked at the castle” (a50) | збігів немає |
| “I’m not going to take my tablet. We’re going to swim in the sea every day” (a35) | збігів немає |

## 7. Правки (зроблені)

1. a08 — Andrii: Odesa / the sea → Lviv / old towns (text, steps). Герой.
2. a09 — Mum: Lviv / old towns → the Carpathians / mountains (text, opts[0], steps). Герой.
3. a15 hint — «Check the small words before the seaside, the sea and the beach.» (12 слів) → «Check the small words: at, on, in.»
4. a36 steps[1] — «Not do: questions with going to start with am, is or are.» → «Not do. Start with am, is or are.»

`status: "verified"`, `meta.factcheck` і шапку файлу оновлено. id вправ не змінено, ключі не змінено.

**Рекомендації (не блокують):** a20 hint «Only one word has the strong part in the middle.» (10 слів) і a21 hint (9) — можна скоротити в style-sync; a53 `title` «Find the words that have an extra part with -ed.» (10 слів) — так само.

## 8. Вердикт

| Урок | Вправи | Вердикт |
|---|---|---|
| e5s9l1 | a01–a09 | ✅ (правки 1, 2) |
| e5s9l2 | a10–a24 | ✅ (правка 3) |
| e5s9l3 | a25–a35 | ✅ |
| e5s9l4 | a36–a46 | ✅ (правка 4) |
| e5s9l5 | a47–a56 | ✅ |
| e5s9l6 | a57–a65 | ✅ |

**Пул pe5s9 — `verified`.** Потребує людини: нічого.
