# Верифікація пулу pe4s2 — «My home» (eng, 4 кл.)

Верифікатор: verifier-pe4s2 (не автор), 2026-11-20. Файл: `content/eng/pool-g4-e4s2.js`; уроки — `content/eng/g4-e4s2.js` (verified, reports/verify/e4s2.md). Скіли: `content-verify` (§2–§5, «Англійська»), `math-pool-diag` (§2б, §2в).

**Вердикт: пул придатний, `status: "verified"`.** У 35 вправах автора неправильних ключів, другої правильної відповіді, AmE як помилки й збігів з опублікованими текстами немає. Автор не покрив п'ять пар урок × `sk` з уроків: e4s2l1 phon, e4s2l1 read, e4s2l2 write, e4s2l3 phon, e4s2l4 read. Я додав 15 вправ a36–a50, по 3 (рівні 1–3) на кожну пару. Наявні id не змінював. Питань до вчителя немає, TQ не додавав.

Прогін (після правок): `node tools/validate.mjs --pool pe4s2` — 0 помилок, 0 попереджень; `node tools/personalization-qa.mjs --pool pe4s2 --strict` — код 0 (6 уроків, 50 вправ); `node tools/euphony.mjs --pool pe4s2` — 0 відхилень. Браузерні `playtest.py` і `test-answer-ui.py` не запускав: Python-модуля playwright у контейнері немає, тож ці перевірки лишаються за CI (job `browser`).

## 1. Джерела й форми

| Твердження | Джерело (відкрите в сесії) | Вердикт |
|---|---|---|
| `src` «top34 с. 62»: тема «Помешкання», there is(n’t)/are(n’t), some/any, irregular plural, prepositions of place | ТОП 3–4, https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf (curl, SHA-1 aa8d161a330bbede5b21484f47be92d12548f785, `pdftotext -f 62 -l 62`: рядки «there is(n’t)/are(n’t)», «'some' and 'any' in questions and negative statements», «irregular nouns – plural», «basic prepositions of place and direction», «Помешкання») | ✅ |
| a02 ключ «elevator» поруч із «lift» | CD elevator: «A2 US (UK lift)», https://dictionary.cambridge.org/dictionary/english/elevator | ✅ AmE-лексика в ключі `word` поруч із BrE (TQ-125, рішення людини) |
| a13 ключ «closet» поруч із «wardrobe», «cupboard» | CD closet: «A2 mainly US a cupboard or a small room with a door, used for storing things, especially clothes», https://dictionary.cambridge.org/dictionary/english/closet | ✅ так само; cupboard — правильна BrE-відповідь на «big and tall, clothes are in it», тож вона мусить бути в ключі |

### Наголос (`stress`): CD (UK) + OALD (BrE), curl у сесії

| Слово | CD UK | OALD BrE | `<u>` в info уроку | Вердикт |
|---|---|---|---|---|
| garden | /ˈɡɑː.dən/ | /ˈɡɑːdn/ | l1 #3 | ✅ `+gar\|den` |
| balcony | /ˈbæl.kə.ni/ | /ˈbælkəni/ | l1 #3 | ✅ `+bal\|co\|ny` |
| furniture | /ˈfɜː.nɪ.tʃər/ | /ˈfɜːnɪtʃə(r)/ | l3 #3 | ✅ `+fur\|ni\|ture` |
| wardrobe | /ˈwɔː.drəʊb/ | /ˈwɔːdrəʊb/ | l3 #3 | ✅ `+ward\|robe` |
| carpet | /ˈkɑː.pɪt/ | /ˈkɑːpɪt/ | l3 #3 | ✅ `+car\|pet` |
| kitchen, bedroom, bathroom (звірено, у stress не взято: у l3 немає `<u>`) | /ˈkɪtʃ.ən/, /ˈbed.ruːm/, /ˈbɑːθ.ruːm/ | /ˈkɪtʃɪn/, /ˈbedruːm/, /ˈbɑːθruːm/ | l2 #3 | — |

URL: https://dictionary.cambridge.org/dictionary/english/<word>; https://www.oxfordlearnersdictionaries.com/definition/english/<word> (garden_1, balcony, furniture, wardrobe, carpet_1, kitchen, bedroom, bathroom). У кожному слові один наголос, і в CD, і в OALD. У stress взято лише слова з `<u>` в info того самого уроку (PITFALL verifier-e5s2).

## 2. Завдання: розв'язок, опора (D-019), друга відповідь

Кожну вправу я розв'язав сам, а потім звірив з ключем через `app/lang.js` у node (`check(solution)`). У `build` перебрав усі перестановки всіх підмножин tiles + extra. Для `word` перевірив ключ з кінцевою крапкою і з апострофом ' замість ’.

| Вправа | Мій розв'язок = ключ | Опора | Друга правильна / зауваги | Вердикт |
|---|---|---|---|---|
| a01 match | house—one family, flat—block of flats, lift—up and down, stairs—walk, garden—grass and trees | l1 info #3 | для кожного лівого перебрав усі праві: інших доречних пар немає | ✅ |
| a02 word | lift (elevator) | l1 info, l1 #5 | «stairs» відсікає «doesn’t walk up the stairs» | ✅ |
| a03 gaps | house, garden, stairs | l1 info; «isn’t in a block of flats» | балкон з деревами неприродний; опора для house явна (PITFALL verifier-e4s2) | ✅ |
| a04 word | flats | l1 info | — | ✅ |
| a05 gaps | balcony, lift, house | l1 info | — | ✅ |
| a06 gaps | is, are, is, are | l2 info #5 | переліків після there is/are немає (PITFALL verifier-e5s7) | ✅ |
| a07 word | are | l2 info #5 | — | ✅ |
| a08 pick | [are] (a big kitchen) | l2 info #5 | інші are/is правильні | ✅ |
| a09 match | kitchen—cook, living room—TV, bedroom—sleep, bathroom—wash, hall—come in | l2 info #3 (watch TV — living room) | — | ✅ (спірне автора прийнято: прив'язка дослівно з info) |
| a10 word | bedroom | l2 info #3 | — | ✅ |
| a11 gaps | hall, living room, kitchen, bathroom | l2 info #3 | «It’s got a TV» відсікає bathroom | ✅ |
| a12 match | bed, desk, wardrobe, shelf, lamp | l3 info #3 | «sit at it and do homework» → desk (chair у правому стовпці немає) | ✅ |
| a13 word | wardrobe (cupboard, closet) | l3 info #3 | друга BrE-відповідь cupboard — у ключі | ✅ |
| a14 gaps | desk, lamp, carpet, shelves | l3 info #3 | — | ✅ |
| a15 gaps | beds, desk, chairs | l3 info #5 | — | ✅ |
| a16 word | shelves | l3 info #5 | — | ✅ |
| a17 pick | [shelfs] | l3 info #5 («Not: furnitures») | furniture правильне | ✅ |
| a18 gaps | on, in, on | l4 info #3 | «lamp under the desk» відсікає «gives light for her homework» | ✅ |
| a19 word | under | l4 info #3 (on ↔ under) | — | ✅ |
| a20 gaps | are, They’re, is, It’s | l4 info #7 | — | ✅ |
| a21 build | Where is Dmytro’s ball? | l4 info #7, l4 #9 | прийнято лише 1 порядок; велика «Where» + keepCase | ✅ |
| a22 gaps | are, They’re, are, They’re | l4 info #7 | clothes — множина | ✅ |
| a23 gaps | some, any, some | l5 info #5 | some/any у питаннях не оцінюється | ✅ |
| a24 build | Is there a lamp on your desk? | l5 info #3 | прийнято лише 1 порядок; «Is a lamp there on your desk» неприродне — спірне автора прийнято | ✅ |
| a25 gaps | Are, Is, Are | l5 info #3 | some/any не в пропуску | ✅ |
| a26 gaps | is, isn’t | l5 info #3 | — | ✅ |
| a27 word | aren’t (aren’t any; are not) | l5 info #3 | «aren’t any» і повна форма — у ключі | ✅ |
| a28 gaps | Yes, there is. / Yes, there are. | l5 info #3 («Not: Yes, there’s.») | — | ✅ |
| a29 gaps | is, are, is | l2, l6 plan | — | ✅ |
| a30 build | There isn’t a TV in my dream room. | l6 plan, l5 | прийнято лише 1 порядок. «In my dream room there isn’t…» і питання «Isn’t there…» відсікають велика «There» + keepCase (PITFALL verifier-e4s8); «dream room» — однією плиткою | ✅ |
| a31 gaps | are, on, aren’t, some | l2, l4, l5 | — | ✅ |
| a32 word | is | l2 | — | ✅ |
| a33 gaps | next to, two | текст на екрані | «under» хибне за текстом — спірне автора прийнято (read) | ✅ |
| a34 word | computer | текст на екрані | — | ✅ |
| a35 word | isn’t | текст + l5 info #3 | — | ✅ |
| **a36** stress | **gar**den | l1 info #3 `<u>` | — | ✅ нова |
| **a37** stress | **bal**cony | l1 info #3 `<u>` | — | ✅ нова |
| **a38** stress | **bal**cony, **gar**den | l1 info #3 `<u>` | — | ✅ нова |
| **a39** choice | a flat | текст на екрані + l1 info («flat – a home in a big building», «house – one family») | — | ✅ нова |
| **a40** multi | 0, 2 | текст на екрані | — | ✅ нова |
| **a41** choice | Taras | текст на екрані | — | ✅ нова |
| **a42** build | There is a big kitchen. | l2 info #5 | прийнято лише 1 порядок; «Is there…» відсікає keepCase | ✅ нова |
| **a43** build | There are three bedrooms in our flat. | l2 info #5 | прийнято лише 1 порядок; пастка «is» неграматична | ✅ нова |
| **a44** gaps | is, are, living room, is | l2 info #3, #5 | переліків немає | ✅ нова |
| **a45** stress | **car**pet | l3 info #3 `<u>` | — | ✅ нова |
| **a46** stress | **ward**robe, **car**pet | l3 info #3 `<u>` | — | ✅ нова |
| **a47** stress | **fur**niture, **car**pet, **ward**robe | l3 info #3 `<u>` | — | ✅ нова |
| **a48** choice | under the desk | текст на екрані | — | ✅ нова |
| **a49** multi | 0, 2 | текст на екрані + l4 info #3 | — | ✅ нова |
| **a50** choice | under the chair | текст на екрані | — | ✅ нова |

Ключі `word` без кінцевого `.!?`. У `gaps`/`choice`/`multi`/`pick` AmE-написання як хибного варіанта немає. Літер A/B/C і позиційних посилань в `opts` немає. «Listen», «You hear» і IPA відсутні (grep). `uk` немає. Лексика й граматика — лише з уроків e4s2l1–l6 (нові вправи — лише слова з info свого уроку чи попередніх).

## 3. Герої (канон розділу, inbox NOTE verifier-e4s2)
Andrii — квартира в Kyiv, балкон у квартирі (a05, a23, a26, a40), бабуся має будинок із садом (a06). Oksana — будинок без ліфта (a03, a41), Murka, коробка, Dmytro. Emma — будинок із садом (a05). Mariia — квартира в Kharkiv: велика вітальня, три вікна, мала кухня (a02, a07, a39, a44 узгоджені між собою й з l2 #7). Taras — нова квартира в Lviv: три спальні, ліфт, «very high up» (a08, a41, a43 — як у boss). Суперечностей з уроками й між вправами немає.

## 4. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками)

| Фрагмент | Запит | Результат |
|---|---|---|
| a33–a35 текст Mariia | "There's a big bed next to the window. There are two shelves for my books" | збігу немає (меблеві магазини) |
| a33–a35 | "There isn't a TV, but there's a computer on the desk" | збігу немає |
| a03 | "It has got a big garden with lots of flowers and trees. It hasn't got a lift" | збігу немає |
| a05 | "We haven't got a garden, but our flat has got a balcony" | збігу немає (форуми Mumsnet про тему) |
| a17 | "Our new flat is big. All the furniture is new. In my room there are two lamps" | збігу немає |
| a14 | "I do my homework at my desk. At night I read with a lamp" | збігу немає |
| a40 (нова) | "We take the lift. Our flat has got a balcony, but it hasn't got a garden" | збігу немає |
| a49 (нова) | "The lamp is on my desk. My football is under the bed. My clothes are in the wardrobe" | збігу немає (загальні ESL-приклади на прийменники) |
| a11 | "Now they're in the hall. Then they go into the living room" | збігу немає |

## 5. Правки
Зроблені (у `content/eng/pool-g4-e4s2.js`):
1. Додав a36–a50 (15 вправ). Тепер кожна пара урок × `sk` з оцінюваних екранів уроків має 3 і більше вправ рівнів 1–3. Пари, яких бракувало: l1 phon (a36–a38, stress), l1 read (a39–a41, choice/multi), l2 write (a42–a44, build/gaps), l3 phon (a45–a47, stress), l4 read (a48–a50, choice/multi). Автор не покрив їх, бо писав за старим переліком типів задачі (gaps/word/pick/build/match).
2. `status: "verified"`, `meta.factcheck` — посилання на цей звіт.

Рекомендовані (не блокують):
- Пункт задачі «типи gaps/word/pick/build/match» у шаблоні make-tasks для пулів eng застарів: POOL_TYPES уже дозволяє stress, choice і multi. Інакше наступні автори так само пропустять phon і read.

## 6. Вердикт по уроках пулу
| Урок | Вправи | Вердикт |
|---|---|---|
| e4s2l1 | a01–a05, a36–a41 | ✅ |
| e4s2l2 | a06–a11, a42–a44 | ✅ |
| e4s2l3 | a12–a17, a45–a47 | ✅ |
| e4s2l4 | a18–a22, a48–a50 | ✅ |
| e4s2l5 | a23–a28 | ✅ |
| e4s2l6 | a29–a35 | ✅ |
