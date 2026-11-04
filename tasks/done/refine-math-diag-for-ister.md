---
claimed_from: todo
claimed_at: 2026-11-04T12:29:56.603Z
id: refine-math-diag-for-ister
type: refine-diag
subject: math
status: done
claimed_by: impl-refine-math-diag-for-ister
created: 2026-11-04
depends_on: [curate-math-matrix-v6, curate-math-matrix-v7]
---
# dg5–dg8: `for` pre-тем для опор нових required-уроків D-043 (рішення оркестратора 04.11)

Рішення (людина делегувала 04.11): **п. 1 — нових cur-проб не додаємо зараз** (known лише з явних cur-тем — коректно); **п. 2 — розширити `for` наявних pre-тем** (без нових завдань і без зміни items/rev), щоб тест рівня показував прогалини в опорах нових уроків. Переліки — tasks/todo/refine-math-diag-g5-g6-ister-required.md і refine-math-diag-g7-g8-ister-required.md (ті задачі закрити цією). Синхронізувати таблиці діагностик і `preForSection` рядків у docs/math-personalization-coverage.json/.md (матриця v8, draft); давню неузгодженість g6m3 `pct` у preForSection — виправити. Перевірка: personalization-qa `--diag dg5..dg8 --strict` — 0; npm run check — зелений (test-learn, test-hyp можуть мати знімки — оновити з поясненням). Скіли math-pool-diag + engine-change (тести); незалежне рев'ю D-026.

## Нотатки виконавця

**Виконавець:** impl-refine-math-diag-for-ister, 2026-11-04. Закриває refine-math-diag-g5-g6-ister-required і refine-math-diag-g7-g8-ister-required (обидві → done з посиланням сюди).

### Що змінено
- **Тести рівня — лише `for`** (items, індекси, ключі, `rev`, `lessons` — без змін; редакція тестів та сама, бо `for` впливає лише на порядок кроків повторення в `buildPlan`):
  - content/math/diag-g5.js: `place`, `cmp` — `for` ms0, **ms0b**, ms2 (ms0bl6 — координатний промінь, шкала).
  - content/math/diag-g6.js: `geom` — `for` **ms4**, g6m3, **g6m4**, g6m5 (ms4l5 — розгортка/площа поверхні, опора ms4l1; g6m4l7/l8 — перпендикулярні й паралельні прямі, прямий кут прямокутника). Чесно: справжня опора g6m4l7 — кути ms0bl2, яких у dg6 немає; `geom` — найближча наявна тема (варіант із задачі g5-g6).
  - content/math/diag-g8.js: `linear` — `for` **g8m1**, g8m5 (g8m1l6 — раціональні рівняння, опора g7m1l2).
  - dg7 — без змін (опори нових уроків уже в `for` свого розділу).
  - Порядок розділів у `for` — за content/math/plan.js. У шапці кожного файлу — абзац про зміну.
- **Матриця v8** (draft): docs/math-personalization-coverage.json — version/previous/changes; `for` і `forEvidence` чотирьох тем (новий forEvidence: ms0b→ms0bl6, ms4→ms4l5, g6m4→g6m4l7, g8m1→g8m1l6); `preForSection` 35 рядків 5–8 кл. за правилом «pre-теми тесту свого класу, чий `for` містить розділ, у порядку тесту» (скрипт; решта рядків — без змін): ms0b ×7 (+place, cmp; у ms3l3 і ms4l1 прибрано `box` — тема без `for` з v4), ms4 ×3 (→ geom), g6m4 ×8 (+geom), g8m1 ×6 (+linear), **g6m3 ×6 — прибрано `pct`** (з v4 cur), **g6m2 ×5 — додано `rem`, `g6-div`** (з v4 їхній `for` = g6m2; та сама давня неузгодженість). Рядки dg9 (pending g9m3l6–l7, g9m4l5–l6, g9m5l5, g9m6l6–l7 — `preForSection: []`, хоч `for` dg9 їх охоплює) не чіпав — поза задачею (рядок в inbox).
  - .md: шапка v8, розділ «Зміни v8» (таблиця було → стало, примітка ¹¹), стовпець `for` у таблицях dg5 (place, cmp), dg6 (geom), dg8 (linear). docs/PERSONALIZATION_QA.md — «Поточна версія — v8».
- **tools/test-hyp.mjs §10** (знімок живого змісту `--content-stats`): падав на 9 перевірках ще до цієї задачі — зміст інших задач після tests-hyp-snapshot-ister: pg9m4–pg9m6 доповнено (+55 вправ, 54af813, 1504bde), новий пул pg9m8 (draft, +86). Від цієї задачі — лише «теми тестів» 181 → 184 (+3: ms4l2, ms4l3, ms4l5 через geom.for). Доведено на копії дерева (scratchpad): без pg9m8, з діагностиками до/після — test-hyp відрізняється лише цим числом. Оновлено числа й підписи, старі — в датованому коментарі; **інваріанти не послаблено** (перевірки (а), (б), узгодженість notClean/sol0Keys, «D≤ рівня 1 — 0» — без змін і зелені). Нове на рівні 2: sol0 3 (pg6m4:f03 + pg9m8:h02, h03) і D> 3 — g9m8l8 має одну вправу рівня 1 (перша сесія `1122`, як g6m4l7). docs/design/diag-hypothesis-math.md — датований абзац із новими числами.
- test-learn — без змін і зелений (2395 перевірок): `for` у фікстурах, не в живому змісті.

### Не зроблено (за рішенням 04.11)
- cur-проби нових уроків (зокрема trig g8m4l6–l8) — нове завдання = новий id тесту.
- pre-тема про коло для g8m2l6/l7 (опора g7m8l5) і кути ms0bl2 у dg6 — теж лише новими завданнями.

### Перевірки (живе дерево)
- `node tools/validate.mjs --diag dg5|dg6|dg7|dg8 --quiet` — 0 помилок, 0 попереджень кожна.
- `node tools/personalization-qa.mjs --diag dg5|dg6|dg7|dg8 --strict` — exit 0, без ПОМИЛКА/БРАКУЄ/НЕ ПІДТРИМАНО.
- `npm run check` — exit 0 (validate 0 помилок; graph-report 0 помилок, 0 дрейфу; test-hyp 619/619; test-learn 2395 ✓). graph-report V9 «теми pre без шляху w 2 від forEvidence» — ті самі 4, що й до зміни (нові forEvidence не додали).
- Обмеження: знімок test-hyp §10 включає draft pg9m8 — зміна pg9m8 після верифікації знову зсуне числа (так задумано: знімок живого змісту).

### Для рев'ю (D-026)
Коміти: e97e922 (diag-g5/g6/g8, JSON — WIP-знімок оркестратора), ac06d83 (md, PERSONALIZATION_QA, test-hyp — WIP-знімок), + мій фінальний коміт (design-док, задачі). Рецензенту: перевірити, що зміна лише в `for` (diff items = 0), preForSection-правило скриптом, і пояснення знімка test-hyp.
