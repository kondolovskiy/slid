---
claimed_from: todo
claimed_at: 2026-11-19T13:53:41.290Z
id: write-eng-g4-e4s5
type: write-section
subject: eng
grade: 4
section: e4s5
depends_on: [curate-eng-plan-g4, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: done
claimed_by: writer-e4s5
created: 2026-11-19
source: design-eng
---
# Написати розділ «Health and hygiene» (Англійська мова, 4 клас)

## З програми
- Тема й підтеми: Людина: гігієна, стан здоров'я — ТОП 3–4 (іншомовна освітня галузь, «4-ий клас»), PDF с. 62–63 — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; рівень A1 — PDF с. 40.
- Рівень: Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).
- Граматика (пропозиція розподілу, docs/design/english.md §4): because; imperatives. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g4): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g4-e4s5.js`: `SLID.section("eng", { id: "e4s5", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e4s5` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e4s5, 2026-11-19.** Файл: `content/eng/g4-e4s5.js`, 7 уроків (6 + boss), усі `draft`, `meta.factcheck: "self"`. `requires: ["e4s1l2"]` (have got; plan-eng-g4.md §6) — на рівні розділу.

### Уроки (id, назва, типи)
| id | Назва | Типи екранів (без intro/info) |
|---|---|---|
| e4s5l1 | Keeping clean: wash your hands! | choice (hyp), gaps, choice, build, pick (Find the mistake), word, gaps (Final) |
| e4s5l2 | Stay healthy every day | choice (read), sort, choice, gaps, stress, word, gaps (Final) |
| e4s5l3 | How do you feel? | choice (hyp), choice (read), gaps, stress, build, word, gaps (Final) |
| e4s5l4 | What’s the matter? | choice (hyp), choice, gaps, stress, build, word, gaps (Final) |
| e4s5l5 | At the doctor’s | choice (hyp), choice, pick (Find the mistake), gaps, order, word, gaps (Final) |
| e4s5l6 | Why? Because… | choice (hyp), choice, gaps, build, word, choice, gaps (Final) |
| e4s5l7 | Health Day at school (boss, `e4s5boss` «Health hero») | gaps, sort, word, gaps, choice, build — Task 1–6, `pre` на l1…l6 |

Назва l2 «Stay healthy every day» замість планової «Healthy habits every day»: *habit* — B1 у CD (https://dictionary.cambridge.org/dictionary/english/habit), вище рівня 4 кл.; l4 — лише «What’s the matter?» (повна назва з плану — 7 слів > 2–6). `match` і `dialog` у рушії ще немає — не використано.

### Програма
ТОП 3–4, PDF с. 63 (відкрито в сесії, `pdftotext -f 62 -l 63`): «Людина — гігієна, стан здоров’я»; функції «розуміти та виконувати прості вказівки/інструкції/команди», «виражати настрій»; граматика «‘because’ for causes and reasons» — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf. Imperatives — як функція «вказівки» (plan-eng-g4.md §5 п. 6); children, teeth, feet — наскрізні irregular plurals (plan-eng-g4.md «Інвентар 3 кл.»). Прислівники частоти (с. 63) — у e4s3, тут не вчу.

### Форми й наголос (curl, 2026-11-19)
CD = https://dictionary.cambridge.org/dictionary/english/<word>; OALD = https://www.oxfordlearnersdictionaries.com/definition/english/<word>.
- **toothache** — OALD toothache: «[uncountable, countable] (British English) I've got toothache. (North American English, British English) I've got a toothache»; CD toothache [C or U]. **stomach ache** — CD [C or U]; OALD stomach-ache [countable, uncountable]. **earache** — OALD «to have (an) earache» (не вжито). ⇒ артикль перед toothache / stomach ache **ніде не оцінюється** (друга правильна відповідь); у `gaps` l4 Final і boss варіанти — «toothache» проти «a sore throat» / «a temperature», без пари «a toothache»/«toothache».
- **a headache** [C] — CD headache, OALD headache («a headache»). **a cold** — OALD cold_2 «I've got a cold». **a sore throat** [C] — CD sore-throat. **have a temperature** — OALD temperature «(British English) Does he have a temperature» (AmE — fever); CD temperature «run/have a temperature».
- **ill** — OALD ill_1 «(especially British English)»; **sick** не вжито (у BrE sick = нудота/блювота; OALD sick_1). **What’s the matter?** — CD matter «the matter A2 … What's the matter?».
- **at the doctor’s** — OALD doctor_1: «doctor’s — a place where a doctor sees patients … an appointment at the doctor’s».
- **have a shower** — OALD shower_1 «(especially British English) to have a shower»; CD shower «have a shower».
- **sweets** — BrE (glossary/eng.md «Лексика BrE»); **do sport** — glossary (OALD sport_1).
- **comb**, **towel**, **soap**, **toothpaste** (CD B1, лише в info), **dirty** (A2), **clean** (A1), **hurt** (A2), **mouth** (A1), **throat** (CD B1 — потрібне для «sore throat», тема програми), **ache** (CD B1 — окремо не вчу, лише в складених словах з опорою «head + ache»), **healthy** (A2), **hungry** (A1), **thirsty** (A2), **tired** (A1), **feel** (A1), **because** (A1), **vegetable** (A1), **computer** (A1), **children**, **teeth**, **feet** — CD.
- **Наголос (CD UK / OALD BrE):** toothbrush ˈtuːθ.brʌʃ / ˈtuːθbrʌʃ; toothpaste ˈtuːθ.peɪst / ˈtuːθpeɪst; healthy ˈhel.θi / ˈhelθi; computer kəmˈpjuː.tər / kəmˈpjuːtə(r); children ˈtʃɪl.drən (CD); happy ˈhæp.i / ˈhæpi; hungry ˈhʌŋ.ɡri / ˈhʌŋɡri; thirsty ˈθɜː.sti / ˈθɜːsti; headache ˈhed.eɪk / ˈhedeɪk; toothache ˈtuːθ.eɪk / ˈtuːθeɪk; stomach ˈstʌm.ək / ˈstʌmək; temperature ˈtem.prə.tʃər (CD; лише `<u>` в info); because bɪˈkəz / bɪˈkəz (лише `<u>` в info). У `stress` не брав: shower, tired (CD — один склад ʃaʊər, taɪəd), outside (CD дає і ˌaʊtˈsaɪd, і ˈaʊt.saɪd), vegetable (фонетично 3 склади ˈvedʒ.tə.bəl, орфографічно 4 — плутанина).

### Факти й поради
Фактів про країни немає. Поради — лише загальновідомі (мити руки з милом, витирати рушником, чистити зуби вранці й увечері, їсти фрукти й овочі, пити воду, гратися надворі, лягати рано; лікар: «Stay in bed», «Drink lots of water», «Open your mouth»). Без ліків, без чисел (секунд, склянок, годин сну), без порад про морозиво чи холодне.
Україна: Kyiv (школа Андрія, Dr Bondar), Poltava (Dr Kovalenko, Оксана), імена за КМУ № 55 (Andrii, Oksana, Sofiia, Dmytro, Mariia, Taras, Bohdan; Ms Savchuk, Dr Bondar, Dr Kovalenko). Герої e4s1 — ті самі місця проживання (Andrii — Kyiv, Oksana — село біля Poltava, Emma — town in England); Taras (Lviv) у boss не пише шкільній медсестрі Києва — замість нього Bohdan.

### D-019: опори неочевидних завдань
- l1 #6 (Dmytro, брудні руки) → info #5 (Wash…; Don’t…); l1 #8 pick «tooths» → info #3 (one tooth → two teeth).
- l2 #5 (Doesn’t eat) → правило Don’t + verb з l1 #5 і info l2 #3 («Don’t do it»).
- l4 #6 gaps have got → l4 #5 + e4s1l2 (`requires`).
- l6 #4 «Because they can be dirty» → poster l1 (intro, «Don’t eat with dirty hands»), hint називає poster; l6 #8 (Andrii at home) → l4 intro (cold, sore throat).
- boss Task 5 → l5 #2 hyp + info #3 (Stay… Drink lots of water).

### Друга правильна відповідь (перевірено, кожне завдання розв'язано двічі)
- build l1 «Wash your hands with soap» — «With soap wash your hands» неприродне, не в ключі; build l6 «Because he plays football» і boss «Because fruit is healthy» — один порядок; build l3 «How do you feel?», l4 «I’ve got a sore throat» — один порядок. Речення «X because Y» у `build` свідомо не беру: «Because Y, X» без коми плиток не зібрати.
- word l5 «Stay in ___ for two days» → bed; «hospital» граматично можливе («stay in hospital», BrE), але в уроці його немає, а хворого відправляють додому — **спірне, хай подивиться верифікатор**.
- word l1 «He needs a ___» (dry hands) → towel. Спершу було «comb her hair → comb», замінив: «brush» (щітка для волосся) теж правильне.
- gaps l2 Final «I go to bed {early|late}» — граматично обидва; контекст «about her healthy week» + hint відсікає late.

### Перевірки
- `node tools/validate.mjs --section e4s5` — **0 помилок, 0 попереджень** (спершу були 2 попередження D-016 про позицію B у choice — варіанти переставив).
- `node tools/stats.mjs --subject eng` — l1–l6 без прапорців; longWordShare 0.016–0.059 (≤ 0.12). **e4s5l7 (boss): «typeVariety нетипово для сім'ї (z=2)»** — 5 типів (gaps, sort, word, choice, build) при межі профілю 2–6; boss перевіряє 6 уроків різними типами, а сім'я — 7 уроків одного розділу, де boss e4s1 має 3 типи. Не підганяв; калібрування — style-eng-g4-5.
- Авторське право: WebSearch «"We drink water, not cola. We play outside after lunch"» — збігу немає. Решта текстів — короткі власні діалоги.
- Плейтест не запускав (розділу немає в manifest до build; Python playwright немає).

### Спірне / пропозиції
1. «Stay healthy every day» замість «Healthy habits every day» (plan.js) — habit B1; куратору плану, якщо треба синхронізувати назву (inbox).
2. Артикль toothache / stomach ache: у info — без артикля (перший приклад OALD, British English), у `word` l4 ключ — «headache» (a в `before`). Пулу: в ключі `word` з toothache — обидва записи («toothache», «a toothache»).
3. Термін **verb** у l1 #5 (один новий термін уроку), далі «The verb comes first» у l5 — без пояснення українською; якщо плейтест покаже нерозуміння — `uk` на l1 #5.
4. Лікар — жінка (Dr Bondar «she»), у outro l5 — «the doctor» без займенника.

**verifier-e4s5, 2026-11-19 — вердикт: придатний, усі 7 уроків `verified`** (звіт reports/verify/e4s5.md).
- Кожне оцінюване завдання розв'язано самостійно; `word` — через `LANG.wordVerdict`, `build` — перебором усіх порядків плиток з `extra` через `LANG.check` (app/lang.js у node). Ключі `word` без кінцевого знака.
- ❌ → виправлено: l5 #8 «Stay in ___» — «hospital» (BrE, OALD hospital) була другою правильною відповіддю. До репліки лікаря додано «Stay at home.»
- Дрібні правки: l1 #5 *verb* визначено прикладом («wash, brush, eat – these are verbs.»); l6 Final «I go to school today» → «I can go to school today»; l3 Final і l6 #8 fbText «stays at home» → «’s at home (today)».
- `uk` не потрібне. Якщо плейтест покаже нерозуміння *verb*, `uk` треба додати на l1, екран 5.
- Спірне автора: 1 приймаю (назву плану синхронізує куратор), 2 ✅, 3 → правка, 4 → правка. Питань до вчителя немає.
- validate --section e4s5: 0 помилок, 0 попереджень. stats: l1 і l6 — прапорці «сім'ї», у межах профілю.
- Плейтест не запускався (немає build і Python-модуля playwright) — після build по одному.
