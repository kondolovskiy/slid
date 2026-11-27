# Верифікація: пул pe10s4 (англійська, 10 кл., розділ e10s4 «Weather, nature and natural disasters»)

Верифікатор: verifier-pe10s3-pe10s4, 2026-11-27. Цей пул я не писав. Перевіряв `content/eng/pool-g10-e10s4.js` (73 вправи a01–a73) за скілами `content-verify` (розділ «Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g10-e10s4.md. Опора: уроки `content/eng/g10-e10s4.js` (verified) і попередні розділи g4–g9, e10s1–e10s3. Канон героїв — memory/long/glossary/eng-heroes.md (10 кл.: 16 років).

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, граматично правильних дистракторів і других правильних відповідей поза ключем я не знайшов. Зробив 4 правки в 4 вправах: 2 копії рамок уроків (a38 — інтро l4, a73 — фінал l6), 1 граматичний порядок плиток поза ключем (a59), 1 суперечність канону героїв (a31). Людина потрібна лише для `approved`. Браузерні прогони пройдуть у CI: Python-модуля playwright у контейнері немає.

## 1. Програма, `src`
`sources`: лише `p1407`, `program: true`, title і url — як у facts/eng.md; `srcPage` і `adapted` немає ✅. `src`: с. 22 (тема «Природа і погода»: катаклізми, вплив погоди на здоров'я й настрій, захист природи; функція «прогнозувати ймовірність») — vocab, cult, read, phon, write l1, l3, l6 і read l4–l5; с. 23 («Going to / will for predictions», «Future Continuous», «Future Perfect», «prepositions in time phrases … by, until») — gram l2, l4, l5 і write l2, l4, l5, a73. Збігається з розділом e10s4 ✅.

## 2. Факти (лише ті, що вже були в уроках e10s4l1, e10s4l4, e10s4l6)

| Твердження (вправи) | Джерела (відкриті в цій сесії) | Вердикт |
|---|---|---|
| Met Office і Met Éireann дають імена штормам з 2015; список щороку восени (вересень), абеткою, з ідей public (a04–a06) | https://www.metoffice.gov.uk/blog/2025/how-does-the-met-office-name-storms ; https://www.gov.ie/en/department-of-housing-local-government-and-heritage/press-releases/met-%C3%A9ireann-announces-new-list-of-storm-names-for-202526 ; https://www.irishexaminer.com/news/spotlight/arid-41771456.html (WebSearch) | ✅ |
| Липень 2008: кілька днів сильного дощу в Карпатах, Dniester і Prut вийшли з берегів, західна Україна, пошкоджено мости (a08) | https://earthobservatory.nasa.gov/images/20307/floods-in-eastern-europe ; WHO IRA 2–4 August 2008 (561 foot bridges damaged) і UN OCHA (360 bridges) — https://who-sandbox.squiz.cloud/en/health-topics/health-emergencies/from-disaster-preparedness-and-response/policy/response/floods-2008/initial-rapid-assessment (WebSearch) | ✅ |
| Met Office: yellow — деякі проблеми; amber — будьте готові змінити плани; red — небезпечна погода, діяти; red — rare (a40–a42, a48) | https://www.metoffice.gov.uk/blog/2025/how-are-weather-warnings-categorised ; https://www.countryfile.com/environment/weather-warnings-uk ; rare: https://www.metoffice.gov.uk/about-us/news-and-media/media-centre/weather-and-climate-news/2021/rare-red-warning-issued-for-storm-arwen , https://www.metoffice.gov.uk/about-us/news-and-media/media-centre/weather-and-climate-news/2022/red-weather-warning-issued-for-storm-eunice («rarely issued») (WebSearch) | ✅ |
| UK — 15 нацпарків: 10 England, 3 Wales, 2 Scotland, NI — жодного (a68, a69) | https://en.wikipedia.org/wiki/National_parks_of_the_United_Kingdom (curl raw: «15 national parks, of which ten are in England, three are in Wales and two are in Scotland; there are no national parks in Northern Ireland»); https://reports.peakdistrict.gov.uk/npmp2023/docs/national-park/the-peak-district-national-park.html (15; WebSearch) | ✅ |
| Більшість землі в парках — приватна (фермери та інші власники) (a70); Peak District — ферми, села (a65) | https://cnp.org.uk/national-park-faqs ; https://www.nationalgeographic.com/travel/parks/peak-district-england/ (понад 90 % — приватні власники) (WebSearch) | ✅ |
| Карпатський НПП — 1980, перший в Україні (a71); Шацький — 1983, Волинь, 23 озера, Світязь — найглибше (a64, a66, a72) | https://en.wikipedia.org/wiki/Carpathian_National_Nature_Park ; https://en.wikipedia.org/wiki/Shatsk_National_Natural_Park ; https://uk.wikipedia.org/wiki/Шацький_національний_природний_парк (curl raw: «у сучасних межах парку є 23 озера»); https://en.wikipedia.org/wiki/Svitiaz (deepest in Ukraine) (WebSearch) | ✅ |
| Вигадані прогнози, плани й епізоди героїв — без реальних дат і закладів, не факт-ключ | — | ✅ |

## 3. Форми й наголос (словники відкрито в цій сесії через curl)
CD https://dictionary.cambridge.org/dictionary/english/<word> (UK | US) і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word> (BrE): wildfire ˈwaɪld.faɪər | ˈwaɪld.faɪr · /ˈwaɪldfaɪə(r)/; volcano vɒlˈkeɪ.nəʊ | vɑːlˈkeɪ.noʊ · /vɒlˈkeɪnəʊ/; hurricane ˈhʌr.ɪ.kən | ˈhɝː.ɪ.keɪn · /ˈhʌrɪkən/; disaster dɪˈzɑː.stər | dɪˈzæs.tɚ · /dɪˈzɑːstə(r)/; landslide ˈlænd.slaɪd | = · /ˈlændslaɪd/; avalanche ˈæv.əl.ɑːntʃ | ˈæv.əl.æntʃ · /ˈævəlɑːnʃ/; earthquake ˈɜːθ.kweɪk | ˈɝːθ.kweɪk · /ˈɜːθkweɪk/. Наголошений склад у UK і US однаковий ✅. Усі сім підкреслені `<u>` у e10s4l1 ✅. У кожному наборі є слово з іншим наголошеним складом ✅.
sunburnt / sunburned: OALD https://www.oxfordlearnersdictionaries.com/definition/english/sunburned — «sunburned adjective … (also sunburnt)» — обидва в ключі a26 ✅. heatwave — лише як правильне слово в gaps (a31, a33 немає `word` на heatwave) ✅. Граматика will / be going to / Future Continuous / Future Perfect / by, until — CD Grammar, як у розділі (reports/verify/write-eng-g10-e10s4.md).

## 4. Вправи: моє розв'язання → опора (D-019) → друга правильна → вердикт

Кожну вправу я розв'язав сам, а потім звірив з ключем. `SLID_LANG.check(…, SLID_LANG.solution(…), "en")` зараховує всі ключі. `build` — перебір усіх перестановок усіх підмножин tiles + extra (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe10s3-pe10s4/bin/chk.mjs`): a22 — 1 порядок, a39 — 3, a47 — 6, a59 — 3 (після правки), усі в ключі; keepCase немає. Кінцевого `.!?` у ключах `word` немає. Лексика (`lex.mjs` проти g4–g9, e10s1–e10s3 і уроків e10s4 до поточного): поза уроками лише exploded (друга відповідь a03), форми shortest, lower, blow(s), belong. 6-грами (`ngram.mjs`): збіги з інтро l4 (a38) і фіналом l6 (a73) — виправлено; решта — інструкції й фрази правила («put me in a good mood», «be ready to change your plans»).

**Пастки теми.** will і be going to ніде не протиставлені: у gaps серед хибних лише going to без be, are going to з it / they, wills, is + V (a16, a23, a24); a20 — will, are going to, are likely to правильні разом; a21 — хибне «They is going to». Future Continuous: will + verb ніде не хибне (a37 — will be blowing і will blow обидва в ключі); у gaps пастки лише will + -ing без be, will be + V, will being. Future Perfect: will + verb з by ніде не хибне (a54 — «I will read the book by Monday» у ключі); пастки — will has, will have + V, readed, don’t have + V3, until із завершеною дією. till не з'являється ✅.

| Вправа | Моя відповідь | Ключ | Опора | Друга правильна / зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | за info l1 | = | l1 #3 | кожен лівий перебрав з усіма правими — інших пар немає | ✅ |
| a02 gaps | flood; landslide | = | l1 #3 | ні | ✅ |
| a03 word | erupted / exploded | = | l1 #3 | обидва в ключі | ✅ |
| a04–a06 | Met Office і Met Éireann / alphabetical / [0,2,3] | = | l1 #6 | ні | ✅ |
| a07 choice | the fields | = | текст | ні | ✅ |
| a08 multi | [1,2] | = | текст; l1 #7 | ні | ✅ |
| a09 choice | a drought | = | текст; l1 #3 | ні | ✅ |
| a10–a12 stress | за словником | = | §3 | hint — стратегія | ✅ |
| a13 gaps | earthquake; helped | = | l1 #3, #7 | ні | ✅ |
| a14 gaps | hit; knocked down; flooded | = | l1 #1, #12 | Owen (Wales) — канон | ✅ |
| a15 gaps | inside; hurricane; avalanches | = | l1 #3, #5 | «in winter, in the mountains» відсікає droughts / wildfires | ✅ |
| a16 gaps | is going to; will | = | l2 #3 | ні | ✅ |
| a17 choice | She can see signs now | = | l2 #3, #6 | ні | ✅ |
| a18 gaps | are likely to; are unlikely to | = | l2 #3, #7 | ні | ✅ |
| a19 sort | 3/3 | = | l2 #3, #4 | ні | ✅ |
| a20 multi | [0,1,2] | = | l2 #3, #5 | ні | ✅ |
| a21 pick | [is going to] | = | l2 #3 | ні | ✅ |
| a22 build | That old tree is going to fall. | = | l2 #3 | перебір: лише ключ | ✅ |
| a23 gaps | is likely to; is unlikely to; will | = | l2 #3 | ні | ✅ |
| a24 gaps | is going to; will; unlikely to | = | l2 #3 | ні | ✅ |
| a25 gaps | under the weather | = | l3 #3 | ні | ✅ |
| a26 word | sunburnt / sunburned | = | l3 #3 | обидва в ключі | ✅ |
| a27 gaps | cheerful; in | = | l3 #3; «bad mood» — e10s3l5 | ні | ✅ |
| a28–a30 | reading in the shade / [0,2] / goes outside when it’s light | = | текст | Mariia малює комікси — канон | ✅ |
| a31 gaps | heatwave; feel | = | l3 #3 | канон: Oksana щолипня в Odesa (дядько Ivan), у серпні — Карпати, а тут «writes in August… 36 °C in Zelena Dolyna… for ten days» | ⚠️ → «in summer» |
| a32–a33 gaps | headache; sunburnt; shade / under the weather; make me; put me in | = | l3 #3, #9 | ні | ✅ |
| a34 gaps | will be snowing; will be falling | = | l4 #3 | ні | ✅ |
| a35 word | will be shining | = | l4 #3 | ’ll be shining у ключі, `contractions` | ✅ |
| a36 pick | [will be rain] | = | l4 #3 | ні | ✅ |
| a37 multi | [0,1] | = | l4 #3 | ні | ✅ |
| a38 gaps | will start; will be snowing; will be | = | l4 #3 | майже дослівна копія інтро l4 («Snow will start in the afternoon, and in the evening it will be snowing hard. Roads will be icy.») з тими самими трьома відповідями в тому самому порядку | ⚠️ → Lviv: «Snow will start in Lviv at about 3 pm. At 6 pm, it will be snowing hard in the city centre, and the buses will be late.»; body, steps |
| a39 build | 3 порядки | = | l4 #3, #8 | перебір: лише ключі | ✅ |
| a40–a42 choice | yellow / some problems / Red warnings are rare | = | l4 #5 | ні | ✅ |
| a43–a45 | all afternoon / [0,2] / the day after tomorrow, afternoon | = | текст | ні | ✅ |
| a46 gaps | will be raining; will be | = | l4 #3 | ні | ✅ |
| a47 build | 6 порядків | = | l4 #8 | перебір: лише ключі | ✅ |
| a48 gaps | an amber; will be blowing; will be | = | l4 #5 | ні | ✅ |
| a49 gaps | will have finished; will have done | = | l5 #3 | ні | ✅ |
| a50 gaps | until; by | = | l5 #5 | ні | ✅ |
| a51 gaps | will have written; won’t have finished | = | l5 #3 | Zoriana — coding club (канон) | ✅ |
| a52 choice | closed up to 10 May, then open | = | l5 #5 | ні | ✅ |
| a53 pick | [until] | = | l5 #5 | ні | ✅ |
| a54 multi | [0,1] | = | l5 #3, #5 | ні | ✅ |
| a55 word | will have written | = | l5 #3 | ’ll у ключі; shall — лише з I / we, тут Kyrylo | ✅ |
| a56–a58 | tennis and garden / bird boxes / [0,1] | = | текст | a57 — та сама будова «план по місяцях → What won’t they have done…», що l5 #7, але інший ключ, герої й форма (won’t) | ✅ |
| a59 build | By June… / …by June | = | l5 #3 | перебір: граматичний «I will have saved enough money by June for a new camera» зараховувався б як помилка (ключ лише з 2 порядками) | ⚠️ → додано в `answer` |
| a60–a61 gaps | until; will have played; won’t have lost / until; will have planted; will have made | = | l5 #3, #5 | ні | ✅ |
| a62 match | за info l6 | = | l6 #3 | інших пар немає | ✅ |
| a63 gaps | landscape; habitat | = | l6 #3 | ні | ✅ |
| a64 word | deeper | = | l6 #3, #8 | «than» відсікає deepest | ✅ |
| a65–a67 | farms with sheep / [0,2] / can’t make a fire | = | текст; l6 #4, #6 | Taras і Світязь «two summers ago» — канон | ✅ |
| a68–a70 choice | 15 / Northern Ireland / farmers and other owners | = | l6 #4 | ні | ✅ |
| a71–a72 gaps | was created; landscapes / north-west; was created; deepest | = | l6 #3, #5 | ні | ✅ |
| a73 gaps | (нова) will be swimming; are going to; will have learnt | = | l2 #3, l4 #3, l5 #3 | рамка фіналу l6 («Next summer… are going to… trip… This time next July we will be walking… by the end of the trip I will have taken…») — той самий сюжет і порядок форм із тими самими наборами пасток | ⚠️ → новий порядок і зміст (15 July at noon → will be swimming; room booked → are going to; by the end of the week → will have learnt); hint, steps |

## 5. Інше
- **Канон героїв:** Emma і шторм у її місті; Owen (Wales); Taras, Zlata, тато — Карпати, Світязь; Mariia (Kharkiv) і спека, комікси; Andrii (Kyiv, flat, шахи); Oksana і річка в Zelena Dolyna, автобус до Poltava; Bohdan — теніс; Zoriana — coding club; Kyrylo — history; Daryna — сестра, геоклуб, шкільний подкаст. Після правки a31 суперечностей немає. Нових імен немає.
- **BrE:** sun cream, holiday, flat, -ise / -our; learnt (a73 — правильний варіант, AmE learned хибним не дано) ✅.
- **Чутливе:** катаклізми без жертв і страшних подробиць; «rescue workers helped people leave their homes» — як в уроці ✅.
- **Без IPA, звуку, «Listen»** ✅. Літер A/B/C і позиційних посилань в `opts` немає ✅. Підказки не видають відповідь ✅.
- **Авторське право** (WebSearch з лапками):

| Фрагмент | Запит | Результат |
|---|---|---|
| a45 «heavy snow will be falling all day, and strong winds will be blowing» | `"heavy snow will be falling all day, and strong winds will be blowing"` | збігів немає |
| a66 «The water was so clear that I could see the stones at the bottom» | `"The water was so clear that I could see the stones at the bottom"` | збігів немає |

## 6. Прогін
`node tools/validate.mjs --pool pe10s4` — 0 помилок, 0 попереджень (після правок і зміни статусу). `node tools/personalization-qa.mjs --pool pe10s4 --strict`: 6 уроків, 73 вправи, кожен урок ≥ 3 вправи рівнів 1–3. `node tools/euphony.mjs --pool pe10s4` — 0 відхилень. `python3 tools/test-answer-ui.py --suite content --pool pe10s4` — у контейнері немає модуля playwright, прогін буде в CI (job browser).

## 7. Правки (зроблені)
a31 (body «in summer»), a38 (body, текст, steps), a59 (третій порядок в `answer`), a73 (текст, hint, steps), шапка, `status`, `meta.factcheck`. id вправ не змінювались.

**Вердикт: pe10s4 — verified.** Відкритих ❌ і ⚠️ немає.
