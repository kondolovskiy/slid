# Верифікація: пул pe9s2 (англійська, 9 кл., розділ e9s2 «The environment») + точкова перевірка e9s2l7 Task 4

Верифікатор: verifier-pe9s2 (сесія verifier-pe9s1-pe9s2), 2026-11-27. Пул я не писав. Перевіряв `content/eng/pool-g9-e9s2.js` за скілами `content-verify` («Англійська») і `math-pool-diag` §2в. Задача: tasks/review/write-eng-pool-g9-e9s2.md. Опора: уроки `content/eng/g9-e9s2.js` (verified) і розділи g4–e9s1. Еталони: reports/verify/write-eng-pool-g8-e8s2.md, -g7-*.md.

**Вердикт: пул придатний, `status: "verified"`.** Неправильних ключів і граматично правильних дистракторів я не знайшов. Зробив 12 правок у 10 вправах: 2 stress без опори, 1 факт без опори (snowdrops у Поліссі), 1 канон (парк у Zelena Dolyna), 1 суперечність усередині пулу (стать гіда Тараса), 1 друга відповідь у ключ, 1 копія рамки уроку з тим самим ключем, 1 слово з пізнішого уроку в `steps`, статус і шапка. **e9s2l7 Task 4 (правка оркестратора) — ✅, правок не треба** (§6). Нових TQ немає.

## 1. Програма, `src`
`sources`: `mpim`, `program: true`, title і url — як у facts/eng.md ✅. Сторінки: с. 33 — тема «Природа і погода» й функції (l1, l2, l5 read, l6), с. 34 — will / be going to, adverbs of certainty, Future Continuous (l3, l4), с. 35 — passive infinitive (l5 gram/write). Усі `src` відповідають урокам ✅.

## 2. Факти

| Твердження (вправи) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Буковий праліс Карпатського біосферного заповідника — у списку ЮНЕСКО з 2007 (a39) | WebSearch: https://en.wikipedia.org/wiki/Carpathian_Biosphere_Reserve ; https://spectator.sme.sk/politics-and-society/c/carpathian-virgin-forest-put-on-unesco-list (2007, спільна номінація SK–UA); рішення https://whc.unesco.org/en/decisions/1314 (whc.unesco.org з контейнера — ENOTFOUND, треба дозволити в мережевих налаштуваннях) | ✅ |
| Most red squirrels in the UK live in Scotland; grey — common (a11) | WebSearch: https://www.nature.scot/doc/genetic-scorecard-indicator-red-squirrel (≈85 %); https://scottishwildlifetrust.org.uk/?p=3531 (>75 %) | ✅ |
| Bison зникли з України, тепер є в national parks; найбільший сухопутний звір Європи (a12, a21) | WebSearch: https://wwfcee.org/news/wwf-launches-a-wildlife-matchmaking-initiative-to-safeguard-ukraines-bison-population ; https://agris.fao.org/search/en/records/68b6c33868d9e68067006ddc (Ужанський НПП) | ✅ |
| Black stork, lynx — у лісах Полісся; рідкісні птахи в поліському заповіднику (a19) | WebSearch: https://www.encyclopediaofukraine.com/pages%5CP%5CO%5CPolisiaNatureReserve.htm (lynx, black stork); https://datazone.birdlife.org/site/factsheet/poliskyi-nature-reserve-iba-ukraine (IBA) | ✅ |
| Snowdrops — у заповіднику **в Поліссі** (a14) | WebSearch: https://ukrbotj.co.ua/pdf/71/3/ukrbotj-2014-71-3-339.pdf (Galanthus nivalis в Україні найпоширеніший у Карпатах і на Передкарпатті); https://kbz.in.ua/wp-content/uploads/2024/09/MosRehRehMel_2018.pdf (популяції в КБЗ, Угольсько-Широколужанський масив). Для Полісся опори не знайшов | ⚠️ → «a nature reserve in the Carpathians» |
| Red Book, lynx (short tail), black stork (shy), brown bear, snowdrop (early spring) | з verified-уроку l2 (reports/verify/write-eng-g9-e9s2.md) | ✅ |

## 3. Вправи: моє розв'язання → опора (D-019) → вердикт
`SLID_LANG.check(solution)`: усі вправи зараховуються. У `build` перебрав усі перестановки (скрипт `/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/verify-pe9s1-2/bin/chk.mjs`): a27, a36, a45 — по 2 порядки, a51 — 1, і всі вони в ключі.

| Вправа | Моя відповідь | Ключ | Опора | Зауваження | Вердикт |
|---|---|---|---|---|---|
| a01 match | 4 пари | = | l1 info | перебрав усі праві | ✅ |
| a02 gaps | wildlife; rubbish | = | l1 | у steps — frogs (уперше в l6) | ⚠️ → «other wild animals» |
| a03 word | recycling | = | l1 | — | ✅ |
| a04 gaps | recycles; protect | = | l1 | — | ✅ |
| a05 word | pollute | +dirty, poison, damage, harm, spoil | l1 | — | ✅ |
| a06 gaps | rubbish; pollutes; wildlife; protect | = | l1 | — | ✅ |
| a07 stress | wild, tect | = | l1 `<u>` | — | ✅ |
| a08 stress | — | — | — | pollute без `<u>` в уроках (підкреслено лише pol`<u>`lu`</u>`tion) | ⚠️ → rubbish, recycle, forest |
| a09 stress | — | — | — | plastic, traffic без `<u>` | ⚠️ → environment, nature, pollution, wildlife |
| a10 choice | rare, protected | = | l2 info | — | ✅ |
| a11 choice | grey | = | l2 cult | — | ✅ |
| a12 choice | national parks | = | l2 reading 1 | — | ✅ |
| a13 choice | shy | = | текст + l2 | — | ✅ |
| a14 multi | [0,3] | = | текст | факт (§2) | ⚠️ → Carpathians |
| a15 choice | the guide | = | текст | — | ✅ |
| a16 gaps | rare; species | = | l2 | — | ✅ |
| a17 word | reserve | +park | l2 | гід Тараса «She», а в a15 — «his phone. He saw it» | ⚠️ → «He works» |
| a18 gaps | species; species | = | l2 «one species, two species» | — | ✅ |
| a19 gaps | reserve; protected | = | l2 | — | ✅ |
| a20 word | rare | +very rare, endangered, scarce, uncommon | l2 | — | ✅ |
| a21 gaps | species; the biggest; disappeared | = | l2, e5s10, Past Simple | — | ✅ |
| a22 gaps | are going to; will | = | l3 | — | ✅ |
| a23 gaps | probably; definitely won’t; Perhaps | = | l3 шкала | — | ✅ |
| a24 pick | [won’t probably] | = | l3 | — | ✅ |
| a25 word | going to | going to, about to | l3 | «It’s likely to / definitely going to / probably going to rain soon» — теж граматичні, і контекст їх не відсікає | ⚠️ → три варіанти в ключ |
| a26 gaps | will; will; probably won’t | = | l3 | — | ✅ |
| a27 build | 2 порядки | = | l3 | «won’t probably» не зараховується | ✅ |
| a28 gaps | will be taking; will be singing | = | l4 | — | ✅ |
| a29 word | will be studying | +’ll be studying | l4 | інструкція «Future Continuous» відсікає is studying | ✅ |
| a30 pick | [walk] | = | l4 | — | ✅ |
| a31 gaps | will be making; won’t be living; will be travelling | = | l4 | — | ✅ |
| a32 choice | training | = | розклад | — | ✅ |
| a33 choice | homework | = | текст | — | ✅ |
| a34 multi | [0,2] | = | текст + l4 | — | ✅ |
| a35 gaps | will be swimming; will be playing | = | l4 | — | ✅ |
| a36 build | 2 порядки | = | l4 | — | ✅ |
| a37 word | won’t be working | +will not be working | l4 | — | ✅ |
| a38 match | 4 пари | = | l5 | перебрав усі праві | ✅ |
| a39 choice | in 2007 | = | l5 reading | факт (§2) | ✅ |
| a40 multi | [0,3] | = | l5 | — | ✅ |
| a41 gaps | can be recycled; must be put | = | l5 | — | ✅ |
| a42 word | cut | +cut down | l5 | — | ✅ |
| a43 pick | [gave] | = | l5 | — | ✅ |
| a44 gaps | should be planted; must be turned off | = | l5 | — | ✅ |
| a45 build | 2 порядки | = | l5 | — | ✅ |
| a46 gaps | should be used; can be given; must be taken | = | l5 | — | ✅ |
| a47 gaps | because; Let’s | = | l6 | «paper because it saves trees» — опція multi l6 з тим самим ключем | ⚠️ → «because we need to protect forests» |
| a48 choice | Most pupils chose Saturday. | = | chart, e8s2l6 most | — | ✅ |
| a49 gaps | That’s why; Who’s going to | = | l6 | «the park in our village» — у каноні Zelena Dolyna парку немає | ⚠️ → «near the bus stop» |
| a50 word | because | +as, since | l6 | — | ✅ |
| a51 build | That’s why we should recycle more plastic. | = | l6 | — | ✅ |
| a52 gaps | I strongly believe; will be planting; Who’s going to; because | = | l4, l6 | — | ✅ |

**will / going to** ніде не стоять одне проти одного. Хибні варіанти — лише неграматичні форми ✅. **won’t probably** — лише хибний варіант ✅. **Future Continuous:** will + інфінітив ніде не дано хибним ✅. **Пасив з модальними:** хибні лише форми без be / без V3 ✅. Покриття: 52 вправи, 6 уроків. `sk` — з уроку. У кожної вправи рівня 2–3 є `hint`. `personalization-qa` — без помилок.

## 4. Форми, наголос, лексика, BrE, авторське право
- **Наголос (curl у цій сесії):** OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: forest «/ˈfɒrɪst/», nature «/ˈneɪtʃə(r)/», rubbish «/ˈrʌbɪʃ/», recycle «/ˌriːˈsaɪkl/», environment «/ɪnˈvaɪrənmənt/», pollution «/pəˈluːʃn/», wildlife «/ˈwaɪldlaɪf/», protect «/prəˈtekt/». CD https://dictionary.cambridge.org/dictionary/english/<word>: forest «/ˈfɒr.ɪst/», nature «/ˈneɪ.tʃər/», rubbish «/ˈrʌb.ɪʃ/». Опора `<u>`: `<u>`for`</u>`est, `<u>`na`</u>`ture, `<u>`rub`</u>`bish (e7s1), re`<u>`cy`</u>`cle, en`<u>`vi`</u>`ronment, pol`<u>`lu`</u>`tion, `<u>`wild`</u>`life — усі є в уроках.
- **Лексика** (`bin/lex.mjs` проти g4–e9s1 і e9s2 до `lesson`): лишилися лише прийняті варіанти `word` (poison, damage, harm, spoil, likely), хибні форми (specie, disappear), exam (exams — l4) ✅.
- **Канон героїв:** виправлено a49 (парк у селі) і a17/a15 (гід). Daryna з класом тепер у заповіднику в Карпатах (NOTE в inbox).
- **BrE, без звуку:** rubbish, holiday, Mum. AmE, IPA, A/B/C немає ✅.
- **Копії** (6-грами): збігаються лише рамки («in the Red Book of Ukraine», «Match each sign…», «in Zakarpattia, in the west of Ukraine»). a47 виправлено.
- **Авторське право:** «people won’t be buying paper tickets for buses» (WebSearch у лапках) — збігу немає.

## 5. Правки (зроблені)
1. a02 steps: frogs → other wild animals.
2. a08 words → `+rub|bish`, `re|+cy|cle`, `+for|est`; steps.
3. a09 words → `en|+vi|ron|ment`, `+na|ture`, `pol|+lu|tion`, `+wild|life`; steps.
4. a14 Polissia → the Carpathians.
5. a17 before: She → He.
6. a25 answer + likely to, definitely going to, probably going to.
7. a47 «it saves trees» → «we need to protect forests» (text, steps).
8. a49 «in the park in our village» → «near the bus stop in our village».
9. `status: "verified"`, `meta.factcheck`, шапка.

`node tools/validate.mjs --pool pe9s2` — 0 помилок, 0 попереджень; `personalization-qa` — без помилок; euphony — без зауважень.

## 6. Точкова перевірка: e9s2l7 Task 4 (правка оркестратора, коміт e3f22f5)
Текст: «This time tomorrow, Emma and Tom ___ to Kraków. Then they’ll take the train to Kyiv.»; `answer: ["will be flying", "’ll be flying"]`, `contractions: true`.
- **Англійська:** речення граматичне й природне для BrE. «Kraków» — прийняте англійське написання (поряд із Krakow). fbText узгоджений ✅.
- **Однозначність ключа:** інструкція «Use the Future Continuous of fly» відсікає are flying / will fly. shall з they не вживається. Скорочена форма є в ключі, і «Tom’ll be flying» теж зараховується ✅. Кінцевого `.!?` у ключі немає ✅.
- **Реальність (pitfalls-content п. 21):** летять не в Україну, а до Кракова. Аеропорт KRK приймає прямі рейси з багатьох аеропортів Великої Британії (WebSearch: https://www.skyscanner.net/flights-to/krk/cheap-flights-to-krakow.html ; https://www.lot.com/gb/en/flights/flights-to-europe/flights-to-poland/flights-to-krakow/flights-from-london-to-krakow). Потягом до Києва їхати з пересадкою в Перемишлі (WebSearch: https://www.omio.co.uk/trains/kyiv/krakow-6t6j0 ; https://en.interfax.com.ua/news/economic/423585-amp.html). Текст каже лише «take the train to Kyiv» і не обіцяє прямого потяга, тож правда ✅.
- `validate --section e9s2` — 0 помилок. Вердикт: ✅, урок лишається verified.
