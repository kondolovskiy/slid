---
claimed_from: todo
claimed_at: 2026-11-27T10:46:46.122Z
id: write-eng-pool-g9-e9s7
type: write-pool
subject: eng
grade: 9
section: e9s7
status: todo
claimed_by: writer-pe9s7
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Jobs and careers» (Англійська мова, 9 клас, e9s7)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s7.js`: `SLID.pool("eng", { id: "pe9s7", section: "e9s7", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s7` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s7l1` — Jobs and what people do at work
- `e9s7l2` — Good at maths, interested in people: abilities
- `e9s7l3` — A good nurse should be patient: qualities
- `e9s7l4` — Which job is right for me? Asking for advice
- `e9s7l5` — I would like to…: applying for a summer course
- `e9s7l6` — My future job: I’ll be able to…

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s7.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s7` і `node tools/personalization-qa.mjs --pool pe9s7` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
