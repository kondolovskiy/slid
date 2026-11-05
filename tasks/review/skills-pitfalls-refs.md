---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.954Z
id: skills-pitfalls-refs
type: tools
subject: all
status: review
claimed_by: eng-playtest
created: 2026-11-05
depends_on: []
---
# .claude/skills: посилання на розбиті pitfalls (pitfalls.md → pitfalls-content/math/hist/engine.md)

Джерело: handoff «Що далі» п. 7 (куратор 05.11). Скіли math-pool-diag, hist-images, content-author, content-verify, engine-change, memory-curate (п. 2) посилаються на розділи старого pitfalls.md. Оновити посилання на тематичні файли (memory/long/INDEX.md — покажчик), не змінюючи процедур. Зміна `.claude/` — незалежне рев'ю D-026.

## Нотатки виконавця
eng-playtest, 2026-11-05 (worktree wt-playtest). Лише посилання, процедури не змінено.
- engine-change §1: pitfalls.md → `pitfalls-engine.md` («Тестування», «Інструменти й перевірки», «Рушій і журнал») + `pitfalls.md` («Паралельна робота й злиття» — там лишився).
- math-pool-diag: → `pitfalls-math.md` (усі три розділи там).
- hist-images: → `pitfalls-hist.md` (усі шість розділів там).
- content-author: → `pitfalls-content.md` («Контент і код», ukr) + файл предмета (math → pitfalls-math, hist/world → pitfalls-hist); покажчик — pitfalls.md.
- content-verify: → файл предмета («Джерела для верифікації» є в pitfalls-math і pitfalls-hist), ukr → pitfalls-content.
- memory-curate п. 2: «→ pitfalls.md, у тематичний розділ» → тематичний файл pitfalls-content|math|hist|engine.md, розділ «Додано <дата>» (як велить шапка pitfalls.md).
- skill-graph (доручення координатора): замість «лінія «дроби» verified» — «які лінії verified — див. `st` у `lines` content/math/graph.js» (зараз frac, prob, tri; без переліку, щоб не застарівало).
- `.claude/agents/`, `.claude/commands/` — посилань на pitfalls немає. AGENTS.md §6 посилається на pitfalls.md як на покажчик — коректно, не змінював.
- `npm run check` — EXIT 0.
