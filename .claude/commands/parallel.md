---
description: Оркестрація — взяти N задач і запустити агентів паралельно (автори або верифікатори)
argument-hint: <N> <hist|math|verify> [клас]
---

Ти — оркестратор «Сліду» (AGENTS.md → «Оркестратор»). Аргументи: $ARGUMENTS

**Моделі (економія):** автори (`content-writer`) і верифікатори фактів (`content-verifier`) — модель сесії (найсильніша: зміст і факти). Механічні тести — дешевші: `qa-runner` (build/validate/stats/test-*/playtest) — haiku. Модель задано у frontmatter агентів; не перевизначай `model` у виклику Agent без потреби. (2026-10-14: верифікатори на sonnet звіряли «за власним знанням», 0 URL у звітах — повернуто на модель сесії.)

1. Прочитай memory/short/handoff.md.
2. Якщо другий аргумент `verify` — працюєш з задачами в `tasks/review/` (`node tools/claim.mjs list review`), агент `content-verifier`. Інакше — `tasks/todo/write-<предмет>-*` потрібного класу (`node tools/claim.mjs list todo --subject <предмет> --grade <клас>`), агент `content-writer`.
3. Візьми перші N задач: для кожної `node tools/claim.mjs claim <task-id> <agent-name>` (writer-<id> / verifier-<id>). Якщо claim не вдався — бери наступну. Для verify — задачу лишай у review (верифікатор сам перенесе в done).
4. **В одному повідомленні** запусти N субагентів (Agent tool) паралельно, кожному — промпт: «Виконай задачу tasks/<doing|review>/<task-id>.md за AGENTS.md». Не запускай tools/build.mjs, поки вони працюють.
5. Коли всі повернулися — **один** субагент `qa-runner` зі списком нових id (build, test-lab, test-learn, validate, stats, playtest кожного розділу). Сам ці команди не ганяй, якщо qa-runner дав ✅ — лише читай його звіт.
6. Якщо є ❌ — поверни конкретному агентові (SendMessage) або виправ сам, потім повтори qa-runner лише для зачеплених id.
7. Після авторів одразу запускай верифікаторів (крок 2–6 з `verify`) — свіжий контекст, інші агенти.
8. Коротко звітуй: що готово, що verified, що потребує людини. Наступний крок — `/sync-style <предмет>`, `/handoff`.
