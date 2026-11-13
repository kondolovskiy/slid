# Верифікація: revise-world-w8s3 (w8s3l7 «Шах і падишах», фінал w8s3l6)

Верифікатор: verifier-revise-world-w8s3, 2026-11-12. Скіл content-verify. Перевірено `content/world/g8-w8s3.js` (новий l7, змінений l6), 3 нові зображення `img/world/w8s3/`. l1–l5 не змінені (git diff bbb420a..HEAD: зміни лише в шапці, credits, l7 і l6); w8s3l2 (тема cur dgw8) недоторканий.

## Прогони
- `node tools/validate.mjs --section w8s3` — 0 помилок, 0 попереджень (до й після правок).
- `node tools/validate.mjs --diag dgw8` — 0 / 0.
- `node tools/euphony.mjs --subject world --section w8s3` — у l6 і l7 0 відхилень (27 старих — у verified l1–l5, не чіпав).
- `node tools/stats.mjs --subject world` — l7 без прапорців; l6 typeVariety z=2 (4 типи), як у фіналі w8s2, не блокує.
- `python3 tools/playtest.py --section w8s3` — не запущено: у контейнері немає Python-модуля playwright → прогін у CI (job browser).

## Факти (кожне джерело відкрито в цій сесії)
| Твердження | Джерела | Вердикт |
|---|---|---|
| Сефевіди з 1501 р., титул шах, шиїзм — державна віра; османи — суніти, ворожнеча й через віру | https://en.wikipedia.org/wiki/Safavid_Iran ; https://www.newworldencyclopedia.org/entry/Safavid_Empire | ✅ |
| Аббас I правив «понад 40 років, до 1629 р.» (початок 1587/1588 — розбіжність, в уроці не подано) | https://en.wikipedia.org/wiki/Abbas_the_Great (1.10.1587, † 19.01.1629); https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/abbas-ideg (1588–1629); Britannica 1588–1629 через пошук (сторінка 403) | ✅ (формулювання обходить розбіжність) |
| Сильне (постійне) військо; відвоював в османів частину земель | en.wiki Abbas the Great (війна 1603–1618, Насух-паша 1612); newworldencyclopedia Safavid Empire | ✅ |
| 1598 — столиця до Ісфагана | en.wiki Safavid Iran (Ісфаган 1598–1736); encyclopedia.com (abbas-ideg): «In 1598 he transferred his capital from Kazvin to Isfahan» | ✅ |
| Майдан із мечеттю, палацом і базаром | https://en.wikipedia.org/wiki/Naqsh-e_Jahan_Square (1598–1629; мечеть Шаха, Алі-Капу, брама Кейсарі до базару); https://archive.aramcoworld.com/issue/196201/isfahan.is.half.the.world.htm | ✅ |
| Іранський шовк купували англійці й нідерландці | en.wiki Safavid Iran; newworldencyclopedia (торгівля з англійською й нідерландською Ост-Індськими компаніями: шовк, килими) | ✅ |
| «Ісфаган — половина світу», кажуть досі | AramcoWorld (там само); https://qantara.de/en/photo-essay/isfahan-half-world ; https://uk.wikipedia.org/wiki/Ісфахан («часто називають “Несф-е джаган”») | ✅ |
| 1600 — посольство Аббаса в Празі в Рудольфа II, проти османів; посли їздили ще не раз | https://en.wikipedia.org/wiki/Persian_embassy_to_Europe_(1599%E2%80%931602) (осінь 1600; друга місія 1609–1615 теж у Празі); https://bakuresearchinstitute.org/en/shah-abbas-european-spies-the-great-european-embassy-part-2/ (переговори в Празі, виїзд лютий 1601; мета — проти османів); анотація Rota (De Gruyter) — у пошуку | ✅ |
| Бабур 1526, із Середньої Азії, нащадок Тамерлана й Чингісхана | https://en.wikipedia.org/wiki/Mughal_Empire ; https://www.ebsco.com/research-starters/history/babur ; https://www.encyclopedia.com/history/asia-and-africa/south-asian-history/mogul | ✅ (Бабур прийшов з Кабула, родом з Фергани — «із Середньої Азії» прийнятно) |
| Титул падишах | en.wiki Akbar (інфобокс «Padishah»); https://en.wikipedia.org/wiki/Padishah («adopted by … the Mughal emperors») | ✅ |
| «Великі Моголи» — європейська назва, від «монголи» | en.wiki Mughal Empire («Grand Mughal»; «Indo-Persian form of Mongol»); https://www.merriam-webster.com/dictionary/mogul ; encyclopedia.com «mogul» | ✅ |
| Акбар — онук Бабура, 1556–1605, підкорив більшу частину Індії | https://en.wikipedia.org/wiki/Akbar ; https://www.ebsco.com/research-starters/history/akbar | ✅ |
| Мусульманин; більшість підданих — індуїсти | en.wiki Mughal Empire (іслам — державна, індуїзм — більшість); EBSCO Akbar | ✅ |
| Дружина — донька князя-індуїста; індуїсти на високих посадах | EBSCO Akbar (1562, раджа Біхарі Мал); en.wiki Akbar (Бхармал, «high civil and military posts»); https://vajiramandravi.com/upsc-exam/religious-policy-of-akbar/ | ✅ |
| 1564 — скасував податок із немусульман (джизью) | EBSCO Akbar; vajiramandravi (1564) | ✅ (примітка: Бадауні датує 1579 — історіографічна суперечка, у пошуку; шкільна дата 1564 підтверджена двома джерелами) |
| Фатехпур-Сікрі; Дім поклоніння; суперечки мусульман, індуїстів, християн та ін. | https://en.wikipedia.org/wiki/Ibadat_Khana (1575, Фатехпур-Сікрі); EBSCO Akbar; https://artsandculture.google.com/asset/GAFqbfFqcxT6RA (Chester Beatty: дебати з єзуїтами в Ібадат-хані) | ✅ |
| Єзуїти з португальського Гоа | EBSCO Akbar («Jesuits from the Portuguese colony at Goa»); https://en.wikipedia.org/wiki/Rodolfo_Acquaviva (коледж Св. Павла в Гоа; при дворі 1580–1583) | ✅ |
| fbText: «християнином так і не став» | en.wiki Acquaviva (місія безплідна; Дін-і-Ілахі); EBSCO Akbar (єзуїти лише «вірили, що може навернутися») | ✅ |
| Мін з 1368 р. | https://afe.easia.columbia.edu/timelines/china_timeline.htm (1368–1644); en.wiki Ming (inbox, research) | ✅ |
| Ваньлі наприкінці XVI ст. роками не приймав міністрів | https://en.wikipedia.org/wiki/Wanli_Emperor (з 1588; порожні посади); https://brewminate.com/wanli-and-the-politics-of-inaction-a-three-decade-government-shutdown-in-medieval-china/ (з початку 1590-х) | ✅ |
| Війни й голод → повстання; 1644 повстанці захопили Пекін, Мін упала | https://en.wikipedia.org/wiki/Transition_from_Ming_to_Qing (24.04.1644, Лі Цзичен); https://ebsco.com/research-starters/history/li-zichengs-revolt (голод 1627–1628, 1639; податки; 25.04.1644) | ✅ |
| 1557 — португальцям дозволили оселитися в Макао | https://en.wikipedia.org/wiki/Portuguese_Macau ; https://www.ebsco.com/research-starters/diplomacy-and-international-relations/portuguese-reach-china | ✅ |
| Річчі: з Макао, вивчив китайську, 1601 — Пекін, дозволили жити в столиці | https://en.wikipedia.org/wiki/Matteo_Ricci ; https://www.ebsco.com/research-starters/history/matteo-ricci-travels-beijing ; https://www.encyclopedia.com/people/history/chinese-and-taiwanese-history-biographies/matteo-ricci | ✅ |
| Імператор так і не прийняв Річчі | en.wiki Matteo Ricci («never met the reclusive Wanli Emperor»); https://www.beijing-postcards.com/blog/did-matteo-ricci-meet-the-emperor («Ricci never met the emperor») | ✅ (у деяких популярних джерелах «audience»/«invited to court» — неточно; науковий консенсус — не бачив) |
| Карта 1602, Пекін, з китайськими помічниками; перша китайська карта з Америкою | https://loc.gov/loc/lcib/1005/map.html (1602 Beijing, 6 панелей, «first map in Chinese to show the Americas»; «must have had help»); https://en.wikipedia.org/wiki/Kunyu_Wanguo_Quantu (Лі Чжицзао, Чжун Веньтао) | ✅ |
| На карті Річчі Америка праворуч, Європа й Африка ліворуч | саме зображення (перевірив очима); en.wiki Kunyu | ✅ |
| note: китайські вчені просили велику карту; чи догоджав Річчі — спірно | LoC (вчені Нанкіна просили карту вдвічі більшу; куратор: «China at the centre»); AsiaNews/Criveller («undying legend») — сторінка 403, зміст через пошук | ✅ (лише `note`, не оцінюється) |
| Ортелій 1570: Атлантика з Європою й Африкою посередині, Америка ліворуч | content/world/g8-w8s1.js е993 (верифіковане зображення LoC) | ✅ (опора в курсі) |
| `cap` е1: Г. Гофстеде ван Ессен, 1703, «Meijdoen off Beurs», Лейден | https://digitalcollections.universiteitleiden.nl/view/item/876361 («Hofstede van Essen, G.», 1703, COLLBN Port 314 I N 58, public domain); https://commons.wikimedia.org/wiki/File:Hofstede_van_Essen,_Gerard_-_Meijdoen_off_Beurs._View_of_Maiden-I-Shan,_Isfahan,_Iran,_1703.jpg (Gerard; завантажувач — Hansmuller UBL, бібліотека Лейдена) | ✅ (ініціал у cap — безпечний вибір; повне ім'я — лише в credits) |
| `cap` е7: Нарсінгх, «Акбар-наме», бл. 1600–1603, Chester Beatty | Google Arts & Culture (Chester Beatty, «c. 1600-03», CBL In 03.263b); https://asianart.com/exhibitions/pearls/3.html (Narsingh, «approx. 1600–1603», Chester Beatty, In 03.263b) | ✅ (Commons «ca. 1605», EGO Trier «1603–1605» — у credits розбіжність згадано) |
| `cap` е9: карта Річчі, цифрова копія LoC | https://commons.wikimedia.org/wiki/File:Kunyu_Wanguo_Quantu_by_Matteo_Ricci_All_panels.jpg («available from … LoC Geography & Map Division», g3200.ex000006Zb) | ✅ |

### Ліцензії зображень
| Файл | Ліцензія | Вердикт |
|---|---|---|
| isfahan-maidan-1703.jpg | Лейден: «public domain», PD Mark 1.0; Commons: PD-old-100 + PD-US | ✅ |
| akbar-ibadat-khana.jpg | Commons: PD (life+70) + PD Mark (бракує тегу PD-US — косметика Commons); твір бл. 1600 — суспільне надбання; Chester Beatty Digital Collection публікує під CC BY 4.0 (EGO Trier) | ✅ |
| ricci-map-1602.jpg | Commons: PD-old-100-expired, PD-Art, PD Mark; панелі — PD-USGov / PD-Art-100 | ✅ |

## Завдання: розв'язок і опора (D-019)
| Екран | Моя відповідь | `correct` | Звідки відповідь | Вердикт |
|---|---|---|---|---|
| l7 е2 choice hyp | (здогадка) | — | `hyp: true`, без оцінки; відповідь — е3 | ✅ |
| l7 е4 choice «Навіщо послів до Праги?» | спільний ворог — османи | 1 | е3 (Сефевіди ворогують з османами, відвоював землі) + сам екран («Габсбурги довго воювали з османами», 1529) + l4 (союз Франції з Сулейманом — підказка) | ✅ |
| l7 е6 choice «Навіщо скасовувати податок?» | підтримка більшості-індуїстів | 2 | е5 (мусульманин, більшість — індуїсти, посади, 1564); дистрактор «перейшов в індуїзм» відкидає е5 «був мусульманином» | ✅ |
| l7 е7 multi (мініатюра) | навіс; учені з книжками; єзуїти поруч | [0,1,2] → після правки [0,1,3] | саме зображення (перевірив: Акбар сидить на підвищенні під червоним навісом, книжки, двоє в темному ліворуч) + body («двоє в чорному») | ✅ |
| l7 е9 choice (карта) | Америка праворуч, Європа з Африкою ліворуч | 0 | зображення + body (опис карти Ортелія) | ✅ |
| l7 е10 sort | Іран: столиця, посли; Індія: податок, Дім поклоніння; Китай: Макао, Ваньлі | збігається | е3, е4, е5, е7, е8 | ✅ |
| l6 П1–П5 | незмінені (лише евфонія в П2, П4, П5 і `pre`) | 1, 2, [0,1,2], 0, 1 | l1–l5 (верифіковано раніше) | ✅ |
| l6 П6 sort «Нотатки про Азію» | Іран 2, Індія 2, Китай 2 | збігається | l7 е3, е5, е7, е8 | ✅ |
| l6 П7 order | 1514, 1519, 1566, 1569, 1588 | незмінено | l1–l5 | ✅ |

`cap`, `hint` відповідь не видають. Позиції правильних у choice l7: 1, 2, 0 — різні.

## Педагогіка й вік
Проблема на першому екрані («половина світу?»), гіпотеза, теорія як відповідь, «чому» в кожному fbText. Чутливих чи лякаючих сцен немає. 10 екранів, 4 hint, 3 типи завдань, learned — 4. Фінал: 7 завдань на 6 тем + хронологія, `pre` скрізь, крім хронології; `boss` питає лише з уроків. Покриття програми 8.1.25–8.1.27 (Іран Сефевідів / Аббас I; Моголи / Акбар; занепад Мін і європейці в Китаї) — є. Японію (частина 8.1.27) покриває w8s4l5.

## Правки
Зроблені (1):
1. l7 е7 multi: неправильний варіант «Акбар стоїть на колінах…» перенесено з останньої позиції на третю (`correct` [0,1,2] → [0,1,3]), щоб не повторювати шаблон «останній — зайвий» (як у фіналі П3). Зміст не змінено.

Рекомендовані (не блокують):
- Глосарій world: внести «Ісфаган» (як у uk.wiki), «Тамерлан» у w8s3l7 vs «Тимур» в інших місцях — нині «Тимур» у content/ не вживається, лише «Тамерлан» (один раз); узгодити з w7s6l7, коли його напишуть.
- Дата скасування джизьї (1564 vs 1579 у Бадауні) — якщо колись оцінюватиметься рік, додати застереження.

## Вердикт
- **w8s3l7 «Шах і падишах»** — verified.
- **w8s3l6 (фінал)** — verified.
- l1–l5 — без змін, verified (не перевірялись повторно). Тест dgw8 не зачеплено.
- Потребує людини: нічого блокувального; `approved` — лише вчитель.
