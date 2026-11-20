---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.498Z
id: write-eng-pool-g5-e5s1
type: write-pool
subject: eng
grade: 5
section: e5s1
depends_on: [write-eng-g5-e5s1, engine-eng-diag-pool, engine-eng-tools]
status: todo
claimed_by: writer-pe5s1
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Я, моя родина, мої друзі» (Англійська мова, 5 клас) — pe5s1

**Брати, коли розділ `e5s1` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s1.js`: `SLID.pool("eng", { id: "pe5s1", section: "e5s1", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s1` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.
