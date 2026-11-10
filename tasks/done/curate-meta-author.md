---
claimed_from: todo
claimed_at: 2026-11-10T09:59:27.726Z
id: curate-meta-author
type: curate
status: done
claimed_by: curator-meta-author
created: 2026-11-10
---
# meta.author: прибрати назву моделі зі змісту

З inbox 06.11 (orchestrator STYLE). `meta.author: "claude-opus"` (назва моделі) стоїть у ~149 файлах `content/` (давні уроки hist та ін.) — порушує AGENTS.md §5 (назви моделей у зміст не кладемо). У dgu5, dgu7, dgh7 уже виправлено на id задачі.

## Що зробити
1. Механічно замінити `author` на id задачі автора з `tasks/done/` (за `files` / назвою розділу); якщо задачу не знайдено — `"slid"` або id задачі пакета. **Без зміни id, змісту, статусу й `rev`.**
2. Опційно (engine-change, рев'ю D-026): попередження validate на `author`, що схоже на назву моделі.
3. Одна задача — один агент (зачіпає багато чужих файлів; під час паралельного пакета не запускати).

## Готово, коли
- [ ] `grep -rl 'claude-opus' content/` — порожньо; `node tools/validate.mjs` — 0 помилок; build — оркестратор.
- [ ] Якщо зроблено п. 2 — reports/review/curate-meta-author.md «прийнято».

## Нотатки виконавця

**Виконавець:** curator-meta-author, 2026-11-10. Лише п. 1 (п. 2 — задача tools-diag-nonmath-p3).

Скрипт (scratchpad, не в репо) замінює лише `author: "claude-opus"` → id задачі автора з `tasks/done/`: `pool-gN-ID` → `write-<предмет>-pool-ID`, `diag-gN` → `write-<предмет>-diag-gN`, `gN-ID` → `write-<предмет>-ID`; немає задачі → `"slid"`. Ручна відповідність: `math/g6-g6m6.js` → `write-math-g6-probability` (файл названо в нотатках задачі). Для пулів з базовою й `-ister` задачами взято базову (первинний автор).

| Значення | Файлів |
|---|---|
| `write-hist-*` (розділи) | 26 |
| `write-math-*` (розділи, вкл. g6-probability) | 19 |
| `write-math-diag-g4…g11` | 8 |
| `write-math-pool-*` | 32 |
| `write-ukr-*` | 42 |
| `write-world-*` | 15 |
| `"slid"` (задачі автора немає — найперші розділи до черги) | 6: hist/g5-s1, g5-s2, g5-s3, g5-s4; math/g4-m4s1, g5-ms1 |
| **разом** | **148** |

- Пропущено `content/hist/g6-g6s7.js` — його паралельно правив fix-hist-g6s7-l3-learned (сам замінює author).
- Додатково: `math/diag-g11.js` рядок 2 — коментар «автор — claude-opus» → «автор — write-math-diag-g11» (інакше grep не порожній).
- `git diff -U0 content` — змінено лише рядки author (+ коментар diag-g11); id, зміст, статус, `rev` не зачеплено.
- `grep -rl 'claude-opus' content/` → лише g6-g6s7.js; `node tools/validate.mjs --quiet` — 0 помилок, 72 попередж. build — оркестратору.
