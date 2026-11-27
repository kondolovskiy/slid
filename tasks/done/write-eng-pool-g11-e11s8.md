---
claimed_from: todo
claimed_at: 2026-11-27T12:22:59.915Z
id: write-eng-pool-g11-e11s8
type: write-pool
subject: eng
grade: 11
section: e11s8
status: done
claimed_by: writer-pe11s8
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Exams, careers and plans» (Англійська мова, 11 клас, e11s8)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s8.js`: `SLID.pool("eng", { id: "pe11s8", section: "e11s8", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s8` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s8l1` — Final exams: getting ready
- `e11s8l2` — International programmes and exchanges
- `e11s8l3` — If I pass, if I passed, if I had passed: conditionals
- `e11s8l4` — Choosing a career: what suits you?
- `e11s8l5` — Prestigious jobs in Ukraine and abroad
- `e11s8l6` — Goodbye, school! Friends, plans and wishes

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s8.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s8` і `node tools/personalization-qa.mjs --pool pe11s8` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s8, 2026-11-27.** Файл `content/eng/pool-g11-e11s8.js` (id `pe11s8`, `status: "draft"`), 87 вправ a01–a87, boss e11s8l7 без вправ. Кожна пара (урок, sk) з оцінюваних екранів — ≥ 3 вправи з рівнями 1–3 (hyp-здогадки e11s8l2 `cult` і e11s8l5 `vocab` мають і оцінювані екрани — пари покрито). `node tools/validate.mjs --pool pe11s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s8 --strict` — лише «ще не verified»; `euphony --pool pe11s8` — без зауважень.

| Урок | Вправ | Рівні 1 / 2 / 3 | Типи | sk |
|---|---|---|---|---|
| e11s8l1 | 16 | 5 / 6 / 5 | match 1, gaps 7, word 2, choice 4, pick 1, multi 1 | vocab 3, cult 3, gram 4, read 3, write 3 |
| e11s8l2 | 15 | 5 / 5 / 5 | choice 3, gaps 6, multi 2, word 1, stress 3 | cult 3, vocab 3, read 3, phon 3, write 3 |
| e11s8l3 | 9 | 2 / 4 / 3 | gaps 4, word 1, sort 1, multi 1, pick 1, build 1 | gram 6, write 3 |
| e11s8l4 | 14 | 4 / 5 / 5 | match 1, gaps 6, word 1, choice 3, multi 2, pick 1 | vocab 3, read 3, gram 5, write 3 |
| e11s8l5 | 18 | 6 / 6 / 6 | match 2, gaps 8, choice 2, build 1, word 1, pick 1, stress 3 | vocab 3, cult 3, func 3, gram 3, phon 3, write 3 |
| e11s8l6 | 15 | 4 / 5 / 6 | gaps 6, word 1, choice 5, pick 1, build 1, multi 1 | gram 5, func 4, read 3, write 3 |

**Джерело:** `p1407`, `program: true`, title уніфіковано як у pe11s7 (формат verified-пулів 9 кл.). Сторінки звірено за PDF: с. 23 — функції (порівнювати — l5 func/gram «not as … as»; висловлювати побажання — l6 gram/write hope / wish / I’d love to; підводити підсумки, завершувати розмову — l6 func); с. 24 — лексика «Шкільне життя» / «Робота і професії» (vocab, cult, read, phon, write з лексикою l2, l5); с. 25 — first / second / third conditional, overview of all tense forms (l1, l3, l4 gram і write).
**Факти** — лише з уроків e11s8 (verified; URL — нотатки write-eng-g11-e11s8): НМТ з 2022, 3 предмети (2022) / 4 (2026), правила змінюються; Erasmus 1987, Erasmus+ — програма ЄС (education, training, youth and sport), для українських студентів — за угодою університетів; UK — Turing scheme 2021, угода грудня 2025 (повернення 2027); eTwinning; медицина: Україна 6 років після школи, UK зазвичай 5, далі навчання триває. Нових фактів немає.
**Словники (curl у цій сесії):** наголос — CD https://dictionary.cambridge.org/dictionary/english/<word> і OALD https://www.oxfordlearnersdictionaries.com/definition/english/<word>: exchange ɪksˈtʃeɪndʒ (OALD exchange_1), partner ˈpɑːt.nər, abroad əˈbrɔːd, deadline ˈded.laɪn, revise rɪˈvaɪz, revision rɪˈvɪʒ.ən, career kəˈrɪər, weakness ˈwiːk.nəs, salary ˈsæl.ər.i, respected rɪˈspek.tɪd (OALD — через respect), prestigious presˈtɪdʒ.əs (OALD preˈstɪdʒəs / US -stiː- — наголос той самий), responsibility rɪˌspɒn.sɪˈbɪl.ə.ti — по одному наголошеному складу; усі підкреслені `<u>` в e11s8l1/l2/l4/l5 (до уроку вправи).
**Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e11s7-e11s8/bin/`): `chk.mjs` — усі мовні вправи зараховують свій ключ; build: a37 — 1, a63 — 2, a80 — 2 порядки, з пастками — жодного; `lex.mjs` — поза уроками лише `driven` (хибний варіант has driven), `weaknesses` (у l4 як `<u>weak</u>nesses`); `ngram.mjs` — збігаються лише шаблони й означення слів з info.
**Друга правильна — як відсічено:** змішані умовні (If I had more time, I would have gone; If I had lived…, I’d…) — граматично правильні, тому «had» / «had lived» не стоять хибними там, де інша частина їх допускає (a40); will / going to / Present Continuous — разом лише в multi (a48); Past Simple після when не хибний (a09: хибні лише has / have + V3); «It’s been great to talk» правильне — не серед варіантів (a79); «I’d best go» (BrE) — не серед варіантів (a86); «in demand» про курс — не хибний варіант (a57, a72).
**Сумнівні місця для верифікатора:** a03 `word` — failed / didn’t pass / did not pass; a21 — credits (credit — граматично хибне після are called); a40 — had had (Third Conditional з have); a43 — weaknesses / weakness; a49 — «At 10 am tomorrow… will be taking» (у body: тест 9–12); a86 — «I wish we were in the same class next year» (wish про нереальне; were / was не оцінюється, пропуск — wish / hope).
**Нові дрібниці героїв** — NOTE в inbox.
