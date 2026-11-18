// Слід · правила змісту для validate.mjs (tools-content-checks-p3, 18.11). Усе — ПОПЕРЕДЖЕННЯ: евристики за текстом і будовою екрана.
// Кожна функція чиста: бере екран / урок / розділ і повертає масив повідомлень (рядків). Виклики — у tools/validate.mjs; тести —
// tools/test-content-checks.mjs. Кожне правило спершу прогнане на всьому змісті, евристику звужено до майже нуля хибних спрацювань
// (кількості й приклади — у нотатках задачі tools-content-checks-p3).
import { plain } from "./lib.mjs";

// ---- спільне ----
/** Тексти екрана, які бачить учень: [поле, рядок]. Без id, sk, img, svg, fig, lab, pre, u (службові й не текст). */
export function screenTexts(s) {
  const out = [], add = (k, v) => { if (typeof v === "string" && v.trim()) out.push([k, v]); };
  for (const k of ["eyebrow", "title", "body", "fbTitle", "fbText", "fbOk", "fbBad", "hint", "cap", "reveal", "text"]) add(k, s[k]);
  add("note", typeof s.note === "string" ? s.note : s.note?.text);
  (s.opts || []).forEach((o, i) => add(`opts[${i}]`, o));
  (s.items || []).forEach((it, i) => (Array.isArray(it) ? it.slice(0, 1) : [it]).forEach(x => add(`items[${i}]`, x)));
  (s.steps || []).forEach((x, i) => add(`steps[${i}]`, x));
  return out;
}
const short = t => String(t).replace(/\s+/g, " ").slice(0, 50);
const strip = t => plain(t).replace(/[⁠​-‍]/g, "");

// ---- п. 1: латиниця всередині кириличного слова ----
// «Іпóліто» з латинською ó (знак наголосу) покаже друге слово шрифтом, пошук і озвучення його не впізнають. Слово = літери й комбіновані знаки;
// мішане: є і кирилична, і латинська літера. Формули ($…$) plain() замінює на «Ф»
const MIXED = /[\p{L}\p{M}]+/gu;
export function mixedScriptWords(t) {
  return (strip(t).match(MIXED) || []).filter(w => /\p{Script=Cyrillic}/u.test(w) && /\p{Script=Latin}/u.test(w));
}
export function latinInCyrillic(s) {
  const out = [];
  for (const [k, v] of screenTexts(s)) { const w = [...new Set(mixedScriptWords(v))]; if (w.length) out.push(`${k}: латиниця всередині кириличного слова: ${w.map(x => `«${x}»`).join(", ")} (код ${[...w[0]].filter(c => /\p{Script=Latin}/u.test(c)).map(c => "U+" + c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")).join(" ")}) — заміни літерою кирилиці`); }
  return out;
}

// ---- п. 9: службовий id у тексті для учня ----
export const SERVICE_ID = /\b(?:w|g|u)[0-9]+s[0-9]+(?:l[0-9]+)?\b/;
export function serviceIds(s) {
  const out = [];
  for (const [k, v] of screenTexts(s)) { const m = plain(v).match(SERVICE_ID); if (m) out.push(`${k}: службовий id «${m[0]}» у тексті для учня — назви урок чи розділ словами`); }
  return out;
}
/** Те саме для полів уроку: title, why, outro. */
export function serviceIdsLesson(l) {
  return [["title", l.title], ["why", l.why], ["outro.text", l.outro?.text], ...(l.outro?.learned || []).map((x, i) => [`outro.learned[${i}]`, x])]
    .flatMap(([k, v]) => { const m = typeof v === "string" && plain(v).match(SERVICE_ID); return m ? [`${k}: службовий id «${m[0]}» у тексті для учня`] : []; });
}

// ---- п. 10: оцінюваний choice/multi без питання ----
export const ASK_RE = /\?|(?<![\p{L}])(?:обери|оберіть|вибери|виберіть|познач|позначте|визнач|вкажи|знайди|встанови|віднови|зістав|розклади|допиши|заверши|постав)(?![\p{L}])/iu;
// наказові звороти «Обери / Познач / Розклади…» і ширше: «Вибери», «Оціни», «Скажи», «Порівняй», «Розстав», «Назви»… — дитині сказано, що робити
const ASK_WIDE = /(?<![\p{L}])(?:обер\p{L}*|вибер\p{L}*|вибир\p{L}*|позна\p{L}*|визна\p{L}*|вкаж\p{L}*|знайд\p{L}*|встанов\p{L}*|віднов\p{L}*|зістав\p{L}*|розклад\p{L}*|розстав\p{L}*|допиш\p{L}*|заверш\p{L}*|постав\p{L}*|оціни\p{L}*|скаж\p{L}*|порівня\p{L}*|назви\p{L}*|поясн\p{L}*|відпов\p{L}*|вирішуй\p{L}*|продовж\p{L}*|добер\p{L}*|підбер\p{L}*|відшукай\p{L}*|з'ясуй\p{L}*|викрес\p{L}*|укаж\p{L}*|пригадай\p{L}*|придума\p{L}*|розкри\p{L}*|спрост\p{L}*|округл\p{L}*|розв['’]яж\p{L}*|запиш\p{L}*|скорот\p{L}*|помнож\p{L}*|перемнож\p{L}*|обчисл\p{L}*|перебуд\p{L}*|об['’]єдн\p{L}*|скористай\p{L}*|подума\p{L}*|перевір\p{L}*|зроб\p{L}*|виконай\p{L}*|порахуй\p{L}*|склад\p{L}*|підстав\p{L}*|поділ\p{L}*|розбер\p{L}*|уяв\p{L}*|згада\p{L}*|прочита\p{L}*|подив\p{L}*|скільки|який|яка|яке|які|якого|якій|яких|яким|чому|чи|що|хто|де|коли|навіщо|куди|звідки|як)(?![\p{L}])/iu;
export function choiceNoQuestion(s) {
  if (!["choice", "multi"].includes(s.type) || s.poll || s.hyp) return [];
  const raw = [s.title, s.body].filter(x => typeof x === "string").join(" \n "), t = plain(raw);
  // «?» усередині формули ($2x - 5x = ?$) і «…» (незакінчене речення: «245 см — це…») — теж питання
  if (!t.trim() || ASK_RE.test(t) || /\?/.test(raw) || /…|\.\.\./.test(t)) return [];
  if (/(?<![\p{L}])Пригадай(?![\p{L}])/u.test(t)) return [];   // це вже ловить правило link-завдання («Пригадай…» без питання)
  if (ASK_WIDE.test(t)) return [];
  return [`оцінюваний ${s.type} без питання: ні title, ні body не питають і не кажуть, що обрати («${short(t)}…») — додай «?» чи «Обери / Познач …»`];
}

// ---- п. 11: позиційні посилання ----
// «Перший текст», «Перші два записи», «останній рядок» у поясненні до вправи з варіантами/елементами, порядок яких рушій може змінити
// (shuffle у choice/multi/sort, показ order). «варіант» уже ловить OPT_NUM_RE у validate.mjs — тут решта іменників.
const POS_RE = /(?<![\p{L}])(?:[Пп]ерш|[Дд]руг|[Тт]рет|[Чч]етверт|[Оо]станн)\p{L}*\s+(?:(?:два|дві|три|чотири|\d+)\s+)?(?:текст\p{L}*|запис(?:и|ів|ом|ам|ах|і|у)?(?![\p{L}])|рядк\p{L}*|рядок|пункт\p{L}*|твердження|відповід\p{L}*|картк\p{L}*)/u;
export function positionalRefs(s) {
  if (!["choice", "multi", "sort", "order"].includes(s.type)) return [];
  const out = [];
  for (const [k, v] of [["fbText", s.fbText], ["fbBad", s.fbBad], ["fbOk", s.fbOk], ["hint", s.hint]]) {
    const m = typeof v === "string" && plain(v).match(POS_RE);
    if (m) out.push(`${k}: позиційне посилання «${m[0]}» — порядок варіантів може змінитися, назви сам варіант чи зміст`);
  }
  return out;
}

// ---- п. 2, 12: D-016 — правильна відповідь не на одному місці ----
const cnt = (arr) => { const c = {}; arr.forEach(k => c[k] = (c[k] || 0) + 1); return Object.entries(c).sort((a, b) => b[1] - a[1]); };
const graded = s => !s.poll && !s.hyp;
const isPrefix = c => { const a = [...c].sort((x, y) => x - y); return a.every((v, i) => v === i); };
/** Урок: choice (≥ 2, п. 12), поспіль однакові правильні multi (п. 2). Повертає {choice?: [k, n, total], multi?: msg}. */
export function lessonPositionIssues(l, letters) {
  const out = [], scr = l.screens || [];
  const ch = scr.filter(s => s.type === "choice" && graded(s) && Number.isInteger(s.correct));
  if (ch.length >= 2) { const [k, n] = cnt(ch.map(s => s.correct))[0];
    if (n / ch.length > 0.6) out.push({ rule: "choice", msg: `у ${n} з ${ch.length} завдань choice правильний варіант — ${letters[k]}: переставляй варіанти` }); }
  const mu = scr.filter(s => s.type === "multi" && graded(s) && Array.isArray(s.correct));
  for (let i = 1; i < mu.length; i++)
    if (scr.indexOf(mu[i]) - scr.indexOf(mu[i - 1]) <= 2 && JSON.stringify([...mu[i].correct].sort()) === JSON.stringify([...mu[i - 1].correct].sort())) {
      out.push({ rule: "multi", msg: `два multi поспіль мають однакові правильні варіанти (${[...mu[i].correct].sort().map(k => letters[k]).join(", ")}) — переставляй` }); break; }
  return out;
}
/** Розділ (п. 12): > 50 % правильних choice на одній позиції; multi — «правильні = префікс» у > 50 %, «єдиний зайвий на одній позиції» в ≥ 60 %. */
export function sectionPositionIssues(sec, letters) {
  const out = [], scr = (sec.lessons || []).flatMap(l => l.screens || []);
  const ch = scr.filter(s => s.type === "choice" && graded(s) && Number.isInteger(s.correct));
  if (ch.length >= 6) { const [k, n] = cnt(ch.map(s => s.correct))[0];
    if (n / ch.length > 0.5) out.push(`розділ: у ${n} з ${ch.length} завдань choice правильний варіант — ${letters[k]} (> 50 %): переставляй варіанти`); }
  const mu = scr.filter(s => s.type === "multi" && graded(s) && Array.isArray(s.correct) && s.correct.length < (s.opts || []).length);
  if (mu.length >= 4) {
    const pre = mu.filter(s => isPrefix(s.correct)).length;
    if (pre / mu.length > 0.5) out.push(`розділ: у ${pre} з ${mu.length} завдань multi правильні варіанти — перші за порядком (префікс): переставляй варіанти`);
    const one = mu.filter(s => s.opts.length - s.correct.length === 1).map(s => s.opts.findIndex((_, i) => !s.correct.includes(i)));
    if (one.length) { const [k, n] = cnt(one)[0];
      if (n / mu.length >= 0.6) out.push(`розділ: у ${n} з ${mu.length} завдань multi зайвий варіант — ${letters[k]}: переставляй варіанти`); }
  }
  return out;
}

// ---- п. 5: sk уроку лише серед перших 4 вправ пулу ----
// Перша сесія теми — 4 вправи найнижчих рівнів у порядку пулу (pickSession, app/learn.js; test-hyp §10 (а′)). Якщо ВСІ вправи якоїсь sk
// уроку серед цих 4, помилка рівня 1 у першій сесії не отримує перевірки наступного дня: небаченої вправи тієї самої пари (урок, sk) немає
// (pg11m6: g11m6l3 c01–c04 = уся пара func). Попередження: перестав вправи (напр. c05 перед c04) або додай ще вправу тієї sk.
export const POOL_FIRST = 4;
/** pools — пули предмета [{ id, items }]; повертає [{ pool, lesson, sk, ids }] — по одному на пару (урок, sk). */
export function poolFirstSessionIssues(pools) {
  const byL = {};
  for (const p of pools || []) (p.items || []).forEach((it, i) => { if (it && it.lesson) (byL[it.lesson] ||= []).push({ it, i, pool: p.id }); });
  const out = [];
  for (const [lesson, xs] of Object.entries(byL)) {
    if (xs.length <= POOL_FIRST) continue;
    const first = xs.slice().sort((a, b) => (a.it.lvl || 1) - (b.it.lvl || 1) || a.i - b.i).slice(0, POOL_FIRST), fs = new Set(first);
    for (const sk of new Set(first.map(x => x.it.sk || ""))) {
      const mine = xs.filter(x => (x.it.sk || "") === sk);
      // лише коли пара займає більшу частину першої сесії (≥ 3 з 4): одиночна вправа sk в уроці з багатьма sk — звичайна будова (ukr), а не збій
      if (mine.length >= POOL_FIRST - 1 && mine.every(x => fs.has(x)) && mine.some(x => (x.it.lvl || 1) === 1))
        out.push({ pool: first[0].pool, lesson, sk, ids: mine.map(x => x.it.id) });
    }
  }
  return out;
}

// ---- п. 13: заголовок choice підказує відповідь ----
// слово заголовка (≥ 5 літер; основа — слово без двох останніх літер, щоб ловити відмінки) є лише в правильному варіанті, а у хибних немає
const stems = t => [...new Set((strip(t).toLocaleLowerCase("uk").match(/[\p{L}\p{M}'’ʼ-]{5,}/gu) || []).map(w => w.length > 6 ? w.slice(0, w.length - 2) : w.slice(0, 5)))];
export function titleHintsAnswer(s) {
  if (s.type !== "choice" || !graded(s) || !s.title || /\?/.test(s.title) || !Number.isInteger(s.correct) || (s.opts || []).length < 2) return [];
  const ok = strip(s.opts[s.correct]).toLocaleLowerCase("uk"), bad = s.opts.filter((_, i) => i !== s.correct).map(o => strip(o).toLocaleLowerCase("uk"));
  const body = strip(s.body || "").toLocaleLowerCase("uk");
  const hit = stems(s.title).filter(st => ok.includes(st) && !bad.some(o => o.includes(st)) && !body.includes(st));
  return hit.length ? [`заголовок підказує відповідь: «${hit.join("», «")}» є в заголовку й лише в правильному варіанті — переформулюй заголовок`] : [];
}

// ---- п. 14: order 7+ кл., де в усіх пунктах є дата ----
const DATE_ITEM = /\(\s*[^)]*\d{3,4}[^)]*\)|\d{3,4}\s*(?:р\.|рр\.|року|роках)?\s*[—–-]|[—–-]\s*\d{3,4}(?![\d,])|(?:^|\s)\d{3,4}\s*(?:р\.|рр\.|року)(?![\p{L}])/u;
export function orderAllDated(s, grade) {
  if (s.type !== "order" || !(grade >= 7) || !Array.isArray(s.items) || s.items.length < 3) return [];
  const items = s.items.map(i => plain(Array.isArray(i) ? i[0] : i));
  return items.every(t => DATE_ITEM.test(t)) ? [`order ${grade} кл.: усі ${items.length} пунктів мають дату — порядок видно без міркування (style/hist.md «без дати у 7+»)`] : [];
}

// ---- п. 15: show лабораторії з goal підказує відповідь (D-019) ----
const tplStrip = t => String(t).replace(/\{[^{}]*\}/g, " ");
export function labShowLeak(s) {
  const lab = s.lab; if (!lab || s.goal === undefined && !s.lab.goal && !lab.goal) return [];
  const goal = s.goal ?? lab.goal; if (typeof goal !== "string") return [];
  const shows = [].concat(lab.show || []).filter(x => typeof x === "string"), out = [];
  const sol = s.solution ?? lab.solution ?? {};
  for (const x of shows) {
    const lit = plain(tplStrip(x));
    if (/(?<![\p{L}])[Пп]отрібн\p{L}*/u.test(lit)) out.push(`lab.show «${short(x)}»: слово «Потрібно» — показ підказує відповідь завданню (D-019)`);
    for (const v of Object.values(sol)) if (typeof v === "number" && Math.abs(v) >= 2 && new RegExp(`(?<![\\d.,])${String(v).replace(".", "[.,]")}(?![\\d.,])`).test(lit.replace(/[₀-₉⁰-⁹]/g, ""))
      && !new RegExp(`(?<![\\d.,])${String(v).replace(".", "[.,]")}(?![\\d.,])`).test(plain(String(s.title || "") + " " + String(s.body || ""))))
      out.push(`lab.show «${short(x)}»: число ${v} з solution стоїть буквально — показ підказує відповідь (D-019)`);
  }
  return [...new Set(out)];
}

// ---- п. 16: нотація math у show/label ----
/** Значення виразу з шаблону в крайніх точках повзунків (min, start, max; усі комбінації до 3^4): перше, що друкується ≥ 2 знаками. */
function wideValue(L, spec, expr, d) {
  let f, ps; try { f = L.compile(expr, new Set((spec.fns || []).map(x => x.id).filter(Boolean))); ps = L.paramList(spec).filter(p => !p.hide || true); } catch { return null; }
  const cand = ps.map(p => [...new Set([p.min, p.start, p.max])]);
  let combos = [{}];
  ps.forEach((p, i) => { if (i < 4) combos = combos.flatMap(c => cand[i].map(v => ({ ...c, [p.id]: v }))); });
  const base = Object.fromEntries(ps.map(p => [p.id, p.start]));
  for (const c of combos) { try { const v = f(L.makeEnv(spec, { ...base, ...c })), t = L.num(v, d); if (typeof v === "number" && isFinite(v) && t.length >= 2) return t; } catch {} }
  return null;
}
const modelStrings = lab => [...[].concat(lab.show || []), ...Object.values(lab.params || {}).map(p => p?.label), ...Object.values(lab.points || {}).map(p => p?.label)].filter(x => typeof x === "string");
export function labNotation(s, L = null) {
  const lab = s.lab; if (!lab) return [];
  const out = [], all = modelStrings(lab);
  for (const x of all) {
    if (/\|deg\}\s*°/.test(x)) out.push(`lab «${short(x)}»: «|deg}°» дає подвійне «°°» — формат deg уже додає °`);
    for (const m of x.matchAll(/\^\{([^{}|]+)(?:\|([^{}]*))?\}/g)) {
      // «^{n}» — це ШАБЛОН: вираз підставиться числом без дужок, і значення з ≥ 2 знаків («^10», «^−2», «^0,5») покажуться «^1»+«0»;
      // правильно «^{{n|0}}». Дивимось на значення в крайніх точках повзунків: однозначні («^{n}» при n 1…5) — не помилка
      const f = m[2]; if (f !== undefined && !/^\d$/.test(f.trim())) continue;
      if (/^[\s\d.,]+$/.test(m[1])) continue;   // «^{2}» — число, не шаблон
      if (!/[A-Za-z]/.test(m[1])) continue;
      const wide = L && wideValue(L, lab, m[1].trim(), f === undefined ? 2 : +f);
      if (wide) out.push(`lab «${short(x)}»: «^{${m[1]}${f !== undefined ? "|" + f : ""}}» — шаблон без зовнішніх дужок, а значення (${wide}) має ≥ 2 знаки і покажеться «^1»+«…»: пиши ^{{${m[1]}|${f ?? 0}}}`);
    }
  }
  // рушій (app/lab.js, plane) без label друкує id лише коли він схожий на ім'я точки (/^[A-Z]\w?$/): «A», а також «Ap», «R1», «O1» — сирим
  if (lab.kind === "plane") for (const [id, p] of Object.entries(lab.points || {}))
    if (p && p.label === undefined && /^[A-Z]\w$/.test(id)) out.push(`lab.points.${id}: точка без label, id «${id}» не одна велика літера — на моделі підпишеться сирим «${id}»; додай label (індекс у $…$) чи label: false`);
  return out;
}
/** Дріб «$a^2/(…)$» без дужок навколо степеня в чисельнику — у всіх текстах екрана (п. 16.4). */
export function powFracNoParens(s) {
  const out = [];
  for (const [k, v] of [...screenTexts(s), ...(s.lab ? modelStrings(s.lab).map(x => ["lab", x]) : [])]) for (const m of String(v).matchAll(/\$([^$]+)\$/g))
    if (/(?<![)\p{L}\d])[\p{L}\d]\^(?:\{[^{}]+\}|\w)\s*\/\s*\(/u.test(m[1].replace(/"[^"]*"/g, " "))) { out.push(`${k}: «$${short(m[1])}$» — дріб a^2/(…) без дужок навколо степеня в чисельнику; пиши (a^2)/(…)`); break; }
  return out;
}

// ---- п. 17: звертання з родом (D-020) ----
// «ти вже зрозумів / зрозуміла» — рід дитини невідомий. Не чіпаємо курсив (<i>…</i> — приклади), лапки «…» і "…" (цитати, репліки)
// Пропускаємо: репліки діалогу («— Ти вже бачила…», говорить персонаж іншій людині), прикладі-зворотах «що б ти зробила», «яку ти радив»
// (приклади граматики — підрядне означення чи частка «б»): там «ти» — не звертання до учня
const GENDER_RE = /(?<![\p{L}])(?<!(?<![\p{L}])(?:[Щщ]о|[Яя]ку|[Яя]кий|[Яя]ка|[Яя]ке|[Яя]кі|[Щщ]об|[Бб]и?)\s)[Тт]и\s+(?:вже\s+)?\p{L}+(?:в|ла)(?![\p{L}])/u;
const DIALOGUE = /(?:^|[:.!?)\u2060])\s*[—–]\s/;
const unQuote = t => String(t).replace(/<i\b[^>]*>[\s\S]*?<\/i>|<em\b[^>]*>[\s\S]*?<\/em>/gi, " ").replace(/«[^«»]*»/g, " ").replace(/"[^"]*"/g, " ").replace(/„[^“”]*[“”]/g, " ");
export function genderedAddress(s) {
  const out = [];
  for (const k of ["why", "hint", "fbBad", "fbText", "body"]) { const v = s[k]; if (typeof v !== "string") continue;
    const t = plain(unQuote(v).replace(/<\/p>|<br\s*\/?>/gi, ". ")); if (DIALOGUE.test(t)) continue;
    const m = t.match(GENDER_RE); if (m) out.push(`${k}: звертання з родом «${m[0]}» — нейтрально (D-020): «ти вже знаєш», «вийшло»`); }
  return out;
}
