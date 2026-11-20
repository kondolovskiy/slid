---
claimed_from: todo
claimed_at: 2026-11-19T14:22:09.917Z
id: write-eng-g5-e5s3
type: write-section
subject: eng
grade: 5
section: e5s3
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e5s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Харчування» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: продукти харчування; улюблені страви; страви в Україні та країнах виучуваної мови — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): countable/uncountable; some/any; much/many/a lot of; would like. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g5):** рецепт як текст для читання; borshch (КМУ № 55) чи borscht (Cambridge Dictionary) — узгодити з glossary/eng.md до написання. `requires` на уроки 4 кл. — за таблицею reports/verify/plan-eng-g5.md §6, коли ті уроки будуть.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s3.js`: `SLID.section("eng", { id: "e5s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e5s3, 2026-11-19. Файл: content/eng/g5-e5s3.js (status draft, factcheck self). 7 уроків (6 + фінал), назви — дослівно з content/eng/plan.js.

**Уроки (типи завдань):**
- e5s3l1 «Food and drink: my favourite meals» — choice (hyp), sort, choice, stress, match (текстовий, питання ↔ відповіді), gaps, word, gaps (Final).
- e5s3l2 «An apple or some bread? Countable and uncountable» — choice (hyp), sort, gaps, choice, pick (2 помилки), build (2 порядки в answer), word, gaps.
- e5s3l3 «Is there any milk? Some and any» — choice (hyp), gaps, choice, multi, pick, build, gaps.
- e5s3l4 «How much? How many? A lot of» — choice (hyp), gaps, choice, pick, build (keepCase), word, gaps.
- e5s3l5 «Would you like some juice? Offers» — choice (hyp), choice, gaps, match (текстовий), word, build (keepCase), gaps (меню кафе в Києві).
- e5s3l6 «Dishes from Ukraine and the UK» — choice (hyp), info, текст для читання на 3 екрани (choice, choice, multi; ч. 3 — рецепт млинців до Pancake Day), match (halves), word (borscht), gaps.
- e5s3l7 «Food fair» (boss, значок e5s3boss) — 6 завдань, по одному на урок, `pre`.
`match` — лише текстовий (без картинок), тож img/eng/e5s3/ і `credits` не потрібні.

**requires** (plan-eng-g5 §6: e4s4, e4s2, e4s8; id звірено у файлах): e4s4l3 (How many? How much?), e4s4l5 (I’d like), e4s2l5 (some / any з there is/are), e4s8l1 (A party at a café).

**Друга правильна відповідь — що прибрано:**
- some / any у питаннях не оцінюю (some можливе в питанні з очікуванням «так» і в пропозиції — CD Grammar some); у питанні пастка — `a` чи `many`, не `some`. У пропозиціях (l5) some — «usually», не оцінюється проти any.
- much / many у (+) не роблю пасткою проти a lot of (CD: у формальному стилі «many» в (+) можливе) — пастка лише хибна злічуваність (`much sandwiches`, `much eggs`).
- `a` + слово [C or U] не даю: apple, egg, banana, tomato, potato, cheese, cake, soup, juice, tea у CD — [C or U]; пастки a/some лише з sandwich [C], pancake(s) [C], bread / rice / flour [U]. juice, cheese, cake, chocolate — поза how much / how many (inbox verifier-e4s4).
- «Yes, thank you» на пропозицію правильне, тож пастка — «Yes, I do» / «No, I don’t» (відповідь на Do you like…?).
- `word`: «breakfast» (контекст 8 o’clock in the morning), «potatoes», «many», «would», borscht/borshch/borsch — інших форм немає; tea/supper (BrE-регіональні) не питаю.
- build: усі перестановки (з extra) прогнано через app/lang.js у node — прийнято лише порядки з `answer` (l2 — обидва порядки «some rice and an apple» / «an apple and some rice»); питання з Would / How — `keepCase: true` і плитка з великої (inbox verifier-e4s8).

**Джерела форм (curl, 2026-11-19):**
- Злічуваність CD: bread [U] https://dictionary.cambridge.org/dictionary/english/bread; milk [U] …/milk; rice [U] …/rice; water [U] …/water; flour [U] …/flour; pasta [U]; porridge [U] …/porridge; borscht [U] …/borscht; sandwich [C] …/sandwich; pancake [C] …/pancake; dumpling [C]; recipe [C]; biscuit [C] UK …/biscuit; apple, banana, tomato, potato, egg, cheese, cake, soup, juice ([U] + [C] «an amount or type of juice»), tea, sugar — [C or U].
- OALD: bread [uncountable] https://www.oxfordlearnersdictionaries.com/definition/english/bread; rice [uncountable] …/rice; flour [uncountable] …/flour; biscuit_1 (British English) …/biscuit_1; fridge (especially British English) …/fridge; porridge (especially British English) [uncountable] …/porridge; pancake [countable] …/pancake; juice [uncountable, countable] …/juice.
- CD Grammar: «Many is used with countable nouns in negative sentences and questions… A lot of can be used to mean much or many» — https://dictionary.cambridge.org/grammar/british-grammar/much-many-a-lot-of-lots-of; «In affirmative clauses we sometimes use much and many in more formal styles» — https://dictionary.cambridge.org/grammar/british-grammar/much-many-a-lot-of-lots-of-quantifiers; some — «affirmative sentences and in questions (usually expecting the answer ‘yes’)… (we use any in questions and negative sentences)» — https://dictionary.cambridge.org/grammar/british-grammar/some; would like — «especially when making offers and requests» — https://dictionary.cambridge.org/grammar/british-grammar/would-like; countable/uncountable — https://dictionary.cambridge.org/grammar/british-grammar/nouns-countable-and-uncountable.
- Наголос (CD UK): breakfast, dinner, favourite, recipe, beetroot — 1-й склад; potato, tomato — 2-й (pəˈteɪ.təʊ, təˈmɑː.təʊ).

**Факти про країни (self, потребують звірки верифікатором):**
- borscht — «a type of soup made from beetroot» (CD https://dictionary.cambridge.org/dictionary/english/borscht; OALD «a soup made from beetroot», «British English also borsch» https://www.oxfordlearnersdictionaries.com/definition/english/borscht). Назва елемента ЮНЕСКО — «Culture of Ukrainian borscht cooking», 2022 (https://ich.unesco.org/en/RL/culture-of-ukrainian-borscht-cooking-01852; https://ich.unesco.org/en/decisions/5.EXT.COM/5) — у тексті уроку не вжито, лише як підстава написання.
- varenyky — українські вареники, «stuffed with potato, cheese, or other filling», plural only (Wiktionary https://en.wiktionary.org/wiki/varenyky; en.wikipedia https://en.wikipedia.org/wiki/Varenyky — «traditional Ukrainian dumplings… most often only consisting of potato»). У тексті: «Inside, there is potato or cheese.»
- fish and chips — «often eaten in the UK as a takeaway food» (CD https://dictionary.cambridge.org/dictionary/english/fish-and-chips); «usually bought in the place where it has been cooked and eaten at home, etc., especially in the UK» (OALD https://www.oxfordlearnersdictionaries.com/definition/english/fish-and-chips). chips — «a long, thin piece of potato that is fried» (CD chip).
- porridge — «made from oats boiled in milk or water, eaten hot for breakfast» (CD); OALD «(especially British English)».
- Pancake Day — CD «UK informal… the day before Lent… when pancakes are traditionally eaten» (https://dictionary.cambridge.org/dictionary/english/pancake-day); OALD «when people traditionally eat pancakes» (https://www.oxfordlearnersdictionaries.com/definition/english/pancake-day). Дату (лютий–березень) не пишу.

**borshch / borscht (glossary «Не вирішено»):** у тексті — borscht (CD, OALD, назва елемента ЮНЕСКО); у ключі `word` — borscht, borshch (КМУ № 55), borsch (OALD BrE also). Пропозиція TERM — в inbox-рядках оркестратору.

**Герої (за inbox verifier-e4s2):** Taras — Lviv, пише Emma в England; Oksana — бабуся в Zelena Dolyna; Andrii з татом — Kyiv (fridge, без деталей житла); Mariia — пікнік у Kharkiv; Dmytro — гість Тараса; Sofiia — кафе «Smachno» у Kyiv (ціни вигадані, ₴).

**Спірне / для верифікатора:**
1. e5s3l6, match (екран 7) і word (екран 8) питають деталі тексту з попередніх екранів (ч. 1–3). Це підсумок-культура (sk cult) після останнього уривка, а не питання до уривка; якщо верифікатор вважає це порушенням «Тексти для читання» — перенести тексти-опори на екран або зробити `hyp`.
2. e5s3l2 info вводить пару термінів countable / uncountable (назва уроку з плану) — рахую як один термін.
3. stats: e5s3l2 readWordsPerScreen 21 (z=−2.3, у межах профілю [5; 35]) — урок граматики з короткими вправами; e5s3l6 readWordsPerScreen 35, maxText 63 (z ≈ 2.2–2.6, у межах профілю 5: maxText ≤ 85) — урок читання з рецептом. Без прапорців поза профілем.
4. e5s3l1 word: «At 8 o’clock in the morning, I have ___ : eggs and milk.» — BrE-регіональні «tea» / «supper» не підходять до ранку; ключ лише breakfast.
5. Рецепт (l6) — власний, мінімальний (flour, eggs, milk), з «Ask an adult to help you!».

**Перевірки:** `node tools/validate.mjs --section e5s3` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject eng` — див. п. 3. Build не запускав.

## Нотатки верифікатора
verifier-e5s3, 2026-11-20. Звіт: reports/verify/e5s3.md. **Вердикт: verified** (7 уроків). Факти (borscht, varenyky, fish and chips, porridge, Pancake Day) — по 2+ відкриті джерела (CD, OALD, en.wikipedia, Wiktionary, UNESCO через WebSearch); програма — МП-ІМ с. 16, 20–22 (PDF завантажено заново). Збігів з опублікованими текстами немає (8 запитів).
Правки (мої, мінімальні): 1) boss T1 — BrE *dinner* опівдні (CD, OALD) давав другу правильну відповідь → ранок, ключ breakfast; 2) l3 build — додано порядок «Haven’t we got any eggs?»; 3) l6 — після ч. 3 вставлено info «Taras and Emma’s poster», щоб match і word не питали деталей з попередніх екранів (style/eng.md «Питання до тексту»; спірне 1 автора); 4) Dmytro → Ostap (Dmytro — брат Оксани в e4s1–e4s7); 5) l4 Final «after the picnic» → «at the picnic»; 6) статуси verified, factcheck.
validate --section e5s3: 0 помилок, 0 попереджень; stats — без «поза профілем». Плейтест не запускався (немає в manifest до build; немає Python playwright). TQ не додавав. borscht у тексті + borshch/borsch у ключі — приймаю (TERM для куратора — у відповіді оркестратору).
