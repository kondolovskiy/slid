---
id: tools-content-checks-p4
type: tools
subject: all
status: todo
claimed_by:
created: 2026-11-19
source: inbox 18–19.11 (agent-engine-lab, verifier-u4s2, verifier-u4s3)
priority: P3
---
# Нові попередження validate / euphony (продовження tools-content-checks-p3)

Скіл `engine-change`; незалежне рев'ю D-026. Код — tools/content-checks.mjs (+ тести test-content-checks, test-validate).

1. **Крапка всередині закритих лапок** `.»` у реченні-прикладі («Погодуй кота.» — УП § 167 п. 2; u4s2, 6 місць до правки verifier-u4s2). Попередження; винятки — цитата, що закінчується «?», «!», «…» (тоді знак усередині).
2. **ukr grade 4: `gaps` з > 3 пропусками** — попередження (style/ukr.md «4 клас»: 1–3 пропуски; u4s2 мав 7 екранів по 4–5).
3. **euphony у варіантах `choice`/`multi`:** «тихо іде» (після голосного перед приголосним — «йде», УП § 24 п. 2) у `opts` не перевіряється (verifier-u4s3).
4. **Сирий `\{ \}`:** після engine-lab-p3-1117 (10eb309, 3856b4b) рушій малює `\{ \}` у формулах — якщо в validate/content-checks лишилось попередження чи помилка на `\{` (tools-content-checks-p3 п. 16, agent-engine-lab 18.11), прибрати; glossary/math уже оновлено.
