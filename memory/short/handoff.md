# Handoff — стан проєкту

_Оновлено: 2026-11-05, куратор пам'яті (журнал sessions/2026-11-05-1.md; гілка `claude/brave-feynman-iql21g`). Попередні: sessions/2026-11-04-2.md, 2026-11-04-1.md (ukr 7 кл.)._

**Пам'ятка: змістові питання (термін, нотація, клас теми, норма, дата, формат завдання) — за D-046 вирішуй сам** за методичними рекомендаціями МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті. Людині — лише те, що в «Відкритих питаннях» нижче.

## Стан
- **D-046, D-047 (05.11):** рекомендації reports/research/mon-{ukr,hist,math}-2026-11.md прийнято й застосовано; задачі 05.11 — у done, усе verified, рев'ю D-026 прийнято. Профілі ukr 7–9 і hist 7–9 у style/profiles.json; boss/фінал — до 7 завдань лише за 7 тем.
- **Українська мова:** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80) — verified. Жодного `approved`.
- **Математика:** Істер 5–9 (D-043); g11m2 «Координати й вектори» перенесено в 10 кл. (g10-g11m2.js, pool-g10-g11m2.js, id без змін; матриця v10); pg11m6 optional у build; вектор у 10–11 кл. без «=».
- **Історія:** «Герай (також Гірей)», 1781 (указ) у g8s5l5, Львів 1356 + note, автопортрет «близько 1840 р.». **World:** w7s1–w9s5 verified.
- **Бекенд:** server-hardening прийнято; далі server-hardening-2.
- validate: 0 помилок, 253 попередження. Довга пам'ять: facts/hist розбито — hist.md (№1–220) + **hist-2.md (№221–350, нові сюди)**; facts/ukr №1–212, facts/math №1–225, facts/world №1–40; decisions до D-047.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів.

## Що далі
1. **Першочергово — Python-браузерні тести** (у контейнері досі немає модуля playwright; `pip install` не робити — потрібне середовище, де він є). По одному:
   `python3 tools/test-answer-ui.py --suite regression` (gaps_order_checks); `--suite content --pool pg11m2` / `pg11m6`;
   `playtest.py --section` для змінених 04–05.11: u5s1, u5s2, u5s4, u5s9, u6s1, u6s3, u6s11, u6s14, u7s1, u7s8, u7s9, u7s12, u7s13, g5s5, g5s6, g7s5, g8s2, g8s5, g9s2, g11m2, w9s5, s1–s4.
2. **Старий inbox (≈ 330 рядків 03–04.11, memory/short/inbox.md нижче маркера 2026-11-05-1)** — окремий куратор: math Істер (пули, розділи, фінали, діагностика for, матриця v6–v9, engine-answer-formats-ister, fix-math-figs, prev-refs), world w8s1–w9s4 (факти → facts/world від №41), hist images-g11s1boss. GRAPH-рядки — за скілом skill-graph.
3. **docs-skill-graph-math-g11m2** (todo) — P3-4: пара «нічиї» g11m1/g11m2 у docs/design/skill-graph-math.md:181.
4. **server-hardening-2** (todo) — P2-1 апостроф у тесті меж, P3-2 (503), логи, лічильники, сповіщення ai-solution-check.
5. Інше в todo: refine-math-diag-g9-ister-required, engine-diag-retest-from-pool, tools-ci-answer-ui, engine-sync-login, engine-ai-a1, design-teacher-dashboard.
6. **Пропозиції (задач не створено):** ENGINE P3 — coordinates3 приймати назву вектора (`c = (…)`, `c(…)`; pg11m2 b04, pg9m2 d04); validate — кожна `sk` уроку має вправу поза першими 4 пулу; lang P3-5, P3-6 (reports/review/tools-lang-p4.md); w9s5 — у credits Панкгерст прибрати «(PD-UKGov)»; style-sync hist: у `sort` з bin-«діячами» — однакова граматична форма пунктів (h64 е6 розв'язується за граматикою); після verified якорі «ще не verified» у test-personalization-qa, можливо, зайві.

## Відкриті питання (людині)
Змістові питання до 05.11 закрито D-046/D-047 (перегляд — лише окремою задачею людини після вчительської верифікації). Лишається:
1. **Бекенд (docs/BACKEND.md «Відкриті питання»):** хопи `X-Forwarded-For` на Railway; ліміти для класу за NAT; глобальний ліміт невдалих claim чи довший код; спільне сховище лімітів (Redis/Postgres — витрати); `nonce` для id_token з входом у фронтенді; `server/content/`.
2. **Персональні дані (правило 12):** GDPR, протокол `concern`; лінія «дроби» і §7.3 п. 10 перед G4 (дизайн).
3. **`approved` і вчитель-рецензент:** хто рецензує; dg5 №26 — погляд учителя.
4. **Чи йти в 8 кл.** української мови.
5. **Дублікати фото** в історії (sessions/2026-11-03-1.md).
6. **u5s4l6:** чи влаштовує вчителя злиття «алфавіту» і «ялинки» в одне завдання у фіналі (6 завдань на 6 тем).

## Обмеження середовища
- **Python-модуля playwright немає** (04–05.11); Node-двійник /opt/node-tools; браузер `/opt/pw-browsers/chromium`; браузерні тести по одному.
- У промптах виконавцям явно: ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- Ліміт API зупиняв агентів — відновлення через SendMessage тому самому агентові.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — під паралельною роботою звіти комітить лише оркестратор.
- Недоступні: mon.gov.ua, zakon.rada, pravopys.net, tsdial (403), **chtyvo (закрито)**; Commons — ≤ 2 фото-агенти (429). З5 друк. = PDF − 3, З6 — PAGE + 1, З7 = PDF.

## Як продовжити
«Прочитай AGENTS.md і handoff; у середовищі з Python playwright — прогнати п. 1; окремий куратор — старий inbox (п. 2); docs-skill-graph-math-g11m2, server-hardening-2. Змістові питання — за D-046 самостійно.»
