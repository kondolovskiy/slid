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
/* розв'язок дає правильну відповідь */
for (const s of [{ type: "gaps", text: "с{*е|и}ло" }, { type: "pick", text: "[а] б" }, { type: "stress", words: ["м+ама"] }, { type: "word", answer: "так" }, { type: "split", word: "ма|ма" }])
  ok(L.check(s, L.solution(s)), `solution → check: ${s.type}`);

console.log(fail ? `test-lang: ${fail} з ${n} не пройшли` : `test-lang: ${n} перевірок — усі пройшли`);
process.exit(fail ? 1 : 0);
