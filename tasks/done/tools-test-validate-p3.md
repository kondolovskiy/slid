---
claimed_from: todo
claimed_at: 2026-11-01T10:43:55.855Z
id: tools-test-validate-p3
type: engine
subject: hist
status: done
claimed_by: agent-tools-test-validate-p3
created: 2026-10-31
---
# P3 з рев'ю tools-hist-image-error (reports/review/tools-hist-image-error.md)
- test-validate: додати прогін validate без `--section` (повний) на фікстурі.
- test-validate: фікстура boss-уроку hist без img → помилка.
- .claude/agents/qa-runner.md і README: додати test-validate, test-math, test-personalization-qa у перелік прогонів.
Незалежне рев'ю (D-026).

## Нотатки виконавця
Виконавець: agent-tools-test-validate-p3 (worktree wt-tex3, 2026-11-01), спільне рев'ю з engine-render-tex-p3.
- test-validate: **повний прогін validate без `--section`** на фікстурному дереві: чисте дерево (hist-розділ з img і boss з img + math-розділ + пул) → 0 помилок, rc 0, підсумок без фільтра, обидва фікстурні розділи справді перевірені (їхні попередження профілю у звіті — не нульовий прогін); потім +3 зіпсовані файли (boss hist без img, `\Delta` з одним бекслешем, непарний `$` в items) → rc 1, кожна помилка є, і всі помилки — лише з зіпсованих файлів.
- Фікстури **boss-уроку hist без img → помилка D-027** і boss з img → чисто (у CASES) + boss у повному прогоні.
- `runTree(files, args)` — спільний запуск для нових блоків (ESC, pool, повний прогін); старі блоки не переписував.
- `.claude/agents/qa-runner.md` (крок 2 і description) і README («Перевірити контент») — додано test-math, test-personalization-qa, test-validate (той самий набір, що `npm run check` і CI).
- test-validate: 75 → 177 перевірок; на HEAD-версії validate.mjs нові падають (38 падінь).

