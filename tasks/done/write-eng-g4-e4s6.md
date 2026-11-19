---
claimed_from: todo
claimed_at: 2026-11-19T13:53:41.357Z
id: write-eng-g4-e4s6
type: write-section
subject: eng
grade: 4
section: e4s6
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e4s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Nature and weather» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Природа і навколишнє середовище України та країн виучуваної мови: довкілля, природні явища — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): Present Continuous. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (verifier plan-eng-g4):** how-questions for size and measurement — How big…? How long…? (ТОП 3–4 с. 63).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g4-e4s6.js`: `SLID.section("eng", { id: "e4s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e4s6` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e4s6, 2026-11-19. Файл: content/eng/g4-e4s6.js — 7 уроків (6 + boss), усе `draft`, `meta.factcheck: "self"`. Будова — за еталоном e4s1 (intro → hyp → info → завдання → Final; boss Task 1–6 з `pre`). Герої — з e4s1 і на тих самих місцях: Oksana (село біля Полтави, брат Dmytro), Andrii (Kyiv, сестра Sofiia), Emma (містечко в Англії), Taras (Lviv), Ms Kravets (pen-friend club); новий — Nazar (однокласник Oksana). `requires: ["e4s1l1"]` (am / is / are і «Are you…? – Yes, I am» — основа Present Continuous). `match`/`dialog` не вжито (ще немає в рушії), `build` — 3 рази. `uk` не додавав.

### Уроки
| id | title | типи завдань |
|---|---|---|
| e4s6l1 | Seasons and weather | hyp choice, sort, gaps, stress, word, gaps (Final) |
| e4s6l2 | It’s raining now! What’s happening? | hyp choice, gaps, word, choice, pick (Find the mistake), gaps (Final) |
| e4s6l3 | Is it snowing? Questions about now | hyp choice, choice, build, gaps, word, gaps (Final) |
| e4s6l4 | Nature in Ukraine and the UK | word, choice, gaps (How long / How high), stress, choice (Final) |
| e4s6l5 | Bigger, colder, faster: comparing things | hyp choice, gaps, choice, word, pick, gaps (Final) |
| e4s6l6 | Let’s help nature! | hyp choice, sort, gaps, word, build, choice (Final) |
| e4s6l7 | Our nature and weather page (boss, значок e4s6boss «Weather reporter») | gaps, word, build, gaps, choice, multi |

### Факти (кожен — ≥ 2 джерела, відкрито в сесії)
| Твердження в уроці | Джерела |
|---|---|
| the Dnipro — річка, «about 2,200 km long»; Kyiv is on the Dnipro | en.wikipedia «Approximately 2,200 km» (інші: 2,145 / 2,201) — https://en.wikipedia.org/wiki/Dnieper; ЕСУ «загальна довжина становить 2200 км… впадає у Дніпровський лиман Чорного моря» — https://esu.com.ua/article-22159; Київ «на обох берегах Дніпра» — ЕСУ https://esu.com.ua/article-11194 |
| the Thames (England) — 346 km; London is on the Thames | en.wikipedia «flows through southern England including London. At 215 miles (346 km)» — https://en.wikipedia.org/wiki/River_Thames; uk.wikipedia «346 км завдовжки… протікає в межах Лондона» — https://uk.wikipedia.org/wiki/Темза |
| Hoverla — гора в Карпатах, Україна, 2,061 m; узимку там багато снігу; ліси на схилах | en.wikipedia «2,061 metres… part of the Ukrainian Carpathians» — https://en.wikipedia.org/wiki/Hoverla; ЕСУ «Вис. 2061 м… Узимку бувають снігові лавини… вкрита смерековими лісами» — https://esu.com.ua/article-25087 |
| Ben Nevis (Scotland) — 1,345 m | en.wikipedia «1,345 metres» (OS 2016: 1,344.527 m) — https://en.wikipedia.org/wiki/Ben_Nevis; uk.wikipedia «Вершина 1345 м… найвища гора Шотландії» — https://uk.wikipedia.org/wiki/Бен-Невіс. ordnancesurvey.co.uk з контейнера не відкривається (ENOTFOUND) |
| Ukraine «about 600,000 km²», the UK «about 240,000 km²» → Ukraine is bigger than the UK | Ukraine: en.wikipedia 603,628 km² — https://en.wikipedia.org/wiki/Ukraine; uk.wikipedia 603 700 км² — https://uk.wikipedia.org/wiki/Україна. UK: en.wikipedia 244,376 km² — https://en.wikipedia.org/wiki/United_Kingdom; uk.wikipedia 242 495 км² — https://uk.wikipedia.org/wiki/Велика_Британія (тому «about 240,000») |
| «In Ukraine, winters are cold and summers are warm»; «In winter, Kyiv is usually colder than London» | Kyiv: en.wikipedia січень −3.2 °C, липень 21.3 °C, сніговий покрив з середини листопада до кінця березня — https://en.wikipedia.org/wiki/Kyiv; ЕСУ «помірно континентальний… з м'якою зимою та теплим літом. Середня температура січня –6,0 °С, липня +19,2 °С» — https://esu.com.ua/article-11194. London: en.wikipedia січень 4.9–5.9 °C (станції 1991–2020) — https://en.wikipedia.org/wiki/Climate_of_London; uk.wikipedia січень 5,5 °C — https://uk.wikipedia.org/wiki/Лондон |
| «Today it’s 30 °C in Kyiv / 22 °C in London», «−3 °C / 5 °C» (l5) | не факт клімату — погода одного вигаданого дня; числа правдоподібні (див. рядок вище) |

### Форми, лексика, наголос (словники через curl)
- Наголос (CD UK): winter /ˈwɪn.tər/, summer /ˈsʌm.ər/, autumn /ˈɔː.təm/ (US usually fall), weather /ˈweð.ər/, mountain /ˈmaʊn.tɪn/, river /ˈrɪv.ər/, forest /ˈfɒr.ɪst/, nature /ˈneɪ.tʃər/ — усі на 1-му складі — https://dictionary.cambridge.org/dictionary/english/<word>.
- -ing: «take off the -e and add -ing» (shine → shining, make → making), подвоєння після голосний + приголосний у наголошеному складі (run → running, swim → swimming) — CD Grammar «Present continuous» https://dictionary.cambridge.org/grammar/british-grammar/present-continuous-i-am-working.
- Comparatives: -er; big → bigger, hot → hotter (подвоєння); -y → -ier — CD Grammar «Comparison: adjectives» https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-interesting; OALD sunny «sunnier», windy «windier», hot «hotter» — https://www.oxfordlearnersdictionaries.com/definition/english/sunny, …/windy, …/hot.
- How long / How high: OALD long_1 «used for asking or talking about particular lengths» — https://www.oxfordlearnersdictionaries.com/definition/english/long_1; OALD high_1 «the distance that something measures from the bottom to the top» — https://www.oxfordlearnersdictionaries.com/definition/english/high_1. How big — CD big «large in size» — https://dictionary.cambridge.org/dictionary/english/big. Приклади словників не копіював (мої — Dnipro, Hoverla, Ukraine).
- «What’s the weather like?» — OALD weather_1 — https://www.oxfordlearnersdictionaries.com/definition/english/weather_1.
- BrE: rubbish «(especially British English)» — OALD rubbish_1; CD «UK (US garbage, trash)» — https://dictionary.cambridge.org/dictionary/english/rubbish; tap «(also US faucet)» — CD tap; bin «a container for waste» — CD bin; turn something off — OALD turn-off; pick up «to lift… using your hands» — CD pick-up; wood «an area of land covered with a thick growth of trees» (A2) — CD wood.

### Спірне й де опора неочевидна
1. **l4 word «forest»:** у ключі `["forest", "wood"]` — *a wood* (BrE, CD A2) теж правильна відповідь на «lots of trees».
2. **l5 word «colder»:** у ключі `["colder", "cooler"]` — *cooler* граматично правильне, хоч і не з уроку.
3. **Друга відповідь Present Continuous vs Present Simple:** у жодному завданні PS не є варіантом; усі пропуски — am/is/are чи форма з -ing, контекст «Look!», «now», «today». Протиставлення PS/PC — у e4s8 за планом.
4. **`build`** (l3, l6, boss): питання ↔ ствердження — той самий набір плиток, тож у `body` прямо сказано «Make his question» / «Oksana answers» / «a question about her brother». Інших порядків немає («in Lviv» — одна плитка, щоб не було «In Lviv is it raining?»).
5. **l2 word «shining», boss «swimming», l6 «feeding»:** у `body` «Write the -ing form: shine → ?», щоб *shiny / snowy* не стали другою відповіддю.
6. **l3 choice «Yes, I’m.»** як хибний варіант — на info #3 лише «Yes, I am.»; правило «I’m не в кінці» сказано у fbText (зразок був на екрані).
7. **Imperatives (l6)** — інвентар e4s5 (ще не написаний), тут лише як зразки «Plant trees. Don’t leave…»; `requires` на e4s5 не ставив (уроків ще немає). Оркестратору: після e4s5 — розглянути `requires` e4s6 → e4s5 (imperatives) і e4s8 → e4s6l2/l3 (Present Continuous, plan-eng-g4 §6).
8. **l4 info «Rivers and seas have the: the Dnipro.»** — спрощення для 4 кл. (glossary: the Dnipro, the Black Sea, з the).
9. **Без hyp у l4:** прибрав здогадку, щоб урок мав ≥ 4 типи і частку завдань 0.56 (stats); intro закінчується питанням.
10. **stats:** e4s6l1 sentenceWords = 3.6 (у межах профілю [2.5; 7]), але z = −2.3 для «сім'ї»: 8 однослівних назв місяців у `sort` і список місяців в info рахуються як дуже короткі речення. Тема (місяці за сезонами) цього вимагає; не підганяв. longWordShare усіх уроків ≤ 0.097 (межа 0.12; l1 — через назви місяців January, February, September…).
11. Авторське право: тексти власні (переписка героїв e4s1, плакат); перевірку фрагментів пошуком лишаю верифікатору.

validate --section e4s6: 0 помилок, 0 попереджень. stats: прапорець лише e4s6l1 (п. 10).

### Верифікація (verifier-e4s6, 2026-11-19)
Звіт: reports/verify/e4s6.md. **Вердикт: verified, усі 7 уроків.** Факти (Dnipro, Thames, Hoverla, Ben Nevis, площі, клімат Києва й Лондона) — по 2+ джерела, відкрито в сесії (ЕСУ, en/uk.wikipedia). Розбіжність −3.2 / −6.0 °C для Києва уроку не шкодить: там лише «usually colder». Усі завдання розв'язано; `word` прогнано через wordVerdict, `build` — перебором усіх перестановок плиток. Другої правильної відповіді немає. Спірні 1–11 автора прийнято. Правки: brackets (B2) і tips (B1) прибрано з пояснень (l4 #5, l6 #8, boss T6); у фінал l4 додано «Oksana writes.». Авторське право — 9 запитів, збігів немає. Плейтест — після build оркестратора (playwright у контейнері немає).
