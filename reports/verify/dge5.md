# Верифікація: тест рівня «Англійська мова, 5 клас» (dge5)

Верифікатор: verifier-dge5 (скіли content-verify з розділом «Англійська» і math-pool-diag §2в), 2026-11-20. Файл: content/eng/diag-g5.js. Автор: writer-dge5. Цього тесту я не писав.
**Вердикт: придатний, `status: "verified"`.** Блокувальних знахідок немає: ні другої правильної відповіді, ні хибного ключа, ні завдання без опори. Зроблено 3 правки, зміст завдань не змінено, тому `rev` не потрібен. Людина потрібна лише для `approved`.

## Прогін
- `node tools/validate.mjs --diag dge5`: 0 помилок, 0 попереджень (до правок і після).
- **Перебір gaps.** Усі комбінації варіантів кожного з 20 `gaps` пройшли через `SLID_LANG.check(…, "en")` з app/lang.js у node (`loadContent`, scratchpad `verify-dge5/combos.mjs`): 8–27 комбінацій на завдання, у кожному завданні зараховано рівно одну. Зараховані комбінації збіглися з моїми розв'язками.
- 10 `choice`: я розв'язав кожне до того, як подивився на `correct`, і в 10 з 10 мій розв'язок збігся з ключем.
- `node tools/personalization-qa.mjs`: відпрацював без помилок (матриця math; для eng рядків немає).
- Браузерних прогонів не було: Python-playwright у контейнері немає (AGENTS.md §3).

## Форми й граматика: джерела, відкриті в цій сесії
| Твердження (№ завдання) | Джерело (URL, дослівна позначка) | Вердикт |
|---|---|---|
| «two **pairs** of trainers», «two pair of» хибне в BrE (№18) | OALD https://www.oxfordlearnersdictionaries.com/definition/english/pair_1: «In informal North American English some people use pair as a plural form: three pair of shoes. This is not considered correct in written English.» CD https://dictionary.cambridge.org/dictionary/english/pair: позначка «plural pairs or pair» є лише в розділі «American Dictionary». Урок e5s4l2: choice «She’s got two pair of gloves» — хибний варіант | ✅ дистрактор хибний |
| «There aren’t **any** chairs», «aren’t some» хибне (№5) | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/some: «We don’t use weak form some on its own in negative statements. We use any… Not: No, there weren’t some.» CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/any: «We use any … in questions and negative sentences». Урок e4s2l5, екран «Some and any» | ✅ дистрактор хибний |
| «He sometimes **goes** cycling», «does cycling» хибне (№15) | OALD https://www.oxfordlearnersdictionaries.com/definition/english/cycling: «to go cycling». CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/go: «We use go + -ing form when we speak about general activities that involve movement». CD https://dictionary.cambridge.org/dictionary/english/cycling: «We did **a lot of** cycling» (do — лише з кількісним словом). Урок e4s3l1: «go + -ing → go swimming, go cycling». Без a lot of «does cycling» — не норма | ✅ дистрактор хибний |
| «Now I **am going** to school by bus», «Now I go» хибне (№21) | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/present-continuous-i-am-working: «temporary states which are true around the moment of speaking». CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/present-simple-i-work: «regular or habitual events». Контекст «I usually walk… But today it’s snowing» прив'язує дію до сьогодні, тож Present Simple тут означав би нову звичку, а це суперечить «today». Урок e4s8l5: «Now, Look! → I’m playing», у фіналі уроку той самий зразок «Now I {sell\|*am selling} cakes» | ✅ дистрактор хибний |
| «I **am always** happy», «always am» хибне (№11) | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/adverbs-and-adverb-phrases-position: «Adverbs usually come after the main verb be, except in emphatic clauses». Наголосу в контексті немає. Урок e4s3l2: «but after am, is, are: I am always happy» | ✅ |
| windy → windier, big → bigger (№23); good → better, bad → worse (№20) | OALD https://www.oxfordlearnersdictionaries.com/definition/english/windy_1 («comparative windier»), …/big_1 («comparative bigger»), …/good_1 («comparative better»), …/bad_1 («comparative worse»); CD https://dictionary.cambridge.org/dictionary/english/big («bigger \| biggest»), …/bad («worse \| superlative worst») | ✅ |
| swim → swam, swimming (№22, №27) | OALD https://www.oxfordlearnersdictionaries.com/definition/english/swim_1 («past simple swam… -ing form swimming»); CD https://dictionary.cambridge.org/dictionary/english/swim («swimming \| past tense swam») | ✅ |
| love + -ing (№22) | OALD https://www.oxfordlearnersdictionaries.com/definition/english/love_2: «love doing something (especially British English)» | ✅ |
| a pair of trousers / gloves (№18) | CD https://dictionary.cambridge.org/dictionary/english/trousers: «I need a new pair of trousers»; урок e5s4l2 | ✅ |

## Факти
| Твердження | Джерела (URL) | Вердикт |
|---|---|---|
| Kyiv is the biggest city in Ukraine (№30); Kyiv is bigger than Lviv (№23) | en.wikipedia https://en.wikipedia.org/wiki/Kyiv: «the capital and most populous city of Ukraine… population… 2,952,301» (січень 2022); uk.wikipedia https://uk.wikipedia.org/wiki/Київ: «столиця та найбільше місто України», 2 952 301; en.wikipedia https://en.wikipedia.org/wiki/Lviv: «a population of 723,403 (2025 estimate)», «the sixth-largest city in Ukraine»; CD https://dictionary.cambridge.org/dictionary/english/kyiv: «the capital city of Ukraine». Цей факт уже перевірено в уроці e5s10l5 (reports/verify/e5s10.md, ✅) | ✅ (див. примітку) |

**Примітка.** Невікіпедійні джерела про населення в мережі сесії не резолвляться: www.britannica.com, www.ukrstat.gov.ua, www.worldometers.info, www.geonames.org. Факт підтверджено двома мовними версіями Вікіпедії, які наводять дані Держстату, і верифікацією e5s10. Від нього не залежить жодна відповідь: у №23 дистрактор — правопис «biger», у №30 — відсутній артикль. Якщо ці домени дозволять, енциклопедичне джерело варто додати.

Інші числа й назви належать до умовних ситуацій, а не до фактів: Odesa 30 °C, Lviv 25 °C, дати героїв.

## Завдання: мій розв'язок → опора → вердикт
Опора для `pre` — урок 4 кл. з `lessons`. Опора для `cur` — урок 5 кл. Кожен урок verified. Друга правильна відповідь шукалася серед: артиклів, прийменників, will / be going to, скорочень, місця прислівника, «pair/pairs», do/go.

| № | Тема | Мій розв'язок | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|---|
| 1 | have | has | e4s1l2, «I’ve got a brother»: he, she → has got | — | ✅ |
| 2 | freq | always | e4s3l2: always = every time; «every Saturday» | usually немає серед варіантів | ✅ |
| 3 | sport | do | e4s3l1: do gymnastics | — | ✅ |
| 4 | much | many | e4s4l3: bananas → How many | — | ✅ |
| 5 | someany | any | e4s2l5: any з not | some — ні (CD) | ✅ |
| 6 | cont (e4s6l2) | are playing | e4s6l2: Look! + are + -ing; підмет множини | — | ✅ |
| 7 | comp | faster | e4s6l5: fast → faster than | — | ✅ |
| 8 | when | on | e4s8l2: days → on | — | ✅ |
| 9 | past | went | e4s7l5: Yesterday… went | — | ✅ |
| 10 | will | visit | e4s7l6: will + verb | — | ✅ |
| 11 | freq | always go / am always / never play | e4s3l2: перед дієсловом, після be | «always am» — лише емфатично | ✅ |
| 12 | cur-e5s1 | his / their / Its | e5s1l3: his, their, its vs it’s | — | ✅ |
| 13 | have | Have / have / haven’t | e4s1l2: Have you got…? – Yes, I have. / No, I haven’t. | «haven’t got» у короткій відповіді — ні | ✅ |
| 14 | cur-e5s2 | Does / doesn’t / doesn’t live | e5s2l3: Does he…?, after doesn’t no -s | — | ✅ |
| 15 | sport | plays / goes / does | e4s3l1: play + ball, go + -ing, do + інші | «does cycling» — ні (вище) | ✅ |
| 16 | cur-e5s3 | a lot of / much / many | e5s3l4: (+) a lot of, (−) not much / not many | — | ✅ |
| 17 | much | much / many / much | e4s4l3: milk, bread → much; oranges → many | — | ✅ |
| 18 | cur-e5s4 | are / pairs / a pair of | e5s4l2: shorts are, two pairs of, a pair of | «two pair» — ні (OALD) | ✅ |
| 19 | someany | is / are / some | e4s2l5: короткі відповіді й some у (+) | — | ✅ |
| 20 | cur-e5s5 | more beautiful / worse / better | e5s5l4: more + довге слово; good → better, bad → worse | — | ✅ |
| 21 | cont (e4s8l5) | walk / am going / are playing | e4s8l5: usually → Present Simple; now, Look! → am/is/are + -ing | «Now I go» — ні (вище) | ✅ |
| 22 | cur-e5s6 | loves / doesn’t like / swimming | e5s6l2: шкала ●●● love, ●○○ don’t like; swim → swimming | likes серед варіантів немає | ✅ |
| 23 | comp | bigger / hotter / windier | e4s6l5: gg, tt, y → i; дані на екрані | — | ✅ |
| 24 | cur-e5s7 | between / opposite / next to | e5s7l3 + мапа на екрані (бібліотека сусідить з банком і поштою, навпроти неї музей; школа навпроти кінотеатру) | перевірено за координатами SVG: бібліотека не навпроти банку, школа не поруч із кінотеатром | ✅ |
| 25 | when | on / at / in | e4s8l2: days on, time at, months in | — | ✅ |
| 26 | cur-e5s8 | on / fifth / in | e5s8l2: a date → on, a month → in; the fifth of May | — | ✅ |
| 27 | past | went / was / swam | e4s7l5: went, swam; it → was | — | ✅ |
| 28 | cur-e5s9 | am / is / aren’t | e5s9l3: I am, he/she is, we aren’t going to | — | ✅ |
| 29 | will | won’t / I’ll / help | e4s7l6: won’t; «Offer help: I’ll help you!»; will + verb | be going to серед варіантів немає | ✅ |
| 30 | cur-e5s10 | the biggest / most beautiful / the best | e5s10l5: always say the; one of the most…; good → the best | — | ✅ |

**Одна проба — одна навичка.** Кожен `gaps` перевіряє одну тему одного уроку. У №19 два пропуски (Yes, there is / are) перевіряють короткі відповіді, а не some/any. Але це learned того самого e4s2l5, і помилка веде на той самий урок, тож це прийнятно.
**Покриття `cur`** (CONTENT_SCHEMA §9: завдання охоплює ядро learned). Межа тесту — 3 пропуски на `gaps`, тому деякі learned лишилися без перевірки: «How much/many?» у e5s3l4 (його тестує `pre` much), «dresses, feet, children» у e5s4l2, «Whose is it?» у e5s1l3. Це не блокує: головна граматика кожного уроку перевірена.
**Лексика.** Кожне слово умов є в уроках 4–5 кл. Перевірив вибірково grep: plane, beach, pool, chairs, lamp, shelf, oranges, storm, trip, season, school fair, gloves, post office, train tickets, heavy, near.

## `pre`: уроки, `for` і requires
| Тема | lessons | for (було → стало) | requires розділу містить урок? |
|---|---|---|---|
| have | e4s1l2 | e5s1 | e5s1 ✅ |
| freq | e4s3l2 | e5s2 | e5s2 ✅ |
| sport | e4s3l1 | e5s6 | e5s6 ✅ |
| much | e4s4l3 | e5s3 | e5s3 ✅ |
| someany | e4s2l5 | e5s3, e5s7 | обидва ✅ |
| cont | e4s6l2, e4s8l5 | e5s4 | e5s4 ✅ (обидва) |
| comp | e4s6l5 | e5s5, e5s10 | обидва ✅ |
| when | e4s8l2 | e5s8, e5s2 | обидва ✅ |
| past | e4s7l5 | e5s8, e5s9 | обидва ✅ |
| will | e4s7l6 | e5s9, **e5s5 → e5s9** | e5s9 ✅; у requires e5s5 (e4s6l1, e4s6l5) e4s7l6 **немає** |

`will → e5s5` прибрано, бо `for` має збігатися з requires. Тема змістовно стосується e5s5: у e5s5l5 є прогноз з will. Тому пропоную куратору додати e4s7l6 у requires e5s5, а тоді повернути e5s5 у `for` (рядок у inbox).
`baseline` немає, бо уроки 4 кл. існують. `lesson` стоїть лише на двох завданнях теми cont, як вимагає схема.

## Мапа e5s7
Завдання №24 показує img/eng/e5s7/town-map.svg (`fit: true`). `cap` «A map of the centre of Emma’s town» рушій бере як `alt` (app/app.js, `<img alt=cap>`). Підпис англійською, без emoji, відповіді не видає. Credits лежать у розділі e5s7: власний рисунок, CC0 1.0, рядок `credits` у content/eng/g5-e5s7.js. У тесті рівня власних credits немає, як і в CONTENT_SCHEMA §9. Підписи на мапі (Café, Bank, Library, Post office, Cinema, Park, Museum, School, Station) збігаються з текстом завдання.

## Герої
| Деталь у dge5 | Звірка | Вердикт |
|---|---|---|
| Taras: день народження 5 May (№26) | e5s8l2 `build`: «Taras writes about his birthday: 5 May» → «My birthday is on the fifth of May.»; pool-g5-e5s8: «Taras’s birthday is on 5 May», «When’s your birthday, Taras? – It’s on the fifth of May». **«My birthday is on 9 October»** з e5s8l2 — це `gaps` без `body` і без названого мовця. Taras туди не прив'язаний, суперечності немає | ✅ |
| Emma: день народження в травні (№25, №26) | inbox writer-e5s8; e5s8l1 «So Emma’s birthday is in May» | ✅ |
| Oksana: брат Dmytro, кузен Denys, без сестри; кішка Murka; тато Petro (№1, №12, №13) | inbox writer-e5s1; e5s1l3 «Whose is this red phone? – It’s Dad’s» | ✅ |
| Bohdan: теніс по суботах, автобусом, клас Andrii (№2, №14) | inbox writer-e5s2, writer-pe4s3, writer-dge4 | ✅ |
| Sofiia: gymnastics on Saturdays (№3) | inbox writer-pe4s3 | ✅ |
| Ostap: football on Mondays, cycling з Taras; Oksana karate (№15) | inbox writer-pe4s3; Oksana karate — запис автора (нове) | ✅ |
| Taras: сестра Zlata, кузина Marta (№10, №28) | inbox writer-e5s1, style-eng-g4-5 | ✅ |
| Mariia до школи з Polina (№21); Emma плаває (№11, №22) | inbox writer-e5s2, writer-e5s6 | ✅ |
| Нове: Taras із Zlata наступного тижня їдуть потягом до Kyiv; Taras купався в річці в Carpathians | суперечностей з inbox не знайшов. Канон про братів Тараса суперечливий (inbox verifier-e5s8 і verifier-e5s1), але dge5 братів не згадує | ✅ |

## Мова, BrE, формат
- AmE-правопису й лексики немає (centre, trainers, post office, cinema). Kyiv, Odesa, Lviv — за глосарієм. Без IPA і без «Listen». Літер A, B, C і позиційних посилань в `opts` немає. Інструкції «Choose the correct answer.» / «Fill in the gaps.» — рівень 5 кл.
- `fbOk`, `fbText`, `hint` і `uk` відсутні. Типи — `choice` і `gaps` (≤ 3 пропуски).
- Порядок: базові завдання всіх 10 тем `pre` (№1–10) стоять перед складнішими, тож адаптивність працює.

## Авторське право
Кожен gaps-текст має понад 12 слів. Шукав дослівно найдовші загальні фрагменти (WebSearch з лапками). Тексти з іменами героїв (Bohdan, Murka, Zlata, Polina) теж унікальні.
| Фрагмент | Результат |
|---|---|
| «I always go swimming on Saturdays. I am always happy in the pool» | збігу немає |
| «We’ve got a lot of eggs. But there isn’t much milk, and there aren’t many apples» | збігу немає |
| «How much milk have we got? How many oranges do we need? How much bread do we need?» | збігу немає: лише окремі шкільні діалоги з подібними питаннями, дослівного тексту немає |
| «I’ve got two pairs of trainers: white and blue. And I need a pair of gloves for winter» | збігу немає |
| «Is there a lamp on your desk? Yes, there is. Are there any books on your shelf?» | збігу немає (є типові вправи «Are there any books on the shelf?», але не цей текст) |
| «A storm is worse than a little rain. A sunny day is better for a picnic than a rainy day» | збігу немає |
| «I usually walk to school with Polina. But today it’s snowing» | збігу немає |
| «The post office is between the library and the cinema. The school is opposite the cinema» | збігу немає (є типові map-вправи з between) |
| «Yesterday we went to a river. The water was cold, but I swam in it» | збігу немає |
| «For me, Lviv is one of the most beautiful cities in Ukraine. Summer is the best season for a trip there» | збігу немає |
| «It’s cold and rainy. I think I won’t go to the park today» | збігу немає |
| «Our school fair is on Friday. It starts at 2 pm. My birthday is in May» | збігу немає |

## Правки (зроблені)
1. `will`: `for: ["e5s9", "e5s5"]` → `["e5s9"]`. Причина: e4s7l6 немає в requires e5s5 (див. вище).
2. `status: "draft"` → `"verified"`. `meta.factcheck: "self"` → `"verifier-dge5 (reports/verify/dge5.md)"`.
3. Коментар-заголовок файлу: рядок статусу.
Зміст, ключі й порядок завдань не змінювалися, тому `rev` не потрібен.

## Спостереження (не блокують)
- `why`: «from Year 4 and Year 5». У Британії Year 5 означає дітей 9–10 років, тобто український 4 клас. Можна писати нейтрально, як у dge4 («Let’s see what you know.»). Вирішувати style-sync.
- Покриття learned у `cur` часткове (див. вище) через межу 3 пропусків.
- Для «Kyiv — найбільше місто» бракує невікіпедійного джерела: домени заблоковано (див. «Факти»).

## Вердикт
dge5 — **verified**. Відкритих ❌ і ⚠️ немає. Наступний крок — `approved` від учителя.
