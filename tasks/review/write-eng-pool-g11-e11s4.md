---
claimed_from: todo
claimed_at: 2026-11-27T12:09:38.517Z
id: write-eng-pool-g11-e11s4
type: write-pool
subject: eng
grade: 11
section: e11s4
status: review
claimed_by: writer-pe11s4
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Art and festivals» (Англійська мова, 11 клас, e11s4)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s4.js`: `SLID.pool("eng", { id: "pe11s4", section: "e11s4", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s4` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s4l1` — Kinds and genres of art
- `e11s4l2` — Learning from art: museums, galleries and theatres
- `e11s4l3` — Amazing or amazed? Art and emotions
- `e11s4l4` — Unusual, colourful, priceless: building adjectives
- `e11s4l5` — Festivals in Ukraine and the UK
- `e11s4l6` — A festival review: how it made me feel

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s4.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s4` і `node tools/personalization-qa.mjs --pool pe11s4` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s4 (агент writer-pe11s3-pe11s4), 2026-11-27.** Файл `content/eng/pool-g11-e11s4.js`, пул `pe11s4`, 70 вправ (a01–a70), `status: "draft"`.
`node tools/validate.mjs --pool pe11s4` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s4 --strict` — 6 уроків, 70 вправ, прогалина лише «ще не verified»; `euphony --pool` — без зауважень. `SLID_LANG.check(solution)` зараховує всі ключі; перебір build: a20 (Concerts and talks / Talks and concerts — обидва в ключі), a30 (I found … really inspiring / I really found … inspiring — обидва), a68 (I’d highly recommend it / I’d recommend it highly — обидва, keepCase) — інших порядків немає. `test-answer-ui.py` — модуля playwright немає, прогін у CI.

| Урок | Вправ | sk → рівні | Типи |
|---|---|---|---|
| e11s4l1 | 10 | vocab 1,2,2,3 · phon 1,2,3 · read 1,2,3 | match, sort, word, choice, stress, multi |
| e11s4l2 | 12 | cult 1,2,3 · read 1,2,3 · vocab 1,2,3 · write 1,2,3 | choice, multi, pick, gaps, match, build |
| e11s4l3 | 12 | gram 1,1,2,2,3,3 · func 1,2,3 · write 1,2,3 | gaps, choice, word, pick, multi, build |
| e11s4l4 | 9 | vocab 1,2,2,3,3,3 · write 1,2,3 | match, word, gaps, pick |
| e11s4l5 | 12 | cult 1,2,3 · read 1,2,3 · gram 1,2,3 · vocab 1,2,3 | choice, match, multi, gaps, word |
| e11s4l6 | 15 | read 1,2,3 · vocab 1,2,3 · func 1,2,3 · gram 1,2,3 · write 1,2,3 | choice, multi, gaps, pick, sort, word, build, order |

- **src** (PDF П1407, `pdftotext -layout`, друкована = PDF): `p1407 с. 24` — «Мистецтво» (види та жанри, відвідування мистецьких закладів для самоосвіти, емоції) і «Дозвілля» (фестивалі): l1, l2, l5 cult/read/vocab, l6 read/vocab/write; `p1407 с. 25` — participles as adjectives (l3 gram/write), adjectives formed with suffixes / prefixes (l4), active / passive (l5 gram); `p1407 с. 23` — функція «висловлювати емоційне ставлення» (l3 func, l6 func; l6 gram worth + -ing — за функцією, у граматиці 11 кл. окремо не названо).
- **Пастки другої правильної:** moved / touched не протиставлено (a27 — обидва в ключі); impressed by — прийменник не питаємо; impressive / impressed / impressing — як в уроці (a28). priceless ≠ worthless (a37, a43), helpless → unhelpful (a38). Префікси в gaps — лише слова з однією формою (impossible, dishonest, informal, irresponsible; хибні — неіснуючі форми); у word — однозначна основа (popular → unpopular, colour + suffix → colourful); history, sense, use у word не питаємо (historic / historical, sensible / sensitive, useful / useless). a03 photographer — однозначно. a04: a play — literature лише з контекстом «читає вдома, ніхто не виконує». a55 venue — body «Write the word from the screen about the Fringe» (відсікає stage). made me + verb без to (a29, a31, a63, a64, a70); worth + -ing (a65–a67, a70), worth going to — правильне (CD worth).
- **Факти — лише з уроків l2 і l5:** Tate Modern (London, 2000, power station, колекція безкоштовна) — a11, a12; Mystetskyi Arsenal (понад 200 років, arsenal) — a12, a13; Fringe (Edinburgh, August, 1947, open access) — a44–a46, a49, a50; Glastonbury (19 September 1970, Michael Eavis, fallow year) — a45, a46, a51; Book Arsenal (2011, щороку в Mystetskyi Arsenal, 2019 — London Book Fair, 2020 не було) — a45, a46, a52; Atlas Weekend (2015–2021, крім 2020; 2024 — charity) — a45, a46. Виставки, концерти, фестивалі й галереї героїв — вигадані, без назв; реальним закладам нових подій і правил не приписано (Isla’s cousin — венью в кафе, не названий заклад).
- **Канон героїв:** Andrii, Daryna (тітка в Odesa — a10), Yehor, Mr Levchenko (скульптор, майстерня в школі Andrii — a09, a42), Halyna (малює, мурал на сільській школі — a08, a41; розчарована концертом — a33), Grandad Mykola, Dmytro (неуважний — a43), Mariia і Polina (Kharkiv), Kyrylo, Zoriana, Emma, Tom, Isla (Edinburgh). Кар’єра Oksana (vet / art history) у пулі не зачеплена. Нових імен немає. Дрібні нові деталі (NOTE в inbox): Yehor — поезія й скульптура на Arts Week (a09); чоловік тітки Daryna — романіст (a10); годинник Grandad Mykola від його тата (a37); кузина Isla виступала на Fringe (a49); Halyna й Oksana — фолк-концерт у Poltava (a70).
- **Наголос (stress):** лише слова з `<u>` в e11s4l1, один наголос у CD: sculpture ˈskʌlp.tʃər, photographer fəˈtɒɡ.rə.fər, audience ˈɔː.di.əns, performance pəˈfɔː.məns, architect ˈɑː.kɪ.tekt, visual ˈvɪʒ.u.əl, literature ˈlɪt.rə.tʃər, mural ˈmjʊə.rəl, novelist ˈnɒv.əl.ɪst, performing pəˈfɔːm-.
- **Словники (curl у цій сесії):** https://dictionary.cambridge.org/dictionary/english/<word> — усі слова stress вище; …/helpless («unable to do anything to help yourself»), …/unhelpful, …/scenery («the large painted pictures used on a theatre stage…»), …/venue, …/headliner, …/line-up, …/open-air, …/priceless, …/worthless, …/worth.
- **Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e11s3-e11s4/bin/`): lex.mjs — поза уроками лише неіснуючі форми-дистрактори (enjoyful, createful, inhonest…), amaze / overwhelm (основи з уроку), cultural / useless (в уроці розбиті `<b>`); ngram.mjs — лише шаблони й формули; рамки уроків з тим самим ключем переписано (a34, a70 — замість копії фіналу l6 «Book Arsenal review»).
- **Для верифікатора:** a04 (play = literature), a22 (три дистрактори-сполуки), a37 / a43 (priceless і worthless в одному тексті — різні погляди), a58 (bored → amazed з контексту), a70 (6 пропусків).

- [x] validate і personalization-qa — 0 помилок; `status: "draft"`.
- [x] Нотатки, словники; рядок в inbox.
- [x] → `tasks/review/`.
