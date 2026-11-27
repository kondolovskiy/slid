---
claimed_from: review
claimed_at: 2026-11-25T12:55:51.166Z
id: write-eng-g9-e9s5
type: write-section
subject: eng
grade: 9
section: e9s5
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: verifier-e9s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Молодіжна культура» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: течії молодіжної культури; молодіжні організації; клуби за інтересами — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): relative clauses with whose, where, when, why (B1: Relative — with ‘whose’, ‘where’, ‘why’, ‘when’) — нове; повторення: defining і non-defining (e8s4), who / which / that (e6s6l3).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** where vs which: «a club where we meet» і «a club which meets…» — обидва правильні з різною будовою → контекст; in which — не для 9 кл. Plast і the Scouts, Duke of Edinburgh’s Award — дати й факти з двох джерел (Plast: en.wikipedia — «founded in 1911 in Lviv», офіційно 12 April 1912; дати в джерелах різні → «in Lviv more than 100 years ago» або обидві з поясненням); течії молодіжної культури — без стереотипів і оцінок субкультур, без політики. Функції: приймати чи відхиляти пропозицію, аргументувати вибір (с. 33). `requires`: e6s6l3, e5s1l3, e5s7l1, e5s6l1; після появи e8s4 — урок non-defining (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s5.js`: `SLID.section("eng", { id: "e9s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e9s5, 2026-11-25.** `content/eng/g9-e9s5.js` — 7 уроків (6 + boss), status draft; validate --section e9s5: 0 помилок, 0 попереджень; stats — без «нетипово для сім'ї» (l6 після переробки: gradedShare 0.7, typeVariety 5). Euphony для eng не застосовна (лише підказка).
- l1 Youth culture (into, fan, gamer, skater, vlogger, hang out, trend); l2 Plast, the Scouts, DofE (читання 2 частини; повтор who/which/that — e8s4l3); l3 where / when + where vs which; l4 whose (≠ who’s); l5 the reason why, that’s why + вибір і відповідь на запрошення; l6 постер і запрошення (читання 2 частини); l7 boss, 9 завдань з `pre`.
- `requires`: e6s6l3, e5s1l3, e5s7l1, e5s6l1, e5s6l5 (yes/no на пропозицію), e7s6l1 (after-school clubs, member, join), e8s4l3, e8s4l4 (non-defining з комами — урок уже є, тож додав сам).

**Факти (≥ 2 джерела):**
- Plast — Scout organisation of Ukraine; перші групи в Lviv 1911, офіційно 12 April 1912 → в уроці обидві дати з поясненням + «more than 100 years ago»; назва від plastuny (козацькі розвідники); табори й походи — https://en.wikipedia.org/wiki/Plast (infobox «First groups in 1911, officially established on 12 April 1912»); https://uk.wikipedia.org/wiki/Пласт_(організація) («засновано — осінь 1911», «перша присяга — 12 квітня 1912», походження назви від пластунів); FACT verifier-curate-eng-plan-g7-9 в inbox.
- The Scouts: Baden-Powell, табір на Brownsea Island 1907, «about twenty boys» — https://en.wikipedia.org/wiki/Brownsea_Island_Scout_camp; https://en.wikipedia.org/wiki/Robert_Baden-Powell,_1st_Baron_Baden-Powell; uk.wikipedia Пласт («скаутський рух Робертом Бейден-Пауелом у 1907 році»).
- DofE: UK, 1956; 14–24 (завершити до 25-річчя); Bronze / Silver / Gold; volunteering, physical, skills, expedition (+ residential на Gold); Bronze expedition 2 дні / 1 ніч — https://en.wikipedia.org/wiki/The_Duke_of_Edinburgh%27s_Award; https://www.royal.uk/duke-edinburghs-award; https://www.pkc.gov.uk/article/17414/What-is-involved-in-The-Duke-of-E... (WebSearch; dofe.org з контейнера — 403).
- «Plast has members in other countries too» (l4 match) — en.wikipedia Plast: «3,000 members in other countries» (2006), розділ про діаспору.
- Опитування в l5 (41/27/20/12) — вигадане опитування шкільної газети Andrii, подано як таке.

**Форми й граматика:** CD Grammar «Relative pronouns» (when / where / why для defining; leave out лише object) — https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns; «Relative clauses: defining and non-defining» — …/relative-clauses-defining-and-non-defining; «Whose» (people, animals, things; ≠ who’s) — …/whose; «When» (the week when…, non-defining «11 am, when…») — …/when. Наголос: CD teenager ˈtiːnˌeɪ.dʒə, culture, computer, vlogger, member, volunteer ˌvɒl.ənˈtɪə, expedition ˌek.spəˈdɪʃ.ən, organisation (headword organization, BrE -ise) — https://dictionary.cambridge.org/dictionary/english/<слово>. hang out — CD «to spend a lot of time in a place or with someone»; gamer, skater, vlogger, youth club — CD.

**Друга правильна відповідь (перевірено):** that при when / why не дається хибним варіантом; у `word` на when і why — ["when","that"], ["why","that"]; where vs which — лише з неперехідними дієсловами без прийменника в кінці (skate, play, meet) або з дієсловом одразу після (which meets); in which не вчимо й не даємо. build: l3 — 2 порядки, l4 — 2 порядки, boss T8 — питання й ствердження (кінцевий знак необов'язковий). `word` «Would you ___ to come» — like, love, care.

**Спірне для верифікатора:**
- l2 info — 8 пунктів словника (≈ 70 слів, більше за орієнтир 60 для info); ділити не став, бо всі слова потрібні для читання.
- l4 match «Plast is an organisation whose ideas started the Scouts» граматичне, але хибне за фактом (з l2: Scouts — Baden-Powell) — пара однозначна лише за змістом.
- l6 hyp про початок постера — оцінка стилю, тому `hyp`.
- l2 final «I’m a {member|leader}» — відсікає наступне речення «Our leader is Mr Price».

**Опора D-019:** l2 multi — на екрани 4–5 (обидві частини тексту); l6 match і Marko — на постер (екран 3); boss T3 — l2 екран 4; l4 match — правило where/when/whose/which (l3, l4) + факти l2.

**verifier-e9s5, 2026-11-26.** Verified, 7 уроків. Звіт: reports/verify/write-eng-g9-e9s5.md. 7 правок у змісті, з них 4 критичні:
- build l3 і l4 — додано питальні порядки;
- match l4 — пару з whose замінено на «who took about twenty boys…»;
- word l6 — додано «want».
Ще 3 правки: info l1 і l2 розділено (ліміт 60 слів); у читання l2 додано «started in the UK». validate: 0/0. Плейтест — у CI.
