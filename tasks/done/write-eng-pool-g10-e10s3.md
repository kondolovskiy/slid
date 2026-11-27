---
claimed_from: todo
claimed_at: 2026-11-27T11:55:45.638Z
id: write-eng-pool-g10-e10s3
type: write-pool
subject: eng
grade: 10
section: e10s3
status: done
claimed_by: writer-pe10s3
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Food and habits» (Англійська мова, 10 клас, e10s3)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s3.js`: `SLID.pool("eng", { id: "pe10s3", section: "e10s3", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s3` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s3l1` — National dishes of Ukraine and the UK
- `e10s3l2` — Sweet, spicy or sour? Tastes and preferences
- `e10s3l3` — I used to love sweets, Grandma would bake: states and actions
- `e10s3l4` — Healthy food: what is good for you?
- `e10s3l5` — Bad habits and how to break them
- `e10s3l6` — I’m used to it: getting used to new food

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s3.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s3` і `node tools/personalization-qa.mjs --pool pe10s3` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe10s3 (writer-pe10s3-pe10s4), 2026-11-27.** Файл `content/eng/pool-g10-e10s3.js` (pe10s3, 88 вправ a01–a88, `status: "draft"`). `validate --pool pe10s3` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s3 --strict` — лише «ще не verified»; euphony — без зауважень. Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (скрипт; cult у l1 і l4 є лише в hyp-екранах, але покрито теж — факти з текстів уроків). `test-answer-ui.py --suite content --pool pe10s3` не запускав: Python-модуля playwright у контейнері немає (CI). Перебір `SLID_LANG.check`: усі `solution` зараховуються; build приймає лише ключі (a29, a38, a72, a73, a83 — по 1 порядку; без keepCase). У ключах `word` кінцевого `.!?` немає.

| Урок | Вправи | sk → кількість (рівні 1–3 у кожній парі) | Типи |
|---|---|---|---|
| e10s3l1 | a01–a18 (18) | cult 3, read 3, vocab 3, gram 3, phon 3, write 3 | choice, multi, match, gaps, word, pick, stress |
| e10s3l2 | a19–a31 (13) | vocab 3, gram 4, func 3, write 3 | match, gaps, word, pick, multi, choice, sort, build |
| e10s3l3 | a32–a43 (12) | gram 6, write 3, read 3 | gaps, choice, sort, pick, multi, build |
| e10s3l4 | a44–a61 (18) | cult 3, vocab 3, gram 3, read 3, phon 3, write 3 | choice, match, sort, word, gaps, pick, multi, stress |
| e10s3l5 | a62–a77 (16) | vocab 3, func 3, gram 4, write 3, read 3 | match, gaps, word, choice, sort, pick, multi, build |
| e10s3l6 | a78–a88 (11) | gram 5, write 3, read 3 | gaps, choice, pick, multi, build |

**Джерело:** П1407, PDF https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf (md5 f8f54184…, `pdftotext`, друкований номер = PDF): с. 22 — 10 кл., тема «Харчування» (національні страви…, смаки, уподобання, здорова та корисна їжа, шкідливі звички) і функція «давати поради, реагувати на поради інших» → vocab, read, cult, func, phon, write, gram l1 і l4 (прийменники лексики); с. 23 — «use(d) to/would + infinitive for past routines and habits», «verbs taking gerund», «verb + ’-ing’ vs. + ’to’ infinitive» → gram l2 (prefer to / -ing), l3, l5 (tried + -ing), l6 (be / get used to + -ing) і write l3, l6.

**Рішення щодо пасток:**
- would зі станами (have = own, be, like, know, live, love) — завжди хибне; would / used to з діями — не протиставлено (у gaps лише одне з них серед варіантів). Одноразова подія / «three times last summer» → Past Simple (a35, a37, a40); Past Simple для звички хибним не дається.
- **didn’t used to** не дано хибним ніде (TQ-158 відкрите): a39 — пастки «didn’t use», «wasn’t used to»; пастка build a38 — «walked», не «used».
- prefer: than хибне, over — у ключі (a-word уроку не повторював); prefer to eat = eating — обидва не протиставлено (a25 «I prefer to drink tea» правильне; a31 пастки eat / to eating).
- Have you tried **to read** — граматичне (try to = attempt), тож не пастка (a69: read / reads); «get into fizzy drinks» / «make fizzy drinks» — граматичні, тож a63: give up / give in / break.
- `word`: a21 fussy + picky, choosy (CD «picky … difficult to please: a picky eater», «choosy»), difficult; a49 balanced + healthy, good; a64 broken + kicked (CD «kick the habit»), given up.
- Факти — лише з уроків: borscht UNESCO 2022, banosh (Hutsul, cornmeal, sour cream, brynza), haggis і Burns Night 25 January, neeps and tatties, chicken Kyiv (butter, breadcrumbs, M&S 1979, Sainsbury’s 2022 «Kyiv»), NHS (UK’s health service), 5 A Day (frozen peas рахуються, картопля — ні, сік — лише одна склянка), protein / carbs за списком уроку. Звички — нігті, сніданок, перекуси, телефон, газовані напої; без речовин і медичних порад.
- 6-грами (скрипт проти g4–g11): прибрано збіги з тим самим ключем («This yoghurt is low in sugar», «chicken Kyiv is named after Ukraine’s capital», «a balanced diet is about what you eat every day», UNESCO-рамка). Лишились інструкції й визначення з info в `match`.
- Лексика (скрипт проти g4–g9, e10s1, e10s2 і уроків e10s3 до `lesson`): прибрано strawberries, nuts, exam, haircut, mirror, reaction, onto, braver, balance, hryvnias. Лишились прийняті варіанти `word` (picky, choosy) і форми відомих слів (sold, lentil, snack).
- stress — лише слова з `<u>` в уроках (national, regional, savoury, ingredient, potatoes, Ukrainian, delicious, protein, carbohydrate, vitamin, fibre, balanced); у кожному наборі — різні наголошені склади.

**Нові дрібні деталі героїв (NOTE в inbox):** Isla’s dad читає вірш на Burns supper, гість-хлопець з London; дідусь Emma колись — кухар у великому готелі (пече chicken Kyiv удома); Vasyl (тато мами Andrii) колись працював у пекарні в Chernihiv; Grandad Mykola в дитинстві — пес Sirko, три корови; Bohdan — fussy eater; Zoriana — sweet tooth; Daryna — «I’ll try anything»; Emma — плавання о 6 ранку, Tom приєднався до ранкової групи; мама Orysia працює в кафе; Orysia підстриглась, у Vinnytsia ходила до школи без форми, уроки о 8.

**Словники (форма, наголос; curl у цій сесії):** CD https://dictionary.cambridge.org/dictionary/english/<word>: national «/ˈnæʃ.ən.əl/», regional «/ˈriː.dʒən.əl/», savoury «/ˈseɪ.vər.i/», ingredient «/ɪnˈɡriː.di.ənt/», delicious «/dɪˈlɪʃ.əs/», potato «/pəˈteɪ.təʊ/», protein «/ˈprəʊ.tiːn/», carbohydrate «/ˌkɑː.bəʊˈhaɪ.dreɪt/», vitamin «/ˈvɪt.ə.mɪn/» (US /ˈvaɪ.t̬ə-/ — наголос той самий), fibre «/ˈfaɪ.bər/», balanced «/ˈbæl.ənst/»; kick (idiom «kick the habit»), picky, choosy. Граматика — як в уроці (CD Grammar «Used to», «Would», «Prefer», «Would rather»; URL — tasks/…/write-eng-g10-e10s3.md).

**verifier-pe10s3-pe10s4, 2026-11-27.** Незалежна перевірка: reports/verify/write-eng-pool-g10-e10s3.md — verified. Кожну вправу розв'язано, build перебрано, словники CD/OALD (curl), факти по два джерела. Правки — у звіті §7.
