# Handoff — стан проєкту

_Оновлено: 2026-11-25, оркестратор (злиття: PR #24 ukr 4 кл. → main; PR #25 англійська 4–6 кл. — main злито в гілку, рішення англійської перенумеровано **D-054 → D-055**, бо D-054 уже зайняла ukr 4 кл. Журнали 19.11: sessions/2026-11-19-1.md, сесії 1 і 2)._

**Пам'ятка (D-046, D-049):** змістове питання вирішуй сам за таким порядком джерел: МОН → програма → правопис і словники D-041 → підручник. Цитату й URL клади у звіт. Якщо сумнів лишився, бери найкращий варіант «тимчасово, до відповіді вчителя» і дописуй питання в `docs/teacher-questions.md` наступним номером (зараз останній **TQ-121**). Роботу це не блокує. Технічні питання — людині (нижче).

**Пам'ятка оркестратору:** комітити лише `git commit -m "…" -- <файли>` (pitfalls.md «Додано 2026-11-18»). Worktree-агенти створюються від `main` — перевіряй базу. build + `npm run check` — після кожного злиття.

## Стан
- **PR #24 (`claude/ukr-g4`) злито в main 25.11.** **PR #25 (`claude/eng-tasks`)** — main злито в гілку, чекає злиття після CI.
- **Англійська станом на 23.11 (PR #25):** розділи 4 кл. (8), 5 кл. (10), 6 кл. (8) — усі уроки verified; тести рівня dge4, dge5 і 18 пулів pe4s*/pe5s* — verified; рушій і інструменти під eng — рев'ю D-026 прийнято (reports/review/*eng*). Далі в todo: план і розділи 7–11 кл., тести рівня 6–11, P2/P3 рушія, звук (заблоковано D-055 п. 4).
- **Українська 4 кл. (PR #24, злито 25.11; CI browser зелений).** Предмет ukr 4 кл. за **D-054** (програма Шияна 3–4 кл., ред. 743-22; витяг docs/curriculum/shyian-3-4-ukr.md): план u4s1–u4s11, профіль ukr "4", style/ukr.md «4 клас».
  - 11 розділів u4s1–u4s11 (66 уроків) — **verified**; тест рівня **dgu4** (23 завдання) — verified; **dgu5**: опори → уроки u4, завдання без змін — verified; 11 пулів **pu4s1–pu4s11** (≈ 310 вправ) — verified. Жодного `approved`.
  - Build і `npm run check` (d8ddb8b): validate 0 помилок, test-ui 307 ok. **playtest.py і test-answer-ui.py не запускались** — потрібен CI job `browser` (тобто PR).
- **Гілка `claude/eng-tasks` (19.11): дизайн англійської, друга редакція** — рішення людини отримано (**D-055**: зміст англійською, BrE, B2, з 4 кл., A/B/C, поки без звуку); docs/design/english.md і **119 задач** `*-eng-*` у tasks/todo (звукові заблоковано). Відповіді людини на §11.2 — **D-055, «Доповнення 2026-11-19»** (AmE — `ok` з приміткою; ≈ 6 уроків на розділ; без IPA; порядок за програмою; поле `uk` у 4–5 кл. за потреби; 4 кл. — ТОП 3–4 Савченко). **design-eng → done.**
- **Англійська, хвиля 0 — завершена 19.11** (гілка `claude/eng-tasks`, PR #25; CI зелений 23.11). Done з рев'ю D-026 / верифікацією: curate-eng-agents-rule, engine-eng-lang-attr, -lang-core, -stats, -validate, -tools (+ виправлення frontmatter з CRLF), curate-eng-glossary, curate-eng-subject (subjects/eng.js, `soon` прибрано), curate-eng-style (style/eng.md, eng-banned, профіль `eng` — decisions D-055 «Робоче доповнення»), skills-eng, curate-eng-plan-g4 (8 розділів), curate-eng-plan-g5 (10 розділів). Нові P2/P3 у todo: engine-eng-lang-attr-p3, engine-eng-stats-p2 (склади — до калібрування профілю), engine-eng-lang-core-p3, engine-eng-validate-p3, engine-eng-tools-p3. Нові TQ-122…123 (лапки, час цифрами, -ise/-ize, AmE-лексика у `word`, обсяг текстів 5–9 кл.) — вчителю англійської.
- Довга пам'ять: decisions до **D-055** (D-054 — ukr 4 кл., D-055 — англійська) + «Чекає рішення людини»; facts/ukr-4 №590–642, facts/eng №1–17 + К1, glossary/eng, pitfalls-content «Англійська»; hist-3 до №723, world-2 до №340, ukr-9 до №589, math до №262.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів.
- **tasks/review — 4 дизайни, чекають рішення людини** (питання — наприкінці кожного): docs/design/own-writing.md, gamification.md, student-service-info.md, difficulty.md.

## Що далі
1. **style-ukr-g4 — у review, чекає рішення людини** (decisions «Чекає рішення людини», D-070). Пункти задачі 1–4 і 7 виконано 25.11; змінені u4s2–u4s6 і pu4s3 переверифіковано, усі verified (reports/style-ukr-g4.md, sessions/2026-11-25-1.md). Після рішення: куратор вписує еталон, «Що не питати в 4 кл.» і рід іменника в style/ukr.md «4 клас», задача → done.
2. **curate-plan-sync-1112** (доповнено): requires u4 у plan.js; **творення прикметників і -ськ-/-зьк-/-цьк-** (Ост4-2 §9–12) не покрито уроками u4 — урок чи 6 кл.; плюс давні ukr/hist/world пункти. Лише куратор, не під час пакета.
3. **fix-content-followups-1119** (8 пунктів; п. 7–8 додано 25.11 — u4s2l4 fbText без дужок, «й» у pu4s3/u4s3l4, обидва на розсуд): «й» після я/ю/є — після TQ-113; pg6m1 Істер 5 §26–32; dgh10 fact → g9s1l1; pu5s2 a22 Гарченко; **атрибуції u4, зняті без другого джерела** (Правоторова, Чубай, Шепель, Муратов, Лущевська «Геній на 5 секунд») — повернути, якщо знайдеться джерело; **pu4s7** взято з Остапенко 3 кл. (src Ост3-*) — за бажання перебазувати на Ост4-1 §62–80.
4. **tools-content-checks-p4** (нова): `.»`, gaps > 3 для ukr 4, euphony в `opts`, прибрати перевірку сирого `\{`.
5. **engine-lab-p5-1118** (нова): P2 align на шкалах > 90 років, P3 solidNMin / тап при locked / мультитач; g11m6l4 marks, g10m2l3 метод слідів через `cut`.
6. **engine-diag-duration-estimate** — після пілоту.
7. **Карти, що лишились малими** (kiepert-1849, chyhyryn-map, east-slavic-tribes, poltava-map-1821, ballot-1991, pale-map-1905, song-rainbow-bridge) і похідні SVG — після рішення про розмір (pitfalls-hist «Додано 2026-11-18»).
8. **IDEA GRAPH ukr 4** — лише ідеї (graph.js для ukr немає): sessions/2026-11-19-1.md.
9. **Англійська, далі** (tasks/todo): curate-eng-plan-g7-9 → write-eng-g7…g9; curate-eng-plan-g10-11; тести рівня 6–11; P2/P3 рушія eng (engine-eng-*-p3, -stats-p2, -rule-tables, -dialog, -playtest); research-eng-vocab-level; звук — після рішення людини (D-055 п. 4).

**Заблоковано рішенням людини (без змін):** engine-diag-retest-from-pool, engine-ai-a1 (`server/content/`), design-privacy-gdpr, design-teacher-dashboard.


## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** нові **TQ-119** (ред. програми 1273 ↔ 743-22), **TQ-120** (опори dgu5), **TQ-121** (підручник 4 кл., лише мовна частина?). Кандидати в TQ (ще не записані): «лайк» (СУМ-20 «жарг.») в u4s4l6; Ост4 §40 називає фразеологізми словосполученнями, u5s8l1 — ні; творення прикметників у 4 кл. **TQ-085 (Волинь — g11s1l9, g11s2l7) — обов'язково показати вчителю**; далі TQ-113…118, TQ-093, TQ-087. Англійська: **TQ-122…TQ-128** (лапки, час, -ise/-ize, AmE у `word`, довжина текстів, адреса e4s1, Present Perfect e6s7) — учителю англійської.

**CONFLICT (не вирішено):** пунктуація УП 2019 на slovnyk.ua vs facts/ukr №69; розділи CONFLICT у facts/hist-3, ukr-9 і новому ukr-4 (транскрипція «шістнадцять»); день вступу Сардинії в Кримську війну (facts/world-2 №340).

**Технічні — людині:**
1. **Розмір карт** (до 1920 px / 364 КБ проти ≤ 1000 px / 250 КБ) — варіанти А/Б/В у decisions.md «Чекає рішення людини».
2. **Замок фіналу розділу:** фінал відкривається через «знайомий» за тестом рівня попередній урок (w10s1l6 після dgw10). Відкривати лише після пройденого попереднього уроку? (engine-boss-unlock-1117.)
3. **Знак множення в стовпчику:** «·» (зараз) чи «×»? glossary/math «Не вирішено».
4. **Знімок tools/test-hyp.mjs §0** оновлювали під зміст 4 рази за 17–18.11 без рев'ю D-026 — прийнятний виняток?
5. **Стиль (рядок у decisions.md):** sentenceWords hist/world 10–11 і `items` (tools-content-checks-p3 п. 19: не рахувати `items` чи межа 6); pick ukr — межі члена речення в фіналі; world «скільки років від X до Y» на 8+; «Для кожного … обери» у sort math; **еталон і «Що не питати в 4 кл.» для ukr 4 кл.**: пропозиція з варіантами А/Б/В у decisions.md «Чекає рішення людини», номер при ухваленні — D-070 (style-ukr-g4 у review; reports/style-ukr-g4.md).
6. **Міжпредметне `see` на урок** (дизайн у tasks/done/tools-content-checks-p3.md «Дизайн п. 7»): робити engine-задачу? Відкривати урок за замком класу в режимі «лише читати»?
7. **Сіяний порядок рядків** у тесті рівня — так чи ні (зараз перемішування).
8. **Англійська:** учитель-рецензент англійської для `approved` (не блокує; D-055 «Не вирішено») — йому ж TQ-122…123; необов'язково — перейменувати e5s8 «Festivals and traditions» → «Celebrations and traditions» (festival — B1 у CD; id не змінюється).
9. Як 12.11: dgh11b (втрата підсумку dgh11); дублікати img/hist ↔ img/world; ліцензії фото (Гмюнд 1916, w10s4 1923, Кайсері 1928, Франки 1904); постанова ВР 14.04.2022 і закон 712-XII; required checks; змінні синхронізації (`SLID_API`, `SLID_GOOGLE_CLIENT_ID`, `CORS_ORIGINS`, `LOG_HASH_KEY`); `personalization-qa --strict`.

## Обмеження середовища
- **Python-модуля playwright локально немає.** Плейтест і test-answer-ui ганяє лише CI. Браузер — `/opt/pw-browsers/chromium`; test-ui — `NODE_PATH=/opt/node22/lib/node_modules`.
- **WebFetch не резолвить зовнішні домени.** Працюють curl через проксі (goroh, slovnyk, vesum, uk/en.wikipedia, commons, osvita.ua, svitdovkola.org) або WebSearch.
- Недоступні: mon.gov.ua (403) і zakon.rada (скидання) — навіть після додавання в дозволені хости 19.11; britannica/worldhistory (403), uk.wiktionary, geneza.ua (403); Met — через API. Програми й підручники початкової школи — svitdovkola.org.
- Недоступні: zakon.rada, mon.gov.ua, britannica/worldhistory (403), gov.uk, ons.gov.uk, parliament.uk; словники англійської (cambridge, oxfordlearners, merriam-webster, wiktionary) — лише через curl (WebFetch не резолвить cambridge), Met — через API. **osvita.ua і lib.iitta.gov.ua з 19.11 доступні** (додано в мережу); програми МОН — з osvita.ua.
- **Мініатюри Commons:** лише ширини 960/1280/1920 через upload.wikimedia.org/…/thumb; 429 — з паузами.
- `npm run check`, validate, stats, euphony перезаписують спільні reports/. Звіти комітить лише оркестратор.

## Як продовжити
«Прочитай AGENTS.md і handoff. Злий PR #25 (англійська), якщо CI зелений. Далі: рішення людини D-070 (style-ukr-g4), fix-content-followups-1119, tools-content-checks-p4 / engine-lab-p5-1118; англійська — curate-eng-plan-g7-9 і P2/P3 рушія eng (tasks/todo).»
