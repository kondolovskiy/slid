# Handoff — стан проєкту

_Оновлено: 2026-11-05, куратор пам'яті (сесія 7: пакет 05.11-6 — баг PWA зі змішуванням версій, ordered/scale у пулах, list P3, test-ui у CI, дизайн межі графа G4; журнал sessions/2026-11-05-7.md; гілка `claude/brave-feynman-iql21g`, PR kondolovskiy/slid#18). Попередні: 2026-11-05-6.md, 2026-11-05-5.md._

**Пам'ятка (D-046, D-049):** змістове питання (термін, нотація, клас теми, норма, дата, формат, оцінювання відповіді) — вирішуй сам за МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті; якщо лишається сумнів — застосуй найкращий варіант із позначкою «тимчасово, до відповіді вчителя» і **допиши питання в `docs/teacher-questions.md`** наступним номером (зараз останній TQ-071; мова — для вчителя). Роботу це не блокує. Технічні питання — людині (список нижче).

**Пам'ятка оркестратору:** `npm run check` + build і коміт згенерованих файлів — після **злиття кожного worktree** і кожного змістового коміту (pitfalls.md, сесії 5, 7). Нове поле відповіді — два кроки: рушій (рев'ю D-026) → задача пулів (+ категорія diff-answers). Новий тип екрана — запобіжник «Онови застосунок» уже є; не ламай його.

## Стан
- **05.11, сесія 7 — усе done, рев'ю D-026 / верифікацію прийнято:** engine-sw-version-skew (сторінка й файли — з кешу однієї версії, precache `no-cache`, app/update.js — безпечне перезавантаження, невідомий екран → «Онови застосунок», урок не зараховується), tools-ci-test-ui (test-ui у job `browser`), fix-math-pools-ordered-scale (pg8m2, pg8m4, pg9m6 — verified), engine-list-p3, design-g4-graph-boundary (docs/design/g4-graph-boundary.md).
- **Виправлення бага PWA діти отримають лише після злиття PR #18 у main.**
- **Українська мова:** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80) — verified. Жодного `approved`.
- **Математика:** Істер 5–9 (D-043, D-048); g11m2 у 10 кл.; граф: frac, prob, tri — verified; матриця v13; `pre` у всіх фіналах; `ordered`/`scale` у пулах.
- **Історія / world:** D-047 застосовано; world w7s1–w9s5 verified.
- validate: 0 помилок, 72 попередження. Довга пам'ять: facts/math №1–254, facts/hist.md + hist-2.md (№1–353), facts/ukr №1–212, facts/world №1–78; decisions до D-050.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів. У review нічого.

## Що далі (tasks/todo, 6)
1. **tools-engine-p3-1105** — збірка P3: test-ui `PLAYWRIGHT_MODULE`, AGENTS.md:16, тест ordered + ± не в першому елементі, ordered/multiset/scale у validate для розділів і diag, diff-answers (незалежна перевірка перестановки, тест-мутант, PERSONALIZATION_QA.md:40), SW P3-4/6/7. Скіл engine-change.
2. **G4 графа** — після відповіді людини на 5 питань (нижче) — задача на реалізацію варіанта з docs/design/g4-graph-boundary.md.
3. **engine-diag-retest-from-pool**, **engine-sync-login**, **engine-ai-a1**, **design-teacher-dashboard**, **design-privacy-gdpr** (D-050 п. 6).
4. **Пропозиції (задач не створено):**
   - IDEA GRAPH (designer-g4): ребро side-angle → tri-angle-sum w 1 → w 2? (g7m4l6 #7 order без третього кута не розв'язати) — куратору/верифікатору лінії `tri` (skill-graph).
   - IDEA GRAPH (verifier-matrix-v13): g9m7l2 / pg9m7 b06 — 0,005 без ребра до десяткових (ms2) — skill-graph.
   - STYLE: g10m6l3 вступ — view `[-0.3, 4.5, 0, 6]` (косметика).
   - server P3 (reports/review/server-log-hmac.md, server-hardening-2 P3-2…P3-7); engine P3: мутант `vecBraces` з великими літерами вижив.
   - validate — кожна `sk` уроку має вправу поза першими 4 пулу; lang P3-5, P3-6 (reports/review/tools-lang-p4.md).
   - ukr u5s6l3 е1 — «не так» у `<i>`; world: link-завдання з абзацом-питанням — у шаблон автора; план world 8 кл. — після тестування (D-048 п. 10).
   - гілку `claude/qa-ci-browser-mutant` (тестова) можна видалити.

## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** 71 питання TQ-001…TQ-071 (TQ-070 ordered, TQ-071 scale — тимчасові рішення діють з 05.11). Людина перешле вчителям; роботу не блокують.

**Технічні — людині:**
1. **Злити PR #18 у main** — без цього виправлення порожнього екрана (змішування версій PWA) до дітей не дійде. Після злиття — перевірити deploy зі звуженими правами (`pages: read`) і перший прогін test-ui у CI.
2. **GitHub Settings → Branches:** `build` і `browser` — обов'язкові (D-050 п. 2: так; вмикає людина вручну).
3. **`personalization-qa --strict` у check/CI?** Падає на draft-пулах і новому уроці без рядка матриці. Оркестратор радить: у check — ні; можливо — лише в CI для PR у main.
4. **Бекенд:** **при першому деплої — задати `LOG_HASH_KEY` (≥ 32 байти) у Railway**, інакше сервер не стартує. Відкладено (D-050 п. 4): `TRUST_PROXY`, ліміти для класу за NAT, Redis/Postgres для лімітів, `nonce`, `server/content/`, `ADMIN_TOKEN`.
5. **G4 графа (docs/design/g4-graph-boundary.md §7):** (1) варіант — (в) комбінація (рекомендація) / (а) fallback на старі pres / (б) лише вузли межі; (2) пара без вузла в лінії verified — старі `pres` чи порожньо; (3) вузол без ребер w 2 — без кандидатів P/S12 на G4, згодні?; (4) `pre` екрана — об'єднувати з граф-pres (рекомендація) чи замінювати; (5) вузол межі поза лінією (`angle-measure`, ms0bl2) — дозволити чи завжди включати в лінію.
6. **ПД / GDPR / `concern`** — design-privacy-gdpr (пізніше); Skill Graph §7.3 п. 10 — перед G4.
7. **Зображення й ліцензії:** дублікати фото між теками img/hist; Open Kurbas (CC BY-NC-ND) vs PD-Ukraine.

## Обмеження середовища
- **Python-модуля playwright локально немає** — браузерні тести ганяє CI (job `browser`: регресія, test-ui, плейтест піднабору; full — Run workflow); браузер `/opt/pw-browsers/chromium`; браузерні тести по одному.
- У промптах виконавцям явно: ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- Матрицю персоналізації (docs/math-personalization-coverage.*) змінює одна задача за раз.
- Ліміт API зупиняв агентів — відновлення через SendMessage тому самому агентові.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — під паралельною роботою звіти комітить лише оркестратор.
- Недоступні: mon.gov.ua, zakon.rada, pravopys.net, tsdial (403), chtyvo (закрито); Commons — ≤ 2 фото-агенти (429). Сторінки підручників — facts/math №226, №253.

## Як продовжити
«Прочитай AGENTS.md і handoff; спершу нагадай людині злити PR #18. Далі tools-engine-p3-1105 (engine-change); G4 — після відповідей на 5 питань. Змістові питання — за D-046 самостійно, сумнівне — у docs/teacher-questions.md.»
