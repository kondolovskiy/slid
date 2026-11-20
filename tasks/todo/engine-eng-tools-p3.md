---
id: engine-eng-tools-p3
type: engine
subject: eng
depends_on: [engine-eng-tools]
status: todo
claimed_by:
created: 2026-11-19
source: review engine-eng-tools
priority: P3
---
# Дрібниці інструментів eng (P3 з рев'ю engine-eng-tools)

Скіл `engine-change`; звіт — reports/review/engine-eng-tools.md (P2-1 CRLF виправлено окремим комітом оркестратора).

1. figCues (tools/lib.mjs:280–282): пропускає «Look at my family photo», «Look at Tom's photo», «Look at picture A» (присвійні, літерні номери); хибно — «in the drawing club», «figure 8».
2. Шаблон задачі розділу eng у make-tasks бідніший за tasks/todo/write-eng-g5-e5s1.md: перелік типів екранів, «4 клас робимо», орієнтир кількості уроків.
3. Імена задач — від `subjectLang`, шаблон — від `isEnglishSubject`: узгодити.
4. Значення frontmatter у лапках чи списком не зіставляються з розділом.
5. validate: `noPool` має бути boolean.

Рев'ю D-026 після реалізації.
