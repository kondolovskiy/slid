---
claimed_from: todo
claimed_at: 2026-11-05T14:52:52.167Z
id: tools-ci-test-ui
type: tools
subject: all
status: todo
claimed_by: eng-ciui
created: 2026-11-05
depends_on: [engine-sw-version-skew]
---
# CI: `node tools/test-ui.mjs` (Node Playwright) у job `browser`

Сценарії test-ui (Тренування з also, замок уроку, запобіжник невідомого екрана, оновлення PWA без змішування версій — 45 перевірок) зараз не в check і не в CI. Додати крок у job `browser` .github/workflows/pages.yml: Node Playwright тієї ж версії, що Python (1.63.0), браузер — той самий кеш; блокує deploy. Оцінити час; AGENTS.md §3 (рядок test-ui «не в check і CI») і docs/PUBLISHING.md оновити. Скіл `engine-change`; рев'ю D-026.

## Нотатки виконавця
