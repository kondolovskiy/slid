---
id: write-eng-pool-g5-e5s2
type: write-pool
subject: eng
grade: 5
section: e5s2
depends_on: [write-eng-g5-e5s2, engine-eng-diag-pool, engine-eng-tools]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Шкільне життя» (Англійська мова, 5 клас) — pe5…e5s2

**Брати, коли розділ `e5s2` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s2.js`: `SLID.pool("eng", { id: "pe5s2", section: "e5s2", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Вправи — власні (не з підручників CUP/OUP), лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s2` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.
