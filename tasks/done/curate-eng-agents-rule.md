---
claimed_from: todo
claimed_at: 2026-11-19T11:25:39.673Z
id: curate-eng-agents-rule
type: curate
subject: eng
depends_on: [design-eng]
status: done
claimed_by: orchestrator-eng
created: 2026-11-19
source: design-eng
---
# AGENTS.md §4 п. 1 і CLAUDE.md: виняток для англійської
Дописати в AGENTS.md §4 п. 1: «для `eng` увесь зміст — англійською (британська норма), інтерфейс рушія — українською (docs/design/english.md §2)»; у §2 «Карта» — content/eng/; у §6 — рядок eng (скіли). Правки AGENTS.md/CLAUDE.md — незалежне рев'ю (engineering-review). Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Обмеження
Спільні файли куратора — не під час паралельного пакета (AGENTS.md §5). Build — оркестратор.

## Нотатки orchestrator-eng (2026-11-19)
- AGENTS.md §4 п. 1 — виняток для `eng` за D-054 (увесь зміст англійською, британська норма; українською — хром рушія і згорнутий `uk` 4–5 кл.); §6 таблиця — «для ukr і eng — ще й `content-author`» (пули/тести); §6 «Документація» — рядок docs/design/english.md.
- §2 «Карта» не змінено: шляхи `content/<предмет>/…`, `img/<предмет>/…` уже загальні; audio/eng/ не додано — звук заблоковано (D-054).
- CLAUDE.md не змінено: предметно-специфічного в ньому немає.
- Рядок про скіли eng у §6 — задача skills-eng (після curate-eng-style і -glossary).
