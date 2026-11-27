---
id: engine-eng-ci-playtest-timeout
type: engine
subject: eng
depends_on: []
status: done
claimed_by: orchestrator-eng-g7-11
created: 2026-11-27
source: CI PR #27 (job browser — timeout)
---
# CI: плейтест піднабору не вкладається в 30 хв після eng 7–11

## Проблема
PR #27 (run 45964280291, job browser): крок «Плейтест піднабору» — `The action … has timed out after 30 minutes`. Піднабір: 74 id, 245 уроків (200 змінених — бюджет `--max-lessons 200`, + покриття + усі тести рівня). Вердиктів «не зараховано» в лозі немає — playtest.py друкує підсумок лише наприкінці. Для порівняння: PR #25 (eng 4–6) — той самий крок 26,4 хв. Уроки eng 7–11 довші (≈ 10–12 екранів, мовні вправи), ≈ 8 с на урок → 245 уроків ≈ 33–35 хв.

## Що змінено
- `.github/workflows/pages.yml`: крок «Плейтест піднабору» `timeout-minutes` 30 → 45; job `browser` 45 → 60 (звичайний), 120 → 150 (`playtest: full`: піднабір 45 + повний 90 + ≈ 10 хв регресії/test-ui).
- `tools/playtest-pick.mjs`: лише коментар про оцінку часу.
- Бюджет уроків (`--max-lessons 200`) і логіку вибору не змінено.

## Перевірки
- `node tools/test-playtest-pick.mjs` — зелено; `npm run check` — зелено (лише коментар у .mjs).
- Справжня перевірка — повторний прогін CI на PR #27.

## Відомі обмеження
- playtest.py не друкує прогрес по розділах — таймаут не показує, де саме час; пропозиція (не в цій задачі): рядок на розділ з `flush=True`.

## Готово, коли
- [ ] Незалежне рев'ю D-026: reports/review/engine-eng-ci-playtest-timeout.md «прийнято»; CI job browser зелений.
