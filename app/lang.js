/* Слід · мовні вправи (українська мова та інші мовні предмети): розбір розмітки й перевірка відповідей.
   Чисті функції без DOM — їх використовують і плеєр (app/app.js), і валідатор (tools/validate.mjs), і тести (tools/test-lang.mjs).
   Типи екранів (docs/CONTENT_SCHEMA.md §4.1):
     gaps   — text: "с{*е|и}ло"           пропуски з варіантами; * — правильний; «—» — нічого не писати
     pick   — text: "[Сонце] світить."     дитина торкається слів; правильні — у [дужках] (група в дужках — одна кнопка)
     stress — words: ["черг+овий"]         торкнутися наголошеного голосного; + перед ним
     word   — answer: "пів'яблука" | [...]  дитина вписує слово; регістр, апостроф і дефіс нормалізуються
     split  — word: "мо|ло|ко" | [...]     поділ слова рисками між літерами (склади, перенос, будова слова) */
(function () {
  const VOWELS = "аеєиіїоуюяАЕЄИІЇОУЮЯ";
  const isVowel = ch => VOWELS.includes(ch);
  const NONE = "—";
  const isSet = v => !!v && typeof v.has === "function" && typeof v.size === "number";   // Set з будь-якого realm (vm у тестах)   // варіант «нічого не писати»

  /** gaps: [{t:"text", v:"с"}, {t:"gap", opts:["е","и"], correct:0}, …] або { error } */
  function parseGaps(text) {
    const out = [], src = String(text ?? "");
    let i = 0, n = 0;
    while (i < src.length) {
      const a = src.indexOf("{", i);
      if (a < 0) { out.push({ t: "text", v: src.slice(i) }); break; }
      if (a > i) out.push({ t: "text", v: src.slice(i, a) });
      const b = src.indexOf("}", a);
      if (b < 0) return { error: "незакрита дужка «{»" };
      const inner = src.slice(a + 1, b);
      if (inner.includes("{")) return { error: "вкладена дужка «{»" };
      const raw = inner.split("|").map(s => s.trim());
      const stars = raw.filter(s => s.startsWith("*")).length;
      if (stars !== 1) return { error: `пропуск {${inner}}: має бути рівно один правильний варіант із «*»` };
      const opts = raw.map(s => s.replace(/^\*/, "").trim());
      if (opts.length < 2 || opts.length > 5) return { error: `пропуск {${inner}}: потрібно 2–5 варіантів` };
      if (opts.some(o => !o)) return { error: `пропуск {${inner}}: порожній варіант (для «нічого» пиши ${NONE})` };
      if (new Set(opts).size !== opts.length) return { error: `пропуск {${inner}}: варіанти повторюються` };
      out.push({ t: "gap", opts, correct: raw.findIndex(s => s.startsWith("*")), n: n++ });
      i = b + 1;
    }
    if (src.includes("}") && src.split("}").length - 1 !== out.filter(p => p.t === "gap").length) return { error: "зайва дужка «}»" };
    const gaps = out.filter(p => p.t === "gap");
    if (!gaps.length) return { error: "немає жодного пропуску {…}" };
    if (gaps.length > 12) return { error: "забагато пропусків (≤ 12 на екран)" };
    return { parts: out, gaps };
  }

  /** pick: [{t:"text", v}, {t:"word", v, ok, n}] або { error }. Слово — літери, апостроф, дефіс; група в [ ] — одна кнопка. */
  const WORD = /[\p{L}\p{M}'’ʼ]+(?:-[\p{L}\p{M}'’ʼ]+)*/gu;
  function parsePick(text) {
    const src = String(text ?? ""), out = [];
    let n = 0;
    const words = (chunk, ok) => {
      let last = 0;
      for (const m of chunk.matchAll(WORD)) {
        if (m.index > last) out.push({ t: "text", v: chunk.slice(last, m.index) });
        out.push({ t: "word", v: m[0], ok, n: n++ });
        last = m.index + m[0].length;
      }
      if (last < chunk.length) out.push({ t: "text", v: chunk.slice(last) });
    };
    let i = 0;
    while (i < src.length) {
      const a = src.indexOf("[", i);
      if (a < 0) { words(src.slice(i), false); break; }
      words(src.slice(i, a), false);
      const b = src.indexOf("]", a);
      if (b < 0) return { error: "незакрита дужка «[»" };
      const inner = src.slice(a + 1, b);
      if (inner.includes("[")) return { error: "вкладена дужка «[»" };
      if (!inner.match(WORD)) return { error: `[${inner}]: у дужках немає слова` };
      out.push({ t: "word", v: inner.trim(), ok: true, n: n++ });
      i = b + 1;
    }
    if ((src.match(/\]/g) || []).length !== (src.match(/\[/g) || []).length) return { error: "зайва дужка «]»" };
    const all = out.filter(p => p.t === "word");
    if (!all.some(w => w.ok)) return { error: "немає жодного правильного слова в [дужках]" };
    if (all.every(w => w.ok)) return { error: "усі слова правильні — завдання нічого не перевіряє" };
    return { parts: out, words: all, correct: all.filter(w => w.ok).map(w => w.n) };
  }

  /** stress: { letters: [{ch, v (голосний), i}], correct: індекс літери } або { error }. «+» стоїть перед наголошеним голосним. */
  function parseStress(word) {
    const src = String(word ?? "");
    const plus = (src.match(/\+/g) || []).length;
    if (plus !== 1) return { error: `«${src}»: має бути рівно один «+» перед наголошеним голосним` };
    const p = src.indexOf("+"), ch = src[p + 1];
    if (!ch || !isVowel(ch)) return { error: `«${src}»: після «+» має стояти голосна літера` };
    const clean = src.replace("+", "");
    const letters = [...clean].map((c, i) => ({ ch: c, v: isVowel(c), i }));
    if (letters.filter(l => l.v).length < 2) return { error: `«${src}»: в односкладовому слові наголос не вибирають` };
    return { letters, correct: p, word: clean };
  }

  /** split: розбір варіанта «мо|ло|ко» → { word: "молоко", cuts: [2,4] } (позиції меж після літери k) або { error } */
  function parseSplitOne(v) {
    const src = String(v ?? "");
    if (!src.includes("|")) return { error: `«${src}»: немає жодної межі «|»` };
    if (/^\||\|$|\|\|/.test(src)) return { error: `«${src}»: межа «|» на краю слова або дві поспіль` };
    const cuts = []; let k = 0;
    for (const c of src) { if (c === "|") cuts.push(k); else k++; }
    return { word: src.replace(/\|/g, ""), cuts };
  }
  /** split: word — рядок або масив допустимих варіантів того самого слова */
  function parseSplit(word) {
    const list = (Array.isArray(word) ? word : [word]).map(parseSplitOne);
    const bad = list.find(x => x.error); if (bad) return bad;
    if (new Set(list.map(x => x.word)).size !== 1) return { error: "варіанти поділу мають бути того самого слова" };
    if ([...list[0].word].length < 2) return { error: "слово закоротке для поділу" };
    return { word: list[0].word, variants: list.map(x => x.cuts) };
  }
  const sameCuts = (a, b) => a.length === b.length && [...a].sort((x, y) => x - y).every((v, k) => v === [...b].sort((x, y) => x - y)[k]);

  /** word: нормалізація введеного слова — регістр, апострофи (’ ʼ ` ' ″), дефіси (‐ – —), пробіли, наголоси */
  function normWord(v, keepCase) {
    let t = String(v ?? "").normalize("NFD").replace(/\u0301/g, "").normalize("NFC").replace(/[\u2019\u02BC`\u00B4\u2018]/g, "'").replace(/[\u2010\u2011\u2013\u2014]/g, "-")
      .replace(/\s*-\s*/g, "-").replace(/\s+/g, " ").trim();
    return keepCase ? t : t.toLocaleLowerCase("uk");
  }
  const wordAnswers = s => (Array.isArray(s.answer) ? s.answer : [s.answer]).filter(x => typeof x === "string");

  /** Перевірка відповіді st (стан плеєра) для екрана s. true/false. */
  function check(s, st) {
    switch (s.type) {
      case "gaps": { const g = parseGaps(s.text); return !g.error && Array.isArray(st) && g.gaps.every((x, k) => st[k] === x.correct); }
      case "pick": { const p = parsePick(s.text); if (p.error || !isSet(st)) return false; return p.correct.length === st.size && p.correct.every(n => st.has(n)); }
      case "stress": { const ws = (s.words || []).map(parseStress); return ws.every(w => !w.error) && Array.isArray(st) && ws.every((w, k) => st[k] === w.correct); }
      case "word": { const v = normWord(st, s.keepCase); return v !== "" && wordAnswers(s).some(a => normWord(a, s.keepCase) === v); }
      case "split": { const p = parseSplit(s.word); return !p.error && isSet(st) && p.variants.some(c => sameCuts(c, [...st])); }
    }
    return false;
  }

  /** Стан, що дає правильну відповідь (для плейтесту й тестів) */
  function solution(s) {
    switch (s.type) {
      case "gaps": return parseGaps(s.text).gaps.map(g => g.correct);
      case "pick": return new Set(parsePick(s.text).correct);
      case "stress": return s.words.map(w => parseStress(w).correct);
      case "word": return wordAnswers(s)[0];
      case "split": return new Set(parseSplit(s.word).variants[0]);
    }
  }

  /** Помилки розмітки екрана (для валідатора): масив рядків */
  function issues(s) {
    const E = [];
    switch (s.type) {
      case "gaps": { const g = parseGaps(s.text); if (g.error) E.push("gaps: " + g.error); break; }
      case "pick": { const p = parsePick(s.text); if (p.error) E.push("pick: " + p.error); else if (p.words.length > 40) E.push("pick: забагато слів (≤ 40)"); break; }
      case "stress": {
        if (!Array.isArray(s.words) || !s.words.length || s.words.length > 6) { E.push("stress: words — масив з 1–6 слів"); break; }
        s.words.forEach(w => { const p = parseStress(w); if (p.error) E.push("stress: " + p.error); }); break; }
      case "word": {
        const a = wordAnswers(s);
        if (!a.length || a.length !== (Array.isArray(s.answer) ? s.answer.length : 1)) E.push("word: answer — рядок або масив рядків");
        else if (a.some(x => !normWord(x))) E.push("word: порожня відповідь");
        else if (a.some(x => normWord(x).length > 60)) E.push("word: відповідь довша за 60 символів");
        if (s.keys !== undefined && !(Array.isArray(s.keys) && s.keys.every(k => typeof k === "string" && k.length >= 1 && k.length <= 3))) E.push("word: keys — масив коротких рядків (1–3 символи)");
        break; }
      case "split": { const p = parseSplit(s.word); if (p.error) E.push("split: " + p.error); break; }
    }
    return E;
  }

  const TYPES = ["gaps", "pick", "stress", "word", "split"];
  window.SLID_LANG = { TYPES, NONE, isVowel, parseGaps, parsePick, parseStress, parseSplit, normWord, wordAnswers, check, solution, issues, sameCuts };
})();
