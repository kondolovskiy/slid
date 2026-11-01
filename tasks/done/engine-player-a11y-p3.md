---
claimed_from: todo
claimed_at: 2026-11-01T12:09:26.892Z
id: engine-player-a11y-p3
type: engine
subject: math
status: done
claimed_by: agent-engine-player-a11y-p3
created: 2026-11-01
depends_on: [engine-player-a11y-followup]
---
# P3 з рев'ю engine-player-a11y-followup (reports/review/engine-player-a11y-followup.md)

1. «Мертві» ручки: точка `drag: true` з координатою-виразом (`x: "2+t"`) не рухається ні мишею, ні клавішами, але тепер фокусована як slider (g8m2l1#2, g8m2l2#1, g8m4l1#5, #6). `handleTargets` — пропускати ручки без kx/ky/digit/tap; validate — попередження на `drag` з виразом; зміст — виправити ці 4 екрани (окремо, з верифікатором).
2. `aria-valuetext` числової прямої бере підпис точки («A», «?») замість значення (g4m1l3#2, g4m1l4#4, g4m4l3#5).
3. Тести: клавіатура й tabindex для rotate; ручка без параметрів; PageUp/PageDown/Home/End.

Ручна перевірка людиною (не автоматизується): Android Chrome / iOS Safari (клавіатура, «Готово»), зчитувачі NVDA/JAWS/VoiceOver/TalkBack, Safari macOS Tab на tabindex.

Незалежне рев'ю (D-026).

## Нотатки виконавця
Виконавець: agent-engine-player-a11y-p3 (гілка wt-lab3), 2026-11-01. Одне рев'ю разом із tools-validate-p3b і пунктом validate з engine-answer-kinds-p3.

**1. «Мертві» ручки.** `app/lab.js`: `liveHandle(h, params)` — ручка жива, якщо має digit/tap або kx/ky, що є параметром моделі. `handleTargets` пропускає мертві (data-h живих не зсувається, фокус після перемальовування повертається на ту саму). Роль SVG `group` лише за наявності живої ручки, інакше `img`. Миша поводиться як раніше (найближча ручка в `pointerdown`, у мертвої `set()` → `{}`). `dragIssues(spec)` для validate: точка `drag`, у якої жодна перетягувана координата (з урахуванням `drag: "u"`) не параметр, — **попередження** (модель працює). Рух уздовж однієї осі (`x: "t", y: "2*t"`) — не вада, не позначається (65 таких точок у змісті).
Знайдено на змісті рівно 4 екрани (validate, номери з 1; у рев'ю — з 0):
- `content/math/g8-g8m2.js#g8m2l1 екран 3 (explore)`: D `x: "2+t", y: "4"`;
- `#g8m2l2 екран 2 (explore)`: D `x: "2+t", y: "5"`;
- `content/math/g8-g8m4.js#g8m4l1 екран 6 (explore)`: D `x: "1", y: "1+dx"`;
- `#g8m4l1 екран 7 (lab, оцінюваний)`: D `x: "1", y: "1+dx"`.
Зміст не правив (за дорученням) — потрібна окрема контент-задача з верифікатором: прибрати `drag` у D або параметризувати.

**2. aria-valuetext числової прямої.** Підпис, що сам є числом/часом (`{t|time}`, `{n|0}`), — як є; літера — «A, 3500»; «?» або без підпису — лише значення (з `fmt`/`pi` шкали). Зміст: g4m1l3#3 «A, 3500»/«B, 7200», «?» у g4m1l4, g4m4l3, ms0, ms2, g6m4, g7m1, g8m3, dg6 → число. Зауваження: для «?» значення тепер озвучується; зрячий бачить те саме положення на шкалі, але якщо «?» колись означатиме «приховане значення», це треба вирішити змістом (поки в усіх 18 таких точок (17 в уроках + dg6) видно поділки).

**3. Клавіші й тести.** `handleKey`: Home/End — межі kx (або ky), з урахуванням меж-виразів; PageUp/PageDown — великий крок ky (або kx) = крок · max(2, round(діапазон/крок/5)), для rect `up: false` PageUp тягне кут угору. Цифри стовпчика Home/End/PageUp/PageDown не беруть. Тести: test-lab +20 (мертва ручка, liveHandle, dragIssues позитивні/негативні, valuetext, Home/End/PageUp/PageDown для plane/numline/rect/залежних меж/цифр); test-answer-ui.py — окрема функція `player_a11y_p3_checks` у кінці файлу + один рядок виклику (g8m4l1#6 лише E у Tab і рухається, g8m2l1#2 без цілей і role=img, g4m1l3#2 valuetext, g4m4l1#4 Home/End/PageUp/PageDown без прокрутки, g4m5l4#5 обертання: tabindex 0 і підказка, 4 стрілки обертають, інші клавіші ні, після «ok» tabindex −1 і стрілки не діють). Хелпер `open_screen_only` лишає в копії уроку на сторінці intro + потрібний екран (open_lesson_at не проходить g8m4l1 через екран без `correct`).
docs/CONTENT_SCHEMA.md §8 «Перетягування»: мертва точка і клавіші.

Ручна перевірка людиною (без змін): Android/iOS, NVDA/JAWS/VoiceOver/TalkBack (зокрема чи PageUp/Home доходять до ручок у режимі перегляду), Safari macOS Tab.
