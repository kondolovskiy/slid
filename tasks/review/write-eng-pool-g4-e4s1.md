---
claimed_from: todo
claimed_at: 2026-11-20T10:59:40.988Z
id: write-eng-pool-g4-e4s1
type: write-pool
subject: eng
grade: 4
section: e4s1
depends_on: [write-eng-g4-e4s1, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe4s1
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Me, my family and friends: where we live» (Англійська мова, 4 клас) — pe4s1

**Брати, коли розділ `e4s1` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s1.js`: `SLID.pool("eng", { id: "pe4s1", section: "e4s1", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s1` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s1, 2026-11-20)
**Файл:** content/eng/pool-g4-e4s1.js — пул `pe4s1`, 55 вправ (a01–a55), 6 уроків (l1–l6; boss l7 без вправ).
`validate --pool pe4s1` — 0 помилок, 0 попереджень; `personalization-qa --pool pe4s1 --strict` — лише «ще не verified»; euphony — 0. Браузерний `test-answer-ui.py --pool` не запускався (у контейнері немає Python-модуля playwright) — CI / верифікатор.

**Покриття урок × sk (кожна пара ≥ 3, рівні 1–3):**
| Урок | sk → вправи |
|---|---|
| l1 | func a01 a04 a07 · phon a02 a05 a08 · gram a03 a06 a09 |
| l2 | read a10 a14 a18 · vocab a11 a15 a19 · gram a12 a16 a20 · func a13 a17 a21 |
| l3 | gram a22 a25 a28 a29 · vocab a23 a26 a30 · phon a24 a27 a31 |
| l4 | vocab a32 a34 a36 · read a33 a35 a37 |
| l5 | write a38 a41 a44 · gram a39 a42 a45 · func a40 a43 a46 |
| l6 | write a47 a50 a53 · vocab a48 a51 a54 · phon a49 a52 a55 |

**Типи:** gaps, word, pick, build, match + `stress` для `sk: phon` (уроки l1, l3, l6 мають оцінювані екрани `stress` — інакше пара (урок, phon) лишилася б без вправ; CONTENT_SCHEMA §10 дозволяє). `choice`/`order` не вживав.

**Джерело (`src`):** лише програма, `top34` з `program: true` (facts/eng.md «Джерела», ТОП 3–4, PDF = друк.): с. 62 — тема «Я, моя родина і друзі — місцепроживання, населені пункти», функції привітатися / попрощатися / представити себе, ’s; с. 63 — a/an with jobs (a22, a25, a28, a29); с. 54 — бланк з ім'ям, національністю, адресою, віком (l6). to be, have got, live/lives в інвентарі ТОП немає (повторення за plan.js, reports/verify/e4s1.md §1) — для них `src` = с. 62 (тема). Номерів вправ не вигадував.

**Словники:** слова й форми — лише з уроку e4s1; звірені верифікатором розділу (reports/verify/e4s1.md §2): CD/OALD для mum, grandad, auntie/aunty, surname, a/an перед голосним звуком (https://dictionary.cambridge.org/grammar/british-grammar/a-an-and-the), «Have you got…? – Yes, I have. / No, I haven’t.» (https://www.oxfordlearnersdictionaries.com/definition/english/have_1), English (https://www.oxfordlearnersdictionaries.com/definition/english/english_2), Good evening / Good night (https://www.oxfordlearnersdictionaries.com/definition/english/good-evening, https://dictionary.cambridge.org/dictionary/english/good-night). Наголос і поділ на склади — ті самі, що в `<u>` і `stress` уроку (таблиця §2 звіту: hello, goodbye, afternoon, doctor, teacher, driver, pilot, engineer, artist, farmer, surname, Ukrainian, nationality).

**Розв'язання й друга правильна відповідь (усі 55 розв'язано):**
- `word` — прогнано через `SLID_LANG.wordVerdict(…, "en")` (node, vm): a15 aunt/auntie/aunty; a14 sister / little sister; a16 haven’t з `contractions: true` (have not — ok; hasn’t, haven’t got — ні); a21 have («have got» — ні, OALD); a50 Ukrainian з keepCase. Кінцевих .!? у ключах немає. a26 «She is an ___» відсікає painter; a34 city (town — «not very big»).
- `build` — перебрано всі перестановки tiles ∪ extra через `SLID_LANG.check` (lang en): a09 приймає лише «Tom is eight and I am ten» і «I am ten and Tom is eight» (обидва в ключі; «Tom is ten…» — неправда за умовою); a28 — лише «Emma’s mum is an engineer» (питальний порядок відсічено «Emma tells», як e5s5); a45 — «Where does Andrii live?»; a46 — «I live in a village near Poltava» і «I live near Poltava in a village» (обидва в ключі).
- `match` — у кожного лівого рівно одна доречна права: a04 «You meet Emma at 8 pm» (лише Good evening; Good night — «You go to bed»), a43 «Where do you live?» ↔ «I live in Kharkiv».
- `gaps` — Good evening як прощання (OALD) не оцінюється (поради reports/verify/e4s1.md §6 п. 3); a/an лише зі словами уроку (без hour, university); Hi/Hello, Bye/See you не стоять варіантами в одному пропуску.

**Герої — лише канон** (inbox NOTE): Oksana (Zelena Dolyna, 7 Sadova Street; брат Dmytro; мама Olena, брат мами Ivan — Odesa), Andrii (Kyiv, 25 Lisova Street; сестра Sofiia 7; тато engineer, бабуся teacher, тітка Iryna artist), Emma (small town, England; брат Tom 8; мама engineer, дідусь cook; тітка Lucy, кузен Jack), Mariia (Kharkiv, друг Danylo), Taras Koval (Lviv, 12 Zelena Street), Ms Kravets, Mr Koval, Mrs Hrytsenko. Нових героїв немає. Дрібні нові деталі: у Jack червоний велосипед (a20); дідусь Emma живе в її місті (a37); Ms Kravets — «an English teacher» (a25).

**Спірне (верифікатору):**
1. a43: відповідь «It’s 25 Lisova Street, Kyiv.» парується лише з «What’s your address?» — на «Where do you live?» природніше «I live in…» / «At…»; вважаю однозначним.
2. a46: другий порядок «I live near Poltava in a village» узято в ключ (без коми — граматичне); якщо верифікатор вважає його неприродним — лишити, бо відкидати правильне гірше.
3. a54: пропуск на початку рядка бланка («___: 10») → «age»; регістр не оцінюється (keepCase немає).
