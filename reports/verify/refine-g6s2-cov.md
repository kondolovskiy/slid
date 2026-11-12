# Верифікація refine-hist-g6s2-cov — g6s2, урок tr1 (е7–е8, середньостогівська культура)

Верифікатор: verifier-refine-hist-g6s2-cov, 2026-11-12. Обсяг: лише нові е7 (info «Сусіди трипільців — степовики») і е8 (choice), рядок `learned`; узгодженість з g6s9 l1 і dgh6.

## Обсяг змін (git)
- Коміт e45f8de (змішаний коміт паралельної роботи) змінює в `content/hist/g6-g6s2.js` лише: коментар-шапку, `tr1.status`, два нові екрани після е6, один рядок `outro.learned`. tr2–tr5 і наявні екрани tr1 (опора dgh6 g6-tryp: е1–е6, multi) не змінено.
- Моя правка «від острова» → «від місця» в робочому дереві вже потрапила до WIP-коміту 896f638 (коміт оркестратора).

## Факти
| Твердження | Джерела (відкрито в цій сесії) | Вердикт |
|---|---|---|
| Середньостогівська культура — V–IV тис. до н. е., тобто «тоді ж», коли жили трипільці | https://en.wikipedia.org/wiki/Sredny_Stog_culture («mid 5th – mid 4th mill. BCE»); https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CE%5CSeredniiStihculture.htm («early-5th to mid-4th millennium BC»); https://uk.wikipedia.org/wiki/Середньостогівська_культура | ✅ |
| Степ між Дунаєм і Доном | en.wiki («the lower Don region, and the Sea of Azov in the east to the delta of the Danube River in the west»); EoU (Азовське море / нижній Дон — дельта Дунаю) | ✅ |
| Назва — від Середнього Стогу на Дніпрі | EoU (пам'ятка Serednii Stih на Дніпрі біля Запоріжжя, острова не згадує); en.wiki («Dnieper river islet»); uk.wiki (поселення на острові біля Запоріжжя); https://zaxid.net/ukrayinski_arheologi_vpershe_za_60_rokiv_obstezhili_skeli_bilya_hortitsi_yaki_visnovki_n1615267 (скелі Три Стоги між Хортицею і греблею: «На середній скелі вперше виокремлено… середньостогівська культура») | ⚠️ «острів» підтверджують лише вікі, а zaxid називає це місце скелею → **виправлено** на «від місця Середній Стіг на Дніпрі» ✅ |
| Головне заняття — скотарство | https://esu.com.ua/article-26221 (Деріївське поселення: «скотарство, зокрема конярство»); EoU (степові групи «largely nomadic, practicing pastoralism»); uk.wiki (скотарство й рибальство основні, землеробство другорядне) | ✅ |
| Їхній посуд знаходять і в трипільських поселеннях | EoU («Serednii Stih pottery of the Cucuteni-C type appears on Trypillia culture settlements»; «reciprocal relations with their farming Trypillian neighbors»); **друге джерело:** N. Burdo, «Керамика „типа Кукутень С“…», Tyragetia (s.n.) X/2016, № 1, с. 7–38, анотація — https://ceeol.com/search/article-detail?id=494992 («Samples of Serednyi Stig Culture from Cucuteni-Trypillia sites…», частину зразків могли привезти або виготовити носії середньостогівської культури) | ✅ (пом'якшувати не треба) |
| Біля Деріївки — багато кісток коней | https://en.wikipedia.org/wiki/Deriivka (≈ 75 % кісток — кінські); A. Outram, Frontiers in Environmental Archaeology 2023 — https://www.frontiersin.org/journals/environmental-archaeology/articles/10.3389/fearc.2023.1134068/full («high preponderance of horse bones»); ESU article-26221 («побл. с. Деріївка») | ✅ |
| «Можливо, степовики одними з перших приручили коня» | en.wiki Sredny Stog («perhaps the earliest evidence of horse domestication»); Outram 2023 («one potential such locus for early horse domestication», але «conclusive evidence is currently lacking for husbandry»); uk.wiki («за однією з версій») | ✅ як гіпотеза; формулювання з «можливо» точне, в оцінюваному варіанті не використано |
| «Доказів верхової їзди немає» | en.wiki Sredny Stog («no conclusive proof» верхової їзди); Outram 2023 і en.wiki Deriivka (жеребець зі слідами вудил — пізніше вкопаний, ≈ 700–200 рр. до н. е.) | ✅ |
| Правопис «Деріївка» | ESU (стаття «Деріївське поселення», «с. Деріївка»); en.wiki «Deriivka» | ✅ (у задачі «Дереївка» — старе написання; у контенті правильно) |

## Завдання
| Екран | Моя відповідь | `correct` | Звідки відповідь (D-019) | Вердикт |
|---|---|---|---|---|
| е8 choice «Чим степовики відрізнялися від трипільців?» | 2 (скотарство, а не землеробство) | 2 | е7 («Головним їхнім заняттям було скотарство») + е5 sort (fbText: «Головним заняттям було землеробство»). Хибні: «на тисячі років пізніше» — е7 «Тоді ж, у V–IV тис.» і е3 (V–III тис.); «в горах Карпат» — е7 «у степах між Дунаєм і Доном» | ✅ |

- Підказка е8 спрямовує до порівняння занять і не відкидає обидва хибні варіанти. ✅
- Позиції правильних відповідей в уроці: е6 → 0, е8 → 2, фінальний multi → [0, 1, 3]. Вони різні. ✅
- `fbText` е8 відповіді не суперечить; посуд «потрапляв до трипільців» підтверджено (вище).
- `learned` «Порівнювати трипільців із сусідами-степовиками» спирається на е7–е8. ✅
- Узгодженість: g6s9 l1 («V–III тис. до н. е.» для трипільців) збігається з tr1 е3, нових суперечностей немає.

## Прогони
- `node tools/validate.mjs --section g6s2`: 0 помилок, 0 попереджень (до і після правок).
- `node tools/validate.mjs --diag dgh6`: 0 / 0.
- `node tools/euphony.mjs --subject hist --section g6s2`: 13 відхилень, але жодного в е7–е8. Наявні відхилення (tr1 е6 «знаряддя й прикраси» тощо) — у незмінених verified-екранах, їх не чіпав.
- `node tools/stats.mjs --subject hist`: tr1 — 9 екранів, частка завдань 0,56, без прапорців.
- Плейтест: Python playwright у контейнері немає, тому браузерний прогін — у CI.

## Правки
- Зроблено (1): е7 «Назва — від острова Середній Стіг на Дніпрі» → «Назва — від місця Середній Стіг на Дніпрі» (острів підтверджують лише вікі, а zaxid.net називає це місце скелею).
- Статус: tr1 → `verified`, у шапці файлу записано, хто перевірив.
- Рекомендовано (не блокує): якщо вчитель захоче, можна писати «Можливо… Але певних доказів цього, як і верхової їзди, немає»: за Outram 2023 не доведено навіть утримання коней.

## Вердикт
tr1 — **verified**. Відкритих ❌ і ⚠️ немає. tr2–tr5 не змінювалися, лишаються verified.
