---
claimed_from: todo
claimed_at: 2026-11-27T12:22:59.856Z
id: write-eng-pool-g11-e11s6
type: write-pool
subject: eng
grade: 11
section: e11s6
status: done
claimed_by: writer-pe11s6
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Travel and tourism» (Англійська мова, 11 клас, e11s6)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s6.js`: `SLID.pool("eng", { id: "pe11s6", section: "e11s6", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s6` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s6l1` — Kinds of tourism: active, cultural, green
- `e11s6l2` — Travelling around Ukraine: places to visit
- `e11s6l3` — Check in, look around, get on: travel verbs
- `e11s6l4` — Pick it up, look after it: phrasal or prepositional?
- `e11s6l5` — At first, then, eventually: the order of events
- `e11s6l6` — Beforehand and afterwards: a trip abroad

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s6.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s6` і `node tools/personalization-qa.mjs --pool pe11s6` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s6, 2026-11-27.** Файл `content/eng/pool-g11-e11s6.js` (pe11s6, draft), 69 вправ a01–a69, boss e11s6l7 без вправ.

| Урок | Вправ | sk × рівні | Типи |
|---|---|---|---|
| e11s6l1 | 12 | vocab, read, phon, write — по 1-2-3 | sort, word, gaps, choice, multi, stress |
| e11s6l2 | 15 | cult, read, gram, vocab, write — по 1-2-3 | choice, gaps, multi, word, pick, match, build |
| e11s6l3 | 12 | vocab, gram, read, write — по 1-2-3 | gaps, match, word, pick, multi, choice, order |
| e11s6l4 | 9 | gram 1-1-2-2-3-3, write 1-2-3 | gaps, choice, build, sort, word, pick |
| e11s6l5 | 9 | gram 1-1-2-2-3-3, write 1-2-3 | gaps, choice, multi, word, pick, order |
| e11s6l6 | 12 | gram, read, cult, write — по 1-2-3 | gaps, word, pick, choice, multi, build |

- Пар лише на екрані-здогадці (`hyp`) немає: vocab l1/l3, cult l2, gram l4–l6 є й на оцінюваних екранах.
- `src`: p1407 с. 24 (лексика «Подорож»: подорож Україною та країнами виучуваної мови, види туризму — l1, l2, l6 read/cult), с. 25 (граматика: phrasal vs prepositional verbs, linking words for chronological sequence, beforehand / afterwards — l3–l6). Назва джерела — як у facts/eng.md і пулах 10 кл.
- Друга правильна відповідь (за шапкою розділу): before / after у позиції без іменника ніде не хибні; хибне лише «in the end of», «Firstly» у контрасті, beforehand / afterwards + іменник; then / after that / eventually / finally / in the end поруч як варіанти не стоять; `word`: afterwards / afterward / later (a59), looked around / looked round (a30); транспорт — як в уроці l3 (get on — train / bus / plane, get into / out of — car / taxi; get in / into — обидва правильні, хибними не стоять). `build` перебрано скриптом: a26 — 4 порядки, a42 — 4, a68 — 2, усі в ключі; у a68 пастки немає навмисно (before / check — граматично можливі).
- 6-грами проти уроків і фіналу: рамки з тим самим ключем переписано (a47, a48, a54, a56, a57, a60, a65); лишились назви екранів, інструкції й речення фактів.
- Факти — лише з e11s6l2, e11s6l6 і (a20) e11s5l6. Реальним закладам нічого не приписано. Цивільних рейсів з України немає: Andrii — потяг до Poland, звідти літак (a62).
- Герої — канон 11 кл.; нових імен немає. Нові дрібні деталі (NOTE в inbox): Daryna — торік літо на фермі біля Poltava (a04), прогулянка в Sofiyivka (a24); Emma — канікули на фермі у Wales (a11), дідусь любить дерева (a18), Ruby годує Snowy (a40); Oksana — вікенд у Taras у Lviv (a34, a38, a39); Mariia — поїздка до Kyiv потягом, метро (a36); Taras — вікенд у Kyiv (a28).
- Словники (форма, наголос): Cambridge Dictionary — https://dictionary.cambridge.org/dictionary/english/<word> для active, cultural, rural, ecotourism, sightseeing, guesthouse, accommodation, destination, residence, waterfall, grotto, heritage, eventually, meanwhile, beforehand, afterwards (один наголос UK/US); фразові дієслова, at first / first, in the end / at the end of, after / afterwards — CD Grammar, як у розділі (https://dictionary.cambridge.org/grammar/british-grammar/after-afterwards, …/first-firstly-or-at-first).
- `validate --pool pe11s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s6 --strict` — лише «ще не verified». test-answer-ui не запускав (немає Python-модуля playwright).

**verifier-pe11s5-pe11s6, 2026-11-27.** Незалежна перевірка: reports/verify/write-eng-pool-g11-e11s6.md. Кожну вправу розв'язано, факти звірено за ≥ 2 відкритими джерелами, наголос — CD + OALD, build — перебір перестановок. Пул → `verified`; правки й причини — у звіті §4, §7. validate --pool 0/0.
