---
claimed_from: todo
claimed_at: 2026-11-27T10:29:02.051Z
id: write-eng-pool-g8-e8s7
type: write-pool
subject: eng
grade: 8
section: e8s7
status: review
claimed_by: writer-pe8s7
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Ukraine: land, climate and people» (Англійська мова, 8 клас, e8s7)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s7.js`: `SLID.pool("eng", { id: "pe8s7", section: "e8s7", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s7` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s7l1` — Where is Ukraine? Borders and neighbours
- `e8s7l2` — The Carpathians, the Black Sea, the Dnipro: the or no article?
- `e8s7l3` — Hot summers, cold winters: the climate of Ukraine
- `e8s7l4` — Millions, per cent and half: numbers and statistics
- `e8s7l5` — Who lives in Ukraine? People and nationalities
- `e8s7l6` — Ukraine in numbers: a short report

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s7.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe8s7` і `node tools/personalization-qa.mjs --pool pe8s7` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe8s7-pe8s8 (агент writer-pe8s7), 2026-11-27.** Файл `content/eng/pool-g8-e8s7.js`, `pe8s7`, `status: "draft"`, 70 вправ (a01–a70). `validate --pool pe8s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s7` — 6 уроків, жодних прогалин, крім «ще не verified».

| Урок | sk → вправи (рівні) | Типи |
|---|---|---|
| e8s7l1 | cult a01–a03 (1/2/3), gram a04–a06 (1/2/3), vocab a07–a09 (1/2/3), write a10–a12 (1/2/3) | choice, sort, multi, gaps, pick, word, match, build |
| e8s7l2 | gram a13–a18 (1,1,2,2,3,3), write a19–a21 (1/2/3) | sort, gaps, word, choice, pick, build |
| e8s7l3 | read a22–a24, vocab a25–a27, gram a28–a30, cult a31–a33, write a34–a36 (кожна 1/2/3) | choice, multi, sort, gaps, word, pick, match, build |
| e8s7l4 | gram a37–a40 (1,2,2,3), vocab a41–a43 (1/2/3), write a44–a46 (1/2/3) | gaps, choice, pick, match, word, build |
| e8s7l5 | vocab a47–a49, read a50–a52, phon a53–a55, gram a56–a58, write a59–a61 (кожна 1/2/3) | match, word, gaps, choice, multi, stress, pick, build |
| e8s7l6 | read a62–a64, gram a65–a67, write a68–a70 (кожна 1/2/3) | choice, multi, gaps, word, pick, build |

`src`: МП-ІМ с. 33 (тема «Україна»: географічне положення, клімат, населення, національності; коментувати статистичні дані), с. 34 (Articles — no article → l2), с. 35 (Pronouns — quantity, Prepositions → l1 gram, l4 gram). Сторінки звірено з PDF (pdftotext, колонтитули 32–35).

Факти — лише з уроків e8s7: сусіди й сторони (Росія не в жодній вправі), площа «more than 600,000 km²», Hoverla 2,061 m, перепис 2001 р. (48.5 million; two thirds у містах → «about a third lived in villages» в a67/a70 — висновок з уроку: 32.8 %); 77.8 %, < 1 % each (Belarusians, Hungarians), 67.5 % (≈ two thirds, a52); Hungarians — Zakarpattia, Bulgarians — Odesa region, Crimean Tatars — Crimea. Клімат — як у l3. Chernihiv «in the north of Ukraine» — g5-e5s10 (fbText). Опитування — вигадані (клуб географії 20, клуб Оксани 12, школа Оксани 40, шаховий клуб 15, тенісний клуб Bohdan 24) — не клас Andrii, щоб не суперечити його опитуванню в l4.

Самоперевірка: (1) `SLID_LANG.check(solution)` для всіх gaps/pick/stress/word/build/match — ok; build — перебір усіх перестановок tiles + extra (a20 і a69 — по два порядки в ключі); (2) лексика проти g4–g8-e8s7 до свого уроку (скрипт verify-pe8s2 lex.mjs) — нових слів немає (warmest — від warm); (3) 6-грами проти уроків — збіги лише в описових фактах і шаблонних інструкціях; речень уроку з тим самим ключем немає (переписано a33, a37, a49, a58, a68, a31). Друга правильна: half / half of і «over» (a66) — у ключі; per cent ≠ percent — percent ніде не хибний; population is/are не оцінюється; «to the north of» і «north of» — у e8s7 лише перше (друге — e8s8).

Словники (форми, наголос): Cambridge — https://dictionary.cambridge.org/dictionary/english/nationality , /belarus , /hungary , /ukrainian , /population , /ukraine , /continental , /climate , /border , /neighbour (verb), /half («half (of)»), /dry ; OALD — https://www.oxfordlearnersdictionaries.com/definition/english/nationality , /population , /continental , /climate , /hungarian , /per-cent , /dry_1 («comparative drier» — тому в a29 лише drier).
