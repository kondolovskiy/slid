---
write_group: personalization-shared
id: tools-pqa-exactroot-in-list
type: engine
subject: math
status: doing
claimed_by: engineer-pqa
created: 2026-10-31
depends_on: [verify-math-personalization-g8]
---
# personalization-qa: список із точними коренями закриває вимогу exactRoot

Рішення людини (2026-10-31, варіант 2 з reports/verify/math-personalization-g8.md): в `tools/personalization-qa.mjs` вимогу формату `exactRoot` уроку має закривати й вправа `answerKind: "list"`, у ключі якої хоч один елемент — точний корінь (√, напр. «-√5; √5»), якщо `checkAns` для цього списку справді розбирає елементи як exactRoot (тобто учень вводить корінь і перевірка канонічна). Мета — зняти «БРАКУЄ: pg8m5/g8m5l1, g8m5l4: немає формату exactRoot» без зміни матриці.

- Не послаблювати інші перевірки; list без кореня не рахується; число-наближення не рахується.
- Регресії — у tools/test-personalization-qa.mjs (позитив, негатив, список з десятковим наближенням).
- Оновити опис правила в docs (PERSONALIZATION_QA.md або де описано формати).
- Незалежне рев'ю (D-026).
- Не покриває pg8m3/g8m3l3 (немає формату list) — це окреме питання матриці/уроку.

## Нотатки виконавця
