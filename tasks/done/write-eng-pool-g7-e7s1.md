---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.680Z
id: write-eng-pool-g7-e7s1
type: write-pool
subject: eng
grade: 7
section: e7s1
status: done
claimed_by: writer-pe7s1
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Family life: housework and traditions» (Англійська мова, 7 клас, e7s1)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g7-e7s1.js`: `SLID.pool("eng", { id: "pe7s1", section: "e7s1", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe7s1` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e7s1l1` — Housework: who does what at home?
- `e7s1l2` — I’ve just washed the dishes: just and already
- `e7s1l3` — Have you tidied your room yet?
- `e7s1l4` — We’ve lived here for ten years: for and since
- `e7s1l5` — We made it ourselves: myself, yourself, ourselves
- `e7s1l6` — Family traditions and celebrations

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g7-e7s1.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe7s1` і `node tools/personalization-qa.mjs --pool pe7s1` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe7s1-pe7s2, 2026-11-27.** Результат: `content/eng/pool-g7-e7s1.js`, пул `pe7s1`, 81 вправа a01–a81, `status: "draft"`. `node tools/validate.mjs --pool pe7s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe7s1 --strict` — лише «ще не verified». Build не запускав.

| Урок | Кількість | sk: кількість (рівні) | Типи |
|---|---|---|---|
| e7s1l1 | 14 | read 3 (1,2,3); vocab 5 (1,1,2,2,3); gram 3 (1,2,3); write 3 (1,2,3) | choice, gaps, multi, match, word, pick, build |
| e7s1l2 | 9 | gram 6 (1,1,2,2,3,3); write 3 (1,2,3) | gaps, build, word, pick |
| e7s1l3 | 13 | read 3; gram 4 (1,2,2,3); func 3; write 3 | choice, gaps, multi, build, word, pick, match |
| e7s1l4 | 12 | gram 6 (1,1,2,2,3,3); func 3; write 3 | gaps, sort, word, pick, build, match |
| e7s1l5 | 18 | read 3; gram 6 (1,1,2,2,3,3); func 3; phon 3; write 3 | choice, gaps, multi, match, word, build, pick, stress |
| e7s1l6 | 15 | read 3; cult 3; phon 3; write 3; gram 3 (усі — 1,2,3) | choice, gaps, multi, match, sort, stress, word, build |
Типи разом: gaps 32, word 15, build 7, match 6, stress 6, pick 5, choice 4, multi 4, sort 2. Boss l7 — без вправ.

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, як у facts/eng.md). с. 32 — тема 7 кл. (обов'язки в сім'ї, домашні справи, традиції й свята) — l1, l6 (read/cult/phon/write); с. 35 — Present perfect simple (since, already, mid position) і Pronouns: reflexive — l2–l5, l6 gram (pdftotext с. 35 відкрито).

**Словники (наголос і форми):** stress — лише слова з `<u>` у уроках e7s1 (l1: housework, tidy, rubbish; l5: -self/-selves; l6: tradition, celebrate, celebration, pancake), звірено CD (curl): https://dictionary.cambridge.org/dictionary/english/housework (ˈhaʊs.wɜːk), …/rubbish, …/tidy, …/myself, …/himself, …/herself, …/itself, …/yourself, …/yourselves (jɔːˈselvz), …/ourselves, …/themselves, …/tradition, …/celebrate, …/celebration, …/pancake. chore — CD https://dictionary.cambridge.org/dictionary/english/chore (у ключі a08 як друга відповідь). Третя форма: lived, known, had, been, fed, made, put, got, done, tidied, watered, decorated — з уроку e7s1l2/l4.

**Друга правильна відповідь — як відсічено:**
- just / already (pitfall 15): лише з явним часом — a18 (7 pm, зроблено о 9 am), a20 (пальто ще на Томі / о четвертій), a23 (11 am, о восьмій), a81 (still warm). Без маркера just/already не питаю (a22 — форма made, не прислівник).
- already у питанні («Have you finished already?» — урок e7s1l3 дозволяє при здивуванні): у a36 пропуск yet/already з питання прибрано, лишено лише Have/Has.
- yet: a35 build — обидва порядки в `answer` (yet в кінці й «haven’t yet tidied»).
- for / since: a47 after «I was eleven» (не «my birthday»: «for my birthday» дало б хибну, але природну сполуку).
- -self / by -self: a54 `answer` — yourself, by yourself; a60, a65, a80 — by уже в `before`.
- do / make (a13): «Write do or make» в заголовку (інакше start/finish the shopping).
- housework (a08): ключ housework + chores; houseworks — «Almost».
- tradition (a77): «A thing your family does every year is a family …» — tradition / custom; celebration ≠ «щороку» (визначення уроку).
- collective noun (pitfall 15 «Our team win»): у a78 пропуск takes/take після «my family» прибрано.
- `build` — усі перестановки всіх підмножин плиток з `extra` через `SLID_LANG.check` (скрипт у scratchpad): a10, a17, a28, a35, a43, a55, a79 — рушій приймає лише ключі; граматичні альтернативи (емфатичне «We ourselves tidied…», обставина на початку a79, «haven’t yet») — у `answer`; питальна інверсія відсічена великою першою плиткою + `keepCase`.
- `word` перевірено `wordVerdict`: a32 (haven’t / have not, contractions), a45 (Since / since), a54, a77, a08.

**Копії уроків (pitfall 18):** n-грами від 6 слів проти content/eng/g*.js і diag-* — збігів з ключем немає; лишились шаблонні рамки інструкцій («One word in X’s message is wrong», «X writes to Y») і в a01 «feed the cat, water the plants» (неоцінюваний список), a44 «How long have you lived in…» (формула). Речення з рамками уроку (a09, a11, a12, a16, a23, a29, a32, a68, a70, a71, a77, a78) переписано.

**Герої й факти:** лише канон (eng-heroes): Andrii — квартира, кіт у сім'ї, шаховий клуб, бабуся Nina й дідусь Vasyl у Chernihiv; Bohdan — tennis; Halyna малює (art club); Mariia — єдина дитина, Polina; Taras і Zlata — Lviv, Ostap. Дрібні нові деталі (не суперечать канону): у Andrii вдома список обов'язків (a01), Bohdan у tennis club з травня (a42), Halyna в art club з вересня й подруга Оксани з шести років (a45, a48 — узгоджено між собою: 7 років), Andrii на Святвечір у Chernihiv (a68), у Taras тато пече паску (a67), Emma й Tom щогрудня роблять різдвяні листівки (a69), Tom з вересня в secondary school (a41 — канон: Year 7). Факти про свята — лише з e7s1l6 (12 страв, кутя, колядки, писанки, паска, кошик до церкви; Pancake Day, шоколадні яйця, Christmas pudding).

**Спірне для верифікатора:**
1. a43 (func, lvl 1) — `build` без `hint` (лвл 1, validate не вимагає).
2. a63/a75 stress: набір -self + слова l1 (housework, rubbish) — лексика з того ж розділу, але з раніших уроків; у l5 phon — інакше всі слова мали б наголос на 2-му складі.
3. a68 — Christmas Eve у Chernihiv для сім'ї Andrii: нова деталь канону (у e6s5 — їздять coach до бабусі й дідуся).
4. a39 «He has known Ostap since they were seven» — вік знайомства Taras і Ostap у каноні не заданий.

## Верифікація

**verifier-pe7s1-pe7s2, 2026-11-27.** Пул pe7s1 (81 вправ) → `verified`, 10 правок (a79 keepCase — блокувальна; a78 канон; a36, a41, a45, hint a51 — D-019; hint a14, a56, a60). Звіт — reports/verify/write-eng-pool-g7-e7s1.md. `validate --pool pe7s1` — 0/0; `personalization-qa --strict` — без «БРАКУЄ» після зміни статусу. Build не запускав.
