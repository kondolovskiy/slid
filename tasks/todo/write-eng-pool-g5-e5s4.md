---
id: write-eng-pool-g5-e5s4
type: write-pool
subject: eng
grade: 5
section: e5s4
depends_on: [write-eng-g5-e5s4, engine-eng-diag-pool, engine-eng-tools]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Одяг» (Англійська мова, 5 клас) — pe5…e5s4

**Брати, коли розділ `e5s4` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s4.js`: `SLID.pool("eng", { id: "pe5s4", section: "e5s4", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Вправи — власні (не з підручників CUP/OUP), лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s4` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.
