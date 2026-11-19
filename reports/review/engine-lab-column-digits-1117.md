# Рев'ю D-026: engine-lab-column-digits-1117

Рецензент: reviewer-engine-1117 (свіжий контекст, реалізацію не писав). Дата: 2026-11-17.

## Що перевірено
- `git diff 916a9b5..40dc2eb -- app/lab.js app/app.js index.html tools/test-lab.mjs tools/test-ui.mjs tools/test-answer-ui.py docs/CONTENT_SCHEMA.md` (коміти c2cb975, 01b7bc8; CSS index.html — 3 рядки поза блоком CONTENT).
- app/lab.js: `digitCells`, `enterDigit`, `focusDigit`, обробники `keydown`/`input` клітинки (рядки 790–825), `handleTargets` з `{}` замість цифрових ручок (не малює нічого, нумерація `data-h` збережена), дотик поруч із клітинкою (847–850), `ready` (874), `digitNext`/`digitSide`/`digitsReady`/`typedDigit` (881–892), кружки позики й знака множення.
- app/app.js: `labReady` (1364), `onChange` і початковий стан «Перевірити», обгортка `window.__slidLab.set` (1324–1327; обгортка — 1326); порядок `setDock` → `bindScreen` у `renderScreen` (1149–1151) — початкове вимкнення не перетирається; `lock()` вимикає й поля клітинок.
- tools/test-answer-ui.py: `lab_wrong_digits`, `player_focus_checks`, `player_a11y_checks` — прочитано (див. нижче).

## Перевірки (мої прогони)
- `node tools/test-lab.mjs` → 205/205; `node tools/test-learn.mjs` → 2943 ok; `node tools/test-validate.mjs` → 1621 ok.
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` на HEAD → 171 ok, 0 ✗.
- Тест ловить баг: test-ui.mjs з HEAD на коді 916a9b5 → сценарій 17 падає (клітинок `.lab-dg` немає).
- Власний зонд (Playwright, Pixel 7, 360 px, фікстура 4572 : 3; скрипт /tmp/claude-0/-home-user/56a151f4-1332-5a90-b4d7-52a84c26d285/scratchpad/reviewer-engine-1117/probe.mjs, поза репозиторієм): дотик + `insertText("1")` → d3 = 1, фокус на d2, «Перевірити» неактивна — як заявлено. Див. P2-1.

## Знахідки
Блокувальних немає.
- **P2-1. Стирання з екранної клавіатури без події keydown не працює.** app/lab.js:809 (обробник `input` клітинки): `c.value` спершу повертається до старого значення (`c.value = state[id] >= 0 ? String(state[id]) : ""`), а потім перевіряється `!/\d/.test(c.value)` — тобто вже відновлене значення, тож гілка «стерти» мертва. Відтворення: заповнена клітинка d3 = 1, у полі `value = ""` + `InputEvent("input", {inputType: "deleteContentBackward"})` → d3 лишається 1. На Android (Gboard) Backspace часто приходить як keydown `Unidentified` (229) — тоді «Backspace — стерти й назад» (п. 2 задачі) не діє; виправити цифру можна лише дотиком і новою цифрою (виділення під час фокусу її замінює), тож дитина не застрягає. Виправлення: перевіряти значення до відновлення (`const raw = c.value; … else if (!/\d/.test(raw)) …`) і додати в сценарій 17 стирання через `input`.
- **P3-1.** Порожня клітинка + Backspace з екранної клавіатури: поле порожнє, події `input` немає → повернення назад працює лише там, де приходить keydown `Backspace`. Обмеження платформи; можна тримати в порожній клітинці невидимий символ-заповнювач.
- **P3-2.** Програмний перехід фокуса між полями на iOS Safari / Android під час набору (клавіатура не має закриватися) перевірено лише в емуляції Chromium; варто глянути на справжньому телефоні в наступному плейтесті.

## test-answer-ui.py (лише читання)
- `lab_wrong_digits`: фокус на `.lab-h[data-h="0"]` — це поле клітинки d0 (SVG-цілей для цифр більше немає); далі `(d_i + 1) % 10` по порядку — автоперехід d0→d1→… для суми/різниці збігається з `digitNext`; кожна цифра хибна → «bad». Кнопка активна після заповнення — відповідає `labReady`.
- `player_a11y_checks`: після помилки фокус на `data-h == 0` (app фокусує перший `.lab-h` у `#stage`, а це поле), далі правильні цифри без Tab з перевіркою `data-h == i+1` і `aria-valuetext` — відповідає коду `digitCells`; після Enter → ok і `.lab-h[tabindex="0"]` = 0 (лок ставить `tabIndex = -1` полям).
- Загальний розв'язувач (рядок 56) і playtest.py (рядок 65) кличуть `__slidLab.set(solution)` — обгортка вмикає «Перевірити»; сценарій 17 це перевіряє.
- Логіка коректна, але сам прогін — лише в CI (job browser).

## Не перевірено
- `python3 tools/test-answer-ui.py --suite regression`, `tools/playtest.py` g4m2/g6m1 (немає Python-модуля playwright) — CI.
- Справжні мобільні пристрої (екранна клавіатура, iOS).

## Вердикт
**прийнято** (P2-1 — бажано окремою дрібною задачею; дитина може виправити цифру дотиком і новою цифрою)
