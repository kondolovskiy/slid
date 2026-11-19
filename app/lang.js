/* Слід · мовні вправи (українська мова та інші мовні предмети): розбір розмітки й перевірка відповідей.
   Чисті функції без DOM — їх використовують і плеєр (app/app.js), і валідатор (tools/validate.mjs), і тести (tools/test-lang.mjs).
   Типи екранів (docs/CONTENT_SCHEMA.md §4.1):
     gaps   — text: "с{*е|и}ло"           пропуски з варіантами; * — правильний; «—» — нічого не писати (дитина бачить «∅»); «–» (U+2013) — тире (бачить «—»)
     pick   — text: "[Сонце] світить."     дитина торкається слів; правильні — у [дужках] (група в дужках — одна кнопка); [!група] — хибна група-кнопка
     stress — words: ["черг+овий"]         торкнутися наголошеного голосного; + перед ним
              words: ["+pho|to|graph"]     або складу: склади через «|», + перед наголошеним складом (англійська, §5.6 дизайну)
     word   — answer: "пів'яблука" | [...]  дитина вписує слово; регістр, апостроф і дефіс нормалізуються
              предмет з targetLang "en" (lang у check / wordVerdict / wordInput): ще кінцевий знак, кирилиця-двійник, contractions,
              американський правопис за списком (ok з приміткою), запис часу, «Almost» (docs/design/english.md §5.4)
     build  — tiles: [...], answer: "…" | [...], extra: [...]   речення з плиток-слів (docs/design/english.md §5.5): кожен answer — усі tiles
                                            рівно раз (кінцевий .!? і велика перша літера — поза плитками); extra — ≤ 2 пастки; разом ≤ 9 плиток
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
  /* Токен — літери, цифри, апострофи, дефіс усередині; кнопкою стає лише токен з літерою («5th», «3pm» — одна кнопка; «1991» — текст).
     Апостроф-лапки на краях (engine-eng-lang-core, §5.4 дизайну): початкові ' ‘ ’ ʼ — завжди в текст; кінцеві — лише в парі з початковими
     ('hello', ‘hello’ → hello), бо кінцевий апостроф без пари — присвійний (the boys'). */
  const WORD = /[\p{L}\p{M}\p{N}'’ʼ‘]+(?:[-\u2011][\p{L}\p{M}\p{N}'’ʼ‘]+)*/gu;
  const QUOTE = /^['’ʼ‘]+/, QUOTE_END = /['’ʼ‘]+$/;
  /** Межі слова-кнопки в токені: [початок, кінець) або null (немає літери) */
  function tokenCore(tok) {
    const a = (tok.match(QUOTE) || [""])[0].length, z = a ? (tok.slice(a).match(QUOTE_END) || [""])[0].length : 0;
    const core = tok.slice(a, tok.length - z);
    return /\p{L}/u.test(core) ? [a, tok.length - z] : null;
  }
  function parsePick(text) {
    const src = String(text ?? ""), out = [];
    let n = 0;
    const words = (chunk, ok) => {
      let last = 0;
      for (const m of chunk.matchAll(WORD)) {
        const c = tokenCore(m[0]); if (!c) continue;
        const a = m.index + c[0], z = m.index + c[1];
        if (a > last) out.push({ t: "text", v: chunk.slice(last, a) });
        out.push({ t: "word", v: chunk.slice(a, z), ok, n: n++ });
        last = z;
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
      if (!/\p{L}/u.test(v)) return { error: `[${inner}]: у дужках немає слова` };
      out.push({ t: "word", v, ok: !wrong, n: n++, group: true });
      i = b + 1;
    }
    if ((src.match(/\]/g) || []).length !== (src.match(/\[/g) || []).length) return { error: "зайва дужка «]»" };
    const all = out.filter(p => p.t === "word");
    if (!all.some(w => w.ok)) return { error: "немає жодного правильного слова в [дужках]" };
    if (all.every(w => w.ok)) return { error: "усі слова правильні — завдання нічого не перевіряє" };
    return { parts: out, words: all, correct: all.filter(w => w.ok).map(w => w.n) };
  }

  /** stress: { letters: [{ch, v (голосний), i}], correct: індекс літери } або { error }. «+» стоїть перед наголошеним голосним.
      Склади (є «|»): "+pho|to|graph" → letters — склади (усі кнопки, i — номер складу), correct — номер наголошеного складу, syl: true. */
  function parseStress(word) {
    const src = String(word ?? "").normalize("NFC");
    if (/\p{M}/u.test(src)) return { error: `«${src}»: знак наголосу чи інший комбінований знак у слові — наголос тут позначає лише «+»` };
    const plus = (src.match(/\+/g) || []).length;
    if (src.includes("|")) {
      if (plus !== 1) return { error: `«${src}»: має бути рівно один «+» перед наголошеним складом` };
      const syl = src.split("|");
      if (syl.some(x => !x || x === "+")) return { error: `«${src}»: порожній склад — «|» на краю слова чи дві поспіль` };
      if (syl.some(x => x.indexOf("+") > 0)) return { error: `«${src}»: «+» ставимо на початку наголошеного складу: pho|+tog|ra|pher` };
      const clean = syl.map(x => x.replace("+", ""));
      if (clean.some(x => !/^[\p{L}'’ʼ-]+$/u.test(x))) return { error: `«${src}»: у складі — лише літери (без пробілів і знаків)` };
      return { letters: clean.map((ch, i) => ({ ch, v: true, i })), correct: syl.findIndex(x => x.startsWith("+")), word: clean.join(""), syl: true };
    }
    if (plus !== 1) return { error: `«${src}»: має бути рівно один «+» перед наголошеним голосним` };
    const p = src.indexOf("+"), ch = src[p + 1];
    if (!ch || !isVowel(ch)) return { error: /[A-Za-z]/.test(src) ? `«${src}»: англійське слово — розмітка складами: склади через «|», «+» перед наголошеним складом («+pho|to|graph»)` : `«${src}»: після «+» має стояти голосна літера` };
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
  const baseNorm = v => String(v ?? "").normalize("NFD").replace(/\u0301/g, "").normalize("NFC").replace(/[\u2019\u02BC`\u00B4\u2018\u2032\u02B9\u2033\u201D]/g, "'").replace(/[\u2010\u2011\u2013\u2014\u2212]/g, "-")
      .replace(/\s*-\s*/g, "-").replace(/\s+/g, " ").trim();
  function normWord(v, keepCase, cyr) {
    let t = baseNorm(v);
    // латинські літери-двійники в кириличному слові (i замість і, o замість о…) — те саме, що й кириличні: на екрані їх не розрізнити
    if (cyr || /[\u0400-\u04FF]/.test(t)) t = t.replace(/[aceikopxyACEIOPXYKMHTBïÏ]/g, c => LOOK[c]);
    return keepCase ? t : t.toLocaleLowerCase("uk");
  }
  const LOOK = { a: "а", c: "с", e: "е", i: "і", o: "о", p: "р", x: "х", y: "у", A: "А", C: "С", E: "Е", I: "І", O: "О", P: "Р", X: "Х", Y: "У", K: "К", M: "М", H: "Н", T: "Т", B: "В", k: "к", "ï": "ї", "Ï": "Ї" };
  const mixedScript = v => /[\u0400-\u04FF]/.test(v) && /[A-Za-z]/.test(v);
  const wordAnswers = s => (Array.isArray(s.answer) ? s.answer : [s.answer]).filter(x => typeof x === "string");
  const isCyr = v => /[\u0400-\u04FF]/.test(v);
  /** word: введене в тій самій нормалізації, що й порівняння (ключ «та сама відповідь» у плеєрі): двійники зводимо, якщо хоч одна відповідь кирилична */
  /*  lang "en" — нормалізація англійської гілки (скорочення — у повній формі), щоб «I'm» після «I am» не витрачало другу спробу */
  const wordInput = (s, v, lang) => {
    if (lang !== "en") return normWord(v, s.keepCase, wordAnswers(s).some(isCyr));
    const t = normEn(v, s.keepCase, wordAnswers(s).every(a => !/[\u0400-\u04FF]/.test(a)), !wordAnswers(s).some(a => /[.!?]$/.test(String(a).trim())));
    return s.contractions ? t.split(" ").map(x => expandTok(x)[1] || x).join(" ") : t; };

  /* ---------- word англійською (engine-eng-lang-core; docs/design/english.md §5.4; D-054 з доповненням; glossary/eng.md) ----------
     Вмикає lang === "en" (рушій передає SLID.subjectLang предмета); інакше — гілка вище без змін. Тексти для дитини (примітка, «Almost») —
     англійською, бо це зміст предмета; службове «Перемкни клавіатуру…» — хром рушія, українською. */
  const EN = "en";
  // кирилиця-двійник → латиниця (дзеркало LOOK), коли всі ключі латинські: розкладка не перемкнулася, а на екрані літер не розрізнити
  const LOOK_EN = { "с": "c", "е": "e", "о": "o", "а": "a", "р": "p", "х": "x", "і": "i", "у": "y", "к": "k", "м": "m", "т": "t", "н": "h", "в": "b",
    "С": "C", "Е": "E", "О": "O", "А": "A", "Р": "P", "Х": "X", "І": "I", "У": "Y", "К": "K", "М": "M", "Т": "T", "Н": "H", "В": "B" };
  const CYR = /[\u0400-\u04FF]/;
  const KB_MSG = "Перемкни клавіатуру на англійську.", ALMOST = "Almost: check the spelling.";
  /* Британський правопис ключа → американський у відповіді (рішення людини 2026-11-19, §11.2 п. 1): явний список; лише від британського ключа.
     Лексика (flat / apartment) — не тут (TQ-122). ize: -ise/-ize і -isation/-ization — британська оксфордська норма теж (TQ-121), тож
     примітка не називає форму американською. practise / practice не включено: у BrE це різні частини мови. */
  const SPELL = new Map(), IZE = new Set();
  { const add = (b, a, ize) => { SPELL.set(b, a); if (ize) IZE.add(b); };
    for (const w of ["colour", "favour", "neighbour", "honour", "behaviour", "flavour", "harbour", "humour", "labour", "rumour", "armour", "odour", "vapour", "parlour"])
      for (const x of ["", "s", "ed", "ing", "ful", "less", "able", "ite", "ites", "hood", "hoods", "er", "ers"]) add(w + x, w.replace(/our$/, "or") + x);
    for (const w of ["centre", "theatre", "metre", "litre", "kilometre", "centimetre", "millimetre", "fibre", "spectre", "sombre", "calibre", "lustre"])
      for (const x of ["", "s"]) add(w + x, w.replace(/re$/, "er") + x);
    for (const w of ["realis", "organis", "recognis", "apologis", "memoris", "criticis", "emphasis", "summaris", "specialis", "prioritis", "sympathis", "standardis",
      "visualis", "finalis", "categoris", "minimis", "maximis", "modernis", "popularis", "civilis", "personalis", "characteris", "familiaris", "authoris", "energis", "harmonis", "mobilis", "colonis", "fertilis", "hospitalis", "immunis", "industrialis", "globalis", "legalis", "localis", "normalis", "privatis", "socialis", "symbolis", "utilis"])
      for (const x of ["e", "es", "ed", "ing", "er", "ers", "ation", "ations"]) add(w + x, w.replace(/s$/, "z") + x, true);
    for (const w of ["analys", "paralys", "catalys"]) for (const x of ["e", "es", "ed", "ing"]) add(w + x, w.replace(/s$/, "z") + x);
    for (const w of ["travel", "cancel", "label", "level", "model", "quarrel", "signal", "fuel", "dial", "marvel", "tunnel", "total", "counsel", "equal", "jewel", "rival", "shovel", "snorkel", "pedal", "panel"])
      for (const x of ["ed", "ing", "er", "ers"]) add(w + "l" + x, w + x);
    for (const [b, a] of [["jewellery", "jewelry"], ["marvellous", "marvelous"], ["grey", "gray"], ["greys", "grays"], ["programme", "program"], ["programmes", "programs"],
      ["pyjamas", "pajamas"], ["tyre", "tire"], ["tyres", "tires"], ["catalogue", "catalog"], ["catalogues", "catalogs"], ["dialogue", "dialog"], ["dialogues", "dialogs"],
      ["analogue", "analog"], ["defence", "defense"], ["offence", "offense"], ["licence", "license"], ["skilful", "skillful"], ["wilful", "willful"], ["enrol", "enroll"],
      ["fulfil", "fulfill"], ["enrolment", "enrollment"], ["fulfilment", "fulfillment"], ["cosy", "cozy"], ["plough", "plow"], ["mould", "mold"], ["moustache", "mustache"],
      ["aluminium", "aluminum"], ["sceptical", "skeptical"], ["storey", "story"], ["storeys", "stories"], ["kerb", "curb"], ["doughnut", "donut"], ["mum", "mom"],
      ["ageing", "aging"], ["judgement", "judgment"], ["foetus", "fetus"], ["manoeuvre", "maneuver"], ["oestrogen", "estrogen"], ["paediatric", "pediatric"],
      ["encyclopaedia", "encyclopedia"]]) add(b, a); }
  /* скорочення (contractions: true): токен → його повні форми; сам токен лишається варіантом (Kate's — присвійне, а не «Kate is») */
  const CONTR = { "can't": ["cannot", "can not"], "won't": ["will not"], "shan't": ["shall not"], "let's": ["let us"], "ain't": [] };
  function expandTok(t) {
    const lo = t.toLowerCase();
    if (CONTR[lo]) return [t, ...CONTR[lo].map(x => t[0] !== lo[0] ? x[0].toUpperCase() + x.slice(1) : x)];
    let m = t.match(/^(.+)n't$/i); if (m) return [t, m[1] + " not"];
    m = t.match(/^(.+)'(s|re|ve|ll|m|d)$/i); if (!m) return [t];
    const full = { s: ["is", "has"], re: ["are"], ve: ["have"], ll: ["will"], m: ["am"], d: ["would", "had"] }[m[2].toLowerCase()];
    return [t, ...full.map(x => m[1] + " " + x)];
  }
  /** усі прочитання рядка зі скороченнями (≤ 64): кожен токен — оригінал або його повна форма */
  function expandAll(t) {
    let out = [""];
    for (const tok of t.split(" ")) { const alt = expandTok(tok); out = out.flatMap(p => alt.map(a => p ? p + " " + a : a)).slice(0, 64); }
    return out;
  }
  /** нормалізація англійської відповіді: mirror — кирилиця-двійник → латиниця; punct — кінцевий .!? прибрати (ключ без нього) */
  function normEn(v, keepCase, mirror, punct) {
    let t = baseNorm(v);
    if (mirror) t = t.replace(/[\u0400-\u04FF]/g, c => LOOK_EN[c] || c);
    // час (TQ-120): «15.30» = «15:30»; «3.30 p.m.» = «3.30 pm» = «3.30pm» (крапка після m — частина скорочення й кінця речення водночас)
    t = t.replace(/(^|[^\d.:])(\d{1,2})\s?[.:]\s?([0-5]\d)(?![\d.:]\d)/g, "$1$2:$3").replace(/(\d)\s*([ap])\.?\s?m\b\.?/gi, (x, d, ap) => `${d} ${ap.toLowerCase()}m`);
    if (punct) t = t.replace(/\s*[.!?]+$/, "");
    return keepCase ? t : t.toLocaleLowerCase(EN);
  }
  const endsPunct = a => /[.!?]$/.test(baseNorm(a).replace(/(\d)\s*([ap])\.?\s?m\b\.?$/i, "$1 $2m"));
  /** відстань Дамерау — Левенштейна (сусідня перестановка — 1) з ранньою зупинкою: true, якщо ≤ 1 */
  function near1(a, b) {
    if (a === b || Math.abs(a.length - b.length) > 1) return false;
    let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++;
    if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1) || (a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2));
    return a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
  }
  const splitTok = t => { const m = t.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u); return [m[1], m[2], m[3]]; };
  /** ключ k і відповідь v (обидва нормалізовані) збігаються з точністю до американського правопису: масив британських слів ключа або null */
  function spellDiff(k, v) {
    const K = k.split(" "), I = v.split(" ");
    if (K.length !== I.length) return null;
    const out = [];
    for (let j = 0; j < K.length; j++) {
      if (K[j] === I[j]) continue;
      const [kp, kc, ks] = splitTok(K[j]), [ip, ic, is] = splitTok(I[j]);
      if (kp !== ip || ks !== is || SPELL.get(kc.toLowerCase()) !== ic.toLowerCase() || kc[0] !== ic[0]) return null;   // пари мають ту саму першу літеру; її регістр — як у ключі (keepCase)
      out.push(kc);
    }
    return out.length ? out : null;
  }
  const allLatin = s => wordAnswers(s).every(a => !CYR.test(a));
  /** word: вердикт з примітками. lang "en" → { ok, note?, hint?, kb? }; інакше { ok } (як check). note / hint — англійською, kb — українською. */
  function wordVerdict(s, v, lang) {
    if (lang !== EN) return { ok: wordAnswers(s).some(a => { const x = normWord(v, s.keepCase, isCyr(a)); return x !== "" && normWord(a, s.keepCase) === x; }) };
    const keys = wordAnswers(s), mirror = allLatin(s), kc = !!s.contractions;
    if (baseNorm(v) === "") return { ok: false };
    let notes = null, almost = false, kb = false;
    for (const a of keys) {
      const p = !endsPunct(a), kn = normEn(a, s.keepCase, false, false), vn = normEn(v, s.keepCase, mirror, p);
      if (mirror && CYR.test(vn)) { kb = true; continue; }
      const KV = kc ? expandAll(kn) : [kn], IV = kc ? expandAll(vn) : [vn];
      if (KV.some(x => IV.includes(x))) return { ok: true };
      for (const x of KV) for (const y of IV) { const d = spellDiff(x, y); if (d && !notes) notes = d; }
      if (kn.length >= 3 && /\p{L}/u.test(kn) && KV.some(x => IV.some(y => near1(x, y)))) almost = true;
    }
    if (notes) { const ize = notes.filter(w => IZE.has(w.toLowerCase())), rest = notes.filter(w => !IZE.has(w.toLowerCase()));
      return { ok: true, note: [rest.length ? `In British English: ${rest.join(", ")}.` : "", ize.length ? `In British English we usually write ${ize.join(", ")}.` : ""].filter(Boolean).join(" ") }; }
    if (kb) return { ok: false, kb: KB_MSG };
    return almost ? { ok: false, hint: ALMOST } : { ok: false };
  }

  /* ---------- build: речення з плиток (engine-eng-build; docs/design/english.md §5.5) ----------
     Стан — масив індексів плиток у рядку: 0…tiles−1 — tiles, далі extra (buildTiles). Кожен answer складено рівно з tiles (кожна — один раз,
     через пробіл); поза плитками дозволено лише кінцевий .!?… і велику першу літеру речення («usually I…» → «Usually I…», кілька порядків).
     Перевірка: зібране речення проти кожного answer без кінцевого знака; lang "en" — нормалізація wordVerdict (регістр, двійники…),
     інакше — точно, з нормалізацією пробілів і першої літери. */
  const BUILD_MAX = 9, BUILD_EXTRA = 2, B_TAIL = /\s*[.!?…]+$/;
  const sp = v => String(v ?? "").replace(/\s+/g, " ").trim();
  const ucFirst = v => v.charAt(0).toLocaleUpperCase() + v.slice(1);
  const buildTiles = s => [...(Array.isArray(s.tiles) ? s.tiles : []), ...(Array.isArray(s.extra) ? s.extra : [])].map(t => typeof t === "string" ? t : "");
  /** розклад речення a на плитки tiles (кожна рівно раз): масив індексів tiles або null */
  function buildSplit(tiles, a) {
    const T = tiles.map(sp);
    if (!T.length || T.some(t => !t)) return null;
    const one = str => { const used = T.map(() => false), out = [];
      const go = pos => {
        if (pos === str.length) return out.length === T.length;
        const p = out.length ? (str[pos] === " " ? pos + 1 : -1) : pos;
        if (p < 0) return false;
        const tried = new Set();
        for (let k = 0; k < T.length; k++) {
          if (used[k] || tried.has(T[k])) continue;
          const w = !out.length && p === 0 && str.startsWith(ucFirst(T[k])) ? ucFirst(T[k]) : T[k];   // перша плитка — і з великої літери
          if (!str.startsWith(w, p)) continue;
          tried.add(T[k]); used[k] = true; out.push(k);
          if (go(p + w.length)) return true;
          used[k] = false; out.pop();
        }
        return false; };
      return go(0) ? out : null; };
    const v = sp(a);
    return one(v) || (B_TAIL.test(v) ? one(v.replace(B_TAIL, "")) : null);
  }
  const buildText = (s, st) => { const all = buildTiles(s); return Array.isArray(st) ? st.map(k => all[k]).filter(x => typeof x === "string").join(" ") : ""; };
  const buildState = (s, st) => { const n = buildTiles(s).length;
    return Array.isArray(st) && st.length > 0 && new Set(st).size === st.length && st.every(k => Number.isInteger(k) && k >= 0 && k < n); };
  function buildOk(s, st, lang) {
    if (!buildState(s, st)) return false;
    const v = sp(buildText(s, st)).replace(B_TAIL, ""), keys = wordAnswers(s).map(a => sp(a).replace(B_TAIL, ""));
    if (!v) return false;
    if (lang === EN) return wordVerdict({ type: "word", answer: keys, keepCase: s.keepCase }, v, EN).ok;
    return keys.some(k => ucFirst(k) === ucFirst(v));
  }
  /** позначки рядка: позиція правильна, якщо там та сама плитка (за текстом), що в найближчому answer */
  function buildMarks(s, st) {
    const all = buildTiles(s).map(sp), T = (Array.isArray(s.tiles) ? s.tiles : []).map(sp), got = (Array.isArray(st) ? st : []).map(k => all[k]);
    let best = [], bn = -1;
    for (const a of wordAnswers(s)) { const ix = buildSplit(T, a); if (!ix) continue;
      const q = ix.map(k => T[k]), n = got.filter((w, i) => q[i] === w).length; if (n > bn) { bn = n; best = q; } }
    return got.map((w, i) => best[i] === w);
  }
  /** порядок показу плиток (усіх, з extra): перемішано; плитки tiles не стоять у правильному порядку (інакше відповідь уже на екрані) */
  function buildOrder(s, rnd = Math.random) {
    const n = buildTiles(s).length, nt = Array.isArray(s.tiles) ? s.tiles.length : 0, bad = o => buildOk(s, o.filter(k => k < nt), "");
    let o = rowOrder(n, rnd);
    for (let t = 0; t < 12 && bad(o); t++) o = rowOrder(n, rnd);
    for (let r = 1; r < n && bad(o); r++) o = o.slice(1).concat(o[0]);   // детермінований запас: зсув по колу
    return o;
  }
  function buildIssues(s, E) {
    const T = s.tiles, X = s.extra === undefined ? [] : s.extra;
    if (!Array.isArray(T) || T.length < 2) return E.push("build: tiles — масив з 2 і більше плиток");
    if (!Array.isArray(X)) return E.push("build: extra — масив плиток-пасток");
    if (X.length > BUILD_EXTRA) E.push(`build: extra — не більше ${BUILD_EXTRA} плиток-пасток (є ${X.length})`);
    const all = [...T, ...X];
    if (all.length > BUILD_MAX) E.push(`build: забагато плиток (${all.length}; разом з extra — не більше ${BUILD_MAX})`);
    if (all.some(t => typeof t !== "string" || !t.trim())) return E.push("build: плитка — непорожній рядок");
    if (all.some(t => t !== sp(t))) E.push("build: у плитці — без пробілів на краях і подвійних пробілів");
    if (all.some(t => /[<>&$]/.test(t))) E.push("build: у плитці не може бути HTML чи формули ($) — пиши простим текстом");
    if (all.some(mixedScript)) E.push("build: у плитці змішано кирилицю й латиницю");
    if (new Set(T).size === 1) E.push("build: усі плитки однакові — порядок нічого не перевіряє");
    const A = wordAnswers(s);
    if (!A.length || A.length !== (Array.isArray(s.answer) ? s.answer.length : 1)) return E.push("build: answer — рядок або масив рядків (кожен — правильний порядок)");
    for (const a of A) if (!buildSplit(T, a)) E.push(`build: answer «${a}» не складається рівно з плиток tiles (кожна — один раз, через пробіл; пастки extra — ні; поза плитками — лише кінцевий .!? і велика перша літера)`);
    if (new Set(A.map(a => ucFirst(sp(a).replace(B_TAIL, "")))).size !== A.length) E.push("build: answer повторюються");
    if (s.keepCase !== undefined && typeof s.keepCase !== "boolean") E.push("build: keepCase — true/false");
  }
  /** попередження build: пастка extra, яку рушій зарахує (та сама плитка; для lang "en" — інший регістр чи AmE-правопис ключа) */
  function buildWarnings(s, lang, W) {
    const T = Array.isArray(s.tiles) ? s.tiles : [], X = Array.isArray(s.extra) ? s.extra : [];
    if (!X.length || T.length < 2) return;
    const ix = wordAnswers(s).map(a => buildSplit(T, a)).filter(Boolean);
    X.forEach((x, j) => { const xi = T.length + j;
      if (ix.some(q => q.some((k, p) => buildOk(s, q.map((v, i) => i === p ? xi : v), lang))))
        W.push(`build: пастка extra «${x}» на місці плитки дає правильне речення — рушій її зарахує${lang === EN ? " (регістр, AmE-правопис — нормалізація word)" : ""}; візьми іншу пастку`); });
  }

  /** Перевірка відповіді st (стан плеєра) для екрана s. true/false. lang — мова змісту предмета (SLID.subjectLang): "en" вмикає правила word англійською. */
  function check(s, st, lang) {
    switch (s.type) {
      case "gaps": { const g = parseGaps(s.text); return !g.error && Array.isArray(st) && g.gaps.every((x, k) => st[k] === x.correct); }
      case "pick": { const p = parsePick(s.text); if (p.error || !isSet(st)) return false; return p.correct.length === st.size && p.correct.every(n => st.has(n)); }
      case "stress": { const ws = (s.words || []).map(parseStress); return ws.every(w => !w.error) && Array.isArray(st) && ws.every((w, k) => st[k] === w.correct); }
      case "word": return wordVerdict(s, st, lang).ok;
      case "split": { const p = parseSplit(s.word, s.zero); return !p.error && isSet(st) && p.variants.some(c => sameCuts(c, [...st])); }
      case "build": return buildOk(s, st, lang);
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
      case "build": return buildSplit(Array.isArray(s.tiles) ? s.tiles : [], wordAnswers(s)[0]);
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
        if (s.contractions !== undefined && typeof s.contractions !== "boolean") E.push("word: contractions — true/false");
        if (s.keys !== undefined && !(Array.isArray(s.keys) && s.keys.every(k => typeof k === "string" && k.length >= 1 && k.length <= 3))) E.push("word: keys — масив коротких рядків (1–3 символи)");
        break; }
      case "split": { if (s.zero !== undefined && typeof s.zero !== "boolean") { E.push("split: zero — true/false"); break; }
        const p = parseSplit(s.word, s.zero); if (p.error) E.push("split: " + p.error); break; }
      case "build": buildIssues(s, E); break;
    }
    return E;
  }

  /** Відрізки [початок, кінець) вмісту авторських <span class="gw">…</span> (з урахуванням вкладених span) у рядку з тегами */
  function gwRanges(src) {
    const R = [], stack = [];
    for (const m of src.matchAll(/<(\/?)span\b([^>]*)>/gi))
      if (!m[1]) stack.push(/\bclass\s*=\s*["'](?:[^"']*\s)?gw(?:\s[^"']*)?["']/i.test(m[2]) ? m.index + m[0].length : -1);
      else if (stack.length) { const a = stack.pop(); if (a >= 0) R.push([a, m.index]); }
    return R;
  }
  const BLOCK_TAG = /<\/?(?:p|br|hr|li|ul|ol|div|h[1-6]|table|thead|tbody|tr|td|th|blockquote|section|figure|figcaption|dl|dt|dd)\b[^>]*>/gi;
  /** Попередження розмітки (не ламають екран, але підказують відповідь чи плутають дитину): масив рядків. Розмітка з помилкою — [] (її дає issues).
      lang — мова змісту предмета (як у check): build зважає на неї, коли шукає пастку, яку рушій зарахує */
  function warnings(s, lang) {
    const W = [];
    if (s.type === "build") buildWarnings(s, lang, W);
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
      // розрив усередині авторського <span class="gw">…</span> (nowrap, як обгортка плеєра) — не попередження: рядок там не переноситься
      // (tools-euphony-z-validate-gw п. 2: транскрипції «[ди́ви<sup>е</sup>{…}а]» у pu10s4)
      if (!g.error) { const src = String(s.text).replace(/\{[^}]*\}/g, "\u0001").replace(BLOCK_TAG, " "), gw = gwRanges(src);
        for (const m of src.matchAll(/(?:[\p{L}\p{M}'’ʼ\u0001-]|<[^>]*>)*\u0001(?:[\p{L}\p{M}'’ʼ\u0001-]|<[^>]*>)*/gu))
          if ([...m[0].matchAll(/[\p{L}\u0001](?=((?:<[^>]*>)+)[\p{L}\u0001])/gu)].some(b => { const i = m.index + b.index, e = i + b[0].length + b[1].length + 1;
            return !gw.some(([a, z]) => a <= i && e <= z); })) { W.push(`gaps: слово з пропуском розірване HTML-тегом («${m[0].replace(/^(?:<[^>]*>)+|(?:<[^>]*>)+$/g, "").replace(/\u0001/g, "{…}")}») — рядок може перенестися посеред слова; обгорни тегом усе слово або винеси тег за його межі`); break; } } }
    return W;
  }
  const TYPES = ["gaps", "pick", "stress", "word", "split", "build"];
  /** Текст вправи, який дитина читає (для метрик stats/validate): пропуски — правильним варіантом, без дужок і «+» */
  function readText(s) {
    // «—» / «–» замінюємо, лише коли варіант цілком дорівнює токену: «1–2», «», —» лишаються як є (engine-lang-dash P3-1)
    if (s.type === "gaps" && typeof s.text === "string") return s.text.replace(/\{([^}]*)\}/g, (m, x) => { const o = (x.split("|").find(o => o.trim().startsWith("*")) || "").replace(/^\s*\*/, "").trim();
      return o === NONE ? "" : o === DASH ? "\u2014" : o; });
    if (s.type === "pick" && typeof s.text === "string") return s.text.replace(/\[\s*!\s*/g, "[").replace(/[[\]]/g, "");
    if (s.type === "stress" && Array.isArray(s.words)) return s.words.join(", ").replace(/[+|]/g, "");
    if (s.type === "split") return [].concat(s.word)[0]?.replace?.(/\|/g, "") || "";
    if (s.type === "build") return wordAnswers(s)[0] || "";
    return "";
  }
  window.SLID_LANG = { TYPES, warnings, readText, NONE, DASH, optView, gapOrder, rowOrder, isVowel, parseGaps, parsePick, parseStress, parseSplit, splitShow, normWord, wordInput, wordAnswers, wordVerdict, check, solution, issues, sameCuts, buildTiles, buildText, buildMarks, buildOrder };
})();
