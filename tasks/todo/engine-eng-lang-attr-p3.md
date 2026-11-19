---
id: engine-eng-lang-attr-p3
type: engine
subject: eng
depends_on: [engine-eng-lang-attr]
status: todo
claimed_by:
created: 2026-11-19
source: review engine-eng-lang-attr
priority: P3
---
# Позначка мови eng поза плеєром і прогалини тестів (P3 з рев'ю engine-eng-lang-attr)

Скіл `engine-change`; звіт рев'ю — reports/review/engine-eng-lang-attr.md; нотатки — tasks/done/engine-eng-lang-attr.md.

1. Поза плеєром (головна, сторінка предмета, план, «Тренування») назви уроків і розділів eng — без `lang="en"` (обмеження автора).
2. Підсумок тесту рівня: `stepRow` (app/app.js:425), `baseRow` (:428), `baseBlock` (:441) — назви уроків і тем без `inL`.
3. Українські `aria-label` усередині змісту eng («Відповідь», «Пропуск N») диктор читає англійським голосом — `aria-labelledby` на прихований `span lang="uk"` або інше рішення.
4. Тести, що тримають наявний правильний код (мутанти, що вижили): M3 `ukHtml` без `run.diag || run.practice`; M5 `preNote` без `inL`; M7/M8 підсумок тренування без `inL`; M9 `inUi` обгортає завжди — регресія «без targetLang» у test-ui лише на одному стані (додати тест рівня й тренування); V1 — фікстура validate для `uk` у пулі й тесті рівня.

Рев'ю D-026 після реалізації.
