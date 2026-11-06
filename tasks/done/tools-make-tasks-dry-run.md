---
claimed_from: todo
claimed_at: 2026-11-06T12:11:14.889Z
id: tools-make-tasks-dry-run
type: engine
subject: all
status: done
claimed_by: orchestrator
created: 2026-11-06
depends_on: []
---
# make-tasks: `--dry-run` без `--write-pool` мовчки записує задачі

Знайшов автор plan-ukr-g8 (2026-11-06, inbox BUG): `node tools/make-tasks.mjs --subject ukr --grade 8 --dry-run` нічого не показує «насухо», а записує задачі в tasks/todo — `--dry-run` діє лише в режимі `--write-pool`. Небезпечно: агент, що хоче лише подивитись, створює задачі.
Зробити (скіл `engine-change`, TDD): `--dry-run` у звичайному режимі — лише друк (без запису); тест у tools/test-make-tasks.mjs на обидва режими (мутант «dry-run ігнорується» має падати); шапка інструмента й AGENTS.md §3, якщо треба. Незалежне рев'ю D-026.

## Нотатки виконавця
- 2026-11-06 · orchestrator. `tools/make-tasks.mjs`: `DRY` діє в обох режимах; у звичайному режимі з `--dry-run` теку `todo` не створює й файлів не пише, друкує `[dry-run] Створилося б задач: N (імена)`; без `--dry-run` поведінка й вивід ті самі («Створено задач: N»). Шапка інструмента оновлена; AGENTS.md §3 не змінював (там `--dry-run` не згадано).
- Тести (TDD: спершу 3 падіння): `tools/test-make-tasks.mjs` — новий блок: звичайний `--dry-run` на фікстурі показує 4 задачі й не створює теку задач; з `--subject math --grade 6` — 1 задача, `todo` порожня. `node tools/test-make-tasks.mjs` — 52/52.
- Мутанти: «dry-run лише з --write-pool» → 3 падіння; «mkdir todo без перевірки DRY» → 1 падіння.
- Справжній план: `node tools/make-tasks.mjs --subject ukr --dry-run` → «[dry-run] Створилося б задач: 0», tasks/ без змін (md5 списку файлів).
- 2026-11-06 · рев'ю «прийнято» (reports/review/tools-make-tasks-dry-run.md); P3-1 (шапка тесту) і P3-2 (docs/WORKFLOW.md) виправлено комітом після рев'ю — лише коментар і документація.
