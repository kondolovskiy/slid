---
claimed_from: todo
claimed_at: 2026-11-26T10:21:35.668Z
id: write-eng-diag-g9
type: write-diag
subject: eng
grade: 9
section: dge9
depends_on: [write-eng-g9-e9s1, write-eng-g9-e9s2, write-eng-g9-e9s3, write-eng-g9-e9s4, write-eng-g9-e9s5, write-eng-g9-e9s6, write-eng-g9-e9s7, write-eng-g9-e9s8, write-eng-g9-e9s9, engine-eng-diag-pool, write-eng-diag-g8]
status: review
claimed_by: writer-write-eng-diag-g9
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 9 клас» (dge9)

**Брати лише тоді, коли всі розділи 9 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g9.js.

## Результат
`content/eng/diag-g9.js`: `SLID.diag("eng", { id: "dge9", grade: 9, … })`. **id `dge9` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 8 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 9 кл. (e9s1, e9s2, e9s3, e9s4, e9s5, e9s6, e9s7, e9s8, e9s9).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — B1 (наприкінці 9 кл., МП-ІМ с. 3).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge9` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки агента (writer-write-eng-diag-g9, 2026-11-26)
- Файл: content/eng/diag-g9.js, `dge9`, 29 завдань: 10 тем `pre` × 2 (1–10 — базові choice, далі gaps) + 9 `cur` (по уроку на розділ). Типи — choice, gaps (≤ 3 пропуски); build/match не брав. Правильні в choice: A 4, B 3, C 3.
- `pre` → уроки і `for` (збігаються з requires розділів 9 кл.): usedto e7s5l3 → e9s1; pastperf e8s5l4/e8s5l5 → e9s1, e9s8; compadj e8s4l5 → e9s1; said e8s3l4/e8s3l5 → e9s4; rel e8s4l3/e8s4l4 → e9s5; pass e7s2l4/e8s3l3 → e9s2, e9s6; ingto e8s2l3 → e9s7; must e8s6l5 → e9s7; cond2 e8s8l5/e8s8l6 → e9s8; enough e7s4l6 → e9s3. e9s9 має requires лише на 4–6 кл. і e9s*, тож окремої опори не має.
- `cur`: e9s1l5 (future in the past), e9s2l4 (Future Continuous), e9s3l4 (so / such … that), e9s4l4 (reported questions), e9s5l4 (whose), e9s6l4 (Present Simple passive, is used for), e9s7l2 (preposition + -ing), e9s8l5 (Third Conditional), e9s9l4 (although / however / so).
- Копії: скрипт 5-грам (scratchpad/write-eng-diag-g9/ng.cjs: розкриті правильні відповіді, body, text, opts) проти g4-*…g9-* — 0 збігів після 2 ітерацій (перша версія — 6 збігів: «I thought it would be», «what would you do if», «school we don’t have to», «in a museum in Kyiv», «talks about her future job»). Проти dge4–dge8 (ngd.cjs) — 0 5-грам. 4-грами — лише граматичні рамки («did you use to», «we don’t have to», «had to wear a»). «Переодягнені» копії звіряв вручну з екранами уроків тем (dump.cjs): не взято 14-year-old pianist (e8s4l5 ек. 6), Butter must be kept (e7s2l4 ек. 4), trees are being planted / is being repaired (e8s3l3), are mixed / is used (e9s6l4), so bright that… far away і such comfortable trainers (e9s3l4), the boy whose cousin (e9s5l4), Kharkiv, which (e8s4l4), If Emma were here (e8s8l5), I can’t find my phone (e8s3l4 ек. 9), uniform / phones (e8s6l5 ек. 11), Emma’s timetable question (e9s2l4 ек. 5).
- Розв'язано двічі (до й після правок); друга правильна відсічена: reported statement (№4) — у body сказано, що тепер у родини є кіт, тож «don’t have» хибне; хибне «haven’t» (застаріле BrE «haven’t a pet») замінено на «doesn’t have»; reported question (№18) — «she lives» (досі правда, e9s4l4 ек. 5) не серед варіантів, «whether» теж; Past Perfect (№2) — Past Simple «bought» не варіант (з «the week before» він теж правильний); narrative (№13) — таймлайн у body: сніг іде 9–10, тож «had fallen» хибне; Future Continuous (№14) — «will clean» / «won’t watch» не варіанти (лише хибні форми); compadj (№15) — «world-famous» відсічено реченням «people in other cities don’t»; who/which (№5, №19) — «that» у choice-реченнях не показано як хибне, у №19 «that» хибне лише після коми; whose — без group nouns; although/however (№29) — However у 3-му пропуску ключ, дистрактори Although / Because з комою неграматичні (PITFALL verifier-e9s9), «However the test was hard» неграматичне; second conditional (№27) — «can» хибне при «were»; mustn’t / don’t have to — «it’s their choice» / «it’s a rule» у тексті.
- Одне завдання не підказує інше: базові й складніші завдання теми мають різні дієслова й рамки (had bought / had left; be watered / are being put; avoids / decided, avoid, enjoy; world-famous у варіантах №3 — не ключ №15).
- Фактичних тверджень немає (Kyiv, Lviv, Dnipro, Odesa, Lutsk, Kharkiv, Carpathians — лише назви; Mr Koval, Coach, Nadiia, Uncle Petro — вигадані). Лексика — з уроків 4–9 кл. (vocab.cjs: поза уроками лише власні назви й дистрактор cutting; puppy, garage, entry, planned замінено).
- Прогін: validate --diag dge9 — 0 помилок, 0 попереджень (було 1: 6 з 10 правильних — B, переставлено); euphony --diag dge9 — без зауважень; test-answer-ui не запускав (немає Python-playwright) — CI. Build і commit не робив (за задачею). Нових TQ немає.
