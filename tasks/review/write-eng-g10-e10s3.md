---
claimed_from: todo
claimed_at: 2026-11-26T10:14:52.353Z
id: write-eng-g10-e10s3
type: write-section
subject: eng
grade: 10
section: e10s3
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e10s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Food and habits» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Харчування — національні страви України та країн, мова яких вивчається; смаки, уподобання; здорова та корисна їжа; шкідливі звички — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 22–23), граматика — с. 23, обсяги — с. 21.
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): use(d) to / would + infinitive for past routines and habits (с. 23) — повт. e7s5 l3 (used to), e9s1 l4 (used to / would); нове для B2: would — лише для повторюваних дій, не для станів (used to love, не *would love), didn’t use to; be / get used to + -ing — (наш) контраст з used to + інфінітив (l6), у програмі не названо.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: used to / would для повторюваних дій — обидві (CD Grammar «Used to», «Would») — ключ обидві або дієслово стану відсікає would; «didn’t use to» — ключ (CD), «didn’t used to» — не ключ. Пастка-кальки: be used to doing ≠ used to do. Страви — розширення e5s3l6 і e6s3l6 без дубля (тут — смаки, вибір, звички); назву borscht / borshch — за словником і джерелом (FACT). Шкідливі звички — без медичних тверджень без джерела; break a habit — звірити в CD / OALD. Функції (с. 22): «давати поради, реагувати на поради інших» — l5. `requires`: e5s3l6, e6s3l6 (страви), e6s3l4 (неправильні дієслова); 7–9 — e7s5 l3, e9s1 l4. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s3.js`: `SLID.section("eng", { id: "e10s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e10s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e10s3, 2026-11-26.** Файл `content/eng/g10-e10s3.js` — draft, 7 уроків (6 + boss), validate --section e10s3: 0 помилок, 0 попереджень. Build і commit не робив.

**Уроки:** l1 National dishes of Ukraine and the UK (урок читання: 3 уривки ≈ 350 слів — П1407 с. 21; borscht, banosh, haggis, chicken Kyiv) · l2 Tastes and preferences (sour/bitter/spicy/bland, prefer A to B, would rather … than, keen on, can’t stand) · l3 used to / would: states and actions (would лише з діями; have = own vs have breakfast; Past Simple для одноразової події й «скільки разів»; didn’t use to, Did you use to) · l4 Healthy food (protein, carbohydrates, fibre, vitamins, balanced diet, processed; high in / rich in / low in / good for; NHS 5 A Day) · l5 Bad habits and advice (break a habit, get into the habit, give up, cut down on, skip, snack on; should/could, Why don’t you…?, Have you tried + -ing?, It might be a good idea to…; реакції — функція с. 22) · l6 be / get used to + -ing vs used to + verb · l7 boss (9 завдань, `pre` на l1–l6).

**requires:** e5s3l6, e6s3l4, e6s3l6, e7s5l3, e8s2l1, e8s2l4, e9s1l4 (усі існують; e8s2 — healthy lifestyle, give up, should — щоб l4–l5 не дублювали e8s2l1–l2).

**Граматика й форми (CD, CD Grammar):**
- used to / would / be used to — https://dictionary.cambridge.org/grammar/british-grammar/used-to («Used to, but not would, can describe a state»; «didn’t use(d) to … the form with the final -d … you should not use it in exams» → у ключі лише didn’t use to / Did you use to, «didn’t used to» ніде не подано ні як ключ, ні як пастку; be used to + noun / pronoun / -ing; get used to); https://dictionary.cambridge.org/grammar/british-grammar/would («We can’t use would in this way to talk about states»). Past Simple для одноразової події — British Council LearnEnglish «Past habits: used to, would and the past simple» (https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2-grammar/past-habits-used-to-would-past-simple; через WebSearch, curl недоступний): «If something happened only once, we must use the past simple». «Скільки разів → Past Simple» (l3 info: «Not: I used to go to Poltava three times») — висновок з того ж правила, окремого рядка в джерелі не знайдено — верифікатору звірити.
- prefer — https://dictionary.cambridge.org/grammar/british-grammar/prefer (prefer A to B; not than; to-inf і -ing обидва → у вправах форму після prefer не оцінюю); would rather + base form … than — https://dictionary.cambridge.org/grammar/british-grammar/would-rather.
- habit: break a habit, get into the habit, get out of the habit — CD https://dictionary.cambridge.org/dictionary/english/habit; OALD «break the habit of…», «kick the habit» — https://www.oxfordlearnersdictionaries.com/definition/english/habit (kick the habit не вжито: OALD/CD подають його з курінням). cut down on — CD https://dictionary.cambridge.org/dictionary/english/cut-down; skip (a meal) B2 — CD …/skip; snack — CD …/snack; high in — CD …/high; sweet tooth — CD …/sweet-tooth; fussy — CD …/fussy; savoury «UK (US savory)» — CD …/savoury (AmE рушій приймає); fibre «UK (US fiber)» — CD …/fibre; borscht «(also borsch)» — CD …/borscht (пишемо borscht, як e5s3, e6s3); chicken Kiev «(also chicken Kyiv)» — CD …/chicken-kiev; haggis «a dish from Scotland consisting of different sheep’s organs… with oatmeal, onions, and spices» — CD …/haggis; neep (Scottish) — CD …/neeps.
- Наголос (CD UK): in<u>gre</u>dient, <u>sa</u>voury, <u>re</u>gional, <u>na</u>tional, <u>pro</u>tein, carbo<u>hy</u>drate, <u>vi</u>tamin (UK ˈvɪt), <u>bal</u>anced, <u>bit</u>ter, <u>spi</u>cy, <u>crun</u>chy, <u>crea</u>my, <u>fus</u>sy.

**Факти (по два джерела):**
1. UNESCO, 2022 (1 July): «Culture of Ukrainian borscht cooking» — List of ICH in Need of Urgent Safeguarding — https://ich.unesco.org/en/RL/culture-of-ukrainian-borscht-cooking-01852; https://www.npr.org/2022/07/01/1109319174/unesco-declares-ukraine-borsch-ukrainian-heritage; https://en.wikipedia.org/wiki/Borscht. (l1, як у e6s3l6.)
2. Banosh — гуцульська страва: кукурудзяна крупа на сметані, з бринзою; традиційно готували вівчарі на вогні — https://en.wikipedia.org/wiki/Banosh; https://english.nv.ua/life/a-recipe-for-traditional-banosh-50307864.html; https://eng.obozrevatel.com/section-food/news-how-to-properly-cook-traditional-hutsul-banosh-a-dish-known-for-generations-20-01-2024.html.
3. Haggis — національна страва Шотландії; Burns supper 25 January (день народження Robert Burns), вірш «Address to a Haggis»; подають з neeps and tatties (swede/turnip + картопля) — https://www.nationalgeographic.com/travel/article/the-story-behind-haggis-scotland-national-dish; https://www.historic-uk.com/HistoryUK/HistoryofScotland/Haggis-Scotlands-National-dish/; CD haggis, neep.
4. Chicken Kyiv: вершкове масло всередині, панірування; походження спірне («nobody knows for sure») — https://en.wikipedia.org/wiki/Chicken_Kiev; 1979 — Marks & Spencer почав продавати охолоджений chicken Kiev, бестселер — https://www.marksandspencer.com/c/style-and-living/the-history-of-marks-and-spencer-food, https://archive.marksandspencer.com/timeline/food/, en.wikipedia; 2022 — Sainsbury’s змінив написання на Kyiv — https://www.retailgazette.co.uk/blog/2022/03/sainsburys-to-rename-chicken-kiev-to-kyiv-to-support-ukraine/, https://www.grocerygazette.co.uk/2022/03/04/sainsburys-ms-chicken-kiev/ (і The Guardian, 4.03.2022, у списку джерел en.wikipedia).
5. NHS 5 A Day: щонайменше 5 порцій фруктів і овочів; доросла порція 80 g (1 яблуко, 3 heaped tablespoons овочів); свіжі, заморожені, консервовані рахуються; картопля не рахується (mainly starch); сік — максимум 1 порція — https://www.nhs.uk/live-well/eat-well/5-a-day/portion-sizes/, https://www.nhs.uk/live-well/eat-well/5-a-day/5-a-day-what-counts/; BDA https://www.bda.uk.com/foodfacts/fruit_vegetables__how_get_five-a-day.
6. Eatwell Guide: protein — «for the body to grow and repair itself»; щонайменше 2 порції риби на тиждень; pulses — fibre і protein — https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/; https://www.food.gov.uk/sites/default/files/media/document/the-eatwell-guide-accessible-version.pdf. Fibre і травлення — https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/ (сторінка в розділі digestive health; дослівного рядка через пошук не отримав — верифікатору звірити; у l4 — «keeps your digestion healthy»).
7. Uzvar — напій із сушених яблук і груш — https://folklife.si.edu/magazine/foodways-holidays-ukrainian-christmas-kutia-uzvar; https://klopotenko.com/en/mulled-uzvar-dried-fruit-drink/ (l3 — у вигаданому спогаді героїні; про Святвечір не стверджую).
8. У Великій Британії їздять ліворуч (l6 build) — загальновідоме; https://en.wikipedia.org/wiki/Left-_and_right-hand_traffic.

**Друга правильна відповідь — що зроблено:** would для дій ніде не протиставлено used to (multi / sort; у gaps лише з дієсловом стану чи одноразовою подією, або в пропуску немає used to); wouldn’t пасткою не брав (з діями граматичне); «didn’t used to» не подано; після prefer форма дієслова не оцінюється (to-inf і -ing — обидва); «Have you tried to keep» граматичне → пастки keep / kept; у `word` l1 — savoury і salty, l2 — to і over (over у CD Grammar не знайдено, але вживане — не караю), l6 — used і accustomed; build l5, l6 — знак у плитці («earlier?», «left.»), щоб не складалися питання/твердження; build l2 — «sweets than fruit» відсікає контекст body.

**Шкідливі звички:** лише побутові (гризти нігті, пропускати сніданок, перекуси, телефон до півночі), без речовин і без медичних тверджень; поради — від героїв, без моралізаторства. Якщо вчитель хоче куріння (програма — «шкідливі звички») — окремо, з джерелом.

**stats:** e10s3l1 — readWordsPerScreen 58, maxReadWords 124, maxText 121 «нетипово для сім'ї» (z ≈ 2.4–3.2): урок читання з трьома уривками за обсягом П1407 (350–400 слів), усе в межах профілю 10-11 (≤ 65 / ≤ 200 / ≤ 190); сім'я 10 кл. ще майже порожня. Решта уроків — без прапорців.

**Опори (D-019):** l1 №4–6 — відповіді в уривку на тому ж екрані; l1 №7–8, 10 — інфо №3; l3 №2 — повторення e9s1l4 (requires); l4 №7 — текст на екрані; boss — лише з уроків розділу (`pre`).

**Сумнівне / верифікатору:** (1) «I used to go … three times» — правило сформульоване мною з BC; (2) «neeps» = swede (CD) — у тексті «mashed swede and potatoes»; (3) Orysia — героїня, що переїхала з Vinnytsia до Англії (без згадки війни) — делікатність теми; (4) «over» у ключі l2 №10.

