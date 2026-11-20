---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.730Z
id: write-eng-pool-g5-e5s7
type: write-pool
subject: eng
grade: 5
section: e5s7
depends_on: [write-eng-g5-e5s7, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe5s7
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Рідне місто/село» (Англійська мова, 5 клас) — pe5s7

**Брати, коли розділ `e5s7` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s7.js`: `SLID.pool("eng", { id: "pe5s7", section: "e5s7", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s7` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s7, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s7.js`, пул `pe5s7`, 64 вправи a01–a64, статус draft. `node tools/validate.mjs --pool pe5s7` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s7 --strict` — лише «ще не verified». `test-answer-ui.py --suite content` — не запущено (у контейнері немає Python-модуля playwright; у CI). Build не запускав (паралельний запуск).

**Покриття (урок × sk, рівні):** l1 vocab 5, phon 3; l2 gram 6, func 3; l3 vocab 4, gram 4, read 3; l4 func 6, gram 3, read 3; l5 read 3, func 3, vocab 3; l6 vocab 3, read 3, cult 3, phon 3, write 3. Кожна пара — рівні 1, 2, 3. Boss l7 — без вправ. Типи: gaps 19, word 9, choice 9, match 7, stress 6, pick 5, build 5, multi 4 (choice/multi — лише read і cult).

**Джерело:** `mpim` (program: true), МП-ІМ, PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf (SHA-1 43925b25c52b569201658248a0183b8c3ad90ff7, відкрито й `pdftotext` у цій сесії): с. 20 — тема «Рідне місто/село», «Прогулянка містом/селом» (l1, l5 vocab, l6 vocab/cult/phon/write); с. 21 — Imperatives, Interrogatives (Yes/No, Wh-), Negative declarative, «multiple clauses … for instructions or directions» (l2 gram/func, l4 gram); с. 22 — Preposition simple and complex (l3 vocab/gram); с. 18 — «Розпитує та пояснює, як дістатися певного місця з опорою на карту чи план» (l4 func, l5 func); с. 16 — читання: тексти про місця й культуру, «інформацію, подану в … картах» (усі read). there is/are окремим рядком у с. 21–22 не названо — віднесено до с. 21 (interrogatives / negative declarative), як у шапці розділу за plan.js.

**Словники (наголос, curl 2026-11-20):** CD UK — between bɪˈtwiːn, opposite ˈɒp.ə.zɪt, library ˈlaɪ.br…, museum mjuːˈziː.əm, cinema ˈsɪn.ə.mɑː, station ˈsteɪ.ʃ…, history ˈhɪs.t…, famous ˈfeɪ.məs, poem ˈpəʊ.ɪm, writer ˈraɪ.tə — https://dictionary.cambridge.org/dictionary/english/<слово>; OALD — ті самі з одним наголосом: https://www.oxfordlearnersdictionaries.com/definition/english/<слово> (opposite_1). У `stress` — лише слова, підкреслені `<u>` в info уроків (l1: library, museum, cinema, station; l3: between; l6: history, famous, writer, poem); поділ на склади — як в уроці.

**Мапа:** `img/eng/e5s7/town-map.svg`, той самий `cap` «A map of the centre of Emma’s town», credits — розділу e5s7. За координатами SVG: північ High Street із заходу — Café, Bank, Library, Post office, Cinema; південь — Park (навпроти café і bank), Museum (навпроти library), Station Road (навпроти post office, до Station), School (навпроти cinema). Маршрути з лівим/правим відносно руху: a43 (станція → ліворуч = на захід → після museum ліворуч park, library/bank праворуч), a45 (праворуч = на схід до school → через вулицю cinema), a46 (до park — ліворуч; пастка `right`), a42 (з cinema на захід: post office, library, bank), a49 (post office → через вулицю → Station Road до кінця → station).

**Друга правильна відповідь — як відсічено:**
- there is + перелік (PITFALL verifier-e5s7): у вправах на is/are переліків немає.
- along / across (PITFALL verifier-e4s7): контраст «to the end» / «to the other side» (a31, a44, a45, a49).
- straight on: ніде не хибний варіант і не ключ; «Go straight {ahead|left}» (a34), «↑ {Go straight ahead.|Turn right.}» (a29).
- a34: «Go {along|across} this street. Turn right…» не взято — across + turn теж можливе; замість — «straight {ahead|left}».
- Go left / Walk across — не робив `word` на дієслово-імператив (друга відповідь); a37 — gaps goes/go + Go/Goes.
- a17 match: факти села на екрані (body), тож «Is there a museum? – Yes, there is.» хибне за змістом; «How many…? – No, there aren’t» — неграматичне.
- a33 match: it / there розрізняють «Is it far?» і «Is there…?».
- a03, a49: ключ ["station", "train station", "railway station"]. a14: «aren’t» + contractions (are not ✓). a25: «It’s» + contractions (It is ✓); «The museum is» не приймається — підказка на зразок «… between».
- a28, a40, a55, a58 multi — лише твердження, які текст/мапа підтверджують або спростовують (нічого «не сказано»).
- `build` — усі перестановки всіх підмножин плиток з extra через `SLID_LANG.check` (node, app/lang.js): a12 (1 956), a24 (13 699; обидва порядки «library and cinema» / «cinema and library» у ключі), a32 (109 600), a46 (13 699), a63 (325) — приймаються лише ключі. Перша плитка з великої + `keepCase` (розповідний/питальний відповідник, «turn left… and Go…»).
- Ключі `word` — без кінцевого знака; перевірено регістр, кінцевий «.», прямий апостроф.

**Герої — канон:** Oksana і Zelena Dolyna (школа, один магазин, церква, пошта, автобусна зупинка, дві ферми; немає музею й кінотеатру), Emma, Tom, мапа Emma, Andrii і Sofiia (Kyiv), Mariia (Kharkiv), Taras (Lviv, «in my street»), tourist / visitor. Нових героїв немає. Маршрути в Kharkiv/Lviv/Kyiv (a38–a40) — умовні, без реальних назв вулиць.

**Спірне для верифікатора:**
1. a37 (l4 gram, lvl 3): контраст «Oksana goes» (Present Simple 3-тя особа, 4 кл. e4s3l3) і імператив «Go» — матеріал попереднього класу.
2. a55: «more than 200 years old» — виведення з 1798 (у l6 fbText «more than 200 years ago»).
3. a64: «Poltava … famous for the writer» — формулювання outro l6.
4. a32: «Turn left at the church and go along this street» не приймається (keepCase; «turn» з малої) — як у build l5 уроку.
5. a45: «Turn right and walk to the school» — уточнено, щоб «Go across» вело саме до cinema.

## Нотатки верифікатора (verifier-pe5s7, 2026-11-20)
**Вердикт: verified** — reports/verify/pe5s7.md. 64 вправи розв'язано самостійно; маршрути звірено з town-map.svg (знімок Chromium + координати); `build` — повний перебір через `SLID_LANG.check`; матриця урок × sk звірена вручну (кожна пара ≥ 3 вправи, рівні 1–3); наголос — CD + OALD (curl); факти — en/uk.wikipedia + ЕСУ article-887900; WebSearch 6 фрагментів — збігів немає.
**Правки (3):** a25 — у ключ додано «The museum is» (друга правильна відповідь); a46 — пастка `right` → `goes` («Go right along Station Road…» = all the way, OALD right_2 — правильне речення); a55 — «…more than 200 years old» → «1798 is more than 200 years ago.» (рамка розділу, «years old» в уроках немає). Статус → verified.
`validate --pool pe5s7` — 0/0. Не запускав: test-answer-ui, плейтест (немає Python playwright; build — оркестратор).
