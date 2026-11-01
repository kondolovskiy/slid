---
claimed_from: todo
claimed_at: 2026-11-01T10:43:55.753Z
id: engine-render-tex-p3
type: engine
subject: math
status: todo
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
