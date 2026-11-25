---
id: research-eng-vocab-level
type: research
subject: eng
depends_on: [design-eng]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Як перевіряти рівень CEFR англійських слів (Pre A1–B2)

## Навіщо
МП-ІМ (розд. 4.3, 5.3, с. 21, 34) радить перевіряти рівень слова «за посиланнями», але посилань у PDF немає (docs/design/english.md §0). Авторам і верифікаторам потрібне джерело рівня; теорія теж англійською, тож рівень пояснень важить не менше за рівень вправ.

## Що з'ясувати
1. Відкриті списки слів за CEFR (кандидат — CEFR-J Wordlist): ліцензія (зберігати в репозиторії й використовувати в tools/?), обсяг, британська норма.
2. Cambridge English Vocabulary Profile, Oxford 3000/5000 — умови використання (довідка в сесії без копіювання?). Словники вже дозволено в мережі середовища (dictionary.cambridge.org, www.oxfordlearnersdictionaries.com, www.merriam-webster.com, en.wiktionary.org).
3. Пропозиція інструмента `tools/eng-level.mjs` (попередження «слово вище рівня класу» — і у вправах, і в поясненнях), лише якщо ліцензія дозволяє.

## Результат
reports/research/research-eng-vocab-level.md з URL і текстами ліцензій; рядок пропозиції в inbox.
