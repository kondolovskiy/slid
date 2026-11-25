# Верифікація e8s8 «English-speaking countries: land, climate and people» (eng, 8 кл.)

Верифікатор: verifier-e8s8, 2026-11-25. Файл: content/eng/g8-e8s8.js (7 уроків: 6 + boss). Скіл content-verify, розділ «Англійська».
Прогін: `validate --section e8s8` — 0 помилок, 0 попереджень (до й після правок); `stats --subject eng` — l3 longWordShare z=2.5, l4 z=2.3 (слова теми: Canadian, Australian, nationality, population — пояснення автора прийнято, у межах профілю ≤ 0,18), boss screens z=2 (10 екранів, типово для фіналу). Плейтест — у CI (Python-модуля playwright у контейнері немає).
Britannica і learnenglish.britishcouncil.org з контейнера не резолвляться (ENOTFOUND) — другими джерелами стали uk.wikipedia, офіційні статистичні й метеослужби (через WebSearch) і словники.

**Вердикт по розділу: verified** (усі 7 уроків). Правок у змісті: 4 (2 ❌ друга правильна відповідь у gaps, 2 ⚠️ узагальнення правила) + статуси/meta. Людині: нічого блокувального; нових TQ немає.

## 1. Факти

| Твердження (урок) | Джерела, відкриті в сесії | Вердикт |
|---|---|---|
| Canada — in North America, north of the USA; Atlantic (east) → Pacific (west) (l1, boss T1) | https://en.wikipedia.org/wiki/Canada «a country in North America… extend from the Atlantic Ocean to the Pacific Ocean», «border with the United States»; https://uk.wikipedia.org/wiki/Канада «займає північну частину Північної Америки… від Атлантичного океану на сході до Тихого океану на заході… сухопутний кордон з США» | ✅ |
| Australia — a country and a continent (l1, boss) | https://en.wikipedia.org/wiki/Australia «a country comprising the mainland of the Australian continent»; https://uk.wikipedia.org/wiki/Австралія «на однойменному материку» | ✅ |
| The UK — on islands in the north-west of Europe (l1) | https://en.wikipedia.org/wiki/United_Kingdom «a country in Northwestern Europe… includes the island of Great Britain, the north-eastern part of the island of Ireland»; https://uk.wikipedia.org/wiki/Велика_Британія «на північному заході від Континентальної Європи, на Британських островах» | ✅ |
| Ireland — on the island of Ireland, west of Great Britain; in the north-west of Europe (l1, boss T2) | https://en.wikipedia.org/wiki/Ireland «separated from Great Britain to its east by the North Channel, the Irish Sea, and St George's Channel»; https://en.wikipedia.org/wiki/Republic_of_Ireland «a country in Northwestern Europe»; https://uk.wikipedia.org/wiki/Ірландія (на захід від Британського архіпелагу, протока Св. Георгія) | ✅ |
| New Zealand — two big islands in the Pacific, east of Australia (l1, boss T2) | https://en.wikipedia.org/wiki/New_Zealand «island country in the southwestern Pacific Ocean… east of Australia across the Tasman Sea»; https://uk.wikipedia.org/wiki/Нова_Зеландія «на двох великих островах… Австралія лежить на захід… Тасмановим морем» | ✅ |
| Ukraine — in Eastern Europe (l1) | https://en.wikipedia.org/wiki/Ukraine «a country in Eastern Europe»; https://uk.wikipedia.org/wiki/Україна «у Східній та частково Центральній Європі» | ✅ |
| Kharkiv — in the north-east of Ukraine; Lviv — in the west (l1, boss T2) | https://en.wikipedia.org/wiki/Kharkiv «Located in the northeast of the country»; https://uk.wikipedia.org/wiki/Харків «на північному сході України»; https://en.wikipedia.org/wiki/Lviv «the largest city in the western part of the country»; https://uk.wikipedia.org/wiki/Львів «місто на заході України» | ✅ |
| UK climate mild; west wetter than east (l2, l2 Final, boss T3) | https://en.wikipedia.org/wiki/Climate_of_the_United_Kingdom «humid temperate oceanic», «The further west, the higher the expected rainfall», «Eastern areas are drier»; Met Office via WebSearch: «places in the east and south of the UK tend to be drier… than those further west» — https://www.metoffice.gov.uk/research/climate/maps-and-data/regional-climates; https://uk.wikipedia.org/wiki/Велика_Британія «основні опади випадають на західних регіонах… східні частини… найсухішими», зими м'які | ✅ |
| Ireland — mild and wet; winters not very cold, summers not very hot (l2) | https://en.wikipedia.org/wiki/Climate_of_Ireland «mild, humid, and changeable, with abundant rainfall and a lack of temperature extremes»; https://uk.wikipedia.org/wiki/Ірландія «Зими м'які, літо прохолодне, опадів багато» | ✅ |
| West coast of Ireland much wetter than Dublin (l6 Final) | Climate_of_Ireland: Valentia 1,400 mm vs Dublin 714 mm («almost twice»); Met Éireann 1991–2020 via WebSearch: 878 mm east coast — 2,045 mm south-west | ✅ |
| Canada — winters very cold and snowy in many parts (l2, boss T3) | https://en.wikipedia.org/wiki/Climate_of_Canada «Winters can be harsh in many parts of the country… snow can cover the ground for almost six months»; https://uk.wikipedia.org/wiki/Канада «Зима може бути дуже суворою в деяких регіонах» | ✅ |
| Australia — very dry continent; a large part is desert (l2, boss) | https://en.wikipedia.org/wiki/Climate_of_Australia «The largest part of Australia is desert or semi-arid», «second driest… after Antarctica»; https://en.wikipedia.org/wiki/Australia «driest inhabited continent»; https://uk.wikipedia.org/wiki/Австралія «одну третину материка займають тропічні пустелі» | ✅ («very dry continent» — про населені континенти; спрощення прийнятне) |
| Australia: summer — December, January, February (l2, boss T3) | BOM via WebSearch: «Summer is the warmest three months: December, January and February» — https://www.bom.gov.au/news-and-media/solstices-equinoxes-and-the-seasons; Climate_of_Australia «Summer lasts from December to February» | ✅ |
| New Zealand — mild (l2) | https://en.wikipedia.org/wiki/Climate_of_New_Zealand «Winters are relatively mild»; NIWA via WebSearch «Temperatures are relatively mild throughout New Zealand» — https://niwa.co.nz/climate-and-weather/regional-climatologies/new-zealand | ✅ |
| Canada official languages English and French (l3, boss T9) | Canada infobox; https://en.wikipedia.org/wiki/Languages_of_Canada «English and French have been the co-official languages»; uk.wikipedia Канада | ✅ |
| Ireland official languages Irish and English (l3) | Republic_of_Ireland infobox; https://en.wikipedia.org/wiki/Languages_of_Ireland (Art. 8: Irish — national and first official, English — second official); uk.wikipedia Ірландія «ірландська, англійська» | ✅ |
| Area: Canada almost 10 million km² (l4, boss) | Canada infobox 9,984,670; uk.wikipedia 9 984 670 | ✅ |
| Area: Ukraine about 600,000 km² | en Ukraine 603,628; uk Україна 603 700 | ✅ |
| Area: UK about 240,000 km² | en 244,376; uk 242 495 | ✅ (обидва ≈ 240 тис.) |
| Area: Ireland about 70,000 km² | en Republic_of_Ireland 70,273; uk Ірландія 70 273 | ✅ |
| Area: Australia about 7.7 million km² | en 7,688,287; uk 7 688 287 | ✅ |
| Population UK about 67 million (2021) | en United_Kingdom «66,912,637 (2021 census)»; uk 66 940 559; ONS mid-2021 (через WebSearch, сума націй ≈ 67,0 млн; Шотландія — перепис 2022, тому в тексті «2021» без слова census — правильно) — https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/annualmidyearpopulationestimates/mid2021 | ✅ |
| Population Canada about 37 million (2021) | StatCan 2021 Census 36,991,981 — https://www12.statcan.gc.ca/census-recensement/stats/statind2021.cfm (WebSearch); en/uk Canada | ✅ |
| Population Ireland about 5.1 million (2022) | CSO Census 2022 5,149,139 — https://www.cso.ie/en/releasesandpublications/ep/p-cpsr/censusofpopulation2022-summaryresults/keyfindings (WebSearch); en/uk Ireland | ✅ |
| Population New Zealand about 5 million (2023) | Stats NZ 2023 Census 4,993,923 — https://stats.govt.nz/assets/Infographics/2023-Census-infographics/2023-Census-infographics-National.pdf (WebSearch); en New_Zealand | ✅ |
| Погода дня в повідомленнях героїв (l2 intro) | вигадана, правдоподібна (−15 °C — Climate_of_Canada «near −15 °C»); не кліматичні дані | ✅ |

## 2. Форми й норма

| Форма | Джерело | Вердикт |
|---|---|---|
| Second Conditional: if + past simple, would/might/could; would не в if-частині | CD Grammar «Conditionals: if» — «Second conditional: form… if + past simple / modal verb… (should/would/might/could)», «Warning: We use would in the main clause, not in the conditional clause… Not: If you would decide» — https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if | ✅ |
| **If I was / If I were — обидва** | OALD if_1: «If I was in charge, I'd do things differently. (rather formal) If I were in charge…» — https://www.oxfordlearnersdictionaries.com/definition/english/if_1; Wiktionary be (usage note): «In the traditional past subjunctive, were is used with all subjects, though many speakers… use was with first- and third-person singular subjects» — https://en.wiktionary.org/wiki/be. CD Grammar окремої примітки про was/were не має (сторінки conditionals-if, were-to перевірено). Текст l5 «Both are correct. Were is more usual in writing» узгоджується з OALD («were — rather formal») | ✅; ключі `word` l5 і boss T7 — were + was ✅; у жодному gaps was/were не протиставлені |
| much / a bit / a lot + comparative; not very + comparative | CD Grammar «Comparison: adjectives» — «strengthen… using much, a lot, far…», «soften… using a little or a bit» — https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-interesting | ✅ |
| **«much bigger» для 67 і 37 млн** (≈ 1,8 раза, різниця 30 млн) | Оцінка: природно — різниця майже вдвічі; «a bit» тут хибне однозначно. Для 600 000 / 240 000 (2,5 раза) і 70 000 / 240 000 — так само. «population is bigger» поруч із «larger» — нейтральне, для 8 кл. прийнятне | ✅ |
| north of (outside) / in the north of (inside) | OALD north_3 «north of something — nearer to the north than something… ten miles north of Boston» — https://www.oxfordlearnersdictionaries.com/definition/english/north_3; OALD north_1 «in the north of» (у нотатках автора) | ✅ |
| Nationality words: a British man/woman → the British; an Irishman/woman → the Irish; Welsh → the Welsh | CD Grammar «Nationalities…» таблиця — https://dictionary.cambridge.org/grammar/british-grammar/nationalities; та сама таблиця: Danish → the Danes, Polish → the Poles, Finnish → the Finns | ✅; ⚠️ «Words with -ish have no -s» (l3 hyp fbText, boss T4 fbBad) — хибне узагальнення → виправлено |
| Наголос: Canada, Australia, continent, island, desert | CD UK: ˈkæn.ə.də, ɒsˈtreɪ.li.ə, ˈkɒn.tɪ.nənt, ˈaɪ.lənd, ˈdez.ət — https://dictionary.cambridge.org/dictionary/english/<слово>; Wiktionary raw: /ˈkænədə/, /ɒˈstɹeɪ.liː.ə/ (RP), /ˈkɒntɪnənt/ (UK), /ˈaɪ.lənd/, /ˈdɛz.ət/ (RP) | ✅ |

BrE у тексті: practise (дієслово), neighbours, holiday; AmE-правопису й лексики немає (grep -ize, color, vacation, apartment, center — 0). Без IPA, без «Listen/You hear», без літер в `opts`, без `uk`. Діалоги — репліками в `body` / `text`, типу `dialog` немає (D-056) ✅. Kyiv, Kharkiv, Lviv, Poltava, Chernihiv — за glossary ✅.

## 3. Відповіді й друга правильна відповідь (розв'язано самостійно)

Усі оцінювані завдання (l1: 7, l2: 6, l3: 7, l4: 7, l5: 7, l6: 7, boss: 9) розв'язано до перегляду `correct`; збіг з ключем — у всіх. Окремо:
- **gaps — пари пропусків перебрано як комбінації** (рушій оцінює кожен пропуск, але учень бачить речення):
  - ❌→виправлено **l5 gaps** «If Maksym {had|has} more time, he {would visit|visits} Kyiv more often»: комбінація has + visits — граматичне zero conditional, контекст (без `body`) його не відсікає. Дистрактор has → **would have** (тепер жодна хибна комбінація не граматична).
  - ❌→виправлено **l6 Final** «If we {had|have} more time, we {could|can} go…»: have + can і have + could — граматичні (перше / змішане умовне); уявний контекст відсікає їх лише частково. Дистрактор have → **would have**.
  - Інші: l1 (3 пропуски окремо), l4, l5 Final (lived + went відсікає «sometimes I imagine»), l6 gaps (could + did — неграматичне), boss T6, T9 — хибних граматичних комбінацій немає ✅.
- **would / could:** ніде не стоять в одному пропуску; у l6 Final «I {would|will} choose» — will хибне після «If I could visit» ✅.
- **was / were:** лише в `word` з обома ключами ✅; gaps l5 Final і boss T9 — were проти is / would be ✅.
- **north of / in the north of:** контекст «inside / outside» однозначний; «to the north of» ніде не стоїть ✅.
- **`build`:** l4 «Canada is much bigger than the UK.» (Start with Canada; питальний порядок відсікає «Make a true sentence»), l5 «If I lived in Ireland, I’d learn Irish.» (плитка «in Ireland,» з комою, Start with If), l6 «What would you do if you lived in Canada?» (Start with What), boss T8 «Which country would you choose?» — інших граматичних порядків немає; пастки more / live / will / chose ключ не дають ✅.
- **`match`** l1, l2, boss T3 — для кожного лівого перебрано всі праві: інших правдивих пар немає ✅.
- **`word`** — ключі без кінцевого `.!?` ✅; l4 «Write much or a bit» відсікає a lot ✅.
- **`pick`** l1, l3, l4, l5: позначене — справді помилка, `[!…]` — правильні ✅.

## 4. Опора (D-019)

| Завдання | Звідки відповідь | Вердикт |
|---|---|---|
| l1 екр. 2 | `hyp: true` | ✅ |
| l1 match, stress | info екр. 3 (список країн, `<u>`) | ✅ |
| l1 gaps, choice, pick, Final | info екр. 6 (inside / outside) + умова (Maksym: Pacific in the west) | ✅ |
| l2 екр. 2 | `hyp: true` | ✅ |
| l2 match, word | info екр. 3 (mild, wet, dry, snowy, desert) | ✅ |
| l2 choice, sort, Final | info екр. 5 (клімати); sort — за маркерами now/today | ✅ |
| l3 екр. 2 | `hyp: true` | ✅ |
| l3 gaps, choice, word | info екр. 3 (таблиця національностей) | ✅ |
| l3 multi, pick, Final | info екр. 7 (мови, без the) | ✅ |
| l4 екр. 2 | `hyp: true` (дані — на intro) | ✅ |
| l4 gaps, choice, build, word, pick, Final | числа — у `body` або intro; правило — info екр. 3 | ✅ |
| l5 екр. 2 | `hyp: true` | ✅ |
| l5 gaps, choice, build, pick, Final | info екр. 3 (if + Past Simple → would) і екр. 6 (were / was) | ✅ |
| l6 екр. 2 | `hyp: true` | ✅ |
| l6 gaps, build, choice, multi, word, Final | info екр. 3 (questions, could, short answers); Final «much wetter» — граматика (much + comparative), факт не оцінюється | ✅ |
| boss T1–T9 | l1–l6 (`pre`) | ✅ |

## 5. Педагогіка, рівень, канон

- Структура: проблема (intro) → `hyp` → info → вправи → Final; підказки не видають відповідь; пояснення «чому» є (past = «not real», would не після if). Речення пояснень короткі, нових термінів ≤ 2 на урок — рівень 8 кл. ✅.
- Без стереотипів про погоду (l2 Final: «Our weather changes a lot» — про погоду дня, а не «always rains») ✅.
- Канон героїв: Andrii, Maksym (Ottawa), Liam (Dublin), Emma, Isla, Owen, Chloe (Canberra), Oksana, Mariia, Taras, клас Ms Lysenko — узгоджено; нові деталі (Chloe — онлайн-шаховий клуб, Owen — друг Emma, Liam вчить Irish) не суперечать — для куратора NOTE (герої) в inbox.
- Рекомендація (не блокує): l2 hyp fbText «far in the south of the world» → «far in the south, below the equator» було б точніше; залишено.
- Авторське право (WebSearch з лапками, без збігів):

| Фрагмент | Результат |
|---|---|
| «goes from the Atlantic Ocean in the east to the Pacific Ocean in the west» | збігів немає |
| «If I lived in Ottawa, I would go skating every day» | збігів немає |
| «If Emma lived in Australia, she would swim in the sea at Christmas» | збігів немає |
| «Our weather changes a lot. In the morning it’s sunny, and then it rains» | збігів немає |
| «If you could visit one English-speaking country, which would you choose» | дослівних збігів немає (лише поширене питання для обговорення в іншому формулюванні) |
| «If I lived in Australia, I could swim in the sea in December» | збігів немає |
| «a big place with sand or rocks and almost no rain» | збігів немає |
| «the population of Canada is much smaller than the population of the UK» | збігів немає |

## 6. Правки (зроблені)

1. l5 gaps: `{*had|has}` → `{*had|would have}` (друга граматична комбінація has + visits).
2. l6 Final: `{*had|have}` → `{*had|would have}` (have + can / could граматичні).
3. l3 екр. 2 fbText: «Words with -ish have no -s» → «with no -s: like the British and the Welsh» (CD: the Danes, the Poles, the Finns).
4. boss T4 fbBad: «Words with -ish have no -s» → «The Irish, like the British, has no -s».
5. Усі 7 уроків `status: "verified"`; `meta.factcheck` — цей звіт; коментар у шапці файлу.

## 7. Вердикт по уроках

| Урок | Вердикт |
|---|---|
| e8s8l1 | verified |
| e8s8l2 | verified |
| e8s8l3 | verified (після правки 3) |
| e8s8l4 | verified |
| e8s8l5 | verified (після правки 1) |
| e8s8l6 | verified (після правки 2) |
| e8s8l7 | verified (після правки 4) |
