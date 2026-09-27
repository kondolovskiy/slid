---
description: Кінець сесії — зберегти пам'ять і стан проєкту
---
1. `node tools/build.mjs && node tools/validate.mjs --quiet && node tools/stats.mjs`.
2. Запусти субагента memory-curator (або виконай його інструкцію сам).
3. Якщо тека — git-репозиторій: `git add -A && git commit -m "Сесія <дата>: <коротко>"`.
4. Покажи людині оновлений memory/short/handoff.md (розділи «Що далі» і «Відкриті питання»).
