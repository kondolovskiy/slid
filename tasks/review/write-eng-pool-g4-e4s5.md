---
claimed_from: todo
claimed_at: 2026-11-20T10:59:41.119Z
id: write-eng-pool-g4-e4s5
type: write-pool
subject: eng
grade: 4
section: e4s5
depends_on: [write-eng-g4-e4s5, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe4s5
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Health and hygiene» (Англійська мова, 4 клас) — pe4s5

**Брати, коли розділ `e4s5` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s5.js`: `SLID.pool("eng", { id: "pe4s5", section: "e4s5", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s5` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s5, 2026-11-20)
- **Файл:** content/eng/pool-g4-e4s5.js — пул `pe4s5`, 46 вправ a01–a46, status draft. Уроки e4s5l1–l6 (boss l7 без вправ). Типи: gaps 16, word 11, match 7, pick 6, build 6 (choice/stress не брав).
- **Покриття урок × sk (≥ 3 кожна; рівні 1–3 у кожному уроці):** l1 vocab 3 / gram 3 / func 3; l2 vocab 4 / gram 4; l3 vocab 3 / gram 4; l4 vocab 3 / gram 3 / func 3; l5 func 3 / gram 3; l6 gram 4 / func 3. `read` і `phon` не тренуються: `read` в уроках лише `choice`, `phon` лише `stress`, а дозволені типи задачі — gaps/word/pick/build/match.
- **Джерело:** `top34` (program: true) — ТОП 3–4, PDF с. 63 (тема «гігієна, стан здоров'я», функції «вказівки», «виражати настрій», «because») для всіх вправ, крім l2 gram a14–a17 — с. 62 («irregular nouns – plural», інвентар 3 кл.). Сторінки — з facts/eng.md і reports/verify/e4s5.md §1. Вправи власні, не з підручників і не дослівно з уроку.
- **Перевірка:** `node tools/validate.mjs --pool pe4s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe4s5 --strict` — лише «ще не verified». Кожну вправу розв'язано; `L.check(solution)` через app/lang.js у node vm — усі ok. Для кожного `build` перебрано всі підмножини й перестановки tiles + extra (`check(…, "en")`): приймаються лише порядки з `answer`; повні перестановки tiles переглянуто вручну. `word` — `wordVerdict` для кожного ключа й варіанта з великої літери та крапкою. `test-answer-ui.py --suite content --pool pe4s5` не запущено: Python-модуля playwright у контейнері немає (лише CI).
- **Друга правильна відповідь — що прийнято в ключ:** a06 і a09 `build` — другий порядок з обставиною на початку («With a dirty towel don’t dry your hands», «Before lunch wash your hands»), як e4s2 («In my room there aren’t any chairs»); a08 brush / clean (CD clean: «clean your teeth after meals»); a20 ill / sick / unwell (CD sick A2 «physically or mentally ill»; CD unwell «not well; ill»); a27 toothache / a toothache (OALD toothache, BrE обидва — reports/verify/e4s5.md §2); a33 matter / problem; a46 sleep / rest. Відсічено контекстом: a35 headache («I want to see your throat»), a36 home («Don’t go to school»), a41 because (відповідь на Why, тож as/since не підходять), a44 — займенники he / her / I роблять пари однозначними; a19 — he/she і ситуації.
- **Спірне для верифікатора:** a06 другий порядок без коми — прийнято, а не відсічено (неприродний, але граматичний); a11 «Don’t play computer games / all day» — «Go to bed all day» безглузде, тож пара одна; a42 — повна форма «I have got» (у l4 Final теж «I have got»), пастка `has`.
- **Словники (curl):** https://dictionary.cambridge.org/dictionary/english/clean, https://dictionary.cambridge.org/dictionary/english/unwell, https://dictionary.cambridge.org/dictionary/english/sick, https://www.oxfordlearnersdictionaries.com/definition/english/sick_1 (ill BrE / sick NAmE), решта форм — з reports/verify/e4s5.md §2.
- **Герої:** лише канон: Andrii + Sofiia (Kyiv), Oksana + Dmytro, Emma + Tom, Mariia (без братів і сестер), Taras і його собака, Bohdan, Dr Bondar, Dr Kovalenko (Poltava), Ms Savchuk. Нових немає.
