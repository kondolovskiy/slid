---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.922Z
id: tools-playtest-verdict-msg
type: tools
subject: engine
status: todo
claimed_by: eng-playtest
created: 2026-11-05
depends_on: []
---
# playtest.py / test-answer-ui.py: явне повідомлення «не зараховано» замість TimeoutError

Скіл `engine-change`; рев'ю D-026.
1. playtest.py: після «Перевірити» явно перевіряти вердикт і падати з «урок <id>, екран N не зараховано», а не `TimeoutError: Page.click … #action disabled «Спробувати ще раз»` (легко сплутати з флейком).
2. test-answer-ui.py:87 (play_prerequisite) — голий `assert` → повідомлення з id уроку й екрана.
Перевірка — мутант choice (як у reports/qa/qa-ci-browser-mutant.md) дає зрозуміле повідомлення. Браузерні прогони — у CI (локально немає Python playwright).

Джерело: inbox 05.11 qa-ci-browser-mutant IDEA.

## Нотатки виконавця
