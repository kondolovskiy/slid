# Handoff — стан проєкту

_Оновлено: 2026-11-05, куратор пам'яті (журнали sessions/2026-11-05-1.md, 2026-11-05-2.md — старий inbox; гілка `claude/brave-feynman-iql21g`). Попередні: sessions/2026-11-04-2.md, 2026-11-04-1.md (ukr 7 кл.)._

**Пам'ятка: змістові питання (термін, нотація, клас теми, норма, дата, формат завдання) — за D-046 вирішуй сам** за методичними рекомендаціями МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті. Людині — лише те, що в «Відкритих питаннях» нижче.

## Стан
- **D-046, D-047 (05.11):** рекомендації reports/research/mon-{ukr,hist,math}-2026-11.md прийнято й застосовано; задачі 05.11 — у done, усе verified, рев'ю D-026 прийнято. Профілі ukr 7–9 і hist 7–9 у style/profiles.json; boss/фінал — до 7 завдань лише за 7 тем.
- **Українська мова:** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80) — verified. Жодного `approved`.
- **Математика:** Істер 5–9 (D-043); g11m2 «Координати й вектори» перенесено в 10 кл. (g10-g11m2.js, pool-g10-g11m2.js, id без змін; матриця v10); pg11m6 optional у build; вектор у 10–11 кл. без «=».
- **Історія:** «Герай (також Гірей)», 1781 (указ) у g8s5l5, Львів 1356 + note, автопортрет «близько 1840 р.». **World:** w7s1–w9s5 verified.
- **Бекенд:** server-hardening прийнято; далі server-hardening-2.
- validate: 0 помилок, 253 попередження. Довга пам'ять: facts/hist розбито — hist.md (№1–220) + **hist-2.md (№221–350, нові сюди)**; facts/ukr №1–212, facts/math №1–252, facts/world №1–78; decisions до D-048. **pitfalls.md — 399 рядків: наступний куратор розбиває за темами.**

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів.

## Що далі
1. **Першочергово — Python-браузерні тести** (у контейнері досі немає модуля playwright; `pip install` не робити — потрібне середовище, де він є). По одному:
   `python3 tools/test-answer-ui.py --suite regression` (gaps_order_checks); `--suite content --pool pg11m2` / `pg11m6`;
   `playtest.py --section` для змінених 04–05.11: u5s1, u5s2, u5s4, u5s9, u6s1, u6s3, u6s11, u6s14, u7s1, u7s8, u7s9, u7s12, u7s13, g5s5, g5s6, g7s5, g8s2, g8s5, g9s2, g11m2, w9s5, s1–s4.
2. ~~**Старий inbox (≈ 330 рядків 03–04.11)**~~ — **виконано** 2026-11-05 (sessions/2026-11-05-2.md): facts/math №226–252, facts/world №41–78, facts/hist-2 №351–353, D-048, glossary, pitfalls. Нові задачі: **curate-math-plan-ister-gaps** (теми нових уроків D-043 у plan.js), **curate-math-graph-ister-gaps** (блок IDEA GRAPH; graph.js не змінено), **fix-math-pools-ister-formats** (sci, pairSet, рівень 1), **engine-math-ister-p3** (P2-1 pairSet, solid знизу, labelDir, fig-audit, P3 рев'ю), **style-math-ister-followup** (style/common.md за D-048 п. 1, дублі фіналів/уроків).
3. **docs-skill-graph-math-g11m2** (todo) — P3-4: пара «нічиї» g11m1/g11m2 у docs/design/skill-graph-math.md:181.
4. **server-hardening-2** (todo) — P2-1 апостроф у тесті меж, P3-2 (503), логи, лічильники, сповіщення ai-solution-check.
5. Інше в todo: refine-math-diag-g9-ister-required, engine-diag-retest-from-pool, tools-ci-answer-ui, engine-sync-login, engine-ai-a1, design-teacher-dashboard.
   **За D-046 (дослідник):** «Австрійська імперія» для 1772–1795 (hist g9s1, world w9s1 l3) — анахронізм, glossary/hist «Не вирішено».
6. **Пропозиції (задач не створено):** ENGINE P3 — coordinates3 приймати назву вектора (`c = (…)`, `c(…)`; pg11m2 b04, pg9m2 d04); validate — кожна `sk` уроку має вправу поза першими 4 пулу; lang P3-5, P3-6 (reports/review/tools-lang-p4.md); w9s5 — у credits Панкгерст прибрати «(PD-UKGov)»; style-sync hist: у `sort` з bin-«діячами» — однакова граматична форма пунктів (h64 е6 розв'язується за граматикою); після verified якорі «ще не verified» у test-personalization-qa, можливо, зайві; ukr u5s6l3 е1 — приклад «не так» «в школі в Львові» обгорнути в `<i>`; world: у шаблон автора — link-завдання завжди з абзацом-питанням; план world 8 кл. (масони, класицизм, Північна війна, Ост-Індія, «закриття» Китаю) — після тестування (D-048 п. 10).

## Відкриті питання (людині)
Змістові питання до 05.11 закрито D-046/D-047 (перегляд — лише окремою задачею людини після вчительської верифікації). Лишається:
1. **Бекенд (docs/BACKEND.md «Відкриті питання»):** хопи `X-Forwarded-For` на Railway; ліміти для класу за NAT; глобальний ліміт невдалих claim чи довший код; спільне сховище лімітів (Redis/Postgres — витрати); `nonce` для id_token з входом у фронтенді; `server/content/`.
2. **Персональні дані (правило 12):** GDPR, протокол `concern`; лінія «дроби» і §7.3 п. 10 перед G4 (дизайн).
3. **`approved` і вчитель-рецензент:** хто рецензує; dg5 №26 — погляд учителя.
4. **Чи йти в 8 кл.** української мови.
5. ~~**Дублікати фото** в історії~~ — «лишити» (D-048 п. 8, оркестратор за дорученням 04.11); людина може змінити.
6. **u5s4l6:** чи влаштовує вчителя злиття «алфавіту» і «ялинки» в одне завдання у фіналі (6 завдань на 6 тем).
7. **Оцінювання й добір (D-046 не діє; tasks/todo/engine-math-ister-p3.md пп. 3, 4, 7):** «1 : 4» при ключі 1/4 у тесті рівня — BAD (як зараз), HALF чи OK; `expression` — чи зараховувати `5r` при ключі `5R`; pickSession — бачене доповнення рівня 1 ставити після небачених.

## Обмеження середовища
- **Python-модуля playwright немає** (04–05.11); Node-двійник /opt/node-tools; браузер `/opt/pw-browsers/chromium`; браузерні тести по одному.
- У промптах виконавцям явно: ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- Ліміт API зупиняв агентів — відновлення через SendMessage тому самому агентові.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — під паралельною роботою звіти комітить лише оркестратор.
- Недоступні: mon.gov.ua, zakon.rada, pravopys.net, tsdial (403), **chtyvo (закрито)**; Commons — ≤ 2 фото-агенти (429). З5 друк. = PDF − 3, З6 — PAGE + 1, З7 = PDF.

## Як продовжити
«Прочитай AGENTS.md і handoff; у середовищі з Python playwright — прогнати п. 1; окремий куратор — старий inbox (п. 2); docs-skill-graph-math-g11m2, server-hardening-2. Змістові питання — за D-046 самостійно.»
