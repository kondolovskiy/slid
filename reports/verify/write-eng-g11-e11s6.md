# Верифікація e11s6 «Travel and tourism» (eng, 11 кл., B2)

Верифікатор: verifier-e11s6, 2026-11-26. Скіл `content-verify` (з розділом «Англійська»). Файл: `content/eng/g11-e11s6.js`, 7 уроків (6 + boss `e11s6l7`).
Кожне завдання я розв'язав сам, не дивлячись на ключ, і потім звірив із `correct`/`answer`.

**Вердикт: усі 7 уроків → `verified`.** Моїх правок 3 (§4). Відкритих ❌ і ⚠️ немає.

Як я відкривав джерела. Напряму з контейнера відкриваються en/uk.wikipedia, dictionary.cambridge.org, oxfordlearnersdictionaries.com, osvita.ua. Не резолвляться (WebFetch і curl): whc.unesco.org, risu.org.ua, travel.chernivtsi.ua, lakedistrict.gov.uk, discover.ua, tsn.ua, zaxid.net, obozrevatel.com, suspilne.media, reherit.org.ua, getoutside.ordnancesurvey.co.uk. Проксі відмовляє (403) для britannica.com, encyclopediaofukraine.com, sofievka.org, collinsdictionary.com, easa.europa.eu. Такі сторінки я відкривав через WebSearch: результати пошуку з фрагментами за URL.

## 1. Факти

| Твердження (екран) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Residence of Bukovinian and Dalmatian Metropolitans, Chernivtsi: збудовано 1864–1882, архітектор — чех Josef Hlávka; ЮНЕСКО 2011; нині — частина Chernivtsi University (l2 ч. 1, match, gaps, boss T2) | https://en.wikipedia.org/wiki/Residence_of_Bukovinian_and_Dalmatian_Metropolitans («built … between 1864 and 1882 to the designs of the Czech architect Josef Hlávka … now part of Chernivtsi University, was declared a UNESCO World Heritage Site in 2011»); WebSearch: https://whc.unesco.org/en/list/1330/ (№ 1330, 35-та сесія, 2011), https://risu.org.ua/en/index/all_news/culture/inheritance/43090/ (внесено 28.06.2011), https://travel.chernivtsi.ua/en/show/269/pearl-of-bukovina-metropolitan-residence | ✅ |
| «Metropolitans were church leaders» (l2) | en.wiki (вище: «metropolitan bishop») | ✅ (спрощення для B2) |
| Chernivtsi — «in the west of Ukraine» (l2) | en.wiki (вище; Chernivtsi Oblast — захід / південний захід) | ✅ |
| Sofiyivka, Uman, центр України: створювати почав Count Stanisław Potocki, польський магнат, 1796; названо на честь дружини Sofia (l2 ч. 2, multi, match, gaps) | https://en.wikipedia.org/wiki/Sofiyivka_Park («founded in 1796 by Count Stanisław Szczęsny Potocki, a Polish noble … named after his Greek wife Sofia»; Cherkasy Oblast, Central Ukraine); https://osvita.ua/school/certification/card/59589/ («закладений Станіславом Потоцьким у 1796 році в місті Умань … на її честь названо „Софіївкою“»); WebSearch: https://reherit.org.ua/?p=810 , https://discover.ua/locations/nacionalniy-dendrologichniy-park-sofiyivka («польський магнат») | ✅ (дату дарування 1800/1802 розділ не називає — і правильно) |
| Пейзажний парк; ставки, скелі зроблено людьми; водоспади, фонтани, гроти, статуї (l2) | en.wiki (вище: «English landscape garden … artificial basins and ponds, waterfalls … artificial cliffs, grottoes»); osvita.ua (вище: «скульптури, гроти, фонтани, ставки»); WebSearch: https://karpatium.com.ua/pryrodni-obyekty-zapovidnyky/dendropark-sofiivka («штучні басейни, стави, водоспади»; «Левкадська та Тарпейська скелі — штучні») | ✅ |
| Національний дендрологічний парк, де вчені вирощують і вивчають рослини (l2) | en.wiki (вище: «arboretum … scientific-research institute of the National Academy of Sciences of Ukraine»); WebSearch: https://reherit.org.ua/object/natsionalnyj-dendrologichnyj-park-sofiyivka-nan-ukrayiny-z-kompleksom-vodojm-parkovyh-budivel-sporud-i-skulptur/ | ✅ |
| Lake Synevyr: Zakarpattia, найбільше озеро Українських Карпат, частина Synevyr National Nature Park; в горах серед лісів (l2 hyp, ч. 3, match, boss T3) | https://en.wikipedia.org/wiki/Synevyr («the largest lake in the Carpathian Mountains of Ukraine … Zakarpattia Oblast … part of the Synevyr National Nature Park»); WebSearch: https://www.obozrevatel.com/ukr/novosti-obschestvo/najmistichnishe-ozero-ukraini-de-vono-roztashovane-i-yakimi-legendami-opovite-foto.htm (найбільше озеро в Українських Карпатах, Закарпаття, НПП «Синевир»), https://tsn.ua/osoblyva_ukraina/sinevir-naykrasivishe-ozero-ukrayini-306026.html , https://zaxid.net/ozero_sinevir_n1374219 | ✅ (висоту, площу, рік парку розділ не називає — у джерелах вони різняться) |
| Svitiaz — найглибше озеро України, не в горах (fbText l2 hyp) | https://en.wikipedia.org/wiki/Svitiaz («It is the deepest lake in Ukraine … 58.4 meters», Volyn Oblast); content/eng/g10-e10s4.js l6 (верифіковано; e10s4l6 у `requires`) | ✅ |
| Lake District: north-west England; найбільший нацпарк Англії; ЮНЕСКО з 2017 (l6 ч. 2, multi, boss T9) | https://en.wikipedia.org/wiki/Lake_District («North West England … designated a UNESCO World Heritage Site in 2017 … the largest of the thirteen national parks in England and Wales»); WebSearch: https://www.lakedistrict.gov.uk/learning/factsandfigures («England's largest national park … 2,362 km²»), https://getoutside.ordnancesurvey.co.uk/nationalparks/lake-district-national-park | ✅ |
| Windermere — найбільше озеро Англії (l6) | https://en.wikipedia.org/wiki/Windermere («the largest lake in England by length, area, and volume»); WebSearch: lakedistrict.gov.uk factsandfigures (Windermere 14.8 km²) | ✅ |
| Scafell Pike — найвища гора Англії, 978 м (l6, boss T9) | https://en.wikipedia.org/wiki/Scafell_Pike («Highest mountain in England», elevation_m = 978); WebSearch: lakedistrict.gov.uk (Scafell Pike 978 m — перша в списку десяти найвищих) | ✅ |
| Ben Nevis — найвища гора UK, у Шотландії (додано мною в l6 ч. 2; дистрактор boss T9) | https://en.wikipedia.org/wiki/Ben_Nevis («the highest mountain in Scotland, the United Kingdom, and the British Isles»); https://uk.wikipedia.org/wiki/Бен-Невіс («найвища гора Шотландії, Великої Британії»); e5s10 (верифіковано, reports/verify/e5s10.md) | ✅ |
| «green tourism» як синонім ecotourism (l1, l2 ч. 3, `word` l1) | CD ecotourism: «the business of organizing holidays to places of natural beauty in a way that helps local people and does not damage the environment» — https://dictionary.cambridge.org/dictionary/english/ecotourism ; OALD ecotourism: «organized holidays that are designed so that the tourists damage the environment as little as possible» — https://www.oxfordlearnersdictionaries.com/definition/english/ecotourism ; CD green (B2) «relating to the protection of the environment» — https://dictionary.cambridge.org/dictionary/english/green ; WebSearch: https://link.springer.com/referenceworkentry/10.1007/978-3-319-01384-8_264 (Encyclopedia of Tourism: green tourism «often used interchangeably with ecotourism, nature tourism, and rural tourism») | ✅ з приміткою: окремого гасла «green tourism» у CD, OALD, MW немає (MW — 404). Урок подає його як «also green tourism» поруч з ecotourism — так його й уживають. Сільський туризм дано окремо (rural), тож хибного ототожнення з укр. «зеленим туризмом» немає |
| Безпека: Andrii їде нічним потягом до Poland і летить звідти; цивільні аеропорти України закриті | WebSearch (EASA CZIB 2022-01, проксі 403 напряму); inbox verifier-e9s7 | ✅ рейсів з України в розділі немає. Аеропорт — лише в London. Місця (Chernivtsi, Uman, Zakarpattia, Lviv) — захід і центр. Закликів їхати в небезпечні регіони немає. У статті l2 є порада перевірити безпеку й знайти укриття — спокійно, без лякаючих деталей |
| Герої, Zelena Dolyna, Mrs Popovych, маршрут Taras і Ostap | — | вигадані сюжети, реальним місцям правил і подій не приписують ✅ |

## 2. Форми й норма (словники)

| Форма | Джерело (дослівно) | Вердикт |
|---|---|---|
| afterwards / afterward | CD afterwards: «(US usually afterward)» — https://dictionary.cambridge.org/dictionary/english/afterwards | ✅. `word` з ключем afterwards у розділі немає (l6 `word` — beforehand). У `build` l6 плитка дана, дитина нічого не пише, тож afterward у ключ додавати не треба. Примітка: шапка файлу (рядок 16) каже «afterward (AmE) — у ключі `word`», але такого `word` немає. Це коментар, на дитину не впливає |
| beforehand | CD: «earlier (than a particular time)» — https://dictionary.cambridge.org/dictionary/english/beforehand | ✅ |
| get on (bus, train) | CD A2: «to go onto a bus, train, aircraft, or boat» — https://dictionary.cambridge.org/dictionary/english/get-on | ✅ |
| get off = «вирушати» | CD: «to leave a place, usually in order to start a journey: If we can get off by seven o'clock…» — https://dictionary.cambridge.org/dictionary/english/get-off | через це «got off» як дистрактор біля «set off from Lviv» — не однозначно хибний → правка 1 |
| get in / into (car), get on/off (train, bus) | WebSearch: https://www.espressoenglish.net/do-we-get-on-a-bus-or-get-in-a-bus/ , https://jakubmarian.com/get-off-vs-get-out-of-vs-take-off-vs-exit-a-bus-in-english/ (правило для учнів: on/off — транспорт загального користування, in/out of — авто й таксі); CD get on (вище) | ✅ дистрактори «got in / got into the train», «got in the bus» хибні за правилом, яке урок явно дає на екрані 3 l3 (стандарт ELT). Рідке «get into a train» у мовленні носіїв є, але воно не спростовує правила |
| look around (UK also look round) | CD: «(UK also look round (somewhere/something))» — https://dictionary.cambridge.org/dictionary/english/look-around | ✅ (урок дає обидва) |
| check out | CD B1: «to leave a hotel after paying and returning your room key» — https://dictionary.cambridge.org/dictionary/english/check-out | ✅ |
| drop off | CD: «to take someone or something to a particular place, usually by car, as you travel to a different place» — https://dictionary.cambridge.org/dictionary/english/drop-off | ✅ |
| run out of | CD: «run out of: I've run out of milk» — https://dictionary.cambridge.org/dictionary/english/run-out | ✅ |
| pick up (COLLECT), see off (SAY GOODBYE) | CD — https://dictionary.cambridge.org/dictionary/english/pick-up , https://dictionary.cambridge.org/dictionary/english/see-off | ✅ |
| Наголос `stress`/`<u>`: destination, accommodation, cultural, guesthouse, sightseeing, rural, eventually, meanwhile, beforehand, afterwards, heritage, residence, waterfall, grotto | CD (транскрипції статей; afterwards /ˈæf.tɚ.wɚdz/ — вище) | ✅ |
| Separable / inseparable, three-part | CD Grammar «Phrasal verbs and multi-word verbs» (посилання автора); TQ-140 «Як зараз»: місце додатка, займенник лише посередині | ✅ |

BrE: rubbish, holiday, centre, metres, Mum, penfriend, 11 am, fish and chips, at reception. AmE-правопису й лексики немає (grep). Без IPA, без «Listen / You hear». Літер A/B/C в `opts` немає. Діалоги — репліками в `body` intro, без `type: "dialog"` (D-056). `uk` немає.

## 3. Авторське право (фрагменти ≥ 12 слів)

| Фрагмент | Запит (WebSearch, лапки) | Результат |
|---|---|---|
| l1 «Choose a small local guesthouse, not a huge hotel. Buy food from local farmers and markets» | так само | збігу немає |
| l2 ч. 1 «So every day, students go to their lectures in a World Heritage Site» | так само | збігу немає |
| l2 ч. 2 «It is a landscape park: people made the ponds, the paths and even the rocks, but everything looks natural» | так само | збігу немає |
| l5 intro «The bus was late, and then it broke down near a small village» | так само | збігу немає |
| l6 ч. 2 «The path was steep and rocky, and Emma's brother Tom complained all the way up» | так само | збігу немає |
| l6 ч. 3 «plan your trip beforehand, but don't plan every minute. And afterwards, write about it» | так само | збігу немає |

## 4. Відповіді й опора (D-019)

Позначки: «ек. N» — номер екрана в уроці (з 1). Усі ключі збіглися з моїм розв'язком, крім зазначеного.

| Урок · завдання | Моя відповідь = ключ | Звідки відповідь | Вердикт |
|---|---|---|---|
| l1 ек. 2 choice (hyp) | active | здогадка до теорії, `hyp: true` | ✅ |
| l1 ек. 4 match | 5 пар | ек. 3; кожне праве перебрав для кожного лівого — другої доречної пари немає (farm → rural, protects nature → eco) | ✅ |
| l1 ек. 5 sort | 3 / 3 | ек. 3 | ✅ |
| l1 ек. 6 choice (читання) | local farmers | текст на екрані | ✅ |
| l1 ек. 7 gaps | rural, guesthouse, destination | ек. 3; «a famous accommodation / guesthouse» про село — хибне | ✅ |
| l1 ек. 8 stress | — | `<u>` на ек. 3 | ✅ |
| l1 ек. 9 word | ecotourism (+ eco-tourism, green tourism) | ек. 3; інших термінів з таким значенням урок не дає | ✅ |
| l1 ек. 10 gaps | cultural, active, guesthouse, greener | ек. 3, 6 | ✅ |
| l2 ек. 2 choice (hyp) | Synevyr | `hyp`; Svitiaz — e10s4l6 | ✅ |
| l2 ек. 4 choice | part of a university | текст на екрані | ✅ |
| l2 ек. 5 multi | 0, 2 | текст на екрані («people made») | ✅ |
| l2 ек. 6 choice (головна думка) | 1 | три частини статті | ✅ |
| l2 ек. 7 match | 4 пари | ек. 4–6 | ✅ |
| l2 ек. 8 gaps | was built, is named after, trails | пасив (10 кл.), ек. 3 | ✅ |
| l2 ек. 9 word | grotto | ек. 3 | ✅ |
| l2 ек. 10 build | 2 порядки | перебрав порядки: інших граматичних немає («Check before your trip the latest…» — ні); `checks` хибне | ✅ |
| l3 ек. 2 choice (hyp) | say goodbye | `hyp` | ✅ |
| l3 ек. 4 match | 5 пар | ек. 3 | ✅ |
| l3 ек. 5 gaps | on, off, into, out of | ек. 3 | ✅ |
| l3 ек. 6 pick | got in the train | ек. 3 | ✅ |
| l3 ек. 7 choice | Mrs Popovych | текст на екрані + ек. 3 (drop off) | ✅ |
| l3 ек. 8 gaps | pick him up, look around, set off | ек. 3; «see him off» відсікає контекст прибуття («is coming… On the first day») | ✅ |
| l3 ек. 9 word | check | ек. 3; «be out by 11 am» я розглянув: поруч із «Before you leave» воно надлишкове, а підказка й урок прямо ведуть до check out | ✅ |
| l3 ек. 10 gaps | set off, saw us off, picked us up, checked in, looked around, got on | ек. 3. Дистрактор «got off from Lviv» за CD (get off = вирушати) не однозначно хибний | ❌ → правка 1 (got off → picked up) |
| l4 ек. 2 choice (hyp) | look after them | `hyp` | ✅ |
| l4 ек. 4 build | 4 порядки | ек. 3; перебрав порядки — інших граматичних немає; `picks` хибне | ✅ |
| l4 ек. 6 sort | 3 / 3 | ек. 3, 5 | ✅ |
| l4 ек. 7 gaps | after them, me off, on it, me up | ек. 3, 5 | ✅ |
| l4 ек. 9 choice | looking forward to seeing | ек. 8 | ✅ |
| l4 ек. 10 word | out | ек. 8 | ✅ |
| l4 ек. 11 pick | looked up it | ек. 3 | ✅ |
| l4 ек. 12 gaps | to seeing, me off, me up, it up, after them | ек. 3, 5, 8 | ✅ |
| l5 ек. 2 choice (hyp) | after a long time | `hyp` | ✅ |
| l5 ек. 4 choice | At first | ек. 3 (CD Grammar «First, firstly or at first?») | ✅ |
| l5 ек. 5 gaps | First, Then, Finally | ек. 3 | ✅ |
| l5 ек. 7 gaps | At, end, Meanwhile | ек. 3, 6 | ✅ |
| l5 ек. 8 multi | 0, 2 | ек. 3, 6 | ✅ |
| l5 ек. 9 order | порядок єдиний | маркери at first → then → meanwhile → eventually → in the end | ✅ |
| l5 ек. 10 word | eventually (+ finally, at last, in the end, later) | ек. 3; «then» відсікає означення в `body` | ✅ |
| l5 ек. 11 gaps | At first, eventually, Meanwhile, At | ек. 3, 6 | ✅ |
| l6 ек. 2 choice (hyp) | before the trip | `hyp` | ✅ |
| l6 ек. 4 gaps | Before, beforehand, After | ек. 3 | ✅ |
| l6 ек. 5 choice | train + plane | текст на екрані | ✅ |
| l6 ек. 6 multi | 0, 2 | текст на екрані. Дистрактор «Scafell Pike is the highest mountain in the UK» з тексту («England's highest») не спростовувався: Ben Nevis був лише в e5s10, поза `requires` | ❌ → правка 2 (речення про Ben Nevis у тексті) |
| l6 ек. 7 choice (головна думка) | 1 | три частини | ✅ |
| l6 ек. 8 word | beforehand (+ first, in advance) | ек. 3 | ✅ |
| l6 ек. 9 pick | Afterwards the climb | ек. 3 | ✅ |
| l6 ек. 10 build | 6 порядків | перебрав порядки (позиції afterwards і at the guesthouse відносно we had a huge dinner): граматичні — ці 6 («We afterwards had…» — лише книжне, не BrE-норма для B2) | ✅ |
| l7 T1 gaps | active, cultural, guesthouse | l1 | ✅ |
| l7 T2 choice | part of Chernivtsi University | l2 ек. 4 | ✅ |
| l7 T3 choice | Lake Synevyr | l2 ек. 6 | ✅ |
| l7 T4 gaps | set off, on, picked us up, checked in | l3. Той самий дистрактор «got off from Lviv» | ❌ → правка 3 (got off → picked up) |
| l7 T5 gaps | me up, after my plants, it up | l4 | ✅ |
| l7 T6 word | seeing | l4 ек. 8 | ✅ |
| l7 T7 gaps | At first, Meanwhile, eventually, At | l5 | ✅ |
| l7 T8 gaps | beforehand, After, afterwards | l6 | ✅ |
| l7 T9 choice | largest national park in England | l6 ек. 6; Wales відкидає «north-west of England»; Ben Nevis — тепер теж з l6 ек. 6 | ✅ |

`requires`: e6s3l3, e6s5l1, e9s9l5, e10s4l6, e10s8l3, e10s8l4 — усі id існують (content/eng/g6-e6s3.js, g6-e6s5.js, g9-e9s9.js, g10-e10s4.js, g10-e10s8.js) і відповідають задачі. Boss: `pre` на всі уроки, питає лише вивчене.

## 5. Правки (зроблені)

1. l3 ек. 10: дистрактор `got off` → `picked up` («We picked up from Lviv» — однозначно хибне; CD get off = «to leave a place … to start a journey»).
2. l6 ек. 6 (читання, ч. 2): додано «The UK’s highest, Ben Nevis, is in Scotland.» Тепер дистрактор про UK спростовується текстом. Щоб не перевищити профіль `readWordsPerScreen` ≤ 65, прибрав надлишкове «We set off early in the morning.». На нього не спирається жодне завдання.
3. l7 T4: дистрактор `got off` → `picked up` (як у правці 1).

Статус 7 уроків: `draft` → `verified`; `meta.factcheck` заповнено, у шапці файлу оновлено рядок статусу.

Рекомендації (не блокують): виправити в шапці файлу рядок 16 («afterward … у ключі `word`»): такого `word` у розділі немає.

## 6. Педагогіка, рівень, стиль

Будова кожного уроку така: проблема в intro, потім здогадка `hyp`, теорія як відповідь і вправи з поясненням «чому». Підказки відповіді не видають. Пояснення — короткі речення рівня B1–B2, не складніші за правило. Тема безпеки подана спокійно й доречно для 11 кл. Розділ не дублює e6s5 і e9s8.
- `validate --section e11s6`: 0 помилок, 0 попереджень.
- `stats --subject eng`: у l6 є прапорці «нетипово для сім'ї» (readWordsPerScreen, maxReadWords, maxText, z ≈ 2.1). Абсолютних меж профілю 10–11 кл. урок не перевищує: maxText 148 ≤ 190, readWordsPerScreen 65 ≤ 65. Це урок читання з текстом 400–450 слів (обсяг П1407 с. 21), тож прапорці пояснені.
- Playtest: Python-модуля playwright у контейнері немає, тому браузерний прогін іде лише в CI (job `browser`).

## 7. Вердикт по уроках
e11s6l1–l7 — `verified`.
