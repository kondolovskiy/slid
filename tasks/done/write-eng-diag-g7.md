---
claimed_from: todo
claimed_at: 2026-11-25T12:43:56.809Z
id: write-eng-diag-g7
type: write-diag
subject: eng
grade: 7
section: dge7
depends_on: [write-eng-g7-e7s1, write-eng-g7-e7s2, write-eng-g7-e7s3, write-eng-g7-e7s4, write-eng-g7-e7s5, write-eng-g7-e7s6, write-eng-g7-e7s7, engine-eng-diag-pool, write-eng-diag-g6]
status: done
claimed_by: writer-write-eng-diag-g7
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 7 клас» (dge7)

**Брати лише тоді, коли всі розділи 7 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g7.js.

## Результат
`content/eng/diag-g7.js`: `SLID.diag("eng", { id: "dge7", grade: 7, … })`. **id `dge7` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 6 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 7 кл. (e7s1, e7s2, e7s3, e7s4, e7s5, e7s6, e7s7).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — A2 → B1 (B1 — наприкінці 9 кл.).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge7` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки агента (writer-write-eng-diag-g7, 2026-11-25)
**Файл:** content/eng/diag-g7.js — `SLID.diag("eng", { id: "dge7", grade: 7 })`, status draft, 27 завдань: 10 тем `pre` × 2 (базове `choice` → складніше `gaps`) + 7 тем `cur` × 1 (`gaps`, ≤ 3 пропуски). Будова й порядок — як у dge6 (1–10 базові, далі складніші впереміш із cur).

**Передумови (уроки 6 кл. з `requires` розділів 7 кл.):** ever — e6s7l4 → e7s1; ppps — e6s7l5 → e7s1, e7s3; irr — e6s3l4 → e7s1, e7s5; made — e6s3l2 → e7s2, e7s7; built — e6s7l3 → e7s7; should — e6s6l5 → e7s2, e7s3; haveto — e6s5l5 → e7s1, e7s3; too — e6s2l6 → e7s4; pastc — e6s4l4 (базове, `lesson`) + e6s4l5 (складніше, `lesson`) → e7s5; if — e6s8l3 → e7s6. Порівняльні 5 кл. (e5s5l3–l4 → e7s4) не взяв, щоб тест не довшав; за потреби верифікатор може додати 11-ту тему до публікації.

**cur (один урок на розділ, ядро `learned`):** e7s1l3 (yet у питанні, No, not yet, already ↔ yet); e7s2l4 (must / should / can + be + participle, irregular cut); e7s3l4 (since + PP, Past Simple з finished time, for ↔ since); e7s4l5 (a bit ↔ much, not as … as, the same as; `even` не охоплено — межа 3 пропуски); e7s5l3 (used to, Did you use to…?, short answer didn’t); e7s6l3 (if + Present, will, won’t); e7s7l3 (Was it destroyed?, When was … rebuilt?, wasn’t). Чому l3/l4/l5, а не інші уроки: це граматичні ядра розділів за plan-eng-g7-8-9 §2.

**Урок dge6 (копії):** кожне речення власне. Скрипт n-грам (scratchpad, 5-грами й 4-грами; ключові варіанти gaps, body, opts) проти всіх екранів g5-*, g6-*, g7-*: **0 збігів 5-грам**. 4-грами лишилися лише на граматичних рамках і шаблонах: «Which sentence is correct?», «What does she say?», «Did you use to», «Do I have to», «if it is sunny», «has got a cold». Знайдені й переписані первинні копії: e7s1l7 ек. 9 (already made my bed), e7s1l3 ек. 4 (done your homework yet), e7s1l2 ек. 9 (already put the rubbish out), e7s1l6 ек. 8 (ever seen a real…), e6s7l4 ек. 9 (Has Ostap ever been… No, he hasn’t), e7s4l5 ек. 7 (costs the same as a ticket for), e7s4l7 ек. 6 (a bit longer than), e7s3l5 ек. 11 (stay at home today), e6s6l7 ек. 5 (be quiet in the library), e7s7l3 ек. 4–5 (When was it rebuilt?), e6s8l3 ек. 1 (writes a page for visitors), e6s3l4 ек. 5, e6s3l2 ек. 11, e7s2l4 ек. 9, e7s2l2 ек. 6.

**Розв’язано двічі** (при написанні й окремим проходом без ключа). Друга правильна відповідь — виключена контекстом:
- №11 ever: Have / haven’t (підмет your grandparents) / never. №12 e7s1: No, already — безглуздо; I’ve yet watered — неграматично.
- №13 ppps: last summer відсікає have climbed і has been. №16 e7s3: since Sunday → has had; On Monday → took; three days → for.
- №18 e7s4: 100 vs 105 хв → a bit (much — велика різниця, e7s4l5 ек. 3); не as … than; the same like — хибне (e7s4l5 ек. 6).
- №20 e7s5: Were you use to / I wasn’t — неграматичні; форму didn’t used to як пастку не брав (CD Grammar: частина мовців вважає її неправильною, але вона трапляється).
- №22 e7s6: had / didn’t — минуле при майбутньому плані; Present Simple в головному реченні (could be zero conditional) у варіантах навмисно немає.
- №24 too: very small не ставив (very + adj граматичне — була б друга відповідь); yellow — too small за body.
- №25 e7s7: The church… no fire → wasn’t; did-форми неграматичні з пасивом.
- №26 pastc: was coming суперечить «short» у body; while + коротка дія — хибне за e6s4l5 ек. 3, 8.
- №6 should: hot tea and rest — порада; без пальта — погана порада; should to — неграматичне.
**Вигадане:** історія школи в Zelena Dolyna (1890 / 1975 / 2005), школа Марії в Харкові 1965, будинки на вулиці Тараса — вигадані деталі канону, не факти про реальні об’єкти. Реальне: Hoverla — гора в Україні (вже в e5s10l5); Lviv old town — загальновідоме.
**BrE:** biscuits, at weekends, the doctor’s, maths; AmE-форм у варіантах немає. Лексика — з уроків (climb — e5s9, Hoverla — e5s10, roast/bake/cut — e7s2l2/l4, sore throat — e7s3l2, e7s3l4).
**Прогін:** `node tools/validate.mjs --diag dge7` — 0 помилок, 0 попереджень; euphony — без зауважень. `python3 tools/test-answer-ui.py --diag dge7` не запускав: у контейнері немає Python-модуля playwright — лишається CI. Build не запускав (за дорученням оркестратора).
