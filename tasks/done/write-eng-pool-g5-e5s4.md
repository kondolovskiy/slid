---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.613Z
id: write-eng-pool-g5-e5s4
type: write-pool
subject: eng
grade: 5
section: e5s4
depends_on: [write-eng-g5-e5s4, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe5s4
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Одяг» (Англійська мова, 5 клас) — pe5s4

**Брати, коли розділ `e5s4` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s4.js`: `SLID.pool("eng", { id: "pe5s4", section: "e5s4", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s4` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s4, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s4.js`, пул `pe5s4`, 82 вправи a01–a82, статус draft. `node tools/validate.mjs --pool pe5s4` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s4 --strict` — лише «ще не verified». `test-answer-ui.py --suite content` не запущено: у контейнері немає Python-модуля playwright (лише CI). Build не запускав (паралельний запуск).

**Покриття (урок × sk; рівні 1–3 у кожній парі):** l1 vocab 4, gram 4, write 3; l2 vocab 3, gram 5, phon 3, write 3; l3 gram 6, func 4; l4 read 3, vocab 3, func 3, phon 3, write 3; l5 gram 5, func 3, write 3; l6 cult 3, read 3, func 3, vocab 3, gram 3, phon 3, write 3. Boss l7 — без вправ. Типи: gaps 39, word 7, pick 6, build 5, match 4, stress 9, choice 10, multi 2 (choice/multi — лише `read` і короткі відповіді `func`, як в уроках). `cult` l6 — в уроці лише на hyp-екрані, але зміст подано на info (vyshyvanka — Ukrainian shirt; Vyshyvanka Day in May), тож покрито.

**Джерело:** `mpim` (program: true), МП-ІМ, PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Сторінки за facts/eng.md і reports/verify/e5s4.md §1: с. 20 — тема «Одяг — види одягу; сезонний одяг», функції (описувати, аргументувати вибір) — vocab, write, func, phon, cult; с. 22 — Present Continuous, Present Simple vs Present Continuous, Nouns: Plurals — gram; с. 16 — дескриптори читання A2 — read.

**Словники:** нових слів поза уроком немає. Наголос (`stress`) — лише слова, підкреслені `<u>` в уроках e5s4 (jumper, jacket, trousers, trainers, winter, summer, sandals, raincoat, uniform), один наголос на 1-му складі в CD UK і OALD BrE — звірено верифікатором (reports/verify/e5s4.md §2 «Наголос»; https://dictionary.cambridge.org/dictionary/english/<word>, https://www.oxfordlearnersdictionaries.com/definition/english/<word>). T-shirt у `stress` не брав.

**Друга правильна відповідь — як відсічено:**
- PS vs PC: маркер у кожному реченні з пропуском (usually, often, every winter, on Mondays/Saturdays, at the weekend / now, Look!, at the moment, today); варіанти — лише wear(s) / am-is wearing.
- Скорочення: варіантів, що починаються з апострофа, немає (PITFALL verifier-e5s4) — повні форми (am not, is not, are not) або isn’t/aren’t/don’t.
- jumper/sweater: `word` з описом одягу не давав; a03 «a T-shirt and a skirt in one» → dress (визначення уроку); одяг для холоду — у gaps/pick з закритими варіантами.
- a pair of: «two pairs / two pair» не оцінюється ніде (FACT verifier-e5s4, OALD pair_1); лише «a pair of» проти «a».
- `word`: ключі без кінцевого знака; a06 «Write wear or wears» відсікає wore; a27, a31 «Write am, is or are» відсікає was; a16 «Write the plural of child» відсікає kids; a52 «is wearing» з contractions (’s wearing → «Almost», бо «Tom’s» тут дитина не набирає).
- `build`: перебрано всі перестановки всіх підмножин плиток з extra через `SLID_LANG.check` (node, app/lang.js; скрипт — scratchpad write-eng-pool-g5-e5s4/run.mjs): a29, a35, a44 (по 1 950 порядків) — питання з першою плиткою з великої + `keepCase` (розповідний порядок не складається), зараховано лише ключ; a58 (1 950) — два порядки today, обидва в `answer`; a76 (320) — два порядки (at the weekend на початку й у кінці), обидва в `answer`. Пастки extra — інші форми (wear, does, are, don’t wear), не інше написання.
- match: a01, a12 — лише наявні SVG img/eng/e5s4 з тими самими alt, що в уроці (credits — у розділі); a40, a72 — визначення з info уроків, по одному правому до кожного лівого.

**Герої — канон:** Andrii і Sofiia (Kyiv, школа без форми), Bohdan (друг Andrii), Emma і Tom з мамою й татом (Англія, у школі Emma форма: white shirt, grey jumper, blue tie), Oksana і брат Dmytro, Mariia (Kharkiv, єдина дитина, батьки), Taras (Lviv, друзі). Нових героїв немає.

**Спірне для верифікатора:**
1. a76 — другий порядок «At the weekend Emma doesn’t wear a uniform» без коми (плитки коми не дають) — прийнято в ключ, щоб правильну дитячу відповідь не зарахувати хибною.
2. a61, a65–a67 — Emma «at the weekend» без форми, a82 — «I don’t like my tie because it isn’t comfortable»: нові дрібні деталі героя, канону не суперечать.
3. Усі слова `stress` — з наголосом на 1-му складі (інших підкреслених у розділі немає), тож вправа перевіряє лише впізнавання.
4. a59 «But today I {wear|*am wearing} jeans» — маркер лише today (контраст з usually в попередньому реченні), як в уроці l5.

## Нотатки верифікатора (verifier-pe5s4, 2026-11-20)
**Вердикт: verified** (reports/verify/pe5s4.md). Кожну з 82 вправ розв'язано. `word` перевірено через wordVerdict, `build` — перебором усіх перестановок з extra (a29, a35, a44, a58 — по 1 956, a76 — 325): зараховуються лише ключі. Матрицю урок × sk звірено вручну з `sk` уроків: у кожній парі ≥ 3 вправи, рівні 1–3, чужих `sk` немає. Наголос 9 слів `stress` — CD UK + OALD BrE (URL у звіті §2). Лексику кожної вправи звірено скриптом з її уроком і раніше; поза ними лише pink (базовий колір). Збігів з опублікованими текстами за WebSearch немає.
**Правки (12):** a11, a19, a61 — слова з пізніших уроків (gloves, own, uniform). a49, a68, a70, a71, a80, a81 і текст a65–a67 — копії умов уроку чи boss з іншим ім'ям, переписано. a59 — маркер лише «today» → «today is different: now». hint a67. Статус. id не змінено. validate — 0/0.
**Спірне автора:** 1 (a76 без коми) — прийнято. 2 (деталі героїв) — канону не суперечать. 3 (усі `stress` на 1-му складі) — не блокує, рекомендація для style-sync. 4 (a59) — виправлено.
