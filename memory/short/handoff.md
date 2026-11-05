# Handoff — стан проєкту

_Оновлено: 2026-11-05, куратор пам'яті (сесія 5: пакет 05.11-4 math Істер P3 закрито, D-050 виконано; журнал sessions/2026-11-05-5.md; гілка `claude/brave-feynman-iql21g`, PR kondolovskiy/slid#18). Попередні: 2026-11-05-4.md (D-049, pitfalls розбито), 2026-11-05-3.md._

**Пам'ятка (D-046, D-049):** змістове питання (термін, нотація, клас теми, норма, дата, формат, оцінювання відповіді) — вирішуй сам за МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті; якщо лишається сумнів — застосуй найкращий варіант із позначкою «тимчасово, до відповіді вчителя» і **допиши питання в `docs/teacher-questions.md`** наступним номером (зараз останній TQ-069; мова — для вчителя). Роботу це не блокує. Технічні питання — людині (список нижче).

**Пам'ятка оркестратору:** `npm run check` + build і коміт згенерованих файлів — після **кожного** змістового коміту, не лише після злиття (05.11 CI `build` червоний через e8c30a1; pitfalls.md, сесія 5).

## Стан
- **05.11, сесія 5 — усе done, рев'ю D-026 / верифікацію прийнято:** curate-math-plan-ister-gaps (теми D-043 у plan.js), style-math-ister-followup (`pre` у фіналах 7 кл. і g8; профіль math 7–9 [4, 10], 10–11 [4, 11]), curate-math-graph-ister-gaps + verify-graph-prob-tri (лінії `prob`, `tri`: вузли verified, лінії draft), fix-math-pools-ister-formats (14 вправ, матриця **v12**), engine-math-ister-p3, tools-math-ister-p3, server-log-hmac, tests-hyp-snapshot-style-math, qa-ci-browser-mutant (job `browser` червоніє на мутантах, deploy не стартує).
- **Українська мова:** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80) — verified. Жодного `approved`.
- **Математика:** Істер 5–9 (D-043, D-048); g11m2 у 10 кл.; граф: frac, prob, tri; матриця v12.
- **Історія / world:** D-047 застосовано; world w7s1–w9s5 verified.
- validate: 0 помилок, 82 попередження (10 — link-завдання без питання у world). Довга пам'ять: facts/math №1–254, facts/hist.md + hist-2.md (№1–353), facts/ukr №1–212, facts/world №1–78; decisions до D-050.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів. Інших задач у doing і review немає.

## Що далі (tasks/todo, 13)
1. **tests-hyp-g3-verified-lines** — test-hyp:746 не прив'язувати до складу verified-ліній; лінії `prob`, `tri` → verified.
2. **curate-math-matrix-v13** — g9m4l5 ← g8m6l2; g9m7l1 → m1 хибне; g7m4l9 → g7m4l6; v11 і hyp.js; IDEA eng-tools (sources.opened, poolState, формати).
3. **engine-list-quadratic** + **engine-list-ordered** (той самий код `list`: квадратичний шлях, «у … ; у …», `ordered: true` для pg8m2 e07 / pg8m4 a02–a03, масштаб «1 : 10000» у pg9m6 f08; P3 `cnt`, lang.js, answerSig).
4. **style-math-finals-pre** (механічно; потім знімок test-hyp §0 з рев'ю), **fix-math-figs-1105** (pg7m8 b01/b02/b05, pg8m2 b05, вступи без рисунка g7m8l3, g8m4l4, g8m6l3, g10m6l3), **fix-world-link-questions** (10 world + hist g11s1boss е3 «На схемі»).
5. **tools-playtest-verdict-msg** — «не зараховано» замість TimeoutError у playtest.py і test-answer-ui.py:87.
6. **engine-diag-retest-from-pool**, **engine-sync-login**, **engine-ai-a1**, **design-teacher-dashboard**, **design-privacy-gdpr** (D-050 п. 6).
7. **Скіли `.claude/` посилаються на старі розділи «pitfalls.md»** (math-pool-diag, hist-images, content-author, content-verify, engine-change) — розділи тепер у pitfalls-{content,math,hist,engine}.md; оновити посилання на файли, memory-curate п. 2 — «тематичний pitfalls-*.md». Зміна `.claude/` — рев'ю D-026.
8. **Пропозиції (задач не створено):**
   - server P3 (reports/review/server-log-hmac.md): тест на NODE_ENV=production у `npm start`; log.spec.ts відновлювати лише LOG_HASH_KEY/NODE_ENV; e2e закривати модуль. server-hardening-2 P3-2…P3-7 (404 admin, мутанти stripComments, /health у знаменнику, обірвані запити, регістр схем).
   - fix-math-pools-ister-formats P3-5: звуження категорії keyVariant у diff-answers не закріплене тестом.
   - engine P3: мутант `vecBraces` з великими літерами вижив (reports/review/engine-coordinates-vector-name.md).
   - validate — кожна `sk` уроку має вправу поза першими 4 пулу; lang P3-5, P3-6 (reports/review/tools-lang-p4.md).
   - IDEA GRAPH: requires g6m6 → g6m2l3 лишено V9 «без пояснення» свідомо (лише boss g6m6l5 #5).
   - ukr u5s6l3 е1 — «не так» у `<i>`; world: link-завдання з абзацом-питанням — у шаблон автора; план world 8 кл. — після тестування (D-048 п. 10).
   - гілку `claude/qa-ci-browser-mutant` (тестова) можна видалити.

## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** 69 питань TQ-001…TQ-069 (нові 05.11: TQ-067 «у 2 рази» в тесті рівня, TQ-068 відношення дробом, TQ-069 ∅ у pg8m1 e09). Людина перешле вчителям; роботу не блокують.

**Технічні — людині:**
1. **`personalization-qa --strict` у check/CI?** Падає на draft-пулах і новому уроці без рядка матриці. Оркестратор радить: у check — ні; можливо — лише в CI для PR у main.
2. **GitHub Settings → Branches:** `build` і `browser` — обов'язкові (D-050 п. 2: так; вмикає людина вручну). Після першого пуша в main — перевірити deploy зі звуженими правами (`pages: read`, залишок qa-ci-browser-mutant п. 3).
3. **Бекенд — відкладено (D-050 п. 4):** `TRUST_PROXY` / `X-Forwarded-For`, ліміти для класу за NAT, claim, Redis/Postgres для лімітів, `nonce`, `server/content/`, `ADMIN_TOKEN` і канал сповіщень. **При першому деплої — задати `LOG_HASH_KEY` (≥ 32 байти) у Railway**, інакше сервер не стартує.
4. **ПД / GDPR / `concern`** — design-privacy-gdpr (пізніше); Skill Graph §7.3 п. 10 — перед G4.
5. **Зображення й ліцензії:** дублікати фото між теками img/hist; Open Kurbas (CC BY-NC-ND) vs PD-Ukraine (лише для комерційного використання); шаблон Панкгерст на Commons (необов'язково).

## Обмеження середовища
- **Python-модуля playwright локально немає** — браузерні тести ганяє CI (job `browser`; full — Run workflow); Node-двійник /opt/node-tools; браузер `/opt/pw-browsers/chromium`; браузерні тести по одному. Незарахований choice у playtest схожий на флейк (TimeoutError) — pitfalls-engine, сесія 5.
- У промптах виконавцям явно: ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- Матрицю персоналізації (docs/math-personalization-coverage.*) змінює одна задача за раз.
- Ліміт API зупиняв агентів — відновлення через SendMessage тому самому агентові.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — під паралельною роботою звіти комітить лише оркестратор.
- Недоступні: mon.gov.ua, zakon.rada, pravopys.net, tsdial (403), chtyvo (закрито); Commons — ≤ 2 фото-агенти (429). З5 друк. = PDF − 3, З6 — PAGE + 1, З7 = PDF; Істер (4book) — друк. = PDF для ist8a/ist9a/ist8g/ist9g (facts/math №226, №253).

## Як продовжити
«Прочитай AGENTS.md і handoff; tests-hyp-g3-verified-lines, curate-math-matrix-v13, engine-list-quadratic + engine-list-ordered; посилання скілів на pitfalls-*.md. Змістові питання — за D-046 самостійно, сумнівне — у docs/teacher-questions.md.»
