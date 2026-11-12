---
claimed_from: todo
claimed_at: 2026-11-12T14:43:13.823Z
id: refine-hist-g6s8-cov
type: refine-section
subject: hist
grade: 6
section: g6s8
status: review
claimed_by: writer-hist-g6s8
created: 2026-11-10
depends_on: [fix-hist-weeks-cov]
---
# g6s8, урок g6s8-l4: побут римлян (житло, одяг, їжа)

Підстава: reports/research/coverage-research-hist-coverage-g5-6.md (задача curate-hist-coverage); програма «Досліджуємо історію і суспільство. 5–6 кл.» (Васильків, Димій, Шеремета; наказ МОН № 795 від 12.07.2021) — https://ippo.if.ua/predmety/istoriya/media/files/DYS-5-6-klasy-Vasylkyv.pdf.

Звіт §4.3 (бажане, прийнято — 1 екран), таблиця §2: 6 кл. розд. 2, одиниця № 34.

Що зробити в `content/hist/g6-g6s8.js` (нових уроків немає, фінал не змінюється):
1. **`g6s8-l4`**: екран «Будинок і інсула; тога; що їли римляни» (info + за можливості коротке завдання з опорою на екран). Форум, терми, Колізей уже є — не повторюй.
2. `g6s8-l4` → `draft`.

## Загальне
- Скіл `content-author` (і `hist-images` для нових зображень). Еталон будови — сусідні verified-уроки цього ж розділу; пріоритет у звіті має розділ «Незалежна верифікація».
- **Нові уроки** — у масиві `lessons` перед фіналом `g6s8-l7` (як g8s1l6, g8s5l8), у хронологічному місці серед уроків розділу; eyebrow / нумерація «Урок N» — за позицією. 5–10 екранів, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 hint, `learned` — лише з екранів уроку.
- **Фінал `g6s8-l7`:** по одному завданню на кожен новий урок (до 7 завдань; якщо в розділі ≥ 9 уроків — одне завдання може охопити два суміжні уроки, D-048 п. 1, TQ-045); `boss` питає лише те, що було в розділі.
- Чесні завдання D-019; **D-027 — ≥ 1 справжнє `img` у кожному новому уроці** (відкрита ліцензія, `cap`, `credits`; на Вікісховищі одночасно ≤ 2 агенти). Правило 11: наявні id не перейменовувати, нові — лише ті, що в задачі.
- Змінені й нові уроки → `status: "draft"`; незмінені verified-уроки не чіпай.
- Факти: спершу memory/long/facts/hist.md, hist-2.md (і facts/world.md для спільних тем); новий факт — ≥ 2 надійні джерела з URL у нотатках; позначене ⚠ — звір сам, не вдалося — не оцінюй. Рядки FACT — у memory/short/inbox.md.
- `weeks` розділу міняє задача fix-hist-weeks-cov (вона — у depends_on); сам не змінюй.
- Лише `content/hist/g6-g6s8.js`, `img/hist/g6s8/` і ця задача. Build не запускай. Тимчасові файли — `<scratchpad>/<task-id>/`.
- Готово: `node tools/validate.mjs --section g6s8` — 0 помилок; `node tools/stats.mjs --subject hist` — без прапорців для змінених уроків; нотатки з переліком уроків і URL; `node tools/claim.mjs move <task-id> review` → незалежна перевірка `content-verifier` (факти, D-019, D-027).

## Нотатки агента

**writer-hist-g6s8, 2026-11-12.** Файл `content/hist/g6-g6s8.js`; новий файл `img/hist/g6s8/ostia-insula.jpg`. Нових уроків і id немає; фінал g6s8-l7 не змінено.

Змінено лише **g6s8-l4** (→ `draft`), тепер 10 екранів (6 оцінюваних, 2 hint):
- **е5** (info «Площа, де вирішували справи») — додано одне речення: «Під тогою носили <b>туніку</b> — просту сорочку.» Наявний текст не змінено.
- **е9 (новий)** choice «Хто живе під дахом?» (`sk: civ`, img Остія, `tall: true`): у body — будинок із двориком у заможних; більшість жителів Риму — в **інсулах**; унизу крамниці, угорі найдешевше житло найбідніших; кухні мали не всі → готова їжа в харчевнях; каша, хліб, горох, овочі; м'ясо — розкіш. Завдання на застосування: ремісник Луцій під самим дахом — що найімовірніше правда? Відповідь (2) виводиться з body в 2 кроки (угорі — найбідніші → без кухні → харчевня); хибні: «заможний, бо найвище» (сучасна інтуїція), «сам варить м'ясо у власній кухні». Hint відкидає лише перший. Позиції правильних у l4: 2, 0, 0, 1, **2**.
- `outro.text` + речення про інсули; `learned` + «Порівнювати житло й їжу заможних і бідних римлян».
- Нові терміни: інсула, туніка (2 ≤ 3). Тога вже була (е5).
- Узгодження: g6s10 (verified) інсул, побуту й їжі римлян не має; форум, терми, Колізей не повторено. dgh6 спирається на g6s8-l3 — не зачеплено.

Факти (по ≥ 2 відкритих джерела):
- більшість жителів Риму — в інсулах; верхні поверхи найдешевші/найбідніші; унизу крамниці — https://www.romansinfocus.com/sites/www.romansinfocus.com/files/insulae%20transcript.pdf (Warwick: «only the top 3%… domus», «those living at the top… the poorest») ; https://en.wikipedia.org/wiki/Insula_(building) («Insulae housed most of the urban citizen population», «uppermost floors… cheapest», «ground-level floor… tabernae») ; https://romanempiretimes.com/the-insulae-the-apartment-buildings-of-the-ancient-romans/
- кухні мали не всі → харчевні — https://en.wikipedia.org/wiki/Thermopolium («mainly used by those who did not have their own kitchens, often inhabitants of insulae») ; https://www.historyhit.com/how-similar-was-life-in-ancient-rome-to-modern-cities/ . Застереження: en.wiki — великі інсули Остії могли мати кухні нагорі, тому «не всі», а не «ніхто».
- каша, хліб, горох, овочі; м'ясо — розкіш — https://en.wikipedia.org/wiki/Ancient_Roman_cuisine («Butcher's meat was an uncommon luxury»; puls; dried peas) ; https://www.historyhit.com/what-did-the-romans-eat-food-and-drink-in-ancient-times/
- тогу носили поверх туніки; туніка — основний одяг — https://en.wikipedia.org/wiki/Toga ; https://www.historyhit.com/togas-and-tunics-what-did-ancient-romans-wear/
- Зображення: «Ostia Antica-strada01-modified.jpg», iessi (Flickr), CC BY 2.0 — https://commons.wikimedia.org/wiki/File:Ostia_Antica-strada01-modified.jpg ; мініатюра 500 px з thumb.wikimedia.org, 157 КБ; переглянуто: вулиця, цегляні будинки на 2–3 поверхи, арки входів унизу. Опис Commons датує «early 2nd c. AD» — дату в `cap` не беремо (одне джерело). credits доповнено.

Перевірки: validate --section g6s8 — 0/0; --diag dgh6 — 0/0; stats — g6s8-l4 без прапорців (maxReadWords 60 — рівно межа профілю 5–6); euphony — нових відхилень у моїх реченнях немає (у l4 лишилися 3 давні, у verified-екранах). Build не запускав.
Сумнівне для верифікатора: е9 — чи достатньо «Кухні мали не всі» як опори для «купує в харчевні» (міркування: найбідніший + угорі).
