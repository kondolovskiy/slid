---
claimed_from: todo
claimed_at: 2026-11-25T12:30:22.672Z
id: write-eng-g8-e8s7
type: write-section
subject: eng
grade: 8
section: e8s7
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e8s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Україна: географія, клімат, населення» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: географічне положення; клімат; населення; національності — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): articles with geographical names: the + rivers, seas, mountain ranges; no article + countries, cities, lakes, single mountains (B1: Articles — no article) — нове; numbers and statistics: millions, per cent, half, a third (функція «коментувати статистичні дані», с. 33) — **наш**; most of / some of / none of (B1: Pronouns — quantity) — нове; population як collective noun (B1: Nouns — collective) — на вибір.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** Ukraine без the, the Dnipro, the Carpathians, the Black Sea (glossary/eng.md); винятки the UK, the USA. Площа ≈ 603,6 тис. km² (FACT verifier-pe5s10); кількість сусідів і кордони — з двох джерел; **населення — TQ-129** (дата й джерело числа обов'язково в тексті: «In 2001, …»); національності — за переписом 2001 (Держстат) з посиланням; без стереотипів. per cent (BrE) і percent — обидва в CD → обидва в ключі; числа «2,500», «2.5» (glossary). Не повторювати e5s10l1, l5, l6: тут клімат, населення, статистика. `requires`: e5s10l1, e5s10l5, e5s10l6, e5s5l6, e4s6l4. Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s7.js`: `SLID.section("eng", { id: "e8s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e8s7, 2026-11-25.** Файл `content/eng/g8-e8s7.js`, 7 уроків (6 + фінал `e8s7l7`, значок `e8s7boss`), status draft. `requires` — як у задачі (e5s10l1, e5s10l5, e5s10l6, e5s5l6, e4s6l4; усі існують).
- l1 Where is Ukraine? Borders and neighbours — сусіди, border (дієслово), in the west of / to the west of, on + море.
- l2 The Carpathians, the Black Sea, the Dnipro: the or no article? — the + rivers/seas/ranges; no article + countries/cities/lakes/one mountain; the UK/USA; the Dnipro (річка) / Dnipro (місто).
- l3 Hot summers, cold winters: the climate of Ukraine — weather/climate, continental, mild, wet/dry, порівняння регіонів.
- l4 Millions, per cent and half — half/a third/a quarter/three quarters, per cent (без -s; percent теж OK), million після числа без -s, most of / some of / none of + the/us/them. Опитування класу Andrii (24 учні, e8s2) — вигадане, числа «круглі» (18/12/8/6/0).
- l5 Who lives in Ukraine? — перепис 2001: >130 національностей, українці 77,8 %, росіяни 17,3 %, решта < 1 %; рідна українська 67,5 %; назви національностей; people — множина; population — лише згадка (BrE is/are — не оцінюю).
- l6 Ukraine in numbers: a short report — читання 2 частини, according to, about / more than / less than, рік і джерело.
- l7 фінал — 9 завдань з `pre` на l1–l6.

**Населення (TQ-129):** як радить задача — лише перепис 2001 з роком і джерелом у тексті («In 2001, about 48.5 million…», «According to the 2001 census…»); жодних оцінок після 2001/2022. У l5/l6 сказано, що перепис 2001 — останній.

**Факти й джерела (по два):**
- Сусіди (7): Belarus — north; Poland, Slovakia, Hungary — west; Romania, Moldova — south-west; Russia — east; на півдні — Black Sea і Sea of Azov; Eastern Europe — https://en.wikipedia.org/wiki/Geography_of_Ukraine (розд. Borders, з посиланням на CIA Factbook); https://uk.wikipedia.org/wiki/Географія_України («межує з сімома іншими країнами: на півночі — з Білоруссю, на сході — з РФ, на південному заході — з Молдовою і Румунією, на заході — з Польщею, Угорщиною і Словаччиною»); https://uk.wikipedia.org/wiki/Державний_кордон_України. Довжини кордонів у джерелах різняться (4558/5581/5618 км) — у тексті не вжито.
- Площа 603,628 km² — memory/long/facts/math.md №243 (osvita.ua, ЕСУ); https://en.wikipedia.org/wiki/Geography_of_Ukraine. Hoverla 2,061 m — e5s10; en.wikipedia Geography_of_Ukraine.
- Клімат: більша частина — continental; південне узбережжя Криму — Mediterranean (за Алісовим: помірно континентальний майже всюди, середземноморський на ПБК) — https://uk.wikipedia.org/wiki/Клімат_України; https://en.wikipedia.org/wiki/Geography_of_Ukraine (Climate: «continental climate, except for its southern coasts»; «Precipitation … highest in the west and north and lowest in the east and southeast. Western Ukraine, particularly in the Carpathian Mountains … ~1200 mm; Crimea and the coastal areas of the Black Sea ~400 mm»); https://www.countryreports.org/country/ukraine/geography (CIA-текст: Mediterranean only on the southern Crimean coast; winters vary from cool along the Black Sea to cold farther inland); https://outdoorukraine.com/en/102 (300–400 mm у південному й південно-східному). Числа опадів різняться (1200 / до 1600 мм) — у тексті лише якісно: «the most rain and snow» у Карпатах, «the least rain» на півдні й південному сході; м'якші зими на півдні.
- Погода в intro l3 (−3 Lviv, −8 Kharkiv, −6 село, +5 Англія) — вигадані повідомлення героїв одного ранку, не кліматичні дані.
- Lake Svitiaz — найглибше озеро України, Волинська обл., північний захід — https://en.wikipedia.org/wiki/Svitiaz; https://uk.wikipedia.org/wiki/Світязь. Транслітерація Svitiaz — КМУ № 55 (glossary/eng).
- Перепис 2001 (5.12.2001): 48 457 100 → «about 48.5 million»; міське 32 574 500 = 67,2 % → «about 67 per cent / about two thirds»; понад 130 національностей; українці 77,8 %, росіяни 17,3 %, білоруси 0,6, молдовани 0,5, кримські татари 0,5, болгари 0,4, угорці 0,3, румуни 0,3, поляки 0,3, євреї 0,2 % (усі < 1 %); рідна українська — 67,5 % — https://en.wikipedia.org/wiki/2001_Ukrainian_census (джерело — Держкомстат, ukrcensus.gov.ua через web.archive); https://uk.wikipedia.org/wiki/Перепис_населення_України_(2001). Першоджерело 2001.ukrcensus.gov.ua з контейнера недоступне (403 / ENOTFOUND), web.archive.org — WebFetch заблоковано.
- Регіони: угорці — Закарпаття 12,1 % (https://en.wikipedia.org/wiki/Hungarians_in_Ukraine; таблиця областей у 2001_Ukrainian_census); болгари — південь, Одеська обл. 6,1 % (https://en.wikipedia.org/wiki/Bulgarians_in_Ukraine; та сама таблиця); кримські татари — 243,4 тис. із 248,2 тис. в АР Крим (таблиця перепису, en.wiki). У тексті — «Many … live in …», без відсотків.
- Danube — частина кордону з Румунією («the delta of the Danube forms the border with Romania», en.wiki Geography_of_Ukraine); Dnipro і Danube впадають у Black Sea (там само: річки «flow south into the Black Sea»).

**Словники й граматика:**
- Артиклі з назвами — CD Grammar «The» (Places): «We use the with mountain ranges and some mountains (the Alps, the Eiger) … rivers … seas … We don’t usually use articles with individual mountains or lakes when the name includes Mount or Lake … We don’t use articles with continents, countries, towns» — https://dictionary.cambridge.org/grammar/british-grammar/the. Через «some mountains (the Eiger)» у правилі написано «one mountain: Hoverla», а не «усі окремі гори без the».
- per cent (BrE) / percent — OALD «per cent … (especially British English) (North American English usually percent)» https://www.oxfordlearnersdictionaries.com/definition/english/per-cent_1; CD percent «(also per cent)», B1 https://dictionary.cambridge.org/dictionary/english/percent. percent у тексті не хибний ніде; у `word` l4 обидва в ключі.
- million: «eight million dollars», «millions of» — https://dictionary.cambridge.org/dictionary/english/million.
- mild (weather) B1 «not very cold» — https://dictionary.cambridge.org/dictionary/english/mild; continental climate — CD (стаття continental climate); census — https://dictionary.cambridge.org/dictionary/english/census; according to B1 — https://dictionary.cambridge.org/dictionary/english/according-to; Pole «a person from Poland» — https://dictionary.cambridge.org/dictionary/english/pole; Belarusian — https://dictionary.cambridge.org/dictionary/english/belarusian.
- Наголос (`stress` l5, `<u>`): Ukrainian juːˈkreɪ.ni.ən, Hungary ˈhʌŋ.ɡə.ri, Belarus ˌbel.əˈruːs, population ˌpɒp.jəˈleɪ.ʃən, nationality ˌnæʃ.ənˈæl.ə.ti, climate ˈklaɪ.mət, continental ˌkɒn.tɪˈnen.təl, census ˈsen.səs — CD (dictionary.cambridge.org/dictionary/english/<word>). border ˈbɔː.dər, weather ˈweð.ər — CD.

**Друга правильна відповідь — що відсічено:**
- `build` перебрано скриптом через `SLID_LANG.check` (усі підмножини й порядки плиток з пастками): кожне приймає лише ключ. l5 — додано другий порядок «Ukrainians were more than three quarters of the people.»; l1 «Is Belarus to the north…?» відсічено контекстом («Andrii answers», «Start with Belarus» у body); фінал — кома в плитці «the 2001 census,» + «Start with According to» у body.
- half (of) the class — of після half не оцінюю; none of + is/are, population is/are, in (the) winter — не оцінюю (CD: обидва можливі).
- `word` l3 «Winters on the Black Sea coast are ___» — ключ mild / milder / warmer; `word` l4 — half / half of / 50 per cent of / percent / 50% of; `word` l1 — borders / neighbours; фінал T7 — інструкція «the word for the people from Hungary» відсікає «people».
- `pick` l4 «Most [of] pupils» — помилка й обидва виправлення (Most pupils / Most of the pupils) у fbText.

**Опора (D-019):** l1 multi→choice і match — екран 3 (список сусідів); l3 gaps/multi/word/final — екран 5 («The climate of Ukraine»); l4 gaps census — дані в body того самого екрана; l5 choice — екран 3; stress — підкреслення на екрані 5; l6 gaps — дані в body; фінал — `pre` на уроки. Здогадки `hyp`: l1 (кількість сусідів), l2 (the Black Sea), l4 (most of), l5 (census).

**Перевірки:** `node tools/validate.mjs --section e8s7` — 0 помилок, 0 попереджень. `stats --subject eng`: прапорці «нетипово для сім'ї» — l5 longWordShare 0,15 (у межах профілю 7–9 ≤ 0,18; назви національностей і population/nationality — як e5s10l2), l6 gradedShare 0,8 (у межах [0,5; 0,9]; урок-читання), l7 screens 10 (фінал, 9 завдань). Плейтест не запускав — Python-модуля playwright у контейнері немає.

**Спірне / для верифікатора:**
- Russia «to the east» — так в обох джерелах; кордон є й на північному сході (Чернігівщина, Сумщина), але в тексті лише «east», щоб не розходитися з джерелами.
- Розподіл регіонів «the south and the south-east — the least rain» — en.wiki пише «east and southeast», Britannica (через en.wiki) і outdoorukraine — «Black Sea lowlands and Crimea / south and south-east». Можна звузити до «the south-east».
- «Mediterranean climate» узбережжя Криму — за класифікацією Алісова (uk.wiki); за Кеппеном en.wiki пише «humid subtropical / cold semi-arid» на південних узбережжях. Для 8 кл. лишив Mediterranean (так і CIA-текст).
- Нові деталі героїв: Taras, Dad і Zlata після Hoverla їздили до Lake Svitiaz (серпень, l2); Taras із Zlata в Odesa в липні (l2 word). Daryna — geography club (квіз, постер про клімат). Emma — проєкт «Countries of Europe» (мапа). Клас Emma — 30 учнів (фінал T5, вигадане опитування).

**verifier-e8s7, 2026-11-25.** Верифіковано: 7 уроків → `verified`, 9 правок (Росія — north-east and east; площа → «more than 600,000 km²» через розбіжність джерел; два `build` — інструкція в body відсікає інверсію). Звіт — reports/verify/write-eng-g8-e8s7.md. Плейтест — лише CI (немає Python playwright).
