# Handoff — стан проєкту

_Оновлено: 2026-11-05, куратор пам'яті (журнал sessions/2026-11-05-3.md; гілка `claude/brave-feynman-iql21g`, PR kondolovskiy/slid#18). Попередні: sessions/2026-11-05-2.md (старий inbox), 2026-11-05-1.md (D-046/D-047)._

**Пам'ятка: змістові питання (термін, нотація, клас теми, норма, дата, формат завдання) — за D-046 вирішуй сам** за методичними рекомендаціями МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті. Людині — лише те, що в «Відкритих питаннях» нижче.

## Стан
- **05.11, сесія 3 — усе done, рев'ю D-026 / верифікацію прийнято:** fix-hist-world-small-1105 (w9s5 credits Панкгерст, h64 е6 → verified); refine-math-diag-g9-ister-required (dg9 `for`: linear + g9m3, pyth + g9m3, g9m8; polygon → g9m4 свідомо ні; матриця **v11**; dg9 verified) і docs-skill-graph-math-g11m2; server-hardening-2 (JSON-логи без ПД, `lh` = SHA-256 від випадкового UUID, лічильники й alert у лог, `/v1/admin/metrics` за `ADMIN_TOKEN`, 503, порт сховища лімітів); tools-ci-answer-ui (job `browser` у pages.yml; перший прогін на PR #18, run 41990614722, — зелений); engine-coordinates-vector-name (назва вектора в coordinates2/3; P1 ReDoS виправлено).
- **Українська мова:** 5 кл. (69 уроків), 6 кл. (94), 7 кл. (80) — verified. Жодного `approved`.
- **Математика:** Істер 5–9 (D-043, D-048); g11m2 у 10 кл. (id без змін); матриця персоналізації v11.
- **Історія / world:** D-047 застосовано; world w7s1–w9s5 verified.
- validate: 0 помилок, 253 попередження. Довга пам'ять: facts/hist.md (№1–220) + hist-2.md (№221–353, нові сюди); facts/ukr №1–212, facts/math №1–252, facts/world №1–78; decisions до D-048.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів.

## Що далі
1. ~~Браузерні прогони (Python playwright)~~ — **виконано CI:** job `browser` на PR #18 зелений. Далі **qa-ci-browser-mutant** — мутант-PR (job має червоніти на зламаному `gapOrder` / choice), перевірка deploy зі звуженими правами після першого пуша в main.
2. **curate-math-plan-ister-gaps** (теми уроків D-043 у plan.js), **curate-math-graph-ister-gaps** (IDEA GRAPH; + 05.11: опора g9m4l5 — g8m6l2, не g8m6l1, у графі й реєстрі матриці → v12; P3 доків dg9).
3. **fix-math-pools-ister-formats** (sci, pairSet, рівень 1), **engine-math-ister-p3** (pairSet, solid знизу, labelDir, fig-audit, P3 рев'ю; пп. 3, 4, 7 — питання людині нижче), **style-math-ister-followup**.
4. **engine-diag-retest-from-pool**, **engine-sync-login**, **engine-ai-a1**, **design-teacher-dashboard**.
5. **pitfalls.md — 403 рядки: розбити за темами** (окремі файли, напр. pitfalls-images.md, pitfalls-tools.md…; INDEX — по рядку на файл). Робить куратор, коли ніхто паралельно не працює.
6. **Пропозиції (задач не створено):**
   - server P3 (reports/review/server-hardening-2.md): **P3-1 `lh` → HMAC із серверним секретом — вирішити до ai-solution-check**; P3-2 тіло 404 admin; P3-3/P3-4 мутанти stripComments; P3-5 /health і 400/413 у знаменнику; P3-6 обірвані запити; P3-7 верхній регістр схем.
   - engine P3: мутант `vecBraces` з великими літерами вижив — додати тест (reports/review/engine-coordinates-vector-name.md).
   - validate — кожна `sk` уроку має вправу поза першими 4 пулу; lang P3-5, P3-6 (reports/review/tools-lang-p4.md).
   - style-sync hist: у `sort` з bin-«діячами» — однакова граматична форма пунктів (h64 е6 виправлено, правило — у style).
   - після verified якорі «ще не verified» у test-personalization-qa, можливо, зайві; ukr u5s6l3 е1 — приклад «не так» обгорнути в `<i>`; world: link-завдання завжди з абзацом-питанням (у шаблон автора); план world 8 кл. — після тестування (D-048 п. 10).
   - Commons: фото Панкгерст (IWM Q 81486) досі з шаблоном PD-UKGov — людина може виправити на PD-UK-unknown + PD-US-expired (facts/world №35).
   - За D-046 (дослідник): «Австрійська імперія» для 1772–1795 (hist g9s1, world w9s1 l3) — glossary/hist «Не вирішено».

## Відкриті питання (людині)
Змістові питання до 05.11 закрито D-046/D-047. Лишається:
1. **Бекенд (docs/BACKEND.md «Відкриті питання»):** `TRUST_PROXY` / хопи `X-Forwarded-For` на Railway; ліміти для класу за NAT; глобальний ліміт невдалих claim чи довший код; спільне сховище лімітів (Redis/Postgres — витрати); `nonce` для id_token; `server/content/`; **`ADMIN_TOKEN` на Railway, хто адміністратор і куди слати сповіщення** (зараз alert лише в лог).
2. **Персональні дані (правило 12):** GDPR, протокол `concern`; лінія «дроби» і §7.3 п. 10 перед G4.
3. **`approved` і вчитель-рецензент:** хто рецензує; dg5 №26 — погляд учителя.
4. **Чи йти в 8 кл.** української мови.
5. **u5s4l6:** чи влаштовує вчителя злиття «алфавіту» і «ялинки» в одне завдання у фіналі.
6. **GitHub Settings → Branches:** позначити `build` і `browser` обов'язковими (required checks).
7. **Оцінювання й добір (D-048; tasks/todo/engine-math-ister-p3.md пп. 3, 4, 7):** «1 : 4» при ключі 1/4 у тесті рівня — BAD / HALF / OK; `expression` — чи зараховувати `5r` при ключі `5R`; pickSession — бачене доповнення рівня 1 ставити після небачених. _Примітка: перші два — питання нотації, їх можна вирішити за D-046 (глосарій, підручник) без людини; третє — поведінка рушія, лишається людині._

## Обмеження середовища
- **Python-модуля playwright локально немає** — браузерні тести ганяє CI (job `browser`; full — Run workflow); Node-двійник /opt/node-tools; браузер `/opt/pw-browsers/chromium`; браузерні тести по одному.
- У промптах виконавцям явно: ніколи `git stash/reset/checkout --` (і в worktree), не чіпати чужі файли й звіти, не змінювати права на /tmp/claude-0.
- Ліміт API зупиняв агентів — відновлення через SendMessage тому самому агентові.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — під паралельною роботою звіти комітить лише оркестратор.
- Недоступні: mon.gov.ua, zakon.rada, pravopys.net, tsdial (403), chtyvo (закрито); Commons — ≤ 2 фото-агенти (429). З5 друк. = PDF − 3, З6 — PAGE + 1, З7 = PDF.

## Як продовжити
«Прочитай AGENTS.md і handoff; qa-ci-browser-mutant (мутант-PR); curate-math-plan/graph-ister-gaps; розбити pitfalls.md. Змістові питання — за D-046 самостійно.»
