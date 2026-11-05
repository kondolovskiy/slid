---
claimed_from: todo
claimed_at: 2026-11-05T19:15:11.675Z
id: tools-engine-p3-1105
type: engine
subject: math
status: done
claimed_by: eng-p3-1105
created: 2026-11-05
depends_on: []
---
# Збірка P3 пакета 05.11-6: test-ui, list/ordered, diff-answers, SW

Незблокувальні знахідки рев'ю D-026 сесії 7 (усі задачі done). Скіл `engine-change`; кожен пункт — малий, можна брати частинами (тоді познач у нотатках, що зроблено). Незалежне рев'ю D-026 обов'язкове.

## tools-ci-test-ui (reports/review/tools-ci-test-ui.md)
1. `tools/test-ui.mjs:27` — хибний `PLAYWRIGHT_MODULE` мовчки замінюється NODE_PATH; має бути явна помилка (rc ≠ 0) з повідомленням.
2. `AGENTS.md:16` «без npm-залежностей» неточно для test-ui (ставить playwright у `$RUNNER_TEMP/pw-node` у CI) — уточнити формулювання (правка AGENTS.md — теж через рев'ю).
3. Перший справжній прогін кроку test-ui у job `browser` на PR — перевірити й записати результат у нотатки.

## engine-list-p3 (reports/review/engine-list-p3.md)
4. Тест: `ordered` + «±» не в першому елементі — `K("list", [5, "±3"], { ordered: true })` → помилка validatePool.
5. `ordered` / `multiset` / `scale` перевіряє лише validatePool — додати ту саму перевірку для екранів `answer` у розділах і тестах рівня (validate.mjs).

## diff-answers (reports/review/fix-math-pools-ordered-scale.md)
6. P3-1: класифікація категорії «ordered …» спирається на `NEW.checkAns` — додати незалежну перевірку перестановки (мультимножини рівні, порядок інший).
7. P3-2: тест-мутант на категорію (без неї `test-diff-answers` має давати непояснені).
8. P3-3: `docs/PERSONALIZATION_QA.md:40` — описати категорії diff-answers («uh», «ister», «ordered»).
9. (з сесії 5) категорія keyVariant не закріплена тестом — разом із п. 7.

## SW (reports/review/engine-sw-version-skew.md, відомі межі)
10. P3-4: поки оновлення чекає (дитина в уроці), стара сторінка працює з новим SW — `slid:version` у журналі подій уже нова, зміст старий. Варіант: версія сторінки з власного скрипту, а не від SW.
11. P3-6: мутант глобального `caches.match` замість `c.match` у `fromCache` тестами не ловиться — тест, де старий кеш ще не видалено.
12. P3-7: перший візит / без SW — index.html і app.js з `max-age=600` незалежно; оцінити query-версії скриптів (`?v=`) від build.mjs або лишити запобіжник рушія (задокументувати рішення).

## Нотатки

### eng-p3-1105, 2026-11-05 — зроблено всі 12 пунктів
1. `tools/test-ui.mjs`: явний `PLAYWRIGHT_MODULE`, що не завантажується, — rc 2 з повідомленням (не підміняється NODE_PATH). Перевірено: `PLAYWRIGHT_MODULE=/nope node tools/test-ui.mjs` → rc 2.
2. AGENTS.md:16 — уточнено: без npm-залежностей у `package.json`; виняток — test-ui (Node `playwright` поза ним).
3. Перший справжній прогін test-ui у job `browser`: PR kondolovskiy/slid#19, run 42086271826, job 127452101279 — «test-ui: Chromium 153.0.8010.12 (власний Playwright, ~/.cache/ms-playwright)», **59 ok, 0 ✗**, крок ≈ 30 с (npm install playwright@1.63.0 — 2 с). Push-прогін main 42092001520 на момент перевірки ще йшов.
4. test-learn: `K("list", [5, "±3"], { ordered: true })` → validatePool відхиляє. Мутант «лише answer[0]» тепер убито (2883 перевірки, 1 з помилками).
5. Знахідка рев'ю частково застаріла: validate уже проганяє answer уроків і тестів рівня через `learn.validatePool` (`answerFieldIssues`). Закріплено тестами test-validate: урок — ordered чисто, ordered+«±» не в першому, ordered+multiset, multiset поза list, scale чисто, scale з дробом; тест рівня — scale чисто, scale з ключем 1, ordered і multiset поза list.
6. diff-answers, категорія «ordered»: перестановка перевіряється незалежно (`isPermutation`: мультимножини елементів рівні за рядком після нормалізації або раціональним значенням, по місцях — ні; без `NEW.checkAns`). На живому змісті `--old 699700e^ --grades 4-11` — ті самі 3 записи, 0 непояснених.
7. test-diff-answers п. 7: фікстура (урок з двома list ordered), «старий» learn.js ігнорує ordered → 2 пояснені, 0 непояснених, rc 0; мутант без категорії → 2 непояснені, rc 1; ширша умова («будь-який запис тієї ж довжини») кількості не змінює.
8. docs/PERSONALIZATION_QA.md — групи категорій diff-answers (п.5–7, g10/g11, p3, vec, ister, ister-p3, ordered, uh) і які закріплені мутантами.
9. keyVariant: мутант `keyVariant → true` **виживає і є еквівалентним** — `records()` для sci/pairSet породжує лише варіанти ключа (пробіли, «−», «.»), тож інших записів, які новий рушій зараховує, у категорію не потрапляє. Вбити можна лише розширивши records() (напр. переставлені пари pairSet) — це змінить класифікацію на живому змісті; не робив.
10. P3-4: `SLID_EVIDENCE.warmVersion()` — сторінка під керуванням SW питає VERSION одразу; на `controllerchange` версія скидається лише для сторінки, завантаженої без контролера. Запит версії — один за раз (`vp`), відповідь після `resetVersion` відкидається (`vgen`). Тести: test-evidence 11б (5 перевірок), test-ui: вкладка з «мертвим» IndexedDB — cv = qa-B без запису; посеред уроку з новим SW C — cv = qa-B; після перезавантаження — qa-C. docs/EVIDENCE.md, PUBLISHING.md п. 6.
11. P3-6: test-ui — кеш `slid-zz-old` з файлом, якого немає ні в кеші своєї версії, ні на сервері: fetch → 404 (мутант `caches.match` дає 200 «old»).
12. P3-7: рішення — лишити запобіжник рушія, без `?v=` (сервер ігнорує query, тож застарілий index.html однаково отримає новий рушій; повне закриття — імена файлів з хешем). PUBLISHING.md п. 7.

**Мутанти** (у дереві, відновлено з копій): caches.match → test-ui 1 ✗; controllerchange завжди скидає → test-ui 1 ✗; без виклику warmVersion → test-ui 1 ✗; без vgen → test-evidence 1 ✗; без спільного vp → 3 ✗; ordered «лише [0]» → test-learn 1 ✗; keyVariant → true — виживає (еквівалентний, п. 9).

**Прогони:** `npm run check` rc 0 (test-validate 1353, test-learn 2883, test-evidence 160, test-diff-answers 52 ok, validate 0 помилок / 72 попередження); `node tools/test-ui.mjs` — 63 ok, 0 ✗ (локальний /opt/pw-browsers/chromium). `python3 tools/test-answer-ui.py --suite regression` локально не запускався (Python-модуля playwright немає) — його прожене CI job `browser`; зміна app/evidence.js — лише браузерна обв'язка й ядро версії.

### Рев'ю (reports/review/tools-engine-p3-1105.md): прийнято
P3-1 (EVIDENCE.md: таймаут версії → null до кінця сесії) і P3-4 (PUBLISHING.md п. 7: `?v=` закриває половину випадків) — виправлено в документації наступним комітом. Лишаються відомими (не блокують): P3-2 — мутант «без слухача controllerchange» виживає (перший візит / Shift+F5 тестом не закріплено, так було й раніше); P3-3 — перевірка елементів у isPermutation не закріплена мутантом; P3-5 — гонка claim до виконання evidence.js; P3-6 — перехід зі старого SW: cv старого до перезавантаження.

