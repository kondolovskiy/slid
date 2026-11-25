---
id: write-eng-g7-e7s7
type: write-section
subject: eng
grade: 7
section: e7s7
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Написати розділ «Київ і столиця країни мови» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: основні пам'ятки історії та культури Києва; пам'ятки столиці країни виучуваної мови — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Past Simple passive: negative, questions, by + agent — When was it built? Who was it designed by? It wasn’t destroyed (B1: Passives — Past simple) — розширення e6s7l3 (там лише affirmative); one of the oldest + plural noun (B1: Superlatives — ‘one of the’) — нове; the same as, similar to (B1: Clause — comparatives) — на вибір автора; повторення: Present Simple passive (e6s3l2), the main / the only (e6s7l2).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** **Один розділ на дві теми програми** (Україна — пам'ятки Києва; Країни виучуваної мови — пам'ятки столиці): с. 32 дозволяє поєднувати теми; питання вчителю — TQ-130. Не повторювати e6s7 (Софія, Золоті ворота, Андріївська церква, фунікулер, метро — там уже є) і e6s8 (London: a map; **the Tower of London там уже є — 21 згадка, «built more than 900 years ago»**, тож у l5 — St Paul’s Cathedral, verifier-curate-eng-plan-g7-9): тут музеї, пам'ятники, історія й культура. St Paul’s: старий собор знищила Велика пожежа 1666 р., новий спроєктував Christopher Wren (en.wikipedia St Paul’s Cathedral; London Museum «A history of St Paul’s Cathedral»); роки будівництва в джерелах різні (≈ 1675–1711) — у вправі лише «after the Great Fire of 1666» або століття. Дати — лише з двох джерел; спірні (рік заснування Лаври, «найстаріший») — лише століття або без дати (writer-e6s7). one of the + plural («one of the oldest museums»). Фото: в Україні немає свободи панорами — сучасні пам'ятники й будівлі лише з дозволеною ліцензією (writer-e6s7). `requires`: e6s7l2, e6s7l3, e6s8l2, e6s3l2, e5s10l5, e5s7l6. Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s7.js`: `SLID.section("eng", { id: "e7s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
