---
id: engine-eng-stats-p2
type: engine
subject: eng
depends_on: [engine-eng-stats]
status: todo
claimed_by:
created: 2026-11-19
source: review engine-eng-stats
priority: P2
---
# Англійські склади й тести профілю (P2/P3 з рев'ю engine-eng-stats)

Скіл `engine-change`; звіт — reports/review/engine-eng-stats.md. Бажано до калібрування профілю eng (style-eng-g4-5).

1. **P2-1** tools/lib.mjs:115–123 `enSyllables` — систематичні похибки на частих словах (45 із 65 розходяться зі словником): зайво «довгі» something, sometimes, homework, lovely, careful, useful, movement, nineteen, million, region (німе e перед -ly/-ful/-ment, складені слова, -ion); занижені going, being, player, quiet, idea, museum. Додати правила (і тест на списку частих слів 4–6 кл. зі словниковим еталоном, Cambridge Dictionary).
2. **P2-2** tools/validate.mjs:445 — мутанти вижили (`lessonMetrics(l)` без `lang`; старий вираз профілю замість `profileFor`): фікстура предмета з `targetLang` і ключем точного класу в test-validate.
3. **P3:** повідомлення validate (:446) пише діапазон, коли межа з ключа класу; «U.S. He…», «Baker St. It…» склеюються (lib.mjs:144, :146); `profileFor` (lib.mjs:170) не читає `_default["<клас>"]`; негативні тести для `maxText` `Math.max(0)`, `[cstx]`, lookahead ініціалів, `No.` без цифри.

4. **(куратор пам'яті 2026-11-27; style-eng-g4-5, -g6, -g7, -g10 — повторено 4 рази)** z-прапорець «нетипово для сім'ї» без виходу за профіль: 17 прапорців у 4–5 кл., 19 у 6 кл., 17 у 7 кл., 7 у 10 кл. — правок не потребував жоден. Рахувати z у межах класу, коли профіль має ключ класу, або не показувати при |z| < 3 у межах профілю. Сім'я «10-11» змішує повний 10 і 11 кл.

Рев'ю D-026 після реалізації.
