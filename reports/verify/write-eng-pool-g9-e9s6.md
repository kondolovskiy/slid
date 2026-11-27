# Верифікація: пул pe9s6 (англійська, 9 кл., розділ e9s6 «Science and inventions»)

Верифікатор: verifier-pe9s6 (сесія verifier-pe9s5-pe9s6), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g9-e9s6.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s6.md. Опора: уроки `content/eng/g9-e9s6.js` (verified) і розділи g4–e9s5. Еталони: reports/verify/write-eng-pool-g9-e9s1.md, -e9s2.md, -g8-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів, хибних фактів і граматично правильних дистракторів у пасиві чи з can / could я не знайшов. Зробив 2 змістові правки (копія рамки уроку з тим самим ключем; дистрактор, який можна прочитати як граматичний) і оновив статус із шапкою. Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. Сторінки: с. 31 — короткий опис прилада (l6 read/write); с. 33 — тема «Наука і технічний прогрес» (l1, l2 vocab, l3 read, l4 read/vocab, l5 vocab/read/phon); с. 34 — Can: general truths (l3 gram/write, l5 write); с. 35 — Passives (l2 gram/write, l4 gram/write, l6 gram). Усі `src` відповідають урокам ✅.

## 2. Факти (усі є в уроках e9s6; у пулі нових немає)

| Твердження (вправи) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Marie Curie: працювала у France; 1903 — перша жінка з Нобелівською премією; дві премії (друга — 1911); радій відкрили Marie і Pierre (a01, a05, a07, a08, a13, a15, a16, a22, a24, a26) | WebSearch: https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts ; https://nobelprize.org/prizes/chemistry/1911/marie-curie ; https://www.britannica.com/summary/Marie-Curies-Achievements | ✅ |
| Igor Sikorsky: народився в Kyiv 1889; переїхав до USA і там конструював гелікоптери (a06, a07, a14, a16, a20) | WebSearch: https://en.wikipedia.org/wiki/Igor_Sikorsky ; https://www.britannica.com/biography/Igor-Sikorsky ; https://www.encyclopediaofukraine.com/pages%5CS%5CI%5CSikorskyIhor.htm. Пул не каже «лише в USA» і не робить київський період хибним (D-057, примітка оркестратора) | ✅ |
| Kateryna Yushchenko — Ukrainian computer scientist, мова Address, 1955 (a02, a07, a12, a18) | WebSearch: https://en.wikipedia.org/wiki/Kateryna_Yushchenko_(scientist) ; https://en.wikipedia.org/wiki/Address_programming_language ; https://www.computingatschool.org.uk/forum-news-blogs/2022/march/kateryna-yushchenko/ | ✅ |
| Web — Tim Berners-Lee, 1989; penicillin — Fleming, London, 1928 (a16–a19, a21, a23, a25, a26) | WebSearch: https://lemelson.mit.edu/resources/alexander-fleming ; https://www.countrylife.co.uk/country-life/great-british-inventions-31214 (St Mary’s, London, 1928; CERN, 1989) | ✅ |
| Bell — патент на телефон 1876 (a27, a29, a35) | WebSearch: https://www.smithsonianmag.com/science-nature/eureka-89414180/ ; https://kids.britannica.com/students/article/inventors-at-a-glance/626789 | ✅ |
| Cooper — 1973, вулиця New York, телефон > 1 кг (a27–a29) | WebSearch: https://britannica.com/biography/Martin-Cooper (1.1 kg); https://npr.org/2023/04/03/1167815751/50-years-ago-martin-cooper-made-the-first-cell-phone-call ; https://www.cbsnews.com/news/cell-phone-turns-40-martin-coopers-first-call-on-the-dynatac | ✅ |
| Перша SMS — UK, 1992, “Merry Christmas”, з комп'ютера, відповіді не було (a28, a29) | WebSearch: https://www.history.com/this-day-in-history/first-sms-text-message-sent ; https://www.vodafone.com/news/technology/25-anniversary-text-message ; https://historyofinformation.com/detail.php?id=1727 | ✅ |

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. `build` — повний перебір перестановок (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s5-6/bin/chk.mjs`): a21 (keepCase) — 1 порядок, a33 — 2, a45 (keepCase) — 1, a75 — 4; усі в ключі, порядків з пасткою (did / are / does / gave) немає.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 gaps | scientist; experiments | = | l1 info | — | ✅ |
| a02 choice | a computer scientist | = | l1 «Three famous names» | — | ✅ |
| a03 gaps | invented; discovered | = | l1 info (discover = find something already there) | Zlata — канон | ✅ |
| a04 word | inventor | = | l1 | — | ✅ |
| a05 pick | [invention] | = | l1 | — | ✅ |
| a06 choice | in Kyiv | = | l1 | — | ✅ |
| a07 multi | [0,2] | = | l1 | — | ✅ |
| a08 choice | first prize in 1903 | = | l1 intro + info, міркування | автор позначив як сумнівне: «first woman in 1903» + «two Nobel Prizes» → перша з двох у 1903; висновок однозначний, факт правдивий | ✅ |
| a09 stress | sci, ven | = | l1 `<u>` | — | ✅ |
| a10 stress | ven, sci, cov | = | l1, e5s2 `<u>` | — | ✅ |
| a11 stress | per, neer, sci, ven, fa | = | l1, e4s1, e5s7 `<u>` | — | ✅ |
| a12 gaps | scientist; was created | = | l1 | — | ✅ |
| a13 gaps | scientist; experiments; woman | = | l1 | — | ✅ |
| a14 gaps | 1889; inventor; designed; inventions | = | l1 | — | ✅ |
| a15 choice | discovered | = | l2 | — | ✅ |
| a16 sort | 0,0,0,1,1,1 | = | l2 | — | ✅ |
| a17 pick | [invented] | = | l2 | — | ✅ |
| a18 gaps | was; was | = | l2 | — | ✅ |
| a19 word | discovered | = | l2 | — | ✅ |
| a20 choice | …designed by Igor Sikorsky | = | l2 «By: only when it’s important» | «…were designed.» граматичне, але умова каже «wants to say who» — ключ однозначний | ✅ |
| a21 build | Where was penicillin discovered? | = | l2 «Questions», London — l2 info | — | ✅ |
| a22 pick | [did] | = | l2 | — | ✅ |
| a23 gaps | Was; wasn’t; was invented | = | l2 | — | ✅ |
| a24 gaps | was | = | l2 | — | ✅ |
| a25 gaps | was invented; 1989; was discovered | = | l2 | — | ✅ |
| a26 gaps | was; was; was; was discovered | = | l2 | — | ✅ |
| a27 choice | in 1876 | = | l3 | — | ✅ |
| a28 multi | [1,3] | = | l3 | — | ✅ |
| a29 order | 1876 → 1973 → 1992 → today | = | l3 | — | ✅ |
| a30 gaps | could; can | = | l3 | — | ✅ |
| a31 gaps | can be; can be | = | l3 | — | ✅ |
| a32 multi | [0,2] | = | l3 | — | ✅ |
| a33 build | 2 порядки | = | l3 | — | ✅ |
| a34 pick | [cans] | = | l3 | Dmytro — канон | ✅ |
| a35 gaps | couldn’t; couldn’t; can be sent | = | l3 | 1-й пропуск — речення уроку з тим самим ключем («In 1992, the phone that got the first text {*couldn’t|can’t} send a reply» — l3 gaps і l7 Task 4) | ⚠️ → «In 1876, Bell’s telephone couldn’t send photos» |
| a36 gaps | could; can | = | l3 | — | ✅ |
| a37 gaps | can be used; can | = | l3 | — | ✅ |
| a38 gaps | couldn’t; can be charged; can; can be | = | l3 info «Phones can be charged» | — | ✅ |
| a39 choice | mostly from sand | = | l4 intro | — | ✅ |
| a40 choice | The hot glass is shaped. | = | l4 info | — | ✅ |
| a41 choice | it melts… can be shaped | = | l4 info (melt) | — | ✅ |
| a42 gaps | are made; is made | = | l4 | — | ✅ |
| a43 gaps | to do; for looking | = | l4 | — | ✅ |
| a44 sort | 0,1,0,1,0,1 | = | l4 | — | ✅ |
| a45 build | What is a microscope used for? | = | l4 | — | ✅ |
| a46 pick | [are] | = | l4 | — | ✅ |
| a47 gaps | is; is made; is used | = | l4 | — | ✅ |
| a48 match | 4 пари | = | l4 | перебрав усі праві | ✅ |
| a49 word | melts | = | l4 info | — | ✅ |
| a50 pick | [microscope] | = | l4 | — | ✅ |
| a51 gaps | is used; are made | = | l4 | — | ✅ |
| a52 gaps | is used; is made | = | l4 | — | ✅ |
| a53 gaps | was made; is made; was shaped; was cooled | = | l4, l2 | — | ✅ |
| a54 gaps | Switch off | = | l5 | — | ✅ |
| a55 match | 4 пари | = | l5 | перебрав усі праві | ✅ |
| a56 word | charge | +recharge | l5 | — | ✅ |
| a57 pick | [charger] | = | l5 | — | ✅ |
| a58 choice | It plays music. | = | текст | — | ✅ |
| a59 choice | while Emma and Tom are at school | = | текст | — | ✅ |
| a60 multi | [0,1] | = | текст | Grandad Emma й Tom не любить speaker — як l5 | ✅ |
| a61 stress | vice, bat | = | l5 `<u>` | — | ✅ |
| a62 stress | char, mom, smart | = | l5, l4, l3 `<u>` | — | ✅ |
| a63 stress | tel, vice, mi, pa, pu | = | l4, l5, l3, e9s5 `<u>` | — | ✅ |
| a64 gaps | can | = | l5 | — | ✅ |
| a65 gaps | can be switched; can be | = | l5 | — | ✅ |
| a66 gaps | is being charged; is plugged; can; can’t | = | l5 | дистрактор «plugged»: CD дає «plug (something) in» — без додатка дієслово можливе, тож «The charger plugged in…» не однозначно неграматичне (лише суперечить «Right now») | ⚠️ → `{*is plugged|is plug}` |
| a67 choice | metal | = | текст | — | ✅ |
| a68 choice | her parents | = | текст | — | ✅ |
| a69 multi | [0,2] | = | текст | — | ✅ |
| a70 sort | 0,0,0,1,1,1 | = | l6 info | — | ✅ |
| a71 order | is → like → used for → can → best thing | = | l6 info (план) | порядок задає план уроку, як в order l6 | ✅ |
| a72 gaps | smart speaker; is made; was given; for listening | = | l5, l6 | Denys — кузен Oksana, канон | ✅ |
| a73 gaps | for reading | = | l6 | — | ✅ |
| a74 gaps | was given; to take | = | l6, l4 | — | ✅ |
| a75 build | 4 порядки | = | l6 | — | ✅ |

**Пасив і can / could:** хибні варіанти — лише неграматичні форми (is / are за числом, V1 замість V3, cans, can to, could to, активна форма без додатка); ергативні melt / cool / mix / heat активом хибними не зроблено ✅. could — хибний лише з маркером теперішнього, хибний can — лише з маркером минулого ✅. has been + V3 немає ✅. Покриття: 75 вправ, 6 уроків, рівні 1–3 на кожен урок. `sk` — з екранів уроку. У кожної вправи рівня 2–3 є `hint`, підказки не видають ключа. `personalization-qa --strict` — без помилок.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії).** CD https://dictionary.cambridge.org/dictionary/english/<word>: scientist «ˈsaɪ.ən.tɪst», inventor «ɪnˈven.tə», invention «ɪnˈven.ʃ(ən)», science «ˈsaɪ.əns», discovery «dɪˈskʌv.(ər.i)», experiment «ɪkˈsper.ɪ.mənt», engineer «ˌen.dʒɪˈnɪə», famous «ˈfeɪ.məs», device «dɪˈvaɪs», battery «ˈbæt.(ər.i)», charger «ˈtʃɑː.dʒə», smartphone «ˈsmɑːt.fəʊn», thermometer «θəˈmɒm.ɪ.tə», telescope «ˈtel.ɪ.skəʊp», microscope «ˈmaɪ.krə.skəʊp», patent «ˈpeɪ.t(ənt)», computer «kəmˈpjuː.tə». OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: scientist «/ˈsaɪəntɪst/», inventor «/ɪnˈventə(r)/», invention «/ɪnˈvenʃn/», science «/ˈsaɪəns/», discovery «/dɪˈskʌvəri/», experiment «/ɪkˈsperɪmənt/», engineer «/ˌendʒɪˈnɪə(r)/», famous «/ˈfeɪməs/», device «/dɪˈvaɪs/», battery «/ˈbætri/», charger «/ˈtʃɑːdʒə(r)/», smartphone «/ˈsmɑːtfəʊn/», thermometer «/θəˈmɒmɪtə(r)/», telescope «/ˈtelɪskəʊp/», microscope «/ˈmaɪkrəskəʊp/», patent «/ˈpætnt/» (наголос на першому складі в обох вимовах). Усі ключі `stress` збігаються.
- **Опора `<u>`:** усі слова `stress` підкреслені в уроках до свого уроку (e9s6l1, l3, l4, l5; <u>sci</u>ence — e5s2; engi<u>neer</u> — e4s1; <u>fa</u>mous — e5s7; com<u>pu</u>ter — e9s5l1) ✅.
- **plug in:** CD https://dictionary.cambridge.org/dictionary/english/plug — «plug (something) in» (додаток необов'язковий) → правка a66.
- **Лексика** (`bin/lex.mjs` проти g4–e9s5 і e9s6 до `lesson`): helicopter (однина від helicopters, l1), charge (l3 «can be charged»), recharge (лише прийнятий варіант a56), plugged (від plug in, l5; після правки — лише в ключі is plugged) ✅.
- **Канон героїв:** Zlata (сестра Taras), Dmytro й мама Olena, Denys (кузен Oksana), Grandad Mykola, Grandad Emma й Tom і smart speaker, Zoriana й laptop — узгоджені ✅.
- **BrE, без звуку:** favourite, colour, Mum, maths; AmE-правопису, IPA, A/B/C, «Listen» немає ✅. Бренди не названі ✅.
- **Копії рамок** (6-грами проти g4–g11): факти уроку повторюються (Bell / Cooper / Curie / Berners-Lee), але речення з тим самим ключем — лише a35 (виправлено) ✅.
- **Авторське право:** «The robot vacuum cleaner cleans the floor while we’re at school» (a58) — WebSearch у лапках, збігу немає ✅.

## 5. Правки (зроблені)
1. a35: перше речення «In 1992, the phone that got the first text {*couldn’t|can’t} reply» → «In 1876, Bell’s telephone {*couldn’t|can’t} send photos»; steps.
2. a66: `{*is plugged|plugged}` → `{*is plugged|is plug}`.
3. `status: "verified"`, `meta.factcheck`, шапка.

`node tools/validate.mjs --pool pe9s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe9s6 --strict` — без помилок; euphony — без зауважень.

## 6. Для людини
Нічого блокувального.
