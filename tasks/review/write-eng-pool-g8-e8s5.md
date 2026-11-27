---
claimed_from: todo
claimed_at: 2026-11-27T10:18:15.817Z
id: write-eng-pool-g8-e8s5
type: write-pool
subject: eng
grade: 8
section: e8s5
status: review
claimed_by: writer-pe8s5
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Books and libraries» (Англійська мова, 8 клас, e8s5)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s5.js`: `SLID.pool("eng", { id: "pe8s5", section: "e8s5", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s5` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s5l1` — Fantasy, poetry or a detective story? Genres
- `e8s5l2` — At the library: borrowing books and other services
- `e8s5l3` — A writer, a poet, a hero: my favourite book
- `e8s5l4` — When I got to the library, it had closed: the Past Perfect
- `e8s5l5` — It was raining, and she had lost her key: telling a story
- `e8s5l6` — A book I recommend: a book review

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s5.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe8s5` і `node tools/personalization-qa.mjs --pool pe8s5` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe8s5, 2026-11-27.** Файл `content/eng/pool-g8-e8s5.js` (pe8s5, 73 вправи a01–a73, `status: "draft"`). `validate --pool pe8s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s5 --strict` — лише «ще не verified»; euphony — чисто. Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (перевірено скриптом).

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e8s5l1 | vocab 6 (1,1,2,2,3,3), phon 3 (1,2,3), write 3 (1,2,3) | gaps, match, word, pick, stress |
| e8s5l2 | vocab 6 (1,1,2,2,3,3), func 3 (1,2,3), write 3 (1,2,3) | gaps, match, word, sort, pick, choice |
| e8s5l3 | cult 5 (1,1,2,2,3), gram 5 (1,1,2,2,3), vocab 3 (1,2,3), write 3 (1,2,3) | match, choice, gaps, multi, build, pick, word, order |
| e8s5l4 | gram 7 (1,1,2,2,2,3,3), write 3 (1,2,3) | gaps, choice, word, pick, build |
| e8s5l5 | gram 6 (1,1,2,2,3,3), write 3 (1,2,3) | sort, choice, gaps, pick, order |
| e8s5l6 | read 4 (1,2,2,3), write 3 (1,2,3), gram 4 (1,2,2,3), vocab 3 (1,2,3) | choice, multi, order, gaps, pick, build, word, match |

**Джерело:** МП-ІМ (PDF SHA-1 43925b25…, той самий файл): «Література» — с. 32 (улюблений письменник, поет, книга, герой) і с. 33 (жанри, бібліотека, обладнання та послуги) — звірено `pdftotext` за колонтитулами; переказ книги — с. 31; граматика — с. 35 (Past perfect simple, Past simple — ordering, Discourse markers — sequencing, Verbs — patterns -ing). `src`: l1–l2 — с. 33, l3 — с. 32, l4–l5 і l6 gram — с. 35, l6 read/write/vocab — с. 31.

**Рішення щодо пасток:**
- Past Simple ніде не хибний варіант для раннішої дії (порядок і так ясний): пастки — has / have + V3, had + V2 (had went, had wrote, had forgot), was / were. Єдиний контраст PS ↔ PP — a55 (L3): «When we got to the stop, the bus left / had left» з часовою шкалою 7.40 / 7.45 — це різні значення, а не «менш типова» форма.
- recommend + -ing: хибне лише «recommend to + V»; «recommend … for» не вживано як дистрактор (можливе в BrE), у a65 дистрактор «at».
- word: a36 — character / heroine / hero; a72 — beginning / start; a06 — science fiction / sci-fi; a47 — «read» (тренує однаковий запис форм).
- Факти про письменників — лише з e8s5l3 (роки 1840, 1911, 1865; Scottish / English; Fox Mykyta — story in verse про clever fox). Вигадані книжки — лише з уроку (The Lighthouse Riddle, Captain Cat, Inspector Bond); нове вигадане ім'я — Nika (героїня неназваного sci-fi роману в a65–a66).
- 6-грами проти g4–g11 і dge: прибрано збіги речень уроків з тим самим ключем; лишились рамки інструкцій, назва книжки й формула «I recommend it to anyone who likes…».
- Герої: Kyrylo (тітка — author, a04 — нова дрібниця), Daryna — сестра є (канон), Tom читає fantasy (a12), Halyna — рецензія на The Lighthouse Riddle (3 зірки, a60–a62).

**Словники (форма, наголос):** CD — https://dictionary.cambridge.org/dictionary/english/novel , …/detective , …/fantasy , …/poetry , …/fiction (наголос на 1-му складі, крім detective — 2-й); …/recommend («[ + -ing verb ] I recommend writing…»); …/lend («lent | lent»).

Опора неочевидна: a55 (l5 info «Three past forms»: main events one by one vs earlier event); a63 (у body — короткий підсумок рецензії Taras, щоб не вимагати пам'яті про l6).
