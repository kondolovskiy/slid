---
id: tools-engine-p3-1105
type: engine
subject: math
status: todo
claimed_by:
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
