---
claimed_from: todo
claimed_at: 2026-11-20T10:59:40.952Z
id: write-eng-diag-g4
type: write-diag
subject: eng
grade: 4
section: dge4
depends_on: [write-eng-g4-e4s1, write-eng-g4-e4s2, write-eng-g4-e4s3, write-eng-g4-e4s4, write-eng-g4-e4s5, write-eng-g4-e4s6, write-eng-g4-e4s7, write-eng-g4-e4s8, engine-eng-diag-pool]
status: done
claimed_by: writer-dge4
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 4 клас» (dge4)

**Брати лише тоді, коли всі розділи 4 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g5.js.

## Результат
`content/eng/diag-g4.js`: `SLID.diag("eng", { id: "dge4", grade: 4, … })`. **id `dge4` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: вхідний рівень Pre A1–A1 (ТОП 3–4: 3 кл.) — `lessons: []` + `baseline`, механіка engine-eng-diag-pool п. 2.
- `cur`: по одній темі на розділ 4 кл. (e4s1, e4s2, e4s3, e4s4, e4s5, e4s6, e4s7, e4s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — Pre A1 → A1 (наприкінці 4 кл., ТОП 3–4 PDF с. 40).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge4` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки агента (writer-dge4, 2026-11-20)
**Файл:** content/eng/diag-g4.js, `SLID.diag("eng", { id: "dge4" })`, status draft. 8 baseline-опор × 2 + 8 cur × 1 = 24 завдання. `node tools/validate.mjs --diag dge4` — 0 помилок, 0 попереджень; personalization-qa — структура ок (матриця лише для math). Браузерних прогонів не було: Python-playwright у контейнері немає.

**Джерело опор:** ТОП 3–4 (Савченко, 2018), https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf (SHA-1 aa8d161a…, як у facts/eng.md): «3-ий клас» — лексика й функції с. 61–62, граматика с. 62; Pre A1 → A1 — с. 40.

| Опора | Підстава в ТОП (3 кл.) | for | see |
|---|---|---|---|
| be (am/is/are) | функції «представити себе», «називати/описувати» (с. 61); у списку граматики окремо не названо | e4s1 | e4s1l1 |
| family | «члени родини» (с. 61) | e4s1 | e4s1l2 |
| poss (’s) | «‘s’ for possession» (с. 62) | e4s1 | e4s1l2 |
| there | «there is(n’t)/are(n’t)» (с. 62) | e4s2 | e4s2l2 |
| prep | «basic prepositions of place» (с. 62) | e4s2 | e4s2l4 |
| plural | «irregular nouns – plural» (с. 62) | e4s5, e4s2 | e4s5l2, e4s5l1 |
| pres | «present simple for daily routines, facts and states» (с. 62) | e4s1, e4s3 | e4s1l5, e4s3l3 |
| months | «місяці» (Свята та традиції, с. 61–62) | e4s6, e4s8 | e4s6l1 |

`see` — урок, де тему повторюють (не завжди e4s1, як дозволяє PERSONALIZATION.md «Baseline»).

**cur (один урок на розділ, без boss):** e4s1l3 (a/an + jobs, gaps), e4s2l5 (Are there any…? + коротка відповідь + any в запереченні, gaps), e4s3l2 (значення й місце never, build з пасткою always), e4s4l3 (how many / how much, sort), e4s5l6 (why / because, gaps), e4s6l5 (-er than з подвоєнням, choice), e4s7l6 (I think I’ll + інфінітив, build з пасткою goes), e4s8l5 (every Saturday / now / Look!, gaps). Лексика й граматика — лише з цих уроків.

**Кожне завдання розв'язано двічі; друга правильна відповідь:**
- build №14, №22: перебрано всі перестановки й підмножини плиток з extra через `SLID_LANG.check` (scratchpad perm.mjs) — зараховано рівно один порядок. Граматичних других порядків серед повних наборів немає; «I’ll go to the park I think» без коми й «to the park I think I’ll go» вважаю неприйнятними (як NOTE verifier-e4s6 про кому); неповні речення («Mariia never plays», «I think I’ll go») не зараховуються, бо рушій вимагає всі плитки tiles.
- Перелік у there is/are не брав (PITFALL verifier-e5s7); часові маркери — у cur-e4s8 (Every Saturday / Now / Look!); word лише №8 (March), без кінцевого знака; у gaps немає варіантів, що починаються з апострофа.
- Піддані сумніву місця: cur-e4s2 «there aren’t {any|some} toys» (some у запереченні — за правилом уроку e4s2l5); cur-e4s8 «Every Saturday, I {play|am playing}» — та сама модель, що у verified e4s8l5 №4; «Where are you at home today?» — хибний варіант, відсікає відповідь «Because…».
- Герої — за канонами inbox: Andrii (Kyiv, мама doctor, тато engineer, тітка artist — e4s1l3; має кота; без TV у кімнаті, три полиці — e4s2l5; застуда — e4s5l4), Taras (Lviv, два постери — e4s2), Oksana (брат Dmytro), Bohdan (любить теніс — e4s3l1). Mariia — без брата (e5s1), тому pick з «brothers» — від Oksana. Нові дрібниці: Bohdan грає в теніс з татом по суботах і має кота; Emma не певна щодо суботи.

**Порядок:** 1–8 — базові завдання опор; 9–24 — складніші опори впереміш з cur. Правильні варіанти choice розкладено по A/B/C.

## Нотатки верифікатора (verifier-dge4, 2026-11-20)
**Вердикт: verified** — звіт reports/verify/dge4.md. 24/24 завдання розв'язано самостійно, ключі збіглися; другої правильної відповіді немає (build №14 і №22 — повний перебір підмножин і перестановок з extra через SLID_LANG.check: зараховано рівно ключ). Ключ word №8 без кінцевого знака. Опори звірено з PDF ТОП 3–4 (SHA-1 aa8d161a…, с. 40, 61–62); форми — CD + OALD (URL у звіті); авторське право — 3 запити, збігів немає. `validate --diag dge4` — 0/0.
`see` на уроки повторення — правильно за PERSONALIZATION.md «Baseline» (дозволяє «перший урок e4s1 чи урок, де тему повторюють»); `baseStart` для новачка однаково веде на e4s1l1 (опори e4s1 найтерміновіші, закриті розділи пропускаються). english.md §7 — неповний (DOC в inbox).
Правки: лише коментарі й метадані (7) — «Pre A1 на кінець 3 кл.» → «Pre A1 — кінець 2 кл., A1 — кінець 4 кл.» (с. 40), status verified, factcheck. Спостереження (не блокують): cur-e4s7 не перевіряє won’t/offer; порядок see plural; «Find the mistake» у тесті без фідбеку.
