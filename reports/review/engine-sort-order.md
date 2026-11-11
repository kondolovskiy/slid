# Рев'ю D-026: engine-sort-order

- Перевірено: коміт `a1587cc` (гілка `worktree-agent-a8ed2b2de0a62cc78`), diff `a1587cc~1..a1587cc`: app/app.js, app/lang.js, docs/CONTENT_SCHEMA.md, docs/EVIDENCE.md, tools/test-lang.mjs, tools/test-answer-ui.py, inbox, задача.
- Рецензент: незалежний агент, реалізацію не писав.

## Вердикт: **прийнято**

Блокувальних знахідок (P1) немає, P2 теж немає.

## Що перевірено в коді
- Хто читає DOM sort (grep `srow`, `.seg`, `data-r`, `bins` у app/, tools/):
  - показ: app/app.js:1109–1115. `data-row`, `data-r` і `id="srow{k}"` беруть індекс items, а не позицію на екрані.
  - клік: app/app.js:1321–1324. `st[+b.dataset.r]` дає індекс items, тож від порядку DOM не залежить.
  - оцінювання: app/app.js:1349, `gradeNow` за `st`/`items`.
  - підсвітка і «Правильно: …»: app/app.js:1366, тепер за `el.dataset.row`. Це було єдине місце, що брало позицію в DOM.
  - `lock`, `clearMarks`: селектори без індексів.
  - `answerSig`, `evRaw` (app/app.js:925, 1381) працюють з `st`, тобто за індексами items.
  - Повторна спроба не перемальовує екран, тому порядок рядків лишається той самий (перевірено в браузері).
  - Режими уроку, пулу й тесту рівня, а також poll/hyp ідуть через той самий `renderScreen`/`check`. Окремого рендера sort немає. Стан sort між показами не відновлюється (`st` скидається в `renderScreen`), тож нова перестановка під час кожного показу нічого не ламає.
  - learn.js, evidence.js, hyp.js бачать лише тип екрана й `raw`, DOM не читають.
  - playtest.py:36 і test-answer-ui.py:54 клікають за `data-r`/`data-b`, тому вони сумісні.
- `permute` (app/lang.js:19–22) — коректний Фішер — Єйтс. `Math.min(i, …)` захищає від rnd=1. У `gapOrder` витрата rnd і результат не змінилися. Це підтверджує test-lang: gapOrder дорівнює rowOrder без «∅», і давні перевірки gapOrder зелені.
- aria: `.seg` має `role="group"` і `aria-labelledby` на `<b id="srow{k}">`. id унікальні в межах екрана, а на `#stage` водночас лише один екран.
- Документація (CONTENT_SCHEMA, EVIDENCE) відповідає коду.

## Виконані перевірки (власний прогін)
- `node tools/test-lang.mjs`: 159 перевірок, усі пройшли.
- `npm run check` у worktree: exit 0. Прогін перегенерував sw.js, reports/style-*.md і validate.json; їх не закомічено.
- Усі `tools/test-*.mjs`, крім test-ui, на копії дерева: зелені. Виняток — test-diff-answers, якому потрібен `.git`, а в копії його немає. У самому worktree: 52 ok, 0 ✗.
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs --browser /opt/pw-browsers/chromium-1243/chrome-linux64/chrome`: 119 ok, 0 ✗.
- Власний сценарій на Node Playwright, написаний незалежно від автора (scratchpad `review-engine-sort-order/sort-review.cjs`):
  - 4 рядки, Math.random=0. Перевірено: порядок не тотожний; підпис групи дорівнює тексту рядка.
  - Хибна спроба: червоний лише items[1]. Порядок рядків після спроби той самий.
  - Друга хибна спроба: «Правильно: A» стоїть саме на рядку items[1].
  - Журнал `raw` = `[[0,1,1,2],[0,2,1,2]]`, тобто за індексами items.
  - Рівномірність на справжньому Math.random: `rowOrder(3)` ×6000 дав усі 6 перестановок, по 952–1026 кожна. Помилок сторінки немає.
- Мутанти (копії дерева в scratchpad):

  | Мутант | Чим убито |
  |---|---|
  | m1: showMarks за позицією DOM | мій сценарій (marks, fix); сценарій автора теж його ловить (assert marks) |
  | m2: без rowOrder (порядок items) | мій сценарій; сценарій автора (`first == [1,2,0]`) |
  | m3: без role/aria-labelledby | мій сценарій; сценарій автора (labels) |
  | m4: клік пише `st` за позицією `.seg` | мій сценарій (marks, raw); сценарій автора (raw) |
  | m5: Саттоло `floor(rnd()*i)` замість Фішера — Єйтса | test-lang (7 з 159 провалено) |

- `tools/test-answer-ui.py` перевірено лише синтаксично (`ast.parse` ok).

## Знахідки
- **P3-1** tools/test-answer-ui.py:1497 (`sort_order_checks`): локально сценарій не прогнаний, бо Python-модуля playwright у контейнері немає. Його еквівалент на Node (мій і авторів) зелений. Фактичний прогін буде в CI job `browser`, і після злиття варто переконатися, що він зелений.
- **P3-2** Той самий сценарій не перевіряє показ «Правильно: …» після другої хибної спроби. Мутант m1 і так ловиться перевіркою підсвітки, тож це лише бажане доповнення.
- **P3-3** Для sort з двома рядками авторський порядок випадає в 50 % показів. Це свідоме рішення, як у gapOrder, і воно описане в ризиках задачі. Можна згадати в docs/ARCHITECTURE.md, але це не обов'язково.

## Не перевірено
- Python-сценарії test-answer-ui.py і playtest.py у браузері (див. P3-1).
- Справжні екранні читачі: перевірено лише атрибути DOM, озвучення — ні.
- Firefox/WebKit.
