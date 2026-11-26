---
claimed_from: todo
claimed_at: 2026-11-26T10:37:10.467Z
id: write-eng-g11-e11s1
type: write-section
subject: eng
grade: 11
section: e11s1
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
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
**writer-e11s1, 2026-11-26.** Файл `content/eng/g11-e11s1.js` — draft, 7 уроків (6 + фінал `e11s1boss` «Fair Player»). `validate --section e11s1` — 0 помилок, 0 попереджень; `stats --subject eng` — у e11s1 прапорців «нетипово для сім'ї» немає. Build не запускав. Усі `build`, `gaps`, `word`, `match`, `stress`, `pick` перевірено скриптом через `SLID_LANG.check(solution)`; порядки `build` перебрано вручну.

**Уроки:** l1 Young people’s rights and responsibilities (Конвенція ООН, right to / responsible for, it’s up to, take responsibility for); l2 Good manners (manners, behave/behaviour, jump the queue, eye contact, Would you mind + -ing / Do you mind if I…, відповідь «No, not at all»); l3 reported speech: Present Perfect / Past Simple → Past Perfect, will → would, слова часу й місця; l4 reporting verbs + that: admit, deny, promise, complain, explain / agree, insist, suggest (+ -ing; explain to); l5 tolerance, kindness, charity (raise money for, donate to, fundraiser, volunteer, make a difference, judge; International Volunteer Day); l6 housework, справедливий поділ, дискусія в сім'ї Оксани (for one thing / for another / that’s why; Could I just add something?, That’s a fair point, Fair enough, Let’s get back to…; rota, take turns, do your fair share); l7 фінал — 5 завдань + текст читання «The missing money box» (3 уривки, ≈ 415 слів; П1407 с. 21: 400–450) + питання про головну думку.

**requires:** e6s8l5, e7s1l1, e8s3l4, e8s3l5, e9s4l4, e9s4l5 (з задачі; усі вже існують) + e9s9l3 (Sorry to interrupt / Can I add something), e10s1l1 (tolerant), e10s1l6 (blame, misunderstanding, Let me finish).

**Факти (≥ 2 джерела):**
- Конвенцію ООН про права дитини ухвалено 20 November 1989; Україна ратифікувала 1991 (27.02.1991, Постанова ВР № 789-XII); дитина — кожен до 18 років; права на освіту, відпочинок і гру, висловлювати думку й бути почутим — facts/hist.md №26 (https://zakon.rada.gov.ua/laws/show/789-12 , https://zakon.rada.gov.ua/laws/show/995_021); https://en.wikipedia.org/wiki/Convention_on_the_Rights_of_the_Child ; https://uk.wikipedia.org/wiki/Конвенція_ООН_про_права_дитини (54 статті; ст. 12–17, 28–31). У тексті уроку — лише рік 1991 (uk.wiki всередині статті дає і 27, і 21 лютого).
- International Volunteer Day — 5 December, запровадила Генасамблея ООН 1985 (рез. 40/212 від 17.12.1985), в Україні відзначають — https://en.wikipedia.org/wiki/International_Volunteer_Day ; https://www.ukrinform.ua/rubric-society/4066311-v-ukraini-vidznacaut-miznarodnij-den-volontera.html
- unicef.org і ohchr.org з контейнера не відкриваються (getaddrinfo / 000).

**Форми й граматика (URL):**
- Backshift: Present Perfect / Past Simple → Past Perfect, will → would, yesterday → the day before, tomorrow → the next / following day, here → there; «No backshift», якщо досі правда — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech
- Past Simple у непрямій мові часто лишається (British Council LearnEnglish Team) — https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/reported-speech-statements → l3 екран 6 `multi` з обома, Past Simple ніде не хибний.
- suggest + that (+ should) / + -ing; «Not: suggested me to apply», «Not: suggested to wait» — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/suggest
- explain to someone, «Not: explain me» — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/explain ; reporting verbs (admit, agree, complain, explain, insist, promise, suggest) — https://dictionary.cambridge.org/grammar/british-grammar/reporting-verbs
- Would you mind + -ing; Do you mind if I + present; відповідь «No, not at all» = I don’t mind — CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/mind
- Словник (CD, https://dictionary.cambridge.org/dictionary/english/<word>): responsibility (B2, …ˈbɪl…), responsible (…ˈspɒn…), respect, education, tolerance (C2, ˈtɒl…), charity (ˈtʃær…), volunteer (B2, …ˈtɪər), donate (B2, UK dəʊˈneɪt), fundraiser, raise money, make a difference (B2), manners (B2), behave, behaviour (…ˈheɪ…), polite, rude, queue (mainly UK), jump the queue, interrupt, eye contact (C2), washing-up (A2), chore (C1), rota (UK), take turns (B2), fair share, for one thing, make a point, point (B1), fair enough (B2), get back to («start talking about something again»), deny (B2), insist, admit, complain, explain; «decision is up to you» (CD up-to); take responsibility for — OALD https://www.oxfordlearnersdictionaries.com/definition/english/responsibility
- hoover — у CD це торговельна марка → у тексті «vacuum the floor».

**Друга правильна відповідь — як закрито:** форма без зміни часу (has/have, will, are) ніде не хибний варіант — хибні лише неграматичні (had work, will be show, would to, has found з they, are have); l3 build — обидва порядки з «the next day»; l4 build — «He insisted that Ostap…» у ключі (як e10s1); l1 word — «the blame» у ключі; l2 word — «sit down» у ключі; у gaps на reporting verbs цитата однозначно задає дієслово (Yes, it was me / No, I didn’t / The equipment is so old); suggest that + базова форма / Past Simple не перевіряються (лише + -ing і that … should у multi); promise / agree / deny + to / -ing пасткою не зроблено («agreed to take turns» — правильний, «denied to» — хибний).

**Опори (D-019):** l1 #5 gaps ← #3; l1 #8 word ← #6; l3 #4 gaps ← #3; l3 #9 gaps ← #7; l3 фінал «the next day» ← intro (Tomorrow…); l4 #6 gaps ← #3; l4 фінал suggest/explain ← #7–8; l5 #9 word ← #6; l6 фінал (reporting verbs) ← l4; фінал Task 5 «Could I just add something?» ← l6 #5; Reading part 3 «had wanted» ← l3.

**Сумнівне / для верифікатора:** l2 #11 «Do you mind if I sit here?» — коротка стокова фраза, збігається з прикладом CD Grammar «Mind» (6 слів, < 12); l5 «International Volunteer Day … people in Ukraine … celebrate» — Укрінформ «відзначають»; l2 sort «make eye contact» — культурна норма UK/Україна, без порівняння країн; у l1 текст про Конвенцію — без юридичних порад (міжнародне право — e11s7).
