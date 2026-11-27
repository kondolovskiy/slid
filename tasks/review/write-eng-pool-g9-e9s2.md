---
claimed_from: todo
claimed_at: 2026-11-27T10:29:02.160Z
id: write-eng-pool-g9-e9s2
type: write-pool
subject: eng
grade: 9
section: e9s2
status: review
claimed_by: writer-pe9s2
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «The environment» (Англійська мова, 9 клас, e9s2)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s2.js`: `SLID.pool("eng", { id: "pe9s2", section: "e9s2", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s2` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s2l1` — Air, water and land: our environment
- `e9s2l2` — Rare plants and animals of Ukraine
- `e9s2l3` — It’s going to be a hot summer: predictions
- `e9s2l4` — In 2050 we will be living…: the Future Continuous
- `e9s2l5` — Forests must be protected: what can we do?
- `e9s2l6` — An eco project for our school

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s2.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s2` і `node tools/personalization-qa.mjs --pool pe9s2` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe9s2, 2026-11-27.** Файл `content/eng/pool-g9-e9s2.js` (pe9s2, 52 вправи a01–a52, `status: "draft"`). `validate --pool pe9s2` — 0 помилок, 0 попереджень; `personalization-qa --pool pe9s2 --strict` — лише «ще не verified». Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (скрипт). `test-answer-ui.py --suite content --pool pe9s2` не запускав (CI). Перебір `SLID_LANG.check`: усі `solution` зараховуються; build приймає лише ключі (a27, a36, a45 — по 2 порядки, без keepCase; a51 — 1).

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e9s2l1 | vocab 3, write 3, phon 3 (1,2,3) | match, gaps, word, stress |
| e9s2l2 | cult 3, read 3, vocab 3, write 3 (1,2,3) | choice, multi, gaps, word |
| e9s2l3 | gram 3, write 3 (1,2,3) | gaps, pick, word, build |
| e9s2l4 | gram 4 (1,2,2,3), read 3, write 3 (1,2,3) | gaps, word, pick, choice, multi, build |
| e9s2l5 | read 3, gram 3, write 3 (1,2,3) | match, choice, multi, gaps, word, pick, build |
| e9s2l6 | func 3, write 3 (1,2,3) | gaps, choice (chart), word, build |

**Джерело:** МП-ІМ, той самий PDF (SHA-1 43925b25…, `pdftotext` с. 34–35): с. 33 — тема 9 кл. «Природа і погода» (навколишнє середовище, охорона довкілля, рослинний і тваринний світ) і функції (переконання, аргументація, організація заходу) → l1, l2, l5 read, l6; с. 34 — «Adverbs … certainty», «Future continuous: affirmative and negative», «Will and shall: … predictions», «Be going to: … predictions» → l3, l4; с. 35 — «Passive forms: Infinitive» → l5 gram/write.

**Рішення щодо пасток:**
- will і be going to ніде не стоять один проти одного: у gaps лише хибні форми (is/are/going to, wills, will to); `word` a25 — going to / about to.
- probably / definitely + won’t — як в уроці («won’t probably» — хибне, a24, a26, a27); «won’t definitely» не дано хибним (граматичне з іншим значенням), 0% у a23 — definitely won’t vs probably won’t (значення за шкалою уроку).
- Future Continuous: will + інфінітив ніде не хибний; пастки — will + -ing без be, will be + V, are be + -ing; `word` a29/a37 — з `contractions: true`.
- Пасив з модальними: хибні лише форми без be / без V3 (can recycled, can be recycle, should be gave).
- Факти — лише з уроків: Red Book (official list, protected by law), lynx, bison (зникли, тепер у national parks; найбільший сухопутний звір Європи), black stork (shy), snowdrop, brown bear, Polissia, Carpathian Biosphere Reserve (Zakarpattia, west, beech forests, UNESCO 2007, bears і lynxes), red / grey squirrels у UK.
- 6-грами: прибрано збіги з тим самим ключем (now some live in national parks…, old clothes can be given to other people, that’s why we need more bins, will be working with robots). Лишились рамки («in the Red Book of Ukraine», «One word in …’s message is wrong», «Zakarpattia, in the west of Ukraine»).
- Лексика (скрипт проти g4–g8, e9s1 і уроків e9s2 до `lesson`): прибрано frogs, eco, save (є лише в l6), compost, programmer, laptop, nowhere, chance, thrown, head teacher. Лишились прийняті варіанти `word` (poison, damage, harm, spoil) і хибні форми (specieses, specie, disappear).

**Нові дрібні деталі героїв (NOTE в inbox):** Taras бачив лелеку чорного й не бачив рисі в Карпатах (узгоджено з e9s2l2); Daryna з класом — заповідник у Polissia; Zoriana — у 2040 робитиме комп'ютерні ігри (IT — канон); Bohdan — постер Tree-planting day; Andrii — заповідник у Polissia влітку; Emma — суботній план (плавання, Tom — барабани).

**Словники (форма, наголос):** CD — https://dictionary.cambridge.org/dictionary/english/<word>: environment «ɪnˈvaɪ.rə.mənt», pollution «pəˈluː.ʃən», pollute «pəˈluːt», recycle «ˌriːˈsaɪ.kəl», protect «prəˈtekt», wildlife «ˈwaɪld.laɪf», rubbish «ˈrʌb.ɪʃ», plastic «ˈplæs.tɪk», traffic «ˈtræf.ɪk»; species — «plural species». OALD — https://www.oxfordlearnersdictionaries.com/definition/english/<word>: recycle «/ˌriːˈsaɪkl/», pollute «/pəˈluːt/», environment «/ɪnˈvaɪrənmənt/». Граматика — як в уроці (CD Grammar «Will», «Be going to», «Future continuous»; URL — tasks/…/write-eng-g9-e9s2.md).

**Для людини/оркестратора (не в пулі):** урок e9s2l7 Task 4 «This time tomorrow, Emma and Tom will be flying to Kyiv» — суперечить pitfalls-content п. 21 (цивільні аеропорти України закриті); рядок FIX в inbox.
