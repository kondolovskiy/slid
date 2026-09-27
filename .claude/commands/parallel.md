---
description: Оркестрація — взяти N задач і запустити агентів паралельно (автори або верифікатори)
argument-hint: <N> <hist|math|verify> [клас]
---

Ти — оркестратор «Сліду» (AGENTS.md → «Оркестратор»). Аргументи: $ARGUMENTS

1. Прочитай memory/short/handoff.md.
2. Якщо другий аргумент `verify` — працюєш з задачами `tasks/review/verify-*`, агент `content-verifier`. Інакше — `tasks/todo/write-<предмет>-*` потрібного класу (`node tools/claim.mjs list todo --subject <предмет> --grade <клас>`), агент `content-writer`.
3. Візьми перші N задач: для кожної `node tools/claim.mjs claim <task-id> <agent-name>` (ім'я на кшталт writer-<id>). Якщо claim не вдався — бери наступну.
4. **В одному повідомленні** запусти N субагентів (Agent tool) паралельно, кожному — промпт: «Виконай задачу tasks/doing/<task-id>.md за AGENTS.md». Не запускай tools/build.mjs, поки вони працюють.
5. Коли всі повернулися: `node tools/build.mjs && node tools/validate.mjs && node tools/stats.mjs`, потім `python3 tools/playtest.py --section <id>` для кожного нового розділу.
6. Якщо є помилки — поверни конкретному агентові (SendMessage) або виправ сам.
7. Коротко звітуй: що готово, що в review, що потребує людини. Запропонуй наступний крок (зазвичай верифікація, потім `/sync-style`, `/handoff`).
