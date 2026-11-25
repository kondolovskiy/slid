# Верифікація: пул pe4s7 «Holidays and travel» (англійська, 4 кл.)

Верифікатор: verifier-pe4s7 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g4-e4s7.js` (автор writer-pe4s7) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` (§2б, §2в). Задача: tasks/review/write-eng-pool-g4-e4s7.md. Зміст звіряв з уроками content/eng/g4-e4s7.js (verified) і reports/verify/e4s7.md. Контекст: style/eng.md, glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська», рядки eng PITFALL і NOTE (герої) в inbox.

**Вердикт: пул придатний, `status: "verified"`.** Знайшов одну неправильну відповідь (друга правильна відповідь у `word` a21) і виправив її. Додав 15 вправ (a45–a59) на `sk` phon і read: автор їх не покрив. Ще одна правка дрібна, у підказці. Людині вирішувати нічого не треба. Нових TQ немає.

## 1. Прогони

| Команда | Результат |
|---|---|
| `node tools/validate.mjs --pool pe4s7` | 0 помилок, 0 попереджень (59 вправ) |
| `node tools/personalization-qa.mjs --pool pe4s7 --strict` | без «БРАКУЄ» (6 уроків, 59 вправ) |
| перебір `build` через app/lang.js (`check(…, "en")`, усі впорядковані підмножини tiles + extra; скрипт у scratchpad) | a12: 3 порядки, a23: 6, a33: 2, a40: 3. Приймаються рівно порядки з `answer`. Пастки (walk, bigest, see, swimming) і неповні рядки не зараховуються |
| `wordVerdict` на правильних, хибних і одруківках (a02, a06, a09, a18, a19, a21, a24, a28, a30, a38, a43) | як очікується (таблиця §3) |
| покриття урок × `sk` (мій підрахунок) | кожна пара — ≥ 3 вправи, є рівні 1, 2 і 3 (лише l1×vocab і l4×vocab мають рівні 1–2: це ≥ 3 вправи рівнів 1–3, як вимагає правило) |
| `python3 tools/test-answer-ui.py --suite content --pool pe4s7` | не запускав: Python-модуля playwright у контейнері немає (лише CI) |

## 2. Факти: твердження → джерела (відкрито в цій сесії) → вердикт

| Твердження (вправи) | Джерела | Вердикт |
|---|---|---|
| Kyiv — the capital of Ukraine (a15, a19, a58) | CD kyiv: «the capital city of Ukraine» — https://dictionary.cambridge.org/dictionary/english/kyiv ; uk.wikipedia: «столиця та найбільше місто України» — https://uk.wikipedia.org/wiki/Київ | ✅ |
| London — the capital of the UK (a15, a57) | CD london: «the capital city of England and the United Kingdom» — https://dictionary.cambridge.org/dictionary/english/london ; OALD London: «the capital city of the United Kingdom» — https://www.oxfordlearnersdictionaries.com/definition/english/london | ✅ |
| Ottawa — the capital of Canada (a15–a17, a20, a53, a58) | CD ottawa: «the capital city of Canada» — https://dictionary.cambridge.org/dictionary/english/ottawa ; OALD Ottawa: «the capital city of Canada» — https://www.oxfordlearnersdictionaries.com/definition/english/ottawa | ✅ |
| Canberra — the capital of Australia; Sydney isn’t (a15–a18, a59) | CD canberra: «the capital city of Australia» — https://dictionary.cambridge.org/dictionary/english/canberra ; OALD Canberra: «the capital city of Australia» — https://www.oxfordlearnersdictionaries.com/definition/english/canberra ; en.wikipedia (REST summary): «Canberra is the capital city of Australia» — https://en.wikipedia.org/wiki/Canberra | ✅ |
| Washington, DC — the capital of the USA (a16, a21, a59) | CD washington-dc: «the capital city of the United States» — https://dictionary.cambridge.org/dictionary/english/washington-dc ; CD america: «the United States of America» — https://dictionary.cambridge.org/dictionary/english/america ; OALD America: «used as a name for the United States (of America)» — https://www.oxfordlearnersdictionaries.com/definition/english/america | ✅ |
| Hoverla — the highest mountain in Ukraine, 2,061 m (a25–a27) | en.wikipedia: «at 2,061 metres (6,762 ft), is the highest mountain in Ukraine» — https://en.wikipedia.org/wiki/Hoverla ; ЕСУ: «найвища вершина Українських Карпат і всієї України… Вис. 2061 м» — https://esu.com.ua/article-25087 | ✅ |
| The Dnipro — the longest river in Ukraine (a26) | en.wikipedia (REST summary, Dnieper): «it is the longest river of Ukraine and Belarus» — https://en.wikipedia.org/wiki/Dnieper ; uk.wikipedia: «річка з найдовшою течією в Україні… у межах України — 981 км» — https://uk.wikipedia.org/wiki/Дніпро | ✅ |
| Kyiv — the biggest city in Ukraine (a23, a26) | en.wikipedia (REST summary): «the capital and most populous city of Ukraine» — https://en.wikipedia.org/wiki/Kyiv ; uk.wikipedia «найбільше місто України» — https://uk.wikipedia.org/wiki/Київ | ✅ |
| on foot (не by foot) (a01, a03, a04, a53) | CD foot: «on foot A2 walking» — https://dictionary.cambridge.org/dictionary/english/foot ; OALD foot_1: «on foot We came on foot (= we walked)» — https://www.oxfordlearnersdictionaries.com/definition/english/foot_1 | ✅ (як урок l1) |

Інші форми й норма (across / over / along, high / tall, will, Past Simple, Dear / Love) — за URL у reports/verify/e4s7.md §2 і нотатках автора (CD tall, CD warm). Я їх не перевідкривав: вправи пулу їх не розширюють.

### Наголос (`stress` a45–a50): CD (UK) + OALD (BrE), відкрито curl-ом

| Слово | CD UK | OALD BrE | Урок, `<u>` | Вердикт |
|---|---|---|---|---|
| bicycle | ˈbaɪ.sɪ.kəl (noun, verb) — https://dictionary.cambridge.org/dictionary/english/bicycle | /ˈbaɪsɪkl/ — https://www.oxfordlearnersdictionaries.com/definition/english/bicycle_1 | l1 info | ✅ |
| travel | ˈtræv.əl (verb, noun) — https://dictionary.cambridge.org/dictionary/english/travel | /ˈtrævl/ — https://www.oxfordlearnersdictionaries.com/definition/english/travel_1 | l1 info | ✅ |
| transport | noun ˈtræn.spɔːt, **verb trænˈspɔːt** — https://dictionary.cambridge.org/dictionary/english/transport | transport_1 /ˈtrænspɔːt/, transport_2 (verb) /trænˈspɔːt/ — https://www.oxfordlearnersdictionaries.com/definition/english/transport_2 | l1 info | ❌ для пулу: два наголоси за частиною мови. **Не брав** (як радив reports/verify/e4s7.md §6 п. 1) |
| capital | ˈkæp.ɪ.təl — https://dictionary.cambridge.org/dictionary/english/capital | /ˈkæpɪtl/ — https://www.oxfordlearnersdictionaries.com/definition/english/capital_1 | l3 info | ✅ |
| London | ˈlʌn.dən — https://dictionary.cambridge.org/dictionary/english/london | /ˈlʌndən/ — https://www.oxfordlearnersdictionaries.com/definition/english/london | l3 info | ✅ |
| Canada | ˈkæn.ə.də — https://dictionary.cambridge.org/dictionary/english/canada | /ˈkænədə/ — https://www.oxfordlearnersdictionaries.com/definition/english/canada | l3 info | ✅ |
| Australia | ɒsˈtreɪ.li.ə — https://dictionary.cambridge.org/dictionary/english/australia | /ɒˈstreɪliə/ — https://www.oxfordlearnersdictionaries.com/definition/english/australia | l3 info | ✅ Aus\|+tra\|li\|a |
| Ottawa | ˈɒt.ə.wə — https://dictionary.cambridge.org/dictionary/english/ottawa | /ˈɒtəwə/ — https://www.oxfordlearnersdictionaries.com/definition/english/ottawa | l3 info | ✅ |
| Canberra | ˈkæn.bər.ə — https://dictionary.cambridge.org/dictionary/english/canberra | /ˈkænbərə/ — https://www.oxfordlearnersdictionaries.com/definition/english/canberra | l3 info | ✅ (три склади в обох словниках) |

## 3. Завдання → звідки відповідь → вердикт

Кожну вправу я розв'язав сам, перш ніж дивитися в ключ. Звіряв з уроками e4s7 (номер екрана — за порядком у файлі уроку).

| Вправа | Моя відповідь = ключ | Опора (D-019) | Друга правильна відповідь? | Вердикт |
|---|---|---|---|---|
| a01 gaps | by / on | l1 info #3 | ні | ✅ |
| a02 word | bike (bicycle) | l1 info #3 | bicycle — у ключі | ✅ |
| a03 pick | [by] | l1 info #3 «Not: by foot» | ні | ✅ |
| a04 match | on foot / by boat / by train | l1 info #3 | перебрав усі праві для кожного лівого: інших пар немає | ✅ |
| a05 match | 2 km / By tram / In Kharkiv | l1 info #3, #6 | ні | ✅ |
| a06 word | far | l1 info #6 | ні (long ✗) | ✅ |
| a07 gaps | do / by / far | l1 info #3, #6 | ні | ✅ |
| a45–a47 stress | **trav**el, **bi**cycle | l1 info #3 `<u>` | — | ✅ (нові) |
| a51 choice | on foot | текст на екрані | ні | ✅ (нова) |
| a52 gaps | 30 / by bus | текст на екрані | ні: «on foot» — про річку, не про село | ✅ (нова) |
| a53 multi | 0, 1, 2 | текст + l1 info #3 (walk → on foot) | ні | ✅ (нова) |
| a08 gaps | up / down | l2 info #3 | ні | ✅ |
| a09 word | across (over) | l2 info #3 | over — у ключі; along ✗ (як l2 #8) | ✅ |
| a10 match | up / down / across / along | l2 info #3 | ні | ✅ |
| a11 gaps | along / across | l2 info #3 | ні: «to the other side», «next to them all the time» | ✅ |
| a12 build | Taras walks up the hill. | l2 info #3 | інверсії «Up the hill Taras walks.» і «Up the hill walks Taras.» — у ключі | ✅ (рішення — §4 п. 2) |
| a13 pick | [down] | l2 info #3 | ні | ✅ |
| a14 gaps | along / across / up | l2 info #3 | ні | ✅ |
| a44 gaps | up / down | l2 info #3 «up the stairs» | ні | ✅ |
| a54 choice | on the hill | текст на екрані | ні | ✅ (нова) |
| a55 choice | along the river | текст на екрані | ні | ✅ (нова) |
| a56 multi | 0, 1, 3 | текст + l2 info #3 (high → up) | ні | ✅ (нова) |
| a15 match | Kyiv / London / Ottawa / Canberra | l3 info #3 | ні | ✅ |
| a16 gaps | the USA / Ottawa / Australia | l3 info #3 | ні | ✅ |
| a17 gaps | No, it isn’t / Canberra / Canada | l3 hyp + info #3 | ні | ✅ |
| a18 word | Canberra | l3 info #3 | ні | ✅ |
| a19 word keepCase | Kyiv | l3 intro, info #3 | ні; kyiv → Almost (як l3 #6) | ✅ |
| a20 pick | [ottawa] | l3 #6 (велика літера) | ні | ✅ |
| a21 word keepCase | the USA | l3 info #3 | **так: «America»** — CD america «the United States of America», OALD «used as a name for the United States»; «Washington, DC is the capital of America» — правильне речення, велику літеру дитина пише | ❌ → виправлено: «America» додано в ключ |
| a48–a50 stress | **cap**ital, **Lon**don, **Can**ada, **Ot**tawa, **Can**berra, Aus**tra**lia | l3 info #3 `<u>` | — | ✅ (нові) |
| a57 choice | to London | текст на екрані | ні | ✅ (нова) |
| a58 gaps | Canada / the capital of Ukraine | текст на екрані | ні | ✅ (нова) |
| a59 multi | 1, 2 | текст на екрані | ні | ✅ (нова) |
| a22 gaps | the biggest / the oldest (+ іменник) | l4 info #3 | ні: після прикметника є іменник (без іменника «oldest» без the теж правильне — автор це обійшов) | ✅ |
| a23 build | 6 порядків | l4 info #3 | усі граматичні порядки в ключі; bigest ✗ | ✅ |
| a24 word | hottest (warmest) | l4 info #3 | warmest — у ключі | ✅ |
| a25 pick | [bigest] | l4 info #3 | ні | ✅ |
| a26 match | mountain / river / city | l4 intro | ні | ✅ |
| a27 gaps | high / long / old | l4 info #7 | ні | ✅ |
| a28 word | high (tall) | l4 info #7 | tall — у ключі | ✅ |
| a29 gaps | ate / played | l5 info #3 | ні | ✅ |
| a30 word | visited | l5 info #3 | ні («visit → ?» у body) | ✅ |
| a31 gaps | were / was | l5 info #3 | ні | ✅ |
| a32 pick | [were], [eat] | l5 info #3 | ні | ✅ |
| a33 build | 2 порядки | l5 info #3 | ні; see ✗ | ✅ |
| a34 gaps | Dear / See / Love | l5 info #6 | ні | ✅ |
| a35 pick | [Love], [Dear] | l5 info #6 | ні | ✅ |
| a36 gaps | Dear / saw / was / Love | l5 info #3, #6 | ні | ✅ |
| a37 gaps | play / visit | l6 info #3 | ні | ✅ |
| a38 word | won’t (will not) | l6 info #3 | «am not going to» відсікає body «will not = ?» | ✅ |
| a39 pick | [goes] | l6 info #3 | ні | ✅ |
| a40 build | 3 порядки | l6 info #3 | «We’ll swim today, I think» не складається без коми — як l6 (verifier-e4s7) | ✅ |
| a41 match | sandwich / juice / bed | l6 info #3 + e4s5 (hungry, thirsty, tired) | ні | ✅ |
| a42 gaps | I’ll / I’ll | l6 info #3 | ні (I help, I was ✗) | ✅ |
| a43 word | I’ll (I will, going to) | l6 info #3 | going to — у ключі | ✅ |

Кінцевого `.!?` у ключах `word` немає. Літер A/B/C в `opts` немає, позиційних посилань теж. Немає Listen, IPA, `uk` і AmE-правопису. Лексика нових вправ — з уроків e4s1–e4s7 (village, class, plane, near, home, Saturday, penfriend — grep). Герої — канон: Taras (Lviv), Maksym (Ottawa, кузен Andrii), Mariia (Kharkiv) і її друг Danylo (pe4s1), Emma (Англія). Нових героїв немає.

## 4. Правки

**Зроблені (у content/eng/pool-g4-e4s7.js):**
1. **a21 (❌ → виправлено):** «America» додано в ключ `word` (друга правильна відповідь за CD/OALD).
2. **Нові вправи a45–a59 (15):** автор не покрив `sk` phon (l1, l3) і read (l1, l2, l3). Додав по 3 вправи рівнів 1, 2, 3 на кожну пару:
   - phon — `stress`: a45–a47 (l1: travel, bicycle; **transport не взяв** — CD/OALD дають дієслову наголос на 2-му складі), a48–a50 (l3: capital, London, Canada, Ottawa, Canberra, Australia);
   - read — короткі власні тексти з `choice` / `gaps` / `multi`: a51–a53 (l1), a54–a56 (l2), a57–a59 (l3).
   id нові, після наявних; наявні не перейменовано. Вправи вставлено в групи своїх уроків.
3. a52 `hint` «Find Kyiv and bus in the text» видавав відповідь → «Find Kyiv in the text. How do they go there?».
4. Шапка файлу: кількість вправ і `sk`; `status: "verified"`, `meta.factcheck`.

**Рішення щодо спірного (нотатки автора):**
1. **a12, інверсія «Up the hill walks Taras.» — лишаю в ключі.** Це граматична локативна інверсія з дієсловом руху після обставини напрямку. У літературі вона рідкісна, але неправильною не є. Правило пулу: кожен граматичний порядок плиток має бути в `answer`. Відкинути правильне речення гірше, ніж поблажливо прийняти рідкісне. Прецедент — l2 #7 «Along the river we walk.» (verified).
2. a28 «How big is the mountain?»: big не прийнято, правильно. Відповідь «It’s 1,500 metres high» відповідає лише на How high / How tall.
3. a19 «kyiv» → «Almost: check the spelling»: так само в l3 #6 (keepCase, вправа на велику літеру), лишаю.
4. a32, a35 — дві помилки в одному `pick`. Body прямо каже «Two words … are wrong», тож лишаю.

**Рекомендовані (не блокують):** немає.

## 5. Авторське право (WebSearch, дослівно в лапках)

| Фрагмент (≥ 12 слів) | Результат |
|---|---|
| a51 «My school is near, so I go there on foot. My dad goes to work by car» | збігу немає (лише ESL-сторінки про on foot / by car) |
| a53 «In the morning, I go there by bus. After school, I walk home with my friends» | збігу немає |
| a55 «go down the hill. Then walk along the river. Then go across the bridge. The park is next to the bridge» | збігу немає (сторінки маршрутів) |
| a56 «Then go across the road. The park is on a hill, so go up the hill» | збігу немає |
| a44 «Today the lift doesn’t work» + «walks up the stairs to his flat» | збігу немає (новини про зламані ліфти) |
| a32/a36 «Yesterday we went to the sea. The water was warm. We swam and ate ice cream» | збігу немає |
| a59 «No, it isn’t. Sydney is a famous city, but the capital is Canberra» | збігу немає (лише довідкові сторінки про столицю) |
| a58 «I live in Ottawa, the capital of Canada. My cousin … lives in Kyiv» | збігу немає (новини) |
| a08 «The castle is on a high hill … walks up the hill to the castle. Then he walks down the hill» | збігу немає |

## 6. Вердикт по уроках пулу

| Урок | Вправи | Вердикт |
|---|---|---|
| e4s7l1 | a01–a07, a45–a47, a51–a53 (13) | ✅ |
| e4s7l2 | a08–a14, a44, a54–a56 (11) | ✅ |
| e4s7l3 | a15–a21, a48–a50, a57–a59 (13) | ✅ (правка a21) |
| e4s7l4 | a22–a28 (7) | ✅ |
| e4s7l5 | a29–a36 (8) | ✅ |
| e4s7l6 | a37–a43 (7) | ✅ |

Пул → `verified`. `approved` ставить лише вчитель.
