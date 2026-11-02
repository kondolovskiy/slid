---
id: tools-agent-skills
type: engine
subject: all
status: review
claimed_by: orchestrator
created: 2026-11-02
depends_on: []
---
# Інструкції агентів: AGENTS.md як постійний контекст, процедури — у скілах

Запит людини 2026-11-02: розподілити інструкції між AGENTS.md (потрібне майже в кожній задачі) і скілами `.claude/skills/*/SKILL.md` (процедури на вимогу); прибрати дублювання й застаріле. План погоджено людиною («усе й відразу»).

## Що зроблено
- **AGENTS.md** переписано (164 → 116 рядків): стек, карта (+ пули, `graph.js` існує, `.claude/skills/`), команди (+ `--pool`, `test-answer-ui --suite regression`), правила (+ id — ключі прогресу, D-026 охоплює `.claude/`), новий §5 «Git і паралельна робота» (з handoff і pitfalls), §6 — таблиця «задача → скіл» і покажчик документації, §7 «Готово». Ролі §4 і бекенд §7 перенесено в скіли без втрати вимог.
- **11 скілів:** content-author, content-verify, math-pool-diag, hist-images, engine-change, backend-change, engineering-review, skill-graph, style-sync, parallel-run, memory-curate.
- **Субагенти** — тонкі обгортки над скілами (одне джерело процедури); новий `engineering-reviewer.md` (його вимагали AGENTS.md §4/§6, файлу не було); `qa-runner` — `npm run check` замість застарілого переліку з 5 тестів.
- **Команди** `/parallel`, `/write-section`, `/verify-section`, `/handoff` посилаються на скіли; **CLAUDE.md** скорочено (33 → 25), паралельний запуск і headless-цикл — у скілі parallel-run.
- **README** — застарілий перелік тестів замінено на `npm run check` + test-answer-ui.
- **memory/long/INDEX.md** стиснено до покажчика (рядки по 1–2 тис. символів хронології → ≤ 300); хронологія — у git-історії й sessions/.
- `tools/make-tasks.mjs`: у шаблоні задачі посилання «AGENTS.md → розділ „Роль: автор контенту“» (такого заголовка не було) → скіл content-author. `tools/validate.mjs`: коментарі «AGENTS.md §3 п. 8» → §7.

## Не зроблено (окремо)
- `test-answer-ui --suite regression` у CI — tasks/todo/tools-ci-answer-ui.md (потрібен Playwright у CI; рішення й рев'ю окремо).

## Перевірки
- `npm run check` — rc 0 (test-make-tasks 22/22, validate 0 помилок, graph-report 0 помилок); sw.js і index.html не змінились (зміни не зачіпають app/, content/, img/).

## Нотатки агента
