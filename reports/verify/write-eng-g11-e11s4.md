# Верифікація e11s4 «Art and festivals» (eng, 11 кл., B2)

Верифікатор: verifier-e11s4, 2026-11-26. Скіл `content-verify` (з розділом «Англійська»). Файл: `content/eng/g11-e11s4.js`, 7 уроків (6 + boss).
Кожне завдання я розв'язав сам, не дивлячись на ключ, і потім звірив із `correct`/`answer`.

**Вердикт: усі 7 уроків → `verified`.** Мої правки: 4 (§4). Відкритих ❌ і ⚠️ немає.

Як я відкривав джерела. WebFetch не резолвить www.edfringe.com, www.vam.ac.uk і artarsenal.in.ua. Ці хости треба дозволити в мережевих налаштуваннях сесії, якщо їх треба відкрити напряму. Тому en.wikipedia я відкривав через WebFetch, решту — через WebSearch: результати пошуку з фрагментами сторінок за URL. Словники CD і OALD — через curl.

## 1. Факти

| Твердження (екран) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Fringe: Edinburgh, Scotland, щороку в серпні; найбільший у світі фестиваль виконавських мистецтв (l5) | https://en.wikipedia.org/wiki/Edinburgh_Festival_Fringe («the world's largest performing arts festival»; 2026 — 7–31 August) ; WebSearch: https://guinnessworldrecords.com/world-records/69577-largest-performing-arts-festival , https://theweek.com/culture-life/a-mini-guide-to-edinburgh-fringe-2026 , https://www.britannica.com/art/the-Fringe («three weeks every August») | ✅ |
| 1947: вісім театральних груп без запрошення на перший Edinburgh International Festival; малі зали «на краю» офіційного фестивалю (l5) | en.wiki (вище: «Eight theatre companies turned up uninvited»; термін «fringe» — Robert Kemp, 1948, «round the fringe of official Festival drama») ; WebSearch: https://www.scotsman.com/whats-on/arts-and-entertainment/uninvited-eight-who-started-edinburgh-festival-fringe-846117 , https://en.wikipedia.org/wiki/Edinburgh_Festival_Fringe_1947 , https://www.theskinny.co.uk/festivals/edinburgh-fringe/comedy/how-glasgow-started-the-edinburgh-fringe | ✅ |
| Open access, немає відбіркової комісії, взяти участь може будь-хто (l5) | en.wiki («unjuried, with no selection committee») ; WebSearch: Scotsman (вище, «open access»), конституція Fringe Society «no part in vetting» (за тим самим пошуком) | ✅ |
| Вистави в кафе, церквах, «навіть в автобусі» (лист Isla, l5) | en.wiki (venues: «a double-decker bus») | ✅ (одне джерело. Це лист вигаданої героїні, факт не оцінюється) |
| Glastonbury: п'ятиденний фестиваль музики й виконавських мистецтв, Worthy Farm біля Pilton, Somerset, England; зазвичай у червні (l5) | https://en.wikipedia.org/wiki/Glastonbury_Festival («five-day festival of contemporary performing arts … near Pilton, Somerset, England»; Worthy Farm) ; WebSearch: https://www.timeout.com/uk/news/glastonbury-has-officially-confirmed-the-festival-dates-for-2027-092525 (23–27 June 2027), https://www.britannica.com/art/Glastonbury-Festival | ✅ |
| Перший фестиваль 19 September 1970, організував фермер Michael Eavis, ≈ 1,500 людей, квиток £1 (l5, l5 gaps, pick) | en.wiki (19 September 1970; 1,500; £1) ; WebSearch: https://www.nme.com/features/glastonbury-festival-first-ever-story-1970-2510609 , https://en.wikipedia.org/wiki/Glastonbury_1970 , https://faroutmagazine.co.uk/first-ever-glastonbury-festival-history/ | ✅ |
| Fallow year кожні кілька років, щоб земля відпочила; 2026 — fallow year (l5) | en.wiki («fallow years at roughly five-year intervals»; 2026 — planned fallow year) ; WebSearch: https://contactmusic.com/story/467/3388523/glastonbury-festival-confirms-2027-return-dates-following-fallow-year , https://www.rte.ie/entertainment/2025/0925/1535299-glastonbury-announces-2027-dates-no-festival-next-year | ✅ («was» правильне: зараз листопад 2026) |
| Book Arsenal: міжнародний фестиваль книжок і мистецтва, з 2011, щороку в Мистецькому арсеналі (l5) | WebSearch: https://www.ukrinform.net/rubric-society/4128259-kyiv-hosts-opening-of-book-arsenal-festival.html («annual project of Mystetskyi Arsenal founded in 2011»), https://kyivindependent.com/everything-is-translation-13th-book-arsenal-festival-in-kyiv-to-bridge-gaps-between-language-and-war , https://www.publishersweekly.com/pw/print/20240617/95262-ukrainian-book-festival-offers-hope-amid-tragedy.html | ✅ |
| Book Arsenal: «usually at the end of May» (l5) | WebSearch: https://espreso.tv/knizhkoviy-arsenal-perenesli-cherez-lokdaun-na-cherven (2021 — 23–27 June), https://life.pravda.com.ua/culture/2023/03/31/253603/ (2023 — 22–25 June), https://life.pravda.com.ua/culture/vidkrittya-knizhkovogo-arsenalu-2024-301853/ (2024 — 30 May – 2 June), https://publishingperspectives.com/2026/05/amid-the-recent-destruction-in-kyiv-international-book-arsenal-festival-begins/ (2026 — 28–31 May) | ⚠️ → виправлено: «usually in late May or June» (правка 2) |
| 2019 — найкращий літературний фестиваль року, London Book Fair (l5) | WebSearch: ukrinform (вище: «In March 2019 … best literary festival of the year at the London Book Fair»), https://www.pravda.com.ua/eng/news/2024/06/04/7459093/ , kyivindependent (вище) | ✅ |
| 2022 не відбувся через повномасштабне вторгнення, повернувся 2023 (l5) | WebSearch: https://life.pravda.com.ua/culture/2022/04/13/248237/ , https://life.pravda.com.ua/culture/2023/03/31/253603/ , ukrinform | ✅. Але «takes place every year» замовчував 2020: тоді фестиваль скасували через COVID-19 (https://life.pravda.com.ua/society/2020/05/12/240946/ , https://tsn.ua/books/knizhkoviy-arsenal-pereneseno-na-2021-rik-1545234.html). ⚠️ → додано 2020 (правка 3) |
| Atlas Weekend: Київ, «every summer from 2015 to 2021» (l5) | https://en.wikipedia.org/wiki/Atlas_Festival (заснований 2015 як Atlas Weekend; 2021 — 600,000; з 2022 — Atlas Festival; про 2020 нічого) ; WebSearch: https://www.unian.info/kyiv/kyiv-s-major-music-fest-postponed-until-july-2021-over-coronavirus-lockdown-news-kyiv-10978958.html , https://suspilne.media/30439-festival-atlas-weekend-perenesli-na-2021-rik/ , https://fakty.com.ua/ua/ukraine/20200430-atlas-weekend-perenesly-na-2021-rik-cherez-koronavirus/ (2020 перенесено на 2021) | ❌ «every summer»: у 2020 фестивалю не було → виправлено: «every summer from 2015 to 2021, except 2020» (правка 4). Рік заснування 2015 ✅ |
| Atlas 2024 — благодійний фестиваль, гроші для армії (l5) | WebSearch: https://babel.ua/en/news/107541-the-atlas-united-music-festival-will-be-held-in-kyiv-in-july-100-million-hryvnias-will-be-collected-on-it-for-drones , https://rubryka.com/en/2025/01/30/na-100-mln-gryven-yaki-zibraly-na-festyvali-atlas-united-2024-prydbaly-bezpilotnyky-ta-roboty-dlya-zsu/amp , https://news.telegraf.com.ua/ukr/obshhestvo/2024-07-24/5864233-festival-atlas-united-2024-zibrav-100-mln-grn-na-potrebi-zsu/amp (100 млн грн на дрони й роботизовані системи) | ✅ (назви «Atlas United» розділ не дає, і це правильно) |
| Мистецький арсенал: Київ; будівлі понад 200 років; арсенал — майстерня, де виготовляли, ремонтували й зберігали гармати; стіни майже 2 м; виставки, фестивалі, театр, освітні проєкти (l2) | https://en.wikipedia.org/wiki/Mystetskyi_Arsenal_National_Art_and_Culture_Museum_Complex (making, repairing, storing cannons; walls over 183 cm; exhibitions, festivals, theatrical productions, educational programs) ; WebSearch: https://artarsenal.in.ua/en/history/ (1783/1784–1801), https://guide.kyivcity.gov.ua/en/places/misteckij-arsenal | ✅ («more than two hundred years old» правильне за обох датувань) |
| Tate Modern: галерея сучасного мистецтва, London, відкрита 2000 у колишній електростанції на Thames; колекція безкоштовна (l2) | https://en.wikipedia.org/wiki/Tate_Modern (11 May 2000; Bankside Power Station; Thames; «entry to the collection displays is free») ; WebSearch: https://www.tate.org.uk/about-us/history-tate/history-tate-modern (12 May 2000 — для публіки), https://www.artfund.org/explore/museums-and-galleries/tate-modern (free displays + paid exhibitions) | ✅ |
| Вистава студентського театру зі Lviv на Fringe, Mr Levchenko, виставка в Kharkiv, музей у Zelena Dolyna (l3, l4, l6) | — | Вигадані сюжети вигаданих героїв: рецензія Isla, листи. Реальному закладу чи фестивалю вони не приписують ні правил, ні подій. За факт не видаються ✅ |

## 2. Форми й словники (curl, CD https://dictionary.cambridge.org/dictionary/english/<word>, OALD)
- priceless — CD «B2 A priceless object has such a high value … that the price of it cannot be calculated»; worthless — CD «C2 having no value in money»; helpless — CD «C1 unable to do anything to help yourself or anyone else». Екран «-ful and -less» правильний.
- moving — CD «B2 causing strong feelings of sadness or sympathy»; touching — CD «making you feel sadness, sympathy, etc.». На екрані l3 «sad or kind, in a good way» — допустиме спрощення для B2, хоч і вільне.
- impressed — CD «be impressed with», OALD impressed «impressed by somebody/something … impressed with her house … impressed at». Прийменник ніде не питається ✅ (у l3 і фіналі прийменник *by* лише в тексті).
- worth — OALD worth_1 «worth doing something … well worth considering»; «worth to see» — помилка ✅.
- scenery — CD «(THEATRE) … pictures used on a theatre stage to represent the place where the action is», OALD «on a theatre stage … Film and theatre b1». Дефініція в l6 відповідає ✅.
- headliner — CD «the main performer at a concert, festival, etc., whose name is printed at the top of the list» ✅.
- illegal B2, irregular B1, irresponsible B2, unpopular B2, careless B1, colourful B1, impatient B2, unusual A2 (CD) ✅. Для inusual, unlegal, unpatient, priceful CD статті не має (переадресація на пошук), тож хибні варіанти справді хибні ✅.

## 3. Завдання → звідки відповідь (D-019) → друга правильна відповідь

| Урок · екран | Мій розв'язок = ключ | Опора | Друга правильна / зауваги | Вердикт |
|---|---|---|---|---|
| l1 ек.2 choice (hyp) | perform for audience | hyp | — | ✅ |
| l1 sort | 3 visual / 3 performing | ек.3 | street dance — у списку performing ✅ | ✅ |
| l1 match | 5 пар | ек.5 | кожну ліву перебрав з усіма правими: друга доречна пара відсутня | ✅ |
| l1 stress | 1-1-1-2 (performance) | ек.3 `<u>` + аналогія performing | CD | ✅ |
| l1 choice mural | mural | ек.5 | — | ✅ |
| l1 pick | sculpture | ек.5 | — | ✅ |
| l1 word | novelist | ек.5, «novel + a suffix» відсікає writer | без кінцевого знака | ✅ |
| l1 final choice | two visual arts | текст | — | ✅ |
| l2 ек.2 choice (hyp) | arsenal | hyp | — | ✅ |
| l2 ек.4 choice | old buildings | ек.3 | ❌ дистрактор «Both opened in 2000»: дату відкриття Арсеналу як арт-центру екран не дає, тож відкинути варіант можна лише з неподаних знань → «Both are in London.» (правка 1) | ✅ після правки |
| l2 gaps | Admission / temporary / workshop | ек.5 | «it's only open for a few months», «made my own poster» відсікають альтернативи | ✅ |
| l2 word | rehearsal | ек.7 | «practice» неприродне в цій рамці, підказка «re…» | ✅ |
| l2 pick | permanent | ек.5 + дати | — | ✅ |
| l2 build | Visiting galleries broadens my horizons. | ек.5 | інших граматичних порядків немає; extra broaden — не зараховується | ✅ |
| l2 multi | 0, 1 | текст + ек.7 | — | ✅ |
| l3 choice (hyp) | Mariia was moved | hyp | — | ✅ |
| l3 gaps | overwhelming / moved / fascinated | ек.3 | moved/touched не протиставлено | ✅ |
| l3 choice | impressive | ек.5 | «impressing» — не прикметник у CD | ✅ |
| l3 multi | 0, 2, 3 | ек.3 | — | ✅ |
| l3 word | disappointed | ек.3 | «disappointed with» — CD/OALD ✅ | ✅ |
| l3 pick | moving | ек.3 | — | ✅ |
| l3 build | 4 порядки в answer | ек.5 | перебрав: What impressed me most / What most impressed me / The last room was what… (×2). Інших немає | ✅ |
| l3 final gaps | inspiring / found / What / inspired | ек.3, 5 | «Which impressed me most was…» неграматичне; looked it — неграматичне | ✅ |
| l4 choice (hyp) | valuable | hyp | — | ✅ |
| l4 gaps | worthless / priceless / worthless | ек.3 | контекст «nobody can make another one», «cheap copy» однозначний | ✅ |
| l4 word | careless | ек.3, основа care задана | — | ✅ |
| l4 match | 5 пар | ек.6 | основа однозначно визначає прикметник | ✅ |
| l4 gaps prefix | illegal / irregular / impossible | ек.8 | хибні форми не існують (CD) | ✅ |
| l4 pick | unpatient | ек.8 (im- before p) | — | ✅ |
| l4 word | irresponsible | ек.8 (наведено в списку) | — | ✅ |
| l4 final gaps | unusual / colourful / careful / priceless | ек.3, 8 | «red, black and gold» → colourful | ✅ |
| l5 choice (hyp) | anyone | hyp | — | ✅ |
| l5 choice | edge of official festival | ек.3 | — | ✅ |
| l5 gaps passive | was held / was organised / is held / are left | e7s7l2 (requires) + hint | активні варіанти неграматичні; organised — BrE, AmE-«пастки» немає | ✅ |
| l5 match | 4 пари | ек.3, 5, 7 | роки й місця різні | ✅ |
| l5 pick | Scotland | ек.5 | — | ✅ |
| l5 word | headliner / headliners | ек.9 | обидва в ключі | ✅ |
| l5 final multi | 0, 2 | ек.3, 5, 7 | Glastonbury fallow → хибне; Atlas 2015 → хибне | ✅ |
| l6 3 choice (читання) | rule / touched / unknown people | текст | — | ✅ |
| l6 choice scenery | backgrounds and objects | міркування: «six actors and almost no scenery» + відкидання audience/music (ек.3 l1) | — | ✅ |
| l6 sort | 3 facts / 3 feelings | ек.6 | — | ✅ |
| l6 gaps | found / feel / recommend / worth | ек.6 + l3 ек.5 | «advise it to anyone» неприродне; worthy seeing — неграматичне | ✅ |
| l6 pick | to see | ек.6 | хибна група [!well worth] — багатослівна кнопка не видає відповідь | ✅ |
| l6 word | visiting | ек.6 | — | ✅ |
| l6 build | 2 порядки | ек.6 | «…to anyone highly» неприродне, у ключі його слушно немає | ✅ |
| l6 final gaps | fascinating / disappointing / unusual / recommend | l3, l4, ек.6 | — | ✅ |
| l7 Task 1–9 | sculptor / backstage tour / moving-amazed-impressive / boring / priceless-careful / illegal / 4 пари / It's well worth seeing. / found-disappointing-recommend | `pre` l1–l6; boring/bored — e7s4l4 і l3 ек.2 | boss питає лише пройдене; Task 7 Atlas «from 2015 to 2021» — правильне й після правки 4 | ✅ |

## 4. Правки (зроблені)
1. l2 ек.4: дистрактор «Both opened in 2000.» → «Both are in London.» (D-019: відкидався лише з неподаних знань).
2. l5 «Two festivals in Kyiv»: «usually at the end of May» → «usually in late May or June» (2021, 2023 — червень).
3. Там само: «In 2022, because of…, it didn't take place» → «It didn't take place in 2020 because of COVID-19, or in 2022 because of Russia's full-scale invasion, but it came back in 2023.»
4. Там само: Atlas Weekend «every summer from 2015 to 2021» → «It took place every summer from 2015 to 2021, except 2020.» (❌ факт).
Також: `status: "verified"` у 7 уроках, `meta.factcheck`, рядок «Статус» у коментарі.

Рекомендації (не блокувальні): l3 «moving, touching → makes you feel sad or kind» можна наблизити до словника: «sad or full of sympathy». У l4 «-ic: art → artistic» насправді суфікс -istic; можна дописати «(-istic)».

## 5. Англійська: решта чекліста
- BrE: programme, theatre, colourful, organised, practise (дієслово), Mum, cafés. AmE-правопису й лексики немає (grep). Пасток `extra`, що відрізняються лише регістром чи правописом, немає.
- Літер A/B/C в `opts` і позиційних посилань немає. Звуку, «Listen», IPA немає. `uk` немає.
- Діалогів немає, тож D-056 не зачеплено. Перевірив, чи немає обмінів репліками без `type: "dialog"`: таких немає, усе подано листами й текстами.
- Україна є: Mystetskyi Arsenal, Book Arsenal, Atlas, герої з Kyiv, Kharkiv, Lviv. Kyiv без *the*.
- Чутливе (війна, переселення в l3 і l6) подано стримано й без натуралістичних подробиць ✅.
- `requires`: e7s4l2 (theatre: stage, seats, box office — на нього посилається l2 ек.7), e7s4l4 (bored/boring), e7s7l2 (passive «It was built by»), e8s4l6 (concert review, I'd recommend), e10s1l1 (unreliable, disloyal), e10s5l1 (жанри живопису), e10s5l5 (відвідування музею). Усі id існують у content/eng/g7-e7s4.js, g7-e7s7.js, g8-e8s4.js, g10-e10s1.js, g10-e10s5.js, і всі доречні ✅.
- Рівень B2: речення пояснень короткі, граматика пояснень не складніша за правило ✅.

Авторське право (WebSearch з лапками, точного збігу немає ніде):

| Фрагмент | Результат |
|---|---|
| "our school magazine asked me to review three Fringe shows in one day" | збігів немає |
| "There were only six actors and almost no scenery, but the show was incredibly moving" | збігів немає |
| "I'd highly recommend the Fringe to anyone who loves surprises" | збігів немає |
| "Some photos were so moving that I couldn't say a word" | збігів немає |
| "In the afternoon, we'll go on a backstage tour of a theatre" | збігів немає |
| "Painting on a wall without permission is illegal. Street artists need a wall where it's allowed" | збігів немає |

## 6. Прогін
- `node tools/validate.mjs --section e11s4` — 0 помилок, 0 попереджень (після правок).
- `node tools/stats.mjs --subject eng`: прапорці «нетипово для сім'ї» в l4 (longWordShare, урок про афікси), l5 (gradedShare, урок фактів) і l6 (урок читання з повним текстом 11 кл.). Межі профілю не порушено, пояснення автора прийнятне.
- `python3 tools/playtest.py --section e11s4` — не запущено: Python-модуля playwright у контейнері немає. Плейтест іде в CI (job browser).

## 7. Вердикт по уроках
e11s4l1–l7 — `verified`. Потрібно від людини: схвалення вчителя (`approved`), build і commit (оркестратор). Якщо треба відкрити edfringe.com, vam.ac.uk і artarsenal.in.ua напряму, їх треба дозволити в мережі сесії.
