---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.746Z
id: write-eng-g6-e6s4
type: write-section
subject: eng
grade: 6
section: e6s4
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: todo
claimed_by: writer-e6s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Спорт» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: види спорту; спортивні уподобання — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): Past Continuous: affirmative, negative, questions; background events, events in progress (A2: інвентар с. 22 називає лише affirmative; negative і questions — через Clauses: Negative declarative, Interrogatives, с. 21 — лише короткі, What were you doing…?); Past Simple with when (A2: with ‘when’ in subordinate clauses); Could: abilities (I could swim when I was five); повторення — play / go / do + sport (e4s3l1), can (e5s6l4), Exclamations: What a… (e5s8).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** BrE: sport у загальному значенні (не sports), але sports news, sports day; football pitch — B2 (CD), у назвах не виносити. Past Continuous vs Past Simple: «when» з короткою дією — Past Simple; другу правильну відповідь (while / when, обидва часи в одному реченні) відсікати контекстом. «What were you doing at six o’clock?» — час без am/pm, якщо контекст однозначний. Спортсмени України — лише з двох джерел; без результатів «на сьогодні». Герої: Emma плаває, Tom катається, але не плаває (e5s6); Andrii — шахи. `requires`: e4s3l1, e5s6l4, e4s6l2 (Present Continuous — форма -ing), e5s4l3 (What are you wearing? — питання be + -ing); після e6s3 — урок Past Simple irregular з e6s3 (оркестратор). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s4.js`: `SLID.section("eng", { id: "e6s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s4` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
