---
id: fix-diag-order
type: engine
subject: all
status: review
claimed_by: orchestrator
created: 2026-11-06
depends_on: []
---
# Порядок тесту рівня після вибору класу (CI PR #20: test-answer-ui впав)

CI job `browser` PR #20 (run 42219082558): `tools/test-answer-ui.py` чекав `[data-diag-skip="dg6"]` після вибору 6 кл., а відкрився тест історії `dgh6`. Причина: `pendingDiag()` (app/app.js) брав перший предмет у порядку збірки (hist, math, ukr, world — за назвою файлу); доки в історії не було тестів рівня, першою була математика. Це та сама знахідка P2-1 з reports/qa/qa-hist-diag.md.
Зробити: повернути попередню поведінку (першою — математика) без `if (subject === …)`: поле метаданих предмета `diagOrder`; порядок math → ukr → hist → world (рекомендація оркестратора в P2-1). Головне питання P2-1 (лише один тест у перший день чи всі картки) лишається людині.

## Нотатки виконавця
- 2026-11-06 · orchestrator. `app/app.js`: `pendingDiag()` — серед предметів класу з незавершеним і не відкладеним тестом обирає найменший `diagOrder` (`diagRank`: без числа — `Number.MAX_VALUE`; за рівних — перший у порядку предметів, `<`, не `<=`). Метадані: `content/subjects/{math,ukr,hist,world}.js` — `diagOrder` 1/2/3/4. `tools/validate.mjs`: `diagOrder` не число — помилка. Документація: CONTENT_SCHEMA §1. Картки на головній і порядок предметів не змінено.
- TDD: `tools/test-ui.mjs` сценарій 11 (`diagOrderScenario`, фікстура: у кожного предмета розділ 6 кл. і тест `dgo-<id>`, diagOrder навпаки до порядку SLID_SUBJECTS): до виправлення 2 ✗ (відкривався `dgo-hist`), після — 105 ok, 0 ✗. Перевірки: найменший diagOrder; відкладений («Пізніше») пропускається — наступний за diagOrder; без diagOrder і за рівних — порядок предметів.
- Мутанти: `find` замість сортування → 2 ✗; `<=` замість `<` → 2 ✗ (без diagOrder / рівні); прибрано правило validate → test-validate 2 ✗.
- `node tools/test-validate.mjs` 1431/1431; `npm run check` — exit 0; `node tools/test-ui.mjs` 105/0.
- Не запускалось локально: `python3 tools/test-answer-ui.py --suite regression` (немає Python-модуля playwright) — перевірить CI PR #20.
