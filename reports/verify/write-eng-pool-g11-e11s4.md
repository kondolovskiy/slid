# Верифікація: пул pe11s4 (англійська, 11 кл., розділ e11s4 «Art and festivals»)

Верифікатор: verifier-pe11s3-pe11s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g11-e11s4.js` (70 вправ a01–a70) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g11-e11s4.md. Опора: уроки `content/eng/g11-e11s4.js` (verified) і попередні розділи (e7s4, e7s7, e10s1). Канон героїв — memory/long/glossary/eng-heroes.md (11 кл.: 17 років, Tom 15, Dmytro 13).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і других правильних відповідей у gaps і word я не знайшов. Зробив 3 правки в 3 вправах: усі через **inspired**. Це прикметник зі значенням «чудовий, натхненний», і в CD та OALD є приклад саме «an inspired performance». Тому дистрактор *inspired* у a23, a30 і a31 граматично й за змістом правильний (критично). Людина потрібна лише для `approved`. Таку саму пастку я бачу і в уроці e11s4l3: див. §5 і рядок FIX в inbox. Браузерні прогони пройдуть у CI, бо Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources`: лише `p1407`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. `src`: с. 24 (теми «Мистецтво»: види й жанри, відвідування мистецьких закладів, емоції; «Дозвілля»: фестивалі) — l1, l2, l5 cult/read/vocab, l6 read/vocab/write; с. 25 (participles as adjectives, adjectives with suffixes / prefixes, active / passive) — l3 gram/write, l4, l5 gram; с. 23 (функція «висловлювати емоційне ставлення») — l3 func, l6 func, l6 gram (worth + -ing — у функції). Збігається з шапкою розділу e11s4 ✅.

## 2. Факти (лише ті, що вже є в уроках e11s4l2 і e11s4l5)

| Твердження (вправи) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Mystetskyi Arsenal — Kyiv, будівлі понад 200 років, колишня майстерня, де робили, ремонтували й зберігали гармати; сьогодні — виставки й фестивалі (a12, a13) | https://en.wikipedia.org/wiki/Mystetskyi_Arsenal_National_Art_and_Culture_Museum_Complex (curl raw: «a workshop for the manufacturing, repair work and storage of ammunition and cannon», 1798); https://artarsenal.in.ua/en/history/ (WebSearch: будівництво 1798–1801, стіни > 183 см) | ✅ |
| Tate Modern — London, на Thames, відкрито 2000 у колишній електростанції, колекція безкоштовна (a11–a13) | https://en.wikipedia.org/wiki/Tate_Modern (curl raw: «former Bankside Power Station», «opened by the Queen on 11 May 2000»); https://www.tate.org.uk/whats-on/tate-modern/tate-modern-free-collection-displays і https://www.tate.org.uk/visit/tate-modern (WebSearch: «Entry to the collection is free») | ✅ |
| Fringe — Edinburgh, щосерпня, з 1947, open access, без selection committee (a44–a46, a49, a50, a55) | https://en.wikipedia.org/wiki/Edinburgh_Festival_Fringe (curl raw: «founded 1947», «takes place in Edinburgh every August», «The Fringe is an open access festival»); https://www.edfringe.com/about-us/history-of-the-fringe/ і https://www.britannica.com/art/the-Fringe (WebSearch: 1947, вісім груп без запрошення) | ✅ |
| Glastonbury — перший 19 September 1970, Michael Eavis; ферма в Somerset, England; fallow years (a45, a46, a51) | https://en.wikipedia.org/wiki/Glastonbury_Festival (curl raw: 1970-09-19, «Pilton, Somerset, England», «Annually, with fallow years»); https://glastonburyfestivals.co.uk/history/history-1970/ (WebSearch: 19 September 1970, Worthy Farm, Michael Eavis, 1,500, £1); https://thequietus.com/news/glastonbury-to-take-year-off-in-2026-emily-eavis-confirms (fallow year 2026) | ✅ |
| Book Arsenal — щороку в Mystetskyi Arsenal; London Book Fair 2019 — найкращий літературний фестиваль; 2020 не відбувся (COVID-19) (a45, a46, a52) | https://www.publishersweekly.com/pw/by-topic/international/international-book-news/article/91907-ukraine-to-hold-book-festival-in-kiev-this-june.html і https://www.kyivpost.com/lifestyle/dont-miss-top-events-of-book-arsenal-fair-in-kyiv.html (WebSearch: заснований 2011, щорічний; березень 2019 — LBF best literary festival); 2020: https://espreso.tv/news/2020/05/12/knyzhkovyy_arsenal_perenesly_na_2021_rik , https://life.pravda.com.ua/society/2020/05/12/240946/ (WebSearch: X фестиваль перенесено на 2021) | ✅ |
| Atlas Weekend — 2015–2021, крім 2020; 2024 — благодійний (a45, a46) | https://www.unian.info/kyiv/kyiv-s-major-music-fest-postponed-until-july-2021-over-coronavirus-lockdown-news-kyiv-10978958.html , https://fakty.com.ua/ru/ukraine/20200430-atlas-weekend-perenesly-na-2021-rik-cherez-koronavirus/ (2020 → 2021); https://en.wikipedia.org/wiki/Atlas_Festival (curl raw: 2015, 2021); 2024: https://news.telegraf.com.ua/ukr/obshhestvo/2024-07-24/5864233-festival-atlas-united-2024-zibrav-100-mln-grn-na-potrebi-zsu , https://babel.ua/en/news/107541-the-atlas-united-music-festival-will-be-held-in-kyiv-in-july-100-million-hryvnias-will-be-collected-on-it-for-drones (WebSearch) | ✅ |
| Виставки, концерти й фестивалі героїв — вигадані, без назв; реальним закладам нових подій не приписано | — | ✅ |

## 3. Форми й наголос (словники відкрито в цій сесії через curl)
CD https://dictionary.cambridge.org/dictionary/english/<word> (UK | US) і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word> (BrE | NAmE):
sculpture ˈskʌlp.tʃər · /ˈskʌlptʃə(r)/ (sculpture_1); photographer fəˈtɒɡ.rə.fər | fəˈtɑː.ɡrə.fɚ · /fəˈtɒɡrəfə(r)/; audience ˈɔː.di.əns | ˈɑː.di.əns · /ˈɔːdiəns/; performance pəˈfɔː.məns | pɚˈfɔːr.məns · /pəˈfɔːməns/; architect ˈɑː.kɪ.tekt | ˈɑːr.kə.tekt · /ˈɑːkɪtekt/; visual ˈvɪʒ.u.əl · /ˈvɪʒuəl/ (visual_1); literature ˈlɪt.rə.tʃər | ˈlɪt̬.ɚ.ə.tʃɚ · /ˈlɪtrətʃə(r)/; mural ˈmjʊə.rəl | ˈmjʊr.əl · /ˈmjʊərəl/; novelist ˈnɒv.əl.ɪst · /ˈnɒvəlɪst/; perform pəˈfɔːm · /pəˈfɔːm/. Наголошений склад у UK і US однаковий ✅. Усі слова підкреслені `<u>` в e11s4l1 (#3, #5) або є в stress-вправі уроку (performance, l1 #7) ✅. У кожному наборі a05–a07 є слово з іншим наголошеним складом ✅.
**inspired:** CD «excellent, or resulting from inspiration: an inspired performance / choice»; OALD «having excellent qualities or abilities… an inspired performance» (curl). Тому inspired не може бути хибним варіантом для речі чи людини, що «спричиняє почуття» (див. §4).

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` зараховує всі ключі. `build` перевірено перебором усіх перестановок усіх підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe11s3-pe11s4/bin/chk.mjs`): a20 — 2 порядки, a30 — 2, a68 — 2 (keepCase), усі вони в ключі. Кінцевого `.!?` у ключах `word` немає.

**Пастки теми.** moved / touched ніде не протиставлено (a27 — обидва в ключі) ✅; impressed by — прийменник не питаємо ✅; impressive / impressed / impressing — як в уроці (a26, a28) ✅. priceless ≠ worthless (a37, a43) і helpless ≠ unhelpful (a38) — як у l4 #3 ✅. Префікси в gaps — лише слова з однією формою (impossible, dishonest, informal, irresponsible), хибні — неіснуючі форми ✅. У word — однозначна основа (popular → unpopular, colour → colourful) ✅. made me + інфінітив без to ✅. worth + -ing; «worth going to» — правильне й у ключі (a67) ✅.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | за списком | = | l1 #3, #5 | інших пар немає | ✅ |
| a02 sort | 2/2/2 | = | l1 #3 | ні | ✅ |
| a03 word | photographer | = | l1 #5 | ні | ✅ |
| a04 choice | literature | = | l1 #3 (останнє речення) | «reading… nobody is performing» відсікає performing arts | ✅ |
| a05–a07 stress | за словником | = | §3 | hint — стратегія | ✅ |
| a08–a10 | a performing art / [0,1] / architect and novelist | = | текст; l1 #3, #5 | Halyna — мурал на школі (l1 #8), тітка Daryna в Odesa (канон) | ✅ |
| a11–a13 | London / [0,1] / [power station] | = | l2 #3 | ні | ✅ |
| a14–a16 | 14 June / [0,1] / museum websites | = | текст; l2 #5 | ні | ✅ |
| a17 gaps | permanent; free | = | l2 #5 | ні | ✅ |
| a18 match | за списком | = | l2 #7 | інших пар немає | ✅ |
| a19 pick | [rehearsal] | = | l2 #7 | ні | ✅ |
| a20 build | 2 порядки | = | l2 #10 | перебір: лише ключі | ✅ |
| a21, a22 gaps | permanent; temporary; admission / an open rehearsal; a backstage tour; a programme | = | l2 #5, #7 | ні | ✅ |
| a23 gaps | inspiring; fascinated | = | l3 #3 | «Our guide was really ___» з хибним inspired: «an inspired guide» = чудовий, контекст цього значення не відсікає | ❌ → «Our guide’s stories were really {*fascinating\|fascinated}. We were {*inspired\|inspiring} by her.»; steps |
| a24 choice | amazed | = | l3 #3 | ні | ✅ |
| a25 word | overwhelmed | = | l3 #3 | ні | ✅ |
| a26 pick | [impressed] | = | l3 #5 | ні | ✅ |
| a27 multi | [0,1] | = | l3 #3 | обидва в ключі | ✅ |
| a28 gaps | impressive; impressed | = | l3 #5 | ні | ✅ |
| a29 gaps | found; feel | = | l3 #5 | ні | ✅ |
| a30 build | I found … really inspiring | = | l3 #5 | пастка extra «inspired» складалася в «I found the dance performance really inspired» = «an inspired performance» (приклад CD/OALD), а рушій зараховував би це як помилку | ❌ → extra «inspire» |
| a31 choice | The exhibition made me feel inspired. | = | l3 #5 | дистрактор «I found the exhibition inspired» — граматично й за змістом можливий (inspired = чудова) | ❌ → «I was inspiring by the exhibition.»; steps |
| a32–a34 gaps | amazing; inspired / disappointing; disappointed; amazing / bored; fascinating; found; touching; feel | = | l3 #3, #5; bored — e7s4l4 | ні | ✅ |
| a35 match | за списком | = | l4 #6 | інших пар немає | ✅ |
| a36 word | colourful | = | l4 #3 | AmE colorful рушій зараховує з приміткою | ✅ |
| a37 gaps | worthless; priceless | = | l4 #3 | контекст однозначний | ✅ |
| a38 pick | [helpless] | = | l4 #3 | ні | ✅ |
| a39 gaps | impossible; dishonest; informal | = | l4 #8 | ні | ✅ |
| a40 word | unpopular | = | l4 #8 (прямо в уроці) | ні | ✅ |
| a41–a43 gaps | colourless; colourful / enjoyable; useful; creative / colourless; irresponsible; worthless; priceless | = | l4 #3, #6, #8 | ні | ✅ |
| a44–a46 | Edinburgh / за фактами / [0,2] | = | l5 #3, #5, #7 | інших пар у match немає | ✅ |
| a47–a49 | once a year / [0,2] / open access | = | текст; l5 #3, #9 | Isla’s cousin — нова дрібна деталь | ✅ |
| a50–a52 | is held; was held / organised / is held; was named; wasn’t held | = | l5 #5; e7s7l2 | ні | ✅ |
| a53 match | за списком | = | l5 #9 | інших пар немає | ✅ |
| a54 gaps | sold out; open-air; headliner | = | l5 #9 | ні | ✅ |
| a55 word | venue | = | l5 #3 | body відсікає stage | ✅ |
| a56–a58 | too long / [0,2] / bored, then amazed | = | текст; l3 #3 | ні | ✅ |
| a59–a61 | scenery / [scenery] / [0,2] | = | l6 #5 | ні | ✅ |
| a62 sort | 3/3 | = | l6 #7 | ні | ✅ |
| a63 gaps | laugh; highly; well worth | = | l6 #6 | ні | ✅ |
| a64 pick | [to cry] | = | l6 #6 | ні | ✅ |
| a65–a67 | visiting / reading / [0,2] | = | l6 #6, #10 | «worth going to» у ключі | ✅ |
| a68 build | 2 порядки | = | l6 #6 | перебір: лише ключі | ✅ |
| a69 order | за планом | = | l6 #6 | ні | ✅ |
| a70 gaps | scenery; found; feel; touched; seeing | = | l6 #5, #6 | інший сюжет, ніж у фіналі l6 | ✅ |

## 5. Інше
- **Канон героїв:** Andrii, Daryna (тітка в Odesa), Yehor (Arts Week), Mr Levchenko (скульптор, майстерня в школі Andrii), Halyna (малює, мурал), Grandad Mykola, Dmytro, Mariia і тато, Polina (Kharkiv), Kyrylo (history), Zoriana, Emma, Tom, Isla (Edinburgh), Oksana, Taras (Lviv). Кар'єру Oksana не зачеплено. Суперечностей і нових імен немає.
- **BrE:** colourful, organised, programme, theatre ✅. AmE-форми хибними варіантами не дано ✅.
- **Без IPA, звуку, «Listen»** ✅. Літер A/B/C і позиційних посилань в `opts` немає ✅. Підказки не видають відповідь ✅. Рамки уроків з тим самим ключем не повторюються ✅.
- **Урок (не мій файл, не правив):** e11s4l3 фінал «The exhibition was {*inspiring|inspired}» має ту саму другу правильну відповідь: *an inspired exhibition* = чудова. Пропозиція — рядок FIX в inbox.
- **Авторське право** (WebSearch з лапками):

| Фрагмент | Запит | Результат |
|---|---|---|
| a70 «There was almost no scenery on the stage: just a few chairs and a painted sunflower» | `"There was almost no scenery on the stage: just a few chairs and a painted sunflower"` | збігів немає |
| a58 «the scenery suddenly turned around, and the whole stage became a forest» | `"the scenery suddenly turned around, and the whole stage became a forest"` | збігів немає |

## 6. Прогін
`node tools/validate.mjs --pool pe11s4` — 0 помилок, 0 попереджень (після правок і зміни статусу). `node tools/personalization-qa.mjs --pool pe11s4 --strict` — 6 уроків, 70 вправ, у кожному уроці ≥ 3 вправи рівнів 1–3. `node tools/euphony.mjs --pool pe11s4` — без відхилень. `python3 tools/test-answer-ui.py --suite content --pool pe11s4` — у контейнері немає модуля playwright, прогін буде в CI (job browser).

## 7. Правки (зроблені)
a23 (текст і steps), a30 (extra inspired → inspire), a31 (дистрактор і steps), шапка, `status`, `meta.factcheck`. id вправ не змінювались.

**Вердикт: pe11s4 — verified.** Відкритих ❌ і ⚠️ немає.
