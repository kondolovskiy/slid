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
  /* порядок показу варіантів (gapOrder): перестановка індексів з тексту; «∅» (—) завжди в кінці */
  const lcg = seed => () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;   // детермінований rnd для тесту
  const isPerm = (p, m) => Array.isArray(p) && p.length === m && [...p].sort((a, b) => a - b).every((v, k) => v === k);
  const r = lcg(7), pos = [0, 0, 0], seen = new Set(); let perm = true;
  for (let i = 0; i < 300; i++) { const p = L.gapOrder(["е", "и", "і"], r); perm &&= isPerm(p, 3); if (!perm) break; pos[p.indexOf(0)]++; seen.add(p.join("")); }
  ok(perm, "gapOrder: перестановка індексів");
  ok(pos.every(c => c > 60), `gapOrder: перший у тексті варіант буває на кожній позиції ${JSON.stringify(pos)}`);
  eq(seen.size, 6, "gapOrder: трапляються всі 6 перестановок трьох варіантів");
  eq(L.gapOrder(["е", "и"], () => 0.99), [0, 1], "gapOrder: rnd≈1 — без обміну");
  eq(L.gapOrder(["е", "и"], () => 0), [1, 0], "gapOrder: rnd=0 — обмін");
  eq(L.gapOrder(["ь", "—"], () => 0), [0, 1], "gapOrder: ∅ лишається останнім (2 варіанти)");
  eq(L.gapOrder(["—", "ь"], () => 0.5), [1, 0], "gapOrder: ∅ першим у тексті — на екрані останній");
  const r2 = lcg(3), firstPos = new Set(); let noneLast = true;
  for (let i = 0; i < 100; i++) { const p = L.gapOrder([",", "–", "—", ":"], r2); noneLast &&= isPerm(p, 4) && p[3] === 2; firstPos.add(p.indexOf(0)); }
  ok(noneLast, "gapOrder: ∅ завжди останній, результат — перестановка (4 варіанти)");
  eq([...firstPos].sort(), [0, 1, 2], "gapOrder: тире «–» та інші перемішуються");
  ok(isPerm(L.gapOrder(["а", "б", "в", "г", "ґ"]), 5), "gapOrder: без rnd (Math.random) — перестановка");
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
{ // п. 1 (R2-P3-1): латинські двійники, коли кирилична очікувана відповідь, а не введене
  ok(L.check({ type: "word", answer: "і" }, "i"), "word: «i» латиницею як сполучник «і» (кирилична відповідь)");
  ok(L.check({ type: "word", answer: "око" }, "oko"), "word: слово повністю латиницею — двійники зводяться");
  ok(L.check({ type: "word", answer: "кокос" }, "kokoc"), "word: мала k → к (слово латиницею)");
  ok(L.check({ type: "word", answer: "Київ", keepCase: true }, "Kиїв"), "word: велика K → К з keepCase");
  no(L.check({ type: "word", answer: "кіт" }, "kiq"), "word: латинська літера без двійника — неправильно");
  ok(L.check({ type: "word", answer: "Wi-Fi" }, "wi-fi"), "word: латинська відповідь не зводиться до кирилиці");
  no(L.check({ type: "word", answer: "Wi-Fi" }, "Wі-Fі"), "word: латинська відповідь — кирилична «і» не зараховується");
  eq(L.wordInput({ type: "word", answer: "і" }, "I"), "і", "wordInput: ключ спроби в нормалізації відповіді");
  eq(L.wordInput({ type: "word", answer: "Wi-Fi" }, "Wi-Fi"), "wi-fi", "wordInput: латинська відповідь — без зведення");
  // п. 5 (P3-8): показ поділу; у слові з дефісом межі — «|»
  eq(L.splitShow("молоко", [2, 4]), "мо-ло-ко", "splitShow: склади через дефіс");
  eq(L.splitShow("жовто-блакитний", [3, 9]), "жов|то-бла|китний", "splitShow: слово з дефісом — межі «|»");
  // п. 7: нульове закінчення
  eq(L.parseSplit("стіл|", true), { word: "стіл", variants: [[4]] }, "split zero: межа перед нульовим закінченням");
  ok(L.parseSplit("стіл|").error, "split без zero: межа в кінці — помилка");
  ok(L.parseSplit("|стіл", true).error, "split zero: межа на початку — все одно помилка");
  ok(L.check({ type: "split", word: "стіл|", zero: true }, new Set([4])), "split zero: правильно");
  no(L.check({ type: "split", word: "стіл|", zero: true }, new Set([3])), "split zero: не там");
  eq(L.splitShow("стіл", [4], true), "стіл-\u25A1", "splitShow zero: клітинка в кінці");
  eq(L.splitShow("стіл", [], true), "стіл\u25A1", "splitShow zero без межі");
  ok(L.issues({ type: "split", word: "стіл|", zero: "так" }).length, "split: zero не boolean — помилка");
  eq(L.issues({ type: "split", word: "стіл|", zero: true }), [], "split zero: issues чисто");
  ok(L.check({ type: "split", word: "стіл|", zero: true }, L.solution({ type: "split", word: "стіл|", zero: true })), "split zero: solution → check");
  // п. 8 (engine-lang-dash P3-1): «—»/«–» замінюються лише цілим варіантом
  eq(L.readText({ type: "gaps", text: "Уроки {*1–2|1, 2} і {*», —|»—} далі" }), "Уроки 1–2 і », — далі", "readText: тире всередині варіанта лишається");
  eq(L.readText({ type: "gaps", text: "Він {* — |,} тут, ден{ь|* — }ки" }), "Він  тут, денки", "readText: варіант « — » з пробілами — «нічого» (як у плеєрі)");
  // п. 10: « —» замість «–»
  ok(L.warnings({ type: "gaps", text: "Ніч {*–| —|,} тиша" }).some(w => w.includes("нічого не писати")), "warnings gaps: « —» з пробілом — попередження");
  ok(L.warnings({ type: "gaps", text: "Ніч {*, —|—|,} тиша" }).some(w => w.includes("містять тире")), "warnings gaps: «—» поруч із «, —» — попередження");
  eq(L.warnings({ type: "gaps", text: "Ніч {*–|—|:} тиша, ден{ь|*—}ки" }), [], "warnings gaps: тире «–» і «нічого» «—» — чисто");
  // п. 3 (R2-P3-3): тег розриває слово з пропуском
  ok(L.warnings({ type: "gaps", text: "<b>б{*е|и}р</b>{*е|и}за" }).some(w => w.includes("розірване HTML-тегом")), "warnings gaps: тег посеред слова з пропуском");
  ok(L.warnings({ type: "gaps", text: "с{*е|и}<b>ло</b>" }).some(w => w.includes("розірване")), "warnings gaps: тег одразу після пропуску");
  eq(L.warnings({ type: "gaps", text: "<b>б{*е|и}р{*е|и}за</b>, (<i>с{*е|и}ло</i>) і <b>Ми</b> с{*е|и}ло" }), [], "warnings gaps: тег довкола всього слова — чисто");
  // рев'ю engine-lang-p3 P3-3 (engine-list-quadratic п. 3): блоковий тег — межа рядка, не «тег у слові»
  for (const t of ["<p>Перше слово</p><p>{*А|О}кно…</p>", "Ден{ь|*—}<br>ки", "Ден{ь|*—}<br/>ки", "<li>ст{*і|и}л</li><li>{*о|а}кно</li>", "<P>Перше</P><DIV>{*А|О}кно</DIV>"])
    eq(L.warnings({ type: "gaps", text: t }), [], `warnings gaps: блоковий тег на межі слова — чисто («${t}»)`);
  ok(L.warnings({ type: "gaps", text: "<p>б<i>{*е|и}</i>реза</p>" }).some(w => w.includes("розірване")), "warnings gaps: рядковий тег у слові всередині абзацу — попередження");
  // п. 16 (pick-groups P3)
  ok(L.parsePick("Він [!!книжку читає] і [спить]").error, "pick: [!!…] — помилка (раніше кнопка «!книжку»)");
  eq(L.parsePick("Він [ ! книжку читає] і [ спить ]").words.map(w => [w.v, w.ok, !!w.group]), [["Він", false, false], ["книжку читає", false, true], ["і", false, false], ["спить", true, true]], "pick: пробіли біля «!» і в дужках");
  eq(L.parsePick("Він [!спить] і [читає]").words.map(w => [w.v, w.ok]), [["Він", false], ["спить", false], ["і", false], ["читає", true]], "pick: однослівна [!слово] — хибна кнопка");
  eq(L.readText({ type: "pick", text: "Він [ ! книжку читає] і [спить]." }), "Він книжку читає і спить.", "readText: [ ! …] з пробілами");
  ok(L.warnings({ type: "pick", text: "[байдики б'є], [ловить ґав], [б'є лихом], [!книжку читає] і все" }).length, "warnings pick: одна хибна група на три правильні — попередження");
  eq(L.warnings({ type: "pick", text: "[байдики б'є], [ловить ґав], [б'є лихом], [!книжку читає], [!пише лист] і все" }), [], "warnings pick: дві хибні на три — чисто");
  eq(L.warnings({ type: "pick", text: "[байдики б'є] і [!!x]" }), [], "warnings: розмітка з помилкою — без попереджень (помилку дає issues)");
  ok(L.issues({ type: "pick", text: "[байдики б'є] і [!!x]" }).length, "issues: [!!x] — помилка");
}
/* розв'язок дає правильну відповідь */
for (const s of [{ type: "gaps", text: "с{*е|и}ло" }, { type: "pick", text: "[а] б" }, { type: "stress", words: ["м+ама"] }, { type: "word", answer: "так" }, { type: "split", word: "ма|ма" }])
  ok(L.check(s, L.solution(s)), `solution → check: ${s.type}`);

console.log(fail ? `test-lang: ${fail} з ${n} не пройшли` : `test-lang: ${n} перевірок — усі пройшли`);
process.exit(fail ? 1 : 0);
