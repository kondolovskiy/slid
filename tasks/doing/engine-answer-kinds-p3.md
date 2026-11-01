---
claimed_from: todo
claimed_at: 2026-11-01T12:09:26.820Z
id: engine-answer-kinds-p3
type: engine
subject: math
status: todo
claimed_by: agent-engine-answer-kinds-p3
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

## Також (reports/verify/refine-math-pools-new-kinds.md)
- підказка під полем для `decimals` і `form: "improper"` — своя, а не загальна «Мішане число — через пробіл: 2 1/3»;
- `quantity` не приймає «2 543 см» (пробіл між розрядами).

## Нотатки (частково, wt-lab3)
- Пункт «validate.mjs для екранів `answer` в уроках — ті самі правила, що validatePool» **зроблено в гілці wt-lab3** (комплект engine-player-a11y-p3 + tools-validate-p3b, одне рев'ю): `answerFieldIssues` у tools/validate.mjs загортає екран у пул з однією задачею й викликає саме `SLID_LEARN.validatePool` (правила не розійдуться: answerKind, decimals, form/improper, units лише для quantity, time/quantity без unit, multiset, signed, tol, unitForms…); «ключ не читається» не дублюється. Діє для уроків і діагностик; задачі пулу не перевіряються двічі. На змісті 0 екранів `answer` в уроках і діагностиках — 0 нових помилок. Фікстури: 10 випадків у test-validate + «пул без дубля». app/learn.js не змінювався.
