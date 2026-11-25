---
claimed_from: todo
claimed_at: 2026-11-25T12:17:11.414Z
id: write-eng-g7-e7s6
type: write-section
subject: eng
grade: 7
section: e7s6
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e7s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Шкільне життя після уроків» (Англійська мова, 7 клас)

## З програми
- Тема й підтеми: позакласні заходи; шкільні свята і традиції — МП-ІМ с. 32 (розд. 5.2.1), граматика — с. 34–35 (розд. 5.4.1).
- Рівень: A2 → B1 (B1 — наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): First Conditional: if + Present Simple, will (B1: Conditional — possible future; перенесено з 6 кл., plan-eng-g6 §2в) — нове; unless + Present Simple (B1) — нове; Present Simple after as soon as / when for future (B1: Future — Present simple with ‘as soon as’) — нове; Shall: What shall we do? / Shall I…? — plans, seeking advice (B1: Shall — plans and intentions, seeking advice) — нове; Shall we…? як пропозиція — **повторення** e5s6l5 (A2: Shall — suggestions; verifier-curate-eng-plan-g7-9); повторення: if + Present Simple з імперативом (e6s8l3), will (e5s5l5), be going to (e5s9l3), Present Continuous for arrangements (e6s5l3).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** «If it will rain» — помилка, ключ — Present Simple; unless = if … not — без подвійного заперечення; will / going to у головному реченні — часто обидва (pitfalls-content «Англійська» п. 3, 12) → контекст або обидва в ключі. Шкільні традиції України (Перший дзвоник, Останній дзвоник — англійські назви звірити за джерелами англійською) і UK (sports day, school fair) — з джерела; after-school club — звірити в CD. Не повторювати e4s8l4 «School events» і e6s6: тут позакласні заходи, свята, планування події. Функції: пропонувати, приймати, відхиляти; обмінюватися думками (с. 32). `requires`: e6s8l3, e5s5l5, e5s9l3, e6s5l3, e4s8l4, e6s6l4, e5s6l5. Герої — та сама серія, що в 4–6 кл., на 3 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g7-e7s6.js`: `SLID.section("eng", { id: "e7s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e7s6` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e7s6, 2026-11-25.** Файл `content/eng/g7-e7s6.js`, 7 уроків (6 + boss), статус draft. `validate --section e7s6` — 0 помилок, 0 попереджень.

**Уроки:** l1 After-school clubs (клуби, member/join/meet; Present Simple для розкладу vs Present Continuous для планів — повтор e6s5l3) · l2 First bell, last bell: school traditions (читання 2 екрани; sports day, egg-and-spoon race, school fair, stall; stress) · l3 First Conditional (if + PS, will / won’t; pick «Find the mistake» — If you will win) · l4 unless / as soon as / when + PS for future · l5 Shall I…? (offer), What shall we do? (ideas/advice), Shall we…? (повтор e5s6l5); відповіді yes/no · l6 Invitation + думки (I think / I don’t think / I agree; I am agree — закреслено) · l7 boss (7 задач, pre на кожен урок). `requires`: e6s8l3, e5s5l5, e5s9l3, e6s5l3, e4s8l4, e6s6l4, e5s6l5 (за задачею; П7 верифікатора плану врахована).

**Факти (два джерела кожен):**
- Перший дзвоник — 1 вересня, початок навчального року, «Свято Першого дзвоника»: https://uk.wikipedia.org/wiki/День_знань; https://en.wikipedia.org/wiki/Knowledge_Day («The day also involves the First Bell»). Англ. назва «First Bell» — ще заголовки kmu.gov.ua/en («First Bell celebration»), jpost (з пошуку; ці хости з контейнера не відкриваються).
- Квіти вчителям 1 вересня — uk.wikipedia День знань («Прийнято… дарувати квіти своїм вчителям»); друге — лише фрагмент пошуку (vzhe-vzhe.com, unn.ua — недоступні). Тому в уроці це **розповідь Оксани про свою школу** («In our school, lots of children bring flowers»), а не загальне твердження. Верифікатору — підтвердити друге джерело.
- Останній дзвоник — кінець травня; для випускників; дзвонить першокласниця (часто її несе одинадцятикласник); після нього — іспити: https://uk.wikipedia.org/wiki/Останній_дзвоник; https://en.wikipedia.org/wiki/Last_bell («usually by a first-grader», «before the final exams»). Дати (25 травня vs остання субота) розходяться — у тексті лише «at the end of May».
- sports day (UK) — CD https://dictionary.cambridge.org/dictionary/english/sports-day («children in a school compete in races… against each other»); egg-and-spoon race — CD https://dictionary.cambridge.org/dictionary/english/egg-and-spoon-race + https://en.wikipedia.org/wiki/Sports_day. Пору року (summer) не подаю — одне джерело, загальне.
- school fair: CD fair (noun) «a large public event where goods are bought and sold, usually from tables…» https://dictionary.cambridge.org/dictionary/english/fair; fete «UK… often organized to collect money» https://dictionary.cambridge.org/dictionary/english/fete; «The money is for the school» — уже в e4s8l4. stall — CD B1 https://dictionary.cambridge.org/dictionary/english/stall.
- after-school club — **у CD гасла немає** (пошук CD повертає «Did you spell it correctly»); OALD after-school adj «happening after normal school hours», приклад «an after-school club» https://www.oxfordlearnersdictionaries.com/definition/english/after-school; club — CD A2.

**Граматика (CD Grammar):** unless = except if, без will, «Unless and if … not» https://dictionary.cambridge.org/grammar/british-grammar/unless; shall — offers, suggestions, seeking advice («What shall we do…»), лише з I / we https://dictionary.cambridge.org/grammar/british-grammar/shall; no will after as soon as / when (future) https://dictionary.cambridge.org/grammar/british-grammar/as-soon-as (Conjunctions: time); if — conditions https://dictionary.cambridge.org/grammar/british-grammar/conditionals-and-wishes/if.
**Рівні й наголос (CD UK):** tradition B2 (tra|+di|tion, вводимо з прикладом на info l2 — Р1 верифікатора плану), festival B1 (+fes|ti|val), invitation A2 (in|vi|+ta|tion), poster A2 (+pos|ter), September (Sep|+tem|ber), ceremony B1 (не вжито), celebrate B1 (не вжито), choir B2 (не вжито), unless B1, stall B1, member A2, join A2/B1, tournament B1 (з e7s5l1).

**Друга правильна відповідь — що зроблено:** у gaps головного речення First Conditional пастка — минулий час (played, stayed), а не Present Simple (If we win, we play… теж можливе); word «join» + «attend»; word «is» з contractions (’s); boss Task 3 — підмет Halyna, не «our team» (BrE team win / wins); l6 фінал — «I {think|thinking}», бо «I agree it will be great» граматичне; l5 фінал — пастка Let’s (Let’s we / Let’s I), а не will / do (What do we do? — граматичне); match l3 — праві половинки з однозначною прив’язкою (I’ll help you too, umbrellas, she’ll). Build перевірено вручну: l4 — обидва порядки в answer (As soon as … без коми — плитки без коми).

**Опора D-019:** l1 екран 5 і boss Task 1 — розклад клубів на тому ж екрані; l2 екрани 4–5 — уривок на екрані; l2 stress — підкреслення на info (екран 3); l6 stress — підкреслення на info (екран 3); l6 multi — відповіді на екрані; boss Task 7 — текст Liza на екрані.

**stats:** e7s6l2 — readWordsPerScreen 48 (у межах профілю 6–50, але z=2.4 «нетипово для сім'ї»): урок читання з двома уривками тексту; скоротив інтро й текст, далі різати — втрачається зміст. e7s6l6 — longWordShare 0.116 (межа ≤ 0.18, z=2): слова теми invitation, festival, everyone. Решта — без прапорців.

**Герої:** нова Ms Marchenko — класна керівниця Оксани (Zelena Dolyna); нова Liza (boss, без міста, грає на піаніно). Emma — swimming club з Tom (узгоджено з e7s5), photography club, drama club (новий з цієї п’ятниці); Andrii — шаховий клуб у турнірі шкіл Києва; дідусь Mykola — «back» (спина болить, умовно).
**Питань до вчителя немає** (TQ-133 не використано).
