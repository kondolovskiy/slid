---
id: engine-math-ister-p3
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-05
depends_on: []
---
# Рушій та інструменти: P2/P3 і пропозиції пакета Істера (03–04.11)

Зібрано куратором пам'яті 2026-11-05 зі старого inbox (ENGINE авторів і верифікаторів, P2/P3 прийнятих рев'ю). Скіл `engine-change`; кожна зміна — незалежне рев'ю D-026. Пункти, що змінюють добір сесій або оцінювання дітей, — лише за рішенням (позначено «рішення»).

## Формати відповідей (app/learn.js)
1. **P2-1 (reports/review/engine-answer-formats-ister.md):** `pairSet` не приймає дужки всередині пари (`√(2)`) — виправити до першої вправи pairSet з коренем. P3 там же: «,,» між парами, одна пара без дужок, `10^05`, підказка `ANS_UI.sci` про дужки.
2. `exactRoot` з π: «12» замість «12π» → bad без підказки — краще form «допиши π»; «6 400π» (пробіл у тисячах) → bad (у number «1 950» ok); `ratio` «27/64» → bad без підказки; `unit` «раз»: «у 2 рази» → bad (verifier pg9m8).
3. `expression` з однолітерною великою змінною (`5R`) не приймає `5r` — чи зараховувати регістр-варіант? (рішення; pg8m2 e06 — підказка в умові).
4. «1 : 4» при ключі-дробі 1/4 — у пулі тепер form; **у тесті рівня — BAD, як було: OK чи HALF — рішення людини** (engine-answer-formats-ister).
5. `cbrt`: підказка лише для exactRoot/expression (не list); для ∜ немає текстового запису (P3 engine-cbrt-key).

## Креслення (app/lab.js, plane / chart / numline / solid)
6. **lab `solid` стартує з ракурсу знизу** (видимість граней — знак векторного добутку / напрям погляду); виправити або поле `view: { yaw, pitch }` (dg5 box 5×2×3, pg4m5 d04, креслення g10).
7. **pickSession (рішення):** в уроці з 6 вправами (g8m2l6/l7) бачене доповнення рівня 1 після сортування за lvl стоїть перед першою небаченою — варіант: бачене доповнення ставити після небачених (6 з 619 помилок рівня 1 нечисті, test-hyp).
8. `plane`: поле зсуву підпису точки (`labelDir`) і рисочки рівних відрізків у `segs`.
9. `chart`: горизонтальна / лінійна діаграма (`horizontal: true` / `line: true`) — ms3l3 зроблено через `plane` без осей; підпис лінії середнього налазить на підписи стовпчиків (g11m5l3 е4–е5).
10. `numline`: `ray: true` — лінія від `view[0]` без «хвостика» ліворуч (координатний промінь ms0bl6).

## Інструменти й тести
11. fig-audit (P3 tools-math-fig-audit): figCues пропускає intro («На кресленні двору…» g8m6l3 #1), «на плані», «рис. N»; «за графіком руху» — хибне попередження; figPoints рахує S/H/R/P точками (g11m4l3 #3, l4 #3); «Ф» замість формул у звіті; fig-audit-math.json перезаписується кожним check; хибний збіг «діаграм» (pg6m3 f04, f06–f08).
12. validate: попередження на `[A-Z]_\d` у `label` lab поза `$…$`; choice/multi link-завдання без «?» у title і body (world w9s1 l5, w9s2 l5); euphony — окремий режим для opts/items/gaps-тексту поза `{…}` (verifier-fix-ukr-euphony).
13. P3 make-tasks (reports/review/tools-make-tasks-template.md): make-tasks.mjs:102 `--write-pool` бере ROOT замість `--content`; :27 зайва умова; test-make-tasks.mjs:78 фіксований перелік app/*.js.
14. P3 tools-ister-p3: гілки unlockAll і known (app.js:165) без швидкого тесту (додати в test-ui-ister); `cnt` рахується двічі (app.js:408, learn.js:1671); порядок «Тренування» не описано в PERSONALIZATION.md; назва test-ui-ister — за темою.
15. P3 curate-math-ister-gaps-matrix / v6–v9: test-learn 1145–1152 (lesson поза розділом; виняток «0 вправ» за історичним списком); sources.opened у 10 джерелах Істера vs «PDF не відкривав»; test-hyp §0/§10 прив'язані до живого змісту; coverage.md:5 — «урок без пулу» до pending; preForSection/forEvidence і мінімум levels не перевіряє жоден інструмент; формати на одній вправі (g8m3l6 4/5, g9m6l6/l7 list, g9m8l9, g9m8l11); вимагати формати «в дужках» g7m4l7, g7m4l9, g7m8l5; poolState planned у старих рядках; `personalization-qa --diag` немає в check і CI.
16. P3 refine-math-dg6-pct-rev3: коментар tools/test-learn.mjs ≈ 1116 «п'ять проб» → чотири (6, 16, 20, 24). P2/P3 tests-answer-ui-dg6-rev3: test-answer-ui.py:94/115 засіює лише завдання 0..27 → planted = len(item_revs); guards без пояснення; rev_items за it.rev, не itemRev.
17. P3 engine-lang-p3 (reports/review/engine-lang-p3.md): validate.mjs:344 милозвучність title/why/outro без тесту; playtest.py:101 лічильник хибних спроб завищений; lang.js:197 «тег у слові» на межі блоку; lib.mjs:48,52 випадають «а й у», «α і β»; euphony.mjs:32 тире/дужка як пауза (§ 24 п. 1.2); app.js:817 answerSig без прапорця кириличності. (Частину могли закрити tools-lang-p4 — звірити.)

## Готово, коли
- Кожен узятий пункт — тест, `npm run check` зелений, рев'ю D-026 «прийнято»; пункти з «рішення» — після рішення в decisions.md (D-046 тут не діє — це оцінювання/добір, не зміст).
