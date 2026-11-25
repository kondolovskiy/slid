---
id: write-eng-g10-e10s2
type: write-section
subject: eng
grade: 10
section: e10s2
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
---
# Написати розділ «Sport, health and leisure» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Спорт і дозвілля — роль спорту в житті суспільства та людини; спортивні події/змагання; здоров’я та спорт — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 22–23), граматика — с. 23, обсяги — с. 21.
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): verb + -ing vs to-infinitive; verbs taking gerund (с. 23) — повт. e8s2 l3 (enjoy / want); нове для B2: avoid, mind, risk, keep, give up, practise, can’t stand + -ing; refuse, manage, afford, agree + to; зміна значення — stop, remember, forget, try, regret (l4).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: like, love, hate, prefer, begin, start, continue + -ing і + to — обидві форми (CD Grammar «Verb patterns: verb + infinitive or verb + -ing?») — або дієслово з одним шаблоном, або обидві в ключі; у stop / remember / try / forget / regret контекст має однозначно показувати значення. BrE: sport (загальне), sports як прикметник (sports event) — facts/eng.md №14; practise (дієсл.) / practice (ім.) — glossary/eng.md. Події — Олімпійські й Паралімпійські ігри, чемпіонати; результати й імена українських спортсменів — лише з джерела з датою (e7s5 l5 «The first Ukrainian to win» — не дублювати тих самих людей). Здоров’я: не дублювати e8s2 l1–l2 (здоровий спосіб життя, too much / not enough) — тут саме спорт і здоров’я. Здоров’я — без медичних порад. Функція «аргументувати свою точку зору» (с. 22) — l6. `requires`: e5s6l2, e5s6l6 (like + -ing), e6s4l1–l2 (види спорту, prefer); 7–9 — e7s5, e8s2 l3. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s2.js`: `SLID.section("eng", { id: "e10s2", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e10s2` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
