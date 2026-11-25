---
claimed_from: todo
claimed_at: 2026-11-19T13:53:41.424Z
id: write-eng-g4-e4s8
type: write-section
subject: eng
grade: 4
section: e4s8
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e4s8
created: 2026-11-19
source: design-eng
---
# Написати розділ «Celebrations and school events» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Свята та традиції (святкування в кафе); Шкільне життя (шкільні події) — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): Present Simple vs Present Continuous (на рівні зразків). Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (verifier plan-eng-g4):** функції «попрощатися, вибачитися, подякувати» — у кафе; вітання британські: «Happy New Year!», «Happy Christmas!», «Happy birthday!» («Happy holidays!» — AmE, OALD holiday_1).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g4-e4s8.js`: `SLID.section("eng", { id: "e4s8", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e4s8` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e4s8, 2026-11-19. Файл `content/eng/g4-e4s8.js`, 7 уроків (6 + boss), усі `draft`. Будова — за еталоном e4s1 (intro → hyp → info → завдання → Final; списки `<ul>` з «→»; шаблонні інструкції; `word` без кінцевого знака).

**Уроки:**
- e4s8l1 «A party at a café» — intro, choice(hyp), info, choice, gaps, info, sort, build, gaps(Final). I’d like…, please / Can I have…? / Would you like…? – Yes, please. / No, thank you; thank you / sorry / goodbye (функції з «Специфіки»).
- e4s8l2 «Invitations: when and what time?» — intro, gaps(hyp), info, gaps, choice, word, info, build, gaps(Final). When? What time? Where? on + день, at + час, in + місяць; Can you come? – Yes, I can. / Sorry, I can’t.
- e4s8l3 «Happy New Year! Celebrations in Ukraine and the UK» — intro, choice(hyp), info, choice, gaps, stress, word, pick (Find the mistake), choice(Final). Happy birthday! / Happy New Year! / Happy Christmas!; Різдво 25 грудня в Україні й у Великій Британії.
- e4s8l4 «School events: a concert, a sports day, a fair» — intro, choice(hyp), info, choice, multi, gaps, word, choice(Final).
- e4s8l5 «Every day or now? I play, I’m playing» — intro, gaps(hyp), info, sort, gaps, choice, pick (Find the mistake), build (два порядки), gaps(Final).
- e4s8l6 «Notes and messages to friends» — intro, choice, info, order, info, word, gaps, choice, gaps(Final). Записка «I’m at… Back at 5 pm. Love, …» (ТОП с. 54), Thank you for…, Sorry, I can’t come…, See you next week.
- e4s8l7 «Party time!» (boss, `e4s8boss` «Party planner») — Task 1–6, `pre` на l1…l6.

**`requires` (рівень розділу):** `e4s1l1` (привітання/прощання — goodbye, see you у l1), `e4s1l5` (Present Simple з -s: live / lives — опора для l5). Зв'язки з plan-eng-g4.md §6 **e4s8 → e4s4 (would like) і e4s6 (Present Continuous) не поставлено**: уроків e4s4 і e4s6 ще немає (неіснуючий id — помилка validate). Оркестратору — додати після злиття (id уроків would like в e4s4 і Present Continuous в e4s6). Через це l1 і l5 самодостатні: would like і am/is/are + -ing коротко подано в `info` (як повторення).

**Факти (Україна в розділі: Kharkiv, Kyiv, Різдво 25 грудня):**
- Різдво в Україні — 25 грудня (з 2023 р.; закон від 14.07.2023 № 3258-IX, зміни до ст. 73 КЗпП; 7 січня більше не державне свято): https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine (таблиця: «25 December — Christmas»; «From 2023 Christmas is only officially celebrated in Ukraine on 25 December»); https://life.pravda.com.ua/society/2023/07/28/255605/ («Різдво – 25 грудня. Зеленський підписав закон…»). Номер закону — за WebSearch (pravda, buhgalter911); zakon.rada.gov.ua з контейнера недоступний. Новий рік — 1 січня: та сама таблиця Wikipedia.
- Велика Британія: Christmas Day 25 December, New Year’s Day 1 January — https://en.wikipedia.org/wiki/Public_holidays_in_the_United_Kingdom; CD christmas «25 December…» — https://dictionary.cambridge.org/dictionary/english/christmas; OALD new-year «Happy New Year!» — https://www.oxfordlearnersdictionaries.com/definition/english/new-year.
- Під час воєнного стану свята не є вихідними (en.wikipedia, там само) — тому в уроці лише «Christmas is on 25 December», без «day off».

**Форми й норма (curl):**
- Happy Christmas! і Merry Christmas! — обидва в OALD christmas (https://www.oxfordlearnersdictionaries.com/definition/english/christmas). У розділі лише Happy Christmas (BrE з задачі); **Merry Christmas ніде не є хибним варіантом**. Happy birthday! — OALD birthday; Happy New Year! — OALD new-year.
- sports day — CD «UK» (https://dictionary.cambridge.org/dictionary/english/sports-day); fair (school fair) — CD fair: «…buy small things and food, often organized to collect money… the school fair» (https://dictionary.cambridge.org/dictionary/english/fair), рівень B1 — подано з поясненням в info l4.
- waiter A1, concert A2 /ˈkɒn.sət/, invitation A2, note A1, message A1, birthday card, ill A2 (BrE «I’m ill») — https://dictionary.cambridge.org/dictionary/english/<слово>.
- lemonade у BrE — газований напій (CD «UK»), тому в меню orange juice: https://dictionary.cambridge.org/dictionary/english/lemonade.
- would like: CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/would-like; Present Continuous «in progress at the moment of speaking» — https://dictionary.cambridge.org/grammar/british-grammar/present-continuous-i-am-working; Present Simple — https://dictionary.cambridge.org/grammar/british-grammar/present-simple-i-work.
- Наголос (CD UK): birthday /ˈbɜːθ.deɪ/, December /dɪˈsem.bər/, Christmas /ˈkrɪs.məs/, concert /ˈkɒn.sət/ — https://dictionary.cambridge.org/dictionary/english/<слово>. café у BrE — наголос на 1-му складі (CD /ˈkæf.eɪ/, US /kæˈfeɪ/) — у `stress` навмисно не брав (AmE-наголос не має бути «помилкою»).

**Друга правильна відповідь — перевірено:**
- l1 «Can I have…, please?» — правильне, тому ніде не хибне; хибні — I like / I’m like / I want (останнє — лише в hyp).
- l2 build «What time is the party?» — пастка `does` (не «at»: «At what time is the party?» граматичне). Питання «Can you come to my party?» у build не брав: «You can come to my party» — теж правильне речення.
- l5: Present Simple vs Continuous — у кожному пропуску є маркер (every, usually, on Fridays / now, Look!, Look at the photo!); «today» сам по собі маркером не є. build l5 — обидва порядки в `answer` («Sofiia is dancing now», «Now Sofiia is dancing»).
- boss T6 «I’m at the café» — «in the café» теж правильне, але серед варіантів лише at / on.
- Розв'язав кожне завдання двічі (перед і після правок героїв).

**Спірне:**
- l5 правила правопису -ing (dancing, running) подано зразком без слів правила; оцінюється лише sing/play/dance/sell/write/go — `running` у вправах немає.
- l6 «Back at 6 pm.» — еліптичний стиль записки (ТОП с. 54 — «пішов у магазин, повернусь о 5»); словникового підтвердження саме формули не шукав — це жанрова норма, не форма слова.
- Один герой — одне місце (pitfalls, verifier-e4s1): Mariia, Bohdan, Kateryna — Kharkiv; Andrii, Sofiia, Maksym — Kyiv (школа Андрія); Oksana, Halyna, Dmytro — село біля Полтави; Emma, Tom — England. Нові імена (КМУ № 55): Bohdan, Kateryna, Olha, Halyna, Maksym.
- `uk` не додавав. validate: 0 помилок, 0 попереджень. stats: уроки e4s8 без прапорців (longWordShare 0.035–0.1).
- Плейтест не запускався (build — оркестратор; Python playwright у контейнері немає).

**verifier-e4s8, 2026-11-19 — вердикт: придатний, усі 7 уроків `verified`** (reports/verify/e4s8.md).
- Правки (5 + статуси): l1 #7 sort — двозначний пункт «You take your friend’s juice» → «Your juice is on your friend’s bag»; l1 #8 build — друга правильна відповідь «you would like some cake» → плитка «Would» + `keepCase: true`; l5 #8 build — додано порядок «Sofiia is now dancing.» і в body «What is she doing now?» (відсікає питання); l3 #2 — «Today Oksana is ten» суперечило e4s1/e4s7 (Оксані вже 10 у вересні) → Halyna; статуси/meta/шапка.
- Факти: Різдво 25 грудня в Україні з 2023 р. — en.wikipedia (Public holidays in Ukraine; Christmas in Ukraine), uk.wikipedia (Свята в Україні), WebSearch (преса); номер 3258-IX — лише вторинно (виноска uk.wikipedia → zakon.rada.gov.ua/go/3258-20, бухгалтерські сайти через WebSearch); у тексті уроку номера немає. UK 25 December / 1 January — en.wikipedia + OALD.
- Спірне автора: «Back at 6 pm» — підтверджено (CD back: «Gone out. Back soon.»; OALD back_3); правопис -ing зразком — прийнято.
- validate --section e4s8: 0/0; stats: e4s8 без прапорців; плейтест — не запускався (немає Python playwright), потрібен після build.
