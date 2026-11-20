# Верифікація: пул pe4s6 «Nature and weather» (англійська, 4 кл.)

Верифікатор: verifier-pe4s6 (content-verifier), 2026-11-20. Пул я не писав. Перевіряв `content/eng/pool-g4-e4s6.js` (коміт 3e35b1c) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2б, §2в. Задача: tasks/review/write-eng-pool-g4-e4s6.md. Опора — уроки content/eng/g4-e4s6.js (verified) і e4s1–e4s5; reports/verify/e4s6.md.

**Вердикт: пул придатний, `verified`.** Неправильних ключів, правильних дистракторів, другої відповіді поза ключем у `build`, збігів з опублікованими текстами немає. Я зробив 3 дрібні правки (§5): рамка a42 зі словами, яких не було в уроках; відкрите питання a49; суперечність про героя в a53. Людині нових питань немає, TQ не додавав.

## 1. Схема й механіка

| Перевірка | Результат |
|---|---|
| `node tools/validate.mjs --pool pe4s6` (до і після правок) | 0 помилок, 0 попереджень |
| `node tools/personalization-qa.mjs --pool pe4s6 --strict` | до правок — лише «ще не verified»; після — без зауважень (6 уроків, 56 вправ) |
| Типи (POOL_TYPES, app/learn.js:2009–2011): gaps, word, pick, build, match, stress, choice | усі дозволені; `choice` — лише read (a29, a54) |
| `sources`: `top34`, `program: true`; усі `src` — «top34 с. 63» | ✅ збігається з reports/verify/e4s6.md §1 (с. 63 — Present Continuous, comparatives, ‘how’ questions) |
| Межі: gaps ≤ 6 пропусків; build ≤ 9 плиток / ≤ 2 extra | ✅ (найбільше — a46: 5 + 1) |
| Покриття урок × sk (≥ 3, рівні 1–3) | l1 vocab 4 (1,1,2,3) · phon 3 (1,2,3); l2 gram 6 · write 3 (1,2,3); l3 gram 5 · func 4 (1,2,2,3); l4 vocab 3 · read 3 · gram 3 · phon 3 — усі 1,2,3; l5 gram 6 · write 3 (1,2,3); l6 vocab 3 · gram 4 · read 3 (1,2,3). Усі `sk` — з оцінюваних екранів свого уроку ✅ |
| Ключі `word` без кінцевого `.!?` | ✅ усі 14 (a04, a09, a10, a13, a18, a23, a28, a31, a33, a39, a40, a42, a49, a51) |
| `build`: перебір **усіх перестановок усіх підмножин** плиток разом з extra через `SLID_LANG.check(s, order, "en")` (app/lang.js у node vm; скрипт /tmp/claude-0/-home-user-slid/cdcc8e27-2339-504a-b8a4-5bf593ec4683/scratchpad/verify-pe4s6/run.mjs) | a15, a19, a21, a52 — по 325 рядків, a46 — 1956; рушій приймає **лише ключ** у кожній |
| `word` через `SLID_LANG.wordVerdict(s, v, "en")` | ключі, «Key.», ВЕЛИКІ — ok; помилки правопису — Almost; хибні слова (winter, high, big, warmer, more cold, paper) — ні |
| A/B/C, позиційні посилання, «Listen», IPA, `uk` | немає |

## 2. Факти: твердження → джерела (відкрито в цій сесії, curl) → вердикт

| Твердження (вправа) | Джерела | Вердикт |
|---|---|---|
| Thames — river in England, 346 km; London is on the Thames (a26, a30, a33) | en.wikipedia `length = {{cvt|215|mi|km}}`, «flows through southern England including London» — https://en.wikipedia.org/wiki/River_Thames; uk.wikipedia «довжина = 346 км» — https://uk.wikipedia.org/wiki/Темза | ✅ |
| Ben Nevis — mountain in Scotland, 1,345 m (a28, a30) | en.wikipedia «elevation_m = 1,345», «highest mountain in Scotland» — https://en.wikipedia.org/wiki/Ben_Nevis; uk.wikipedia «1345 м… Шотландії» — https://uk.wikipedia.org/wiki/Бен-Невіс | ✅ |
| Hoverla — mountain, 2,061 m (a26, a34) | ЕСУ «Вис. 2061 м» — https://esu.com.ua/article-25087; en.wikipedia «elevation_m = 2061» — https://en.wikipedia.org/wiki/Hoverla; uk.wikipedia «2061 м» — https://uk.wikipedia.org/wiki/Говерла | ✅ |
| Dnipro — river, about 2,200 km (a27, a34) | ЕСУ «загальна довжина становить 2200 км» — https://esu.com.ua/article-22159; en.wikipedia «length = 2201 km… variously given as 2145 km or 2201 km» — https://en.wikipedia.org/wiki/Dnieper; uk.wikipedia «довжина = 2201 км» — https://uk.wikipedia.org/wiki/Дніпро | ✅ («about») |
| Ukraine about 600,000 km² (a34, a40) | en.wikipedia «area_km2 = 603,628» — https://en.wikipedia.org/wiki/Ukraine; uk.wikipedia «603700 км²» — https://uk.wikipedia.org/wiki/Україна | ✅ |
| UK about 240,000 km² → Ukraine is bigger (a40) | en.wikipedia «area_km2 = 244376» — https://en.wikipedia.org/wiki/United_Kingdom; uk.wikipedia «area = 242 495» — https://uk.wikipedia.org/wiki/Велика_Британія | ✅ |
| **«In winter, Kyiv is usually colder than London»** (a45) | Київ: en.wikipedia «Jan high C = -0.8, Jan low C = -5.5» — https://en.wikipedia.org/wiki/Kyiv; ЕСУ «Середня температура січня –6,0 °С» — https://esu.com.ua/article-11194. Лондон: en.wikipedia Climate of London «Jan high C = 8.5, Jan low C = 5.0» — https://en.wikipedia.org/wiki/Climate_of_London; uk.wikipedia «Січ_сер= 5.5» — https://uk.wikipedia.org/wiki/Лондон | ✅ збігається з reports/verify/e4s6.md §2 (там Київ −3.2 / −6.0; будь-яке значення нижче лондонського) |
| Температури «today» (a39, a41, a44, a45, a46, a42) | — | ✅ погода вигаданого дня на екрані, не клімат; −5 °C / snowy (a45) правдоподібно для зими |

### Форми й наголос (CD і OALD, curl у цій сесії)
| Що | CD | OALD | Вердикт |
|---|---|---|---|
| `stress`: winter, summer, autumn, weather, Saturday, river, forest, mountain, nature, garden — 1-й склад; computer, assistant — 2-й | UK /ˈwɪn.tər/, /ˈsʌm.ər/, /ˈɔː.təm/, /ˈweð.ər/, /ˈsæt.ə.deɪ/, /ˈrɪv.ər/, /ˈfɒr.ɪst/, /ˈmaʊn.tɪn/, /ˈneɪ.tʃər/, /ˈɡɑː.dən/, /kəmˈpjuː.tər/, /əˈsɪs.tənt/ — https://dictionary.cambridge.org/dictionary/english/<word> | /ˈwɪntə(r)/, /ˈsʌmə(r)/, /ˈɔːtəm/, /ˈweðə(r)/, /ˈsætədeɪ/, /ˈrɪvə(r)/, /ˈfɒrɪst/, /ˈmaʊntən/, /ˈneɪtʃə(r)/, /ˈɡɑːdn/, /kəmˈpjuːtə(r)/, /əˈsɪstənt/ — https://www.oxfordlearnersdictionaries.com/definition/english/{winter_1, summer_1, autumn, weather_1, saturday, river, forest, mountain, nature, garden_1, computer, assistant} | ✅ один наголос у кожному, склад збігається з ключем; усі слова мали `<u>` в e4s1–e4s6 (Saturday — e4s3, garden — e4s2, assistant — e4s4, computer — e4s5) |
| fall (a04, AmE у ключі) | «US ( UK autumn )» — …/english/fall | fall_2 «(North American English) (also especially British English autumn)» | ✅ у ключі поруч з autumn — допустимо (рішення людини, TQ-122) |
| litter, trash, garbage (a49) | — | litter_1 «small pieces of rubbish…»; trash_1 «(North American English) things that you throw away»; garbage «(especially North American English) waste food, paper, etc.» | ✅ |
| cooler (a39), larger (a40) | cool: «…cooler than the optimum temperature»; large: «We need a larger car» | cool_1 «(comparative cooler)… fairly cold»; large «(comparative larger)… big in size» | ✅ правильно, що в ключі |
| wood = forest (a31) | за reports/verify/e4s6.md (CD wood «A2… an area of land covered with… trees») | — | ✅ у ключі, як в уроці l4 |

## 3. Вправи: моє розв'язання → опора (D-019) → друга відповідь → вердикт

Кожну вправу я розв'язав до звірки з ключем. Збіглося 56 / 56.

| Вправа | Моя відповідь | Опора | Друга правильна? | Вердикт |
|---|---|---|---|---|
| a01 match | Dec→winter, Apr→spring, Jul→summer, Oct→autumn | l1 info #3 | біекція однозначна | ✅ |
| a02 match | sun→sunny, rain→rainy, snow→snowy, wind→windy | l1 info #5 | ні; cloud свідомо немає (дощ ⇒ хмарно) | ✅ |
| a03 gaps | autumn, rainy, cold | l1 info #3, #5; «It isn’t warm» | ні: дистрактор погоди sunny суперечить «a lot of rain» | ✅ |
| a04 word | autumn | l1 info #3 | fall (AmE) — у ключі | ✅ |
| a05–a07 stress | win, sum / au, weath, Sat / weath, pu, au | `<u>` l1 і e4s3, e4s5; CD+OALD | — | ✅ |
| a08 gaps | is, are, am | l2 info #3 | ні | ✅ |
| a09, a10, a13 word | playing, making, running | l2 info #5 (play, make, run — є в списку) | ні: `body` задає -ing від конкретного дієслова | ✅ |
| a11 pick | [are] (Tom are) | l2 info #3 | «Mum and I are walking» правильне | ✅ |
| a12 gaps | isn’t, aren’t | l2 info #5 | ні | ✅ |
| a14 gaps | is, is playing, am looking | l2 info #3 | ні | ✅ |
| a15 build | She is reading a book. | l2 info #3 | «Is she reading a book» — відсічено «tells… Make his sentence»; рушій приймає лише ключ | ✅ |
| a16 gaps | isn’t, are walking, is making, am writing | l2 info #3, #5 | ні | ✅ |
| a17 gaps | Is, Are, Is | l3 info #3 | ні | ✅ |
| a18 word | is | l3 info #3 | «’s» у пропуск після What — неприродно, не ставлю | ✅ |
| a19 build | Is your mum making a cake? | l3 info #3 | розповідний порядок відсічено «Make her question» | ✅ |
| a20 pick | [Are] Sofiia | l3 info #3 | ні | ✅ |
| a21 build | What are the boys doing? | l3 info #3 | «the boys are doing what» — ехо-питання, не A1 (як рішення verifier-e4s6) | ✅ |
| a22 gaps | is, I’m not, are | l3 info #3 | ні | ✅ |
| a23 word | are | l3 info #3 (коротка відповідь) | ні; «they’re» в кінці неможливе | ✅ |
| a24 match | it→No, it isn’t; you→Yes, I am; they→Yes, they are; Sofiia→No, she isn’t | l3 info #3 | біекція однозначна за займенником | ✅ |
| a25 gaps | Are, I’m not, Is, isn’t | l3 info #3 | ні | ✅ |
| a26 match | mountain, river, sea, forest | l4 info #2, #4 | ні | ✅ |
| a27 gaps | forest, mountain, rivers | l4 info #2 | ні | ✅ |
| a28 word | mountain | l4 info #2 («very high: Hoverla») | hill — у e4s1–e4s6 немає | ✅ |
| a29 choice | a river | текст на екрані | «mountains» заперечено, sea не згадано | ✅ |
| a30 gaps | Thames, Scotland, 346 | текст на екрані | ні | ✅ |
| a31 word | forest | текст на екрані | wood — у ключі | ✅ |
| a32 gaps | long, high, big | l4 info #6 | tall серед варіантів немає | ✅ |
| a33 word | long | l4 info #6 + «346 km long» на екрані | ні (big, high — хибні) | ✅ |
| a34 gaps | long, high, km² | l4 info #6 | ні | ✅ |
| a35–a37 stress | riv, for / moun, na, gar / for, sis, moun | `<u>` l4, e4s2, e4s4 | — | ✅ |
| a38 gaps | colder, higher | l5 info #3 | ні | ✅ |
| a39 word | colder | числа на екрані + l5 info #3 | cooler — у ключі | ✅ |
| a40 word | bigger | числа на екрані + l5 info #5 | larger — у ключі | ✅ |
| a41 pick | [hoter] | l5 info #5 | ні; дані 28/20 узгоджені з «colder» | ✅ |
| a42 word | sunnier | l5 info #5 (sunny → sunnier) | ні: `body` задає -er від sunny | ✅ після правки 1 |
| a43 gaps | bigger, hotter, sunnier, windier | l5 info #5 | ні | ✅ |
| a44 gaps | hotter, colder | числа + l5 info #3, #5 | ні | ✅ |
| a45 gaps | rainy, colder, colder | екран + l5 Final (факт §2) | ні | ✅ |
| a46 build | Kyiv is hotter than Lviv. | числа + l5 info #5 | «Lviv is hotter than Kyiv» — проти даних; плитки today немає | ✅ |
| a47 match | trees, in the bin, the tap, the birds | l6 info #3 | «Feed trees» окремо можливе, але тоді «Plant the birds» — біекція однозначна | ✅ |
| a48 gaps | bin, tap, birds | l6 info #3 | ні | ✅ |
| a49 word | rubbish | l6 info #3 | litter / trash / garbage — у ключі; «paper» — див. правку 2 | ✅ після правки 2 |
| a50 gaps | Don’t leave, Plant | l6 info #3; імператив — e4s5l1 | ні | ✅ |
| a51 word | planting | l2 info #5 (play → playing, без змін) | ні | ✅ |
| a52 build | He is feeding the birds. | l2 info #3 | питання відсічено «tells» | ✅ |
| a53 pick | [is] (Nazar and Dmytro is) | l2 info #3 | «Our school is», «I am» правильні | ✅ після правки 3 |
| a54 choice | the river | текст постера | ні | ✅ |
| a55 gaps | forest, is picking up rubbish | текст на екрані | ні | ✅ |
| a56 gaps | winter, are putting food on the trees | текст на екрані | ні | ✅ |

**Лексика:** слова пулу звірено `grep` з e4s1–e4s6. Поза уроками були лише *yesterday* і *was* в a42 (правка 1). *notes* (a30, інструкція) є як *note* в e4s4 — прийнятно.

**Спірні місця автора** (нотатки задачі, «Друга правильна відповідь — що вирішено»): 1) a04 fall у ключі — приймаю (TQ-122, рішення людини); 2) forest/wood, colder/cooler, bigger/larger, rubbish/litter/trash/garbage — приймаю, словники вище; 3) a33 ключ long, Ben Nevis з tall не взято — приймаю; 4) build з «tells / Make his question», a21 без ехо-питання, a46 без плитки today — приймаю, перебір підтвердив. Almost-мітка для «mountains» / «forests» після «a» (a28, a31) — вердикт правильний (неправильно), мітка неточна. Це відомий ENGINE-рядок (engine-rule-tables), не блокує.

**Герої:** канон дотримано (Oksana — Poltava, Dmytro, Nazar; Andrii — Kyiv, Sofiia; Emma — Tom, місто з річкою і лісом; Taras — Lviv), крім a53 (правка 3).

## 4. Авторське право (фрагменти ≥ 12 слів, WebSearch з лапками, 2026-11-20)

| Фрагмент | Запит | Результат |
|---|---|---|
| a29 Emma | "There is a river in my town, but it isn't very long" | збігу немає |
| a54 постер | "Don't leave rubbish near the water. Put it in the bin" | збігу немає (лише загальні поради муніципалітетів іншими словами) |
| a31 Oksana | "There aren't any mountains here, and there isn't a sea" | збігу немає |
| a56 Oksana | "In winter, my class feeds the birds in the school garden" | збігу немає |
| a56 | "Nazar and I are putting food for the birds on the trees" | збігу немає |
| a55 Emma | "We aren't playing today. We're picking up rubbish" | збігу немає |
| a30 нотатки | "The Thames is a river in England. It's 346 km long. London is on the Thames" | дослівного збігу немає (лише дзеркала Вікіпедії з фактом) |
| a16 Emma | "It's windy in my town today, but it isn't raining. Tom and Dad are walking in the park" | збігу немає |

## 5. Правки, які я зробив сам (content/eng/pool-g4-e4s6.js)

1. **a42:** рамка «Today it’s sunny, but yesterday was ___.» мала *yesterday* і минуле *was*, яких немає в e4s1–e4s6 (D-019, лексика лише з уроків). Тепер `body` «Lviv is sunny today. Kyiv is very sunny. Write the -er form: sunny → ?», `before` «Kyiv is», `after` «than Lviv today.». Ключ той самий: sunnier. Це модель уроку (X is …-er than Y).
2. **a49:** питання «What do we put in the bin?» відкрите: «paper», «bottles» теж правильні, а рушій їх не прийме (друга правильна відповідь). Тепер `body` «Don’t leave it in the forest! Write the word from the lesson.», `before` «Put», hint «Help nature: put … in the bin. It starts with r.», `steps[0]` узгоджено. Ключ той самий.
3. **a53:** «Today our class is in the forest. Nazar and Dmytro…». Dmytro — шестирічний брат Oksana (inbox verifier-e5s3), у її класі бути не може. Замінив «our class» на «our school» (як в уроці l6 intro «Her school is in the park»), так само в `steps`. Мішень pick та сама.
4. `status: "verified"`, `meta.factcheck: "verifier-pe4s6 (reports/verify/pe4s6.md)"`.

id вправ не змінювалися. Після правок validate — 0/0; personalization-qa `--strict` без зауважень; перебір і wordVerdict повторено для a42, a49, a53.

## 6. Рекомендовано (не блокує)
1. `python3 tools/test-answer-ui.py --suite content --pool pe4s6` не запускався: браузерний, паралельно з іншими агентами. Запустити оркестратору після build, по одному.
2. ENGINE (вже в inbox): Almost-мітка для форми множини («mountains», «forests») на ключ в однині.

## 7. Вердикт
**pe4s6 — `verified`.** Людині питань немає. `approved` ставить лише вчитель.
