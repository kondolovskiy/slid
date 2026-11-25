---
claimed_from: todo
claimed_at: 2026-11-25T12:39:12.740Z
id: write-eng-g9-e9s4
type: write-section
subject: eng
grade: 9
section: e9s4
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e9s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Медіа: Інтернет, ТБ, радіо» (Англійська мова, 9 клас)

## З програми
- Тема й підтеми: Інтернет, телебачення і радіо; спілкування в мережі; улюблена передача — МП-ІМ с. 33 (розд. 5.2.3), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл., МП-ІМ с. 3).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): reported yes / no and wh- questions: She asked if / whether I liked…, He asked where I lived (B1: Reported questions) — нове; reported requests and commands: told / asked + object + to-infinitive (B1) — нове; reported thought with wonder (B1) — нове; повторення: reported statements (e8s3), Present Simple with reporting verbs (B1).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** Порядок слів у непрямому питанні (без інверсії й без do) — головна пастка; asked if / whether — обидва в ключі; backshift необов'язковий, якщо досі правда → обидва. programme — BrE (computer program — і в BrE; glossary). Онлайн-спілкування — безпека й ввічливість; без справжніх соцмереж, каналів і блогерів. Підтеми: Інтернет, ТБ і радіо, спілкування в мережі, улюблена передача (с. 33). `requires`: e6s8l5, e5s2l3, e5s2l5, e4s3l6; після появи e8s3 — уроки reported statements (оркестратор). Герої — та сама серія, що в 4–6 кл., на 5 років старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g9-e9s4.js`: `SLID.section("eng", { id: "e9s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e9s4` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e9s4, 2026-11-25. Файл `content/eng/g9-e9s4.js`, статус draft, 7 уроків (6 + boss), 8–11 екранів.
- l1 TV, radio and podcasts (лексика: channel, radio station, programme, podcast, presenter, the news, weather forecast, quiz show, talk / chat show, documentary, series, episode); l2 My favourite programme (says / tells me + present, «be on»; читання 2 екрани); l3 Chatting online: safe and polite (password, username, profile, block, report, post; імперативи — повторення e5s2l5); l4 reported questions (if / whether, wh- + порядок підмет + дієслово); l5 reported requests (told / asked + object + (not) to + verb; question vs request); l6 I wonder what… (wonder / wondered, will → would; читання 2 екрани); l7 boss (7 завдань, pre l1–l6).
- `requires`: e4s3l6, e5s2l3, e5s2l5, e6s8l5 (план), e8s3l4, e8s3l5 (reported statements, said / told — звірено з файлом e8s3).
- Назва розділу — «the internet» з малої, як у verified e8s3 (OALD, CD); у plan.js «the Internet» — за потреби вирівнює куратор плану (рядок в inbox).
- **Джерела граматики:** CD Grammar «Reported speech: indirect speech» — питання if / whether, statement order, без «?», накази to-infinitive, «warned us not to», Present simple reporting verb, No backshift, will → would: https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech ; ask + object + to-inf.: https://dictionary.cambridge.org/grammar/british-grammar/ask ; tell + object + to-inf., «Not: They said us to come»: https://dictionary.cambridge.org/grammar/british-grammar/tell ; wonder + question word / if / whether: https://dictionary.cambridge.org/dictionary/english/wonder
- **Лексика й наголос (CD, curl):** chat show «(US also UK talk show)» — https://dictionary.cambridge.org/dictionary/english/chat-show ; OALD chat show «(also talk show North American English, British English)» — talk show (як у plan.js) у BrE допустиме, у теорії дано обидва. Наголос: pre'senter, docu'mentary, 'episode, 'podcast, 'channel, 'programme (CD presenter, documentary, episode, podcast, channel, programme). programme — BrE (glossary).
- **TQ-144 (backshift):** теперішня форма в reported question / statement ніде не хибний варіант; у l4 екран 7 (multi) «asked if I like» — у ключі, правило — l4 екран 5. У gaps, де досі правда (where the office is, how old I am), теперішньої форми серед варіантів немає. В `word` / build — плитки лише з минулим.
- **Друга правильна:** if / whether — ніколи в одному пропуску, у `word` (l4, boss) обидва; told / asked не протиставлені; дистрактори — неможливі форми (said us to, to don’t, інверсія, did). build: l2 — два порядки (…her favourite programme is Music Box / …Music Box is her favourite programme); l5 — put our hands up / put up our hands; «not to» — одна плитка (щоб не було «to not talk»). l6 build навмисно з what time + starts (варіант «who the presenters will be» мав би другий порядок «who will be the presenters»).
- **Опори (D-019):** l2 екран 11 «it’s on» — правило «be on» на екрані 6; l3 multi / sort — поради на екранах 3 і 5; l5 sort — правило «A question or a request?» (екран 7); boss — лише з уроків.
- **Вигадане:** Quiz Time, Music Box, Bright Radio, School 5 Radio, шкільний подкаст Andrii; телестудія в Kyiv без назви; Lviv Today і School 5 News — з e8s3. Справжніх ЗМІ, соцмереж, блогерів немає. Безпека — порадами (незнайомий гравець просить пароль за «free coins», Dmytro блокує й каже мамі).
- Новий герой: Mr Moroz (менеджер телестудії, Kyiv). Деталі: Kyrylo слухає history podcast; Daryna дивиться Music Box із сестрою; Andrii — chess podcast; Bohdan — Quiz Time; Mariia — комікс про детектива в онлайн-клубі (Polina, Zofia, Roksolana коментують); у школі Taras починається шкільне радіо.
- validate --section e9s4: 0 помилок, 0 попереджень. stats: e9s4l2 readWordsPerScreen 48 — у межах профілю 7–9 (≤ 50), «нетипово для сім'ї» z = 2,1: урок із читанням (2 екрани тексту), як e7s7l6; скорочено, далі — style-sync.
- Build не запускав.
