---
claimed_from: todo
claimed_at: 2026-11-20T10:59:41.060Z
id: write-eng-pool-g4-e4s3
type: write-pool
subject: eng
grade: 4
section: e4s3
depends_on: [write-eng-g4-e4s3, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe4s3
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Free time: sport and heroes» (Англійська мова, 4 клас) — pe4s3

**Брати, коли розділ `e4s3` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s3.js`: `SLID.pool("eng", { id: "pe4s3", section: "e4s3", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s3` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s3, 2026-11-20)
- **Файл:** content/eng/pool-g4-e4s3.js — пул `pe4s3`, 64 вправи `a01`–`a64` на уроки e4s3l1–l6 (boss не береться). `node tools/validate.mjs --pool pe4s3` — 0 помилок, 0 попереджень; `personalization-qa --pool pe4s3 --strict` — лише «ще не verified».
- **Покриття урок × sk (кожна пара — ≥ 3, рівні 1–3 в кожному уроці):** l1 vocab 3 / gram 4 / phon 3; l2 gram 6 / phon 3; l3 gram 5 / phon 3 / read 3; l4 gram 5 / read 3 / write 3; l5 vocab 4 / read 3 / phon 3 / write 3; l6 read 3 / write 3 / func 4.
- **Типи:** gaps, word, pick, build, match + `stress` для `phon` (дозволений POOL_TYPES і CONTENT_SCHEMA §10; оркестратор підтвердив). Слова в `stress` і phon-`pick` — лише ті, чий наголос показав урок (tennis, basketball, gymnastics, karate, always, usually, sometimes, never, Monday, Saturday, weekend, favourite, hero, clever, funny; звірено верифікатором e4s3 за CD UK і OALD BrE, reports/verify/e4s3.md §2).
- **Джерело:** `sources` — лише ТОП 3–4 (`top34`, `program: true`, title/url — facts/eng.md «Джерела»); `src`: «top34 с. 63» (тема «спорт, улюблені дитячі герої», adverbs of frequency, but/and/or — уроки l1–l5), «top34 с. 54» (онлайн-допис про хобі, A1 — урок l6). Вправи й тексти власні; з уроку не скопійовано жодного речення ≥ 12 слів (дописи Ostap, Sofiia, Polina, Yurii, Bohdan, Kateryna, Emma — нові).
- **Розв'язання:** кожну вправу розв'язав сам. Через app/lang.js у node (vm): `solution` + `check` для всіх вправ; `wordVerdict` для кожного ключа `word` (кінцевого знака в ключах немає, «key.» теж ok); для кожного `build` — усі перестановки всіх підмножин плиток з `extra`: рушій приймає рівно порядки з `answer` (a24 і a60 — обставина часу на початку без коми, «On Fridays Emma plays tennis», додано в `answer`; a39, a41, a60 — обидва порядки іменників).
- **Друга правильна відповідь — як відсічено:** a12, a43 — у `body` перелік слів; a21 — «Change do»; a14/a15/a53/a54/a59/a63 — підмет-власна назва чи «My» з великої + `keepCase` (питальний порядок «is Oksana…» не підходить до «Write about her»); a40 — пастка `or`, не `and` («I like cycling, and I don’t like…» граматичне); a35 — хибні `but`/`or`, не `and` після коми; pick a06/a23/a35 — «Two words are wrong». Ключі `word`: a03 + biking, bike riding; a04 + ice skating, ice-skating (CD: https://dictionary.cambridge.org/dictionary/english/ice-skating, …/biking); a30 + weekends (BrE at the weekends); a33 + yet/though/although (як verifier-e4s3); a45 + powerful, mighty (CD …/mighty).
- **Пастки inbox враховано:** «play/do sport» не вжито зовсім; do як хибний варіант лише з cycling/skating (OALD skating — лише go), swimming з do — не протиставлено в нових gaps (a01 cycling, a05/a07 skating); «on the weekend» (AmE) хибним варіантом не дано (лише at/in); заперечень з and немає (CD Grammar or).
- **Герої — лише канон, без суперечностей:** Tom — skating, never swimming (не вміє плавати); Emma — tennis on Fridays, swimming; Mariia — swimming Mon/Wed/Fri, cycling з татом at the weekend, не football; Taras — basketball, не swimming, не judo; Dmytro — cycling, не swimming; Yurii — football щодня, без велосипеда; Oksana — karate, swimming, skating з Dmytro at the weekend, не judo; Sofiia — gymnastics (e4s3l1 «My sister and I do gymnastics»); Ostap (Lviv, друг Taras) — football; Daryna (Kyiv). Персонажі книжок — лише Super Kit, Polly, Robin Hood, Kotyhoroshko. Нових героїв не введено. Нові дрібні факти для style-sync: Polina — gymnastics on Tuesdays, skating з мамою at the weekend, tennis after school; Bohdan — tennis Mon/Thu і Saturdays, cycling on Fridays, не любить football, улюблений герой Robin Hood; Kateryna — football з друзями, skating з мамою; Sofiia — gymnastics on Saturdays, не любить football; Ostap — football Mon/Thu, sometimes cycling з Taras.
- **Спірне:** (1) read покрито gaps/pick/word на коротких текстах (choice/multi не брав — не потрібні для покриття); (2) a13 «I {*am always|always am} happy» — емфатичне «always am» у мовленні трапляється, але урок вчить «after am, is, are» — лишив як хибне; (3) a42 match «A brave hero ↔ is not afraid», «A kind hero ↔ helps people» — пари за означеннями уроку, «brave hero helps people» теж життєве, але не за правилом уроку; (4) a57 «Ostap ___ goes cycling» — «also» граматичне, але не відповідає на «How often?» з `body`.
