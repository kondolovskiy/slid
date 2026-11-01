---
claimed_from: todo
claimed_at: 2026-11-01T12:09:26.854Z
id: tests-diag-rev-p2
type: engine
subject: math
status: done
claimed_by: agent-tests-diag-rev-p2
created: 2026-10-31
depends_on: [refine-math-diag-g6-coverage]
---
# Тести редакцій тесту рівня: прогалини з рев'ю refine-math-diag-g6-coverage

Джерело: reports/review/refine-math-diag-g6-coverage.md (вердикт «прийнято», ці пункти не блокували).

- **P2-1.** test-answer-ui не ловить регресію, коли startDiag перестає записувати `diagRunRev` (повернення `res:S.diagRun[d.id]||…`): дитина в ред. 2 відповідає на rev-проби, перезавантажує — відповіді зникають. Потрібен браузерний сценарій: почати тест ред. 2 без підкладеного diagRunRev, відповісти на rev-пробу, перезавантажити, перевірити, що вердикт лишився.
- **P3-1.** test-learn: збережена ред. 2 при чинній ред. 3 (мутація `saved >= 1 ? saved` → `? rev` проходить).
- **P3-2.** Єдиний розбір `rev` у diagRev і resumeDiag.
- **P3-3.** Ключі вердиктів за межами `items` (мутація без `!it ||`).

Готово: мутації з рев'ю ловляться тестами; незалежне рев'ю (D-026) «прийнято».

## Нотатки виконавця
- **P2-1** test-answer-ui (grade_context_checks, suite regression): чистий профіль 6 кл., тест dg6 через плеєр (без підкладеного diagRunRev), відповіді до двох rev-проб включно → `diagRunRev.dg6 == 2`, вердикти rev-проб 1; ✕, reload → diagRun і diagRunRev ті самі, «Продовжити тест», наступне завдання — не з уже відповіданих. Мутація app.js `startDiag` → `res:S.diagRun[d.id]||(S.diagRun[d.id]={})` — сценарій падає (KeyError 'dg6', rc 1).
- **P3-1** test-learn: запуск ред. 2 при ред. 3 — відкинуто лише rev-3, rev-2 лишився; ред. 1 при ред. 3 — обидва. Мутація `saved >= 1 ? rev` — 2 помилки.
- **P3-2** app/learn.js: `itemRev` — один розбір rev для diagRev і resumeDiag; тест: при ред. 2 завдання з rev «3» і 2.5 не відкидаються. Мутація назад на `(it.rev || 1) > from` — ловиться.
- **P3-3** test-learn: ключ 99 за межами items у старому запуску відкидається; у запуску чинної редакції — не чіпається. Мутація без `!it ||` — ловиться.
- Перевірки й коміт — див. engine-learn-list-prefixes-p3 (спільний комплект).
