---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.541Z
id: write-eng-pool-g5-e5s2
type: write-pool
subject: eng
grade: 5
section: e5s2
depends_on: [write-eng-g5-e5s2, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe5s2
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Шкільне життя» (Англійська мова, 5 клас) — pe5s2

**Брати, коли розділ `e5s2` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s2.js`: `SLID.pool("eng", { id: "pe5s2", section: "e5s2", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s2` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s2, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s2.js`, пул `pe5s2`, 57 вправ a01–a57, статус draft. `node tools/validate.mjs --pool pe5s2` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s2 --strict` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk: кількість, рівні):** l1 vocab 4 (1,1,2,3), read 3 (1,2,3), phon 3, write 3; l2 vocab 3, gram 4 (1,2,2,3), phon 3, read 3; l3 gram 5 (1,1,2,2,3), func 3; l4 gram 5 (1,1,2,2,3), read 3; l5 vocab 3, gram 4 (1,2,2,3), read 3; l6 func 5 (1,1,2,2,3). Boss l7 — без вправ. Типи: gaps 17, word 13, build 7, pick 5, match 5, stress 6, choice 4 (лише sk read: a06, a25, a40, a50).

**Джерело:** `mpim` (program: true), МП-ІМ, PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Сторінки — за reports/verify/e5s2.md §1: с. 20 — тема «Шкільне життя» (розклад, робочий день, урок іноземної мови, види діяльності) і функція «розпитувати з метою роз'яснення» (l1 усе; l2 vocab/phon/read; l4 read; l5 vocab/read; l6 a55 How do you spell); с. 21 — Imperatives, Can: permission, Could: requests (l5 gram; l6 a53, a54, a56, a57); с. 22 — Present Simple affirmative/negative/questions, with adverbs of frequency (l2 gram; l3; l4 gram).

**Словники (curl 2026-11-20) — наголос, один варіант у CD UK і OALD BrE:** music ˈmjuː.zɪk, English ˈɪŋ.ɡlɪʃ, Ukrainian juːˈkreɪ.ni.ən, afternoon ˌɑːf.təˈnuːn (головний на 3-му), timetable, science, history (CD 3 склади — поділ за CD), subject (ім.), breakfast, homework — на 1-му. CD: https://dictionary.cambridge.org/dictionary/english/<слово>; OALD: https://www.oxfordlearnersdictionaries.com/definition/english/<music|english_1|ukrainian|afternoon|timetable_1|science|history|subject_1|breakfast_1|homework>. Усі слова stress підкреслені в уроці (l1 info: subject, history, science, music, English, Ukrainian, timetable; l2 info: breakfast, homework, afternoon). У l2 phon (a23) додано timetable і Ukrainian з l1 — щоб було 4 слова.

**Друга правильна відповідь — як відсічено:**
- Прислівники частоти: у `build` лише never (a37, a39) — лише mid (FACT writer-e4s3, CD Grammar always/never); usually/often/sometimes — лише в gaps/word/choice з готовою позицією. always ніде не на початку.
- Can I / Could you: Could I… і Can you… ніде не є хибним варіантом (обидва нормативні, FACT writer-e5s2); хибний варіант для прохання — Can I (інше значення), для дозволу — Could you (інший виконавець); a57 «Yes, you {can|could}» — could для дозволу не вживаємо (CD Grammar could, як l6 #7 уроку). a56 пастка extra «I» → «Could I repeat that» — граматичне, але суперечить body («He wants her to say it again»).
- `build` — усі перестановки всіх підмножин tiles+extra перебрано через SLID_LANG.check (node, app/lang.js): рушій приймає лише ключі. a12 — обидва порядки («My favourite subject is PE.» / «PE is my favourite subject.»); a19 — і з after school на початку (PITFALL writer-pe4s3). a29, a56 — keepCase і велика перша плитка.
- `word`: ключі без кінцевого знака; a28, a33, a48 — `contractions: true` (doesn’t / does not, don’t / do not перевірено); a16 — ключ ["o’clock", "o'clock"] (обидва апострофи прийнято); a07 Tuesday — регістр не важить.
- match: кожен лівий має одну пару (a54: «Of course. Page twenty.» не відповідає на «Can I sit here?»; «Yes, you can.» — не на прохання).
- gaps на час: «half» без past не дистрактор (half seven — BrE розмовне); дистрактори годин — інші числа.

**Герої — канон, нових немає.** Нові дрібні деталі: розклад Bohdan на четвер (maths, English, science, art), Bohdan always gets up at seven; Zoriana — music у вівторок і п'ятницю, art у середу, «I like music», sometimes draws after school, ходить до школи з мамою (a30); Taras встає о 7, лягає о 10, по суботах до школи не ходить; Mariia снідає о сьомій; п'ятниця Emma (science, maths, music, PE). Улюблені предмети — лише канонічні (Andrii — PE).

**Спірне для верифікатора:**
1. a56: «Please could you repeat that?» (BrE) рушій не прийме — keepCase і «that,» з комою; у body задано «He wants her to say it again», підказка — про виконавця. Прийнятно?
2. a57: «Can I open the window?» — body «She wants to open the window» (робить сама, як у правилі уроку); «Could you open…» як прохання до вчителя відсічено лише цим.
3. a48: `before: ""` — пропуск на початку речення (validate не заперечує).
4. Тип `choice` для sk read (4 вправи) — за брифом оркестратора; решта read — gaps/word на короткому тексті.
