---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.498Z
id: write-eng-pool-g5-e5s1
type: write-pool
subject: eng
grade: 5
section: e5s1
depends_on: [write-eng-g5-e5s1, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe5s1
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Я, моя родина, мої друзі» (Англійська мова, 5 клас) — pe5s1

**Брати, коли розділ `e5s1` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s1.js`: `SLID.pool("eng", { id: "pe5s1", section: "e5s1", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s1` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s1, 2026-11-20)
**Файл:** content/eng/pool-g5-e5s1.js — пул `pe5s1`, 57 вправ (a01–a57), 6 уроків (l1–l6; boss l7 без вправ), статус draft.
`validate --pool pe5s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s1 --strict` — лише «ще не verified». Браузерний `test-answer-ui.py --pool` не запускався (немає Python-модуля playwright) — CI / верифікатор. Build не запускав.

**Покриття урок × sk (кожна пара ≥ 3, рівні 1–3; sk — лише з оцінюваних екранів уроку):**
| Урок | sk → вправи |
|---|---|
| l1 | vocab a01–a06 (1,1,2,2,3,3) — інших sk в уроці немає |
| l2 | read a07 a08 a09 · gram a10–a14 · vocab a15 a16 a17 · write a18 a19 a20 |
| l3 | gram a21–a26 |
| l4 | gram a27–a32 |
| l5 | vocab a33 a34 a35 · gram a36 a37 a38 · func a39 a40 a41 · read a42 a43 a44 · phon a45 a46 a47 |
| l6 | gram a48–a51 · func a52 a53 a54 · read a55 a56 a57 |

**Типи:** gaps 22, word 10, match 7, build 5, pick 4, stress 3 (phon l5), choice 3 і multi 3 (лише read). 

**Джерело (`src`):** `mpim` (МП-ІМ, program: true; PDF завантажено 2026-11-20, SHA-1 43925b25…, як у facts/eng.md; друк. = PDF): с. 20 — тема «Я, моя родина, мої друзі» (родинні зв'язки, професії батьків, друзі й уподобання) — vocab, read, write, phon; с. 21 — Interrogatives (Yes/No, Wh-), Determiners: demonstratives, quantity (any), be like — l2 gram, l4, func l5/l6; с. 22 — Pronouns: possessive, Present simple — l3, l5 gram, l6 gram. Номерів вправ не вигадував.

**Словники:** нових слів і форм поза уроками e5s1/e4s1 немає; усі звірені верифікатором розділу (reports/verify/e5s1.md §2): grandchild (OALD a1 https://www.oxfordlearnersdictionaries.com/definition/english/grandchild — тому в ключі a03), only child (https://dictionary.cambridge.org/dictionary/english/only-child), whose (https://dictionary.cambridge.org/grammar/british-grammar/whose), its/it’s, this/that/these/those (https://dictionary.cambridge.org/grammar/british-grammar/this-that-these-those), have got short answers (https://dictionary.cambridge.org/grammar/british-grammar/have-got-and-have), What is she like? (https://www.oxfordlearnersdictionaries.com/definition/english/like_1). Наголос `stress` — лише слова, підкреслені в уроці, з одним наголосом у CD і OALD (таблиця §2 звіту): dentist, mechanic, police, photographer (l5), husband, daughter (l1).

**Розв'язання й друга правильна відповідь (усі 57 розв'язано; `solution`+`check` app/lang.js для gaps/pick/stress/match — ок):**
- `build` — усі впорядковані підмножини tiles ∪ extra через `SLID_LANG.check(…, "en")`: a13, a30, a41, a50 приймають лише ключ; a24 — «Whose phone is this» і «Whose is this phone» (обидва в ключі). Усі питальні build — велика перша плитка + `keepCase: true` (розповідний відповідник відсічено). a41: з пасток складається «What is your mum doing?» — граматичне, але питає про «зараз», а умова — «wants to know the job» (контраст уроку l5 #3).
- `word` (`wordVerdict`, en): a03 granddaughter/grandchild; a06 grandparents (+ grandma and grandad в обох порядках); a12 have («have got» — ні); a19 any (лише заперечення: some/any у питаннях не оцінюю — PITFALL writer-pe4s2); a23 their з питанням «Whose cat is it?» (PITFALL verifier-e5s1: інакше «a cat»); a32 these з «Write this, that, these or those» в body (інакше my/the books); a49 doesn’t з `contractions: true` (does not — ок). Кінцевих .!? у ключах немає.
- this/that (PITFALL writer-e5s1): у кожному пропуску варіанти різняться лише числом при явно заданій відстані (a27 «in her hands», a28 «aren’t near»), або лише відстанню при явних «in her hand» / «isn’t near Mum» (a29).
- have got: короткі відповіді без got; a/any — лише в ствердженні/запереченні (a11, a14, a19), у питаннях any не оцінюється, крім build a13 (плитки фіксовані).
- whose: пастка — «Who» (як в уроці l3 #7); who’s у пулі не вжито (в уроці не пояснено).
- `match`: у кожного лівого рівно одна доречна права (a17 grandma — без grandmother; a40 «Where…? – In Kharkiv»).

**Герої — лише канон** (нових немає): Oksana (Dmytro, Petro, Olena — nurse у Poltava, Nadiia, Denys, Mykola й Hanna, собаки Bim і Sirko, Halyna), Andrii (Sofiia, п'ять кузенів, тато engineer, Nina — teacher, Vasyl — driver, тітка Iryna, друг Yaroslav), Mariia (only child, без тварин, мама dentist, тато police officer, дядько Oleh — photographer), Taras (два брати, Zlata, собака й кішка, мама artist, Uncle Roman, Aunt Liudmyla — dentist, Ostap), Emma (Tom, кішка Snowy). Дрібні нові деталі: Mariia «would like a dog» (a09); тато Mariia працює в Kharkiv і любить роботу (a40); Halyna любить музику (як l6 #4); Liudmyla «looks after children’s teeth» (a44).

**Спірне (верифікатору):**
1. a41 build — пастки is/doing складають граматичне «What is your mum doing?» (відсічено умовою «job»); якщо вважаєте другою відповіддю — замінити пастки на «is» (як boss T5).
2. a32 — Engine: «those» на ключ «these» дає «Almost: check the spelling.» (відомий ENGINE verifier-e5s1, engine-eng-rule-tables п. 2).
3. a47 stress змішує l5 з husband, daughter з l1 (підкреслені в l1 того ж розділу).
4. a33 match: «A dentist» ↔ «looks after sick people» не вважаю правильним (визначення уроку l5 #4 розводять nurse/dentist).
