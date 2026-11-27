---
claimed_from: todo
claimed_at: 2026-11-27T09:47:14.618Z
id: write-eng-pool-g6-e6s7
type: write-pool
subject: eng
grade: 6
section: e6s7
status: review
claimed_by: writer-pe6s7
created: 2026-11-27
depends_on: []
generated_by: tools/make-tasks.mjs --write-pool --subject eng
---
# Зібрати пул тренування «Kyiv, the capital of Ukraine» (Англійська мова, 6 клас, e6s7)

## Навіщо
Пул — вправи для самостійного тренування після уроку з інтервальним повторенням (docs/PERSONALIZATION.md §3).

Контракт полів — docs/CONTENT_SCHEMA.md §10, «Пули мовних предметів»; якщо він розходиться з цим текстом — правий CONTENT_SCHEMA. Рішення людини — docs/design/english.md §7, §11.1.

## Результат
Один файл `content/eng/pool-g6-e6s7.js`: `SLID.pool("eng", { id: "pe6s7", section: "e6s7", status: "draft", meta: {…}, sources: [...], items: [...] })`. **id `pe6s7` і id вправ — ключі прогресу, не перейменовувати.**

## Уроки для покриття (без фіналу)
- `e6s7l1` — Kyiv on the map: a city on the Dnipro
- `e6s7l2` — The main street, the main square: sightseeing in Kyiv
- `e6s7l3` — When was it built? Old buildings in Kyiv
- `e6s7l4` — Have you ever been to Kyiv?
- `e6s7l5` — I’ve visited…, I’ve never seen…: my experiences
- `e6s7l6` — A day in Kyiv: a page for visitors

## Що зробити (скіли `math-pool-diag` — розділ про пули мовних предметів — і `content-author`, розділ про англійську)
1. Прочитай уроки розділу повністю: лексика, граматика, приклади, `sk` екранів, `learned`. **Чесне завдання (D-019):** вправа тренує лише слова й граматику, яких урок навчив; нового правила пул не вчить.
2. На кожен урок з оцінюваними екранами — **4–6 вправ** (мінімум personalization-qa — 3): ~2 рівня 1, 2 рівня 2, 1–2 рівня 3 (виняток чи пастка з уроку).
3. **Усе англійською**, британська норма (style/eng.md): умови, `hint`, `steps`, варіанти (A, B, C). Речення, тексти й імена — **власні**, нічого з підручників (docs/design/english.md §8); `sources` — програма класу з `program: true` (сигла й сторінки — скіл `math-pool-diag` §2в, CONTENT_SCHEMA §10), `src` — «<сигла> с. N»; словники, за якими звірено форми й значення (словники з memory/long/facts/eng.md «Джерела» (Cambridge, Oxford Learner's; форма, значення, рівень)), — у нотатки.
4. **Типи:** gaps, word, pick, build, match (якщо вже є в рушії); `sort` / `order` — для класифікацій і порядку; `choice` / `multi` — для поняттєвих питань. **Без звуку:** без аудіювання. Поля числової відповіді (`unit`, `answerKind`, `gen`…) і `hyp`/`poll` у пулі заборонено.
5. Кожна вправа: сталий `id`, `lesson` з переліку, `sk` (з `sk` екранів уроку), `lvl`, `steps` — пояснення 1–4 рядки англійською, `hint` для рівнів 2–3. Кожну вправу розв'язати двічі: немає другої правильної відповіді (contractions, артиклі, AmE/BrE).
6. Глосарій і пастки — memory/long/glossary/eng.md, memory/long/facts/eng.md, memory/long/pitfalls-content.md «Англійська».

## Обмеження
Змінюй лише `content/eng/pool-g6-e6s7.js`, цю задачу й дописуй inbox. build і check — оркестратор. Уроки розділу не правити — пропозиції в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe6s7` і `node tools/personalization-qa.mjs --pool pe6s7` — 0 помилок; `status: "draft"`.
- [ ] Нотатки: таблиця «урок → кількість / рівні / типи», словники, за якими звірено форми; рядок в inbox.
- [ ] Задача → `tasks/review/` для **content-verifier зі свіжим контекстом** (розв'язати кожну вправу, звірити форми за словником).

## Нотатки виконавця

## Нотатки агента (writer-pe6s7, 2026-11-27)
**Результат:** `content/eng/pool-g6-e6s7.js`, пул `pe6s7`, 60 вправ a01–a60, `status: "draft"`. `node tools/validate.mjs --pool pe6s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe6s7` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk, у кожній парі ≥ 3 вправи, рівні 1–3):**

| урок | вправ | рівні | типи | sk |
|---|---|---|---|---|
| e6s7l1 | 12 | р1×4, р2×4, р3×4 | gaps 5, word 2, pick 2, choice 1, multi 1, build 1 | vocab 3, gram 3, read 3, write 3 |
| e6s7l2 | 12 | р1×4, р2×4, р3×4 | gaps 3, build 2, choice 2, stress 3, multi 1, word 1 | gram 3, phon 3, read 3, write 3 |
| e6s7l3 | 10 | р1×3, р2×4, р3×3 | gaps 4, word 1, pick 1, choice 2, multi 1, build 1 | gram 4, cult 3, write 3 |
| e6s7l4 | 9 | р1×3, р2×3, р3×3 | gaps 3, word 1, build 1, choice 2, match 1, multi 1 | gram 3, func 3, read 3 |
| e6s7l5 | 8 | р1×2, р2×4, р3×2 | gaps 3, word 1, pick 1, build 1, choice 1, multi 1 | gram 5, read 3 |
| e6s7l6 | 9 | р1×3, р2×3, р3×3 | choice 2, gaps 4, multi 1, word 1, build 1 | read 3, write 3, gram 3 |

Boss e6s7l7 — без вправ. choice/multi — для read, cult і поняттєвих gram (a15, a34, a60).

**Джерело:** `mpim` (program: true). PDF відкрито в цій сесії (curl + pdftotext), SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7 — як у facts/eng.md; номер сторінки PDF = друкований (колонтитул с. 20 звірено). с. 20 — мовленнєві функції (func l4); с. 21 — тема «Україна — Київ, визначні місця», Adjectives «Position: limiting adjectives (main, only)», «Comparatives and superlatives», Determiners «the + specifying adjectives» (l1, l2, l3 cult, read l4–l6); с. 22 — Passives «Past simple affirmative», «Present perfect simple … experiences up to now», «Past simple», «Preposition» (l3 gram/write, l4–l6 gram/write). l1 gram (the з річками) — найближчий рядок с. 21 Determiners.

**Словники (curl, 2026-11-27):** наголос stress (a16–a18) — один в обох словниках: sightseeing CD /ˈsaɪtˌsiː.ɪŋ/, OALD /ˈsaɪtsiːɪŋ/; visitor /ˈvɪz.ɪ.tər/; cathedral /kəˈθiː.drəl/; museum CD /mjuːˈziː.əm/, OALD /mjuˈziːəm/. URL: https://dictionary.cambridge.org/dictionary/english/<слово>, https://www.oxfordlearnersdictionaries.com/definition/english/<слово>. Множина (visitors, museums, cathedrals) наголосу не змінює. Значення sightseeing («visiting interesting places») звірено в CD.

**Факти:** лише з уроків e6s7 (Kyiv on the Dnipro, both sides, old part on the west side on hills; Khreshchatyk, Independence Square on it; St Sophia’s — 11th c., St Andrew’s — 18th c., funicular 1905, metro 1960; Golden Gate built again 1982; Andriivskyi Descent лише в l6-контексті не вживав). Нових фактів немає. a31 «Lots of new bridges were built over the Dnipro» — загальне, без дат.

**Герої:** канон. Нові дрібниці: Bohdan живе на east side, школа (клас Andrii) — на west side, їздить автобусом (канон e5s2 — автобусом); Zoriana — east side, бачить два мости; Daryna була в Odesa (тітка там, канон), у Lviv — ні; Ostap’s dad був у Kyiv; Emma була в Scotland з мамою; у Emma school «on the main street», у її місті один museum (a14, a24); Bohdan не був у London (a40). Emma в Kyiv — узимку (e5s4), тому a51 «never seen the Dnipro in summer» (не про вареники — що Emma їла в Kyiv, не встановлено).

**Друга правильна відповідь і перевірка.** Скрипт на app/lang.js (vm): gaps — parseGaps без помилок і solution зараховується; word — кожен ключ зараховано; build — перебрано всі впорядковані підмножини tiles + extra через `SLID_LANG.check(…, "en")`: рушій приймає рівно порядки з `answer` (a59 — обидва «again in 1982» / «in 1982 again»). Усі build з keepCase і «Start with …» у body (PITFALL verifier-e6s8).
- word: a02 side / bank; a23 visitors / tourists (умова «the word for people who come to see a place», тож «people» відсічено); a36 never / not (PITFALL writer-e6s7); a05 — «Write a or the» відсікає «our»; a26, a45 — «Use the verb open / eat» відсікає built / tried.
- ever/never — лише в розповідних реченнях (PITFALL writer-e6s7); Present Perfect vs Past Simple — завжди з часовим словом (last summer, two years ago, yesterday, last night, last year) або з have + форма (been/went), без речень, де обидва часи правильні.
- Пастки build — інша форма (side, went, saw, were, the), не інше написання; a14, a24 — без extra (пастка «a» в a24 давала б граматичне «It’s a museum in my town»).
- n-грами від 6 слів проти g4–g11, diag і пулів (скрипт): збіги лише у фактичних фразах уроку («was built in the 11th century», «the Kyiv Metro was opened in 1960») і в `steps`; рамки вправ уроку з тим самим ключем переписано (a10, a13, a14, a31).

**Спірне (для верифікатора):** a03 vocab (over → through) — межа vocab/gram, як в info l1; a17/a18 stress множини — форм у уроці не було, але наголос той самий; a34 «It was open in the 1960» — подвійна помилка в дистракторі навмисно.
