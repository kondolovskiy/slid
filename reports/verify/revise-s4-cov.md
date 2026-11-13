# Верифікація: revise-hist-s4-cov (content/hist/g5-s4.js — s4l6, s4l7, h45; h44 eyebrow)

Верифікатор: content-verifier (свіжий контекст), 2026-11-12. Скіл content-verify. Автор — writer-hist-s4.

## 0. Git diff (від 5365537 до робочого дерева)
- h41, h42, h43 — без змін. h44 — змінено лише `eyebrow` «Урок 4» → «Урок 6» (status verified лишено). ✅
- h45: колишні Питання 4–5 стали 6–7; `correct`/`items`/`shuffle`/тексти незмінні, додано лише `pre`. Нові Питання 4 (pre s4l6) і 5 (pre s4l7). ✅
- dgh5 посилається лише на h41 (`cur-s4`) — `validate --diag dgh5`: 0/0. ✅
- `credits` — +3 рядки (NASA, Боплан, Мечников). id не перейменовано. ✅

## 1. Факти

| Твердження | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Apollo 11: 1969 р. перша висадка на Місяць; на поверхню сідав лише модуль «Орел» (20.07.1969), Коллінз лишався в «Колумбії» | https://en.wikipedia.org/wiki/Apollo_11 ; https://www.nasa.gov/mission/apollo-11/ (EVA 20.07.1969, «Eagle», Коллінз у командному модулі) | ✅ |
| Фото «Орла» в посадковій конфігурації з «Колумбії», 20.07.1969, NASA, PD | https://commons.wikimedia.org/wiki/File:Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg (PD-USGov) | ✅; «фото Майкла Коллінза» в `credits` — висновок (Коллінз був сам у «Колумбії», en.wiki Apollo 11), Commons пише лише «NASA» — допустимо |
| Кондратюк нар. 1897 р. в Полтаві | https://www.esu.com.ua/pdf/file/4787.pdf (ЕСУ: 09(21).06.1897, Полтава); https://www.encyclopediaofukraine.com/pages%5CK%5CO%5CKondratiukYurii.htm (21.06.1897, Poltava) | ✅ |
| 1919 р. описав політ на Місяць («траса Кондратюка») | ЕСУ: рукопис «Тем, кто будет читать, чтобы строить» — у Києві з червня 1918 до вересня 1919; EoU: «His 1919 work… calculated optimal flight trajectories»; https://www.radiosvoboda.org/a/965539.html («трасу до Місяця, яку згодом у США назвуть "трасою Кондратюка"») | ✅ (узгоджено з h43 «на початку XX ст.») |
| Ідеї Кондратюка використано в «Аполлоні» | ЕСУ («застосовано у проєкті "Аполлон"», Дж. Губолт); EoU («NASA … used many of his concepts in the Apollo moon flights»); https://en.wikipedia.org/wiki/Yuri_Kondratyuk | ✅ |
| Чайка: 18–20 м, 50–60 козаків, очерет при бортах (від куль і затоплення), два стерна на носі й кормі | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CH%5CChaikaIT.htm ; https://en.wikipedia.org/wiki/Chaika_(boat) | ✅ |
| Чайки — XVI–XVII ст. | en.wiki Chaika («since the 16th century»); Боплан, 1660 (Commons, нижче) — XVII ст. | ✅ |
| Чайка мала й щоглу з вітрилом (для fbText multi) | EoU ChaikaIT («equipped with a mast and sail»); en.wiki Chaika | ✅ — додано в fbText, щоб не вчити хибного «без вітрила» |
| Малюнок Боплана: «Description d'Vkranie», Руан 1660, JCB Library / Internet Archive, PD | https://commons.wikimedia.org/wiki/File:Description_d%27Vkranie_(page_74_crop_Cossack_boat).jpg ; сам файл переглянуто: весла-стерна на обох кінцях, розріз угорі ліворуч зі снопами, шкала «pieds», щогли й гармат немає | ✅ |
| Боплан — картограф, карта в розділі 2 | facts/hist №20 (verified) | ✅ |
| Прокопович, Чернігівщина, рамковий вулик 1814 р. | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CR%5CProkopovychPetro.htm (Митченки біля Батурина; «invented the frame hive in 1814»; «first in the world to obtain clear comb honey without destroying bees»); https://en.wikipedia.org/wiki/Petro_Prokopovych | ✅ |
| «один із перших у світі» (вулик) | EoU — без «першого» щодо вулика; en.wiki — «world's first frame hive»; ru.ruwiki «Рамка для улья» — «одна з перших рамок… 1814» (https://ru.ruwiki.ru/wiki/%D0%A0%D0%B0%D0%BC%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D1%83%D0%BB%D1%8C%D1%8F, у пошуку) | ✅ обережне формулювання коректне; «перший» писати не можна |
| «Щедрик» Леонтовича вперше — Київ, 1916 р. | https://en.wikipedia.org/wiki/Shchedryk_(song) (29.12.1916, Купецьке зібрання); https://www.ukrainer.net/en-shchedryk-carol-of-the-bells-history/ (29.12.1916); https://zaxid.net/oleksandr_koshits_yak_dirigent_zrobiv_shhedrik_gollivudskim_hitom_istoriya_n1627351 (1916, хор Київ. ун-ту) | ✅ (лише рік — правильно, день різниться) |
| 1922 р. хор Кошиця в Нью-Йорку | en.wiki Shchedryk (Carnegie Hall, 5.10.1922); https://ui.org.ua/en/sectors-en/carol-of-the-bells-at-carnegie-hall/ (5.10.1922) | ✅ |
| Вільговський — англ. слова «Carol of the Bells», 1930-ті | en.wiki Shchedryk (1936); ukrainer.net («appeared only in 1936») | ✅ |
| Ян Кум: 1976, «на Київщині» (Київ / виріс у Фастові), у 16 років — США, WhatsApp 2009 з Б. Ектоном | https://en.wikipedia.org/wiki/Jan_Koum ; https://phys.org/news/2014-02-whatsapp-founders-swap-struggle-billionaire.html | ✅ |
| Сікорський: Київ 1889, США, VS-300 | facts/hist №34 (verified), h43 | ✅ |
| Анна — королева Франції 1051 | h43 (verified) | ✅ |
| Юрій Дрогобич (Котермак): Дрогобич, Краків → Болонья, ректор 1481–1482, книжка 1483 у Римі латиною, «Georgii Drohobich de Russia» | https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CD%5CR%5CDrohobychYurii.htm ; https://en.wikipedia.org/wiki/Yuriy_Drohobych ; facts/world №47; g7s6 | ✅ (додано «(прізвище — Котермак)» для узгодження з g7s6, w8s2) |
| Мечников: 1845, Харківщина; Париж з 1888; Нобелівська 1908 за праці про імунітет | https://embryo.asu.edu/handle/10776/8018 ; https://en.wikipedia.org/wiki/%C3%89lie_Metchnikoff | ✅ |
| ~~«Свої досліди він почав в Одесі»~~ | ASU: перша праця — студентом Харківського ун-ту (1863), перше відкриття — Гіссен 1865; en.wiki: Одеса 1867–68, 1870–1882 | ❌ → виправлено: «навчався в Харкові, а потім багато років працював в Одесі» (і опція / fbText / fbBad завдання е5) |
| Миклухо-Маклай: 1846, Новгородська губ. («на півночі Росії»), козацьке коріння, з 1871 — Нова Гвінея, рівність рас | https://www.encyclopediaofukraine.com/pages%5CM%5CI%5CMiklukho6MaklaiNikolai.htm («of Ukrainian descent», 1871–86, «unity and equality of all races»); https://en.wikipedia.org/wiki/Nicholas_Miklouho-Maclay (батько зі Стародуба, нащадок запорожця) | ✅ подано без імперської оптики: «мав козацьке коріння», не «українець з Києва»; папуаси — як люди, рівні іншим |
| Лифар: нар. у Києві; з 1930 р. багато років керував балетом Паризької опери | https://en.wikipedia.org/wiki/Serge_Lifar (1930–1944, 1947–1958); https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CL%5CI%5CLifarSerge.htm (Пирогово, нині Київ; після 1929 — Паризька опера; «25 years at the Paris Opera», 1955) | ✅ |
| Возняк — `note` без оцінювання, формулювання TQ-082 | https://itc.ua/ua/articles/stiv-voznyak-ukrayinets-yakyj-podaruvav-svitovi-personalnyj-komp-yuter/ (Київ 2017: «Ні, я українець») | ✅ (як вимагає задача) |
| Фото Мечникова 1913, Agence Rol, Gallica btv1b6926750k, PD-anon-70-EU + PD-1923 | https://commons.wikimedia.org/wiki/File:Professeur_Metchnikoff,_portrait_du_scientifique_dans_un_laboratoire_de_recherche.jpg ; credits = g9s4 | ✅ |

## 2. Відповіді й опора (D-019)

Розв'язано самостійно до звірки з `correct` — збіг у всіх.

| Завдання | Моя відповідь | Звідки | Вердикт |
|---|---|---|---|
| s4l6 е2 (hyp) | — | здогадка перед теорією | ✅ |
| s4l6 е4 паливо | «легкий модуль — менше палива» (1) | міркування з е3 + body (вага) | ✅ (hint пом'якшено — не видає відповідь) |
| s4l6 е6 multi Боплан | [0, 2] | сам малюнок (переглянуто) + е5 | ✅ |
| s4l6 е8 order | чайки → 1814 → 1916 → 1919 → 1969 | роки в пунктах; е1, е3, е5, е7 | ✅ |
| s4l6 е9 Кум/Сікорський | 2 | body е9 + h43 е1 | ✅ |
| s4l6 е10 «Carol of the Bells» | 0 | body е10 + е7 | ✅ (hint змінено: старий відкидав обидва хибні варіанти) |
| s4l7 е3 number | 430 | 1051 (h43, у body), 1481 (е2) | ✅ |
| s4l7 е5 Мечников | 0 | е4 (після правки — «навчався в Харкові… працював в Одесі») | ✅ |
| s4l7 е7 sort | Дрогобич—Італія; Мечников, Лифар, Анна—Франція; Маклай—Нова Гвінея | е2, е4, е6, h43 | ✅ |
| s4l7 е8 Маклай | 1 | е6 | ✅ (hint змінено: старий відкидав обидва хибні) |
| h45 П1–П3, П6–П7 | 0 / sort / 2 / 1 / order | h41–h44 (незмінні) | ✅ |
| h45 П4 | 1 | s4l6 е7, е10 | ✅ |
| h45 П5 | 0 | s4l7 е4 | ✅ |

Позиції правильних: s4l6 — 1, [0,2], 2, 0; s4l7 — 0, 1; h45 — 0, 2, 1, 0, 1. ✅. Нові терміни: s4l6 — орбіта, чайка, рамковий вулик; s4l7 — ректор, Нобелівська премія, імунітет (≤ 3 на урок). ✅. D-027: s4l6 — 2 img, s4l7 — 1 img. ✅

## 3. Правки (зроблені, мінімальні)
1. ❌→✅ s4l7 е4: «Свої досліди він почав в Одесі» → «Він навчався в Харкові, а потім багато років працював в Одесі»; е5 опція 0, fbBad, fbText — узгоджено.
2. s4l6 е6 fbText: + «хоч у поході чайка могла йти й під вітрилом» (EoU, en.wiki — щогла й вітрило були).
3. Підказки, що відкидали всі хибні варіанти: s4l6 е10, s4l7 е8; s4l6 е4 — менш прямий.
4. s4l7 е2: «(прізвище — Котермак)» — узгодження з g7s6 / w8s2.
5. Милозвучність: «разом із Браяном», «Прокопович із Чернігівщини», «навчався та працював»; h45 (старі тексти, без зміни відповідей): «Усі українці», «із собою», «Біблія та Києво-Могилянська», «розділу та всього».
6. Статус s4l6, s4l7, h45 → verified; коментар-шапка файлу.

## 4. Прогони
- `node tools/validate.mjs --section s4` — 0 помилок, 4 попередження (старі h41–h44: maxReadWords, gradedShare).
- `node tools/validate.mjs --diag dgh5` — 0/0.
- `node tools/euphony.mjs --subject hist --section s4` — у s4l6, s4l7, h45 відхилень немає (лишилися старі h41–h44 і цитата «з Русі»).
- `node tools/stats.mjs --subject hist` — s4l6, s4l7, h45 без прапорців.
- `playtest.py` — не запущено: у контейнері немає Python-модуля playwright (лише CI).

## 5. Рекомендації (не блокують)
- g9s4 l6 (не мій файл): «Його головні досліди почалися… в Одесі» — та сама неточність (перша праця — Харків 1863, перше відкриття — Гіссен 1865; фагоцитоз — Мессіна 1882). Пропозиція в inbox.
- Спорт (бажане, Підручник §15) — не додано; не блокує.

## Вердикт
- s4l6 «Від чайки до Місяця» — **verified** (після правок).
- s4l7 «Чотири шляхи у світ» — **verified** (після виправлення ❌ про Мечникова).
- h45 «Посол України» — **verified**.
- h44 — verified (лише eyebrow). h41–h43 — без змін.
