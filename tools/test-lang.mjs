#!/usr/bin/env node
// Слід · тести мовних вправ (app/lang.js): розбір розмітки gaps / pick / stress / word / split і перевірка відповідей.
// Очікування записані вручну (не через solution), щоб тест ловив помилки самого розбору. Запуск: node tools/test-lang.mjs
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path";
import { ROOT } from "./lib.mjs";

const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "app/lang.js"), "utf8"), ctx);
const L = ctx.SLID_LANG;
let fail = 0, n = 0;
const eq = (a, b, msg) => { n++; const A = JSON.stringify(a), B = JSON.stringify(b); if (A !== B) { fail++; console.log(`✗ ${msg}\n   отримано:  ${A}\n   очікувано: ${B}`); } };
const ok = (v, msg) => eq(!!v, true, msg);
const no = (v, msg) => eq(!!v, false, msg);

/* gaps */
{ const g = L.parseGaps("с{*е|и}ло і з{е|*и}ма");
  eq(g.gaps.map(x => [x.opts, x.correct]), [[["е", "и"], 0], [["е", "и"], 1]], "gaps: варіанти й правильні");
  eq(g.parts.filter(p => p.t === "text").map(p => p.v), ["с", "ло і з", "ма"], "gaps: текст між пропусками");
  const s = { type: "gaps", text: "с{*е|и}ло і з{е|*и}ма" };
  ok(L.check(s, [0, 1]), "gaps: правильно"); no(L.check(s, [0, 0]), "gaps: одна помилка"); no(L.check(s, [0, null]), "gaps: не все обрано");
  no(L.check(s, "0,1"), "gaps: стан не масив");
  eq(L.parseGaps("ден{ь|*—}ки").gaps[0].opts, ["ь", "—"], "gaps: варіант «—»");
  ok(L.parseGaps("с{е|и}ло").error, "gaps: без * — помилка");
  ok(L.parseGaps("с{*е|*и}ло").error, "gaps: дві * — помилка");
  ok(L.parseGaps("с{*е}ло").error, "gaps: один варіант — помилка");
  ok(L.parseGaps("с{*е|е}ло").error, "gaps: повтор — помилка");
  ok(L.parseGaps("с{*е|}ло").error, "gaps: порожній варіант — помилка");
  ok(L.parseGaps("село").error, "gaps: без пропусків — помилка");
  ok(L.parseGaps("с{*е|и ло").error, "gaps: незакрита дужка");
  ok(L.parseGaps("a}b{*x|y}").error, "gaps: зайва }");
  eq(L.issues({ type: "gaps", text: "с{*е|и}ло" }), [], "gaps: issues чисто");
}
/* pick */
{ const p = L.parsePick("[Сонце] яскраво [світить], а пташка ще-ще м'яко [співає пісню].");
  eq(p.words.map(w => [w.v, w.ok]), [["Сонце", true], ["яскраво", false], ["світить", true], ["а", false], ["пташка", false], ["ще-ще", false], ["м'яко", false], ["співає пісню", true]], "pick: слова, дефіс, апостроф, група");
  eq(p.correct, [0, 2, 7], "pick: правильні номери");
  const s = { type: "pick", text: "[Сонце] яскраво [світить]." };
  ok(L.check(s, new Set([0, 2])), "pick: правильно"); no(L.check(s, new Set([0])), "pick: бракує слова"); no(L.check(s, new Set([0, 1, 2])), "pick: зайве слово");
  ok(L.parsePick("Сонце світить").error, "pick: без [ ] — помилка");
  ok(L.parsePick("[Сонце] [світить]").error, "pick: усі правильні — помилка");
  ok(L.parsePick("[Сонце світить").error, "pick: незакрита [");
  ok(L.parsePick("Сонце] світить").error, "pick: зайва ]");
  ok(L.parsePick("[ , ] світить").error, "pick: у дужках немає слова");
  eq(L.parsePick("Ой, [ти] — дівчино!").words.map(w => w.v), ["Ой", "ти", "дівчино"], "pick: розділові знаки — не кнопки");
}
/* stress */
{ const w = L.parseStress("черг+овий");
  eq([w.word, w.correct], ["черговий", 4], "stress: позиція наголошеного голосного");
  eq(w.letters.filter(l => l.v).map(l => l.i), [1, 4, 6], "stress: голосні — кнопки");
  const s = { type: "stress", words: ["черг+овий", "в+ипадок"] };
  ok(L.check(s, [4, 1]), "stress: правильно"); no(L.check(s, [4, 3]), "stress: друге слово хибно"); no(L.check(s, [4, null]), "stress: не обрано");
  ok(L.parseStress("черговий").error, "stress: без +");
  ok(L.parseStress("чер+говий").error, "stress: + перед приголосним");
  ok(L.parseStress("+о+вес").error, "stress: два +");
  ok(L.parseStress("д+ім").error, "stress: односкладове слово");
  eq(L.parseStress("Укра+їна").correct, 4, "stress: велика літера й ї");
  ok(L.issues({ type: "stress", words: [] }).length, "stress: порожній список — помилка");
}
/* word */
{ const s = { type: "word", answer: ["пів'яблука"] };
  ok(L.check(s, "Пів’яблука "), "word: регістр, типографський апостроф, пробіл");
  ok(L.check(s, "пів`яблука"), "word: апостроф `");
  no(L.check(s, "пів яблука"), "word: інше написання");
  no(L.check(s, ""), "word: порожньо");
  ok(L.check({ type: "word", answer: "по-українськи" }, "по – українськи"), "word: дефіс і пробіли біля нього");
  ok(L.check({ type: "word", answer: ["вітер", "вітерець"] }, "ВІТЕРЕЦЬ"), "word: кілька відповідей");
  no(L.check({ type: "word", answer: "Київ", keepCase: true }, "київ"), "word: keepCase");
  ok(L.check({ type: "word", answer: "Київ", keepCase: true }, "Київ"), "word: keepCase правильно");
  ok(L.check({ type: "word", answer: "за\u0301мок" }, "замок"), "word: знак наголосу ігнорується");
  ok(L.issues({ type: "word", answer: "" }).length, "word: порожня відповідь — помилка");
  ok(L.issues({ type: "word", answer: 5 }).length, "word: не рядок — помилка");
  ok(L.issues({ type: "word", answer: ["а", 5] }).length, "word: масив з не-рядком — помилка");
  ok(L.issues({ type: "word", answer: "а", keys: ["ʼʼʼʼ"] }).length, "word: задовгий keys — помилка");
}
/* split */
{ const p = L.parseSplit("мо|ло|ко");
  eq([p.word, p.variants], ["молоко", [[2, 4]]], "split: межі");
  const s = { type: "split", word: ["ли|сти|на", "лис|ти|на"] };
  ok(L.check(s, new Set([2, 5])), "split: перший варіант"); ok(L.check(s, new Set([5, 3])), "split: другий варіант, порядок неважливий");
  no(L.check(s, new Set([2])), "split: бракує межі"); no(L.check(s, new Set([2, 3, 5])), "split: зайва межа");
  ok(L.parseSplit("молоко").error, "split: без меж");
  ok(L.parseSplit("|молоко").error, "split: межа на краю");
  ok(L.parseSplit("мо||локо").error, "split: дві межі поспіль");
  ok(L.parseSplit(["мо|локо", "ри|ба"]).error, "split: різні слова");
}
/* рев'ю engine-lang-types: NFD/наголос, латинські двійники, * усередині, нерозривний дефіс, readText */
{ ok(L.parseStress("черго\u0301+вий".normalize("NFC")).error, "stress: знак наголосу в слові — помилка (P2-1)");
  eq(L.parseStress("+йо\u0301д".replace("о\u0301", "о")).error ? "err" : "ok", "err", "stress: + перед й (приголосний) — помилка");
  eq(L.parseStress("кра\u0304".normalize("NFC") + "+ї").error ? "err" : "ok", "err", "stress: комбінований знак — помилка");
  eq(L.parseStress("га\u0306+ю".normalize("NFD")).error ? "err" : "ok", "err", "stress: NFD з комбінованим знаком — помилка");
  eq(L.parseStress("кра+їна".normalize("NFD")).correct, 3, "stress: NFD «ї» нормалізується (NFC)");
  ok(L.parseSplit("мо\u0301|ло|ко").error, "split: знак наголосу — помилка (P2-1)");
  eq(L.parseSplit("ма|йо|нез".normalize("NFD")).word, "майонез", "split: NFD «й» нормалізується");
  ok(L.check({ type: "word", answer: "пів'яблука" }, "пiв'яблука"), "word: латинська i в кириличному слові (P2-2)");
  ok(L.check({ type: "word", answer: "око" }, "oкo"), "word: латинські o");
  ok(L.check({ type: "word", answer: "м'ята" }, "м\u2032ята"), "word: ′ як апостроф (P3-5)");
  ok(L.check({ type: "word", answer: "жовто-блакитний" }, "жовто\u2212блакитний"), "word: мінус як дефіс (P3-5)");
  ok(L.issues({ type: "word", answer: "пiв" }).length, "word: змішане письмо у відповіді — помилка валідатора");
  ok(L.parseGaps("с{е*|*и}ло").error, "gaps: * усередині варіанта — помилка (P3-2)");
  eq(L.parsePick("[сіро\u2011зелений] ліс").words.map(w => w.v), ["сіро\u2011зелений", "ліс"], "pick: нерозривний дефіс — одне слово (P3-6)");
  eq(L.readText({ type: "gaps", text: "с{*е|и}ло, ден{ь|*—}ки" }), "село, денки", "readText: gaps");
  eq(L.readText({ type: "pick", text: "[Сонце] світить." }), "Сонце світить.", "readText: pick");
}
/* «нічого» і тире не виглядають однаково (u5s9) */
{ eq(L.optView("—"), { text: "\u2205", label: "нічого не писати" }, "optView: «—» у розмітці → ∅");
  eq(L.optView("\u2013"), { text: "\u2014", label: "тире" }, "optView: «–» у розмітці → тире «—»");
  eq(L.optView("ь"), { text: "ь", label: null }, "optView: звичайний варіант");
  eq(L.readText({ type: "gaps", text: "Ніхто не спав {*–|:} ні дорослі, ні діти. Ден{ь|*—}ки." }), "Ніхто не спав — ні дорослі, ні діти. Денки.", "readText: тире і «нічого»");
  eq(L.parseGaps("а {*–|—|,} б").gaps[0].opts.length, 3, "gaps: тире і «нічого» — різні варіанти");
}
/* pick: хибні групи [!…] (верифікатор u6s4: багатослівні кнопки видавали відповідь) */
{ const p = L.parsePick("Він [байдики б'є], а [!книжку читає] ввечері.");
  eq(p.words.map(w => [w.v, w.ok]), [["Він", false], ["байдики б'є", true], ["а", false], ["книжку читає", false], ["ввечері", false]], "pick: [!група] — одна хибна кнопка");
  eq(p.correct, [1], "pick: правильна лише [група]");
  ok(L.check({ type: "pick", text: "Він [байдики б'є], а [!книжку читає]." }, new Set([1])), "pick: правильно без хибної групи");
  no(L.check({ type: "pick", text: "Він [байдики б'є], а [!книжку читає]." }, new Set([1, 3])), "pick: хибна група — помилка");
  ok(L.parsePick("Він [!] спить [тут]").error, "pick: порожня хибна група — помилка");
  ok(L.parsePick("[!байдики б'є] і все").error, "pick: лише хибні групи — помилка (немає правильного)");
  ok(L.warnings({ type: "pick", text: "Він [байдики б'є], а книжку читає." }).length, "warnings: усі багатослівні кнопки правильні — попередження");
  eq(L.warnings({ type: "pick", text: "Він [байдики б'є], а [!книжку читає]." }), [], "warnings: є хибна група — чисто");
  eq(L.warnings({ type: "pick", text: "[Сонце] світить." }), [], "warnings: без груп — чисто");
  eq(L.readText({ type: "pick", text: "Він [байдики б'є], а [!книжку читає]." }), "Він байдики б'є, а книжку читає.", "readText: [!…]");
}
/* engine-lang-p3 */
{ // п. 1 (R2-P3-1): двійники зводяться, коли очікувана відповідь кирилична, а не лише коли кирилиця є у введеному; мала k
  ok(L.check({ type: "word", answer: "і" }, "i"), "word: латинська i як сполучник «і»");
  ok(L.check({ type: "word", answer: "око" }, "oko"), "word: слово цілком латиницею (o, k)");
  ok(L.check({ type: "word", answer: "кіт" }, "kіт"), "word: мала латинська k");
  ok(L.check({ type: "word", answer: "Київ", keepCase: true }, "Kиїв"), "word: велика K з keepCase");
  no(L.check({ type: "word", answer: "кіт" }, "kit"), "word: латинська t не двійник — неправильно");
  no(L.check({ type: "word", answer: "ok" }, "ок"), "word: латинська відповідь — кирилиця у введеному не зводиться до латиниці");
  ok(L.check({ type: "word", answer: "ok" }, "OK"), "word: латинська відповідь — регістр як і раніше");
  no(L.check({ type: "word", answer: "і" }, "  "), "word: порожнє введення — неправильно");
  // п. 8 (engine-lang-dash P3-1): readText замінює лише варіант, що цілком дорівнює токену
  eq(L.readText({ type: "gaps", text: "Тривало {*1–2|1—2} дні." }), "Тривало 1–2 дні.", "readText: «1–2» лишається як є");
  eq(L.readText({ type: "gaps", text: "{*Моя річ — гармоніка|Моя річ, гармоніка}." }), "Моя річ — гармоніка.", "readText: фраза з тире не втрачає тире");
  eq(L.readText({ type: "gaps", text: "«Іди{*», —|»,} сказав він." }), "«Іди», — сказав він.", "readText: складений варіант «», —»");
  eq(L.readText({ type: "gaps", text: "Ніхто {* – |:} ні. Ден{ь| * — }ки." }), "Ніхто — ні. Денки.", "readText: токени з пробілами навколо");
  // п. 16 (pick-groups P3-3, P3-4): пробіли біля «!», [ !…], warnings при помилці розбору й нерядковому text
  eq(L.readText({ type: "pick", text: "Він [! книжку читає] і [ !спить]." }), "Він книжку читає і спить.", "readText: пробіл після «!» не лишається");
  eq(L.parsePick("Він [ ! книжку читає] і [спить].").words.map(w => [w.v, w.ok]), [["Він", false], ["книжку читає", false], ["і", false], ["спить", true]], "pick: [ ! …] — хибна група");
  eq(L.warnings({ type: "pick", text: "[Сонце" }), [], "warnings: помилка розбору — без попереджень (помилку дає issues)");
  eq(L.warnings({ type: "pick" }), [], "warnings: pick без text — без падіння");
  eq(L.warnings({ type: "gaps", text: 5 }), [], "warnings: gaps з нерядковим text — без падіння");
  ok(L.warnings({ type: "pick", text: "Він [!!книжку] [читає]." }).some(w => w.includes("«!книжку»")), "warnings: [!!…] — кнопка з «!»");
  // п. 16 (pick-groups P3-1): хибних груп — хоча б одна на дві правильні
  const three = "[Мамо рідна], [мабуть так], [на жаль] і [!з того дня] минуло.";
  ok(L.warnings({ type: "pick", text: three }).some(w => w.includes("правильних кнопок із кількох слів 3, хибних — 1")), "warnings: 3 правильні групи на 1 хибну");
  eq(L.warnings({ type: "pick", text: "[Мамо рідна], [мабуть так] і [!з того дня] минуло." }), [], "warnings: 2 правильні на 1 хибну — чисто");
  // п. 10: «—» (нічого) поруч із варіантами, що містять тире
  ok(L.warnings({ type: "gaps", text: "«Іди{*», —|—|»,} сказав він." }).some(w => w.includes("пропуск 1") && w.includes("тире")), "warnings: «—» поруч зі «», —»");
  eq(L.warnings({ type: "gaps", text: "Ніхто {*–|—|:} ні." }), [], "warnings: токен тире «–» і «—» — чисто (автор знає токен)");
  eq(L.warnings({ type: "gaps", text: "Ден{ь|*—}ки, сон{ц|*—}е." }), [], "warnings: звичайне «нічого» — чисто");
  // п. 3 (R2-P3-3): HTML-тег між літерою і пропуском
  ok(L.warnings({ type: "gaps", text: "<b>б{*е|и}р</b>{*е|и}за" }).some(w => w.includes("HTML-тег")), "warnings: тег розриває слово з пропуском");
  ok(L.warnings({ type: "gaps", text: "с<b>{*е|и}</b>ло" }).some(w => w.includes("HTML-тег")), "warnings: тег навколо пропуску всередині слова");
  eq(L.warnings({ type: "gaps", text: "<b>б{*е|и}реза</b> і <i>с{*е|и}ло</i>" }), [], "warnings: тег навколо цілого слова — чисто");
  // п. 5 (P3-8): показ поділу — «|» для слова з дефісом
  eq(L.splitShow("молоко", [2, 4]), "мо-ло-ко", "splitShow: межі «-»");
  eq(L.splitShow("жовто-синій", [3, 9]), "жов|то-син|ій", "splitShow: слово з дефісом — межі «|»");
}
/* розв'язок дає правильну відповідь */
for (const s of [{ type: "gaps", text: "с{*е|и}ло" }, { type: "pick", text: "[а] б" }, { type: "stress", words: ["м+ама"] }, { type: "word", answer: "так" }, { type: "split", word: "ма|ма" }])
  ok(L.check(s, L.solution(s)), `solution → check: ${s.type}`);

console.log(fail ? `test-lang: ${fail} з ${n} не пройшли` : `test-lang: ${n} перевірок — усі пройшли`);
process.exit(fail ? 1 : 0);
