---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.515Z
id: write-eng-pool-g6-e6s4
type: write-pool
subject: eng
grade: 6
section: e6s4
status: review
claimed_by: writer-pe6s4
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Sport» (Англійська мова, 6 клас, e6s4)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s4.js`: `SLID.pool("eng", { id: "pe6s4", section: "e6s4", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s4` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s4l1` — Football, judo, swimming: kinds of sport
- `e6s4l2` — Which sport do you prefer and why?
- `e6s4l3` — I could swim when I was five
- `e6s4l4` — What were you doing at six o’clock? The Past Continuous
- `e6s4l5` — I was running when it started to rain
- `e6s4l6` — What a match! Sports news

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s4.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s4` і `node tools/personalization-qa.mjs --pool pe6s4` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

### writer-pe6s4, 2026-11-27
**Результат:** `content/eng/pool-g6-e6s4.js`, пул `pe6s4`, 75 вправ a01–a75, `status: "draft"`. `validate --pool pe6s4` — 0 помилок, 0 попереджень; `personalization-qa --pool pe6s4` — лише «ще не verified»; `euphony --pool pe6s4` — 0. Build не запускав (паралельний запуск). `test-answer-ui --suite content --pool pe6s4` — не запускав: немає Python-модуля playwright (лишається для CI / оркестратора).

**Покриття (урок × sk з оцінюваних екранів, без hyp; у кожній парі рівні 1–3):**
| Урок | sk → кількість | Типи |
|---|---|---|
| l1 | vocab 6, phon 3, write 3 | gaps, sort, word, pick, stress, build |
| l2 | gram 5, vocab 3, func 3, phon 3, write 3 | gaps, choice, word, pick, match, stress, build |
| l3 | read 3, gram 5, func 3 | choice, multi, gaps, word, build |
| l4 | gram 5, func 3, write 3 | gaps, choice, word, pick, build, match |
| l5 | gram 5, func 3, read 3 | gaps, choice, word, pick, build, multi |
| l6 | read 3, write 3, gram 4, cult 3 | choice, build, gaps, match, word, pick |
Boss l7 — без вправ.

**Джерело:** `mpim` (program: true), PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25…, pdftotext у цій сесії): с. 20 — 6 кл. «Спорт: види спорту, спортивні уподобання» (l1, l2 vocab/gram/phon/write, l6 cult); с. 21 — функція «аргументувати власний вибір» (l2 func), Could: abilities (l3), Exclamations: What a… (l6 a66, a69); с. 22 — Past continuous; Past simple … with ‘when’ in subordinate clauses (l4, l5, l6 gram/write); с. 16 — читання: короткі розповіді (l5 read, l6 read).

**Словники (curl 2026-11-27, CD UK):** athletics æθˈlet.ɪks, gymnastics dʒɪmˈnæs.tɪks, volleyball ˈvɒl.i.bɔːl, skiing ˈskiː.ɪŋ, tennis ˈten.ɪs, football ˈfʊt.bɔːl, judo ˈdʒuː.dəʊ, prefer prɪˈfɜː, exciting ɪkˈsaɪ.tɪŋ, difficult ˈdɪf.ɪ.kəlt, dangerous ˈdeɪn.dʒər.əs, basketball (CD UK ˈbɑː.skɪt.bɔːl) — https://dictionary.cambridge.org/dictionary/english/<слово>. Поділ на склади — як в уроці (vol|ley|ball, ath|let|ics, gym|nas|tics, ski|ing, pre|fer, ex|cit|ing, dif|fi|cult, dan|ger|ous); karate, skating, healthy у stress не брав (неочевидний поділ / підкреслення в уроці немає).

**Друга правильна відповідь — як відсічено:**
- when / while: while ніде не оцінюється перед довгою дією (when + Past Continuous теж правильне); у word a54 — лише when перед короткою дією; while як помилка — pick a55 («while Andrii came home») і choice a53, як в уроці.
- Past Continuous: хибні варіанти — неправильні форми (was read, were taking з he, was kick, kicks), не Past Simple; де Past Simple протиставлено (a52), шкала long/short у body, як в уроці l5.
- can / could: могло б «could» у теперішньому бути граматичним — протиставляю лише з маркерами Now / When I was…, як в уроці l3.
- prefer: to-інфінітив (prefer to swim) ніде не хибний; хибні — than, гола основа (skate, swim), prefer без -s.
- a15 «Which sport ___ Sofiia prefer now?» — now відсікає did. a19 — дистрактори, що суперечать умові (boring, dangerous), а не «difficult», яке теж могло б бути.
- `build` — усі перестановки всіх підмножин плиток з extra через `SLID_LANG.check`: a36, a40, a58, a68 (по 109 600), a26 (13 699), a25 (1 956), a10, a47, a49, a66 (по 325) — рушій приймає лише ключі; a10 — два порядки (обставина часу на початку). a26 — пастка why (не so: PITFALL writer-pe5s10). a68 — «Start with It» у body, keepCase (порядок «We won the match when it was raining» відсічено умовою).
- Розв'язок кожної gaps/word/pick/stress/build/match → `check` = true; choice/multi/sort — вручну.
- Лексика — скриптом проти уроків eng до `lesson` вправи: поза уроками лише хибні форми (kicks, was kick, winned) і kicking як дистрактор. 5-грами умов проти e6s4 — збіги лише в коротких рамках («What were you doing when», «the ball into the goal», факти про Mahuchikh).

**Герої — канон уроків; нові дрібниці (NOTE):** Mariia грає у volleyball по суботах (a01, a10); Polina щозими катається на лижах у Карпатах (a04); Oliver: у 5 умів плавати, не грав у теніс; з 7 — грає, у шкільній команді; мама — gymnastics, тато — skating (a05, a31, a37); Myroslava віддає перевагу athletics, бо exciting (a14, a26); Zlata (сестра Taras) катається на ковзанах з п'яти, лижі — тепер (a12, a16, a30); Ostap почав футбол у шість (a32); Sofiia — ковзани з чотирьох (a35); Vlad — judo по понеділках о 5 (a50), volleyball-команда виграла School 5 3–1 (a63); Andrii забив переможний гол проти School 3 (a65). Матч проти School 12 (виграли 1–0, дощ) не чіпав: a64 — School 7, a68 — «It was raining when we won» узгоджено з l6.

**Спірне для верифікатора:**
1. a03 / a04 «On Saturdays… ___ swimming» / «Every winter, she ___ skiing» — went теж граматичне (звичка в минулому); у ключ не додавав, як в уроці l1 («He ___ judo after school» → does).
2. a30 — варіант «swim» у тексті не згадано (стандартний дистрактор читання).
3. a65 — висновок «2–2, потім гол Andrii → перемога» (рівень 3).
4. a75 — дистрактор «June 2024» (sports day Emma) — пастка з уроку l6.
