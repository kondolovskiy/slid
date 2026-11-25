---
claimed_from: todo
claimed_at: 2026-11-25T12:34:54.304Z
id: write-eng-g9-e9s1
type: write-section
subject: eng
grade: 9
section: e9s1
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e9s1
created: 2026-11-19
source: design-eng
---
# Написати розділ «Особистість і автобіографія» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: особисті дані; індивідуальність людини; формування особистості; автобіографія — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): used to vs would для повторюваних дій у минулому (used to — B1; would для звичок — **наш**: інвентар дає Would лише для imagined situations і ввічливості) — розширення e7s5; future in the past: was going to, would — I knew I would… (B1: Future from a point in the past) — нове; compound adjectives of personality: easy-going, hard-working, self-confident (B1: Compound adjectives) — розширення e8s4; повторення: narrative tenses (e8s5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** would — лише з діями, не зі станами («I would have long hair» — ні, used to — так); used to / would для дій — часто обидва → обидва в ключі. Анкета (date of birth, nationality, place of birth) — **лише за героєм, не «впиши свої дані»**: нових полів з персональними даними дітей немає (AGENTS.md §4 п. 12); автобіографія — героя. Функції: надавати інформацію й уточнювати (с. 33). `requires`: e6s1l4, e6s4l3, e5s1l1, e4s1l6; після появи e7s5 — урок used to, e8s5 — Past Perfect (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s1.js`: `SLID.section("eng", { id: "e9s1", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --section e9s1` — 0 помилок; попередження виправлено або пояснено.
- [x] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [x] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e9s1, 2026-11-25.** Файл content/eng/g9-e9s1.js — 7 уроків (6 + фінал), status draft; `node tools/validate.mjs --section e9s1` — 0 помилок, 0 попереджень.

Уроки: l1 «Name, date of birth, nationality: filling in a form» (11 екр.); l2 «Easy-going or hard-working? Personality» (10); l3 «What shapes us? Family, friends and choices» (9); l4 «When I was little, I used to… and I would…» (9); l5 «I knew I was going to be a…: the future in the past» (10); l6 «My life story: a short autobiography» (10; текст Оксани — 3 екрани «уривок + питання»); l7 boss «The club book: our life stories» (8 завдань, `pre` на кожен урок).

**requires:** e4s1l6 (анкета 4 кл.), e5s1l1, e5s8l2 (дати), e6s1l4 і e6s1l6 (характер, be like), e6s4l3 (could), e7s5l3 (used to — повторення; would для звичок подано як нове в l4), e8s4l5 (compound adjectives — розділ e8s4 поки draft). e8s5 (Past Perfect, narrative tenses) ще не існує — оркестратору додати урок Past Perfect e8s5 після появи; l6 спирається на нього як на повторення (Past Perfect лише в 2 пропусках і pick).

**Особисті дані:** анкета — вигаданого героя Stepan Lytvyn; автобіографії — Oksana, Emma, Taras; учень своїх даних ніде не вводить.

**Джерела форм і значень (curl, 2026-11-25):**
- used to (стани й дії) і used to / would для звичок: https://dictionary.cambridge.org/grammar/british-grammar/used-to («We can use used to or would to talk about people’s habits in the past… used to most commonly comes first»).
- would — habitual past лише для дій, не станів («Not: I would live in Melbourne when I was a kid»), і future in the past: https://dictionary.cambridge.org/grammar/british-grammar/would
- was going to / would як future in the past: https://dictionary.cambridge.org/grammar/british-grammar/future-in-the-past
- make someone do (без to): https://dictionary.cambridge.org/dictionary/english/make (make verb FORCE, B1); teach someone to do: https://dictionary.cambridge.org/dictionary/english/teach («Who taught you to cook?»).
- Наголос і значення (CD, UK): easy-going ˌiː.ziˈɡəʊ.ɪŋ, hard-working ˌhɑːdˈwɜː.kɪŋ, self-confident ˌselfˈkɒn.fɪ.dənt, open-minded ˌəʊ.pənˈmaɪn.dɪd, bad-tempered ˌbædˈtem.pəd, kind-hearted ˌkaɪndˈhɑː.tɪd, personality ˌpɜː.sənˈæl.ə.ti, nationality ˌnæʃ.ənˈæl.ə.ti, autobiography ˌɔː.tə.baɪˈɒɡ.rə.fi, influence ˈɪn.flu.əns, patient ˈpeɪ.ʃənt, character ˈkær.ək.tər, role model ˈrəʊl ˌmɒd.əl, goggles ˈɡɒɡ.əlz — https://dictionary.cambridge.org/dictionary/english/<слово> (easy-going, hard-working, self-confident, open-minded, bad-tempered, kind-hearted, personality, nationality, autobiography, influence, patient, character, role-model, goggles). Усі compound adjectives у CD — з дефісом.
- Дата «14 March 2011», читання «the fourteenth of March» — glossary/eng.md (CD Grammar «Dates»).
- Факт про Ярославу Магучіх (з Дніпра, high jumper) — лише як «role model» Мирослави; формулювання з e6s4/e7s5 (там джерела).

**Друга правильна відповідь — перевірено:** усі `build` перебрано через SLID_LANG.check з пастками (усі перестановки): l4 — два порядки (We would… / Every morning we would…), фінал T7 — два порядки (While she… Emma / While Emma… she); l6 і T7 — кома в плитці «training,» / «swimming,» (PITFALL verifier-e7s6). Пропуски used to / would: де обидва граматичні — `multi` (l5, T5) або `word` з обома в `answer` (l4, l6); у `gaps` хибні варіанти — лише неможливі форми (use to без did, would to, would won, was used to). Пропуски Past Continuous — без Past Simple серед дистракторів (PITFALL e7s5). Future in the past — лише в історіях, де подія вже минула (тож will справді хибне).
- `word` l2 «He’s very ___» (протилежність shy): ключ self-confident, confident, outgoing, sociable; l3 «Chess made Andrii ___»: patient, calm, relaxed; l1 Nationality для Emma: British, English (обидва правильні, e5s10).

**Спірне / для верифікатора:**
- l4 pick «my grandma [would] have a dog» — would зі станом (CD would «Not: I would live…»); фраза могла б читатися як умовний спосіб, але контекст «When I was little» — минуле.
- l3 «make someone + verb» подано разом з «make + adjective» (Chess made me patient) — 2 нові шаблони; інфо-екран ≈ 60 слів.
- stats: e9s1l2 longWordShare 0.165 (у межах профілю ≤ 0.18), але «нетипово для сім'ї» (z=2.7): тема уроку — personality, self-confident, open-minded тощо; евристика складів рахує складні прикметники як довгі. Інших прапорців немає.
- Нові деталі героїв (NOTE в inbox): Stepan Lytvyn — новий член penfriend club, народився 14 March 2011 у Dnipro; Oksana народилася в Poltava (у лікарні, де працює мама), почала карате в дев'ять, перед змаганням у Poltava (2-ге місце, e7s5) травмувала руку, у дитинстві хотіла бути nurse, тепер думає про vet; 15 дерев дідуся Mykola (e7s1: 13 у 7 кл.); Taras народився в Lviv, у дитинстві був сором'язливий, хотів бути футболістом; Andrii — літа в Chernihiv, рибалка з дідом Vasyl, бабуся Nina — вареники з вишнями; Emma — у шість років вступила в swimming club, у першому запливі загубила окуляри; Tom хоче бути барабанщиком; Zlata грає на бандурі на концертах.
- Рік народження Stepan (2011) неявно задає рік серії (9 кл. ≈ 2026/27) — якщо це небажано, прибрати рік з анкети.
