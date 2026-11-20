---
claimed_from: todo
claimed_at: 2026-11-20T08:47:10.796Z
id: write-eng-g6-e6s6
type: write-section
subject: eng
grade: 6
section: e6s6
depends_on: [curate-eng-plan-g6, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary]
status: done
claimed_by: writer-e6s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Шкільне життя» (Англійська мова, 6 клас)

## З програми
- Тема й підтеми: улюблені навчальні предмети; види діяльності на уроках — МП-ІМ с. 20 (розд. 4.2.2), граматика — с. 21–22.
- Рівень: A2 (наприкінці 6 кл., МП-ІМ с. 3).
- Граматика (план 6 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g6.md §2): must / mustn’t: obligation, rules (A2); should: advice, questions (A2); defining relative clauses with who, which, that (A2); повторення — Past Simple у підсумковому уроці (e6s3), Can I…? (e5s2l6).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g6):** must vs have to: у шкільних правилах у BrE правильні обидва — у `gaps` не робити have to хибним без контексту. mustn’t ≠ don’t have to — це предмет уроку, пояснювати прикладом. who / that про людей, which / that про речі — обидва в ключі (CD Grammar «Relative pronouns»). rule, experiment — B1 (CD): з прикладом. Не повторюй e5s2l7 «Letters from two schools» (порівняння шкіл UK/UA уже було) — фінальний урок про враження («The best lesson of the year», функція «висловлювати враження, почуття» с. 21). Герої: Ms Lysenko — вчителька англійської в класі Andrii (Kyiv); Daryna, Zoriana, Bohdan — той самий клас (Kateryna — подруга Mariia в Kharkiv, не однокласниця Andrii: style-eng-g4-5); у школі Emma — форма. `requires`: e5s2l1, e5s2l5, e5s2l6. Герої — та сама серія, що в 4–5 кл., на два роки старші (канон — memory/short/inbox.md NOTE (герої), plan-eng-g6.md §7).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g6-e6s6.js`: `SLID.section("eng", { id: "e6s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --section e6s6` — 0 помилок; попередження виправлено або пояснено.
- [x] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [x] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e6s6, 2026-11-20. Файл `content/eng/g6-e6s6.js`, 7 уроків (6 + boss), усі `draft`.

**Уроки:** l1 My favourite subject and why (geography, IT; because; Why do you like…?) · l2 Projects, tests, experiments (do an experiment / a test / a project, make a poster, work in groups; Present Continuous vs Present Simple — повторення e4s6) · l3 A subject that I love, a teacher who helps (who / which / that) · l4 School rules: you must, you mustn’t (+ mustn’t vs don’t have to) · l5 You should ask for help: advice (should / shouldn’t, Should I…?, Can I…? — повторення e5s2l6) · l6 The best lesson of the year (Past Simple-повторення, враження; текст 2–3 екрани) · l7 boss «Our school magazine» (7 завдань, `pre` на кожен урок).
`requires`: e5s2l1, e5s2l5, e5s2l6 (з задачі). Усередині 6 кл. після злиття варто додати e6s5 (урок have to) — «don’t have to» в l4 пояснено на екрані, тож без нього завдання чесне.

**Перевірки:** `validate --section e6s6` — 0 помилок, 0 попереджень. `stats --subject eng`: у межах профілю «5-6»; прапорці «нетипово для сім'ї» — l3 sentenceWords z=2.8 (6.5 слова: речення з who/which довші за природою), l4 і l6 readWordsPerScreen z=2.3 (37 слів/екран при межі 40) — сім'я поки складається переважно з 4–5 кл., тож 6 кл. закономірно довший; калібрування — style-eng-g6.
Кожне `build` перебрано через `SLID_LANG.check` (усі перестановки з `extra`, node): l1 — лише «Why do you like maths»; l3 — «Ms Lysenko is the teacher who helps me» і «The teacher who helps me is Ms Lysenko» (обидва в `answer`; питальні порядки відсічено умовою «tells», як verifier-e5s5); l5, l6, l7 — по одному порядку, перша плитка з великої + `keepCase`. `word`: ключі без кінцевого знака; who/that, which/that — обидва в ключі; mustn’t + `contractions: true` (приймає must not); у l4 word умова «Write must or mustn’t» відсікає can’t.
**who vs that не оцінюється:** у gaps лише who | which (that ніде не пастка; у fbText — «that is also correct»). **must / should не стоять в одному виборі** (CD: must — і для заохочення «You must try…»): у l4 лише must | mustn’t, у l5 лише should | shouldn’t; mustn’t vs don’t have to — лише з явною позначкою «rule» / «your choice» на екрані; have to ніде не хибний варіант.
Авторське право: WebSearch трьох найдовших фраз («we didn’t just listen. We did things together», «At my school, we must wear a uniform. We must be on time», «I’m new, and maths is difficult for me. What should I do») — збігів немає.

**Джерела (curl):**
- CD Grammar Must — https://dictionary.cambridge.org/grammar/british-grammar/must («Must expresses strong obligation…», «must not … not permitted», «Must and must not often occur in public signs and notices… rules», must для заохочення «You must try some of this chocolate cake»; «Not: Do you must…»).
- CD Grammar Have (got) to — https://dictionary.cambridge.org/grammar/british-grammar/have-got-to-have-to («Must not and don’t have to/haven’t got to have different meanings… forbidden … not necessary»).
- CD Grammar Should — https://dictionary.cambridge.org/grammar/british-grammar/should («We often use should to give advice»).
- CD Grammar Relative pronouns — https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns (who — people; which — animals and things; that — people, animals and things, defining only; «which or that, not what»).
- OALD experiment_1 (collocations: do / carry out / conduct an experiment) — https://www.oxfordlearnersdictionaries.com/definition/english/experiment_1; OALD test_1 («(British English also) to do a test») — https://www.oxfordlearnersdictionaries.com/definition/english/test_1.
- Рівні CD (https://dictionary.cambridge.org/dictionary/english/<слово>): A1 — boring, interesting, exciting, difficult, homework, test, group, computer; A2 — geography, useful, advice, uniform, project (school), poster, explain, worry, shout, classmate, pupil, quiet; A2/B1 — amazing; B1 — rule, experiment, timetable (одне значення), helpful (не вжито); B2 — corridor (тому не вжито: «in the classroom»). rule, experiment (B1) — слова теми, введено прикладом на екрані перед завданням.
- BrE: maths — CD «UK (US math)»; break — e5s2; form tutor (CD «UK») — не вжив, не потрібне. IT — CD «abbreviation for information technology».
- Наголос (CD UK): geography /dʒiˈɒɡ.rə.fi/ → ge|+og|ra|phy; useful /ˈjuːs.fəl/; difficult /ˈdɪf.ɪ.kəlt/; experiment /ɪkˈsper.ɪ.mənt/ (лише `<u>` в info); усі слова `stress` підкреслено в info того ж уроку.
- Факт про Україну: Kyiv on the Dnipro, «the Dnipro» з артиклем — facts/eng.md №13 (уже verified). Інших фактів про країни немає.

**Герої:** Andrii (Kyiv), Ms Lysenko — його вчителька англійської; Bohdan (maths, never late — як e5s2l4), Daryna (geography, maps і гори — узгоджено з e5s9), Zoriana (IT) — його клас; Emma — школа в Англії з формою, не любить maths (як e5s2); Taras і Yaryna — Lviv, Taras фотографує; **новий герой Kyrylo** — новий учень класу Andrii (Kyiv), любить history. Andrii — без шкільної форми (канон). Зовнішність нікого не описано. Uliana і Freddie не вжито.

**Спірне для верифікатора:**
1. l3 match: слово classmate раніше не траплялося — пару видно з визначення на правому боці й виключення (teacher, timetable, map — знайомі).
2. l6 текст для читання має неправильні форми поза списком info (found, drew, wrote, told, said, learnt) — лише для читання; оцінюються was, had, made, did, went, saw (у списку info) і played/loved.
3. l4 gaps «You don’t have to use phones…» буквально теж правда — відсічено позначками «it’s a rule» / «it’s your choice» в умові.
4. l2 gaps «Every Friday we {*do|doing}» — пастка не are doing (щоб не відкривати «this term we’re doing…»).

### Верифікація (verifier-e6s6, 2026-11-20)
**Вердикт: verified, 7/7 уроків.** Звіт — reports/verify/e6s6.md.
- Відповіді на «Спірне»: 1) classmate у l3 match — прийнятно: CD A2, пару видно з визначення й виключення. 2) Неправильні форми в тексті l6 лише для читання — D-019 ✅. 3) mustn’t / don’t have to відсічено позначками rule / your choice — ✅. 4) {*do|doing} — ✅.
- Правка 1 (блокувальна, герой): l7 T3 «IT is the subject ___ Kyrylo likes best» суперечила l3 (у Kyrylo улюблений предмет — history) → «History is the subject…», hint/fbBad/fbText узгоджено.
- Правки 2–3 (мова): l2 match fbBad «before the gap» → «the last word of each half»; l2 info «for some days» → «for a few days».
- Перебір build через SLID_LANG.check (усі підмножини й перестановки з extra): у l1, l5, l6, l7 приймається по 1 порядку, у l3 — 2 (обидва в `answer`).
- Джерела форм: CD Grammar must / have-got-to / should / relative-pronouns; OALD must_1, should, who, which, that_2; наголос — CD + OALD + Wiktionary. Факт «Kyiv on the Dnipro» — en.wikipedia Kyiv + ЕСУ article-11194. WebSearch 10 фрагментів — збігів немає.
- Рекомендація оркестратору: requires += e6s3l4 (irregular verbs; plan-eng-g6 §61). Не блокує: опора є в info l6.
- Плейтест не запускався (у контейнері немає модуля playwright, build ще не зроблено) → CI після build.
