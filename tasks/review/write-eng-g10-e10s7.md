---
claimed_from: todo
claimed_at: 2026-11-26T10:31:16.059Z
id: write-eng-g10-e10s7
type: write-section
subject: eng
grade: 10
section: e10s7
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e10s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Ukraine and English-speaking countries» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Україна; Країни виучуваної мови (за вибором) — адміністративний та політичний устрій; природні ресурси; державні свята — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 23), граматика — с. 23, обсяги — с. 21 (теми поєднано: с. 22 «Україна + Країни виучуваної мови»).
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): so … that for results and consequences; declarative sentence + so / therefore + declarative sentence; prepositions of reason and purpose: due to, owing to, so, because (с. 23) — повт. so / such … that (e9s3 l4), so / because (з 5–6 кл.), although / however / so (e9s9 l4); нове: therefore, due to, owing to, because of; «reason **and purpose**» (с. 23) — мета: so (that) + can / could (розширення purpose з 6 кл.) — хоча б одним прикладом, щоб позицію покрито повністю (verifier-curate-eng-plan-g10-11).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: due to / owing to / because of + іменник — усі правильні (CD Grammar «Due to», «Owing to») — ключ усі; головна пастка — because + речення ≠ due to + іменник; therefore — після крапки чи крапки з комою, з комою після. Факти: адміністративний устрій України (області, АР Крим, міста зі спеціальним статусом — Конституція України, ст. 133, звірити), Verkhovna Rada, President, Cabinet of Ministers — англійські назви за офіційними сайтами; устрій UK — Parliament, the monarch, the government; частини UK — facts/eng.md К1 (без родового слова). **Державні свята:** перелік змінювався (зокрема 2023 р.), а під час воєнного стану додаткових вихідних немає — бери чинний перелік з джерела з датою, TQ-141; у BrE — bank holiday / public holiday (facts/eng.md №16). Природні ресурси — без застарілих чисел. Функція (с. 22): «описувати ситуації та реалії життя, аналізувати їхні причини і наслідки». Не дублювати e8s7–e8s8 (географія, клімат, населення). `requires`: e5s10l1, e5s10l3, e6s7l1, e6s8l1; 7–9 — e8s7, e8s8, e9s3 l4. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s7.js`: `SLID.section("eng", { id: "e10s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e10s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e10s7, 2026-11-26.** Файл `content/eng/g10-e10s7.js`, draft, 7 уроків (6 + фінал); validate --section e10s7 — 0 помилок, 0 попереджень. Build не запускав.

**Уроки:** l1 How Ukraine is organised (oblasts, raions, capital, Crimea; sort, stress, match); l2 Verkhovna Rada / President / Cabinet of Ministers (elect, pass, appoint, adopt; passive is elected); l3 UK — constitutional monarchy, Commons / Lords, PM, Scottish Parliament / Senedd / NI Assembly, коротко USA (Congress); l4 natural resources + so … that / such … that (повт. e9s3l4); l5 because vs because of / due to / owing to; so vs therefore; purpose so that + can / could (П4); l6 public holidays (Ukraine — КЗпП ст. 73; UK — bank holidays); l7 boss — 7 завдань (`pre` на l1–l6) + текст «Two countries» 351 слово в 3 уривках (108 / 127 / 116, maxText ≤ 138).

**requires:** e5s10l1, e5s10l3, e6s7l1, e6s8l1, e8s7l1, e8s8l1, e9s3l4, e9s9l4 — усі id існують (уроки 7–9 уже є), тож вписав у файл сам.

**stats:** e10s7l1 — longWordShare 0,149 (z = 2,2; межа профілю ≤ 0,24 — у межах): тема дає republic, autonomous, constitution, integral, occupied; e10s7l7 — screens 12 (z = 2; межа 6–12 — у межах). Пояснення — малий розмір сім'ї 10 кл., калібрувати в style-sync.

**Друга правильна відповідь (перевірено):** due to / owing to / because of + іменник — у multi усі три в ключі (l5 #5, boss T5); у gaps пара завжди «одна з них ↔ because», і після пропуску або іменник, або підмет + дієслово; so / therefore не протиставлені — therefore перевіряю напрямком причина → наслідок (l5 #7) і «Therefore ↔ Because,» після крапки; so / such — за словом після (іменник чи ні); that після so не робив помилкою. build: усі перестановки з пастками перебрано через SLID_LANG.check — l2 приймає 2 порядки (обидва в ключі), l4 і l5 — по одному (умова задає початок). word l2 «adopted» — у ключі ще passed, approved.

**Опора (D-019):** l1 #7 (Crimea) — на екрані 6 (ст. 134) і 3; l2 #5 «the only body» — екран 3; l3 #5 multi — екрани 3 l2 і 3 l3; l3 #9 (USA) — екран 8; l4 #8 — екран 7; l6 #8–9 — екран 7; boss T10 — лише уривок на екрані. Здогадки (hyp): перший choice кожного уроку.

**TQ-141 (як зараз):** перелік — чинна ст. 73 КЗпП (zakon.rada.gov.ua відкрився в сесії, чинна редакція з поміткою «У період дії воєнного стану не застосовуються норми статті 73»); «public holidays», ніде не сказано, що в Україні в ці дні не працюють; для UK «banks and most businesses are closed» (CD bank holiday). Свята вибірково: 1 January, 28 June, 15 July, 24 August, 1 October, 25 December; 8 March, 1 May, 8 May, Великдень, Трійця не згадано.

**Джерела фактів:**
- Конституція України, укр. і офіційний англ. переклад: ст. 2 (unitary), 5 (republic), 20 (capital Kyiv), 75 (sole legislative authority), 76 (450 MPs, 5 years), 102–103 (President — head of state, 5 years), 113–114 (Cabinet of Ministers — highest executive body; PM appointed by the Rada upon the President’s submission), 133 (ARC, 24 oblasts, raions; Kyiv і Sevastopol — special status), 134 (ARC — integral constituent part); прийнято 28 June 1996 — https://zakon.rada.gov.ua/laws/show/254к/96-вр/print , https://zakon.rada.gov.ua/laws/show/en/254к/96-вр/print ; друге — en.wikipedia Administrative divisions of Ukraine / Verkhovna Rada; facts/hist №13 (24.08.1991).
- Крим: Закон № 1207-VII ст. 1 (тимчасово окупована територія — невід'ємна частина України; початок окупації 20 February 2014) — https://zakon.rada.gov.ua/laws/show/en/1207-18/print ; UNGA res. 68/262, 27.03.2014, п. 6 «not to recognize any alteration of the status…» — https://digitallibrary.un.org/record/767883/files/A_RES_68_262-EN.pdf , https://news.un.org/en/node/464812 , https://en.wikipedia.org/wiki/United_Nations_General_Assembly_Resolution_68/262
- Свята України: КЗпП ст. 73 — https://zakon.rada.gov.ua/laws/show/322-08/print (зміни Законом № 3258-IX від 14.07.2023: 7 January вилучено; 15 July, 1 October); https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine (14 October until 2022; «During martial law a public holiday is not a non-working day»).
- UK: CD the House of Commons («members are each elected»), the House of Lords («members are not elected»), constitutional monarchy, monarch, prime minister, bank holiday — https://dictionary.cambridge.org/dictionary/english/house-of-commons , …/house-of-lords , …/constitutional-monarchy , …/bank-holiday ; 650 MPs, PM — лідер партії з більшістю — https://en.wikipedia.org/wiki/House_of_Commons_of_the_United_Kingdom , https://en.wikipedia.org/wiki/Politics_of_the_United_Kingdom , https://www.parliament.uk/about/how/role/system/ (пошукова видача); Scottish Parliament / Senedd / NI Assembly, освіта й охорона здоров'я — devolved — https://en.wikipedia.org/wiki/Devolution_in_the_United_Kingdom ; King Charles III — https://en.wikipedia.org/wiki/Charles_III .
- Bank holidays: 8 / 9 / 10; Christmas Day і Boxing Day — усюди; St Andrew’s Day (Scotland), St Patrick’s Day (NI) — https://en.wikipedia.org/wiki/Public_holidays_in_the_United_Kingdom , https://www.gov.uk/bank-holidays (пошукова видача; з контейнера не відкривається), https://legislation.gov.uk/ukpga/1971/80/schedule/1/data.html .
- USA: Congress = Senate + House of Representatives — CD https://dictionary.cambridge.org/dictionary/english/congress ; https://en.wikipedia.org/wiki/Federal_government_of_the_United_States .
- Ресурси України: chornozem — https://en.wikipedia.org/wiki/Chernozem , https://ers.usda.gov/amber-waves/2024/may/ukraine-s-rise-in-grain-and-sunflower-seed-market-share-limited-by-ongoing-war ; sunflower oil — один з найбільших експортерів — https://en.wikipedia.org/wiki/Agriculture_in_Ukraine , https://fas.usda.gov/sites/default/files/2022-06/Ukraine-Factsheet-June2022.pdf ; Kryvyi Rih — залізна руда, промисловий видобуток з 1881 — https://en.wikipedia.org/wiki/Kryvbas , https://www.encyclopediaofukraine.com/pages%5CK%5CR%5CKryvyiRihIron6oreBasin.htm ; Donbas — вугілля — https://www.encyclopediaofukraine.com/pages%5CD%5CO%5CDonetsBasin.htm , https://kids.britannica.com/students/article/Donbas/30915 .
- Ресурси UK: North Sea oil з 1975 (Forties, Argyll) — https://en.wikipedia.org/wiki/North_Sea_oil , https://en.wikipedia.org/wiki/Forties_oil_field ; остання глибока шахта Kellingley — 18.12.2015 — https://en.wikipedia.org/wiki/Kellingley_Colliery , https://www.voanews.com/amp/britains-last-deep-coal-mine-closes/3108889.html ; вітер — https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom (2025: майже 30 % генерації GB; BBC 2.01.2026) — число в урок не взято, лише «a lot of».
- Мова: CD due to (B1), owing to (B2), because of (B1), therefore (B1); OALD therefore, owing-to, due_1 — https://dictionary.cambridge.org/dictionary/english/owing-to , …/due-to , …/therefore , https://www.oxfordlearnersdictionaries.com/definition/english/therefore ; CD Grammar «Because, because of», «So», «Such», «So that or in order that?» — https://dictionary.cambridge.org/grammar/british-grammar/because-because-of , …/so , …/such , …/so-that . Наголос (CD): republic, autonomous, capital, constitution, constitutional (-tu-), integral, occupy, monarch(y), parliament, president, Congress, Senate, natural, resource, fertile, therefore. oblast — Wiktionary /ˈɒblæst/, plural oblasts (у CD/OALD немає; так в офіційному англ. перекладі Конституції).

**Сумнівне / на розгляд верифікатора:** (1) l1 #6 — формулювання про окупацію Криму й резолюцію ГА ООН (без оцінок, за законом і текстом резолюції); (2) «Day of Defenders of Ukraine» — англ. назва довільна (en.wiki — «Defenders of Ukraine Day»; укр. — «захисників і захисниць»); (3) l6 intro «It’s 30 November… a bank holiday in Scotland today» — якщо 30.11 вихідний, переноситься на понеділок; (4) «Statehood Day» без пояснення причини дати.
