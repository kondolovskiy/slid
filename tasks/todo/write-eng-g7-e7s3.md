---
id: write-eng-g7-e7s3
type: write-section
subject: eng
grade: 7
section: e7s3
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Написати розділ «Здоров'я: у лікаря» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: відвідування лікаря; медичні заклади, захворювання, симптоми, ліки — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Present Perfect for recent past and news — I’ve hurt my knee (B1: recent past) — розширення e7s1; Past Simple vs Present Perfect: When did it start? / I’ve had a cough since Monday (B1) — розширення e6s7l5; ought to / ought not to: advice (B1: Ought — advice) — нове; повторення: should (e6s6l5), have to (e6s5l5); imperatives і частотність в інструкції (Take one tablet twice a day) — читання для орієнтування (с. 28: інформація на упаковках лікарських засобів); indefinite pronouns something / anything / nothing (B1: Pronouns — indefinite; відкладене з 6 кл.) — на вибір автора.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** ought to і should у пораді — обидва правильні → обидва в ключі або контекст; I’ve got a cold / I have a cold — обидва BrE. chemist’s (BrE, CD); tablet — CD B1; sore throat — є в CD. **surgery у CD — B2 «операція»**: значення «приймальня лікаря» (BrE) не вводити без словника. Етикетка ліків — вигадана, без назв справжніх препаратів і без порад щодо дозування; в уроці — «ask a doctor or a chemist». Функція «просити про допомогу» (с. 32). Не повторювати e4s5l4–l5 («What’s the matter?», «At the doctor’s»): тут медичні заклади, симптоми, ліки, інструкція. `requires`: e4s5l4, e4s5l5, e6s6l5, e6s5l5, e6s7l5; після появи e7s1 — уроки just / already (recent past: I’ve hurt my knee) і for / since (оркестратор). Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s3.js`: `SLID.section("eng", { id: "e7s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
