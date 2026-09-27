---
description: Виконати одну задачу автора контенту
argument-hint: <шлях до задачі в tasks/doing або tasks/todo>
---
Виконай задачу $ARGUMENTS за AGENTS.md, роль «автор контенту».
Якщо задача ще в tasks/todo — спершу `node tools/claim.mjs claim <task-id> writer-<task-id>`.
Наприкінці: валідатор без помилок, нотатки заповнені, рядки в memory/short/inbox.md, задача в review.
