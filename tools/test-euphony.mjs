#!/usr/bin/env node
// Слід · тести перевірки милозвучності у/в, і/й, з/із/зі (tools/euphony.mjs; УП § 23–25). Запуск: node tools/test-euphony.mjs
import { euphonyIssues, euphonyScreen, RULES, VALIDATE_RULES } from "./euphony.mjs";
import fs from "node:fs"; import os from "node:os"; import path from "node:path";
import { spawnSync } from "node:child_process"; import { fileURLToPath } from "node:url";
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
clean("Марія і Олег. Чай і кава. Мрія і бажання.", "§ 24: після слів на й/я/ю/є/ї — «і»");
clean("Сергій і Юрій.", "«і» перед й, я, ю, є, ї");
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
// екран: збирає title, body, fbText…, але не text вправ (там можуть бути навмисні помилки)
{ n++; const r = euphonyScreen({ type: "gaps", title: "Брат й сестра", text: "Брат й сестра {*е|и}", fbText: "Ліс з дубів." }).map(x => x.rule).sort();
  if (JSON.stringify(r) !== JSON.stringify(["з-між-приголосними", "й-між-приголосними"])) { fail++; console.log("✗ euphonyScreen: title і fbText, без text", r); } }
{ n++; const s = { type: "choice", title: "Що правильно?", opts: ["Брат й сестра", "Брат і сестра"], correct: 1 };
  const all = euphonyScreen(s).length, noOpts = euphonyScreen(s, { opts: false }).length;
  if (!(all === 1 && noOpts === 0)) { fail++; console.log("✗ euphonyScreen opts:false — хибні варіанти не перевіряються у validate", all, noOpts); } }
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
    r = run("--section", "nope");
    n++; if (r.status !== 2) { fail++; console.log("✗ euphony --section неіснуючого розділу — код 2", r.status, r.stdout); }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); } }

console.log(fail ? `test-euphony: ${fail} з ${n} не пройшли` : `test-euphony: ${n} перевірок — усі пройшли`);
process.exit(fail ? 1 : 0);
