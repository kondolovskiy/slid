---
claimed_from: todo
claimed_at: 2026-11-27T10:46:46.122Z
id: write-eng-pool-g9-e9s7
type: write-pool
subject: eng
grade: 9
section: e9s7
status: done
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
- 2026-11-27 · writer-pe9s7 (агент writer-pe9s7-pe9s8). Файл `content/eng/pool-g9-e9s7.js`, 71 вправа a01–a71, `status: "draft"`. `validate --pool pe9s7` — 0/0; `personalization-qa --pool pe9s7` — правило виконано (лише «ще не verified»).
- Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3:

| Урок | Вправ | Рівні | Типи | sk: рівні |
|---|---|---|---|---|
| e9s7l1 | 12 | 1–3 | choice, word, gaps, multi, stress | vocab 1/2/3; read 1/2/3; phon 1/2/3; write 1/2/3 |
| e9s7l2 | 11 | 1–3 | gaps, word, pick, choice, build | gram 1/1/2/2/3; func 1/2/3; write 1/2/3 |
| e9s7l3 | 15 | 1–3 | choice, match, word, pick, gaps, build, stress | vocab 1/2/2/3; gram 1/2/2/3/3; phon 1/2/3; write 1/2/3 |
| e9s7l4 | 11 | 1–3 | sort, gaps, word, pick, choice, build | gram 1/2/2/3/3; func 1/2/3; write 1/2/3 |
| e9s7l5 | 11 | 1–3 | gaps, word, pick, build, choice | gram 1/2/2/3/3; func 1/2/3; write 1/2/3 |
| e9s7l6 | 11 | 1–3 | gaps, word, pick, build, choice, multi | gram 1/2/2/3/3; read 1/2/3; write 1/2/3 |

- `src` — сторінки PDF МП-ІМ (pdftotext, друк. = PDF): с. 33 — «Робота і професія»; с. 29 — «Дає пораду» (l4 func); с. 30 — заявки, реєстрація на курс (l5 func/write); с. 31 — «Описує … мрії, сподівання, амбіції» (l6 read/write); с. 34 — Ought: advice, Must: obligation (l4 gram/write); с. 35 — Should: ideal, Would: polite requests, Will, verbs + -ing (l2, l3, l5, l6 gram).
- Перевірки скриптами (scratchpad pool-e9s7-e9s8/bin): `SLID_LANG.check` — усі розв'язки зараховуються; build — перебір усіх перестановок підмножин tiles + extra: кожен приймає лише ключ (a32, a45, a54, a65 — keepCase з «Start with …» / «?» у плитці; a22, a59, a70 — один порядок). 6-грами проти g4–g11: збігаються лише інструкції й шаблонні сполуки («be able to come to the», «Do you think I should become»), рамок уроків немає (a11, a66–a67 переписано). Лексика — з уроків до свого `lesson` (biology з l6 і physics з l4 у вправах l2 замінено на science / maths; veterinarian — лише другий ключ a02).
- Друга правильна: should / ought to і must / have to не протиставлені; Could you / Would you — хибні лише Do/Are/Is…be; «I ___ like to» у word не беремо (I should like — BrE); doesn’t need to — у ключі a41; brave + courageous / fearless (a26); won’t / will not (a62, contractions). Дистрактор «ought» без to у короткій відповіді не взято (сумнів щодо «I think you ought»). had better в уроках немає — не взято.
- Герої — канон eng-heroes (Bohdan не любить football; Tom — drums і guitar; Halyna малює; Oksana — vet; Zoriana — programmer; Emma — firefighter; Ms Lysenko — вчителька Andrii); нових імен немає. Дрібниці: дядько Bohdan працює в офісі в Kyiv (a04), подруга мами Emma — programmer (a49).
- Словники: CD keen («keen on (playing) tennis») https://dictionary.cambridge.org/dictionary/english/keen ; CD ought https://dictionary.cambridge.org/dictionary/english/ought ; CD Grammar «Should», «Would», «Be able to» (як у шапці уроку); OALD interested (interested to do — граматичне, тому хибним не дано).
- Для верифікатора: a43 (don’t have to vs aren’t allowed — з e8s6), a46 (кілька форм питання), a53 (пропущене be в «Would it possible»).
- 2026-11-27 · verifier-pe9s7 (сесія verifier-pe9s7-pe9s8): перевірено, status "verified"; звіт reports/verify/write-eng-pool-g9-e9s7.md.
