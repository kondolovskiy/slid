---
claimed_from: todo
claimed_at: 2026-11-12T14:47:26.430Z
id: revise-hist-s4-cov
type: revise-section
subject: hist
grade: 5
section: s4
status: done
claimed_by: writer-hist-s4
created: 2026-11-10
depends_on: [fix-hist-weeks-cov]
---
# s4: нові уроки s4l6 «Винаходи українців» і s4l7 «Українці світу»

Підстава: reports/research/coverage-research-hist-coverage-g5-6.md (задача curate-hist-coverage); програма «Досліджуємо історію і суспільство. 5–6 кл.» (Васильків, Димій, Шеремета; наказ МОН № 795 від 12.07.2021) — https://ippo.if.ua/predmety/istoriya/media/files/DYS-5-6-klasy-Vasylkyv.pdf.

Звіт §4.2, таблиця §2: 5 кл. розд. 3, одиниці № 29 (s4l6), № 30 і частково 28 (s4l7). Верифікатор §7.1: обов'язковий результат програми — «наводить приклади відомих українців / винаходів», тож повнота переліку — бажана; якщо урок завеликий, частину постатей подай приміткою без оцінювання.

Що зробити в `content/hist/g5-s4.js`:
1. **Новий урок `s4l6`** «Винаходи українців»: козацька чайка; Петро Прокопович і рамковий вулик (1814 р.); «траса Кондратюка» й «Аполлон»; «Щедрик» Миколи Леонтовича; Ян Кум і WhatsApp. Сікорського вже вчить h43 — лише посилання.
2. **Новий урок `s4l7`** «Українці світу»: Юрій Дрогобич, Ілля Мечников, Микола Миклухо-Маклай, Серж Лифар; спорт (Підручник 5 кл. §15) — бажане, щонайбільше один екран. Анна Ярославна й Соломія Крушельницька вже є в h43 — посилання.
3. **Стів Возняк (TQ-082, тимчасово):** не називати українцем і не оцінювати. Якщо згадуєш — лише приміткою: «програма згадує; енциклопедії пишуть про польське й німецьке походження, а сам Возняк 2017 р. у Києві казав про українське коріння».

Факти (звірено верифікатором, звіт §7.4; inbox 10.11):
- Прокопович (1775–1850), рамковий вулик 1814 р. — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CProkopovychPetro.htm ; https://en.wikipedia.org/wiki/Petro_Prokopovych
- «Щедрик»: в уроці — лише «1916 р.» (день у джерелах різниться: 25.12 ст. ст. / 29.12), Carnegie Hall — «1922 р.» (хор О. Кошиця) — https://en.wikipedia.org/wiki/Shchedryk_(song) ; https://duflu.org.ua/?p=1382
- Ян Кум — нар. 1976 р. у Києві, WhatsApp — 2009 р., 2014 р. Facebook купив його ≈ за 19 млрд дол. — https://en.wikipedia.org/wiki/Jan_Koum ; https://phys.org/news/2014-02-whatsapp-founders-swap-struggle-billionaire.html
- Мечников — Нобелівська премія 1908 р. (з П. Ерліхом, праці про імунітет); з дат народження — лише рік 1845 — https://en.wikipedia.org/wiki/%C3%89lie_Metchnikoff ; https://embryo.asu.edu/handle/10776/8018
- Дрогобич — ректор Болонського університету 1481–1482 рр.; книжка 1483 р. — https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CR%5CDrohobychYurii.htm (⚠ друге джерело — знайди)
- Лифар — лише «народився в Києві»; керував балетом Паризької опери 1930–1944 і 1947–1958 рр. (⚠ звір) — https://en.wikipedia.org/wiki/Serge_Lifar
- Миклухо-Маклай — «мав козацьке коріння» (не «українець з Києва»), нар. 1846 р. у Новгородській губ.; з 1871 р. — Нова Гвінея (⚠ звір)

## Загальне
- Скіл `content-author` (і `hist-images` для нових зображень). Еталон будови — сусідні verified-уроки цього ж розділу; пріоритет у звіті має розділ «Незалежна верифікація».
- **Нові уроки** — у масиві `lessons` перед фіналом `h45` (як g8s1l6, g8s5l8), у хронологічному місці серед уроків розділу; eyebrow / нумерація «Урок N» — за позицією. 5–10 екранів, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 hint, `learned` — лише з екранів уроку.
- **Фінал `h45`:** по одному завданню на кожен новий урок (до 7 завдань; якщо в розділі ≥ 9 уроків — одне завдання може охопити два суміжні уроки, D-048 п. 1, TQ-045); `boss` питає лише те, що було в розділі.
- Чесні завдання D-019; **D-027 — ≥ 1 справжнє `img` у кожному новому уроці** (відкрита ліцензія, `cap`, `credits`; на Вікісховищі одночасно ≤ 2 агенти). Правило 11: наявні id не перейменовувати, нові — лише ті, що в задачі.
- Змінені й нові уроки → `status: "draft"`; незмінені verified-уроки не чіпай.
- Факти: спершу memory/long/facts/hist.md, hist-2.md (і facts/world.md для спільних тем); новий факт — ≥ 2 надійні джерела з URL у нотатках; позначене ⚠ — звір сам, не вдалося — не оцінюй. Рядки FACT — у memory/short/inbox.md.
- `weeks` розділу міняє задача fix-hist-weeks-cov (вона — у depends_on); сам не змінюй.
- Лише `content/hist/g5-s4.js`, `img/hist/s4/` і ця задача. Build не запускай. Тимчасові файли — `<scratchpad>/<task-id>/`.
- Готово: `node tools/validate.mjs --section s4` — 0 помилок; `node tools/stats.mjs --subject hist` — без прапорців для змінених уроків; нотатки з переліком уроків і URL; `node tools/claim.mjs move <task-id> review` → незалежна перевірка `content-verifier` (факти, D-019, D-027).

## Нотатки агента
(writer-hist-s4, 2026-11-12)

**Уроки.** Файл `content/hist/g5-s4.js`; порядок: h41, h42, h43, **s4l6** «Від чайки до Місяця» (10 екранів, 5 оцінюваних + hyp), **s4l7** «Чотири шляхи у світ» (8 екранів, 4 оцінюваних), h44 (змінено лише eyebrow «Урок 4» → «Урок 6», статус verified лишено, як у g9s5 l4), **h45** — draft: + Питання 4 (pre s4l6, «Щедрик»), Питання 5 (pre s4l7, Мечников — Нобелівська), колишні 4–5 → 6–7; `pre` додано всім 7 оцінюваним завданням (h41, h42, h43, s4l6, s4l7, h41, h44). Наявних фактів, дат, відповідей і id не змінено; dgh5 — 0 помилок.

**Зображення (D-027).** s4l6: `img/hist/s4/apollo-eagle-1969.jpg` — NASA, PD-USGov-NASA, https://commons.wikimedia.org/wiki/File:Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg ; `img/hist/s4/chaika-beauplan-1660.jpg` — Боплан, «Description d'Vkranie», Руан 1660, JCB Library/Internet Archive, PD-old-100-expired + PD-US (до 1931), https://commons.wikimedia.org/wiki/File:Description_d%27Vkranie_(page_74_crop_Cossack_boat).jpg . s4l7: повторно використано verified `img/hist/g9s4/mechnikov-lab-1913.jpg` (credits — як у g9s4). Усі три переглянуто; мініатюри — thumb.wikimedia.org. Зображення Дрогобича («Iudicium pronosticon») на Commons не знайдено.

**Факти й джерела.**
- Чайка: 18–20 м, 50–60 козаків, очерет при бортах, два кермові весла — EoU ChaikaIT (https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CH%5CChaikaIT.htm), https://en.wikipedia.org/wiki/Chaika_(boat) (XVI ст.).
- Прокопович, рамковий вулик 1814 р., «один із перших у світі» (EoU — без «першого», en.wiki — «world's first»), бджіл не губили (EoU: «first … to obtain clear comb honey without destroying bees») — EoU ProkopovychPetro; https://en.wikipedia.org/wiki/Petro_Prokopovych
- Кондратюк: нар. 1897 Полтава; праця 1919; «траса Кондратюка»; ідеї в «Аполлоні» — https://en.wikipedia.org/wiki/Yuri_Kondratyuk ; https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CO%5CKondratiukYurii.htm . Apollo 11, «Орел», 20.07.1969 — https://www.nasa.gov/mission/apollo-11/ + сторінка файлу Commons. Узгоджено з h43 («на початку XX ст. розрахував траєкторію»).
- «Щедрик»: 1916 р. Київ; 1922 р. хор Кошиця в Нью-Йорку (Карнегі-хол); англ. слова — П. Вільговський, «у 1930-х рр.» — https://en.wikipedia.org/wiki/Shchedryk_(song) ; https://zaxid.net/oleksandr_koshits_yak_dirigent_zrobiv_shhedrik_gollivudskim_hitom_istoriya_n1627351 ; https://ui.org.ua/en/sectors-en/carol-of-the-bells-at-carnegie-hall/ ; https://www.ukrinform.ua/rubric-culture/3586785-u-kievi-predstavili-unikalni-zapisi-sedrika.html
- Ян Кум: 1976 р., «на Київщині» (Київ / Фастів — джерела різняться), у 16 років до США, WhatsApp 2009 з Б. Ектоном — https://en.wikipedia.org/wiki/Jan_Koum ; https://phys.org/news/2014-02-whatsapp-founders-swap-struggle-billionaire.html . Суму угоди Facebook (≈ 19 млрд) з уроку прибрано (довжина екрана).
- Дрогобич: ректор 1481–1482, книжка 1483 р. в Римі латиною, підпис «з Русі» — facts/world №47, w8s2 (verified); https://en.wikipedia.org/wiki/Yuriy_Drohobych ; EoU DrohobychYurii.
- Мечников: 1845, Харківщина, Одеса, Париж з 1888, Нобелівська 1908 за імунітет — як verified g9s4 l6; https://en.wikipedia.org/wiki/%C3%89lie_Metchnikoff
- Миклухо-Маклай: 1846, Новгородська губ. («на півночі Росії»), козацьке коріння, з 1871 — Нова Гвінея, рівність людей — https://en.wikipedia.org/wiki/Nicholas_Miklouho-Maclay ; https://www.encyclopediaofukraine.com/pages%5CM%5CI%5CMiklukho6MaklaiNikolai.htm ; https://navyhistory.au/?p=39432
- Лифар: нар. у Києві; з 1930 р. багато років керував балетом Паризької опери (роки перерви 1944/1945 різняться — не пишу) — https://en.wikipedia.org/wiki/Serge_Lifar ; https://www.esu.com.ua/pdf/file/55275.pdf
- Возняк (TQ-082): лише `note` на екрані 6 s4l7, не оцінюється, формулювання з задачі.

**Опори завдань (D-019).** s4l6: е4 — міркування (вага → паливо), опора е3; е6 — сам малюнок + е5; е8 — дати з е3, е5, е7 (1969 — е1); е9 — body (Кум) + h43 е1 (Сікорський); е10 — body (Вільговський) + е7. s4l7: е3 — 1051 з h43 е2, 1481 з е2; е5 — е4; е7 — е2, е4, е6, h43 е2 (Анна — Франція); е8 — е6. h45 П4 — s4l6 е7, е10; П5 — s4l7 е4.

**Сумнівне / для верифікатора.** «Один із перших у світі» (вулик) — пом'якшено; «Боплан — картограф, його карта була в розділі 2» (s2 — карта за зйомками Боплана). Спорт (бажане) не додано. Позиції правильних: s4l6 — 1, [0,2], 2, 0; s4l7 — 0, 1; h45 — 0, sort, 2, 1, 0, 1, order.

**Перевірки.** validate --section s4: 0 помилок, 4 попередження (старі h41–h44); validate --diag dgh5: 0/0; euphony --section s4: у нових текстах відхилень немає (лишилися старі h41–h45 і цитата «з Русі»); stats: s4l6, s4l7, h45 — без прапорців. Build не запускав — нові файли img/hist/s4/ потрапять у sw.js після build оркестратора.
