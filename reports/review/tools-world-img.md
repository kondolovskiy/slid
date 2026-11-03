# Рев'ю D-026: tools-world-img (validate: D-027 для `world`, D-044 п. 4)

**Перевірено:** коміт `c88c47a` (HEAD гілки `claude/hist-artynov-world`), `git show HEAD -- tools/`: `tools/validate.mjs`, `tools/test-validate.mjs`, `tools/make-tasks.mjs`. Рецензент не писав реалізацію.

## Відповідність задачі
- `tools/validate.mjs:288` — `IMG_REQUIRED = { hist: "error", world: "error" }`; перевірка в `:317` уже параметризована предметом, тож `world` отримує ту саму помилку (і для boss). Відповідає D-044 п. 4 і style/world.md:17.
- `tools/test-validate.mjs:21,47-49,54,78` — копіюється `content/subjects/world.js`; 3 нові випадки (world без img → помилка, з img → ні, boss без img → помилка); теку `world` прибирають на початку кожного випадку й після циклу.
- `tools/make-tasks.mjs:23` — `exemplar.world`; підставляється в шаблон `:58`; назва файлу `g7-w7s1.js` відповідає id `w7s1` у content/world/plan.js і конвенції `g<клас>-<id>.js`.

## Знахідки
P1 — немає. P2 — немає.
- P3-1. Фікстури `world` мають `grade: 5` (`tools/test-validate.mjs:56`), хоча предмет 7–9 кл.; валідатор цього не перевіряє, на результат не впливає. Можна лишити.
- P3-2. Коментар `tools/validate.mjs:287` і AGENTS.md §4 п. 9 кажуть «Для історії» / «Історія» без згадки `world` — документація неточна лише формально (style/world.md і D-044 це покривають). Оновити при нагоді (AGENTS.md — окремою правкою з рев'ю).

## Перевірки (власний прогін)
- `node tools/test-validate.mjs` — 1022/1022.
- `node tools/test-make-tasks.mjs` — 22/22.
- `node tools/validate.mjs --quiet` на робочому дереві — 0 помилок, 265 попереджень (уроків `world` ще немає; `reports/validate.json` після прогону повернуто до версії HEAD).
- Мутанти в копії дерева (scratchpad):
  - `IMG_REQUIRED = { hist: "error" }` → тести падають на «world без img» і «world boss без img» (вбито).
  - `world: "warn"` → падає «D-027 не має бути попередженням» і код виходу (вбито).
  - Без прибирання теки `world` після циклу → 122/1022 падінь у подальших TeX/граф-випадках (прибирання справді потрібне й працює).

## Не перевірено
- `npm run check` повністю (містить build, який під час паралельної роботи запускає лише оркестратор); CI.
- Поведінку на справжніх розділах `world` — їх ще не написано.

## Вердикт
**Прийнято.**
