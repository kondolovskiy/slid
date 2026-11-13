---
claimed_from: todo
claimed_at: 2026-11-10T19:56:09.210Z
id: engine-pool-lang
type: engine
subject: ukr
status: done
claimed_by: w-engine-pool-lang
created: 2026-11-10
depends_on: []
---
# Пул тренування для української мови: мовні вправи в `SLID.pool`

## Навіщо
Запит людини (чат 2026-11-10): «окремо пул задач для української мови для всіх класів». Зараз пули є лише в math; `SLID_LEARN.POOL_TYPES` (app/learn.js:2000) = answer, choice, multi, а українська перевіряє вміння мовними вправами (`app/lang.js`, CONTENT_SCHEMA §4.1: gaps, pick, stress, word, split). Без них пул з орфографії й наголосу довелося б будувати на `choice` — дитина впізнавала б готове написання, а не писала сама. У тесті рівня мовні типи вже є (engine-diag-lang-types) — використай той самий код, а не копію.

## Що зробити (скіл `engine-change`, TDD; рев'ю D-026 обов'язкове)
1. **Типи в пулі:** `gaps`, `pick`, `stress`, `word`, `split`, а також `sort`, `order` (класифікація частин мови, порядок слів) — у `POOL_TYPES` для предмета з мовними вправами. Вирішити й задокументувати: перелік спільний для всіх предметів чи залежить від предмета (math-пули не мають зламатися; диференційна перевірка всіх наявних вправ math, як у engine-math-pool-answer-formats).
2. **Плеєр тренування:** мовна вправа в сесії тренування — фідбек як в уроці (що правильно/ні, `fbText`, правило), друга спроба після `hint`, вердикт у SRS (`srsUpdate`) — повністю правильно → ok; часткове зарахування — вирішити й задокументувати (пропозиція: `gaps` з кількома пропусками — bad, якщо хоч один хибний).
3. **Поля вправи ukr:** `lesson`, `lvl` 1–3, `sk` (навички ukr: content/subjects/ukr.js), `src` + `sources` (реальні вправи підручника — §10), `steps` → для мовної вправи «пояснення»: правило й розбір (1–4 рядки), `hint`. Що з полів math (`answer`, `unit`, `reduced`, `gen`…) для мовних вправ заборонено — validate.
4. **validate / learn.validatePool:** мовні вправи перевіряються тими самими правилами, що в уроці (`lang.parseGaps`, ліміти тесту рівня — **не** застосовувати; свої розумні ліміти пулу: gaps ≤ 6 пропусків, stress ≤ 6 слів, pick ≤ 40 слів); euphony/D-041 — як для уроків; `--pool pu5s1` знаходить пул.
5. **personalization-qa** для пулів ukr: матриці покриття немає → правило «кожен не-boss урок розділу (крім РМ «Пишемо самі») має ≥ 3 вправи, рівні 1–3 представлені, `sk` вправи — серед `sk` екранів уроку»; без `--strict` у check (D-050 п. 7).
6. **make-tasks `--write-pool --subject ukr`** — шаблон задачі пулу ukr (як tasks/todo/write-ukr-pool-u5s1.md) для розділів без пулу й без задачі; потрібен для 9–11 кл. після їхніх розділів. Fixture у tools/test-make-tasks.mjs.
7. **EVIDENCE:** raw мовних вправ у тренуванні — як у тесті рівня (docs/EVIDENCE.md).
8. **Тести:** node-тести learn (validatePool, checkAns/вердикт мовних типів у пулі, SRS); test-ui — сценарій «Тренування» української з fixture-пулом (gaps + stress + pick: помилка → hint → друга спроба → SRS); test-answer-ui регресія. Мутанти — як у попередніх engine-задачах.
9. **Документація:** CONTENT_SCHEMA §10 (підрозділ «Пули мовних предметів» з прикладом `SLID.pool("ukr", { id: "pu5s3", section: "u5s3", … })`), docs/PERSONALIZATION.md §3, скіл `math-pool-diag` — розділ про пули ukr (або вказівка, що для ukr пулу — ще й `content-author`).

## Рішення, які треба зафіксувати (DECISION в inbox; змістові — сам, D-046)
- id пулів ukr: `pu<клас>s<N>` (`pu5s1`), файл `content/ukr/pool-g<клас>-<розділ>.js`; id вправ — як у math (`a01`…). Ключі прогресу — не перейменовувати.
- Розділи «Пишемо самі» (u5s11, u6s14, u7s13, u8s14) — без пулу (письмо автоматично не перевірити); якщо там є перевірювані уроки (ділові папери: реквізити) — окремим рішенням пізніше.

## Обмеження
Змісту ukr не писати (лише fixtures у тестах). Не змінювати поведінку math-пулів. Нове поле стану `slid.v1` — лише з правилом злиття в app/sync.js.

## Готово, коли
- [ ] `npm run check` зелений; test-ui і test-answer-ui (CI job `browser`) зелені; документація оновлена.
- [ ] `reports/review/engine-pool-lang.md` з вердиктом «прийнято» від engineering-reviewer зі свіжим контекстом; блокувальні знахідки закриті.
- [ ] Після цього оркестратор знімає блок із задач `write-ukr-pool-*` (вони вже в todo з `depends_on: [engine-pool-lang]`), за потреби оновлює їхній текст під остаточний контракт.

## Нотатки виконавця
### w-engine-pool-lang, 2026-11-10 (коміт b9e48de, гілка worktree-agent-a762166a70452fecc)

**Рішення (DECISION, у межах задачі; рев'ю D-026 підтверджує):**
1. **Перелік типів пулу — один для всіх предметів** (`SLID_LEARN.POOL_TYPES` = answer, choice, multi, gaps, pick, stress, word, split, sort, order): рушій предметів не знає. Для «пояснювальних» типів (`EXPLAIN_TYPES` = мовні + sort + order) — власні правила `poolExplainIssues`; правила answer/choice/multi не змінено.
2. **Часткового зарахування немає:** у SRS (`res.ok`) — лише «все правильно з першої спроби»; `gaps` з одним хибним пропуском — помилка теми (як і друга спроба). Плеєр не змінено: це вже було так (`gradeNow` → `LANG.check`).
3. **Межі пулу:** gaps ≤ 6 пропусків (урок — 12); stress ≤ 6 і pick ≤ 40 — як в уроці (`lang.issues`). Межі тесту рівня (3/3/20) не застосовуються.
4. **steps мовної вправи — «Пояснення»**, 1–4 рядки (помилка, якщо більше); у тренуванні заголовок «Пояснення» замість «Розв'язання» для EXPLAIN_TYPES.
5. **Заборонено в EXPLAIN_TYPES** (помилка): `unit`, `unitForms`, `answer` (крім `word`), `hyp`, `poll`; `answerKind`, `reduced`, `mixed`, `fractionOnly`, `decimals`, `form`, `tol`, `signed`, `units`, `gen` — і раніше давали помилку для не-answer.
6. **id:** пул `p<розділ>` (`pu5s1`), файл `content/ukr/pool-g<клас>-<розділ>.js`, вправи `a01`…; **«Пишемо самі…» — без пулу** (`NO_POOL_SECTION = /^Пишемо самі/` у tools/lib.mjs — за назвою, щоб діяло й на 9–11 кл.; personalization-qa — помилка, make-tasks — пропуск).
7. **personalization-qa для пулу не з math:** помилки (rc 1) — validatePool, boss, нуль вправ, повтор id, розділ «Пишемо самі»; прогалини (лише `--strict`) — < 3 вправ або немає рівня 1/2/3 на кожен не-boss урок з оцінюваними екранами (sk), sk вправи не з sk уроку, статус не verified. Урок без оцінюваних екранів — «ПРОПУЩЕНО» (зараз таких у ukr немає).
8. **validate:** попередження «рівня 2–3 без hint» для EXPLAIN_TYPES; мінімум вправ на урок для чергування — math 5 (як було), інші предмети 4.

**Що змінено:** app/learn.js (POOL_TYPES, EXPLAIN_TYPES, POOL_LANG_LIMITS, poolExplainIssues), app/app.js (заголовок «Пояснення»), tools/validate.mjs (без дублю структури в пулі, hint, minPer), tools/personalization-qa.mjs (auditOtherPool, гілка run), tools/make-tasks.mjs (`--write-pool --subject ukr`, writePoolLang), tools/lib.mjs (NO_POOL_SECTION); fixtures tools/fixtures/make-tasks/content/{subjects/ukr.js, ukr/}; sw.js (build). Docs: CONTENT_SCHEMA §10 «Пули мовних предметів» (приклад pu5s3), PERSONALIZATION §3, EVIDENCE («Мовні вправи в тренуванні»), скіл math-pool-diag (опис + розділ 2б), AGENTS.md §3 (make-tasks, test-ui).

**Тести (TDD — спершу падали 32 перевірки test-learn):**
- test-learn: допуск типів, збіг з SLID_LANG.TYPES, розмітка через lang.issues, межі, sort/order, заборонені поля, hyp/poll, steps 1–4, без lang.js — помилка, gaps 1 з 2 → false → SRS box 0, practiceItems/pickSession; math choice з unit / answer з 5 steps — без змін.
- test-validate: ukr-фікстура пулу з усіма типами — чисто; `--pool pu5fx` знаходить; 7 помилок — кожна рівно один раз і вказує на пул; hint-попередження; милозвучність у поясненні; поріг 4/3.
- test-personalization-qa: auditOtherPool (покриття, рівні, sk, статус, boss, нуль, «Пишемо самі», skipped) і run() (rc без/з --strict, --grade, невідомий пул).
- test-make-tasks: fixture ukr (створення, пропуск за задачею/файлом/id пулу/«Пишемо самі», --grade, depends_on залежно від done, hist — rc 2) + інваріанти справжньої черги ukr.
- test-ui сценарій 13 (+13): «Тренування» ukr-фікстури — gaps 1 з 2 → червоне, hint, друга спроба → «Пояснення»; pick, stress з першої; seen {a01: 0, a03: 1, a02: 1}; SRS fu5l1 box 0, fu5l2 box 1; журнал answer (key, pool, try, verdict, raw).

**Мутанти (усі вбито):** «Пояснення» → завжди «Розв'язання» (test-ui ✗1); hint не для мовних (✗1); SRS `ok` замість `first` (✗1); validate: lang.issues у пулі вдруге (✗2), без hint-попередження (✗1), поріг 5 для всіх (✗2); learn: gaps ≤ 12 (✗1), steps ≤ 9 (✗1); personalization-qa: MIN 2, без «Пишемо самі», без boss, --strict без прогалин — кожен окремо ✗.

**Диференційна перевірка math:** скрипт у scratchpad — старий learn.js (HEAD) проти нового на всіх 52 пулах / 1816 вправах (answer 1642, choice 114, multi 60): validatePool і checkAns (ключ + 4 проби) — 0 розбіжностей. `node tools/diff-answers.mjs --old HEAD --grades 4-11` — 1650 вправ, 71141 записів, 0 непояснених (і тест рівня 56000 — 0). validate на живому змісті: 0 помилок, 72 попередження — той самий набір, що до змін.

**Прогони:** `npm run check` rc 0 (test-learn 2934, test-validate 1620, personalization-qa 154, test-make-tasks 69, validate 0 помилок / 72 попередження); `node tools/test-ui.mjs` — 132 ok, 0 ✗ (було 119). `make-tasks --write-pool --subject ukr --dry-run` на справжньому змісті — 48 розділів (u5s1…u8s13) і 4 «Пишемо самі»; з чергою основного дерева (`--tasks /home/user/slid/tasks`) — 0 нових: збігається з наявними write-ukr-pool-*.
**Не запускалось локально:** `python3 tools/test-answer-ui.py --suite regression` і playtest — немає Python-модуля playwright (CI, job browser). Окремого сценарію в test-answer-ui.py не додано (сценарій тренування ukr — у test-ui.mjs, він теж у job browser).

**Відомі обмеження / для оркестратора:**
- Задачі `write-ukr-pool-*` (48 у todo основного дерева, не в цьому worktree) збігаються з контрактом; уточнити в них: steps — «Пояснення» 1–4 рядки, gaps ≤ 6, hint на рівнях 2–3 (попередження validate), personalization-qa `--strict` для прогалин; шаблон make-tasks уже це містить.
- У пулі для sort не попереджаємо «усі елементи в одному кошику» (структуру перевіряє validatePool, попередження лишилось лише в уроці) — P3, якщо треба.
- `reports/validate.json` змінено прогоном check — не комічено (звіти комітить оркестратор).
