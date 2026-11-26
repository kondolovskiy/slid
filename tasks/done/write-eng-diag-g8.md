---
claimed_from: todo
claimed_at: 2026-11-25T12:53:04.110Z
id: write-eng-diag-g8
type: write-diag
subject: eng
grade: 8
section: dge8
depends_on: [write-eng-g8-e8s1, write-eng-g8-e8s2, write-eng-g8-e8s3, write-eng-g8-e8s4, write-eng-g8-e8s5, write-eng-g8-e8s6, write-eng-g8-e8s7, write-eng-g8-e8s8, engine-eng-diag-pool, write-eng-diag-g7]
status: done
claimed_by: writer-write-eng-diag-g8
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 8 клас» (dge8)

**Брати лише тоді, коли всі розділи 8 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g8.js.

## Результат
`content/eng/diag-g8.js`: `SLID.diag("eng", { id: "dge8", grade: 8, … })`. **id `dge8` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 7 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 8 кл. (e8s1, e8s2, e8s3, e8s4, e8s5, e8s6, e8s7, e8s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — B1 (наприкінці 9 кл.).

## Готово, коли
- [x] `node tools/validate.mjs --diag dge8` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки агента (writer-write-eng-diag-g8, 2026-11-26)
- Файл: content/eng/diag-g8.js, `dge8`, 28 завдань: 10 тем `pre` × 2 (1–10 — базові choice, далі gaps) + 8 `cur` (по уроку на розділ). Типи — choice, gaps (≤ 3 пропуски); build/match не брав.
- `pre` → уроки і `for` (збігаються з requires розділів 8 кл.): ppadv e7s1l2/e7s1l3 → e8s1; forsince e7s1l4 → e8s1; ingadj e7s4l4 → e8s4; compmod e7s4l5 → e8s8; enough e7s4l6 → e8s2, e8s4; pastc e6s4l4/e6s4l5 → e8s5; said e6s8l5 → e8s3; pass e6s3l2/e6s7l3 → e8s3; must e6s6l4/e6s5l5 → e8s6; if e6s8l3 → e8s8. e7s1l5 (myself…) у тест не ввійшов (10 тем, як у dge7).
- `cur`: e8s1l2 (PPC), e8s2l3 (-ing / to), e8s3l4 (reported), e8s4l3 (who / which), e8s5l4 (Past Perfect), e8s6l4 (May I / allowed to), e8s7l2 (артиклі з назвами), e8s8l5 (Second Conditional).
- Копії: скрипт 5-грам (scratchpad/write-eng-diag-g8/ngram.cjs; тексти з розкритими правильними відповідями й варіанти) проти g4-*…g9-* — 0 збігів після 3 ітерацій переписування (перша версія мала 8 збігів з g7/g8 і 9 з g4–g6). 4-грами — лише граматичні рамки («are we allowed to», «is old enough to», «you don’t have to»).
- Розв'язано двічі (до і після правок), друга правильна відсічена: PP/PPC — у варіантах немає «has painted / has been living»; for/since — «has been living» не варіант; reported (TQ-144) — у тексті сказано, що Daryna вже здорова й концерт минув, тож «is / can’t» справді хибні, форма без backshift ніде не стоїть хибною для досі правдивого; who/which — «that» не серед варіантів; second conditional — без be (was/were не виникає); already/yet — «already» в питанні не вживано (e7s1l3 ек. 6 дозволяє його як подив); May/Can — «Can I» не варіант; when/while — лише when + коротка дія, тривалі й короткі дії задано таймлайном у body; Dnipro місто/річка — «stay in my cousin’s flat» відсікає річку.
- Фактичних тверджень немає (St Sophia’s Cathedral, Hoverla, Odesa, Black Sea — лише назви; Mr Bondar, Café Lypa / Sonia — вигадані). Лексика — з уроків 4–8 кл. (grep): climbing wall, sports centre, sour cream, hot chocolate, violin, surf, planets; «space museum», «chess board» — прозорі сполуки відомих слів.
- Прогін: validate --diag dge8 — 0 помилок, 0 попереджень; euphony --diag dge8 — без зауважень; test-answer-ui не запускав (немає Python-playwright) — CI. Build не запускав (за задачею).
