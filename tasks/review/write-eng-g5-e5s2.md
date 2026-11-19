---
claimed_from: todo
claimed_at: 2026-11-19T14:22:09.692Z
id: write-eng-g5-e5s2
type: write-section
subject: eng
grade: 5
section: e5s2
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e5s2
created: 2026-11-19
source: design-eng
---
# Написати розділ «Шкільне життя» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: розклад уроків; робочий день; урок іноземної мови; види діяльності на уроці — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): Present Simple (affirmative, negative, questions); adverbs of frequency; imperatives. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s2.js`: `SLID.section("eng", { id: "e5s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e5s2, 2026-11-19. Файл `content/eng/g5-e5s2.js`, 7 уроків (6 + фінал), status `draft`. Будова — за еталоном e4s1 (intro → hyp → info → завдання → Final).

**Уроки (id — title — типи завдань):**
- e5s2l1 — My timetable: subjects and days — choice (hyp), match (halves), gaps, choice, stress, word, gaps (Final)
- e5s2l2 — My school day: I get up at seven — choice (hyp), choice, gaps, build, stress, word, choice (Final)
- e5s2l3 — Does she walk to school? Questions and negatives — choice (hyp), gaps, pick (Find the mistake), build, match (Q↔A), word, gaps (Final)
- e5s2l4 — She’s always on time: always, usually, never — choice (hyp), choice, gaps, build, pick (Find the mistake), word, choice (Final)
- e5s2l5 — Open your books! Classroom activities — choice (hyp), choice, gaps, pick (verbs), build, word, gaps (Final)
- e5s2l6 — Can I…? Could you repeat that, please? — choice (hyp), choice, match (Q↔A), gaps, build, word, order (Final)
- e5s2l7 — Letters from two schools (boss, значок e5s2boss «Star of the class») — Task 1–6: gaps, word, gaps, choice, choice, choice; `pre` на l1…l6

**requires** (розділ): e4s3l2 (how often), e4s3l3 (on Mondays; plays/goes/does), e4s5l1 (imperatives), e4s8l2 (at + час; Can you come…?) — за reports/verify/plan-eng-g5.md §6; id звірено у файлах 4 кл.
**match** — лише текстові (без картинок), тож `img/eng/e5s2/` і `credits` не потрібні.

**Перевірки:** `node tools/validate.mjs --section e5s2` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject eng` — e5s2 без прапорців (після скорочення intro l2: maxText 60→53). Усі `build` — перебрано всі перестановки плиток (з extra і без) через `SLID_LANG.check` (app/lang.js у node vm): прийнято лише порядки з `answer`; інші порядки — неграматичні (l2 #7 має два порядки в ключі: «… after lunch» і «After lunch Oksana …»; l4 #7 з always — лише mid, CD Grammar). `word` — `wordVerdict`: ключ, верхній регістр, кінцева крапка → ok; одруківка → «Almost».

**Джерела форм (curl, 2026-11-19):**
- timetable — CD «A2 UK (US schedule) a list of the times when classes in school happen» — https://dictionary.cambridge.org/dictionary/english/timetable
- maths — CD «noun [U] UK» — https://dictionary.cambridge.org/dictionary/english/maths
- subject — CD «A1 an area of knowledge that is studied in school»; /ˈsʌb.dʒekt/ — https://dictionary.cambridge.org/dictionary/english/subject
- PE — OALD «sport and exercise that is taught in schools (the abbreviation for physical education)», B1 — https://www.oxfordlearnersdictionaries.com/definition/english/pe
- break — OALD break_2 «(also break time) (both British English) (North American English recess) [uncountable] a period of time between lessons at school» → «at break» — https://www.oxfordlearnersdictionaries.com/definition/english/break_2
- exercise book (BrE) / notebook (NAmE у шкільному значенні) — OALD exercise-book, notebook → у розділі не вжито жодного
- Put your hand up — OALD hand_1; Open your books at page 14 — OALD page_1 (форма «at page», BrE); in pairs — OALD pair_1; board/whiteboard — OALD board_1
- on time «not late» — OALD time_1; late for something — OALD late_1; have breakfast — OALD breakfast; half past — OALD past_4; How do you spell…? — OALD spell_1; could you repeat that — OALD repeat_1
- Present Simple: he/she -s, -es після ch (watches), have → has, go → goes, do → does; do/does у питаннях, don’t/doesn’t — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/present-simple-i-work
- always — «most commonly … in mid position … after main verb be» — https://dictionary.cambridge.org/grammar/british-grammar/always; usually — «mostly in mid position» — https://dictionary.cambridge.org/grammar/british-grammar/usually. Позицію в gaps/build/pick оцінюю лише з always/never.
- Can — permission («Can I take Daisy for a walk?») — https://dictionary.cambridge.org/grammar/british-grammar/can; OALD can_1 «used to ask permission», а також «Can you help me…?» — прохання (тому Can you не робив хибним проти Could you).
- Could — OALD could «politely ask somebody to do something for you»; CD Grammar could: «Could I…?» — теж дозвіл; «We don’t use could to give or refuse permission… Not: Yes, you could» — https://dictionary.cambridge.org/grammar/british-grammar/could. Тому «Yes, you {*can|could}» у l6 gaps коректний; «Could I…?» ніде не хибний.
- Наголос (CD, UK): timetable /ˈtaɪmˌteɪ.bəl/, history /ˈhɪs.tər.i/, science /ˈsaɪ.əns/, music /ˈmjuː.zɪk/, subject /ˈsʌb.dʒekt/, breakfast /ˈbrek.fəst/, homework /ˈhəʊm.wɜːk/, English /ˈɪŋ.ɡlɪʃ/, Ukrainian /juːˈkreɪ.ni.ən/ — https://dictionary.cambridge.org/dictionary/english/<word>; afternoon — reports/verify/e4s1.md.

**Фактів про країни немає** (розклад, час уроків — вигадані для героїв; про школи України й Британії тверджень немає). Україна — Kyiv (клас Andrii), село біля Poltava (Oksana), Lviv (Taras), Kharkiv (Mariia).

**Герої (не суперечать 4 кл.):** Andrii — Kyiv, до школи автобусом (e4s7l1), сестра Sofiia (e4s1l1); Oksana — пішки, школа недалеко (e4s7l1), брат Dmytro; Emma — велосипедом, теніс після школи (e4s3l2), брат Tom; Mariia і подруга Polina (e4s3). Нові: Ms Lysenko (вчителька англійської в класі Andrii), Yaryna, Bohdan (з класу Andrii — e4s5), Kateryna (у класі Andrii; у e4s8 її місто не названо — див. спірне).

**Спірне:**
1. Kateryna — у e4s8 її запрошують і Mariia (Kharkiv), і Bohdan (Kyiv); тут вона в класі Andrii (Kyiv). Явного міста в 4 кл. немає, але верифікатору варто глянути.
2. «Present Simple для разової події»: інтро l5/l6 і «Emma chats with Oksana» — оповідний теперішній, як «Oksana writes to Emma» в еталоні e4s1; «today» з Present Simple немає.
3. l4 hyp «Bohdan is always on time» — правило після be вже було в e4s3l2 (requires); лишив здогадкою для ритму уроку.
4. PE — B1 (OALD); пояснено в info l1 («PE – sport and games»), перш ніж питати.
5. Позиційні вправи l4 — лише always/never (usually/often/sometimes можуть стояти на початку й у кінці; CD Grammar).
