---
claimed_from: todo
claimed_at: 2026-11-19T13:53:41.198Z
id: write-eng-g4-e4s2
type: write-section
subject: eng
grade: 4
section: e4s2
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e4s2
created: 2026-11-19
source: design-eng
---
# Написати розділ «My home» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Помешкання: види помешкань, умеблювання — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): there is/are; prepositions of place. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g4-e4s2.js`: `SLID.section("eng", { id: "e4s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e4s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e4s2, 2026-11-19. Файл `content/eng/g4-e4s2.js`, зображень немає (`img/eng/e4s2/` не створено). Статус уроків — draft. Будова, шаблонні інструкції, списки правил `<ul>` з «→», «The underlined part is strong», boss з `pre` — за еталоном e4s1.

### Уроки (6 + фінал; теми — рядки `plan` з content/eng/plan.js)
| id | title | екрани (типи) | граматика / функція |
|---|---|---|---|
| e4s2l1 | Homes: a house or a flat? | 9: intro, choice hyp, info, choice, choice, gaps, stress, word, multi (Final) | house, flat, block of flats, lift, stairs, balcony, garden; has got (повторення e4s1l2) |
| e4s2l2 | Rooms: there is, there are | 10: intro, choice hyp, info, choice, info, gaps, pick (Find the mistake), build, word, gaps (Final) | kitchen, living room, bedroom, bathroom, hall; there is / there’s / there are |
| e4s2l3 | Furniture in my room | 10: intro, choice hyp, info, choice, info, gaps, stress, word, sort, gaps (Final) | bed, desk, chair, wardrobe, shelf, lamp, carpet; furniture (незлічуване); shelf → shelves |
| e4s2l4 | Where is the cat? In, on, under, next to | 10: intro, choice hyp, info, pick, choice, gaps, info, gaps, build, choice (Final) | prepositions of place; Where is…? – It’s… / Where are…? – They’re… |
| e4s2l5 | Is there a lamp? Are there any books? | 10: intro, choice hyp, info, gaps, choice, info, gaps, build, word, gaps (Final) | Is there…? Are there any…? короткі відповіді; some / any |
| e4s2l6 | My dream room: reading and writing | 10: intro, choice, multi, choice (текст у 3 частинах), choice (весь текст), info (план допису), gaps, build, word, gaps (Final) | читання (101 слово, ТОП с. 60: 100–150) і письмо зразком |
| e4s2l7 | Welcome to my new home! (boss, `e4s2boss` «Home designer») | 7: intro + 6 завдань (choice, gaps, word, gaps, choice, build), `pre` = l1…l6 | усі теми |

`requires` розділу: e4s1l2 (have got / has got — l1, boss T1), e4s1l4 (village — l1 gaps), e4s1l5 (I live in… — l1, l6).
Герої й місця — ті самі, що в e4s1 (один герой — одне місце): Andrii — flat у Києві, кімната з сестрою Sofiia; Oksana — house у Zelena Dolyna (бабуся живе з ними, як у e4s1l2), брат Dmytro, кішка Murka; Emma — house з садом у містечку в Англії (3 bedrooms); Mariia — flat у Харкові; Taras — нова квартира у Львові, кіт Bars. Україна — у кожному уроці. Фактів про країни немає.

### Опора для завдань (D-019)
Кожне оцінюване завдання спирається на `info` того ж уроку або на текст на екрані. Неочевидні місця:
- l1 екр. 5 (lift) — info екр. 3 («it goes up and down», «stairs – you walk up them»); l1 екр. 8 word stairs — та сама опора.
- l3 екр. 6 і boss T3 (shelves) — info екр. 5 (shelf → shelves).
- l4 екр. 6 і boss T4 — прийменники за здоровим глуздом із підказкою в тексті («It’s dark there» → under; carpet on the floor; chair next to the desk), опора — info екр. 3.
- l6 екр. 3 multi — лише частина 2 тексту на тому ж екрані; екр. 5 (про весь текст) — після останньої частини, на загальний зміст (style/eng.md «Тексти для читання»); «dream room» пояснено в intro.
- boss T6 (build there is a sofa) — l2 info екр. 5 і l6.
Здогадки `hyp: true` — екр. 2 у l1–l5 (наступний info дає відповідь).

### Друга правильна відповідь — перевірено двічі
- **some / any у питаннях не оцінюю:** CD Grammar «Some and any» — some в питаннях можливе, коли чекаємо «так» («Has he got some homework?»). Тож у gaps some/any — лише ствердження (some) і заперечення (any); питання з any — лише зразком і в `build` (порядок «there are any posters…» неграматичний, тож порядок однозначний).
- **Короткі відповіді:** «Yes, there is.», не «Yes, there’s» — CD Grammar «Contractions»: «We don’t use affirmative contractions at the end of clauses». У gaps/choice немає пари «there is / there’s» в одному пропуску (крім boss T5, де «Yes, there’s.» — хибний варіант за цим правилом).
- **There is + два однини** («There’s a bed, a desk and a chair») навмисно не вживав: CD допускає однину перед переліком, а це суперечило б правилу «two or more → there are». «There’s lots of…» (CD: розмовне, «could be considered incorrect in formal writing») — теж не вживав; у pick «There [is] two bedrooms» — помилка за CD («There are is the plural form»).
- `build`: l2 і l6 — обидва порядки («There are… in my flat» / «In my flat there are…») у `answer`; питальний порядок «Are there two bedrooms in my flat» відсікає контекст «Andrii writes about his flat» (ствердження). l4 «Where are my books?» і l5 «Are there any posters in your room?» — єдиний порядок. Пастки `extra` — is / are / some (інша форма, не інше написання).
- `word`: stairs, kitchen, desk (+ table: «Andrii does his homework at it» — стіл теж правильна відповідь у житті), are, are, shelves — без кінцевого знака. wordVerdict (node, app/lang.js): «Stairs.» ok, «stair» → Almost, «Are.» ok, «is» → ні. «steps» на stairs — ні (слова не було в уроці; у CD steps — переважно надворі); вирішив не додавати.
- AmE: wardrobe (US closet) і lift (US elevator) у `word` не питаю; flat/lift/garden — лише в тексті та choice/gaps, де AmE-слово не варіант. yard (CD «US (UK garden)») — не варіант.

### Джерела форм (curl, 2026-11-19)
- CD (позначки, рівень, наголос UK): https://dictionary.cambridge.org/dictionary/english/garden (/ˈɡɑː.dən/, A1), …/balcony (/ˈbæl.kə.ni/, B1), …/kitchen, …/bedroom, …/bathroom, …/living-room (A1), …/hall («UK (also hallway) the area just inside the main entrance»), …/wardrobe (/ˈwɔː.drəʊb/, B1), …/carpet (/ˈkɑː.pɪt/), …/furniture (/ˈfɜː.nɪ.tʃər/), …/sofa, …/shelf («plural shelves»), …/lamp, …/desk, …/poster, …/window, …/computer, …/stairs (A2 «a set of steps that lead from one level of a building to another»), …/block-of-flats («UK»), …/lift («UK (US elevator)»), …/yard («US (UK garden)»), …/next-to (A2), …/under (A1).
- OALD (другий словник для наголосу й форм): https://www.oxfordlearnersdictionaries.com/definition/english/garden_1, …/balcony, …/kitchen, …/wardrobe («in British English built into the wall»), …/carpet_1, …/sofa, …/bedroom, …/bathroom, …/furniture («[uncountable]»), …/shelf («plural shelves»), …/block_1 («(British English) a block of flats»), …/lift_2 («let’s take the lift», «in a lift»), …/desk («that you sit at to read, write…»).
- CD Grammar: «There is, there’s and there are» — https://dictionary.cambridge.org/grammar/british-grammar/there-is-there-are ; «Some and any» — https://dictionary.cambridge.org/grammar/british-grammar/some-and-any ; «Contractions» — https://dictionary.cambridge.org/grammar/british-grammar/contractions
- ТОП 3–4, PDF с. 62 (інвентар 3 кл.: there is(n’t)/are(n’t); some/any in questions and negative statements; basic prepositions of place; irregular plural; 4 кл.: «Помешкання — види помешкань, умеблювання»), SHA-1 aa8d161a330bbede5b21484f47be92d12548f785 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf
- Авторське право: WebSearch з лапками на фрагмент l6 («There’s a big red sofa… Under the sofa, there’s a box for my games») — збігу немає.

### Перевірки
- `node tools/validate.mjs --section e4s2` — **0 помилок**, 1 попередження: l6 readWordsPerScreen=33 > 30. Не підганяв: це урок читання з текстом 101 слово в трьох частинах (ТОП с. 60: 100–150 слів у тексті; style/eng.md «Тексти для читання»: повний обсяг — у уроках читання). Уривки 29 / 34 / 38 слів (≤ 50), maxText 42 (≤ 60). Без скорочення тексту нижче програми середнє по уроку не вкласти в 30 — межу readWordsPerScreen для уроків читання переглянути в style-eng-g4-5.
- `node tools/stats.mjs --subject eng` — e4s2l1: maxReadWords/maxText «нетипово для сім'ї» (z ≈ 2.2–2.4; maxText 56 ≤ 60 — info зі словником 7 слів); e4s2l6: readWordsPerScreen (вище) і gradedShare 0.8 (z = 2.7; у межах профілю 0.5–0.9 — урок читання майже весь із питань). longWordShare 0.013–0.067 — у межах. Решта — у профілі «4».
- Build не запускав (паралельна робота); плейтест — після build оркестратора (`python3 tools/playtest.py --section e4s2`).

### Спірне
1. **l3 word desk / table** — table у ключі (реальна друга відповідь). Можна замінити опору, якщо верифікатор вважає, що table «знецінює» вправу.
2. **l4 gaps на прийменники** — однозначність тримається на здоровому глузді й підказці в тексті («It’s dark there»); clothes «on the wardrobe» чи carpet «under the floor» теоретично можливі, але абсурдні. Без картинки (зображень для eng ще немає; img/ із власним SVG потребував би https-URL у credits) кращої опори не знайшов.
3. **some → «in yes sentences»** — спрощення A1; some в питаннях-проханнях (CD) у розділі не трапляється.
4. **l6 readWordsPerScreen 33** — див. «Перевірки».
5. «What has Oksana’s home got?» — BrE-питання з have got (CD Grammar «Have got and have»), не «What does … have?».

### Верифікація (verifier-e4s2, 2026-11-19)
Вердикт: **придатний, verified** (усі 7 уроків). Звіт — reports/verify/e4s2.md.
Сам виправив 7 дрібних місць: l1 #4 «our building» (flat не відсікався); l1 #6 опора «Grandma’s home isn’t in a block of flats» (сад ≠ лише house); l3 info — lamp і carpet винесено зі списку furniture (CD: lighting, floor coverings), у sort lamp → bed; l4 #6 «Andrii writes about his room» (малюнка немає); l5 #8 build + «In your room are there any posters?»; boss T6 плитка «dream room» (було граматичне «There is a dream sofa in my room» поза ключем); l6 частина 1 «My room hasn’t got a balcony» (суперечило l1: у квартири Андрія є балкон).
Спірне автора: 1 (desk/table) — приймаю; 2 (прийменники без малюнка) — приймаю до появи зображень; 3 (some → yes sentences) — приймаю як A1; 4 (readWordsPerScreen 33) — приймаю, style-eng-g4-5; 5 (have got у питанні) — приймаю.
validate --section e4s2: 0 помилок, 1 попередження (l6 readWordsPerScreen). Плейтест — після build оркестратора (playwright у контейнері немає). TQ не додавав.
