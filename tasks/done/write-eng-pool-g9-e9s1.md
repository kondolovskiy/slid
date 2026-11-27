---
claimed_from: todo
claimed_at: 2026-11-27T10:29:02.123Z
id: write-eng-pool-g9-e9s1
type: write-pool
subject: eng
grade: 9
section: e9s1
status: done
claimed_by: writer-pe9s1
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Who am I? Personality and life story» (Англійська мова, 9 клас, e9s1)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s1.js`: `SLID.pool("eng", { id: "pe9s1", section: "e9s1", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s1` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s1l1` — Name, date of birth, nationality: filling in a form
- `e9s1l2` — Easy-going or hard-working? Personality
- `e9s1l3` — What shapes us? Family, friends and choices
- `e9s1l4` — When I was little, I used to… and I would…
- `e9s1l5` — I knew I was going to be a…: the future in the past
- `e9s1l6` — My life story: a short autobiography

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s1.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s1` і `node tools/personalization-qa.mjs --pool pe9s1` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe9s1, 2026-11-27.** Файл `content/eng/pool-g9-e9s1.js` (pe9s1, 61 вправа a01–a61, `status: "draft"`). `validate --pool pe9s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe9s1 --strict` — лише «ще не verified». Кожна пара (урок, sk) — ≥ 3 вправи з рівнями 1, 2, 3 (скрипт). `test-answer-ui.py --suite content --pool pe9s1` не запускав (браузерні прогони — CI). Перебір `SLID_LANG.check`: усі `solution` зараховуються; build приймає лише ключі (a12 — 2 порядки, keepCase + «I» на початку відсікає «On 5 May I…»; a29 — 1; a39 — 2; a60 — 1, кома в плитці «walking home,»).

| Урок | sk → кількість (рівні) | Типи |
|---|---|---|
| e9s1l1 | vocab 3, gram 3, func 3, write 3, phon 3 (1,2,3) | match, gaps, word, pick, choice, build, stress |
| e9s1l2 | read 3, vocab 3, phon 3 (1,2,3) | choice, multi, match, gaps, word, stress |
| e9s1l3 | vocab 3, gram 3, read 3 (1,2,3) | match, gaps, word, build, pick, choice, multi |
| e9s1l4 | gram 4 (1,2,2,3), write 3, read 3 (1,2,3) | gaps, sort, pick, word, build, choice, multi |
| e9s1l5 | gram 3, read 3 (1,2,3) | gaps, multi, pick, choice |
| e9s1l6 | vocab 3 (sk лише з hyp-екрана, але в lessonSkills), read 3, gram 3, write 3 (1,2,3) | word, gaps, choice, multi, pick, order, build |

**Джерело:** МП-ІМ, той самий PDF (SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext` с. 34–35 у цій сесії): с. 33 — тема 9 кл. (особисті дані, індивідуальність, формування особистості, автобіографія; функції) → l1, l2 read/phon, l3, l6 vocab/read/write; с. 34 — «Compund adjectives», «Future from a point in the past: be going to, would» → l2 vocab, l5; с. 35 — «Used to: no longer true», «Would…», «Past continuous», «Past perfect simple», «Past simple: habitual states or actions» → l4, l6 gram, a60/a61.

**Рішення щодо пасток:**
- would зі станами (have, be, live) — завжди хибне (a34, a37, a40, a61); з діями — `word` має обидва ключі (a38: would / used to); у `gaps` з дією дистрактори — лише хибні форми (used, use, was used to).
- Future in the past: «will» хибне лише там, де подія вже минула («Last Friday… but it was easy», «Last summer… but I loved it», «…and he was right»); reported «said … will» не вживано (backshift необов'язковий).
- Past Simple не хибний для раннішої дії: пастки — has / have + V3, теперішні форми (a56–a58).
- Анкети — лише героїв (Taras: 5 May, Lviv — канон; Stepan: 14 March, Dnipro — урок); учень своїх даних не вводить.
- word: a03 nationality; a21 open-minded / broad-minded / open; a27 choice; a52 childhood / early life / early years.
- 6-грами проти content/eng/*.js: прибрано збіги з тим самим ключем (influence on me, I want to be like her, happy to listen to new ideas, never misses a lesson, had practised for weeks, was going to give up, did you use to play chess). Лишились рамки інструкцій («One word in …’s message is wrong») і визначення з info l2–l3 у `match` (a19, a25 — інший тип вправи, ключ — пара).
- Лексика (скрипт проти g4–g8 і уроків e9s1 до `lesson`): прибрано fifteenth, court, yard, fence, hide (є лише в l6), collect stamps, rang, during, the lights went out. Лишились лише прийняті варіанти `word` (broad-minded) і склади `stress`.

**Нові дрібні деталі героїв (NOTE в inbox):** Stepan — у дитинстві сором'язливий, бабуся читала казки; два роки вчить англійську онлайн; хоче бути вчителем; Halyna у 8 р. хотіла бути співачкою; Zlata вчиться в музичній школі з 7 р.; Dmytro навчився плавати в дядька Ivan в Odesa (10 р.); Andrii — тітка Iryna вплинула на нього; Bohdan — грав з татом у теніс у парку біля дому, у 10 р. хотів кинути теніс; Tom боявся води, дідусь водив у басейн; Mariia — тато навчив їздити на велосипеді; Kyrylo в 8 р. знайшов книжку про старий Київ.

**Словники (форма, наголос):** CD — https://dictionary.cambridge.org/dictionary/english/<word>: surname «ˈsɜː.neɪm», ukrainian «juːˈkreɪ.ni.ən», british «ˈbrɪt.ɪʃ», nationality «ˌnæʃ.ənˈæl.ə.ti», information «ˌɪn.fəˈmeɪ.ʃən», personal «ˈpɜː.sən.əl», language «ˈlæŋ.ɡwɪdʒ», birthday «ˈbɜːθ.deɪ», character «ˈkær.ək.tər», relaxed «rɪˈlækst», personality «ˌpɜː.sənˈæl.ə.ti», confident «ˈkɒn.fɪ.dənt», afraid «əˈfreɪd», honest «ˈɒn.ɪst», angry «ˈæŋ.ɡri», autobiography, childhood, patient, influence; broad-minded «willing to accept many different types of behaviour, beliefs…». OALD — https://www.oxfordlearnersdictionaries.com/definition/english/<word>: ukrainian «/juːˈkreɪniən/», nationality «/ˌnæʃəˈnæləti/», personality «/ˌpɜːsəˈnæləti/». Граматика — як в уроці (CD Grammar used to, would, future in the past; URL — tasks/…/write-eng-g9-e9s1.md).

## Верифікація
**verifier-pe9s1 (verifier-pe9s1-pe9s2), 2026-11-27.** Вердикт: verified. Звіт — reports/verify/write-eng-pool-g9-e9s1.md. validate — 0 помилок; personalization-qa — без помилок.
