---
claimed_from: todo
claimed_at: 2026-11-01T19:34:54.388Z
id: engine-half-p3
type: engine
subject: math
status: todo
claimed_by: engineer-half-p3
created: 2026-11-01
depends_on: [engine-diag-half-credit]
---
# Півбала: дрібні знахідки рев'ю (P3, reports/review/engine-diag-half-credit.md)
- app/learn.js:122 — коментар «вердиктами (OK/BAD/SKIP)»: додати HALF.
- tools/test-answer-ui.py:1339 — docstring half_credit_checks обіцяє compound «245 см» → півбала, а у фікстурі compound немає: додати завдання compound у фікстуру або виправити docstring.
- tools/test-answer-ui.py:1681 — заголовок «Сторона квадрата» при умові «Обчисли √576»: узгодити.
- **T-1 (P2, reports/review/engine-evidence-p3.md):** tools/diff-answers.mjs:326, :341 порівнюють `OLD.diagAnswerOk` з `NEW.diagVerdict`; після half-credit будь-яке `--old` з diagVerdict дає хибні «105 непояснених» і rc 1. Якщо в старому learn.js є `diagVerdict` — порівнювати diagVerdict з diagVerdict. Тест: `--old HEAD` → 0 змін, rc 0.
- P3-7 (там же): тест, що резерв `save()` не чіпає сторонніх ключів localStorage (мутант `localStorage.clear()` зараз виживає).
- P3-8: у docs/EVIDENCE.md згадати неатомарний перезапис `slid.evidence.pending` двома вкладками.
Незалежне рев'ю D-026 (можна разом з іншою дрібною задачею).

## Нотатки виконавця
