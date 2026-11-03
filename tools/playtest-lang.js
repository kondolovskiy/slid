/* Слід · плейтест мовних вправ (tools/playtest.py підвантажує цей файл у сторінку: add_init_script).
   engine-lang-p3 п. 4 (рев'ю engine-lang-types P3-1): одна завідомо хибна спроба на кожній мовній вправі — гілка помилки в браузері
   (червона позначка, позначка для диктора «неправильно», док «bad»), далі правильна відповідь.
   п. 9 (рев'ю engine-lang-dash P3-2): те, що бачить дитина, перевіряється незалежно від optView — текст кнопок gaps (∅ для «—», тире для «–»),
   aria-label, легенда «∅ — нічого не писати», текст кнопок pick.
   Хибний стан будується з розмітки (parse*), а не з solution: перевіряє плеєр, а не сам розбір. */
(function () {
  const sel = {
    gap: (g, o) => `#stage .gopt[data-g="${g}"][data-o="${o}"]`, pw: n => `#stage .pw[data-w="${n}"]`,
    sv: (w, i) => `#stage .sv[data-w="${w}"][data-i="${i}"]`, cut: c => `#stage .cut[data-c="${c}"]` };
  /** { clicks, fill, undo } — як дати хибну відповідь і що повторно натиснути перед правильною; null — хибного стану немає */
  function wrongPlan(s) {
    const L = window.SLID_LANG;
    if (s.type === "gaps") { const g = L.parseGaps(s.text).gaps;   // перший пропуск — хибний варіант, решта — правильні (кнопка активна, коли обрано все)
      return { clicks: g.map((x, k) => sel.gap(k, k ? x.correct : (x.correct + 1) % x.opts.length)), fill: null, undo: [] }; }
    if (s.type === "pick") { const w = L.parsePick(s.text).words.find(x => !x.ok);
      return w ? { clicks: [sel.pw(w.n)], fill: null, undo: [sel.pw(w.n)] } : null; }
    if (s.type === "stress") { const ws = s.words.map(L.parseStress), v = ws[0].letters.find(l => l.v && l.i !== ws[0].correct);
      return v ? { clicks: ws.map((w, k) => k ? sel.sv(k, w.correct) : sel.sv(0, v.i)), fill: null, undo: [] } : null; }
    // межа поза всіма допустимими поділами: правильна, але неповна межа лишається зеленою (бракує — не червоне), тож червоної позначки не дала б
    if (s.type === "split") { const p = L.parseSplit(s.word), n = [...p.word].length, any = new Set(p.variants.flat());
      for (let c = 1; c < n; c++) if (!any.has(c)) return { clicks: [sel.cut(c)], fill: null, undo: [sel.cut(c)] };
      return null; }
    if (s.type === "word") return L.check(s, "ъъъ") ? null : { clicks: [], fill: "ъъъ", undo: [] };
    return null;
  }
  /** Після хибної спроби: док «bad», є червона позначка, кожна червона — з «неправильно» для диктора. Порожній рядок — усе гаразд */
  function afterWrong() {
    const dock = document.querySelector("#dock"), bad = [...document.querySelectorAll("#stage .is-bad")];
    if (!dock || !/\bbad\b/.test(dock.className)) return `хибну відповідь не позначено як помилку (dock: «${dock && dock.className}»)`;
    if (!bad.length) return "після хибної спроби немає жодної червоної позначки";
    const mute = bad.filter(e => !/: неправильно$/.test(e.getAttribute("aria-label") || ""));
    if (mute.length) return `червона позначка без «неправильно» для диктора: ${mute.map(e => `«${e.getAttribute("aria-label") || e.textContent}»`).join(", ")}`;
    return "";
  }
  /** Що бачить дитина (до відповіді): масив описів розбіжностей */
  function domIssues(s) {
    const L = window.SLID_LANG, out = [];
    if (s.type === "gaps") { const g = L.parseGaps(s.text).gaps;
      g.forEach((x, k) => x.opts.forEach((o, i) => {
        const b = document.querySelector(sel.gap(k, i));
        if (!b) { out.push(`пропуск ${k + 1}: немає кнопки варіанта ${i + 1}`); return; }
        const [text, label] = o === "—" ? ["∅", "нічого не писати"] : o === "–" ? ["—", "тире"] : [o, null];
        if (b.textContent !== text) out.push(`пропуск ${k + 1}: кнопка «${b.textContent}» замість «${text}»`);
        if ((b.getAttribute("aria-label") || null) !== label) out.push(`пропуск ${k + 1}, «${text}»: aria-label «${b.getAttribute("aria-label")}» замість «${label}»`); }));
      const legend = [...document.querySelectorAll("#stage .fix")].some(e => e.textContent.includes("∅ — нічого не писати"));
      if (g.some(x => x.opts.includes("—")) !== legend) out.push(legend ? "легенда «∅» без варіанта «нічого»" : "немає легенди «∅ — нічого не писати»"); }
    if (s.type === "pick") L.parsePick(s.text).words.forEach(w => { const b = document.querySelector(sel.pw(w.n));
      if (!b || b.textContent !== w.v) out.push(`слово ${w.n + 1}: кнопка «${b ? b.textContent : "—"}» замість «${w.v}»`); });
    return out;
  }
  window.__plLang = { wrongPlan, afterWrong, domIssues };
})();
