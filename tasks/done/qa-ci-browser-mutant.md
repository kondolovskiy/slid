---
claimed_from: todo
claimed_at: 2026-11-05T09:24:11.637Z
id: qa-ci-browser-mutant
type: qa
subject: all
status: done
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
- 2026-11-05 session-qa-ci: п. 1–2 виконано в тестовій гілці `claude/qa-ci-browser-mutant` (не зливати; без PR), workflow_dispatch `playtest: subset`. Звіт — reports/qa/qa-ci-browser-mutant.md.
  - Мутант 1 (`2ae3154`, gapOrder тотожний): run 42002280837 — «Регресія рушія» ❌ (gaps_order_checks, 4 хв 08 с), плейтест ✅, build ❌ (test-lang 4/143), deploy skipped; run 9 хв 19 с.
  - Мутант 2 (`c4c7588`, choice не зараховується): run 42003942309 — регресія ❌ (play_prerequisite, 18 с), «Плейтест піднабору» ❌ (TimeoutError на disabled «Спробувати ще раз», 37 с), deploy skipped; run 1 хв 26 с.
  - Зелений (`805660f`, app/ = база): run 42004567865 — `browser` ✅ (регресія 4 хв 40 с, плейтест 4 хв 24 с), deploy skipped.
  - Передіснуюче в базі `e8c30a1` (гілка PR #18): `build` ❌ — test-hyp §0 (знімок tools/test-hyp.mjs:534 не оновлено після style-math-ister-followup) і застарілий sw.js. Не виправлено тут (не моя зона) — inbox BUG.
  - Не зроблено (поза цією сесією): п. 3 — перевірити build/deploy з `pages: read` після першого пуша в main; п. 4 — людині позначити `build` і `browser` обов'язковими (Settings → Branches). Налаштувань репозиторію не змінювали.
