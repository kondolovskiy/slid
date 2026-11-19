---
id: engine-eng-validate-p3
type: engine
subject: eng
depends_on: [engine-eng-validate]
status: todo
claimed_by:
created: 2026-11-19
source: review engine-eng-validate
priority: P3
---
# Дрібниці validate для англійської (P2/P3 з рев'ю engine-eng-validate)

Скіл `engine-change`; звіт — reports/review/engine-eng-validate.md.

1. P2-1 tools/validate.mjs:532 — тест на ліміт `maxText` для задач пулу (клас через `p.section`); мутант, що прибирає виклик, виживає.
2. P3-1 content-checks.mjs:76 `OPT_NUM_EN` — хибні збіги: «Your first answer was close.», «a second answer», «Answer 2 questions…», «The answer A is a noun.».
3. P3-2 content-checks.mjs:52 — `ASK_EN`: «Read» рахується інструкцією вибору; `POS_EN` на «the first line of the poem».
4. P3-3 content-checks.mjs:239 — `FOREIGN_SKIP` без `note.links`.
5. P3-4 validate.mjs:334, :337, :495 — тести, що відрізняють перемикачі `tl ?` (рід у звертанні, linkNoQuestion).
6. P3-5 validate.mjs:55–56 — тест на помилку без літер `OPT_LETTERS_LANG`.
7. P3-6 docs/CONTENT_SCHEMA.md:30 (речення про aria-label в абзаці soon), :97 (дві дужкові вставки).
8. Обмеження автора: межа довжини речення за класом (style/eng.md: ≤ 8 слів у 4–5 кл., ≤ 12 у 6–9) — ключ профілю й перевірка.

Рев'ю D-026 після реалізації.
9. (writer-e5s10) validate попереджає про заборонену фразу у групі `[…]` pick («[the most biggest]» — хибна група «Find the mistake»), хоча CONTENT_SCHEMA каже, що вміст `[дужок]` pick не перевіряється; узгодити код і документацію (група-помилка — легітимна).
