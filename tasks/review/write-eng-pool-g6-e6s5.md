---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.555Z
id: write-eng-pool-g6-e6s5
type: write-pool
subject: eng
grade: 6
section: e6s5
status: review
claimed_by: writer-pe6s5
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Getting ready for a trip» (Англійська мова, 6 клас, e6s5)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s5.js`: `SLID.pool("eng", { id: "pe6s5", section: "e6s5", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s5` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s5l1` — By train, by plane or by ferry?
- `e6s5l2` — When does the train leave? Timetables
- `e6s5l3` — We’re leaving on Friday: travel plans
- `e6s5l4` — Packing a suitcase: it might be cold
- `e6s5l5` — Tickets and passports: you have to show them
- `e6s5l6` — Buying a train ticket at the station

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s5.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s5` і `node tools/personalization-qa.mjs --pool pe6s5` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
### writer-pe6s5, 2026-11-27
**Результат:** `content/eng/pool-g6-e6s5.js`, пул `pe6s5`, 74 вправи a01–a74, `status: "draft"`. `node tools/validate.mjs --pool pe6s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe6s5 --strict` — лише «ще не verified». Build не запускав (паралельний запуск).

| Урок | sk → кількість (рівні 1/2/3 у кожній парі) | Типи |
|---|---|---|
| l1 (17) | vocab 5, gram 3, phon 3, func 3, read 3 | match, gaps, word, pick, stress, choice, build, multi |
| l2 (9) | gram 6, read 3 | gaps, word, pick, build, choice, match, multi |
| l3 (9) | gram 6, write 3 | gaps, multi, word, pick, build |
| l4 (18) | gram 5, vocab 4, func 3, phon 3, read 3 | gaps, word, pick, build, sort, match, choice, stress, multi |
| l5 (12) | gram 6, func 3, read 3 | gaps, word, pick, build, sort, choice, multi |
| l6 (9) | vocab 3 (sk лише з hyp-екрана, але single / return / ticket office — з info l6), func 3, read 3 | match, gaps, word, choice, build, multi |

**Джерело:** `mpim` (program: true), https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf — сторінки звірено `pdftotext` у цій сесії: с. 20 — «Подорож»: транспорт, підготовка, проїзні документи, функція «уточнення інформації»; с. 21 — Present simple for future (timetables), Present continuous for future (arrangements), Have (got) to; с. 22 — May, might: possibility.

**Словники (curl CD, 2026-11-27, https://dictionary.cambridge.org/dictionary/english/<слово>):** один головний наголос: ferry ˈfer.i, journey ˈdʒɜː.ni, airport ˈeə.pɔːt, expensive ɪkˈspen.sɪv, station ˈsteɪ.ʃən, suitcase ˈsuːt.keɪs, umbrella ʌmˈbrel.ə, raincoat ˈreɪŋ.kəʊt, jumper ˈdʒʌm.pər, rucksack ˈrʌk.sæk, toothbrush ˈtuːθ.brʌʃ, sunglasses ˈsʌŋˌɡlɑː.sɪz (головний — 1-й). station не підкреслено в l1, але слово з l1 info (a10, a11).

**Друга правильна відповідь — як відсічено:**
- план: хибні лише are leave / we is / we going / leaving без be; Present Simple для плану («We leave on Friday») і is leaving для розкладу не дано хибними ніде; a28 multi — обидва (-ing, going to) правильні в ключі.
- a20: незалежні пропуски не складають «What time is the coach leaving?» (варіант is прибрано).
- will / might (a39) — лише з явним «Sure / Not sure» у body; a37 — might / may / could у ключі.
- have to: a56 ключ don’t / don’t have to (contractions → do not); must у e6s5 ще не вчили — у word з have to не ставив.
- a42 rucksack / backpack обидва в ключі; a68 return / return ticket.
- `build` (a14, a22, a32, a34, a40, a47, a59, a71): усі перестановки всіх підмножин плиток з extra перебрано через SLID_LANG.check (скрипт у scratchpad) — у кожному приймається рівно ключ; граматичних інших порядків немає (перша плитка з великої + keepCase; обставини часу на початку відсічено так само).
- n-грами ≥ 6 слів проти g*-*.js і diag-*.js — збіги лише в інструкціях/steps; речення уроків з тим самим ключем переписано (Tom passport, change trains, raincoat / might rain).

**Герої — канон, дрібне нове:** Mariia з мамою — потяг до Lviv (6.30, кафе в потязі, a63–a65) і квитки Kharkiv → Kyiv (a70, a72–a74); Ostap їде з Тарасом у гори (a39); Zlata може лишитись з татом (a40); Emma з родиною — потяг до моря, літак до Paris (Англія, не Україна); Grandad Vasyl — потягом до Kyiv, назад машиною (a67).

**Спірне для верифікатора:**
1. a39 «Ostap {*will|might} come» — might граматичне, відсічено лише умовою «Sure» (правило уроку sure → will).
2. a05 ₴800 «expensive» / ₴500 «cheap» — відносно, порівняння в body.
3. l6 vocab — sk лише hyp-екрана (lessonSkills його рахує); якщо верифікатор вважає, що vocab l6 не тренується, — a66–a68 перевести на func.
4. a23 «Does it stop in Poltava? Yes, it does» — опора на таблицю в body (one stop, Poltava), не реальний розклад.
