---
claimed_from: todo
claimed_at: 2026-11-26T11:03:13.358Z
id: write-eng-diag-g10
type: write-diag
subject: eng
grade: 10
section: dge10
depends_on: [write-eng-g10-e10s1, write-eng-g10-e10s2, write-eng-g10-e10s3, write-eng-g10-e10s4, write-eng-g10-e10s5, write-eng-g10-e10s6, write-eng-g10-e10s7, write-eng-g10-e10s8, engine-eng-diag-pool, write-eng-diag-g9]
status: done
claimed_by: writer-write-eng-diag-g10
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 10 клас» (dge10)

**Брати лише тоді, коли всі розділи 10 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g10.js.

## Результат
`content/eng/diag-g10.js`: `SLID.diag("eng", { id: "dge10", grade: 10, … })`. **id `dge10` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 9 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 10 кл. (e10s1, e10s2, e10s3, e10s4, e10s5, e10s6, e10s7, e10s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge10` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки агента (writer-write-eng-diag-g10, 2026-11-26)
**Файл:** content/eng/diag-g10.js — `dge10`, `status: "draft"`, 28 завдань: 10 тем `pre` × 2 (базове → складніше) + 8 тем `cur` × 1. Порядок: 1–10 базові `pre`, 11–28 складніші `pre` впереміш із `cur`. Типи: 10 `choice`, 17 `gaps` (≤ 3 пропуски), 1 `build` (5 плиток + 1 пастка).

**Передумови** (усі уроки — з `requires` розділів 10 кл.; `for` збігається з requires):
| тема | уроки (lesson базового / складнішого) | for |
|---|---|---|
| pers | e6s1l4 / e9s1l2 | e10s1 |
| pastperf | e8s5l4 / e8s5l5 | e10s1, e10s5 |
| pastcont | e6s4l4 / e6s4l5 | e10s1, e10s5 |
| usedto | e7s5l3 / e9s1l4 | e10s3 |
| ingto | e8s2l3 | e10s2 |
| phrv | e8s2l4 | e10s2, e10s3, e10s8 |
| fut | e9s2l3 / e9s2l4 (build) | e10s4 |
| cond | e7s6l3 / e8s8l5 | e10s6 |
| link | e9s3l4 / e9s9l4 | e10s7 |
| pass | e7s7l2 | e10s5 |
Не взято окремими темами (у нотатки верифікатору): opinions/discussion (e9s9l1, e9s9l3 — фразові формули майже неминуче дають другу правильну відповідь або копію рамки уроку), for/since (e7s1l4 — повторено в e10s8l5), jobs (e9s7l1, e9s7l5), Ukraine/UK geography (e5s10*, e6s7l1, e6s8l1, e8s7l1, e8s8l1 — лексика країнознавства, не граматика).

**Теми 10 кл. (cur)** — один урок розділу, завдання покриває ядро уроку:
- e10s1l4 — before / as soon as / until за таймлайном (after — дистрактор);
- e10s2l4 — stop + to, remember + -ing (спогад), forget + to (try/regret не вміщаються в 3 пропуски);
- e10s3l6 — used to + verb / wasn’t used to + -ing / getting used to;
- e10s4l5 — will have + 3-тя форма ×2, until vs by;
- e10s5l4 — had been -ing (how long) vs was / has been; had repaired (скільки — результат); had been cleaning;
- e10s6l5 — I’d … if I were you, I wouldn’t …, реакція That makes sense;
- e10s7l5 — owing to + іменник vs because; Therefore,; so that (мета);
- e10s8l4 — put it off (займенник усередині), prepare for it (дієслово + прийменник), fill in her form (іменник після частки).

**Перевірки:**
- `node tools/validate.mjs --diag dge10` — 0 помилок, 0 попереджень; `node tools/euphony.mjs --diag dge10` — 0 відхилень; `personalization-qa` — без зауважень до dge10.
- n-грами (скрипт `ng.cjs` у scratchpad задачі): body, text з розкритим ключем, **кожен варіант кожного пропуску**, opts і answer проти всіх рядків екранів g4-*…g10-* і всіх завдань dge4–dge9. Після правок 6- і 5-грам — 0; 4-грами — службові рамки («writes about his», «if I were you», «what should I do», «there’s one free place»). Під час правок прибрано: «he is going to drop» (e9s2l3), «used to walk to school» / «was used to walk» (e10s3l6 ек. 5 — та сама рамка й дистрактор), «by the end of April» (e10s4l5), «what would you do if you were me» (e10s6l5 ек. 11 — та сама рамка, ключ і дистрактор), «the film had/has started» (e10s1l3 ек. pick — та сама рамка), «Don’t call me at…» (e9s2l4 word), «I train three times a week», «to fill in the form».
- Рамки вручну (не ловить скрипт): переписано pastperf №2 (кіно → матч), cur-e10s8 (apply for it ← e10s8l4 ек. 8 → prepare for it), cur-e10s6 (wouldn’t|won’t|don’t ← e10s6l5 ек. 4 → дистрактор didn’t), Bohdan у реакції «That makes sense» (e10s6l5 ек. 9) → Kyrylo. Лишились паралельні за граматикою теми: by|until (бінарний вибір), forgot to + verb, owing to|because + погода.
- Лексика (`vocab.cjs`): слова, яких немає в g4-*…g10-*, — лише назви тем, імена (Vadym, Motria, Leeds), форми відомих слів (emailed, racing, resting, trams, wheels, catches) і дистрактори (ringed, was ring). tray, woke, brakes, chain, frames, crowded, robotics — замінено.
- Словники (форми): stay up — CD B2 «to go to bed later than usual» (https://dictionary.cambridge.org/dictionary/english/stay-up); put off — CD B1 «to decide or arrange to delay…» (https://dictionary.cambridge.org/dictionary/english/put-off); решта форм — з уроків (CD Grammar, на які посилаються уроки).
- **Розв'язано двічі** (до й після правок): усі 28 ключів збіглися; другої правильної BrE-відповіді не знайшов. Ризикові місця й чим відсічено: №7 will не варіант (ознаки → going to; is going to — узгодження); №12 «didn’t go to bed before/until» уникнуто («stayed up until»; «had dinner as soon as» хибне за таймлайном); №13 «had rain» — неграматичне; №15 «was working for four hours» — хибне за e10s5l4 ек. 6–7, «had been repairing three things» — хибне за ек. 8 (скільки → had + 3-тя форма); №23 «will build … by» (e10s4l5 ек. 3: часто теж правильно) — не серед варіантів; №25 «If I was you» (правильне в розмовній) — не серед варіантів; №22 build — два порядки в answer, «then» з малої; №26 «although» — лише в першому реченні, «However,» — нове речення; №28 «fill in her form» — іменник після частки правильний (e10s8l4 ек. 3), «fill her form in» не дано плитками (gaps).
- Імена — за NOTE style-eng-g10 (inbox): не взято Ivanna, Arsen, Oliver, Grandad Mykola, Ivan, Olena (зайняті героями з іншими ролями); Kateryna, Bohdan, Ostap — без суперечностей. Нові для тесту: Vadym (однокласник Mariia, Kharkiv), Yurii (в уроках — хлопчик із села), Motria (прабабуся Kateryna), Matvii (з e7, Kyiv), Ben (Leeds → Lviv), Lesia, Mykyta.
- Факти: реальних закладів і правил не згадано; Zelena Dolyna — вигадане село серії; бібліотека, майданчик, курс — без назв.
- test-answer-ui і playtest не запускав: Python-модуля playwright у контейнері немає (CI job browser). Build і commit — не робив (за задачею).
