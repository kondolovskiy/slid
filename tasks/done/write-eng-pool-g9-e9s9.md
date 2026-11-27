---
claimed_from: todo
claimed_at: 2026-11-27T10:48:18.012Z
id: write-eng-pool-g9-e9s9
type: write-pool
subject: eng
grade: 9
section: e9s9
status: done
claimed_by: writer-pe9s9
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Let’s discuss: agreeing and disagreeing» (Англійська мова, 9 клас, e9s9)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s9.js`: `SLID.pool("eng", { id: "pe9s9", section: "e9s9", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s9` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s9l1` — I think…, In my opinion…: giving opinions
- `e9s9l2` — I agree, but…: agreeing and disagreeing politely
- `e9s9l3` — Sorry to interrupt, but…: joining a discussion
- `e9s9l4` — Although, however, so: linking ideas
- `e9s9l5` — First, also, finally: putting your ideas in order
- `e9s9l6` — Paper books or e-books? A class debate

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s9.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s9` і `node tools/personalization-qa.mjs --pool pe9s9` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe9s9, 2026-11-27.** Файл `content/eng/pool-g9-e9s9.js`, пул `pe9s9`, 64 вправи a01–a64, `status: "draft"`. validate --pool pe9s9 — 0 помилок, 0 попереджень; personalization-qa --pool pe9s9 — правило ≥ 3 на урок виконано (єдиний рядок «БРАКУЄ: ще не verified» — очікувано).

| Урок | sk (кількість) | Рівні | Типи |
|---|---|---|---|
| e9s9l1 | func 5, phon 3, write 3 | 1–3 | gaps, choice, pick, stress, build |
| e9s9l2 | func 5, gram 5, write 3 | 1–3 | sort, choice, match, word, gaps, pick, build |
| e9s9l3 | func 5, gram 5, write 3 | 1–3 | choice, match, gaps, multi, word, build, pick |
| e9s9l4 | gram 6, write 3 | 1–3 | gaps, choice, pick, build |
| e9s9l5 | write 6 | 1–3 | choice, gaps, sort, order, pick |
| e9s9l6 | read 3, func 3, gram 3, write 3 | 1–3 | choice, multi, sort, gaps, build, order |

**Джерело:** МП-ІМ (PDF SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7; PDF = друк., колонтитул «34» на с. 34): с. 33 — 9 кл., функції «вести дискусію, привертаючи увагу співрозмовника», «висловлювати власні переконання, думки, згоду або незгоду» (l1–l3, l6 read/func/write); с. 34 — Subordinated: reason, purpose, result, contrast; Conjunctions: either … or, both … and (l3 gram, l4, l6 gram); с. 35 — Discourse markers: sequencing, organising, contrasting, adding; adverbs to indicate attitude and viewpoint (l1 actually/stress, l4 however, l5).

**Словники (наголос, форми):** CD — https://dictionary.cambridge.org/dictionary/english/personally (ˈpɜː.sən.əl.i), …/honestly (ˈɒn.ɪst.li), …/actually (ˈæk.tʃu.ə.li), …/opinion (əˈpɪn.jən), …/personality (ˌpɜː.sənˈæl.ə.ti), …/museum (mjuːˈziː.əm), …/cinema (ˈsɪn.ə.mə / -mɑː, 1-й склад в обох); OALD https://www.oxfordlearnersdictionaries.com/definition/english/personally (/ˈpɜːsənəli/). Стрес-слова підкреслені в уроках: personally, honestly, actually (e9s9l1 info), opinion (l1 #8), personality (e9s1), museum, cinema (раніші розділи). Склади — як у наявних вправах eng (`+cin|e|ma`, `mu|+se|um`, `per|son|+al|i|ty`).

**Рішення щодо другої правильної відповіді:**
- «That’s true, but…», «up to a point» — лише кошик partly agree (a12, a57); «I see your point, but…» у сортуваннях не вжито (в уроці воно і partly, і перед ввічливою незгодою); в a15 — разом з «I’m afraid I disagree» як повна незгода.
- so / so that — ніколи в одному пропуску (a39, a43, a46: so that без so); Also / In addition — ніколи в одному пропуску; order a50 / a63 — без пари Also + In addition (лише First → Also → Finally; First → However → Finally).
- but / although після коми — не в одному пропуску; although / however розводить пунктуація (a40, a44, a46, a61, a64).
- Honestly не дистрактор до Actually (a04, a11): «Honestly, …» з фактом теж можливе.
- build: keepCase не ставили. a32 — «are in the eco club» однією плиткою, щоб не будувалося питання «Are both…?» (ключ — обидва порядки імен); a36 — «we can» однією плиткою (питання «Can we either…?» відсічено), обидва порядки дій у ключі; можливий порядок «Either we can clean… or plant…» не в ключі — непаралельна будова, урок ставить either лише після підмета (верифікатору — глянути).
- Дистрактори «not sure of» (правильне) і «can’t agree more» (розмовне) свідомо не вжито; «I think not» — лише в позиції перед підрядним (неграматично).
- Лексика поза e9s9 — з раніших розділів (grep content/eng/g4–g9): plant, flowers, bus stop, coding (e9s7), puzzle, podcast, episode, librarian, quiz, print, copy, carry (e9s2), Polish (e8s7), borrow, trip, expensive.

**Перевірка копій:** 6-грами проти всіх content/eng/*.js — змістові збіги з уроками прибрано (a10, a22, a24, a41, a44, a56, a58, a59, тіла a09, a37); лишились лише формули уроку (Sorry to interrupt, but can I…, I agree up to a point, I couldn’t agree more), назви списків у hint і шаблонні інструкції.

**Герої:** лише канон уроку й glossary/eng-heroes.md; Taras — без спорту (відкрита розбіжність); Mariia — без братів/сестер; нових імен немає. Нових фактів немає.

## Нотатки верифікатора
**verifier-pe9s9, 2026-11-27.** Вердикт: verified. 5 правок: a36 (плитка «we can either» — непаралельне «Either we can … or plant…» більше не складається), a11 (канон Oksana: «often swim»), a15 (silly → bad), a08 hint (alike), статус і шапка. Звіт — reports/verify/write-eng-pool-g9-e9s9.md.
