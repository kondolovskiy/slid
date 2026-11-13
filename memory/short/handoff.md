# Handoff — стан проєкту

_Оновлено: 2026-11-12, куратор пам'яті (сесія 2026-11-12-1: пакет 10–12.11 «повне покриття», D-053; журнал sessions/2026-11-12-1.md). Попередні: 2026-11-10-1.md, 2026-11-05-7.md._

**Пам'ятка (D-046, D-049):** змістове питання — вирішуй сам за МОН → програмою → правописом/словниками D-041 → підручником, з цитатою й URL у звіті; сумнів лишився — найкращий варіант «тимчасово, до відповіді вчителя» і питання в `docs/teacher-questions.md` наступним номером (зараз останній **TQ-112**). Роботу це не блокує. Технічні питання — людині (нижче).

**Пам'ятка оркестратору:** `npm run check` + build і коміт згенерованих файлів — після злиття кожного worktree і кожного змістового коміту (12.11 знову: пули pu5s5+ не публікувались, доки build не закомічено). Агентам — `git add <свої файли>`, не `-A`: WIP-коміти 10–12.11 багато разів захоплювали чужі правки (pitfalls.md «Додано 2026-11-12»).

## Стан
- **D-053 виконано (10–12.11, усе verified / рев'ю D-026 прийнято; жодного `approved`):**
  - **ukr:** 5–8 кл. як раніше + **9 кл. (u9s1–u9s12), 10 кл. (u10s1–u10s11), 11 кл. (u11s1–u11s11)**; тести рівня dgu5–dgu11; **79 пулів** pu5s1…pu11s* (engine-pool-lang; «Пишемо самі…» без пулу).
  - **Історія України 5–11:** нові g5s7, g6s9, g6s10, g7s6, g8s6, g9s6 + revise/refine «-cov» майже всіх розділів; **g11s1 → 10 кл.** (файл g10-g11s1.js; тест 11 кл. — новий id **dgh11b**); `for` dgh5/dgh6 оновлено.
  - **Всесвітня 7–11:** нові w7s6, w8s6, w9s6, **w10s1–w10s7, w11s1–w11s6** + 10 revise і 12 refine 7–9 кл.; тести dgw7–dgw11.
  - **Інженерне:** engine-sort-order (рушій перемішує рядки sort — ручне чергування більше не потрібне), engine-gaps-wrap (gaps на 360–375 px), euphony: й після йотованого, з перед шиплячим, `--help`, пули, pipe.
  - QA: qa-ukr-pool, qa-diag-ukr-world-new — ✅.
- Фінальний build і `npm run check` — EXIT 0; validate 0 помилок, 75 попереджень (reports/validate.json 12.11).
- Довга пам'ять: decisions до **D-053**; facts/hist + hist-2 + **hist-3** №1–712; facts/world + **world-2** №1–337; facts/ukr + ukr-8 + **ukr-9** №1–581; facts/math №1–254.

## У роботі (`node tools/claim.mjs list doing`)
- **research-math-diag-duration** — пілот, чекає учнів (і для тестів ukr/hist/world). У review нічого.

## Що далі (tasks/todo, 10)
**Можна брати (нові, 12.11):**
1. **style-hist-1112** — style-sync історії: позиції правильних «0» у старих verified (g11s3, g11s4, g11s5); милозвучність у старих уроках; нумерація eyebrow «Розділ N» у 5–6 кл. після g5s7/g6s9/g6s10; `pre` у фіналі g6s6; профіль sentenceWords 10–11; «2026 р.» у задачах g5s7.
2. **style-world-1112** — style-sync world: позиції (w7s6 1→2→0, w9s2), милозвучність w8s1/w9s4, w9s3l4 12 екранів, w8s6l3 е4.
3. **curate-plan-sync-1112** — plan.js: `requires` ukr 8–11 як у файлах; **порядок нових тем hist** (g8s2, g8s3, g8s5, g9s2, g9s3, g9s5, g10s2, g10s4); world w10s7 requires, w7s3 «та»; навички `civ`/`eco` для world 10–11. Лише куратор, не під час пакета.
4. **fix-ukr-lessons-from-pools** — 11 дрібних правок уроків ukr за верифікацією пулів (u5s4l2, u5s8l3, u6s1l1, u6s10l3, u6s11l4, шапка u7s7, u8s1l5, u8s9l1 «змішаний», u9s1l4, u11s7l1; pu10s10 a17).
5. **tools-content-checks-p3** — латиниця в кириличному слові, позиції choice/multi у validate, `sentences()` після «р.», euphony `--section` без `--subject`, buildPlan `next`, міжпредметний `link` (D-026).
6. **engine-diag-duration-estimate** — оцінка тривалості тесту рівня з вагою типу (`diagMins` дає ≈ 9–10 хв, реально 12–15); **після пілоту** research-math-diag-duration. У задачі — перелік **наступних редакцій тестів лише новими id**: dgh5 (cur g5s7), dgh6 (g6s9/g6s10), dgh7, dgh8 (pre g7s6), dgh9 (cur g9s6), dgh10b (cur g11s1: пакт, депортація, радянізація, Волинь), нова редакція dgh11b (Будапештський меморандум, нові уроки 11 кл.), dgw7–dgw9 (cur w7s6/w8s6/w9s6), dgw10 №13/18/27 до 5 тверджень.

**Без змін, заблоковано рішенням людини:** engine-diag-retest-from-pool (3 питання), engine-ai-a1 (власність `server/content/`), design-privacy-gdpr (сигнал людини), design-teacher-dashboard (бекенд).

**Пропозиції (задач не створено):** images-world-w9s5 — PD-фото Палацу Гарньє / модерну для w9s5l5; фото, взяті мініатюрою 330 px через Commons 429 (images-hist-g10s1, -g10s4, revise-hist-g9s2-cov, -g10s5-cov — у нотатках задач), замінити більшими, коли Commons відповідатиме; G4 графа, server P3, `LEARN.level` «Почнемо з основ» — як у 10.11.

## Відкриті питання
**Змістові — `docs/teacher-questions.md` (D-049):** 112 питань; нові **TQ-087…TQ-112** (12.11): ukr 087–104 (найважливіше — **TQ-093** «Відтоді минули чотири роки» як помилка в u11s5, dgu11, pu11s5; **TQ-087** підручник 10–11 кл.; TQ-092 «проект»), історія/world 105–112 (Сковорода 1751/1753, Шептицькі, Макух, Герніка, Франклін, «Будинок з химерами»). **TQ-085 (Волинь, g11s1l9 verified) — обов'язково показати вчителю.** Людина перешле вчителям.

**CONFLICT (не вирішено):** пунктуація «УП 2019» на slovnyk.ua (§ 155–168) vs facts/ukr №69 — як 10.11 (підтримано знахідкою verifier-pu7s7: § 154–168 є; офіційний PDF досі недоступний). Інші розбіжності джерел — розділ CONFLICT у facts/hist-3 і facts/ukr-9 (тимчасові рішення авторів).

**Технічні — людині:**
1. **dgh11b:** хто завершив dgh11, зберігає план і кроки, але втрачає підсумок тесту в «Твій план» і відкриття тренування pre-темами «ok»; перерваний dgh11 починається спочатку. Прийнятно? (кількість — у журналі подій).
2. **Дублікати зображень між img/hist і img/world** (helsinki-1975.jpg, yalta-1945.jpg, zlatnyky.jpg ×3) — лишати копії чи спільна тека.
3. **Ліцензії фото:** g10s1l5 табір Гмюнд 1916 (PD лише як «простий знімок» § 72(3) UrhG + публікація 1916 у США); w10s4 l2 діти 1923 (на Commons лише PD-US, без тега країни — PD-anon-70-EU?); w10s6 Кайсері 1928 (статус у США) і дата декрету Урібуру («Plus Ultra»); s1 родина Франків 1904 (публікація до 1956?). Open Kurbas (CC BY-NC-ND) — як раніше.
4. Номер постанови ВР від 14.04.2022 про геноцид (g11s5) і український текст закону 712-XII (g11s3) — звірити, коли zakon.rada доступний.
5. Як 10.11: engine-diag-retest-from-pool (3 питання), engine-ai-a1 (`server/content/`), design-privacy-gdpr, G4 графа (5 питань), required checks `build`/`browser`, синхронізація (`SLID_API`, `SLID_GOOGLE_CLIENT_ID`, `CORS_ORIGINS`, `LOG_HASH_KEY`), `personalization-qa --strict` у check.

## Обмеження середовища
- **Python-модуля playwright локально немає** — плейтест і test-answer-ui ганяє CI (job `browser`; full — Run workflow); браузер `/opt/pw-browsers/chromium`; браузерні тести по одному.
- У промптах виконавцям: ніколи `git stash/reset/checkout --`; `git add` лише своїх файлів; diff задачі верифікатору рахувати від коміту до claim (`git log -- <файл>`), не від назви коміту.
- `npm run check`, `validate`, `stats`, `euphony` перезаписують спільні reports/ — звіти комітить лише оркестратор.
- Недоступні: zakon.rada (Конституція — PDF ccu.gov.ua), mon.gov.ua, pravopys.net, tsdial, chtyvo, britannica / worldhistory / npg.si.edu / bigenc (403), Met — сторінки 429 (брати API collectionapi.metmuseum.org); Commons — ≤ 2 фото-агенти (429), thumb.wikimedia.org з паузою 20 с.

## Як продовжити
«Прочитай AGENTS.md і handoff. Можна паралельно: style-hist-1112, style-world-1112, fix-ukr-lessons-from-pools, tools-content-checks-p3 (curate-plan-sync-1112 — окремо, не під час пакета; engine-diag-duration-estimate — після пілоту). Людині — TQ-087…TQ-112 (TQ-085, TQ-093 — першими) і технічні питання 1–4.»
