---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.586Z
id: write-eng-pool-g6-e6s6
type: write-pool
subject: eng
grade: 6
section: e6s6
status: review
claimed_by: writer-pe6s6
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «School life: subjects and lessons» (Англійська мова, 6 клас, e6s6)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s6.js`: `SLID.pool("eng", { id: "pe6s6", section: "e6s6", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s6` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s6l1` — My favourite subject and why
- `e6s6l2` — Projects, tests, experiments: what we do in lessons
- `e6s6l3` — A subject that I love, a teacher who helps
- `e6s6l4` — School rules: you must, you mustn’t
- `e6s6l5` — You should ask for help: advice
- `e6s6l6` — The best lesson of the year

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s6.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s6` і `node tools/personalization-qa.mjs --pool pe6s6` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
### writer-pe6s6, 2026-11-27
**Результат:** `content/eng/pool-g6-e6s6.js`, пул `pe6s6`, 74 вправи a01–a74, `status: "draft"`. `node tools/validate.mjs --pool pe6s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe6s6 --strict` — лише «ще не verified». Build не запускав.

| Урок | sk → кількість (рівні 1/2/3 у кожній парі) | Типи |
|---|---|---|
| l1 (14) | vocab 4, func 4, phon 3, write 3 | match, gaps, pick, build, word, stress |
| l2 (14) | vocab 4, gram 4, read 3, write 3 | gaps, match, word, pick, choice, multi, build |
| l3 (11) | gram 5, vocab 3, write 3 | gaps, word, pick, multi, build, match |
| l4 (9) | gram 6, func 3 | gaps, pick, word, multi, choice, build |
| l5 (10) | gram 4, func 3, write 3 | gaps, pick, match, build, choice |
| l6 (16) | vocab 3 (sk з hyp-екрана; amazing / exciting / boring — з info l6), read 3, gram 4, func 3, write 3 | gaps, sort, pick, choice, multi, word, match, build |

**Джерело:** `mpim` (program: true), PDF як у задачі; `pdftotext` у цій сесії: с. 21 — «Шкільне життя»: улюблені предмети, види діяльності на уроках; функції «висловлювати враження», «аргументувати»; Relative defining who / which / that; Have (got) to; с. 22 — Must, Should, Past simple, Present continuous.

**Словники (curl CD, 2026-11-27):** useful ˈjuːs.fəl, difficult ˈdɪf.ɪ.kəlt, computer kəmˈpjuː.tər, history ˈhɪs.tər.i, because bɪˈkɒz, music ˈmjuː.zɪk, science ˈsaɪ.əns, amazing əˈmeɪ.zɪŋ — https://dictionary.cambridge.org/dictionary/english/<слово>. **geography у stress не брав** (pitfalls-content «Англійська» п. 19), хоча l1 її підкреслює.

**Друга правильна відповідь — як відсічено:**
- who / which: у word (a30) — which і that у ключі; у gaps that варіантом не дано; a32 multi — who + that.
- must / mustn’t / don’t have to / should — лише з явною рамкою: «Write must or mustn’t» (a42), «rule / your choice» (a43, a44, a47), «rule / good idea» (a52).
- a07 because / as / since; a17 pairs / a pair; a20 is doing / ’s doing (contractions).
- `build` (a06, a13, a27, a33, a38, a48, a54, a57, a71, a73): перебір через SLID_LANG.check; a33 (The map which… — два порядки), a38 (Daryna is the girl… / The girl who… is Daryna), a73 (to the zoo / with our class) — обидва порядки в `answer`; решта — рівно один порядок.
- n-грами ≥ 6 слів проти g*-*.js і diag-*.js: копії з тим самим ключем переписано (history boring — Zoriana, listen to the teacher, uniform-сцени l4, «You should ask Bohdan. He’s good at maths.», computer games all evening — dge7).

**Герої — канон, дрібне нове:** Yaryna малює постер, Myroslava й Orest — експеримент (Lviv, клас Тараса); Bohdan грає на гітарі в пісні класу (a62–a64); Kyrylo пише бабусі; у школі Andrii є кафе й art club; у школі Emma — trainers on PE; Daryna пише сестрі; Mariia — урок у зоопарку; Emma — проєкт про дерева в парку.

**Спірне для верифікатора:**
1. a52 must / should — обидва граматичні; відсічено рамкою «rule / good idea» (learned l5 «Tell a rule from advice»).
2. a10 history — CD три склади (ˈhɪs.tər.i); поділ «+his|to|ry», наголос однозначний.
3. a11 because — службове слово в stress; наголос на 2-му за CD.
4. l6 vocab — лише hyp-sk (як у pe6s5 l6).
