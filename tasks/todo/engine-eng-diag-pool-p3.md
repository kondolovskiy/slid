---
id: engine-eng-diag-pool-p3
type: engine
subject: eng
depends_on: [engine-eng-diag-pool]
status: todo
claimed_by: 
created: 2026-11-20
source: review engine-eng-diag-pool
---
# Дрібні знахідки рев'ю engine-eng-diag-pool (P3)

Скіл `engine-change`. Звіт: reports/review/engine-eng-diag-pool.md.
1. P3-1: tools/test-validate.mjs — кейс «рівно 7 плиток (з extra) у build тесту рівня — чисто» (мутант `>=` у tools/validate.mjs:320 зараз виживає).
2. P3-2: негативний тест — попередження про `program` (tools/validate.mjs:548) не з'являється для предметів без `targetLang` (math/ukr).
3. P3-3: validate — попередження «baseline-тема без `see`» для предмета з `targetLang`, якщо в тесті є baseline-теми з `see` і без (текст плану радить «пройти теми попередніх класів», а уроку немає).

5. tools/personalization-qa.mjs --pool: перевіряти покриття «урок × sk» (≥ 3 вправи на кожну пару `sk`, що є в уроці) — зараз пропуски phon/read у пулах eng ловили лише верифікатори вручну.
4. tools/make-tasks.mjs:323 — шаблон пулу eng: «типи gaps/word/pick/build/match» → додати stress (phon), choice/multi (read), як POOL_TYPES.

Готово: тести падають без зміни; `npm run check`; незалежне рев'ю D-026.
