---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.716Z
id: write-eng-pool-g7-e7s2
type: write-pool
subject: eng
grade: 7
section: e7s2
status: done
claimed_by: writer-pe7s2
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «In the kitchen: cooking and laying the table» (Англійська мова, 7 клас, e7s2)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g7-e7s2.js`: `SLID.pool("eng", { id: "pe7s2", section: "e7s2", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe7s2` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e7s2l1` — Pots, pans and plates: kitchen things
- `e7s2l2` — Boil, fry or bake? Ways of cooking
- `e7s2l3` — A slice of bread, a little salt: how much?
- `e7s2l4` — It should be cooked for ten minutes: recipes
- `e7s2l5` — Laying the table: another plate, the other fork
- `e7s2l6` — Do have some more! Guests at the table

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g7-e7s2.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe7s2` і `node tools/personalization-qa.mjs --pool pe7s2` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe7s1-pe7s2, 2026-11-27.** Результат: `content/eng/pool-g7-e7s2.js`, пул `pe7s2`, 69 вправ a01–a69, `status: "draft"`. `node tools/validate.mjs --pool pe7s2` — 0 помилок, 0 попереджень; `personalization-qa --pool pe7s2 --strict` — лише «ще не verified». Build не запускав.

| Урок | Кількість | sk: кількість (рівні) | Типи |
|---|---|---|---|
| e7s2l1 | 9 | vocab 6 (1,1,2,2,2,3); write 3 (1,2,3) | gaps, match, word, pick, sort |
| e7s2l2 | 11 | vocab 5 (1,1,2,2,3); gram 3 (1,2,3); write 3 (1,2,3) | gaps, match, word, pick |
| e7s2l3 | 9 | gram 6 (1,1,2,2,3,3); write 3 (1,2,3) | gaps, build, word, pick |
| e7s2l4 | 12 | gram 6 (1,1,2,2,3,3); read 3 (1,2,3); write 3 (1,2,3) | gaps, match, build, word, pick, choice, multi |
| e7s2l5 | 15 | vocab 4 (1,1,2,3); gram 5 (1,2,2,3,3); func 3; write 3 | gaps, match, word, pick, build |
| e7s2l6 | 13 | func 4 (1,2,2,3); gram 3; phon 3; write 3 | gaps, match, pick, build, stress, word |
Типи разом: gaps 31, word 14, pick 7, match 6, build 5, stress 3, sort 1, choice 1, multi 1. Boss l7 — без вправ.

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…). с. 32 — тема «Харчування» 7 кл. (приготування їжі, сервірування, кухонні прилади й посуд, способи обробки) — l1, l2, l5 vocab/func/write; с. 34 — Determiners: another, the other; Quantity: uncountable nouns, much and many; Imperatives: ‘do’ for emphasis, invitation, ‘let me’ — l3, l5 gram, l6; с. 35 — Passive forms: Infinitive — l4 (pdftotext с. 34–35 відкрито).

**Словники:** stress — лише слова з `<u>` в уроках e7s2 (l1: cooker, oven, frying pan, saucepan, kettle, cupboard, microwave; l5: napkin, tablecloth; l6: delicious), CD (curl): https://dictionary.cambridge.org/dictionary/english/delicious (dɪˈlɪʃ.əs), …/napkin, …/kettle, …/microwave (ˈmaɪ.krə.weɪv), …/tablecloth, …/cooker, …/cupboard (ˈkʌb.əd), …/oven, …/saucepan (UK ˈsɔː.spən), …/frying-pan (ˈfraɪ.ɪŋ ˌpæn). lay the table — OALD https://www.oxfordlearnersdictionaries.com/definition/english/lay_1 («to lay the table»); set the table — CD https://dictionary.cambridge.org/dictionary/english/set-the-table. Форми fried / fries, laid, knives, eaten, kept, cut — з уроку e7s2l2/l4/l5.

**Друга правильна відповідь — як відсічено:**
- lay / set the table: a52 `answer` — laid, set; у gaps (a51, a54, a56) set ніколи не стоїть варіантом.
- pan (pitfall 14): a03 — frying pan, pan; word на saucepan не давав (pot / pan / saucepan); a08 — sink, kitchen sink.
- a little / a bit of — ніколи не варіанти одного пропуску; some не варіант.
- ергативні boil / cook після should (pitfall 15): у l4 хибні варіанти — лише «should boiled», «be boil», «be cutted», «be ate» (неграматичні); «can cut» як варіант не давав.
- verbs у `word`: a12 «Write boil, fry, bake or roast in the correct form» (інакше «cooks»); a16 «Write the correct form of fry»; a33 «of eat»; a44 «the plural of knife»; a48 «Write another or the other» (інакше «a / that spoon»); a68 «Write the word for “very, very tasty”» (інакше lovely / great).
- another / the other: «the other» хибне лише там, де предметів більше двох (a46 шість ложок і семеро людей; a47 стільця немає; a48 десять ложок); «another» хибне — друга з двох (a46, a49, a56).
- Help yourself / yourselves: кількість гостей названо в body (a62 «the only guest», a63 «seven people», a69 «two boys»).
- `build` — усі перестановки всіх підмножин з `extra` через `SLID_LANG.check`: a23, a32, a40, a47, a62 — приймається лише ключ; питальні інверсії («Can the pizza…?») відсічені великою першою плиткою «The …» + `keepCase`.

**Копії уроків (pitfall 18):** n-грами від 6 слів проти content/eng/g*.js — збігів з тим самим ключем немає; лишились визначення слів (a02, a06, a43 — значення з info), формули «Can you lay the table, please?» (a53), «Yes, please. That would be lovely» (a59) і шаблони інструкцій. Переписано рамки, що повторювали уроки: a09, a14, a16, a18, a20, a30, a32, a34–a36, a41, a47, a48, a54, a57, a59, a67.

**Герої:** лише канон — Andrii, Sofiia, Bohdan, Kyrylo (Kyiv); Oksana, Grandma Hanna, Halyna, Dmytro; Emma, Tom, Ruby; Taras, Zlata, Ostap (Lviv); Mariia, Uncle Ihor, Uncle Oleh (Kharkiv; бабуся без імені). Нові дрібні сцени: Andrii обідає в Bohdan (a57, a62), Bohdan і Kyrylo в гостях у Andrii (a69), Ruby на вечері в Emma (a47), Ostap у гостях у Taras (a61), Uncle Oleh на обіді в Mariia (a49, a56).

**Спірне для верифікатора:**
1. a43 «a fork — You eat with it, and it isn’t a spoon» — незграбне, але однозначне в межах чотирьох пар.
2. a05 sort «You cook food in it or on it / You keep or wash things in it» — microwave і kettle свідомо не взяв (неоднозначні).
3. a36–a38 — власні «упаковки» (pancakes, fish fingers, rice); fish fingers і freezer — з e7s2l4, rice — e4s4/e6s3.

## Верифікація

**verifier-pe7s1-pe7s2, 2026-11-27.** Пул pe7s2 (69 вправ) → `verified`, 3 правки (a26 strawberries → biscuits — D-019; hint a23, a20). Звіт — reports/verify/write-eng-pool-g7-e7s2.md. `validate --pool pe7s2` — 0/0; `personalization-qa --strict` — без «БРАКУЄ» після зміни статусу. Build не запускав.
