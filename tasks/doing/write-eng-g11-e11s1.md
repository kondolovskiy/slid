---
claimed_from: todo
claimed_at: 2026-11-26T10:37:10.467Z
id: write-eng-g11-e11s1
type: write-section
subject: eng
grade: 11
section: e11s1
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: todo
claimed_by: writer-e11s1
created: 2026-11-19
source: design-eng
---
# Написати розділ «Rights, responsibilities and tolerance» (Англійська мова, 11 клас)

## З програми
- Тема й підтеми: Я, моя родина, мої друзі — права та обов’язки молоді; норми поведінки та спілкування; толерантність, гуманність, благодійність; ведення домашнього господарства — П1407 с. 23–24 (спеціалізовані школи, 11-ий клас, англійська: теми й функції — с. 23, лексика — с. 24), граматика — с. 25, обсяги — с. 21.
- Рівень: B2 (наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): reported speech with changed tenses (с. 25) — повт. e6s8l5 (said / told), e8s3 l4–l5 (reported statements), e9s4 l4–l5 (questions, requests); нове для B2: Past Perfect у непрямій мові, слова часу й місця (the day before, the next day, there); reporting verbs + that + complement clause (с. 25) — нове: admit, agree, explain, promise, complain, deny, insist, suggest (that).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: зміна часу необов’язкова, якщо сказане досі правда («She said she likes / liked it» — CD Grammar «Reported speech: indirect speech») — ключ обидві або контекст минулої ситуації; that можна пропустити; suggest that + should / базова форма / Past Simple — у BrE усі (CD Grammar «Suggest») — або ширший ключ, або завдання без цієї форми; promise / agree / deny мають і шаблони + to / -ing — не робити їх пасткою. Права й обов’язки — шкільні й сімейні, без юридичних порад (міжнародне право — e11s7). Благодійність, волонтерство — Україна, факти з джерела. Housework — розширення e7s1 l1 (тут — справедливий поділ, дискусія); BrE washing-up — звірити в CD. Функції (с. 23): «висловлювати й аргументувати власну точку зору», «вступати в дискусію, привертаючи увагу співрозмовника» (в 11 кл. більше ніде не покрито), «підтримувати дискусію» — l6, `dialog`. `requires`: e6s8l5; 7–9 — e7s1 l1, e8s3 l4, e9s4 l4. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g11-e11s1.js`: `SLID.section("eng", { id: "e11s1", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e11s1` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
