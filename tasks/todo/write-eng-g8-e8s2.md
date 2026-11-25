---
id: write-eng-g8-e8s2
type: write-section
subject: eng
grade: 8
section: e8s2
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Написати розділ «Стиль життя» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: здоровий спосіб життя; активний відпочинок; повсякденні дії; види дозвілля — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): verb + -ing / verb + to-infinitive: enjoy, avoid, finish + -ing; want, decide, hope + to (B1: Verbs — patterns) — розширення e5s6l2 (like / love + -ing) і e6s2l2 (purpose to); phrasal verbs: take up, give up, get up, work out (B1: Verbs — phrasal) — нове; too much / too many / not enough + noun (B1: Adjectives — modifying ‘enough’; Determiners — quantity) — розширення e6s2l6; повторення: much / many / a lot of (e5s3l4), should (e6s6l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** **Підтема «види дозвілля» — тут** (МП-ІМ с. 32: рядок «Види дозвілля» стоїть під темою «Стиль життя», а «Засоби масової інформації» починаються з рядка «Інтернет»; в орієнтовному плані вона була в e8s3). like / love / hate / start / begin + -ing або to — обидва правильні → обидва в ключі; try + -ing / to — різний зміст, не пастка для 8 кл. Phrasal verbs — лише ті, що є в CD/OALD з цим значенням (pitfalls п. 9). do sport (BrE, glossary). lifestyle — B2 у CD: у назву розділу не винесено, вводити з опорою. Опитування класу — функція «коментувати статистичні дані» (с. 33): числа про свій вигаданий клас, не «дані про українських підлітків» без джерела. `requires`: e5s6l1, e5s6l2, e6s2l2, e4s5l2, e5s3l4, e6s2l6. Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s2.js`: `SLID.section("eng", { id: "e8s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
