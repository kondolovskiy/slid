---
claimed_from: todo
claimed_at: 2026-11-12T19:57:02.904Z
id: qa-diag-ukr-world-new
type: qa
subject: ukr
status: done
claimed_by: qa-diag-new
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
- [x] Звіт є, блокувальні знахідки — окремими задачами fix-* (блокувальних немає).

## Нотатки виконавця
- 2026-11-12, qa-diag-new: звіт reports/qa/qa-diag-ukr-world-new.md (✅), скрипт reports/qa/qa-diag-ukr-world-new.script.mjs (Node Playwright, 375 px), знімки reports/qa/qa-diag-ukr-world-new-shots/.
- personalization-qa --diag ×5 — код 0 (матриця лише для math, перевірено структуру); validate --diag ×5 — 0/0.
- (а) правильні відповіді кліками в UI → усі вердикти 1, усі cur «знайоме» (8/8/8/7/6); (б) «Ще не знаю» → кроки плану = всі уроки pre (17/17/18/11/11), baseline немає; (в) перерваний тест — єдина картка «Продовжити тест» на головній (D-052), продовження з того самого завдання; (д) 0 помилок консолі, 0 переповнень на 375 px.
- (г) тривалість повного проходу 12–15 хв (dgw10 ≈ 15 — верхня межа), картка «≈ 9–10 хв» — P3, ENGINE в inbox.
- Не запускалось: npm run check (містить build — заборонено задачею; оркестратор зробив у 170d5fc), playtest.py / test-answer-ui.py (немає Python playwright) — CI job browser.

