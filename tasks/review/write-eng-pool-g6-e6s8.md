---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.647Z
id: write-eng-pool-g6-e6s8
type: write-pool
subject: eng
grade: 6
section: e6s8
status: review
claimed_by: writer-pe6s8
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «London, the capital of the UK» (Англійська мова, 6 клас, e6s8)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s8.js`: `SLID.pool("eng", { id: "pe6s8", section: "e6s8", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s8` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s8l1` — London: a city on the Thames
- `e6s8l2` — Famous places in London: a map
- `e6s8l3` — If it rains, go to a museum!
- `e6s8l4` — Kyiv and London: two capitals
- `e6s8l5` — Emma told me about London: said and told
- `e6s8l6` — A post from London: what I liked most

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s8.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s8` і `node tools/personalization-qa.mjs --pool pe6s8` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

## Нотатки агента (writer-pe6s8, 2026-11-27)
**Результат:** `content/eng/pool-g6-e6s8.js`, пул `pe6s8`, 61 вправа a01–a61, `status: "draft"`. `node tools/validate.mjs --pool pe6s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe6s8` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk, у кожній парі ≥ 3 вправи, рівні 1–3; sk з hyp-екранів — cult l1 — теж покрито):**

| урок | вправ | рівні | типи | sk |
|---|---|---|---|---|
| e6s8l1 | 12 | р1×4, р2×4, р3×4 | gaps 4, choice 2, multi 2, word 2, pick 1, match 1 | cult 3, gram 3, vocab 3, read 3 |
| e6s8l2 | 12 | р1×4, р2×4, р3×4 | gaps 5, choice 2, pick 1, word 2, match 1, multi 1 | cult 3, gram 3, vocab 3, read 3 |
| e6s8l3 | 9 | р1×3, р2×3, р3×3 | gaps 4, word 1, choice 1, match 1, build 2 | gram 3, func 3, write 3 |
| e6s8l4 | 9 | р1×3, р2×3, р3×3 | gaps 4, choice 1, multi 1, word 1, pick 1, build 1 | cult 3, gram 3, write 3 |
| e6s8l5 | 10 | р1×3, р2×4, р3×3 | gaps 4, word 1, choice 2, pick 1, build 1, multi 1 | gram 4, write 3, read 3 |
| e6s8l6 | 9 | р1×3, р2×3, р3×3 | choice 1, gaps 4, multi 1, build 1, match 1, word 1 | read 3, write 3, vocab 3 |

Boss e6s8l7 — без вправ.

**Джерело:** `mpim` (program: true), PDF відкрито в цій сесії, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7; сторінка PDF = друкована. с. 21 — тема «Країни виучуваної мови — столиця; визначні місця», функції «порівнювати», «висловлювати враження», Adjectives «Comparatives and superlatives», Conditional «‘if’ + Present simple; real conditions» (l1 cult/vocab/read, l2 cult/vocab/read і порівняння, l3, l4, l6 read/vocab); с. 22 — «Present perfect simple … experiences», «Past simple», Passives «Past simple affirmative», «Reported statements with ‘say’ and ‘tell’» (l1 gram, l2 gram a16, l5, l6 write).

**Словники (curl, 2026-11-27):** CD opposite («facing»), tell («tell someone something»), sightseeing; форми older / newer / smaller / shorter / bigger, went, said / told — правильні й регулярні за CD; URL https://dictionary.cambridge.org/dictionary/english/<слово>. stress у цьому пулі немає (уроки e6s8 phon не мають).

**Факти:** лише з уроків e6s8 (capital of the UK and England, biggest city, about 9 million (2024), Thames 346 km, Dnipro about 2,200 km, Kyiv about 3 million (2022); Big Ben — bell, Elizabeth Tower, finished 1859; London Eye 135 m, 2000, opposite Big Ben; Tower of London more than 900 years ago; Buckingham Palace — the King’s palace; British Museum north of the river, free; Natural History Museum — dinosaurs; London Underground 1863 — oldest in the world, Kyiv Metro 1960). Нових фактів немає. Королеву як «пастку» в a13 не беру (Buckingham Palace — резиденція і короля, і королеви).

**Герої:** канон розділу. Нові дрібниці: George — школа біля Thames, з неї видно London Eye, був на ньому п’ять разів; у George є grandad і dad (dad був у Kyiv, a10); George любить dinosaurs (сумісно з l6 — улюблене місце Natural History Museum), у вихідні грає у football; Oliver і Ruby (однокласники Emma, glossary/eng-heroes.md) були на тій самій поїздці (Ruby — улюблене Big Ben; Oliver — «a bit afraid» нагорі); Tom хоче поїхати з Emma і мамою. Andrii: улюблене місце — London Eye (як у l6), red bus і Thames — канон e4s7. Liliia — улюблене місце Tower of London (boss), у пулі цього не змінюю.

**Друга правильна відповідь і перевірка.** Скрипт на app/lang.js (vm): gaps — parseGaps і solution; word — кожен ключ зараховано; build — усі впорядковані підмножини tiles + extra через `SLID_LANG.check(…, "en")`: рушій приймає рівно `answer`.
- if: хибний will — лише в if-частині; головне речення — імператив або Present Simple (PITFALL writer-e6s8). a30, a32 — кома в плитці, «Start with If» у body (PITFALL verifier-e6s8): «Go to … if it rains,» не складається.
- say/tell: хибні варіанти — лише said ↔ told і займенник (my / her / his); час дієслова в непрямій мові не протиставляю (backshift не вимагається, PITFALL writer-e11s1). a48 — без пастки said (PITFALL writer-e6s8: «said» з «told me» дає правильне речення з частини плиток).
- word: a08 tourists / visitors; a61 most / best (як в уроці); a05, a17, a38 — «Use the verb go / the word old / small» відсікає travelled, bigger, less; a21 — «the word that means on the other side» відсікає near; a44 — «Write said or told».
- Present Perfect vs Past Simple — лише з часовим словом (on Friday, last Friday, last week, two years ago).
- match a09, a19, a29, a60: кожен лівий має одну доречну праву (a29 — конкретні поради: jumper, Buckingham Palace, sandwich, Natural History Museum).
- n-грами від 7 слів проти g4–g11, diag і пулів: рамки уроку з тим самим ключем переписано (a47, a49 — збіг з dge6, a53, a54, a56, a59); лишилися лише фактичні фрази («was built more than 900 years ago», «the London Eye is 135 metres high»).

**Спірне (для верифікатора):** a45/a49 — дистрактор «my» граматичний як речення, але хибний щодо цитати в body (як choice e6s8l5); a16 — «was / were finished» (число), бо «The tower finished in 1859» неприродне; a57 — «What did you like» (без most) складається з частини плиток, як і в уроках.
