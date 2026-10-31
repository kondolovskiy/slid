---
claimed_from: todo
claimed_at: 2026-10-31T20:17:27.365Z
id: tools-hist-image-error
type: engine
subject: hist
status: review
claimed_by: engineer-hist-img
created: 2026-10-30
depends_on: [images-hist-g10s1, images-hist-g10s2, images-hist-g10s3, images-hist-g10s4, images-hist-g10s5, images-hist-g11s1, images-hist-g11s2, images-hist-g11s3, images-hist-g11s4, images-hist-g11s5, images-hist-g6s1, images-hist-g6s3, images-hist-g6s4, images-hist-g7s1, images-hist-g7s2, images-hist-g7s3, images-hist-g7s4, images-hist-g7s5, images-hist-g8s1, images-hist-g8s2, images-hist-g8s3, images-hist-g8s4, images-hist-g8s5, images-hist-g9s1, images-hist-g9s2, images-hist-g9s3, images-hist-g9s4, images-hist-g9s5, images-hist-s1, images-hist-s2, images-hist-s3, images-hist-s4]
---
# Зробити D-027 блокувальним: урок історії без img — помилка validate

Коли всі задачі images-hist-* у done (усі уроки історії мають справжнє зображення й повторно verified): у `tools/validate.mjs` змінити `IMG_REQUIRED.hist` з `"warn"` на `"error"`, оновити docs/IMAGES.md, D-027 (рядок «Контроль»), pitfalls. `node tools/validate.mjs` — 0 помилок по всьому контенту; CI (.github/workflows/pages.yml) зелений. Інженерна задача — незалежне рев’ю (D-026).

## Нотатки виконавця

**2026-10-31 · engineer-hist-img**
- `tools/validate.mjs`: `IMG_REQUIRED.hist` `"warn"` → `"error"` (логіку перевірки не змінено: зараховується лише `img`, svg/fig — ні); коментар оновлено.
- Повний `node tools/validate.mjs`: 0 помилок, 255 попереджень, жодного запису D-027 — усі уроки історії мають `img` (задачі images-hist-* у done).
- Новий `tools/test-validate.mjs` (25 перевірок): копіює tools/, app/, style/, content/subjects/{hist,math}.js у тимчасову теку, кладе фікстурний розділ і запускає справжній `validate.mjs --section` окремим процесом. Випадки: hist без ілюстрації → помилка D-027 і rc 1; hist з img → rc 0; hist лише svg → помилка; hist лише fig → помилка; math без img → без D-027. Також перевіряє, що D-027 ніколи не потрапляє в попередження і що фікстура інакше коректна (нема хибного «зеленого» через інші помилки).
- Мутаційна перевірка тесту: `"warn"` → 9/25 провалів; `IMG_REQUIRED = {}` → 6/25; зарахування svg/fig як зображення → 4/25.
- Тест додано в CI (`.github/workflows/pages.yml`, після test-personalization-qa), у `npm run check` і в перелік команд AGENTS.md §2.
- docs/IMAGES.md: «validate попереджає» → «помилка validate, не пройде CI» + посилання на тест.
- `sw.js` перегенеровано build (на базовій гілці був застарілий: бракувало img/hist/g11s3… з останніх images-задач) — закомічено, інакше крок CI «Згенеровані файли закомічені» впав би.
- D-027 «Контроль» і pitfalls — не мої файли: запис DECISION в memory/short/inbox.md для куратора.
- Прогін: build ✓, test-math 17/17, test-lab 69/69, test-learn 1292 ✓, test-personalization-qa 96 ✓, test-validate 25/25, validate --quiet 0 помилок; `git diff --exit-code -- index.html sw.js content/manifest.json` після коміту — чисто.
- Потребує незалежного рев'ю (D-026 / AGENTS.md §3.10).
