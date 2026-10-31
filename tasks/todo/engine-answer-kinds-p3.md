---
id: engine-answer-kinds-p3
type: engine
subject: math
status: todo
claimed_by:
created: 2026-10-31
depends_on: [engine-math-answer-kinds-new]
---
# P3 з рев'ю engine-math-answer-kinds-new (reports/review/engine-math-answer-kinds-new.md)
- `x ∈ y ∈ (−∞; 3]` → ok: знімати префікс «… ∈» лише один раз.
- Екстрактор прикладів у test-answer-ui склеює слово між цифрами («2 : 3 чи 6 : 10») — збіг із ключем проходить; розділяти приклади за «чи/або/і».
- diff-answers: додати записи зі зміненою лише другою компонентою (coordinates/ratio).
- quantity `2 м 45`, `2 9/20 м`, `3:20` → bad без пояснення — дати підказку формату.
- mixed + періодичний дріб: підказка у два кроки — об'єднати.
- validate.mjs для екранів `answer` в уроках — ті самі правила, що validatePool (decimals, units поза quantity).
- test-personalization-qa: повернути «якорі» живого змісту, що безпечні (наявність pg11m, dg6 перевіряє не лише себе) — без лічильників.
Незалежне рев'ю (D-026).
