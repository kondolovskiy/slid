---
claimed_from: todo
claimed_at: 2026-11-19T14:22:10.084Z
id: write-eng-g5-e5s4
type: write-section
subject: eng
grade: 5
section: e5s4
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e5s4
created: 2026-11-19
source: design-eng
---
# Написати розділ «Одяг» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: види одягу; сезонний одяг — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): Present Continuous; Present Simple vs Present Continuous. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (verifier plan-eng-g5):** функцію «аргументувати свій вибір» (МП-ІМ с. 20) — через because (Р1 верифікатора плану).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s4.js`: `SLID.section("eng", { id: "e5s4", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [x] `node tools/validate.mjs --section e5s4` — 0 помилок; попередження виправлено або пояснено.
- [x] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [x] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [x] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e5s4, 2026-11-19.** Файл `content/eng/g5-e5s4.js`, 7 уроків (6 + boss), усі `draft`; малюнки — `img/eng/e5s4/` (15 власних SVG).

### Уроки
| id | title | типи завдань |
|---|---|---|
| e5s4l1 | Clothes: a jumper, a skirt, a coat | choice (hyp), match (картинки), choice, gaps, word, pick, gaps (Final) |
| e5s4l2 | Trousers, jeans, shorts: a pair of… | choice (hyp), match (картинки), gaps, word, choice, stress, gaps (Final) |
| e5s4l3 | What are you wearing today? | choice («Remember?», спирається на e4s6l2–l3), gaps, choice, build, word (`contractions`), pick, gaps (Final) |
| e5s4l4 | Clothes for every season | choice (read), sort, gaps, word, choice, stress, gaps (Final) |
| e5s4l5 | I usually wear…, but today I’m wearing… | gaps («Remember?», спирається на e4s8l5), sort, gaps, choice, pick, build, word, gaps (Final) |
| e5s4l6 | School uniform: do you wear one? | choice (hyp), choice (read), choice, word, gaps, stress, gaps (Final) |
| e5s4l7 | Clothes for a trip (boss) | match, gaps, choice, word, gaps, gaps — Task 1–6, `pre` на l1…l6 |

«Аргументувати свій вибір» (Р1 plan-eng-g5) — because: l4 (info, gaps, choice «Why…? – Because…», Final), l5 (info, choice, Final), l6 (gaps, Final), boss T5. У `build` because не беру (inbox writer-e4s5).

### Перевірки
- `node tools/validate.mjs --section e5s4` — 0 помилок, 0 попереджень.
- `node tools/stats.mjs --subject eng` — e5s4l5: gradedShare 0.8 (у межах профілю [0.5; 0.9]; z = 2.2 щодо сім'ї, де половина розділів 5 кл. ще пишеться); e5s4l6: maxText 66 (межа 85), z = 2 — intro з діалогом-ситуацією. Обидва в межах профілю.
- Ключі `word` — `SLID_LANG.wordVerdict` (app/lang.js у node): jumper/sweater/pullover/cardigan/hoodie; feet («foots» — ні); isn’t / is not з `contractions` («is» — ні); raincoat/rain coat/mac/mackintosh; wears; uniform; gloves/mittens. Кінцевого знака в ключах немає.
- `build` — перебір усіх перестановок через `SLID_LANG.check` (скрипт у scratchpad, write-eng-g5-e5s4/run.mjs): l3 #6 — зараховано лише «Is Dmytro wearing his new hat» (плитка «Is» з великої + `keepCase`, тож розповідне «Dmytro is wearing…» не збирається); l5 #8 — лише «Oksana is wearing a warm scarf now» і «Now Oksana is wearing a warm scarf» (обидва в `answer`; «is wearing» — одна плитка, тож ні питання, ні now у середині не зібрати). Пастки `extra` (wear, wears) не зараховуються ні на якому місці.
- PS vs PC: у кожному пропуску gaps є власний маркер (usually, every Sunday, on Fridays, every day / now, Look!, at the moment); «today» сам як маркер не використовую (лише разом із now).

### Джерела форм (curl, 2026-11-19)
- jumper — CD «A2 UK … Compare sweater» https://dictionary.cambridge.org/dictionary/english/jumper; OALD jumper «(British English)» https://www.oxfordlearnersdictionaries.com/definition/english/jumper; sweater — CD «A2 (UK also jumper)» https://dictionary.cambridge.org/dictionary/english/sweater → sweater у ключі `word`.
- trousers — CD «[plural] mainly UK … (US usually pants)», «a new pair of trousers» https://dictionary.cambridge.org/dictionary/english/trousers; OALD «(British English) (North American English usually pants) [plural]» https://www.oxfordlearnersdictionaries.com/definition/english/trousers
- trainers — CD trainer (SHOE) «UK (US sneaker)» https://dictionary.cambridge.org/dictionary/english/trainers; OALD trainer_1 «(British English) (North American English sneaker…) [usually plural]», «a pair of trainers» https://www.oxfordlearnersdictionaries.com/definition/english/trainer_1
- jeans, shorts, gloves, boots — «a pair of …» в OALD (jeans, shorts, glove, boot_1) https://www.oxfordlearnersdictionaries.com/definition/english/jeans, …/shorts, …/glove, …/boot_1
- scarf — plural scarves, less frequent scarfs (OALD https://www.oxfordlearnersdictionaries.com/definition/english/scarf) → множину scarf не оцінюю (лише в тексті pick як правильне).
- uniform — CD «school uniform» https://dictionary.cambridge.org/dictionary/english/uniform; OALD uniform_1 https://www.oxfordlearnersdictionaries.com/definition/english/uniform_1
- raincoat (CD A2) https://dictionary.cambridge.org/dictionary/english/raincoat; mac — CD «UK (also mack)», B1 https://dictionary.cambridge.org/dictionary/english/mac → у ключі.
- рівні CD: jacket, skirt, dress, coat, hat, T-shirt, trousers, jeans, boot — A1; jumper, shorts, scarf, glove, sock, cap, raincoat, uniform, umbrella, comfortable (clothes) — A2; sandal — B1 (пояснено «summer shoes»), pattern (design) — B1 (у l6 з малюнком), cardigan — B2, mitten — C1, hoodie — A1 (останні три — лише в ключі `word`).
- Наголос (CD UK): <u>jum</u>per /ˈdʒʌm.pər/, <u>trou</u>sers /ˈtraʊ.zəz/, <u>train</u>er /ˈtreɪ.nər/, <u>jack</u>et /ˈdʒæk.ɪt/, <u>san</u>dal /ˈsæn.dəl/, <u>rain</u>coat /ˈreɪŋ.kəʊt/, <u>u</u>niform /ˈjuː.nɪ.fɔːm/, T-shirt /ˈtiː.ʃɜːt/; winter, summer — facts (e4s6). URL: https://dictionary.cambridge.org/dictionary/english/<word>.

### Факт про Україну
- **Vyshyvanka Day — у травні (третій четвер травня), з 2006 р., започаткувала студентка Чернівецького університету Леся Воронюк.** У уроці лише «Vyshyvanka Day is in May. Lots of Ukrainians wear it on this day.» Джерела: https://en.wikipedia.org/wiki/Vyshyvanka_Day («It is celebrated the third Thursday of May»; будній день — щоб показати вишиванку як частину повсякдення); https://uk.wikipedia.org/wiki/День_вишиванки («щороку в третій четвер травня»); https://zn.ua/ukr/UKRAINE/682854-den-vishivanki-istorija-svjata.html (третій четвер травня, Воронюк, 2006). «vyshyvanka» — en.wikipedia https://en.wikipedia.org/wiki/Vyshyvanka; у CD/OALD слова немає.
- Шкільна форма — лише як факт про героїв (школа Emma в Англії має форму, школа Andrii в Києві — ні), без загальних тверджень про країни.

### Герої (не суперечать 4 кл.)
Oksana (село) і брат Dmytro; Andrii (Kyiv) і сестра Sofiia; Emma (England) і брат Tom; Mariia (Kharkiv); Taras (Lviv). Сюжет розділу: шкільна поїздка класу Emma до Києва в грудні (l1 → boss).

### Спірне / для верифікатора
1. **Власні малюнки й `credits`:** 15 SVG у `img/eng/e5s4/` намальовано кодом (генератор — scratchpad write-eng-g5-e5s4/gen-svg.mjs), без стороннього матеріалу. Запис у `credits`: ["Clothes drawings…", "Slid (writer-e5s4)", "own work, no third-party material", "https://github.com/kondolovskiy/slid"]. Ліцензії проєкту в репозиторії немає — яку ліцензію писати для власних малюнків (CC0? «own work»?) і яке посилання — рішення людини/куратора (пропозиція в inbox).
2. Підписані аркуші `clothes-1.svg`, `clothes-2.svg`, `school.svg` (`img` + `fit` на info) — слово під кожним малюнком; картинки для `match` — без підписів. coat і jacket розрізняються довжиною й ґудзиками/блискавкою; у одному `match` разом не стоять, jeans і trousers — теж.
3. «Remember?» (l3 #2, l5 #2) — оцінювані завдання до `info`: опора — e4s6l2/l3 і e4s8l5 у `requires`.
4. l1 #8 word: опис «red and warm… over his T-shirt at home» — у ключі ще sweater, pullover, cardigan, hoodie (усі можливі для опису).
5. Boss T4: «a pair of ___ on her hands» — gloves і mittens у ключі.
6. **ENGINE (відоме):** «wear» на ключ «wears» (l5 #9) і «uniforms» на «uniform» → «Almost: check the spelling.» — граматика, не правопис (той самий випадок, що «lives»/«live», engine-eng-rule-tables п. 2).
7. `requires` на e5s2 (Present Simple, plan-eng-g5 §6 «Усередині 5 кл.») не ставив: розділ пишеться паралельно. Оркестратору — додати id уроку Present Simple з e5s2, коли той буде готовий.
8. Плейтест не запускався (build робить оркестратор; модуля playwright у контейнері немає).
