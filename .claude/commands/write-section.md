---
description: Виконати одну задачу автора контенту
argument-hint: <шлях до задачі в tasks/doing або tasks/todo>
---
Виконай задачу $ARGUMENTS за AGENTS.md і скілом `content-author` (для пулу чи тесту рівня — `math-pool-diag`, для зображень — `hist-images`).
Якщо задача ще в tasks/todo — спершу `node tools/claim.mjs claim <task-id> writer-<task-id>`.
Наприкінці: валідатор без помилок, нотатки заповнені, рядки в memory/short/inbox.md, задача в review.
