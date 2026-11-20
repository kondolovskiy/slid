---
claimed_from: todo
claimed_at: 2026-11-20T10:59:41.025Z
id: write-eng-pool-g4-e4s2
type: write-pool
subject: eng
grade: 4
section: e4s2
depends_on: [write-eng-g4-e4s2, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe4s2
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «My home» (Англійська мова, 4 клас) — pe4s2

**Брати, коли розділ `e4s2` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s2.js`: `SLID.pool("eng", { id: "pe4s2", section: "e4s2", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s2` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s2, 2026-11-20)
- `content/eng/pool-g4-e4s2.js`: пул `pe4s2`, 35 вправ (a01–a35), 6 уроків (boss e4s2l7 — без вправ). `node tools/validate.mjs --pool pe4s2` — 0 помилок, 0 попереджень; `personalization-qa --pool pe4s2 --strict` — лише «ще не verified».
- Уроки × `sk` (кожна пара ≥ 3 вправи, у кожній парі рівні 1–3): l1 vocab ×5; l2 gram ×3, vocab ×3; l3 vocab ×3, gram ×3; l4 gram ×5; l5 gram ×3, func ×3; l6 write ×4, read ×3. `phon` (stress) не тренуємо: тип поза переліком задачі. Типи: gaps 17, word 11, match 3, pick 2, build 3.
- Джерело: `top34` (ТОП 3–4, Савченко, 2018, `program: true`), усі `src` — «top34 с. 62» (тема «Помешкання — види помешкань, умеблювання» і граматика інвентаря 3 кл.: there is/are, prepositions of place, some/any, irregular plural — facts/eng.md, reports/verify/plan-eng-g4.md §2). Вправи власні.
- Розв'язано кожну вправу через app/lang.js у node (`check(solution)`), ключі `word` — з варіантами (’/', повна форма з `contractions`). `build` a21, a24, a30: перебрано всі перестановки всіх підмножин tiles+extra — зараховано рівно один порядок; усі три з `keepCase: true` і великою першою плиткою (Where / Is / There), тож обставина на початку й питальна інверсія відсічені.
- Друга правильна відповідь — відсічено: is/are без переліків (inbox verifier-e5s7); some/any у питаннях пропуском не даємо («Are there some…?» теж можливе); house/flat — з явною опорою «isn’t in a block of flats» (verifier-e4s2); a27 — ключ «aren’t» і «aren’t any»; a13 — wardrobe, cupboard (CD wardrobe: «a tall cupboard in which you hang your clothes»), closet (CD «mainly US»); a02 — lift, elevator (AmE-лексика в ключі, TQ-122).
- Словник: https://dictionary.cambridge.org/dictionary/english/wardrobe , https://dictionary.cambridge.org/dictionary/english/cupboard , https://dictionary.cambridge.org/dictionary/english/closet
- Герої — канон розділу, нових немає (Andrii flat Kyiv, балкон, без саду, три полиці; Oksana house, Murka, Dmytro, коробка на килимі, постери коней; Taras new flat Lviv, три спальні, велика кухня, три полиці; Mariia flat Kharkiv; Emma house з садом; Grandma — «house with a big garden» з e4s2l1, місто не назване).
- Спірне для верифікатора: a24 — «Is a lamp there on your desk?» (тими самими плитками) не зараховується, вважаю неприродним; a33 — «bed under the window» хибне лише за текстом; a09 — «watch TV» прив'язано до living room за уроком.

## Нотатки верифікатора (verifier-pe4s2, 2026-11-20)
- Вердикт: **verified**, звіт reports/verify/pe4s2.md. 35 вправ автора — без знахідок: ключі правильні, другої правильної немає, у build прийнято рівно 1 порядок (перебір через app/lang.js), ключі `word` без `.!?`, збігів з опублікованими текстами немає (WebSearch).
- Додав a36–a50 (15): пари урок × sk з уроків без вправ — l1 phon, l1 read, l2 write, l3 phon, l4 read (по 3, рівні 1–3). Stress — лише слова з `<u>` свого уроку (garden, balcony; furniture, wardrobe, carpet), один наголос у CD і OALD (URL — у звіті).
- Спірне автора (a24, a33, a09) — прийнято, обґрунтування в звіті §2. a30: велика «There» + keepCase відсікає і обставину на початку, і питання «Isn’t there…» (PITFALL verifier-e4s8).
- validate --pool pe4s2: 0/0; personalization-qa --pool pe4s2 --strict: код 0. Браузерні прогони — у CI (немає Python playwright).
