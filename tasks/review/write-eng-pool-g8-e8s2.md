---
claimed_from: todo
claimed_at: 2026-11-27T10:10:23.302Z
id: write-eng-pool-g8-e8s2
type: write-pool
subject: eng
grade: 8
section: e8s2
status: review
claimed_by: writer-pe8s2
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Healthy living and free time» (Англійська мова, 8 клас, e8s2)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g8-e8s2.js`: `SLID.pool("eng", { id: "pe8s2", section: "e8s2", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe8s2` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e8s2l1` — Sleep, food and exercise: a healthy lifestyle
- `e8s2l2` — Too much sugar, not enough sleep
- `e8s2l3` — I enjoy cycling, I want to try climbing: -ing or to?
- `e8s2l4` — Take up a sport, give up fast food: phrasal verbs
- `e8s2l5` — Hiking, camping, cycling: active weekends
- `e8s2l6` — How do we spend our free time? A class survey

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g8-e8s2.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe8s2` і `node tools/personalization-qa.mjs --pool pe8s2` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe8s2, 2026-11-27. Файл `content/eng/pool-g8-e8s2.js` (pe8s2, draft), 76 вправ a01–a76; boss e8s2l7 — без вправ.
`validate --pool pe8s2` — 0 помилок, 0 попереджень; `personalization-qa --pool pe8s2` — без помилок (БРАКУЄ лише «ще не verified»); `euphony --pool` — чисто. `test-answer-ui.py` не запущено: у контейнері немає Python-модуля playwright.

| Урок | sk (вправ; рівні) | Типи |
|---|---|---|
| e8s2l1 (16) | vocab 4 (1,1,2,3); func 3; phon 3; read 3 (hyp-екран уроку); write 3 | gaps, sort, word, pick, choice, multi, stress |
| e8s2l2 (12) | gram 6 (1,1,2,2,3,3); read 3; write 3 | gaps, sort, word, pick, build, match, choice, multi |
| e8s2l3 (11) | gram 8 (1–3); write 3 | gaps, sort, word, choice, pick, build |
| e8s2l4 (11) | vocab 4; gram 4; write 3 | match, gaps, word, pick, build |
| e8s2l5 (14) | vocab 4; gram 4; read 3; write 3 | match, word, gaps, choice, pick, multi |
| e8s2l6 (12) | func 3; read 3 (hyp-екран уроку); vocab 3; write 3 | gaps, choice, multi, word |

Кожна пара (урок, sk екранів уроку, разом з hyp) — ≥ 3 вправи з рівнями 1, 2, 3.
`src`: МП-ІМ (program: true) — с. 32 (l1, l5: «Стиль життя»), с. 33 (l6: коментувати статистичні дані), с. 34 (l2: Quantity, Modifying ‘enough’), с. 35 (l3, l4: Verbs — phrasal, patterns with to-infinitive / -ing). Сторінки звірено з PDF (pdftotext, колонтитули 32–35).

Однозначність (рішення автора):
- like / love / hate / start — ніколи не в пропуску -ing/to; a35 (hate) — `word` з обома ключами, a32 (start) — choice «both».
- enough у `word` не перевіряється (didn’t get ___ sleep приймає much) — лише gaps/build з неграматичними дистракторами (too many, sleep enough, many + bread).
- «do/did + -ing» (do some cycling — граматичне в BrE) не взято хибним варіантом; хибні до go + -ing — to + -ing, гола основа, інший час.
- a44 «got up», a46 «worked out» — інструкція «Use get up / work out in the past» відсікає woke / went out.
- a47 build: «took up» однією плиткою (інакше took chess up), два порядки з last year у ключі; a22, a36 — один порядок.
- a71 popular + common (pitfall verifier-e8s2).
- Здоров'я — лише твердження уроку: 8–10 год сну, година активності, фрукти/овочі, junk food не щодня, вода; поради з походу (a60) — шолом, вода, не самому, перевірити велосипед (безпека, не медицина).
- 6-грами: скрипт порівняння пулу з уроками e8s2 (scratchpad) — копій із тим самим ключем немає; лишилися інструкції («Is it a healthy habit or not?», «Which word can go in the gap?»), формула «only a few of us play», «eight to ten hours a night» не в ключі.

Словники: Cambridge Dictionary і OALD із сесії дали 403 (WebFetch), тож наголос і форми звірено за загальновідомими транскрипціями — **верифікатору звірити**: active /ˈæk.tɪv/, midnight /ˈmɪd.naɪt/, computer /kəmˈpjuː.tə/, teenager /ˈtiːnˌeɪ.dʒə/, exercise, energy, lifestyle, healthy (як в уроці); give up + -ing, take up / give up / get up / work out (OALD phrasal verbs); go + -ing (CD Grammar «Go»). URL: https://dictionary.cambridge.org/dictionary/english/teenager, …/midnight, …/computer, https://www.oxfordlearnersdictionaries.com/definition/english/active_1.
Нова лексика поза уроками (мінімум, рівень A2): ketchup, chips, space, cousins, yellow belt, alarm clock, straight away, gym, paints — верифікатору оцінити.
