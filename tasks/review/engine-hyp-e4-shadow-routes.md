---
claimed_from: todo
claimed_at: 2026-11-02T09:28:29.958Z
id: engine-hyp-e4-shadow-routes
type: engine
subject: math
status: review
claimed_by: engineer-e4r
created: 2026-11-02
depends_on: [tools-diff-answers-p3]
---
# Тінь гіпотез: маршрути без localStorage і з перевищенням бюджету (до E4)

З рев'ю reports/review/tools-diff-answers-p3.md (P3-2, P3-3). Не блокує; зробити до пілоту E4 (docs/design/diag-hypothesis-math.md §6.1, §9 п. 33–34). Незалежне рев'ю D-026.

1. **Маршрут без localStorage** у `hyp_checks` (tools/test-answer-ui.py): `Storage.prototype.getItem`/`setItem` кидають виняток з самого старту. Очікування: `boot.hyp` = `{ store: 0, open: null }`, усі `hyp_open` з `persist: 0`, pend відкривається лише на `pagehide` з `persisted: false` (§9 п. 27), `slid.v1`-незалежні тексти доку однакові з варіантом без hyp.js; «застосунок = реплей». Мутант рецензента H1 (`boot.hyp.store` завжди 1) має загинути.
2. **Перевищення бюджету 400 мс**: ін'єкція повільного `onScreen` (чи `onAnswer`) трекера. Очікування: рівно один `hyp_off { why: "budget" }`, ключ `slid.hyp` видалено, після нього подій трекера немає, наступний `boot.hyp.open: null`. Мутант H2 (бюджет без `hyp_off`) має загинути. Окремо — бюджет у `write()`.
3. **Місце `hyp_lost` без евристики** (P3-3): реплей визначає подію, з якої `persist: 0`, за «останньою не-hyp подією перед hyp_lost (+0,5, якщо вже був hyp_open)» — залежить від порядку викликів у app.js (`save()` між `EV.log(answer)` і трекером). Простіше передавати в `hyp_lost` номер `n` події, яку застосунок саме обробляв, і брати його в реплеї; тести B3/H4 зберегти.

## Нотатки виконавця
- P3-4 з рев'ю tools-diff-answers-p3 (раунд 2): мутант M2 (категорія «вимаганий вигляд» без умови `need`) виживає — test-diff-answers не помічає розширення категорії. Точні 105/1623 залежать і від змісту, тож краще мінімальна фікстура змісту з відомою кількістю, ніж числа на всьому змісті.
- З рев'ю engine-skg-g3-p3 (P3-а, P3-б): тест, що для `screen` час події теж береться до `data()` (мутант ev-scr-after); тест `graph-report --since` на ревізії без `graphBind` (мутант since-old-learn); у EVIDENCE.md біля `t`/`ms` — «момент виклику log».

## Нотатки виконання (engineer-e4r, 2026-11-02)

**Що зроблено** (docs/design/diag-hypothesis-math.md §9 п. 36):
1. **Без localStorage** — новий маршрут у `hyp_checks` (tools/test-answer-ui.py): `Storage.prototype.getItem/setItem` кидають з першого скрипту, клас обирається кнопкою онбордингу. Перевіряє: `boot.hyp == { store: 0, open: null }`; усі `hyp_open` з `persist: 0`; без `hyp_lost`/`hyp_off`; синтетичні `visibilitychange` (hidden) і `pagehide { persisted: true }` pend не відкривають, друга спроба після них — звичайне відкриття (S10); `pagehide { persisted: false }` відкриває pend саме цієї вправи; «застосунок = реплей» (5 подій); стан після кожного `save()` (перехоплено з `SLID_EVIDENCE.observe`, бо `slid.v1` не пишеться, а `S` у замиканні app.js) і тексти доку — як без hyp.js.
2. **Бюджет 400 мс** — маршрут вимкненої тіні тепер у трьох варіантах: виняток (як був), повільний `onScreen` трекера (450 мс на екрані 8) і повільний запис `slid.hyp` у `write()` (перший запис зі відкритою гіпотезою). Для кожного: рівно один `hyp_off` з `why` error / budget, без `hyp_lost`, ключа немає, після вимкнення подій трекера немає, наступний `boot.hyp.open: null`, `slid.v1` і тексти доку = варіант без hyp.js.
3. **`hyp_lost.n`** — app.js пише номер події цього завантаження, з якої `persist: 0`: `n` щойно записаної `answer`, якщо трекер її ще не обробив (`capture` → `save()` → `answer()`), інакше `null` (з самої `hyp_lost`). Номер — з нового getter `SLID_EVIDENCE.n` (app/evidence.js, 1 рядок: n останньої записаної події сторінки; null без журналу). Реплей (`tools/hyp-replay.mjs`) бере `persist: 0` для подій того `sid` з `e.n ≥ d.n`; евристику «остання не-hyp подія +0,5» прибрано. Вона помилилася б, якби між `answer` і `hyp_lost` стали `srs`/`plan` з `observe()` того самого `save()` (у браузерній регресії зараз їх там немає; test-hyp має такий журнал); тести B3/H4 збережено, додано: srs між answer і hyp_lost, `n: null`, межа `sid`. **`rv` лишається `hyp-1`**: app/hyp.js не змінено, події трекера на той самий вхід ті самі, `hyp_lost` — подія застосунку (§3.4).
4. **Нотатки виконавця:** M2 — test-diff-answers, частина 4: мінімальна фікстура змісту (5 вправ уроку qa6l1) зі старим learn.js b799dfa — точно 167 записів, half 7 / 5, 0 непояснених; «новий» learn.js з правилом HALF для `form: "qa"` (поза need) — 3 НЕПОЯСНЕНІ, «вимаганий вигляд» лишається 7, rc 1. ev-scr-after — test-evidence §5а (важка `data()` у `screen`); §5б — getter `n`. since-old-learn — test-graph-report: коміт з learn.js без `graphBind`, `--since HEAD` → rc 0, 0/0. EVIDENCE.md: `t`/`ms` — «момент виклику log»; `hyp_lost.n`.

**Відхилення від рамки «лише app.js / hyp.js / tools / docs»:** один getter у app/evidence.js (`get n()`) — без нього app.js не знає номера події. Поведінки журналу не змінює; тест — test-evidence §5б.

**Перевірки (мій прогін у wt-e4r):** `node tools/build.mjs`; `npm run check` rc 0 (test-evidence 155, test-hyp 599, test-graph-report 67, test-diff-answers 30 ok); `diff-answers --old 3eadf70 --grades 4-11` — 0 непояснених; regression-сюїта — див. нижче.

**Мутанти** (scratchpad/e4r-mut.sh, підсумки e4r-mut-summary-node.txt і e4r-mut-summary.txt; теки e4r-mut-* видаляються після прогону) — усі 10 вбито:
| Мутант | Що змінено | Чим вбито |
|---|---|---|
| H1 | `boot.hyp.store` завжди 1 | hyp_checks, маршрут без localStorage (`boot.hyp`) |
| H2 | бюджет виклику трекера: `on = false` без `hyp_off` | hyp_checks budget (ключ лишився / немає hyp_off) |
| H2w | те саме в `write()` | hyp_checks wbudget |
| M2 | «вимаганий вигляд» без `need` | test-diff-answers ч. 4 (10 замість 7, 0 непояснених) |
| ev-scr-after | `scrT` для screen — `env.mono()` після `data()` | test-evidence §5а (1187 замість 1234) |
| since-old-learn | `--since` прив'язує `old.learn` | test-graph-report (rc 2) |
| R-n (власний) | реплей ігнорує `hyp_lost.n` | test-hyp розд. 13 і hyp_checks (застосунок ≠ реплей, переповнене сховище) |
| A-due (власний) | app.js не ставить `due` (`n: null`) | hyp_checks (`hyp_lost.d`) |
| A-hidden (власний) | без сховища pend відкривається й на схованій вкладці | hyp_checks без localStorage |
| A-bf (власний) | pagehide з bfcache теж відкриває pend | hyp_checks без localStorage |

**На злитому дереві** (основа claude/intelligent-brahmagupta-zyjilv 4a7b5c2 злита в d0d65c9; конфлікт лише в inbox — обидві сторони; test-hyp — 895 з основи): `node tools/build.mjs`, `npm run check` rc 0 (test-hyp 599, test-evidence 155, test-graph-report 67, test-diff-answers 30 ok); `diff-answers --old 4a7b5c2 --grades 4-11` — 0 / 0 непояснених, rc 0; `python3 tools/test-answer-ui.py --browser /opt/pw-browsers/chromium --suite regression` — rc 0, «Обрані браузерні сценарії: green» (тінь: 24 події hyp_*, входи трекера 28, без localStorage — 5). Мутанти проганялися до злиття (основа змінила лише зміст pg4m5 і число в test-hyp). index.html / sw.js / content/manifest.json / reports не комічено — після build змінюється лише VERSION у sw.js (для коміту злиття).
