---
claimed_from: todo
claimed_at: 2026-11-27T12:02:17.575Z
id: write-eng-pool-g10-e10s8
type: write-pool
subject: eng
grade: 10
section: e10s8
status: review
claimed_by: writer-pe10s8
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Education and careers» (Англійська мова, 10 клас, e10s8)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g10-e10s8.js`: `SLID.pool("eng", { id: "pe10s8", section: "e10s8", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe10s8` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e10s8l1` — Lyceum, college, university: where to study
- `e10s8l2` — After school: studying in Ukraine and abroad
- `e10s8l3` — Apply for, fill in, find out: phrasal and prepositional verbs
- `e10s8l4` — Fill it in: where the object goes
- `e10s8l5` — By Friday or until Friday? Time phrases
- `e10s8l6` — Modern jobs and the skills they need

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g10-e10s8.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe10s8` і `node tools/personalization-qa.mjs --pool pe10s8` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe10s8, 2026-11-27.** Файл `content/eng/pool-g10-e10s8.js` (id `pe10s8`, `status: "draft"`), 77 вправ a01–a77, boss e10s8l7 без вправ. Кожна пара (урок, sk) з оцінюваних екранів — ≥ 3 вправи з рівнями 1–3. `node tools/validate.mjs --pool pe10s8` — 0 помилок, 0 попереджень; `personalization-qa --pool pe10s8 --strict` — лише «ще не verified»; `euphony --pool pe10s8` — без зауважень.

| Урок | Вправ | Рівні 1 / 2 / 3 | Типи | sk |
|---|---|---|---|---|
| e10s8l1 | 15 | 5 / 5 / 5 | match 1, gaps 4, choice 4, multi 2, stress 3, build 1 | vocab 3, read 3, cult 3, phon 3, write 3 |
| e10s8l2 | 12 | 4 / 4 / 4 | choice 3, multi 2, gaps 3, stress 3, build 1 | read 3, cult 3, phon 3, write 3 |
| e10s8l3 | 14 | 4 / 5 / 5 | match 1, gaps 6, choice 3, word 1, multi 2, build 1 | vocab 3, gram 5, read 3, write 3 |
| e10s8l4 | 9 | 3 / 3 / 3 | gaps 4, choice 1, multi 1, pick 1, word 1, build 1 | gram 6, write 3 |
| e10s8l5 | 12 | 4 / 4 / 4 | choice 3, multi 1, gaps 6, pick 1, build 1 | read 3, gram 6, write 3 |
| e10s8l6 | 15 | 5 / 5 / 5 | match 2, gaps 5, choice 3, multi 1, build 1, stress 3 | vocab 3, read 3, func 3, write 3, phon 3 |

**Джерело:** `p1407`, `program: true` — П1407, с. 22 — функція «обговорювати перспективи» (func l6), с. 23 — теми «Шкільне життя», «Робота і професії» і граматика (phrasal and prepositional verbs — TQ-140, prepositions in time phrases) — решта.
**Факти** — лише з уроків e10s8 (verified; URL — reports/verify/write-eng-g10-e10s8.md): ліцей і профіль, коледж після Year 9 / 11 (після 9 — і шкільні предмети), бакалавр 4 / 3 / 4 роки (UA / England / Scotland), з 1.09.2027 — три роки ліцею, школа 12 років; НМТ на комп’ютері в тестовому центрі, 2026 — минулий час, три предмети для всіх + один на вибір; GCSEs у 16, A levels ≈ 18, освіта чи навчання до 18, UCAS (і для Шотландії — UCAS обслуговує всі вступи до UK, як в уроці «UK universities»), apprenticeship. Вигадані: Summer Photo Course у Lviv (з 2019, 6 тижнів від 3 May, заявки до 20 April) — без назви бренду; «Leah: in my company we never climb a turbine alone» — правило вигаданої компанії.
**Словники:** наголос — CD (curl; verifier-e10s8 §48: university, qualification, graduate, college, apprenticeship, qualified, bachelor, technician, developer, analyst, designer, lyceum, communication) + у цій сесії CD/OALD: turbine ˈtɜː.baɪn (OALD /ˈtɜːbaɪn/), communication OALD /kəˌmjuːnɪˈkeɪʃn/. Фразові й прийменникові дієслова (fill in / fill out, hand in, turn down, put off, find out, sign up for, apply for / to, depend on, prepare for, look for) — OALD / CD, як у звіті verifier-e10s8 (fill-in, hand-in, turn-down). Дистрактори свідомо без: on до sign up (sign on — mainly US, pitfalls-eng 2026-11-26 verifier-e11s3), out / down / on до hand (hand out, hand down, hand on — інші значення), in до turn it (turn in = hand in), qualified до get … for it (get qualified — граматичне).
**Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e10s7-e10s8/bin/`): `chk.mjs` — усі розв'язки зараховуються; перебір порядків build (a14, a26, a40, a49, a61, a73) — зараховано лише порядки з ключа, пастки не є займенником; `lex.mjs` — поза g4–e10s8 лише форми (qualification, prospect, requiring у дистракторі); `ngram.mjs` — рамки уроків переписано (Denys / Arsen / Zoriana / Leah / Mariia / Bohdan), лишились шаблони інструкцій і формули (a growing demand for … у match a69).
**Сумнівні місця для верифікатора:** a53 — «open until 20 April» і день 20 April не оцінюється (опція про 15 April); a58 — till у пропуску без until серед варіантів; a62 — before проти since (until і before в одному пропуску не даю, pitfalls-eng writer-e10s1); a26, a40, a49, a61 — по два порядки; a71 — On the other hand проти Because, / Due to, (неграматичні з комою).
