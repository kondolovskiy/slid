---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.478Z
id: write-eng-pool-g6-e6s3
type: write-pool
subject: eng
grade: 6
section: e6s3
status: done
claimed_by: writer-pe6s3
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Food traditions and dishes» (Англійська мова, 6 клас, e6s3)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s3.js`: `SLID.pool("eng", { id: "pe6s3", section: "e6s3", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s3` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s3l1` — What’s on the menu? Names of dishes
- `e6s3l2` — What’s in it? It’s made with…
- `e6s3l3` — First, then, after that: a simple recipe
- `e6s3l4` — We ate pancakes: irregular verbs
- `e6s3l5` — Did you try it? I didn’t like it: questions and negatives
- `e6s3l6` — Food traditions in Ukraine and the UK

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s3.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s3` і `node tools/personalization-qa.mjs --pool pe6s3` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

### writer-pe6s3, 2026-11-27
**Результат:** `content/eng/pool-g6-e6s3.js`, пул `pe6s3`, 68 вправ a01–a68, `status: "draft"`. `validate --pool pe6s3` — 0 помилок, 0 попереджень; `personalization-qa --pool pe6s3 --strict` — лише «ще не verified»; `euphony --pool pe6s3` — 0. Build не запускав (паралельний запуск). `test-answer-ui --suite content --pool pe6s3` — не запускав: у контейнері немає Python-модуля playwright (лишається для CI / оркестратора).

**Покриття (урок × sk з оцінюваних екранів, без hyp; у кожній парі рівні 1–3):**
| Урок | sk → кількість | Типи |
|---|---|---|
| l1 | vocab 6, phon 3, func 3 | gaps, sort, word, pick, stress, choice, build |
| l2 | vocab 3, gram 6, write 3 | match, word, choice, gaps, pick, build |
| l3 | vocab 3, read 3, gram 4, write 3 | choice, gaps, order, pick, word, build |
| l4 | gram 6, write 4 | gaps, match, word, sort, pick, build |
| l5 | gram 6, func 3, write 3 | gaps, choice, build, word, pick, match |
| l6 | read 3, cult 3, write 3 | choice, multi, sort, gaps, word, build |
Boss l7 — без вправ.

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, звірено pdftotext у цій сесії): с. 20 — 6 кл. «Харчування: традиції харчування, назви страв» (l1, l2 vocab, l6 cult); с. 16 — читання: меню, «розуміє прості рецепти», короткі тексти (l3 read, l6 read); с. 21 — Imperatives, Adverbs: sequencing (l3 vocab/gram/write); с. 22 — Passives: Present simple affirmative; Past simple: affirmative, negative, questions (l2 gram/write, l4, l5, l6 write).

**Словники (curl 2026-11-27):** наголос CD UK — starter ˈstɑː.tə, oven ˈʌv.ən, dessert dɪˈzɜːt, menu ˈmen.juː, mushroom ˈmʌʃ.ruːm, salad ˈsæl.əd (https://dictionary.cambridge.org/dictionary/english/<слово>); усі шість підкреслені в уроці l1. roast — CD «roast adjective [before noun]» (roast chicken), тому в a04 ключ roast + roasted. firstly — OALD firstly («Firstly and first (of all) are used to introduce…», https://www.oxfordlearnersdictionaries.com/definition/english/firstly) — у ключі a35 поруч із first (як finally/lastly в уроці).

**Друга правильна відповідь — як відсічено:**
- `word`: a04 «Use one word: fried, boiled or roast» (ключ roast, roasted); a18, a21 — «Use the verb serve / cook» (інакше eaten / fried); a14 — «a big green vegetable» у body; a51 — «Use the verb eat» (інакше try / like); a65 — «Write the Ukrainian word» (інакше towel, table), ключ rushnyk, rushnik; a55 — contractions; a40, a46, a68 — дієслово задано (see, buy, eat).
- `gaps`: дистрактори — неграматичні форми (eated, maked, haved, comed, adds, is/are з неправильним числом, doesn’t з I) або часові маркери (yesterday, last Sunday) відсікають теперішній час. Правопис y → ied (tried/tryed) у пул **не брав**: правила немає в уроках (tried — лише в sort l4).
- Послідовники: «Then»/«After that» в одному пропуску не протиставляв (обидва — наступний крок); хибні — First на середніх кроках і Finally / Then на першому.
- `build` — усі перестановки всіх підмножин плиток з extra перебрано через `SLID_LANG.check` (node, app/lang.js; скрипт у scratchpad): a11 (13 699), a22, a24, a50, a66 (по 1 956), a36, a44, a57 (по 325) — рушій приймає лише ключ. keepCase + велика перша плитка (Holubtsi, What, Scones, Sofiia) відсікає питальний порядок «Are holubtsi…». a11 — кома в плитці «fish,»; пастка boiled суперечить меню в body.
- Розв'язок кожної gaps/word/pick/stress/build/match через `SLID_LANG.solution` → `check` = true; choice/multi/sort/order — вручну.
- Лексика — скриптом проти всіх уроків eng до уроку вправи (g4, g5, e6s1–e6s2 і e6s3 до `lesson`): поза уроками лише ключі-варіанти (firstly, rushnik, roasted) і хибне desert у pick a06. 5-грами умов проти уроків e6s3 — збігаються лише назви страв і факти (bread and salt, Sunday roast).

**Герої — канон уроків, нового мало (NOTE):** Ostap не був голодний і не з'їв борщ (a51); Oksana з бабусею Hanna готували голубці, Dmytro з'їв три (a47); у Taras в суботу Ostap з'їв шість сирників (a43); Emma: на Sunday roast у них курка в духовці (a61), бабуся й дідусь приїжджали (a62). Emma не куштувала деруни й борщ їй не сподобався (l5) — не суперечу; Tom у Києві не був — a55 без «in Kyiv».

**Спірне для верифікатора:**
1. a57 build «I didn’t like the fish» — топікалізований порядок «The fish I didn’t like» рушій не зарахує; вважаю неприродним для 6 кл., у ключ не додавав.
2. a05 / a12: деруни — «main course» (меню l1), хоч це теж pancakes — пастка рівня 3 з уроку.
3. a28 «Then cook them in the hot water for ten minutes» — побутова деталь рецепта (варені яйця), «Ask an adult» не повторював.
4. a64 «roast {meat|cake}» і «sandwiches and {scones|borscht}» — дистрактори безглузді, а не граматичні.

### verifier-pe6s3-pe6s4, 2026-11-27
Незалежна верифікація: reports/verify/write-eng-pool-g6-e6s3.md. Пул → `status: "verified"` після мінімальних правок (перелік — у звіті §6). validate --pool pe6s3 — 0 помилок, 0 попереджень. Build не запускав.
