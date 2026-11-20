---
id: write-eng-g6-e6s2
type: write-section
subject: eng
grade: 6
section: e6s2
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Написати розділ «Покупки» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: відвідування магазинів; види магазинів; асортимент товарів; гроші — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): Quantity: a few, both, all, no (A2); too + adjective (It’s too big); purpose: to-infinitive (Why? To buy some bread); повторення — how much / how many (e4s4l3, e5s3l4), Can I…? / Could I…? (e5s2l6), I’d like (e4s4l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** Типи магазинів — BrE з апострофом: the chemist’s (CD «UK», US drugstore), the newsagent’s (CD «UK»), the baker’s / the butcher’s — один і той самий магазин двома назвами (chemist’s / chemist, baker’s / bakery) кладеш у ключ. try on — B2 (OALD): у назвах не виносити, у діалозі — з опорою. Гроші: £1 = 100 pence, гривня — hryvnia, мн. hryvnias, ₴ (inbox writer-e4s4, verifier-e4s4). Герої: у Zelena Dolyna один магазин (e5s7) — контраст із містом (Mariia, Kharkiv); сцена з фунтами — в Англії (Emma). no + іменник vs not any — обидва правильні: у `gaps` контекст має відсікати другий. `requires`: e4s4l1, e4s4l4, e4s4l5, e5s3l4, e5s2l6. Гроші (l4): ціни в pounds, pence і hryvnias уже є в e4s4l4 — не повторювати, а розширити: скільки разом, change (CD A2 «the money that is returned…»), Here’s your change (verifier-curate-eng-plan-g6). Функція «пропонувати, приймати, відхиляти пропозицію» (с. 20): Can I help you? — Yes, please / I’m just looking, thank you (OALD look_1 «be just looking»; приклад словника дослівно не брати). Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s2.js`: `SLID.section("eng", { id: "e6s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e6s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
