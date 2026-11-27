---
claimed_from: todo
claimed_at: 2026-11-27T10:42:04.505Z
id: write-eng-pool-g9-e9s5
type: write-pool
subject: eng
grade: 9
section: e9s5
status: done
claimed_by: writer-pe9s5
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Youth culture and clubs» (Англійська мова, 9 клас, e9s5)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g9-e9s5.js`: `SLID.pool("eng", { id: "pe9s5", section: "e9s5", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe9s5` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e9s5l1` — Music, style and hobbies: youth culture
- `e9s5l2` — Plast and the Scouts: youth organisations
- `e9s5l3` — A club where…, a day when…: relative clauses
- `e9s5l4` — A friend whose hobby is…: whose
- `e9s5l5` — Why do teenagers join clubs? The reason why…
- `e9s5l6` — Join our club! A poster and an online invitation

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g9-e9s5.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe9s5` і `node tools/personalization-qa.mjs --pool pe9s5` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця
writer-pe9s5, 2026-11-27. Файл `content/eng/pool-g9-e9s5.js` (pe9s5, draft), 74 вправи. `validate --pool pe9s5` — 0/0; `personalization-qa --pool pe9s5 --strict` — лише «ще не verified».

| Урок | Вправ | sk (к-сть) | Рівні 1/2/3 | Типи |
|---|---|---|---|---|
| l1 | 11 | vocab 5, phon 3, read 3 | 4/4/3 | gaps, match, word, pick, stress, choice, multi |
| l2 | 16 | cult 3, read 3, gram 3, phon 3, vocab 4 | 5/6/5 | choice, gaps, multi, pick, stress, match, word |
| l3 | 10 | gram 7, write 3 | 3/3/4 | gaps, choice, sort, word, pick, build |
| l4 | 10 | gram 7, write 3 | 3/2/5 | gaps, word, pick, sort, build, choice |
| l5 | 15 | read 3, gram 5, func 4, write 3 | 5/6/4 | choice, multi, gaps, word, pick, build |
| l6 | 12 | read 3, func 3, write 3, gram 3 | 4/4/4 | choice, multi, gaps, match, order, pick |

Джерело — МП-ІМ (PDF завантажено в цій сесії, SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, `pdftotext -layout`, колонтитули): с. 33 — «Молодіжна культура» (течії, організації, клуби) і функція «приймати або відхиляти пропозицію»; с. 34 — «Relative: defining; non-defining; with ‘whose…’, ‘where…’, ‘why…’, ‘when…’». (У pe8s4 Relative подано як с. 35 — за PDF це с. 34; рядок в inbox.)
Наголос — CD (curl у цій сесії, https://dictionary.cambridge.org/dictionary/english/<word>): culture /ˈkʌl.tʃər/, computer /kəmˈpjuː.tər/, teenager /ˈtiːnˌeɪ.dʒər/, vlogger /ˈvlɒɡ.ər/, guitar /ɡɪˈtɑːr/, musician /mjuːˈzɪʃ.ən/, karate /kəˈrɑː.ti/, member /ˈmem.bər/, volunteer /ˌvɒl.ənˈtɪər/, expedition /ˌek.spəˈdɪʃ.ən/, beginner /bɪˈɡɪn.ər/, organisation /ˌɔː.ɡən.aɪˈzeɪ.ʃən/, competition /ˌkɒm.pəˈtɪʃ.ən/. Усі слова stress підкреслені `<u>` в уроках (e9s5l1, l2; guitar e5s6, musician e8s4, karate e4s3, beginner e7s5, competition e7s5).
Перевірки скриптами (копії інструментів verifier-pe8s2 у scratchpad pool-e9s5-e9s6/bin): усі `solution` зараховуються; build a34, a43, a54 — повний перебір перестановок з extra, зараховуються лише порядки ключа; лексика проти g4–e9s4 і e9s5 до свого уроку — лишились «greatly» (дистрактор a60, похідне від great); 6-грами — збіги лише в інструкціях і формулах (hang out with my friends, Thanks for asking, Beginners are welcome), рамку «Friday is the day when we…» (Oksana, l3) у a72 замінено.
Рішення: that після назви часу правильний — ніде не хибний (a31 word: when / that); the reason why / that — обидва в ключі (a55); who’s хибний лише перед іменником, a42 «who’s into rap» — правильний; where / which — за словами після пропуску (a30, a33, a37, a71 «a club which I want to join»); in which не вживаю (урок: «in which для 9 кл. не вчимо», хоча в завданні оркестратора згадано).
Сумнівне для верифікатора: a66 «Do you like to come to our club?» — граматичне речення, але не запрошення (питання «polite invitation»); a58 «Sound great!» як хибний варіант; a11 — висновок, що друг Тома теж скейтер («My friends and I»).
Дрібні нові деталі героїв (у межах канону): Emma — photography club у четвер (a36); у Andrii шаховий клуб у понеділок (як e8s*: Mondays); у Kateryna подруга Roksolana в drama club (a50); Orest — бабуся, день народження в п'ятницю (a57, a71); у школі Oksana — гурт із Poltava (a44, вигаданий).

## Верифікація
verifier-pe9s5 (сесія verifier-pe9s5-pe9s6), 2026-11-27: пул → `verified`. Звіт — reports/verify/write-eng-pool-g9-e9s5.md.
