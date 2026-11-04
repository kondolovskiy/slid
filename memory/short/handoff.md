# Handoff — стан проєкту

_Оновлено: 2026-11-04, куратор пам'яті — сесія 2 (журнал sessions/2026-11-04-2.md; гілка `claude/brave-feynman-iql21g` від main після PR #17). Попередні: sessions/2026-11-04-1.md (ukr 7 кл.), 2026-11-03-1.md (hist/world/math)._

## Стан
- **Українська мова (D-040–D-042, D-045):** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80, content/ukr/g7-u7s1…u7s13.js) — verified; попередження validate u5s2l7, u6s1l6, u6s14l2/l5/l7 закрито (fix-ukr-validate-warnings). Жодного `approved`.
- **Рушій мов:** tools-lang-p4 (P3-1…P3-6, euphony `--section` — лише stdout), tests-lang-gaps-order, tools-world-img-p3 — рев'ю прийнято; tasks/review порожня.
- **Математика:** Істер 5–9 (D-043, PR #14, #17); пули **pg11m2** (g11m2l1–l2) і **pg11m6** (optional) — verified, у build. Матриця v9.
- **Історія:** style-hist-h56, style-hist-g5-finals — 10 уроків 5 кл. verified (src/crit, «Фінал»). **World:** w7s1–w7s5, w8s1–w8s5, w9s1–w9s5 — verified (w9s5 «Світ на порозі XX ст.» — ця сесія).
- **Бекенд:** server-hardening прийнято (unit 110/110, e2e 18/18); далі — server-hardening-2.
- Довга пам'ять: facts/ukr №1–211, facts/hist №1–349 (**файл 400 рядків — наступне доповнення: розбити за класами**), facts/world №1–40 (без w8s1–w9s3), facts/math №1–222; decisions до **D-045**.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів.

## Що далі
1. **Першочергово — Python-браузерні тести там, де є модуль playwright** (у контейнері 04.11 його не було): `python3 tools/test-answer-ui.py --suite regression` (новий `gaps_order_checks`), `--suite content --pool pg11m2` / `pg11m6`; `playtest.py --section` для w9s5, s1, s2, s3, s4, g5s5, u5s2, u6s1, u6s14. По одному. Не ставити пакети самим.
2. **Куратор math/world — старий inbox:** 51 рядок 03.11 (math ister, fix-math-figs, prev-refs; hist images-g11s1boss) і ≈ 270 рядків PR #17 (пули й розділи Істера, фінали, діагностика for, матриця v6–v9, engine-answer-formats-ister; world w8s1–w9s4 — факти → facts/world від №41). Перед цим — розбити facts/hist.md.
3. **fix-math-pool-g11m6-order** (todo) — c05 перед c04, d05 перед d04, знімки test-hyp §10, рев'ю D-026.
4. **server-hardening-2** (todo) — P2-1 апостроф у тесті меж, P3-2 (503), структуровані логи, лічильники й сповіщення для ai-solution-check; рішення людини — нижче.
5. **ukr після відповідей людини:** style-ukr-g7-followup (todo); профіль ukr 7–9 у style/profiles.json (reports/style-sync-ukr-g7.md §4, через decisions.md).
6. Інше в todo: refine-math-diag-g9-ister-required, engine-diag-retest-from-pool, tools-ci-answer-ui, engine-sync-login, engine-ai-a1 (після server/content/), design-teacher-dashboard.
7. **Пропозиції (задач не створено):** ENGINE P3 — coordinates3 приймати назву вектора з умови (`c = (−13; −2; 17)` → зараз `bad`; pg11m2 b04, pg9m2 d04); validate-попередження — кожна `sk` уроку має вправу поза першими 4 пулу (IDEA eng-test-hyp-g11); lang P3-6 — gapCase мовчить на «<b>В</b>ітаю» й подібні (75 fbText ukr), P3-5 — лапки ≤ 4 слів знімаються й для авторських реплік (reports/review/tools-lang-p4.md); h33 — пом'якшити outro («продовжує досвід» подано як факт) і додати note про дату Львова; w9s5 — у credits фото Панкгерст прибрати «(PD-UKGov)», лишити «суспільне надбання» (reports/verify/w9s5.md §5.2).

## Відкриті питання (людині)
**Нові (04.11, сесія 2):**
1. **g11m2l1–l2 — 10 чи 11 кл.?** Пул verified, уроки в матриці pending; переводити в required?
2. **pg11m6 — optional чи deferred?** Пул написано й verified як optional (матриця v9 — deferred); лишити в build?
3. **Вектор у 10–11 кл.:** g11m2l2 пише з «=» (`$a→ = (2; -1; 4)$`), glossary (Істер 5–9) — без «=». Поширити на 10–11 кл. і виправити g11m2l2?
4. **Магдебурзьке право Львова:** 1356 (привілей Казимира III; так у h33) чи «before 1352» (EoU)? facts/hist №347.
5. **Бекенд (docs/BACKEND.md «Відкриті питання»):** хопи `X-Forwarded-For` на Railway (після деплою); ліміти для класу за NAT; глобальний ліміт невдалих claim чи довший код; спільне сховище лімітів (Redis/Postgres — витрати); `nonce` для id_token разом із входом у фронтенді.
6. Термін «друга промислова революція» замінено на «науково-технічна революція» за програмою (glossary/world) — згода?

**Українська 7 кл. (sessions/2026-11-04-1.md, reports/verify/u7s*.md):** «Здогадка» на оцінюваних (u5s2, u5s9 → «Подумай»?); профіль ukr 7–9; фінали з 7 завданнями (u7s1l9, u6s14l7, hist g7s5l5, g8s1l5, g8s5l7); D-041 і синтаксис (№159, 166, 181, 208); D-041, слова (№173, 176, 182, 196, 199, 203); CONFLICT u5s1 «за хлібом»; «На Чорному морі», З7 с. 151 (№187); назви значків-дублікати; «спільнокореневі» / «споріднені»; автопортрет Шевченка (facts/hist №140); хто вчитель-рецензент і чи йти в 8 кл.
**Українська 5–6 кл.:** sessions/2026-11-02-3.md (№24, 96, 110, 119, 130, 136, 137, 141 тощо).
**Історія і world:** sessions/2026-11-03-1.md п. 1–10 (1783, Гетьманщина, Гірей/Герай, профіль hist 7–9, план world 8–9, дублікати фото); Малевич — 1878 чи 1879 (у w9s5 без року).
**Математика / граф / дані:** dg5 №26; лінія «дроби» і §7.3 п. 10 перед G4; server/content/, персональні дані (GDPR), протокол `concern`; sessions/2026-11-02-2.md.

## Обмеження середовища
- **Python-модуля playwright може не бути** (04.11) — браузерні Python-тести не запускаються; Node-двійник /opt/node-tools; `pip install` заборонено. Playwright-браузер — `/opt/pw-browsers/chromium`; браузерні тести по одному.
- Агенти порушували правила git і прав (pitfalls «04.11, сесія 2»): у промптах виконавцям явно — ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- Ліміт API зупиняв агентів — відновлення через SendMessage тому самому агентові.
- `npm run check`, `validate --section`, `stats --subject`, `euphony --subject` перезаписують спільні reports/ — під паралельною роботою build і звіти комітить лише оркестратор.
- ukr: mon.gov.ua, zakon.rada, pravopys.net недоступні; З5 друк. = PDF − 3, З6 — PAGE + 1, З7 — = PDF. Commons — ≤ 2 фото-агенти (429).

## Як продовжити
«Прочитай AGENTS.md і handoff; у середовищі з Python playwright — прогнати п. 1; куратор math/world — старий inbox (п. 2, спершу розбити facts/hist.md); fix-math-pool-g11m6-order, server-hardening-2; відповіді людини → style-ukr-g7-followup, матриця g11».
