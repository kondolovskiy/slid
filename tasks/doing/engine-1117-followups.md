---
claimed_from: todo
claimed_at: 2026-11-17T19:38:32.909Z
id: engine-1117-followups
type: engine
subject: all
status: todo
claimed_by: engine-followups-1117
created: 2026-11-17
source: student-playtest-1117
priority: P2
---
# Доробки після рев'ю хвилі 1 (*-1117)

Скіл `engine-change` (п. 1–3), для п. 4 — `math-pool-diag`/`content-author`; рев'ю D-026. Джерела: reports/review/engine-lab-column-digits-1117.md, reports/review/engine-diag-baseline-plan-1117.md, memory/short/inbox.md (рядки engine-appjs-1117).

1. **P2, app/lab.js:809** — стирання цифри з екранної клавіатури, коли приходить лише подія `input` (`value=""`, `deleteContentBackward`): код повертає `c.value` до старого значення до перевірки `!/\d/.test(c.value)`, гілка «стерти» не спрацьовує. Зберегти сире значення до повернення; додати сценарій стирання в tools/test-ui.mjs (сценарій 17). Зонд: reports/review/… або scratchpad reviewer-engine-1117/probe.mjs (відтворити заново).
2. **P3, app/lab.js** — Backspace у порожній клітинці на телефоні не повертає до попередньої клітинки.
3. **P2, tools/lib.mjs `diagCtx`** — передавати `allLessons`, щоб `see` у темі тесту рівня міг посилатися на урок іншого предмета (dgw7 `era` → «Лінія часу» з «Історії»); тест у tools/test-validate.mjs.
   **P3, app/app.js:437** — картка плану на головній для тем із `see` називає урок(и) і дає кнопку, як у плані після тесту.
4. **P2, зміст тестів рівня** (після п. 3): dgu5 тема `apos` → `see: ["u5s7l3"]`; dgw7 `era` → `see: ["l3"]`; переглянути решту baseline-тем (dg4, dgu5, dgh5, dgw7) — чи є уроки, на які варто послатися. Тест рівня → draft, верифікація.

## Критерії готовності
- node-тести й `node tools/test-ui.mjs` зелені; новий сценарій падає на старому коді.
- `node tools/validate.mjs --diag dgu5`, `--diag dgw7` — 0 помилок.
- План після dgu5 з «Апостроф» у прогалинах веде на u5s7l3 (симптом g5.md №3 у reports/qa/student-playtest-1117/ зник).
- reports/review/engine-1117-followups.md — «прийнято».
