# Верифікація e10s3 «Food and habits» (eng, 10 кл.) — verifier-e10s3, 2026-11-26

Файл: content/eng/g10-e10s3.js. Скіл content-verify (§2–§7 + «Англійська»). Розділ не писав.
Прогони: `validate --section e10s3` — 0/0 (до й після правок); `euphony --section e10s3` — без знахідок; `stats --subject eng` — e10s3l1 «нетипово для сім'ї» (readWordsPerScreen, maxText, z=2): урок читання з трьома уривками за обсягом П1407 с. 21, у межах профілю 10–11; сім'я 10 кл. ще мала — пояснено, не блокує. Плейтест — не запускався (у контейнері немає Python-модуля playwright; лишається CI, job browser).
Недоступні в сесії (WebFetch ENOTFOUND): ich.unesco.org, www.nhs.uk, english.nv.ua — сторінки взято з видачі WebSearch (URL нижче).

## 1. Факти
| Твердження | Джерела (відкриті в сесії) | Вердикт |
|---|---|---|
| 2022 — UNESCO внесла «Culture of Ukrainian borscht cooking» до списку, що потребує термінової охорони (l1) | https://ich.unesco.org/en/news/culture-of-ukrainian-borscht-cooking-inscribed-on-the-list-of-intangible-cultural-heritage-in-need-of-urgent-safeguarding-13412 (WebSearch, 5.EXT.COM, 1.07.2022); https://www.kmu.gov.ua/en/news/oleksandr-tkachenko-vidteper-ukrayinskij-borshch-oficijno-pid-zahistom-yunesko-nihto-ne-maye-prava-privlasnyuvati-nashe; https://www.aljazeera.com/amp/news/2022/7/1/unesco-ukraine-borshch | ✅ |
| Banosh — гуцульська страва Карпат, кукурудзяна крупа на сметані, з бринзою; вівчарі на вогні (як слова гіда) | https://en.wikipedia.org/wiki/Banosh (WebFetch: cornmeal + smetana, Hutsul, bryndza); https://www.chefspencil.com/recipe-banosh-ground-corn-dish/, https://eng.obozrevatel.com/section-food/news-how-to-properly-cook-traditional-hutsul-banosh-a-dish-known-for-generations-20-01-2024.html (WebSearch: shepherds, open fire) | ✅ (вівчарі — переказ «Our guide told us», доречно) |
| brynza — написання за КМУ № 55 (бринза), en.wikipedia — bryndza | en.wikipedia Banosh | ✅ (пояснено в тексті «a salty sheep's cheese») |
| Haggis — «national dish», з частин вівці (heart, liver), oats, onions, spices; Burns Night 25 January — день народження Burns; neeps and tatties; вірш про хаґіс | CD https://dictionary.cambridge.org/dictionary/english/haggis («a dish from Scotland consisting of different sheep's organs cut up with oatmeal, onions, and spices»); https://en.wikipedia.org/wiki/Address_to_a_Haggis, https://nts.org.uk/stories/address-to-a-haggis, https://www.edinburghnews.scotsman.com/lifestyle/family/address-to-a-haggis-lyrics-of-the-burns-night-poem-why-we-eat-haggis-and-how-to-cook-a-burns-supper-3111927 (WebSearch: 25 January, poet's birthday; poem recited as the haggis is served) | ✅ після правки (було «Before the meal» — вірш читають, коли вносять і розрізають хаґіс; стало «Before they eat the haggis») |
| neeps = swede (BrE) | CD https://dictionary.cambridge.org/dictionary/english/neeps («Scottish English … a round root vegetable with dark yellow flesh and a brown or purple skin» = визначення swede, CD …/swede); https://en.wiktionary.org/wiki/neep «(chiefly Scotland) The swede (rutabaga); turnip» | ✅ |
| Chicken Kyiv: масло всередині, панірування; походження невідоме; 1979 — M&S почав продавати охолоджений, став популярним; давнє написання Kiev; 2022 — Sainsbury's змінив на Kyiv | CD https://dictionary.cambridge.org/dictionary/english/chicken-kiev («(also chicken Kyiv)… baked or fried»); https://archive.marksandspencer.com/timeline/food/, https://www.marksandspencer.com/c/style-and-living/the-history-of-marks-and-spencer-food (WebSearch: 1979, bestselling); https://www.retailgazette.co.uk/blog/2022/03/sainsburys-to-rename-chicken-kiev-to-kyiv-to-support-ukraine/, https://www.grocerygazette.co.uk/2022/03/04/sainsburys-ms-chicken-kiev/; походження — https://www.irishtimes.com/business/sainsburys-chicken-kyiv-kiev-move-shows-how-attuned-firms-are-to-social-media-rage-1.4818753 vs https://www.staffordshire-live.co.uk/news/uk-world-news/chicken-kiev-rename-kyiv-supermarkets-6753396 (версії різняться) | ✅ |
| NHS 5 A Day: ≥ 5 порцій; доросла порція 80 g; свіжі, заморожені, консервовані рахуються; картопля — ні (starchy food); сік — максимум 1 порція | https://www.nhs.uk/live-well/eat-well/5-a-day/5-a-day-what-counts/ і …/portion-sizes/ (WebSearch-видача); https://www.bda.uk.com/foodfacts/fruit_vegetables__how_get_five-a-day; https://www.bhf.org.uk/informationsupport/heart-matters-magazine/nutrition/5-a-day/what-counts-as-5-a-day | ✅ |
| Fish — щонайменше двічі на тиждень (l4 «Try to eat fish twice a week») | https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/ (WebSearch), https://www.food.gov.uk/sites/default/files/media/document/the-eatwell-guide-accessible-version.pdf | ✅ |
| Protein — «grow and repair»; fibre — здорове травлення | https://nutrition.org.uk/nutritional-information/protein («growth, repair and maintenance»), https://www.axahealth.co.uk/staying-healthy/diet-and-nutrition/what-is-protein-and-why-do-we-need-it-in-our-diet/; fibre — https://nutrition.org.uk/nutritional-information/fibre/ (gut, prevents constipation), https://gutscharity.org.uk/wp-content/uploads/2023/08/Guts-UK-information-How-to-increase-your-fibre-intake-downloadable-copy.pdf, NHS розділ digestive-health https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/ | ✅ (рівень узагальнення для 10 кл. прийнятний) |
| Uzvar — напій із сушених яблук і груш | https://folklife.si.edu/magazine/foodways-holidays-ukrainian-christmas-kutia-uzvar, https://klopotenko.com/en/mulled-uzvar-dried-fruit-drink/ (WebSearch) | ✅ |
| У Великій Британії їздять ліворуч (l6 build) | https://www.traffic.gov.scot/driving-on-left, https://www.gov.uk/using-the-road-159-to-203 (WebSearch) | ✅ |

## 2. Форми й норма (словники, curl)
| Форма | Джерело | Вердикт |
|---|---|---|
| would — лише дії, не стани | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/used-to «Used to, but not would, can describe a state»; …/would «We can't use would in this way to talk about states»; BC https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2-grammar/past-habits-used-to-would-past-simple | ✅ |
| didn't use to / Did you use to (без -d у ключі) | CD Grammar used-to: «didn't use(d) to… form with a final -d… you should not use it in exams» | ✅ |
| «скільки разів → Past Simple» | Swan, Practical English Usage (WebSearch extended: «not used to say… how many times… I went to France seven times, not I used to go…»), https://www.englishradar.com/english-grammar/used-to/ («three times a week» з used to можливо) | ✅ правило коректне; ⚠️ ризик перенесення на «three times a week» → додано приклад-виняток в l3 info |
| prefer A to B; prefer … over | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/prefer («We don't use than after prefer»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/prefer_1 «prefer something to something… prefer something over something» | ✅ over — словникова норма OALD, у ключі l2 №10 лишається |
| be / get used to + noun / -ing | CD Grammar used-to «Be used to means 'be accustomed to'…» | ✅ |
| break / get into a habit | CD https://dictionary.cambridge.org/dictionary/english/habit («break a habit… (= end intentionally)», «get into (= start) the habit»); OALD https://www.oxfordlearnersdictionaries.com/definition/english/habit «break the habit of staying up too late» | ✅ |
| cut down on, snack on, sweet tooth, savoury «salty or spicy and not sweet» | CD …/cut-down, …/snack, …/sweet-tooth, …/savoury | ✅ |
| Наголос (UK): ingredient 2-й, savoury, regional, national, protein, vitamin, balanced, bitter, spicy, crunchy, creamy, fussy — 1-й, carbohydrate — 3-й | CD UK-транскрипції (ɪnˈɡriː…, ˈseɪ…, ˌkɑː.bəʊˈhaɪ…, ˈvɪt…) | ✅ |
| BrE: crisps, tinned, canteen, flask, yoghurt, chilli, fibre, savoury, penfriend, Ms без крапки, any more | — | ✅ AmE немає |

## 3–4. Завдання: розв'язок і опора (D-019)
Кожне розв'язано до ключа; збіг з ключем — у всіх.
| Урок | Завдання → опора | Друга правильна / вердикт |
|---|---|---|
| l1 | №2 hyp (здогадка); №4–6 — уривки на тому ж екрані; match, gaps, word, final — інфо №3 і уривки; stress — `<u>` в інфо №3; «was added» — пасив минулого (вже відомий B1, підказка «2022 is in the past») | match — бієкція однозначна; word: savoury + salty обидва в ключі ✅ |
| l2 | №2 — фраза на екрані (could eat honey cake every day); match, gaps, pick, build, word, final — інфо «Tastes», «Saying what you prefer» | build: «…sweets than fruit» відсікає контекст; word: to/over ✅; choice «most polite» — I can't stand lemons правильна англійська, але питання про ввічливість ✅ |
| l3 | №2 «Remember?» — e9s1l4 (requires; там «would → only actions… states only used to»); sort, gaps, multi, pick, build, final — інфо «Actions and states», «One time or many times?» | у gaps would/used to ніде не протиставлені для дій; wouldn't / didn't used to не подано ✅ |
| l4 | №2 hyp; sort, gaps, word, match, stress, final — інфо «What's in your food?», «High in…»; №7 — текст на екрані | ✅ |
| l5 | №2 hyp; gaps, choice, sort, build, pick, final — інфо «Talking about habits», «Giving advice and reacting»; final — текст на екрані | «Have you tried to keep» не в опціях ✅ |
| l6 | №2 hyp; choice, gaps, word, multi, build, pick, final — інфо «Used to, be used to, get used to» | word: used + accustomed ✅; build: плитка «on the left.» відсікає питальний порядок ✅ |
| l7 boss | Task 1 — l1; 2–3 — l2; 4–5 — l3; 6 — l4; 7–8 — l5; 9 — l6 (`pre` усі) | ✅ |

`requires` (e5s3l6, e6s3l4, e6s3l6, e7s5l3, e8s2l1, e8s2l4, e9s1l4) — усі id існують, теми збігаються (страви, неправильні дієслова, used to / would, healthy lifestyle, give up). Діалоги — репліками в body, `type: "dialog"` немає (D-056) ✅. Без IPA, без імітації аудіювання, без літер A/B/C ✅. `word`-ключі без кінцевого `.!?` ✅.

## 5. Педагогіка
Проблема → здогадка → теорія → вправи в кожному уроці. Звички — побутові (нігті, сніданок, перекуси, телефон), поради від однолітків, без моралізаторства й медичних тверджень. Orysia: переїзд з Vinnytsia «with her mum last year», без війни й травм; тон — адаптація і дружба (syrnyky для класу) ✅. Пояснення — у межах B2 (≤ 80 слів на info) ✅.

## Авторське право (фрагменти ≥ 12 слів, WebSearch у лапках)
| Фрагмент | Результат |
|---|---|
| "Ask ten Ukrainian families how they make borscht" | збігів немає |
| "I used to bite my nails too, so I know how you feel" | збігів немає |
| "wholegrain cereal with milk and fruit gives you energy for the morning" | збігів немає |
| "Every Saturday, my mother would bake bread in the big stove" | збігів немає |
| "wasn't used to having lunch at school at half past twelve" | збігів немає |

## 7. Правки (зроблені, 2)
1. l1, уривок 2: «Before the meal, someone reads Burns's poem about haggis.» → «Before they eat the haggis, someone reads Burns's poem about it.» (точність ритуалу).
2. l3, інфо «One time or many times?»: додано «But a habit is fine: I <b>used to go</b> swimming three times a week.» (Swan: обмеження стосується кількості разів події, не частоти звички).
Плюс: status усіх 7 уроків → "verified"; meta.factcheck; рядок «Статус» у шапці.

Рекомендовано (не блокує): плейтест у CI; калібрування stats для сім'ї 10 кл.; учителю — чи потрібні в «шкідливих звичках» куріння тощо (зараз свідомо лише побутові).

## Вердикт
l1–l7 — ✅ verified (відкритих ❌ і ⚠️ немає). `approved` — лише вчитель.
