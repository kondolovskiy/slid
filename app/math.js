/* Слід — мініпарсер шкільних формул. Без залежностей, працює офлайн. */
(() => {
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const COMMANDS = new Set(["sqrt","frac","dfrac","vec","overrightarrow","mathbb","text","begin","end","cdot","times","infty","ge","geq","le","leq","neq","ne","pm","to","rightarrow","leftrightarrow","parallel","perp","angle","triangle","Delta","alpha","pi","circ","in","cup","varnothing","sim","ldots","dots","quad","qquad","left","right","log","ln","sin","cos","tan","lim","int"]);
const SYMBOL = { cdot:"·", times:"×", infty:"∞", ge:"≥", geq:"≥", le:"≤", leq:"≤", neq:"≠", ne:"≠", pm:"±", to:"→", rightarrow:"→", leftrightarrow:"↔", parallel:"∥", perp:"⊥", angle:"∠", triangle:"△", Delta:"Δ", alpha:"α", pi:"π", circ:"°", in:"∈", cup:"∪", varnothing:"∅", sim:"∼", ldots:"…", dots:"…" };
const FN = new Set(["log","ln","sin","cos","tan","lim","int"]);
const SUBDIGIT = /[₀₁₂₃₄₅₆₇₈₉]/;
const TOK = /\\[A-Za-z]+|\\[,;:! ]|\\\\|"[^"]*"|\((?:[^()]|\([^()]*\))*\)|\d{1,3}(?:[  ]\d{3})+(?:,\d+)?(?!\d)|\d+(?:,\d+)?|[a-zA-Z]|[₀₁₂₃₄₅₆₇₈₉]|[{}_[\]&]|\?|~|\/|\*|:|\^|<|>|=|≈|≠|≤|≥|\+|-|\s+|[^\s]/g;

function tokenize(src) { return String(src).match(TOK) || []; }
function isAtomToken(t) { return !!t && (/^\(.*\)$/.test(t) || /^\d/.test(t) || /^[a-zA-Z?]$/.test(t) || SUBDIGIT.test(t)); }
function atomHTML(t, inFrac) {
  if (/^\(.*\)$/.test(t)) return inFrac ? mathHTML(t.slice(1, -1)) : `(${mathHTML(t.slice(1, -1))})`;
  if (/^[a-zA-Z]$/.test(t)) return `<i class="mv">${t}</i>`;
  if (t === "?") return '<span class="mq">?</span>';
  if (SUBDIGIT.test(t)) return `<sub class="mp">${t}</sub>`;
  return /^\d/.test(t) ? t.replace(/ /g, "\u202f") : esc(t);
}
function group(tokens, state, open = "{", close = "}") {
  while (/^\s+$/.test(tokens[state.i] || "")) state.i++;
  if (tokens[state.i] !== open) return null;
  state.i++;
  const start = state.i; let depth = 1;
  while (state.i < tokens.length && depth) {
    if (tokens[state.i] === open) depth++;
    else if (tokens[state.i] === close) depth--;
    state.i++;
  }
  return tokens.slice(start, state.i - 1);
}
function rawGroup(tokens, state, open = "{", close = "}") { const g = group(tokens, state, open, close); return g ? g.join("") : ""; }
function parsedGroup(tokens, state) { const g = group(tokens, state); return g ? render(g) : ""; }
function nextUnit(tokens, state) {
  while (/^\s+$/.test(tokens[state.i] || "")) state.i++;
  const g = group(tokens, state); if (g) return render(g);
  const t = tokens[state.i++]; return t == null ? "" : render([t]);
}
function command(tokens, state, name) {
  if (/^[,;:! ]$/.test(name)) return { html:'<span class="mspace thin"></span>', atom:false };
  if (SYMBOL[name]) return { html: SYMBOL[name], atom: !["cdot","times","ge","geq","le","leq","neq","ne","pm","to","rightarrow","leftrightarrow","parallel","perp","in","cup","sim"].includes(name) };
  if (name === "quad" || name === "qquad") return { html:`<span class="mspace ${name}"></span>`, atom:false };
  if (name === "left" || name === "right") return { html:"", atom:false };
  if (name === "sqrt") {
    let idx = ""; const save = state.i; const g = group(tokens, state, "[", "]"); if (g) idx = render(g); else state.i = save;
    const body = parsedGroup(tokens, state);
    return { html:`<span class="sqrt">${idx ? `<sup class="root-index">${idx}</sup>` : ""}<span class="radicand">${body}</span></span>`, atom:true };
  }
  if (name === "frac" || name === "dfrac") {
    const nu = parsedGroup(tokens, state), de = parsedGroup(tokens, state);
    return { html:`<span class="fr"><span class="nu">${nu}</span><span class="sr">/</span><span class="de">${de}</span></span>`, atom:true };
  }
  if (name === "vec" || name === "overrightarrow") return { html:`<span class="mover">${nextUnit(tokens, state)}</span>`, atom:true };
  if (name === "mathbb") return { html:`<span class="mbb">${esc(rawGroup(tokens, state))}</span>`, atom:true };
  if (name === "text") return { html:`<span class="mt">${esc(rawGroup(tokens, state).trim())}</span>`, atom:true };
  if (FN.has(name)) return { html:`<span class="mfn">${name === "int" ? "∫" : name}</span>`, atom:true };
  return { html:`<span class="munknown">\\${esc(name)}</span>`, atom:false };
}
function render(tokens) {
  const state = { i:0 }, units = []; let operand = false;
  const push = (html, atom = false) => { units.push({ html, atom }); operand = atom; };
  const OPS = {"*":"·","-":"−","+":"+","=":"=",":":":","<":"&lt;",">":"&gt;","≈":"≈","≠":"≠","≤":"≤","≥":"≥"};
  while (state.i < tokens.length) {
    const t = tokens[state.i++];
    if (/^\s+$/.test(t) || t === "~") continue;
    if (t === "\\\\") { push('<br class="mline">'); continue; }
    if (t === "&") continue;
    if (t === "{" || t === "}") { push(esc(t)); continue; }
    if (t[0] === "\\") {
      const name = t.slice(1);
      if (name === "begin") { rawGroup(tokens, state); continue; }
      if (name === "end") { rawGroup(tokens, state); continue; }
      const u = command(tokens, state, name); push(u.html, u.atom); continue;
    }
    if ((t === "^" || t === "_") && units.length) {
      const h = nextUnit(tokens, state);
      if (t === "^" && /^(?:°|<span[^>]*>°<\/span>)$/.test(h)) units.push({ html:"°", atom:true });
      else units.push({ html:`<${t === "^" ? "sup" : "sub"} class="mp">${h}</${t === "^" ? "sup" : "sub"}>`, atom:true });
      operand = true; continue;
    }
    if (t[0] === '"') { push(`<span class="mt">${esc(t.slice(1,-1))}</span>`, true); continue; }
    if (isAtomToken(t) && tokens[state.i] === "/" && isAtomToken(tokens[state.i + 1])) {
      push(`<span class="fr"><span class="nu">${atomHTML(t,true)}</span><span class="sr">/</span><span class="de">${atomHTML(tokens[state.i + 1],true)}</span></span>`, true); state.i += 2; continue;
    }
    if ((t === "-" || t === "+") && !operand) { push(`<span class="mu">${OPS[t]}</span>`); continue; }
    if (OPS[t]) { push(`<span class="mo">${OPS[t]}</span>`); continue; }
    push(isAtomToken(t) ? atomHTML(t, false) : esc(t), isAtomToken(t) || t === ")" || t === "°" || t === "%");
  }
  return units.map(x => x.html).join("");
}
function casesHTML(src) {
  const body = src.replace(/^\s*\\begin\{cases\}/, "").replace(/\\end\{cases\}\s*$/, "");
  const rows = body.split(/\\\\/).map(row => row.split("&").map(x => mathHTML(x.trim())));
  return `<span class="mcases"><span class="case-brace">{</span><span class="case-rows">${rows.map(c => `<span>${c.join('<span class="mspace quad"></span>')}</span>`).join("")}</span></span>`;
}
function mathHTML(src) { const s = String(src); return /\\begin\{cases\}/.test(s) ? casesHTML(s) : render(tokenize(s)); }
const fmt = s => String(s ?? "").replace(/\$\$([\s\S]+?)\$\$/g, (_,m) => `<span class="mblock">${mathHTML(m)}</span>`).replace(/\$([^$]+)\$/g, (_,m) => `<span class="m">${mathHTML(m)}</span>`);
window.SLID_MATH = { mathHTML, fmt, commands: COMMANDS };
})();
