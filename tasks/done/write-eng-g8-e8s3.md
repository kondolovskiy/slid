---
claimed_from: todo
claimed_at: 2026-11-25T12:19:49.305Z
id: write-eng-g8-e8s3
type: write-section
subject: eng
grade: 8
section: e8s3
depends_on: [curate-eng-plan-g7-9, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: done
claimed_by: writer-e8s3
created: 2026-11-19
source: design-eng
---
# Написати розділ «ЗМІ: Інтернет і преса» (Англійська мова, 8 клас)

## З програми
- Тема й підтеми: Інтернет; преса; періодичні видання — МП-ІМ с. 32 (розд. 5.2.2), граматика — с. 34–35.
- Рівень: B1 (наприкінці 9 кл.).
- Граматика (план 7–9 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g7-8-9.md §2; позиції — МП-ІМ с. 34–35, B1): Present Continuous passive: A new park is being built (B1: Passives — Present continuous) — нове; reported statements з узгодженням часів: She said (that) she was tired (B1: Reported statements) — розширення e6s8l5 (там без backshift); повторення: Present Simple і Past Simple passive (e6s3l2, e6s7l3, e7s7), say / tell (e6s8l5).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g7-8-9):** Підтеми — Інтернет, преса, періодичні видання (с. 32); «види дозвілля» перенесено в e8s2. Backshift необов'язковий, якщо сказане досі правда («She said she likes / liked jazz») → обидва в ключі або контекст про минуле; said vs told + object. the Internet / the internet — одне написання на предмет (звірити CD/OALD, TERM в inbox). Справжні ЗМІ не оцінювати як «правдиві / неправдиві»; новини — вигадані. Функція: критично оцінювати інформацію (с. 3; с. 28 — чи стаття відповідає темі). `requires`: e6s8l5, e6s3l2, e6s7l3, e4s6l2; після появи e7s7 — урок Past passive (оркестратор). Герої — та сама серія, що в 4–6 кл., на 4 роки старші, ніж у 4 кл. (канон — memory/short/inbox.md NOTE (герої), reports/verify/plan-eng-g6.md §7); одне ім'я — одна людина.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g8-e8s3.js`: `SLID.section("eng", { id: "e8s3", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e8s3` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e8s3, 2026-11-25.** Файл `content/eng/g8-e8s3.js`, 7 уроків (6 + фінал e8s3l7, значок e8s3boss «Young reporter»), status draft.
- l1 Newspapers, magazines and news websites — лексика преси (newspaper, magazine, news website, daily/weekly/monthly, the press, headline, article, journalist, reporter, photographer).
- l2 Is it true? Reading the news online — 4 питання для перевірки новини, fact / opinion, чи стаття відповідає заголовку (МП-ІМ с. 28). Без страшилок: вигаданий пост «schools closed», Оксана перевіряє шкільний сайт.
- l3 A new park is being built — Present Continuous passive; контраст is made / was built / is being repaired; заперечення й питання.
- l4 She said she was tired — reported statements з backshift (am/is → was, are → were, Present Simple → Past Simple, am reading → was reading, can → could); екран 6 «Is it still true?» — backshift необов'язковий, екран 7 multi — обидві форми в ключі.
- l5 He told us that… — said / told + person, said to + person (згадано), we → they, our → their.
- l6 Our school newspaper — стаття «A new life for our library» (≈ 170 слів, 2 екрани), будова статті, order, фінал — допис Оксани.
- l7 boss — 7 завдань, по одному на урок (l5 — двічі).
**requires:** e4s6l2, e6s3l2, e6s7l3, e6s8l5. Після появи e7s7 — додати урок Past passive (оркестратор).
**Друга правильна відповідь (backshift):** у `gaps` варіант без backshift (is, loves, doesn't, can) ніде не дається як хибний — дистрактори граматично неправильні (were для he, am, couldn't to…); у `word` (l4 #9, l7 T4) контекст «потім знайшов», «today he's free» — сказане вже неправда. Кожне `build` перебрано через `SLID_LANG.check` з усіма підмножинами плиток — рівно один прийнятий порядок. `word` l1 #8 — journalist / reporter / writer.
**Джерела:**
- Backshift і «still true»: CD Grammar «Reported speech: indirect speech» — https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech
- Present continuous passive (am/are/is being): CD Grammar «Passive: forms» — https://dictionary.cambridge.org/grammar/british-grammar/passive-forms
- Форми: build–built–built, write–wrote–written, tell–told, say–said (OALD build_1, write_1, tell_1, say_1); show має shown/showed — у вправах не взято; shelf → shelves (CD shelf).
- Наголос (CD, UK): ˌmæɡ.əˈziːn, ˈdʒɜː.nə.lɪst, ˈnjuːzˌpeɪ.pər, rɪˈpɔː.tər, ˈɑː.tɪ.kəl, ˈhed.laɪn, ˈweb.saɪt, əˈpɪn.jən — https://dictionary.cambridge.org/dictionary/english/<word>
- Рівні CD: headline, article, journalist, reporter, press, monthly, opinion, canteen B1; magazine, weekly, daily, fact, shelf, borrow, share A2; editor, source, survey B2 і fake C2 — не вжито.
- the internet з малої: OALD internet «(also Internet) (usually the internet)», CD — заголовне слово internet, приклади «the internet»; так і в e6s7l3.
**Факти:** справжніх ЗМІ, назв видань і дат немає — Lviv Today, School 5 News, усі новини вигадані.
**Герої (8 кл., на 4 роки старші):** Taras — фотограф шкільної газети (Lviv, School 5 News), Myroslava пише статті; Ms Kvitka (head teacher) і Mr Pavliuk (librarian) — нові, школа Тараса; Andrii пише статтю для шкільної газети (Kyiv), Ms Lysenko веде газету; Daryna — новий фотограф газети Andrii; Zoriana пише про IT/роботів; Kyrylo читає history magazine; Bohdan «too tired/busy»; Mariia малює комікс для журналу; Emma читає weekly magazine про тварин; дідусь Emma читає газету; Dmytro (10) — пост «schools closed».
**Сумнівне / для верифікатора:** l1 longWordShare 0,179 (stats: «нетипово для сім'ї», z = 3,9) і l7 (z = 2,1) — тема: newspaper, magazine, photographer, journalist (3+ склади) не замінити; validate без попереджень. l4 #5 «that day» (today → that day) — у тексті, не в пропуску й не пояснено. l7 T6 пастка `we` («The players said we were tired») — граматично можливе, але суперечить завданню «Report their words». l5 #3 «said to us» — лише згадано, не оцінюється. Термін — «third form» (TQ-128, як 6 кл.), хоча e7s2 (draft) пише «past participle».

**verifier-e8s3, 2026-11-25.** Звіт reports/verify/write-eng-g8-e8s3.md. 7 уроків → verified. Правки: 2 хибні варіанти gaps, що були другою правильною відповіддю (l3 екран 10 «was built» → «are being built»; l6 екран 8 «was made» → «are being made»). TQ-144 внесено в docs/teacher-questions.md. requires: g7-e7s7.js немає — e7s7 додати пізніше. Сумнів автора щодо фіналу T6 (пастка «we») знято: рушій вимагає всіх tiles.
