# Верифікація e10s4 «Weather, nature and natural disasters» (Англійська, 10 кл.)

Верифікатор: verifier-e10s4, 2026-11-26. Файл: `content/eng/g10-e10s4.js` (7 уроків: l1–l6 + фінал l7). Задача: `tasks/review/write-eng-g10-e10s4.md`.
Скіл: content-verify (+ розділ «Англійська»). Розділ писав не я.

**Вердикт: усі 7 уроків → `verified`.** Правок 6 (2 блокувальні: збіг з прикладом словника, неточний рік South Downs; 4 дрібні: узгодження цитати, тіло build, fbBad, meta/статус). TQ не створено.

## 1. Факти (кожне джерело відкрито в цій сесії)

Мережа: metoffice.gov.uk, nhs.uk, nasa.gov, nato.int, radiosvoboda.org, peakdistrict.gov.uk, reliefweb — ENOTFOUND (WebFetch і curl). Тому: Вікіпедія (en, uk) — curl `action=raw`; решта — сторінки з результатів WebSearch (URL нижче).

| Твердження (екран) | Джерела | Вердикт |
|---|---|---|
| Since 2015 Met Office і Met Éireann дають імена штормам; новий список щовересня; за абеткою; багато імен від публіки; мета — щоб помічали попередження (l1 e6, l7 T2) | https://www.metoffice.gov.uk/blog/2025/how-does-the-met-office-name-storms ; https://www.irishexaminer.com/news/spotlight/arid-41771456.html ; https://euronews.com/green/2025/09/01/from-amy-to-wubbo-how-do-meteorologists-choose-storm-names-and-why-are-they-important (WebSearch) | ✅ (з 2019 ще KNMI — текст про UK та Ireland, не вичерпний перелік; прийнятно) |
| July 2008: кілька днів сильних дощів у Карпатах; Дністер, Прут та інші річки затопили міста, села, дороги, поля на заході України; багато мостів пошкоджено; рятувальники допомогли тисячам людей залишити домівки (l1 e7) | https://science.nasa.gov/earth/earth-observatory/floods-in-eastern-europe-20307/ («Heavy rain… Carpathian Mountains of western Ukraine pushed the Dnister and Prut Rivers over their banks»); https://www.radiosvoboda.org/a/1186667.html (МНС: 360 автомобільних і 561 пішохідний міст; дощі 23–27.07); https://www.spacedaily.com/reports/Eastern_Europe_floods_kill_42_people_thousands_evacuated_UN_999.html (AFP: понад 25 000 евакуйовано в західній Україні) (WebSearch) | ✅; числа жертв не вжито — правильно для віку |
| Met Office: yellow — деякі проблеми (travel); amber — вища ймовірність, що зміняться плани, be ready; red — небезпечна погода, take action; red — rare (l4 e5–e6, l7 T6) | https://www.countryfile.com/environment/weather-warnings-uk ; https://scotsman.com/news/weather/what-do-the-weather-warnings-in-the-uk-mean-3574405 ; https://www.metoffice.gov.uk/blog/2025/how-are-weather-warnings-categorised ; rare: https://jerseyeveningpost.com/morenews/uknews/2023/10/18/red-weather-warnings-in-the-uk-recent-examples/ , https://metoffice.gov.uk/about-us/press-office/news/weather-and-climate/2021/rare-red-warning-issued-for-storm-arwen (WebSearch) | ✅ |
| У спеку — тінь, особливо 11 am – 3 pm; багато пити; капелюх, легкий одяг, sun cream (l3 e6) | https://www.nhs.uk/heatwave ; https://metoffice.gov.uk/weather/warnings-and-advice/seasonal-advice/stay-safe-in-extreme-heat ; https://www.gov.uk/government/publications/beat-the-heat-hot-weather-advice/beat-the-heat-staying-safe-in-hot-weather (WebSearch) | ✅; ліків немає |
| Сонячне світло на шкірі допомагає організму виробляти вітамін D (l3 e6) | https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/ ; https://www.bda.uk.com/foodfacts/vitamin_d (WebSearch) | ✅ |
| UK — 15 нацпарків: 10 England, 3 Wales, 2 Scotland, NI — жодного (l6 e4) | https://en.wikipedia.org/wiki/National_parks_of_the_United_Kingdom (curl raw: «15 national parks, of which ten are in England… three… Wales… two… Scotland; there are no national parks in Northern Ireland»); https://www.countryfile.com/uk-travel/what-is-national-park (WebSearch) | ✅ |
| Peak District — перший, 1951 (l6 e4, e8; l7 T8 як дистрактор) | en.wikipedia (там само: «designated the first national park in April 1951», таблиця 17 April 1951); https://www.peakdistrict.gov.uk/learning-about/news/current-news/peakdistrict75 (WebSearch: «UK's first national park, designated on 17 April 1951») | ✅ |
| South Downs — наймолодший, **since 2011** (l6 e4) | en.wikipedia (таблиця: 12 Nov 2009 / 2010 operational); WebSearch: https://www.legislation.gov.uk/uksi/2010/497/note/made (operational date 1.04.2011), https://www.brightonandhovenews.org/2011/04/01/new-authority-takes-control-of-south-downs-national-park/ ; South Downs NP — «designated on 31 March 2010» | ⚠️ рік неоднозначний (2010 — парк, 2011 — повна робота органу) → **виправлено:** рік прибрано («The newest one is the South Downs, in the south of England.»); не оцінювався |
| Eryri = Snowdonia, Wales (l6 e4, e8) | en.wikipedia National parks of the UK («Snowdonia (now Eryri)», «Eryri (Snowdonia National Park)»); https://lakedistrict.gov.uk/wp-content/uploads/2026/07/National-Parks-75th-anniv-report-FINAL.pdf (авторський; WebSearch) | ✅ |
| Люди живуть і працюють у парках; більша частина землі — фермерів та інших власників, не держави (l6 e4) | en.wikipedia («largely in private ownership»; «many landowners including public bodies and private individuals»); https://cnp.org.uk/our-national-parks/why-we-campaign/land-management-ownership («vast majority… privately owned… farmers… National Trust»), https://www.nationalparks.uk/who-looks-after-national-parks/ (WebSearch) | ✅ |
| Карпатський НПП — перший НПП України, 1980, Івано-Франківська обл., для охорони ландшафтів Карпат (l6 e5, e8, e10; l7 T8) | https://en.wikipedia.org/wiki/Carpathian_National_Nature_Park (curl raw: «established on 3 June 1980 to protect landscapes of the Carpathian Mountains… the first national park of Ukraine»); https://www.encyclopediaofukraine.com/pages%5CC%5CA%5CCarpathianNationalNaturePark.htm , https://vikna.tv/styl-zhyttya/podorozhi/karpatskyj-natsionalnyj-pryrodnyj-park-tsina-kvytkiv-ta-shho-podyvytysya/ (WebSearch) | ✅ |
| Шацький НПП — 1983, Волинська обл. (північний захід), 23 озера (l6 e5) | https://uk.wikipedia.org/wiki/Шацький_національний_природний_парк (curl raw: «заснований 28 грудня 1983», «Усього в сучасних межах парку є 23 озера»); https://en.wikipedia.org/wiki/Shatsk_National_Natural_Park (curl raw: established 1983, Volyn Oblast); WebSearch: https://evnuir.vnu.edu.ua/bitstream/123456789/11180/1/4.pdf (23 озера) | ✅ |
| Світязь — найглибше озеро України, понад 58 м (l6 e5, e9, e8) | https://en.wikipedia.org/wiki/Svitiaz (curl raw: «the deepest lake in Ukraine… maximum depth of 58.4 meters»); https://www.fair.org.ua/najglybshe-ozero-ukrayiny/ , https://shnp.forest.gov.ua/wp-content/uploads/2023/05/Ekolohichna-stezhka-Svitiazianka.pdf (WebSearch: 58,4 м) | ✅ |

Вигадане (позначено автором): Zelena Dolyna й еко-група, прогнози для Kharkiv/Kyiv/Carpathians, ідеї класу Andrii, поїздки героїв — без претензії на факт ✅.

## 2. Форми й норма (словники, curl у цій сесії)

| Форма | Джерело (дослівно) | Вердикт |
|---|---|---|
| heatwave / heat wave (l3 e3, e8 word) | CD https://dictionary.cambridge.org/dictionary/english/heatwave — «heatwave noun… uk ˈhiːtˌweɪv»; OALD https://www.oxfordlearnersdictionaries.com/definition/english/heatwave — лише «heatwave noun», варіанта немає; CD https://dictionary.cambridge.org/dictionary/english/heat-wave — «heat wave» лише в Academic Content (US); Wiktionary heatwave — «alternative spelling of heat wave» | ✅ BrE — heatwave (перший у ключі, у тексті скрізь); heat wave — AmE-варіант, за D-055 доп. п. 1 не помилка → обидва в ключі правильно |
| sunburnt / sunburned | CD https://dictionary.cambridge.org/dictionary/english/sunburned — «sunburned adjective (also sunburnt)» | ✅ (у gaps лише sunburnt серед варіантів, sunburned хибним ніде не дано) |
| under the weather = feel ill | CD https://dictionary.cambridge.org/dictionary/english/under-the-weather — «feels under the weather, they feel ill: I'm feeling a bit under the weather - I think I'm getting a cold» | ✅ значення; ❌ авторське: див. §5 |
| likely to = will probably happen | CD https://dictionary.cambridge.org/dictionary/english/likely — «If something is likely, it will probably happen or is expected» | ✅ |
| be going to — evidence now; will «often used in a similar way» | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/will-or-be-going-to | ✅ (info l2 «Often both will and going to are correct») |
| Future Perfect: will/shall + have + -ed; shall — лише з I, we | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/future-perfect-simple — «We use will/shall + have + the -ed form… shall only… with I and we» | ✅ («shall have finished» з I у ключі l5 word — правильно) |
| till = until, informal; by, not until — для дедлайну | CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/until — «shortened to till… more informal»; «We use by, not until, to…» | ✅ (info l5 e5) |
| Наголос: earthquake, hurricane, volcano, disaster, avalanche, landslide (stress l1 e9); wildfire, landscape, habitat, headache, gloomy, cheerful, heatwave, weather (`<u>`) | CD UK: ˈɜːθ.kweɪk, ˈhʌr.ɪ.kən, vɒlˈkeɪ.nəʊ, dɪˈzɑː.stər, ˈæv.əl.ɑːntʃ, ˈlænd.slaɪd, ˈwaɪld.faɪər, ˈlænd.skeɪp, ˈhæb.ɪ.tæt, ˈhed.eɪk, ˈɡluː.mi, ˈtʃɪə.fəl, ˈhiːtˌweɪv, ˈweð.ər; OALD (перші шість): /ˈɜːθkweɪk/, /ˈhʌrɪkən/, /vɒlˈkeɪnəʊ/, /dɪˈzɑːstə(r)/, /ˈævəlɑːnʃ/, /ˈlændslaɪd/ | ✅ (IPA в уроці немає) |

BrE: -ise/-our не трапляються, sun cream, on a lead, rubbish, term, at the weekend не потрібне; AmE не знайдено. Kyiv, Kharkiv, Lviv, Ivano-Frankivsk region, Volyn region — за glossary. «Listen», IPA, літери A/B/C в opts, позиційні посилання — немає.

## 3–4. Завдання: розв'язок і опора (D-019)

Розв'язав кожне сам до звірки з ключем; розбіжностей немає.

| Урок · екран | Мій розв'язок / друга відповідь | Опора | Вердикт |
|---|---|---|---|
| l1 e2 choice | natural disasters | `hyp: true` | ✅ |
| l1 e4 match | 6 пар; другої доречної пари немає (fire/water/snow/ground розрізнені) | e3 | ✅ |
| l1 e5 sort | weather: hurricane, storm, flood after rain, drought; Earth: earthquake, volcano | e3 (ground shakes, hot rock) + міркування | ✅ |
| l1 e6 choice | to help people notice the warnings | текст на екрані | ✅ |
| l1 e7 choice | after several days of heavy rain; інші два суперечать тексту | текст на екрані | ✅ |
| l1 e8 gaps | drought, wildfire, avalanche, landslide (flood серед варіантів 4-ї щілини немає) | e3 | ✅ |
| l1 e9 stress | як у CD | e3 `<u>`; disaster/volcano — e3 | ✅ |
| l1 e10 word | drought + dry spell / dry weather / lack of rain у ключі | e3 | ✅ |
| l1 e11 gaps | storm, flooded, earthquakes | e1, e3 | ✅ |
| l2 e2 choice | It will probably happen | `hyp: true` | ✅ |
| l2 e4 sort | 3 signs / 3 opinion; маркери однозначні | e3 | ✅ |
| l2 e5 multi | will, is going to, is likely to | e3 («Often both…») | ✅ |
| l2 e6 choice | can see signs | e3 | ✅ |
| l2 e7 gaps | is likely to, are likely to be, are unlikely to; дистрактори — граматично хибні | e3 | ✅ |
| l2 e8 build | 3 порядки в ключі; «Temperatures are likely this week to rise» — неприродне, не в ключі — правильно | e3 | ✅ (тіло виправлено: «weekend» ↔ «this week») |
| l2 e9 word | unlikely / not likely | 10% + e3 | ✅ (fbBad виправлено: «are … to» не пасує до «Rain is») |
| l2 e10 gaps | is likely to, is going to, will, is unlikely to; will vs going to не протиставлені (пастки — are going to з It, going to без be, wills, are) | e3 | ✅ |
| l3 e2 choice | a bit ill | `hyp: true` | ✅ |
| l3 e4 match | 6 пар однозначні | e3 | ✅ |
| l3 e5 gaps | make me feel, puts me in, sunburnt | e3 | ✅ |
| l3 e6 multi | [1, 3]; «light clothes» у тексті відкидає 0, «some sun is good» — 2 | текст на екрані | ✅ |
| l3 e7 sort | health: headache, sunburnt, under the weather; mood: gloomy, cheerful, in a good mood | e3 | ✅ |
| l3 e8 word | heatwave / heat wave | e3 | ✅ |
| l3 e9 gaps | heatwave (drought — не про спеку тиждень), made me, shade (e6), puts me in | e3, e6 | ✅ |
| l4 e2 choice | strong for the whole day | `hyp: true` | ✅ |
| l4 e4 gaps | will be raining / rising / shining; дистрактори хибні | e3 | ✅ (will rain / will rise серед варіантів немає — друга правильна відсутня) |
| l4 e5 choice | Be ready to change their plans | текст на екрані | ✅ |
| l4 e6 match | yellow / amber / red однозначні | e5 | ✅ |
| l4 e7 build | 6 порядків у ключі | e3 | ✅ |
| l4 e8 word | will be falling / ’ll be falling; інструкція «Future Continuous» відсікає will fall | e3 | ✅ |
| l4 e9 pick | [will blowing] | e3 | ✅ |
| l4 e10 gaps | will be snowing, will be falling, will be, will be shining | e3 | ✅ |
| l5 e2 choice | finished before June | `hyp: true` | ✅ |
| l5 e4 gaps | will have finished, will have learnt (learned серед хибних немає), won’t have spent | e3 | ✅ |
| l5 e6 gaps | until, by, until; till хибним не дається | e5 | ✅ |
| l5 e7 choice | cleaned + planted | план на екрані + e3 | ✅ |
| l5 e8 multi | [1, 3]; will plant … by June — правильне, у ключі | e3, e5 | ✅ |
| l5 e9 build | 3 порядки. «Our village by 2030 will have planted 1,000 trees.» — граматичне (обставина між підметом і присудком, у письмі зазвичай у комах; рушій комам не вчить), тож **лишено в ключі**: прибрати — означало б зарахувати граматичний порядок як помилку (скіл: ❌). Неприродних порядків (will have by 2030 planted…) у ключі немає | e3 | ✅ |
| l5 e10 word | will have finished / ’ll have finished / shall have finished | e3, CD Grammar | ✅ |
| l5 e11 gaps | will have cleaned, until, will have started, by | e3, e5 | ✅ |
| l6 e2 choice | large protected area | `hyp: true` | ✅ |
| l6 e4 choice | Peak District 1951 | текст на екрані | ✅ |
| l6 e5 multi | [0, 2]: first → oldest — міркування | текст на екрані | ✅ |
| l6 e6 choice | parks protect nature + visitors help | частини 1–3 (питання про весь текст — після останньої частини, як у style/eng.md) | ✅ |
| l6 e7 match | 4 пари однозначні | e4, e5 | ✅ |
| l6 e8 word | deepest | e3, e5 | ✅ |
| l6 e9 gaps | landscapes, habitats, was created | e3 | ✅ |
| l6 e10 gaps | are going to (план + квитки; will серед варіантів немає), will, will be walking, will have taken | l2, l4, l5 | ✅ |
| l7 T1–T8 | drought/earthquake/avalanche; storm names; is going to / is likely to / is unlikely to; a bit ill; will be blowing; red = dangerous; will have planted / until / will have cleaned; Carpathian NP | `pre` на l1–l6, усе було в розділі; sore throat — нове, але не оцінюється | ✅ |

Друга правильна відповідь: перебрав will / going to / likely, FC vs will + verb, FP vs will + verb, by / until / till, sunburnt/sunburned, learnt/learned, heatwave/heat wave, артиклі в word — ніде правильна альтернатива не стоїть хибним варіантом і не відсутня в ключі word/build.

## 5. Педагогіка, рівень, авторське право

- Проблема → hyp → теорія → вправи → підсумок у кожному уроці; фінал з `pre`. Пояснення короткі, контраст форм на парах прикладів (style/eng.md, 10–11 кл.) ✅.
- Без страшилок: повінь — без чисел загиблих, акцент на допомозі; red warning — «take action to stay safe»; поради у спеку без ліків ✅.
- Діалоги репліками в body, без type "dialog" (D-056), ≤ 9 реплік ✅. `uk` немає ✅. `requires` e5s5l2, e5s5l5, e5s9l3, e9s2l3, e9s2l4 — id існують і за назвами відповідають темам (storms; will forecast; going to plans; going to predictions; Future Continuous) ✅.

Авторське право (WebSearch з лапками):

| Фрагмент | Результат |
|---|---|
| «A storm with a name is easier to remember and talk about» | збігів немає ✅ |
| «National parks in the UK are not empty, wild places» | збігів немає ✅ |
| «These ideas are simple, but they only work if everyone follows them» | збігів немає ✅ |
| «Tonight, temperatures will be falling fast, and it will be» | збігів немає ✅ |
| l3 e1 Emma: «I’m feeling a bit under the weather – I think I’ve got a cold» | ❌ майже дослівно приклад CD under-the-weather («I'm feeling a bit under the weather - I think I'm getting a cold») → **виправлено** власним текстом |
| Приклади l5 (bridge closed until Friday) проти CD Grammar until («The road outside our house will be closed from 6 am until 6 pm tomorrow») | не збіг ✅ |

## 6. Прогін

- `node tools/validate.mjs --section e10s4` — 0 помилок, 0 попереджень (після правок).
- `node tools/euphony.mjs --section e10s4` — зауважень немає.
- `node tools/stats.mjs --subject eng` — e10s4l6: readWordsPerScreen / maxReadWords / maxText «нетипово для сім'ї» (z 2,4–3). Пояснення: урок читання 10 кл. (стаття ≈ 345 слів на 3 екрани ≤ 133 слова), межа екрана для 10 кл. — 190 (style/eng.md), сім'я ще калібрується на 4–9 кл. Не правлю.
- `python3 tools/playtest.py --section e10s4` — не запущено: Python-модуля playwright у контейнері немає; прогін — у CI (job browser).

## 7. Правки (зроблені)

1. l3 e1: репліка Emma переписана → «Here it’s grey and rainy, and I’ve caught a cold. I’m a bit under the weather today.» (збіг з прикладом CD).
2. l3 e2: цитата й fbText узгоджені з новою реплікою («I’m a bit under the weather today.», «Emma has caught a cold.»).
3. l6 e4: «since 2011» прибрано (South Downs: 2010 — призначення, 2011 — повна робота органу).
4. l2 e8 build: тіло «for the weekend forecast» → «for this week’s forecast» (плитка «this week»).
5. l2 e9 word: fbBad «are … to + verb» → «be (un)likely to + verb» (підмет «Rain is»).
6. Статус усіх 7 уроків `draft` → `verified`; `meta.factcheck`, рядок «Статус» у шапці.

Рекомендовані (не блокують): немає.

## Вердикт по уроках

| Урок | Вердикт |
|---|---|
| e10s4l1 | verified |
| e10s4l2 | verified |
| e10s4l3 | verified (після правок 1–2) |
| e10s4l4 | verified |
| e10s4l5 | verified |
| e10s4l6 | verified (після правки 3) |
| e10s4l7 | verified |

Людині: `approved` — за вчителем; повний плейтест — у CI.
