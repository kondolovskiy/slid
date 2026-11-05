---
claimed_from: todo
claimed_at: 2026-11-05T09:24:11.637Z
id: qa-ci-browser-mutant
type: qa
subject: all
status: todo
claimed_by: session-qa-ci
created: 2026-11-05
depends_on: [tools-ci-answer-ui]
---
# CI: переконатися, що job `browser` падає на зламаному рушії; deploy зі звуженими правами

Джерело: reports/review/tools-ci-answer-ui.md (умова для done), нотатки tasks/done/tools-ci-answer-ui.md (план п. 1–6).
1. Окрема тестова гілка/PR (не злива́ти): коміт, що ламає `gapOrder` (тотожна перестановка) + build → червоний крок «Регресія», deploy не стартує.
2. Коміт, через який правильний choice не зараховується → червоний «Плейтест піднабору».
3. Після першого пуша в main: `build` (configure-pages з `pages: read`) і `deploy` зелені; якщо ні — повернути `pages: write` лише для build або перенести configure-pages у deploy.
4. Людині: позначити `build` і `browser` обов'язковими в Settings → Branches.

## Нотатки виконавця
