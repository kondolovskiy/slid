---
id: tools-euphony-json-pipe
type: tools
status: todo
claimed_by:
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
