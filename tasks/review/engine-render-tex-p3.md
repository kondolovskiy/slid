---
claimed_from: todo
claimed_at: 2026-11-01T10:43:55.753Z
id: engine-render-tex-p3
type: engine
subject: math
status: review
claimed_by: agent-engine-render-tex-p3
created: 2026-10-31
depends_on: [engine-math-render-tex-gaps]
---
# P3 з рев'ю engine-math-render-tex-gaps

Джерело: reports/review/engine-math-render-tex-gaps.md.
1. app/lab.js svgMath: зсув індексу без Unicode-відповідника в кінці формули (`$a_n$(2; 3)`) не скасовується — текст після `$` лишається опущеним на 3 px. Зараз 0 випадків у змісті.
2. Тест на `xmlEsc` (мутація «тотожна функція» не ловиться): підпис з `&`, `<`.
3. validate checkTex: непарний `$` в items, pairs, steps не перевіряє ніхто — розширити поля.
4. (з engine-lesson-title-aria) `spec.alt` у app/lab.js:636 — `$` читався б буквально; checkTex уже дає помилку для формули в lab.alt — підтвердити тестом.

Готово: тести на кожен пункт; незалежне рев'ю (D-026).

## Нотатки виконавця

Виконавець: agent-engine-render-tex-p3 (worktree wt-tex3, 2026-11-01). Один комплект із tools-validate-tex-escapes і tools-test-validate-p3 — одне рев'ю.
Пункт «відступи навколо `\to` у app/math.js» НЕ робив — його робить інший виконавець (app/math.js, app/learn.js не чіпав).

1. **lab.js P3-1 (зсув індексу в кінці формули).** `svgMath` → `svgMathR(src, size, carry)` повертає `[розмітка, незакритий dy]`; `svgTex` іде формулами по черзі й віддає залишок зсуву тексту після формули (`<tspan dy="-3">(2; 3)</tspan>`) або наступній формулі (carry). Вкладений зсув (`x_{a_b}`) сумується (`reset = r - d`). Формула в кінці підпису — без зайвого tspan. Рендер усіх 646 моделей змісту до/після — байт у байт (0 відмінностей), тож видимий зміст не змінився.
2. **xmlEsc P3-2.** test-lab: `$a & b$` → `&amp;`, `$\foo&$` → `&amp;`. Мутація «xmlEsc = тотожна» тепер ловиться (2 падіння); старий lab.js падає на 5 нових тестах P3-1.
3. **validate P3-3.** Непарний `$` у будь-якому рядку екрана поза title/body/fbText/hint/opts (items, pairs, steps пулу, note…) — помилка; для пулу склеєний fbText зі steps більше не перевіряється окремо (кожен крок — сам).
4. **lab.alt P3-4.** Фікстура `lab.alt: "Графік $y = x$"` → помилка «lab.alt: формула» (test-validate).
5. **З engine-lesson-title-aria:** P3-1 — тест одиночного `$` в атрибуті (значок: `desc 'Ціна 5 $'` + `name 'Знак $x$'`; без `&#36;` fmt спаровує `$` і ламає title — мутація ловиться); P3-2 — `attr(esc(l.title))` на мапі й у шторці (`'Чи a<b?'` лишається в aria-label, було «Чи a»); P3-3 — `plainNode` перетворює `<sub>` з цифр/знаків на ₀–₉ (`x₁`, `log₂ 8`), інші індекси як раніше (xAB); P3-4 — `urlAttr` пропускає лише `https?://`, інакше `#` (у змісті 179 credits, усі https). Усі 4 мутації (без &#36;, attr(l.title), без SUB, urlAttr без фільтра) валять `attr_math_checks`. BAD_ATTRS дозволяє рівно дві фікстурні назви з `<`/`$`.
6. **Назва функції без лапок** — попередження (поза `"…"`, `\text{…}`, `{…}`): sin cos tg ctg arcsin arccos arctg arcctg log lg ln. У змісті зараз **0** випадків (усіх предметів).
7. **checkTex → помилки**: TeX поза `$…$`, непарний `$` у lab.show/підписах повзунків/SVG (svgTexIssues «warn» теж), назва уроку з `$` чи TeX. До/після на всьому змісті: 0 помилок, 255 → 255 попереджень, множини попереджень однакові (0 нових, 0 зниклих).
8. docs/CONTENT_SCHEMA.md §5 — нові рівні, бекслеш у JS-рядку, назви функцій.

**Перевірки (мій прогін, wt-tex3):** build; test-lab 105/105, test-learn 1502, test-math 22/22, test-metrics 20, test-personalization-qa 96, test-validate 177 — усі rc 0; validate 0 помилок / 255 попереджень (як до змін, ті самі рядки); `test-answer-ui.py --browser /opt/pw-browsers/chromium --suite regression` green; playtest `--section` g9m2 (5), g7m5 (4), g10m5 (5), g8m3 (5), g4m2 (5) — rc 0.
**Не зроблено (зміст):** косметика g11m6 `"sin " γ` → `"sin"\,γ` — лише перелік: content/math/g11-g11m6.js р. 558 (body), 610 (hint), 776 (hint). Рендериться нормально, validate мовчить (у лапках).
**Відкрите:** `sw.js`/`index.html`/manifest не комічено (build — при злитті, AGENTS.md §6); VERSION зміниться через app.js/lab.js.

## Також P3 з reports/review/engine-lesson-title-aria.md
- тест на одиночний `$` в attr (мутація `$`→`&#36;` не ловиться);
- `attr(l.title)` розбирає назву як HTML (`a<b` → `a`), видима назва — через esc;
- індекси в plainText: `$x_1$` → «x1», `log<sub>2</sub>` → «log2»;
- urlAttr: пропускати лише `https?:`.

## Також (fix-math-tex-content, fix-math-trig-notation)
- validate: попередження на латинську назву функції без лапок у `$…$` поза `{…}` (sin, cos, tg, ctg, arcsin, arccos, log, lg, ln) — так було 162 місця в g9m4/g10m5, рендерились курсивним добутком;
- після цього підняти checkTex (непарний `$`, TeX поза `$…$`, `$` у назві) до помилок — у змісті математики 0 випадків;
- app/math.js: відступи навколо `\to` (на 400 px стрілка зливається з числами, g7m5);
- косметика змісту: g11m6 р. 558, 610, 776 `"sin " γ` → `"sin"\,γ`.
