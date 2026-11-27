---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.411Z
id: write-eng-pool-g6-e6s1
type: write-pool
subject: eng
grade: 6
section: e6s1
status: review
claimed_by: writer-pe6s1
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Describing people» (Англійська мова, 6 клас, e6s1)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s1.js`: `SLID.pool("eng", { id: "pe6s1", section: "e6s1", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s1` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s1l1` — What does he look like? Tall or short?
- `e6s1l2` — Long dark hair and big blue eyes
- `e6s1l3` — A girl with glasses, a man with a beard
- `e6s1l4` — What is she like? Kind, friendly, shy
- `e6s1l5` — He looks happy! Very, quite, really
- `e6s1l6` — She looks like her mum, but she’s like her dad

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s1.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s1` і `node tools/personalization-qa.mjs --pool pe6s1` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

### writer-pe6s1, 2026-11-27
**Файл:** content/eng/pool-g6-e6s1.js — пул `pe6s1`, 74 вправи (a01–a74), уроки e6s1l1–l6 (фінал l7 без вправ), `status: "draft"`. `validate --pool pe6s1` — 0/0; `personalization-qa --pool pe6s1` — лише «ще не verified». test-answer-ui / playtest не запускав (браузер — CI). Build не запускав.

**Покриття урок × sk (sk — лише з оцінюваних не-hyp екранів; кожна пара ≥ 3, рівні 1–3 у кожній):**
| Урок | sk → вправи | типи |
|---|---|---|
| l1 | vocab a01–a04 · gram a05–a08 · func a09–a11 · read a12–a14 | gaps 3, match 2, word 2, build 2, pick 1, choice 3, multi 1 |
| l2 | gram a15–a19 · vocab a20–a22 · read a23–a25 | gaps 2, pick 1, build 1, word 2, match 1, choice 3, multi 1 |
| l3 | vocab a26–a28 · gram a29–a32 · func a33–a35 · read a36–a38 | gaps 3, word 2, multi 3, pick 1, match 1, build 1, choice 2 |
| l4 | vocab a39–a43 · phon a44–a46 · func a47–a49 · read a50–a52 | match 2, word 1, sort 1, gaps 1, pick 1, stress 3, choice 3, build 1, multi 1 |
| l5 | vocab a53–a56 · gram a57–a62 | match 1, gaps 4, word 2, pick 2, build 1 |
| l6 | gram a63–a68 · func a69–a71 · read a72–a74 | gaps 4, choice 3, word 1, pick 1, match 1, build 1, multi 1 |

**`src`:** `mpim` (МП-ІМ, `program: true`; PDF перезавантажено 2026-11-27, SHA-1 43925b25…, як у facts/eng.md; `pdftotext` с. 20–22): с. 20 — тема «Я, моя родина, мої друзі»: зовнішність, риси характеру (vocab, read, phon); с. 21 — Adjectives with linking verbs / degree adverbs, Clauses: be like + noun, Interrogatives (gram l1, l5, l6; func l1, l4, l6); с. 22 — Nouns: noun phrases with adjectives, Preposition (gram l2, l3; func l3).

**Словники (форми, значення, наголос):** stress — лише слова, підкреслені в уроках, з одним наголосом у CD і OALD: polite, honest, clever, lazy (e6s1l4), curly (e6s1l2) — https://dictionary.cambridge.org/dictionary/english/{polite,honest,clever,lazy,curly}, https://www.oxfordlearnersdictionaries.com/definition/english/{polite,honest_1,clever,lazy,curly}. smart = intelligent — CD «mainly US» (https://dictionary.cambridge.org/dictionary/english/smart) — лише в ключі a40 як друга правильна (AmE-лексика, не помилка). Інших нових форм немає.

**Перевірки скриптами (scratchpad):** розв'язок кожної вправи через `SLID_LANG.check(solution)` і кожен ключ `word` через `check` — ок; `build` — усі перестановки всіх підмножин tiles ∪ extra через `SLID_LANG.check(…, "en")` — приймаються лише ключі (a06, a11, a17, a34, a49, a59, a70); n-грами ≥ 6–7 слів проти g4–g11, dge*, інших пулів — копій речень уроків/фіналу/dge6 з тим самим ключем немає (лишились лише формули: «What does he look like», «Who do you look like? Who are you like?», «short brown hair and brown eyes» — канонічний опис Tom); лексика — кожне слово вправи є в g4-*, g5-*, g6-e6s1 (крім імен, форм-дистракторів tiredly/hats і ключів-синонімів wavy/nervous/anxious).

**Друга правильна відповідь:** a03 brown / dark brown / dark; a18 long / long straight; a21 curly / wavy; a40 clever / smart; a55 worried / nervous / anxious; a61 — «Write quite, very or really» (відсікає a little / a bit). build: a49 extra `are`, a70 extra `is` (щоб пастки не складали граматичне «What does your new friend like?» / «Who do you like?»); a11 — свідомо extra `look`: «What does Orest look like?» граматичне, але умова «hobbies» його відсікає (контраст уроку l1, як pe5s1 a41).

**Герої — канон e6s1 (glossary/eng-heroes.md):** окуляри — лише Andrii, Ms Lysenko; борода — Grandad Mykola і PE teacher Andrii (black beard, e6s1l3). Нові дрібні деталі (NOTE в inbox): у Orest є сестра з довгим волоссям і карими очима (a14); Ruby’s grandparents (a24); Ruby looks like her brother, is like her grandma, love music (a68); Tom looks like Mum Sarah (short brown hair, brown eyes), is like grandad — обидва люблять готувати (a72); Taras looks like Dad, talks a lot, is like Mum (friendly) (a66, a74); Andrii looks like his grandad, is like his mum (quiet) (a71); Halyna is like her mum (drawing, quiet), sometimes lazy, «thank you» in shops (a39, a51, a64); Denys shy with new people (a52); Ostap kind, funny, polite, curly hair and brown eyes like his dad (a39, a43, a50, a65); Kyrylo quiet with new people (a39); Aunt Liudmyla — red hat, Uncle Roman — no hat (a29). Нові імена: Vira і Dana — сестри в класі Mariia (a73); Max, Leo, Sam — персонажі, яких малює Mariia (a25).

**Спірне (верифікатору):**
1. a67, a56 — pick «за змістом» (Dmytro [looks] like Dad: they’re both funny and kind) — слово граматичне, помилка в значенні (контраст look like / be like з уроку l6).
2. a11 — пастка look складає граматичне питання, відсічене умовою (див. вище).
3. a42 gaps «{an|a} {honest|polite}»: комбінація «a polite» граматична, але умова «always tells the truth» відсікає polite.
