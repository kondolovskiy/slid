---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.689Z
id: write-eng-g6-e6s2
type: write-section
subject: eng
grade: 6
section: e6s2
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: review
claimed_by: writer-e6s2
created: 2026-11-19
source: design-eng
---
# Написати розділ «Покупки» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: відвідування магазинів; види магазинів; асортимент товарів; гроші — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): Quantity: a few, both, all, no (A2); too + adjective (It’s too big); purpose: to-infinitive (Why? To buy some bread); повторення — how much / how many (e4s4l3, e5s3l4), Can I…? / Could I…? (e5s2l6), I’d like (e4s4l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** Типи магазинів — BrE з апострофом: the chemist’s (CD «UK», US drugstore), the newsagent’s (CD «UK»), the baker’s / the butcher’s — один і той самий магазин двома назвами (chemist’s / chemist, baker’s / bakery) кладеш у ключ. try on — B2 (OALD): у назвах не виносити, у діалозі — з опорою. Гроші: £1 = 100 pence, гривня — hryvnia, мн. hryvnias, ₴ (inbox writer-e4s4, verifier-e4s4). Герої: у Zelena Dolyna один магазин (e5s7) — контраст із містом (Mariia, Kharkiv); сцена з фунтами — в Англії (Emma). no + іменник vs not any — обидва правильні: у `gaps` контекст має відсікати другий. `requires`: e4s4l1, e4s4l4, e4s4l5, e5s3l4, e5s2l6. Гроші (l4): ціни в pounds, pence і hryvnias уже є в e4s4l4 — не повторювати, а розширити: скільки разом, change (CD A2 «the money that is returned…»), Here’s your change (verifier-curate-eng-plan-g6). Функція «пропонувати, приймати, відхиляти пропозицію» (с. 20): Can I help you? — Yes, please / I’m just looking, thank you (OALD look_1 «be just looking»; приклад словника дослівно не брати). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s2.js`: `SLID.section("eng", { id: "e6s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e6s2, 2026-11-20.** Файл `content/eng/g6-e6s2.js`, 7 уроків (6 + boss), усі `draft`. validate --section e6s2: 0 помилок, 0 попереджень.

**Уроки (id — нові):**
- e6s2l1 «At the chemist’s, at the newsagent’s: types of shops» — chemist’s, newsagent’s, butcher’s, baker’s (= bakery, e4s4l1), greengrocer’s; intro — контраст Kharkiv (Mariia, багато магазинів) / Zelena Dolyna (один магазин, e5s7); `stress` chemist, newsagent, magazine, greengrocer (усі підкреслені в info #3).
- e6s2l2 «Why do you go there? To buy some bread» — purpose to-infinitive; «Find the mistake» *for buy*.
- e6s2l3 «A few, both, all, no: a shopping list» — no = not any, a few + plural, both (два) / all (три і більше), both of them.
- e6s2l4 «Paying and getting change: pounds and hryvnias» — розширення e4s4l4: ціни на кшталт £3.50 → three pounds fifty, coin / note, change, «Here’s your change», How much does it cost?, обчислення решти (₴ і £).
- e6s2l5 «Can I help you? In a clothes shop» — offer / accept / refuse: Yes, please / No, thanks. I’m just looking; Could I try it on, please?; Have you got it in…?; changing room.
- e6s2l6 «It’s too big! Too small, too expensive» — too + adjective vs very; «I’ll take the blue one, because…» (аргументувати вибір, plan-eng-g6).
- e6s2l7 boss «A shopping day in Lviv» (Taras, Ostap) — Task 1–6, `pre` на l1…l6; значок e6s2boss «Shopping expert».

**`requires`:** e4s4l1, e4s4l4, e4s4l5, e5s3l4, e5s2l6 (з задачі; усі id існують).

**Словники (curl, 2026-11-20):**
- chemist (shop) — CD A2 «UK (UK also chemist's) (US drugstore)»; OALD chemist «(British English)… I'll get it at the chemist's» — https://dictionary.cambridge.org/dictionary/english/chemist · https://www.oxfordlearnersdictionaries.com/definition/english/chemist
- newsagent — CD «UK… (also newsagent's) a shop that sells newspapers and magazines»; OALD «(British English also paper shop) a shop that sells newspapers, magazines, sweets» — …/english/newsagent
- baker (shop) — CD «UK (US bakery)»; butcher — CD «(UK also butcher's) a shop where butchers work»; greengrocer — CD «mainly UK» — …/english/baker, /butcher, /greengrocer
- pharmacy — CD B1 «a shop… in which medicines are prepared and sold» (в ключі не потрібна: `word` питає м'ясний магазин).
- change — CD A2 «the money that is returned to someone who has paid…»; coin — CD B1 («UK a 10p/ten pence coin, a pound coin»), OALD B1; note — CD B1 «UK (US bill) a piece of paper money», OALD — …/english/change, /coin, /note
- cost — CD A2 «How much does this book cost?» (приклад не копійовано); too — CD A1 «more than is needed or wanted», OALD A1; both, all, no — OALD A1; few — OALD A1/A2, CD A2; size — CD A2, OALD A2; try on — CD A2 (OALD у плані — B2; дано з опорою «try on = put on in a shop»); changing room — CD є; cheap, expensive — A1.
- be just looking — OALD look_1 «used in a shop to say that you are not ready to buy something» (приклад OALD «‘Can I help you?’ ‘I'm just looking, thank you.’» дослівно не взято: у нас «No, thanks. I’m just looking.»).
- altogether — CD B1, OALD B2 → не вжито (замість — «together» в hint/fbText).
- Граматика: CD Grammar «No, none and none of» («We use no directly before nouns»), «Both» («Not: The both»), «In order to», «Too» — https://dictionary.cambridge.org/grammar/british-grammar/no-none-and-none-of · …/both · …/in-order-to · …/too
- Наголос (CD UK): ˈkem.ɪst, ˈnjuːzˌeɪ.dʒənt, ˌmæɡ.əˈziːn, ˈɡriːŋ.ɡrəʊ.sər, ˈbʊtʃ.ər, ˈtʃeɪn.dʒɪŋ ˌruːm; ex<u>pen</u>sive.

**Факти про гроші (два джерела кожен):**
- £1 = 100p — facts/inbox writer-e4s4, verifier-e4s4 (OALD pound_1, CD penny).
- Монети £1 і £2, 50p; банкноти Bank of England £5, £10, £20, £50 — https://en.wikipedia.org/wiki/Coins_of_the_pound_sterling («values range (for coins in circulation) from one penny to two pounds»), https://en.wikipedia.org/wiki/Banknotes_of_the_pound_sterling («Series G … £5, £10, £20 and £50»), https://www.bankofengland.co.uk/banknotes (через WebSearch: «four denominations… £5, £10, £20 and £50»; сам хост з контейнера не резолвиться), CD coin «a pound coin».
- Монета ₴10, банкнота ₴100 — https://en.wikipedia.org/wiki/Ukrainian_hryvnia (coins: 50 kopiyka, ₴1, ₴2, ₴5, ₴10; banknotes від ₴20), НБУ (WebSearch): https://bank.gov.ua/en/uah/obig-banknote, https://bank.gov.ua/news/all/natsionalniy-bank-zavershuye-onovlennya-banknotno-monetnogo-ryadu-grivni (банкноти 1–10 грн замінено монетами). ₴20 у розділі як «note» не вжито, щоб не залежати від дат виведення.
- hryvnia, мн. hryvnias, ₴ — inbox writer-e4s4 / verifier-e4s4.
- Розміри взуття 36–40 у Kyiv (l6, Matvii) — європейська шкала; фактом про країну не подано, лише числа в задачі.

**Перевірки:**
- Кожне оцінюване завдання розв'язано двічі; `SLID_LANG.check(solution)` — true для всіх мовних екранів.
- Усі 6 `build` перебрано (усі перестановки всіх підмножин tiles + extra через `SLID_LANG.check`, lang "en"): приймаються лише порядки з `answer` (l3 — обидва порядки «no bread … a few apples»; l5 — try on this jacket / try this jacket on). Відкинуто й не прийнято: «To buy a magazine I’m going to the newsagent’s» (без коми, як PITFALL verifier-e4s6); питальні «Are these trainers too big» / «I could try…» відсікає `keepCase` + велика перша плитка (style e5s1).
- l2 build: пастку `for` замінено на `buys` — з `for` дитина склала б правильне «I’m going to the newsagent’s for a magazine» без плитки «to buy».
- Друга відповідь: «All shops are open today» (загальне речення) → «Both / All of them» (l3 Final, boss T3); `word` «There’s ___ cheese» — лише no; «to» в l2 і boss T2 — посеред речення, без іншого граматичного слова; ціни — у choice, без «two forty» серед варіантів (Cambridge Dictionary blog: «three fifty» — теж поширено).
- Авторське право: WebSearch з лапками — «I'm going to the newsagent's to buy a magazine», «Could I try on this jumper, please?» + «The changing rooms are over there», «It's three pounds fifty» + «Here's your change» + «seventy pence», «I'll take the T-shirt, because it's cheap», «There is only one shop in my village. I go there every day to buy bread and milk», фрагменти фіналу l6 — збігів немає.
- validate: 0/0. euphony — нічого.

**stats (профіль eng «5-6», 6 кл.):** усі метрики в межах профілю (екранів 7–10, maxText ≤ 63 ≤ 110, longWordShare ≤ 0.13 ≤ 0.14). Прапорці «нетипово для сім'ї» (l1 longWordShare z=2.1; l5, l6 readWordsPerScreen; l6, l7 maxReadWords/maxText) — сім'я поки складається з уроків 4–5 кл., а 6 кл. за таблицею style/eng.md має довші тексти (речення ≤ 12, info ≤ 60); l1 — назви магазинів newsagent’s, greengrocer’s (тема). Калібрування — style-sync 6 кл.

**Герої:** Mariia (Kharkiv, мама й тато, без братів і сестер), Oksana і Dmytro (Zelena Dolyna, один магазин; Poltava для покупок; Grandad, Mum), Andrii і Sofiia (flat, Kyiv), Taras (Lviv, little sister Zlata, тато; друг Ostap), Emma, її mum і Tom (town in England). Нові: **Harry** — продавець у newsagent’s у місті Emma (l4); **Matvii** — хлопець у Kyiv у взуттєвому (l6), стосунку до героїв не задано. Зовнішність не описано (ані зріст, ані одяг як ознака; розміри — лише одяг/взуття в магазині).

**Спірне / для верифікатора:**
1. l2: «for + noun» на мету («go to the baker’s for bread») не пояснено; у pick l1 трапляється «for bread» як звичайний текст, не як завдання. Варіанти «For buy» — хибні.
2. l6 info «very big → It’s big, but maybe it’s OK» — спрощення різниці too / very; оцінювані завдання на too / very — лише з явним контекстом (ціна більша за гроші).
3. l4 `word` «Tom’s change is ___p» — ключ «40» (число); інші записи (forty) не прийнято.
4. «I’ll take…» — will як рішення в мить мовлення подано готовою фразою (I’ll = I will. You decide now.).
5. try on — у задачі «B2 (OALD)», у CD — A2; дано з поясненням в info l5.
