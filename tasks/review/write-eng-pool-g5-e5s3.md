---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.575Z
id: write-eng-pool-g5-e5s3
type: write-pool
subject: eng
grade: 5
section: e5s3
depends_on: [write-eng-g5-e5s3, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe5s3
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Харчування» (Англійська мова, 5 клас) — pe5s3

**Брати, коли розділ `e5s3` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s3.js`: `SLID.pool("eng", { id: "pe5s3", section: "e5s3", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s3` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s3, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s3.js`, пул `pe5s3`, 52 вправи a01–a52, статус draft. `node tools/validate.mjs --pool pe5s3` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s3 --strict` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk, рівні 1–3 у кожній парі):** l1 vocab 4, phon 3 (stress), func 3, write 3; l2 gram 3, write 3; l3 gram 4, write 3; l4 gram 5, write 3; l5 func 3, gram 3, write 3; l6 read 3 (choice 2, multi 1), cult 3, write 3. Boss l7 — без вправ. Типи: gaps 20, build 11, word 7, pick 5, match 3, stress 3, choice 2, multi 1.

**Джерело:** `mpim` (program: true), МП-ІМ, https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Сторінки — за reports/verify/e5s3.md §1: с. 20 — тема «Харчування», функції (l1, l5 func, l6 cult/write); с. 21 — some/any, much/many, a lot of (l3, l4); с. 22 — uncountables, would like (l2, l5 gram/write); с. 16 — читання A2: меню, рецепти (l6 read).

**Словники (curl 2026-11-20):** наголос CD UK і OALD однаковий, один головний наголос: breakfast ˈbrek.fəst, dinner ˈdɪn.ər, potato pəˈteɪ.təʊ, tomato təˈmɑː.təʊ, favourite ˈfeɪ.vər.ɪt — https://dictionary.cambridge.org/dictionary/english/<слово>, https://www.oxfordlearnersdictionaries.com/definition/english/<слово>_1. Усі п'ять підкреслено в l1 info (<u>). Злічуваність — FACT writer-e5s3 (CD): у a/some з однинею лише [C] sandwich, biscuit і [U] bread, milk, rice, water, flour, borscht; apple/egg/banana/juice/tea/soup — [C or U], тож з ними a/some не оцінюю (an|a apple — лише a/an); much/many — з формами множини на -s (пастка much + множина однозначна).

**Друга правильна відповідь — як відсічено:**
- dinner ніде не стоїть варіантом поруч із lunch і не є ключем для полудня (PITFALL verifier-e5s3); у a09 lunch — лише в питанні When.
- some/any оцінюється лише в (+) і (−); у питаннях пропуску на some/any немає (a22 — лише Is/Are з flour / sandwiches).
- much у (+) з незлічуваним не дано пасткою; a lot of / much — лише з множиною (pancakes, sandwiches); a lot of не є пасткою в (−).
- Відповідь на пропозицію: пастки «I do / I don’t», не «thank you» (PITFALL writer-e5s3); a37 — контекст «isn’t very hungry».
- a40 pick: єдине виправлення — Do → Would (відповідь «Yes, please» робить «Do you like soup?» без some неправильним теж).
- `build` — усі перестановки всіх підмножин плиток разом з extra перебрано через SLID_LANG.check (node, app/lang.js; скрипт у scratchpad): a10, a12, a24–a26, a32, a33, a41, a42, a51 — приймається лише ключ; a19, a43 — рівно два порядки, обидва в `answer`. Питальні й розповідні build з ризиком інверсії («Haven’t we got…?», «Is borscht…?», «you would like…», «Breakfast is my…») відсічено першою плиткою з великої + `keepCase: true` (PITFALL verifier-e4s8, writer-pe4s2); a12 — ще й «Start with My.» у body (PITFALL verifier-e6s8). Пастки extra — інші форми (does, are, any, some, much, many, likes, a), не інший правопис.
- Ключі `word` — без кінцевого знака.
- choice/multi (a44–a46) розв'язано вручну: a44 cheese (у тексті), a45 oats/milk/a banana («You need»), a46 ₴80 + ₴30 = ₴110 (суп — borscht, напій — tea).

**Герої — канон, нових немає:** Taras, Ostap, Taras’s mum (Lviv); Andrii, Sofiia, Dad (Kyiv, Café Smachno); Oksana, Grandma (Hanna), Dmytro — брат Оксани (Zelena Dolyna); Mariia (Kharkiv, пікнік з класом); Emma (Англія, Pancake Day). Дрібне нове: a44 — Оксана з бабусею Hanna по неділях ліплять вареники з сиром; a45 — рецепт porridge від Emma.

**Спірне для верифікатора:**
1. `stress` (a05–a07) і `choice`/`multi` (a44–a46) — для sk phon і read, як дозволило доручення оркестратора.
2. a46 — читання меню з додаванням (рівень 3); «the Ukrainian soup» спирається на l6 (borscht — soup).
3. a01/a04 — ключ «dinner in the evening» за l1 info (спрощення, reports/verify/e5s3.md §6 п. 3); варіантом поруч — лише morning/breakfast.
4. a12 — `keepCase` не приймає «Breakfast is my favourite meal.» (граматичне); відсічено вказівкою «Start with My.» у body.
5. a39 — «Would you like {*some|a} rice?»: rice [U] чисте за CD.
