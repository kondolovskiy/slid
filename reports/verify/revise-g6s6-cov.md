# Верифікація: revise-hist-g6s6-cov (g6s6: новий урок g6s6l7, фінал g6s6-l6)

Верифікатор: verifier-revise-hist-g6s6-cov, 2026-11-12. Скіл `content-verify`.
Файл: `content/hist/g6-g6s6.js`; зображення `img/hist/g6s6/{lamassu,apadana-lydians,lydian-stater}.jpg`.

**Вердикт:** g6s6l7 — **verified**; g6s6-l6 (фінал) — **verified**. l1–l5 не змінювалися (verified). Тест рівня dgh6 не змінювався.

## 0. Diff і межі
- Зміни автора — в коміті 9e21b6e (WIP-коміт, разом із чужими файлами). `git diff 9e21b6e~1 HEAD -- content/hist/g6-g6s6.js`: лише заголовок-коментар, 3 рядки `credits`, новий урок `g6s6l7`, у фіналі `status`, `fbOk` завдання 6 і нове завдання 7. **l1–l5 не змінено.**
- `content/hist/diag-g6.js` (dgh6) — без змін від 9e21b6e~1; `validate --diag dgh6` — 0/0.
- Порівняння з g6s10 (verified): бібліотеку Ашшурбаніпала, Ніневію VII ст. і «Гільгамеша» в g6s6l7 не повторено; Персію як ворога греків лише анонсовано (g6s7-l4 — Дарій I, Марафон, узгоджено). Республіка — лише названо (g6s8).

## 1. Факти

| Твердження (екран) | Джерела, відкриті в цій сесії | Вердикт |
|---|---|---|
| Ламасу: Калху (Німруд), бл. 883–859 рр. до н. е., висота > 3 м (313,7 см), Met 32.143.1, CC0 (е1, credits) | Met API https://collectionapi.metmuseum.org/public/collection/v1/objects/322608 (isPublicDomain: true, subregion «Nimrud (ancient Kalhu)», H 313.7 cm); AMICA (запис Met) https://amica.davidrumsey.com/amico1256170-105594.html (Ашшурнасірпал II, 883–859, будівництво в Німруді, «set up in its gates») | ✅ |
| Ассирія — північ Межиріччя, на Тигрі; столиця Ніневія (е1, е5) | https://uk.wikipedia.org/wiki/Ассирія ; https://en.wikipedia.org/wiki/Neo-Assyrian_Empire ; AMICA (Northern Mesopotamia) | ✅ |
| IX–VII ст. до н. е. — залізна зброя й тарани (е5) | тарани IX ст., рельєф палацу Ашшурнасірпала II — https://library.biblicalarchaeology.org/images/bsba160304113ljpg/ ; масове виробництво залізної зброї й обладунків, залізні шоломи з кін. VIII ст. — Dezső, Acta Archaeologica Hung. 57 (2006) https://real.mtak.hu/63239/1/aarch.57.2006.1-3.8.pdf ; en.wiki (adoption of iron for armor and weapons) | ✅ |
| Ассирія підкорила Вавилон; 671 р. до н. е. — Єгипет (е5) | Вавилон 729 (Тіглатпаласар III) — en.wiki Neo-Assyrian Empire, uk.wiki Ассирія; 671 — https://www.livius.org/sources/content/anet/289-esarhaddons-nahr-al-kalb-inscription/ ; https://en.wikipedia.org/wiki/Assyrian_conquest_of_Egypt | ✅ |
| 612 р. до н. е. зруйновано Ніневію (е5, е6) | Хроніка падіння Ніневії (ABC 3) https://www.livius.org/sources/content/mesopotamian-chronicles-content/abc-3-fall-of-nineveh-chronicle/ ; uk.wiki Ассирія (вавилоняни й мідійці) | ✅ |
| Масові переселення; на їхні землі привозили інших; мета — не дати повстати (е6) | https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/exile-assyrian («to prevent these nations from rebelling», population exchange); en.wiki / uk.wiki (знищити місцеву ідентичність) | ✅ |
| Хети — Мала Азія (Туреччина), XVII–XII ст. до н. е. (е4) | Manning et al., Nature 2023 https://pmc.ncbi.nlm.nih.gov/articles/PMC9946833/ (central Anatolia, 1650–1200 bc; колапс 1198–1196); https://uk.wikipedia.org/wiki/Хети (XVII ст. – 1190) | ✅ |
| Хети мали залізні речі; довго вважали першими у виплавці — тепер спірно (е4) | https://www.tf.uni-kiel.de/matwis/amat/iss/kap_a/advanced/ta_2_1.html (Föll: погляд «перші майстри заліза» оскаржено; ≈ 2 десятки знахідок; лист Хаттусілі III); https://en.wikipedia.org/wiki/Hittites | ✅ подано як суперечку, не категорично |
| Найдавніше залізо — метеоритне (е4) | https://www.sciencedaily.com/releases/2017/12/171204094937.htm ; https://cnrs.fr/en/node/2499 (Jambon 2017) | ✅ |
| Імперія — держава, що силою об'єднала багато народів під владою одного правителя (е5) | https://uk.wikipedia.org/wiki/Імперія (силоміць приєднані народи; влада одній особі); СУМ — https://slovnyk.ua/index.php?swrd=імперія («велика монархічна держава») | ✅ |
| Монархія: влада довічна, переходить у спадок (е2) | ЕСУ «Монархія» (2019) https://esu.com.ua/article-69779 (PDF https://esu.com.ua/pdf/file/69779.pdf: «влада пожиттєва і передається в порядку престолонаступництва»); https://uk.wikipedia.org/wiki/Монархія | ⚠ → ✅ після правки: «владу успадковував син» → «зазвичай успадковував син» |
| Ознаки держави (е2); форми правління, імперії — програма | програма Васильківа, 6 кл., розд. 4: «Ознаки держави. Форми державного правління. Імперії…» https://ippo.if.ua/predmety/istoriya/media/files/DYS-5-6-klasy-Vasylkyv.pdf ; https://uk.wikipedia.org/wiki/Держава (територія, апарат управління і примусу, право, податки) | ✅ |
| Кір II бл. 550 р. до н. е.; Лідія, Вавилон (е7) | https://www.livius.org/articles/person/cyrus-the-great/ (550; Сарди бл. 547; Вавилон X.539); https://uk.wikipedia.org/wiki/Кір_II_Великий | ✅ |
| Персія — від Єгипту до Індії (е7, фінал 7) | https://achaemenica.org/articles/the-satrapy-system (від Інду до Егеїди; Єгипет — Камбіс); https://en.wikipedia.org/wiki/Achaemenid_Empire (Єгипет 525; до долини Інду) | ✅ |
| Дарій I — сатрапії; сатрап збирав податки й стежив за порядком (е7, фінал 7) | https://www.livius.org/articles/person/darius-the-great/6-organizing-the-empire/ (податкові округи, сатрапії за Геродотом); https://achaemenica.org/articles/the-satrapy-system (податки, порядок і безпека доріг, суд) | ✅ (кількість сатрапій не названо — правильно, джерела розходяться) |
| Царська дорога Сарди — Сузи, довжина (е8) | Livius https://www.livius.org/articles/concept/royal-road/ (≈ 2500 км за Геродотом); https://en.wikipedia.org/wiki/Royal_Road (2699); https://uk.wikipedia.org/wiki/Царська_дорога (2683/2699); за пошуком Britannica ≈ 2400 | ⚠ → ✅ після правки: «майже 2700 км» → «понад 2400 км» (оцінки 2400–2700) |
| Станції зі зміною коней; пішки ≈ 90 днів; гінці ≈ 9 днів (е8) | Livius (111 станцій, ≈ 90 днів, естафета вершників — Геродот 8.98); https://persianheritage.org/articles/en/royal-road-persian-post (7–9 днів, 90 днів); en.wiki / uk.wiki (9 днів) | ✅ (9 днів — сучасна оцінка; у тексті «приблизно») |
| Лідійців «вважають винахідниками монети», VII–VI ст. до н. е., знак царя, до того метал зважували (е9) | Геродот 1.94 (Perseus) https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0126%3Abook%3D1%3Achapter%3D94%3Asection%3D1 («first … who coined and used gold and silver currency»); Британський музей, Money Gallery https://www.britishmuseum.org/sites/default/files/2021-05/Money_Gallery_LPG_2020_Room_68.pdf (перші монети «probably» в Лідії бл. 650, лев — царський символ; перші окремі золоті й срібні); Kroll, Sardis https://sardisexpedition.org/en/essays/latw-kroll-coins-of-sardis (до монет — зважування; лев — царські випуски; Крез — чисте золото й срібло) | ✅ формулювання обережне («вважають»), не категоричне |
| Статер з левом і биком, Лідія, бл. 560–546, Met 26.59.2, CC0, скарб із Сард (е9, credits) | Met API https://collectionapi.metmuseum.org/public/collection/v1/objects/252454 (isPublicDomain: true; 560–546; дар ASES 1926); https://sardisexpedition.org/en/artifacts/latw-28_1-28_2 (лев і бик; скарб 30 статерів 1922; 4 — у Met) | ✅ |
| Рельєф Ападани: лідійці з дарами (е7, фінал 7) | Commons wikitext (`action=raw`): Carole Raddato, {{cc-by-sa-2.0}}, FlickreviewR passed 2020-05-19, категорія «Lydian delegation, Apadana» — https://commons.wikimedia.org/wiki/File:Relief_on_the_southern_wall_of_the_east_stairway_of_the_Apadana_depicting_Lydians_who_offer_vases,_cups_and_bracelets_and_a_chariot_drawn_by_diminutive_horses,_Persepolis,_Iran_(32836014327).jpg ; Livius https://www.livius.org/articles/place/persepolis/persepolis-photos/persepolis-apadana-east-stairs/ (лідійці: посудини, чаші, кільця з головами грифонів, колісниця) — на знімку саме це (переглянуто) | ✅ |
| Дата рельєфу в `cap` | Livius (там само): «last years of the sixth and first years of the fifth century BCE»; Smarthistory/Lumen https://courses.lumenlearning.com/suny-ncc-zeliart/?p=1592 (сходи Ападани бл. 520–465) | ⚠ → ✅ після правки: «перша половина V ст.» → «кінець VI – початок V ст. до н. е.» |
| Римська республіка — правителів обирали (е2, е10) | урок g6s8 (verified) | ✅ (лише назва, оцінюється як дистрактор) |

Недоступні в сесії: britannica.com (403), worldhistory.org (403), iranicaonline.org (403), whc.unesco.org (403), metmuseum.org сторінки (429; дані взято з офіційного Met API).

## 2. Завдання: моє розв'язання → опора (D-019)

| Завдання | Моя відповідь | `correct` | Звідки відповідь | Вердикт |
|---|---|---|---|---|
| l7 е3 sort «Ознака чи ні?» | військо, податки, закони → ознака; торгівля, віра → без держави | так само | е2 (перелік ознак); торгівля й віра — міркування (поза переліком) | ✅ |
| l7 е4 choice | «знали залізо, першість спірна» (2) | 2 | body е4; «від єгиптян» — на екрані немає, «точно першими» — суперечить body | ✅ |
| l7 е6 choice (hint) | «Не дати знову повстати» (1) | 1 | body (переселення, чужинці) + міркування в один крок; hint навідний, хибних не відкидає дослівно | ✅ |
| l7 е8 choice | «Швидко передавати новини й накази» (0) | 0 | body: 9 днів проти 3 місяців → міркування | ✅ |
| l7 е9 choice | «Ручався за вагу металу» (2) | 2 | body: «до того метал щоразу зважували» → міркування | ✅ |
| l7 е10 multi | [1, 3, 4] | [1, 3, 4] | підкорення народів — е5, е7; монархії — е2 + «цар» е1/е5/е7; Вавилон — е5, е7; Царська дорога — лише Персія (е8); обрання — республіка (е2) | ✅ |
| фінал 1 order | Єгипет → піраміда → Хаммурапі → Конфуцій → 221 р. | так само | дати на картках; l1–l3, l5 | ✅ (pre g6s6-l1) |
| фінал 2 | 1 | 1 | l1 | ✅ (pre g6s6-l1) |
| фінал 3 | 2 | 2 | l2 | ✅ (pre g6s6-l2) |
| фінал 4 | 0 | 0 | l3 | ✅ (pre g6s6-l3) |
| фінал 5 sort | ієрогліфи: 0, 1; клинопис: 2, 3; алфавіт: 4 | так само | l2–l4 | ✅ (pre g6s6-l2) |
| фінал 6 | 2 | 2 | l5 | ✅ (pre g6s6-l5) |
| фінал 7 | 1 | 1 | g6s6l7 е7 (сатрапії), е8 (дорога); дистрактори — е6 (переселення в далекий край, не до столиці), е2 (обрання — республіка) | ✅ (pre g6s6l7) |

`fbText` не суперечать відповідям; жоден факт уперше не з'являється у `fbText`; `cap` не видає відповідей. Позиції правильних: l7 — 2, 1, 0, 2, multi [1, 3, 4]; фінал — 1, 2, 0, (sort), 2, 1 — різні.

## 3. Педагогіка й стиль
- Проблема на початку (е1 «Хто стеріг вхід…»), теорія після, пояснення «чому» в кожному `fbText`; `src`/`crit` є (е4, е6, е9).
- Нові терміни: монархія, імперія, сатрапія — 3 (≤ 3 для 5–6 кл.); «республіка» лише назва. Хети — назва народу.
- Чутливе (депортації, «сила й страх»): без натуралізму, фокус на меті й наслідках — відповідає style/hist.md.
- D-027: у g6s6l7 три справжні `img` з відкритою ліцензією (CC0 ×2, CC BY-SA 2.0), `cap` і `credits` є; усі три файли теки використано.
- `learned` — лише з екранів уроку. eyebrow «Розділ 3 · Урок 6» і «Згадай урок 6» у фіналі узгоджені.

## 4. Правки (зроблено мною)
1. е2: «владу успадковував син» → «владу **зазвичай** успадковував син» (монархія — престолонаступництво, не завжди син).
2. е5: «тарани для мурів» → «тарани» (стиль: після правки 1 stats дав `readWordsPerScreen` z = 2,1; заголовок екрана «Тарани під мурами» зберігає зміст).
3. е7 `cap`: «перша половина V ст. до н. е.» → «кінець VI – початок V ст. до н. е.» (Livius, Smarthistory).
4. е8: «майже 2700 км» → «понад 2400 км» (оцінки 2400–2700 км розходяться).
5. Фінал, завд. 7 `fbText`: «Силою переселяти непокірних — звичай ассирійців» → «Цілі народи силою переселяли ассирійці, та й вони не зганяли всіх до столиці» (стара фраза протиставляла Персію Ассирії, хоча про перські переселення урок нічого не каже й джерел для такого протиставлення немає; нова — пояснює, чому хибний саме дистрактор «усіх до столиці»: ассирійці переселяли і в серце держави, і в провінції — en.wiki Neo-Assyrian Empire).
6. Фінал, завд. 1–6: додано `pre` (style/common.md): 1 → g6s6-l1 (перша з тем стрічки), 2 → g6s6-l1, 3 → g6s6-l2, 4 → g6s6-l3, 5 → g6s6-l2 (перша з l2–l4), 6 → g6s6-l5. Відповіді не змінено; кожен id — справжній урок розділу.
7. `status` g6s6l7 і g6s6-l6 → "verified"; коментар-заголовок файлу оновлено.

## 5. Прогони
- `node tools/validate.mjs --section g6s6` — 0 помилок, 0 попереджень.
- `node tools/validate.mjs --diag dgh6` — 0/0.
- `node tools/euphony.mjs --subject hist --section g6s6` — у g6s6l7 і новому завданні 7 знахідок немає (решта — у незмінних verified-уроках l1–l5 і старих завданнях фіналу; не чіпав).
- `node tools/stats.mjs --subject hist` — g6s6l7: 31 / 49 / 6,6, без прапорців; фінал без прапорців.
- `python3 tools/playtest.py --section g6s6` — не запускався: Python-модуля playwright у контейнері немає (handoff, «Обмеження середовища»); лишається CI job `browser`.

## 6. Для людини
- `approved` — лише вчитель.
- Рекомендація (не блокує): нумерація «Урок 6» для g6s6l7 при id `g6s6-l6` у фіналі може плутати авторів; правило — за позицією (D-017), лишено.
