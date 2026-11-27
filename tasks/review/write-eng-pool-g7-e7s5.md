---
claimed_from: todo
claimed_at: 2026-11-27T10:10:23.153Z
id: write-eng-pool-g7-e7s5
type: write-pool
subject: eng
grade: 7
section: e7s5
status: review
claimed_by: writer-pe7s5
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Sport: competitions and clubs» (Англійська мова, 7 клас, e7s5)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g7-e7s5.js`: `SLID.pool("eng", { id: "pe7s5", section: "e7s5", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe7s5` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e7s5l1` — A race, a match, a tournament: competitions
- `e7s5l2` — Joining a club: which club is right for you?
- `e7s5l3` — I used to play football, but now I swim
- `e7s5l4` — While we were playing, it started to snow
- `e7s5l5` — The first Ukrainian to win: famous athletes
- `e7s5l6` — The day we won: a story about a competition

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g7-e7s5.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe7s5` і `node tools/personalization-qa.mjs --pool pe7s5` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe7s5, 2026-11-27. Файл `content/eng/pool-g7-e7s5.js`, пул `pe7s5`, 74 вправи a01–a74, `status: "draft"`. `validate --pool pe7s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe7s5` — лише «ще не verified». Build не запускав (паралельний запуск); браузерні прогони — CI/оркестратор.

**Покриття (урок → кількість / пари sk з рівнями / типи); boss e7s5l7 без вправ.** Матриця урок × sk — з `sk` оцінюваних не-hyp екранів (звірено вручну).
| урок | вправ | sk: рівні | типи |
|---|---|---|---|
| e7s5l1 | 13 | vocab 1,1,2,3; phon 1,2,3; read 1,2,3; write 1,2,3 | gaps 4, match 1, word 2, stress 3, choice 2, multi 1 |
| e7s5l2 | 16 | vocab 1,2,3; read 1,2,3; func 1,2,2,3; write 1,2,3; gram 1,2,3 | gaps 6, word 1, choice 3, multi 1, match 1, build 2, pick 2 |
| e7s5l3 | 12 | gram 1,1,2,2,3,3; read 1,2,3; func 1,2,3 | gaps 4, word 2, pick 1, choice 2, multi 1, match 1, build 1 |
| e7s5l4 | 11 | gram 1,1,2,2,3; func 1,2,3; read 1,2,3 | gaps 4, pick 1, word 1, choice 3, build 1, multi 1 |
| e7s5l5 | 13 | gram 1,2,2,3; cult 1,2,3; phon 1,2,3; write 1,2,3 | gaps 5, word 1, build 2, choice 1, match 1, stress 3 |
| e7s5l6 | 9 | read 1,2,3; write 1,2,3; gram 1,2,3 | choice 2, multi 1, order 1, gaps 3, match 1, word 1 |

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, pdftotext у цій сесії): с. 32 — 7 кл., «Спорт: види спорту, спортивні змагання, відомі спортсмени, клуби, секції», функції 7 кл. (запитувати й надавати інформацію, надавати оцінку подіям) — l1, l2, l5 cult/phon, l6 read/write; с. 34 — «Superlatives: … ‘the best’ with noun and ‘to’-infinitive» — l5 gram/write; с. 35 — «Used to: no longer true», «Past continuous: negative, questions, … reason» — l2 gram (join без to — лексична граматика уроку, с. 32), l3, l4, l6 gram. Примітка: у шапці розділу функції 7 кл. позначено с. 33 — у PDF вони на с. 32 (с. 33 — 8 кл.).

**Словники (curl 2026-11-27, CD UK):** наголос silver /ˈsɪl.vər/, medal /ˈmed.əl/, tournament /ˈtʊə.nə.mənt/, champion /ˈtʃæm.pi.ən/, competition /ˌkɒm.pəˈtɪʃ.ən/, athlete /ˈæθ.liːt/, Olympic /əˈlɪm.pɪk/, hero /ˈhɪə.rəʊ/ — https://dictionary.cambridge.org/dictionary/english/<слово>; поділ на склади — як в уроці (e7s5l1, e7s5l5). OALD не відкривав. «two times» поруч із twice — граматичне (a15 у ключі).

**Друга правильна відповідь — як відсічено:**
- used to: `word` з заголовком «with used to» (a32, a35, a73); дистрактори — use to / uses to / was used to; після did — uses / using, **не «used»** (didn’t used to — TQ-158, pitfall writer-e10s3). Виняток — a35 `word` з ключем use: відповідь «used» рушій оцінює як «Almost» (хибно), як правило уроку «no -d!» — на розсуд верифікатора.
- Past Continuous: дистрактори лише неправильні форми (were + I, was + we, was + base, is + -ing у минулому), Past Simple у варіантах немає; when / while не протиставляються.
- the first / the only / the youngest + noun + to: дистрактори — Past Simple і -s, **без -ing** (pitfall verifier-e7s5).
- tournament / championship не в одному пропуску (a13: race / medal; a04: championship для бігунів, як у фіналі l1).
- build — усі перестановки всіх підмножин плиток з extra перебрано `SLID_LANG.check`: a23, a25, a48 (325), a40, a55 (13 699), a64 (1 956) — рушій приймає лише ключ; статус / питання з тих самих плиток відсічено `keepCase` і великою першою плиткою («Can», «My sister», «Did», «Was», «She», «Ilona»); «from our club» злито з «the first girl» (інакше «…to win a gold medal from our club»).
- Кожна gaps/pick/stress/word/build/match: `SLID_LANG.solution` → `check` = true; word-кандидати: a15 «2 times» не зараховується (лише twice / two times); choice/multi/order — вручну.
- Копії уроків: 6-грами проти всіх content/eng/*.js — збіги лише з формулами інструкцій («One word in X’s message is wrong»), «used to be scared of» (e9s1, не наш розділ), «wants to know the price of» (e6s2). Рамки ключів уроку не повторено (a71 «the youngest team» замість «the first team from our school»).
- Лексика — скриптом проти g4–g6, e7s1–e7s4 і уроків e7s5 до `lesson` вправи (прибрано photography, neighbour, slowly, Mr Hnatiuk у l1).

**Факти:** лише з e7s5l5 — Baiul (figure skating, 1994, Lillehammer, перше олімпійське золото незалежної України), Bubka (pole vault, 6 м, 1985), Bannister (England, 6 May 1954, Oxford, миля < 4 хв), Mahuchikh (Dnipro, high jump, Paris 2024, світовий рекорд 2.10, олімпійське золото). a65 «the first woman to jump 2.10 metres» — виведено з уроку («broke the world record: she jumped 2.10 metres… the first woman to jump so high»).

**Герої (нові дрібниці, NOTE в inbox):** Zlata хоче в judo club (a23, a25) і раніше боялася котів (a30); Taras раніше щороку приходив останнім у шкільному забігу, цього року — 4-й (a68, a73); Kyrylo колись грав basketball, тепер history club (a36); Polina боялася великих собак (собака тітки, a37); Artem — judo з кузеном (a38); Andrii — турнір шахового клубу, програв останню партію (a67); Amelia — запізнилася на старті, говорила з Ruby (a52); Vlad — минулого року 2-ге місце в турнірі (a01), ще одна вигадана школа — Hill School (a74, Англія); Ms Kravets і Mariia — гітара (a41).

**Спірне для верифікатора:**
1. a35 — див. вище (used як «Almost»).
2. a71 — «the youngest team to win the town cup» (Ostap): вигадана деталь.
3. a74 — дощ під час фіналу з плавання (відкритий басейн не названо).
4. a20 — «How often do you meet?» / «What day do you meet?» для гуртка: meet (дієслово) — базова лексика, «meets» як термін гуртка вводить лише e7s6l1.
