---
description: Незалежна перевірка розділу (факти, відповіді, педагогіка, стиль)
argument-hint: <id розділу, напр. s2 або g6s1>
---
Запусти субагента content-verifier (свіжий контекст, не той, хто писав) для розділу $ARGUMENTS.
Задача: tasks/review/verify-<предмет>-$ARGUMENTS.md або write-<предмет>-$ARGUMENTS.md у tasks/review/.
Після завершення покажи підсумок звіту reports/verify/$ARGUMENTS.md і що потребує людини.
