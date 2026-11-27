---
claimed_from: todo
claimed_at: 2026-11-27T12:02:17.497Z
id: write-eng-pool-g10-e10s6
type: write-pool
subject: eng
grade: 10
section: e10s6
status: review
claimed_by: writer-pe10s6
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Science and technology» (Англійська мова, 10 клас, e10s6)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s6.js`: `SLID.pool("eng", { id: "pe10s6", section: "e10s6", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s6` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s6l1` — Computer equipment: what do you use?
- `e10s6l2` — Messages, calls and news: modern communication
- `e10s6l3` — If the battery dies…: real conditions
- `e10s6l4` — If I could invent anything…: unreal conditions
- `e10s6l5` — If I were you, I’d…: giving advice
- `e10s6l6` — How science changes society: for and against

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s6.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s6` і `node tools/personalization-qa.mjs --pool pe10s6` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe10s6, 2026-11-27. Файл `content/eng/pool-g10-e10s6.js` — **61 вправа**, `status: "draft"`. `node tools/validate.mjs --pool pe10s6` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s6 --strict` — лише «ще не verified»; euphony — без зауважень. test-answer-ui не запускався (Python-модуля playwright немає — CI).

| Урок | Вправ | Рівні | sk (кількість) | Типи |
|---|---|---|---|---|
| e10s6l1 | 10 | 1, 2, 3 | vocab 4, phon 3, read 3 | match, gaps, sort, word, stress, choice, multi |
| e10s6l2 | 15 | 1, 2, 3 | func 3, vocab 3, cult 3, gram 3, write 3 | choice, multi, match, gaps, word, pick, build |
| e10s6l3 | 9 | 1, 2, 3 | gram 6, write 3 | gaps, build, choice, pick, word |
| e10s6l4 | 9 | 1, 2, 3 | gram 6, write 3 | gaps, choice, pick, word, build |
| e10s6l5 | 9 | 1, 2, 3 | gram 3, func 3, write 3 | gaps, word, pick, match, choice, build |
| e10s6l6 | 9 | 1, 2, 3 | func 3, read 3, write 3 | gaps, match, choice, multi, order, build |

- **Джерело:** `p1407`, `program: true`; `src` — «p1407 с. 22» (тема, функції: поради, аргументація), «p1407 с. 23» (first / second conditionals).
- **Умовні речення:** will / might / could / can у головному реченні не протиставлені в одному пропуску (значення — choice a28, a38); would у first conditional хибним не дається; пастки — will після if / unless, not після unless (a29, a30), will у second conditional (a43, a46, a52), would в if-частині (a39, a43), хибні форми. were / was — обидва в ключі `word` (a40); у `gaps` was поруч із were не стоїть. unless — лише в реальних умовах, правило «не для протилежного реальності» не перевіряється. a45: wouldn’t / would not / shouldn’t / should not + contractions (BrE should — CD should, як в уроці l5).
- **Diia** — лише як в уроці l2 (лютий 2020; цифрові документи, послуги; з 2021 паспорт рівний звичайному в Україні; кордон — ні). Брендів немає.
- **build:** if-частина з комою в плитці («is late,», «in London,», «if I were you,») і «Start with if / unless» в умові; a41 — другий порядок (every week на початку головного речення) у ключі; a61 — «is that» злито, щоб не складалось «One disadvantage is fake news that…».
- **stress:** лише слова, підкреслені в l1, плюс computer / install (підкреслені в fbText вправи stress l1); у кожному наборі є слово з наголосом на 2-му складі.
- **Перевірка лексики й копій:** той самий скрипт (scratchpad): слів з пізніших уроків розділу немає (instruction, dead прибрано; hurry → leave); 6-грами — рамки інструкцій, правила в `steps`, реакції на пораду (вони й є предметом l5) і факт Diia; рамки уроків з тим самим ключем замінено (3D printer, keep in touch, show it to the class).
- **Словники:** CD https://dictionary.cambridge.org/dictionary/english/viral («go viral»), /back-up («back sth up … to make a copy of information»); наголос desktop, laptop, keyboard, webcam, microphone, printer, hardware, software, computer, install — reports/verify/write-eng-g10-e10s6.md (CD, OALD); unless, should, if I were / was — там само (CD Grammar «Unless», CD should, OALD if_1).
- Нові дрібниці героїв (NOTE в inbox): у Grandad Vasyl старий desktop, Andrii віддав йому свою клавіатуру; комікс Mariia «went viral»; Kyrylo щоп’ятниці робить резервну копію; Myroslava чекає Ostap на концерт; Bohdan — тенісне відео; Daryna мріє літати до тітки в Odesa.
