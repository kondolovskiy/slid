---
claimed_from: todo
claimed_at: 2026-11-26T10:42:42.055Z
id: write-eng-g11-e11s3
type: write-section
subject: eng
grade: 11
section: e11s3
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: todo
claimed_by: writer-e11s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «Leisure: clubs, film, TV and the Internet» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Дозвілля — клуби за інтересами; кіно, театр, телебачення, Інтернет; улюблена вистава/фільм; характеристика фільму/вистави/телепрограми — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21 (фестивалі з цієї теми — у e11s4).
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): compound adjectives (с. 25) — нове в нашому плані (в інвентарі B1 МП-ІМ с. 34 є, у плані 7–9 кл. немає): well-known, long-running, award-winning, two-hour (film); question tags (positive/negative, all tenses) (с. 25) — повт. e8s1 l4 (Present Simple); нове: усі часи й модальні, I’m …, aren’t I?, Let’s …, shall we?; reply questions «Really? Did you?» — (наш) для функції «демонструвати зацікавленість у предметі розмови» (с. 23). Present / past participles as adjectives — у e11s4 (план змінено).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Пастки: числівник у складному прикметнику — однина (a two-hour film, не *two-hours; звірити CD Grammar «Compound adjectives»); дефіс перед іменником (a well-known actor), а після дієслова часто без нього (he is well known — CD) — ключ з урахуванням позиції; question tags — лише форма, без інтонації (звуку немає); I am → aren’t I (CD Grammar «Question tags»). BrE: programme (TV), film, cinema; the internet — і з малої, і з великої (OALD internet; glossary/eng.md — звірити, одна форма на предмет). Огляд фільму — вигаданий або загальновідомий без спойлерів і без цитат під охороною; не дублювати e7s4 l6 і e8s4 l6 (огляди); клуби — повт. e7s5 l2, e7s6 l1, e9s5 (молодіжні клуби, «Join our club!»): тут — клуби за інтересами на B2 (опис, правила, онлайн-спільноти), без дубля: тут — характеристика фільму, вистави чи телепрограми на B2. Україна — українське кіно й театр (факти з джерела). `requires`: 7–9 — e7s4, e8s1 l4, e9s4 l2. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s3.js`: `SLID.section("eng", { id: "e11s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
