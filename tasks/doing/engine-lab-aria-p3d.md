---
claimed_from: todo
claimed_at: 2026-11-01T14:38:27.299Z
id: engine-lab-aria-p3d
type: engine
subject: math
status: todo
claimed_by: agent-engine-lab-aria-p3d
created: 2026-11-01
depends_on: [tools-lab-validate-p3c]
---
# P3 з рев'ю tools-lab-validate-p3c (reports/review/tools-lab-validate-p3c.md)

1. app/lab.js:472–475: у aria-valuetext лишаються `_` і `{}` — зчитувач скаже «x underline 1». Перетворювати індекси/степені на Unicode («x₁», «²») або пробіл, як plainText в app.js.
2. app/lab.js:474: `isVal` вважає значенням будь-який підпис із шаблоном; шаблон в індексі (`$x_{{k}}$`) — координата не озвучиться. На змісті 0.
3. tools/validate.mjs:240: у розділу плану без уроків після `continue` не перевіряються `requires` і `badges`.

Незалежне рев'ю (D-026).

## Нотатки виконавця

## Також P3 з reports/review/engine-diag-answer-kinds.md
1. diff-answers `--content-old "-o<шлях>"` прокидається в git archive як опція; неіснуюча ревізія — траса стеку. Перевіряти `git rev-parse --verify --end-of-options`.
2. `objs` надто широкий: «Знайди координати $D$» без слова-маркера або назва лише в заголовку → природна `D(…)` дає form. Негативний тест.
3. У тесті рівня form тихо стає BAD; підказка під полем для quantity compound і reduced/mixed не каже, якого запису чекають; validate цього не перевіряє.
4. «немає title» для answer у тесті — двічі після злиття; `learn.validate` дозволяє `signed` для answer будь-якого формату (у пулі — лише числовий).
5. `--content-old` бере рушій зі старої ревізії — ревізії без якогось app/*.js падають; задокументувати евристику «title/body без rev».
