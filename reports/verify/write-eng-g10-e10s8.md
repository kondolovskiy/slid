# Верифікація e10s8 «Education and careers» (eng, 10 кл., B1→B2)

Верифікатор: verifier-e10s8, 2026-11-26, свіжий контекст (розділу не писав). Скіл `content-verify` + розділ «Англійська».
Файл: `content/eng/g10-e10s8.js`. Задача: `tasks/review/write-eng-g10-e10s8.md`.

**Вердикт по розділу: verified** — 7 уроків (l1–l6 + boss l7). Відкритих ❌ і ⚠️ немає після 6 правок (нижче).
`node tools/validate.mjs --section e10s8` — 0 помилок, 0 попереджень (після правок). `stats --subject eng`: прапорці лише в l2 (урок читання з повним обсягом П1407 с. 21: gradedShare, readWordsPerScreen, maxReadWords, maxText, z ≈ 2–2.6) — пояснено автором, калібрування сім'ї 10 кл. — style-sync. Плейтест не запускався: Python-модуля `playwright` у контейнері немає — лише CI (job `browser`).

Мережа: з контейнера не резолвляться testportal.gov.ua, kmu.gov.ua, gov.uk, eurydice, unn.ua, education.ua, slovoidilo.ua, mezha.net — для них використано WebSearch (результат пошуку відкрито в сесії) і доступні дзеркала (osvita.ua, uk/en.wikipedia, словники через curl).

## 1. Факти

| Твердження в тексті | Джерела (відкриті в сесії) | Вердикт |
|---|---|---|
| НМТ — National Multi-subject Test, на комп'ютері, у тимчасових екзаменаційних центрах, зокрема за кордоном (Польща) | https://osvita.ua/test/88222/ («computer classrooms at temporary exam centers… also in European and some other countries»); https://uk.wikipedia.org/wiki/Національний_мультипредметний_тест (з 2022; ТЕЦ; Польща — 6 населених пунктів); назва — WebSearch «"National Multi-subject Test" 2026» (luguniv.edu.ua/en, testportal.gov.ua/en — заголовки) | ✅ |
| 2026: чотири предмети — українська, математика, історія України для всіх + один на вибір (серед них англійська) | https://osvita.ua/test/88222/ ; https://osvita.ua/consultations/faq/97167/ («Year: 2026… Mandatory (3)… one foreign language (English…)») ; WebSearch (testportal.gov.ua, Мінізвіт НМТ-2026) | ✅ Прив'язано до минулого («In 2026, it had…») — не старітиме хибно. «Students in Ukraine take it on a computer to apply to university» (теперішній загальний) — правда на 2026; якщо формат НМТ зміниться, оновить style-sync |
| НМТ потрібен для вступу на бакалаврат в Україні | uk.wikipedia (НМТ — вступ на бакалаврат) ; osvita.ua/test/88222/ | ✅ |
| Ліцей — останні роки школи, вибір профілю | ЗУ «Про ПЗСО» ст. 35 (ліцей забезпечує профільну середню) — https://osvita.ua/legislation/law/2232/ ; https://osvita.ua/school/reform/93382/ (профілі 10–12) ; узгоджено з verified e8s6 | ✅ |
| З 1.09.2027 ті, хто йде в 10 кл., — три роки в ліцеї; школа — 12 років | https://osvita.ua/school/reform/93382/ («1 вересня 2027 року перший потік НУШ почне вчитися в 10 класі»; перший випуск 2030) ; https://osvita.ua/legislation/law/2232/ ст. 4 (профільна — «протягом трьох років»; 4+5+3 = 12) ; WebSearch «реформа профільної старшої школи 2027 … відтермінування» — відтермінування не знайдено (новини до вересня 2026) | ✅ Dmytro (12) піде в 10 кл. ≈ 2030 — після 2027, отже «three» правильно |
| Коледж — після 9 або 11 кл.; після 9 — ще й шкільні предмети | https://osvita.ua/mlbachelor/fmb-doroznya-karta/86772/ (вступ на базі 9 і 11 класів) ; ЗУ «Про фахову передвищу освіту» ст. 7 ч. 3 — https://osvita.ua/legislation/law/65307/ («зобов'язані одночасно виконати… освітню програму профільної середньої освіти») | ✅ |
| Бакалавр в Україні зазвичай 4 роки | https://en.wikipedia.org/wiki/Education_in_Ukraine («bachelor's degree (4 years)») ; https://osvita.ua/vnz/91981/ (звичайна програма — 4 роки, 240 ЄКТС) | ✅ («usually») |
| Англія: зі школи можна піти в 16, але навчання чи підготовка до 18 (sixth form, college, apprenticeship) | https://en.wikipedia.org/wiki/Education_in_England («compulsory for all children aged 5 to 18»; після 16 — full-time study, apprenticeship…) ; WebSearch gov.uk/know-when-you-can-leave-school (+ ради графств: Nottinghamshire, Surrey) | ✅ |
| GCSE — Year 11, ≈ 16 років; далі sixth form | https://en.wikipedia.org/wiki/Education_in_England ; OALD A level (compare GCSE) — https://www.oxfordlearnersdictionaries.com/definition/english/a-level | ✅ |
| A levels — зазвичай 2 роки, ≈ 18 років, три предмети | https://en.wikipedia.org/wiki/A-level («typically worked towards over two years»; offers «normally based on three A-level grades») ; OALD a-level («usually in the final year of school at the age of 18», «You need three A levels») ; CD a-level («aged 17 or 18») | ✅ |
| UCAS — служба вступу до університетів UK | https://en.wikipedia.org/wiki/UCAS ; CD https://dictionary.cambridge.org/dictionary/english/ucas («an organization in the UK that deals with university and college applications») | ✅ |
| Бакалавр: England — зазвичай 3 роки, Scotland — 4 | https://en.wikipedia.org/wiki/Education_in_England («usually lasts for three years») ; https://en.wikipedia.org/wiki/Education_in_Scotland («typically 4 years») ; WebSearch UCAS «the UK degree system» («3 years… except for in Scotland where it takes 4 years») | ✅ |
| Apprenticeship — працюєш, отримуєш зарплату, вчишся | OALD apprentice_1 («works for an employer for a fixed period of time in order to learn… skills») ; CD apprentice ; WebSearch gov.uk/become-apprentice («paid… at least 20% of your normal working hours» на навчання) | ✅ |
| UX = user experience | CD https://dictionary.cambridge.org/dictionary/english/ux («abbreviation for user experience») | ✅ |
| Деталі героїв (Leah, турбіна 80 м, Summer IT School, дати постера) | вигадані події, не факти про галузь | — |

## 2. Словники (форми, норма BrE)

| Форма | Позначка словника (дослівно) | Вердикт |
|---|---|---|
| fill in / fill out | OALD fill-in: «fill something in (especially British English) (also fill something out British and North American English)»; CD fill-in: «(also fill something out) to write the necessary information on an official document» | ✅ обидва в ключі (l3 multi, l3 word, l4 word); ніде не протиставлені |
| fill up a form | OALD fill-up: «fill something up… to make something completely full» | ✅ хибний варіант l3 multi правильно |
| hand in | OALD hand-in: «hand something in (to somebody) (British English also give something in…)» | ✅ |
| put off | OALD put-off: «put something off — to change something to a later time or date» | ✅ |
| turn down | OALD turn-down: «turn somebody/something down — to reject or refuse… an offer» | ✅ |
| sign up for | OALD sign-up: «sign up (for something) — to arrange to do a course of study…» | ✅ |
| find out | OALD find-out: «find out (about something) / find out something» | ✅ (на місце додатка не використано — правильно) |
| apply for / apply to | OALD apply: «apply for something… a place at a university»; «apply to a company/university»; «I decided to apply to Manchester University» | ✅ «apply to two universities», «apply for a place» |
| get into (university) | OALD get-in: «get in / get into something… to be admitted to a school, university» | ✅ |
| graduate (BrE лише про університет) | OALD graduate_2: «to get a degree… from a university or college»; колокації: «(British English) leave/finish/drop out of… (North American English) graduate high school/college» | ✅ правило l1 |
| till / until | OALD till_1: «Till is generally felt to be more informal than until» | ✅ «till = until, but less formal» |
| think of + -ing | OALD think-of: «think of doing something» | ✅ |
| prospects | OALD prospect_1: «prospects [plural] the chances of being successful; good job/employment/career prospects» | ✅ |
| Наголос (CD UK): university ˌjuː.nɪˈvɜː.sə.ti, qualification ˌkwɒl.ɪ.fɪˈkeɪ.ʃən, graduate ˈɡrædʒ.u.ət, college ˈkɒl.ɪdʒ, apprenticeship əˈpren.tɪs.ʃɪp, qualified ˈkwɒl.ɪ.faɪd, bachelor ˈbætʃ.əl.ər, technician tekˈnɪʃ.ən, developer dɪˈvel.ə.pər, analyst ˈæn.əl.ɪst, designer dɪˈzaɪ.nər, lyceum laɪˈsiː.əm, communication kəˌmjuː.nɪˈkeɪ.ʃən | curl dictionary.cambridge.org/dictionary/english/<word> | ✅ усі `stress` і `<u>` |
| cybersecurity | OALD /ˈsaɪbəsɪkjʊərəti/; CD UK /ˌsaɪ.bə.sɪˈkjʊə.rə.ti/ (і /ˈsaɪbəsɪˌkjʊərəti/); Wiktionary UK /saɪbəsɪˈkjʊəɹɪtɪ/ | ⚠️ словники розходяться → `<u>cy</u>` прибрано (правка 6) |

BrE: AmE-правопису й лексики немає (centre, maths, practise, garage, Year 9, sixth form; «high school» лише в коментарі). A/B/C і позиційних посилань немає. Без звуку й IPA. `type: "dialog"` немає (D-056) — репліки в `body`.

## 3. Завдання → опора (D-019) → вердикт

Усі завдання розв'язано самостійно до звірки з `correct`/`answer`; збіг у кожному.

| Урок · завдання | Звідки відповідь | Вердикт |
|---|---|---|
| l1 choice «Who… degree?» | `hyp: true` | ✅ |
| l1 match (lyceum/college/university/4 years) | info «Where to study in Ukraine»; другої пари немає (profile — лише ліцей) | ✅ |
| l1 choice Arsen (electric cars) | текст на екрані | ✅ |
| l1 gaps lyceum / into / for / graduate | обидва info | ✅ |
| l1 word graduate | info «Talking about studying» (a graduate → a person with a degree) | ✅ |
| l1 choice Dmytro → three | лист Оксани на екрані | ✅ |
| l1 stress | `<u>` в info | ✅ |
| l1 final gaps | ті самі info | ✅ |
| l2 choice частини 1 (outside Ukraine) | текст частини 1 | ✅ |
| l2 choice частини 2 (three years) | текст частини 2 | ✅ |
| l2 multi частини 3 (0, 3) | текст частини 3 («on the fifth day I study at a college»; «that's great too») | ✅ |
| l2 choice main idea | три частини | ✅ |
| l2 match | три частини | ✅ |
| l2 gaps NMT / sixth form / four / three | частини 1–2 | ✅ |
| l2 word 18 / eighteen | частина 2; ключ без кінцевого знака | ✅ |
| l2 stress | `<u>` в info l1–l2 | ✅ |
| l2 final gaps (Taras) | частини 1, 3; hint (Taras — Lviv) | ✅ після правки 3 (дистрактор «degrees» міг бути правильним) |
| l3 choice put off | `hyp: true` | ✅ |
| l3 match | info «Phrasal verbs for applying» | ✅ |
| l3 multi fill in / fill out | info (fill out is correct too) | ✅ |
| l3 gaps for / to / for / on | info «Verbs with prepositions» | ✅ |
| l3 gaps in / out / up / down | info phrasal | ✅ |
| l3 choice Arsen said no | текст + turn down в info | ✅ |
| l3 word in / out | info | ✅ |
| l3 build apply for… | info; перебір підмножин: приймається лише ключ | ✅ |
| l4 choice both | `hyp: true` | ✅ |
| l4 sort | info «Where does the object go?» | ✅ |
| l4 build I filled in the form / the form in | info | ✅ після правки 4 (пастка `it` давала правильне «I filled it in.», яке не зараховувалося) |
| l4 build I've handed it in | info | ✅ після правки 5 (пастка `on` давала граматичне «I've handed it on», OALD hand on) |
| l4 gaps for it / it in / for it / it down | обидва info | ✅ |
| l4 pick filled in it | info | ✅ |
| l4 word it in / it out | info | ✅ |
| l4 final gaps | обидва info | ✅ |
| l5 choice «No, until 31 May» | постер intro + until з e10s1l3 / e10s4 | ✅ |
| l5 gaps for/since | info «For and since» | ✅ |
| l5 gaps until/by | info «By, until, till and before» (стан ↔ дія з дедлайном) | ✅ |
| l5 choice wrong sentence | info; till = until | ✅ |
| l5 pick [for] 2023 | info for/since | ✅ |
| l5 build by Friday (обидва порядки) | info; перебір — лише 2 ключі | ✅ |
| l5 word since / ever since | info | ✅ |
| l5 final gaps | обидва info | ✅ |
| l6 choice UX | `hyp: true` | ✅ |
| l6 match | info «Modern jobs» | ✅ |
| l6 choice Iryna (attention to detail) | текст | ✅ |
| l6 gaps skills | info «Skills» | ✅ |
| l6 choice growing demand | info «Talking about the future» | ✅ |
| l6 build thinking of becoming | info | ✅ |
| l6 stress | `<u>` в info | ✅ |
| l6 final gaps out / requires / UX designer / of / prospects | l3 info (find out), l6 info | ✅ |
| l7 T1–T9 | `pre` l1–l6, нових фактів немає | ✅ T6 після правки 4 (пастка `it` → `off`) |

Перебір усіх `build` (усі підмножини й перестановки плиток з `extra` через `SLID_LANG.check`): після правок приймаються лише порядки з `answer`, і жоден граматично правильний порядок не відкинуто.

## 4. Педагогіка, герої, стереотипи
- Проблема → здогадка → теорія → завдання в кожному уроці; пояснення — B1/B2, короткі речення, контраст на парі прикладів (fill it in ↔ apply for it). Лякаючого немає; Leah (технікиня вітрових турбін) і Iryna (кібербезпека) — без гендерних стереотипів; університет і apprenticeship подано рівноцінно.
- `requires` (e6s6l1, e6s6l2, e7s1l4, e8s2l4, e9s7l1, e9s7l5) — id існують, теми відповідають (subjects; for/since; phrasal verbs; jobs; applying for a summer course), збігаються з plan-eng-g10-11.md §6. Дублювання e8s6 / e9s7 немає.
- Герої: Oksana — 16, Year 10, ліцей у Poltava (e8s6: 14, гімназія в Zelena Dolyna, «After Year 9, I want to go to a lyceum in Poltava») — узгоджено. Denys — у e8s6 16, ліцей у Poltava → тут 18, перший курс у Kyiv — узгоджено. Dmytro 12 — як e10s3. **Marko — суперечність:** e9s5 «Marko — кузен Ostap (12)» → у 10 кл. йому 13, а тут 17 і другий курс коледжу → перейменовано на нового героя Arsen (правка 1). Viktor **Hnatiuk** (UX, Lviv) — прізвище тренера Mr Hnatiuk (Lviv, e7s5) → Viktor Hnatyshyn (правка 2). Nazar (друг Denys, тепер у Poland) — у e4s6 є Nazar із Zelena Dolyna; суперечності немає, може бути той самий хлопець.
- Авторське право: дослівні пошуки (WebSearch з лапками) — «Now I work four days a week, and on the fifth day I study at a college» → збігів немає; «People think it's all about coding, but you also need to be good at problem-solving» → немає; «In England, you can leave school at 16, but you have to stay in education or training until you're 18» → лише перекази правил gov.uk, дослівного тексту немає. Тексти власні.

## 5. Правки (зроблено)
1. Marko → **Arsen** (11 місць + коментар героїв): вікова суперечність з e9s5.
2. Viktor Hnatiuk → **Viktor Hnatyshyn**: збіг прізвища з тренером Mr Hnatiuk (e7s5, Lviv).
3. l2 final gaps: дистрактор `degrees` → `centres` («We can all choose different degrees!» — правдоподібна друга відповідь).
4. l4 build #1: `extra` `it` → `on`, fbBad «Fill in or fill on?»; boss T6: `extra` `it` → `off` — з пасткою `it` дитина могла зібрати правильне «I filled it in.» / «He turned it down.», а рушій його не зараховував.
5. l4 build #2: `extra` `on` → `for` («I've handed it on» граматичне — OALD hand on).
6. l6 info: прибрано `<u>cy</u>` у cybersecurity (OALD і CD/Wiktionary розходяться в наголосі).
Статус усіх 7 уроків — `verified`, `meta.factcheck` заповнено.

## 6. Рекомендовано (не блокує)
- Куратору героїв: занести Arsen (17, кузен Ostap, коледж у Lviv) і Viktor Hnatyshyn у NOTE героїв замість Marko / Hnatiuk (рядок writer-e10s8 в inbox описує ще старі імена).
- style-sync: калібрувати прапорці stats уроку читання l2 разом з e10s3l1, e11s4l6.
- Коли формат НМТ зміниться (законопроєкт про 3 предмети), перевірити загальні речення теперішнього часу про НМТ (l2 info, boss T2).
