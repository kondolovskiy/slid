#!/usr/bin/env node
// Слід · тести перевірки милозвучності у/в, і/й, з/із/зі (tools/euphony.mjs; УП § 23–25). Запуск: node tools/test-euphony.mjs
import { euphonyIssues, euphonyScreen, euphonyExercise, RULES, VALIDATE_RULES } from "./euphony.mjs";
import fs from "node:fs"; import os from "node:os"; import path from "node:path";
import { spawnSync } from "node:child_process"; import { slowPipe } from "./fixtures/slow-pipe.mjs"; import { fileURLToPath } from "node:url";
let fail = 0, n = 0;
const rules = t => euphonyIssues(t).map(x => x.rule);
const has = (t, rule) => { n++; const r = rules(t); if (!r.includes(rule)) { fail++; console.log(`✗ «${t}»: очікувалось ${rule}, отримано ${JSON.stringify(r)}`); } };
const clean = (t, why) => { n++; const r = rules(t); if (r.length) { fail++; console.log(`✗ «${t}» (${why}): зайве ${JSON.stringify(r)}`); } };

// § 23 у/в
has("Брат в сестри гостює.", "в-між-приголосними");
has("Ми були там. В кінці дня пішли.", "в-на-початку");
has("Він прийшов, в руках квіти.", "в-на-початку");
has("Вона живе в Франції.", "в-перед-в-ф");
has("Ми були в Львові.", "в-перед-в-ф");
has("Вона у Америці.", "у-між-голосними");
has("Вона у школі.", "у-голосний-приголосний");
clean("Брат у сестри. У Києві тепло. Вона в Америці. Вона в школі. Вона у Львові. Він у вівторок прийде.", "правильно");
clean("Вона у якому місті?", "я на початку слова — [й], не голосний: не «у між голосними»");
// § 24 і/й
has("Брат й сестра.", "й-між-приголосними");
has("Й ми пішли.", "й-на-початку");
has("Прийшла, й сіла.", "й-на-початку");
has("Вона й Юля.", "й-перед-йотованим");
has("Вона і Оля.", "і-між-голосними");
has("Вона і брат.", "і-голосний-приголосний");
clean("Брат і сестра. І ми пішли. Вона й Оля. Вона й брат.", "правильно");
// § 24 п. 1.2 / § 23 п. 1.2: пауза — і тире (також « - » з пробілами), і дужки, і три крапки (tools-math-ister-p3 п. 17)
for (const t of ["Прийшла — й сіла.", "Прийшла - й сіла.", "Прийшла (й сіла)."]) has(t, "й-на-початку");
for (const t of ["Він прийшов — в руках квіти.", "Він прийшов (в руках квіти).", "Він прийшов… в руках квіти."]) has(t, "в-на-початку");
clean("Прийшла — і сіла. Прийшла - і сіла. Він прийшов (у руках квіти).", "після паузи — «і», «у»");
clean("Марія і Олег. Чай і кава. Мрія і бажання.", "§ 24: після слів на й/я/ю/є/ї — «і»");
clean("Сергій і Юрій.", "«і» перед й, я, ю, є, ї");
// § 24 п. 4 (tools-euphony-i-after-j): після слова на й, я, ю, є, ї — «і» або «та», а не «й» (навіть між голосними); лише звіт
has("Моя й твоя мрії.", "й-після-йотованого");
has("Сім'я й друзі.", "й-після-йотованого");
has("Сім’я й друзі.", "й-після-йотованого");
has("Андрій й Ольга.", "й-після-йотованого");
has("Я п'ю й співаю.", "й-після-йотованого");
has("Я й ти.", "й-після-йотованого");   // «я» — займенник, не назва літери
clean("Голосні а, е, и, я. Я і ти.", "перелік літер і правильне «я і ти»");
has("Наші мрії й плани.", "й-після-йотованого");
has("Вона допускає й інші варіанти.", "й-після-йотованого");   // частка «й» (= «також») — механічно не відрізнити: звіт «перевір»
has("Мовчазна моя й Олина пісня.", "й-після-йотованого");
{ n++; const r = rules("Андрій й брат.");   // «й» після й перед приголосним — уже validate-правило «між приголосними», не дублюємо
  if (JSON.stringify(r) !== JSON.stringify(["й-між-приголосними"])) { fail++; console.log("✗ «Андрій й брат»: лише й-між-приголосними", r); } }
{ n++; const r = rules("Моя й Юля.");   // перед йотованим — правило validate «й-перед-йотованим», не дублюємо
  if (JSON.stringify(r) !== JSON.stringify(["й-перед-йотованим"])) { fail++; console.log("✗ «Моя й Юля»: лише й-перед-йотованим", r); } }
clean("Мама й тато. Моя і твоя мрії. Сім'я та друзі. Андрій і Ольга. Вона й Оля.", "правильно: після голосного (не йотованого) — «й»; після я/ю/є/ї/й — «і», «та»");
clean("Ліна пише: <i>моя й твоя</i>. Він каже: «моя й твоя». Пишемо моя <b>й</b> твоя.", "розмітка: курсив, лапки, сам сполучник у тегах");
// рев'ю P2-1: виділене <b> перевіряється (на живому змісті там правильний авторський текст); P3-1: частина слова в <b> не вимикає правило
has("Олена Пчілка, <b>письменниця й перекладачка</b>.", "й-після-йотованого");
has("<b>при</b>йшов додому, моя й твоя.", "й-після-йотованого");
{ n++; const r = rules("Тоді я мав в кишені.");   // «я» в ONE (займенник) — сусід на k±2 не вимикає й правила validate (рев'ю P3-3)
  if (JSON.stringify(r) !== JSON.stringify(["в-між-приголосними"])) { fail++; console.log("✗ «я мав в кишені»: в-між-приголосними", r); } }
clean("Сполучник й після я — помилка.", "мова про сам сполучник");
// виділений кінець речення: «<b>Тихо.</b> В лісі…» — далі початок речення
has("<b>Тихо.</b> В лісі темно.", "в-на-початку");
has("<b>Тихо.</b> Влітку тепло.", "в-слово-на-початку");
{ n++; const r = euphonyExercise({ type: "gaps", text: "Моя {*і|й} твоя мрії, сім'я й друзі." }).map(x => x.rule);   // пропуск — межа; поза ним — звіт вправ
  if (JSON.stringify(r) !== JSON.stringify(["й-після-йотованого"])) { fail++; console.log("✗ euphonyExercise gaps: «сім'я й друзі» поза пропуском", r); } }
{ n++; const r = euphonyExercise({ type: "pick", text: "Моя [й] твоя мрії." }).map(x => x.rule);
  if (r.length) { fail++; console.log("✗ euphonyExercise pick: «й» у […] — слово-ціль вправи", r); } }
{ n++; if (VALIDATE_RULES.has("й-після-йотованого") || !/частка/.test(RULES["й-після-йотованого"] || "")) { fail++; console.log("✗ й-після-йотованого — лише звіт, опис згадує частку"); } }
// § 25 з/із/зі
has("Млинці з сметаною.", "з-перед-збігом");
has("Говорив з мною.", "з-перед-збігом");
has("З чого почати?", "з-на-початку-шиплячий");
has("Обидва — з чоловічим родом.", "з-на-початку-шиплячий");
has("Ліс з дубів.", "з-між-приголосними");
has("Вийшла зі хати.", "зі-не-перед-збігом");
has("Вона із Олею.", "із-між-голосними");
clean("Млинці зі сметаною. Зі мною. Із чого почати? З Олею. Ліс із дубів. Вона з Олею. Вийшла з хати. Зі школи.", "правильно");
clean("Зі сходу. Зі столу.", "зі перед с + приголосний");
clean("Ми чекали зі дві години. Було зі три сотні людей. Пройшли зі п'ять кілометрів.", "«зі»/«зо» перед числівником — приблизна кількість (tools-lang-p4, P3-2)");
has("Вийшла зі двору.", "зі-не-перед-збігом");
// не позначати: мова про саму літеру, приклади, цитати, переліки, закреслене
clean("Пишемо <b>в</b> між голосними.", "літера в тегах");
clean("Прийменник «у» пишемо так.", "у лапках");
clean("Перед в пишемо апостроф. Після з стоїть голосний.", "назва літери після прийменника");
clean("Прийменник з має три форми: з, із, зі.", "назва літери після «прийменник»");
clean("З чи С? Зі та з.", "сполучник після літери");
clean("Голосні а, о, у, е, и, і.", "перелік літер");
clean("Перед п стоїть в кореня.", "одиночна літера поруч");
clean("Ліна пише: <i>Степ й море були поруч.</i>", "приклад курсивом");
clean("Ліна пише: «Степ й море були поруч».", "цитата в лапках");
clean("Пишемо <s>в сестри</s> правильно.", "закреслене");
clean("Маємо $a$ в $b$.", "формула");
clean("Садили (<i>де?</i>) в парку.", "«?)» — не кінець речення");
// tools-diag-nonmath-p3 п. 3 (verifier-u8s7): <b> на початку речення fbText не ховає прийменник; посеред речення — ховає (навмисні приклади)
has("Ні. <b>В лісі</b> тихо.", "в-на-початку");
has("<b>В лісі</b> тихо.", "в-на-початку");
clean("Ударив <b>в бік</b>, <b>в перше</b> село — окремо.", "виділений приклад посеред речення");
clean("Ні. <b>в</b> — це літера.", "сама літера в тегах на початку речення");
// «в» на початку самого слова (не прийменник) — лише звіт: «Влітку…», «Встановлено…» (і в <b>, і в елементі sort)
has("Влітку тепло.", "в-слово-на-початку");
has("Так. <b>Встановлено</b> межу.", "в-слово-на-початку");
{ n++; const r = euphonyScreen({ type: "sort", items: [["Влітку тепло", 0], ["Улітку тепло", 1]] }).map(x => x.rule);
  if (JSON.stringify(r) !== JSON.stringify(["в-слово-на-початку"])) { fail++; console.log("✗ euphonyScreen sort: «Влітку» в items", r); } }
clean("Улітку тепло. Уже вечір. Вплив сонця. Вправа 3. Вставні слова. Встав букву. Впиши слово. Влучно сказано. Ввічливо попроси. Вказівні займенники.", "усталені з «в» і правильні з «у»");
clean("Свято Вчителя. Ми влітку їдемо.", "не початок речення");
clean("Ліна пише: <i>Влітку тепло.</i> Він сказав: «Влітку тепло».", "приклад курсивом і цитата");
// рев'ю P2-1: u8s7 l4 е10 — «…або <b>Встановлено…</b>» посеред речення (відкривний тег одразу перед словом); закривний тег — ні
has("Треба: <b>Дорожники встановили нові знаки</b> (двоскладне) або <b>Встановлено нові знаки</b> (безособове).", "в-слово-на-початку");
clean("Слово <b>літо</b> Влад написав.", "закривний тег і пробіл перед «В…» — не початок прикладу (і «Влад» — у VFIXED)");
clean("Слово <b>літо</b> Вчителька пояснила.", "закривний тег і пробіл перед «В…» — не початок прикладу");
// рев'ю P3-1, P3-4: курсив і лапки (приклади, цитати), абревіатури, двобуквені, з малої після крапки
clean("Приклад. <i>Влітку тепло.</i>", "курсив на початку речення — приклад");
clean("Приклад. «Влітку тепло».", "лапки «…» на початку речення — цитата");
clean("«Так. Влітку тепло», — сказав він.", "друге речення всередині цитати (лічильник «»)");
clean("\"Влітку тепло\" — так кажуть.", "прямі лапки перед словом");
clean("ВВП зростає. ВНЗ працюють.", "абревіатури");
clean("Вт, Ср, Чт — робочі дні.", "двобуквене скорочення");
clean("Так. влітку тепло — з малої не позначаємо.", "з малої після крапки");
{ n++; if (VALIDATE_RULES.has("в-слово-на-початку")) { fail++; console.log("✗ в-слово-на-початку — лише звіт, не validate"); } }
// екран: збирає title, body, fbText…, але не text вправ (там можуть бути навмисні помилки)
{ n++; const r = euphonyScreen({ type: "gaps", title: "Брат й сестра", text: "Брат й сестра {*е|и}", fbText: "Ліс з дубів." }).map(x => x.rule).sort();
  if (JSON.stringify(r) !== JSON.stringify(["з-між-приголосними", "й-між-приголосними"])) { fail++; console.log("✗ euphonyScreen: title і fbText, без text", r); } }
{ n++; const s = { type: "choice", title: "Що правильно?", opts: ["Брат й сестра", "Брат і сестра"], correct: 1 };
  const all = euphonyScreen(s).length, noOpts = euphonyScreen(s, { opts: false }).length;
  if (!(all === 1 && noOpts === 0)) { fail++; console.log("✗ euphonyScreen opts:false — хибні варіанти не перевіряються у validate", all, noOpts); } }
// tools-math-ister-p3 п. 12: окремий режим для тексту вправ — усі opts, items, речення gaps поза {…} і pick поза […]
{ const ex = s => euphonyExercise(s).map(x => x.ctx).sort();
  const t = (got, want, what) => { n++; if (JSON.stringify(got) !== JSON.stringify(want)) { fail++; console.log(`✗ euphonyExercise: ${what}`, JSON.stringify(got)); } };
  t(ex({ type: "gaps", title: "Брат й сестра", fbText: "Ліс з дубів.", text: "Тарас й Світлана {*у|в} школі. Мама {*й|і} тато." }), ["Тарас й Світлана"], "gaps: речення поза {…}; пропуск і сусіди — межа; title/fbText — не тут");
  t(ex({ type: "pick", text: "Брат й сестра [!в] школі, [вірно]." }), ["Брат й сестра"], "pick: поза […]");
  t(ex({ type: "gaps", text: "Ми {*пішли|пішов} й сіли." }), [], "gaps: слово перед «й» — у пропуску (який варіант, невідомо) — не позначаємо за хибним «пішов»");
  t(ex({ type: "choice", opts: ["Брат й сестра", "Брат і сестра"], correct: 1 }), ["Брат й сестра"], "choice: і хибні варіанти");
  t(ex({ type: "sort", items: [["Степ й море", 0], ["Ліс", 1]] }).concat(ex({ type: "order", items: ["Вона у Америці"] })).sort(), ["Степ й море", "Вона у Америці"].sort(), "items sort ([текст, кошик]) і order");
  t(ex({ type: "info", title: "Брат й сестра", body: "Ліс з дубів." }), [], "авторський текст (title, body) — не в цьому режимі"); }
// правила validate — підмножина описаних; правила зі звіту (зіставлені поняття, «у»/«з» між приголосними…) у validate не йдуть
{ n++; const bad = [...VALIDATE_RULES].filter(r => !RULES[r]);
  if (bad.length || VALIDATE_RULES.has("і-голосний-приголосний") || VALIDATE_RULES.has("і-між-голосними")) { fail++; console.log("✗ VALIDATE_RULES", bad); } }

// tools-lang-p4, п. 7: CLI на фікстурному дереві. --section друкує звіт у stdout і НЕ перезаписує спільний reports/euphony-<предмет>.md;
// без --section — пише файл; неіснуючий розділ — код 2 (не «0 відхилень»)
{ const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "slid-test-euphony-"));
  try {
    for (const d of ["tools", "app"]) fs.cpSync(path.join(ROOT, d), path.join(tmp, d), { recursive: true });
    fs.mkdirSync(path.join(tmp, "content/subjects"), { recursive: true }); fs.mkdirSync(path.join(tmp, "content/ukr"), { recursive: true });
    fs.copyFileSync(path.join(ROOT, "content/subjects/ukr.js"), path.join(tmp, "content/subjects/ukr.js"));
    const sec = id => `SLID.section("ukr", ${JSON.stringify({ id, grade: 5, weeks: [1, 2], title: "Фікстура", why: "Тест euphony.", meta: { author: "test" },
      lessons: [{ id: id + "l1", title: "Фікстура", why: "Тест.", icon: "pot", status: "draft", outro: { text: "Готово.", learned: ["Перше", "Друге"] },
        screens: [{ type: "info", title: "Гості", body: "Брат в сестри гостює." }] }] })});\n`;
    fs.writeFileSync(path.join(tmp, "content/ukr/g5-fxa.js"), sec("fxa")); fs.writeFileSync(path.join(tmp, "content/ukr/g5-fxb.js"), sec("fxb"));
    const run = (...a) => spawnSync(process.execPath, [path.join(tmp, "tools/euphony.mjs"), ...a], { cwd: tmp, encoding: "utf8" });
    const rep = path.join(tmp, "reports/euphony-ukr.md");
    let r = run();
    n++; if (r.status !== 0 || !fs.existsSync(rep) || !/fxal1/.test(fs.readFileSync(rep, "utf8")) || !/fxbl1/.test(fs.readFileSync(rep, "utf8"))) { fail++; console.log("✗ euphony без --section: звіт з обома розділами", r.status, r.stderr); }
    const before = fs.existsSync(rep) ? fs.readFileSync(rep, "utf8") : null;
    r = run("--section", "fxa");
    n++; if (r.status !== 0 || !/fxal1 екран 1/.test(r.stdout) || /fxbl1/.test(r.stdout)) { fail++; console.log("✗ euphony --section fxa: звіт розділу в stdout", r.status, r.stdout, r.stderr); }
    n++; if (fs.readFileSync(rep, "utf8") !== before || fs.readdirSync(path.join(tmp, "reports")).length !== 1) { fail++; console.log("✗ euphony --section перезаписав спільний звіт або створив інший файл", fs.readdirSync(path.join(tmp, "reports"))); }
    // --exercises: окремий звіт reports/euphony-ukr-exercises.md лише з текстом вправ; спільний звіт не чіпає
    fs.writeFileSync(path.join(tmp, "content/ukr/g5-fxa.js"), sec("fxa").replace('"type":"info","title":"Гості","body":"Брат в сестри гостює."', '"type":"choice","title":"Гості","body":"Брат в сестри гостює.","opts":["Степ й море","Степ і море"],"correct":1'));
    r = run("--exercises");
    const exRep = path.join(tmp, "reports/euphony-ukr-exercises.md"), exTxt = fs.existsSync(exRep) ? fs.readFileSync(exRep, "utf8") : "";
    n++; if (r.status !== 0 || !/Степ й море/.test(exTxt) || /Брат в сестри/.test(exTxt) || /· validate/.test(exTxt) || fs.readFileSync(rep, "utf8") !== before) { fail++; console.log("✗ euphony --exercises: окремий звіт з варіантами, без авторського тексту", r.status, r.stderr, exTxt); }
    r = run("--section", "nope");
    n++; if (r.status !== 2) { fail++; console.log("✗ euphony --section неіснуючого розділу — код 2", r.status, r.stdout); }
    // tools-euphony-i-after-j п. 4: пули (SLID.pool) і тести рівня (SLID.diag) — у звіті предмета; --pool / --diag ID — лише stdout;
    // кроки розв'язку пулу (steps) — авторський текст, як fbText; варіанти — як в уроках (звіт так, validate ні)
    fs.writeFileSync(path.join(tmp, "content/ukr/pool-g5-fxa.js"), `SLID.pool("ukr", ${JSON.stringify({ id: "pfxa", section: "fxa", status: "draft", items: [
      { id: "pfxa1", lesson: "fxal1", type: "choice", title: "Моя й твоя мрії", steps: ["Сім'я й друзі разом."], opts: ["Андрій й Ольга", "Андрій і Ольга"], correct: 1 },
      // генератор: перевіряється перший набір значень, як у validate («{a}» → число), а не шаблон (рев'ю P3-2)
      { id: "pfxa2", lesson: "fxal1", lvl: 1, adapted: true, type: "answer", title: "{a} мрії й плани", body: "<p>Скільки?</p>", steps: ["Відповідь {a}."], gen: { vars: { a: { min: 2, max: 3 } }, answer: "a" } }] })});\n`);
    fs.writeFileSync(path.join(tmp, "content/ukr/diag-g5.js"), `SLID.diag("ukr", ${JSON.stringify({ id: "dfx5", grade: 5, title: "Тест", status: "draft", topics: [],
      items: [{ type: "choice", title: "Наші мрії й плани", opts: ["Моя й Олина", "Моя і Олина"], correct: 1 }] })});\n`);
    r = run();
    const full = fs.existsSync(rep) ? fs.readFileSync(rep, "utf8") : "";
    n++; if (r.status !== 0 || !/pfxa задача 1 «pfxa1» \(content\/ukr\/pool-g5-fxa\.js\): «Моя й твоя»/.test(full) || !/«Сім'я й друзі»/.test(full)
      || !/dfx5 завдання 1 \(content\/ukr\/diag-g5\.js\): «мрії й плани»/.test(full) || !/pfxa задача 2 «pfxa2» \(content\/ukr\/pool-g5-fxa\.js\): «мрії й плани»/.test(full) || !/«Андрій й Ольга»/.test(full) || !/«Моя й Олина»/.test(full)) { fail++; console.log("✗ euphony: пул і тест рівня у звіті предмета", r.status, r.stderr, full); }
    const fullBefore = full;
    r = run("--pool", "pfxa");
    n++; if (r.status !== 0 || !/розділ|пул pfxa/.test(r.stdout) || !/pfxa задача 1/.test(r.stdout) || /fxal1|dfx5/.test(r.stdout) || fs.readFileSync(rep, "utf8") !== fullBefore) { fail++; console.log("✗ euphony --pool pfxa: лише пул, у stdout", r.status, r.stdout, r.stderr); }
    r = run("--diag", "dfx5");
    n++; if (r.status !== 0 || !/тест рівня dfx5/.test(r.stdout) || !/dfx5 завдання 1/.test(r.stdout) || /fxal1|pfxa/.test(r.stdout) || fs.readFileSync(rep, "utf8") !== fullBefore) { fail++; console.log("✗ euphony --diag dfx5: лише тест рівня, у stdout", r.status, r.stdout, r.stderr); }
    r = run("--exercises", "--pool", "pfxa");
    n++; if (r.status !== 0 || !/Андрій й Ольга/.test(r.stdout) || /Моя й твоя/.test(r.stdout)) { fail++; console.log("✗ euphony --exercises --pool: варіанти пулу", r.status, r.stdout, r.stderr); }
    for (const a of [["--pool", "nope"], ["--diag", "nope"], ["--pool", "dfx5"], ["--section", "fxa", "--pool", "pfxa"]]) {
      r = run(...a); n++; if (r.status !== 2) { fail++; console.log(`✗ euphony ${a.join(" ")} — код 2`, r.status, r.stdout); } }
    // tools-euphony-json-pipe п. 2: --help / -h — довідка без прогону; невідомий прапорець, прапорець без значення, зайвий аргумент —
    // код 2 і повідомлення; спільний звіт не перезаписано (автори пулів запускали --help і перезаписували reports/euphony-*.md)
    const SENTINEL = "не чіпати\n"; fs.writeFileSync(rep, SENTINEL);
    for (const h of ["--help", "-h"]) { r = run(h);
      n++; if (r.status !== 0 || !/Використання/.test(r.stdout) || !/--pool/.test(r.stdout) || !/--json/.test(r.stdout) || /відхилень/.test(r.stdout) || fs.readFileSync(rep, "utf8") !== SENTINEL) { fail++; console.log(`✗ euphony ${h}: довідка без прогону`, r.status, r.stdout, r.stderr); } }
    for (const a of [["--bogus"], ["--subject", "ukr", "--jsno"], ["--section"], ["--section", "--json"], ["--subject"], ["fxa"], ["--json", "--help2"]]) { r = run(...a);
      n++; if (r.status !== 2 || !r.stderr.trim() || r.stdout || fs.readFileSync(rep, "utf8") !== SENTINEL) { fail++; console.log(`✗ euphony ${a.join(" ")}: код 2 і повідомлення, без прогону`, r.status, r.stdout.slice(0, 200), r.stderr); } }
    r = run("--bogus"); n++; if (!/«--bogus»/.test(r.stderr) || !/--help/.test(r.stderr)) { fail++; console.log("✗ euphony --bogus: повідомлення називає прапорець і --help", r.stderr); }
    // tools-euphony-json-pipe п. 1: великий вивід у pipe не обрізається на 64 КБ (process.exit(0) одразу після stdout.write).
    // Читач навмисно повільний (tools/fixtures/slow-pipe.mjs): 300 мс не читає pipe, тож дочірній процес упирається в заповнений буфер
    const late = (script, ...a) => slowPipe(script, a, { cwd: tmp });
    // 2000 екранів по 10 відхилень (один довгий body перевіряється нелінійно повільно)
    const SCR = 2000, PER = 10, BIG = SCR * PER;
    fs.writeFileSync(path.join(tmp, "content/ukr/g5-fxbig.js"), sec("fxbig").replace('[{"type":"info","title":"Гості","body":"Брат в сестри гостює."}]',
      JSON.stringify(Array.from({ length: SCR }, () => ({ type: "info", title: "Гості", body: "Брат в сестри гостює. ".repeat(PER) })))));
    r = await late(path.join(tmp, "tools/euphony.mjs"), "--json");
    { let j = null; try { j = JSON.parse(r.stdout); } catch {}
      n++; if (r.status !== 0 || Buffer.byteLength(r.stdout) < 1e6 || !j || j.rows.filter(x => x.where.startsWith("fxbigl1 екран ")).length !== BIG) { fail++; console.log("✗ euphony --json у pipe: повний JSON ≥ 1 МБ", r.status, r.stdout.length, r.stderr.slice(0, 300)); } }
    r = await late(path.join(tmp, "tools/euphony.mjs"), "--section", "fxbig");
    n++; if (r.status !== 0 || Buffer.byteLength(r.stdout) < 1e6 || (r.stdout.match(/^- fxbigl1 екран \d+ /gm) || []).length !== BIG) { fail++; console.log("✗ euphony --section у pipe: повний звіт ≥ 1 МБ", r.status, r.stdout.length); }
    r = await late(path.join(tmp, "tools/euphony.mjs"), "--section", "nope");
    n++; if (r.status !== 2) { fail++; console.log("✗ euphony --section nope (async) — код 2", r.status); }
    // спільний помічник exitFlushed (lib.mjs) для ранніх виходів інших інструментів: дочекатися stdout/stderr, тоді вийти з кодом
    fs.writeFileSync(path.join(tmp, "tools/flush-fixture.mjs"), `import { exitFlushed } from "./lib.mjs";\nconsole.log("x".repeat(2e6)); await exitFlushed(3); console.log("після виходу");\n`);
    r = await late(path.join(tmp, "tools/flush-fixture.mjs"));
    n++; if (r.status !== 3 || r.stdout !== "x".repeat(2e6) + "\n") { fail++; console.log("✗ exitFlushed: увесь вивід, код 3, далі не виконується", r.status, r.stdout.length, r.stderr.slice(0, 300)); }
    // рев'ю P2-1: читач закриває pipe рано (`| head -c 10`) — EPIPE тихо, код той самий, що з повним читанням (0 / 3), без стеку в stderr
    for (const [a, what] of [[["--json"], "--json"], [["--section", "fxbig"], "--section"]]) {
      r = await slowPipe(path.join(tmp, "tools/euphony.mjs"), a, { cwd: tmp, closeEarly: true });
      n++; if (r.status !== 0 || r.stderr || !r.stdout) { fail++; console.log(`✗ euphony ${what} | head: EPIPE тихо, код 0`, r.status, r.signal, r.stderr.slice(0, 300)); } }
    r = await slowPipe(path.join(tmp, "tools/flush-fixture.mjs"), [], { cwd: tmp, closeEarly: true });
    n++; if (r.status !== 3 || r.stderr) { fail++; console.log("✗ exitFlushed | head: EPIPE тихо, код 3", r.status, r.signal, r.stderr.slice(0, 300)); }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); } }

console.log(fail ? `test-euphony: ${fail} з ${n} не пройшли` : `test-euphony: ${n} перевірок — усі пройшли`);
process.exit(fail ? 1 : 0);
