---
claimed_from: todo
claimed_at: 2026-11-19T14:22:10.318Z
id: write-eng-g5-e5s6
type: write-section
subject: eng
grade: 5
section: e5s6
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e5s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Відпочинок і дозвілля» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: види відпочинку та занять; захоплення; канікули — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): like/love/hate + -ing; Let's…; suggestions. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s6.js`: `SLID.section("eng", { id: "e5s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s6` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->

**writer-e5s6, 2026-11-19.** Файл: `content/eng/g5-e5s6.js`, 7 уроків (6 + фінал), усі `draft`. `node tools/validate.mjs --section e5s6` — 0 помилок, 0 попереджень. `node tools/stats.mjs --subject eng` — межі профілю «5» не порушено; лише e5s6l7 (boss) «readWordsPerScreen нетипово для сім'ї (z=2)»: 28 слів/екран, межа [5; 35], як у l1–l6 (25–31) — у фіналі всі екрани оцінювані (gradedShare 0,88), тож пояснення й теорії немає.

### Уроки
| id | title | типи завдань |
|---|---|---|
| e5s6l1 | Free time: at home and outside | choice (hyp), sort, match (halves), gaps, stress, word, choice (Final) |
| e5s6l2 | I love drawing, I don’t like running | choice (hyp), choice, gaps, word, build, pick (Find the mistake), gaps (Final) |
| e5s6l3 | Swimming is fun! My hobby | choice (hyp), gaps, choice, choice + multi (читання 2 частини), build, word, gaps (Final) |
| e5s6l4 | I can swim well, but I can’t skate | choice, gaps, choice, build, word (contractions), pick (Find the mistake), choice (Final) |
| e5s6l5 | Let’s go! Saying yes or no | choice (hyp), gaps, sort, match (Q&A), choice, word (contractions), order (Final) |
| e5s6l6 | School holidays: what do you like doing? | choice (hyp), choice, choice + multi (читання 2 частини), gaps, stress, word, gaps (Final) |
| e5s6l7 | Hobby day at the club (boss, `pre` l1–l6) | gaps ×2, choice ×3, build, match |

`requires: ["e4s3l1", "e4s3l4"]` (plan-eng-g5.md §6: e5s6 → e4s3 — play/go/do і like/don’t like). Можливо ще e4s8l2 (Sorry, I can’t — відповідь на запрошення) — на розсуд оркестратора. Зображень немає: `match` — лише текстові пари (без img, тож `credits` не потрібні).

### Джерела форм (curl, 2026-11-19)
- like / love / hate + -ing і + to-infinitive — обидва правильні в BrE; -ing частіше після love/hate, «enjoyment»; would like — лише to: CD Grammar «Like» https://dictionary.cambridge.org/grammar/british-grammar/like, «Hate, like, love and prefer» https://dictionary.cambridge.org/grammar/british-grammar/love. **Тому to-інфінітив ніде не є хибним варіантом**, а у `word` (l2 #7 dance, l6 #9 do) «to dance» / «to do» — у ключі.
- Let’s + інфінітив без to (suggestions with ourselves; «Let’s stop now…, shall we?»): CD Grammar «Let, let’s» https://dictionary.cambridge.org/grammar/british-grammar/let-let-s; Shall we — suggestions: CD Grammar «Shall» https://dictionary.cambridge.org/grammar/british-grammar/shall; «Suggestions» https://dictionary.cambridge.org/grammar/british-grammar/suggestions.
- can — ability («I can sing one song…»), без -s і без to: CD Grammar «Can» https://dictionary.cambridge.org/grammar/british-grammar/can.
- play the guitar / play the piano (OALD guitar, piano; OALD дає й «plays guitar in a band» — тому артикль з інструментом НЕ оцінюється ніде): https://www.oxfordlearnersdictionaries.com/definition/english/guitar, …/piano.
- go for a walk (OALD walk_2 «Let's go for a walk»), take a photo (OALD photo «I'll take a photo of you»; NAmE — take a picture), ride a bike (OALD bike_1), play chess (OALD chess, Collocations), school holidays / in the holidays (OALD holiday_1 «It's the school holidays at the moment», «in the holidays»), Good idea / That’s a great idea (OALD idea): https://www.oxfordlearnersdictionaries.com/definition/english/walk_2, …/photo, …/bike_1, …/chess, …/holiday_1, …/idea.
- Наголос (CD UK): guitar — 2-й (gi'tɑː), piano — 2-й (pi.'æn.əʊ → pi|an|o), computer — 2-й, cartoon — 2-й, hobby — 1-й, holiday — 1-й (hol.ə.deɪ), camping, fishing, drawing, dancing, skating, painting — 1-й: https://dictionary.cambridge.org/dictionary/english/<слово>; weekend UK — 2-й (inbox writer-e4s3, verified). Рівні CD: guitar, computer, holiday, music, reading — A1; piano, hobby, drawing, skating, camping, fishing, chess, cartoon, cinema — A2; comic — B1 (тому не вжито).
- -ing правопис (dance → dancing, ride → riding, swim → swimming, run → running) — CD статті dancing, swimming, running.
- Odesa біля Чорного моря — inbox verifier-e4s7 (CD «Black Sea port»); the Carpathians — glossary/eng.md; sports day — BrE (inbox verifier-e4s8).

### Перебір `build` (app/lang.js, node, усі перестановки плиток і пасток)
Кожен build приймає рівно один порядок (у l4 і l7 — двічі той самий рядок через дві плитки «I»); жодна пастка `extra` не зараховується. Будови з can без «but» (I can play chess very well) відкинув: перестановка «Can I play chess very well» — граматичне питання. Тому в l4 і l7 — «I can … well, but I can’t skate» з комою в плитці (інший порядок частин не складається).

### Герої (узгоджено з 4 кл.)
Oksana (село біля Полтави, karate, любить воду; брат Dmytro не любить плавати — e4s3), Andrii (Kyiv, шахи з дідом; друг Bohdan — e4s3l1), Emma (Англія, плаває щосуботи; брат Tom), Mariia (Kharkiv, малює), Taras (Lviv, фото), uncle Ivan (e4s1l2) — в Odesa (у e4s1 його місто не названо), нова героїня фіналу Khrystyna (КМУ № 55: Х → Kh).

### Спірне
1. l1 #8 word «He ___ cartoons on TV.» — ключ лише `watches`; «likes / loves cartoons» теоретично граматичні, але body питає «What does he do every evening?».
2. l2 info: «After love, like and hate: a verb + -ing» — спрощення програми (МП-ІМ: like/love/hate + -ing); to-інфінітив не названо, але й не карається (див. вище).
3. l6 #3 info: рядок «Remember: guitar, weekend» додано, щоб `stress` спирався на екран цього уроку (weekend — з e4s3).
4. l5 intro і `info` «Let’s = you and I, together» — пояснення без «let us» (CD: let us — дуже формальне).
5. Збігів з опублікованими текстами не шукав системно; WebSearch «My hobby is taking photos. I've got an old camera» — збігів немає.

**verifier-e5s6, 2026-11-20 — вердикт: придатний, усі 7 уроків `verified`** (звіт reports/verify/e5s6.md).
- Факти: Odesa біля Black Sea (CD + en.wiki), the Carpathians (ЕСУ article-9920 + en/uk.wiki), старий центр Lviv (ЕСУ article-59624 + en.wiki); форми й BrE — CD Grammar і OALD; наголос 8 слів — CD UK + OALD BrE. Усе ✅.
- Завдання: розв'язав усі. `word` і `build` прогнав через app/lang.js (`wordVerdict`, `check`, перебір усіх наборів плиток з extra). Друга правильна відповідь була одна: l1 #8 («loves» з умови) — умову переписано («Use a verb from the list»). Інші граматичні перестановки build у l4 і l7 відсікає умова й шкала уроку l4.
- Авторське право: 16 дослівних WebSearch-запитів, збігів немає.
- Правки: 5 змістових (l1 #8 body; fbText l2 #4, l3 #5, l5 #8, l7 T5 — речення ≤ 8 слів) + status/meta.
- validate --section e5s6 — 0/0; stats — у e5s6 прапорців немає. Плейтест — у CI (playwright у контейнері немає).
- Людині: нічого. Inbox — 3 рядки (pen-friend → penfriend серією; назви уроків vs plan.js; м'які розбіжності героїв Mariia/e5s9 Odesa).
