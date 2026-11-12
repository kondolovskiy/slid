---
claimed_from: todo
claimed_at: 2026-11-12T14:39:10.878Z
id: refine-hist-g7s5-cov
type: refine-section
subject: hist
grade: 7
section: g7s5
status: review
claimed_by: writer-hist-g7s5
created: 2026-11-10
depends_on: [fix-hist-weeks-cov]
---
# g7s5: Кримський ханат — устрій, Бахчисарай, війни з Москвою; Візантія в Криму

Підстава: reports/research/coverage-research-hist-coverage-g7-9.md (задача curate-hist-coverage); модельна програма «Історія України. 7–9 кл.» (Гісем та ін., наказ МОН № 1449 від 27.11.2023) — https://znayshov.com/FR/45155/Mod_navch_pr_ist_Ukr_7_9_Gisem.pdf.

Звіт §4.1 A9, таблиця §3: 7.4.9, 7.6.15. Новий розділ g7s6 (write-hist-g7s6) іде після g7s5, тижні g7s5 → [28, 31].

Що зробити в `content/hist/g7-g7s5.js` (нових уроків немає):
1. **`g7s5l6`** (або g7s5l4 — де логічніше): устрій Кримського ханату (хан, бей, курултай — терміни ≤ 3), Бахчисарай і пам'ятки культури, війни з Москвою; набіги й ясир уже є — не повторюй.
2. Візантійські володіння в Криму XII–XIII ст. (7.4.9) — коротке info в уроці про Крим (Херсонес, Феодоро вже є в g7s5l6 — узгодь).
3. Змінені уроки → `draft`; фінал — лише якщо треба (поясни). Тест рівня dgh8 `crimea` — без змін.

## Загальне
- Скіл `content-author` (і `hist-images` для нових зображень). Еталон будови — сусідні verified-уроки цього ж розділу; пріоритет у звіті має розділ «Незалежна верифікація».
- **Нові уроки** — у масиві `lessons` перед фіналом `g7s5l5` (як g8s1l6, g8s5l8), у хронологічному місці серед уроків розділу; eyebrow / нумерація «Урок N» — за позицією. 5–10 екранів, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 hint, `learned` — лише з екранів уроку.
- **Фінал `g7s5l5`:** по одному завданню на кожен новий урок (до 7 завдань; якщо в розділі ≥ 9 уроків — одне завдання може охопити два суміжні уроки, D-048 п. 1, TQ-045); `boss` питає лише те, що було в розділі.
- Чесні завдання D-019; **D-027 — ≥ 1 справжнє `img` у кожному новому уроці** (відкрита ліцензія, `cap`, `credits`; на Вікісховищі одночасно ≤ 2 агенти). Правило 11: наявні id не перейменовувати, нові — лише ті, що в задачі.
- Змінені й нові уроки → `status: "draft"`; незмінені verified-уроки не чіпай.
- Факти: спершу memory/long/facts/hist.md, hist-2.md (і facts/world.md для спільних тем); новий факт — ≥ 2 надійні джерела з URL у нотатках; позначене ⚠ — звір сам, не вдалося — не оцінюй. Рядки FACT — у memory/short/inbox.md.
- `weeks` розділу міняє задача fix-hist-weeks-cov (вона — у depends_on); сам не змінюй.
- Лише `content/hist/g7-g7s5.js`, `img/hist/g7s5/` і ця задача. Build не запускай. Тимчасові файли — `<scratchpad>/<task-id>/`.
- Готово: `node tools/validate.mjs --section g7s5` — 0 помилок; `node tools/stats.mjs --subject hist` — без прапорців для змінених уроків; нотатки з переліком уроків і URL; `node tools/claim.mjs move <task-id> review` → незалежна перевірка `content-verifier` (факти, D-019, D-027).

## Нотатки агента

### writer-hist-g7s5 · 2026-11-12

**Файл:** `content/hist/g7-g7s5.js` (+ `img/hist/g7s5/khan-palace.jpg`). Нових уроків і id немає; змінено **g7s5l4** і **g7s5l6** → `draft` (по 11 екранів — межа профілю hist 7–9; stats без прапорців, частка завдань 0,55). Наявні тексти, дати, відповіді не змінено — лише додано екрани й по рядку в `learned`. Фінал g7s5l5 не змінено: нових уроків немає (D-048 п. 1 вимагає завдання лише на нові уроки), dgh8 `crimea` — без змін.

**l4 (7.6.15), +3 екрани:**
- екран 6, info «Хто правив разом із ханом» + фото палацу: хан з роду Гераїв, беї (власні землі й загони, обирали хана), курултай (війна, надзвичайні податки; міг підтримати чи відкинути задум хана), Бахчисарай — столиця з 1532 р., «палац-сад»; палац XVI–XVIII ст. Нові терміни: бей, курултай (+ ханство, васал — уже були) — 4 ≤ 5.
- екран 7, choice «Чи міг хан сам почати велику війну?» (correct 1) — застосування: опора — екран 6 (беї мають загони, курултай — податки й війна).
- екран 10, choice «Чи праві ті, хто каже «завжди»?» (correct 2, sk crit) — опора: власне тіло (XVI ст.: Казань і Астрахань, 1571 — Москва згоріла під час походу Девлет Герая, 1572 — поразка біля Молодей) + екран 8 (союз 1480 р.). «Згоріла», а не «спалив»: Громенко — пожежа, ймовірно, від вітру.
- Позиції правильних у l4: 2, 1, 2, 0 (+ hyp, number, order).

**l6 (7.4.9), +1 екран:**
- екран 5, choice «Звідки в горах православне князівство?» (correct 2, sk crit): Херсонес (Корсунь) і гірський південний захід — Візантії у XII ст.; 1204 — хрестоносці в Константинополі; Трапезунд — **як думка «багатьох істориків»** (en.wiki Empire of Trebizond: «some experts believe»); XIII ст. — напади сельджуків і монголів, занепад Херсонеса. Висновок про Феодоро — міркування з екрана 3 (Феодоро в горах на південному заході, православні греки) + тіла; у тілі прямо не сказано. Позиції l6: 2, 1, 0 (+ sort).

**Факти й джерела:**
- Устрій: карачі-беї обирали хана; курултай — найвищий законодавчий орган, рідко, війна / надзвичайні податки, міг затвердити чи відхилити ініціативи хана — Гайворонський, Громенко, Крим.Реалії: https://www.radiosvoboda.org/a/29435986.html ; D. Kołodziejczyk, «Steppe Democracy…», Acta Slavica Iaponica 32 (2013), с. 3 — «election of the khan as well as his most important decisions was subject to acceptance by the noble general assembly known as qurultay… Crimean Khanate»: https://src-h.slav.hokudai.ac.jp/publictn/acta/32/01Kolodziejczyk.pdf ; хан з роду Гераїв — https://en.wikipedia.org/wiki/Crimean_Khanate . Беї — facts/hist-2 №337.
- Бахчисарай — столиця з 1532, палац XVI–XVIII ст. — facts/hist-2 №316; «палац-сад» (bağça + saray) — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CA%5CBakhchysarai.htm («orchard palace»), Український інститут https://ui.org.ua/en/postcard/the-khans-palace/ («palace-garden»); мечеті й медресе — EoU (Велика ханська мечеть 1532, Зинджирли-медресе бл. 1500).
- Війни з Москвою: Казань (1552) і Астрахань (1556) — https://en.wikipedia.org/wiki/Devlet_I_Giray ; Девлет хотів «вирішити справу про Астрахань і Казань» — https://www.radiosvoboda.org/a/krymskyi-pokhiod-na-moskvu-1572-roku-naperedodni/32366025.html ; 1571 — Москва згоріла: https://www.radiosvoboda.org/a/popil-moskvy-krymskyi-pokhid-1571-roku-stolytsia-u-vohni/32345795.html , https://en.wikipedia.org/wiki/Russo-Crimean_Wars , https://suspilne.media/crimea/1033239-cej-den-v-istorii-krimu-3-cervna-krimskij-han-devlet-geraj-spaliv-majze-vsu-moskvu/ ; 1572 — поразка біля Молодей: https://en.wikipedia.org/wiki/Russo-Crimean_Wars , https://en.wikipedia.org/wiki/Crimean_Khanate («catastrophic defeat in the Battle of Molodi»), https://www.radiosvoboda.org/a/krymskyi-pokhid-na-moskvu-1572-roku-kinets-viyny/32399578.html (Громенко — «організований відступ»; тому в тексті лише «закінчився поразкою», без цифр).
- Візантійський Крим: https://en.wikipedia.org/wiki/Cherson_(theme) (1204 → Трапезунд), EoU Crimea https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CR%5CCrimea.htm (візантійський вплив скінчився після 1204; Феодоро — «remnant of the Empire of Trebizond»), ЕІУ «Херсонес Таврійський» https://resource.history.org.ua/cgi-bin/eiu/history.exe?&I21DBN=EIU&P21DBN=EIU&S21STN=1&S21REF=10&S21FMT=eiu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=TRN=&S21COLORTERMS=0&S21STR=Khersones_Tavrijskyj («протягом 13 ст. місто зазнавало нападів сельджуків і монголів»), https://en.wikipedia.org/wiki/Principality_of_Theodoro (перша згадка — поч. XIV ст., православ'я, грецька мова), https://uk.wikipedia.org/wiki/Трапезундська_імперія (Феодоро — «останнє відгалуження … візантійського світу»).

**Зображення:** l4 екран 6 — `img/hist/g7s5/khan-palace.jpg`, «Bakhchisaray Palace, Panorama, 2013.jpg», Fluid70, 15.09.2013, CC BY-SA 3.0 (own work; сторінка файлу), мініатюра 960 px з thumb.wikimedia.org (API Commons — 429). Переглянуто: зовнішній вид палацу з мінаретами; будівлі в `cap` не названо (пастка «свитский корпус»). Дубль із g5s5/g8s5 не брав — інше фото.

**Сумнівне / для верифікатора:**
- Трапезунд після 1204 р. — дискусійно (en.wiki Cherson — так; en.wiki Trebizond — «some experts believe»; en.wiki Theodoro — Крим відпав від Візантії вже наприкінці XII ст.) → подано як думку істориків, не оцінюється. Через це ж «У XII ст.», а не «до 1204 р.».
- EoU «Crimea» пише про Бахчисарай як столицю з другої половини XV ст. — розбіжність з №316 (1532); узято №316.
- Gerai: «Девлет Герая» без «(також Гірей)» — у l4 форма вже пояснена при першій згадці (Хаджі Герай).
