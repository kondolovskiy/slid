---
claimed_from: todo
claimed_at: 2026-11-25T11:44:43.332Z
id: write-eng-diag-g6
type: write-diag
subject: eng
grade: 6
section: dge6
depends_on: [write-eng-g6-e6s1, write-eng-g6-e6s2, write-eng-g6-e6s3, write-eng-g6-e6s4, write-eng-g6-e6s5, write-eng-g6-e6s6, write-eng-g6-e6s7, write-eng-g6-e6s8, engine-eng-diag-pool, write-eng-diag-g5]
status: done
claimed_by: writer-write-eng-diag-g6
created: 2026-11-19
source: design-eng
---
# Тест рівня «Англійська мова, 6 клас» (dge6)

**Брати лише тоді, коли всі розділи 6 кл. мають `status: "verified"`** (claim.mjs `depends_on` не перевіряє).

## Прочитати
AGENTS.md §4; скіли `math-pool-diag` («Тест рівня») і `content-author` (eng); docs/CONTENT_SCHEMA.md §9; docs/PERSONALIZATION.md §1; docs/design/english.md §7, §11.1; зразок — content/ukr/diag-g6.js.

## Результат
`content/eng/diag-g6.js`: `SLID.diag("eng", { id: "dge6", grade: 6, … })`. **id `dge6` — ключ прогресу.** Усе англійською; варіанти — A, B, C.
- `pre`: опори 5 кл. і наскрізна граматика й лексика циклу × 2 завдання.
- `cur`: по одній темі на розділ 6 кл. (e6s1, e6s2, e6s3, e6s4, e6s5, e6s6, e6s7, e6s8).
- Типи — DIAG_TYPES (build/match — після engine-eng-diag-pool); без аудіювання.
- Рівень — A2 (наприкінці 6 кл., МП-ІМ с. 3).

## Готово, коли
- [ ] `node tools/validate.mjs --diag dge6` — 0 помилок; кожне завдання розв'язано двічі; задача → tasks/review.

## Нотатки агента (writer-write-eng-diag-g6, 2026-11-25)
**Файл:** content/eng/diag-g6.js, `SLID.diag("eng", { id: "dge6", grade: 6 })`, status `draft`. Перевірено, що всі 8 розділів 6 кл. — `verified` (depends_on).
**Склад:** 28 завдань = 10 тем `pre` × 2 (базове `choice` → складніше `gaps`) + 8 тем `cur` × 1 (`gaps`, 3 пропуски на ядро `learned` уроку). Порядок — як dge5: 10 базових, далі складніші pre впереміш із cur. Типи — лише `choice` і `gaps` (як у verified dge5); build/match не брав, щоб не множити другі правильні порядки.

**pre (уроки 5 кл. з `requires` файлів g6-e6s*.js; plan-eng-g6.md §6):**
| тема | уроки | for | що перевіряє |
|---|---|---|---|
| like | e5s1l6 | e6s1 | What is she like? ↔ What does she like?, likes / doesn’t |
| much | e5s3l4 | e6s2 | a lot of / much / many |
| cani | e5s2l6 | e6s2, e6s6 | Can I…? / Could you…?, Yes, you can |
| was | e5s8l5 | e6s3, e6s4 | was / were, Were you…? |
| ed | e5s9l5 | e6s3, e6s7 | -ed і правопис: travelled, stopped, studied |
| can | e5s6l4 | e6s4 | can + verb без -s/to, No, I can’t |
| going | e5s9l3 (базове), e5s9l4 (складніше) | e6s5 | be going to, питання й коротка відповідь |
| will | e5s5l5 | e6s5 | will be / won’t / will rain (прогноз) |
| imp | e5s2l5 | e6s6, e6s3 | імператив, Don’t + verb |
| comp | e5s10l4 (базове), e5s10l5 (складніше) | e6s8, e6s7 | bigger than; the longest … in |

Не взяв як окремі теми (ліміт ~10 тем, як у dge5): e5s3l6 (страви України й UK — культура, не граматика), e5s8l6 (What a…!), e5s4l3 (Present Continuous wearing), e5s5l4 (більш близький дубль comp), e5s10l1, e5s10l3, e5s7l6 (лексика й культура). Опори 4 кл. (e4s*) не брав: `pre` dge6 — уроки попереднього класу (скіл math-pool-diag §2в).

**cur (один урок на розділ, без boss):** e6s1l6 (looks like / is like / looks + adj.), e6s2l3 (no, a few, both/all), e6s3l4 (made, ate, drank; *maked/eated* як пастки), e6s4l4 (Past Continuous: питання, ствердження, заперечення), e6s5l5 (have to / don’t have to / Do I have to…?), e6s6l4 (must без to, mustn’t ↔ don’t have to — контекст «rule / no / your choice» у body), e6s7l4 (Have you ever been…? Yes, I have; never), e6s8l5 (told + person, said without, I → she).

**Однозначність (розв'язано двічі, ключі збігаються):**
- cur-e6s1: «is like» не ставив пасткою в контексті зовнішності (be like = «схожий» загалом, може бути другою правильною); пастка «looks like» — лише в контексті характеру (як у e6s1l6, екран choice «Dmytro … his dad»).
- cur-e6s2: «{Both|All} of them» — two shops у body; «All shops» без of не давав (загальне твердження могло б бути правильним).
- will: варіантів be going to немає — друга правильна (прогноз) відсічена.
- cani: body «She wants to open the window herself» + відповідь «Yes, you can» відсікають «Could you open…».
- AmE-написання (traveled) хибним варіантом не ставив.
**Факти:** Ukraine ≈ 600,000 km², UK ≈ 240,000 km², Dnipro — найдовша річка України, Hoverla — найвища гора — як у verified e5s10l4–l5 (FACT у inbox 2026-11-20, verifier-pe5s10). Нових фактів немає.
**Перевірка:** `node tools/validate.mjs --diag dge6` — 0 помилок, 0 попереджень (контроль: зіпсований `correct` дає помилку, тобто файл підхоплюється). euphony для eng не застосовна. Браузерних прогонів (test-answer-ui --diag) не було — Python-playwright у контейнері немає, лише CI.
**Спірне для верифікатора:** близькість до екранів уроків (рамки ті самі, речення й імена — нові; дослівних копій екранів немає, але перевір n-грамами, PITFALL verifier-pe5s10); тема `comp` об'єднує два уроки (e5s10l4, e5s10l5) з `lesson` у кожному завданні. TQ не додавав.
