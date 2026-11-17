# Рев'ю D-026: engine-img-zoom-1117

Рецензент: reviewer-engine-w2-1117 (не автор). Перевірено: злиття 7c507a2 (коміти 73f59e9, 66acc76; `git diff 7c507a2^1 7c507a2 -- app/ index.html docs/ tools/test-ui.mjs`) і стан на HEAD 4d0005c (зміни в app.js після злиття зону `fig()`/`zoomOpen` не зачіпають).

## Що перевірено читанням
- `app/app.js:1102` `fig()` — `img` у `<button class="zoombtn" data-zoom>`; alt лишився `attr(s.cap)` (test-answer-ui.py:1209 читає `#stage figure img` alt — збігається). CSS `figure img`, `figure.tall img`, `figure.fit img` спрацьовують і для img у кнопці.
- `zoomOpen` (app/app.js:1115–1157): dialog з aria-modal; inert на всіх не-inert дітях `body`, після закриття знімається лише з них (уже inert `#sheetHost` не «розморожується»); Esc у capture-фазі на document зі stopPropagation — обробник Esc застосунку (app.js:1652, bubble на document) не спрацьовує; глобальних клавіатурних скорочень у рушії немає, тож інші клавіші під час перегляду нічого не роблять у плеєрі. Повторне відкриття заблоковано (`$("#zoomv")`). Офлайн: `im.currentSrc||im.src` — без нових запитів, sw.js не змінено.
- Щипок: масштаб навколо середини пальців + зсув за рухом середини; після підняття пальця `last` перераховується — без стрибка. Зсув обмежено розміром `#zView`. Прокрутка фону: плеєр уже ставить `body{overflow:hidden}` (перевірено зондом), `.zview{touch-action:none}`.

## Знахідки
Блокувальних немає.
- **P3-1. Фокус губиться, коли «+»/«−» вимикається на межі** (app/app.js:1124 `disabled=` у `apply`). Зонд: фокус на `#zIn`, Enter ×5 → масштаб 6, `#zIn` disabled, `document.activeElement` — `body`. Esc і Tab (обробник бере індекс −1 → перший елемент) далі працюють, але читач екрана губить позицію. Очікувано: перевести фокус на протилежну кнопку або `#zView`.
- **P3-2. Посилання в `cap` недосяжні з клавіатури в перегляді** (app/app.js:1140: список Tab — лише кнопки й `#zView`). Зараз жоден `cap` у content/ не має `<a` (grep), тож лише на майбутнє.
- **P3-3. Нові діти `body`, додані під час перегляду, не inert** (зонд: доданий `button` — `inert=false`). У рушії такого зараз немає (конфеті `canvas` — після уроку), тож теоретично.
- **P3-4. Не перевірено/не покрито тестом:** подвійний дотик (`dblclick` на сенсорі — у Safari iOS може не надходити), колесо, обертання екрана (зсув перераховується лише на наступній дії), справжні жести iOS Safari (pinch сторінки при `touch-action:none`, підтримка `inert` з iOS 15.5 — на старіших фон фокусований, але Tab-пастка тримає).
- P3-5 (поза кодом): роздільність ballot-1991.jpg 500 px, pale-map-1905.jpg 726 px — збільшення їх не врятує; рядок для images-* автор лишив у нотатках задачі, оркестратору перенести в inbox.

## Виконані перевірки
- `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` на HEAD — `test-ui: 217 ok, 0 ✗`, rc 0 (сценарії 18–19 включно).
- Власний зонд (Playwright, 360 px, сенсор; scratchpad reviewer-w2/probe.mjs, прибрано): max-zoom/disabled-фокус, цикл Tab (`zOut,zClose,zView,…`), клавіші під час перегляду не натискають варіанти choice, фокус після «Закрити» — на `.zoombtn`, `body overflow:hidden`, без pageerror.
- Не запускалось: `python3 tools/test-answer-ui.py --suite regression` і playtest (немає Python playwright) — CI job browser; логіку селекторів перевірено читанням.

## Вердикт
**Прийнято.** P3 — потім.
