---
claimed_from: todo
claimed_at: 2026-11-20T11:10:11.842Z
id: write-eng-pool-g5-e5s10
type: write-pool
subject: eng
grade: 5
section: e5s10
depends_on: [write-eng-g5-e5s10, engine-eng-diag-pool, engine-eng-tools]
status: review
claimed_by: writer-pe5s10
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Україна і країни виучуваної мови» (Англійська мова, 5 клас) — pe5s10

**Брати, коли розділ `e5s10` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g5-e5s10.js`: `SLID.pool("eng", { id: "pe5s10", section: "e5s10", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match, а для `sk` phon — stress, для read — choice/multi (POOL_TYPES); кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe5s10` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe5s10, 2026-11-20)
**Результат:** `content/eng/pool-g5-e5s10.js`, пул `pe5s10`, 71 вправа a01–a71, статус draft. `node tools/validate.mjs --pool pe5s10` — 0 помилок, 0 попереджень (два попередження pick «форма кнопки видає відповідь» у a46, a56 закрито хибними групами `[!…]`). `personalization-qa --pool pe5s10 --strict` — лише «ще не verified». Build не запускав (паралельний запуск).

**Покриття (урок × sk, рівні 1–3 у кожній парі):** l1 vocab 3, cult 3, gram 3, read 3; l2 cult 3, vocab 3, phon 3, write 3, gram 3, read 3; l3 cult 5, vocab 3, read 3; l4 gram 6, write 3; l5 gram 7, write 4; l6 read 3, func 4, write 3. Boss l7 — без вправ. Типи: gaps 27, word 15, pick 7, build 6, match 5, stress 3, choice 4, multi 4. choice і multi — лише для `read`. Для `func` у l6 замість choice взято gaps, word, match і build.

**Джерело:** `mpim` (program: true), МП-ІМ, PDF https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf. PDF я відкрив сам (curl + pdftotext), SHA-1 43925b25…, як у facts/eng.md. Сторінки: с. 20 — 5 кл., теми «Україна», «Країни виучуваної мови», функції «порівнювати», «аргументувати свій вибір» (l1–l3 vocab/cult/read/phon/write, l6 усе); с. 21 — Adjectives «Comparatives and superlatives», Determiners «Articles: the + superlatives» (l2 gram — the з назвами країн як найближчий рядок програми, l4, l5); с. 22 — «Preposition: Simple and complex» (l1 gram in/on).

**Словники (curl, 2026-11-20).** Кожне слово для `stress` має один наголос і в CD, і в OALD: Ukrainian /juːˈkreɪ.ni.ən/, British /ˈbrɪt.ɪʃ/, Irish /ˈaɪə.rɪʃ/ (OALD /ˈaɪrɪʃ/), American /əˈmer.ɪ.kən/, Canadian /kəˈneɪ.di.ən/, Australian /ɒsˈtreɪ.li.ən/, Dublin /ˈdʌb.lɪn/, Wellington /ˈwel.ɪŋ.tən/. Посилання: https://dictionary.cambridge.org/dictionary/english/<слово>, https://www.oxfordlearnersdictionaries.com/definition/english/<слово>. Усі вісім слів у l2 підкреслені `<u>` (info «English-speaking countries» і «Countries and nationalities»). Правила in (не of) після superlative з місцем і «Not: most biggest» звірено за CD Grammar «Comparison: adjectives» (reports/verify/e5s10.md §2): https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-and-most

**Факти:** лише ті, що є в уроках e5s10 (reports/verify/e5s10.md §2), і facts/eng.md К1. Площі 600,000 / 240,000 km² і висоти 2,061 / 1,345 m у вправах на порівняння подано в `body`. Нових фактів немає.

**Герої — канон.** Нових героїв я не вводив. Нові дрібні деталі: Grace живе у Washington, DC (a28); у Chloe є кузен у Wellington, а сама вона живе в Canberra (a29); Owen — «Welsh and British» (a39); Sofiia вважає Café Smachno найкращим кафе Kyiv (a55); у Andrii бабуся й дідусь у Chernihiv (канон e5s1/e6s5, a10, a68); Oksana щолипня їздить до дядька Ivan в Odesa (канон, a11, a64; про плавання нічого не пишу). Mariia «loves Odesa because she loves the sea» (a65) узято з тексту l6.

**Розв'язання й друга правильна відповідь.** Розв'язав кожну вправу. Скрипт на app/lang.js (vm) зробив таке: gaps — parseGaps без помилок; word — кожен ключ зараховано, із крапкою теж; у keepCase a23/a24 мала літера не зараховується, так задумано. Для build перебрав усі впорядковані підмножини tiles + extra через `check(…, "en")` (a47: 1956, a57: 13699). Рушій приймає рівно порядки з `answer`. Повні перестановки a47/a49/a68 переглянув вручну.
- Друга відповідь у nationality-словах. Шотландія, Англія й Уельс дають «British» — тому `word` з «and British» у `after` (a37) або з умовою «the word for people from the UK» (a38). Відповідь «European» у `word` відсічено питанням «What is his nationality?» (a18) і умовою «Write the word…» (a23, a24). До a24 у ключ додано «Canadians».
- Comparatives і superlatives. Хибного «more + adj» після «one of the» немає ніде (PITFALL verifier-e5s10), а хибні варіанти там — beautifulest/famousest. Superlative скрізь стоїть з іменником (PITFALL pe4s7). У a52 у ключі highest і tallest. У a43, a45, a52, a55, a59 базове слово задано в `body` («Use big / bad / high / good / famous»), щоб відсікти larger, nicest, oldest.
- in/of після superlative (a53, a61, a71 extra «of Ukraine») — за уроком l5 і CD «Not: … of the city».
- because: у a65 є `body` «Each sentence says why», хибний варіант — so (як після правки верифікатора в l6). У a68 пастка — «why», а не «so»: з «so» складається правильне «My grandma lives there so I want to visit Chernihiv».
- pick a06, a34: місто зафіксовано в `body`, тож хибним може бути лише слово напрямку чи країни.
- a35 (pick «Find the words that are cities in the UK.»): Dublin — пастка, бо Ireland не в UK.

**Спірне:**
- a47: як і в уроці l4, `answer` приймає обидва питання («Is Ben Nevis higher than Hoverla?»), хоча умова каже «Make a true sentence». Це поблажливість, а не помилка.
- Порядок без коми «In Ukraine Kyiv is…» і «Because my grandma lives there I want…» я поклав у `answer` (PITFALL pe4s3).
- l2 gram (the з назвами країн) посилається на МП-ІМ с. 21 «Articles». Окремого рядка про артиклі з назвами країн у програмі немає.
