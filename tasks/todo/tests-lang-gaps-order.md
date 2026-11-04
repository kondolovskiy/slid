---
id: tests-lang-gaps-order
type: tests
subject: ukr
status: todo
claimed_by:
created: 2026-11-04
---
# Тест: рушій справді перемішує варіанти gaps

З рев'ю engine-lang-gaps-shuffle (reports/review/engine-lang-gaps-shuffle.md, P2-1, P3-1): playtest ловить відсутність виклику `gapOrder` у `langHtml` лише на пропусках, де «—» не останній у тексті (u5s3, u6s1); test-answer-ui порядок не перевіряє.

## Що зробити
1. Regression-сценарій у tools/test-answer-ui.py: `add_init_script("Math.random=()=>0")` (або інша детермінована підміна) і перевірка, що кнопки пропуску з ≥ 2 звичайними варіантами стоять не в порядку тексту.
2. playtest: запам'ятати порядок кнопок перед `lang_wrong` і порівняти після (порядок не стрибає між спробами).
3. Мутація: без `gapOrder` у app.js тест має падати на будь-якому розділі.

Незалежне рев'ю — D-026.

## Нотатки агента
