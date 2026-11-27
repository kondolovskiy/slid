# Верифікація e9s5 «Youth culture and clubs» (eng, 9 кл.)

Верифікатор: verifier-e9s5, 2026-11-26. Файл: content/eng/g9-e9s5.js. Скіл content-verify (розділ «Англійська»).
**Вердикт:** усі 7 уроків → `verified`. Зроблено 7 правок у змісті, з них 4 критичні; окремо — статуси й переміщення задачі. Людині вирішувати нічого не треба (решта — рекомендації).
Прогін: `validate --section e9s5` дав 0 помилок і 0 попереджень; `stats --subject eng` не показав для e9s5 «нетипово для сім'ї». Плейтест не запускали: у контейнері немає Python-модуля playwright, тож він лишається за CI (job browser).
Мережа: dofe.org, scouts.org.uk, plast.org.ua, royal.uk, britannica.com, ukrinform.ua, intaward.org, qld.gov.au, encyclopediaofukraine.com проксі відхиляє (403 / ENOTFOUND). Офіційні сайти взято з результатів WebSearch, відкритих у цій сесії.

## 1. Факти

| Твердження в уроці | Джерела (відкриті в сесії) | Вердикт |
|---|---|---|
| Plast — the Scout organisation of Ukraine, started in Lviv | https://en.wikipedia.org/wiki/Plast («founded in Lviv… in 1911»); https://uk.wikipedia.org/wiki/Пласт_(організація) (засновано восени 1911) | ✅ |
| 1911 — перші групи; 12 April 1912 — офіційний початок; «more than 100 years ago» | en.wikipedia Plast, інфобокс: «First groups in 1911, officially established on 12 April 1912»; WebSearch «Пласт заснований 1911 Львів 12 квітня 1912» → ukrinform.ua: «Пласт вважає своєю офіційною датою утворення 12 квітня 1912 року»; esu.com.ua. Примітка: uk.wikipedia пише, що точну дату присяги не встановлено, а 21.04.1912 — перші збори «Крука». Формулювання уроку «Others give 12 April 1912: that was the official start» це не порушує, бо це офіційна дата Пласту | ✅ |
| Назва від plastuny, Cossack scouts | en.wikipedia Plast («plastun is a historical name for a Cossack scout»); uk.wikipedia (від козаків-пластунів, розвідників) | ✅ |
| Plast has members in other countries too | en.wikipedia Plast (≈ 3 000 членів поза Україною, 2006; осередки в Canada, USA, Australia, UK) + та сама теза в uk.wikipedia (діаспора) | ✅ |
| The Scouts started in England; 1907, Baden-Powell, about twenty boys, Brownsea Island | https://en.wikipedia.org/wiki/Brownsea_Island_Scout_camp (29.07–9.08.1907; «20 or 21 boys»; Poole Harbour, southern England); https://en.wikipedia.org/wiki/Robert_Baden-Powell,_1st_Baron_Baden-Powell («about twenty boys»); WebSearch → scouts.org.uk «twenty boys… camp on Brownsea Island… 1 August 1907», National Trust | ✅ (у джерелах 20–22 хлопці, тому «about» правильне) |
| Brownsea — «the first Scout camp» (l3 gaps) | en.wikipedia Brownsea (камінь «commemorating the first Scout camp»); https://en.wikipedia.org/wiki/Scouting («experimental Scout camp on Brownsea Island»); WebSearch: «often called the first Scout Camp» | ✅ |
| Soon there were Scouts in many countries | en.wikipedia Baden-Powell («first as a national, and soon an international phenomenon») | ✅ |
| DofE: UK, 1956; від 14 до 24 років; Bronze / Silver / Gold; volunteering, physical, skills, expedition | https://en.wikipedia.org/wiki/The_Duke_of_Edinburgh%27s_Award («founded in the United Kingdom in 1956»; 14–24, «by the participant's 25th birthday»; рівні й розділи); WebSearch «Duke of Edinburgh's Award founded 1956 ages 14 to 24…» → royal.uk «Founded… in 1956», dofe.org | ✅ |
| Опитування 41/27/20/12 (l5) | вигадане опитування шкільної газети, і в уроці воно так і подане | ✅ |

## 2. Форми, наголос, граматика (словник відкрито в сесії, curl)

| Форма | CD | OALD | Вердикт |
|---|---|---|---|
| teenager — 1-й склад | https://dictionary.cambridge.org/dictionary/english/teenager /ˈtiːnˌeɪ.dʒər/ | https://www.oxfordlearnersdictionaries.com/definition/english/teenager /ˈtiːneɪdʒə(r)/ | ✅ |
| culture — 1-й | /ˈkʌl.tʃər/ | /ˈkʌltʃə(r)/ | ✅ |
| computer — 2-й | /kəmˈpjuː.tər/ | /kəmˈpjuːtə(r)/ | ✅ |
| vlogger — 1-й | /ˈvlɒɡ.ər/ | /ˈvlɒɡə(r)/ | ✅ |
| member — 1-й | /ˈmem.bər/ | /ˈmembə(r)/ | ✅ |
| volunteer — 3-й | /ˌvɒl.ənˈtɪər/ | volunteer_1 /ˌvɒlənˈtɪə(r)/ | ✅ |
| expedition — 3-й | /ˌek.spəˈdɪʃ.ən/ | /ˌekspəˈdɪʃn/ | ✅ |
| organisation — «sa» (4-й склад) | organization /ˌɔː.ɡən.aɪˈzeɪ.ʃən/ | /ˌɔːɡənaɪˈzeɪʃn/ | ✅ |
| hang out | CD hang-out: «B1 informal to spend a lot of time in a place or with someone» | OALD hang_1: «hang out (informal) to spend a lot of time in a place» | ✅ |
| be into | — | OALD into: «(informal) to be interested in something in an active way» | ✅ |
| where / when / why у defining clauses | https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns («where places… when times… why reasons») | — | ✅ |
| whose — для людей і речей | https://dictionary.cambridge.org/grammar/british-grammar/whose («possession by people, animals and things»); relative-pronouns (для речей — «in more formal styles») | — | ✅ (у l4 сказано «people and things»; формулювання допустиме) |
| the reason why / the reason (that) | CD reason: «The reason why grass is green…», «The reason (that) I'm calling…»; CD Grammar: «reason that… slightly more formal than reason why» | — | ✅ (у `word` l5 в ключі є why і that) |

BrE: AmE-правопису й лексики немає (organisation, -ise, at the weekend, sport, holiday немає). IPA немає. Аудіювання не імітується. Літер A/B/C і позиційних посилань немає. `uk` немає, і для 9 кл. він і не потрібен.

## 3–4. Завдання: розв'язок і опора (D-019)
Кожне завдання я розв'язав сам, перш ніж дивитися в ключ. Нижче номери екранів — після правок.

| Урок · екран | Моя відповідь = ключ? | Опора | Вердикт |
|---|---|---|---|
| l1 е2 choice (hyp) into | так | здогадка `hyp` | ✅ |
| l1 е4 word «really ___ online games» | into = так | е3 (into) | ✅ |
| l1 е6 match (5 пар) | так; інших доречних пар немає | е3, е5 | ✅ |
| l1 е7 stress | так | е3, е5 (`<u>`) | ✅ |
| l1 е8 choice vlogger · е9 pick hang [in] · е10 gaps | так | е5; е3 | ✅ |
| l2 е2 choice (hyp) Plast | так | `hyp`; відповідь дає е4 | ✅ |
| l2 е4 choice 1911/1912 | C = так | текст на екрані | ✅ |
| l2 е6 choice Emma 15 → DofE | B = так | текст на екрані | ✅ |
| l2 е7 multi [0,1,3] | так | е4, е6. «The DofE started in Ukraine» раніше відкидалося лише міркуванням; виправлено: у тексті тепер «started in the UK» | ✅ після правки |
| l2 е8 gaps who/which/that | так | e8s4l3, e6s6l3 (requires) | ✅ |
| l2 е9 stress · е10 word volunteer · е11 gaps | так; leader відсікає «an adult» + «Our leader is Mr Price» | е3, е5 | ✅ |
| l3 е2 choice (hyp) · е4 gaps · е6 choice · е7 sort | так | е3, е5 | ✅ |
| l3 е8 build | так. Раніше в ключі не було питальних порядків. Виправлено | е3 | ✅ після правки |
| l3 е9 pick [where] · е10 word when/that · е11 gaps | так | е3, е5 | ✅ |
| l4 е2 choice (hyp) · е4 gaps · е5 choice | так | е3 | ✅ |
| l4 е6 match | так. Раніше пара «Plast is an organisation whose ideas started the Scouts» граматично підходила. Виправлено: тепер «who took about twenty boys to a camp in 1907» | l2 е6 (факт), l3 е3/е5, e8s4l3 (who для людей) | ✅ після правки |
| l4 е7 build | так. Раніше в ключі не було питальних порядків. Виправлено | е3 | ✅ після правки |
| l4 е8 pick · е9 word whose · е10 gaps | так | е3; l3 | ✅ |
| l5 е2 choice survey · е4 gaps · е5 pick · е7–е8 choice · е9 build · е10 word why/that · е11 gaps | так | е1–е2 (дані), е3, е6 | ✅ |
| l6 е2 choice (hyp) стиль постера | так | `hyp` | ✅ |
| l6 е3–е4 choice (постер, лист) · е6 match · е8 choice Marko | так | е3–е4 на екрані; «Remember the poster» | ✅ |
| l6 е7 word «Would you ___ to come» | like/love/care. «want» теж граматично правильне й не відсікається. Додано в ключ | е5 | ✅ після правки |
| l6 е9 pick [which] · е10 gaps | так | l3; е5 | ✅ |
| l7 Т1–Т9 (boss, `pre` на l1–l6) | так. Т8 має обидва порядки | розділ, `pre` | ✅ |

**Друга правильна відповідь** перевірена по всьому розділу: where/which, when/that, why/that, whose/who’s, the reason why/that/because, in which. In which ніде не дається і не потрібна: дієслова без прийменника в кінці. `build`: у l3 і l4 тепер по 4 порядки; l5 — один, бо «I joined the photo club, that’s why» — розмовне з комою, не норма; Т8 — 2 порядки. `word`: жоден ключ не має кінцевого `.!?`.

**requires e8s4l3 / e8s4l4** звірено, обидва verified. l3 вчить who/which/that, людей і речі, коли можна пропустити («When can we leave out who, which, that?»). l4 вчить коми в non-defining, лише who/which, «Not that». Це відповідає вжитку в e9s5: l2 е8, l4 е10, boss Т9 «The chess club, which meets…».

## 5. Педагогіка, вік, стиль
- Кожен урок іде так: ситуація → `hyp` → `info` → завдання. Пояснення на рівні 9 кл.: речення до 12 слів, граматика пройдена. Є «чому» (there / then, після слова — дієслово чи особа). Підказки відповіді не видають.
- Течії молодіжної культури подано без оцінок і стереотипів, політики немає. Діалоги — репліками в `body`, без `type: "dialog"` (D-056).
- **Екрани теорії.** l2 `info` мав 83 слова, а l1 `info` — 78. Профіль 6–9 кл. дозволяє ≤ 60 (style/eng.md «Мова пояснень за класами»). Обидва розділено (див. правки 1–2). Тепер на екранах теорії: l1 — 49 і 29 слів, l2 — 47 і 36. l3 е3 має 62 слова разом із прикладами, без прикладів — менше 60.
- **Авторське право.** Дослівний пошук WebSearch у лапках не дав збігів:

| Фрагмент | Запит | Результат |
|---|---|---|
| «In 1907, Robert Baden-Powell took about twenty boys to a camp on Brownsea Island» | у лапках | дослівного збігу немає, лише тематичні сторінки |
| «Do you love taking photos? Join the club where photos tell stories» | у лапках | збігу немає |
| «This is the skatepark where I hang out with my friends» | у лапках | збігу немає |

## 6. Правки (зроблено, мінімальні)
1. l1: `info` розділено на «Youth culture» (into, fan, hang out, trend) і «Gamers, skaters, vloggers». Між ними стоїть `word` (into), перенесений з е8. Посилання «the list» у hint і fbBad виправлено на назви обох екранів.
2. l2: `info` розділено на «Youth organisations» (organisation, member/join, camp, go hiking) перед читанням 1 і «Volunteers and awards» (volunteer, leader, award, expedition) перед читанням 2. Посилання в hint і fbBad виправлено.
3. l2, читання 2: «It started in the UK in 1956». Тепер дистрактор multi «The DofE started in Ukraine» відкидається за текстом.
4. **Критична.** l3 build: у ключ додано «Is this the camp where Ostap stayed in July?» і «Is the camp where Ostap stayed in July this?».
5. **Критична.** l4 build: у ключ додано «Is Emma the girl whose brother skates?» і «Is the girl whose brother skates Emma?».
6. **Критична.** l4 match: «whose ideas started the Scouts» замінено на «who took about twenty boys to a camp in 1907». Причина: whose граматично приєднується до будь-якого іменника, тож Plast не відсікався. Після заміни половина підходить лише до людини. fbBad і fbText оновлено.
7. **Критична.** l6 word: у ключ додано «want».
8. Усім 7 урокам поставлено `status: "verified"`. Заповнено `meta.factcheck`, у шапці файлу статус оновлено.
9. Задачу переміщено в done.

## 7. Рекомендації (не блокують)
- Whose тепер не тренується в match l4. Його досить в інших завданнях: gaps, choice, build, pick, word, фінальні gaps і boss Т5, Т9.
- Плейтест `python3 tools/playtest.py --section e9s5` має пройти в CI (job browser), бо локально модуля playwright немає. Оркестратору треба зробити build.
