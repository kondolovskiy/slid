---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.776Z
id: write-eng-pool-g5-e5s8
type: write-pool
subject: eng
grade: 5
section: e5s8
depends_on: [write-eng-g5-e5s8, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe5s8
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Свята і традиції» (Англійська мова, 5 клас) — pe5s8

**Брати, коли розділ `e5s8` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s8.js`: `SLID.pool("eng", { id: "pe5s8", section: "e5s8", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s8` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s8, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s8.js`, пул `pe5s8`, 68 вправ a01–a68, статус draft. `node tools/validate.mjs --pool pe5s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s8 --strict` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk: кількість, рівні):** l1 vocab 5 (1,1,2,2,3), phon 3; l2 func 3, gram 4 (1,2,3,3), vocab 4 (1,2,2,3), phon 3, write 3; l3 cult 3, gram 3, read 3; l4 cult 3, gram 4 (1,2,3,2), func 3, vocab 3, read 3; l5 gram 4 (1,2,2,3), func 4 (1,2,2,3), write 3; l6 gram 4 (1,2,2,3), write 3. Кожна пара — рівні 1, 2, 3. Boss l7 — без вправ. Типи: gaps 31, word 13, pick 7, build 7, match 5, stress 6, choice 1 (read, a49 — дозволено задачею).

**Джерело:** `mpim` (program: true), МП-ІМ, PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (pdftotext із scratchpad verify-eng-glossary, SHA як у facts/eng.md). Сторінки: с. 18 — «Пише короткі вітальні листівки», «Занотовує події, відповідні дати» (l1, l2, l6 write); с. 20 — «Свята і традиції» (l3, l4 cult/gram/func/vocab); с. 16 — читання листів A2 (read l3, l4); с. 21 — Exclamations: What a … (l6 gram); с. 22 — Past simple (l5). Порядкових числівників МП-ІМ окремо не називає (reports/verify/e5s8.md §1) — l1 віднесено до с. 18 (дати).

**Словники:** нових слів для наголосу немає — `stress` лише зі слів, підкреслених `<u>` у своєму уроці й звірених верифікатором за CD + OALD (reports/verify/e5s8.md §2): thirteenth, thirtieth, twentieth (l1); January, September, October, November (l2). December і August не брав (немає `<u>`, FACT writer-e5s8 про August).

**Факти:** лише календар і традиції розділу (24 August, 6 December, 25/26 December, 5 November, Pancake Day, Christmas Eve 12 dishes, kutia — grain, honey and poppy seeds). Bonfire Night ніде не названо вихідним; Independence Day не названо вихідним (воєнний стан).

**Друга правильна відповідь — як відсічено:**
- PITFALL verifier-e5s8 (was/were без маркера): a53 — «It’s 2 January… On New Year’s Eve», «Write was or were», друге речення «Their presents for me were great!» відсікає weren’t; a54 — 27 December + варіанти лише минулого; a51, a52 — Yesterday / Last Sunday / Last week; a59 — «on 7 December… Yesterday».
- Ordinal / дати BrE: у `word` на числівник — «Write … as a word» (a03, a10, a17), ключ із дефісом і без (thirty-first); «12th»/«8th» не зараховуються (умова). Дати лише у формі «3 March» / «the third of March», без «March the third» у пропусках.
- Best wishes / regards: `word` на закінчення листівки не давав; у gaps Best wishes / Love ніколи не стоять варіантами одного пропуску (пастка — Dear).
- on/in: лише дата ↔ місяць (a12–a15, a29–a31); «at Christmas», «on Christmas Eve» не оцінюються. a14 — «Write on or in» (відсікає always тощо).
- a37 pillows: ключ pillows / pillow; умова «under her head» відсікає beds.
- a65 What a lovely dinner: пастка лише «an»; прикметник один (lovely + big дало б «a lovely big dinner»).
- `build` — усі перестановки всіх підмножин плиток з extra через `SLID_LANG.check` (node, app/lang.js): a23, a25 (по 986 409 порядків), a41 (1 956), a57, a60, a65 (по 325) — рушій приймає лише ключ. a23, a25, a41, a57, a60 — велика перша плитка + `keepCase: true` (відсікає питальну інверсію «is my birthday…», розповідне «your party was fun», обставину на початку «under their pillows children…»). Пастки extra — інші форми (three, twenty-two, finds, Were, was, an), не інше написання.
- `word` перевірено `wordVerdict` на хибних кандидатах (was/are/weren’t/in/at/a/the/12th/beds…) — приймаються лише ключі. Ключі `word` без кінцевого знака.

**Герої — канон, нових немає:** Taras (Lviv; день народження 5 May — l2; сестра Zlata, її день народження й торт — a64, без дати); Ostap 22 July, Yaryna 3 March і її брат 12 August (l2); Emma (birthday in May; Mum, Dad, Tom, Grandma, Grandad; Christmas pudding від тата; 26 December — до бабусі); Oksana (бабуся 21 November; брат Dmytro не співає колядок — тому в a48 «my friends and I sing carols»); Andrii і Bohdan (Kyiv); Mariia (Kharkiv, flat, тітка й дядько). Дрібні нові деталі: a49 — Christmas dinner у родини Emma о 2 o’clock, увечері ігри; a52 — Andrii з Bohdan на вечірці «last week»; a33 — Dmytro отримав м’яч на St Nicholas Day; a44 — у родини Emma немає kutia.

**Спірне для верифікатора:**
1. a49 — `choice` для read (задача дозволяє choice/multi для read); решта read — gaps/word на короткому тексті.
2. l1 phon (a06–a08) і l2 phon (a20–a22) — лише слова з `<u>` уроку, тож комбінації повторюються (у l1 — три слова на три вправи).
3. a46 — «carols — songs at Christmas»: значення в уроці не дано окремо, лише контекст «children sing carols» на Christmas Eve (OALD carol_1 «a Christian religious song sung at Christmas»).
4. a11 — один пропуск із трьома фразами-варіантами (the fifth of May / the five of May / the May of fifth), як l2 #2 уроку.
