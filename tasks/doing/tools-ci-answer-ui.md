---
claimed_from: todo
claimed_at: 2026-11-05T07:32:04.014Z
claimed_by: eng-ci
id: tools-ci-answer-ui
type: engine
subject: all
status: todo
created: 2026-11-02
depends_on: []
---
# Браузерна регресія рушія в CI

`python3 tools/test-answer-ui.py --suite regression` (evidence_checks, hyp_checks, graph_g3_checks, half_credit_checks тощо) — головна регресія `app/`, але її немає ні в `npm run check`, ні в `.github/workflows/pages.yml`. Зміну рушія можна злити, не запустивши її.

## Що зробити
- Оцінити час прогону й флейки (pitfalls: паралельно з іншими браузерними прогонами — TimeoutError).
- Додати окремий job у `pages.yml` (або окремий workflow на зміни `app/`, `tools/`, `content/`): Python, Playwright з кешем браузера, `--suite regression`; job має блокувати деплой.
- Не додавати в `npm run check` (той лишається без браузера) — або обґрунтувати.
- Оновити AGENTS.md §3 (примітка «не входить у check і CI»), docs/PUBLISHING.md.

## Готово, коли
- [ ] CI падає, якщо зламати регресію (перевірено навмисним мутантом у гілці).
- [ ] Незалежне рев'ю (D-026), звіт reports/review/tools-ci-answer-ui.md.
