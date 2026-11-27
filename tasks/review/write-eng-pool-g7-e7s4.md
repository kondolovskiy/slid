---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.780Z
id: write-eng-pool-g7-e7s4
type: write-pool
subject: eng
grade: 7
section: e7s4
status: review
claimed_by: writer-pe7s4
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Cinema and theatre» (Англійська мова, 7 клас, e7s4)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g7-e7s4.js`: `SLID.pool("eng", { id: "pe7s4", section: "e7s4", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe7s4` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e7s4l1` — Comedy, cartoon or adventure film? Film genres
- `e7s4l2` — At the theatre: the stage, the seats, the box office
- `e7s4l3` — We could see a play! Suggestions
- `e7s4l4` — Bored or boring? Interested or interesting?
- `e7s4l5` — Much better, a bit longer, not as funny as the book
- `e7s4l6` — Old enough to watch it? A film review

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g7-e7s4.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe7s4` і `node tools/personalization-qa.mjs --pool pe7s4` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe7s4, 2026-11-27. Файл `content/eng/pool-g7-e7s4.js`, пул `pe7s4`, 63 вправи a01–a63, `status: "draft"`. `validate --pool pe7s4` — 0 помилок, 0 попереджень; `personalization-qa --pool pe7s4` — лише «ще не verified». Build не запускав (паралельний запуск); браузерні прогони — для CI/оркестратора.

**Покриття (урок → кількість / пари sk з рівнями / типи); boss e7s4l7 без вправ:**
| урок | вправ | sk: рівні | типи |
|---|---|---|---|
| e7s4l1 | 11 | vocab 1,1,2,2,3; phon 1,2,3; read 1,2,3 | gaps 1, match 1, word 2, pick 1, stress 3, choice 2, multi 1 |
| e7s4l2 | 10 | vocab 1,1,2,3; read 1,2,3; phon 1,2,3 | gaps 2, match 1, word 1, choice 2, multi 1, stress 3 |
| e7s4l3 | 10 | gram 1,1,2,2,3,3; func 1,2,2,3 | gaps 3, word 1, build 1, pick 2, sort 1, choice 1, order 1 |
| e7s4l4 | 9 | gram 1,1,2,2,3,3; read 1,2,3 | gaps 2, word 1, multi 2, pick 1, build 1, choice 2 |
| e7s4l5 | 12 | gram 1,1,2,2,2,3; read 1,2,3; write 1,2,3 | gaps 6, word 1, build 1, pick 1, choice 2, multi 1 |
| e7s4l6 | 11 | gram 1,1,2,2,3; write 1,2,3; read 1,2,3 | gaps 4, word 1, build 1, choice 3, order 1, multi 1 |
Матриця урок × sk — з `sk` оцінюваних не-hyp екранів кожного уроку (звірено вручну).

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, pdftotext у цій сесії): с. 32 — «Кіно і театр: відвідування театру, кінотеатру; жанри; елементи інтер'єру театру», функції «пропонувати, приймати, відхиляти пропозицію», «висловлювати власні враження, почуття та емоції» (l1, l2, l3 func, l4 — -ed/-ing «наш», лексика B1); с. 34 — Comparatives with much, a bit, even; as … as, the same … as; Modifying: enough, too + to-infinitive; Could: suggestions (l3 gram, l5, l6 gram); с. 31 — «детально передає зміст книги або фільму і повідомляє про свої ставлення та почуття» (l6 write/read).

**Словники (curl 2026-11-27):** наголос CD UK: comedy /ˈkɒm.ə.di/, cartoon /kɑːˈtuːn/, adventure /ədˈven.tʃər/, fiction /ˈfɪk.ʃən/, horror /ˈhɒr.ər/, audience /ˈɔː.di.əns/, interval /ˈɪn.tə.vəl/, curtain /ˈkɜː.tən/ — https://dictionary.cambridge.org/dictionary/english/<слово>; усі підкреслені в info e7s4l1 / e7s4l2. **documentary у stress не брав:** CD /ˌdɒk.jəˈmen.tər.i/ (5 складів) vs OALD /ˌdɒkjuˈmentri/ (4) — поділ на склади різний. sci-fi — CD «short form of science fiction» → a05 у ключі поруч зі science fiction.

**Друга правильна відповідь — як відсічено:**
- much / a bit / even — завжди з числами (хвилини, ціни) або «both good, the second better»; хибний — very; «not so … as» не хибний ніде (a52 — дистрактор more).
- -ed/-ing: «She wasn’t boring» / «felt boring» — контекст вимагає почуття (як в уроці, PITFALL writer-e7s4); хибні також interested about, excited in, interesting in.
- suggestions: хибні — to + verb, -ing; Let (без ’s). a23 word «Why don’t we ___ to the ballet» — «Use one verb: go, see or buy» (інакше come).
- word: a03 comedy (body: «no drawings… Write one word»), a05 science fiction / sci-fi, a14 stage, a33 excited («Write excited or exciting»), a42 as, a54 enough.
- build — усі перестановки всіх підмножин плиток з extra перебрано `SLID_LANG.check`: a24, a44, a55 (по 13 699), a36 (1 956) — рушій приймає лише ключ. a44 «the ballet isn’t as long as this play» складається з плиток, але суперечить умові (90 / 120 хв); keepCase + «This play».
- Кожна gaps/pick/stress/word/build/match: `SLID_LANG.solution` → `check` = true; choice/multi/sort/order — вручну.
- Копії уроків: 6-грами проти всіх content/eng/*.js — збіги з ключем прибрано; лишились формули («My mark: 4 out of 5», «the film is for people aged…», «Why don’t we go to the …»).
- Лексика — скриптом проти g4–g6, e7s1–e7s3 і уроків e7s4 до `lesson` (choosing, actors у l1, slowly, wild, fox, jokes, Moon, fly, scarier прибрано).

**Вигадане (як в уроці):** фільми Space Cats, The Old Castle (2), Carpathian Animals, Ice Bridge, The Clever Cat (п'єса), «City Theatre»; вікові позначки (6+, 7+, 10+, 14+) — лише для вигаданих фільмів. Ocean Friends, Captain Cat, Robots on Mars — з уроків (ті самі жанри).

**Герої (нові дрібниці, NOTE в inbox):** Polina — п'єса в Kharkiv (Row 5), квиток Mariia Row 7 Seat 4; Zoriana — п'єса в Kyiv з тіткою; Kyrylo — театр з класом (Row 15); Bohdan — tennis lesson у суботу (канон: теніс); Taras і Zlata — кіно (a04), балет (a35), п'єса з мамою (a40), Zlata — не вистачає віку для 14+/horror; Andrii любить adventure, нудьгує на comedy (a38, як e7s4l4 pick); Dmytro (9) — cartoon 6+ і adventure 7+; Sofiia — молодша за 14.

**Спірне для верифікатора:**
1. a21 — stress lvl3 змішує слова l2 (interval, audience) і l1 (cartoon, adventure, підкреслені в e7s4l1): у l2 всі підкреслені слова мають наголос на 1-му складі, тож набір з іншим наголосом без l1 неможливий.
2. a19, a20 — набори лише з першим наголошеним складом (як stress в уроці l2).
3. a63 — «Can he watch it?» з 7+ і Dmytro 9 → old enough (зворотна пастка до інтро l6).
