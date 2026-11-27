---
claimed_from: todo
claimed_at: 2026-11-27T12:09:38.409Z
id: write-eng-pool-g11-e11s1
type: write-pool
subject: eng
grade: 11
section: e11s1
status: review
claimed_by: writer-pe11s1
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Rights, responsibilities and tolerance» (Англійська мова, 11 клас, e11s1)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s1.js`: `SLID.pool("eng", { id: "pe11s1", section: "e11s1", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s1` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s1l1` — Young people’s rights and responsibilities
- `e11s1l2` — Good manners: how we behave and communicate
- `e11s1l3` — The day before, the next day: reported speech
- `e11s1l4` — She admitted that…, he promised that…: reporting verbs
- `e11s1l5` — Tolerance, kindness and charity
- `e11s1l6` — Housework: is it fair? A family discussion

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s1.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s1` і `node tools/personalization-qa.mjs --pool pe11s1` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s1, 2026-11-27.** Файл `content/eng/pool-g11-e11s1.js`, пул `pe11s1`, 70 вправ (a01–a70), `status: "draft"`.
`node tools/validate.mjs --pool pe11s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s1 --strict` — 6 уроків, 70 вправ, прогалина лише «ще не verified». `SLID_LANG.check(solution)` зараховує всі ключі; перебір build (a20, a40, a64) — зараховується лише ключ. `test-answer-ui.py` — модуля playwright у контейнері немає, прогін у CI.

| Урок | Вправ | sk → рівні | Типи |
|---|---|---|---|
| e11s1l1 | 11 | vocab 1,1,2,2,3 · phon 1,2,3 · read 1,2,3 | gaps, match, word, pick, stress, choice, multi |
| e11s1l2 | 13 | vocab 1,1,2,3 · func 1,2,3 · gram 1,2,3 · write 1,2,3 | gaps, match, word, pick, choice, multi, build |
| e11s1l3 | 9 | gram 1,1,2,2,3,3 · write 1,2,3 | gaps, match, multi, pick |
| e11s1l4 | 13 | vocab 1,1,2,3 · gram 1,1,2,2,3,3 · write 1,2,3 | match, gaps, word, pick, choice, build, multi |
| e11s1l5 | 11 | vocab 1,1,2,2,3 · read 1,2,3 · phon 1,2,3 | gaps, match, word, pick, choice, multi, stress |
| e11s1l6 | 13 | read 1,2,3 · func 1,2,3,3 · vocab 1,2,3 · write 1,2,3 | choice, multi, match, gaps, build, pick |

- **src:** `p1407 с. 24` — лексика (права й обов'язки, норми поведінки, толерантність і благодійність, домашнє господарство: l1, l2, l5, l6 read/vocab); `p1407 с. 25` — граматика (reported speech with changed tenses, reporting verbs + that: l3, l4); `p1407 с. 23` — функції (аргументувати думку, вступати в дискусію, підтримувати: l6 func/write). Сторінки звірено за PDF (pdftotext, колонтитули 23–25). Would you mind + -ing у програмі 11 кл. окремо не названо — l2 func/gram має `с. 24` (норми поведінки та спілкування).
- **Пастки другої правильної:** TQ-144 — теперішня форма ніде не хибна (хибні: had took, had went, had ran, had buyed, has + V3 з минулим часом, will sent, can’t to); Past Simple → Past Perfect — обидві в multi (a27, a43); admit/deny + -ing, promise + to, insist on, suggest that + базова форма / Past Simple, would you mind if I + past — серед варіантів немає; it’s up to / down to — обидва в ключі a03; behaviour — AmE behavior рушій нормалізує (a14).
- **Факти — лише з уроків:** Конвенція (1989 / 1991 / до 18) — a10; Volunteer Day (5 December, UN 1985) — a53.
- **Канон героїв:** Ms Romaniuk, Yehor, Ms Kvitka, Mr Hnatiuk, Orysia (переїхала two years ago — як e11s7), Sofiia, Grandad Mykola й 15 дерев, Ostap допомагає літнім людям на вулиці, Emma волонтерить у бібліотеці, Kyrylo — history club, Denys — Kyiv. Нових імен немає. Дрібні нові деталі: Mr Hnatiuk тренує 20 років (a32), у Taras з Zlata — черга на сміття (a58), у Emma — rota з dishwasher (a59), у Mariia — іспити в травні (a60).
- **Наголос (stress) — лише слова з `<u>` в уроках, з одним наголосом у CD (UK = US):** responsible, responsibility, education, respect, opinion, community (e11s1l1 і раніше); charity, volunteer, tolerant, tolerance, fundraiser, kindness (e11s1l5). **donate не взято:** CD UK dəʊˈneɪt / US ˈdoʊ.neɪt.
- **Словники (curl у цій сесії):** https://dictionary.cambridge.org/dictionary/english/<word> — responsible, responsibility, education, respect, charity, volunteer, tolerant, tolerance, fundraiser, kindness, donate, behaviour, polite, interrupt; https://dictionary.cambridge.org/dictionary/english/admit («She admitted making a mistake» — тому admit + -ing ніде не хибне), …/deny, …/promise; CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/mind («would you mind if I + past or do you mind if I + present»; відповіді No, not at all / I’m afraid…), …/suggest.
- **Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e11s1-e11s2/bin/`): lex.mjs — поза уроками лише склади stress і «it’»/«other’» (апострофи); ngram.mjs (6-грами проти g*.js) — збігаються лише шаблонні заголовки й формули («Sorry to bother you, but would you mind…», «No, not at all. Of course not.»); рамки уроків з тим самим ключем переписано (a39, a53, a68, a70).
- **Для верифікатора:** a62 (The main reason is that / That’s why), a37 (pick за змістом: denied ↔ complained), a60 (Fair enough + do your fair share), a29 (had ran).

- [x] validate і personalization-qa — 0 помилок; `status: "draft"`.
- [x] Нотатки, словники; рядок в inbox.
- [x] → `tasks/review/`.
