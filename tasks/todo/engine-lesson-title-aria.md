---
id: engine-lesson-title-aria
type: engine
status: todo
claimed_by:
created: 2026-10-31
depends_on: []
---
# Форматер формул вставляє HTML в атрибути (aria-label кнопки уроку)

Знайшов виконавець engine-math-render-tex-gaps (знімок scratchpad render/before/g8m3-path.png). app.js екранує назву уроку в `aria-label`, потім форматер формул проходить по всій сторінці й вставляє HTML формули в атрибут — у кнопці видно «√2 ?\">». Виправити в рушії: форматер не чіпає атрибути, або app.js пише в aria-label простий текст (без `$`). Регресійний тест (test-answer-ui або test-lab), незалежне рев'ю (D-026).

## Нотатки виконавця
