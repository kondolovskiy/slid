---
name: memory-curate
description: Use at the end of a session or after a parallel batch to move memory/short/inbox.md entries into long-term memory (facts, glossary, pitfalls, decisions), write the session log and rewrite memory/short/handoff.md.
---

# Куратор пам'яті

Правила пам'яті — memory/README.md. Пише в `memory/long/` лише куратор.

1. Прочитай `memory/short/inbox.md`, `memory/short/handoff.md` і нотатки задач, переміщених сьогодні в review/ і done/ (`git log --since=midnight --name-status` або дати у frontmatter).
2. Розклади записи inbox:
   - FACT з URL і позначкою верифікатора → `memory/long/facts/<предмет>.md` (статус verified). FACT лише від автора → статус self.
   - TERM → `glossary/<предмет>.md`.
   - Повторювана технічна проблема (≥ 2 рази або > 10 хв) → тематичний файл `pitfalls-content|math|hist|engine.md` (покажчик — `pitfalls.md`; тема не підходить — сам `pitfalls.md`), розділ «Додано <дата>».
   - Рішення, ухвалене людиною в цій сесії → `decisions.md` (новий D-NNN: що, чому, хто, коли).
   - `IDEA GRAPH` (дрейф графа) → правка `content/<предмет>/graph.js` за скілом `skill-graph` або задача в `tasks/todo/`.
   - STYLE, ENGINE, IDEA → handoff «Що далі» або окрема задача в `tasks/todo/`.
   - CONFLICT (два агенти, різні дати) → handoff «Відкриті питання»; **не вирішуй сам**.
3. Нічого не видаляй мовчки з `memory/long/`: застаріле — `~~закресленням~~` + причина. Файл > 400 рядків — розбий за темами.
4. Видали з inbox перенесене (лиши заголовок і коментар-маркер `<!-- дата: що куди перенесено -->`).
5. Запиши `memory/short/sessions/<дата>-<n>.md` (≤ 1 сторінка). Журналів > 10 — найстаріші стисни в один рядок у `sessions/archive.md`.
6. Перепиши `memory/short/handoff.md` (≤ 80 рядків): стан, у роботі (`node tools/claim.mjs list doing`), що далі, відкриті питання, обмеження середовища.
7. `memory/long/INDEX.md`: **один рядок ≤ 300 символів на файл** — що в ньому і коли читати. Хронологію сесій сюди не дописуй (вона в sessions/ і в самих файлах).
8. Якщо тека — git-репозиторій: коміт «Сесія <дата>: <коротко>».
