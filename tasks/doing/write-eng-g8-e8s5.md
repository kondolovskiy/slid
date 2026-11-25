---
claimed_from: todo
claimed_at: 2026-11-25T12:23:39.310Z
id: write-eng-g8-e8s5
type: write-section
subject: eng
grade: 8
section: e8s5
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: todo
claimed_by: writer-e8s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Література й бібліотека» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: вибір книг; улюблений письменник, книга, герой; літературні жанри; бібліотека, її обладнання та послуги — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Past Perfect Simple: affirmative, negative, time up to then (B1) — нове; narrative tenses: Past Simple + Past Continuous + Past Perfect (B1: Past simple — ordering of past events) — розширення e6s4l5; sequencing у розповіді (then, later, in the end) (B1: Discourse markers — sequencing) — розширення e6s3l3; Past Perfect Continuous (B1: background events) — лише впізнавати, на вибір автора.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** after / before + Past Simple часто без Past Perfect («After he finished / had finished») → обидва в ключі; «When we arrived, the film started / had started» — різний зміст: будувати завдання лише з однозначним контекстом. Жанри — за CD (novel, short story, poem, fairy tale, fantasy, detective story, science fiction); бібліотека: borrow / lend (пастка), library card. Письменники — Lesia Ukrainka, Ivan Franko, Taras Shevchenko (glossary/eng.md, КМУ № 55) і британські; тексти творів під охороною не цитувати; переказ — власний. Відгук про книгу — с. 31. `requires`: e6s4l4, e6s4l5, e6s3l4, e6s3l5, e4s3l5, e5s7l1, e6s7l5 (past participles: seen, eaten — опора для had + participle); після появи e7s1 — урок just / already (оркестратор). Рядок плану l4 — «When I got to the library, it had closed» (verifier-curate-eng-plan-g7-9: приклад з теми розділу, а не про фільм). Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s5.js`: `SLID.section("eng", { id: "e8s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
