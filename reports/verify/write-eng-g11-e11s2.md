# Верифікація e11s2 «Food and recipes» (eng, 11 кл., B2)

Верифікатор: verifier-e11s2, 2026-11-26 (свіжий контекст, розділ не писав). Файл: `content/eng/g11-e11s2.js`. Задача: `write-eng-g11-e11s2`.
Скіл: content-verify (розділ «Англійська»). `node tools/validate.mjs --section e11s2` — 0 помилок, 0 попереджень (до і після правок).

**Вердикт по розділу: verified** (усі 7 уроків). Правок: 2 (одна критична — build, одна уточнення — elevenses). Людині: approved за вчителем; рекомендації нижче — не блокують.

## 1. Факти

| Твердження (екран) | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Pampushky — невеликі булочки з дріжджового тіста; солоні — з часниковою заправою, до борщу; бувають солодкі з варенням (l6 екр. 7) | https://en.wikipedia.org/wiki/Pampushka (curl: «small savory or sweet yeast-raised bun… seasoned with garlic sauce… side dish with red borscht… Sweet pampushky may be filled with… varenye»); https://www.nigella.com/recipes/guests/olia-hercules-ukrainian-garlic-bread-pampushky , https://www.sbs.com.au/food/recipes/garlic-pampushky-dinner-rolls (WebSearch: yeasted dough, sunflower oil + garlic, dill, з борщем) | ✅ |
| «Ukraine is one of the world’s biggest producers of [sunflower oil]» (l6 екр. 9, слова бабусі) | https://en.wikipedia.org/wiki/Sunflower_oil (curl: 2022 — Russia 30 %, Ukraine 23 % світового виробництва); https://www.fas.usda.gov/sites/default/files/2022-04/Ukraine-Factsheet-April2022.pdf (WebSearch-уривок: «Ukraine produces one-third of the world's sunflower oil and accounts for nearly half of global exports»; прямий curl — 403 проксі); https://ukragroconsult.com/en/news/ukraine-loses-global-lead-in-sunflower-oil-exports-for-the-first-time-in-20-seasons/ (WebSearch: 2025/26 Росія вперше обігнала з експорту). Формулювання «one of the biggest producers» коректне; «the biggest» було б хибним | ✅ |
| tbsp = 15 ml, tsp ≈ 5 ml (l6 екр. 3) | https://en.wikipedia.org/wiki/Tablespoon («international metric tablespoon, used in the UK… exactly 15 mL»); https://en.wikipedia.org/wiki/Teaspoon («metric teaspoon — precisely 5 millilitres»); WebSearch «metric tablespoon 15 ml teaspoon 5 ml UK» (NIST https://www.nist.gov/pml/owm/metric-si/metric-kitchen/metric-kitchen-cooking-measurement-equivalencies). CD tablespoon мл не дає (нотатка автора «15 millilitres» у CD не підтвердилась — факт від цього не хибний) | ✅ |
| 200 °C, 20 хв, 500 g / 7 g / 300 ml — родинний вигаданий рецепт, у межах типових пропорцій | ті самі рецепти (WebSearch) | ✅ (не факт, а рецепт) |

## 2. Форми й норма (CD + OALD, curl)

| Форма | CD | OALD / друге | Вердикт |
|---|---|---|---|
| millilitre | «UK (US milliliter)» dictionary.cambridge.org/dictionary/english/millilitre | «(US English milliliter) (abbreviation ml)» oxfordlearnersdictionaries.com/definition/english/millilitre | ✅ BrE у тексті |
| elevenses | «noun [plural] UK informal», /ɪˈlev.ən.zɪz/ | «(British English, old-fashioned, informal)» …/elevenses | ⚠️→✅ додано «(UK, informal, a bit old-fashioned)»; для B2 доречне як культурне слово в `info`, не активний словник (оцінюється лише наголос, опора — `<u>`) |
| tea = вечірня їжа | «UK a meal that is eaten in the early evening and is usually cooked» …/tea | «(British English) a light meal eaten in the afternoon or early evening» …/tea_1 | ✅ (обидва значення в екр. 3) |
| flapjack | «UK a type of sweet, chewy cake made from oats» | «(British English) a thick soft biscuit made from oats…» …/flapjack | ✅ |
| pinch | «the amount that a person can hold between their first finger and thumb» | — (CD достатньо для значення; hyp-екран) | ✅ |
| clove | «a small separate part of a bulb of garlic» | — | ✅ |
| plenty of | CD Grammar Plenty: «Not: We’ve got plenty time» | OALD plenty_1: «plenty of eggs/money/time» | ✅ (l2 pick) |
| hardly any | CD Grammar Hardly: «Not: hardly no one» | OALD hardly: «almost no; almost none» | ✅ |
| a great deal of / a large number of | CD Grammar Lots, a lot, plenty: «a great deal of (+ singular uncountable) or a large number of (+ plural) in more formal styles» | OALD deal_2 «a great deal of money» | ✅ |
| few / little formal | CD Grammar Little, a little, few, a few: «They are used in formal contexts» | — | ✅ (l3 екр. 5) |
| none of + однина / множина | CD Grammar None: «In formal styles… singular verb… informal… plural»; «Not: None of us» для двох | OALD none_1: «in British English you can use either a singular or a plural verb» | ✅ (обидва в ключі l5 екр. 6) |
| neither of + verb | CD Grammar Neither | OALD neither_1: «Neither of them has/have a car» | ✅ (дієслово в завданнях дане, не оцінюється) |
| almost every, not almost each; every one of, not every of | CD Grammar Each or every?: «Not: Almost each car…», «Not: Every of us…» | OALD every: «Every one of their songs…» | ✅ |
| наголос takeaway, smoothie, sparkling, nutritious, affordable, convenient, priority | CD UK: /ˈteɪk.ə.weɪ/, /ˈsmuː.ði/, /ˈspɑː.klɪŋ/, /njuːˈtrɪʃ.əs/, /əˈfɔː.də.bəl/, /kənˈviː.ni.ənt/, /praɪˈɒr.ə.ti/ | — | ✅ |

BrE-лексика й правопис: Mum, flat, crisps, pupils, takeaway, tea towel, baking tray, plain flour, yoghurt, favourite, penfriend, head teacher, at the weekend, learnt — ✅. AmE-правопису в тексті немає (grep). IPA, «Listen», літер A/B/C, позиційних посилань — немає.

## 3. Завдання → розв'язок → опора (D-019)

| Екран | Мій розв'язок | Опора | Вердикт |
|---|---|---|---|
| l1/2 choice hyp | the evening meal | здогадка `hyp` до теорії | ✅ |
| l1/5 match | 1:1 за порядком; других доречних пар немає | екр. 3 | ✅ |
| l1/6 choice | buy from restaurant, eat at home | уривок + екр. 3 | ✅ |
| l1/7 multi | takes food from home; dinner main | уривок | ✅ |
| l1/8 choice | mum works late | уривок | ✅ |
| l1/9 gaps | light · sparkling · filling | екр. 4 | ✅ |
| l1/10 word | brunch (без кінцевого знака) | екр. 3 | ✅ |
| l1/11 stress | take / lev / smoo / spar | `<u>` екр. 3–4; CD | ✅ |
| l1/12 gaps | starving · packed lunch · takeaway · sparkling | екр. 3–4 | ✅ (див. рек. 1) |
| l2/2 choice hyp | almost no sugar | hyp | ✅ |
| l2/4 gaps | much · many · lots of (many не дано хибним у стверджувальному) | екр. 3 | ✅ |
| l2/6 sort | GDO, much / LNO, many / plenty, hardly any, lots of | екр. 3, 5 | ✅ |
| l2/7 multi | plenty of, lots of, a lot of | екр. 3, 5 | ✅ |
| l2/8 choice | A large number of | екр. 5 | ✅ |
| l2/9 pick | [plenty] (time) | екр. 5 «Not: plenty flour» | ✅ |
| l2/10 word | hardly (scarcely, barely в ключі) | екр. 5 | ✅ |
| l2/11 gaps | plenty of · A large number of · hardly any | екр. 5 | ✅ |
| l3/2 choice hyp | not many | hyp | ✅ |
| l3/4 gaps | a little · Few · a few | екр. 3; контекст («so I added», «almost always empty», «Do you want one?») відсікає другий | ✅ |
| l3/6 multi | Few, Very few, Only a few | екр. 3, 5 | ✅ |
| l3/7 sort | 3 good / 3 bad | екр. 3, 5 | ✅ |
| l3/8 pick | [a little] eggs | екр. 3 | ✅ |
| l3/9 word | little | екр. 3, 5 | ✅ |
| l3/10 choice | not much food for vegetarians | текст | ✅ |
| l4/2 poll | без правильної відповіді, без `correct` | — | ✅ |
| l4/4 match | 1:1 | екр. 3 | ✅ |
| l4/5 stress | tri / ford / ve / or | `<u>` екр. 3; CD | ✅ |
| l4/8 gaps | Neither · either · Both | екр. 7; body відсікає Either/Both у 1-му, «they’re both easy» — neither у 2-му | ✅ |
| l4/9 choice | Neither family has a takeaway every day | текст | ✅ |
| l4/10 build | Taste matters more to me than price | екр. 6 | ❌→✅ (правка 1) |
| l4/11 word | neither (none — для двох хибне, CD) | екр. 7 | ✅ |
| l4/12 gaps | priority · whereas · Neither · affordable | екр. 3, 6, 7 | ✅ |
| l5/2 choice hyp | Most people | hyp | ✅ |
| l5/4 gaps | Most · Most of · None of · of us | екр. 3 | ✅ |
| l5/6 multi | eats, eat, Each of us | екр. 5 | ✅ |
| l5/7 pick | [Most of] people | екр. 3 | ✅ |
| l5/8 build | Each of us chose one favourite snack (інших порядків немає; пастка every не дає правильного речення) | екр. 5 | ✅ |
| l5/9 word | none (not one в ключі) | екр. 5 | ✅ |
| l5/10 choice | None of the members has… | текст | ✅ |
| l6/2 choice hyp | finger and thumb | hyp | ✅ |
| l6/4 match | 1:1 | екр. 3 | ✅ |
| l6/6–8 читання | never written down · 2 tbsp + an hour · while in the oven | уривки на тих самих екранах | ✅ |
| l6/9 order | Mix → Knead → Leave → Bake → Brush (єдиний) | уривки екр. 7–8 | ✅ |
| l6/10 gaps | cloves · pinch · bunch · tablespoons | екр. 3, 7 | ✅ |
| l6/11 word | millilitres (AmE milliliters у ключі) | екр. 3 | ✅ (див. рек. 2) |
| l6/12 gaps | grams · millilitres · smooth · pinch | екр. 3, 7 | ✅ |
| l7 Task 1–9 | takeaway · plenty of/hardly any · A great deal of · Few people · a little/Few · Neither/either · seasonal · [0, 2] · cloves/pinch/tablespoons | l1–l6 (`pre` вірні) | ✅ |

## 4. Друга правильна відповідь

- **l4 екр. 10 build — ❌ виправлено.** Ключ мав 3 порядки, бракувало граматичних: **«Taste matters more than price to me.»** (найприродніший), «Taste to me matters more than price.» (= Taste, to me, …), «More than price taste matters to me.» (= More than price, …; коми рушій не вимагає — так само, як уже прийнятий «To me taste matters…»). Додано всі три; validate 0/0.
- Quantifiers: a lot of / lots of / plenty of — разом лише в `multi` (усі три правильні); жодного gaps, де вони конкурують. few / a few, little / a little — значення задане контекстом. both / either / neither — число іменника й зміст відсікають. none of + однина/множина — обидва в ключі (l5/6); у gaps дієслово дане. each / every — не протиставлені в одному пропуску. whereas / while — у gaps варіант лише whereas | because. ✅
- Пастки build `extra`: that (l4), every (l5) — не дають правильного речення, регістр/AmE не збігаються. ✅
- `word`: кінцевого `.!?` у ключах немає. ✅

## 5. Педагогіка, рівень, авторське право

- Проблема → hyp → теорія → вправи в кожному уроці; поясненнями B2-рівня, речення ≤ 20 слів, `info` ≤ 80 слів.
- Харчування без медичних порад і дієт: «nutritious», «junk food» — нейтральні визначення; «priorities» — `poll` без правильної відповіді, fbText «There’s no wrong answer». Andrii «skip breakfast… not the best start» — без порад. ✅
- Діалоги — репліками `<b>Ім'я:</b>` в `body` (D-056), без `dialog`, без звуку. ✅
- Україна: Oksana / Zelena Dolyna, Andrii / Kyiv, Mariia / Kharkiv, pampushky, соняшникова олія. Kyiv без *the*. ✅
- `requires` (e5s3l2–l4, e6s2l3, e6s3l3, e7s2l3, e7s2l4, e8s2l2, e9s9l3) — усі id знайдено в content/eng/g5-e5s3.js, g6-e6s2.js, g6-e6s3.js, g7-e7s2.js, g8-e8s2.js, g9-e9s9.js. ✅
- Авторське право (WebSearch з лапками, збігів немає):

| Фрагмент | Результат |
|---|---|
| “On school days, I don’t have time for a big breakfast. I just have a bowl of cereal and a glass of milk” | збігу немає |
| “I’m not a morning person, so I often skip breakfast and buy a pastry on the way to school” | збігу немає |
| “The new café on our street looks great, but few pupils eat there” | збігу немає |
| “Grandma learnt the recipe from her mother when she was about ten. She has never written it down” | збігу немає |
| “Hot milk kills the yeast… and then the dough won’t rise” | збігу немає |

- stats: прапорці «нетипово для сім'ї» лише в уроках читання l1, l6 (повний текст П1407) — у межах профілю, validate без попереджень; калібрування — після сім'ї 11 кл. (як e10s3).

## 6. Правки

Зроблені:
1. l4 екр. 10 `build.answer` + 3 порядки (критично, друга правильна відповідь).
2. l1 екр. 3: «elevenses (UK)» → «(UK, informal, a bit old-fashioned)» (OALD: old-fashioned).
3. `status: "verified"` у 7 уроках, `meta.factcheck`, рядок статусу в шапці.

Рекомендовані (не блокують):
1. l1 екр. 12: «I try not to drink fizzy drinks now: I prefer sparkling water» — у BrE fizzy drinks = солодкі газовані напої (CD fizzy, приклади «chocolate bars and fizzy drinks»), але слово fizzy в уроці не пояснено, і поруч із «sparkling = with bubbles» звучить парадоксально. Можна «sweet fizzy drinks» або рядок у екр. 4: «fizzy drinks → sweet drinks with bubbles, like cola».
2. l6 екр. 11: AmE «milliliters» у ключі приймається без примітки «In British English…», бо millilitre (і tablespoon-похідні) немає в SPELL-списку app/lang.js (є litre, millimetre, centimetre). IDEA в inbox: додати millilitre(s) у список — тоді `milliliters` з ключа можна прибрати.

## 7. Вердикт по уроках

| Урок | Вердикт |
|---|---|
| e11s2l1 Meals, snacks and drinks | verified |
| e11s2l2 Plenty of, hardly any | verified |
| e11s2l3 A few or few? | verified |
| e11s2l4 Food priorities | verified (після правки 1) |
| e11s2l5 Most of us, none of them | verified |
| e11s2l6 A family recipe | verified |
| e11s2l7 Our club cookbook (фінал) | verified |
