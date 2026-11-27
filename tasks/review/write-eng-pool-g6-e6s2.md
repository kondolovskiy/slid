---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.444Z
id: write-eng-pool-g6-e6s2
type: write-pool
subject: eng
grade: 6
section: e6s2
status: review
claimed_by: writer-pe6s2
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Shopping and money» (Англійська мова, 6 клас, e6s2)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s2.js`: `SLID.pool("eng", { id: "pe6s2", section: "e6s2", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s2` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s2l1` — At the chemist’s, at the newsagent’s: types of shops
- `e6s2l2` — Why do you go there? To buy some bread
- `e6s2l3` — A few, both, all, no: a shopping list
- `e6s2l4` — Paying and getting change: pounds and hryvnias
- `e6s2l5` — Can I help you? In a clothes shop
- `e6s2l6` — It’s too big! Too small, too expensive

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s2.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s2` і `node tools/personalization-qa.mjs --pool pe6s2` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

### writer-pe6s2, 2026-11-27
**Файл:** content/eng/pool-g6-e6s2.js — пул `pe6s2`, 63 вправи (a01–a63), уроки e6s2l1–l6 (фінал l7 без вправ), `status: "draft"`. `validate --pool pe6s2` — 0/0; `personalization-qa --pool pe6s2` — лише «ще не verified». test-answer-ui / playtest не запускав (браузер — CI). Build не запускав.

**Покриття урок × sk (sk — лише з оцінюваних не-hyp екранів; кожна пара ≥ 3, рівні 1–3 у кожній):**
| Урок | sk → вправи | типи |
|---|---|---|
| l1 | vocab a01–a06 · phon a07–a09 · read a10–a12 | match 1, choice 3, word 2, pick 1, sort 1, stress 3, multi 1 |
| l2 | gram a13–a18 · read a19–a21 | gaps 2, match 1, build 1, word 1, pick 1, choice 2, multi 1 |
| l3 | gram a22–a27 · write a28–a30 | gaps 4, choice 1, word 1, pick 2, build 1 |
| l4 | vocab a31–a34 · func a35–a39 · read a40–a42 | match 1, gaps 3, word 3, choice 3, build 1, multi 1 |
| l5 | func a43–a48 · read a49–a51 | match 1, choice 4, word 1, build 1, gaps 1, multi 1 |
| l6 | gram a52–a57 · func a58–a60 · write a61–a63 | gaps 4, choice 2, word 2, build 2, pick 2 |

**`src`:** `mpim` (МП-ІМ, `program: true`; PDF SHA-1 43925b25…, `pdftotext` с. 20–22): с. 20 — тема «Покупки»: види магазинів, асортимент, гроші (vocab, read, phon l1; func l4 — ціни й решта); с. 21 — Determiners: quantity (all, both, a few, no), Adjectives: modifying with ‘too’, Clauses: subordinated — purpose, Modality: Can — permission / Could — requests, Future with will (gram l2, l3, l6; write l3, l6; func l5, l6).

**Словники:** stress — лише підкреслені в уроках слова з одним наголосом у CD і OALD: chemist, newsagent, greengrocer, butcher, toothpaste (e6s2l1), potato, assistant (підкреслені в e4/e5) — https://dictionary.cambridge.org/dictionary/english/{chemist,newsagent,greengrocer,butcher,toothpaste,potato,assistant}, https://www.oxfordlearnersdictionaries.com/definition/english/{chemist,newsagent,greengrocer,butcher_1,toothpaste,potato,assistant_1}. **magazine не взято:** OALD дає US /ˈmæɡəziːn/ (наголос на 1-му) поруч з UK /ˌmæɡəˈziːn/ (https://www.oxfordlearnersdictionaries.com/definition/english/magazine) — PITFALL weekend; в уроці e6s2l1 stress-екран має `mag|a|+zine` (PITFALL в inbox). dear = expensive (BrE) — OALD dear_1 (https://www.oxfordlearnersdictionaries.com/definition/english/dear_1) — у ключі a54 як друга правильна.

**Перевірки скриптами (scratchpad):** розв'язок кожної вправи через `SLID_LANG.check(solution)` і кожен ключ `word` — ок; `build` — усі перестановки всіх підмножин tiles ∪ extra через `SLID_LANG.check(…, "en")` — приймаються лише ключі (a15, a29 — обидва порядки в ключі, a37, a46, a55, a59); n-грами ≥ 7 слів проти g4–g11, dge*, інших пулів — копій речень уроків/фіналу з тим самим ключем немає (лишились формули «Can I help you?», «Why are you going to the …?», «How much change does he get?»); лексика — кожне слово є в g4-*, g5-*, g6-e6s1/-e6s2 (крім ключів-форм newsagent/greengrocer без ’s і bakeries/jumpers/ninety).

**Друга правильна відповідь:** a03, a06 — з ’s, без ’s, «… shop» (як в уроці, `keys: ["’"]`); a03/a06 — «small shop … sells only …» відсікає supermarket; a16 get / buy; a33 twenty / 20; a38 15 / fifteen; a54 expensive / dear; a29 — обидва порядки «a few eggs and no sausages». a60 — перероблено: «it isn’t too small / big» обидва правдиві для її розміру, тож пропуски — про red (too expensive) і green (too small). a59 build без коми: кома перед because у плитках не передається, ключ — без неї (BrE допускає обидва).

**Факти:** ₴200 — чинна банкнота НБУ; 50p — монета, £5/£10 — банкноти (як в уроці e6s2l4). Жодного «supermarket sells medicine» в українському контексті (в Україні ліки — лише в аптеці): a11 — «We go to the chemist’s in the next street».

**Герої:** нових імен немає; Harry (newsagent’s) — канон e6s2. Нові дрібні деталі: Taras — дві кепки (a59); Mariia купує подарунок мамі в bookshop (a13), листівку бабусі (a20); Tom — ручка в newsagent’s (a21).

**Спірне (верифікатору):**
1. a56 pick «These boots are [very] big. I can’t walk in them!» — very граматичне, помилка в значенні (very ↔ too, e6s2l6).
2. a47 — «No, thanks. I need a raincoat.» як хибна комбінація: суперечить змісту, не граматиці.
