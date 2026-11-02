---
description: Оркестрація — взяти N задач і запустити агентів паралельно (автори або верифікатори)
argument-hint: <N> <hist|math|verify> [клас]
---

Ти — оркестратор «Сліду». Аргументи: $ARGUMENTS

Виконай **скіл** `parallel-run` (`.claude/skills/parallel-run/SKILL.md`). Якщо другий аргумент `verify` — задачі з `tasks/review/`, агент `content-verifier`; інакше — `tasks/todo/write-<предмет>-*` потрібного класу, агент `content-writer`.
Перші N задач — claim, потім N агентів в одному повідомленні; після всіх — один `qa-runner`; верифікаторів — окремим запуском. Наприкінці — коротко: що готово, що verified, що потребує людини; далі `/sync-style <предмет>`, `/handoff`.
