---
claimed_from: todo
claimed_at: 2026-11-05T09:17:13.162Z
id: tools-math-ister-p3
type: tools
subject: math
status: done
claimed_by: eng-tools-p3
created: 2026-11-05
depends_on: []
---
# Інструменти й тести: P3 пакета Істера (п. 11–17 з engine-math-ister-p3)

Скіл `engine-change`; незалежне рев'ю D-026. Перелік і джерела — tasks/…/engine-math-ister-p3.md п. 11–17 (fig-audit figCues; validate — `[A-Z]_\d` у label, link-завдання без «?», euphony для opts/items/gaps; make-tasks P3; tools-ister-p3 P3 (test-ui-ister unlockAll/known, `cnt` двічі); test-learn 1145–1152, коментарі; test-answer-ui.py:94/115 засів; engine-lang-p3 P3 — validate.mjs:344, playtest.py:101, lang.js:197). Пункти, що потребують рішення людини, — не робити, у нотатки.

## Нотатки виконавця
Виконавець: eng-tools-p3, 2026-11-05, worktree `slid-wt-tools` (гілка wt-tools). `app/` не змінено (рушієм займається engine-math-ister-p3) — пункти рушія перенесено (нижче).

### Зроблено за пунктами
**11. fig-audit / figCues** (tools/lib.mjs, tools/fig-audit.mjs, tools/validate.mjs):
- `intro` більше не пропускається: figCues повертає cue з `intro: true`; validate про вступ мовчить (`!cue.intro`), fig-audit — нова група «Сюжетний вступ посилається на рисунок чи геометрію» (на змісті 4: g7m8l3, g8m4l4, g8m6l3 «На кресленні двору…», g10m6l3).
- FIG_REF: + «рис. N» (ref); «за графіком руху / роботи / чергування / змін / занять / уроків…» — не ref (лишається згадкою graph); «зображено на передньому / задньому / другому / першому плані», «на тлі» — не ref. «на плані», «на схемі» — лише згадка (graph, без попередження validate): на змісті 19 «на плані» — сюжет/масштаб (g9m6l7, g9m4l4 «Хорда на плані a = 5»), тож у validate було б ≈ 5 хибних.
- graph: графік/діаграму треба побудувати («побудуй графік», «дані показують круговою діаграмою», «Іра малює діаграму») — не згадка (FIG_MAKE). Зникли хибні pg6m3 f04, f06–f08, ms3l3 е8, pg10m1 a05, pg10m3 a01, pg9m3 e08, g7m5l2 е4.
- figPoints: одна велика літера в добутку (·, *, \cdot, \times), у степені ($R^2$) чи після π — величина (S·H, πR²H, 2πRH); позначення з кількох літер ($AB \cdot CD$, $AC^2$) — точки. g11m4l3 е3 «SHR», g11m4l4 е3 «PHR» з geo зникли (68 → 66).
- Колонка «Умова» — сирий TeX без тегів, а не «Ф» (P3-4).
- fig-audit більше не пише `reports/fig-audit-<предмет>.json` (лише `--json` у stdout); `reports/fig-audit-math.json`, `fig-audit-ukr.json` прибрано з git, `.gitignore` — `reports/fig-audit-*.json` (P3-5). .md і далі генерується check.
- Підсумок на змісті math: ref 0, geo 68 → 66, graph 71 → 67 (+ «на плані» g7m2l4, g9m4l4, g9m6l7 ×2, pg9m2 a06), intro 4, prev 2. validate: без змін від figCues.
- Не зроблено: «на схемі» як ref (hist g11s1boss е3) — у мовних предметах «схема» — схема речення; лишилось згадкою (inbox — для hist).
- Документація: CONTENT_SCHEMA §6 (рис. N, intro, розклад, «на плані/схемі»).

**12. validate** (tools/validate.mjs):
- Попередження: індекс поза `$…$` у підписах lab (svgLabels, params.label, show): `(?<![\p{L}\p{N}\\])[A-Za-z]_\{?\d` після зняття `$…$` і шаблонів `{…}` (крім `_{…}`). На змісті — 0 спрацювань (196 підписів з індексом — усі в `$…$`).
- Попередження: choice/multi link-завдання («Пригадай» у title/body) без «?» і без спонукання (Обери, Познач, Визнач, Вкажи, Знайди, Встанови, Віднови, Зістав, Розклади, Допиши, Заверши, Постав). На змісті **10 нових, усі справжні** — world w7s1l3 е8, w7s1l4 е8, w7s2l4 е9, w7s3l5 е7, w7s4l1 е4, w7s4l2 е9, w8s2l4 е8, w8s2l5 е8, w8s4l3 е9, w8s4l4 е4 (тіло — лише факти, питання немає; w9s1 l5 / w9s2 l5 уже виправлені). Ширше правило «будь-яке choice без ?» дало б 145 (здебільшого заголовок-завдання «Центр Слобожанщини») — відкинуто.
- euphony: окремий режим `node tools/euphony.mjs --exercises` (euphonyExercise): усі opts (і хибні), items, речення gaps поза `{…}` і pick поза `[…]`; пропуск — межа (сусіди не позначаються). Звіт `reports/euphony-ukr-exercises.md` (29 відхилень; хибні варіанти можуть бути навмисними — перевіряти вручну), спільний звіт не чіпає; у validate не йде.

**13. make-tasks** (P3 tools-make-tasks-template): `CROOT` — `--content` діє й на перевірку файлу пулу в `--write-pool` (P3-1); прибрано зайву умову перед mkdir (P3-2); тест копіює всю `app/` (P3-3); новий тест `--write-pool --content` (файл пулу з дерева --content).

**14. tools-ister-p3 P3**: `tools/test-ui-ister.mjs` → `tools/test-ui.mjs` (git mv; AGENTS.md §3) + сценарій 3: unlockAll відкриває всі уроки; урок із plan.known (5 кл.) відкритий і відкриває наступний; known плану 6 кл. — ні (P3-1). Порядок «Тренування» описано в PERSONALIZATION.md §3 (P3-3) + тест test-learn на сортування registry finalize (клас → перший тиждень, без weeks — у кінці класу). **Перенесено:** `cnt` двічі (app.js viewPractice / learn.js practiceGroups) — зміна app/.

**15. curate-math-ister-gaps-matrix / v8–v9 P3** (тулова частина):
- test-learn: вправа пулу 6 кл. — лише уроку свого розділу (section/also) (P3-1); виняток «0 вправ» — за scope матриці (`curricularScope !== "required"`), а не лише за HIST (P3-2).
- personalization-qa (strict-прогалини): `diagnostic.preForSection` = pre-теми тесту класу з for, що містить розділ, у порядку тесту; forEvidence — урок свого розділу, розділ із for, кожен розділ for має запис; мінімум вправ за рівнями `exercises.levels`. На живому змісті 0 розбіжностей (`--strict` і `--diag dg5…dg9 --strict` rc 0). Документовано в PERSONALIZATION_QA.md.
- **Не зроблено (не інструменти або рішення):** `personalization-qa --strict` у check/CI — технічне питання людині: strict падає на draft-пулах і на кожному новому уроці без рядка матриці, тож зламає check авторам під час пакетів (можна без --strict, але тоді `for` файлу ↔ матриця, що є прогалиною, не ловиться). test-hyp §0/§10 прив'язані до живого змісту — переробка дизайну тесту, окрема задача. `sources.opened` у матриці, coverage.md:5 (pending), poolState planned, формати на одній вправі, формати «в дужках» у g7m4l7/l9, g7m8l5 — зміст/матриця (куратор, автори пулів).

**16. dg6-rev3**: коментар test-learn «п'ять проб» уже був виправлений («чотири»); уточнено рядок про rev 2 (16, 20 — з 2026-11-03 pre). test-answer-ui.py: засіюються всі завдання (`planted = len(item_revs)`, P2-1), guards з поясненням (P3-1; також real_rev у diag_answer_checks), `rev_items` — через `Number.isInteger(it.rev) && it.rev > 1` (P3-2).

**17. engine-lang-p3 P3** (з inbox 03.11, номери рядків застарілі — звірено з кодом):
- validate: милозвучність title/why уроку — тепер є фікстури (outro був).
- playtest.py: `lang_bad` лічиться лише після підтвердженої відмови (dock «bad»), а не до перевірки.
- lib.mjs mplain: грецькі літери (α, β, γ) не рахуються «переліком літер»; рядок лише з однолітерних слів української («а й у в») — текст; `[вставка]` упорядника в «цитаті» (hist: «[їм]», «[про неї]» — 9 на змісті) — слова, транскрипції ([й], [с:ади́ти], [н′]) — ні. Зсув метрик мінімальний: g7m5l4 sentenceWords 5 → 5.1, g9m8l4 longWordShare 0.05 → 0.049 (+ hist/ukr у style-*.md); validate — заміна одного профільного попередження на те саме з 5.1.
- euphony: тире з пробілами « - » більше не токен-слово (пауза працює); відкривна дужка — пауза; закривна — ні (свідомо: «Садили (<i>де?</i>) в парку» — позначка питання). Тести § 23/§ 24 п. 1.2 на тире, « - », «(», «…». На змісті ukr — без змін у звіті (98 відхилень і до, і після; трекований reports/euphony-ukr.md був застарілий — оновлено).
- **Перенесено (app/):** lang.js:197 «тег у слові» на межі блоку; app.js answerSig без прапорця кириличності.

### Тести (усі зелені)
`npm run check` EXIT 0: test-validate 1286, test-euphony 62, test-metrics 42, test-learn 2653, test-personalization-qa 122, test-make-tasks 49, решта без змін. `node tools/test-ui.mjs` (Node Playwright): 12 ok. Python: `python3 -m py_compile tools/test-answer-ui.py tools/playtest.py` — ok; модуля playwright для Python немає, тож test-answer-ui.py і playtest.py **не запускались**. Логіку засіву dg6 (planted = усі завдання) відтворено на Node Playwright (скрипт у scratchpad `tools-p3/dg6sim.mjs`): saved None — відкинуто [6,16,20,24,26,27,28], next 6; saved 2 — [6,26], збережено [16,20,24,27,28]; «Продовжити тест» є.
validate на змісті: 0 помилок; попереджень 253 → 263 (+10 link-завдань world; 1 профільне — те саме, 5 → 5.1).

### Мутанти (копія дерева в scratchpad `tools-p3/mut/run.py`) — усі 30 вбито
figPoints без віднімання величин; FIG_MAKE вимкнено; intro: false; validate попереджає про intro; text через plain; fig-audit пише .json; без «рис. N»; графік руху — ref; «передньому плані» — ref; правило індексу lab вимкнено; шаблони знімаються і після `_`; link-правило вимкнено; ASK_RE без «обери» → test-validate. euphonyExercise без межі пропуску (спершу вижив → додано тест «Ми {*пішли|пішов} й сіли»); « - » знову слово; «(» не пауза; --exercises ігнорується → test-euphony. LETTER_RUN з грецькими; однолітерні слова знімаються; вставка в цитаті знімається → test-metrics. make-tasks pfile з ROOT → test-make-tasks. preForSection / levels / forEvidence не перевіряються → test-personalization-qa. validate без title/why у милозвучності → test-validate. Вправа pg6m1 з уроком g6m2l1 → test-learn (4 ✗); registry finalize без сортування → test-learn. app.js unlocked без `S.unlockAll` / без `known` → test-ui.
Не мутовано: playtest.py лічильник (Python без playwright).

### Відомі обмеження
- link-правило — лише «Пригадай»; інші формулювання зв'язку («З історії України: …») не ловить.
- Індекс у підписі — лише латинська літера + цифра (`A_1`, `x_{2}`); `A_n`, `x_i` поза `$…$` не ловить.
- `--exercises` не дивиться в `<i>…</i>` і «…» (як і основний режим).

### Раунд 2 (після рев'ю reports/review/tools-math-ister-p3.md, 0a6dbae)
- **P1-1** FIG_REF: прибрано `рух|робот|змін|занят|тренуван|відвідуван|поїзд|автобус|платеж`; розклад — лише явний контекст: «руху поїздів / потягів / автобусів / тролейбусів / трамваїв / маршруток / електричок / транспорту», «чергувань», «уроків», «занять», «прийому». Тести: «За графіком зміни температури…», «…руху велосипедиста…», «…роботи насоса…», «…руху поїзда…» → ref; «…руху автобусів…», «…чергувань…», «…уроків…» → graph (замість старого test-validate:598).
- **P2-1** figPoints: `\angle` / `\triangle` / ∠ / △ → маркер ∠; літера після нього не стає величиною; літера, що на екрані входить у позначення з кількох літер ($ABC$), теж лишається точкою (крім добутку після π: «2πRH»). Тести: «$\angle A = 2 \cdot \angle B$» → AB; «$\angle K \cdot 2$» → K; «$\triangle ABC$, $S = 2 \cdot B$» → ABC; «…кут $\angle A = 2 \cdot \angle B$ у $ABC$» → geo.
- **P2-2** фікстури: «Побудуй діаграму… На діаграмі стовпчик…» → ref; preForSection з cur-темою, чий for містить розділ (не входить); індекс у `params.*.label` і `show`; link-правило не діє на number з «Пригадай».
- **P3-1** FIG_MAKE: «показують / покажуть» — лише перед «діаграмою / діаграму»; «Що показує графік?», «Що покаже діаграма?» — згадка graph.
- **P3-2/P3-3** fig-audit: для мовних предметів (ukr) згадка «на схемі» не потрапляє у звіт; reports/fig-audit-ukr.md перегенеровано (graph 2, без u5s9l4 «На схемі»). Тест fig-audit на фікстурі: ukr «На схемі» → нічого, math → graph.
- На змісті: fig-audit math без змін (ref 0, geo 66, graph 67, intro 4, prev 2); validate — ті самі 263 попередження.
- Мутанти раунду 2 (scratchpad `tools-p3/mut/run2.py`), усі 12 вбито: розклад знову з «рух/робот/змін»; виняток розкладу вимкнено; FIG_MAKE і на ref; FIG_MAKE знову з «показу» для графіка; ∠ не захищає літеру (спершу вижив → тест «$\angle K \cdot 2$»); MULTI не захищає; afterPi вимкнено; preForSection з cur; індекс без params.label; без show; link-правило на всіх типах; схема в ukr знову в звіті.
