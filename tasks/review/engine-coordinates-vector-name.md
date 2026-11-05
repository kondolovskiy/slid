---
claimed_from: todo
claimed_at: 2026-11-05T07:32:04.041Z
id: engine-coordinates-vector-name
type: engine
subject: math
status: review
claimed_by: eng-coord
created: 2026-11-05
depends_on: []
---
# coordinates2/3: приймати назву вектора в записі відповіді

Джерело: handoff 05.11 «Пропозиції» (ENGINE P3), inbox 04.11 (writer pg11m2: b04), reports/research/mon-math-2026-11.md §2.3 п. 3; приклади pg11m2 b04, pg9m2 d04. Скіл `engine-change`; незалежне рев'ю D-026.

Зараз відповідь `c = (−13; −2; 17)` дає `bad`, хоча трійка правильна. Підручники (Мерзляк 10, Істер 9) пишуть `c(−13; −2; 17)` (D-047 — без «=»).

## Що зробити
1. У перевірці `coordinates2`/`coordinates3` (app/learn.js або app/math.js — знайди) приймати префікс назви: `c(…)`, `c = (…)`, `c→(…)`, `AB(…)`, `AB→ = (…)` — за умови, що назва збігається з назвою з умови / `answer` (якщо є) або будь-яка латинська назва; неправильна назва → `form` з підказкою (не `bad`). Вирішити й описати в CONTENT_SCHEMA.
2. Тести в tools/ (test-learn / test-math), мутанти; регресія test-answer-ui (Python) — описати сценарій, якщо в контейнері немає Python Playwright.
3. Без зміни ключів у змісті.

## Нотатки виконавця

### Що змінено (eng-coord, 2026-11-05)
- `app/learn.js`:
  - `NAME_AT` — мала назва і в `\vec{c}`; необов'язкова стрілка `→` / `⃗` (U+20D7) після назви (групи: 1 `\vec{…}`, 2 велика, 3 мала, 4 стрілка, 5 «=»).
  - `askedPoint` — `vask` (єдиний шуканий вектор малою: «вектора $\vec{c}$», або заголовок «Вектор $\vec{c}$», якщо запитання назви не дало), `vec` (в умові є вектор малою — шуканий чи даний), малі назви даних векторів ($\vec{a}(…)$) у `given`; `\vec a` без дужок (запис Істера) — як `\vec{a}` (`vecBraces`).
  - `nameLen` — мала назва: у символьному ключі без «=»/стрілки — множник (як було); без вектора малою в умові — як було (D-031 (1): `m(…)` ok у числовому ключі, `c = (…)` / `c→` / `\vec{c}` — bad); з вектором малою: шуканий `vask` — лише він; даний вектор — ні; інакше будь-яка мала (крім випадку, коли шукають велику назву — тоді лише `m(…)` без «=», як було).
  - `dropName` / `nameMsg` — відкинута мала назва при правильному значенні → `form`: «a — даний вектор умови» (`givenMsg` для малої), «тут шукають вектор c» (`vaskMsg`), або «тут шукають B». Нові тексти — у `hintTexts`; `formCode` → `name`.
- Рішення (описано в CONTENT_SCHEMA, рядок `coordinates2/3`): «будь-яка латинська назва» — лише в умові з вектором малою літерою; інакше чинне D-031 (1) не змінюється.
- `tools/diff-answers.mjs` — записи (`c = `, `c→`, `\vec{c} = `, `c⃗`, літери векторів умови, `AB→ = `, `c = c = `, `→c`, `c = AB = `) і 3 категорії «vec …» з незалежною класифікацією за текстом умови (`vecNames`: all/given/asked/up).
- `tools/test-learn.mjs` — блок «engine-coordinates-vector-name» (фікстури-копії умов b04, d04 + синтетичні: `\vec p` без дужок, AB, символьний ключ, заголовок, дана назва в запитанні).
- `docs/CONTENT_SCHEMA.md` — рядок `coordinates2`, `coordinates3`.

### Перевірки
- `node tools/test-learn.mjs` — 2628 перевірок, усе гаразд.
- `node tools/diff-answers.mjs --old HEAD --grades 4-11` — 1637 вправ, 70456 записів; 0 непояснених; vec «→» після великої — 336, vec мала назва ok — 92 (лише pg11m2 b04, pg9m2 c03, d01, d02, d04), vec form — 112. Ok → form (суворіше): `a(…)` / `m(…)` / `k(…)` у вправах з даним/шуканим вектором малою (pg11m2 b04, pg9m2 c04, d01, d02). Старі записи `(x; y; z)`, `A(…)`, `AB = (…)` — без змін (0 інших розбіжностей).
- `node tools/test-diff-answers.mjs` — 38 ok (фікстура b799dfa: rc 0, усі різниці пояснені).
- `npm run check` — EXIT 0.
- Мутанти learn.js проти test-learn: 22/22 вбито (стрілки → і ⃗ окремо, `\vec{мала}`, множник, !vec, vask, given, ask, dropName vec/sym, порядок nameMsg, vecBraces, given малих, vec з vnames / з given, заголовок малою, vecBraces заголовка, hintTexts, givenMsg малої, vnames.delete, bare малої, nameMsg малої). Мутанти learn.js проти diff-answers: 6/6 дають непояснені й rc 1 (!vec, vask, given, ask, порядок nameMsg, множник); мутант «ask» спершу вижив — додано `up` у `vecNames`.
- Браузер (Node Playwright, chromium, index.html з локального сервера): у сторінці `SLID_LEARN.checkAns` на живих pg11m2 b04 / pg9m2 d04 — `c = (…)`, `c(…)`, `c→ = (…)` ok, `a = (…)` / `m = (…)` form з поясненням, неправильне — bad; pageerror немає.
- Python Playwright у контейнері немає: `python3 tools/test-answer-ui.py --suite regression` не прогнано. Сценарій для прогону: тренування pg11m2 → b04: ввести `c = (−13; −2; 17)` → «Правильно»; `a = (−13; −2; 17)` → півбала/«form» з текстом «a — даний вектор умови»; `c = (−13; −2; 18)` → «Неправильно» без підказки; перевірка «підказка ≠ ключ» (нові тексти в hintTexts не містять ключа).

### Відомі межі
- Стрілка лише після назви (`c→`), не перед (`→c` — bad). Велика назва при шуканому векторі малою (`C(…)` для $\vec{c}$) — як раніше ok (велику не звіряємо з малою).
- Заголовок і тіло в askedPoint — один текст (теги знято), тож «Вектор $\vec{p}$» у заголовку разом із «Знайди координати точки $B$» дає і ask=B, і vask=p (поведінка великих назв така сама й раніше).

### Раунд 2 (рев'ю reports/review/engine-coordinates-vector-name.md, a22b629)
- **P1-1:** `NAME_AT` — хвіст `\s*(?:([→⃗])\s*)?(?:(=)\s*)?(?=\()` замість `\s*([→⃗])?\s*(=?)\s*` (три `\s*` поспіль — кубічний бектрекінг). Ті самі ланцюжки прибрано в `IMG_AT`, `IMG_ONE` (були квадратичні ще до задачі: `\s*=?\s*`, `\s*\{?\s*`, `\s*\}?\s*`) і в регулярці даних точок askedPoint; у diff-answers — `VEC0`, `ARROW0`, `vecNames` (given, up). Набір прийнятих записів не змінився (diff-answers проти a8845b4 — лише нові записи `\vec c = `).
  - Заміри `checkAns` на «назва + N пробілів + x» (pg11m2 b04): 8c651dd — 10–16 мс при N = 2000, ≈ 1 с при N = 20000; a8845b4 — ≈ 6 с при N = 2000 («c», «AB»); тепер — 0–1 мс при N = 20000, 2–3 мс при N = 200000.
  - Тест у test-learn: `c`, `AB`, `A_`, `A_{1`, `A1`, `A'`, `c→`, `c =`, `\vec{c}` + 20000 пробілів + `x` — `bad`, checkAns + badHint на двох вправах < 200 мс.
- **P3-1:** фікстура TD (тіло питає $\vec{c}$, заголовок «Вектор $\vec{d}$») — мутант `!names.size` замість `!names.size && !vnames.size` вбито.
- **P3-3:** `\vec c` без дужок у записі дитини — як `\vec{c}` (`vecBraces` у parsePoint, splitPair, dropName, nameMsg); тести для числового й символьного ключа; CONTENT_SCHEMA.
- Перевірки: `node tools/test-learn.mjs` — 2647, усе гаразд; `node tools/diff-answers.mjs --old 8c651dd --grades 4-11` — 70694 записи, 0 непояснених (vec «→» 336, vec ok 110, vec form 132); `npm run check` — EXIT 0 (test-diff-answers 38 ok).
- Мутанти test-learn: 30/30 вбито (22 раунду 1 + R2-1 заголовок `!vnames`, R2-2 кубічний хвіст NAME_AT — зависання > 90 с, R2-3/R2-4 квадратичні IMG_AT/IMG_ONE, R2-5…R2-8 vecBraces у parsePoint, dropName, nameMsg, splitPair). Мутанти проти diff-answers (--old 8c651dd): 6/6 rc 1.
