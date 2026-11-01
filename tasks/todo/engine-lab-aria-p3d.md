---
id: engine-lab-aria-p3d
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-01
depends_on: [tools-lab-validate-p3c]
---
# P3 з рев'ю tools-lab-validate-p3c (reports/review/tools-lab-validate-p3c.md)

1. app/lab.js:472–475: у aria-valuetext лишаються `_` і `{}` — зчитувач скаже «x underline 1». Перетворювати індекси/степені на Unicode («x₁», «²») або пробіл, як plainText в app.js.
2. app/lab.js:474: `isVal` вважає значенням будь-який підпис із шаблоном; шаблон в індексі (`$x_{{k}}$`) — координата не озвучиться. На змісті 0.
3. tools/validate.mjs:240: у розділу плану без уроків після `continue` не перевіряються `requires` і `badges`.

Незалежне рев'ю (D-026).

## Нотатки виконавця
