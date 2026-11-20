---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.655Z
id: write-eng-pool-g5-e5s5
type: write-pool
subject: eng
grade: 5
section: e5s5
depends_on: [write-eng-g5-e5s5, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe5s5
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Природа» (Англійська мова, 5 клас) — pe5s5

**Брати, коли розділ `e5s5` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s5.js`: `SLID.pool("eng", { id: "pe5s5", section: "e5s5", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s5` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s5, 2026-11-20)
- Файл: content/eng/pool-g5-e5s5.js, пул `pe5s5`, 68 вправ a01–a68; status draft. `validate --pool pe5s5` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s5 --strict` — лише «ще не verified»; euphony — без зауважень.
- Покриття (урок × sk, рівні 1–3 у кожній парі): l1 vocab 4 / gram 4 / write 3; l2 vocab 4 / read 3 / phon 3; l3 gram 7 / write 3; l4 gram 7 / write 3; l5 gram 6 / func 4 / read 3; l6 read 3 / cult 4 / gram 4 / write 3. Усі sk — з оцінюваних екранів відповідного уроку; boss l7 без вправ.
- Типи: gaps, word, pick, build, match (a12 — наявні SVG img/eng/e5s5/ з тими самими alt, що в уроці; credits — у розділі e5s5), stress (phon), choice (read: a16, a18, a52, a54, a55, a57).
- Джерело: `mpim` з `program: true`, PDF МП-ІМ (SHA-1 43925b25… — як у facts/eng.md), звірено `pdftotext`: с. 20 — тема «Природні явища», функції «описувати», «порівнювати» (vocab, read, phon, func, cult, write); с. 21 — «Comparatives and superlatives: form, position, use», «Future with will…» (gram). Вправи власні, з підручників нічого.
- Розв'язано кожну вправу. `word` — через `SLID_LANG.wordVerdict(s, v, "en")`; `build` — усі підмножини й перестановки плиток з extra через `SLID_LANG.check` (скрипт: scratchpad/pe5s5/js/run.mjs): рушій приймає лише ключ(і) в a07, a26, a36, a44 (2 порядки), a49, a63.
- Друга правильна відповідь — що вирішено:
  - will / be going to: going to не стоїть варіантом у жодному gaps/choice/build; у `word` a46 («The forecast says it ___ be…») і a50 («No, it ___») going to — у ключі (`contractions: true`). Прогнози без видимих ознак. a46: «’s going to» (з окремим апострофом після «it») не зараховується — малоймовірне введення.
  - build: a26, a36, a44 — питальний порядок відсічено умовою «tells» + hint (як e5s5l3/l5, NOTE verifier-e5s5); a49 — велика плитка What + keepCase, пастка `are` (не `is`: «What is the weather like tomorrow?» — граматичне). a63 — пастка `cool`, не протилежний прикметник, і «He starts with Autumn» (PITFALL warmer/colder з містами); a26, a36 — обернений порядок суперечить даним на екрані. a44 — обидва порядки (Tomorrow на початку) у ключі.
  - comparatives у `word`: a23, a25, a28, a35, a38, a61, a64 — «Use <прикметник>» відсікає інші правдиві порівняння (warmer / sunnier / wetter). Ключ worse у `word` не брав (Almost-вердикт на «worst», ENGINE verifier-e5s5) — worse лише в gaps (a33, a37, a40) з хибними badder / more bad.
  - a28 cloudier — перенесення правила y → i з уроку (sunny → sunnier) на відоме cloudy, тому lvl 3 з hint; OALD cloudy: «comparative cloudier».
  - gaps: дистрактори погоди суперечать умові (rain ↔ dry; 30 °C ↔ cold/cool); у gaps «It’s ___ too» без than не давав (базова форма лягала б). a03 match — шкала з уроку l1 (30 hot / 20 warm / 10 cool / 0 cold).
  - a60 match: кожна неправильна пара негграматична (than / in all seasons / snow. / and snow.).
- Клімат — лише якісні твердження e5s5l6 (reports/verify/e5s5.md §2): Kyiv winters cold + usually snow, summer warm/sometimes hot, autumn cooler than summer, spring warmer; south warmer than north; Carpathians a lot of rain and snow; England winters not very cold, wet and windy; London doesn’t often snow; UK rains in all seasons, summers not very hot; London warmer than Kyiv in winter; Kyiv January colder than March. Про Lviv, Kharkiv, Odesa — лише вигадана погода одного дня / прогноз на екрані.
- Герої — лише канон: Andrii (Kyiv, сестра Sofiia), Emma (England), Taras (Lviv), Mariia (Kharkiv), Oksana (village). Нових героїв і деталей немає.
- Словники (curl, 2026-11-20): наголос — CD https://dictionary.cambridge.org/dictionary/english/{rainbow,thunder,lightning,foggy,degree,minus,weather} (UK: ˈreɪn.bəʊ, ˈθʌn.dər, ˈlaɪt.nɪŋ, ˈfɒɡ.i, dɪˈɡriː, ˈmaɪ.nəs, ˈweð.ər); OALD https://www.oxfordlearnersdictionaries.com/definition/english/{rainbow,thunder_1,lightning_1,foggy,degree,minus_1,weather_1} — збігається; усі слова stress підкреслені в l1 #3 або l2 #3. stormy не брав (поділ storm|y / stor|my неочевидний), temperature, interesting — неоднозначна кількість складів. Comparatives: OALD cloudy («cloudier»), rainy, cool («cooler»); wetter, sunnier, windier — reports/verify/e5s5.md.
- Не запускав: test-answer-ui.py --pool pe5s5 (браузерний; на оркестраторі).
- Спірне для верифікатора: a03 (10 °C cool / 0 °C cold — лише за шкалою уроку); a28 cloudier (перенесення правила); a49 «What will be the weather like» рушій не приймає (нестандартне).

## Нотатки верифікатора (verifier-pe5s5, 2026-11-20)
- Вердикт: **verified** — reports/verify/pe5s5.md. 68 вправ розв'язано; `build` — перебір усіх перестановок з extra через app/lang.js (лише ключі); `word` — wordVerdict; матриця урок × sk звірена вручну (усі пари ≥ 3, рівні 1–3).
- Правки (6): a21 hint (careful), a30 «than Kharkiv» + hint (just), a38 body (boring → He doesn’t like rain), a40 Taras → Mariia (канон l4), a55 тире, статус. Ключі не змінено.
- Спірні місця автора (a03, a28, a49) — прийнято. Словники наголосу й cloudier/cooler, клімат (≥ 2 джерела) — URL у звіті.
- Не запускав: test-answer-ui.py --pool pe5s5 (немає Python playwright).
