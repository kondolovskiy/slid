---
claimed_from: todo
claimed_at: 2026-11-05T11:50:36.724Z
id: engine-list-quadratic
type: engine
subject: math
status: done
claimed_by: eng-list
created: 2026-11-05
depends_on: []
---
# Рушій: квадратичний шлях `list` на довгому записі; «у/в» перед кожним елементом list

Джерело: reports/review/engine-math-ister-p3.md P3-3, P3-5. Скіл `engine-change`; рев'ю D-026.
1. `list` + «літера + довгий ряд пробілів»: 20 000 пробілів ≈ 0,5 с, 50 000 ≈ 6 с (було й до ister-p3). Знайти квадратичну частину (розбиття, trim, регулярки) — лінійно; тест < 200 мс на 50 000.
2. «у 2 рази; у 3 рази» → bad, хоча «у 2 рази; 3» → ok: знімати «у/в» перед кожним елементом (D-049/TQ-067 — поки зараховуємо).
3. P3-3 з tools-math-ister-p3 перенесене (app/): `cnt` рахується двічі (app.js:408, learn.js:1671); lang.js «тег у слові» на межі блоку; `answerSig` без прапорця кириличності.

## Нотатки виконавця
Виконавець: eng-list (worktree wt-list). Рев'ю D-026 — ще не проведено (скіл `engineering-review`).

**п. 1 — квадратичний шлях list (app/learn.js).** Профілювання (`node --cpu-prof`): увесь час — дві регулярки `listPre`: `LIST_PRE` (`\s*(?:індекс)?\s*=\s*(?=…\s*…)` — два «\s*» поспіль через необов'язковий індекс і «\s*» у lookahead) і `LIST_PM` (те саме + хвіст `[^;\n=]*[±∓][^;\n=]*$` — перебір кожного «±»). Третє місце — `parseList`: перевірка повторів `values.slice(0, i).some(…)` квадратична за кількістю елементів (50 000 символів «1; 2; 3…» ≈ 1,3 с).
- Ряди пробілів у префіксі поглинаються атомарно: `WS(n) = (?=(?<n>\s*))\k<n>`; хвіст `LIST_PM` — `(?<tail>[^;\n=]*)$`, наявність «±» — окремим `/[±∓]/.test`. Фаз 2·10⁶ випадкових коротких рядків: старі й нові регулярки дають ті самі збіги (літера, довжина/хвіст) — 0 розбіжностей.
- `listCount(v)`: скільки елементів дав би `parseList` (без розбору чисел; «±» — 2^k). Інша кількість, ніж у ключі, — `bad` одразу (вердикт той самий, що й раніше).
- Попутно: елемент з понад 4 «±» більше не зникає з переліку (`pmParts` → `[null]`): раніше `listKey("1; ±±±±±7")` = [1]. У `checkAns` це вже закриває `listCount`.
- Заміри (50 000 символів, 16 записів × 6 ключів, `checkAns` + `badHint` + `answerSig`): найгірше 32 мс (`"1" + ","×50000`), решта ≤ 10 мс. Було: «x» + 20 000 пробілів ≈ 0,5 с, «у» + 20 000 ≈ 0,95 с, тисячі різних елементів ≈ 1,3 с, корені ≈ 2,9 с.

**п. 2 — «у/в» перед кожним елементом list** (`stripUnit`, unit «раз»): `UNIT_PRE_LIST` — на початку запису й після «;», переносу, коми. Як і раніше, лише коли в записі знято одиницю: «у 2 рази; у 3 рази» = «2; 3» (ok), «у 2; у 3» — bad, «у 2 рази; у3 рази», «уу 3» — bad. Оцінювальна зміна → рядок в inbox «→ teacher-questions» (TQ-067 доповнити).

**п. 3 — дрібниці app/.**
- `cnt` (рев'ю tools-ister-p3 P3-2): `SLID_LEARN.lessonCounts(items)` — один підрахунок; `viewPractice` передає свій `cnt` у `practiceGroups(subject, items, cnt)` (без аргументу — рахує сам, як раніше).
- lang.js «тег у слові» (рев'ю engine-lang-p3 P3-3): блокові теги (`p`, `br`, `hr`, `li`, `ul`, `ol`, `div`, `h1–6`, таблиці, `blockquote`, `section`, `figure`, `dl/dt/dd`) у пошуку слова з пропуском замінюються пробілом — `<p>…</p><p>{*А|О}кно`, `Ден{ь|*—}<br>ки` більше не попереджають; рядкові (`b`, `i`, `u`…) — як і раніше.
- `answerSig` без прапорця кириличності (рев'ю engine-lang-p3 P3-7): **уже закрито** — app.js `answerSig` для word бере `LANG.wordInput(s, t)` з `cyr = wordAnswers(s).some(isCyr)` (з 6933edf; тест test-lang «wordInput: ключ спроби…»). Розбіжність з `check` (там cyr по кожній відповіді) можлива лише для екрана з кириличною й латинською відповіддю водночас і не шкодить: правильну відповідь плеєр не блокує ніколи (`sameAsTried` → `gradeNow`). Код не змінював.

**Тести.** test-learn — 2859 перевірок (новий блок «engine-list-quadratic, engine-list-ordered»: заміри < 200 мс на 50 000 символів, «у/в», ±>4, x₁,₂ без ±, lessonCounts/practiceGroups); test-lang 143 → 149 (блокові теги). test-answer-ui.py FORMAT_FIXTURES +3 (ordered, scale, «у/в» у list) — Python-playwright немає, тож прогнали їх Node-Playwright-портом (scratchpad/list/ui.mjs): 9/9 (bad з потрібною підказкою → правильний запис ok, без помилок сторінки). `node tools/test-ui.mjs` — 12 ok (мутант зовнішнього `cnt` у app.js — 1 ✗, ловиться).
**Мутанти** (30, `scratchpad/list/mut.py`, прогін test-learn + test-lang): убито 30/30 — стара LIST_PRE, `\s*` лише після «=», стара LIST_PM (пробіли / хвіст / без перевірки ±), без listCount, pmParts [], «у/в» лише на початку / без коми, усі мутанти ordered/scale/validatePool (див. engine-list-ordered), practiceGroups ігнорує cnt, BLOCK_TAG вимкнено / без br / усі теги.
**diff-answers** `node tools/diff-answers.mjs --old HEAD --grades 4-11`: 1650 вправ, 71 141 запис — 0 змін вердикту й підказки в усіх категоріях, 0 непояснених; тест рівня 56 000 записів — 0 змін.
`npm run check` — EXIT 0 (validate 0 помилок, 82 попередження).
**Не перевірено:** `python3 tools/test-answer-ui.py --suite regression` і playtest — Python playwright немає (лише CI, job `browser`).
