---
claimed_from: todo
claimed_at: 2026-11-19T14:22:10.552Z
id: write-eng-g5-e5s8
type: write-section
subject: eng
grade: 5
section: e5s8
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e5s8
created: 2026-11-19
source: design-eng
---
# Написати розділ «Свята і традиції» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: календар свят в Україні та країнах виучуваної мови; традиції святкування — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): dates, ordinal numbers; was/were. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g5):** «Festivals» (BrE: holidays = канікули); What a …!. `requires` на уроки 4 кл. — за таблицею reports/verify/plan-eng-g5.md §6, коли ті уроки будуть.

- **Специфіка (verifier plan-eng-g5):** festival — B1 (CD): вводити з поясненням; державні дні — public holiday / bank holiday; «Our New Year party was great!» природніше за «Last New Year was great!» (Р2, Р4).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s8.js`: `SLID.section("eng", { id: "e5s8", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s8` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e5s8, 2026-11-19. Файл: content/eng/g5-e5s8.js, 7 уроків (6 + boss), усі `draft`. Зображень немає (img/eng/e5s8 не створено; `match` — текстові «Match the halves.»).

**Уроки (id, назва, типи завдань):**
- e5s8l1 First, second, third: ordinal numbers — choice (hyp), gaps ×2, word, stress, pick.
- e5s8l2 When’s your birthday? Months and dates — choice (hyp), choice, gaps ×2, word, stress, build.
- e5s8l3 A calendar of festivals: Ukraine and the UK — choice (hyp), choice ×2, match, pick, word.
- e5s8l4 How do you celebrate? Traditions — choice (hyp), choice ×2, match, gaps, build, word.
- e5s8l5 Our New Year party was great! Was and were — choice (hyp), choice, sort, gaps ×2, build, pick.
- e5s8l6 Writing a greetings card — choice (hyp), gaps ×2, build, order, word, pick.
- e5s8l7 Our festival calendar (boss) — gaps ×3, choice, match, word; `pre` на l1…l6.

**`requires`:** ["e4s8l2", "e4s8l3", "e4s7l5"] — за reports/verify/plan-eng-g5.md §6 (e5s8 → e4s8, e4s7): e4s8l2 on/in з датами й місяцями, e4s8l3 Happy New Year!/Christmas 25 December, e4s7l5 was/were. Усі id існують (validate 0 помилок).

**Перевірки:** `node tools/validate.mjs --section e5s8` — 0 помилок, 1 попередження: e5s8l3 longWordShare = 0.16 > 0.14 (festival, celebrate, Independence, November, December, Nicholas, holiday — слова теми з програми; як e4s1l6, e4s7l3 — на калібрування style-eng-g4-5). `node tools/stats.mjs --subject eng` — інших прапорців у e5s8 немає. `build` перевірено перебором усіх перестановок плиток (з `extra`) через `LANG.check` (app/lang.js, node vm): l2 #8 — лише «My birthday is on the fifth of May» (`keepCase`, «My» з великої); l4 #8 — «We sing carols on Christmas Eve» і «On Christmas Eve we sing carols» (обидва в `answer`); l5 #8 — лише «Where were you on New Year’s Eve» (`keepCase`); l6 #5 — лише «What a beautiful Christmas tree». `word` — `LANG.wordVerdict`: twelfth («12th» → ні, умова «Write 12th as a word»), twenty-second / twenty second, Christmas, fireworks / the fireworks, wishes, were.

**Джерела форм і фактів (curl / WebFetch, 2026-11-19):**
- festival — B1 (CD «a special day or period, usually in memory of a religious event…») — https://dictionary.cambridge.org/dictionary/english/festival; OALD festival «a day or period of the year when people stop working to celebrate a special event» — https://www.oxfordlearnersdictionaries.com/definition/english/festival. Введено з поясненням на info l3 #3 (Р2 plan-eng-g5). Independence Day «festival» не названо — «special day», «public holiday».
- celebrate B1, tradition B2, firework B1, decorate B1 (CD) — слова теми, пояснено на info (tradition — «something people do every year»).
- bank holiday — OALD «(British English) a public holiday, for example Christmas Day, New Year’s Day» — https://www.oxfordlearnersdictionaries.com/definition/english/bank-holiday; CD bank holiday «UK» — https://dictionary.cambridge.org/dictionary/english/bank-holiday.
- Boxing Day — 26 December, офіційний вихідний у UK: OALD «(British English) the first day after Christmas Day. Boxing Day is an official holiday in the UK» — https://www.oxfordlearnersdictionaries.com/definition/english/boxing-day; CD «in the UK and some other countries, the day after Christmas Day…» — https://dictionary.cambridge.org/dictionary/english/boxing-day.
- Bonfire Night — 5 November, багаття й феєрверки: OALD «the night of 5 November, when there is a tradition in the UK that people light bonfires and have fireworks» — https://www.oxfordlearnersdictionaries.com/definition/english/bonfire-night; CD «the night of 5 November, when many people in the UK light bonfires and watch fireworks» — https://dictionary.cambridge.org/dictionary/english/bonfire-night.
- Pancake Day — OALD «(British English, informal) the day before the beginning of Lent, when people traditionally eat pancakes» — https://www.oxfordlearnersdictionaries.com/definition/english/pancake-day; CD «UK informal» (also Shrove Tuesday) — https://dictionary.cambridge.org/dictionary/english/pancake-day. Дату не даю (рухома).
- Christmas pudding — OALD «traditionally eaten in the UK at Christmas» — https://www.oxfordlearnersdictionaries.com/definition/english/christmas-pudding. Christmas Eve = 24 December — OALD christmas-eve. New Year’s Eve = 31 December — OALD new-year-s-eve. carol — OALD carol_1 «a Christian religious song sung at Christmas». greetings card — OALD greetings-card (facts/eng.md №15).
- Christmas in Ukraine 25 December, New Year’s Day 1 January — facts (verifier-e4s8, inbox 2026-11-19): https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine; UK — https://en.wikipedia.org/wiki/Public_holidays_in_the_United_Kingdom.
- Independence Day of Ukraine — 24 August: https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine (таблиця «24 August — Independence Day… From the USSR in 1991»); https://uk.wikipedia.org/wiki/День_Незалежності_України («державне свято України, яке припадає на 24 серпня»). Під час воєнного стану свята не вихідні (en.wikipedia) — тому в уроці не пишу «people don’t work» про Україну.
- St Nicholas Day в Україні — 6 December, діти знаходять подарунки під подушкою: https://en.wikipedia.org/wiki/Public_holidays_in_Ukraine (список «6 December – Saint Nicholas Day»); https://uk.wikipedia.org/wiki/День_Святого_Миколая (дата 6 грудня; «Святий Миколай кладе подарунок під подушку дитині»); https://en.wikipedia.org/wiki/Saint_Nicholas_Day («In Poland and Ukraine children wait for St. Nicholas… to put a present under their pillows»).
- Святвечір: 12 страв, кутя (зерно, мед, мак), колядки: https://en.wikipedia.org/wiki/Christmas_in_Ukraine («usually includes 12 dishes (the number can vary from 7–17)», «Kutia (a dish of grain, honey and poppy seeds)», «koliadky ('carols')»); https://uk.wikipedia.org/wiki/Святий_Вечір («з дванадцяти різноманітних пісних страв», «співають колядки»). Тому в info — «many Ukrainian families», не «all».
- Наголос (CD UK + OALD BrE): January 1-й склад (/ˈdʒæn.ju.ə.ri/, /ˈdʒænjuəri/); September, October, November, December — 2-й; thirteenth — 2-й (CD /θɜːˈtiːnθ/, OALD /ˌθɜːˈtiːnθ/); thirtieth, twentieth — 1-й (CD /ˈθɜː.ti.əθ/, /ˈtwen.ti.əθ/; OALD /ˈθɜːtiəθ/); festival 1-й. URL: https://dictionary.cambridge.org/dictionary/english/<word>, https://www.oxfordlearnersdictionaries.com/definition/english/<word>. August у `stress` не брав: OALD august без номера веде на прикметник (/ɔːˈɡʌst/).
- fifth, eighth, ninth — A2 (CD «5th written as a word»); twelfth — CD /twelfθ/.
- Дати: «3 March» у записі, «the third of March» усно — Cambridge Grammar «Dates» (A: What date is it? B: It’s the first of June.) — https://dictionary.cambridge.org/grammar/british-grammar/dates; glossary/eng.md «Дати».
- What a …! — Cambridge Grammar «Exclamations» («What a beautiful day!», «What an amazing car!»; без a з незлічуваними: «What bad luck!») — https://dictionary.cambridge.org/grammar/british-grammar/exclamations. У вправах лише злічувані в однині.

**Спірне / для верифікатора:**
1. Назва l5 — «Our New Year party was great! Was and were» замість плану «Last New Year was great!…» (Р4 plan-eng-g5: природніше). Куратору плану — синхронізувати рядок plan.js або лишити.
2. «A festival is a special day. People celebrate it every year.» — спрощення OALD/CD для 5 кл.; Bonfire Night як festival — OALD відносить Bonfire Night до теми «Religion and festivals».
3. l3 #3: «Some special days are public holidays. In the UK, we also say bank holidays. Many people don’t go to work.» — без «schools and shops are closed» (на Boxing Day у UK крамниці працюють — розпродажі; не стверджую).
4. Нові факти про героїв: день народження Емми — у травні (l1), бабусі Оксани — 21 листопада, Остапа — 22 July, Ярини — 3 March, брат Ярини — 12 August; у Тараса є брат (l1 pick) і молодша сестра (boss T4). Вік героїв не називаю (Оксані 10 уже у вересні 4 кл.). Емма на Новий рік — у дідуся з Томом і мамою; на Різдво в Емми вдома — бабуся й дідусь (boss T5), на Boxing Day вони їздять до бабусі (l4 Final). Андрій — Новий рік у квартирі в Києві (e4s2 — квартира).
5. Феєрверки — лише в UK (Bonfire Night, Емма на Новий рік); в українських сценах не згадую (воєнний стан).
6. l1 Final: структура «on the … of November» з'являється до l2 — у пропуску лише порядкове число, тож опора — список l1 #5.
7. `uk` не додано ніде; кандидати, якщо плейтест покаже потребу: l2 #3 (дати) і l6 #3 (What a …!).
8. Плейтест не запускав (build не запускаю; Python-модуля playwright у контейнері може не бути).

**Рядки для inbox** — передано оркестратору текстом (автор у inbox не пише під час паралельного запуску за вказівкою оркестратора).
