---
claimed_from: todo
claimed_at: 2026-11-19T14:22:10.735Z
id: write-eng-g5-e5s9
type: write-section
subject: eng
grade: 5
section: e5s9
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e5s9
created: 2026-11-19
source: design-eng
---
# Написати розділ «Подорож» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: улюблені напрямки подорожі — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): be going to (plans); Past Simple affirmative (regular verbs). Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g5):** be going to — для вже складених планів; will — у ключ або відсікти контекстом. `requires` на уроки 4 кл. — за таблицею reports/verify/plan-eng-g5.md §6, коли ті уроки будуть.

- **Специфіка (verifier plan-eng-g5):** функцію «аргументувати свій вибір» — через because (Р1).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s9.js`: `SLID.section("eng", { id: "e5s9", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s9` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e5s9, 2026-11-19. Файл: content/eng/g5-e5s9.js — 7 уроків (6 + boss), status draft. Картинок немає (match — текстовий), img/eng/e5s9 не створено.

**Уроки (id — title — типи завдань):**
- e5s9l1 — Where would you like to go? — hyp choice, gaps, choice, match (halves), word, choice (Final)
- e5s9l2 — At the seaside or in the mountains? — hyp choice, sort, gaps, choice, stress, pick, word, choice (Final)
- e5s9l3 — I’m going to visit my grandma: plans — hyp choice, gaps, word, choice, build, pick, gaps (Final)
- e5s9l4 — Are you going to travel this summer? Questions — hyp choice, gaps, choice, match (Q–A), build (keepCase), word, choice (Final)
- e5s9l5 — We visited Lviv: the Past Simple — hyp choice, gaps, word ×2, choice (вимова -ed), pick, gaps (Final)
- e5s9l6 — My travel diary — читання 3 частинами (choice, multi, choice; ≈135 слів), order, word, build, gaps (Final)
- e5s9l7 (boss, значок e5s9boss «Young explorer») — Emma’s trip to Ukraine — Task 1–7: gaps, choice, word, choice, gaps, word, choice; `pre` на l1…l6

**requires:** e4s4l5 (I’d like), e4s5l6 (because), e4s7l1 (by train), e4s7l3 (English in the UK), e4s7l5 (Past Simple у листівці), e4s7l6 (I think I’ll) — за plan-eng-g5 §6 (e5s9 → e4s7) і рядком плану (would like — e4s4). **e5s9 → e5s8** (was/were перед Past Simple, plan-eng-g5 §6 «Усередині 5 кл.»): файлу g5-e5s8 на момент роботи не було в дереві — оркестратору додати урок e5s8 з was/were.

**will / be going to (пастка plan-eng-g5 §5):** be going to — лише з явним складеним планом (є квитки, «Andrii’s plan: …», план записано в щоденнику). will ніде не стоїть варіантом поруч із going to у gaps/choice/build: варіанти відрізняються формою (am/is/are, visit/visits, are going to / are going / going to). Єдиний контраст — l3 #7 choice: рішення в мить мовлення («Oh, my bag is very heavy!» → «I’ll help you!»), дистрактори — «I help you every day.», «I’m going to help you next month.» (часова ознака відсікає). Прогнозів з going to немає.

**Друга правильна відповідь (перевірено через app/lang.js у node, vm):** build — усі перестановки плиток: l3 #8 → 2 порядки (обидва в answer), l4 #7 (keepCase, плитка «Are») → 1 порядок; розповідне «you are going to…» не збирається, l6 #8 → 2 порядки (обидва в answer). word: because (l1), seaside/beach/sea/coast (l2), is (l3, boss; «isn’t» суперечить плану в body), am (l4), played, stopped, climbed, studied — з опорою «play → ?» тощо, щоб відсікти went / learnt; stoped, climed, studyed → «Almost». Підмет «Tom», не «Emma’s family» (BrE family are — друга відповідь). Короткі відповіді «Yes, he’s / Yes, I’m» — хибні (CD Grammar contractions; inbox verifier-e4s2).

**Форми й норма (curl):**
- be going to — уже складений план; прогноз за ознаками: CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/be-going-to («Usually the decision about the future plans has already been made»)
- will — рішення в мить мовлення, «will when the decision is immediate and be going to when we have already made a plan»: CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/will
- Past Simple regular: -ed, -d після e; подвоєння (stop–stopped, plan–planned); вимова -ed: /ɪd/ лише після /t/ /d/: CD Grammar https://dictionary.cambridge.org/grammar/british-grammar/past-simple-i-worked
- travelled — UK (CD travel: «He travelled over…»), glossary/eng.md (-ll-); studied — CD https://dictionary.cambridge.org/dictionary/english/study
- at the seaside / to the seaside — (especially British English): OALD https://www.oxfordlearnersdictionaries.com/definition/english/seaside_1; CD seaside «UK» https://dictionary.cambridge.org/dictionary/english/seaside (B1 за CD — подано з поясненням на екрані)
- in the mountains: OALD https://www.oxfordlearnersdictionaries.com/definition/english/mountain_1
- on holiday, school/summer holidays: OALD https://www.oxfordlearnersdictionaries.com/definition/english/holiday_1
- Рівні CD: trip A2, castle A2, lake A2, countryside A2, diary A2, museum A1, ticket A1, camping A2, wooden — не перевіряв (лише в тексті читання)
- Наголос (CD UK + OALD): seaside 1-й (ˈsiː.saɪd), countryside 1-й, holiday 1-й, museum 2-й (mjuːˈziː.əm); OALD: museum, holiday_1, seaside_1, countryside — те саме. URL: https://dictionary.cambridge.org/dictionary/english/<word>, https://www.oxfordlearnersdictionaries.com/definition/english/<word>

**Факти про Україну:**
- Odesa on the Black Sea; Kyiv — capital, on the Dnipro; Hoverla — the highest mountain in Ukraine, у Карпатах — уже verified (inbox verifier-e4s7, verifier-e4s6; ЕСУ article-25087 «найвища вершина Українських Карпат»).
- Lviv — місто зі старим містом (old town): en.wikipedia https://en.wikipedia.org/wiki/Lviv («L'viv – the Ensemble of the Historic Centre», UNESCO 1998); ЕСУ, Львівський історико-архітектурний заповідник https://www.esu.com.ua/pdf/file/59624.pdf (знайдено WebSearch; центральна частина — історико-культурна пам'ятка). UNESCO в уроці не згадано; whc.unesco.org з контейнера не резолвиться.
- Kamianets-Podilskyi — місто зі старим замком (фортецею): en.wikipedia https://en.wikipedia.org/wiki/Kamianets-Podilskyi_Castle («important regional and national tourist attraction»); uk.wikipedia «Кам'янець-Подільська фортеця» (Смотрич). Друге незалежне від Вікіпедії джерело (castles.com.ua) з контейнера не відкрилося — **потребує другого джерела** у верифікатора (наприклад ЕСУ).
- Шотландія з горами (Final l3 — Mariia; boss — ні) не вжито; Edinburgh не вжито.

**Герої (узгоджено з 4 кл.):** Andrii — Kyiv, бабуся/дідусь у Chernihiv (e4s7l6), планує Lviv до Taras; Taras — Lviv, мама й тато, Карпати; Oksana — village, countryside; Mariia — Kharkiv, родина обирає море чи гори, у серпні — Карпати, минулого тижня — Lviv (готель); Sofiia — тітка в Odesa (e4s7l6 «visit her aunt»); Maksym — кузен Andrii з Ottawa (l1 Final, l6 Final у Kyiv); Emma і Tom — подорож Україною (boss).

**Спірне / для верифікатора:**
- l1 #6 match: «I’d like to visit London — because I’d like to speak English» спирається на e4s7l3 (People speak English in the UK).
- l2 #9 word «Let’s go to the …!» — відкрите поле, у ключі seaside / beach / sea / coast.
- l5 #10, boss T5: дистрактори — теперішній час у минулій розповіді («Last Saturday…», «Yesterday…»), як у e4s7l5 (verified); «love it» замінено на хибну форму loveed, бо «I love it!» могло б бути правильним.
- l6 #7 word «Day 3. Today we … Hoverla!» — опора «climb → ?» відсікає reached/conquered.
- boss T6 «In the evening I … new Ukrainian words» — learnt/learned теж правильні; опора «study → ?» робить задачу формою.
- stats: e5s9l6 gradedShare 0.78 у межах профілю [0.5; 0.9], прапорець лише z=2 (урок читання з 3 питаннями; та сама z-пастка — inbox writer-e4s3 STYLE).
- uk не додавав. Без звуку, без IPA, без Listen (grep).
