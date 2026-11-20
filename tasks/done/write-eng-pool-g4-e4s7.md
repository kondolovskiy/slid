---
claimed_from: todo
claimed_at: 2026-11-20T10:59:41.240Z
id: write-eng-pool-g4-e4s7
type: write-pool
subject: eng
grade: 4
section: e4s7
depends_on: [write-eng-g4-e4s7, engine-eng-diag-pool, engine-eng-tools]
status: done
claimed_by: writer-pe4s7
created: 2026-11-19
source: design-eng
---
# Пул вправ для тренування «Holidays and travel» (Англійська мова, 4 клас) — pe4s7

**Брати, коли розділ `e4s7` verified.** Для 6–11 кл. такі задачі створює `node tools/make-tasks.mjs --write-pool --subject eng --grade N` (після engine-eng-tools).

## Прочитати
Скіли `math-pool-diag` (пули мовних предметів) і `content-author` (eng); docs/CONTENT_SCHEMA.md §10 «Пули мовних предметів»; docs/design/english.md §7, §11.1; зразок — content/ukr/pool-g5-*.js.

## Результат
`content/eng/pool-g4-e4s7.js`: `SLID.pool("eng", { id: "pe4s7", section: "e4s7", status: "draft", sources: [...], items: [...] })`. **id пулу й вправ — ключі прогресу.** Усе англійською, британська норма; вправи власні; лише лексика й граматика уроків розділу; типи gaps/word/pick/build/match; кожен урок × `sk` — ≥ 3 вправи.

## Готово, коли
- [ ] `node tools/validate.mjs --pool pe4s7` — 0 помилок; кожну вправу розв'язано; задача → tasks/review.

## Нотатки агента (writer-pe4s7, 2026-11-20)
**Файл:** content/eng/pool-g4-e4s7.js, пул `pe4s7`, 44 вправи `a01`–`a44`, `status: draft`. Boss e4s7l7 без вправ.
`node tools/validate.mjs --pool pe4s7` — 0 помилок, 0 попереджень; `node tools/personalization-qa.mjs --pool pe4s7 --strict` — бракує лише «ще не verified». Браузерний `test-answer-ui.py --suite content --pool pe4s7` не запускав: у контейнері немає Python-модуля playwright (лише CI).

| Урок | Вправи | sk (≥ 3 на кожну) | Рівні | Типи | src |
|---|---|---|---|---|---|
| e4s7l1 | a01–a07 (7) | vocab 4, func 3 | 1,1,2,2 / 1,2,3 | gaps, word, pick, match | top34 с. 63 |
| e4s7l2 | a08–a14, a44 (8) | vocab 4, gram 4 | 1,1,2,3 / 1,2,2,3 | gaps, word, match, build, pick | top34 с. 63 |
| e4s7l3 | a15–a21 (7) | cult 4, write 3 | 1,2,3,2 / 1,2,3 | match, gaps, word (keepCase), pick | top34 с. 63 |
| e4s7l4 | a22–a28 (7) | gram 4, vocab 3 | 1,2,2,3 / 1,2,2 | gaps, build, word, pick, match | top34 с. 63 |
| e4s7l5 | a29–a36 (8) | gram 5, write 3 | 1,1,2,3,2 / 1,2,3 | gaps, word, pick, build | gram top34 с. 62; write с. 54 (листівка) |
| e4s7l6 | a37–a43 (7) | gram 4, func 3 | 1,1,2,3 / 1,2,3 | gaps, word, pick, build, match | top34 с. 63 |

sk read і phon (є в l1–l3) у пулі не тренуються: тип `stress` і читання тексту з питанням не входили до типів задачі (gaps/word/pick/build/match); якщо треба — окремою правкою.

**Розв'язання (усі 44, app/lang.js у node, vm; скрипт у scratchpad):** gaps/pick — parseGaps/parsePick без помилок; `word` — wordVerdict з правильними, хибними й одруківками; `build` — **усі** впорядковані підмножини tiles + extra через `check(…, "en")`: приймаються рівно порядки з `answer` (a12: 3, a23: 6, a33: 2, a40: 3).
**Друга правильна відповідь — як відсічено:**
- Past Simple (a29–a33, a36): у кожному реченні «Yesterday»; a30 `word` — ще й «visit → ?» у body (відсікає saw).
- will / be going to: going to ніде не варіант gaps/pick; у `word` a43 going to — у ключі (`contractions: true`); a38 — «will not = ?» у body, ключ won’t / will not. a42: варіанти I’ll / I, I’ll / I was (без can).
- along / across (pitfall verifier-e4s7): контраст лише «next to … all the time» vs «to the other side», без bridge; a09 ключ across / over.
- superlatives: «one of the …» не вживано; «the + -est + іменник» (без іменника the можна опустити — тому скрізь іменник після); a24 ключ hottest / warmest; a28 ключ high / tall (CD tall: «Mount Everest is the world's tallest mountain»).
- a21 keepCase: the USA / the US / the United States / the United States of America; «USA» без the — хибне (урок l3 вчить «the UK and the USA with the»).
- `build`: «We’ll swim today, I think» (кома поза плитками) не приймається — як l6 розділу (verifier-e4s7); a12 приймає й «Up the hill walks Taras» (інверсія, за аналогією з прийнятим у l2 «Along the river we walk»).
- Ключі `word` без кінцевого знака.
**Герої — канон:** Andrii (flat, Kyiv), Oksana (Odesa — як l5 розділу), Emma і Tom (сиблінги, Англія), Mariia (Kharkiv), Taras (Lviv; трип до Kyiv — як boss), Sofiia, Dmytro (6), Maksym (Ottawa). Нових героїв немає. Факти — лише з розділу: столиці, Hoverla 2,061 m, Dnipro the longest, Kyiv the biggest.
**Лексика поза e4s7:** hungry, thirsty, tired, sandwich, juice (e4s5), lift, stairs, flat (e4s2), °C (e4s6), football (e4s3), bed (e4s2). pizza (лише e4s8) замінено на ice cream.
**Словники (звірено):** URL у reports/verify/e4s7.md §2 «Форми й норма» (CD Grammar By; CD across / along / over; CD Grammar Comparison: adjectives; OALD old; CD go/swim/see/eat; CD Grammar Will; OALD dear_1, love_1). Додатково: CD tall (High or tall?, «tallest mountain») — https://dictionary.cambridge.org/dictionary/english/tall; CD warm — https://dictionary.cambridge.org/dictionary/english/warm.
**Спірне для верифікатора:** a12 (інверсія в answer — поблажливо); a28 «How big is the mountain?» не прийнято; a19 «kyiv» дає «Almost: check the spelling» (як l3 розділу); a35/a32 — «Find the mistake.» з двома словами (body: «Two words … are wrong»).

## Нотатки верифікатора (verifier-pe4s7, 2026-11-20)
**Вердикт: пул придатний → `status: "verified"`.** Звіт: reports/verify/pe4s7.md.
- Розв'язав усі 59 вправ сам. `build` перебрав через app/lang.js (усі впорядковані підмножини tiles + extra): a12, a23, a33 і a40 приймають рівно порядки з `answer`. `validate --pool pe4s7` — 0/0; `personalization-qa --pool pe4s7 --strict` — без «БРАКУЄ».
- ❌ → виправлено: a21 `word` — «America» додано в ключ (CD america «the United States of America», OALD «used as a name for the United States»).
- Додав a45–a59: `stress` (phon) l1 і l3, читання (read: choice / gaps / multi на власних коротких текстах) l1, l2, l3 — по 3 вправи рівнів 1–3. Наголос — CD + OALD, URL у звіті §2. **transport не взяв:** у дієслова наголос на 2-му складі.
- a52 `hint` більше не видає відповідь. Шапка файлу оновлена.
- Спірне автора: a12 інверсію лишаю (граматична, прецедент l2 «Along the river we walk»); a28, a19, a32/a35 — як у автора.
- Факти (столиці, Hoverla 2,061 m, the Dnipro, Kyiv the biggest) — по 2 відкриті джерела. Авторське право: 9 фрагментів, збігів немає.
