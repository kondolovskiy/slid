---
id: tools-make-tasks-dry-run
type: engine
subject: all
status: todo
claimed_by:
created: 2026-11-06
depends_on: []
---
# make-tasks: `--dry-run` без `--write-pool` мовчки записує задачі

Знайшов автор plan-ukr-g8 (2026-11-06, inbox BUG): `node tools/make-tasks.mjs --subject ukr --grade 8 --dry-run` нічого не показує «насухо», а записує задачі в tasks/todo — `--dry-run` діє лише в режимі `--write-pool`. Небезпечно: агент, що хоче лише подивитись, створює задачі.
Зробити (скіл `engine-change`, TDD): `--dry-run` у звичайному режимі — лише друк (без запису); тест у tools/test-make-tasks.mjs на обидва режими (мутант «dry-run ігнорується» має падати); шапка інструмента й AGENTS.md §3, якщо треба. Незалежне рев'ю D-026.

## Нотатки виконавця
