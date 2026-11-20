#!/usr/bin/env node
// Слід · тести мовних вправ (app/lang.js): розбір розмітки gaps / pick / stress / word / split / build / match і перевірка відповідей. Також мова змісту предмета: SLID.subjectLang (app/registry.js) = tools/lib.mjs subjectLang (engine-eng-lang-attr).
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
  /* порядок показу рядків sort (rowOrder, engine-sort-order): перестановка індексів items; стан і оцінювання — за індексами items */
  const r3 = lcg(11), rpos = [0, 0, 0, 0], rseen = new Set(); let rperm = true;
  for (let i = 0; i < 1200; i++) { const p = L.rowOrder(4, r3); rperm &&= isPerm(p, 4); if (!rperm) break; rpos[p.indexOf(0)]++; rseen.add(p.join("")); }
  ok(rperm, "rowOrder: перестановка індексів items");
  ok(rpos.every(c => c > 200), `rowOrder: перший рядок буває на кожній позиції ${JSON.stringify(rpos)}`);
  eq(rseen.size, 24, "rowOrder: трапляються всі 24 перестановки чотирьох рядків");
  eq(L.rowOrder(3, () => 0), [1, 2, 0], "rowOrder: rnd=0 — Фішер — Єйтс як у gapOrder");
  eq(L.rowOrder(3, () => 0.999), [0, 1, 2], "rowOrder: rnd≈1 — без обміну");
  eq(L.rowOrder(3, () => 1), [0, 1, 2], "rowOrder: rnd=1 (поза [0,1)) — індекс не виходить за межі");
  eq(L.rowOrder(1, () => 0), [0], "rowOrder: один рядок");
  eq(L.rowOrder(0), [], "rowOrder: порожньо");
  eq(L.gapOrder(["е", "и", "і"], () => 0), L.rowOrder(3, () => 0), "rowOrder і gapOrder без «∅» — та сама перестановка");
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
  // tools-euphony-z-validate-gw п. 2 (verify pu10s4 a09, a10): слово з пропуском і теги всередині одного <span class="gw"> (nowrap рушія) — чисто
  for (const t of ['<i>дивишся</i> — <span class="gw">[ди́ви<sup>е</sup>{*с′:|шс′}а]</span><br><i>легкий</i> — <span class="gw">[ле<sup>и</sup>{*х|г}ки́й]</span>',
    '<span class="gw">б<i>{*е|и}</i>реза</span>', "<span class='big gw'>б<b>{*е|и}</b>реза</span>", '<span class="gw">б<span class="x">{*е|и}</span>р<i>еза</i></span> і с{*е|и}ло'])
    eq(L.warnings({ type: "gaps", text: t }), [], `warnings gaps: усе слово в span.gw — чисто («${t}»)`);
  for (const t of ['<span class="gw">б{*е|и}р</span><b>еза</b>', '<span class="gwx">б<i>{*е|и}</i>реза</span>', '<span class="x">б<i>{*е|и}</i>реза</span>',
    '<span class="gw">ліс</span> б<i>{*е|и}</i>реза', 'б<i>{*е|и}</i><span class="gw">реза</span>', '<span class="gw">с{*е|и}ло</span> б<i>{*е|и}</i>реза', '<span class="gw">б<i>{*е|и}</i>реза</span> с{*е|и}<b>ло</b>'])
    ok(L.warnings({ type: "gaps", text: t }).some(w => w.includes("розірване")), `warnings gaps: розрив поза span.gw — попередження («${t}»)`);
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

// engine-diag-lang-types: кожен мовний тип дозволено в тесті рівня (SLID_LEARN.DIAG_TYPES), і в тесті вердикт — той самий LANG.check
// (app.js gradeNow): новий мовний тип без допуску в тест — червоно
{ const lc = { console, JSON, Math }; lc.window = lc; vm.createContext(lc); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/learn.js"), "utf8"), lc);
  eq(L.TYPES.filter(t => !lc.SLID_LEARN.DIAG_TYPES.includes(t)), [], "кожен мовний тип дозволено в тесті рівня (learn.DIAG_TYPES)"); }

/* мова змісту предмета (engine-eng-lang-attr, D-054): SLID.subjectLang (app/registry.js) і обгортки tools/lib.mjs — одне правило */
{ const rc = { console }; rc.window = rc; vm.createContext(rc); vm.runInContext(fs.readFileSync(path.join(ROOT, "app/registry.js"), "utf8"), rc);
  const R = rc.SLID, col = { light: { accent: "#000" }, dark: { accent: "#fff" } };
  R.subject({ id: "fxen", subject: "English", short: "Eng", colors: col, targetLang: "en" });
  R.subject({ id: "fxuk", subject: "Фікстура", short: "Ф", colors: col });
  R.subject({ id: "fxxx", subject: "Фікстура", short: "Ф", colors: col, targetLang: "xx" });
  R.subject({ id: "fxEN", subject: "Фікстура", short: "Ф", colors: col, targetLang: "EN" });
  eq([...R.TARGET_LANGS], ["en"], "TARGET_LANGS: поки лише en (D-054)");
  eq(["fxen", "fxuk", "fxxx", "fxEN", "nope"].map(id => R.subjectLang(id)), ["en", "", "", "", ""], "subjectLang за id: en / без поля / невідома мова / регістр / невідомий предмет");
  eq(R.subjectLang(R.subjects.find(c => c.id === "fxen")), "en", "subjectLang за об'єктом предмета");
  eq([null, undefined, 5, {}].map(x => R.subjectLang(x)), ["", "", "", ""], "subjectLang: сміття — порожньо, без винятку");
  ok(Object.isFrozen(R.TARGET_LANGS), "TARGET_LANGS заморожено");
  const lib = await import("./lib.mjs");
  eq([...lib.TARGET_LANGS], [...R.TARGET_LANGS], "lib.TARGET_LANGS = SLID.TARGET_LANGS (одне джерело)");
  eq([{ targetLang: "en" }, { id: "ukr" }, { targetLang: "xx" }, null, "eng"].map(lib.subjectLang), ["en", "", "", "", ""], "lib.subjectLang: об'єкт предмета; рядок-id — порожньо");
  eq([{ targetLang: "en" }, { id: "ukr" }, null].map(lib.isEnglishSubject), [true, false, false], "lib.isEnglishSubject");
  // живі предмети (без прив'язки до складу): лише значення з TARGET_LANGS або без поля
  for (const c of lib.loadContent().subjects) ok(c.targetLang === undefined || lib.TARGET_LANGS.includes(c.targetLang), `предмет ${c.id}: targetLang з TARGET_LANGS`); }

/* англійська (engine-eng-lang-core; docs/design/english.md §5.4, §5.6; D-054 з доповненням; glossary/eng.md): поведінка — від lang
   третього аргументу (рушій передає SLID.subjectLang предмета); без lang (і для "") — як було, українські предмети не змінюються */
{ const W = (answer, more = {}) => ({ type: "word", answer, ...more });
  const V = (s, v) => { const r = L.wordVerdict(s, v, "en"); return [r.ok, r.note || "", r.hint || "", r.kb || ""]; };
  // п. 3: кінцевий розділовий знак (.!?) ігнорується, якщо ключ його не має
  ok(L.check(W("yes"), "Yes.", "en"), "en word: «Yes.» = «yes»");
  ok(L.check(W("yes"), "yes!", "en") && L.check(W("yes"), "yes?!", "en") && L.check(W("yes"), "yes .", "en"), "en word: «!», «?!», « .» в кінці");
  no(L.check(W("yes"), "Yes.", ""), "ukr (lang \"\"): «Yes.» ≠ «yes», як раніше");
  no(L.check(W("yes"), "Yes."), "без lang: як раніше");
  ok(L.check(W("Wait!"), "wait!", "en"), "en word: ключ зі знаком — знак у відповіді");
  no(L.check(W("Wait!"), "wait", "en"), "en word: ключ зі знаком — без знака не зараховано (ключ строгий)");
  no(L.check(W("yes"), "y.es", "en"), "en word: крапка посередині — не кінцевий знак");
  // п. 4: кирилиця-двійник, коли всі ключі латинські; інша кирилиця — bad з повідомленням рушія українською
  ok(L.check(W("cat"), "сat", "en"), "en word: кирилична «с» у «сat» читається як латинська");
  ok(L.check(W("Moscow"), "Мoscow", "en") && L.check(W("box"), "вох", "en"), "en word: кириличні М, в, о, х — двійники");
  ok(L.check(W("THE CAT", { keepCase: true }), "ТНЕ САТ", "en"), "en word: великі двійники з keepCase");
  for (const [c, l] of [["с", "c"], ["е", "e"], ["о", "o"], ["а", "a"], ["р", "p"], ["х", "x"], ["і", "i"], ["у", "y"], ["к", "k"], ["м", "m"], ["т", "t"], ["н", "h"], ["в", "b"]])
    ok(L.check(W(l), c, "en") && L.check(W(l.toUpperCase(), { keepCase: true }), c.toUpperCase(), "en"), `en word: двійник ${c} → ${l} (і велика)`);
  eq(V(W("cat"), "дім"), [false, "", "", "Перемкни клавіатуру на англійську."], "en word: інша кирилиця — bad, повідомлення про клавіатуру");
  eq(V(W("cat"), "кіт"), [false, "", "", ""], "en word: «кіт» з самих двійників — це «kit», звичайна помилка (без повідомлення)");
  eq(V(W("dog"), "dоg"), [true, "", "", ""], "en word: двійник — ok без приміток");
  no(L.check(W("cat"), "сat", ""), "ukr: латинський ключ — кирилична «с» не зараховується, як раніше");
  no(L.check(W(["кіт", "cat"]), "сat", "en"), "en word: є кириличний ключ — дзеркала немає (як раніше)");
  eq(L.wordVerdict(W(["кіт", "cat"]), "кіт", "en").ok, true, "en word: кириличний ключ (не всі латинські) — без дзеркала, кирилиця зараховується");
  // п. 5: скорочення — лише з contractions: true
  no(L.check(W("do not"), "don't", "en"), "en word: без contractions ключ строгий");
  for (const [k, v] of [["do not", "don't"], ["I am", "I'm"], ["I'm", "I am"], ["cannot", "can't"], ["will not", "won't"], ["she is", "she's"], ["he has got", "he's got"],
    ["they are", "they’re"], ["we have", "we've"], ["you will", "you'll"], ["I would", "I'd"], ["is not", "isn't"], ["let us", "let's"], ["does not", "doesn’t"], ["Kate's", "Kate's"]])
    ok(L.check(W(k, { contractions: true }), v, "en"), `en word contractions: «${v}» = «${k}»`);
  no(L.check(W("do not", { contractions: true }), "does not", "en"), "en word contractions: інше дієслово — ні");
  no(L.check(W("do not", { contractions: true }), "don't", ""), "contractions без en — ігнорується (рушій нічого не знає)");
  // п. 6: британська норма; американський правопис за явним списком — ok з приміткою (англійською)
  eq(V(W("colour"), "color"), [true, "In British English: colour.", "", ""], "en word: color → ok, «In British English: colour.»");
  eq(V(W("my favourite colour"), "My favorite color"), [true, "In British English: favourite, colour.", "", ""], "en word: дві пари в реченні");
  for (const [b, a] of [["centre", "center"], ["theatre", "theater"], ["metres", "meters"], ["travelled", "traveled"], ["travelling", "traveling"], ["grey", "gray"], ["programme", "program"],
    ["neighbours", "neighbors"], ["analyse", "analyze"], ["jewellery", "jewelry"], ["pyjamas", "pajamas"], ["cancelled", "canceled"], ["catalogue", "catalog"], ["defence", "defense"]])
    eq(V(W(b), a)[0], true, `en word: ${a} → ok (ключ ${b})`);
  eq(V(W("realise"), "realize"), [true, "In British English we usually write realise.", "", ""], "en word: -ize — примітка без «American» (TQ-121)");
  eq(V(W("organisation"), "organization")[1], "In British English we usually write organisation.", "en word: -ization");
  ok(!/American/i.test(V(W("recognised"), "recognized")[1]), "en word: -ized — без «American»");
  eq(V(W("colour"), "colour"), [true, "", "", ""], "en word: британський запис — без примітки");
  eq(V(W("Colour", { keepCase: true }), "color")[0], false, "en word keepCase: пара не обходить регістр");
  eq(V(W("Colour", { keepCase: true }), "Color"), [true, "In British English: Colour.", "", ""], "en word keepCase: Color → ok з приміткою");
  eq(V(W("the colour,"), "the color,")[0], true, "en word: пара біля розділового знака");
  eq(V(W("2.5"), "2,5"), [false, "", "", ""], "en word: ключ без літер — без «Almost»");
  eq(V(W("flat"), "apartment"), [false, "", "", ""], "en word: лексика (apartment) не нормалізується");
  no(L.check(W("color"), "colour", "en"), "en word: пара працює лише від британського ключа (AmE-ключ — помилка автора, validate)");
  no(L.check(W("colour"), "color", ""), "ukr: color ≠ colour, як раніше");
  // час: «15.30» = «15:30»; «3.30 pm» = «3:30 pm» = «3.30 p.m.» = «3.30pm» (TQ-120)
  for (const [k, v] of [["15.30", "15:30"], ["15:30", "15.30"], ["3.30 pm", "3:30 pm"], ["3.30 pm", "3.30 p.m."], ["3.30 pm", "3.30pm"], ["3.30 pm", "3.30 P.M."], ["at 7.15 am", "at 7:15 a.m."], ["It's 3.30 pm.", "it's 3:30 p.m."]])
    ok(L.check(W(k), v, "en"), `en word час: «${v}» = «${k}»`);
  no(L.check(W("3.30 pm"), "3.30 am", "en"), "en word час: pm ≠ am");
  no(L.check(W("15.30"), "3.30 pm", "en"), "en word час: 24-годинний і 12-годинний записи не зводяться (вправа може вчити саме перехід)");
  no(L.check(W("15.30"), "15:30", ""), "ukr: «15:30» ≠ «15.30», як раніше");
  // п. 7: одруківка (відстань 1) — bad з підказкою англійською
  eq(V(W("because"), "becuase"), [false, "", "Almost: check the spelling.", ""], "en word: перестановка сусідніх літер — «Almost»");
  eq(V(W("friend"), "frend"), [false, "", "Almost: check the spelling.", ""], "en word: пропущена літера — «Almost»");
  eq(V(W("cat"), "cats"), [false, "", "Almost: check the spelling.", ""], "en word: зайва літера — «Almost»");
  eq(V(W("cat"), "dog"), [false, "", "", ""], "en word: далеко — без підказки");
  eq(V(W("a"), "b"), [false, "", "", ""], "en word: однолітерний ключ — без «Almost» (будь-яка літера на відстані 1)");
  eq(V(W(["colour", "hue"]), "colur")[2], "Almost: check the spelling.", "en word: «Almost» від будь-якого ключа");
  eq(V(W("cat"), ""), [false, "", "", ""], "en word: порожньо — bad без підказок");
  eq(L.wordVerdict(W("кіт"), "кит", "").hint, undefined, "ukr: «Almost» немає");
  eq(L.wordVerdict(W("кіт"), "кіт"), { ok: true }, "ukr: wordVerdict без lang — лише ok");
  // ключ спроби (answerSig у плеєрі): та сама нормалізація, що й перевірка
  eq(L.wordInput(W("cat"), "Сat.", "en"), L.wordInput(W("cat"), "cat", "en"), "en wordInput: «Сat.» і «cat» — та сама спроба");
  eq(L.wordInput(W("I am", { contractions: true }), "I'm", "en"), L.wordInput(W("I am", { contractions: true }), "i am", "en"), "en wordInput: скорочення — та сама спроба");
  eq(L.wordInput(W("і"), "I"), "і", "ukr wordInput: як раніше");
  // validate: contractions — true/false
  ok(L.issues(W("do not", { contractions: "так" })).length, "word: contractions не boolean — помилка");
  eq(L.issues(W("do not", { contractions: true })), [], "word: contractions: true — чисто");
  ok(L.check(W("Yes."), L.solution(W("Yes.")), "en"), "en word: solution → check");
}
/* pick англійською (п. 2): апостроф-лапки на краях токена — не в кнопці; цифри з літерами — один токен */
{ const ws = t => L.parsePick(t).words.map(w => w.v);
  eq(ws("She said 'hello' to [me]."), ["She", "said", "hello", "to", "me"], "pick: 'hello' у прямих лапках — кнопка без лапок");
  eq(ws("She said ‘hello’ to [me]."), ["She", "said", "hello", "to", "me"], "pick: ‘hello’ у типографських лапках");
  eq(ws("The [boys'] toys and 'tis [it's]"), ["The", "boys'", "toys", "and", "tis", "it's"], "pick: присвійне boys' — апостроф лишається; it's — одне слово");
  eq(ws("On the [5th] of May, 2026 at 3pm"), ["On", "the", "5th", "of", "May", "at", "3pm"], "pick: 5th і 3pm — один токен; число без літер — не кнопка");
  eq(L.parsePick("Say 'hi', [Tom].").parts.filter(p => p.t === "text").map(p => p.v), [" '", "', ", "."], "pick: лапки лишаються в тексті поруч із кнопкою");
  eq(ws("[м'ята] і п'ять"), ["м'ята", "і", "п'ять"], "pick ukr: апостроф усередині — як раніше");
  eq(ws("[Сонце] у 1991 році"), ["Сонце", "у", "році"], "pick ukr: число — не кнопка, як раніше");
}
/* stress у складі (§5.6): "+pho|to|graph" — склади через «|», «+» перед наголошеним складом; українська розмітка — без змін */
{ const p = L.parseStress("+pho|to|graph"), q = L.parseStress("pho|+tog|ra|pher");
  eq([p.word, p.correct, p.syl, p.letters.map(l => [l.ch, l.v, l.i])], ["photograph", 0, true, [["pho", true, 0], ["to", true, 1], ["graph", true, 2]]], "stress склади: +pho|to|graph — перший склад");
  eq([q.word, q.correct], ["photographer", 1], "stress склади: pho|+tog|ra|pher — другий склад");
  const s = { type: "stress", words: ["+pho|to|graph", "pho|+tog|ra|pher"] };
  ok(L.check(s, [0, 1]), "stress склади: правильно"); no(L.check(s, [0, 0]), "stress склади: друге слово хибно");
  ok(L.check(s, L.solution(s)), "stress склади: solution → check");
  eq(L.issues(s), [], "stress склади: issues чисто");
  ok(L.parseStress("pho|to|graph").error, "stress склади: без + — помилка");
  ok(L.parseStress("+pho|+to|graph").error, "stress склади: два + — помилка");
  ok(L.parseStress("p+ho|to|graph").error, "stress склади: + не на початку складу — помилка");
  ok(L.parseStress("+photograph").error, "stress: англійське слово без складів — помилка (голосна не українська)");
  ok(/склад/.test(L.parseStress("+photograph").error), "stress: помилка підказує розмітку складами");
  ok(L.parseStress("+pho||graph").error, "stress склади: порожній склад — помилка");
  ok(L.parseStress("+cat|").error, "stress склади: «|» на краю — помилка");
  ok(L.parseStress("+cat").error, "stress: односкладове без «|» — помилка");
  ok(L.parseStress("+pho to|graph").error, "stress склади: пробіл у слові — помилка");
  eq(L.readText(s), "photograph, photographer", "readText stress: без «+» і «|»");
  eq(L.parseStress("черг+овий").correct, 4, "stress ukr: як раніше (позиція літери)");
  ok(!L.parseStress("черг+овий").syl, "stress ukr: не складовий режим");
}

/* build — речення з плиток (engine-eng-build; docs/design/english.md §5.5; CONTENT_SCHEMA §4.1): стан — індекси плиток у рядку
   (0…tiles−1 — tiles, далі extra); кожен answer складено рівно з tiles; кінцевий .!? може стояти поза плитками; кілька порядків */
{ const B = (more = {}) => ({ type: "build", tiles: ["does", "she", "Where", "live"], answer: ["Where does she live?"], extra: ["do"], ...more });
  const s = B();
  eq(L.issues(s), [], "build: issues чисто (зразок дизайну §5.5)");
  ok(L.TYPES.includes("build"), "build: у SLID_LANG.TYPES");
  eq(L.buildTiles(s), ["does", "she", "Where", "live", "do"], "buildTiles: tiles, тоді extra");
  ok(L.check(s, [2, 0, 1, 3], "en"), "build en: правильний порядок");
  ok(L.check(s, [2, 0, 1, 3], ""), "build без мови: правильний порядок (кінцевий «?» ключа поза плитками)");
  no(L.check(s, [0, 1, 2, 3], "en"), "build en: інший порядок — неправильно");
  no(L.check(s, [2, 4, 1, 3], "en"), "build en: пастка extra замість плитки — неправильно");
  no(L.check(s, [2, 0, 1], "en"), "build en: не всі плитки — неправильно");
  no(L.check(s, [2, 0, 1, 3, 4], "en"), "build en: зайва пастка в кінці — неправильно");
  no(L.check(s, [2, 0, 0, 1, 3], "en"), "build: та сама плитка двічі — неправильно");
  no(L.check(s, [2, 0, 1, 9], "en"), "build: індекс поза плитками — неправильно");
  no(L.check(s, "Where does she live", "en"), "build: стан не масив — неправильно");
  no(L.check(s, [], "en"), "build: порожній рядок — неправильно");
  eq(L.buildText(s, [2, 0, 1, 3]), "Where does she live", "buildText: зібране речення (raw журналу)");
  eq(L.buildText(s, []), "", "buildText: порожньо");
  eq(L.solution(s), [2, 0, 1, 3], "build: solution — індекси tiles першого answer");
  ok(L.check(s, L.solution(s), "en"), "build: solution → check (en)");
  eq(L.readText(s), "Where does she live?", "readText build: перший answer");
  // кілька правильних порядків; однакові плитки — за текстом, а не за індексом
  const m = { type: "build", tiles: ["usually", "I", "walk", "to school"], answer: ["I usually walk to school.", "Usually I walk to school."] };
  eq(L.issues(m), [], "build: кілька answer, плитка з пробілом — чисто");
  ok(L.check(m, [1, 0, 2, 3], "en") && L.check(m, [0, 1, 2, 3], "en"), "build: обидва порядки з answer");
  no(L.check(m, [1, 2, 0, 3], "en"), "build: порядок поза answer — неправильно");
  ok(L.check(m, [0, 1, 2, 3], ""), "build без мови: другий answer (точне порівняння)");
  const d = { type: "build", tiles: ["the", "cat", "sees", "the", "dog"], answer: "the cat sees the dog" };
  ok(L.check(d, [3, 1, 2, 0, 4], "en"), "build: однакові плитки «the» у будь-якому порядку індексів");
  // регістр: en — нормалізація wordVerdict (регістр не важить), без мови — точно
  const c = { type: "build", tiles: ["I", "live", "in", "Kyiv"], answer: "I live in kyiv" };
  ok(L.issues(c).length, "build: answer з іншим регістром, ніж плитки, — помилка validate (не складається з плиток)");
  ok(L.check(c, [0, 1, 2, 3], "en"), "build en: регістр не важить (нормалізація word англійською)");
  no(L.check(c, [0, 1, 2, 3], ""), "build без мови: точне порівняння — регістр важить (крім першої літери речення)");
  ok(L.check({ type: "build", tiles: ["вчора", "йшов", "дощ"], answer: ["Вчора йшов дощ.", "Дощ йшов вчора."] }, [2, 1, 0], ""), "build без мови: велика перша літера речення — поза плитками");
  ok(L.check({ type: "build", tiles: ["Мама", "мила", "раму"], answer: "Мама  мила раму." }, [0, 1, 2], ""), "build без мови: пробіли й кінцевий знак ключа нормалізуються");
  // позначки: позиція правильна відносно найближчого answer
  eq(L.buildMarks(s, [2, 0, 3, 1]), [true, true, false, false], "buildMarks: дві перші на місці");
  eq(L.buildMarks(m, [1, 0, 3, 2]), [true, true, false, false], "buildMarks: найближчий з кількох answer");
  eq(L.buildMarks(s, [2, 0, 1, 3, 4]), [true, true, true, true, false], "buildMarks: зайва пастка — неправильно");
  // validate: плитки, extra, answer
  ok(L.issues(B({ answer: "Where does she lives?" })).length, "build: слово answer не з плиток — помилка");
  ok(L.issues(B({ answer: "Where does she?" })).length, "build: answer без однієї плитки — помилка");
  ok(L.issues(B({ answer: "Where do she live?" })).length, "build: answer з пасткою extra — помилка");
  ok(L.issues(B({ answer: [] })).length, "build: порожній масив answer — помилка");
  ok(L.issues(B({ answer: ["Where does she live?", 5] })).length, "build: answer не рядок — помилка");
  ok(L.issues(B({ extra: ["do", "did", "done"] })).length, "build: extra > 2 — помилка");
  ok(L.issues(B({ extra: "do" })).length, "build: extra не масив — помилка");
  ok(L.issues({ type: "build", tiles: ["a", "b", "c", "d", "e", "f", "g", "h"], answer: "a b c d e f g h", extra: ["x", "y"] }).length, "build: 10 плиток з extra — помилка (≤ 9)");
  eq(L.issues({ type: "build", tiles: ["a", "b", "c", "d", "e", "f", "g"], answer: "a b c d e f g", extra: ["x", "y"] }), [], "build: 9 плиток з extra — чисто");
  ok(L.issues({ type: "build", tiles: ["Hello"], answer: "Hello" }).length, "build: одна плитка — помилка");
  ok(L.issues(B({ tiles: ["does", "", "Where", "live"] })).length, "build: порожня плитка — помилка");
  ok(L.issues(B({ tiles: ["does", " she", "Where", "live"], answer: "Where does she live?" })).length, "build: пробіл на краю плитки — помилка");
  ok(L.issues(B({ tiles: ["does", "<b>she</b>", "Where", "live"], answer: "Where does <b>she</b> live?" })).length, "build: HTML у плитці — помилка");
  ok(L.issues({ type: "build", tiles: ["сat", "runs"], answer: "сat runs" }).length, "build: кирилиця й латиниця в плитці — помилка");
  ok(L.issues({ type: "build", tiles: ["no", "no"], answer: "no no" }).length, "build: усі плитки однакові — помилка");
  // рев'ю P3-1: плитка лише зі знака — B_TAIL зрізав би « ?», і речення без неї зараховувалось би
  ok(L.issues({ type: "build", tiles: ["does", "she", "Where", "live", "?"], answer: "Where does she live ?" }).some(e => /без літери/.test(e)), "build: плитка «?» — помилка");
  ok(L.issues(B({ extra: ["…"] })).some(e => /без літери/.test(e)), "build: пастка «…» — помилка");
  ok(L.issues({ type: "build", tiles: ["Yes,", "I", "do"], answer: "Yes, I do." }).every(e => !/без літери/.test(e)), "build: знак, приклеєний до слова («Yes,»), — можна");
  ok(L.issues(B({ answer: ["Where does she live?", "Where does she live"] })).length, "build: answer повторюються — помилка");
  ok(L.warnings(B({ extra: ["she"] }), "en").some(w => /extra/.test(w)), "build warnings: пастка = плитка — попередження");
  ok(L.warnings({ type: "build", tiles: ["My", "favourite", "colour"], answer: "My favourite colour", extra: ["color"] }, "en").some(w => /extra/.test(w)), "build warnings en: AmE-пастка дає правильне речення — попередження");
  eq(L.warnings({ type: "build", tiles: ["My", "favourite", "colour"], answer: "My favourite colour", extra: ["color"] }, ""), [], "build warnings без мови: color ≠ colour — чисто");
  eq(L.warnings(s, "en"), [], "build warnings: справжня пастка — чисто");
  // показ: перемішано, але ніколи в правильному порядку плиток
  const one = () => 0.999999;   // permute з таким rnd лишає порядок як був (tiles у порядку answer)
  const t2 = { type: "build", tiles: ["I", "am", "ten"], answer: "I am ten.", extra: ["is"] };
  const o = L.buildOrder(t2, one);
  eq([...o].sort(), [0, 1, 2, 3], "buildOrder: перестановка всіх плиток з extra");
  no(L.check(t2, o.filter(k => k < 3), ""), "buildOrder: плитки не стоять у правильному порядку (навіть коли перестановка — тотожна)");
  for (let i = 0; i < 30; i++) { const r = L.buildOrder(m); no(L.check(m, r, ""), `buildOrder: жоден показ не дає правильного речення (${r})`); }
}

/* match — пари слово ↔ картинка / значення (engine-eng-match; docs/design/english.md §5.7; CONTENT_SCHEMA §4.1): left[i] ↔ right[i];
   стан — масив за лівими: індекс правого елемента в розмітці або null; праву колонку плеєр показує перемішаною (matchOrder) */
{ const M = (more = {}) => ({ type: "match", left: ["cat", "dog", "bird"], right: [{ img: "img/eng/e4s1/cat.svg", alt: "a cat" }, "a dog", "a bird"], ...more });
  const s = M();
  eq(L.issues(s), [], "match: issues чисто (картинка й текст у правій колонці)");
  ok(L.TYPES.includes("match"), "match: у SLID_LANG.TYPES");
  ok(L.check(s, [0, 1, 2]), "match: усі пари правильні");
  no(L.check(s, [1, 0, 2]), "match: дві пари переплутано");
  no(L.check(s, [0, 1, null]), "match: не всі пари складено");
  no(L.check(s, [0, 1]), "match: стан коротший за left");
  no(L.check(s, "0,1,2"), "match: стан не масив");
  no(L.check({ ...s, right: ["a cat", "a dog"] }, [0, 1, 2]), "match: зламана розмітка (right коротший) — не зараховується");
  eq(L.solution(s), [0, 1, 2], "match: solution — кожен лівий до свого правого");
  eq(L.matchLabel(s.right[0]), "a cat", "matchLabel: картинка — alt");
  eq(L.matchLabel("a dog"), "a dog", "matchLabel: текст — сам текст");
  eq(L.readText(s), "cat, dog, bird, a dog, a bird", "readText: ліва колонка й текст правої (alt дитина не читає)");
  // межі й поля
  ok(L.issues(M({ left: ["cat", "dog"], right: ["a cat", "a dog"] })).some(e => /3–6 пар/.test(e)), "match: 2 пари — помилка");
  eq(L.issues(M({ left: ["a", "b", "c", "d", "e", "f"], right: ["1", "2", "3", "4", "5", "6"] })), [], "match: 6 пар — чисто");
  ok(L.issues(M({ left: ["a", "b", "c", "d", "e", "f", "g"], right: ["1", "2", "3", "4", "5", "6", "7"] })).some(e => /3–6 пар/.test(e)), "match: 7 пар — помилка");
  ok(L.issues(M({ right: ["a cat", "a dog"] })).some(e => /однакова кількість/.test(e)), "match: left і right різної довжини — помилка");
  ok(L.issues(M({ left: "cat" })).length, "match: left не масив — помилка");
  ok(L.issues(M({ left: ["cat", "", "bird"] })).length, "match: порожній лівий — помилка");
  ok(L.issues(M({ right: [{ img: "img/eng/e4s1/cat.svg" }, "a dog", "a bird"] })).some(e => /alt обов'язковий/.test(e)), "match: картинка без alt — помилка");
  ok(L.issues(M({ right: [{ img: "img/eng/e4s1/cat.svg", alt: "  " }, "a dog", "a bird"] })).some(e => /alt обов'язковий/.test(e)), "match: порожній alt — помилка");
  ok(L.issues(M({ right: [{ img: "https://example.org/cat.svg", alt: "a cat" }, "a dog", "a bird"] })).some(e => /img:/.test(e)), "match: img за URL — помилка (офлайн)");
  ok(L.issues(M({ right: [{ img: "img/../../etc/cat.svg", alt: "a cat" }, "a dog", "a bird"] })).some(e => /img:/.test(e)), "match: img з .. — помилка");
  ok(L.issues(M({ right: [{ img: "img/eng/e4s1/cat.gif", alt: "a cat" }, "a dog", "a bird"] })).some(e => /img:/.test(e)), "match: img .gif — помилка");
  ok(L.issues(M({ right: [{ img: "img/eng/e4s1/cat.svg", alt: "a cat", cap: "x" }, "a dog", "a bird"] })).some(e => /зайве: cap/.test(e)), "match: зайве поле в { img, alt } — помилка");
  ok(L.issues(M({ right: [5, "a dog", "a bird"] })).some(e => /рядок або \{ img, alt \}/.test(e)), "match: правий — не рядок і не об'єкт — помилка");
  // emoji системного шрифту — ні (і в left, і в right, і в alt)
  ok(L.issues(M({ left: ["cat \u{1F431}", "dog", "bird"] })).some(e => /emoji/.test(e)), "match: emoji в left — помилка");
  ok(L.issues(M({ right: ["\u{1F431}", "a dog", "a bird"] })).some(e => /emoji/.test(e)), "match: emoji замість картинки — помилка");
  ok(L.issues(M({ right: ["☀️", "a dog", "a bird"] })).some(e => /emoji/.test(e)), "match: ☀️ (U+2600 + FE0F) — помилка");
  ok(L.issues(M({ right: [{ img: "img/eng/e4s1/cat.svg", alt: "\u{1F431}" }, "a dog", "a bird"] })).some(e => /emoji/.test(e)), "match: emoji в alt — помилка");
  eq(L.issues(M({ left: ["café", "dog → dogs", "bird"] })), [], "match: діакритика й стрілка — не emoji");
  // повтори, HTML, кирилиця з латиницею
  ok(L.issues(M({ left: ["cat", "Cat", "bird"] })).some(e => /повтор/.test(e)), "match: лівий повторюється (регістр не важить) — помилка");
  ok(L.issues(M({ right: ["a dog", "a dog", "a bird"] })).some(e => /повтор/.test(e)), "match: правий текст повторюється — помилка");
  ok(L.issues(M({ right: [{ img: "img/eng/e4s1/cat.svg", alt: "a cat" }, { img: "img/eng/e4s1/cat.svg", alt: "a kitten" }, "a bird"] })).some(e => /повтор/.test(e)), "match: та сама картинка двічі — помилка");
  ok(L.issues(M({ right: [{ img: "img/eng/e4s1/cat.svg", alt: "a cat" }, "a cat", "a bird"] })).some(e => /повтор/.test(e)), "match: alt = текст іншого правого — помилка (диктор чує однакове)");
  ok(L.issues(M({ left: ["<b>cat</b>", "dog", "bird"] })).some(e => /HTML/.test(e)), "match: HTML у left — помилка");
  ok(L.issues(M({ left: ["сat", "dog", "bird"] })).some(e => /кирилицю й латиницю/.test(e)), "match: кирилична «с» у «сat» — помилка");
  // показ правої колонки: перестановка, ніколи не в порядку розмітки (інакше пари стоять навпроти — відповідь на екрані)
  const one = () => 0.999999;   // permute з таким rnd лишає порядок як був
  const o = L.matchOrder(s, one);
  eq([...o].sort(), [0, 1, 2], "matchOrder: перестановка правих");
  ok(o.some((k, i) => k !== i), "matchOrder: не тотожна навіть із rnd, що лишає порядок");
  for (let i = 0; i < 30; i++) { const r = L.matchOrder(M({ left: ["a", "b", "c", "d"], right: ["1", "2", "3", "4"] })); ok(r.some((k, j) => k !== j) && [...r].sort().join() === "0,1,2,3", `matchOrder: випадковий показ — не тотожний (${r})`); }
  eq(L.matchOrder({ type: "match", left: "x", right: "y" }), [], "matchOrder: зламана розмітка — порожньо, без винятку");
}

console.log(fail ? `test-lang: ${fail} з ${n} не пройшли` : `test-lang: ${n} перевірок — усі пройшли`);
process.exit(fail ? 1 : 0);
