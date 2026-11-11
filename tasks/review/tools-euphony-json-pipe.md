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
