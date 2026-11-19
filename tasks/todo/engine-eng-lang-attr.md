---
id: engine-eng-lang-attr
type: engine
subject: eng
depends_on: [design-eng]
status: todo
claimed_by: 
created: 2026-11-19
source: design-eng
blocked: human
---
> **Заблоковано рішенням людини:** docs/design/english.md §11 — рішення §11 п. 1 (мова екранів). Не брати, доки рішення не записане в memory/long/decisions.md.

# Позначка мови: `targetLang` предмета, `lang="en"` на мовному матеріалі, розмітка англійського фрагмента

## Прочитати
- AGENTS.md, скіл `engine-change`; docs/design/english.md (весь, особливо §2, §5, §10); docs/CONTENT_SCHEMA.md §4, §4.1, §9–10; memory/long/pitfalls-engine.md.

## Що є
`index.html:2` — `lang="uk"` на всю сторінку; жодного `lang` на елементах (аудит 2026-11-19). Екранний диктор читає англійське українською, переноси українські, TTS не знатиме мову.

## Що зробити (docs/design/english.md §2)
1. `SLID.subject({ targetLang: "en" })` — нове поле (registry.js, validate: лише `"en"` поки що).
2. Для предмета з `targetLang` рушій ставить `lang` на: текст `gaps`/`pick`, кнопки `stress`/`split`, поле `word` (і майбутні `build`/`match`/`dialog`). Варіанти `choice`/`multi` — лише з `lang: "en"` на екрані чи `optLang` (рішення задачі; зафіксувати в CONTENT_SCHEMA).
3. Скорочена розмітка англійського фрагмента в українському тексті: `<en>…</en>` → `<span lang="en">…</span>` (рушій при рендері або build — вибрати й обґрунтувати; HTML-санітайзер не має її вирізати).
4. Хелпер `langFragments(html)` у спільному модулі (tools/lib.mjs або app/lang.js), щоб validate/stats/euphony однаково відрізали англійські фрагменти (потрібен engine-eng-validate, -stats, -euphony).

## Не робити
Не змінювати `lang` сторінки й українські предмети.

## Готово, коли
- [ ] Код, тести (`node tools/test-lang.mjs`, `npm run check`), CONTENT_SCHEMA і, де треба, docs/ARCHITECTURE.md оновлено; українські предмети поводяться як раніше (регресія test-answer-ui — у CI, job browser).
- [ ] Незалежне рев'ю D-026: `reports/review/<id>.md` з вердиктом «прийнято»; до того задача в tasks/review.
- [ ] Рядок ENGINE в memory/short/inbox.md.
