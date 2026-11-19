---
id: write-eng-pool-g4-e4s7
type: write-pool
subject: eng
grade: 4
section: e4s7
depends_on: [write-eng-g4-e4s7, engine-eng-diag-pool, engine-eng-tools]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Holidays and travel» (Англійська мова, 4 клас) — pe4s7

**Брати, коли розділ `e4s7` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s7.js`: `SLID.pool("eng", { id: "pe4s7", section: "e4s7", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s7` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.
