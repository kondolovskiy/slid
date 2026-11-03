---
claimed_from: todo
claimed_at: 2026-11-03T20:25:11.060Z
id: tools-ister-p3
type: engine
status: review
claimed_by: impl-tools-ister-p3
created: 2026-11-03
depends_on: [math-ister-migration]
---
# P3 з рев'ю math-ister-migration (reports/review/math-ister-migration.md)
1. P3-1: екран «Тренування» — заголовки розділів за порядком програми (клас, тижні), а не за порядком файлів пулів (app/app.js ≈ 424).
2. P3-2: `personalization-qa --grade` — `counts.exercises` для пулу з `also` рахувати лише вправи уроків цього класу.
3. P3-3: мутанти, що вижили: `Array.isArray(p.also)` і `typeof id` у validatePool; клас вправи в tools/diff-answers.mjs — тести.
4. P3-8: тест — пройдений урок не замикається, коли перед ним вставлено новий (`unlocked`, app/app.js:166); браузерний сценарій «Тренування» з `also`.
Незалежне рев'ю (D-026).

## Нотатки виконавця
Виконавець: impl-tools-ister-p3 (worktree, гілка worktree-agent-ad31655f8aff4134e). Зміни:
- **P3-1** `app/learn.js` — нова `practiceGroups(subject, items)` → `[{ sec, lessons, cnt }]`: розділи в порядку `subject.sections`
  (registry finalize сортує за класом і тижнями), кожен раз, лише з вправами. `app/app.js` `viewPractice` бере групи з неї замість
  обходу пулів; `poolsFor` більше ніде не використовувався — видалено.
- **P3-2** `tools/personalization-qa.mjs` — з `--grade` `counts.exercises` рахує лише вправи уроків цього класу (живий зміст:
  `--grade 5` → 192, `--grade 6` → 184).
- **P3-3** `validatePool`: id в `also`, що не рядок, — окреме повідомлення «also: id розділу має бути рядком, а не …» (раніше гілка
  `typeof` була еквівалентною: `Map.has` і так false). Тести в `tools/test-learn.mjs` перевіряють точні повідомлення («a5» → помилка
  формату, `[5]` → не рядок, «zz» → немає розділу). `tools/test-diff-answers.mjs` §6 — фікстура змісту (пул section qa5, also qa6):
  `--grades 5` → 2 вправи, `--grades 6` → 3.
- **P3-8** замок уроку: чисте правило винесено в `LEARN.lessonOpen(sec, i, open)`; `unlocked` в app.js = `S.unlockAll || lessonOpen(…, done||known)`
  (поведінка та сама). Node-тест «вставлений урок перед пройденим». Браузер: новий `tools/test-ui-ister.mjs` (Node Playwright,
  синтетична фікстура через підміну SLID_SUBJECTS після завантаження): заголовки «Тренування» за програмою, розділ один раз з двох
  пулів, без порожнього й старшого розділу, лічильник; замок вузлів розділу. Не в check і CI (як test-answer-ui.py); рядок в AGENTS.md §3.
- `node tools/build.mjs` → `sw.js` (VERSION). `index.html`, `content/manifest.json` не змінилися.

Перевірки (worktree):
- `npm run check` — exit 0: test-learn 2378 ✓, test-hyp 616, test-evidence 155, test-lang 96, personalization-qa 109, test-validate 1069,
  test-graph-report 67, test-make-tasks 22, test-diff-answers 38 ok (2 перевірки «--old HEAD» пропущено, поки learn.js не закомічено);
  validate 0 помилок / 266 попереджень; граф math 0 помилок, 0 дрейфу. Відомих падінь draft-уроків з інших гілок у цьому дереві немає.
- `node tools/test-ui-ister.mjs` — 9 ok.
- Мутанти (копія дерева в scratchpad): старий порядок у viewPractice → test-ui-ister вбито; lessonOpen без open(i) → test-learn і
  test-ui-ister вбито; practiceGroups у зворотному порядку → вбито; validatePool без Array.isArray / без typeof → вбито;
  personalization-qa без фільтра класу → вбито; diff-answers клас за p.section → test-diff-answers вбито.
- `python3 tools/test-answer-ui.py --suite regression --browser /opt/pw-browsers/chromium` — exit 0, «Обрані браузерні сценарії: green»
  (окремо, по одному; Python-модуль playwright у цьому середовищі є, всупереч брифу).
- Не перевірено: `playtest.py` (розділи змісту не змінювалися); Node-сценарій лише на синтетичній фікстурі, живий екран
  «Тренування» 5/6 кл. очима не дивився.
