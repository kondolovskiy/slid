---
id: engine-eng-build-p3
type: engine
subject: eng
depends_on: [engine-eng-build]
status: todo
claimed_by:
created: 2026-11-19
source: review engine-eng-build
priority: P3
---
# Дрібниці типу build (P3 2–6 з рев'ю engine-eng-build)

Скіл `engine-change`; звіт — reports/review/engine-eng-build.md.

1. Пастки `extra`, що разом дають багатослівну плитку («a» + «lot» при плитці «a lot»), зараховуються без попередження validate.
2. `buildOrder` порівнює точно, плеєр для en — без регістру: з плитками The/the банк зрідка показує порядок, який рушій зарахує.
3. validate не попереджає, коли правильний будь-який порядок плиток.
4. Тести, що не ловлять: прибраний `answerSig` для build (app/app.js:982; однакові плитки в браузері), банк у порядку розмітки замість `buildOrder`, показ лише першого answer замість «… або …», зріз кінцевого знака в `buildOk` для плитки `live?`, повтори індексів у `buildState`.
5. Вердикт `#bline` диктору передається лише зміною `aria-label` (live-регіон зазвичай не оголошує).

Рев'ю D-026 після реалізації.
