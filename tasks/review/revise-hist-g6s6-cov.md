---
claimed_from: todo
claimed_at: 2026-11-12T14:37:58.359Z
id: revise-hist-g6s6-cov
type: revise-section
subject: hist
grade: 6
section: g6s6
status: review
claimed_by: writer-hist-g6s6
created: 2026-11-10
depends_on: [fix-hist-weeks-cov]
---
# g6s6: новий урок g6s6l7 «Перші імперії: Ассирія і Персія»

Підстава: reports/research/coverage-research-hist-coverage-g5-6.md (задача curate-hist-coverage); програма «Досліджуємо історію і суспільство. 5–6 кл.» (Васильків, Димій, Шеремета; наказ МОН № 795 від 12.07.2021) — https://ippo.if.ua/predmety/istoriya/media/files/DYS-5-6-klasy-Vasylkyv.pdf.

Звіт §4.2, таблиця §2: 6 кл. розд. 2, № 33; розд. 4, № 53, 54, 60.

Що зробити в `content/hist/g6-g6s6.js`:
1. **Новий урок `g6s6l7`** (формат id — D-017, без дефіса, хоч наявні уроки розділу мають `g6s6-lN`) «Перші імперії: Ассирія і Персія»: ознаки держави й імперії; форми правління (монархія; республіку пізніше вчить g6s8 — лише назвати); Ассирія, Персія (дороги, сатрапії); хети — залізо, лідійці — перша монета. Персію як ворога греків уже вчить g6s7-l4 — посилання, без повтору.
2. Тест рівня dgh6 — без змін.

## Загальне
- Скіл `content-author` (і `hist-images` для нових зображень). Еталон будови — сусідні verified-уроки цього ж розділу; пріоритет у звіті має розділ «Незалежна верифікація».
- **Нові уроки** — у масиві `lessons` перед фіналом `g6s6-l6` (як g8s1l6, g8s5l8), у хронологічному місці серед уроків розділу; eyebrow / нумерація «Урок N» — за позицією. 5–10 екранів, ≥ 50 % завдань, ≥ 2 типи, ≥ 1 hint, `learned` — лише з екранів уроку.
- **Фінал `g6s6-l6`:** по одному завданню на кожен новий урок (до 7 завдань; якщо в розділі ≥ 9 уроків — одне завдання може охопити два суміжні уроки, D-048 п. 1, TQ-045); `boss` питає лише те, що було в розділі.
- Чесні завдання D-019; **D-027 — ≥ 1 справжнє `img` у кожному новому уроці** (відкрита ліцензія, `cap`, `credits`; на Вікісховищі одночасно ≤ 2 агенти). Правило 11: наявні id не перейменовувати, нові — лише ті, що в задачі.
- Змінені й нові уроки → `status: "draft"`; незмінені verified-уроки не чіпай.
- Факти: спершу memory/long/facts/hist.md, hist-2.md (і facts/world.md для спільних тем); новий факт — ≥ 2 надійні джерела з URL у нотатках; позначене ⚠ — звір сам, не вдалося — не оцінюй. Рядки FACT — у memory/short/inbox.md.
- `weeks` розділу міняє задача fix-hist-weeks-cov (вона — у depends_on); сам не змінюй.
- Лише `content/hist/g6-g6s6.js`, `img/hist/g6s6/` і ця задача. Build не запускай. Тимчасові файли — `<scratchpad>/<task-id>/`.
- Готово: `node tools/validate.mjs --section g6s6` — 0 помилок; `node tools/stats.mjs --subject hist` — без прапорців для змінених уроків; нотатки з переліком уроків і URL; `node tools/claim.mjs move <task-id> review` → незалежна перевірка `content-verifier` (факти, D-019, D-027).

## Нотатки агента

**writer-hist-g6s6, 2026-11-12.** Файл `content/hist/g6-g6s6.js`; теки `img/hist/g6s6/` (+3 файли).

### Уроки
- **g6s6l7 «Велетні біля воріт»** (Ассирія і Персія), новий, `draft`; стоїть після g6s6-l5, перед фіналом (eyebrow «Розділ 3 · Урок 6» — як у сусідів; див. STYLE в inbox про нумерацію за weeks). 10 екранів, 6 оцінюваних (0,6), типи sort / choice / multi, 1 hint. stats: 31 / 51 / 6,6 — без прапорців. Терміни (≤ 3): монархія, імперія, сатрапія; республіку лише названо (вчить g6s8). Хети — жирним як назва народу, не термін.
- **g6s6-l6 (фінал)** → `draft`: додано «Завдання 7» з `pre: "g6s6l7"` (рельєф з Персеполя, сатрапії + Царська дорога, correct 1); fbOk «Екскурсію завершено!» перенесено із завдання 6 (там тепер «Так.»). Решта фіналу без змін, `pre` у завдання 1–6 не додавав (пропозиція в inbox).
- l1–l5 не змінено; тест dgh6 не змінено (validate --diag dgh6 — 0/0).
- Узгоджено з g6s10: бібліотеку Ашшурбаніпала, Гільгамеша й писарів не згадую; Персію як ворога греків лише анонсовано в outro (g6s7-l4).

### Опори завдань (D-019)
- е3 sort: перелік ознак — е2; «торгівля», «віра» — поза переліком (міркування).
- е4 choice: увесь зміст — у body е4 (хети, залізо, метеорити).
- е6 choice: переселення описано в body; мета — міркування (1 крок); hint — навідне питання.
- е8 choice: 2700 км, 3 місяці / 9 днів — у body; висновок — міркування.
- е9 choice: «до того метал зважували» — body; висновок — міркування.
- е10 multi: Вавилон (е5 і е7), монархія (е2 + цар Ассирії е1/е5), «багато народів» (е5, е7), Царська дорога — лише Персія (е8), обрання — республіка (е2).
- Фінал, завд. 7: сатрапії (е7), Царська дорога (е8), переселення (е6).
- Позиції правильних: е4 = 2, е6 = 1, е8 = 0, е9 = 2, multi [1, 3, 4]; фінал 7 = 1 (завд. 6 = 2).

### Факти (≥ 2 відкритих джерела)
- Ассирія — на Тигрі, північ Межиріччя; столиця Ніневія; залізна зброя, тарани; підкорення Вавилона; депортації, щоб зруйнувати місцеву ідентичність; 612 р. до н. е. Ніневію зруйнували вавилоняни й мідяни — https://uk.wikipedia.org/wiki/Ассирія ; https://en.wikipedia.org/wiki/Neo-Assyrian_Empire
- Єгипет, 671 р. до н. е. (Асархаддон узяв Мемфіс) — https://en.wikipedia.org/wiki/Neo-Assyrian_Empire ; https://en.wikipedia.org/wiki/Assyrian_conquest_of_Egypt ; https://www.livius.org/sources/content/anet/289-esarhaddons-nahr-al-kalb-inscription/
- Хети: держава в Малій Азії, XVII ст. – бл. 1190 р. до н. е.; «першість» у виплавці заліза — колишній погляд, тепер заперечений; найдавніше залізо бронзової доби — метеоритне — https://en.wikipedia.org/wiki/Hittites ; https://uk.wikipedia.org/wiki/Хети ; https://www.sciencedaily.com/releases/2017/12/171204094937.htm (Jambon 2017) ; https://cnrs.fr/en/node/2499
- Персія: Кір II — 550 р. до н. е. (Мідія), Лідія 547/546, Вавилон 539; від Єгипту (525) до Інду; Дарій I 522–486, сатрапії, сатрап збирав податки — https://en.wikipedia.org/wiki/Achaemenid_Empire ; https://uk.wikipedia.org/wiki/Кір_II_Великий ; https://uk.wikipedia.org/wiki/Дарій_I ; https://en.wikipedia.org/wiki/Satrap
- Царська дорога Сарди — Сузи ≈ 2683–2699 км («майже 2700»), 111 станцій, пішки ≈ 90 днів, гінці ≈ 9 днів — https://en.wikipedia.org/wiki/Royal_Road ; https://uk.wikipedia.org/wiki/Царська_дорога
- Лідія: захід Малої Азії, Сарди; «винахідники монети», датування перших монет спірне (VII – сер. VI ст. до н. е.; uk.wiki — ≈ 620) → «у VII–VI ст. до н. е.» — https://en.wikipedia.org/wiki/Lydia ; https://uk.wikipedia.org/wiki/Лідія
- Монархія (влада однієї особи, як правило спадкова й довічна), імперія — https://uk.wikipedia.org/wiki/Монархія ; https://uk.wikipedia.org/wiki/Імперія ; ознаки держави — програма ПВас, 6 кл. розд. 4 (№ 53–54 звіту).

### Зображення (D-027; переглянуто самому)
- е1 `lamassu.jpg` — Met 32.143.1 «Human-headed winged bull (lamassu)», Nimrud (Kalhu), ca. 883–859 BCE, H. 313,7 см; CC0 (API isPublicDomain) — https://www.metmuseum.org/art/collection/search/322608
- е7 + фінал 7 `apadana-lydians.jpg` — Carole Raddato, CC BY-SA 2.0 (FlickreviewR 19.05.2020); лідійська делегація на південній стіні східних сходів Ападани — https://commons.wikimedia.org/wiki/File:Relief_on_the_southern_wall_of_the_east_stairway_of_the_Apadana_depicting_Lydians_who_offer_vases,_cups_and_bracelets_and_a_chariot_drawn_by_diminutive_horses,_Persepolis,_Iran_(32836014327).jpg ; ідентифікацію (посудини, чаші, браслети, колісниця) звірено: https://livius.org/articles/place/persepolis/persepolis-photos/persepolis-apadana-east-stairs ; https://cercetari-arheologice.ro/wp-content/uploads/2023/06/ca30_1_03_Azadi.pdf ; дата Ападани (перша половина V ст. до н. е., задум Дарія I, завершив Ксеркс) — https://en.wikipedia.org/wiki/Apadana
- е9 `lydian-stater.jpg` — Met 26.59.2 «Gold stater», Lydian, ca. 560–546 BCE, CC0; лев і бик; скарб 30 статерів із Сард (1922) — https://www.metmuseum.org/art/collection/search/252454 ; https://sardisexpedition.org/en/artifacts/latw-28_1-28_2
- Commons — 2 запити API + 2 мініатюри thumb.wikimedia.org; решта — Met API.

### Сумнівне / для верифікатора
- «Хети мали залізні речі» — en.wiki: залізних речей бронзової доби в Анатолії приблизно стільки ж, як у Єгипті й Межиріччі; програма/підручник подають «хети — залізо» як першість — урок навмисно подає це як суперечку (TQ не потрібне: це обережніше формулювання).
- «Фараон чи вавилонський цар … владу успадковував син» — узагальнення для 6 кл. (монархія — «як правило спадкова»).
- Кількість сатрапій не наводжу (20 за Геродотом / 23–24 / 26→36 — джерела розходяться).
- 612 р. до н. е.: у тексті «вороги зруйнували» (хто саме — не оцінюється).
