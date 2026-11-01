---
id: tools-validate-p3b
type: engine
status: todo
claimed_by:
created: 2026-11-01
depends_on: [tools-validate-tex-escapes]
---
# P3 з рев'ю engine-render-tex-p3 (reports/review/engine-render-tex-p3.md)

1. jsEscapeIssues не розпізнає regex-літералів (`/"\d/` — хибна помилка, `/a\/*b/` ховає справжню) і `String.raw`. У змісті 0 випадків.
2. `"x\ne"`, `"a\to"` — перенос/табуляція перед TeX-назвою дає помилку; рідко, але можливо навмисно.
3. Тест: обмеження скану файлом розділу під `--section` (мутація «завжди всі файли» проходить).
4. Вкладені дужки в SVG-індексі `x_{a_{bc}}` — зсув; svgTexIssues не позначає.
5. validate: перевіряти URL у credits (лише https), бо не-https мовчки стає `href="#"`.

Незалежне рев'ю (D-026).

## Нотатки виконавця
