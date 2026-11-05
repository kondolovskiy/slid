# Handoff — стан проєкту

_Оновлено: 2026-11-05, куратор пам'яті (сесія 6: пакет 05.11-5 — матриця v13, list лінійний/ordered/scale, pre у фіналах, рисунки, world link, G3; журнал sessions/2026-11-05-6.md; гілка `claude/brave-feynman-iql21g`, PR kondolovskiy/slid#18). Попередні: 2026-11-05-5.md, 2026-11-05-4.md._

**Пам'ятка (D-046, D-049):** змістове питання (термін, нотація, клас теми, норма, дата, формат, оцінювання відповіді) — вирішуй сам за МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті; якщо лишається сумнів — застосуй найкращий варіант із позначкою «тимчасово, до відповіді вчителя» і **допиши питання в `docs/teacher-questions.md`** наступним номером (зараз останній TQ-071; мова — для вчителя). Роботу це не блокує. Технічні питання — людині (список нижче).

**Пам'ятка оркестратору:** `npm run check` + build і коміт згенерованих файлів — після **кожного** змістового коміту (pitfalls.md, сесія 5). Нове поле відповіді — два кроки: рушій (рев'ю D-026) → задача пулів (pitfalls-engine, сесія 6).

## Стан
- **05.11, сесія 6 — усе done, рев'ю D-026 / верифікацію прийнято:** curate-math-matrix-v13 (матриця **v13**), engine-list-quadratic + engine-list-ordered (list лінійний, `ordered`, `scale`, «у/в» у list, lessonCounts, BLOCK_TAG), style-math-finals-pre (`pre` у 32 фіналах; g10m2 З4 → l1), fix-math-figs-1105, fix-world-link-questions (10 уроків world verified), tests-hyp-g3-verified-lines (лінії `prob`, `tri` — verified), tools-playtest-verdict-msg (tools/verdict.py), skills-pitfalls-refs.
- **Українська мова:** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80) — verified. Жодного `approved`.
- **Математика:** Істер 5–9 (D-043, D-048); g11m2 у 10 кл.; граф: frac, prob, tri — verified; матриця v13; `pre` у всіх фіналах.
- **Історія / world:** D-047 застосовано; world w7s1–w9s5 verified.
- validate: 0 помилок, 72 попередження. Довга пам'ять: facts/math №1–254, facts/hist.md + hist-2.md (№1–353), facts/ukr №1–212, facts/world №1–78; decisions до D-050.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів. У review нічого.

## Що далі (tasks/todo, 8)
1. **fix-math-pools-ordered-scale** — `ordered: true` у pg8m2 e07, pg8m4 a02/a03; `scale: true` у pg9m6 f08 (id ті самі; content-verify; знімок test-hyp — якщо зсунеться, рев'ю D-026). Після — закрити 2 рядки pitfalls-engine «сесія 5».
2. **engine-list-p3** — LIST_PM `\s*` після «=», тест 1 : 100000, ± + ordered — помилка validatePool, «:» на телефоні при inputmode decimal.
3. **design-g4-graph-boundary** — порожні pres у тіні G3 для уроків prob/tri; рішення до G4.
4. **engine-diag-retest-from-pool**, **engine-sync-login**, **engine-ai-a1**, **design-teacher-dashboard**, **design-privacy-gdpr** (D-050 п. 6).
5. **Пропозиції (задач не створено):**
   - IDEA GRAPH (verifier-matrix-v13): g9m7l2 / pg9m7 b06 — відносна частота десятковим дробом (0,005) без ребра до десяткових (ms2) — куратору графа (skill-graph).
   - STYLE: g10m6l3 вступ — графік біля x = 0 перекриває підписи осі y; view `[-0.3, 4.5, 0, 6]` (косметика).
   - server P3 (reports/review/server-log-hmac.md): NODE_ENV=production у `npm start` тестом; log.spec.ts; e2e закривати модуль; server-hardening-2 P3-2…P3-7.
   - fix-math-pools-ister-formats P3-5: категорія keyVariant у diff-answers не закріплена тестом; engine P3: мутант `vecBraces` з великими літерами вижив.
   - validate — кожна `sk` уроку має вправу поза першими 4 пулу; lang P3-5, P3-6 (reports/review/tools-lang-p4.md).
   - IDEA GRAPH: requires g6m6 → g6m2l3 лишено V9 «без пояснення» свідомо.
   - ukr u5s6l3 е1 — «не так» у `<i>`; world: link-завдання з абзацом-питанням — у шаблон автора (content-author); план world 8 кл. — після тестування (D-048 п. 10).
   - гілку `claude/qa-ci-browser-mutant` (тестова) можна видалити.

## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** 71 питання TQ-001…TQ-071 (сесія 6: TQ-067 доповнено «у 2 рази; у 3 рази» в list; TQ-070 переставлені значення в `ordered` — «неправильно» з підказкою; TQ-071 «1 : 10000» зараховується як 10000). Людина перешле вчителям; роботу не блокують.

**Технічні — людині:**
1. **GitHub Settings → Branches:** `build` і `browser` — обов'язкові (D-050 п. 2: так; вмикає людина вручну). Після першого пуша в main — перевірити deploy зі звуженими правами (`pages: read`).
2. **`personalization-qa --strict` у check/CI?** Падає на draft-пулах і новому уроці без рядка матриці. Оркестратор радить: у check — ні; можливо — лише в CI для PR у main.
3. **Бекенд — відкладено (D-050 п. 4):** `TRUST_PROXY` / `X-Forwarded-For`, ліміти для класу за NAT, claim, Redis/Postgres для лімітів, `nonce`, `server/content/`, `ADMIN_TOKEN` і канал сповіщень. **При першому деплої — задати `LOG_HASH_KEY` (≥ 32 байти) у Railway**, інакше сервер не стартує.
4. **ПД / GDPR / `concern`** — design-privacy-gdpr (пізніше); Skill Graph §7.3 п. 10 — перед G4.
5. **Зображення й ліцензії:** дублікати фото між теками img/hist; Open Kurbas (CC BY-NC-ND) vs PD-Ukraine; шаблон Панкгерст на Commons (необов'язково).

## Обмеження середовища
- **Python-модуля playwright локально немає** — браузерні тести ганяє CI (job `browser`; full — Run workflow); Node-двійник /opt/node-tools; браузер `/opt/pw-browsers/chromium`; браузерні тести по одному. playtest тепер пише «не зараховано: …» замість TimeoutError.
- У промптах виконавцям явно: ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- Матрицю персоналізації (docs/math-personalization-coverage.*) змінює одна задача за раз.
- Ліміт API зупиняв агентів — відновлення через SendMessage тому самому агентові.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — під паралельною роботою звіти комітить лише оркестратор.
- Недоступні: mon.gov.ua, zakon.rada, pravopys.net, tsdial (403), chtyvo (закрито); Commons — ≤ 2 фото-агенти (429). З5 друк. = PDF − 3, З6 — PAGE + 1, З7 = PDF; Істер (4book) — друк. = PDF для ist8a/ist9a/ist8g/ist9g (facts/math №226, №253).

## Як продовжити
«Прочитай AGENTS.md і handoff; fix-math-pools-ordered-scale (скіл math-pool-diag), потім engine-list-p3 (engine-change); design-g4-graph-boundary — до G4. Змістові питання — за D-046 самостійно, сумнівне — у docs/teacher-questions.md.»
