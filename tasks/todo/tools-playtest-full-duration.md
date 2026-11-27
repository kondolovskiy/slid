---
id: tools-playtest-full-duration
type: tools
subject: 
depends_on: []
status: todo
claimed_by: 
created: 2026-11-27
source: reports/review/engine-eng-ci-playtest-timeout.md (P2-1)
---
# Повний плейтест (`playtest: full`) не вкладається в 90 хв

Уроків уже 1827 (після eng 7–11); навіть за 3,3 с на урок — ≈ 100 хв, для eng 7–11 ≈ 8 с на урок. Крок «Плейтест усіх уроків» має `timeout-minutes: 90`, job — 120.

## Варіанти
- Розбити повний прогін на кілька кроків / matrix-jobs за предметами (кожен зі своїм таймаутом).
- Прогрес по розділах у playtest.py (`flush=True`), щоб таймаут показував, де час.
- P3 з рев'ю: обмежити відкат вправи build у tools/playtest.py:230 (необмежений цикл).

## Готово, коли
- [ ] Повний прогін завершується в лімітах; незалежне рев'ю D-026.
