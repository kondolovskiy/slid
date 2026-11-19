---
claimed_from: todo
claimed_at: 2026-11-19T13:48:42.752Z
id: engine-eng-match
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: review
claimed_by: eng-match
created: 2026-11-19
source: design-eng
---
# Новий тип екрана `match`: слово ↔ картинка / значення / відповідь

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (особливо §2, §5, §10, §11); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.
- Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Що зробити (docs/design/english.md §5.7)
`{ type: "match", left: [...], right: [{ img, alt } | "text"] }`, 3–6 пар, права колонка перемішана; торкнутися лівого → правого; правильна пара блокується; помилка — спроба (узгодити з двома спробами й балами D-004).
- Рушій, validate (зображення існують, `alt` англійською, `credits`), GRADED/TYPES, DIAG/POOL, playtest.py, журнал. Зображення — `img/eng/<розділ>/` (docs/IMAGES.md); emoji системного шрифту — ні.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.

## Нотатки виконавця (eng-match, 2026-11-19)
**Коміт:** 24fd60a (build — не комічено: sw.js / index.html / content/manifest.json робить оркестратор).

**Правило спроб і балів (D-004; CONTENT_SCHEMA §4.1, рядок `match`):** пари складаються вільно; «Перевірити» активна, коли складено всі. «Перевірити» з хоч однією хибною парою — спроба (одна з двох): правильні пари закріплюються (зелені, неактивні, «правильно, закріплено»), хибні — червоні («неправильно»), їх переставляють; друга хибна — показ усіх пар (`alt` замість картинки). Бали як скрізь: 10 / 5 / 0, SRS — лише з першої. Окремий дотик пару не перевіряє: інакше перебір, а в тесті рівня (без фідбеку) тип не працював би. «Правильна пара блокується» з дизайну §5.7 — це закріплення після спроби.

**Що змінено:**
- app/lang.js: `matchOrder` (права колонка — перестановка, ніколи не тотожна; запас — зсув по колу), `matchLabel`, `check` (st[i] === i), `solution`, `issues` (3–6 пар, left/right однакової довжини, правий — рядок або `{ img, alt }` без інших полів, `img` — відносний шлях .svg/.png/.jpg/.webp без схеми й «..», `alt` обов'язковий, без HTML/$, emoji системного шрифту, суміші кирилиці й латиниці, повторів), `readText`, TYPES.
- app/app.js: `langHtml`/`bindLang` (`matchDraw`, `tap`)/`langMarks`: колонки `#mleft .ml` / `#mright .mr`, номер пари (`.mtag`), дотик лівий → правий і навпаки, повторна пара — роз'єднати, правий переходить до нового лівого; клавіатура (кнопки), `aria-pressed`, `aria-label` з парою, `#mlive` (role=status, хром uk); ≥ 44 px, 360 px; `gradeNow`, повідомлення помилки. Стилі — `.gopt` + inline (index.html не змінено).
- app/learn.js: `DIAG_TYPES`, `POOL_LANG`, `G_GRADED` (інваріанти test-learn / test-lang: кожен тип SLID_LANG.TYPES дозволено в тесті й пулі); tools/lib.mjs `GRADED`, `langText`.
- tools/validate.mjs: `matchImgIssues` — файл існує й лежить у `img/<предмет>/` (лише img/ в офлайн-кеші), є картинки → непорожні `credits` (урок — розділу; тест рівня й пул — `c.credits`, куди registry збирає й credits розділів). `checkScreen` отримав параметр `credits`.
- tools/playtest.py: answer (пропускає закріплені), lang_seen (ліва — у порядку, права — перестановка не тотожна, картинка завантажена з alt, номерів у правій немає), lang_wrong (переставлені перші дві пари).
- Документація: CONTENT_SCHEMA §4.1 (рядок, приклад, обмеження), §9, §10; EVIDENCE (`raw` — масив за лівими); ARCHITECTURE; скіли content-author і content-verify (друга доречна пара, картинки й credits).
- Фікстури: tools/fixtures/match-sun.svg, match-tree.svg (власні, 1 рядок SVG).

**Тести й прогони:**
- `node tools/test-lang.mjs` — 460 ✓ (новий блок match: перевірка, issues, emoji, повтори, matchOrder з rnd, що лишає порядок, і 30 випадкових показів).
- `node tools/test-learn.mjs` — 2956 ✓ (match у пулі, POOL/DIAG/G_GRADED).
- `node tools/test-validate.mjs` — 1960 ✓ (fxen: картинки з credits — чисто; без credits, немає файлу, поза img/<предмет>/, без alt, emoji, 2 пари, poll — помилки; кирилиця в alt — попередження; тест рівня з credits розділу — чисто, без жодних — помилка).
- `npm run check` — зелений (validate: 0 помилок).
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` — 433 ok, 0 ✗ (№29). У першому прогоні того самого дерева впали дві перевірки «≥ 44 × 44 px» — і build №28, і match №29 одночасно, далі не відтворилось (у ручному вимірі 44 px рівно); схоже на навантаження паралельних агентів. Перевірку match тепер друкує розміри при падінні.
- `python3 -m py_compile tools/playtest.py` — ✓. Python playwright немає: гілку match у playtest.py перевірено тим самим сценарієм на Node Playwright (селектори, хибна спроба, пропуск закріплених, зарахування з другої спроби); справжній прогін — CI.

**Обмеження:** межі тесту рівня й пулу для match (кількість пар у тесті тощо) — engine-eng-diag-pool. `alt` англійською — лише попередження кирилиці (CC.cyrillicInEnglish), як для решти змісту. Розмір картинок validate не перевіряє (як і для `img`). AGENTS.md §2 (перелік типів lang.js) не змінено — спільний файл, рядок для куратора в inbox.
