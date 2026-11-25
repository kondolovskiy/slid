---
claimed_from: todo
claimed_at: 2026-11-25T12:30:22.701Z
id: write-eng-g8-e8s8
type: write-section
subject: eng
grade: 8
section: e8s8
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e8s8
created: 2026-11-19
source: design-eng
---
# Написати розділ «Країни мови: географія, клімат, населення» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: географічне положення; клімат; населення; національності — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Second Conditional: if + Past Simple, would / could (B1: Past simple — imagined situations after ‘if’; Would — imagined situations (це позиція A2, с. 22; B1 дає «imagined situations in the past»); main clause with ‘could’ + ‘if’ + past simple; назва «Second Conditional» — glossary/eng.md) — нове; повторення: comparatives with much, a bit (e7s4) на статистиці; nationalities (British, Irish, Canadian, Australian…) — лексика.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** «If I would…» — помилка; If I were / If I was — обидва (BrE розмовне; звірити CD Grammar) → обидва в ключі. Країни: UK, Ireland, USA, Canada, Australia, New Zealand; офіційні мови й клімат — з джерела (Canada — English and French: FACT verifier-pe5s10); без стереотипів («It always rains in England»). Не повторювати e5s10l2–l4: тут клімат, населення, національності, уявні ситуації. `requires`: e5s10l2, e5s10l3, e5s10l4, e6s8l3, e5s9l1; після появи e7s4 — урок much / a bit + comparative (оркестратор). Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s8.js`: `SLID.section("eng", { id: "e8s8", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s8` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e8s8, 2026-11-25. Файл: content/eng/g8-e8s8.js, 7 уроків (6 + boss e8s8l7), status draft. img/ не створював (match — текстові пари). validate --section e8s8: 0 помилок, 0 попереджень.

**Уроки:**
1. e8s8l1 «The UK, Ireland, Canada, Australia: where are they?» — choice(hyp), info, match, stress, info (in the north of / north of), gaps, choice (опора — факт в body), pick, gaps(Final).
2. e8s8l2 «Rainy, dry or snowy? Climate around the world» — choice(hyp), info weather/climate + mild/wet/dry/snowy/desert, match, info (клімат країн), choice, sort (weather / climate), word, gaps(Final).
3. e8s8l3 «British, Irish, Canadian: people and nationalities» — choice(hyp), info (adjective → a person → the people; -ish/-sh), gaps, choice, word (New Zealander, keepCase), info (мови без the), multi, pick, gaps(Final).
4. e8s8l4 «Much bigger, a bit smaller: comparing countries» — повторення e7s4l5 на статистиці: choice(hyp), info, gaps, choice, build, word («Write much or a bit»), pick, gaps(Final).
5. e8s8l5 «If I lived in Canada, I would…» — Second Conditional: choice(hyp), info, gaps, choice, info (If I were / was), word (were|was), build, pick, gaps(Final).
6. e8s8l6 «If you could visit one country, which would you choose?» — choice(hyp), info (питання, could, короткі відповіді, if + could), gaps, build (питання, keepCase), choice (діалог), multi, word (wouldn’t, contractions), gaps(Final).
7. e8s8l7 boss «Around the English-speaking world» — 9 завдань, pre l1…l6.

**requires:** e5s10l2, e5s10l3, e5s10l4, e6s8l3, e5s9l1 (за задачею) + e7s4l5 (much / a bit — урок уже є).

**Факти про країни (два джерела; першоджерела ONS/StatCan/ABS/CSO/Stats NZ/Met Office/BOM з контейнера не відкриваються — код 000, тож en.wikipedia з посиланням на першоджерело + uk.wikipedia / WebSearch):**
- Площі (l4, boss): Canada 9,984,670 km² → «almost 10 million» — en.wikipedia Canada infobox https://en.wikipedia.org/wiki/Canada; uk.wikipedia https://uk.wikipedia.org/wiki/Канада (9 984 670; у преамбулі 9 976 140 — обидва «almost 10 million»). Australia 7,688,287 → «about 7.7 million» — https://en.wikipedia.org/wiki/Australia; https://uk.wikipedia.org/wiki/Австралія. Ireland 70,273 → «about 70,000» — https://en.wikipedia.org/wiki/Republic_of_Ireland; https://uk.wikipedia.org/wiki/Ірландія. UK 244,376 (en) / 242,495 (uk) → «about 240,000» (як у verified e5s10) — https://en.wikipedia.org/wiki/United_Kingdom; https://uk.wikipedia.org/wiki/Велика_Британія. Ukraine «about 600,000» — e5s10 (verified), FACT verifier-pe5s10 (603,6 тис.).
- Населення за переписом, із роком у тексті (l4, boss): UK 2021 — 66,912,637 (en) / 66 940 559 (uk) → «about 67 million (2021)»; Canada 2021 — 36,991,981 (en, посилання на StatCan Census Profile 2021; uk — те саме) → «about 37 million (2021)»; Ireland 2022 — 5,149,139 (en, uk) → «about 5.1 million (2022)»; New Zealand 2023 — 4,993,923 (en infobox; Stats NZ «village of 100 people» https://www.stats.govt.nz/assets/2023-Census/Aotearoa-New-Zealand-Village-of-100-people/English-copy-of-Aotearoa-New-Zealand-as-a-village-of-100-people.pdf — через WebSearch; uk.wikipedia має лише 2013) → «about 5 million (2023)». Населення України НЕ подаю (TQ-129; e8s7). Населення Australia в тексті немає (перепис 2021: 25 422 788 у uk, 25 890 773 ERP в en — розбіжність, не брав). Площу NZ не брав (263 310 en / 268 680 uk).
- Положення (l1): UK — «country in Northwestern Europe, off the coast of the continental mainland… includes the island of Great Britain, the north-eastern part of the island of Ireland» (en); uk: «на північному заході від Континентальної Європи, на Британських островах». Ireland — north-western Europe, 26 з 32 графств острова Ireland, Irish Sea на сході (en; uk «у північно-західній Європі»); «west of Great Britain» — en Ireland (island) / Irish Sea на сході. Canada — North America, від Atlantic до Pacific, кордон із USA (en: https://en.wikipedia.org/wiki/Canada; uk «займає північну частину Північної Америки… від Атлантичного океану на сході до Тихого океану на заході»). Australia — країна = материк + Tasmania (en; uk «на однойменному материку»). New Zealand — island country in the south-western Pacific, два головні острови North Island і South Island, east of Australia across the Tasman Sea (en https://en.wikipedia.org/wiki/New_Zealand; uk «острівна держава у південно-західній частині Тихого океану… на двох великих островах»). Ukraine in Eastern Europe — en/uk Ukraine (як у e5s10). Kharkiv north-east, Lviv west — e5s10 (verified).
- Клімат (l2, l6 Final, boss): UK — mild, west wetter than east — https://en.wikipedia.org/wiki/Climate_of_the_United_Kingdom («Northern Ireland, Wales and western parts of England and Scotland are generally the mildest, wettest… Eastern areas are drier»); Met Office UK regional climates https://www.metoffice.gov.uk/research/climate/maps-and-data/regional-climates (через WebSearch: «east and south … drier»); uk.wikipedia «помірний океанічний клімат, м'які зими і рясні опади». Ireland — «mild, humid… abundant rainfall and a lack of temperature extremes»; Valentia (захід) — майже вдвічі більше опадів, ніж Dublin (1,400 / 714 mm) — https://en.wikipedia.org/wiki/Climate_of_Ireland; uk.wikipedia Ірландія «м'якими зимами та прохолодним літом, високою вологістю та частими опадами»; WebSearch (Met Éireann 2024: Dublin Airport 670 mm, Valentia 1,652 mm). Canada — «Winters can be harsh in many parts of the country… near −15 °C» — en Canada «Climate»; uk.wikipedia Канада «Зима може бути дуже суворою… до −40 °C»; «snowy» — en «snow can cover the ground for almost six months» (одне джерело; у тексті лише «very cold and snowy in many parts»). Australia — «the largest part of Australia is desert or semi-arid», «second driest continent after Antarctica» — https://en.wikipedia.org/wiki/Climate_of_Australia; uk.wikipedia Австралія (посушливий клімат, ¾ території). Summer = December, January, February — BOM (через WebSearch: https://www.bom.gov.au/news-and-media/solstices-equinoxes-and-the-seasons); uk.wikipedia Австралія «зміна пір року обернено до сезонів в Україні» (там «спекотне літо — листопад–січень»: у тексті лише «summer is in December, January and February» за BOM). New Zealand — mild — https://en.wikipedia.org/wiki/Climate_of_New_Zealand («Winters are relatively mild»), uk «помірний».
- Мови (l3, boss): Canada — English and French official (FACT verifier-pe5s10; en/uk infobox). Ireland — Irish and English official — en infobox, uk «Офіційні мови: ірландська, англійська».

**Форми й норма:**
- Second Conditional: CD Grammar «Conditionals: if» — «if + past simple … would/might/could», «Warning: We use would in the main clause, not in the conditional clause… Not: If you would decide» — https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if. Тому в головному реченні could / might теж правильні: would / could як вибір не даю; хибні варіанти — will, Present Simple, would в if-частині.
- If I were / was: сторінки CD Grammar про were/subjunctive знайти не вдалося (curl CD: лише ідіома «if I were you»); підстава — British Council LearnEnglish (відповідь викладача через WebSearch: «both If I were and If I was are acceptable… preference for were, especially in writing»), https://en.wikipedia.org/wiki/English_subjunctive. У `word` обидва в ключі; у gaps was/were поруч не ставлю.
- north of vs in the north of: OALD north_3 «north of something — nearer to the north than something» https://www.oxfordlearnersdictionaries.com/definition/english/north_3; OALD north_1 «in the north of the country» https://www.oxfordlearnersdictionaries.com/definition/english/north_1. «to the north of» теж правильне — у вправах його немає.
- Nationality words: CD Grammar «Nationalities, languages, countries and regions» — https://dictionary.cambridge.org/grammar/british-grammar/nationalities (an Australian / the Australians; British → a British man/woman → the British; Irish → an Irishman/woman → the Irish; Welsh; мова без the і без language). New Zealander — CD https://dictionary.cambridge.org/dictionary/english/new-zealander.
- Наголос (CD UK): Canada ˈkæn.ə.də, Australia ɒsˈtreɪ.li.ə, continent ˈkɒn.tɪ.nənt, island ˈaɪ.lənd, climate ˈklaɪ.mət, desert ˈdez.ət — https://dictionary.cambridge.org/dictionary/english/<слово>. Рівні CD: climate B1, mild B1, wet A2, dry A2, desert A2, island A2, continent B1, population B1, imagine B1.

**Перевірка відповідей:** build перебрано через app/lang.js (vm, скрипт у scratchpad): кожен build приймає лише свій `answer`. l4 build: питальний порядок «Is Canada much bigger than the UK?» і хибне «The UK is much bigger than Canada» відсікає body «Make a true sentence. Start with Canada.» (як e5s5/e5s10). l5 build: плитка «in Ireland,» з комою і «I’d» — інший порядок неможливий; extra «live». l6 build: «What you would do…» не питання; extra «will». boss build: extra «chose» (will/did/do дали б граматичне питання — не брав).

**Спірне / для верифікатора:**
- l4: «much» для 67 і 37 млн (≈ 1,8 раза) і для 600 000 / 240 000 (2,5 раза) — я вважаю різницю великою; «a bit» — лише Ireland / NZ (5,1 і 5 млн, різні роки переписів — рік у тексті).
- l2 Final: Owen (Wales) — тепер друг Emma (нова деталь; у e5s10 Owen без зв'язку з героями); «Our new neighbours are from Australia» — вигадані сусіди Emma.
- l3 Final: Liam «learns Irish at school» — нова деталь героя (не факт про країну).
- stats: e8s8l3 longWordShare 0.161 (z=2.6) і e8s8l4 0.151 (z=2.3) — «нетипово для сім'ї», але в межах профілю 7–9 (≤ 0,18): предмет уроку — Canadian, Australian, Ukrainian, nationality, population, Australia (як e5s10l2).
- Погода в повідомленнях героїв l2 (−5 °C у Kyiv, −15 °C в Ottawa, 7 °C у Dublin, 30 °C у Canberra) — вигадана погода дня, не кліматичні дані.
- Не повторює e8s7: артиклі з назвами, числа/відсотки, most of — не вчу; Україна — лише площа й герої.
