---
claimed_from: todo
claimed_at: 2026-11-01T23:28:17.138Z
id: tools-diff-answers-p3
type: engine
subject: tools
status: review
claimed_by: engineer-tools-p3
created: 2026-11-01
depends_on: [engine-half-p3]
---
# test-diff-answers: межі (P3, reports/review/engine-half-p3.md)
1. `tools/test-diff-answers.mjs:24–33`: на чистому дереві `--old HEAD` порівнює однакові learn.js — мутанти D3 (ховає різниці в режимі diagVerdict → diagVerdict), D4, D6 (код виходу ігнорує halfBad) виживають. Додати фікстуру «старого» learn.js з відомою різницею.
2. `:36–44`: частина b799dfa вимагає rc 0 від усього diff-answers — записати в шапці тесту й у docs, що навмисна зміна вердиктів потребує нової категорії в diff-answers.
3. pages.yml: test-diff-answers не входить у CI (і немає `fetch-depth: 0`) — вирішити: додати з повною історією або явно лишити лише в `npm run check`.
Незалежне рев'ю D-026.

## Нотатки виконавця
_engineer-tools-p3, 2026-11-01, гілка wt-tp3 (основа d83c2a9)._

**test-diff-answers (рев'ю engine-half-p3):**
1. P3-1 — нова частина 1б: тимчасовий git-репозиторій (спільний помічник `tmpRepo`, ним же тепер і частина 3), у коміті — learn.js з відомою різницею diagVerdict, у робочому дереві — поточний; `--old HEAD`. Дві фікстури: `form` (вимаганий вигляд → OK замість HALF) і `root` (неперерахований корінь → BAD). Очікування: заголовок вердикт↔вердикт, 0 у категоріях half, непояснені > 0 з формою «тест OK → HALF» / «BAD → HALF», основний блок 0, rc 1. Факт: 105 і 1623 непояснених (збігаються з поясненими від b799dfa). Мутанти рецензента (scratchpad/tp3-mut-diff/run.sh, summary.txt): D3 вбито (6 ✗), D4 вбито (6 ✗), D6 вбито (2 ✗). `run()` тепер `--show 1000000` (щоб знайти форму різниці).
2. P3-2 — правило записано в шапці тесту й docs/PERSONALIZATION_QA.md («Самоперевірка test-diff-answers»): rc 0 від усього `diff-answers --old b799dfa` ⇒ навмисна зміна вердиктів checkAns/diagVerdict потребує нової категорії в diff-answers, інакше check червоний.
3. P3-3 — **рішення: лише `npm run check`, не CI.** Аргументи: b799dfa є лише в робочих гілках (`git branch --contains`), після squash-злиття в main його не буде в історії CI навіть з `fetch-depth: 0` — вічно червоний CI без дефекту; повна історія сповільнює кожен checkout; тест сторожить інструмент розробника, а вердикти рушія в CI вже перевіряють test-learn і validate. Шлях у CI, якщо треба: замінити b799dfa фікстурою (як 1б). Записано: шапка тесту, docs/PERSONALIZATION_QA.md, docs/PUBLISHING.md, коментар у pages.yml (кроки не змінено).

**Тінь гіпотез (рев'ю engine-hyp-e2-p3), docs/design/diag-hypothesis-math.md §9 п. 34:**
- P3-1 `dskip` і вкладки — **задокументовано** (§9 п. 32 (г)), злиття за max не взято: `onDiagEnd` видаляє лічильник, max зі збереженою копією іншої вкладки повертав би його після diag_end (подвійний підрахунок).
- P3-2 — `boot.hyp: { store, open }` (slid.hyp читається до boot, HYPS завантажує той самий запис) + подія застосунку `hyp_lost { why: quota|write }` у `forget()`. Реплей: persist 0 від boot.store 0 або від hyp_lost (остання не-hyp подія перед ним, або наступна, якщо застосунок уже написав hyp_open); `boot.hyp.open === null` → pend відкрити, стан порожній; `open: n` ≠ реплею → `notes.bootDiff`. persist із hyp_open застосунку реплей більше не копіює.
- P3-3 — `shutdown(why)`: подія `hyp_off { why: error|budget }` і `slid.hyp` видаляється (call, write, diagEnd); реплей рахує `notes.hypOff`.
- P3-4 — регресія: після «Ще не знаю» `dskip.dg6 ≥ 1`, на підсумку тесту (до ✕) `dg6` немає (N1).
- P3-5 — CLI: «N подій hyp_* і M підсумків diag_end».
- **rv лишається hyp-1:** події трекера (hyp_open/probe/close/fmt, diag_end.hyp) на той самий вхід не змінилися (регресія «застосунок = реплей» зелена на тому самому маршруті, 24/28 подій). hyp_lost/hyp_off/boot.hyp — події застосунку, від правил не залежать; §3.4 уточнено: правило rv — про події трекера. test-answer-ui порівнює лише події трекера (`TRACKER`).
- Новий браузерний маршрут: виняток трекера на number-спробі → один hyp_off error, ключа немає, після нього подій трекера немає, наступний boot.hyp.open null; slid.v1 і тексти доку = варіант без hyp.js. Переповнене сховище: один hyp_lost quota між answer і hyp_open. Головний маршрут: boot.hyp store 1, open null до першого запису, далі число; hyp_lost/hyp_off немає.
- test-hyp розділ 13 переписано (583 перевірки): hyp_lost, без hyp_lost — persist 1 (копіювання немає), bootDiff 0/1, без boot.hyp — стан переживає boot, store 0 — persist 0, hyp_off, hyp_lost після hyp_open — з наступної події.
- Журнали без boot.hyp/hyp_lost (лише робочі гілки) реплей рахує без втрати стану — задокументовано.
- Межа: виняток під час створення HYPS (заглушка off) після того, як boot уже записав `hyp.open: n` — boot каже «завантажено», хоч тінь не працює; трапляється лише зі зламаним hyp.js.

**Мутанти тіні** (scratchpad/tp3-mut-hyp/run.sh, summary.txt; ui — лише hyp_checks, node — test-hyp + test-evidence): N1 (`answer()` не скидає held) вбито (`dskip {'dg6': 16}` після diag_end); O1 (hyp_off без видалення ключа) вбито; O2 (без події hyp_off) вбито; L1 (forget без setPersist(0)) вбито («застосунок = реплей»: persist 1 ≠ 0 — раніше реплей копіював і мутант вижив би); L2 (без hyp_lost) вбито; B1 (boot.hyp.open 0 замість null) вбито; B2 (реплей не скидає стан на open null), B3 (без «+0,5» після hyp_open), B4 (ігнор store 0) — вбито test-hyp. 9/9.

**Перевірки (мої прогони, wt-tp3):** `node tools/build.mjs` (змінює лише sw.js — не комічу); `npm run check` rc 0 (test-hyp 583, test-evidence 147, test-validate 1007, test-diff-answers 25 ok / 0 ✗, validate 0 помилок / 254 попередження); `python3 tools/test-answer-ui.py --browser /opt/pw-browsers/chromium --suite regression` rc 0, green (4 хв 24 с); `diff-answers --old d83c2a9 --grades 4-11` 0/0 непояснених, rc 0; `--content-old d83c2a9` 0 змін, rc 0. Перед злиттям — build і sw.js у коміті злиття (app.js змінено).

## Також: P3 з рев'ю engine-hyp-e2-p3 (reports/review/engine-hyp-e2-p3.md) — дрібне для тіні гіпотез
- `dskip` і кілька вкладок: у сховище потрапляє лічильник вкладки, що писала останньою — злиття за max або задокументувати.
- Реплей бере `persist: 0` з подій застосунку (частково тавтологія) — писати прапорець завантаження `slid.hyp` у `boot`.
- Тінь вимкнено бюджетом → застарілий `slid.hyp` (pend) лишається — видаляти ключ або подія `hyp_off`.
- Мутант N1 (`answer()` не скидає `held`) — тест, що лічильник записано наприкінці тесту рівня.
- tools/hyp-replay.mjs:332 — «N подій hyp_*» тепер включає diag_end.

### Виправлення за рев'ю (reports/review/tools-diff-answers-p3.md, 1fca259)
- **P2-1:** частина 2 тепер на фікстурі `tools/fixtures/learn-b799dfa.js` (дослівно `git show b799dfa:app/learn.js`, 184 758 Б), закоміченій у тимчасовому репозиторії як «старий» (як 1б); перевірка `has b799dfa` прибрана, плюс перевірка основного блоку (mainBad 0). Від історії проєкту тест не залежить → повернуто в CI (`pages.yml`, крок після test-make-tasks; коментар оновлено), шапка тесту, docs/PERSONALIZATION_QA.md, docs/PUBLISHING.md оновлено.
- Клон `git clone --depth 1 --branch wt-tp3` (scratchpad/tp3-mut-shallow/c1, shallow, b799dfa недосяжний): test-diff-answers 26 ok, 0 ✗. Мутанти на цьому клоні (scratchpad/tp3-mut-shallow/run.sh, summary.txt): D1 (9 ✗), D2 (7 ✗), D3 (6 ✗), D4 (3 ✗), D5 (11 ✗), D6 (2 ✗) — усі вбито.
- **P3-2, P3-3** — не робив, занотовано в tasks/todo/engine-hyp-e4-shadow-routes.md. **P3-1** (sw.js) — у коміті злиття.
