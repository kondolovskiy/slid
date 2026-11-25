---
claimed_from: todo
claimed_at: 2026-11-20T10:59:41.090Z
id: write-eng-pool-g4-e4s4
type: write-pool
subject: eng
grade: 4
section: e4s4
depends_on: [write-eng-g4-e4s4, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe4s4
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Shops and shopping» (Англійська мова, 4 клас) — pe4s4

**Брати, коли розділ `e4s4` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s4.js`: `SLID.pool("eng", { id: "pe4s4", section: "e4s4", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s4` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s4, 2026-11-20)
**Результат:** `content/eng/pool-g4-e4s4.js`, пул `pe4s4`, 50 вправ a01–a50, статус draft. `node tools/validate.mjs --pool pe4s4` — 0 помилок, 0 попереджень; `personalization-qa --pool pe4s4 --strict` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk, рівні):** l1 vocab 5 (1,1,2,2,3; одна sk — 5 вправ, щоб перша сесія не вичерпала пару); l2 vocab 3, read 3, gram 3; l3 gram 6; l4 gram 3, phon 3, func 3, read 3; l5 func 3, gram 3, write 3; l6 func 3, read 3, phon 3. Кожна пара — рівні 1, 2, 3. Boss l7 — без вправ. Типи: gaps 18, word 13, pick 5, build 6, match 2, **stress 6** (sk `phon` у l4 і l6 — `stress` складами; у переліку задачі gaps/word/pick/build/match його немає, але без нього phon не тренувати — CONTENT_SCHEMA §10 дозволяє).

**Джерело:** `top34` (program: true), ТОП 3–4, PDF https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf. Сторінки за reports/verify/e4s4.md §1: с. 63 — тема «магазини і покупки», how many / how much, ‘would like to’ + infinitive, «ставити запитання» (l1, l3, l4, l5, l6 read/phon); с. 62 — подякувати, вибачитися, попрощатися (l6 func); с. 52 — дескриптор A1 про путівники торгових центрів і вказівники (l2).

**Словники (Cambridge Dictionary, curl 2026-11-20):** наголос — sixteen ˌsɪkˈstiːn, sixty ˈsɪk.sti, fourteen ˌfɔːˈtiːn, forty ˈfɔː.ti, seventeen ˌsev.ənˈtiːn, seventy ˈsev.ən.ti, eighteen ˌeɪˈtiːn, eighty ˈeɪ.ti, nineteen ˌnaɪnˈtiːn, ninety ˈnaɪn.ti, supermarket ˈsuː.pəˌmɑː.kɪt, bakery ˈbeɪ.kər.i, assistant əˈsɪs.tənt, sorry ˈsɒr.i, present (n.) ˈprez.ənt, bookshop ˈbʊk.ʃɒp — https://dictionary.cambridge.org/dictionary/english/<слово>. Злічуваність — FACT writer-e5s3 (CD): у how many / how much лише чисті [C] у множині (carrots, oranges, sandwiches, bananas, eggs, sweets, pens) і [U] (milk, water, bread, rice); cake, cheese не брав.

**Друга правильна відповідь — як відсічено:**
- a03 `word` bookshop: ключ ["bookshop", "book shop"]; «wants to buy» відсікає library.
- a10 first floor: ключ ["first", "1st"]; a30, a32 ціни: ключ і цифрою, і словом (PITFALL verifier-e6s2), after «pounds.».
- a33 «Would you like a bag? – Yes, {please|I do}» — пастка «I do», не «thank you» (PITFALL writer-e5s3); a35 Yes, please / No, thank you — вибір задає контекст (Emma has got a big bag; I’d like a birthday card).
- a34 «What ___ you like? – A cheese sandwich, please» — do відсікає відповідь-замовлення (як l5 #6 у звіті верифікації).
- some/any не оцінюється ніде; переліків «There is a X and a Y» у завданнях на is/are немає.
- Поверхи — лише в Англії (Tom, Emma; «In Britain»), українська система не згадується (PITFALL writer-e4s4).
- `build` — усі перестановки всіх підмножин плиток з extra перебрано через `SLID_LANG.check` (node, app/lang.js): a18 (13 692 порядки), a29, a39, a40, a41 (по 1 950 / 13 692), a44 (320) — рушій приймає лише ключі. a18, a29, a41 — питання з першою плиткою з великої і `keepCase: true` (PITFALL verifier-e4s8: розповідний відповідник «you would like a bag» / ехо-питання «we need how much rice» відсічено, a41 ще й умовою «What does the assistant ask?»). a44 — обидва місця only в ключі («I’ve only got» / «I’ve got only»). Пастки extra — інші форми (many, is, likes, buys, Are), не інший правопис.
- Ключі `word` — без кінцевого знака.

**Герої — канон:** Andrii і Sofiia (Kyiv), Emma і Tom з мамою (Англія), Oksana і Dmytro (Poltava), Mariia (Kharkiv, подарунок для friend — без імені), Taras (Lviv, без братів і сестер у тексті). Нових героїв немає.

**Спірне для верифікатора:**
1. Тип `stress` для `phon` (6 вправ) — поза переліком задачі; без нього пари (l4, phon), (l6, phon) не покрити.
2. l6 phon: в уроці підкреслено лише sorry, assistant, present — a49, a50 додають bakery, supermarket (l1 `<u>`) і fifteen (l4 `<u>`); a48 present — у body «a present» (іменник; дієслово pre<u>sent</u> — інший наголос).
3. l4 phon: sixteen / sixty … seventy, eighty — в уроці підкреслено лише fifteen / fifty (thirteen / thirty — у вправі), решта — за правилом «-teen в кінці, -ty на початку» (D-019: виводиться міркуванням). Наголос -teen поза контекстом — за CD (головний на -teen).
4. a18, a29, a41 — `keepCase: true` (як l3 #7 уроку): мала «how» на початку не зарахується.
5. a11 і a47 — читання з виведенням (поверх ±1, решта ₴200 − ₴150) — рівень 3.

## Нотатки верифікатора (verifier-pe4s4, 2026-11-20)
**Вердикт: verified.** Звіт — reports/verify/pe4s4.md. 50 вправ розв'язано; build — усі порядки з extra через app/lang.js; наголос 16 слів — CD + OALD (curl); 6 фрагментів — WebSearch без збігів. validate --pool pe4s4 — 0/0; personalization-qa --pool pe4s4 --strict — чисто.
Правки: a03 + «bookstore» у ключ (TQ-125 «як зараз»); a46 — друга відповідь «bag» відсічена («What present does Mariia buy?» + рядок про подарунок); a24 — hint. Спірні 1–5 автора прийнято. TQ не додано.
