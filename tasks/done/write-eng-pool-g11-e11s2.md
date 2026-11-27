---
claimed_from: todo
claimed_at: 2026-11-27T12:09:38.445Z
id: write-eng-pool-g11-e11s2
type: write-pool
subject: eng
grade: 11
section: e11s2
status: done
claimed_by: writer-pe11s2
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Food and recipes» (Англійська мова, 11 клас, e11s2)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s2.js`: `SLID.pool("eng", { id: "pe11s2", section: "e11s2", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s2` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s2l1` — Meals, snacks and drinks
- `e11s2l2` — Plenty of, hardly any: quantifiers
- `e11s2l3` — A few or few? A little or little?
- `e11s2l4` — Healthy and unhealthy food: what are your priorities?
- `e11s2l5` — Most of us, none of them: quantifiers with of
- `e11s2l6` — A family recipe, step by step

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s2.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s2` і `node tools/personalization-qa.mjs --pool pe11s2` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s2, 2026-11-27.** Файл `content/eng/pool-g11-e11s2.js`, пул `pe11s2`, 73 вправи (a01–a73), `status: "draft"`.
`node tools/validate.mjs --pool pe11s2` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s2 --strict` — 6 уроків, 73 вправи, прогалина лише «ще не verified». `SLID_LANG.check(solution)` зараховує всі ключі; перебір build (a51 з `keepCase`, a60) — зараховується лише ключ. `test-answer-ui.py` — модуля playwright немає, прогін у CI.

| Урок | Вправ | sk → рівні | Типи |
|---|---|---|---|
| e11s2l1 | 15 | cult 1,2,3 · vocab 1,2,3 · read 1,2,3 · phon 1,2,3 · write 1,2,3 | choice, multi, gaps, match, pick, stress |
| e11s2l2 | 10 | gram 1,1,2,2,2,3,3 · write 1,2,3 | gaps, choice, multi, pick, word |
| e11s2l3 | 9 | gram 1,1,2,2,3,3 · read 1,2,3 | gaps, choice, sort, multi, pick |
| e11s2l4 | 18 | func · vocab · phon · gram · read · write — кожна 1,2,3 | choice, gaps, match, pick, stress, multi, build |
| e11s2l5 | 12 | gram 1,1,2,2,3,3 · write 1,2,3 · read 1,2,3 | gaps, choice, word, multi, pick, build |
| e11s2l6 | 9 | vocab 1,2,3 · read 1,2,3 · write 1,2,3 | match, word, pick, choice, order, multi, gaps |

- **src:** `p1407 с. 24` — лексика «Харчування» (їжа, напої й закуски; корисна та шкідлива їжа; пріоритети; рецепти страв: l1, l3 read, l4 vocab/phon/read, l6); `p1407 с. 25` — граматика (overview of all quantifiers: l2, l3 gram, l4 gram, l5); `p1407 с. 23` — функція «порівнювати… стилі життя» (l4 func/write). l5 read (опитування) має `с. 25`, бо тренує most of / none of; альтернатива — с. 24. Сторінки звірено за PDF.
- **cult (l1)** — лише hyp-екран уроку, але sk є в екранах, тож 3 вправи (tea як вечеря в BrE, elevenses) — як pe10s3.
- **Пастки другої правильної:** a lot of / lots of / plenty of ніде не в одному пропуску, у word a22 — plenty / a lot / lots / a great deal / loads; none of + однина/множина — обидві правильні в multi a57, ніде не протиставлені; neither of + дієслово множини не стоїть хибним (a45 відсікає зміст: «they love pizza»); each/every — хибні лише every of і almost each; all the = all of the (a57); whereas / while — ніколи в одному пропуску; millilitres / milliliters — обидва в ключі a72; much у ствердженні не хибне — хибне лише much + множина / many + незлічуване.
- **Факти:** реальних фактів немає (соняшникова олія, пампушки не взято); рецепт флапджеків Emma — власний (вівсянка, масло, цукор, мед; 180 °C, ≈ 25 хв), канон: Emma пече флапджеки щонеділі.
- **Канон героїв:** Emma 17 / Tom 15 (Tom їсть більшість флапджеків, обідає в canteen — нове), Sarah, Grandad Emma — кухар, Orysia (перший тиждень в Англії), Bohdan (мама працює допізна по середах — нове), клас Andrii — 24 учні й canteen, Daryna і сестра, Polina (Kharkiv), Ms Kravets — клуб і кулінарна книжка. Нових імен немає. Halyna (Zelena Dolyna, де лише один магазин) свідомо не взято для «supermarket».
- **Наголос:** takeaway, elevenses, smoothie, sparkling (e11s2l1), breakfast, delicious (раніше підкреслені); seasonal, nutritious, affordable, convenient, priority (e11s2l4), lifestyle (раніше). CD UK = US для всіх.
- **Словники (curl у цій сесії):** https://dictionary.cambridge.org/dictionary/english/<word> — takeaway, elevenses, smoothie, sparkling, nutritious, affordable, convenient, priority, seasonal, tablespoon, teaspoon, millilitre; CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/few-little-a-few-a-little, …/neither, …/none, …/each-or-every.
- **Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e11s1-e11s2/bin/`): lex.mjs — поза уроками нічого (elevenses — хибний збіг через `<u>`); слова proper, received, hurry, roll, pour замінено. ngram.mjs — рамки уроків і фіналу з тим самим ключем переписано (a16, a20, a23, a25, a52, a63, a71–a73).
- **Для верифікатора:** a45 (Neither / Either за змістом), a28 (Be quick! / Don’t worry), a36 (comes / goes / takes first), a61 (four gaps, each / every).

- [x] validate і personalization-qa — 0 помилок; `status: "draft"`.
- [x] Нотатки, словники; рядок в inbox.
- [x] → `tasks/review/`.
