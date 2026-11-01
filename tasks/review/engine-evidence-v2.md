---
claimed_from: todo
claimed_at: 2026-11-01T17:01:36.310Z
id: engine-evidence-v2
type: engine
status: review
claimed_by: agent-engine-evidence-v2
created: 2026-11-01
depends_on: []
---
# Evidence V2: структурований журнал подій (пріоритет 1, рішення людини 2026-11-01)

Навіщо: без детальних даних пізніше не перевірити якість жодного діагностичного алгоритму (Skill Graph, Diagnostic Engine, ШІ-перевірка, Teacher Dashboard). Учнівський інтерфейс НЕ змінюється.

## Вимоги
- Структурований журнал подій у **IndexedDB** (історія); сумісність із наявним localStorage (`slid.v1`): поточний стан і поведінка `record()`, `detect()`, SRS, план — **без змін** (diff-answers і test-learn не мають показати змін вердиктів/плану).
- Події (мінімум): відкриття екрана/уроку, спроба відповіді (екран/вправа/проба id, тип, answerKind, сирий запис дитини, вердикт ok/form/bad, підказка показана/ні, номер спроби, час до відповіді), завершення уроку/сесії тренування/тесту рівня (rev), зміни SRS-коробки, план, перемикання класу. Кожна подія: версія схеми, час (локальний + монотонний лічильник), id пристрою/профілю (анонімний, локальний), версія змісту (sw VERSION) і коміт контенту, sk/lesson/pool.
- Офлайн-перше; черга для майбутньої синхронізації (поле `synced`), але без мережі зараз.
- Обмеження: розмір (ротація/ліміт), приватність — нічого, крім анонімного id, без імені; експорт журналу (для дослідження) — JSON у профілі або через консоль.
- Відмовостійкість: IndexedDB недоступна (приватний режим, старий браузер) → застосунок працює як раніше, події губляться без помилок.
- Документація: docs/EVIDENCE.md (схема подій, версіювання, як читати); PERSONALIZATION.md — посилання.
- Тести: вузлові (схема, серіалізація, ротація) і браузерні (події пишуться, перезавантаження, офлайн, приватний режим без IndexedDB), регресія (record/detect/SRS незмінні).

Незалежне рев'ю (D-026). Далі: engine-diag-hypothesis-math (експеримент).

## Нотатки виконавця

### 2026-11-01 agent-engine-evidence-v2 (виконавець)
**Зроблено.**
- `app/evidence.js` (новий, `window.SLID_EVIDENCE`): `log(type, data|fn)` (синхронний, без винятків; функція даних — у try/catch), черга в пам'яті → IndexedDB `slid-evidence` пакетами (40 / 1,2 с / pagehide / visibilitychange), `seq` — наскрізний лічильник у транзакції з `meta.seq`, анонімні `did` (пристрій) і `pid` (профіль, новий після «Скинути прогрес»), `sid` сесії, `cv` = VERSION активного sw.js (MessageChannel), `net`, `synced: 0` з індексом; ротація 15 000 → 13 500, подія ≤ 2 КБ (інакше `trunc`), рядки ≤ 300; збої: open → вимкнено, 3 збої запису поспіль → вимкнено; `observe(S)` після кожного `save()` → події `srs` / `plan` (ключ предмет|клас) / `grade` з `by`; `stats()`, `export()`, `download()`, `clear()` — лише консоль.
- `app/app.js` — лише тонкі виклики: заглушка `EV` (без модуля), `EV.observe(S)` + `boot` після завантаження, `EV.observe(S)` у `save()`, `lesson_start/_end`, `diag_start/_end`, `practice_start/_end`, `screen`, `answer` (у `check()` після `gradeNow`, у poll/hyp, у `diagAnswer` разом зі «Ще не знаю»), `close` (closePlayer), `reset` + `newProfile`; 4 рядкові помічники `evMode/evItem/evRaw/evVerdict` перед `check()`. learn.js не змінено.
- `tools/sw.template.js` — відповідь на `"slid:version"`; `tools/build.mjs` — `app/evidence.js` у маніфесті перед lab.js (лише якщо файл існує: старі ревізії для `diff-answers --content-old`).
- Тести: `tools/test-evidence.mjs` (46: sanitize, схема, черга/пакети/seq/did/pid/cv/dt/by, ротація, збої, без IndexedDB і з indexedDB, що кидає; observe не змінює стану) — у `npm run check` і CI; `evidence_checks` наприкінці `tools/test-answer-ui.py` (regression): той самий маршрут (тренування з помилкою й підказкою, dg6 з «Ще не знаю», перший крок плану — справжній урок, клас 6→7→6) з IndexedDB, без неї (SecurityError) і без модуля — `slid.v1` однаковий; схема, спроби, srs/plan/grade, ім'я не в журналі, перезавантаження (seq продовжується), офлайн зі service worker (cv = VERSION, net 0, переживає перезавантаження).
- Документація: docs/EVIDENCE.md (схема v1, типи, версіювання, як читати, коміт змісту з cv: `git log -S'VERSION = "<cv>"' -- sw.js`); посилання в PERSONALIZATION.md і ARCHITECTURE.md.

**Для оркестратора.** `index.html`, `sw.js`, `content/manifest.json` не закомічено: після злиття — `node tools/build.mjs` (додасть `<script src="app/evidence.js">` і файл у кеш sw.js) і коміт. Без цього застосунок працює як раніше, просто без журналу; CI впаде на «Згенеровані файли закомічені». Можливий конфлікт злиття: `package.json` (рядок check) і `.github/workflows/pages.yml` — гілка wt-p3e теж додає туди test-make-tasks; потрібні обидва.

**Відкриті питання (людині).** (1) Кнопка «Експорт журналу» в профілі — зміна UI, не додано; зараз лише консоль `SLID_EVIDENCE.download()`. (2) Ліміт 15 000 подій (≈ 5–9 МБ, ~700 уроків) — достатньо? (3) Поле `raw` — сирий запис дитини до 300 символів; якщо дитина впише в поле відповіді ім'я, воно потрапить у журнал (лише локально). (4) Чи потрібна подія «Пізніше» для тесту рівня (зараз видно лише зі стану `diagSkip`).

**Перевірки (worktree wt-evid, після `node tools/build.mjs`).** test-evidence 46/46, test-learn 2081, test-validate 571, test-math 60, test-lab 150, test-personalization-qa 105, test-make-tasks 22, test-metrics 20; validate — 0 помилок, 254 попередження; `diff-answers --old HEAD --grades 4-11` — 0 змін і 0 непояснених (learn.js не змінено); `test-answer-ui.py --suite regression` — rc 0, зокрема новий evidence_checks (повторно після останньої правки app.js — green). Скрипти наскрізного приймання qa-rerun (копія з WT на worktree): r2, r4 — green; r1 (очікування srs без коробок з тесту, до D-032) і r3 (`[data-plan="math"]`) падають **так само й на чистому HEAD a5e3353 без цієї зміни** (вихід ідентичний) — скрипти застаріли щодо HEAD, не регресія журналу.
