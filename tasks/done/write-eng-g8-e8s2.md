---
claimed_from: todo
claimed_at: 2026-11-25T12:19:49.274Z
id: write-eng-g8-e8s2
type: write-section
subject: eng
grade: 8
section: e8s2
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e8s2
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
**writer-e8s2, 2026-11-25.** `content/eng/g8-e8s2.js` — draft, 7 уроків (6 + boss `e8s2l7`, значок `e8s2boss`), 8–9 екранів у уроці; validate --section e8s2 — 0 помилок, 0 попереджень. Build не запускав. Без `dialog` (D-056), без звуку, без зображень (`credits` немає).

**Уроки:** l1 Sleep, food and exercise: a healthy lifestyle (lifestyle — B2, з поясненням; should — повторення e6s6l5) · l2 Too much sugar, not enough sleep · l3 I enjoy cycling, I want to try climbing: -ing or to? · l4 Take up a sport, give up fast food: phrasal verbs · l5 Hiking, camping, cycling: active weekends (go + -ing) · l6 How do we spend our free time? A class survey (lab chart, функція «коментувати статистичні дані») · l7 Healthy week at the penfriend club (6 завдань, `pre` на l1–l6).

**requires:** e4s5l2, e5s3l4, e5s6l1, e5s6l2, e6s2l2, e6s2l6 + **e6s6l5** (should — повторення за «Граматикою» задачі). Усередині 7 кл. варто додати e7s4l6 (adjective + enough — l2 зіставляє з enough + noun) — рядок в inbox.

**Здоров'я (2 джерела кожне; who.int, cdc.gov, aasm.org, pmc.ncbi з контейнера — ENOTFOUND, звірено через WebSearch):**
- Сон 8–10 год на добу для 13–18 років — AASM https://aasm.org/advocacy/position-statements/teen-sleep-duration-health-advisory/ ; CDC https://www.cdc.gov/healthy-schools/sleep/index.html (таблиця за віком: 13–18 — 8–10 год). В уроці — «teenagers need 8–10 hours of sleep a night» (l1 екр. 2–3, boss T1).
- ≥ 60 хв помірної–інтенсивної активності на день (у середньому за тиждень) для 5–17 років — WHO https://www.who.int/europe/news-room/fact-sheets/item/physical-activity ; https://www.emro.who.int/health-education/physical-activity/recommended-levels-of-physical-activity-for-health.html ; BJSM 2020 (Bull et al.) https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/ . В уроці — «be active for at least 60 minutes a day» (l1 екр. 3).
- Hoverla — найвища гора України: уже в verified e5 (Sofiia’s book); висоти не наводжу. Yaremche — місто в Карпатах (лише назва місця, l5 екр. 6).

**Форми (CD):** take up B1 «to start doing a particular job or activity» https://dictionary.cambridge.org/dictionary/english/take-up ; give up B1 «to stop doing a regular activity», [+ -ing verb] https://dictionary.cambridge.org/dictionary/english/give-up ; get up A1 https://dictionary.cambridge.org/dictionary/english/get-up ; work out B1 «to exercise in order to improve the strength…» https://dictionary.cambridge.org/dictionary/english/work-out . Verb + -ing (enjoy, avoid, finish, give up), + to (want, decide, hope), both (like, love, hate, start, begin) — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-verb-infinitive-or-verb-ing . too much + uncountable / too many + plural — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/too ; enough before a noun — https://dictionary.cambridge.org/grammar/british-grammar/enough . go + -ing «general activities that involve movement» — https://dictionary.cambridge.org/grammar/british-grammar/go . Рівні: lifestyle B2, survey B2, junk food B2, stay up B2 (у l1 лише в теорії з поясненням, не оцінюється), fast food A2, healthy A2, unhealthy B1, fitness B1, tent B1, helmet B2, hiking A2, camping A2, skiing A2, popular A2, active B1. Наголос (CD UK): ˈlaɪf.staɪl, ˈek.sə.saɪz, ˈhel.θi, ˈen.ə.dʒi → `stress` l1.

**Друга правильна відповідь — що відсічено:** l1 фінал — прибрано пропуск stay up / get up (обидва можливі); l4 gaps — «get up at seven, and Dmytro is always the last one out of bed» (work out відсічено); l4 фінал — take up tennis «Oliver says he can teach me»; l5 фінал — camping з граматичними пастками (camp / to camping), бо cycling / kayaking з наметом теж можливі; l6 фінал — more popular з пастками popularer / the most popular (не active / healthy — думка); l3 choice — like / love: обидві форми як окремий варіант «both»; try + -ing / to не оцінюється (лише «decided to try climbing» у тексті). Відокремлюваність фразових дієслів (give it up) не зачіпаю — 10 кл. (TQ-140).

**Опора неочевидна:** l2 екр. 3 «enough + noun vs adjective + enough» спирається на e7s4l6 (draft) — подано самодостатньо; l6 екр. 6 (Zoriana, 10 з 20 = half) — міркування за таблицею екр. 3; boss T6 (6 з 24 = a quarter) — l6 екр. 3.

**stats:** e8s2l1 maxReadWords 93 / maxText 88 «нетипово для сім'ї» (z=2) — intro з трьома репліками; у межах профілю «7-9» (≤ 140); сім'я eng ще переважно 4–6 кл. Решта уроків без прапорців.

**Герої (нове):** Mariia — часто лягає після півночі, встає о 6, бігає (узгоджено з e7s5); Andrii — спить 9 год, хоче take up tennis; Emma — плаває 4 рази на тиждень, любить чипси, give up fizzy drinks, Cornwall влітку (вчиться серфінгу); Tom — works out з Emma; Taras — cola й ігри до першої ночі (l2), Carpathians з татом і Zlata: Hoverla, кемпінг; Daryna — хайкінг біля Yaremche з мамою; Dmytro — took up football «last year»; мама Olena — без цукру в чаї; тато Petro — тренується вдома; Kyrylo — хоче до Kamianets-Podilskyi у травні; Roksolana — gave up skating, took up gymnastics (= e7s5); Zoriana — art club; клас Andrii — 24 учні (вигадане опитування).

**verifier-e8s2, 2026-11-25.** Verified, 4 правки — reports/verify/write-eng-g8-e8s2.md.
