---
claimed_from: todo
claimed_at: 2026-11-27T11:55:45.564Z
id: write-eng-pool-g10-e10s1
type: write-pool
subject: eng
grade: 10
section: e10s1
status: review
claimed_by: writer-pe10s1
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Relationships and conflicts» (Англійська мова, 10 клас, e10s1)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s1.js`: `SLID.pool("eng", { id: "pe10s1", section: "e10s1", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s1` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s1l1` — What kind of person are you? Personality
- `e10s1l2` — Friends, classmates, neighbours: kinds of relationships
- `e10s1l3` — By the time I came, they had left: the Past Perfect again
- `e10s1l4` — As soon as, after, before: time clauses
- `e10s1l5` — A friend in need: helping each other
- `e10s1l6` — Can I say something? Solving a conflict

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s1.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s1` і `node tools/personalization-qa.mjs --pool pe10s1` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe10s1, 2026-11-27.** Файл `content/eng/pool-g10-e10s1.js` (pe10s1, 63 вправи a01–a63, `status: "draft"`). `validate --pool pe10s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s1 --strict` — лише «ще не verified». Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (скрипт). Перебір `SLID_LANG.check`: усі `solution` зараховуються; build (a17, a32, a44) приймає лише ключ (по 1 порядку; a32, a44 — «Start with …» в умові). `test-answer-ui.py --suite content` не запускав (CI).

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e10s1l1 | vocab 3, func 3, phon 3, read 3 (1,2,3) | match, gaps, word, choice, multi, stress |
| e10s1l2 | vocab 3, gram 3, write 3 (1,2,3) | match, gaps, word, build, pick |
| e10s1l3 | gram 4 (1,2,2,3), write 3 (1,2,3) | gaps, choice, word, pick |
| e10s1l4 | gram 5 (1,2,2,3,3), read 3, write 3 (1,2,3) | gaps, multi, choice, build, pick, order |
| e10s1l5 | vocab 3, gram 3, func 3, read 3 (1,2,3) | gaps, word, pick, build, choice, multi |
| e10s1l6 | vocab 3, func 3, read 3, write 3 (1,2,3) | match, gaps, pick, choice, multi, word |

**Джерело:** П1407, PDF https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf (SHA-1 38df1f7f…, як у facts/eng.md; `pdftotext` с. 22–23 у цій сесії): с. 22 — «Я, моя родина, мої друзі» (особистість, види стосунків, стосунки з товаришами, взаємодопомога, вирішення конфліктів) і функції (причини й наслідки; вступати в дискусію) → l1, l2, l5, l6, read l4; с. 23 — «Past Perfect with adverbial clauses of time», «prepositions in time phrases … before, for, since, till, until, by» → l3, l4 (gram, write).

**Рішення щодо пасток:**
- Після after / before / as soon as / until Past Simple ніде не хибний: a30 — multi з ended / had ended; у gaps хибні лише has + V3 і неправильні форми (had leave, had ran, had readed). when + Past Simple / Past Perfect — лише зі шкалою часу (a23, a31, a36).
- didn’t … until: before поруч хибним не дано; a32 (build, «Start with Mariia») і a37, a39 перевіряють форму had + V3. as soon as — без after серед хибних (after теж правдиве).
- by / until — a22, a25–a28; «Mum said, “Your room must be tidy by lunch”» (a27) відсікає until.
- make up: a62 — up, it up, peace (CD make up: «also UK make it up»). apologise to / for: хибні at / on, of / on (for перед особою не дано: «apologise for someone» граматичне). angry with: хибного at немає.
- Префікси: un-/in-/dis- лише в парах з уроку (unselfish, intolerant, disloyal, unreliable).
- 6-грами (скрипт проти g4–g11): прибрано копії з тим самим ключем (Mr Lukashuk і важкі сумки, «helps out on our street», «apologised to Myroslava for changing her playlist», «Sorry to interrupt, but can I say something?», «Polina and Mariia have a lot in common»). Лишились рамки («Find the mistake. One word in …», «Can I give you a hand?» як формула).
- Лексика (скрипт проти g4–g9 і e10s1 до `lesson`): прибрано swimmer, teammates (l2) у l1, stadium (e10s2), sung, spoken, laps, asleep, smiled, cheered, Ha. Лишились хибні форми (inselfish, untolerant тощо).

**Нові дрібні деталі героїв (NOTE в inbox):** Amelia віддала рушник молодшій дівчинці; новий тренер Emma з плавання (вона); Isla любить фотографію; Daryna — знайома з Odesa з літнього табору; Tom обіцяв годувати Snowy й прибрати кімнату; Grandad Mykola — «old hat»; Andrii — 2-ге місце на шаховому турнірі, дзвонить Grandad Vasyl; Oksana — пропущений автобус до Poltava, карате-клуб; Dmytro торік узимку зламав руку; Taras — забій коліна перед забігом, Myroslava підтримала; Zlata і шоколад; Kyrylo — допомагає в шкільній бібліотеці по п’ятницях; Kyrylo / Zoriana — принтер; Daryna / Zoriana — навушники.

**Словники (форма, наголос):** CD https://dictionary.cambridge.org/dictionary/english/<word>: loyal «ˈlɔɪ.əl», selfish «ˈsel.fɪʃ», stubborn «ˈstʌb.ən», moody «ˈmuː.di», sensitive «ˈsen.sɪ.tɪv», considerate «kənˈsɪd.ər.ət», reliable «rɪˈlaɪ.ə.bəl», tolerant «ˈtɒl.ər.ənt», generous «ˈdʒen.ər.əs» (UK = US за наголосом); make-up — «(also UK make it up)». Граматика — як в уроці (CD Grammar «Past perfect simple or past simple?»; URL — tasks/…/write-eng-g10-e10s1.md).
