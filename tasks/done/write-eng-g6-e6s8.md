---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.848Z
id: write-eng-g6-e6s8
type: write-section
subject: eng
grade: 6
section: e6s8
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: done
claimed_by: writer-e6s8
created: 2026-11-19
source: design-eng
---
# Написати розділ «Країни виучуваної мови: столиця й визначні місця» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: столиця; визначні місця — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): if + Present Simple: real conditions (If it rains, go to a museum! — головне речення імператив або Present Simple, не will: first conditional — 7 кл.); reported statements with say and tell (A2): Emma said (that)…, Emma told me (that)…; повторення — Present Perfect (e6s7), comparatives / superlatives (e5s10l4, e5s10l5), Past Simple passive (e6s7).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** say vs tell: told + особа (told me), said без особи — це предмет уроку; узгодження часів (backshift) у 6 кл. не вимагати: «Emma said she likes…» і «…liked…» — обидва в ключі або контекст. London — on the Thames (inbox verifier-e4s6: en/uk.wikipedia); факти про пам'ятки — facts/eng.md чи два джерела. Порівняння Kyiv / London — лише перевірені числа (площа, населення — з джерелом і роком). Герої: Emma — Англія (місто не назване; мама Sarah, кішка Snowy) — «Emma told me about London» не означає, що вона живе в Лондоні. `requires`: e4s7l3, e5s10l3, e5s10l4; після e6s7 — урок Present Perfect (оркестратор). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s8.js`: `SLID.section("eng", { id: "e6s8", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s8` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
writer-e6s8, 2026-11-20. Файл content/eng/g6-e6s8.js (status draft), мапа img/eng/e6s8/london-map.svg (власна, CC0, як e5s7 town-map.svg).

**Уроки (7 = 6 + фінал):** e6s8l1 London: a city on the Thames (факти + повторення Present Perfect / Past Simple з ago) · e6s8l2 Famous places in London: a map (Big Ben, London Eye, Tower, Buckingham Palace; next to / opposite; Past passive was built) · e6s8l3 If it rains, go to a museum! (if + Present Simple → імператив / Present Simple; will лише в підрядному як помилка) · e6s8l4 Kyiv and London: two capitals (порівняння, the oldest underground; Україна) · e6s8l5 Emma told me about London: said and told (told + особа, said без особи; I → she) · e6s8l6 A post from London (текст 3 × ≈ 55 слів = 165 слів; most / best; коментар) · e6s8l7 фінал (6 завдань, `pre` l1–l6), значок e6s8boss «London guide».

**Факти (кожен — два джерела):**
- London — capital of the UK and England, on the River Thames, biggest city in the UK: CD london https://dictionary.cambridge.org/dictionary/english/london; en.wikipedia https://en.wikipedia.org/wiki/London («capital and largest city of England and the United Kingdom»). (Також FACT verifier-curate-eng-plan-g6.)
- London — about 9 million people (2024): GLA State of London 2026 (ONS mid-2024, 9.1m) https://apps.london.gov.uk/state-of-london/ (через WebSearch); en.wikipedia London («9.14 million people in 2025»). У тексті — лише «about 9 million».
- Kyiv — about 3 million people (2022): en.wikipedia https://en.wikipedia.org/wiki/Kyiv («As of January 2022, the population of Kyiv was 2,952,301»); Держстат / ГУС у м. Києві, реліз «Соціально-економічне становище» за січень 2022 (https://svyat-2023.kyivcity.gov.ua/files/2022/3/12/SES_01_2022.doc, через WebSearch: «Чисельність наявного населення в м. Києві … на 1 січня 2022р. становила 2952301 особу»).
- Dnipro about 2,200 km, Thames 346 km — як у e4s6 (verified); Thames 346 km — en.wikipedia https://en.wikipedia.org/wiki/River_Thames.
- Big Ben — nickname of the Great Bell; tower renamed Elizabeth Tower in 2012; tower completed 1859: en.wikipedia https://en.wikipedia.org/wiki/Big_Ben («Big Ben is the nickname for the Great Bell…», «renamed the Elizabeth Tower in 2012», «completed in 1859»); UK Parliament, Commons Information Office «Big Ben» (PDF, https://webtest.parliament.uk/globalassets/documents/commons-information-office/big-ben.pdf, через WebSearch: «Big Ben is in fact the Great Bell which sounds the hour», «In 2012, the Clock Tower was renamed the Elizabeth Tower»). parliament.uk з контейнера заблоковано (pitfalls.md).
- Tower of London — White Tower built by William the Conqueror (1078; HRP: 1070s / 1078–1100) → «more than 900 years ago»: en.wikipedia https://en.wikipedia.org/wiki/Tower_of_London; Historic Royal Palaces https://www.hrp.org.uk/tower-of-london/history-and-stories/50-facts-about-the-tower-of-london/ (через WebSearch; hrp.org.uk з контейнера не резолвиться).
- Buckingham Palace — the King’s palace in London (official residence and administrative HQ of the monarch): en.wikipedia https://en.wikipedia.org/wiki/Buckingham_Palace; royal.uk https://www.royal.uk/royal-residences-buckingham-palace (через WebSearch: «administrative hub of the Monarchy… a family home»). «The King lives there» свідомо не писав (король живе в Clarence House — не перевіряв).
- London Eye — wheel, 135 m, on the South Bank of the Thames; first passengers 1 February 2000 (formally opened 31 Dec 1999, public 9 March 2000) → «people first went on it in 2000»: en.wikipedia https://en.wikipedia.org/wiki/London_Eye; Structurae https://structurae.net/en/structures/london-eye (через WebSearch).
- British Museum — free entry: en.wikipedia https://en.wikipedia.org/wiki/British_Museum («charges no admission fee except for loan exhibitions»); britishmuseum.org/visit («Free entry», через WebSearch).
- Natural History Museum — free, dinosaur skeletons: en.wikipedia https://en.wikipedia.org/wiki/Natural_History_Museum,_London («does not charge an admission fee», «famous for its exhibition of dinosaur skeletons»); nhm.ac.uk/visit («Visiting the Natural History Museum is free», через WebSearch).
- London Underground — opened 1863, world’s first underground railway → «the oldest underground in the world»: en.wikipedia https://en.wikipedia.org/wiki/London_Underground («opened on 10 January 1863 as the world's first underground passenger railway»); Guinness World Records https://www.guinnessworldrecords.com/world-records/first-underground-railway-system і TfL https://www.tfl.gov.uk/corporate/about-tfl/culture-and-heritage/londons-transport-a-history/london-underground (через WebSearch).
- Kyiv Metro — opened 6 November 1960: en.wikipedia https://en.wikipedia.org/wiki/Kyiv_Metro; kyivcity.gov.ua / Укрінформ https://www.ukrinform.ua/rubric-society/1909606-6-listopada-pamyatni-dati.html (через WebSearch).
- Порядок на мапі (схема, «not to scale»): Big Ben — західний берег біля Westminster Bridge, London Eye — навпроти, на South Bank (en.wikipedia London Eye: «between Westminster Bridge and Hungerford Bridge»); Tower — північний берег біля Tower Bridge; British Museum — північніше річки (Bloomsbury); Buckingham Palace — на захід, біля парків.

**Словники (CD, curl):** palace B1, tower B1, bell B1, wheel A2, castle A2, bridge A2, king A2, sightseeing A2, tourist A2, visitor A2, dinosaur A2, umbrella A2, amazing A2, afraid A2, view A2, trip A2, penfriend A2, underground A2 (UK = metro), museum A1, famous A1, clock A1; sight (the sights) B1 і scary / scared B1 — не вжив (крім «scary» — ніде), jewel B2 і skeleton B2 — не вжив; whale B1, bone B1 — не вжив після правки. URL: https://dictionary.cambridge.org/dictionary/english/<слово>.

**Граматика й друга відповідь:**
- if: will оцінюється як помилка лише в підрядному (If it will rain). У головному реченні will ніде не є хибним варіантом (first conditional правильний, просто 7 кл.): дистрактори — goes / plays / playing / visits.
- say / tell: оцінюється лише said / told і займенник; час після said (likes / liked) не оцінюється ніде. build l5 — з цитати в минулому («I liked…»), тож backshift-питання не виникає; плитка «that she» одна, щоб «Emma said she liked…» без that не стало другою відповіддю. Пастка «told» без особи граматичного речення не дає.
- build: усі перестановки з extra перебрано через SLID_LANG.check (node vm) — рушій приймає лише ключі. Питальні порядки (Is the London Underground older…?, Was my favourite place…?) відсічено умовою «tells» (як verifier-e5s5). «Visit the Natural History Museum if you like dinosaurs,» — кома в плитці лишається в кінці, речення неправильне.
- word: l1 biggest / largest; l4 shorter / smaller; l6 most / best; l5 told (умова «Write said or told»); фінал — rains (умова «verb rain»). Ключі без кінцевого знака.
- Present Perfect у l1, l4 спирається на e6s7 (requires e6s7l4 — «Have you ever been to Kyiv?» за plan.js; див. нижче).

**Герої:** Emma — клас їздив до Лондона (Friday), вона там утретє; Tom (10, брат Emma) — ще не був. Andrii був у Лондоні «two years ago» (= e4s7 листівка з Лондона). Нові: **George** — хлопець, живе в Лондоні, пише сторінку для гостей міста, друг Andrii по листуванню; **Liliia** — подруга Emma з класу (Англія). Зовнішність не описано. Oksana лише читає й переказує.

**Зображення:** справжніх фото немає: Commons API весь час віддавав 429 (паралельно працював e6s7), тож кинув після 3 спроб. У l2 «Match the halves» текстовий; кандидати на фото (CC BY-SA, знайдено до 429): File:Tower of London viewed from the River Thames.jpg (Bob Collowân, CC BY-SA 3.0), File:London (UK), Elizabeth Tower, -Big Ben- -- 2010 -- 1979.jpg (Dietmar Rabich, CC BY-SA 4.0). London Eye (2000) — у Великій Британії свобода панорами для будівель (CDPA 1988 s. 62) — перевірити, якщо додаватимуть фото.

**Спірне / для верифікатора:**
1. requires: e6s7l4 («Have you ever been to Kyiv?», Present Perfect) на час здачі ще не існував (g6-e6s7.js не було) — прибрав, щоб validate був 0 помилок; оркестратору — додати після злиття e6s7 (id звірити з файлом).
2. «London is the capital of England too» — CD london так і пише; статус частин UK у тексті не називаю (К1).
3. Населення — округлене з роками (2024 / 2022); Київ — оцінка до 2022 р.
4. stats: sentenceWords у l2, l5, l6 (6,4–6,6) і readWordsPerScreen l6 (40) «нетипово для сім'ї» — у межах профілю 5-6 (3–10 слів; maxText ≤ 110); сім'я змішує 4–6 кл.; l6 — урок читання (як e6s2l5, e6s4l6 з тим самим прапорцем).
5. Авторське право: WebSearch трьох найдовших фрагментів (George’s page, «Our teacher told us that Big Ben was really a bell», «The London Eye is a very big wheel, 135 metres high…») — збігів немає.

## Верифікація (verifier-e6s8, 2026-11-20)
Вердикт: **придатний**, усі 7 уроків → `verified`; звіт reports/verify/e6s8.md.
- Факти: для кожного щонайменше 2 джерела, відкриті в сесії (en/uk.wikipedia через curl action=raw, CD, OALD, ЕСУ). Buckingham Palace — OALD «the official London home of the British king or queen» і CD london «the King's main home». Kyiv Metro 1960 — ЕСУ article-11337. Рік «(2024)» для 9 млн є лише у фрагментах WebSearch (ONS mid-2024), але «about 9 million» підтверджують uk.wiki (2021: 8,8 млн) і en.wiki (2025: 9,1 млн).
- Відповіді: усі розв'язано; другої правильної немає; build перебрано через SLID_LANG.check.
- Правки (2): l3 build — у body «Start with <b>if</b>.» (порядок «Visit the NHM if you like dinosaurs» інакше лишався можливим); l2 learned — прибрано «near».
- Спірне автора: п. 1 (requires e6s7l4 — додано оркестратором, id існує ✅); п. 2 (capital of England — CD ✅); п. 3 (роки населення ✅); п. 4 (stats — у межах профілю ✅); п. 5 (авторське право — ще 8 запитів, збігів немає ✅).
- Людині: ліцензія власних SVG — DECISION-NEEDED (writer-e5s4), розділ не блокує. Нових TQ немає.
