---
claimed_from: todo
claimed_at: 2026-11-12T09:52:44.152Z
id: revise-hist-g8s4-cov
type: revise-section
subject: hist
grade: 8
section: g8s4
status: review
claimed_by: writer-hist-g8s4
created: 2026-11-10
depends_on: []
---
# g8s4: нові уроки g8s4l6–g8s4l8 (Слобожанщина і Сірко; Самойлович; Палій)

Підстава: reports/research/coverage-research-hist-coverage-g7-9.md (задача curate-hist-coverage); модельна програма «Історія України. 7–9 кл.» (Гісем та ін., наказ МОН № 1449 від 27.11.2023) — https://znayshov.com/FR/45155/Mod_navch_pr_ist_Ukr_7_9_Gisem.pdf.

Звіт §4.2 B5, таблиця §3: 8.4.4–8.4.7, 8.4.11.

Що зробити в `content/hist/g8-g8s4.js`:
1. **Новий урок `g8s4l6`** «Слобожанщина і Сірко»: заселення Слобідської України, слобідські полки; Іван Сірко.
2. **Новий урок `g8s4l7`** «Самойлович: Чигирин, згін, Вічний мир»: Многогрішний, Самойлович, Чигиринські походи, Великий згін, Вічний мир 1686 р. і підпорядкування Київської митрополії Московському патріархату. g8s4l4 уже згадує Вічний мир одним реченням — узгодь, не суперечи.
3. **Новий урок `g8s4l8`** «Палій і кінець правобережного козацтва»: війна Священної ліги, Карловицький конгрес 1699 р., Паліївщина, ліквідація козацького устрою на Правобережжі (1711–1714 рр.).
4. Усі дати — ≥ 2 джерела (у реєстрі їх немає). Тест рівня dgh8 `g8-andrus`, dgh9 `andr` — без змін.

## Загальне
- Скіл `content-author` (і `hist-images` для нових зображень). Еталон будови — сусідні verified-уроки цього ж розділу; пріоритет у звіті має розділ «Незалежна верифікація».
- **Нові уроки** — у масиві `lessons` перед фіналом `g8s4l5` (як g8s1l6, g8s5l8), у хронологічному місці серед уроків розділу; eyebrow / нумерація «Урок N» — за позицією. 5–10 екранів, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 hint, `learned` — лише з екранів уроку.
- **Фінал `g8s4l5`:** по одному завданню на кожен новий урок (до 7 завдань; якщо в розділі ≥ 9 уроків — одне завдання може охопити два суміжні уроки, D-048 п. 1, TQ-045); `boss` питає лише те, що було в розділі.
- Чесні завдання D-019; **D-027 — ≥ 1 справжнє `img` у кожному новому уроці** (відкрита ліцензія, `cap`, `credits`; на Вікісховищі одночасно ≤ 2 агенти). Правило 11: наявні id не перейменовувати, нові — лише ті, що в задачі.
- Змінені й нові уроки → `status: "draft"`; незмінені verified-уроки не чіпай.
- Факти: спершу memory/long/facts/hist.md, hist-2.md (і facts/world.md для спільних тем); новий факт — ≥ 2 надійні джерела з URL у нотатках; позначене ⚠ — звір сам, не вдалося — не оцінюй. Рядки FACT — у memory/short/inbox.md.
- `weeks` розділу не змінюй (наявне значення діє).
- Лише `content/hist/g8-g8s4.js`, `img/hist/g8s4/` і ця задача. Build не запускай. Тимчасові файли — `<scratchpad>/<task-id>/`.
- Готово: `node tools/validate.mjs --section g8s4` — 0 помилок; `node tools/stats.mjs --subject hist` — без прапорців для змінених уроків; нотатки з переліком уроків і URL; `node tools/claim.mjs move <task-id> review` → незалежна перевірка `content-verifier` (факти, D-019, D-027).

## Нотатки агента

### writer-hist-g8s4 · 2026-11-12

**Файл:** `content/hist/g8-g8s4.js`; фото — `img/hist/g8s4/` (3 нові). Порядок у масиві: l1–l4, **l6, l7, l8**, l5 (фінал); eyebrow «Урок 5/6/7».
**Уроки (draft):**
- **g8s4l6 «Край вільних поселень»** (Слобожанщина і Сірко) — 10 екр., 5 оцінюваних + hyp; choice, sort×2, number.
- **g8s4l7 «Чигирин у вогні»** (Многогрішний, Самойлович, Чигиринські походи, Великий згін, Вічний мир 1686, митрополія) — 10 екр., 5 оцінюваних + hyp; choice×3, multi, order.
- **g8s4l8 «Полковник із Фастова»** (Священна ліга, Карловицький конгрес 1699, Паліївщина, 1711–1714) — 10 екр., 5 оцінюваних (без hyp: проблема в intro, відповідь — фінальний multi); choice×2, order, number, multi.
- **g8s4l5 (фінал) → draft:** 7 завдань = 7 тем (D-048 п. 1): прибрано дубль l1 «Гадяч» і загальний sort «Факт чи тлумачення» (верифіковані, але перевищували б ліміт 7); додано з5 (l6, choice), з6 (l7, choice), з7 (l8, order); усім завданням — `pre` на урок теми; у multi «Андрусів» переставлено варіанти (було [0,1,2] → [1,2,3], зміст і ключ ті самі); intro: «Чигирин, кінець 1660-х» → «Початок XVIII ст.» (сцена має бути не раніше подій 1714 р.), «шість» → «сім»; outro/learned оновлено.
- l1–l4 не змінено (dgh8 `g8-andrus`, dgh9 `andr` спираються на l4 — без змін). g8s4l4 «Пізніше його підтвердив Вічний мир 1686 р.» узгоджено з l7.

**Перевірки:** `validate --section g8s4` — 0 помилок, 0 попереджень; `--diag dgh8`, `--diag dgh9` — 0/0; `euphony --section g8s4` — у l5–l8 знахідок немає (старі в l1–l4 не чіпав); `stats`: l6, l7 — без прапорців; l8 — «readWordsPerScreen нетипово для сім'ї (z=2.4)» (35 слів/екран, у межах профілю 8–45; нові уроки щільніші за старі 8-екранні); фінал — «typeVariety z=2» (4 типи, у межах [2;6]).

**Зображення (D-027):**
- l6 → `kharkiv-pokrova.jpg` — Serhii Bobok, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Intercession_Cathedral,_Kharkiv_2019_-_01.jpg (будова 1689 р. — суспільне надбання). 1689: uk.wiki https://uk.wikipedia.org/wiki/Покровський_собор_(Харків) ; EoU Kharkiv https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CH%5CKharkiv.htm («Cathedral of the Holy Protectress (1689)»). «Три бані в ряд» — видно на фото.
- l7 → `chyhyryn-1678.jpg` — Й. А. Телотт (1655–1734), з кн. Rycaut/Sagredo «Die Neu-eröffnete Ottomannische Pforte», т. 2, Аугсбург 1701 (Commons посилається на digitale-sammlungen.de bsb10871180), PD (автор † 1734), https://commons.wikimedia.org/wiki/File:Ottomans_attacking_Chyhyryn,_1678.jpg . Дрібні фігурки у вибухах — без натуралізму. ⚠ дату книги (1701) і авторство взято з Commons; верифікатору — звірити з BSB.
- l8 → `karlowitz-1699.jpg` — невідомий гравер, кін. XVII — поч. XVIII ст., Угорський нац. музей, PD (анонім > 300 р.), https://commons.wikimedia.org/wiki/File:Negotiation_of_the_peace_of_Karlowitz.jpg ; напис «La Salle des Conferences» видно на гравюрі.

**Факти й джерела (нових у реєстрі не було):**
- Слобожанщина: переселення з 1630-х, надто 1650-х; хвиля 1670–1680-х з Правобережжя; 5 полків (Харківський, Сумський, Охтирський, Острогозький, Ізюмський — 1685); старшину обирали на радах, затверджувала Москва; не під гетьманом, а під воєводами; ліквідація 1765; Харків — середина 1650-х (EoU «1654/5», uk.wiki 1654) — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CL%5CSlobidskaUkraine.htm ; uk.wiki https://uk.wikipedia.org/wiki/Слобідська_Україна . Слобода = поселення з пільгами/довго без податків: uk.wiki (там само) + Танцюра, Пересада, Вісник ХНУ № 1088, 2013 https://periodicals.karazin.ua/uahistory/article/download/1597/1340 («Козацькі слободи користувалися певними вольностями»; 5 полків — заслін від татар; 1765).
- Сірко: кошовий з 1662 (ЕІУ), знову з 1673 до смерті 1680; кількість обрань — EoU «eight times», uk.wiki «дванадцять» → у тексті «рахують по-різному»; заслання до Тобольська 1672, повернення 1673 — ЕІУ http://resource.history.org.ua/cgi-bin/eiu/history.exe?&I21DBN=EIU&P21DBN=EIU&S21STN=1&S21REF=10&S21FMT=eiu_all&C21COM=S&S21CNR=20&S21P01=0&S21P02=0&S21P03=TRN=&S21COLORTERMS=0&S21STR=Sirko_I + uk.wiki https://uk.wikipedia.org/wiki/Іван_Сірко ; походи на Крим і османські фортеці — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CI%5CSirkoIvan.htm + uk.wiki; Мерефа vs Мурафа — EoU (Merefa), uk.wiki (Яворницький — Мерефа; Мицик, Борисенко — Мурафа). Харківське полковництво Сірка (uk.wiki 1664–1665, 1667) іншим джерелом не підтверджено — НЕ використано. Лист султанові — не використано (легенда, дати в uk.wiki суперечать).
- Многогрішний 1669–1672, арешт 1672, Сибір — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CM%5CN%5CMnohohrishnyDemian.htm ; uk.wiki https://uk.wikipedia.org/wiki/Дем'ян_Многогрішний (uk.wiki дає 1668–1672 як наказний з 1668; повний гетьман — 1669 за EoU).
- Самойлович 1672–1687; 1674 — гетьман обох берегів, фактично з 1676 — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CA%5CSamoilovychIvan.htm ; uk.wiki https://uk.wikipedia.org/wiki/Іван_Самойлович .
- Чигиринські походи: 1677 — облога, османи відступили; 1678 — Чигирин узято, руїни — uk.wiki https://uk.wikipedia.org/wiki/Чигиринські_походи ; EoU Chyhyryn («sacked by the Turks in 1678») https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CH%5CChyhyryn.htm ; EoU Samoilovych («Chyhyryn campaigns, 1677–8»); uk.wiki Сірко (відступ 1677).
- Великий згін 1678–1679 — uk.wiki https://uk.wikipedia.org/wiki/Великий_згін ; en.wiki https://en.wikipedia.org/wiki/Great_Expulsion_(Ukraine) ; ArmyInform (Є. Букет) https://armyinform.com.ua/2021/09/17/dvi-deportacziyi-pravoberezhnyh-ukrayincziv/ . ⚠ EoU Samoilovych датує масове переселення 1680 р.; uk.wiki Самойлович — 1679. У тексті «1678–1679 рр.».
- Вічний мир 1686: підтвердив Андрусів; Лівобережжя, Київ, Запоріжжя — Москві; 146 тис. руб. за Київ; Правобережжя — Речі Посполитій — EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CE%5CT%5CEternalPeaceof1686.htm (16 May) ; uk.wiki https://uk.wikipedia.org/wiki/Вічний_мир_1686 (6 May — ст. ст.). Точну дату в уроці не подаю.
- Митрополія: 1685 Гедеона висвятив Московський патріарх; 1686 — акт Константинопольського патріарха Діонісія IV — uk.wiki https://uk.wikipedia.org/wiki/Приєднання_Київської_митрополії_до_Московського_патріархату ; EoU https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CY%5CKyivmetropoly.htm (рік обрання Гедеона там «1679» — розбіжність; у тексті рік обрання не подано).
- Священна ліга 1684 (Австрія, Річ Посполита, Венеція), Москва — 1686: en.wiki https://en.wikipedia.org/wiki/Treaty_of_Karlowitz ; EoU Eternal Peace; uk.wiki Вічний мир. Карловицький мир 26.01.1699, Річ Посполита повернула Поділля — en.wiki (там само) + EoU Right-Bank https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CR%5CI%5CRight6BankUkraine.htm .
- Полки на Правобережжі 1685 (Собеський), Палій — фастівський полковник з 1685; сейм 1699 — розпуск полків — EoU Right-Bank; EoU Palii https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CA%5CPaliiSemen.htm ; uk.wiki https://uk.wikipedia.org/wiki/Семен_Палій .
- Паліївщина: 1702 (EoU Palii, uk.wiki); Самусь, Палій; здобуття Білої Церкви 1702 — uk.wiki https://uk.wikipedia.org/wiki/Повстання_Палія ; en.wiki https://en.wikipedia.org/wiki/Paliy_uprising ; 1704 Мазепа на Правобережжі, арешт Палія — uk.wiki ×2 + en.wiki (липень 1704); EoU — без року; заслання до Сибіру (EoU, uk.wiki); повернення після розриву Мазепи з царем (EoU; uk.wiki — указ 28.11.1708), Полтава 1709, смерть 1710 (EoU, uk.wiki). ⚠ EoU Right-Bank дає повстання «1700–3» — у тексті лише рік початку 1702 (EoU Palii + uk.wiki).
- 1711–1714: Прут 1711 → вихід з Правобережжя; переселення 1711–1712, понад 100 тис. — https://deportation.org.ua/peter-i-s-forced-resettlement-of-cossack-regiments-1711-1712/ + ArmyInform («від 100 до 200 тисяч»); 1714 — край повністю під Річчю Посполитою — ArmyInform; Britannica (лише фрагмент у пошуку, сайт 403); EoU Right-Bank («Cossacks were then completely suppressed»). ⚠ 1714 підтверджено слабше — звірити верифікатору.

**Опора завдань (D-019):** l6 е4 ← l3–l4 + е3; l6 е6 ← е5 + l2 е3 (Чорна рада); l6 е7 ← е5 (числа на екрані); l6 е9 ← е8; l6 е10 ← е5 (міркування). l7 е4 ← е3 + l3 (1665–1676); l7 е6 ← сам екран (src); l7 е7 ← е5 (міркування); l7 е9, е10 ← е3, е5, е8. l8 е3 ← е2 + l7 е5; l8 е5 ← гравюра; l8 е7 ← е2, е4, е6; l8 е9 ← е8 (числа в умові); l8 е10 ← е4, е6, е8. Фінал з5 ← l6 е5; з6 ← l7 е8; з7 ← l8 е4, е6, е8.
**Нових термінів:** l6 — слобода, Слобідська Україна, слобідські полки (3); l7 — Чигиринські походи, Великий згін, Вічний мир, митрополія, Московський патріархат (5); l8 — Священна ліга, Карловицький конгрес, Паліївщина (3).
**Сумнівне:** weeks не змінено (тепер 8 уроків на [21, 26]); plan.js уже має три нові теми.
