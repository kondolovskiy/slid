---
claimed_from: todo
claimed_at: 2026-11-25T12:07:14.417Z
id: write-eng-g7-e7s1
type: write-section
subject: eng
grade: 7
section: e7s1
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e7s1
created: 2026-11-19
source: design-eng
---
# Написати розділ «Родина: обов'язки й традиції» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: обов'язки в сім'ї; домашні справи та побут; сімейні традиції та свята — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Present Perfect: just / already / yet — recent past, already для наголосу, прислівник у середині речення, заперечення й питання (B1) — нове; for / since — тривалість, незавершений період (B1: duration with since; unfinished state) — нове; reflexive pronouns myself … ourselves (B1: Pronouns — reflexive) — нове; повторення: Present Perfect ever / never, been to (e6s7l4–l5), have to (e6s5l5) для обов'язків.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** yet — у питаннях і запереченнях, already — у ствердженні, але «Have you already…?» теж правильне — не робити його єдиним дистрактором; for + період, since + момент; just із Past Simple («I just finished») — поширене в AmE: не оцінювати як помилку, контекст має вимагати Present Perfect або обидва в ключі (звірити з CD Grammar «Just»). housework — B1 у CD; **chore — C1, не вводити**; wash the dishes / do the washing-up — звірити BrE в CD/OALD. Традиції — українські (Святвечір, Великдень, день народження) поруч з британськими, факти з двох джерел. `requires`: e6s7l4, e6s7l5, e6s3l4, e5s8l4. Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s1.js`: `SLID.section("eng", { id: "e7s1", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s1` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
**writer-e7s1, 2026-11-25.** Файл `content/eng/g7-e7s1.js`, статус draft. 7 уроків (6 + фінал), 9–11 екранів, без зображень (`credits` немає).
- e7s1l1 Housework: who does what at home? — choice, match, gaps (have to — повторення e6s5l5), choice (do / make), sort, word, gaps (Final).
- e7s1l2 I’ve just washed the dishes: just and already — choice (hyp), gaps, build, gaps, choice, pick, word, gaps (Final).
- e7s1l3 Have you tidied your room yet? — choice, gaps, build, gaps, sort (за списком справ), choice, word, gaps (Final).
- e7s1l4 We’ve lived here for ten years: for and since — choice (hyp), sort, gaps, choice, build, pick, word, gaps (Final).
- e7s1l5 We made it ourselves: myself, yourself, ourselves — choice, match, gaps, choice, build, stress, pick, gaps (Final).
- e7s1l6 Family traditions and celebrations — текст Оксани у 2 частинах (choice, multi) + питання про весь текст, відповідь Емми (choice), stress, gaps, build, word (Final).
- e7s1l7 Our family, our traditions (boss, `e7s1boss`) — 8 завдань, `pre` на l1…l6.

**Перевірки:** `node tools/validate.mjs --section e7s1` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject eng`: прапорці z-оцінок «нетипово для сім'ї» — l1 (gradedShare 0.78, longWordShare 0.116), l5 (readWordsPerScreen 27), l6 (gradedShare 0.80, longWordShare 0.124). Усі значення в межах профілю `eng` 7–9 (gradedShare ≤ 0.9, longWordShare ≤ 0.18, readWordsPerScreen 6–50). Сім'я 7 кл. поки складається з кількох уроків, тож z-оцінка нестійка. У l6 довгі слова — це слова теми (tradition, celebrate, celebration, Christmas). `build` перебрано всіма перестановками з `extra` через `SLID_LANG.check`: l2 — лише «Dad has just got home with the shopping»; l3 — лише «Have you made your bed yet»; l4 і boss T7 — лише «How long have you lived in Kyiv» і «How long have you known Oksana»; l5 — «I made the card myself» / «I myself made the card» (обидва в ключі, CD: reflexive for emphasis); l6 — «Grandma has made kutia for fifty years» / «For fifty years Grandma has made kutia» (обидва в ключі). `word` — `wordVerdict`: tidy / clean (l1), already, yet, since, himself, for.

**Джерела (curl, 2026-11-25):**
- CD Grammar «Just» (recent past з Present Perfect: «a short time before the moment of speaking») — https://dictionary.cambridge.org/grammar/british-grammar/just
- CD Grammar «Already» (наголос на завершенні; здивування; стверджувальні речення й питання, «not usually in negatives»; середня позиція; «Not: I’ve drunk already three coffees»; already + Past Simple — AmE) — https://dictionary.cambridge.org/grammar/british-grammar/already
- CD Grammar «Yet» (заперечення й питання, кінцева позиція; «Not: She’s booked the flights yet») — https://dictionary.cambridge.org/grammar/british-grammar/yet
- CD Grammar «For» (duration; після заперечення можливе і *in* — тому *in* не беру дистрактором) — https://dictionary.cambridge.org/grammar/british-grammar/for; «Since» (since + date / clause; «Not: since four hours») — https://dictionary.cambridge.org/grammar/british-grammar/since
- CD Grammar «Pronouns: reflexive» (таблиця; with no help; by + reflexive = alone; emphasis) — https://dictionary.cambridge.org/grammar/british-grammar/pronouns-reflexive-myself-themselves-etc; OALD help_1 «help yourself» — https://www.oxfordlearnersdictionaries.com/definition/english/help_1
- Лексика (CD): housework B1 — https://dictionary.cambridge.org/dictionary/english/housework; washing-up A2, «UK» — …/washing-up; OALD washing-up «(British English)», b1, «do the washing-up» — https://www.oxfordlearnersdictionaries.com/definition/english/washing-up; OALD dish_1: «do the dishes (= wash them)» — https://www.oxfordlearnersdictionaries.com/definition/english/dish_1; tidy A2 (adj., verb) — …/tidy; ironing B1, «do the ironing» — …/ironing; iron B1 — …/iron; rubbish B1 «UK (US garbage, trash)», приклад «put the rubbish out» — …/rubbish, те саме в OALD rubbish_1 — https://www.oxfordlearnersdictionaries.com/definition/english/rubbish_1. Тому «put the rubbish out», а не «take out the rubbish» (останнє в CD/OALD не знайшов). make the bed — CD B2 (…/make-the-bed): дано з поясненням на info l1 до завдань. **chore** — CD C1 (…/chore): не вжито. sweep — B2, не вжито; hoover — «UK» (…/hoover), не вжито.
- Наголос (CD UK): housework /ˈhaʊs.wɜːk/, rubbish /ˈrʌb.ɪʃ/, tidy /ˈtaɪ.di/, tradition /trəˈdɪʃ.ən/, celebrate /ˈsel.ə.breɪt/, celebration /ˌsel.əˈbreɪ.ʃən/, pancake /ˈpæn.keɪk/, myself /maɪˈself/, yourself /jɔːˈself/, himself /hɪmˈself/, herself /hɜːˈself/, ourselves /ˌaʊəˈselvz/, themselves /ðəmˈselvz/ — https://dictionary.cambridge.org/dictionary/english/<word>
- Свята. Christmas в Україні 25 December, Святвечір (12 страв, кутя — grain, honey, poppy seeds; колядки), Pancake Day, Christmas pudding — уже звірені в e5s8 (tasks/done/write-eng-g5-e5s8.md, verified reports/verify/e5s8.md). Формулювання беру звідти.
- Нові. Писанка: en.wikipedia Pysanka («eggs decorated using the wax-resist method», «taken to the church on Easter Sunday to be blessed») — https://en.wikipedia.org/wiki/Pysanka; uk.wikipedia Писанка («яйце, декороване традиційними символами, які пишуться за допомогою воску й барвників») — https://uk.wikipedia.org/wiki/Писанка. Паска: en.wikipedia Paska (bread) («traditional Ukrainian Easter bread»; koshyk з паскою і яйцями несуть до церкви освятити) — https://en.wikipedia.org/wiki/Paska_(bread); uk.wikipedia Паска («обрядовий здобний великодній хліб»; «Освячення цієї їжі священником відбувається біля церкви», їжу несуть у кошику) — https://uk.wikipedia.org/wiki/Паска. В уроці: «an Easter egg with beautiful patterns», «sweet Easter bread», «At Easter, we take a basket with paska and pysanky to church». Точного дня (субота чи неділя) не називаю, бо джерела розходяться. Слово bless (B2) не вживаю.
- Chocolate Easter eggs у UK: OALD Easter egg «chocolate in the shape of an egg that is given as a present and eaten at Easter» — https://www.oxfordlearnersdictionaries.com/definition/english/easter-egg; CD Easter egg «chocolate in the shape of an egg…» — https://dictionary.cambridge.org/dictionary/english/easter-egg

**Опора завдань (D-019), неочевидне:**
- l1 #8 (sort do / make): «make pancakes» — з e5s8l4 і e6s3; «do your homework» — 5 кл.
- l1 #9 Final, пастка «houseworks»: правила «uncountable» на екрані немає, слово дано лише в однині (#3). Hint підказує, що треба перевірити -s.
- l2 #5 build: get → got є в info #3.
- l4 #6 (gaps): Andrii грає в шахи з 5 років (канон e6s4). Оксана й Емма знайомі з 10 років (e4s1, 4 кл.).
- l4 #7 / info #5: «We’ve had Murka for four years» — нова деталь канону (inbox).
- l5 #10 stress: опора — info #3 «my<u>self</u>, our<u>selves</u>: the underlined part is strong».
- l6 #9 stress: наголоси підкреслено на info #2 (pancake — з e5s8/e6s3; підкреслення pancake в info немає, тому це слово взято з 5–6 кл.).

**Спірне / для верифікатора:**
1. Present Perfect з already / yet у питаннях: «Have you already…?» ніде не роблю дистрактором (план-специфіка). Already / yet як пару в `gaps` даю лише в стверджувальних реченнях і запереченнях. Just + Past Simple (AmE «I just fed her») ніде не є варіантом.
2. Just і already в одному контексті часто обидва можливі. Тому в `gaps` / `word` контекст відсікає just явно: «at ten this morning», зараз 8 pm; «after lunch», зараз 6 o’clock. Just перевіряю формою й позицією, а не протиставленням з already.
3. Boss T8 pick «I haven’t had breakfast [already]» — помилка за CD «not usually in negatives».
4. Назва l2 за планом «I’ve just washed the dishes». У тексті уроку BrE-основа — do the washing-up, а «= wash the dishes» пояснено на info l1 (OALD dish_1).
5. «Housework list on the fridge» — рольовий список справ, без слова rota.
6. TQ не ставив (TQ-150…151 не використано).
7. Плейтест не запускав. Build і коміт не робив (вказівка оркестратора).

**requires:** e6s7l4, e6s7l5, e6s3l4, e5s8l4 — з задачі; + e6s5l5 (have to на l1 #5), id існують (validate).
