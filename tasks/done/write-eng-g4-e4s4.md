---
claimed_from: todo
claimed_at: 2026-11-19T13:53:41.258Z
id: write-eng-g4-e4s4
type: write-section
subject: eng
grade: 4
section: e4s4
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e4s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Shops and shopping» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Відпочинок і дозвілля: магазини і покупки — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): how much/how many; would like to. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (verifier plan-eng-g4):** функції «попрощатися, вибачитися, подякувати» (ТОП 3–4 с. 62) — у діалозі покупки.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g4-e4s4.js`: `SLID.section("eng", { id: "e4s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e4s4` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e4s4, 2026-11-19.** Файл `content/eng/g4-e4s4.js`, 7 уроків (6 + boss), усі `draft`. Будова — за еталоном e4s1 (intro → Guess! → info списком `<ul>` → завдання → Final; boss — Task 1–6 з `pre`). `uk` не додавав. `requires: ["e4s1l1"]` (hello/goodbye у діалогах e4s4l6 і фіналі). Тип `match` не вжито (ще не в рушії, engine-eng-match у роботі), `build` — 3 рази.

**Програма:** ТОП 3–4, PDF с. 62–63 (PDF завантажено заново, SHA-1 aa8d161a…): «магазини і покупки» (с. 63), функції «вибачитися», «подякувати», «попрощатися» (с. 62), граматика «‘how’ questions for … quantity», «‘would like to’ + infinitive» (с. 63) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf

### Уроки
| id | title | типи завдань |
|---|---|---|
| e4s4l1 | Shops in my town | choice (hyp), choice, sort, multi, word, gaps |
| e4s4l2 | In a shopping centre: signs and floors | choice (hyp), choice ×3, gaps, pick (Find the mistake), word |
| e4s4l3 | How many? How much? | choice (hyp), sort, gaps ×2, choice, pick (Find the mistake), build |
| e4s4l4 | Prices: how much is it? | choice (hyp), stress, gaps, word, choice ×2 |
| e4s4l5 | I’d like… I’d like to buy… | choice (hyp), choice, gaps ×2, word, build |
| e4s4l6 | Buying a present: a dialogue | choice (hyp), choice ×3 (2 — читання «part 1/2 of 2»), stress, order, gaps |
| e4s4l7 | Shopping day (boss, значок e4s4boss «Smart shopper») | choice ×3, gaps ×2, build |

### Форми й норми (словники, curl; відкрито 2026-11-19)
- supermarket /ˈsuː.pəˌmɑː.kɪt/, bakery /ˈbeɪ.kər.i/, market (1-й склад) — CD https://dictionary.cambridge.org/dictionary/english/supermarket, …/bakery
- bookshop «mainly UK (US usually bookstore)» — CD …/bookshop; sweet shop «UK» — CD …/sweet-shop; toy shop — OALD toy_1 «a toy shop/store», shoe shop «(British English)» — OALD shop_1 https://www.oxfordlearnersdictionaries.com/definition/english/shop_1, https://www.oxfordlearnersdictionaries.com/definition/english/toy_1
- chemist «UK also chemist’s; US drugstore» — CD …/chemist (у розділі не вжито, щоб не перевантажувати словник уроку)
- shopping centre «UK (US shopping center)» — CD …/shopping-centre; shop assistant «UK (US salesclerk)» — CD …/shop-assistant; assistant /əˈsɪs.tənt/ — CD …/assistant
- the ground floor «UK (US usually first floor)», B1 — CD …/ground-floor; OALD ground-floor: «In British English the floor of a building at street level is the ground floor, the one above it is the first floor» — https://www.oxfordlearnersdictionaries.com/definition/english/ground-floor; first floor «(British English) the level of a building above the ground level» — OALD …/first-floor; «on the … floor: Her office is on the second floor» — OALD floor_1
- lift (BrE) — glossary/eng.md, facts №3. closed «especially of a shop … not open» з синонімом shut — OALD …/closed; тому в `word` (l2) ключ ["closed", "shut"]
- exit «a way out of a public building» — OALD exit_1
- pound «(symbol £) … worth 100 pence» — OALD pound_1; «There are 100 pence in one pound», plural pence, скорочення p — CD …/penny
- hryvnia: у CD і OALD статті **немає**. Wiktionary «(plural hryvnias or hryvni or hryven) The currency of Ukraine, symbol ₴» — https://en.wiktionary.org/wiki/hryvnia; en.wikipedia Ukrainian hryvnia — знак ₴, запис сум «₴20, ₴50» — https://en.wikipedia.org/wiki/Ukrainian_hryvnia. Пишу «₴60» (знак перед числом, як £) і «hryvnias»; слово не оцінюється
- fifteen /ˌfɪfˈtiːn/, fifty /ˈfɪf.ti/, thirteen /θɜːˈtiːn/, thirty /ˈθɜː.ti/ — CD …/fifteen, …/fifty, …/thirteen, …/thirty (stress l4)
- sorry /ˈsɒr.i/, present (noun) /ˈprez.ənt/ — CD …/sorry, …/present (stress l6)
- bread [U], milk [U], rice [U] — CD …/bread, …/milk, …/rice; juice — CD A1 [U] → «an apple juice» прибрав, лишив «a cheese sandwich»; sugar, cheese, juice, water як «two waters» не беру у вправи how much/how many (бувають злічуваними)
- much — uncountable, many — countable: CD Grammar «Much, many, a lot of…» — https://dictionary.cambridge.org/grammar/british-grammar/much-many-a-lot-of-lots-of-quantifiers («We use much with uncountable nouns and many with countable nouns»; «How many eggs are in this cake?»)
- would like: CD Grammar «Would like» — https://dictionary.cambridge.org/grammar/british-grammar/would-like («We use would like or ’d like to say politely what we want…»; «Verbs that follow would like are in the to-infinitive form»; «We use Do you like …? to ask about preferences in general»)
- here you are — CD phrase «here (you are/go)» — https://dictionary.cambridge.org/dictionary/english/here-you-are; Have a nice day! — CD nice — https://dictionary.cambridge.org/dictionary/english/nice

### Друга правильна відповідь — що відсікав
- l1 word «bakery»: supermarket теж продає хліб → умова «It’s a small shop. You can buy only bread and cakes here.»; baker’s — у ключі.
- l2 word «closed»: shut (OALD — синонім) у ключі.
- l4 word «How … is the book? – It’s £6»: old/big відсікає відповідь-ціна.
- l5: «I’d like/love…» — `word` питає `would` (у «… you like a bag?» інших форм немає), а не `like`; «Do you like a bag?» як варіант пропуску не дав (граматично можливе, хоч і не пропозиція) — пастки Are/Is.
- how much/how many — лише перед злічуваним у множині чи явно незлічуваним (eggs, bananas, oranges, carrots, sandwiches, apples ↔ milk, water, bread, rice).
- Ключі `word` прогнано через `SLID_LANG.wordVerdict(…, "en")`, `build` — через `check` (з пасткою — false).

### Спірне / для верифікатора
1. **Поверхи — британська система.** Сцени з поверхами (l2, boss Task 2) — в Англії (Emma, shopping centre «in the city»), бо в Україні рахують інакше (перший поверх — на рівні вулиці; en.wikipedia Storey: «Russia, and other ex-Soviet states» — одне джерело, тож в урок цей факт не виносив). «at street level» — з OALD ground-floor; ground floor — B1 (CD), але це тема програми.
2. **e4s4l2 hyp** «In Britain, which floor is at street level?» — здогадка до info.
3. **Опора завдань:** l1 sort «a ball», «a doll» — слова Pre-A1 (3 кл.), в info l1 — «toys and games»; boss Task 4 «cars» — те саме. l3 sort «oranges, carrots» — нові для теорії, але правило «-s → many» на екрані info l3 (#3). l4 Final спирається на info #6 (is/are) і цінник на екрані.
4. **e4s4l3 info:** «After how many – a word with -s» — спрощення для A1 (неправильної множини в розділі немає). Пулу — не давати children, people без уточнення.
5. **Прийменник «at the bakery»** у тексті (не оцінюється); у `pick` l2 оцінюю лише «on the second floor» (OALD floor_1).
6. Сюжет: один герой — одне місце (pitfall e4s1): Andrii — Kyiv, Sofiia — його сестра; Oksana і Dmytro — село біля Полтави, купують у Полтаві (як у e4s1l4 «On Saturdays we go to Poltava by bus»); Emma, Tom — містечко в Англії; Mariia — Kharkiv; Taras — Lviv.
7. Плейтест не запускав (немає Python playwright; build — оркестратор).

### validate / stats
- `node tools/validate.mjs --section e4s4` — 0 помилок, 0 попереджень (було readWordsPerScreen 34 у l6 — скоротив і додав здогадку).
- `node tools/stats.mjs --subject eng` — прапорців в e4s4 немає; longWordShare 0.014–0.106 (≤ 0.12). Найближче до меж: l2 слів/екран 29 з 30, l6 longWordShare 0.106 (assistant, birthday, Grandma).

## Верифікація
**verifier-e4s4, 2026-11-19.** Вердикт: **verified**, усі 7 уроків `verified` (не approved). Звіт — reports/verify/e4s4.md.
- Програма ТОП 3–4 с. 52, 62–63 звірена (PDF заново, SHA-1 aa8d161a…); факти (£1 = 100p, гривня ₴, британські поверхи, would like, how much / how many, назви магазинів BrE) — CD + OALD (curl) і en.wikipedia + Wiktionary (гривня), URL у звіті.
- Усі 44 оцінювані завдання розв'язано самостійно; другої правильної відповіді немає; `word` (wordVerdict) і всі перестановки `build` прогнано через app/lang.js; опора D-019 є в кожного.
- Правки (4): l2 «at street level» → «you walk in from the street» (рівень A1); l3 Final — логіка діалогу (ключі ті самі); l4 #7 hint більше не видає відповідь; статуси й meta.factcheck.
- Спірне автора 1–6 прийнято (обґрунтування — звіт §2–§4). Авторське право: 8 фрагментів, збігів немає.
- validate --section e4s4: 0 помилок, 0 попереджень; stats: прапорців в e4s4 немає. Плейтест — після build (оркестратор).
