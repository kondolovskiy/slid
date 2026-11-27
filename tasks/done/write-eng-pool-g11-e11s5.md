---
claimed_from: todo
claimed_at: 2026-11-27T12:22:59.817Z
id: write-eng-pool-g11-e11s5
type: write-pool
subject: eng
grade: 11
section: e11s5
status: done
claimed_by: writer-pe11s5
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Science and its impact» (Англійська мова, 11 клас, e11s5)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s5.js`: `SLID.pool("eng", { id: "pe11s5", section: "e11s5", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s5` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s5l1` — Biology, physics, IT: branches of science
- `e11s5l2` — In the lab: equipment and the people who work there
- `e11s5l3` — It has been discovered, it is being tested: the passive
- `e11s5l4` — It can be recycled, it must be tested: modals and the passive
- `e11s5l5` — Science and the environment: good or bad?
- `e11s5l6` — Science in Ukraine and abroad

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s5.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s5` і `node tools/personalization-qa.mjs --pool pe11s5` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s5, 2026-11-27.** Файл `content/eng/pool-g11-e11s5.js` (pe11s5, draft), 68 вправ a01–a68, boss e11s5l7 без вправ.

| Урок | Вправ | sk × рівні | Типи |
|---|---|---|---|
| e11s5l1 | 13 | vocab 1-2-2-3, phon 1-2-3, gram 1-2-3, read 1-2-3 | match, word, pick, choice, stress, gaps, multi |
| e11s5l2 | 15 | vocab, phon, gram, func, write — по 1-2-3 | match, word, choice, stress, gaps, build, order |
| e11s5l3 | 10 | gram 1-1-2-2-2-3-3, write 1-2-3 | gaps, choice, match, build, word, pick |
| e11s5l4 | 9 | gram 1-1-2-2-3-3, write 1-2-3 | gaps, sort, word, build, choice, pick |
| e11s5l5 | 9 | vocab, read, func — по 1-2-3 | gaps, match, choice, multi, build |
| e11s5l6 | 12 | cult, read, gram, write — по 1-2-3 | choice, gaps, multi, word, pick, build |

- Кожна пара (урок, sk) з оцінюваних екранів — 3+ вправи рівнів 1–3. Пар лише на екрані-здогадці (`hyp`) немає: vocab l1–l2, gram l3–l4, func l5, cult l6 є й на оцінюваних екранах.
- `src`: p1407 с. 23 (функція «аргументувати точку зору», l5 func), с. 24 (лексика: галузі науки, обладнання й персонал, вплив на довкілля, наука в Україні), с. 25 (граматика: modals + passive, overview of tense forms active/passive). Назва джерела — як у facts/eng.md «Джерела» і пулах 10 кл.; сторінки звірено з текстом PDF (с. 23 — функції 11 кл., с. 24 — лексика, с. 25 — граматика).
- Друга правильна відповідь: у пропусках хибні лише неграматичні форми (is + множина, has been + V1, can to be, putted, borned, will tested); scales — множина, equipment і research — незлічувані (is); `word`: can’t / cannot (contractions), дієслово задано в умові (watch, keep, check, carry out). `build` перебрано скриптом (SLID_LANG.check, усі перестановки з extra): a24, a33, a42 — один порядок (keepCase + велика перша плитка), a55 — один, a67 — два (обидва в ключі).
- Перевірено скриптами: лексика не з пізніших уроків (зокрема waste / impact / warned прибрано з l4 і l5), 6-грами проти g4–g11 і фіналу — рамки з тим самим ключем не повторюються (залишились лише назви екранів, інструкції й речення фактів).
- Факти — лише з e11s5l5 (озон) і e11s5l6 (Академія, Paton, станція, CERN). Реальним закладам нічого не приписано (Zoriana-думка в a62/a68 — оцінна, без фактів).
- Герої — канон 11 кл.; нових імен немає. Нові дрібні деталі (NOTE в inbox): Daryna — колекція каменів, гори з рюкзаком (a12, a13); Mariia — дядько Oleh купив електромобіль, у школі Mariia збирають пляшки щоп’ятниці (a52); Kyrylo, Zoriana, Daryna, Bohdan, Emma — коментарі до статті Andrii (a60, a61).
- Словники (форма, наголос): Cambridge Dictionary — https://dictionary.cambridge.org/dictionary/english/<word> для geology, ecology, biologist, geologist, ecologist, astronomer, physics, chemist, goggles, sample, announce, pollution, pollute, academy, welding, microscope, technician (усі — один наголос UK/US); researcher і laboratory у `stress` не брав (UK ≠ US). Пасив і модальні — CD Grammar «Passive: forms» (https://dictionary.cambridge.org/grammar/british-grammar/passive-forms), як у розділі.
- `validate --pool pe11s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s5 --strict` — лише «ще не verified». test-answer-ui не запускав (немає Python-модуля playwright).

**verifier-pe11s5-pe11s6, 2026-11-27.** Незалежна перевірка: reports/verify/write-eng-pool-g11-e11s5.md. Кожну вправу розв'язано, факти звірено за ≥ 2 відкритими джерелами, наголос — CD + OALD, build — перебір перестановок. Пул → `verified`; правки й причини — у звіті §4, §7. validate --pool 0/0.
