---
claimed_from: todo
claimed_at: 2026-11-26T10:31:16.018Z
id: write-eng-g10-e10s6
type: write-section
subject: eng
grade: 10
section: e10s6
depends_on: [curate-eng-plan-g10-11, engine-eng-lang-core, engine-eng-validate, engine-eng-stats, skills-eng, curate-eng-style, curate-eng-glossary, engine-eng-dialog]
status: review
claimed_by: writer-e10s6
created: 2026-11-19
source: design-eng
---
# Написати розділ «Science and technology» (Англійська мова, 10 клас)

## З програми
- Тема й підтеми: Наука і технічний прогрес — комп’ютерне обладнання; сучасні засоби комунікації та інформації; вплив науки на розвиток суспільства; технології — П1407 с. 22 (спеціалізовані школи, 10-ий клас, англійська: теми й функції; лексика — с. 22–23), граматика — с. 23, обсяги — с. 21.
- Рівень: B1 → B2 (B2 — наприкінці 11 кл., рішення людини 2026-11-19).
- Граматика (план 10–11 кл., content/eng/plan.js; розподіл наш, концентричний — reports/verify/plan-eng-g10-11.md §2; «повт.» — уже є в 4–6 кл. чи в плані 7–9 кл.): first and second conditionals (с. 23) — повт. e6s8l3 (if + Present Simple), e7s6 l3–l4 (first conditional, unless), e8s8 l5–l6 (second); нове для B2: контраст реальної й уявної умови, could / might у головному реченні, If I were you, I’d… для поради (функція «давати поради, реагувати на поради інших», с. 22).
- Джерела програми — docs/design/english.md §0: ТОП 3–4 (4 кл.) — https://lib.iitta.gov.ua/714276/1/%D0%A2%D0%9E%D0%9F_3_4_2018.pdf; МП-ІМ (5–9 кл., наказ МОН № 795 від 12.07.2021) — https://osvita.ua/doc/files/news/831/83117/Inoz_mov_5-9-kl_Redko_ta_in_14_07.pdf; П1407 (10–11 кл., наказ МОН № 1407 від 23.10.2017; для 10–11 кл. — розділ спеціалізованих шкіл, B2) — https://osvita.ua/doc/files/news/589/58921/inozemni-movi-10-11-19_09_2017.pdf.

- **Специфіка (plan-eng-g10-11):** Друга правильна відповідь: If I were / If I was — was у розмовному мовленні (звірити CD Grammar «If») — ключ обидві; will / might / could у головному реченні — контекст; unless ≈ if … not, але не завжди рівнозначно (CD Grammar «Unless»). Лексика: BrE mobile (phone), laptop, charger (glossary/eng.md), без брендів. Не дублювати e9s6 (винахідники, пасив, пристрої вдома): тут — обладнання, комунікація, вплив на суспільство. Україна: цифрові послуги, ІТ — факти з джерела з датою. Функції (с. 22): «обговорювати перспективи», «аргументувати свою точку зору» — l6 (for and against). `requires`: e6s8l3; 7–9 — e7s6 l3, e8s8 l5. Обсяги B2 (с. 21): повний текст для читання — у фіналі чи уроці читання, по екранах ≤ 190 слів (style/eng.md «Тексти для читання»); діалог — до 9 реплік. Україна — у кожному розділі; кожен факт — з джерела (FACT в inbox). Уроків 7–9 кл. ще немає: зв’язки на них — у нотатки задачі, оркестратор додасть у `requires` після написання (id розділів 7–9 — з плану, ще не верифікованого).

## Рішення людини, обов'язкові
Рішення людини 2026-11-19 (docs/design/english.md §11.1): британська норма; увесь зміст англійською (інтерфейс рушія — українською); варіанти A/B/C; поки без звуку й голосу; ціль B2 в 11 кл.; 4 клас робимо; словники дозволено.

## Прочитати перед роботою
- AGENTS.md; скіл `content-author` (розділ «Англійська» — skills-eng); docs/design/english.md §2, §5, §6, §8.
- style/common.md (структура уроку, D-019), style/eng.md, style/profiles.json (`eng`); memory/long/glossary/eng.md, facts/eng.md, pitfalls-content.md «Англійська».
- Еталон: style/eng.md «Еталони» (e4s1, e5s1 після верифікації).

## Результат
- `content/eng/g10-e10s6.js`: `SLID.section("eng", { id: "e10s6", … })` — id з плану; ≈ 5–7 уроків + фінал (boss).
- **Усе англійською**, британська норма: назви, `why`, `learned`, теорія, інструкції, підказки, фідбек, варіанти. Пояснення — не складніші за рівень класу.
- Типи: gaps, pick, word, split, stress (у складі), choice/multi/sort, dialog, build і match (якщо вже є в рушії). **Без звуку**: не імітувати аудіювання текстом, не обіцяти в `learned` вмінь на слух.
- Тексти, діалоги, імена, малюнки — **власні**; нічого з підручників Cambridge/Oxford (docs/design/english.md §8).
- Кожна форма, неправильне дієслово, ідіома, факт про країну — зі словника чи джерела (URL) у нотатках; нові — рядками FACT в inbox.

## Готово, коли
- [ ] `node tools/validate.mjs --section e10s6` — 0 помилок; попередження виправлено або пояснено.
- [ ] `node tools/stats.mjs --subject eng` — без «нетипово для сім'ї» (до калібрування — пояснити).
- [ ] Кожне оцінюване завдання розв'язано двічі; немає другої правильної відповіді.
- [ ] Задачу переміщено в tasks/review (content-verifier зі свіжим контекстом).

Build не запускай (AGENTS.md §4 п. 8).

## Нотатки агента
<!-- що зроблено, джерела форм і фактів, спірне -->
writer-e10s6, 2026-11-26. Файл `content/eng/g10-e10s6.js` — draft, 7 уроків (6 + фінал boss `e10s6l7`, значок `e10s6boss` «Tech thinker»); validate --section e10s6 — 0 помилок, 0 попереджень. Build не запускав.

**Уроки:** l1 Computer equipment (desktop, laptop, webcam, microphone, printer, USB stick; hardware / software; install, update, save, back up, crash) · l2 Modern communication (text / voice message, video call, group chat, email, social media, notification; source, reliable source, fake news, go viral; Diia) · l3 If the battery dies… (First Conditional повт.; will / might / could / can / імператив у головному; unless повт.) · l4 If I could invent anything… (контраст real / imagined; would / could / might; If I could…; unless не для протилежного реальності → if … not) · l5 If I were you, I’d… (порада, I wouldn’t… if I were you, What would you do if you were me?, реакції — частково повт. e10s3l5) · l6 For and against (есе Оксани, 3 уривки ≈ 360 слів — обсяг П1407 10 кл. 350–400; advantage / disadvantage / benefit, Some people argue that…, It depends on…; is likely to / will probably / might — перспективи; повт. фраз e10s2l6) · l7 фінал (9 завдань, у кожному `pre` і `hint`).

**requires** (уже у файлі, id звірено): e6s8l3, e7s6l3, e7s6l4, e8s8l5, e8s8l6, e9s6l3, e9s6l5, e10s2l6, e10s3l5.

**Друга правильна відповідь — як закрито:**
- were / was: у `word` (l4 #11, l7 Task 8) ключ ["were", "was"]; у `gaps` was поруч із were не стоїть.
- will / might / could: ніколи не в одному пропуску — значення перевіряють `sort` (l3 #6) і `choice` (l3 #7, l4 #8, l7 Task 5).
- would у First Conditional хибним не дається (буває ввічливе «If you need help, I would…»).
- Двопропускові пастки real/unreal («If phones never need charging, people won’t…» — теж граматичне): у l4 Final і l7 Task 6 головне речення зафіксоване текстом (wouldn’t, had), пропуск лише один.
- l5 #11 `word` «I ___ send them your password if I were you» — ключ wouldn’t / would not / shouldn’t / should not (CD should: «UK (also would) used after "I" when giving advice: I shouldn't worry about it if I were you»).
- l6 `build` — два порядки (… / «That technology connects people is the main advantage.»); плитка «the main» з малої. Інші build — кома в плитці if-частини, тож порядок «головне + if» не складається.
- unless + not, unless + will — пастки (CD Grammar Unless: «we don’t use will or would in the clause after unless»).

**Граматика — джерела:**
- CD Grammar «Unless» — https://dictionary.cambridge.org/grammar/british-grammar/unless («except if»; no will/would after unless; «We don’t use unless for things that we know to be true» → l4 #9–10, l7 Task 7).
- CD Grammar «Conditionals: if» — https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if (First: main clause — will / can / could / may / might; Second: would / could / might; контраст likely / unlikely).
- CD «if I were you» (B1, advice) — https://dictionary.cambridge.org/dictionary/english/if-i-were-you ; OALD if_1 — https://www.oxfordlearnersdictionaries.com/definition/english/if_1 («If I was in charge, I'd do things differently. (rather formal) If I were in charge…»; «if I were you — used to give somebody advice»). Формулювання в l5 info: «In everyday speech, some people say If I was you, but were is the usual form, especially in writing» — як e8s8l5.
- CD should — https://dictionary.cambridge.org/dictionary/english/should ; OALD should — https://www.oxfordlearnersdictionaries.com/definition/english/should

**Слова й наголос (CD, https://dictionary.cambridge.org/dictionary/english/<слово>):** computer kəmˈpjuː.tər (com<u>pu</u>ter), keyboard ˈkiː.bɔːd, microphone ˈmaɪ.krə.fəʊn, software ˈsɒft.weər, hardware ˈhɑːd.weər, desktop ˈdesk.tɒp, laptop ˈlæp.tɒp, printer ˈprɪn.tər, webcam ˈweb.kæm, install ɪnˈstɔːl, advantage ədˈvɑːn.tɪdʒ, disadvantage ˌdɪs.ədˈvɑːn.tɪdʒ, benefit ˈben.ɪ.fɪt, digital; USB stick (CD headword; «Memory Stick» — торгова марка, не брали), Wi-Fi (CD headword), back up (B2 «to make an extra copy of computer information»), crash (B2 «If a computer… crashes, it suddenly stops operating»), go viral, scam, make sense, argue (B2 «to give the reasons for your opinion»), die (informal «If a machine, battery, or phone dies, it stops working»), drawback (C1 — не взяв, замість нього benefit B1). on the internet — style/eng-banned.txt «in the internet» (l2 pick).

**Факти (FACT в inbox):** Diia — застосунок і портал, запущено 6.02.2020; 30.03.2021 Рада ухвалила закон, з 23.08.2021 цифрові ID-картка й паспорт у Diia рівні паперовим/пластиковим усередині країни (не для перетину кордону). В уроці — без дня: «In February 2020, Ukraine launched Diia, a government app and website… Since 2021, a digital passport in the app has been equal to a paper one inside Ukraine. You can’t use it to cross a border.» Джерела: https://en.wikipedia.org/wiki/Diia (WebFetch: «launched on February 6, 2020», закон березня 2021, «From August 23… for all purposes within Ukraine»); https://mvs.gov.ua/en/press-center/news/verxovna-rada-pririvnyala-e-pasporti-v-dodatku-diya-do-paperovix ; https://www.osw.waw.pl/en/publikacje/osw-commentary/2021-08-23/digitisation-ukraine-anatomy-a-success-story ; https://en.interfax.com.ua/news/general/734077.html (останні три — з пошукової видачі; kmu.gov.ua і atlanticcouncil.org WebFetch не резолвить). Виняток «кордон» — у видачі (kmu.gov.ua, sud.ua). Твердження «перша країна у світі» — лише урядові заяви, в урок НЕ брав.

**stats:** l6 — readWordsPerScreen z = 2,4, maxReadWords z = 2,5, maxText z = 2,5 «нетипово для сім'ї» — урок читання з повним обсягом П1407 (3 уривки ≈ 360 слів), у межах профілю 10-11 (maxText 135 ≤ 190); та сама картина, що в e10s3l1 (STYLE writer-e10s3). Решта уроків без прапорців.

**Опора (D-019), неочевидне:** l2 #9 (Diia) — спирається на #8 info; l6 #6 multi (Diia — benefit, «travel less») — на текст того ж екрана; l7 Task 3 — на l2 #8 / l6 #6; l7 Task 7 (unless з відомим фактом) — на l4 #9 info; l3 #7 і l7 Task 5 (might = maybe) — на l3 #5 і e8s6 (might — possibility). «3D printer» (l4 info) — без пояснення, лише в прикладі, не оцінюється.

**Спірне для верифікатора:** (1) правило «unless — не для протилежного реальності» (l4 #9–10, l7 Task 7) — за CD Grammar «things that we know to be true»; приклад CD — Third Conditional, ми переносимо на Second (Zoriana has a laptop → If I didn’t have…, not Unless I had…). Якщо верифікатор вважає це надто тонким для 10 кл. — l7 Task 7 можна замінити на pick «If I [would have]…». (2) l3 sort «If there’s a signal, I could send a video.» — could як «можливо» (CD: could у First Conditional), кошик «Not sure». (3) l1 match «a laptop» ↔ «a computer that you can take to robot club» — desktop теж можна «взяти», але в info desktop «stays on a desk».

Герої (NOTE в inbox): Zoriana купила ноутбук (курс кодування, robot club по вівторках), робить застосунок для robot club → science fair у травні; Ostap — похід із Пластом у Карпати (мама хвилюється, Taras теж іде), кузен Marko; Andrii — батьки обіцяли новий телефон на день народження, старий — сестрі Sofiia (e4s1); Daryna — винахід «телефон без зарядки», проєкт на science fair; Bohdan — грає до півночі (як e10s3), мрія про робота; Mariia — телефон заповнений; Daryna — повідомлення-шахрайство з паролем; Grandma Hanna торік навчилася відеодзвінків; Oksana — есе для конкурсу penfriend club. Нових фактів про сім'ї немає.
