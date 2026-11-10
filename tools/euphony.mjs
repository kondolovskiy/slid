#!/usr/bin/env node
// Слід · милозвучність у/в, і/й, з/із/зі в авторському тексті (Український правопис 2019, § 23–25). engine-lang-p3, п. 15.
// Механічна перевірка лише окремих слів-прийменників і сполучників (не префіксів): дивиться на кінець попереднього слова,
// початок наступного й паузу (розділовий знак) між ними. Це підказка автору й верифікатору, а не вирок: правопис дозволяє відхилення
// (зіставлені поняття, усталені вирази, вірші), тож у validate потрапляють лише правила з малим шумом (VALIDATE_RULES), решта — у звіт.
// Не позначає: слово в тегах/лапках/дужках («у», <b>в</b> — мова про саму літеру), поруч з однолітерними словами (переліки «а, о, у»),
// закреслене <s>…</s>, «і» після слів на й/я/ю/є/ї (§ 24: там «і»/«та»), «і» між голосними й після голосного (зіставлені поняття, § 24 п. 3.1 —
// механічно не відрізнити, лише у звіті).
// Межа (tools-diag-nonmath-p3 п. 3): «в» на початку самого слова («Влітку», «Встановлено» на початку речення → «Улітку», «Установлено») — лише
// у звіті (правило «в-слово-на-початку»), не в validate: частина слів уживається тільки з «в» (вплив, вправа, вставні…). Тег виділення на початку
// речення (<b>В лісі</b>) межею не є; посеред речення — є (навмисні приклади в поясненнях). Для «в-слово-на-початку» велика «В…» одразу
// після відкривного тегу виділення й посеред речення («…або <b>Встановлено…</b>») — теж початок речення-прикладу; курсив і лапки — ні (цитати). Елементи sort (items) перевіряються як авторський текст.
// Запуск: node tools/euphony.mjs [--subject ukr] [--section ID] [--exercises] [--json]  → reports/euphony-<предмет>.md (з --section — лише stdout)
//   --exercises — окремий режим: варіанти, items і речення gaps/pick поза пропусками → reports/euphony-<предмет>-exercises.md
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";

const VOW = "аеєиіїоуюя";
const isV = ch => !!ch && VOW.includes(ch);
const isCs = ch => isC(ch) || (!!ch && "яюєї".includes(ch));   // приголосний звук на початку слова (я, ю, є, ї — [й] + голосний)
const isVs = ch => !!ch && "аеиіоу".includes(ch);   // початок слова: я, ю, є, ї звучать з [й] — це приголосний на початку
const isC = ch => !!ch && /\p{L}/u.test(ch) && !isV(ch) && /[а-щьюяєіїґ']/.test(ch);
// § 23 п. 1.3: «у» перед в, ф і сполученнями льв, св, тв, хв (а також зв, дв, гв, цв, чв, шв — приголосний + в)
const V_CLUSTER = /^(?:[вф]|[бгґдзклмнпрстфхцчшщж]ь?в)/;
// § 25: «зі» перед з, с, ш, щ + приголосний; «зі мною»
const ZI_CLUSTER = w => /^[зсшщ]/.test(w) && isC(w[1]) || /^мн/.test(w);
const SIB = /^[зсцжчш]/;   // § 25 п. 2: «із» на початку речення перед з, с, ц, ж, ч, ш
// «зі (зо) дві години», «зі п'ять кілометрів» — «зі» в значенні «приблизно» перед кількісним числівником (tools-lang-p4, P3-2)
const NUMERAL = /^(?:два|дві|двоє|три|троє|чотири|четверо|п['’ʼ]ять|п['’ʼ]ятеро|шість|шестеро|сім|семеро|вісім|дев['’ʼ]ять|десять|\p{L}+надцять|двадцять|тридцять|сорок|п['’ʼ]ятдесят|шістдесят|сімдесят|вісімдесят|дев['’ʼ]яносто|сто|двісті|триста|сотню|тисячу|десяток|кілька|декілька)$/u;

/** Правила: id → [опис, поради]. VALIDATE_RULES — ті, що йдуть у validate як попередження (решта — лише звіт tools/euphony.mjs). */
export const RULES = {
  "в-між-приголосними": "«в» між приголосними → «у» (§ 23)",
  "в-на-початку": "«В» на початку речення чи після паузи перед приголосним → «У» (§ 23)",
  "в-перед-в-ф": "«в» перед в, ф, льв, св, тв, хв… → «у» (§ 23)",
  "у-між-голосними": "«у» між голосними → «в» (§ 23)",
  "у-голосний-приголосний": "«у» після голосного перед приголосним → «в» (§ 23; звіт)",
  "в-слово-на-початку": "слово на «В» + приголосний на початку речення («Влітку», «Встановлено») → «У» (§ 23; звіт: «Вплив», «Влада» не чергуються)",
  "й-між-приголосними": "«й» між приголосними → «і» (§ 24)",
  "й-на-початку": "«Й» на початку речення чи після паузи → «і» (§ 24)",
  "й-перед-йотованим": "«й» перед й, я, ю, є, ї → «і» (§ 24)",
  "і-між-голосними": "«і» між голосними → «й» (§ 24; не для зіставлених понять — звіт)",
  "і-голосний-приголосний": "«і» після голосного перед приголосним → «й» (§ 24; не для зіставлених понять — звіт)",
  "з-перед-збігом": "«з» перед з, с, ш, щ + приголосний (і «мною») → «зі» (§ 25)",
  "з-на-початку-шиплячий": "«З» на початку речення чи після тире перед з, с, ц, ж, ч, ш → «Із» (§ 25 п. 2)",
  "з-між-приголосними": "«з» між приголосними → «із» (§ 25; звіт)",
  "зі-не-перед-збігом": "«зі» лише перед з, с, ш, щ + приголосний і «мною» (§ 25)",
  "із-між-голосними": "«із» між голосними → «з» (§ 25)",
};
export const VALIDATE_RULES = new Set(["в-між-приголосними", "в-на-початку", "в-перед-в-ф", "у-між-голосними", "й-між-приголосними", "й-на-початку",
  "й-перед-йотованим", "з-перед-збігом", "з-на-початку-шиплячий", "зі-не-перед-збігом", "із-між-голосними"]);

const EMPH = "\u0002", BREAK = "\u0003", IO = "\u0004", IC = "\u0005";
/** Сирий текст (HTML, формули) → рядок, де теги виділення — EMPH, курсив — IO…IC (приклади, цитати), блокові теги — BREAK, формули — «Ф». */
function prep(raw) {
  return String(raw).replace(/<s>[\s\S]*?<\/s>/gi, " ").replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, " Ф ")
    .replace(/(?<=[\p{L}\p{M}'’ʼ])(?:<\/?(?:b|i|u|em|strong|mark|span)\b[^>]*>)+(?=[\p{L}\p{M}])/gu, "")
    .replace(/<\/?(?:p|li|ul|ol|br|div|h\d|table|tr|td)\b[^>]*>/gi, BREAK).replace(/<(?:i|em)\b[^>]*>/gi, IO).replace(/<\/(?:i|em)>/gi, IC)
    .replace(/<[^>]+>/g, EMPH).replace(/&nbsp;/g, " ").replace(/&[a-z]+;/g, " ");
}
// однолітерні слова української; інша одиночна літера поруч (п, т, к…) — мова про літери («перед п стоїть в»)
const ONE = new Set(["а", "в", "є", "з", "й", "і", "о", "у"]);
// прийменник перед цільовим словом — отже, це не прийменник, а назва літери («перед в пишемо», «після з»)
const PREP = new Set(["перед", "після", "між", "на", "до", "від", "за", "під", "над", "без", "біля", "через", "про"]);
// сполучник одразу після цільового слова — назва літери («З чи С?», «Зі та з»)
const CONJ = new Set(["чи", "та", "або", "і", "й", "а", ...PREP]);
// назва перед цільовим словом — мова про саме слово («прийменник з», «сполучник й», «літера в»)
const NAME = new Set(["прийменник", "прийменника", "прийменники", "сполучник", "сполучника", "сполучники", "літера", "літеру", "літери", "буква", "букву", "звук", "звуки", "префікс", "частка", "слово"]);
const WORD = /[\p{L}\p{M}'’ʼ-]+/gu;
// пауза (§ 23 п. 1.2, § 24 п. 1.2): кома, крапка з комою, двокрапка, тире (і « - » з пробілами), відкривна дужка, три крапки.
// Закривна дужка — ні: «Садили (<i>де?</i>) в парку» — питання-позначка в мовній вправі, а не пауза
const PAUSE = /[,;:—–(…]|\s-\s/;
const END = new RegExp(`[.!?…]["»”]?\\s*$|${BREAK}`);
const GUARD = new RegExp(`[«»"“”„\\[\\]/${EMPH}]`);
const TARGET = new Set(["в", "у", "і", "й", "з", "із", "зі"]);

// «в-слово-на-початку» (tools-diag-nonmath-p3 п. 3; verifier-u8s7: «Влітку…», «Встановлено…» в елементах sort і в <b> fbText): початкове
// «в» самого слова, а не прийменник. Лише звіт, не validate: багато слів уживаються тільки з «в» (§ 23 п. 3) — частину відсікає VFIXED, решту — людина.
// Лише слово з великої «В» (рядок з малої після блокового тегу — продовження переліку, не початок речення). Шкільні інструкції
// «Встав…», «Впиши…», «Вкажи…» і терміни «вставні слова», «вказівні займенники» — усталені, не позначаємо.
const VFIXED = /^в(?:плив|прав|провад|лад|ласн|заєм|ступ|клад|дач|важа|бача|сесвіт|селен|тор|бивств|став(?:те)?(?![\p{L}])|ставн|ставк|пиш|каж|казівн|лучн|вічлив)/u;
function initialV(src, toks, k, lw, out) {
  const t = toks[k], p = toks[k - 1];
  // абревіатури («ВВП», «ВНЗ») — не слова з префіксом (рев'ю P3-4)
  if (t.w[0] !== "В" || t.w === t.w.toLocaleUpperCase("uk") || [...lw].length < 3 || !isC(lw[1]) || VFIXED.test(lw)) return;
  const head = src.slice(0, t.i);
  if (head.lastIndexOf(IO) > head.lastIndexOf(IC) || (head.match(/«/g) || []).length > (head.match(/»/g) || []).length) return;   // приклади й цитати
  const rawBefore = (p ? src.slice(p.e, t.i) : head).replace(/[\u0004\u0005]/g, ""), before = rawBefore.replace(/\u0002/g, "");
  if (/[«"“„[/]\s*$/.test(before)) return;
  // велика «В…» одразу після відкривного тегу виділення посеред речення — початок виділеного речення-прикладу: «…або <b>Встановлено
  // нові знаки</b>» (u8s7, рев'ю P2-1). Лише звіт, тож шум допустимий; тег закриття з пробілом після нього («</b> Влітку») — ні
  if (!p || END.test(before) || /\u0002$/.test(rawBefore)) out.push({ rule: "в-слово-на-початку", word: t.w, ctx: t.w + (toks[k + 1] ? " " + toks[k + 1].w : "") });
}

/** Відхилення в одному тексті: [{ rule, word, ctx }] */
export function euphonyIssues(raw) {
  const src = prep(raw), toks = [...src.matchAll(WORD)].filter(m => /[\p{L}]/u.test(m[0])).map(m => ({ w: m[0], i: m.index, e: m.index + m[0].length }));   // « - » без літер — тире, не слово
  const out = [];
  toks.forEach((t, k) => {
    const lw = t.w.toLocaleLowerCase("uk").normalize("NFC").replace(/\u0301/g, "");
    if (!TARGET.has(lw)) { initialV(src, toks, k, lw, out); return; }
    const p = toks[k - 1], n = toks[k + 1];
    if (!n) return;
    const head = src.slice(0, t.i);
    // приклади й цитати (курсив, «…») не перевіряємо: там можуть бути навмисні помилки, вірші, чужий текст
    if (head.lastIndexOf(IO) > head.lastIndexOf(IC) || (head.match(/«/g) || []).length > (head.match(/»/g) || []).length) return;
    // тег виділення перед словом на початку речення не вирішує сам (tools-diag-nonmath-p3 п. 3): «Ні. <b>В лісі</b> тихо» — прийменник
    // у виділеній фразі; мову про саму літеру (<b>в</b>) видає тег одразу після неї (after нижче). Посеред речення тег лишається межею:
    // «ударив <b>в бік</b>, <b>в перше</b> село» — навмисні приклади в поясненні
    const rawBefore = (p ? src.slice(p.e, t.i) : head).replace(/[\u0004\u0005]/g, ""), noEmph = rawBefore.replace(/\u0002/g, "");
    const before = !p || END.test(noEmph) ? noEmph : rawBefore, after = src.slice(t.e, n.i).replace(/[\u0004\u0005]/g, "");
    if (GUARD.test(before.slice(-2)) || GUARD.test(after) || /^\s*[«"„“]/.test(after)) return;   // мова про саму літеру: «у», <b>в</b>
    if (!/^\s+$/.test(after)) return;   // після слова розділовий знак чи тег — не прийменник/сполучник перед словом
    const nw = n.w.toLocaleLowerCase("uk").replace(/\u0301/g, ""), pw = p ? p.w.toLocaleLowerCase("uk").replace(/\u0301/g, "") : "";
    if ([...nw].length === 1 || (p && [...pw].length === 1)) return;   // переліки літер «а, о, у, е»; «Ф» — формула (звуку не знаємо)
    if (PREP.has(pw) || NAME.has(pw) || CONJ.has(nw)) return;
    if ([toks[k - 2], toks[k + 2]].some(x => x && [...x.w].length === 1 && !ONE.has(x.w.toLocaleLowerCase("uk")))) return;
    const start = !p || END.test(before), pause = !start && PAUSE.test(before);
    const pe = pw.replace(/['’ʼ]+$/, "").slice(-1), ns = nw[0], ns2 = nw.replace(/^['’ʼ]/, "");
    const add = rule => out.push({ rule, word: t.w, ctx: `${p && !start ? p.w + before.replace(/\s+/g, " ") : ""}${t.w} ${n.w}`.replace(new RegExp(`[${EMPH}${BREAK}]`, "g"), " ").trim() });
    switch (lw) {
      case "в":
        if (V_CLUSTER.test(ns2)) add("в-перед-в-ф");
        else if ((start || pause) && isCs(ns)) add("в-на-початку");
        else if (!start && !pause && isC(pe) && isCs(ns)) add("в-між-приголосними");
        break;
      case "у":
        if (!start && !pause && isV(pe) && isVs(ns)) add("у-між-голосними");
        else if (!start && !pause && isV(pe) && isC(ns) && !V_CLUSTER.test(ns2)) add("у-голосний-приголосний");   // я, ю, є, ї на початку — не позначаємо (неоднозначно)
        break;
      case "й":
        if (start || pause) add("й-на-початку");
        else if (/^[йяюєї]/.test(ns)) add("й-перед-йотованим");
        else if (isC(pe) && isCs(ns)) add("й-між-приголосними");
        break;
      case "і":
        if (start || pause || /[йяюєї]/.test(pe) || /^[йяюєї]/.test(ns)) break;
        if (isV(pe) && isVs(ns)) add("і-між-голосними");
        else if (isV(pe) && isCs(ns)) add("і-голосний-приголосний");
        break;
      case "з":
        if (ZI_CLUSTER(ns2)) add("з-перед-збігом");
        else if ((start || /[—–]|\s-\s/.test(before)) && SIB.test(ns) && !isC(ns2[1])) add("з-на-початку-шиплячий");
        else if (!start && !pause && isC(pe) && isCs(ns)) add("з-між-приголосними");
        break;
      case "зі":
        if (!ZI_CLUSTER(ns2) && !NUMERAL.test(nw)) add("зі-не-перед-збігом");
        break;
      case "із":
        if (!start && !pause && isV(pe) && isVs(ns)) add("із-між-голосними");
        break;
    }
  });
  return out;
}

/** Авторський текст екрана (без речень вправ gaps/pick: там можуть бути навмисні помилки).
 *  opts: false — без варіантів відповіді (validate: хибні варіанти й «Знайди помилку» навмисні; рев'ю engine-lang-p3 P2-1) */
export function euphonyScreen(s, { opts = true } = {}) {
  const note = typeof s.note === "string" ? s.note : s.note?.text;
  return [s.title, s.body, note, s.fbTitle, s.fbText, s.fbOk, s.fbBad, s.hint, s.cap, ...(opts ? s.opts || [] : []), ...(s.items || []).map(i => Array.isArray(i) ? i[0] : i)]
    .filter(x => typeof x === "string").flatMap(euphonyIssues);
}

/** Текст вправ (tools-math-ister-p3 п. 12; verifier-fix-ukr-euphony: масові «й» після я/ю/є/ї у варіантах і реченнях вправ знаходив
 *  лише ручний grep): усі варіанти opts (і хибні), items, речення gaps поза {…} і pick поза […]. Сам пропуск і слово-ціль — вправа
 *  (там навмисні помилки), тож вони стають межею (EMPH): сусідні з ними «і/й, у/в» теж не позначаються. Лише звіт (--exercises), не validate. */
export function euphonyExercise(s) {
  const ex = s.type === "gaps" && typeof s.text === "string" ? s.text.replace(/\{[^{}]*\}/g, EMPH)
    : s.type === "pick" && typeof s.text === "string" ? s.text.replace(/\[[^\]]*\]/g, EMPH) : null;
  return [...(s.opts || []), ...(s.items || []).map(i => Array.isArray(i) ? i[0] : i), ex].filter(x => typeof x === "string").flatMap(euphonyIssues);
}

// ---- CLI ----
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { loadContent, ROOT } = await import("./lib.mjs");
  const args = process.argv.slice(2), opt = k => args.includes(k) ? args[args.indexOf(k) + 1] : null;
  const subj = opt("--subject") || "ukr", only = opt("--section"), exMode = args.includes("--exercises");
  const { subjects, origin } = loadContent();
  const c = subjects.find(x => x.id === subj);
  if (!c) { console.error(`немає предмета ${subj}`); process.exit(2); }
  if (only && !c.sections.some(x => x.id === only)) { console.error(`немає розділу ${only} у предметі ${subj}`); process.exit(2); }
  const rows = []; let screens = 0;
  for (const sec of c.sections.filter(x => x.lessons && (!only || x.id === only))) for (const l of sec.lessons) {
    l.screens.forEach((s, i) => { screens++; for (const x of exMode ? euphonyExercise(s) : euphonyScreen(s)) rows.push({ where: `${l.id} екран ${i + 1}`, file: origin[sec.id], ...x }); });
    if (!exMode) for (const x of [l.title, l.why, l.outro?.text, ...(l.outro?.learned || [])].filter(t => typeof t === "string").flatMap(euphonyIssues)) rows.push({ where: `${l.id} outro/назва`, file: origin[sec.id], ...x });
  }
  const byRule = {}; rows.forEach(r => (byRule[r.rule] ||= []).push(r));
  if (args.includes("--json")) { process.stdout.write(JSON.stringify({ subject: subj, mode: exMode ? "exercises" : "text", screens, rows }, null, 1) + "\n"); process.exit(0); }
  const L = [`# Милозвучність у/в, і/й, з/із/зі: ${subj}${exMode ? " · текст вправ" : ""}${only ? ` · розділ ${only}` : ""}`, "", `Згенеровано: ${new Date().toISOString().slice(0, 10)} · tools/euphony.mjs${exMode ? " --exercises" : ""} · екранів: ${screens}, відхилень: ${rows.length}`, "",
    exMode ? "Варіанти відповідей (і хибні), items і речення вправ gaps/pick поза пропусками. Хибний варіант може бути навмисним — перевір кожне вручну; validate цього не перевіряє."
      : "Механічна підказка за УП § 23–25: перевір кожне вручну. Правила з позначкою «validate» дають попередження валідатора; решта — лише тут.", ""];
  for (const [id, desc] of Object.entries(RULES)) { const rs = byRule[id] || []; if (!rs.length) continue;
    L.push(`## ${desc}${VALIDATE_RULES.has(id) && !exMode ? " · validate" : ""} — ${rs.length}`, "");
    rs.forEach(r => L.push(`- ${r.where} (${r.file}): «${r.ctx}»`)); L.push(""); }
  // --section: лише stdout — спільний звіт предмета не перезаписуємо одним розділом (tools-lang-p4, п. 7)
  if (only) { process.stdout.write(L.join("\n") + "\n"); process.exit(0); }
  fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
  const out = `reports/euphony-${subj}${exMode ? "-exercises" : ""}.md`;
  fs.writeFileSync(path.join(ROOT, out), L.join("\n"));
  console.log(`${subj}: екранів ${screens}, відхилень ${rows.length} → ${out}`);
  for (const [id, rs] of Object.entries(byRule)) console.log(`  ${id}${VALIDATE_RULES.has(id) ? " (validate)" : ""}: ${rs.length}`);
}
