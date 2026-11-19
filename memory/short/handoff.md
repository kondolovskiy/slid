# Handoff — стан проєкту

_Оновлено: 2026-11-19, куратор пам'яті (19.11: дизайн англійської, друга редакція, D-054 і доповнення — відповіді на §11.2, sessions/2026-11-19-1.md; сесія 13–18.11: плейтест від ролі учня 4–11 кл., хвилі 1–3 задач *-1117; журнал sessions/2026-11-18-1.md). Попередні журнали: 2026-11-12-1.md, 2026-11-10-1.md._

**Пам'ятка (D-046, D-049):** змістове питання вирішуй сам за таким порядком джерел: МОН → програма → правопис і словники D-041 → підручник. Цитату й URL клади у звіт. Якщо сумнів лишився, бери найкращий варіант «тимчасово, до відповіді вчителя» і дописуй питання в `docs/teacher-questions.md` наступним номером (зараз останній **TQ-118**). Роботу це не блокує. Технічні питання — людині (нижче).

**Пам'ятка оркестратору:** комітити лише `git commit -m "…" -- <файли>` — навіть `git add` своїх файлів + окремий commit віддає їх чужому коміту (96bb001; pitfalls.md «Додано 2026-11-18»). Worktree-агенти (isolation) створюються від `main` — перевіряй базу. build + `npm run check` — після кожного злиття.

## Стан
- **Гілка `claude/eng-tasks` (19.11): дизайн англійської, друга редакція** — рішення людини отримано (**D-054**: зміст англійською, BrE, B2, з 4 кл., A/B/C, поки без звуку); docs/design/english.md і **119 задач** `*-eng-*` у tasks/todo (звукові заблоковано); код і зміст не змінено. Відповіді людини на §11.2 — **D-054, «Доповнення 2026-11-19»** (AmE — `ok` з приміткою; ≈ 6 уроків на розділ; без IPA; порядок за програмою; поле `uk` у 4–5 кл. за потреби; 4 кл. — ТОП 3–4 Савченко). **design-eng → done.**
- **Гілка `claude/student-playtest-1117-tasks`, PR не відкрито.** Останній build/check — 5d8d46d: validate 0 помилок / 73 попередження, test-ui 266 ok. **playtest.py і test-answer-ui.py локально не запускались** (немає Python playwright): потрібен CI, тобто PR (job `browser`).
- **Плейтест від ролі учня (13–17.11):** 8 агентів-«учнів» 4–11 кл. на GitHub Pages, ≈ 800 уроків, ~280 знахідок, блокерів немає. Звіти — reports/qa/student-playtest-1117/ (SUMMARY.md, g4–g11.md, TASKS-INDEX.md).
- **Хвилі 1–3:** 27 задач `*-1117` у tasks/done; зміст verified, рушій — рев'ю D-026 прийнято (reports/verify|review|qa/*-1117.md). Рушій: дроби в number, клітинки ділення кутом, zoom, рендер 1/aⁿ і кореня, `pl`/`shift` у show, план після тесту з `see`; зміст math/ukr/hist/world; карти; style-sync (D-019, позиції choice/multi, нейтральний рід).
- Хвости 12.11 (style-hist-1112, style-world-1112, fix-ukr-lessons-from-pools) — done. Жодного `approved`.
- Довга пам'ять: decisions до **D-054** + «Чекає рішення людини»; facts/hist-3 до №722, world-2 до №340, ukr-9 до №589, math до №261.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів.
- **tasks/review — 4 дизайни, чекають рішення людини** (питання — наприкінці кожного документа): docs/design/own-writing.md, gamification.md, student-service-info.md, difficulty.md.

## Що далі
1. **Відкрити PR** гілки й дочекатися CI `browser` (playtest піднабору, test-answer-ui регресія); за потреби — Run workflow `playtest: full`. Злити в main, щоб діти отримали виправлення.
2. **engine-demo-progress-guard (P2, задачу не створено — запропонувати людині):** «Заповнити демо-прогресом» (`fillDemo`, app/app.js ≈ 677–681) без підтвердження перезаписує справжній прогрес. Після входу синхронізація відправляє його на сервер, а `done` зливається через «або», тож ці записи лишаються назавжди. Мінімум — підтвердження і без синхронізації; повніше — «режим дорослого» (design-student-service-info §7).
3. **tools-content-checks-p3** — тепер 19 пунктів: службові id у тексті, choice без питання, позиційні посилання, D-016 для розділу й multi, заголовок-підказка, order з датами, show з «Потрібно», нотація math, рід у звертанні, euphony після «ст.» і частка «й», sentenceWords для `items`.
4. **engine-lab-p3-1117** (нова) — pie без 99/101 %, умовний текст і «=/≈» у show, `\{ \}` у math.js, переріз solid, тап по полю lab (B2), прокрутка sort g8m3.
5. **fix-content-followups-1117** (нова, 6 незалежних пунктів): підписи «Хрещення Русі» g6s4/g7s2; `lesson` у dgh10/dgh9; src pool-g5-g6m1; D-019 g8m4l4; «Метод слідів» g10m2l3; ukr «й» після я — після TQ-113.
6. **curate-plan-sync-1112** (доповнено 18.11): requires g11s2/g11s3 ← g11s1; ukr `why` «задумав»; перекриття weeks u11; назви навичок math для 4 кл. Лише куратор, не під час пакета.
7. **style-hist-p2-1112** — спершу перевірити, що вже закрили style-choice-positions/-d019-1117.
8. **engine-diag-duration-estimate** — після пілоту. Доповнено: dgh11 тема `pre` «Друга світова», dg8 cur-g8m5.
9. **Англійська, хвиля 0** (docs/design/english.md §3): engine-eng-lang-attr → engine-eng-lang-core / -validate / -stats / -tools (рев'ю D-026); куратор: curate-eng-agents-rule, -subject, -style, -glossary (сюди — FACT/NOTE design-eng-1119 з inbox у facts/eng.md); skills-eng. Потім curate-eng-plan-g4, -g5 і хвиля 1 (4 і 5 кл.).
10. **Карти, що лишились малими** (kiepert-1849, chyhyryn-map, east-slavic-tribes, poltava-map-1821, ballot-1991, pale-map-1905, song-rainbow-bridge) і похідні SVG для g9s1l2, g10s2l5–l6, g10s5l1/l4 — після рішення про розмір (pitfalls-hist «Додано 2026-11-18»).

**Заблоковано рішенням людини (без змін):** engine-diag-retest-from-pool, engine-ai-a1 (`server/content/`), design-privacy-gdpr, design-teacher-dashboard.

## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** нові **TQ-113…TQ-118** («Оля і Андрій», наголос «показник», «Наталчиною», кома після «насамперед», графіки g6m3l3 — урок лишається draft, аксіома А1 g10m2). **TQ-085 (Волинь — тепер і в g11s1l9, і в g11s2l7) — обов'язково показати вчителю**; далі TQ-093, TQ-087.

**CONFLICT (не вирішено):** пунктуація УП 2019 на slovnyk.ua vs facts/ukr №69 (як 12.11); розділи CONFLICT у facts/hist-3 і ukr-9; нове — день вступу Сардинії в Кримську війну (26.01 чи 10.01.1855; facts/world-2 №340), в уроці лише рік.

**Технічні — людині:**
1. **Розмір карт.** Нові карти мають до 1920 px / 364 КБ, а docs/IMAGES.md і скіл hist-images дозволяють ≤ 1000 px / 250 КБ. Варіанти А/Б/В — decisions.md «Чекає рішення людини».
2. **Замок фіналу розділу.** Фінал (boss) відкривається через «знайомий» за тестом рівня попередній урок: w10s1l6 відкрито після dgw10, а l2–l4 закрито. Чи відкривати фінал лише після пройденого попереднього уроку (або всіх non-boss)? Пропоновано engine-boss-unlock-1117 (qa-diag-stability-1117 №2).
3. **Знак множення в стовпчику:** «·» (глосарій, зараз) чи «×» (як у школі)? glossary/math «Не вирішено».
4. **Демо-прогрес (Що далі п. 2):** створити задачу?
5. **Рев'ю знімка tools/test-hyp.mjs §0.** За 17–18.11 його тричі оновлювали під зміни змісту без рев'ю D-026. Чи це прийнятний виняток?
6. **Стиль (рішення — у decisions.md):** sentenceWords hist/world 10–11 (не рахувати `items` чи межа 6); pick ukr — межі члена речення у фіналі кожним словом-кнопкою (style-ukr-1117); world ~50 задач «скільки років від X до Y» з обома датами — на 8+ брати одну дату з уроку?; закріпити в style/math.md «Для кожного … обери» у sort і формули 4 кл. словами (вже в glossary/math).
7. **Сіяний порядок рядків** у тесті рівня — так чи ні (зараз перемішування; qa-diag-stability).
8. **Англійська:** лишилось одне питання — учитель-рецензент англійської для `approved` (не блокує; D-054 «Не вирішено»).
9. Як 12.11: dgh11b (втрата підсумку dgh11); дублікати img/hist ↔ img/world; ліцензії фото (Гмюнд 1916, w10s4 1923, Кайсері 1928, Франки 1904); постанова ВР 14.04.2022 і закон 712-XII; required checks; змінні синхронізації (`SLID_API`, `SLID_GOOGLE_CLIENT_ID`, `CORS_ORIGINS`, `LOG_HASH_KEY`); `personalization-qa --strict`.

## Обмеження середовища
- **Python-модуля playwright локально немає.** Плейтест і test-answer-ui ганяє лише CI. Браузер — `/opt/pw-browsers/chromium`; test-ui — `NODE_PATH=/opt/node22/lib/node_modules`.
- **WebFetch не резолвить зовнішні домени.** Працюють curl через проксі (goroh, slovnyk, vesum, uk/en.wikipedia, commons) або WebSearch.
- **Мініатюри Commons:** лише ширини 960/1280/1920 через upload.wikimedia.org/…/thumb; 429 — з паузами.
- Недоступні: zakon.rada, mon.gov.ua, britannica/worldhistory (403), Met — через API. **osvita.ua і lib.iitta.gov.ua з 19.11 доступні** (додано в мережу); програми МОН — з osvita.ua.
- `npm run check`, validate, stats, euphony перезаписують спільні reports/. Звіти комітить лише оркестратор.

## Як продовжити
«Прочитай AGENTS.md і handoff. Відкрий PR гілки claude/student-playtest-1117-tasks і дочекайся CI `browser`. Паралельно можна брати: tools-content-checks-p3, engine-lab-p3-1117, fix-content-followups-1117 (по пунктах). curate-plan-sync-1112 — окремо. Людині: технічні питання 1–5, 4 дизайни в tasks/review, TQ-113…118 і TQ-085.»
