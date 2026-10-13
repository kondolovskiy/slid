---
claimed_from: review
claimed_at: 2026-10-13T12:49:26.010Z
id: write-hist-g9s1
type: write-section
subject: hist
grade: 9
section: g9s1
weeks: [1, 6]
status: done
claimed_by: verifier-g9s1
created: 2026-09-27
---
# Написати розділ «Під владою двох імперій» (Історія України, 9 клас)

## Навіщо (з плану, можна уточнити)
Щоб розуміти, чому українці опинилися в різних державах і як це вплинуло на їхнє життя.

## Теми уроків (з плану)
1. Поділи Речі Посполитої і нові кордони
2. Російська імперія: губернії
3. Австрійська імперія: Галичина, Буковина, Закарпаття
4. Кріпацтво
5. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/hist.md, style/profiles.json
- memory/long/glossary/hist.md і memory/long/facts/hist.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: content/hist/g5-s2.js

## Результат
- Файл `content/hist/g9-g9s1.js` з `SLID.section("hist", { id: "g9s1", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/hist/g9s1/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/hist.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section g9s1` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject hist` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->

### Що зроблено (writer-g9s1, 2026-10-13)
Файл `content/hist/g9-g9s1.js`, 5 уроків, усі `draft`; `requires: ["g8s5l5"]`; значок `twoempires` «Слідопит кордонів».
- **g9s1l1** «Держава, що зникла з карти» (Поділи) — 9 екранів, 5 оцінюваних (sort, choice, number, sort, multi).
- **g9s1l2** «Адреса: губернія, повіт» (Губернії) — 9 екранів, 5 оцінюваних (order, sort, choice, choice-src, multi).
- **g9s1l3** «Землі під цісарем» (Австрія) — 9 екранів, 5 оцінюваних (order, choice, multi, choice, sort); `note` «Чому інколи пишуть 1775 р.?» (Буковина 1774/1775, D-022).
- **g9s1l4** «Селянин без права піти» (Кріпацтво) — 9 екранів, 5 оцінюваних (choice, number, sort, choice-src, multi).
- **g9s1l5** «Архів двох кордонів» (boss, ×2) — 7 екранів, 6 завдань по темах розділу в порядку уроків.
- `node tools/validate.mjs --section g9s1` → 0 помилок, 0 попереджень. `node tools/stats.mjs --subject hist` → уроки g9s1 без прапорців (після правок: L1 sentenceWords 6,4; L2 longWordShare 0,039; boss readWords 26/54).
- Зображень немає: Commons API весь час віддавав 429 (паралельні агенти). Бажано пізніше: карта поділів (напр. `File:Rzeczpospolita_Rozbiory_3.png`, CC BY-SA — перевірити ліцензію) для l1 intro.

### Факти й джерела (усі відкрито напряму 13.10, D-021)
| Факт | Де | Джерела |
|---|---|---|
| Поділи 1772 (Росія, Пруссія, Австрія; Австрія — Руське й Белзьке воєв., зх. Поділля, кут Волині), 1793 (лише Росія й Пруссія; Росія — Київське, Брацлавське, Подільське воєв. і сх. половина Волинського), 1795 (Росія — зх. Волинь; держава перестала існувати) | l1, boss | ЕІУ «Поділи Польщі 1772, 1793, 1795» https://www.history.org.ua/?termin=Podily_1772_1793_1795 ; ЕСУ «Волинь» https://esu.com.ua/article-27614 ; EoU «Vicegerency» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CV%5CI%5CVicegerency.htm ; en.wiki «Partitions of Poland» (1793 «without Austria») https://en.wikipedia.org/wiki/Partitions_of_Poland |
| Австрія — Галичина 1772; Росія — решта українських земель Польщі | l1 | EoU «Poland» https://www.encyclopediaofukraine.com/pages%5CP%5CO%5CPoland.htm ; ЕСУ «Галичина» https://esu.com.ua/search_articles.php?id=28395 |
| Лівобережжя й Київ — за Москвою з XVII ст.; Січ 1775; Крим 1783 | l1 | реєстр №117, №122, №100 |
| Губернія: губернатор призначався імператором; поділ на повіти; губернатори підпорядковувалися генерал-губернаторам | l2 | ЕІУ «Губернія» https://www.history.org.ua/?termin=Guberniya ; EoU «Gubernia» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CU%5CGubernia.htm ; EoU «Governor-general» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CO%5CGovernor6general.htm |
| Полковий устрій скасовано наприкінці XVIII ст. (EoU: 1764–81) | l2 | EoU «Gubernia»; EoU «Little Russia gubernia» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CL%5CI%5CLittleRussiagubernia.htm ; ЕІУ «Гетьманщина та Російська імперія» (1764–1765) |
| 9 губерній: Київська, Подільська, Волинська; Чернігівська, Полтавська (1802); Слобідсько-Українська (з 1835 — Харківська); Катеринославська, Херсонська, Таврійська (1802) | l2 | ЕІУ «Губернія»; EoU статті Kharkiv / Poltava / Chernihiv / Katerynoslav / Kherson / Tavriia gubernia (напр. https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CK%5CH%5CKharkivgubernia.htm) |
| Миргородський повіт — у Полтавській губ.; Миргородський полк — у Гетьманщині | l2 intro | EoU «Poltava gubernia», «Left-Bank Ukraine» |
| «Південно-Західний край» = Київська, Подільська, Волинська губ. | l2 | EoU «Southwestern land» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CO%5CSouthwesternland.htm ; ЕСУ «Волинь» |
| Королівство Галичини і Володимирії (Ґаліції і Лодомерії) 1772, центр Львів; обґрунтування — титул угорських королів з XIII ст. (Андраш II, 1205); Габсбурги — угорська корона з 1526 | l3, boss | ЕІУ «Поділи Польщі…»; ЕСУ «Королівство Ґаліції і Лодомерії» https://esu.com.ua/article-5994 ; EoU «Galicia» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CG%5CA%5CGalicia.htm |
| Буковина: з 1774 в Австрії, раніше Молдавське князівство під зверхністю Туреччини; центр Чернівці; 1787–1849 у складі Галичини; 4.03.1849 — окремий коронний край | l3 | ЕІУ «Буковина» (resource.history.org.ua, S21STR=Bukovyna); EoU «Bukovyna» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBukovyna.htm ; ЕСУ «Буковина» https://esu.com.ua/article-36656 ; en.wiki «Bukovina» https://en.wikipedia.org/wiki/Bukovina |
| Йосиф II (пом. 1790; до 1780 разом з матір'ю Марією Терезією): скасував особисту залежність селян 1782, обмежив панщину (1786), зрівняв греко-катол. духовенство з латинським, відновив Львівський університет 1784; наступники частину реформ скасували | l3, l4 | ЕІУ «Йосиф II» https://www.history.org.ua/?termin=Yosyf_II ; EoU «Joseph II» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CJ%5CO%5CJosephII.htm ; ЛНУ «Історія» https://lnu.edu.ua/about/history/ (відкриття 1784) |
| Кріпацтво: селянин під адм. і суд. владою пана; втікача переслідували; купівля-продаж і обмін; указ Катерини II 3 (14) травня 1783 — Лівобережжя й Слобожанщина; Правобережжя — кріпацтво з часів Речі Посполитої | l4 | ЕІУ «Кріпацтво» https://history.org.ua/?termin=Kripatstvo ; EoU «Serfdom» https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CS%5CE%5CSerfdom.htm |
| У 1740-х посполиті ще могли переходити від пана до пана | l4 intro | EoU «Serfdom» |
| Панщина: за Мазепи — 2 дні; 1797 Павло I — 3 дні; на практиці 5–6 (EoU: 4–6) | l4, boss | ЕІУ «Панщина» https://www.history.org.ua/?termin=Panschyna ; EoU «Serfdom» |

### Сумнівні місця
- **Буковина 1774 / 1775** — у тексті 1774 (ЕІУ, EoU, ЕСУ), примітка `note` про конвенцію 1775 р. (en.wiki). Дата не оцінюється як єдина правильна (в оцінюваних — «забрана в Молдавського князівства» без року; в order — лише послідовність).
- **Приєднання Буковини до Галичини 1786 чи 1787** (en.wiki — 1786, ЕІУ/EoU — 1787, ЕСУ — «1781–1849») — у тексті без року («згодом»).
- **Скасування особистої залежності 1781 чи 1782** — ЕІУ і EoU дають 1782 (патент для Чехії — 1781). У тексті 1782, але не оцінюється.
- **Указ 1797** — ЕІУ: «встановлення 3-денної панщини», EoU: «proposed». У тексті нейтрально: «оголосив: досить 3 днів».
- **Генерал-губернаторства** — дати Малоросійського розходяться (EoU до 1835, uk.wiki до 1856), тому в уроці без дат і назв.
- Назва «Королівство Галичини і Володимирії» (підручникова) vs «Ґаліції і Лодомерії» (ЕІУ, ЕСУ) — у тексті перша форма; потрібне рішення для глосарію.
- Шевченко (викуп 1838) свідомо не використано: це урок g9s2 l4.

### Опора завдань (D-019), неочевидні місця
- l1 #5 (західна Волинь 1794) → info #3 (1795 — західна Волинь).
- l1 #9 multi «Лівобережжя» → info #6.
- l2 #7 «Навіщо полки → губернії» → info #3 + body (міркування).
- l2 #8 «Південно-Західний край» → body (столиця Петербург) + міркування.
- l3 #5 «Навіщо королівство» → info #3 («назва нагадувала про давні права угорських королів»).
- l4 #7 sort Росія/Австрія → l3 #6 (реформи Йосифа II) + l4 #3, #5.
- l4 #9 «Губернатора призначав імператор» → l2 #3.
- boss #5 — обидві дати на екрані.

### Пропозиції
- glossary hist: губернія, повіт, генерал-губернаторство, «Південно-Західний край», Королівство Галичини і Володимирії, цісар, кріпацтво / панщина / особиста залежність.
- Рушій: SVG-карта поділів (1772/1793/1795) суттєво підсилила б l1 і boss.

### Верифікація (verifier-g9s1, 2026-10-13)
Усі 5 уроків — `verified`. Факти звірено напряму (ЕІУ через history.org.ua, EoU, ЕСУ, en/ru.wiki); відповіді 26/26 збігаються; опора D-019 — без зауважень. Правки: l2 «Наприкінці XVIII ст.» → «У другій половині XVIII ст.» (полки скасовано 1764–1781); l3 #5 «Королем Галичини ніхто з місцевих не був» → «У 1772 р. власного короля в Галичині не було» (Данило — король з 1253); note-посилання ЕІУ www → без www (сертифікат). Звіт: reports/verify/g9s1.md.
