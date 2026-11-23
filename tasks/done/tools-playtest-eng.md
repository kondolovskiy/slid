---
id: tools-playtest-eng
type: tools
subject: eng
depends_on: []
status: done
claimed_by: orchestrator
created: 2026-11-23
source: CI PR #25 (job browser, playtest.py)
---
# playtest.py: перевірки stress зі складами і match з картинками

## Проблема (CI PR #25, run 44746392579, job browser)
Плейтест розділів eng упав на двох перевірках `lang_screen_ok` у tools/playtest.py; регресія рушія й test-ui (442 ok) зелені.
1. `stress` зі складами (`"doc|tor"`, engine-eng-lang-core): рушій показує слово суцільно («doctor»), а перевірка очікувала `w.replace("+","")` = «doc|tor» → ~170 хибних помилок по всіх уроках eng.
2. `match` з картинками (e5s4, e5s5, e6s1): перевірка читала `img.complete && naturalWidth > 0` одразу після рендеру; SVG ще вантажились → «не завантажилась». Локально (Chromium, Node playwright): `complete` false одразу, після onload — true, naturalWidth 240.

## Зміна
tools/playtest.py: (1) очікуване слово stress — без «+» і «|»; (2) перед перевіркою картинок match — `wait_for_function` (усі `#mright img` complete, timeout 5 s; таймаут не валить — далі звичайна перевірка покаже незавантажену картинку).

## Готово, коли
- [ ] CI job browser зелений на PR #25.
- [ ] Незалежне рев'ю D-026: reports/review/tools-playtest-eng.md з вердиктом.
