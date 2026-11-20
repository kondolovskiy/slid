---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.809Z
id: write-eng-pool-g5-e5s9
type: write-pool
subject: eng
grade: 5
section: e5s9
depends_on: [write-eng-g5-e5s9, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe5s9
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Подорож» (Англійська мова, 5 клас) — pe5s9

**Брати, коли розділ `e5s9` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s9.js`: `SLID.pool("eng", { id: "pe5s9", section: "e5s9", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s9` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s9, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s9.js`, пул `pe5s9`, 65 вправ a01–a65, статус draft. `node tools/validate.mjs --pool pe5s9` — 0 помилок, 0 попереджень; `personalization-qa --pool pe5s9 --strict` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk, рівні):** l1 gram 3, func 3, read 3; l2 vocab 3, gram 3, func 3, phon 3, read 3; l3 gram 5, func 3, write 3; l4 gram 5, func 3, read 3; l5 gram 4, phon 3, write 3; l6 read 3, write 3, gram 3. Кожна пара має рівні 1, 2, 3. Boss l7 — без вправ. Типи: gaps 21, word 13, pick 8, choice 9, multi 5, match 5, build 3, stress 3.
- l2 phon — `stress` лише на 4 словах, підкреслених в уроці (seaside, countryside, museum, holiday; один наголос у CD і OALD — reports/verify/e5s9.md §3).
- l5 phon в уроці — не наголос, а «-ed як окремий склад» (choice). Тому `stress` тут не підходить: a51 choice, a52 multi («звук ↔ буквосполучення», скіл math-pool-diag §2в), a53 pick «Find the words that have an extra part with -ed.». Слова з /ɪd/: visited, wanted (урок), started (l6 читання).

**Джерело:** `mpim` (program: true), МП-ІМ, PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. Сторінки звірено цієї сесії через pdftotext; SHA-1 43925b25… збігається з facts/eng.md. с. 20: тема «Подорож — улюблені напрямки подорожі», функції «аргументувати свій вибір», «запитувати та надавати інформацію» (vocab, func, read, l2 phon). с. 19: «Стисло описує свої плани на вихідні або на канікули», «Описує у щоденнику… екскурсії» (write l3, l6). с. 21: «Future with be going to: questions, intentions, predictions», «Future with will…» (gram l3, l4, l6; func l3). с. 22: «Would: questions with ‘like’», «Past simple: affirmative…», «Preposition» (gram l1, l2, l5; phon, write l5).

**Словники:** нових форм поза уроком немає. Наголос seaside, countryside, holiday (1-й склад) і museum (2-й) — CD https://dictionary.cambridge.org/dictionary/english/<слово> і OALD (seaside_1, holiday_1, museum, countryside): verifier-e5s9 відкривав їх 2026-11-20, звіт reports/verify/e5s9.md §3. Past Simple: stopped, studied, tried, travelled (UK) — CD Grammar past-simple, OALD stop_1, travel_1 (там само).

**Друга правильна відповідь — як відсічено:**
- `word` на Past Simple (a49, a55, a60, a61) — у `before` є часова ознака (Last summer, Yesterday, This morning), у body — «verb → ?» (PITFALL verifier-e5s9). learn не вжито ніде (learnt/learned).
- a04 because: ключ ["because", "as", "since"]. a18: ключ ["mountains", "Carpathians"] (after «… climb Hoverla» відсікає forest).
- seaside / beach / sea: жодного `word` з цими ключами немає, лише gaps з відмінними варіантами; з beach пасткою не ставлю «at» («at the beach» нормативне).
- will / be going to: will ніде не стоїть хибним варіантом поруч із going to. a30 — дистрактори відрізняються часом (every year, last year); a32 «{*I’ll|I’m} close the window» — «I’m close» неграматичне; a31 match — за змістом (tickets ↔ план).
- Підмети з going to — особи або «my mum and I» / «Andrii and I», не family (PITFALL writer-e5s9).
- `build` — усі перестановки всіх підмножин плиток з extra перебрано через `SLID_LANG.check` (node vm, app/lang.js; по 1956 порядків): a29 → лише «My sister isn’t going to come with us»; a38 (keepCase, питання з «Is») → лише ключ; a64 → обидва порядки з tomorrow, і обидва є в ключі. Переглянув і решту повних перестановок: граматичних поза ключем немає (обставина «this summer» на початку питання потребує коми — NOTE verifier-e4s6). Пастки extra — інші форми (comes, Does, visited).
- Ключі `word` — без кінцевого знака. AmE-написання хибним варіантом ніде немає (travelled — без «traveled»).
- match a05, a10, a17, a31, a41: перебрав усі призначення, розв’язок єдиний (a10: якщо «visit a mountain», то «climb a museum» неможливе).

**Герої — канон (нових немає):** Oksana — у липні в Odesa в дядька (a22, a35), у серпні в Carpathians з татом (a28, a62); Mariia — єдина дитина, любить плавати (e4s3), у родині тато хоче на море, мама — в гори (як l2: a09, a13, a24); Tom не вміє плавати — a55 «Yesterday Tom tried to swim»; Emma — щоденник з України узгоджено з boss T7 (Day 2: walked around Odesa, Day 3: beach, Day 4: Kyiv); Daryna (Kyiv) — тітка в Odesa, є сестра (a14, a29), влітку була в Lviv (a49, a56); Andrii — бабуся в Chernihiv, тато працює (a25, a40), до Taras у Lviv з татом у п’ятницю потягом (a43, a45). Нові дрібні деталі: Sofiia хотіла б у Carpathians (a08); Mariia хотіла б відвідати Oksana в селі (a23); Andrii з татом минулого літа були в Kamianets-Podilskyi (a50, a63–a65).

**Спірне для верифікатора:**
1. l5 phon — choice/multi/pick, а не `stress` (див. вище).
2. a04 — as і since в ключі, хоча урок учить лише because.
3. a32 — I’ll / I’m у gaps: I’m відсічено граматикою, а не правилом рішення в мить мовлення.
4. Рівень 3 у read — multi з 4 тверджень або питання «план чи минуле» (a59).
5. a11 «lots of museums {in a big city|in the mountains}»: варіант «at the seaside» свідомо не брав (Odesa — місто біля моря з музеями).

## Нотатки верифікатора (verifier-pe5s9, 2026-11-20)
**Вердикт: verified** — reports/verify/pe5s9.md. Пул писав не я. Усі 65 вправ розв'язано самостійно — розбіжностей із ключем немає; друга правильна відповідь не знайдена (Past Simple з часовою ознакою, will / going to, a04, a32, at/on the beach, seaside/beach). `build` a29, a38, a64 — перебір усіх підмножин і перестановок з extra через app/lang.js (1956 станів кожна): приймаються лише порядки з ключа. Ключі `word` — без кінцевого знака. `validate --pool pe5s9` — 0/0; `personalization-qa --pool pe5s9 --strict` — без зауважень. Факти (5) — ЕСУ + en.wikipedia, відкрито в сесії; наголос і форми — CD + OALD/Wiktionary (curl). WebSearch 10 фрагментів ≥ 12 слів — збігів немає. Спірне автора 1–5 — погоджуюсь (§4 звіту).
**Правки (4):** a08 (Andrii → Lviv / old towns, як a06 і l1), a09 (мама Mariia → the Carpathians / mountains, як l2 і a24), a15 hint і a36 steps — коротші за 8 слів. Ключі й id не змінено. `status: "verified"`. Людині — нічого.
