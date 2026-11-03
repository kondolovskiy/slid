---
claimed_from: todo
claimed_at: 2026-11-03T09:56:10.516Z
id: write-world-w7s2
type: write-section
subject: world
grade: 7
section: w7s2
weeks: [8, 14]
status: done
claimed_by: writer-write-world-w7s2
created: 2026-11-03
depends_on: [write-world-w7s1]
---
# Написати розділ «Візантія, арабський світ і Схід» (Всесвітня історія, 7 клас)

## Навіщо (з плану, можна уточнити)
Щоб знати сусідів Русі — Візантію й Арабський халіфат — і великі цивілізації Китаю та Індії.

## Теми уроків (з плану)
1. Юстиніан і Константинополь
2. Візантія і Русь
3. Мухаммед і виникнення ісламу
4. Арабський халіфат: завоювання і наука
5. Китай династій Суй і Тан, Індія
6. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md і скіл автора `.claude/skills/content-author/SKILL.md`
- style/common.md, style/world.md, style/profiles.json
- memory/long/glossary/world.md і memory/long/facts/world.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: `content/world/g7-w7s1.js` (verified) і style/world.md «Еталони».

## Програма й вимоги (оркестратор, D-043/D-044)
- Програма: Гісем О. В. та ін., модельна «Всесвітня історія. 7–9 класи» (наказ МОН № 1449 від 27.11.2023) — https://znayshov.com/FR/46261/Vsesvitnya.istoriya.7-9%20kl.Hisem.ta.in.30.11.2023.pdf (PDF; текст — `pdftotext`, середня колонка «Зміст навчального предмета»).
- **Новий предмет** `world`: content/subjects/world.js (навички src, time, geo, crit, pol, soc, cult, link), план content/world/plan.js, **style/world.md** (+ style/hist.md — усе діє), glossary/world.md, facts/world.md (поки порожній — нові факти лише з ≥ 2 джерел, з URL у нотатках і FACT в inbox).
- Файл: `content/world/g<клас>-<id>.js`, зображення — `img/world/<id>/`; id уроків `<id>l1…`, значок boss — унікальний id. D-027: ≥ 1 справжнє `img` у кожному уроці (скіл `hist-images`; Commons — `thumb.wikimedia.org`, ≤ 2 фото-агенти одночасно).
- У розділі ≥ 1 завдання `sk: "link"` (подія світу ↔ подія на українських землях, уже відома з «Історії України» 7 кл. або подана на екрані).
- Тимчасові файли — `<scratchpad>/<task-id>/`. Build не запускай. Не чіпай чужі файли, `content/math`, `app/`.

## Результат
- Файл `content/world/g7-w7s2.js` з `SLID.section("world", { id: "w7s2", ... })` — той самий id, що в плані
- Фото (якщо є) у `img/world/w7s2/`, з `credits` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/world.md)

## Готово, коли
- [ ] `node tools/build.mjs && node tools/validate.mjs --section w7s2` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] `node tools/stats.mjs --subject world` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
**writer-write-world-w7s2, 2026-11-03.** Файл `content/world/g7-w7s2.js`, 6 уроків (усі `draft`), фото — `img/world/w7s2/` (7 файлів, усі використані). `validate --section w7s2`: 0 помилок, 0 попереджень; `stats --subject world`: уроки w7s2 без прапорців (слів/речення 6,1–6,9; gradedShare 0,5–0,56, фінал 0,86). Build і playtest не запускав (паралельний запуск; build — оркестратор). **Увага:** проміжна версія мого файлу потрапила в чужий коміт 36e495d («verify g6s6») — фінальна версія лежить у робочому дереві, незакомічена.

### Уроки
- **w7s2l1 «Рим, що не впав»** (10 екр.) — мозаїка Сан-Вітале як загадка (476 р. vs портрет імператора в Італії); Константинополь 330 р., ромеї, назва «Візантія» — пізніша; походи Юстиніана (Африка, Італія, південь Іспанії); солід D N IVSTINIANVS P P AVG (перекличка з денарієм Карла з w7s1l2); Звід цивільного права, «Ніка» 532, Свята Софія 537; Прокопій про промову Теодори (crit: переказ ≠ дослівний запис).
- **w7s2l2 «Від вогню до весілля»** (9) — мініатюра Скилиці з грецьким вогнем; «Пригадай» (860, 911, 941, Ольга, торгівля); Костянтин VII про шлях Дніпром (multi «що сказано прямо»); Македонська династія, Василь II, Варда Фока 987, 6000 воїнів, шлюб з Анною, варязька гвардія; що Русь перейняла (multi, дистрактор — руни з w7s1); `link` «Хрещення Русі — наслідок союзу».
- **w7s2l3 «Рік, з якого почався відлік»** (10) — мусульманський календар (XV ст.); Аравія, Мекка, Кааба; Мухаммед, іслам, хіджра 622, 630, 632; Коран, суна, обов'язки; «Синій Коран» (multi src). Без зображень Пророка; релігія — «за вченням ісламу».
- **w7s2l4 «Від Іспанії до Інду»** (10) — халіфи, виснаження Візантії й Персії, Сирія, Єгипет, Персія, Іспанія 711 (Гібралтар — «гора Тарика»); облога Константинополя 717–718, Пуатьє 732; суніти/шиїти; Аббасиди 750, Багдад 762, Дім мудрості, аль-Хорезмі (алгебра, алгоритм, індійські цифри); дирхем 783 р. — `link` «скарби дирхемів IX–X ст. на землях України».
- **w7s2l5 «Книга, якій 1150 років»** (10) — «Діамантова сутра» 868 р.; Суй 589, Великий канал, Тан 618–907, Чан'ань ≈ 1 млн; іспити на посаду; друк з дощок, порох; Індія: Гупти IV–VI ст., десятковий запис з нулем, чатуранга, раджпути VII–XII ст.; 1455 − 868 = 587.
- **w7s2l6 «Караван із Києва до Чан'аня»** (boss, 7) — рамка «помічник купця» Київ → Константинополь → Багдад → Чан'ань; по завданню на кожну тему в порядку тем + стрічка часу; значок `silkroad` «Купець Шовкового шляху».
- `link`: l2 е8, l4 е9, l6 е3 (+ інфо-«Пригадай» l2 е3). Спираються на «Історію України» 7 кл.: g7s1 (860, 911, 941 — грецький вогонь, Ольга в Константинополі, торгівля, печеніги), g7s2 (Анна — сестра імператора, Варда Фока й 989 р. у `note`, 988 р., Десятинна церква — візантійські майстри, мозаїки Софії); шлях «із варягів у греки» — 5 кл. (facts/hist №21).

### Опори (D-019), де неочевидно
- l1 е4 (ромеї) — е3; е6 (Галлія — дистрактор) — франки в Галлії з w7s1l1, у переліку походів її немає; е7 — напис на екрані + «август» Карла (w7s1l2 е5); е9 — сам екран (переказ історика), дистрактор «Теодора не жила за Юстиніана» відкидається текстом; е10 — дати 330/476/527/532/537 на е3, е5, е8 (476 — w7s1).
- l2 е4 — лише текст джерела на екрані; е6 — е5; е7 — body екрана; е8 — е5 + 988 р. з g7s2; е9 — 860/911/941 з е3, 987 з е5, 1054 з w7s1l4.
- l3 е3 — е2 (каравани); е6 — е5 + body екрана; е8 — е7; е9 — дата на `cap` (IX–X ст.) проти 632 р. з е5, «немає малюнків» видно на фото; е10 — е4–е5.
- l4 е4 — міркування з тексту екрана; е6 — е5; е8 — body екрана; «друкарський верстат» відкидається з w7s1l2 е7 (XV ст.); е9 — body екрана (скарби дирхемів) + міркування; е10 — дати з е3, е5, е7 (622 — l3).
- l5 е5 (number) — body екрана; е6 — е4; е7 — е4, е7 (Індія — е7); е9 — body; е10 — алгебра з l4, цифри й шахи з е7, каролінзьке письмо — w7s1l2.
- l6: е2 — l1 е8; е3 — l2 (911 — е3, Анна/6000 — е5); е4 — l3 е5–е6; е5 — l4 е8 (назва книги vs ім'я — розведені на екрані); е6 — l5 е4; е7 — 537 (l1), 622 (l3), 762 (l4), 868 (l5), 987 (l2).
- Здогадки `hyp`: l1 е2, l2 е2, l4 е2, l5 е2 — відповідь дає наступна теорія (назва екрана — у fbText).

### Факти (нові; facts/world.md порожній) — джерела
1. Константинополь освячено 11.05.330 р. на місці грецького Візантія — https://blog.oup.com/2012/05/constantine-dedicates-constantinople/ ; https://www.worldhistory.org/Constantinople/
2. Жителі звали себе ромеями (Rhomaioi), державу — Імперією ромеїв; «Візантійська імперія» — пізніша назва вчених (традиційно — Ієронім Вольф, 1557; в уроці без імені й року) — https://en.wikipedia.org/wiki/Hieronymus_Wolf ; https://en.wikipedia.org/wiki/Succession_of_the_Roman_Empire
3. Юстиніан I — 527–565; Велісарій забрав у вандалів Африку 533–534; Готська війна 535–554; південь Іспанії (552); Кодекс 529, оновлений 534 (Звід цивільного права 529–534) — https://en.wikipedia.org/wiki/Byzantine_Empire_under_the_Justinian_dynasty ; https://www.worldhistory.org/timeline/Justinian_I/
4. «Ніка» 532 р.: згоріла велика частина міста; Свята Софія — 532–537 (див. також reports/verify/w7s1.md №27) — https://en.wikipedia.org/wiki/Nika_riots ; https://en.wikipedia.org/wiki/Hagia_Sophia
5. Промова Теодори (Прокопій, «Війни» I.24): «for one who has been an emperor it is unendurable to be a fugitive… royalty is a good burial-shroud»; промову вважають риторичною композицією — https://sourcebooks.web.fordham.edu/source/procop-wars1.asp ; https://dare.uva.nl/id/3e319f82-5885-4cbb-8847-6229a9d1c8e8
6. Мозаїка Юстиніана в Сан-Вітале, Равенна — бл. 547 р. (освячення церкви 547 р.) — https://commons.wikimedia.org/wiki/File:Mosaic_of_Justinianus_I_-_Basilica_San_Vitale_(Ravenna).jpg ; https://en.wikipedia.org/wiki/Basilica_of_San_Vitale — **верифікатору звірити «бл. 547 р.»** (в уроці «близько»).
7. Солід Юстиніана I, Константинополь, 538–565, Met 99.35.7406, напис D N IVSTINIANVS P P AVG (Dominus Noster … Perpetuus Augustus) — https://www.metmuseum.org/art/collection/search/469160 (API objects/469160); напис звірено з фото.
8. Мадридський Скилиця, XII ст.: мініатюра — грецький вогонь проти флоту Фоми Слов'янина; підпис «флот ромеїв палить флот ворогів» — https://commons.wikimedia.org/wiki/File:Greekfire-madridskylitzes1.jpg ; https://en.wikipedia.org/wiki/Madrid_Skylitzes . Повстання Фоми — 821–823 рр. (в уроці «820-ті рр.»).
9. Костянтин VII, «Про управління імперією», гл. 9, бл. 950 р.: моноксили з Новгорода, Смоленська, Любеча (Teliutza), Чернігова, Вишгорода збираються в Києві (Самбатас); поріг Ессупі — «Не спи!»; на 4-му порозі (Неситець) — варта від печенігів, поклажу несуть берегом — https://faculty.washington.edu/dwaugh/rus/texts/constp.html (пер. Jenkins, 1967) ; https://www.jassa.org/?p=4825
10. Македонська династія 867–1056; Василь II 976–1025 — https://www.worldhistory.org/Basil_II/ ; https://en.wikipedia.org/wiki/Battle_of_Kleidion
11. 987–989: повстання Варди Фоки; Володимир послав 6000 воїнів, отримав Анну, хрестився; загін — початок варязької гвардії («presumptive date» 988) — https://en.wikipedia.org/wiki/Varangian_Guard ; https://encyclopedia.pub/entry/32816 ; узгоджено з facts/hist (g7s2 `note` про Варду Фоку).
12. Мухаммед: бл. 570 р. Мекка; бл. 610 — перше одкровення (за вченням ісламу); 622 — хіджра до Ясриба/Медини, початок календаря; 630 — Мекка; 632 — смерть у Медині — https://en.wikipedia.org/wiki/Muhammad ; https://www.worldhistory.org/timeline/Prophet_Muhammad ; https://pluralism.org/muhammad-the-messenger-of-god
13. Мусульманський календар зараз — 1448 р. хіджри (з червня 2026), тобто XV ст. — розрахунок; верифікатору звірити.
14. Суніти/шиїти — розбіжність про наступника; шиїти — Алі, двоюрідний брат і зять — https://digfir-published.macmillanusa.com/mckayworld10e/mckayworld10e_ch9_10.html ; https://manchesterhistorian.com/2020/the-origins-of-the-sunni-shia-split-of-islam-by-jack-ullyatt/
15. Візантійсько-перська війна 602–628 виснажила обидві держави — https://en.wikipedia.org/wiki/Byzantine%E2%80%93Sasanian_War_of_602%E2%80%93628 (одне джерело; загальне місце підручників — верифікатору звірити).
16. Іспанія 711, Тарик, Гібралтар < Джабаль-Тарик — https://en.wikipedia.org/wiki/Tariq_ibn_Ziyad ; https://www.newworldencyclopedia.org/entry/Umayyad_conquest_of_Hispania
17. Облога Константинополя 717–718: грецький вогонь, сувора зима, напади болгар — https://en.wikipedia.org/wiki/Siege_of_Constantinople_(717%E2%80%93718) ; https://byzantine-world.com/historical-events/second-arab-siege-of-constantinople-717-718/ ; Пуатьє 732 — там само (порівняння) + загальновідоме.
18. Аббасиди 750; Багдад 762 (аль-Мансур, «Кругле місто») — https://www.cambridge.org/core/books/cambridge-world-history/baghdad-an-imperial-foundation-762836ce/BF772E2AAF4E5677A881AB43FFBB79F2 ; https://en.wikipedia.org/wiki/Timeline_of_the_history_of_Islam_(8th_century)
19. Дім мудрості, аль-Хорезмі: «алгебра» — від al-jabr у назві трактату, «алгоритм» — від латинізованого імені; індійська позиційна система через нього в Європі — https://www.britannica.com/biography/al-Khwarizmi ; https://www.newworldencyclopedia.org/entry/Muhammad_ibn_Mūsā_al-Khwārizmī
20. Дирхем Met 39.40.127.137: «dated 166 AH/783 CE», аль-Мухаммадія (Іран), срібло — https://www.metmuseum.org/art/collection/search/457209 . Безобразні монети — з реформи Абд аль-Маліка 696/697 — https://islamic-awareness.org/history/islam/coins/dinar2 ; https://www.metmuseum.org/art/collection/search/479445
21. Скарби дирхемів IX–X ст. на землях України (напр., Черкащина, I пол. IX ст.; обрізані дирхеми в сіверян) — https://numismatic-journal.com/index.php/journal/article/view/88 (сніпет; сторінка 403) ; https://netfreedom.org.ua/koly-ziavylysia-pershi-hroshi-v-ukraini-vid-delfiniv-do-hryvni/ ; https://www.aramcoworld.com/articles/1999/among-the-norse-tribes — **self, верифікатору звірити з ЕІУ/Noonan**.
22. Суй: об'єднання 589, Великий канал (Ян-ді, 605–609/611); Тан 618–907 — https://en.wikipedia.org/wiki/Grand_Canal_(China) ; https://people.willamette.edu/~rloftus/AS201%20SuiTangSong.html
23. Чан'ань ≈ 800 тис. — 1 млн у мурах, найбільше місто світу — https://en.wikipedia.org/wiki/Chang%27an ; https://www.worldhistory.org/Chang'an/
24. Іспити: запроваджені за Суй (605), розширені за Тан — https://en.wikipedia.org/wiki/Imperial_examination ; https://en.5000yan.com/history-of-china/sui-dynasty/establishment-imperial-examination-system.html
25. «Діамантова сутра» — 11.05.868 р., найдавніша друкована книга з датою, Дуньхуан, Британська бібліотека; друк з дерев'яних дощок; Біблія Гутенберга бл. 1455 — https://www.smithsonianmag.com/smart-news/Five-things-to-know-about-diamond-sutra-worlds-oldest-dated-printed-book-180959052/ ; https://www.lrb.co.uk/blog/2018/october/the-oldest-printed-book-in-the-world ; https://commons.wikimedia.org/wiki/File:Jingangjing.jpg
26. Порох — за Тан (даоські алхіміки, IX ст.) — https://en.wikipedia.org/wiki/Gunpowder ; https://en.wikipedia.org/wiki/Tang_dynasty — **self, верифікатору звірити**.
27. Гупти IV–VI ст., «золота доба»; позиційний десятковий запис (Ар'ябхата, 499), нуль як знак — пізніше (Брахмагупта, VII ст.) → в уроці «згодом з'явився й знак нуля» — https://asiasociety.org/files/IndianMath.pdf ; https://bharatnotes.com/ncert/new-ncert/class-7/exploring-society-part-2/the-gupta-era-an-age-of-tireless-creativity/
28. Чатуранга — Індія, VI–VII ст., через Персію (шатрандж) і мусульман до Європи — https://en.wikipedia.org/wiki/Chaturanga ; https://www.chess.com/blog/OfficialShort/the-precursor-to-chess
29. Раджпутський період — VII–XII ст., князівства раджпутів — https://www.clearias.com/medieval-india-rajput-kingdoms/ ; https://www.globalsecurity.org/military/world/india/history-rajput.htm ; програма Гісема («Раджпутський період»).
30. Верблюд Met 2000.8 «Camel with Dionysian imagery on its saddle bags», Суй, кін. VI — VII ст. — https://www.metmuseum.org/art/collection/search/53630 ; «Синій Коран» Met 2004.88, золото й срібло на пергаменті, фарбованому індиго, друга пол. IX — сер. X ст., можливо Кайруан — https://www.metmuseum.org/art/collection/search/454662

### Зображення (D-027)
| урок | файл | ліцензія | URL |
|---|---|---|---|
| l1 | justinian-mosaic.jpg (640×852, tall) | CC BY-SA 4.0, Petar Milošević | https://commons.wikimedia.org/wiki/File:Mosaic_of_Justinianus_I_-_Basilica_San_Vitale_(Ravenna).jpg |
| l1 | justinian-solidus.jpg | CC0, Met 99.35.7406 | https://www.metmuseum.org/art/collection/search/469160 |
| l2 | greek-fire.jpg | суспільне надбання (XII ст.) | https://commons.wikimedia.org/wiki/File:Greekfire-madridskylitzes1.jpg |
| l3 | blue-quran.jpg | CC0, Met 2004.88 | https://www.metmuseum.org/art/collection/search/454662 |
| l4 | abbasid-dirham.jpg (обрізано з DP252009) | CC0, Met 39.40.127.137 | https://www.metmuseum.org/art/collection/search/457209 |
| l5 | diamond-sutra.jpg | суспільне надбання (868 р.) | https://commons.wikimedia.org/wiki/File:Jingangjing.jpg |
| l6 | sui-camel.jpg | CC0, Met 2000.8 | https://www.metmuseum.org/art/collection/search/53630 |
Commons — лише 3 мініатюри з thumb.wikimedia.org (паузи 25 с, усі 200); Met — API + images.metmuseum.org. Ліцензії Commons — з API extmetadata.

### Сумнівні місця для верифікатора
- l1 е7: переклад «P P» як «вічний» (perpetuus) — стандартне читання; на фото видно «DNIVSTINI ANVSPPAVG».
- l2 е4: переказ гл. 9 скорочено й злито (міста, Київ, «Не спи!», печеніги біля 4-го порогу) — сенс збережено.
- l2 е5: «Цей загін вважають початком варязької гвардії» — формулювання обережне (вікі: «first formally constituted 988», encyclopedia.pub: «presumptive»).
- l4 е9: «Купці русі продавали хутро й невільників і брали за них арабське срібло» — лише у fbText; торгівля невільниками — як у w7s1l3 і hist g7s1.
- l3 intro: «за мусульманським — XV століття» (1448 р. х.) — перевір.
- Назва l5 «Книга, якій 1150 років» — 2026 − 868 = 1158, тобто «понад 1150»; лишив округлення в назві.

### Пропозиції
- TERM (glossary/world.md): Велісарій, Теодора, Василь II, Варда Фока, Костянтин VII Багрянородний, аль-Хорезмі, Аббасиди, Чан'ань, Гупти, раджпути, хіджра, суна, «Діамантова сутра», Скилиця — закріпити написання.
