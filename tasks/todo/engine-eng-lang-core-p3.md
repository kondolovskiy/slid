---
id: engine-eng-lang-core-p3
type: engine
subject: eng
depends_on: [engine-eng-lang-core]
status: todo
claimed_by:
created: 2026-11-19
source: review engine-eng-lang-core
priority: P3
---
# Дрібниці англійського введення (P3 з рев'ю engine-eng-lang-core)

Скіл `engine-change`; звіт — reports/review/engine-eng-lang-core.md.

1. P3-2 app/lang.js:198, 213 — непослідовний список пар BrE/AmE: `practise` виключено як «різні частини мови», а `licence→license`, `storey→story` включено; вирішити однаково (за потреби — TQ).
2. P3-3 app/lang.js:224–231 — ключ «Kate's book» з `contractions: true` приймає «Kate is book»: порада в CONTENT_SCHEMA §4.1 не вмикати `contractions` з присвійним 's (або validate-попередження); обрізання до 64 варіантів губить комбінації при ≥ 4 токенах з 's/'d.
3. P3-4 app/lang.js:278 — «Almost: check the spelling.» і коли різниця лише в розділовому знаку («Hello,», «Mr»), і на інше справжнє слово («bat» на «cat»).
4. P3-5 app/lang.js:239 — вираз часу ловить десяткові числа («£2:50» = «£2.50»; симетрично, але неочевидно).
5. P3-6 app/app.js:15–18 — коментар «"" — мова сторінки» на рядку TL неточний.
6. P3-7 tools/test-lang.mjs — тести: `"[The] boys' toys"` (лапки без пари), «I had gone» на «I'd gone».

Рев'ю D-026 після реалізації.
