---
id: curate-meta-author
type: curate
status: todo
claimed_by:
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
