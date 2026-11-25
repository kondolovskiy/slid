#!/usr/bin/env node
// Слід · тести правил змісту tools/content-checks.mjs (tools-content-checks-p3). Кожне правило — позитивний і негативний випадок.
// Запуск: node tools/test-content-checks.mjs   (без залежностей; інтеграція з validate.mjs — у tools/test-validate.mjs)
import * as C from "./content-checks.mjs";
import { loadContent } from "./lib.mjs";
let fails = 0, n = 0;
const ok = (cond, what, extra = "") => { n++; if (!cond) { fails++; console.log(`ПОМИЛКА ${what}${extra ? "\n  " + extra : ""}`); } };
const L = "АБВГДЕ";
const eq = (a, b, what) => ok(JSON.stringify(a) === JSON.stringify(b), what, `${JSON.stringify(a)} ≠ ${JSON.stringify(b)}`);

// п. 1: латиниця всередині кириличного слова
ok(C.latinInCyrillic({ body: "Герой «Іпóліто» з'явився." }).length === 1, "п. 1: латинська ó в кириличному слові — попередження");
ok(C.latinInCyrillic({ body: "Герой «Іпо́літо» з'явився." }).length === 0, "п. 1: комбінований наголос U+0301 — чисто");
ok(C.latinInCyrillic({ title: "Слово ХІV ст.", opts: ["XIV століття", "Вік"] }).length === 1, "п. 1: римська цифра з латинською X + кирилична І — попередження (лише в title)");
ok(C.latinInCyrillic({ body: "Швидкість 5 км/h, файл PDF, формула $x$ і слово Python." }).length === 0, "п. 1: окремі латинські слова й одиниці — чисто");
ok(C.latinInCyrillic({ body: "3D-модель, n-й член, x-ова вісь" }).length === 0, "п. 1: слова через дефіс — окремі, чисто");
ok(C.latinInCyrillic({ items: [["Влáда", 0]] }).length === 1, "п. 1: items (sort) теж перевіряються");
ok(/U\+00F3/.test(C.latinInCyrillic({ body: "Іпóліто" })[0]), "п. 1: повідомлення називає код символа");

// п. 9: службовий id у тексті
ok(C.serviceIds({ body: "Це було в уроці w11s5l3." }).length === 1, "п. 9: id уроку в body");
ok(C.serviceIds({ opts: ["розділ g8s4", "інший"] }).length === 1, "п. 9: id розділу у варіанті");
ok(C.serviceIds({ body: "Дата 1991, клас 11, друга сесія." }).length === 0, "п. 9: звичайний текст — чисто");
ok(C.serviceIds({ img: "img/world/w11s5/x.jpg", id: "w11s5l3", sk: "u5s1" }).length === 0, "п. 9: службові поля (img, id, sk) не текст");
ok(C.serviceIdsLesson({ title: "Урок", why: "див. u5s3l2", outro: { text: "ok", learned: ["a", "b"] } }).length === 1, "п. 9: why уроку");
ok(C.serviceIds({ cap: "Фото з розділу w9s1" }).length === 1, "п. 9: cap");

// п. 10: оцінюваний choice/multi без питання
const q = o => C.choiceNoQuestion({ type: "choice", opts: ["a", "b"], correct: 0, ...o }).length;
ok(q({ title: "Закон на папері", body: "Шляхта опиралася реформам." }) === 1, "п. 10: без «?» і без наказу — попередження");
ok(q({ title: "Закон на папері", body: "Що це означає?" }) === 0, "п. 10: «?» у body — чисто");
ok(q({ title: "Розкрий дужки: $(a+b)^2$" }) === 0, "п. 10: наказове «Розкрий» (математика) — чисто");
ok(q({ title: "$0,7 + 0,8 = ?$" }) === 0, "п. 10: «?» усередині формули — питання");
ok(q({ title: "245 см — це…" }) === 0, "п. 10: незакінчене речення («…») — питання");
ok(q({ title: "Підсумок", body: "Обери правильне." }) === 0, "п. 10: «Обери» — чисто");
ok(q({ title: "Закон", poll: true }) === 0 && q({ title: "Закон", hyp: true }) === 0, "п. 10: poll/hyp не оцінюються");
ok(C.choiceNoQuestion({ type: "sort", title: "Закон" }).length === 0, "п. 10: лише choice/multi");
ok(C.choiceNoQuestion({ type: "multi", title: "Закон на папері", opts: ["a", "b", "c"], correct: [0, 1] }).length === 1, "п. 10: multi без питання");
ok(q({ title: "Закон", body: "Пригадай: закон 1867 р. діяв." }) === 0, "п. 10: «Пригадай…» без питання ловить правило link-завдання, не дублюємо");

// п. 11: позиційні посилання
const pos = (type, o) => C.positionalRefs({ type, ...o }).length;
ok(pos("choice", { fbText: "Перший текст має думку." }) === 1, "п. 11: «Перший текст» у fbText");
ok(pos("multi", { fbBad: "Перші два записи правильні." }) === 1, "п. 11: «Перші два записи» у fbBad");
ok(pos("sort", { hint: "Дивись на останній рядок." }) === 1, "п. 11: «останній рядок» у hint");
ok(pos("choice", { fbText: "У п'ятсот записано правильно, другий варіант не підходить." }) === 0, "п. 11: «п'ятсот записано», «другий варіант» (то правило OPT_NUM_RE) — не тут");
ok(pos("choice", { fbText: "Він першим записав цитату." }) === 0, "п. 11: «першим записав» (дієслово) — чисто");
ok(pos("info", { body: "Перший текст довший." }) === 0, "п. 11: лише екрани з варіантами (choice/multi/sort/order)");
ok(pos("choice", { fbText: "Перше слово з великої." }) === 0, "п. 11: «перше слово» — стале посилання на текст, не на варіант");
ok(pos("order", { fbText: "Останній рядок — індекс." }) === 1, "п. 11: order");

// п. 2, 12: D-016
const chs = (...cs) => ({ screens: cs.map(c => ({ type: "choice", correct: c, opts: ["a", "b", "c"] })) });
eq(C.lessonPositionIssues(chs(1, 1), L).length, 1, "п. 12: два choice на одній позиції — попередження (поріг 2, не 3)");
eq(C.lessonPositionIssues(chs(1, 0), L).length, 0, "п. 12: два choice на різних позиціях — чисто");
eq(C.lessonPositionIssues(chs(0, 0, 1), L).length, 1, "п. 12: 2 з 3 (> 60 %) — попередження, як і було");
eq(C.lessonPositionIssues(chs(0, 1, 2), L).length, 0, "п. 12: усі різні — чисто");
eq(C.lessonPositionIssues({ screens: [{ type: "choice", correct: 0, poll: true, opts: ["a", "b"] }, { type: "choice", correct: 0, hyp: true, opts: ["a", "b"] }] }, L).length, 0, "п. 12: poll/hyp не рахуються");
const mu = (...c) => ({ type: "multi", correct: c, opts: ["a", "b", "c", "d"] });
eq(C.lessonPositionIssues({ screens: [mu(0, 1), mu(1, 0)] }, L).map(x => x.rule), ["multi"], "п. 2: два multi поспіль з однаковими правильними (порядок індексів неважливий)");
eq(C.lessonPositionIssues({ screens: [mu(0, 1), { type: "info" }, { type: "info" }, { type: "info" }, mu(0, 1)] }, L).length, 0, "п. 2: multi далеко один від одного — чисто");
eq(C.lessonPositionIssues({ screens: [mu(0, 1), mu(1, 2)] }, L).length, 0, "п. 2: різні правильні — чисто");
const sec = (...scr) => ({ lessons: [{ screens: scr }] });
const cc = c => ({ type: "choice", correct: c, opts: ["a", "b", "c"] });
eq(C.sectionPositionIssues(sec(cc(1), cc(1), cc(1), cc(1), cc(0), cc(2), cc(0)), L).length, 1, "п. 12: розділ — 4 з 7 choice на одній позиції (> 50 %)");
eq(C.sectionPositionIssues(sec(cc(1), cc(1), cc(0), cc(2), cc(0), cc(2), cc(1)), L).length, 0, "п. 12: розділ — розподіл рівномірний");
eq(C.sectionPositionIssues(sec(cc(1), cc(1), cc(1), cc(1), cc(0)), L).length, 0, "п. 12: розділ — менше 6 choice не оцінюємо");
const m4 = (c, n = 4) => ({ type: "multi", correct: c, opts: Array.from({ length: n }, (_, i) => String(i)) });
eq(C.sectionPositionIssues(sec(m4([0, 1]), m4([0, 1, 2]), m4([0]), m4([1, 3])), L).length, 1, "п. 12: multi — правильні = префікс у 3 з 4 (> 50 %)");
eq(C.sectionPositionIssues(sec(m4([1, 2]), m4([0, 3]), m4([1, 3]), m4([2, 3])), L).length, 0, "п. 12: multi — префікса немає");
eq(C.sectionPositionIssues(sec(m4([0, 1, 2]), m4([0, 1, 2]), m4([1, 2, 3]), m4([0, 2, 3])), L).filter(x => /зайвий/.test(x)).length, 0, "п. 12: multi — зайвий Г у 2 з 4 (50 % < 60 %) — чисто");
eq(C.sectionPositionIssues(sec(m4([0, 1, 2]), m4([0, 1, 2]), m4([0, 2, 3]), m4([1, 2, 3])), L).filter(x => /зайвий/.test(x)).length, 0, "п. 12: multi — зайвий на різних позиціях");
eq(C.sectionPositionIssues(sec(m4([0, 1, 2]), m4([0, 1, 2]), m4([0, 1, 2]), m4([1, 2, 3])), L).filter(x => /зайвий/.test(x)).length, 1, "п. 12: multi — єдиний зайвий варіант Г у 3 з 4 (75 % ≥ 60 %)");
eq(C.sectionPositionIssues(sec(m4([0, 1, 2, 3]), m4([0, 1, 2, 3]), m4([0, 1, 2, 3]), m4([0, 1, 2, 3])), L).length, 0, "п. 12: усі варіанти правильні — не цей випадок");

// п. 13: заголовок підказує відповідь
const th = (title, opts, correct, body) => C.titleHintsAnswer({ type: "choice", title, body, opts, correct }).length;
ok(th("Рівні на папері", ["Усе інакше", "Рівність була на папері", "Нічого"], 1) === 1, "п. 13: слово заголовка є лише в правильному варіанті");
ok(th("Рівні на папері", ["Рівні права папером", "Рівність була на папері", "Нічого"], 1) === 0, "п. 13: слова є й у хибному варіанті — чисто");
ok(th("Чому війна почалася?", ["Через війну", "Інше", "Третє"], 0) === 0, "п. 13: заголовок-питання — чисто (відлуння неминуче)");
ok(th("Закон на папері", ["Закон діє", "Ні", "Може"], 0, "Закон діє тільки на папері.") === 0, "п. 13: слово є й у body — чисто");
ok(th("Дрібне слово", ["Ні", "Ні ж", "Так"], 2) === 0, "п. 13: слів ≥ 5 літер немає в правильному — чисто");

// п. 14: order з датами
const od = (grade, items) => C.orderAllDated({ type: "order", items }, grade).length;
ok(od(7, ["Хрещення (988)", "Унія (1385)", "Люблін (1569)"]) === 1, "п. 14: дати в дужках у всіх пунктах, 7 кл.");
ok(od(6, ["Хрещення (988)", "Унія (1385)", "Люблін (1569)"]) === 0, "п. 14: до 7 кл. — дозволено");
ok(od(8, ["988 р. — Хрещення", "1385 р. — Унія", "1569 р. — Люблін"]) === 1, "п. 14: дата перед тире");
ok(od(8, ["Хрещення — 988", "Унія — 1385", "Люблін — 1569"]) === 1, "п. 14: дата після тире");
ok(od(8, ["Хрещення Русі", "Унія (1385)", "Люблін (1569)"]) === 0, "п. 14: один пункт без дати — чисто");
ok(od(9, ["Закон 3 пунктів", "Закон 5 пунктів", "Закон 12 пунктів"]) === 0, "п. 14: числа не-дати");
ok(C.orderAllDated({ type: "sort", items: [["a (988)", 0]] }, 8).length === 0, "п. 14: лише order");

// п. 15: show з goal
const lk = (show, solution = { a: 6 }, extra = {}) => C.labShowLeak({ type: "lab", title: "Зроби", body: "Налаштуй.", goal: "a==6", solution, lab: { kind: "plane", show, params: { a: { min: 0, max: 10 } }, ...extra } }).length;
ok(lk("Потрібно $1/4$") === 1, "п. 15: «Потрібно» у show");
ok(lk("потрібно $f'(a) = 0$") === 1, "п. 15: «потрібно» з малої");
ok(lk("ціль: 6") === 1, "п. 15: число з solution у show буквально");
ok(lk("a = {a|0}") === 0, "п. 15: шаблон {a|0} — не літерал, чисто");
ok(lk("Сторона {a|0} см; площа {a*a|0}") === 0, "п. 15: чисте show");
ok(lk("Кроків: 1") === 0, "п. 15: число 1 не з solution — чисто");
ok(C.labShowLeak({ type: "explore", lab: { kind: "plane", show: "Потрібно 6" } }).length === 0, "п. 15: без goal (explore) — не оцінюване");

// п. 16: нотація math
const { lab } = loadContent();
const ln = (show, extra = {}, points) => C.labNotation({ type: "explore", lab: { kind: "plane", show, params: { n: { min: 2, max: 12, start: 3 }, d: { min: 1, max: 5, start: 2 } }, ...(points ? { points } : {}), ...extra } }, lab).length;
ok(ln("$x = {d|deg}°$") === 1, "п. 16.1: «|deg}°» — подвійне °°");
ok(ln("$x = {d|deg}$") === 0, "п. 16.1: «|deg}» без ° — чисто");
ok(ln("$a^{n} = {n}$") === 1, "п. 16.3: ^{n} при n до 12 — два знаки");
ok(ln("$a^{d} = {d}$") === 0, "п. 16.3: ^{d} при d 1…5 — однозначне, чисто");
ok(ln("$a^{{n|0}} = 1$") === 0, "п. 16.3: ^{{n|0}} — правильно");
ok(ln("$a^{2} = 4$") === 0, "п. 16.3: ^{2} — число");
ok(ln("$a^{n}$", {}) === 1 && ln("$a^{n}$", { params: { n: { min: 1, max: 3 } } }) === 0, "п. 16.3: залежить від діапазону повзунка");
ok(ln("x", {}, { Ap: { x: "1", y: "1" } }) === 1, "п. 16.2: точка Ap без label");
ok(ln("x", {}, { R1: { x: "1", y: "1" } }) === 1, "п. 16.2: точка R1 без label");
ok(ln("x", {}, { A: { x: "1", y: "1" } }) === 0, "п. 16.2: точка A — одна велика літера, чисто");
ok(ln("x", {}, { Ap: { x: "1", y: "1", label: "$A_p$" } }) === 0, "п. 16.2: Ap з label — чисто");
ok(ln("x", {}, { Ap: { x: "1", y: "1", label: false } }) === 0, "п. 16.2: Ap з label: false — чисто");
ok(ln("x", {}, { a: { x: "1", y: "1" } }) === 0, "п. 16.2: малий id без label рушій не друкує, чисто");
ok(C.powFracNoParens({ body: "Маємо $a^2/(b+c)$." }).length === 1, "п. 16.4: a^2/(…) без дужок");
ok(C.powFracNoParens({ body: "Маємо $a^{n+1}/(b+c)$." }).length === 1, "п. 16.4: a^{n+1}/(…) без дужок");
ok(C.powFracNoParens({ body: "Маємо $(a^2)/(b+c)$ і $a^2/b$ і $\\frac{a^2}{b+c}$." }).length === 0, "п. 16.4: з дужками, без дужок у знаменнику, \\frac — чисто");
ok(C.powFracNoParens({ type: "explore", lab: { kind: "plane", show: "$x^2/(1+y)$" } }).length === 1, "п. 16.4: у lab.show теж");

// п. 17: звертання з родом (D-020)
const gd = (o) => C.genderedAddress(o).length;
ok(gd({ body: "Ти вже зрозумів, що це так." }) === 1, "п. 17: «Ти вже зрозумів»");
ok(gd({ hint: "Мабуть, ти побачила різницю." }) === 1, "п. 17: «ти побачила»");
ok(gd({ fbBad: "Якщо ти вибрав цей варіант — перечитай." }) === 1, "п. 17: «ти вибрав»");
ok(gd({ why: "Тут ти навчишся, як це працює." }) === 0, "п. 17: майбутній час — чисто");
ok(gd({ body: "— Ти вже бачила новий мультфільм?\n— Ще ні." }) === 0, "п. 17: діалог (репліка персонажа)");
ok(gd({ fbText: "Що б ти зробила — наголос на що." }) === 0, "п. 17: «що б ти зробила» — приклад граматики");
ok(gd({ fbText: "Книжка (яка?) — яку ти радив." }) === 0, "п. 17: «яку ти радив» — підрядне означення");
ok(gd({ body: "Напиши: <i>ти вже зрозумів</i>." }) === 0 && gd({ body: "Скажи «ти побачила» вголос." }) === 0, "п. 17: курсив і лапки — приклади");
ok(gd({ body: "Ти знаєш, що ти вже вмієш." }) === 0, "п. 17: теперішній час — чисто");

// п. 5: перша сесія пулу
const it = (id, lesson, sk, lvl = 1) => ({ id, lesson, sk, lvl });
const pool = items => [{ id: "pX", items }];
eq(C.poolFirstSessionIssues(pool([it("c01", "l1", "func"), it("c02", "l1", "func"), it("c03", "l1", "func"), it("c04", "l1", "func", 2), it("c05", "l1", "calc", 2), it("c06", "l1", "calc", 2), it("c07", "l1", "calc", 2)])).map(x => [x.lesson, x.sk]), [["l1", "func"]], "п. 5: уся пара (урок, sk) у першій сесії");
eq(C.poolFirstSessionIssues(pool([it("c01", "l1", "func"), it("c02", "l1", "func"), it("c03", "l1", "calc"), it("c04", "l1", "calc"), it("c05", "l1", "func"), it("c06", "l1", "calc")])).length, 0, "п. 5: sk є й поза першими 4 — чисто");
eq(C.poolFirstSessionIssues(pool([it("c05", "l1", "calc", 2), it("c01", "l1", "func"), it("c02", "l1", "func"), it("c03", "l1", "func"), it("c04", "l1", "func", 2)])).length, 0, "п. 5: порядок за (lvl, позиція): c05 (рівень 2, раніше в пулі) стає в перші 4, c04 — поза ними: func не вичерпано");
eq(C.poolFirstSessionIssues(pool([it("a", "l1", "x"), it("b", "l1", "x"), it("c", "l1", "y"), it("d", "l1", "y")])).length, 0, "п. 5: урок з ≤ 4 вправами — чисто");
eq(C.poolFirstSessionIssues(pool([it("a", "l1", "x"), it("b", "l1", "y"), it("c", "l1", "z"), it("d", "l1", "w"), it("e", "l1", "v"), it("f", "l1", "v")])).length, 0, "п. 5: одиночні sk у 4 різних парах — типова будова ukr, не вичерпання (пара < 3 вправ)");
eq(C.poolFirstSessionIssues(pool([it("a", "l1", "x", 2), it("b", "l1", "x", 2), it("c", "l1", "x", 2), it("d", "l1", "y"), it("e", "l1", "y"), it("f", "l1", "z"), it("g", "l1", "z")])).length, 0, "п. 5: вичерпана sk без вправи рівня 1 — помилка рівня 1 неможлива");

// ---- англійська (engine-eng-validate, D-055; docs/design/english.md §2 п. 3, §6.3) ----
// п. 10 англійською: питання — «?», «…» чи шаблонна інструкція (glossary/eng.md «Інструкції-шаблони»), wh-слово
const qe = (o, lang = "en", type = "choice") => C.choiceNoQuestion({ type, opts: ["a", "b"], correct: 0, ...o }, lang).length;
ok(qe({ title: "My family", body: "Olena has a brother." }) === 1, "en п. 10: ні «?», ні інструкції — попередження");
ok(qe({ title: "My family", body: "Choose the correct answer." }) === 0, "en п. 10: «Choose» — чисто");
for (const w of ["Read", "Select", "Complete", "Match", "Find", "Fill in", "Tick", "Put", "Write", "Sort", "Pick", "Guess"]) ok(qe({ title: "Words", body: `${w} the words.` }) === 0, `en п. 10: «${w}» — чисто`);
ok(qe({ title: "Which word is plural" }) === 0 && qe({ title: "What does Olena like" }) === 0, "en п. 10: which / what — питання й без «?»");
ok(qe({ title: "Plurals", body: "Is it a cat?" }) === 0 && qe({ title: "She lives in…" }) === 0, "en п. 10: «?» і «…» — чисто");
ok(qe({ title: "Слова", body: "Обери правильне." }) === 1, "en п. 10: українські наказові в англійському предметі не рахуються");
ok(qe({ title: "Закон на папері", body: "Шляхта опиралася реформам." }, "") === 1 && qe({ title: "Words", body: "Choose the answer." }, "") === 1, "п. 10: без мови змісту — українські правила, як раніше");
ok(qe({ title: "My family", body: "Olena has a brother." }, "de") === 0, "п. 10: мова без своїх правил — мовчить");
ok(qe({ title: "My family", hyp: true }) === 0 && qe({ title: "My family" }, "en", "sort") === 0, "en п. 10: hyp і не choice/multi — чисто");
ok(/Choose/.test(C.choiceNoQuestion({ type: "multi", title: "Pets", body: "Cats are pets.", opts: ["a", "b", "c"], correct: [0] }, "en")[0] || ""), "en п. 10: повідомлення радить англійську інструкцію");

// п. 11 англійською: позиційні посилання (без «option N» — окреме правило OPT_NUM_EN)
const pe = (type, o, lang = "en") => C.positionalRefs({ type, ...o }, lang).length;
ok(pe("choice", { fbText: "The first line is a greeting." }) === 1, "en п. 11: «the first line»");
ok(pe("sort", { hint: "Look at the last two cards." }) === 1, "en п. 11: «the last two cards»");
ok(pe("order", { fbBad: "The second statement comes later." }) === 1, "en п. 11: «second statement»");
ok(pe("choice", { fbText: "The first word of a sentence starts with a capital letter." }) === 0, "en п. 11: «the first word» — про текст, не варіант");
ok(pe("choice", { fbText: "Перший текст має думку." }) === 0, "en п. 11: український зворот в англійському предметі — не тут");
ok(pe("choice", { fbText: "The first line is a greeting." }, "") === 0, "п. 11: англійський зворот в українському предметі — як раніше, чисто");
ok(pe("choice", { fbText: "Перший текст має думку." }, "") === 1, "п. 11: без мови змісту — українське правило як раніше");
ok(pe("info", { body: "The first line." }) === 0, "en п. 11: лише екрани з варіантами");

// «option N» / «the second option» англійською (у validate замість OPT_NUM_RE)
const on = t => C.OPT_NUM_EN.test(t);
ok(on("The second option is wrong.") && on("Option B is a verb.") && on("Look at option 2.") && on("the last answer") && on("Answer C has a mistake."), "OPT_NUM_EN: «the second option», «option B», «option 2», «last answer», «Answer C»");
ok(!on("There are two options here.") && !on("Choose the best answer.") && !on("Answer the question.") && !on("an option before lunch") && !on("Answer a question."), "OPT_NUM_EN: звичайні речення — чисто");

// п. 1 англійською: кирилиця в змісті (D-055); дозволено лише в uk і credits (і службових полях)
const cy = o => C.cyrillicInEnglish(o);
ok(cy({ title: "Cats", body: "<p>One cat, two cats.</p>", opts: ["cat", "cats"], fbText: "We add -s." }).length === 0, "en п. 1: усе латиницею — чисто");
ok(cy({ title: "Cats", body: "<p>Привіт, cats!</p>" }).length === 1 && /body/.test(cy({ title: "Cats", body: "<p>Привіт, cats!</p>" })[0]), "en п. 1: кирилиця в body — попередження з назвою поля");
ok(/U\+0441/.test(cy({ title: "A black сat" })[0] || ""), "en п. 1: кирилична «с» у латинському слові — код символа");
ok(cy({ type: "info", title: "Plurals", body: "<p>We add -s.</p>", uk: "<p>Додаємо -s.</p>", img: "img/eng/фото.jpg", cap: "A cat", credits: [["Кіт", "Автор", "CC0", "https://x.org"]], id: "кіт", sk: "слова", src: "Підручник с. 5", meta: { author: "Віктор" } }).length === 0, "en п. 1: uk, credits, img, id, sk, src, meta — не зміст англійською");
ok(/opts\[1\]/.test(cy({ title: "Pets", opts: ["cat", "кіт"] })[0] || ""), "en п. 1: варіант відповіді");
ok(/items/.test(cy({ type: "sort", title: "Sort", items: [["кіт", 0], ["dog", 1]] })[0] || ""), "en п. 1: items (вкладені масиви)");
ok(/steps/.test(cy({ title: "Pets", steps: ["Кіт — cat."] })[0] || ""), "en п. 1: steps пулу");
ok(cy({ title: "Pets", text: "This is {*a|ан} cat." }).length === 1, "en п. 1: текст мовної вправи (варіант пропуску)");
ok(cy({ title: "Кіт", body: "Кіт", hint: "Кіт", fbText: "Кіт", fbOk: "Кіт" }).length === 1, "en п. 1: один екран — одне попередження з переліком полів");
ok(cy({ title: "Sum", body: "$a + b$ and <b>bold</b> &nbsp; text" }).length === 0, "en п. 1: формули, теги й сутності — чисто");

// заборонені фрази з файлу (style/banned-phrases.txt, style/<предмет>-banned.txt): «фраза» або «фраза → як краще»
const bl = C.parseBanned("# кальки\n\nI am agree → I agree\nmake a photo\n  He has 12 years -> He is 12  \n");
eq(bl.map(b => [b.phrase, b.fix]), [["I am agree", "I agree"], ["make a photo", ""], ["He has 12 years", "He is 12"]], "parseBanned: коментарі й порожні рядки пропущено, «→» і «->» — виправлення");
ok(bl[0].re.test("Yes, i am agree with you.") && !bl[0].re.test("I am agreeing.") && bl[1].re.test("Let's make a photo!") && !bl[1].re.test("make a photograph"), "parseBanned: ціле слово, без регістру");
eq(C.parseBanned("вірно\nна протязі").map(b => b.re.test("ймовірно")), [false, false], "parseBanned: українські фрази — як раніше (ціле слово: «вірно» не ловить «ймовірно»)");
ok(C.parseBanned("вірно")[0].re.test("Це вірно.") && C.parseBanned("приймати участь")[0].re.test("Приймати участь"), "parseBanned: українські фрази знаходить");

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-content-checks: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
