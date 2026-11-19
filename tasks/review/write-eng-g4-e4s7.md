---
claimed_from: todo
claimed_at: 2026-11-19T13:53:41.395Z
id: write-eng-g4-e4s7
type: write-section
subject: eng
grade: 4
section: e4s7
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e4s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Holidays and travel» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Подорож по Україні та до країн виучуваної мови: поїздка на канікулах, транспорт, столиці — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): Future Simple for plans; comparatives and superlatives. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g4):** «Future Simple for plans» (ТОП 3–4 с. 63) — для вже вирішених планів природна британська форма — be going to; контекст завдання має однозначно вимагати will (спонтанне рішення, обіцянка, прогноз) або be going to йде в ключ (друга правильна відповідь).

- **Специфіка (verifier plan-eng-g4):** рядок плану — «Plans for the summer: I think I’ll…»: контекст — спонтанне рішення чи невпевнений намір; be going to — друга правильна відповідь у ключі (CD Grammar «Will»: https://dictionary.cambridge.org/grammar/british-grammar/will); How far…? (с. 63).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g4-e4s7.js`: `SLID.section("eng", { id: "e4s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --section e4s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [x] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e4s7, 2026-11-19. Файл: content/eng/g4-e4s7.js — 7 уроків (6 + фінал), status draft, `requires: ["e4s1l4", "e4s1l6"]`.
Еталон — e4s1 (будова intro → hyp → info → завдання → Final; правила списками з «→»; шаблонні інструкції; «The underlined part is strong»).

### Уроки
| id | title | типи завдань |
|---|---|---|
| e4s7l1 | By bus, by train, on foot | choice (hyp), gaps, word, choice, stress, choice (Final) |
| e4s7l2 | Which way? Up, down, across, along | choice (hyp), choice, gaps, pick (Find the mistake), build, word, choice (Final) |
| e4s7l3 | Capital cities: Kyiv, London and more | choice (hyp), gaps, choice, word (keepCase), stress, choice (Final) |
| e4s7l4 | The biggest and the longest | choice (hyp), gaps, choice, word, build, gaps (Final) |
| e4s7l5 | A postcard from my holiday | choice (hyp), gaps, word, order, pick (Find the mistake), gaps (Final) |
| e4s7l6 | Plans for the summer: I think I’ll … | choice (hyp), gaps, choice, word (contractions), build, gaps (Final) |
| e4s7l7 | Our summer trip (boss, значок e4s7boss) | gaps, choice, word, gaps, gaps, choice — Task 1–6, `pre` на l1…l6 |

### will / be going to (специфіка задачі)
- Правило (l6 #3): «You decide now: I’ll…», «You aren’t sure: I think I’ll…», will + verb, won’t. CD Grammar «Will» (Intentions and decisions: «We use will for immediate intentions and decisions. We usually use ’ll, not will, after I think»; «will when the decision is immediate and be going to when we have already made a plan»; Willingness and offers: «I’ll show you…») — https://dictionary.cambridge.org/grammar/british-grammar/will
- Контексти: невпевнений намір «I don’t know. I think I’ll…» (intro, word, build), спонтанне рішення «It’s very hot today! I think I’ll go to the river», «Good idea! I’ll come too!», пропозиція допомоги «I’ll help you!», вибір «Juice or water? – I think I’ll have juice» (boss T6). Уже складених планів («We’re going to Odesa next week») немає.
- be going to у 4 кл. не вчимо (5 кл., e5s9), тож серед варіантів `gaps`/`choice` його немає (другої правильної серед варіантів не виникає). У `word` l6 (before «I think») ключ — `["I’ll", "I am going to"]` + `contractions: true`: зараховано I’ll, I will, I am going to, I’m going to (перевірено LANG.wordVerdict, node vm).

### Факти (curl, 2026-11-19)
- Столиці: Kyiv — Ukraine, London — the UK (і England), Washington, D.C. — the USA, Ottawa — Canada, Canberra — Australia. CD «the capital city of …»: https://dictionary.cambridge.org/dictionary/english/kyiv, …/london, …/washington-dc, …/ottawa, …/canberra; en.wikipedia: https://en.wikipedia.org/wiki/Kyiv, …/London, …/Washington,_D.C., …/Ottawa, …/Canberra (summary: «capital city of …»).
- Kyiv — найбільше місто України: en.wikipedia «capital and most populous city of Ukraine»; uk.wikipedia «столиця та найбільше місто України» — https://uk.wikipedia.org/wiki/Київ
- Hoverla — найвища гора України, 2,061 m: en.wikipedia «at 2,061 metres … the highest mountain in Ukraine» — https://en.wikipedia.org/wiki/Hoverla; uk.wikipedia «найвища точка України … 2 061 м» — https://uk.wikipedia.org/wiki/Говерла
- Dnipro — найдовша річка України: en.wikipedia «it is the longest river of Ukraine and Belarus» — https://en.wikipedia.org/wiki/Dnieper; ЕСУ «найбільша ріка в Україні … четверта [в Європі] за довжиною» — https://esu.com.ua/article-22159. **Сумнів для верифікатора:** ЕСУ каже «найбільша», а не «найдовша» прямо; uk.wikipedia API з контейнера віддавав rate limit.
- Lviv < Kharkiv < Kyiv (hyp l4, не оцінюється): en.wikipedia Kharkiv «second-largest city», Lviv «sixth-largest» (звіт e4s1 §2).
- Odesa на Чорному морі: en.wikipedia «on the northwestern shore of the Black Sea» — https://en.wikipedia.org/wiki/Odesa; CD odesa «the Black Sea port of Odesa» — https://dictionary.cambridge.org/dictionary/english/odesa
- Трамвай у Харкові (текст l1 Final): https://en.wikipedia.org/wiki/Trams_in_Kharkiv
- London on the River Thames (текст l5 Final): CD london «… on the River Thames» — https://dictionary.cambridge.org/dictionary/english/london; CD thames «(also the River Thames)» — https://dictionary.cambridge.org/dictionary/english/thames
- «People speak English in the UK, the USA, Canada and Australia» (l3 info) — загальновідоме, без числа; не оцінюється окремо.

### Форми (CD/OALD через curl)
- by car/bus/plane без детермінатива: CD Grammar «By»: «We say by car, by bus, by plane etc. but if there is a determiner … » — https://dictionary.cambridge.org/dictionary/english/by; on foot: CD foot «Are you going by bicycle or on foot?» — https://dictionary.cambridge.org/dictionary/english/foot
- across «from one side to the other», along «from one part of a road, river, etc. to another», up «towards a higher position», down «from a higher one» — CD …/across, …/along, …/up, …/down. «How far is it from … to …?» — CD …/far. kilometre — UK (US kilometer) — CD …/kilometre. Metro не вжито.
- go/went, swim/swam, see/saw, eat/ate — CD …/go, …/swim, …/see, …/eat.
- Superlatives: CD Grammar «Comparison: adjectives» (-est; big → biggest, hot → hottest — подвоєння; old → oldest/eldest) — https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-and-most. Тому в `word` l4 («Oksana is the …» серед сиблінгів і кузена) ключ — oldest і eldest.
- holiday: OALD «on holiday», «the summer holidays» — https://www.oxfordlearnersdictionaries.com/definition/english/holiday_1; postcard — CD …/postcard; «Love, Kate» наприкінці листа чи листівки — CD …/love.
- Наголос (CD UK): bicycle ˈbaɪ.sɪ.kəl, transport (ім.) ˈtræn.spɔːt, travel ˈtræv.əl, capital ˈkæp.ɪ.təl, Canada ˈkæn.ə.də, Australia ɒsˈtreɪ.li.ə, Ottawa ˈɒt.ə.wə, Canberra ˈkæn.bər.ə, London ˈlʌn.dən — https://dictionary.cambridge.org/dictionary/english/<word>.
- Шаблонні інструкції — за style/eng.md. Тексти й герої власні; герої — з тими самими місцями, що в e4s1 (Andrii — Kyiv, Taras — Lviv, Mariia — Kharkiv, Oksana — село біля Полтави, Emma і Tom — містечко в Англії). Новий — Maksym (кузен Андрія, Ottawa).

### Опора (D-019), неочевидні місця
- l1 Final: «near» — e4s1l4 info («near Poltava = not far»); flat — не ключ.
- l2 word (Oksana goes … the bridge): ключ across + over (over у BrE теж «на той бік»; не вчили, але правильне — тож у ключі).
- l3 word London (keepCase) — велика літера з e4s1l6, звідси `requires` e4s1l6; «city» — e4s1l4.
- l4 Final і boss T4 спираються на l4 intro/info (Hoverla, Dnipro, Kyiv).
- l5 Final: River Thames — лише текст, не оцінюється.
- boss T3 (Ottawa) — l3 info.

### validate / stats
- `node tools/validate.mjs --section e4s7` — 0 помилок, 1 попередження: e4s7l3 longWordShare 0.189 > 0.12. Частку дають назви, яких вимагає програма (столиці, с. 63): Australia, Canberra, Ottawa, Canada, Washington, Melbourne, capital. Евристика складів також рахує ці назви «довгими» правильно — це не похибка, а тема; як e4s1l6 (0.165) — до калібрування style-eng-g4-5. Не підганяв.
- `node tools/stats.mjs --subject eng`: прапорці «нетипово для сім'ї» — e4s7l1 maxText (57 ≤ 60, z = 2.4; читальний текст l1 Final), e4s7l2 sentenceWords (z ≈ 2.3; маршрут «Then go across the bridge…»), e4s7l3 longWordShare (вище). Профільні межі, крім longWordShare l3, дотримано.
- Плейтест не запускався (Python playwright немає; розділу немає в manifest до build).

### Спірне / для інших
- `requires` на e4s6 (comparatives перед superlatives, plan-eng-g4 §6) не поставлено: уроків e4s6 ще немає (паралельний автор). l4 сам показує ряд big → bigger → the biggest. Оркестратору: після злиття e4s6 додати id уроку comparatives у `requires` e4s7.
- `match` не вжито (у рушії ще в роботі, engine-eng-match).
- Будова «I am going to» у ключі `word` l6 дає речення «I think I am going to go to the Carpathians» — граматично правильне, хоч і з повтором go.
