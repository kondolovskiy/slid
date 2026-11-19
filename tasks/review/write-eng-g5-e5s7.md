---
claimed_from: todo
claimed_at: 2026-11-19T14:22:10.393Z
id: write-eng-g5-e5s7
type: write-section
subject: eng
grade: 5
section: e5s7
depends_on: [curate-eng-plan-g5, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, write-eng-g4-e4s1]
status: review
claimed_by: writer-e5s7
created: 2026-11-19
source: design-eng
---
# Написати розділ «Рідне місто/село» (Англійська мова, 5 клас)

## З програми
- Тема й підтеми: прогулянка містом/селом; місцезнаходження — МП-ІМ с. 20 (розд. 4.2.1), граматика — с. 21–22 (розд. 4.4).
- Рівень: A1 → A2 (вхід A1; A2 — наприкінці 6 кл.).
- Граматика (пропозиція розподілу, docs/design/english.md §4): there is/are; prepositions of place; imperatives for directions. Остаточно — за `content/eng/plan.js` (curate-eng-plan-g5): якщо план інший, план головніший.
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g5):** підтеми з МП-ІМ с. 20: місцезнаходження; основні історичні та культурні відомості (Рідне місто/село) + прогулянка містом/селом (підтема «Подорожі», поєднано планом). Маршрут — формули зі словника («straight ahead»; «go straight on» словниками не підтверджено). `requires` на уроки 4 кл. — за таблицею reports/verify/plan-eng-g5.md §6, коли ті уроки будуть.

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g5-e5s7.js`: `SLID.section("eng", { id: "e5s7", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу (4–5 кл.: короткі речення, шаблонні інструкції, правило — зразком і таблицею; граматику в 4 кл. засвоюють «на рівні мовленнєвих зразків», ТОП 3–4 PDF с. 61). Згорнутий український переклад правила (`uk`) за замовчуванням не додавати — лише якщо верифікатор чи плейтест покажуть потребу (рішення людини 2026-11-19).
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e5s7` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
**writer-e5s7, 2026-11-19.** Файл `content/eng/g5-e5s7.js` (7 уроків: 6 + boss), власна мапа `img/eng/e5s7/town-map.svg` (CC0, запис у `credits`).
`node tools/validate.mjs --section e5s7` — 0 помилок, 0 попереджень; `node tools/stats.mjs --subject eng` — e5s7 без прапорців (e5s7l1 мав maxText z=2.8 — скоротив info).

**Уроки (id — title — типи завдань):**
- e5s7l1 «Places in town: a library, a bank, a park» — choice (hyp), choice, match (півречення, без картинок), stress, word, gaps.
- e5s7l2 «Is there a cinema? There is, there are» — choice («Remember?», спирається на e4s2l5), gaps, choice, pick, build, word, gaps.
- e5s7l3 «Next to, opposite, between: where is it?» — мапа на кожному екрані; choice (hyp), choice, gaps, pick, word, build, choice.
- e5s7l4 «Excuse me, where is the bus stop?» — choice (hyp), choice, match (питання ↔ відповіді), gaps, pick, build, word, choice. Назва відходить від рядка плану «Excuse me, where is the station? Turn left, turn right»: маршрут — у селі Оксани (Україна в розділі), а станції в селі немає; формули turn left/right — в уроці.
- e5s7l5 «A walk around the town with a map» — choice, gaps, choice, word, order, build, choice (усе за мапою).
- e5s7l6 «My town: history and culture» — choice (hyp), choice ×2 (читання 2 частини), gaps, multi, stress, word, gaps.
- e5s7l7 «Welcome to our town!» (boss, e5s7boss «Young town guide») — word, gaps, choice (мапа), gaps, choice (мапа), choice; `pre` на l1…l6.

**Герої й місця (узгоджено з 4 кл.):** Oksana — село Zelena Dolyna біля Полтави (тітка в Полтаві, «On Saturdays we go to Poltava» — e4s1l4); у селі — школа, один магазин (e4s1), церква, пошта, автобусна зупинка, дві ферми; кінотеатру й музею немає. Emma — містечко в Англії; мапа центру — вигадана (High Street, Station Road). Tom — брат Емми. Парку в селі не заявляю (e4s6l6 «Her school is in the park» не суперечить).

**requires:** `["e4s1l4", "e4s2l2", "e4s2l4", "e4s2l5", "e4s7l2"]` — за reports/verify/plan-eng-g5.md §6 (e4s2, e4s7, e4s1); id перевірено у файлах, validate без помилок.

**Факти (≥ 2 джерела):**
- І. Котляревський народився в Полтаві, жив і похований там — en.wikipedia https://en.wikipedia.org/wiki/Ivan_Kotliarevsky; uk.wikipedia https://uk.wikipedia.org/wiki/Котляревський_Іван_Петрович. У тексті: «He was a famous Ukrainian writer. He lived in Poltava.»
- «Енеїда»: перші три частини видано 1798 (Санкт-Петербург) — ЕСУ «Полтавський літературно-меморіальний музей І. Котляревського» https://esu.com.ua/article-887900 («Енеида…» (Санкт-Петербургъ, 1798)); en.wikipedia https://en.wikipedia.org/wiki/Eneida; uk.wikipedia https://uk.wikipedia.org/wiki/Енеїда_(Котляревський). У тексті — «The first parts are from 1798» (повне видання — 1842, тому не «Eneida is from 1798»).
- «Енеїда» — бурлескна (смішна) поема українською — en.wikipedia Eneida («burlesque poem in the Ukrainian language»), uk.wikipedia («бурлескно-травестійна поема»). «New Ukrainian literature starts with this poem» — uk.wikipedia Котляревський («першого твору нової української літератури»), uk.wikipedia Енеїда («започаткувала становлення нової української літератури»), en.wikipedia Kotliarevsky («starting point of modern Ukrainian literature»).
- У Полтаві є музей Котляревського (відкрито 1952), там його рукописи, видання, особисті речі — ЕСУ article-887900; en.wikipedia Kotliarevsky («In 1952, the Kotliarevsky Museum was opened in Poltava»). У тексті: «Today there is a museum about Kotliarevskyi in Poltava. People come to see his books and things.»
- Написання Kotliarevskyi, Eneida — за КМУ № 55 (glossary/eng.md: й → i, ї → i).
- **Не взято:** дату заснування Полтави — 1174 (Іпатіївський літопис, «Лтава») vs 899 (ювілей 1999) — джерела розходяться (en.wikipedia Poltava); статті ЕСУ «Полтава» й «Котляревський Іван Петрович» живим пошуком esu.com.ua (search_live.php) не знайдено — є лише стаття про музей.

**Форми й лексика (CD / OALD, curl у сесії):**
- straight ahead — CD straight: «straight ahead … it's straight ahead (of you)!», «Go straight along this road and turn left at the traffic lights» (https://dictionary.cambridge.org/dictionary/english/straight); CD ahead (B1) «straight ahead» (https://dictionary.cambridge.org/dictionary/english/ahead). **Нове:** OALD straight_1 (adverb) має «Keep straight on for two miles.» (https://www.oxfordlearnersdictionaries.com/definition/english/straight_1) — план дивився straight_2 (adjective). У вправах лише «Go straight ahead»; «straight on» як пастку не даю (було б другою правильною).
- turning — CD B1 «Take the third turning on the left» (https://dictionary.cambridge.org/dictionary/english/turning) — у 5 кл. не беру, лише «Turn left at the shop».
- on the left / on your left — CD left A2 (https://dictionary.cambridge.org/dictionary/english/left).
- opposite (prep., A2 у CALD) «in a position facing someone or something but on the other side» (https://dictionary.cambridge.org/dictionary/english/opposite); between A1 (https://dictionary.cambridge.org/dictionary/english/between); past prep. A2 «further than a particular point» (https://dictionary.cambridge.org/dictionary/english/past).
- get = arrive, A1: «How do I get to…?» (https://dictionary.cambridge.org/dictionary/english/get); excuse me A1 «Excuse me, where is the…?» (https://dictionary.cambridge.org/dictionary/english/excuse-me).
- library A2, borrow A2, cinema A2, museum A1, station A1, post office, bus stop A2, parcel B1 (UK) — https://dictionary.cambridge.org/dictionary/english/<word>.
- famous A1, writer B1, poem B1, history A2 — CD; нові слова l6 подано визначеннями на info.
- Наголос (CD UK): library /ˈlaɪ.brər.i/, cinema /ˈsɪn.ə.mɑː/, station /ˈsteɪ.ʃən/, history /ˈhɪs.tər.i/, famous /ˈfeɪ.məs/, poem /ˈpəʊ.ɪm/ — 1-й склад; museum /mjuːˈziː.əm/ — 2-й; opposite /ˈɒp.ə.zɪt/ — 1-й; between /bɪˈtwiːn/ — 2-й. theatre (2 склади в UK) і café (BrE/US різний наголос) у `stress` не брав.

**Друга правильна відповідь — перевірено:**
- `build` (4 шт.): перебір усіх перестановок (з extra) через `SLID_LANG.check` у node — приймається лише ключ. Перша плитка з великої + `keepCase: true` (пастка verifier-e4s8: розповідне/питальне й обставина на початку відсікаються регістром). l3 «The museum is opposite the library»: дзеркальне «The library is opposite the museum» теж правдиве — відсічене регістром плитки «The museum».
- `word`: l1 library; l2 are; l3 between (near/next to не підходять — «… the café and the library»); l4 left (стрілка ←); l5 cinema (навпроти школи лише кінотеатр); l6 writer + poet/author у ключі; boss office.
- Мапа: між/навпроти/поруч однозначні: bank між café і library, post office між library і cinema, museum навпроти library, school навпроти cinema, park навпроти café і bank (про парк «що навпроти» не питаю). Маршрути l5/boss перевірено на мапі: Station Road → наліво (захід) — museum зліва; направо (схід) — school справа.
- `gaps` along/across — контраст на «to the end» / «the road … to the other side» (пастка verifier-e4s7), не на bridge.

**Спірне / на верифікацію:**
1. **Власний SVG і credits:** прецеденту в eng немає; credits вимагає https — дав URL файлу в репозиторії (github.com/…/blob/main/img/eng/e5s7/town-map.svg), він запрацює після злиття в main. Ліцензія CC0 — авторський малюнок. Якщо потрібна інша форма запису власних схем — рішення куратора (рядок STYLE в inbox).
2. **Минулий час у l6:** «was a famous writer», «lived in Poltava» — Past Simple як лексика читання (повторення інвентаря 3 кл., як у e4s7); у завданнях минулий час не оцінюю.
3. **Ліво/право на мапі** (l5, boss T5) — навичка повороту відносно напрямку руху; є `hint` «Put your finger on the map». Спостерігати в плейтесті.
4. l2 #2 — оцінюваний choice до info (eyebrow «Remember?»): повторення e4s2l5 (у requires).
5. Плейтест не запускався (build робить оркестратор; модуля playwright у контейнері немає) — після build: `python3 tools/playtest.py --section e5s7`; мапу відрендерив headless Chromium — читається.
