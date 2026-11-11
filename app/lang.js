/* Слід · мовні вправи (українська мова та інші мовні предмети): розбір розмітки й перевірка відповідей.
   Чисті функції без DOM — їх використовують і плеєр (app/app.js), і валідатор (tools/validate.mjs), і тести (tools/test-lang.mjs).
   Типи екранів (docs/CONTENT_SCHEMA.md §4.1):
     gaps   — text: "с{*е|и}ло"           пропуски з варіантами; * — правильний; «—» — нічого не писати (дитина бачить «∅»); «–» (U+2013) — тире (бачить «—»)
     pick   — text: "[Сонце] світить."     дитина торкається слів; правильні — у [дужках] (група в дужках — одна кнопка); [!група] — хибна група-кнопка
     stress — words: ["черг+овий"]         торкнутися наголошеного голосного; + перед ним
     word   — answer: "пів'яблука" | [...]  дитина вписує слово; регістр, апостроф і дефіс нормалізуються
     split  — word: "мо|ло|ко" | [...]     поділ слова рисками між літерами (склади, перенос, будова слова); zero: true — після слова
                                            клітинка нульового закінчення «□» (межа перед нею — «стіл|») */
(function () {
  const VOWELS = "аеєиіїоуюяАЕЄИІЇОУЮЯ";
  const isVowel = ch => VOWELS.includes(ch);
  const NONE = "—";   // варіант «нічого не писати» у розмітці; на екрані — «∅» з легендою (тире й «нічого» не мають виглядати однаково)
  const DASH = "\u2013";   // варіант-тире в пропуску: у розмітці коротке «–», на екрані — справжнє тире «—»
  /** Як показати варіант пропуску: { text, label } (label — для екранного диктора) */
  const optView = o => o === NONE ? { text: "\u2205", label: "нічого не писати" } : o === DASH ? { text: "\u2014", label: "тире" } : { text: o, label: null };
  /** Порядок показу варіантів пропуску: перестановка індексів opts (Фішер — Єйтс), бо автори майже завжди пишуть правильний першим.
      «∅» (NONE) — завжди останній: його й так видно за знаком, а місце в кінці не залежить від того, чи він правильний. */
  function permute(idx, rnd) {   // Фішер — Єйтс на місці; rnd — у тестах детермінований
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.min(i, Math.floor(rnd() * (i + 1))); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    return idx;
  }
  function gapOrder(opts, rnd = Math.random) {
    const idx = permute(opts.map((o, k) => k).filter(k => opts[k] !== NONE), rnd);
    return idx.concat(opts.map((o, k) => k).filter(k => opts[k] === NONE));
  }
  /** Порядок показу рядків екрана sort (не мовна вправа, але той самий прийом): перестановка індексів 0…n−1.
   *  Автори групують items за кошиками — у порядку items рядки підказували б відповідь (engine-sort-order). */
  const rowOrder = (n, rnd = Math.random) => permute(Array.from({ length: Math.max(0, n | 0) }, (x, k) => k), rnd);
  const isSet = v => !!v && typeof v.has === "function" && typeof v.size === "number";   // Set з будь-якого realm (vm у тестах)

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
      if (opts.some(o => o.includes("*"))) return { error: `пропуск {${inner}}: «*» лише на початку правильного варіанта` };
      if (opts.length < 2 || opts.length > 5) return { error: `пропуск {${inner}}: потрібно 2–5 варіантів` };
      if (opts.some(o => !o)) return { error: `пропуск {${inner}}: порожній варіант (для «нічого» пиши ${NONE})` };
      if (new Set(opts).size !== opts.length) return { error: `пропуск {${inner}}: варіанти повторюються` };
      out.push({ t: "gap", opts, correct: raw.findIndex(s => s.startsWith("*")), n: n++, raw: inner.split("|").map(s => s.replace(/^\s*\*/, "")) });
      i = b + 1;
    }
    if (src.includes("}") && src.split("}").length - 1 !== out.filter(p => p.t === "gap").length) return { error: "зайва дужка «}»" };
    const gaps = out.filter(p => p.t === "gap");
    if (!gaps.length) return { error: "немає жодного пропуску {…}" };
    if (gaps.length > 12) return { error: "забагато пропусків (≤ 12 на екран)" };
    return { parts: out, gaps };
  }

  /** pick: [{t:"text", v}, {t:"word", v, ok, n, group?}] або { error }. Слово — літери, апостроф, дефіс; група в [ ] — одна кнопка
      (group: true — кнопка з дужок, навіть з одного слова). [!група] — хибна кнопка; пробіли біля «!» дозволені: [ ! слово ]. */
  const WORD = /[\p{L}\p{M}'’ʼ]+(?:[-\u2011][\p{L}\p{M}'’ʼ]+)*/gu;
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
      // [!група] — хибна група: одна кнопка, але не правильна (щоб багатослівні кнопки не видавали відповідь)
      const wrong = inner.trimStart().startsWith("!"), v = (wrong ? inner.trimStart().slice(1) : inner).trim();
      if (wrong && v.startsWith("!")) return { error: `[${inner}]: «!» двічі — хибну групу позначає один «!»` };
      if (!v.match(WORD)) return { error: `[${inner}]: у дужках немає слова` };
      out.push({ t: "word", v, ok: !wrong, n: n++, group: true });
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
    const src = String(word ?? "").normalize("NFC");
    if (/\p{M}/u.test(src)) return { error: `«${src}»: знак наголосу чи інший комбінований знак у слові — наголос тут позначає лише «+»` };
    const plus = (src.match(/\+/g) || []).length;
    if (plus !== 1) return { error: `«${src}»: має бути рівно один «+» перед наголошеним голосним` };
    const p = src.indexOf("+"), ch = src[p + 1];
    if (!ch || !isVowel(ch)) return { error: `«${src}»: після «+» має стояти голосна літера` };
    const clean = src.replace("+", "");
    const letters = [...clean].map((c, i) => ({ ch: c, v: isVowel(c), i }));
    if (letters.filter(l => l.v).length < 2) return { error: `«${src}»: в односкладовому слові наголос не вибирають` };
    return { letters, correct: p, word: clean };
  }

  /** split: розбір варіанта «мо|ло|ко» → { word: "молоко", cuts: [2,4] } (позиції меж після літери k) або { error }.
      zero — після слова клітинка нульового закінчення: межа «|» у кінці (перед нею) дозволена, cuts може містити довжину слова */
  function parseSplitOne(v, zero) {
    const src = String(v ?? "").normalize("NFC");
    if (/\p{M}/u.test(src)) return { error: `«${src}»: знак наголосу чи інший комбінований знак у слові для поділу — прибери його` };
    if (!src.includes("|")) return { error: `«${src}»: немає жодної межі «|»` };
    if (/^\||\|\|/.test(src) || (!zero && /\|$/.test(src))) return { error: `«${src}»: межа «|» на краю слова або дві поспіль${/\|$/.test(src) ? " (межа перед нульовим закінченням — лише з zero: true)" : ""}` };
    const cuts = []; let k = 0;
    for (const c of src) { if (c === "|") cuts.push(k); else k++; }
    return { word: src.replace(/\|/g, ""), cuts };
  }
  /** split: word — рядок або масив допустимих варіантів того самого слова; zero — клітинка нульового закінчення (поле екрана zero: true) */
  function parseSplit(word, zero) {
    const list = (Array.isArray(word) ? word : [word]).map(v => parseSplitOne(v, !!zero));
    const bad = list.find(x => x.error); if (bad) return bad;
    if (new Set(list.map(x => x.word)).size !== 1) return { error: "варіанти поділу мають бути того самого слова" };
    if ([...list[0].word].length < 2) return { error: "слово закоротке для поділу" };
    return { word: list[0].word, variants: list.map(x => x.cuts) };
  }
  /** split: як показати поділ дитині (показ відповіді): «мо-ло-ко»; у слові з дефісом межі — «|» (інакше «жовто-блакитний» двозначний);
      zero — у кінці клітинка «□» нульового закінчення */
  function splitShow(word, cuts, zero) {
    const ls = [...String(word)], sep = ls.includes("-") ? "|" : "-", has = new Set(cuts);
    return ls.map((ch, k) => (k && has.has(k) ? sep : "") + ch).join("") + (zero ? (has.has(ls.length) ? sep : "") + "\u25A1" : "");
  }
  const sameCuts = (a, b) => a.length === b.length && [...a].sort((x, y) => x - y).every((v, k) => v === [...b].sort((x, y) => x - y)[k]);

  /** word: нормалізація введеного слова — регістр, апострофи (’ ʼ ` ´ ‘ ′ ʹ ″ ” → '), дефіси й мінус (‐ ‑ – — − → -), пробіли, знак наголосу,
      латинські двійники (i → і, o → о, k → к…) — у кириличному слові або коли кирилична очікувана відповідь (cyr): «i» латиницею як сполучник «і» */
  function normWord(v, keepCase, cyr) {
    let t = String(v ?? "").normalize("NFD").replace(/\u0301/g, "").normalize("NFC").replace(/[\u2019\u02BC`\u00B4\u2018\u2032\u02B9\u2033\u201D]/g, "'").replace(/[\u2010\u2011\u2013\u2014\u2212]/g, "-")
      .replace(/\s*-\s*/g, "-").replace(/\s+/g, " ").trim();
    // латинські літери-двійники в кириличному слові (i замість і, o замість о…) — те саме, що й кириличні: на екрані їх не розрізнити
    if (cyr || /[\u0400-\u04FF]/.test(t)) t = t.replace(/[aceikopxyACEIOPXYKMHTBïÏ]/g, c => LOOK[c]);
    return keepCase ? t : t.toLocaleLowerCase("uk");
  }
  const LOOK = { a: "а", c: "с", e: "е", i: "і", o: "о", p: "р", x: "х", y: "у", A: "А", C: "С", E: "Е", I: "І", O: "О", P: "Р", X: "Х", Y: "У", K: "К", M: "М", H: "Н", T: "Т", B: "В", k: "к", "ï": "ї", "Ï": "Ї" };
  const mixedScript = v => /[\u0400-\u04FF]/.test(v) && /[A-Za-z]/.test(v);
  const wordAnswers = s => (Array.isArray(s.answer) ? s.answer : [s.answer]).filter(x => typeof x === "string");
  const isCyr = v => /[\u0400-\u04FF]/.test(v);
  /** word: введене в тій самій нормалізації, що й порівняння (ключ «та сама відповідь» у плеєрі): двійники зводимо, якщо хоч одна відповідь кирилична */
  const wordInput = (s, v) => normWord(v, s.keepCase, wordAnswers(s).some(isCyr));

  /** Перевірка відповіді st (стан плеєра) для екрана s. true/false. */
  function check(s, st) {
    switch (s.type) {
      case "gaps": { const g = parseGaps(s.text); return !g.error && Array.isArray(st) && g.gaps.every((x, k) => st[k] === x.correct); }
      case "pick": { const p = parsePick(s.text); if (p.error || !isSet(st)) return false; return p.correct.length === st.size && p.correct.every(n => st.has(n)); }
      case "stress": { const ws = (s.words || []).map(parseStress); return ws.every(w => !w.error) && Array.isArray(st) && ws.every((w, k) => st[k] === w.correct); }
      case "word": return wordAnswers(s).some(a => { const v = normWord(st, s.keepCase, isCyr(a)); return v !== "" && normWord(a, s.keepCase) === v; });
      case "split": { const p = parseSplit(s.word, s.zero); return !p.error && isSet(st) && p.variants.some(c => sameCuts(c, [...st])); }
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
      case "split": return new Set(parseSplit(s.word, s.zero).variants[0]);
    }
  }

  /** Помилки розмітки екрана (для валідатора): масив рядків */
  function issues(s) {
    const E = [];
    switch (s.type) {
      case "gaps": { const g = parseGaps(s.text); if (g.error) E.push("gaps: " + g.error); break; }
      case "pick": { const p = parsePick(s.text); if (p.error) E.push("pick: " + p.error); else if (p.words.length > 40) E.push("pick: забагато слів (≤ 40)");
        else if (p.words.some(w => mixedScript(w.v))) E.push("pick: у слові змішано кирилицю й латиницю"); break; }
      case "stress": {
        if (!Array.isArray(s.words) || !s.words.length || s.words.length > 6) { E.push("stress: words — масив з 1–6 слів"); break; }
        s.words.forEach(w => { const p = parseStress(w); if (p.error) E.push("stress: " + p.error); }); break; }
      case "word": {
        const a = wordAnswers(s);
        if (!a.length || a.length !== (Array.isArray(s.answer) ? s.answer.length : 1)) E.push("word: answer — рядок або масив рядків");
        else if (a.some(x => !normWord(x))) E.push("word: порожня відповідь");
        else if (a.some(x => normWord(x).length > 60)) E.push("word: відповідь довша за 60 символів");
        else if (a.some(mixedScript)) E.push("word: у відповіді змішано кирилицю й латиницю (латинська i, o, a… замість кириличної?)");
        if (s.keys !== undefined && !(Array.isArray(s.keys) && s.keys.every(k => typeof k === "string" && k.length >= 1 && k.length <= 3))) E.push("word: keys — масив коротких рядків (1–3 символи)");
        break; }
      case "split": { if (s.zero !== undefined && typeof s.zero !== "boolean") { E.push("split: zero — true/false"); break; }
        const p = parseSplit(s.word, s.zero); if (p.error) E.push("split: " + p.error); break; }
    }
    return E;
  }

  const BLOCK_TAG = /<\/?(?:p|br|hr|li|ul|ol|div|h[1-6]|table|thead|tbody|tr|td|th|blockquote|section|figure|figcaption|dl|dt|dd)\b[^>]*>/gi;
  /** Попередження розмітки (не ламають екран, але підказують відповідь чи плутають дитину): масив рядків. Розмітка з помилкою — [] (її дає issues) */
  function warnings(s) {
    const W = [];
    if (s.type === "pick") { const p = parsePick(s.text);
      if (!p.error) { const multi = p.words.filter(w => /\s/.test(w.v)), ok = multi.filter(w => w.ok), bad = multi.length - ok.length;
        // хибних груп з кількох слів — щонайменше половина правильних: одна хибна на три правильні все ще видає відповідь (рев'ю pick-groups P3)
        if (ok.length && bad < Math.ceil(ok.length / 2)) W.push(`pick: кнопок з кількох слів правильних ${ok.length} (${ok.map(w => "«" + w.v + "»").join(", ")}), хибних ${bad} — форма кнопки видає відповідь; додай хибні групи [!…] з кількох слів (хоча б ${Math.ceil(ok.length / 2)})`); } }
    if (s.type === "gaps") { const g = parseGaps(s.text);
      if (!g.error) for (const x of g.gaps) {
        // « —» з пробілом після обрізання — «нічого не писати», а сусід із тире каже, що автор мав на увазі тире (u5s10l5: тире треба «–»)
        const k = x.opts.indexOf(NONE);
        if (k >= 0 && (x.raw[k] !== NONE || x.opts.some((o, j) => j !== k && o.length > 1 && /[—–]/.test(o))))
          W.push(`gaps: варіант «${x.raw[k]}» — це «нічого не писати» (дитина бачить ∅), а ${x.raw[k] !== NONE ? "довкола нього пробіли" : "інші варіанти містять тире"}; тире як варіант пиши коротким «–»: {${x.raw.join("|")}}`); }
      // слово з пропуском, розірване HTML-тегом (<b>б{…}р</b>{…}за): рядок може перенестися посеред слова (рев'ю engine-lang-types R2-P3-3)
      // (тег між літерою чи пропуском і літерою чи пропуском, а в слові є пропуск; плеєр загортає в span.gw лише суцільні літери біля пропуску)
      // блокові теги (<p>, <br>, <li>…) — межа рядка, не «тег у слові»: після них переносу посеред слова немає (рев'ю engine-lang-p3 P3-3)
      if (!g.error) { const src = String(s.text).replace(/\{[^}]*\}/g, "\u0001").replace(BLOCK_TAG, " ");
        for (const m of src.matchAll(/(?:[\p{L}\p{M}'’ʼ\u0001-]|<[^>]*>)*\u0001(?:[\p{L}\p{M}'’ʼ\u0001-]|<[^>]*>)*/gu))
          if (/[\p{L}\u0001](?:<[^>]*>)+[\p{L}\u0001]/u.test(m[0])) { W.push(`gaps: слово з пропуском розірване HTML-тегом («${m[0].replace(/^(?:<[^>]*>)+|(?:<[^>]*>)+$/g, "").replace(/\u0001/g, "{…}")}») — рядок може перенестися посеред слова; обгорни тегом усе слово або винеси тег за його межі`); break; } } }
    return W;
  }
  const TYPES = ["gaps", "pick", "stress", "word", "split"];
  /** Текст вправи, який дитина читає (для метрик stats/validate): пропуски — правильним варіантом, без дужок і «+» */
  function readText(s) {
    // «—» / «–» замінюємо, лише коли варіант цілком дорівнює токену: «1–2», «», —» лишаються як є (engine-lang-dash P3-1)
    if (s.type === "gaps" && typeof s.text === "string") return s.text.replace(/\{([^}]*)\}/g, (m, x) => { const o = (x.split("|").find(o => o.trim().startsWith("*")) || "").replace(/^\s*\*/, "").trim();
      return o === NONE ? "" : o === DASH ? "\u2014" : o; });
    if (s.type === "pick" && typeof s.text === "string") return s.text.replace(/\[\s*!\s*/g, "[").replace(/[[\]]/g, "");
    if (s.type === "stress" && Array.isArray(s.words)) return s.words.join(", ").replace(/\+/g, "");
    if (s.type === "split") return [].concat(s.word)[0]?.replace?.(/\|/g, "") || "";
    return "";
  }
  window.SLID_LANG = { TYPES, warnings, readText, NONE, DASH, optView, gapOrder, rowOrder, isVowel, parseGaps, parsePick, parseStress, parseSplit, splitShow, normWord, wordInput, wordAnswers, check, solution, issues, sameCuts };
})();
