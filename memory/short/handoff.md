# Handoff — стан проєкту

_Оновлено: 2026-11-01, куратор пам'яті (журнал sessions/2026-11-01-2.md)._

## Стан
- **Математика, персоналізація 4–11 кл. — release прийнято** (reports/qa/math-personalization-release.md): required 169/169 уроків, 48/48 пулів, 8 діагностик dg4–dg11 verified, наскрізні маршрути й офлайн зелені. Матриця 2026-11-01.v3. Відкладено (0 required): g11m2, g11m6, g11m5l3; pending g4m1l4, ms0bl3, ms3l3; optional 7.
- **Рушій (усе з рев'ю D-026):** `answer` (number/time/quantity) у тесті рівня (form = BAD без фідбеку); префікси координат за D-031 + уточнення (об'єкти умови, A₁/A′ → form; askedPoint із заголовка, «Знайди координати $D$», «середини $M$»); SRS-коробки з тесту (D-032), пізній пул → box уроку; «Продовжити тест» на головній; генератори `gen` (CONTENT_SCHEMA §10, у змісті ще немає); рендер `√N/M` = (√N)/M; aria-valuetext x₁/x².
- **Інструменти:** `diff-answers --content-old`; validate (plan requires/badges, credits, DIAG_FORMAT, signed для answer, MATH_COMMANDS з app/math.js); make-tasks `--write-pool` + test-make-tasks.mjs (**ще не в npm run check / CI**). Тести: test-learn 2081, test-validate 571, test-math 60, test-lab 150.
- **Зміст:** опори в 21 уроці 7–9 кл. і дрібні правки 10–11 кл. — verified. Історія: D-027 виконано (34 розділи).
- validate: 0 помилок, 254 попередження; sw.js f0ae99b6de. Жодного `approved`.
- Довга пам'ять: facts/hist №1–313, facts/math №1–219, decisions до **D-032**.
- PR https://github.com/kondolovskiy/slid/pull/6, гілка `claude/intelligent-brahmagupta-zyjilv` (HEAD 6000eb3). Зміни memory/ і tasks/todo/engine-p3-1101.md куратор не комітив.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** (agent-research-math-diag-duration) — протокол пілоту готовий (docs/testing/math-diag-duration.md); чекає проведення з учнями, пороги скорочення в §9 — пропозиція.
- review порожня; todo — 6.

## Що далі (пріоритет)
1. **engine-p3-1101** (tasks/todo, автономна, рев'ю D-026): тести √ (`√3 - 1`, `√3/(2)`), «2 √3/3», `√√2/2`, `\sqrt 3/2` → помилка validate; gen N1 (двокрапка/«–» як знак дії); askedPoint N2 («Точка $K$ на прямій») — тест і коментар; test-make-tasks у npm check і CI; g11m6 `a b\,"sin"\,γ` (absin γ) з верифікатором.
2. Після рішень людини: dg4 №18 → answer time і dg10 №18 (А2 позитивно) — разом, з `rev` (CONTENT_SCHEMA §9).
3. Чекають людини: engine-ai-solution-check, engine-diag-retest-from-pool, engine-answer-unit-choice (спершу — чи потрібна), write-math-pool-g11m2/m6, research-math-diag-duration (пілот → перегляд порогів D-030).
4. Інструменти без задачі: `\beta`, `\varphi` у рендері/валідаторі; підказка ratio «7/3» → form; g6-neg з lab-numline у dg6 rev 3; JSON review для матриці v3; перший `gen` у змісті (пілотний пул).
5. Низький пріоритет: g10m3l1 спирається на п. 5 m10, якого урок не пояснює; калібрування профілів (D-011); style-sync hist 7 і math «7-9»/«10-11».
6. Бажане з давніх: g7s4 boss l6 — аркуш літопису замість фото церкви; кінцева крапка «3.» у number/list; `playtest.py --help` запускає повний прогін; `sources.short`; єдиний title `mer5` у pms0/1/3; сигли `g7` → `mer7g`, `mer9a` → `a9`; вправи «… т … ц … кг» (g4b/l4a).

## Запити до рушія (без задачі)
- `fig` у пулах: геометрія mer7g (рис. 17–39, 86–91, 128–172, 226–256, 313), графіки m10 №1.8, 1.20, 1.21, 1.25, куб/паралелепіпед з підписаними вершинами (m10 рис. 30.7–30.8, 34.10, 36.5–36.7); транспортир із двома шкалами (dg7 №12); `lab solid` cylinder/cone/sphere, «space», логарифм без a = 1, plane snap/rays; SVG-карти hist (g9s1, g6s5, g10s2, g10s5).

## Відкриті питання (людині; не блокують)
**Тест рівня й формати відповідей (math):**
1. dg4 №18 — замінити multi на answer time («9:10 + 45 хв», `rev: 2`)? Складність проби.
2. `form` у тесті рівня — BAD (зараз, D-032) чи OK? Інші answerKind у тесті — окремо.
3. `A₁(…)`/`A′(…)` для образу точки A — ok? (зараз form; pg9m6 c02, c03, c06, c07, d03). Уточнення D-031 (а–г) записано — підтвердити.
4. Стала «c» (зараз form «великою C»), коли умова не вимагає великої.
5. Правило «лише змінна з умови» для `number` (зараз префікс з будь-якою літерою).
6. PageUp/PageDown у лабах = 1/5 діапазону — так?
7. pms2 d07 — чи приймати «23,5 грн» при вимозі «у гривнях і копійках».
8. Чи відкривати тренування тем pre зі статусом ok без пройденого уроку (зараз молодші класи — лише пройдені уроки; запис з тесту чекає).
9. Ручна перевірка на Android/iOS і зі зчитувачами екрана (reports/review/engine-player-a11y-followup.md, -p3.md).
10. engine-ai-solution-check — чернетка текстом чи фото, бекенд і оплата, кому показувати вердикт; engine-diag-retest-from-pool — питання в задачі; engine-answer-unit-choice — чи потрібна взагалі; пороги скорочення тесту (docs/testing/math-diag-duration.md §9).

**Матриця v3 (math):**
11. g9m3l4 — звуження (без expression, D-028); g9m1l1 evidence; a8 п. 22–23 без уроку; `requires` для g9m5.
12. g10m6l3: урок пише проміжки знаку f′ відкритими, m10 — замкненими.

**Математика, давні:**
13. a7: автори «Мерзляк, Якір» (титул) vs «Мерзляк, Полонський, Якір» (vshkole) — підтвердити за друкованим примірником.
14. mer7g №358(2); «проєкція»/«перетин» уже в уроках — якщо проти, відкотити; прогалини без вправ (g9m7l3 кругова діаграма, «скільки човнів» 4 кл.); ISBN Логачевської ч. 2 (№155); медіана парного ряду; рівняння площини (g11m2 l3); координати в просторі (10 vs 11); m4s1 без boss; алгебра/геометрія окремо з 7 кл. (D-008)?; хто рецензент-учитель; ms0 `$3 * x$`.

**Історія (зображення й дати):**
15. Марка 1991: котрий Олександр Івахненко (facts №308); «Наші вимоги» 1990 — оригінал чи копія; Майдан 22.11.2004 з монументом — de minimis чи свобода панорами; Gnatoush CC BY-NC vs CC BY 2.0.
16. Геткант/Ґеткант; Андрусівське перемир'я (№117); Львів 1356 vs EoU «before 1352»; Молотовська обл. (№247); Open Kurbas (№235); Скоропадський Кассель/Spa (№229); Сандармох (№176); українізація 1923 (№173); «Червона калина» (№162); гончарний круг (№128); g11s1 без hyp/poll.
17. **На рішення (пропозиції):** docs/IMAGES.md — шаблон Attribution; спільні зображення між розділами чи копії; style/common.md — «10–11 кл. до 12 екранів», «Уяви…» в чутливих boss, banned «Як справжній», «Ти — <роль>», eyebrow «Здогадка» лише з `hyp`, math `signed`/`show`/π+`tol`, hist «традиційно датують…»; s4 h45 sentenceWords.

## Обмеження середовища
- Commons — `thumb.wikimedia.org`, ≤ 2 агенти з фото, власна підтека scratchpad. Недоступні: chtyvo, dlibra.kul.pl, archives.gov.ua, web.archive.org, bigenc.ru, zakon.rada (503), lib.imzo, do.mlt.gov.ua (522). Playwright — `/opt/pw-browsers/chromium`; test-answer-ui regression — без паралельних браузерних прогонів. Паралельні агенти: ніколи `git stash/checkout/reset`; злиття worktree — лише файли задачі.

## Як продовжити
«Прочитай AGENTS.md і handoff; закоміть memory/ і tasks/todo/engine-p3-1101.md; візьми engine-p3-1101 (claim) → інженер, потім незалежний рецензент D-026 і верифікатор для g11m6; паралельно — зібрати відповіді людини на "Відкриті питання" 1–10».
