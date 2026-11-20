---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.825Z
id: write-eng-g6-e6s7
type: write-section
subject: eng
grade: 6
section: e6s7
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: done
claimed_by: writer-e6s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Україна: Київ і визначні місця» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: Київ, визначні місця — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): Present Perfect: experiences up to now, ever / never, been to (A2); Passives: Past Simple affirmative (It was built in…) (A2; інвентар — лише affirmative: «When was it built?» — питання-опора, його розуміють, а пишуть відповідь «It was built in…»); the + specifying adjectives / limiting adjectives: the main…, the only…, the oldest… (A2; superlatives — повторення e5s10l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** Present Perfect vs Past Simple: з конкретним часом (in 2020, last year) — лише Past Simple; «Have you ever been…?» — без часу. been to vs gone to — у 6 кл. лише been to. Дати будівництва й «найстаріший» — лише з facts/eng.md або двох джерел (ЕСУ — curl; britannica з контейнера не відкривається). Kyiv, Dnipro, Khreshchatyk — за КМУ № 55 (glossary). Герої: Andrii — Kyiv (екскурсовод для друзів), Emma — клас приїздив до Києва в грудні (e5s4). `requires`: e4s7l3, e5s10l1, e5s10l5, e5s7l6; після e6s3 — урок неправильних дієслів (оркестратор). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s7.js`: `SLID.section("eng", { id: "e6s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e6s7, 2026-11-20.** Файл content/eng/g6-e6s7.js, 7 уроків (6 + фінал), усі `draft`. `validate --section e6s7`: 0 помилок, 0 попереджень. Build не запускав.

**Уроки:** l1 Kyiv on the map: a city on the Dnipro (on/through/both sides, the з річками) · l2 The main street, the main square: sightseeing in Kyiv (the main / the only / the oldest; sightseeing, visitor, cathedral, square, museum; stress) · l3 When was it built? Old buildings in Kyiv (was/were + built/opened; століття) · l4 Have you ever been to Kyiv? (have/has been, ever/never, короткі відповіді) · l5 I’ve visited…, I’ve never seen…: my experiences (visited, tried, been, seen, eaten; Present Perfect vs Past Simple за маркером) · l6 A day in Kyiv: a page for visitors (текст 3 частини ≈ 190 слів + письмо) · l7 boss «Kyiv for visitors» (7 завдань, `pre` l1–l6, l3 двічі).

**Факти (кожен — 2 джерела; дати будівництва — лише встановлені):**
1. Kyiv — на обох берегах Дніпра; старе місто — на західному (правому) березі, на пагорбах. en.wikipedia https://en.wikipedia.org/wiki/Kyiv («straddles both banks»; «The older and higher western part»); ЕСУ https://esu.com.ua/article-11194 («на обох берегах Дніпра… більшість р-нів — на правому»; дитинець на г. Старокиївська). Мости через Дніпро — ЕСУ article-11194, article-11337.
2. Kyiv — one of the oldest cities in Eastern Europe. en.wikipedia Kyiv («One of the oldest cities in Eastern Europe»); ЕСУ article-11194 («одне з найбільших і найдавніших міст Європи»).
3. Khreshchatyk — the main street of Kyiv. https://en.wikipedia.org/wiki/Khreshchatyk; https://uk.wikipedia.org/wiki/Хрещатик («головна вулиця Києва»). Довжину не даю: en 1,2 км, uk 1,3 км.
4. Maidan Nezalezhnosti (Independence Square) — центральна площа, на Хрещатику. https://en.wikipedia.org/wiki/Maidan_Nezalezhnosti («central town square… located on Khreshchatyk Street»); https://uk.wikipedia.org/wiki/Майдан_Незалежності («центральна площа Києва»). «the main square» про Майдан **не пишу**: en — «one of the city’s main squares»; в уроці — «the central square».
5. St Sophia’s Cathedral — built in the 11th century (≈ «almost a thousand years ago»). Точний рік спірний: en https://en.wikipedia.org/wiki/Saint_Sophia_Cathedral,_Kyiv (розділ «Foundation date»: дати оскаржують; 1037 за ПВЛ); uk https://uk.wikipedia.org/wiki/Софійський_собор_(Київ) (1017–1037); ЕСУ article-11194 («зведений бл. 1037») → лише століття. Назва «St Sophia’s Cathedral» — en.wikipedia («often referred to as St Sophia’s Cathedral»).
6. Golden Gate — the main gate of old Kyiv; old gate — 11th century; gate you can see today — built again in 1982. https://en.wikipedia.org/wiki/Golden_Gate,_Kyiv («the main gate in the 11th century fortifications»; 1017–1024; «In 1982, it was rebuilt completely»); ЕСУ https://esu.com.ua/article-16975 («головна парадна брама давнього Києва»; ПВЛ під 1037; «1982 зведено павільйон»). Рік спірний (1017–1024 / 1037) → століття. Old Kyiv had walls and gates — обидва джерела (fortifications / фортифікація).
7. St Andrew’s Church — built in the 18th century; on a hill. https://en.wikipedia.org/wiki/St_Andrew%27s_Church,_Kyiv (1747–1754, «on a steep hill»); ЕСУ https://esu.com.ua/article-44207 («Збудована протягом 1747–62», 18 ст.). **Кінцевий рік розходиться (1754 / 1762)** → лише століття.
8. Andriivskyi Descent — old street, goes down a hill to Podil; St Andrew’s Church at the top. https://en.wikipedia.org/wiki/Andriivskyi_Descent (connects Upper Town and Podil; «winds down steeply»; church on it); ЕСУ https://esu.com.ua/article-44209 (поєднував Верхнє місто з Подолом). Написання — як заголовок en.wikipedia і КМУ № 55.
9. Kyiv Funicular — opened in 1905; goes up and down a hill between the Upper Town and Podil. https://en.wikipedia.org/wiki/Kyiv_Funicular («constructed during 1902–1905, … first opened to the public on 20 May 1905»; Uppertown – Podil); https://uk.wikipedia.org/wiki/Київський_фунікулер («Споруджувався впродовж 1902—1905», з'єднує Верхнє місто та Поділ).
10. Kyiv Metro — opened in 1960. https://en.wikipedia.org/wiki/Kyiv_Metro («opened on 6 November 1960»); https://uk.wikipedia.org/wiki/Київський_метрополітен («6 листопада 1960 року було відкрито»); ЕСУ https://esu.com.ua/article-11337 («1960 уведено в експлуатацію»). «The first metro in Ukraine» не даю — явно лише в en.
Відкинуто: Лавра (рік заснування 1051 чи 1074 — суперечливо в ПВЛ; monastery без рівня в CD, cave — B1), Батьківщина-мати (перейменування не завершено, автор живий/помер < 70 р.), Арсенальна «найглибша» (en: тепер друга після Hongyancun), довжини вулиць.

**Форми й рівні (CD — https://dictionary.cambridge.org/dictionary/english/<слово>; OALD — https://www.oxfordlearnersdictionaries.com/definition/english/<слово>):**
- past participle: seen (OALD see_1), eaten (OALD eat), built (OALD build_1), been (OALD be_1); visited, tried — регулярні.
- Рівні CD: century A2, bridge A2, hill A2, square A2, cathedral A2, church A2, gate A2, island A2, sightseeing A2, visitor A2, build A2, golden A2, ever A2, never A1, only A1, museum A1; main B1 (позиція інвентаря A2 «limiting adjectives», вводжу прикладом), guide B1, steep B1, ancient B1, cave B1, monument B2, bank (річки) B2 — **bank, monument, ancient, steep не вживаю** (замість bank — side; «both sides of the river»).
- Наголос (CD UK): sightseeing /ˈsaɪtˌsiː.ɪŋ/ → `+sight|see|ing`; visitor /ˈvɪz.ɪ.tər/ → `+vis|i|tor`; cathedral /kəˈθiː.drəl/ → `ca|+the|dral`; museum /mjuːˈziː.əm/ → `mu|+se|um`. Усі чотири підкреслено `<u>` в info l2 перед вправою.
- Present Perfect для досвіду без конкретного часу, ever/never; з конкретним минулим часом — Past Simple: CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-simple-i-have-worked (приклади звідти не копіював).
- «I’ve not been» — BrE-норма, тож у `word` l4 ключ ["never", "not"].

**Розв'язано двічі, друга правильна відповідь:** у кожному пропуску Present Perfect / Past Simple є маркер (ever, never, last summer, yesterday, last night, last week). Прибрано пастки: «Has Ostap never been here?» (заперечне питання — граматичне) → пропуск у «He’s {never|ever} been»; «at/in hills» не даю; «the main square» про Майдан не даю; «this one is the oldest» (англійські церкви бувають старші) → «the most beautiful».
**`build`:** усі 5 перебрано скриптом через `SLID_LANG.check` (усі перестановки плиток і з кожною пасткою `extra`): приймається лише ключ; серед відхилених граматичних немає (topicalization «the Golden Gate I’ve never seen» відсічено `keepCase`). Скрипт — scratchpad (perm.cjs).
**Авторське право:** WebSearch трьох найдовших фраз (≥ 12 слів) — збігів немає. Тексти, діалоги, Amelia — власні.

**Зображення:** img/eng/e6s7/sofia.jpg — копія verified img/hist/g5s5/sofia.jpg (Galvm, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Kyiv-Saint_Sophia_Cathedral-south_view.jpg); img/eng/e6s7/st-andrews-church.jpg — Maksym Kozlenko, CC BY-SA 4.0, 2019-07-13, https://commons.wikimedia.org/wiki/File:2019-07-13_St._Andrew%27s_Church,_Kyiv,_Ukraine_1.jpg (ліцензія й автор — з extmetadata Commons API; 960×842, 135 КБ, EXIF прибрано; будівля 18 ст., Растреллі † 1771 — свобода панорами не потрібна; люди на фото дрібні, невпізнавані). Золоті ворота (павільйон 1982) і фунікулер (нижня станція 1984) — **не брав**: немає свободи панорами.

**Герої (нове — у NOTE для inbox):** Amelia — нова, подруга Emma з клубу плавання (не кузина: у Emma один кузен Jack, e5s1), Англія, ніколи не була в Україні, їде до Києва з батьками в травні (boss — уже в Києві). Emma — була в Києві з класом (e5s4), час не названо («with my class»). Taras — був у Києві з татом (e4s7), без року; Ostap ніколи не був у Києві. Daryna — була в Lviv минулого літа (канон style-eng-g4-5). Zoriana — бабуся; ніколи не була в London. Sofiia — ніколи не бачила Золоті ворота. Bohdan — був у Софійському соборі з класом «last year». Зовнішності героїв немає. Andrii і London — свідомо нічого (щоб не суперечити e6s8).

**Опора D-019:** l3 match (екран 6) спирається на info «Old places in Kyiv» (екран 4) — hint «Remember the list…»; l2 choice Golden Gate — умова на екрані; l6 word «century» — на info l3 і тексті l6 part 1; boss — лише факти з l1–l6.

**stats (до калібрування профілю 6 кл.):** e6s7l1 maxText 73 / maxReadWords 76 (інтро з повідомленням, у межах профілю 5-6: ≤ 110 / ≤ 120); e6s7l3 sentenceWords 6.4 (межа 3–10); e6s7l6 gradedShare 0.88 (межа 0.9; урок читання) і readWordsPerScreen. «Нетипово для сім'ї» — порівняння з 4–5 кл.; у межах профілю «5-6», тож лишаю — style-sync 6 кл.

**Спірне / пропозиції:**
- «the third form of the verb» (l5 info) — шкільна назва; у glossary/eng немає ні її, ні «past participle» → TERM: вирішити для 6 кл.
- `why` розділу з Present Perfect до уроку — як і в плані (Р2 curate-eng-plan-g6).
- requires усередині 6 кл. (e6s7 → урок Past Simple irregular з e6s3) — оркестратору після злиття (curator-plan-eng-g6 NOTE).
- Дубль файлу sofia.jpg з img/hist/g5s5 — як інші дублікати img/hist ↔ img/world (handoff, людині).

**verifier-e6s7, 2026-11-20.** Вердикт: **verified** (7 уроків). Звіт: reports/verify/e6s7.md. Факти про Київ я звірив за ЕСУ (article-11194, 16975, 44207, 44209, 11337), en/uk.wikipedia і Commons — кожен щонайменше за двома відкритими джерелами. Правки в content/eng/g6-e6s7.js:
1. «almost a thousand years» → «about a thousand years» (l3 intro, l6 part 1). Дату 1011 визнали ЮНЕСКО й уряд, 1000-річчя відзначали у 2011 (en/uk.wikipedia), тож собор може бути й старшим за 1000 років.
2. l2 `word` «the ___ café»: ключ ["only", "one"], бо «the one café» правильне (OALD one_1).
3. l5 info: ряд see – saw – seen, eat – ate – eaten, be – was / were – been, щоб «the third form» мав опору.
4. l6 part 3: +«Have dinner in a café near the square.». Текст тепер 160 слів (TQ-123), readWordsPerScreen = 40.
`build` перебрано через app/lang.js, пропущених порядків немає. Авторське право: 8 запитів, збігів немає. TQ-125 — термін «the third form» чи «past participle». validate 0/0. Плейтест — після build (у контейнері немає Python-модуля playwright).
