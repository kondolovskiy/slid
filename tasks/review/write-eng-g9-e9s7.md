---
claimed_from: todo
claimed_at: 2026-11-25T12:48:59.667Z
id: write-eng-g9-e9s7
type: write-section
subject: eng
grade: 9
section: e9s7
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e9s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Робота і професія» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: характеристика професій; нахили і здібності; вибір професії; професійні якості — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): modals of advice and obligation — повторення з контрастом: should, ought to, must, have to (e6s5l5, e6s6l4–l5, e7s3); Should: ideal or desired situations — A good nurse should be patient (B1) — нове значення; Would: polite requests, indirectness — I would like to…, Would it be possible…? (B1) — нове; will be able to (A2, відкладене з 6 кл.) — нове; gerund after prepositions: good at drawing, interested in working (B1: Verbs — patterns) — розширення e8s2.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** should / ought to — обидва в ключі; професії — без гендерних стереотипів (nurse — he і she). Заявка на літній курс — функція «реєструється на навчальний курс … подає заявку» (с. 30): вигадана, за героєм, без справжніх даних дитини (AGENTS.md §4 п. 12). CV (BrE) — звірити в CD. Не повторювати e4s1l3, e5s1l5 (назви професій): тут характеристика професій, нахили, вибір, якості. `requires`: e4s1l3, e5s1l5, e6s5l5, e6s6l4, e6s6l5, e5s3l5; після появи e7s3 — урок ought to, e8s2 — -ing / to (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s7.js`: `SLID.section("eng", { id: "e9s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e9s7, 2026-11-26.** Файл `content/eng/g9-e9s7.js`, 7 уроків (6 + boss), status draft. `validate --section e9s7`: 0 помилок, 0 попереджень; euphony — без зауважень.

**Уроки:** l1 «Jobs and what people do at work» (10 екр.; vet, architect, programmer, journalist, firefighter, pilot; indoors/outdoors, in a team/alone, long hours, shifts); l2 «Good at maths, interested in people: abilities» (10; preposition + -ing); l3 «A good nurse should be patient: qualities» (11; should — ideal; patient, reliable, creative, organised, calm, brave; should vs have to); l4 «Which job is right for me? Asking for advice» (10; повторення should = ought to, must = have to, don’t have to; What should I do? Do you think I should…?); l5 «I would like to…: applying for a summer course» (10; would — polite / indirect; application form, CV); l6 «My future job: I’ll be able to…» (11; will / won’t be able to; текст Оксани на 3 екрани + питання про весь текст); l7 boss «Careers week: the club guide» (8, Task 1–7 з `pre`).
`requires`: e4s1l3, e5s1l5, e5s3l5, e6s5l5, e6s6l4, e6s6l5, e7s3l5, e8s2l3, e8s6l5, e9s1l2 (e9s1 — draft; звідти lazy, bad-tempered, hard-working як знайомі слова-дистрактори).

**Джерела форм і правил:**
- CD Grammar «Should» — «what is the ideal or best thing to do» (There should be more public hospitals…): https://dictionary.cambridge.org/grammar/british-grammar/should
- CD Grammar «Would» — requests: «a more polite and indirect form of will»: https://dictionary.cambridge.org/grammar/british-grammar/would ; «Would like» — «to say politely what we want», + to-infinitive: https://dictionary.cambridge.org/grammar/british-grammar/would-like
- CD Grammar «Be expressions (be able to…)» — «Not: She won’t can concentrate»: https://dictionary.cambridge.org/grammar/british-grammar/be-able-to ; CD Grammar «Can» — can буває й про майбутнє («We can go swimming… tomorrow»), тому `can` ніде не дано хибним варіантом саме по собі, хибні — will can / won’t can: https://dictionary.cambridge.org/grammar/british-grammar/can
- CD Grammar «Prepositions and particles» — «Prepositions are most commonly followed by a noun phrase, a pronoun or the -ing form of a verb»: https://dictionary.cambridge.org/grammar/british-grammar/prepositions-and-particles ; OALD interested — «interested in doing something» і «interested to do something» (обидва є!): https://www.oxfordlearnersdictionaries.com/definition/english/interested ; CD keen — keen on (doing): https://dictionary.cambridge.org/dictionary/english/keen
- should / ought to — синоніми (e7s3, CD Grammar «Ought to»), must / have to — обидва для обов’язку (e8s6): в одному пропуску не протиставлено.
- CV — CD «mainly UK (US usually résumé)», B1: https://dictionary.cambridge.org/dictionary/english/cv ; careers adviser / careers advice — OALD career_1 «(British English)»: https://www.oxfordlearnersdictionaries.com/definition/english/career_1 (звідси «careers week», «careers quiz», «careers fair»).
- Наголос (CD UK): architect ˈɑː.kɪ.tekt, journalist ˈdʒɜː.nə.lɪst, programmer ˈprəʊ.ɡræm.ər, engineer ˌen.dʒɪˈnɪər, patient ˈpeɪ.ʃənt, reliable rɪˈlaɪ.ə.bəl, creative kriˈeɪ.tɪv, organised ˈɔː.ɡən.aɪzd (CD organized «UK usually organised»). Рівні CD: vet, architect, journalist, firefighter, reliable, creative, patient, calm, brave — B1; organised — B2; shift — B2; programmer — C1 (пояснено в info l1).
- Факти про професії: числових фактів у тексті немає. Перевіряв «UK vet degree — five or six years» (en.wikipedia Veterinary education, з «citation needed»; RCVS — лише через пошук, хост не резолвиться) — недостатньо, тому не вжито. «Uncle had to study… for five years» (l4) — про вигаданого героя. Ліцей і профіль — як у e8s6 (verified; Закон «Про ПЗСО» ст. 4 — https://osvita.ua/legislation/law/2232/).

**Друга правильна відповідь — що відсічено:** l2 після in хибні — to + verb і минула форма (гола основа «work» могла б бути іменником); «interested to» не протиставлено; l1 final — замість alone поставлено long hours (alone з контекстом «talk to people» могло бути правильним); l5 «I ___ like to ask» — ключ would, should (BrE formal «I should like»); l4 word — have, need; хибні варіанти в l4/l5 — неможливі форми (should to, ought без to, will like, would to like, Does it be). У build — keepCase для питань і речень з великою першою плиткою.

**Опора (D-019), неочевидне:** l1 екр. 7 (pilots) — текст на екрані; l2 екр. 8 (Kyrylo) — міркування з умови; l3 екр. 7 (rule vs ideal) — have to з e6s5l5/e8s6l5 + info екр. 5; l6 екр. 5–8 — уривки тексту на тих самих екранах; boss — `pre` на свої уроки.

**Герої (нове):** Hlib — медбрат, колега Olena в лікарні в Poltava (shifts, ночі, у лікарні форма); Ms Bilyk — пілотка в аеропорту Kyiv (лише в l1); Ms Datsenko — організаторка вигаданого літнього курсу Young Coders (Kyiv, 14–16 років, заявки до 1 June). Професійні мрії: Oksana — vet (як e9s1), Zoriana — programmer, Daryna — pilot, Emma — firefighter, Taras — journalist, Marta — architect, Kyrylo — history teacher (як e9s1), Tom — drums (як e9s1), Andrii — не вирішив (engineer чи programmer), дядько Bohdan — engineer. Mariia — good at drawing, цікавиться старими будинками Kharkiv. У Zelena Dolyna немає ветеринара (до Poltava їздять авто); Оксана на вихідних допомагає на фермі біля села.

**stats:** e9s7l6 — sentenceWords «нетипово для сім'ї» (z 2,5; 8,1 у межах профілю 7–9 [3,5; 12]): урок читання з текстом на 3 екрани, як e8s6l6; решта без прапорців.

**Спірне:** «programmer» — C1 у CD (поширене слово; пояснено). Mariia в l2 «good at sport» — у e5s6/e7s5 вона бігає; не суперечить.
