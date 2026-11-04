---
claimed_from: todo
claimed_at: 2026-11-04T20:48:45.676Z
id: tests-lang-gaps-order
type: tests
subject: ukr
status: review
claimed_by: eng-tools-lang
created: 2026-11-04
---
# Тест: рушій справді перемішує варіанти gaps

З рев'ю engine-lang-gaps-shuffle (reports/review/engine-lang-gaps-shuffle.md, P2-1, P3-1): playtest ловить відсутність виклику `gapOrder` у `langHtml` лише на пропусках, де «—» не останній у тексті (u5s3, u6s1); test-answer-ui порядок не перевіряє.

## Що зробити
1. Regression-сценарій у tools/test-answer-ui.py: `add_init_script("Math.random=()=>0")` (або інша детермінована підміна) і перевірка, що кнопки пропуску з ≥ 2 звичайними варіантами стоять не в порядку тексту.
2. playtest: запам'ятати порядок кнопок перед `lang_wrong` і порівняти після (порядок не стрибає між спробами).
3. Мутація: без `gapOrder` у app.js тест має падати на будь-якому розділі.

Незалежне рев'ю — D-026.

## Нотатки агента

## Нотатки виконавця (eng-tools-lang, 2026-11-04)
1. **test-answer-ui.py** — новий regression-сценарій `gaps_order_checks` (викликається в `--suite regression` після `hyp_checks`). Фікстура, не зміст: `Math.random = () => 0` (init script), екрани першого уроку math підміняються одним gaps `с{*е|и}ло, {*а|б|—} і {*о|а|у}`, відкриття — `__slidStart`. Очікувано [[1,0],[1,0,2],[1,2,0]] (без gapOrder — порядок тексту). Потім `Math.random = 0.999` (тотожна перестановка) → хибна спроба (dock bad) → порядок той самий → правильна (ok) → той самий. Так ловиться і перемальовування екрана між спробами.
2. **playtest.py**: перед `lang_wrong` на gaps запам'ятовує порядок кнопок усіх пропусків (`GAP_ORDER`) і після хибної спроби порівнює: «порядок кнопок змінився після хибної спроби».
3. **Мутації.** У цьому середовищі немає Python-модуля playwright (лише Node: /opt/node-tools/node_modules/playwright; ставити заборонено), тож Python-сценарії в браузері я НЕ запускав. Перевірив Node-двійником того самого сценарію (той самий JS фікстури й ті самі кроки; scratchpad `eng-tools-lang/gaps-order.mjs`, не комічу):
   - worktree: green `[[1,0],[1,0,2],[1,2,0]]`;
   - мутант «без gapOrder у langHtml» (`p.opts.map((o,k)=>[o,k])`): FAIL «порядок [[0,1],[0,1,2],[0,1,2]]» — падає незалежно від змісту;
   - мутант «перемішати заново в гілці хибної спроби»: FAIL «порядок після хибної [[0,1],[0,1,2],[0,1,2]]».
   `python3 -m py_compile tools/test-answer-ui.py tools/playtest.py` — ок. **Рецензенту:** прогнати `python3 tools/test-answer-ui.py --suite regression` і `python3 tools/playtest.py --section u6s1` у середовищі з Python Playwright.
