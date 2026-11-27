---
claimed_from: todo
claimed_at: 2026-11-27T10:46:46.156Z
id: write-eng-pool-g9-e9s8
type: write-pool
subject: eng
grade: 9
section: e9s8
status: done
claimed_by: writer-pe9s8
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Cities of Ukraine and English-speaking countries» (Англійська мова, 9 клас, e9s8)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s8.js`: `SLID.pool("eng", { id: "pe9s8", section: "e9s8", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s8` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s8l1` — Big cities of Ukraine: Lviv, Odesa, Kharkiv
- `e9s8l2` — Old towns and historic monuments
- `e9s8l3` — Big cities in English-speaking countries
- `e9s8l4` — Which city would you like to live in?
- `e9s8l5` — If we had left earlier…: the Third Conditional
- `e9s8l6` — A city guide for a friend from abroad

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s8.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s8` і `node tools/personalization-qa.mjs --pool pe9s8` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
- 2026-11-27 · writer-pe9s8 (агент writer-pe9s7-pe9s8). Файл `content/eng/pool-g9-e9s8.js`, 78 вправ a01–a78, `status: "draft"`. `validate --pool pe9s8` — 0/0; `personalization-qa --pool pe9s8` — правило виконано (лише «ще не verified»).
- Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3:

| Урок | Вправ | Рівні | Типи | sk: рівні |
|---|---|---|---|---|
| e9s8l1 | 15 | 1–3 | choice, multi, match, sort, gaps, pick, word, build | read, cult, gram, vocab, write — по 1/2/3 |
| e9s8l2 | 16 | 1–3 | choice, multi, word, pick, stress, gaps, build | read, vocab, phon, write 1/2/3; gram 1/2/3/3 |
| e9s8l3 | 13 | 1–3 | choice, multi, match, sort, word, gaps | read, gram, write 1/2/3; cult 1/2/2/3 |
| e9s8l4 | 10 | 1–3 | gaps, choice, multi, word, build | gram 1/2/2/3; func, write 1/2/3 |
| e9s8l5 | 12 | 1–3 | choice, multi, gaps, word, pick, build | read, write 1/2/3; gram 1/1/2/2/3/3 |
| e9s8l6 | 12 | 1–3 | choice, gaps, word, pick | read, func, write, gram — по 1/2/3 |

- `src` — PDF МП-ІМ: с. 33 — «Україна / Країни виучуваної мови: великі міста, визначні місця й історичні пам'ятки»; с. 28 — «Розуміє … опис місць … у путівниках» (l6 read); с. 29 — «Запитує, як дістатися… Дає пораду» (l6 func); с. 31 — «Описує події (реальні чи уявні)…», «розповідає, як дістатися» (l4/l6 write); с. 34 — Superlatives «one of the», Conditional (could + if + past simple; would have + if + past perfect); с. 35 — Passives: Past simple, Past perfect after if.
- Факти — лише з уроку e9s8 (Kharkiv north-east / second-largest; Lviv west, UNESCO 1998, Rynok Square, Town Hall tower, Svobody Avenue; Odesa south-west, port, UNESCO 2023, Potemkin Stairs 1837–1841 / 192 steps, Opera House 1887 / Fellner and Helmer; Derzhprom 1925–1928; Transfiguration Cathedral 1030s; Edinburgh, Dublin / Liffey / Trinity 1592; Sydney Opera House 1973 / Utzon / UNESCO 2007; Canberra; Toronto / CN Tower 1976; Ottawa; Statue of Liberty — gift from France). Обчислення: Trinity 1592 → «more than 400 years old» (a33). Нічого про розклади, квитки, правила реальних закладів; Sydney / Melbourne (CONFLICT) не вжито; подорожей літаком немає. Вигадані дрібниці героїв: місто Emma ~50,000 (a11), школа Taras 1958 (a27), школа Isla 1890 (a41), нова бібліотека школи Liam (a39), кафе в Odesa (a75).
- Друга правильна: will після if — хибне; could have / might have не дистрактори; if-частина й головна частина не стоять двома пропусками з перехресними варіантами (goes/went × will/would) — реальний план задано контекстом (a46, a54); opened — неперехідне правильне, тож хибні лише were/is opened, opened by; Potemkin Stairs / Steps — назву не питаємо; «by foot» не беремо хибним (in / at foot); змішані умовні не утворюються з дистракторів (a58 came — динамічне дієслово, a66 «will see»).
- Перевірки скриптами (scratchpad pool-e9s7-e9s8/bin): `SLID_LANG.check` — розв'язки зараховуються; build — перебір усіх підмножин: a14, a30 — лише ключ (умова «a sentence, not a question»), a53 — два порядки в ключі, a65 — лише ключ (кома в плитці «about the party,», «Start with If»). 6-грами: рамки уроку з a32, a34, a44, a57, a67 переписано; лишились лише імена місць і сполуки фактів («a big port on the Black Sea»). Лексика — з уроків до свого `lesson`.
- Наголос (stress) — лише слова з `<u>` в уроках: cathedral, monument, historic, architect, population (e9s8), museum (e5s7), visitor (e6s7); у кожному наборі ≥ 2 позиції.
- Словники: CD found («Boston was founded in 1630») https://dictionary.cambridge.org/dictionary/english/found ; CD worth («be worth doing») https://dictionary.cambridge.org/dictionary/english/worth ; CD Grammar «Conditionals: if» і OALD open (intransitive) — як у шапці уроку й reports/verify/write-eng-pool-g7-e7s7.md.
- 2026-11-27 · verifier-pe9s8 (сесія verifier-pe9s7-pe9s8): перевірено, status "verified"; звіт reports/verify/write-eng-pool-g9-e9s8.md.
