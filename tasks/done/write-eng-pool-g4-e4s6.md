---
claimed_from: todo
claimed_at: 2026-11-20T10:59:41.150Z
id: write-eng-pool-g4-e4s6
type: write-pool
subject: eng
grade: 4
section: e4s6
depends_on: [write-eng-g4-e4s6, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe4s6
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Nature and weather» (Англійська мова, 4 клас) — pe4s6

**Брати, коли розділ `e4s6` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s6.js`: `SLID.pool("eng", { id: "pe4s6", section: "e4s6", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s6` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s6, 2026-11-20)
- Файл: content/eng/pool-g4-e4s6.js, пул `pe4s6`, 56 вправ a01–a56; status draft. validate --pool pe4s6 — 0 помилок, 0 попереджень; personalization-qa --pool pe4s6 --strict — лише «ще не verified».
- Покриття (урок × sk, рівні 1–3 у кожному уроці): l1 vocab 4 / phon 3; l2 gram 6 / write 3; l3 gram 5 / func 4; l4 vocab 3 / read 3 / gram 3 / phon 3; l5 gram 6 / write 3; l6 vocab 3 / gram 4 / read 3. Усі sk — з оцінюваних екранів уроку. Перша сесія (POOL_FIRST) — без попереджень.
- Типи: gaps, word, pick, build, match, stress (phon), choice (read: a29, a54 — за уточненням оркестратора). Межі пулу дотримано (gaps ≤ 6, build ≤ 9 / 2).
- Джерело: `top34` з `program: true` — ТОП 3–4, PDF с. 63 (тема «Природа і навколишнє середовище… — довкілля, природні явища» і граматика 4 кл.: comparatives, ‘how’ questions for measurement and size, Present Continuous) — сторінку звірено `pdftotext -f 62 -l 63` (PDF той самий, SHA-1 як у facts/eng.md). Усі `src` — «top34 с. 63». Вправи власні, з підручників нічого.
- Розв'язано кожну вправу; `word` прогнано через `SLID_LANG.wordVerdict(s, v, "en")`, `build` — усі перестановки підмножин плиток (k−1, k, k+1) з extra через `SLID_LANG.check` (скрипт: scratchpad/pe4s6/js/run.mjs): рушій приймає лише ключ у кожному з a15, a19, a21, a46, a52.
- Друга правильна відповідь — що вирішено:
  - a04 autumn: у ключі й AmE `fall` (TQ-122: AmE-лексику рушій не нормалізує; контекстом не відсікти).
  - a31 forest / wood (як в уроці l4); a39 colder / cooler (як в уроці l5); a40 bigger / larger; a49 rubbish / litter (UK) / trash / garbage (AmE, OALD «North American English»).
  - a33 — ключ `long` (відповідь «346 km long»; *How high* для річки не підходить); навмисно не взяв *How ___ is Ben Nevis* (tall).
  - build: a15, a52, a46 — питальний порядок з тих самих плиток відсічено умовою «tells … Make his/her sentence» (як e4s6l6, e5s5); a19, a21 — «Make his/her question» відсікає розповідний порядок. Обставин місця/часу в плитках немає (фронтування). a21: «the boys are doing what» (ехо-питання, розмовне) рушій не прийме — не стандарт A1, як рішення verifier-e4s6 щодо «In Lviv is it raining».
  - a46: «Lviv is hotter than Kyiv» — проти даних на екрані (28 / 21 °C); плитки `today` немає, щоб не було «Kyiv is hotter today than Lviv».
  - gaps: дистрактори погоди — лише ті, що суперечать умові (rain ↔ sunny), без cloudy/windy/hot, які можуть бути разом із дощем; match a02 — sun/rain/snow/wind (без cloud: дощ ⇒ хмарно).
- Almost-вердикт (ENGINE-рядки verifier-e4s6 «wind» / e5s5): `word` на weather-прикметники -y не брав. Лишилось: a28 «mountains» і a31 «forests» після «a» → «Almost: check the spelling.» (вердикт правильний — неправильно, мітка неточна); чекає engine-eng-rule-tables п. 2.
- Факти лише з уроку / facts verified (verifier-e4s6): Thames 346 km, London on the Thames, Ben Nevis 1,345 m Scotland, Dnipro ≈ 2,200 km, Hoverla 2,061 m, Ukraine ≈ 600,000 km², UK ≈ 240,000 km², Kyiv usually colder than London in winter (a45). Температури «today» (a39, a41, a44, a45, a46) — вигадана погода одного дня на екрані, не клімат.
- Герої — лише канон: Oksana (village near Poltava, brother Dmytro, Nazar), Andrii (Kyiv, sister Sofiia), Emma (England, town with a river and a forest, brother Tom), Taras (Lviv). Нових героїв немає; Taras's brothers (e4s7) не брав.
- Словники (curl, 2026-11-20): наголос — CD https://dictionary.cambridge.org/dictionary/english/{assistant,saturday,garden,computer,autumn,winter,weather} (ˈ на 1-му складі; assistant, computer — 2-й); OALD https://www.oxfordlearnersdictionaries.com/definition/english/{assistant,saturday,garden_1,computer} — збігається. Слова stress — лише підкреслені в уроках e4s1–e4s6 (winter, summer, autumn, weather, river, forest, mountain, nature + Saturday e4s3, garden e4s2, assistant e4s4, computer e4s5). fall — CD «US (UK autumn)»; litter — OALD litter_1; trash — OALD trash_1 «(North American English)»; larger — CD large; форми sunnier, windier, hotter, bigger — OALD/CD за звітом reports/verify/e4s6.md.
- Не запускав: test-answer-ui.py (браузерний; під паралельним запуском — на оркестраторі).

## Нотатки верифікатора (verifier-pe4s6, 2026-11-20)
- Вердикт: **verified** — reports/verify/pe4s6.md. Кожну з 56 вправ розв'язано, ключі збіглися; `build` перебрано всі перестановки всіх підмножин плиток з extra через SLID_LANG.check — рушій приймає лише ключ; ключі `word` без кінцевого знака; stress — один наголос у CD і OALD (URL у звіті); факт a45 (Kyiv colder than London in winter) — en.wikipedia Kyiv/Climate of London, ЕСУ, uk.wikipedia; 8 фрагментів ≥ 12 слів — збігів немає.
- Правки (3, дрібні): a42 — рамка без yesterday/was (немає в уроках); a49 — відкрите питання «What do we put in the bin?» (paper) → «Don’t leave it in the forest! Write the word from the lesson.» + «Put ___ in the bin.»; a53 — «our class» → «our school» (Dmytro, 6 років, не в класі Oksana). id не змінювалися.
- Спірні місця автора 1–4 (fall, forest/wood…, a33 long, build-контексти) — прийнято. validate --pool pe4s6 — 0/0; personalization-qa --strict — чисто. TQ немає.
- Не запускав test-answer-ui.py --pool pe4s6 (браузер, паралельний запуск) — оркестратору.
