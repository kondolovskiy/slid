---
id: write-ukr-diag-g10
type: write-diag
subject: ukr
grade: 10
section: dgu10
status: todo
claimed_by:
created: 2026-11-10
depends_on: [plan-ukr-g10-11]
---
# Тест рівня «Українська мова, 10 клас» (dgu10)

## Навіщо
Запит людини (чат 2026-11-10): повне покриття української разом із початковим тестуванням (D-051). Тест шукає прогалини з попередніх класів і з'ясовує, що з 10 кл. дитина вже знає.

**Брати лише тоді, коли всі розділи 10 кл. мають `status: "verified"`** (тема `cur` потребує уроків класу; `depends_on` claim.mjs не перевіряє — подивись сам: `node tools/claim.mjs list done --subject ukr --grade 10`).

## Прочитати перед роботою
- AGENTS.md §4; скіли `math-pool-diag` (розділ «Тест рівня») і `content-author` (норми ukr, D-041).
- docs/CONTENT_SCHEMA.md §9 (pre / cur, baseline, known, `rev`, мовні типи в тесті й їхні ліміти); docs/PERSONALIZATION.md §1.
- Зразки: content/ukr/diag-g8.js і tasks/done/write-ukr-diag-g8.md, reports/verify/dgu8.md, reports/qa/qa-ukr-diag.md.
- style/ukr.md, facts/ukr.md і ukr-8.md, glossary/ukr.md, pitfalls-content.md; уроки 5–10 кл., їхні `requires` і `learned`.

## Результат
`content/ukr/diag-g10.js`: `SLID.diag("ukr", { id: "dgu10", grade: 10, … })`. **id `dgu10` — ключ прогресу, не перейменовувати.**
- `pre`: 8–11 тем × 2 завдання (базове → складніше) — опори з 9 кл. і наскрізні вміння 5–9 кл. (орфографія, пунктуація, морфологія, синтаксис); `lessons` — 1–2 уроки, що вчать тему; `for` — розділи 10 кл., що на неї спираються.
- `cur`: 4–8 тем × 1 завдання — по одній на розділ 10 кл. (не РМ «Пишемо самі»); завдання перевіряє **все** ядро уроку (`learned`) — складений `multi` чи мовна вправа.
- Разом 22–30 завдань, ≈ 12 хв (тривалість звір із пілотом research-math-diag-duration, якщо вже є дані).

## Вимоги
- Типи: choice, multi, sort, order, gaps, pick, stress, word, split (ліміти тесту — validate); без hyp/poll/slider/align; без fbOk/fbText/hint.
- D-041: помилкою — лише ненормативне і за підручником/УП, і за словником. Вибір між нормативними варіантами (у/в, і/й, із/зі) не оцінювати.
- Кожне завдання розв'яжи двічі; норми — з facts або джерела з URL у нотатках.

## Обмеження
Змінюй лише `content/ukr/diag-g10.js` і цю задачу; build і check — оркестратор. `diagOrder` у ukr уже є.

## Готово, коли
- [ ] `node tools/validate.mjs --diag dgu10` і `node tools/personalization-qa.mjs --diag dgu10` — 0 помилок; `status: "draft"`; нотатки — таблиця «тема → kind → lessons / for → базове / складніше → чому».
- [ ] Рядок в inbox; задача → `tasks/review/` для content-verifier зі свіжим контекстом; після нього — браузерне приймання (qa-diag-ukr-world-new).

## Нотатки виконавця
