---
claimed_from: todo
claimed_at: 2026-11-11T07:38:51.742Z
id: tools-euphony-json-pipe
type: tools
status: review
claimed_by: w-tools-euphony-json-pipe
created: 2026-11-11
depends_on: []
---
# euphony: обрізаний JSON у pipe; --help перезаписує звіт

## Навіщо
Рев'ю tools-euphony-i-after-j (P3 раунд 2): у `--json`, `--section`, `--pool`, `--diag` після `process.stdout.write` одразу `process.exit(0)` — у pipe великий вивід обривається (`--subject math --json | JSON.parse` → SyntaxError). Окремо автори пулів (pu5s2, pu5s3, pu5s4, pu5s7) запускали `euphony.mjs --help`: невідомий прапорець → повний прогін і перезапис спільного reports/euphony-*.md.

## Що зробити (скіл `engine-change`, TDD; рев'ю D-026)
1. `process.exit(0)` → `process.exitCode = 0` (і для кодів 2) у euphony.mjs; перевір інші tools/*.mjs з тим самим патерном (validate, stats, personalization-qa) — виправ, якщо є.
2. `--help` / `-h` — коротка довідка без прогону; невідомий прапорець — код 2 і повідомлення, без перезапису звіту.
3. Тести: pipe великого виводу (spawn + збір stdout ≥ 1 МБ), `--help`, невідомий прапорець.

## Готово, коли
- [ ] `npm run check` зелений; reports/review/tools-euphony-json-pipe.md — «прийнято».

## Нотатки виконавця
**w-tools-euphony-json-pipe, 2026-11-11.**
- Відтворено: `node tools/euphony.mjs --subject math --json | wc -c` → 65536 (у файл — 157754); після правки — 157754, `| JSON.parse` — 788 рядків.
- `tools/euphony.mjs`: CLI винесено у функцію `cli()`, що повертає код; вихід — `process.exitCode = cli(...)`, без `process.exit` (і для кодів 2).
  `parseArgs()` (експорт): відомі `--subject/--section/--pool/--diag` (зі значенням; значення, що починається з «-», чи відсутнє — помилка), `--exercises`, `--json`, `--help`/`-h`;
  невідомий прапорець чи зайвий позиційний аргумент — stderr «невідомий прапорець «X». Довідка: … --help», код 2, без завантаження змісту й без запису звіту.
  `--help`/`-h` — довідка `HELP` (експорт) у stdout, код 0, без прогону.
- `tools/lib.mjs`: `exitFlushed(code)` — для ранніх виходів посеред скрипта: чекає порожній запис із колбеком у stdout і stderr, тоді `process.exit(code)`.
- Інші інструменти з тим самим патерном (вихід одразу після потенційно великого виводу): `validate.mjs` (кінець), `graph-report.mjs` (кінець), `diff-answers.mjs` (кінець і кінець contentDiff) → `process.exitCode`;
  `diff-answers.mjs --content-old`, `make-tasks.mjs --write-pool`, `hyp-replay.mjs --events/--graph-diff` (ранні виходи) → `await exitFlushed(...)`.
  `stats.mjs --json` уже чекав колбек запису — без змін; `personalization-qa.mjs` уже на `process.exitCode`. Ранні `process.exit(2)` після одного рядка в stderr (claim, fig-audit, graph-report, validate «ПОМИЛКА ЗАВАНТАЖЕННЯ» тощо) не чіпав: рядок менший за буфер pipe і пишеться одразу.
- Тести (`tools/test-euphony.mjs`, 114 → 128 перевірок): `--help`, `-h` (довідка, звіт-сторож не змінено); `--bogus`, `--jsno`, `--section` без значення, `--section --json`, `--subject` без значення, позиційний `fxa`, `--help2` — код 2, порожній stdout, повідомлення, звіт не змінено;
  pipe з повільним читачем (spawn, 300 мс не читає): `--json` і `--section` на фікстурі 2000 екранів × 10 відхилень (≥ 1 МБ) — повний вивід і точна кількість рядків; `exitFlushed(3)` після 2 МБ — увесь вивід, код 3, код після виклику не виконується.
  Мутанти в копії дерева (scratchpad): повернути `process.exit(0)` у euphony → 2 ✗ (pipe-тести, 113800 і 106569 символів); прибрати очікування в `exitFlushed` → 1 ✗.
- Прогони: `node tools/test-euphony.mjs` — 128/128; `npm run check` — усі node-тести зелені (test-lang 150, test-euphony 128, test-hyp 625, test-validate 1620, test-graph-report 67, test-make-tasks 69, test-diff-answers 52, test-playtest-pick 22 …), але `node tools/validate.mjs` — **1 помилка не з цієї задачі**: `content/world/g11-w11s2.js#w11s2l3 екран 2 (poll): невідомий тип «poll»` — правку w11s2 захопив коміт claim `02c12de` (чужа незавершена робота автора world); далі graph-report, stats, fig-audit вручну — rc 0.
- Документація: AGENTS.md §3 (рядок euphony: `--help`, код 2 на невідомий прапорець), шапка euphony.mjs.
- Обмеження: дубльований прапорець (`--section a --section b`) — бере останній, не помилка. Перевірка `euphonyIssues` на одному дуже довгому body нелінійна (8000 речень ≈ 0,9 с) — тому фікстура розбита на екрани; на живому змісті не проблема.

**Виправлення за рев'ю (reports/review/tools-euphony-json-pipe.md, e6afc5d), w-tools-euphony-json-pipe, 2026-11-11.**
- P2-1 (EPIPE): `lib.mjs` — `ignoreEpipe()`: обробник `error` на stdout/stderr, EPIPE — тихо (код виходу не змінюється), інші помилки — кидаються далі. Викликається на початку `cli()` в euphony і в `exitFlushed()`.
  `node tools/euphony.mjs --subject math --json | head -c 10` → rc 0, без стеку. Тест: `tools/fixtures/slow-pipe.mjs` (`slowPipe(script, args, { cwd, delay, closeEarly })` — спільний повільний / рано закритий читач);
  test-euphony: `--json` і `--section` з читачем, що закривається після першого шматка, — код 0 і порожній stderr; `exitFlushed(3)` так само — код 3 (128 → 131 перевірка). Мутант «без ignoreEpipe()» → 2 ✗ («Unhandled 'error' event», код 1).
  Не чіпав: `stats.mjs --json` (власний stdout.write із колбеком, той самий EPIPE — було й до задачі); console.log (validate, graph-report…) помилки потоку ковтає сам.
- P3-1: pipe-тести на великий вивід із повільним читачем —
  test-validate: розділ ukr із 3000 екранів «Брат в сестри» без `--quiet` → ≥ 256 КБ, рядків «увага» стільки, скільки в підсумку, підсумок останнім рядком (1620 → 1621);
  test-graph-report: `--uses na2` на 6000 вправах пулу з `u: "na2"` → усі 6000 рядків і «граф math: …» останнім (67 → 68);
  test-diff-answers: зміст як у сценарії 7 (1500 екранів list з ordered, категорію «ordered» вимкнено в копії) з `--show 1000000` → усі 1500 НЕПОЯСНЕНІ показано й розділ «Вердикт тесту рівня» на місці, rc 1 (52 → 55).
  Мутанти в копії дерева (повернути `process.exit(...)` наприкінці): validate → ✗ (підсумку немає, 1450 рядків), graph-report → ✗ (1173 з 6000), diff-answers → ✗ (373 з 1500).
- Прогін: `npm run check` — усі node-тести зелені (test-euphony 131, test-validate 1621, test-graph-report 68, test-diff-answers 55 ok / 0 ✗, решта без змін); validate — та сама 1 чужа помилка w11s2 «poll» (коміт claim 02c12de), тож check червоний не через задачу.
