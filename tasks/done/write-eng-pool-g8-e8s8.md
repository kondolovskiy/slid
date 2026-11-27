---
claimed_from: todo
claimed_at: 2026-11-27T10:29:02.086Z
id: write-eng-pool-g8-e8s8
type: write-pool
subject: eng
grade: 8
section: e8s8
status: done
claimed_by: writer-pe8s8
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «English-speaking countries: land, climate and people» (Англійська мова, 8 клас, e8s8)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s8.js`: `SLID.pool("eng", { id: "pe8s8", section: "e8s8", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s8` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s8l1` — The UK, Ireland, Canada, Australia: where are they?
- `e8s8l2` — Rainy, dry or snowy? Climate around the world
- `e8s8l3` — British, Irish, Canadian: people and nationalities
- `e8s8l4` — Much bigger, a bit smaller: comparing countries
- `e8s8l5` — If I lived in Canada, I would…
- `e8s8l6` — If you could visit one country, which would you choose?

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s8.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe8s8` і `node tools/personalization-qa.mjs --pool pe8s8` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe8s7-pe8s8 (агент writer-pe8s8), 2026-11-27.** Файл `content/eng/pool-g8-e8s8.js`, `pe8s8`, `status: "draft"`, 62 вправи (a01–a62). `validate --pool pe8s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s8` — 6 уроків, жодних прогалин, крім «ще не verified».

| Урок | sk → вправи (рівні) | Типи |
|---|---|---|
| e8s8l1 | cult a01–a03, phon a04–a06, gram a07–a09, write a10–a12 (кожна 1/2/3) | choice, sort, multi, stress, gaps, pick, build |
| e8s8l2 | cult a13–a15 (1/2/3), vocab a16–a19 (1,1,2,3), read a20–a22 (1/2/3) | choice, match, multi, gaps, word, sort |
| e8s8l3 | vocab a23–a25, gram a26–a28, cult a29–a31, write a32–a34 (кожна 1/2/3) | match, gaps, word, choice, pick, multi, build |
| e8s8l4 | read a35–a37, gram a38–a40, write a41–a43 (кожна 1/2/3) | choice, multi, gaps, word, pick, build |
| e8s8l5 | gram a44–a49 (1,1,2,2,3,3), write a50–a52 (1/2/3) | gaps, word, choice, pick, build |
| e8s8l6 | gram a53–a55 (1/2/3), func a56–a59 (1,2,2,3), write a60–a62 (1/2/3) | choice, pick, multi, gaps, build |

`src`: МП-ІМ с. 33 (тема «Країни виучуваної мови» → l1–l3), с. 34 (Comparatives with much, a bit → l4; could + if + past simple → l6 gram/write), с. 35 (Past simple — imagined situations after if; Would → l5), с. 32 (аргументувати власний вибір → l6 func).

Факти — лише з уроків e8s8 (і e8s7): положення країн, клімат (UK — west wetter; Ireland, NZ — mild; Canada — very cold snowy winters in many parts; Australia — very dry, large part desert, summer Dec–Feb), офіційні мови Canada / Ireland, площі й населення з роками як в l4; Canberra — столиця (g5-e5s10). Погода в повідомленнях героїв — вигадана, як в l2.

Second Conditional: were / was — обидва в ключі (a45); у головному реченні would / could / might — усі в ключі a47; хибні варіанти — will, can, Past Simple, would після if, Present після if. Distractor «If I am there…» замінено на «would be» (з could він граматичний). a39: much / a lot / far / very much. north of / in the north of: «to the north of» серед варіантів немає. a57 — два порядки («visit first» / «first visit»); extra — visited, не will (will дає правильне питання). keepCase не вжито в build (кома в if-плитці + «Start with If» відсікають другий порядок).

Самоперевірка: check(solution) — ok; build — перебір усіх перестановок; лексика до свого уроку — нових слів немає (Lily з l3 прибрано з a01); 6-грами — речень уроку з тим самим ключем немає (переписано a07, a12, a30, a37, a43, a49, a52, a56, a60, a62).

Словники: Cambridge — https://dictionary.cambridge.org/dictionary/english/canada , /australia , /continent , /island , /continental , /population , /ukraine , /climate , /desert (ім. ˈdez.ət; дієсл. dɪˈzɜːt — тому desert у stress не взято); OALD — https://www.oxfordlearnersdictionaries.com/definition/english/continent , /island , /continental , /population , /climate .

## Нотатки верифікатора

**verifier-pe8s7-pe8s8, 2026-11-27.** Звіт — reports/verify/write-eng-pool-g8-e8s8.md; пул → `status: "verified"`.
