# Handoff — стан проєкту

_Оновлено: 2026-11-10, куратор пам'яті (сесія 2026-11-10-1: курування пакета 06.11 — ukr 8 кл., тести рівня ukr / hist / world, один тест на головній; журнал sessions/2026-11-10-1.md; гілка `claude/peaceful-cray-k7ihxg` від main після PR #20). Попередні: 2026-11-05-7.md, 2026-11-05-6.md._

**Пам'ятка (D-046, D-049):** змістове питання (термін, нотація, клас теми, норма, дата, формат, оцінювання відповіді) — вирішуй сам за МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті; сумнів лишився — найкращий варіант з позначкою «тимчасово, до відповіді вчителя» і **питання в `docs/teacher-questions.md`** наступним номером (зараз останній **TQ-079**; мова — для вчителя). Роботу це не блокує. Технічні питання — людині (список нижче).

**Пам'ятка оркестратору:** `npm run check` + build і коміт згенерованих файлів — після злиття кожного worktree і кожного змістового коміту. Нове поле стану `slid.v1` — з правилом злиття в app/sync.js. Новий тест рівня — `diagOrder` предмета вже є; на головній одна картка (D-052).

## Стан
- **PR #18, #19, #20 злито в main** — виправлення PWA (змішування версій), test-ui у CI, тести рівня й 8 кл. уже публікуються.
- **06.11 — усе done, верифікацію / рев'ю D-026 прийнято:** tools-engine-p3-1105, engine-sync-login (синхронізація вимкнена, доки не задано `SLID_API`/`SLID_GOOGLE_CLIENT_ID`), engine-diag-lang-types, fix-diag-order, engine-diag-one-invite (D-052), tools-make-tasks-dry-run.
- **Тести рівня (D-051):** math (як раніше) + нові ukr dgu5–dgu8, історія dgh5–dgh11, всесвітня dgw7–dgw9 — verified. Тривалість ukr/hist/world 12–15 хв.
- **Українська мова:** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80), **8 кл. (72, u8s1–u8s14)** — verified. Жодного `approved`.
- **Математика:** Істер 5–9 (D-043, D-048); граф: frac, prob, tri — verified; матриця v13. **Історія / world:** D-047; world w7s1–w9s5 verified.
- validate: 0 помилок, 72 попередження (reports/validate.json 06.11). Довга пам'ять: facts/ukr №1–212 + **facts/ukr-8.md №213–253**; facts/hist + hist-2 №1–373; facts/world №1–81; facts/math №1–254; decisions до **D-052**.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів (тепер і для тестів ukr/hist/world). У review нічого.

## Що далі (tasks/todo, 9)
**Можна брати (нові, 10.11):**
1. **curate-ukr-g8-plan-sync** — plan.js: `requires` u8s4–u8s13 як у файлах розділів; u8s6 тема 1 → «Додаток. Способи вираження додатка»; style/ukr.md «черго́вий» → «чергови́й» (оркестратор підтверджує).
2. **style-ukr-g8** — style-sync 8 кл. («Знайди помилку» в u8s1, кошик «Неповне» в u8s8, u8s14l9).
3. **tools-diag-nonmath-p3** — personalization-qa для тестів ukr/hist/world, `split` з пробілом, у/в у `sort` і `<b>`, EVIDENCE raw (engine-change, D-026).
4. **fix-hist-g6s7-l3-learned** — `learned` без екрана (verifier-dgh6).
5. **curate-meta-author** — `author: "claude-opus"` у ~149 файлах content/ (AGENTS.md §5); один агент, не під час пакета.

**Заблоковано рішенням людини:** engine-diag-retest-from-pool (3 питання), engine-ai-a1 (власність `server/content/`), design-privacy-gdpr (сигнал людини), design-teacher-dashboard (бекенд). make-tasks --dry-run для math/ukr/hist/world — 0 нових задач (перевірено 10.11).

**Пропозиції (задач не створено):**
- Наступні редакції тестів (лише новим id): dgu7 — складений multi з наголосом (cur-u7s4/u7s9), менше карток №15; dgh6 — скоротити g6-neol і g6-colony до 5 тверджень (≈ 13–15 хв); чергувати набори ключів multi (dgu5/dgu6). Після пілоту тривалості.
- ENGINE (дизайн, D-026): поле теми `see: [{subject: "hist", lesson: …}]` — порада «повтори в Історії» для baseline-тем dgw7/dgw9 (Стародавній світ лише в hist g6s6–g6s8).
- ENGINE/текст: `LEARN.level` «Почнемо з основ» при 0 прогалин і всіх темах «хитко» звучить суворо (math і ukr) — людині.
- engine-sync-login P3 (відкликання токена на сервері, streak, спільний ПК; `link: true` клієнт не використовує) — у задачі; G4 графа — після 5 відповідей; IDEA GRAPH side-angle → tri-angle-sum w 1 → 2; g9m7l2 / pg9m7 b06 без ребра до ms2; server P3; validate «sk уроку поза першими 4 пулу»; lang P3-5/6; гілку `claude/qa-ci-browser-mutant` можна видалити.

## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** 79 питань TQ-001…TQ-079 (нові 06–10.11: TQ-072–077 ukr 8 — тепер у таблиці «Українська мова»; TQ-078 «до речі», TQ-079 «помимо / включаючи / пам'ятник архітектури»). Людина перешле вчителям; роботу не блокують.

**CONFLICT (не вирішено, лише зафіксовано):**
- **Пунктуація «УП 2019» на slovnyk.ua.** facts/ukr №69 і pitfalls-content: «УП 2019 розділу про розділові знаки не має»; п'ять верифікаторів 06.11: slovnyk.ua під «Новий правопис 2019» подає ч. «Уживання розділових знаків» § 155–168 (кома — § 158, тире — § 161) і на неї вже спираються u8s4, u8s8, u8s10, u8s12, dgu8. Офіційний PDF (2019.pravopys.net 503, pravopys.net 403) не відкрито. Потрібно: звірити з офіційним текстом стандарту 2026 / ред. 2019 (людина або дослідник з доступом) і вирішити, як цитувати. До того — З8/А8 основне, slovnyk.ua — «текст на slovnyk.ua».
- «до речі» (З8 / slovnyk.ua — зв'язок думок ↔ А8 — увага співрозмовника) — не оцінюється, TQ-078.
- «отже» — З8, А8, slovnyk.ua: вставне; naurok (Капінус): ні — в u8s10 не оцінюється (facts/ukr-8 №243).

**Технічні — людині:**
1. **engine-diag-retest-from-pool:** (1) чи брати вправи пулу для оцінки ok/shaky/gap (лише теми pre, cur — проби тесту?); (2) брати вправу, яку дитина вже бачила в тренуванні (seen)?; (3) зараховувати повторний тест з пулу в `S.diag` так само, як основний (перерахунок плану й коробок SRS)?
2. **engine-ai-a1:** власність `server/content/` (згенеровані build-ом) — погодити із сесією server/ (AGENTS.md §2, docs/BACKEND.md) до коду.
3. **design-privacy-gdpr** — коли почати (D-050 п. 6: «пізніше»); Skill Graph §7.3 п. 10 — перед G4.
4. **G4 графа (docs/design/g4-graph-boundary.md §7):** 5 питань — варіант (в)/(а)/(б); пара без вузла; вузол без ребер w 2; `pre` екрана — об'єднувати чи замінювати; вузол межі поза лінією.
5. **GitHub Settings → Branches:** `build` і `browser` — обов'язкові (D-050 п. 2; вмикає людина). Перевірити deploy зі звуженими правами (`pages: read`).
6. **Синхронізація прогресу:** увімкнути — змінні `SLID_API`, `SLID_GOOGLE_CLIENT_ID` + `CORS_ORIGINS` на сервері; **при першому деплої бекенду — `LOG_HASH_KEY` (≥ 32 байти) у Railway**. Відкладено (D-050 п. 4): `TRUST_PROXY`, NAT-ліміти, Redis, `nonce`, `ADMIN_TOKEN`.
7. **`personalization-qa --strict` у check/CI?** Оркестратор радить: у check — ні.
8. Зображення: дублікати фото між теками img/hist; Open Kurbas (CC BY-NC-ND) vs PD-Ukraine.

## Обмеження середовища
- **Python-модуля playwright локально немає** — браузерні тести ганяє CI (job `browser`; full — Run workflow); браузер `/opt/pw-browsers/chromium`; браузерні тести по одному.
- У промптах виконавцям: ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — звіти комітить лише оркестратор (06.11 повторилось).
- Матрицю персоналізації змінює одна задача за раз. Ліміт API — відновлення через SendMessage тому самому агентові.
- Недоступні: mon.gov.ua, zakon.rada (Конституція — PDF ccu.gov.ua), pravopys.net / 2019.pravopys.net, tsdial (403), chtyvo (закрито), lib.imzo.gov.ua (сертифікат); Commons — ≤ 2 фото-агенти (429).

## Як продовжити
«Прочитай AGENTS.md і handoff. Можна паралельно: curate-ukr-g8-plan-sync, style-ukr-g8, tools-diag-nonmath-p3, fix-hist-g6s7-l3-learned (curate-meta-author — окремо, не під час пакета). Людині — CONFLICT пунктуації і технічні питання 1–4.»
