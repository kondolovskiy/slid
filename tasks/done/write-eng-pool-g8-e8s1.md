---
claimed_from: todo
claimed_at: 2026-11-27T10:10:23.271Z
id: write-eng-pool-g8-e8s1
type: write-pool
subject: eng
grade: 8
section: e8s1
status: done
claimed_by: writer-pe8s1
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Penfriends and letters» (Англійська мова, 8 клас, e8s1)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s1.js`: `SLID.pool("eng", { id: "pe8s1", section: "e8s1", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s1` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s1l1` — Looking for a penfriend: a profile
- `e8s1l2` — I’ve been learning English for five years
- `e8s1l3` — What have you been doing? News in an email
- `e8s1l4` — You like music, don’t you? Question tags
- `e8s1l5` — Dear…, Best wishes: writing an email
- `e8s1l6` — We write to each other: a letter from England

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s1.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe8s1` і `node tools/personalization-qa.mjs --pool pe8s1` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
_writer-pe8s1 (агент writer-pe7s7-pe8s1), 2026-11-27._ Файл `content/eng/pool-g8-e8s1.js`, пул `pe8s1`, 66 вправ (a01–a66), `status: "draft"`.
`validate --pool pe8s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s1 --strict` — лише «ще не verified».

| Урок | Вправ | sk (рівні) | Типи |
|---|---|---|---|
| e8s1l1 | 15 | read 1-2-3, func 1-2-3, gram 1-2-3, vocab 1-2-3, write 1-2-3 | choice, multi, match, gaps, pick, word, build |
| e8s1l2 | 11 | gram 1-2-2-3-3, func 1-2-3, write 1-2-3 | gaps, word, choice, pick, build, match |
| e8s1l3 | 14 | read 1-2-3, gram 1-2-2-3-3, func 1-2-3, write 1-2-3 | choice, multi, word, gaps, pick, build |
| e8s1l4 | 9 | gram 1-1-2-2-3-3, write 1-2-3 | gaps, match, choice, word, build |
| e8s1l5 | 7 | func 1-2-2-3, write 1-2-3 | match, choice, gaps, pick, order, build |
| e8s1l6 | 10 | gram 1-2-3-3, read 1-2-3, write 1-2-3 | gaps, word, pick, build, choice, multi |

- **Джерело:** МП-ІМ (PDF відкрито): с. 32 — «Я і мої друзі — Друзі по листуванню»; с. 28 — читання особистих листів; с. 30 — «Листування», онлайн-спілкування; с. 35 — Present perfect continuous, Present simple: tag, Pronouns: reciprocal. Програмні `src`: read — с. 28, func/write — с. 30, vocab — с. 32, gram — с. 35.
- **PP / PPC (TQ-142, тимчасово):** live / learn / work + for / since не протиставлено; PP — лише «скільки» (four pictures, two races, ten times) і know / like; PPC — дія ще триває (Tom is still in the pool) чи видно результат; решта дистракторів — неграматичні форми (been learn, being, has/have).
- **Question tags:** хибні — лише неможливі форми (doesn’t you, don’t he, does they, isn’t I, is he після doesn’t, doesn’t he після is coming); полярність-без-форми не дистрактор (CD Grammar «Tags»; pitfalls-eng writer-e8s1, writer-e11s3). У word a44 — заперечне речення («You aren’t busy, ___ you?» → are). Build a46 — плитка «Tom doesn’t», тож порядок один.
- **Інше:** each other — у word `["each other", "one another"]`; Love / Best wishes в одному пропуску не протиставлено (дистрактор — Yours sincerely); «Hoping to hear…» прибрано як дистрактор (природне); penfriend у word не є відповіддю.
- **Герої (канон eng-heroes):** Kateryna — drama club; Zofia — сестра, що грає на піаніно; Daryna — гори восени, сестра; Oksana знає Halyna з шести років; батько Oksana — mechanic. Нові: Kai (14, Scotland), Lena (13, Germany, два коні), Ines (14, Portugal), Mia (подруга Lena), Mrs Wood (директорка у вправі на офіційний лист), Zofia Nowak (прізвище лише у формальному підписі a51).
- **Копії уроків:** 6-грами проти g*-*.js і diag-*.js eng — збіги лише у формулах листа (Hope to hear from you soon, It was great to hear from you), правилах і `steps`; a10, a22, a24, a64 переписано.
- **Словники / граматика:** https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-continuous-i-have-been-working ; https://dictionary.cambridge.org/grammar/british-grammar/tags ; https://dictionary.cambridge.org/grammar/british-grammar/each-other-one-another ; https://dictionary.cambridge.org/dictionary/english/{penfriend,draw,know,sing,ride} (drawn, known, sung, riding).
