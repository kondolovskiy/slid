---
claimed_from: todo
claimed_at: 2026-11-27T12:22:59.884Z
id: write-eng-pool-g11-e11s7
type: write-pool
subject: eng
grade: 11
section: e11s7
status: done
claimed_by: writer-pe11s7
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Ukraine in the world» (Англійська мова, 11 клас, e11s7)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g11-e11s7.js`: `SLID.pool("eng", { id: "pe11s7", section: "e11s7", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe11s7` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e11s7l1` — Ukraine, the EU, the UN and the Council of Europe
- `e11s7l2` — Laws and rights: what the law says
- `e11s7l3` — Is it polite? Etiquette in different countries
- `e11s7l4` — Who or whom? Relative pronouns: an overview
- `e11s7l5` — We won, which surprised everyone: comments with which
- `e11s7l6` — Ukraine and English-speaking countries: events and people

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g11-e11s7.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe11s7` і `node tools/personalization-qa.mjs --pool pe11s7` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

**writer-pe11s7, 2026-11-27.** Файл `content/eng/pool-g11-e11s7.js` (id `pe11s7`, `status: "draft"`), 64 вправи a01–a64, boss e11s7l7 без вправ. Кожна пара (урок, sk) з оцінюваних екранів — ≥ 3 вправи з рівнями 1–3 (e11s7l6 `cult` — лише hyp-здогадка, пари немає). `node tools/validate.mjs --pool pe11s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe11s7 --strict` — лише «ще не verified»; `euphony --pool pe11s7` — без зауважень.

| Урок | Вправ | Рівні 1 / 2 / 3 | Типи | sk |
|---|---|---|---|---|
| e11s7l1 | 15 | 5 / 5 / 5 | match 1, word 2, gaps 3, choice 4, multi 1, pick 1, stress 3 | vocab 3, cult 3, gram 3, phon 3, read 3 |
| e11s7l2 | 9 | 3 / 3 / 3 | match 1, gaps 5, word 1, sort 1, pick 1 | vocab 3, gram 3, write 3 |
| e11s7l3 | 15 | 5 / 5 / 5 | match 1, word 1, gaps 6, choice 2, multi 2, build 1, pick 2 | vocab 3, cult 3, func 3, gram 3, write 3 |
| e11s7l4 | 8 | 2 / 3 / 3 | gaps 5, multi 1, pick 1, build 1 | gram 5, write 3 |
| e11s7l5 | 8 | 2 / 3 / 3 | gaps 4, choice 1, sort 1, pick 1, build 1 | gram 5, write 3 |
| e11s7l6 | 9 | 3 / 3 / 3 | choice 3, multi 1, match 1, gaps 4 | read 3, func 3, write 3 |

**Джерело:** `p1407`, `program: true`, title — як у facts/eng.md «Джерела» + розділ програми (уніфіковано за форматом verified-пулів 9 кл.: назва, наказ, клас, сторінки). Сторінки звірено за PDF (pdftotext, osvita.ua): с. 23 — функції 11 кл. (порівнювати — l3 func/write; підводити підсумки — l6 func); с. 24 — лексика «Україна в світі» / «Країни виучуваної мови» (vocab, cult, read, phon, write з лексикою); с. 25 — defining vs non-defining, overview of relative pronouns (gram, write з займенниками).
**Факти** — лише з уроків e11s7 (verified; URL — нотатки write-eng-g11-e11s7): ООН 1945 / 51 / УРСР / 193 / New York; Рада Європи 1995 / Strasbourg; ЄС — заявка 2022, кандидат у червні 2022, переговори 2024; UNICEF, WFP; 10 December, 1948 (Paris), 1950, 1997, ЄСПЛ; етикет (непарні квіти, парні — похорон, поріг, капці; черга, tip 10–15 %, service charge); Gareth Jones (Barry, 1933, 1935); Eurovision (Kalush 2022, Liverpool 2023, Tvorchi шості); Faraday 1996; Nebyliv 1891, прерії, пшениця, > мільйона канадців з українським корінням; Akademik Vernadsky 6.02.1996 (перший президент Академії наук); космонавт з Chernivtsi Oblast, досліди з рослинами. Імен Pylypow / Eleniak / Kadenyuk / Vernadsky у вправах немає (щоб не дублювати примітку КМУ55). Нових фактів немає.
**Словники (curl у цій сесії):** наголос — CD https://dictionary.cambridge.org/dictionary/english/<word>: agency ˈeɪ.dʒən.si, provide prəˈvaɪd, member, membership ˈmem.bə.ʃɪp, candidate ˈkæn.dɪ.dət, organisation ˌɔː.ɡən.aɪˈzeɪ.ʃən, humanitarian hjuːˌmæn.ɪˈteə.ri.ən — по одному наголосу; OALD https://www.oxfordlearnersdictionaries.com/definition/english/agency, …/provide — те саме. headquarters (UK ˌhedˈkwɔː.təz / US ˈhed-) у stress не взято. Усі слова stress підкреслені `<u>` в e11s7l1.
**Перевірки скриптами** (`/tmp/claude-0/-home-user-slid/a61632e4-a174-56af-8045-850c74131b2b/scratchpad/pool-e11s7-e11s8/bin/`): `chk.mjs` — `SLID_LANG.check(solution)` для всіх мовних вправ і повний перебір порядків build (a32 — 1, a44 — 2, a52 — 2 порядки, усі в ключі, з пастками — жодного); `lex.mjs` — слова поза g4–e11s7 до уроку вправи: лише `settler` (є в e11s7l6 як `<u>set</u>tler`); `ngram.mjs` (6-грами) — після правок збігаються лише шаблонні інструкції й фактичні формули (Council of Europe тощо), рамок уроків з тим самим ключем немає.
**Сумнівні місця для верифікатора:** a08 `word` where (in which — два слова, не вчили); a26 `word` even — контекст «1, 3, 5, 7 are odd numbers. And 2, 4, 6 and 8…» відсікає інші прикметники; a20 sort — Paris, where… (non-defining з where, як e11s7l2 gaps); a41 — «Barry, where Jones was born» не можна пропустити (кома); a44 build — два порядки в ключі; a52 build — at the weekend у двох місцях; a61 gaps — «The main {point|pointed|points} is that» (points is — хибний за узгодженням).
**Нові дрібниці героїв** — NOTE в inbox.
