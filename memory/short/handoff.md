# Handoff — стан проєкту

_Оновлено: 2026-11-27, куратор пам'яті (сесія **eng-g7-11**, гілка `claude/eng-g7-11`, 25–27.11; журнал — sessions/2026-11-27-1.md). Частини про ukr, math, hist, world — без змін з 25.11 (оркестратор). Номери цієї сесії: D-056…D-069 (паралельна сесія — D-070+), TQ-129…TQ-159._

**Пам'ятка (D-046, D-049):** змістове питання вирішуй сам за таким порядком джерел: МОН → програма → правопис і словники D-041 → підручник. Цитату й URL клади у звіт. Якщо сумнів лишився, бери найкращий варіант «тимчасово, до відповіді вчителя» і дописуй питання в `docs/teacher-questions.md` наступним номером (ukr / hist / world / math — останній **TQ-121**; англійська — діапазон TQ-129…TQ-159, зайняті 129, 130, 137, 140, 141, 142, 144, 158). Роботу це не блокує. Технічні питання — людині (нижче).

**Пам'ятка оркестратору:** комітити лише `git commit -m "…" -- <файли>` (pitfalls.md «Додано 2026-11-18»). Worktree-агенти створюються від `main` — перевіряй базу. build + `npm run check` — після кожного злиття.

## Стан
- **PR #24 (`claude/ukr-g4`) злито в main 25.11.** **PR #25 (`claude/eng-tasks`, англійська 4–6 кл.) злито в main** (1cecec2) — від нього гілка `claude/eng-g7-11`.
- **Англійська станом на 27.11 (гілка `claude/eng-g7-11`, ще не PR):** **66 розділів 4–11 кл. — усі verified**: 4 кл. (8), 5 кл. (10), 6 кл. (8) — PR #25; **7 кл. (7), 8 кл. (8), 9 кл. (9), 10 кл. (8), 11 кл. (8) — 40 розділів, 280 уроків цієї сесії**, без `dialog` (D-056). Плани 7–9 і 10–11 кл. verified; style-sync 7–11 кл. прийнято (reports/style/eng-g7…g11.md). Тести рівня **dge4–dge11** — verified. Пули — лише 4–5 кл. (18, verified); **пули 6–11 кл. не писались, задач немає.** Імена історичних осіб — **D-057** (fix-eng-historic-names). build і `npm run check` — 6c552c0, 0 помилок; плейтест і test-answer-ui — лише CI. Жодного `approved`.
- **Українська 4 кл. (PR #24, злито 25.11; CI browser зелений).** Предмет ukr 4 кл. за **D-054** (програма Шияна 3–4 кл., ред. 743-22; витяг docs/curriculum/shyian-3-4-ukr.md): план u4s1–u4s11, профіль ukr "4", style/ukr.md «4 клас».
  - 11 розділів u4s1–u4s11 (66 уроків) — **verified**; тест рівня **dgu4** (23 завдання) — verified; **dgu5**: опори → уроки u4, завдання без змін — verified; 11 пулів **pu4s1–pu4s11** (≈ 310 вправ) — verified. Жодного `approved`.
  - Build і `npm run check` (d8ddb8b): validate 0 помилок, test-ui 307 ok. **playtest.py і test-answer-ui.py не запускались** — потрібен CI job `browser` (тобто PR).
- **Англійська, основа (19.11, PR #25):** дизайн docs/design/english.md (друга редакція), **D-055** з доповненням (зміст англійською, BrE, B2, з 4 кл., A/B/C, без IPA, поле `uk` у 4–5 кл., поки без звуку); хвиля 0 рушія й інструментів eng — рев'ю D-026 прийнято (reports/review/*eng*); subjects/eng.js, style/eng.md, профіль `eng`.
- Довга пам'ять: decisions до **D-057** (D-054 — ukr 4 кл., D-055–D-057 — англійська) + «Чекає рішення людини»; facts/ukr-4 №590–642; **facts/eng №1–17, eng-2 №18–159, eng-3 №160–337**, glossary/eng + **eng-heroes** (канон героїв), **pitfalls-eng** + pitfalls-content «Англійська» п. 1–22; hist-3 до №723, world-2 до №340, ukr-9 до №589, math до №262. **decisions.md — 404 рядки** (> 400): розбити окремою задачею куратора після злиття паралельних сесій.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів.
- **tasks/review — 4 дизайни, чекають рішення людини** (питання — наприкінці кожного): docs/design/own-writing.md, gamification.md, student-service-info.md, difficulty.md.

## Що далі
1. **style-ukr-g4** (нова): рід «мій/моя/моє» vs «він/вона/воно», вкладені лапки „…“, gaps ≤ 3, прапорці stats «нетипово для сім'ї», еталон 4 кл. (пропозиція — u4s5; для тексту — u4s1), «що не питати в 4 кл.» у style/ukr.md — зміни style/ лише після рядка в decisions.md.
2. **curate-plan-sync-1112** (доповнено): requires u4 у plan.js; **творення прикметників і -ськ-/-зьк-/-цьк-** (Ост4-2 §9–12) не покрито уроками u4 — урок чи 6 кл.; плюс давні ukr/hist/world пункти. Лише куратор, не під час пакета.
3. **fix-content-followups-1119** (нова, 6 пунктів): «й» після я/ю/є — після TQ-113; pg6m1 Істер 5 §26–32; dgh10 fact → g9s1l1; pu5s2 a22 Гарченко; **атрибуції u4, зняті без другого джерела** (Правоторова, Чубай, Шепель, Муратов, Лущевська «Геній на 5 секунд») — повернути, якщо знайдеться джерело; **pu4s7** взято з Остапенко 3 кл. (src Ост3-*) — за бажання перебазувати на Ост4-1 §62–80.
4. **tools-content-checks-p4** (нова): `.»`, gaps > 3 для ukr 4, euphony в `opts`, прибрати перевірку сирого `\{`.
5. **engine-lab-p5-1118** (нова): P2 align на шкалах > 90 років, P3 solidNMin / тап при locked / мультитач; g11m6l4 marks, g10m2l3 метод слідів через `cut`.
6. **engine-diag-duration-estimate** — після пілоту.
7. **Карти, що лишились малими** (kiepert-1849, chyhyryn-map, east-slavic-tribes, poltava-map-1821, ballot-1991, pale-map-1905, song-rainbow-bridge) і похідні SVG — після рішення про розмір (pitfalls-hist «Додано 2026-11-18»).
8. **IDEA GRAPH ukr 4** — лише ідеї (graph.js для ukr немає): sessions/2026-11-19-1.md.
9. **Англійська, далі:** (а) **PR `claude/eng-g7-11` → CI job `browser`** (плейтест піднабору, test-answer-ui dge6–dge11) → злиття; (б) **пули eng 6–11 кл.:** `node tools/make-tasks.mjs --write-pool --subject eng` (шаблон — engine-eng-diag-pool-p3 п. 4: + stress, choice/multi), далі автори й верифікатори за пітфолами п. 14–22; (в) **refine-eng-followups-1127** (нова: Taras і спорт, кузени Emma, Oksana e11s4, past participle e9s2, примітка КМУ55, e5s5 match); (г) P2/P3 рушія eng — engine-eng-rule-tables (доповнено: Almost на словникові форми, SPELL millilitre / afterward / toward), -stats-p2 (п. 4 z-прапорець), -validate-p3, -diag-pool-p3, -lang-core-p3, -dialog, -playtest; research-eng-vocab-level; звук — після рішення людини (D-055 п. 4); (ґ) images-eng-* — ідеї (e7s7, e10s5, e11s4), лише якщо людина вирішить додавати фото в eng.

**Заблоковано рішенням людини (без змін):** engine-diag-retest-from-pool, engine-ai-a1 (`server/content/`), design-privacy-gdpr, design-teacher-dashboard.


## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** нові **TQ-119** (ред. програми 1273 ↔ 743-22), **TQ-120** (опори dgu5), **TQ-121** (підручник 4 кл., лише мовна частина?). Кандидати в TQ (ще не записані): «лайк» (СУМ-20 «жарг.») в u4s4l6; Ост4 §40 називає фразеологізми словосполученнями, u5s8l1 — ні; творення прикметників у 4 кл. **TQ-085 (Волинь — g11s1l9, g11s2l7) — обов'язково показати вчителю**; далі TQ-113…118, TQ-093, TQ-087. Англійська: **TQ-122…TQ-128** (лапки, час, -ise/-ize, AmE у `word`, довжина текстів, адреса e4s1, Present Perfect e6s7) і **цієї сесії: TQ-129** (населення України e8s7), **TQ-130** (Київ і Лондон в одному розділі e7s7), **TQ-137** (етикетка ліків e7s3), **TQ-140** (місце додатка у фразових дієсловах e10s8), **TQ-141** (державні свята під воєнним станом e10s7), **TQ-142** (PP / PPC з live, learn e8s1), **TQ-144** (backshift, коли досі правда e8s3), **TQ-158** (didn’t use to) — учителю англійської.

**Англійська — людині (сесія eng-g7-11):**
- **D-057 і живі спортсмени:** Serhii Bubka (en.wiki «Sergey»), Olha Kharlan («Olga») — усталене написання з приміткою чи КМУ55? **Khmelnytskyi у назві пам'ятника** (Monument to Bohdan Khmelnytskyi, e7s7) — як ім'я особи чи як офіційна назва?
- **Примітка КМУ55 — одна форма?** Повна «In Ukrainian official documents, … is written …» (e10s5 тощо) і скорочена «Official Ukrainian spelling: …» (e11s5l6, e11s7l6); там само — Vernadsky з приміткою «Vernadskyi» однаково в e11s5 і e11s7.
- **«won’t probably»** — єдиний хибний варіант для прислівників упевненості (e9s2; British Council: probably перед заперечним допоміжним) — підтвердити вчителю.
- **Куріння в e10s3** («шкідливі звички» за програмою): зараз свідомо лише побутові звички (нігті, сніданок, телефон до півночі), без речовин — чи додавати куріння (окремо, з джерелом)? Учителю (reports/verify/write-eng-g10-e10s3.md).
- **Рік «Тіней забутих предків»:** у e11s3 — 1965 (вихід), виробництво — 1964 (facts/eng.md «CONFLICT»).
- **Профіль stats `eng` «10-11»** (readWordsPerScreen 65 → 70, sentenceWords 16 → 13, longWordShare 0.24 → 0.22) — decisions.md «Чекає рішення людини».
- **Ліцензія власних SVG у img/eng/** (CC0 / CC BY 4.0 / own work) — decisions.md «Чекає рішення людини».
- **`approved`** — потрібен учитель англійської (D-055 «Не вирішено»); браузерні прогони (playtest, test-answer-ui) — лише CI.
- **CONFLICT eng (не вирішено, у змісті не вжито):** Sydney / Melbourne — найбільше місто; рік заснування Odesa (1794 / 1415); озонова діра 1985 — станція Faraday чи Halley; розбіжності героїв — glossary/eng-heroes.md (Taras і спорт, кузени Emma, Oksana — ветеринарія / мистецтво).

**CONFLICT (не вирішено):** пунктуація УП 2019 на slovnyk.ua vs facts/ukr №69; розділи CONFLICT у facts/hist-3, ukr-9 і новому ukr-4 (транскрипція «шістнадцять»); день вступу Сардинії в Кримську війну (facts/world-2 №340).

**Технічні — людині:**
1. **Розмір карт** (до 1920 px / 364 КБ проти ≤ 1000 px / 250 КБ) — варіанти А/Б/В у decisions.md «Чекає рішення людини».
2. **Замок фіналу розділу:** фінал відкривається через «знайомий» за тестом рівня попередній урок (w10s1l6 після dgw10). Відкривати лише після пройденого попереднього уроку? (engine-boss-unlock-1117.)
3. **Знак множення в стовпчику:** «·» (зараз) чи «×»? glossary/math «Не вирішено».
4. **Знімок tools/test-hyp.mjs §0** оновлювали під зміст 4 рази за 17–18.11 без рев'ю D-026 — прийнятний виняток?
5. **Стиль (рядок у decisions.md):** sentenceWords hist/world 10–11 і `items` (tools-content-checks-p3 п. 19: не рахувати `items` чи межа 6); pick ukr — межі члена речення в фіналі; world «скільки років від X до Y» на 8+; «Для кожного … обери» у sort math; **еталон і «що не питати» для ukr 4 кл.** (style-ukr-g4).
6. **Міжпредметне `see` на урок** (дизайн у tasks/done/tools-content-checks-p3.md «Дизайн п. 7»): робити engine-задачу? Відкривати урок за замком класу в режимі «лише читати»?
7. **Сіяний порядок рядків** у тесті рівня — так чи ні (зараз перемішування).
8. **Англійська:** учитель-рецензент для `approved` (не блокує; D-055 «Не вирішено») — йому ж TQ-122…TQ-158 і питання вище; необов'язково — перейменувати e5s8 «Festivals and traditions» → «Celebrations and traditions» (festival — B1 у CD; id не змінюється). Дубль фото img/eng/e6s7/sofia.jpg = img/hist/g5s5/sofia.jpg — разом з п. 9 (дублікати).
9. Як 12.11: dgh11b (втрата підсумку dgh11); дублікати img/hist ↔ img/world; ліцензії фото (Гмюнд 1916, w10s4 1923, Кайсері 1928, Франки 1904); постанова ВР 14.04.2022 і закон 712-XII; required checks; змінні синхронізації (`SLID_API`, `SLID_GOOGLE_CLIENT_ID`, `CORS_ORIGINS`, `LOG_HASH_KEY`); `personalization-qa --strict`.

## Обмеження середовища
- **Python-модуля playwright локально немає.** Плейтест і test-answer-ui ганяє лише CI. Браузер — `/opt/pw-browsers/chromium`; test-ui — `NODE_PATH=/opt/node22/lib/node_modules`.
- **WebFetch не резолвить зовнішні домени.** Працюють curl через проксі (goroh, slovnyk, vesum, uk/en.wikipedia, commons, osvita.ua, svitdovkola.org) або WebSearch.
- Недоступні: mon.gov.ua (403) і zakon.rada (скидання) — навіть після додавання в дозволені хости 19.11; britannica/worldhistory (403), uk.wiktionary, geneza.ua (403); Met — через API. Програми й підручники початкової школи — svitdovkola.org.
- Недоступні: zakon.rada, mon.gov.ua, britannica/worldhistory (403), gov.uk, ons.gov.uk, parliament.uk; словники англійської (cambridge, oxfordlearners, merriam-webster, wiktionary) — лише через curl (WebFetch не резолвить cambridge), Met — через API. **osvita.ua і lib.iitta.gov.ua з 19.11 доступні** (додано в мережу); програми МОН — з osvita.ua.
- **Мініатюри Commons:** лише ширини 960/1280/1920 через upload.wikimedia.org/…/thumb; 429 — з паузами.
- `npm run check`, validate, stats, euphony перезаписують спільні reports/. Звіти комітить лише оркестратор.

## Як продовжити
«Прочитай AGENTS.md і handoff. Відкрий PR `claude/eng-g7-11` (англійська 7–11 кл.) і злий після зеленого CI `browser`. Далі: style-ukr-g4, fix-content-followups-1119, tools-content-checks-p4 / engine-lab-p5-1118; англійська — задачі на пули 6–11 кл. (make-tasks --write-pool --subject eng), refine-eng-followups-1127, P2/P3 рушія eng.»
