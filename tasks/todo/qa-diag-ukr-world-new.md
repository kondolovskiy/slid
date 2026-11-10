---
id: qa-diag-ukr-world-new
type: qa
subject: ukr
status: todo
claimed_by:
created: 2026-11-10
depends_on: [write-ukr-diag-g9, write-ukr-diag-g10, write-ukr-diag-g11, write-world-diag-g10, write-world-diag-g11]
---
# Браузерне приймання нових тестів рівня: dgu9–dgu11, dgw10–dgw11

## Навіщо
Після верифікації тестів — пройти їх у браузері, як reports/qa/qa-ukr-diag.md і qa-hist-diag.md.

## Що зробити (агент qa-runner або CI)
1. `npm run check` — зелений; `node tools/personalization-qa.mjs --diag <id>` для кожного.
2. `python3 tools/playtest.py` для тестів рівня (локально модуля playwright може не бути — тоді CI job `browser` з `playtest: full`), по одному.
3. Сценарії: усе правильно → «знайоме» для cur; усе «Ще не знаю» → план з уроками pre; перерваний тест на головній (D-052); тривалість (кількість екранів × середній час) проти 12–15 хв.
4. Звіт `reports/qa/qa-diag-ukr-world-new.md` ✅/❌; знахідки — рядки BUG/ENGINE в inbox.

## Готово, коли
- [ ] Звіт є, блокувальні знахідки — окремими задачами fix-*.

## Нотатки виконавця
