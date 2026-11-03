---
claimed_from: todo
claimed_at: 2026-11-03T20:30:48.134Z
claimed_by: impl-tools-make-tasks-template
id: tools-make-tasks-template
type: engine
subject: all
status: review
created: 2026-11-02
depends_on: []
---
# Шаблон задачі автора в make-tasks: build і D-027

З рев'ю tools-agent-skills (P3, поза diff): шаблон звичайного режиму `tools/make-tasks.mjs` велить автору запускати `tools/build.mjs`, хоча під час паралельного запуску build робить лише оркестратор (AGENTS.md §4 п. 8). Для історії шаблон пише «Фото (якщо є)», хоча D-027 вимагає справжнє `img` у кожному уроці.

## Що зробити
- Прибрати з шаблону автора крок build (або «лише якщо працюєш сам, не в паралельному запуску»).
- Для `hist` — «у кожному уроці ≥ 1 справжнє img (D-027), скіл hist-images».
- `tools/test-make-tasks.mjs` зараз покриває лише `--write-pool` — додати перевірку звичайного режиму на фікстурі плану.
- Незалежне рев'ю (D-026).

## Нотатки агента
<!-- impl-tools-make-tasks-template, 2026-11-03 -->
**Змінено**
- `tools/make-tasks.mjs` (звичайний режим): у «Готово, коли» замість `node tools/build.mjs && node tools/validate.mjs --section …` — лише validate; окремим рядком після чек-листа: build не запускати (оркестратор, AGENTS.md §4 п. 8; validate бачить новий файл і без build — `manifest()` сканує теки), лише соло — build наприкінці. Для предметів з `IMG_REQUIRED` (hist, world): «у кожному уроці ≥ 1 справжнє img з cap і credits (D-027; svg/fig не зараховуються)», скіл hist-images у «Прочитати» і «Результат», окремий пункт D-027 у чек-листі. Інші предмети: «Зображення (якщо потрібні) — у img/…, з cap і credits» замість «Фото (якщо є)». Нові опції `--content DIR` (інше дерево змісту для `loadContent`) і `--tasks DIR` тепер діє й у звичайному режимі (todo створюється, якщо немає).
- `tools/lib.mjs`: `IMG_REQUIRED = { hist: "error", world: "error" }` перенесено з `tools/validate.mjs` — одне джерело для validate і шаблону (інваріант «переліки — з одного джерела»); validate імпортує, поведінка без змін.
- `tools/test-make-tasks.mjs`: блок 3 — звичайний режим на фікстурі `tools/fixtures/make-tasks/content/` (hist fh5, world fw7, math fmx з уроками / fm5 / fm6 з наявною задачею в review): 3 задачі, пропуски, frontmatter, теми, немає кроку build у чек-листі, validate --section, пояснення про оркестратора, D-027 для hist/world і не для math, сусід з уроками, ідемпотентність, `--subject --grade`, справжній план у тимчасову теку без змін `tasks/`. Було 27 перевірок → 48.
- `docs/WORKFLOW.md` §2 — рядок про шаблон і опції.

**Тести**
- Спершу червоне: 21 з 48 перевірок не пройшли (без `--content` і з чинним шаблоном), після реалізації — `node tools/test-make-tasks.mjs`: усі 48.
- `node tools/test-validate.mjs` — усі 1069; `node tools/validate.mjs` — 0 помилок.
- `npm run check` — rc 0 (усі node-тести, зокрема test-learn, test-personalization-qa, test-hyp; validate 0 помилок; graph-report; stats; fig-audit). Build не змінив index.html, sw.js, content/manifest.json (app/ і content/ не зачеплено).

**Обмеження**
- Звичайний режим, як і раніше, пропускає розділ лише за ім'ям файлу задачі (не за `id` у frontmatter, як `--write-pool`); `--dry-run` у звичайному режимі немає — поза задачею.
- AGENTS.md §3 не змінено (нові опції — тестові).
