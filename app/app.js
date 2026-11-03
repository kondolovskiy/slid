/* Слід — рушій застосунку. Не знає нічого про предмети: читає реєстр SLID (app/registry.js),
   який наповнюють файли з content/. Один файл, без залежностей, працює офлайн у WebView.
   Архітектура: docs/ARCHITECTURE.md. Схема контенту: docs/CONTENT_SCHEMA.md. */
(() => {
window.SLID.finalize();
const SUBJ = window.SLID_SUBJECTS;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const course = id => SUBJ.find(c=>c.id===id) || SUBJ[0];
const SOON = window.SLID_SOON || [];
const secsFor = (c, g) => c.sections.filter(x=>x.grade===(g??S.grade));
const lessonsOf = (c, g) => secsFor(c,g).filter(x=>x.lessons).flatMap(x=>x.lessons);
const subjectsFor = g => SUBJ.filter(c=>secsFor(c,g).length);
const GRADES_WITH_CONTENT = [...new Set(SUBJ.flatMap(c=>c.sections.map(x=>x.grade)))];
function findLesson(id){ for(const c of SUBJ) for(let k=0;k<c.sections.length;k++){ const L=c.sections[k].lessons||[]; const i=L.findIndex(l=>l.id===id); if(i>=0) return {c,k,i,l:L[i],sec:c.sections[k]}; } return null; }
/* персоналізація (app/learn.js): тест рівня, план, повторювані помилки */
const LEARN = window.SLID_LEARN;
const LANG = window.SLID_LANG;   // мовні вправи gaps / pick / stress / word / split (app/lang.js)
/* журнал подій (app/evidence.js, docs/EVIDENCE.md): лише читає стан, на потік не впливає; без модуля — заглушка */
const EV = window.SLID_EVIDENCE || { log(){}, observe(){}, newProfile(){} };
const LORD = new Map(); SUBJ.forEach(c=>c.sections.forEach(x=>(x.lessons||[]).forEach(l=>LORD.set(l.id,LORD.size))));
const diagFor = (c, g) => (c.diags||[]).find(d=>d.grade===(g??S.grade));
const planCtx = c => ({ grade:S.grade, diags:c.diags||[], day:dkey(), week:schoolWeek(), sections:secsFor(c).map(x=>({id:x.id,weeks:x.weeks,lessons:(x.lessons||[]).filter(l=>!l.boss).map(l=>l.id)})), hasLesson:id=>{ const f=findLesson(id); return !!f && f.c.id===c.id && f.sec.grade<=S.grade; } });
const activePlan = c => LEARN.planFor(S,c.id,planCtx(c));
const learnCtx = c => {
  const plan=activePlan(c), pre=new Set([...(diagFor(c)?.topics||[]).filter(t=>t.kind!=="cur").flatMap(t=>t.lessons||[]), ...(plan?.steps||[]).map(st=>st.l)]);
  return { ...planCtx(c), hasLesson:id=>{ const f=findLesson(id); return !!f && f.c.id===c.id && f.sec.grade<=S.grade && (f.sec.grade===S.grade || pre.has(id)); }, order:id=>LORD.get(id)??1e9 };
};
const stepsTodo = c => LEARN.todo(activePlan(c)).filter(st=>planCtx(c).hasLesson(st.l));
/* baseline-опори (уроків молодших класів немає): лишаються видимими до повторного тесту, кроками не стають */
const baseTopics = c => { const p=activePlan(c), d=p&&(c.diags||[]).find(x=>x.id===p.diag); return d? (p.base||[]).map(b=>({...b,next:b.next??b.l??null,t:d.topics.find(t=>t.id===b.topic)})).filter(b=>b.t) : []; };
/** Доступний урок, з якого почати навчання класу: next найтерміновішої опори, або перший непройдений відкритий урок того самого розділу. */
const baseStart = c => { for(const b of baseTopics(c)){ const f=b.next&&findLesson(b.next); if(!f||f.c.id!==c.id||f.sec.grade!==S.grade) continue;
  const i=f.sec.lessons.findIndex((l,j)=>!done(l.id)&&unlocked(f.sec,j)); if(i>=0) return f.sec.lessons[i].id; } return null; };
const known = id => { const f=findLesson(id); return !!f && f.sec.grade===S.grade && LEARN.isKnown(S,f.c.id,id,planCtx(f.c)); };
/* тренування: пул задач (SLID.pool) — відкриті лише задачі пройдених тем */
const poolItems = c => LEARN.practiceItems(S,c,planCtx(c));
const poolsFor = c => { const ids=new Set(poolItems(c).map(it=>it.pool.id)); return (c.pools||[]).filter(p=>ids.has(p.id)); };
/* тема тренування відкрита: урок пройдено, або тест рівня показав, що тему знають (pre «ok» чи cur «знайоме» — LEARN.diagOpen,
   рішення людини 2026-11-01), або налагоджувальний перемикач */
const diagOpen = id => { const f=findLesson(id); return !!f && LEARN.diagOpen(S,f.c.id,id,planCtx(f.c)); };
const topicOpen = id => done(id) || S.unlockAll || diagOpen(id);
const openItems = c => poolItems(c).filter(it=>topicOpen(it.lesson));
const pendingDiag = () => subjectsFor().find(c=>{ const d=diagFor(c); return d && !S.diag[d.id]?.done && !S.diagSkip[d.id]; });
function schoolWeek(){ if(S.weekOverride) return S.weekOverride; const now=new Date(); const y=now.getMonth()>=7? now.getFullYear() : now.getFullYear()-1;
  const d0=new Date(y,8,1); d0.setDate(d0.getDate()-((d0.getDay()+6)%7)); return Math.max(1, Math.min(35, Math.floor((now-d0)/(7*864e5))+1)); }

/* ---------- Формули: $…$ у рядку, $$…$$ окремим рядком ---------- */
const { mathHTML, fmt } = window.SLID_MATH;
/* Атрибути (aria-label, title, alt, href): fmt() обробляє вже зібраний HTML-рядок і вставив би
   розмітку формули всередину атрибута. Тому текст зі змісту в атрибут — лише через attr()/urlAttr():
   формули → простий читабельний текст, теги прибрано, «$» заекрановано (&#36; fmt не бачить).
   Назву уроку видно через esc(l.title), тож і в атрибут — attr(esc(l.title)): «a<b» лишається «a<b», а не тегом. */
const SUPC = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","−":"⁻","-":"⁻","+":"⁺","n":"ⁿ","°":"°"};
const SUBC = {"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","₀":"₀","₁":"₁","₂":"₂","₃":"₃","₄":"₄","₅":"₅","₆":"₆","₇":"₇","₈":"₈","₉":"₉","−":"₋","-":"₋","+":"₊"};
const wrapT = x => /^[\p{L}\p{N},.°]+$|^\(.*\)$/u.test(x) ? x : `(${x})`;
function plainNode(n){
  if(n.nodeType===3) return n.nodeValue;
  const kids = el => [...(el?el.childNodes:[])].map(plainNode).join(""), c=n.classList, one = s => n.querySelector(`:scope>${s}`);
  if(n.nodeType===11) return kids(n);
  if(n.nodeType!==1) return "";
  if(n.tagName==="BR") return "; ";
  if(c.contains("mspace")) return " ";
  if(c.contains("case-brace")) return "";
  if(c.contains("case-rows")) return [...n.children].map(plainNode).join("; ");
  if(c.contains("mo")) return ` ${kids(n)} `;
  if(c.contains("m")||c.contains("mblock")) return kids(n).replace(/\s*([≤≥≠→↔∈∪∼⊥∥×])\s*/g," $1 ");
  if(c.contains("fr")) return `${wrapT(kids(one(".nu")).trim())}/${wrapT(kids(one(".de")).trim())}`;
  if(c.contains("sqrt")){ const ix=one(".root-index"), i=ix? kids(ix).trim() : "";
    return (i? ([...i].every(ch=>SUPC[ch])? [...i].map(ch=>SUPC[ch]).join("") : `корінь ${i}-го степеня з `) : "")+"√"+wrapT(kids(one(".radicand")).trim()); }
  if(c.contains("mover")) return `вектор ${kids(n).trim()}`;
  if(n.tagName==="SUB"){ const v=kids(n).trim(); return [...v].every(ch=>SUBC[ch])? [...v].map(ch=>SUBC[ch]).join("") : v; }   // x₁, log₂; x_{AB} → xAB
  if(n.tagName==="SUP"){ const v=kids(n).trim(); return [...v].every(ch=>SUPC[ch])? [...v].map(ch=>SUPC[ch]).join("") : `^${wrapT(v)}`; }
  return kids(n);
}
const plainText = s => { const t=document.createElement("template"); t.innerHTML=fmt(s); return plainNode(t.content).replace(/\s+/g," ").trim(); };
const attr = s => esc(plainText(s??"")).replace(/\$/g,"&#36;");
// лише http(s): javascript:, data: тощо не потрапляють у href навіть зі змісту з неперевіреного джерела
const urlAttr = u => { const s=String(u??"").trim(); return /^https?:\/\//i.test(s)? esc(s).replace(/\$/g,"%24") : "#"; };

/* ---------- Іконки ---------- */
const P = {
  pot:'<path d="M9 3h6M10 3v3c-3 1.2-5 3.8-5 7 0 4 3 8 7 8s7-4 7-8c0-3.2-2-5.8-5-7V3"/><path d="M6 12c2 1.5 4 1.5 6 0s4-1.5 6 0"/>',
  rings:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/>',
  line:'<path d="M3 12h18"/><circle cx="6" cy="12" r="2"/><circle cx="13" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M6 6v2M13 16v2M19 6v2"/>',
  scroll:'<path d="M7 4h11a2 2 0 0 1 2 2v1h-4"/><path d="M16 7v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h10"/><path d="M7 4a2 2 0 0 0-2 2v11"/><path d="M8 9h5M8 13h5"/>',
  voice:'<path d="M4 12a8 8 0 0 1 8-8"/><path d="M4 12a8 8 0 0 0 8 8c1.5 0 2.5-.5 3.5-1.5L20 20l-1.5-4.5C19.5 14.5 20 13.5 20 12a8 8 0 0 0-8-8"/><path d="M9 10h6M9 14h4"/>',
  star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  check:'<path d="M4 12.5l5 5L20 6.5"/>',
  flame:'<path d="M12 22c4 0 7-3 7-7 0-3-2-5.5-3.5-7-.3 2-1.5 3-2.5 3 0-3-1.5-6-4-8 0 3-4 6-4 12 0 4 3 7 7 7z"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  path:'<path d="M6 20c0-4 12-4 12-8S6 8 6 4"/><circle cx="6" cy="4" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="20" r="2"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  spiral:'<path d="M12 12a1.5 1.5 0 1 1 1.5 1.5a3.5 3.5 0 1 1-3.5-3.5a5.5 5.5 0 1 1 5.5 5.5a7.5 7.5 0 0 1-7.5-7.5"/>',
  frac:'<circle cx="12" cy="5.5" r="1.8"/><path d="M5 12h14"/><circle cx="12" cy="18.5" r="1.8"/>',
  pizza:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="15" r="1"/>',
  scale:'<path d="M12 3v18M5 21h14M4 8h16"/><path d="M4 8l-2.5 6a3 3 0 0 0 5 0zM20 8l-2.5 6a3 3 0 0 0 5 0z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.5-5 6.5-5s5.7 1.5 6.5 5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14c2.5 0 4.5 1.3 5 4"/>',
  plus:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
  map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
  river:'<path d="M3 8c3-2 5 2 8 0s5-2 8 0M3 13c3-2 5 2 8 0s5-2 8 0M3 18c3-2 5 2 8 0s5-2 8 0"/>',
  city:'<path d="M3 21h18M5 21V9l7-5 7 5v12"/><path d="M12 4V2M9 21v-5h6v5M9 11h.01M15 11h.01"/>',
  vote:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11l3-7 5 2-2 5M8 16h8"/>',
  flag:'<path d="M5 21V4M5 4h13l-2 4 2 4H5"/>',
  home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  chev:'<path d="M9 5l7 7-7 7"/>',
  play:'<path d="M8 5v14l11-7z"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M9 7h6"/>',
  leaf:'<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19l8-8"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  cake:'<path d="M4 21h16M5 21v-8h14v8M5 16c2 1.5 3.5-1 5 0s3 1.5 5 0 3-1 4 0"/><path d="M12 13V9M12 6.5c-.8-.8-.8-1.8 0-3 .8 1.2.8 2.2 0 3z"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r=".6" fill="currentColor"/>',
};
const ic = (n, cls="") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]||""}</svg>`;
const icF = n => `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

/* ---------- Гейміфікація: правила ---------- */
const LEVELS = [[0,"Новачок"],[60,"Допитливий"],[150,"Шукач"],[270,"Знавець"],[420,"Дослідник"],[600,"Майстер"],[850,"Мудрець"],[1150,"Легенда"]];
const DAILY_GOAL = 40;
const GLOBAL_BADGES = [
  { id:"first",   name:"Перший слід",     icon:"spiral", desc:"Пройти перший урок" },
  { id:"perfect", name:"Бездоганно",      icon:"shield", desc:"Урок без жодної помилки" },
  { id:"combo5",  name:"Комбо ×5",        icon:"flame",  desc:"5 правильних відповідей поспіль" },
  { id:"streak3", name:"Три дні поспіль", icon:"bolt",   desc:"Займатися 3 дні поспіль" },
  { id:"multi",   name:"Два світи",       icon:"users",  desc:"Пройти урок з кожного предмета" }
];
const BADGES = GLOBAL_BADGES.concat(...SUBJ.map(c=>c.badges||[]));

/* ---------- Стан (зберігається на пристрої) ---------- */
const KEY = "slid.v1";
const fresh = () => ({ name:"", grade:null, weekOverride:null, theme:"system", subject:SUBJ[0].id, unlockAll:false, xp:0, lessons:{}, days:{}, streak:{count:0,last:null}, badges:{}, skills:{}, polls:{}, bestCombo:0, diag:{}, diagRun:{}, diagRunRev:{}, diagSkip:{}, plan:{}, planByGrade:{}, mast:{}, errs:[], skw:{}, srs:{}, seen:{} });
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch(e) {}
// стан тіні гіпотез (slid.hyp) читається до boot: boot.hyp — що тінь завантажить (store: 0 — localStorage недоступний; open — скільки відкритих
// гіпотез у збереженому стані, null — стану немає), HYPS нижче бере той самий запис. Реплей бачить втрату стану між завантаженнями
// прямо, а не з hyp_open (docs/design/diag-hypothesis-math.md §9 п. 34). Без app/hyp.js чи математики поля немає
const HYP0 = (() => { if (!window.SLID_HYP || !SUBJ.some(c=>c.id==="math")) return null; let raw = null, st = null;
  try { raw = localStorage.getItem("slid.hyp"); } catch(e) { return { store:0, st:null }; }
  try { st = JSON.parse(raw || "null"); } catch(e) {} return { store:1, st: st && st.v === 1 ? st : null }; })();
EV.observe(S); EV.log("boot", ()=>({ grade:S.grade, subj:S.subject, lessons:Object.keys(S.lessons||{}).length, diags:Object.keys(S.diag||{}), srs:Object.keys(S.srs||{}).length,
  ...(HYP0 ? { hyp:{ store:HYP0.store, open: HYP0.st ? (Array.isArray(HYP0.st.open) ? HYP0.st.open.length : 0) : null } } : {}) }));
// квоти бракує — спершу звільнити місце копією черги журналу й станом гіпотез (docs/EVIDENCE.md, slid.hyp): прогрес slid.v1 важливіший
// за незаписані події й тіньові гіпотези. Потім — стан гіпотез (лише після slid.v1 і лише якщо slid.v1 записано; HYPS нижче)
let hypAfterSave = () => {};
const save = () => { let squeezed=false; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) { squeezed=true; try { localStorage.removeItem("slid.evidence.pending"); localStorage.removeItem("slid.hyp"); localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} } EV.observe(S); hypAfterSave(squeezed); };
try { const fx=JSON.stringify(S.skFix); if (LEARN.migrateSk(S) || JSON.stringify(S.skFix)!==fx) save(); } catch(e) {}   // позначка міграції зберігається й без перенесених записів (рев'ю P3-2); sk, узгоджені з уроками 2026-10-31, — у журналі помилок (learn.js, SK_RETAG)
// розпочатий до нової редакції тесту: вердикти замінених завдань відкидаються, решта й порядок лишаються (learn.js, resumeDiag)
try { let ch=false; for (const c of SUBJ) for (const d of c.diags||[]) if (Object.keys(S.diagRun?.[d.id]||{}).length && LEARN.resumeDiag(S,d).dropped.length) ch=true; if (ch) save(); } catch(e) {}

const dkey = (d=new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const addDays = (d,n) => { const x=new Date(d); x.setDate(x.getDate()+n); return x; };
function liveStreak(){ const t=dkey(), y=dkey(addDays(new Date(),-1)); return (S.streak.last===t || S.streak.last===y) ? S.streak.count : 0; }
function touchStreak(){ const t=dkey(), y=dkey(addDays(new Date(),-1)); if (S.streak.last===t) return; S.streak.count = S.streak.last===y ? S.streak.count+1 : 1; S.streak.last = t; }
function levelOf(xp){ let i=0; while(i+1<LEVELS.length && xp>=LEVELS[i+1][0]) i++; const cur=LEVELS[i][0], nxt=LEVELS[i+1]?.[0]; return { n:i+1, title:LEVELS[i][1], cur, nxt, pct: nxt? (xp-cur)/(nxt-cur) : 1 }; }
function addXp(n){ S.xp+=n; const k=dkey(); S.days[k]=(S.days[k]||0)+n; }
const done = id => !!S.lessons[id]?.done;
const unlocked = (sec,i) => S.unlockAll || i===0 || done(sec.lessons[i-1].id) || known(sec.lessons[i].id) || known(sec.lessons[i-1].id);
function award(id, list){ if(!S.badges[id]){ S.badges[id]=dkey(); list.push(id); } }
const skey = (c,k) => c.id+"."+k;

/* ---------- Гіпотези «обчислення чи поняття» (app/hyp.js), тіньовий режим E2 ----------
   docs/design/diag-hypothesis-math.md §2.3, §3.3. Лише математика. Трекер отримує дані спроби з app.js напряму (не з журналу): виклик
   після setDock (повідомлення дитині вже показане), у try/catch і з бюджетом часу; події hyp_* — через EV.log. Стан — окремий ключ
   localStorage «slid.hyp», пишеться лише після slid.v1 (save) і поступається йому: save() за браку квоти видаляє slid.hyp, а невдалий
   запис slid.hyp видаляє ключ (гіпотези далі — лише в пам'яті, persist: 0). Дитина нічого нового не бачить; slid.v1, record/detect,
   SRS і план від трекера не залежать. Без app/hyp.js — заглушка; без IndexedDB чи app/evidence.js трекер працює (події губляться).
   Події застосунку (не трекера, без rv): hyp_lost — slid.hyp самоочищено, далі persist: 0; hyp_off — тінь вимкнено (виняток чи бюджет),
   slid.hyp видалено, щоб наступне завантаження не почало зі застарілого стану (§9 п. 34). */
const HYPS = (() => {
  const H = window.SLID_HYP, M = SUBJ.find(c=>c.id==="math");
  const off = { on:false, newRun(){}, capture(){ return null; }, answer(){}, screen(){}, lessonEnd(){}, diagEnd(){ return null; }, close(){}, reset(){}, persist(){} };
  if (!H || !M || !HYP0) return off;
  try {   // зламаний чи несумісний app/hyp.js (виняток у tracker() тощо) — заглушка, застосунок працює далі (рев'ю E2, P3-3)
  const HKEY = "slid.hyp", BUDGET_MS = 400;
  const perf = () => { try { return performance.now(); } catch(e) { return 0; } };
  let store = !!HYP0.store;
  const T = H.tracker({ persist: store });
  let on = true, dirty = false, held = false, due = null, runN = 0, scrT = perf(), pres = null;   // held — спробу захоплено, slid.hyp запише answer() (один запис на відповідь); due — n її події answer (hyp_lost)
  const runId = () => `${T.seed}.r${runN}`;   // id сесії плеєра (урок / тренування / тест), унікальний між завантаженнями
  /** Тінь вимкнено до перезавантаження: подія hyp_off і ключ геть — інакше наступне завантаження почало б зі стану до вимкнення
      (застарілий pend), а реплей бачив усі події після (рев'ю engine-hyp-e2-p3, P3-3). */
  const shutdown = why => { if (!on) return; on = false; EV.log("hyp_off", { why }); try { localStorage.removeItem(HKEY); } catch(e) {} };
  /** Виклик трекера: помилка чи перевищений бюджет вимикають тінь до перезавантаження (дитина нічого не помічає). */
  const call = (f, quiet) => { if (!on) return []; const t0 = perf(); let ev = [], err = false;
    try { ev = f() || []; if (!quiet || ev.length) dirty = true; } catch(e) { err = true; ev = []; }
    for (const e of ev) EV.log(e.type, e.d);
    if (err) shutdown("error"); else if (perf() - t0 > BUDGET_MS) shutdown("budget");
    return ev; };
  const presOf = () => pres || (pres = (()=>{ try { return H.preIndex(M); } catch(e) { return {}; } })());
  const poolItem = key => { const [p, id] = String(key).split(":"); const it = (M.pools||[]).find(x=>x.id===p)?.items.find(x=>x.id===id); return it ? { ...it, key, pool:(M.pools||[]).find(x=>x.id===p) } : null; };
  /** Вправа/екран зі змісту за item (pend після перезавантаження); gen — той самий набір за genAt. */
  const resolve = a => { const it = a.item || {};
    if (it.mode === "practice") { const x = poolItem(it.key); return x && x.gen ? (Number.isInteger(a.genAt) ? LEARN.genInstance(x, "", a.genAt) : null) : x; }
    if (it.mode === "diag") return (M.diags||[]).find(d=>d.id===it.l)?.items[it.i] || null;
    const f = findLesson(it.l); return f && f.c.id === "math" ? f.l.screens[it.i] || null : null; };
  const weakLessons = () => { const w = new Set(); for (const d of M.diags||[]) { const r = S.diag?.[d.id]; if (!r || !r.topics) continue;
    for (const t of d.topics||[]) if (r.topics[t.id] === "gap" || r.topics[t.id] === "shaky") (t.lessons||[]).forEach(l=>w.add(l)); } return w; };
  // невдалий запис slid.hyp або квоти забракло для slid.v1: ключ геть і до перезавантаження не пишеться (гіпотези — лише в пам'яті, persist: 0)
  // hyp_lost — для реплею: persist 0 з події n (рев'ю E2-p3 P3-2; tools-diff-answers-p3 P3-3). n — подія журналу, яку трекер ще не обробив
  // (відповідь між capture і answer(): save() стоїть між ними), null — такої немає, persist 0 з самої hyp_lost. Реплей бере n як є,
  // без евристики за порядком подій (docs/design/diag-hypothesis-math.md §9 п. 36)
  const forget = why => { if (store && on) EV.log("hyp_lost", { why, n: due }); store = false; T.setPersist(0); try { localStorage.removeItem(HKEY); } catch(e) {} };
  /** Запис slid.hyp — у бюджеті часу тіні (рев'ю E2, P3-1): довший за BUDGET_MS вимикає тінь, як і виклик трекера. */
  const write = () => {
    if (!on || !store || !dirty) return;
    const t0 = perf();
    try {
      let old = null; try { old = JSON.parse(localStorage.getItem(HKEY) || "null"); } catch(e) {}
      const st = H.mergeState(T.state(), old);
      T.drop(st.closed);   // закриті в іншій вкладці
      localStorage.setItem(HKEY, JSON.stringify(st)); dirty = false;
    } catch(e) { forget("write"); }   // самоочищення: slid.v1 важливіший
    if (perf() - t0 > BUDGET_MS) shutdown("budget");
  };
  // старт: стан з минулих сесій; гіпотези, старші за 7 днів без перевірки, — expired (після boot, як у реплеї)
  if (store && HYP0.st) { try { T.load(HYP0.st, resolve); } catch(e) {} }   // той самий запис, що в boot.hyp
  call(() => T.tick({ t: Date.now(), day: dkey() }), true);   // без змін — без запису на старті
  write();
  // після save(): slid.v1 записано — slid.hyp слідом; квоти забракло (squeezed) — ключ геть до перезавантаження. Якщо спробу вже захоплено
  // (capture → save() → answer()), пише answer(): один запис slid.hyp на відповідь, а не два
  hypAfterSave = squeezed => { if (squeezed) forget("quota"); else if (!held) write(); };
  // перехід зі сторінки: відкладене відкриття (pend) і лічильники — у slid.hyp. Без сховища — відкрити pend лише коли сторінка справді
  // вивантажується (pagehide без bfcache), щоб подія встигла в копію черги журналу; сховану вкладку (visibilitychange) дитина ще може
  // повернути й дати другу спробу — реплей її бачить (рев'ю E2, P3-2)
  const away = gone => { try { if (!on) return; if (store) return write(); if (gone && T.pending) { call(() => T.flush()); if (EV.stash) EV.stash(); } } catch(e) {} };
  try { addEventListener("pagehide", e => away(!e.persisted)); document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") away(false); }); } catch(e) {}
  return {
    get on() { return on; },
    newRun() { runN++; },
    /** Дані спроби на момент EV.log("answer") (до змін S.seen і екрана): s — вправа зі змісту, rec — те, що пише журнал.
        dt — той самий, що в журналі (EV.dt; без журналу — власний від показу екрана), тож S11 у застосунку й реплеї однаковий. */
    capture(s, rec) {
      if (!on || C?.id !== "math" || !rec || rec.verdict === "hyp") return null;
      try {
        const it = rec, mode = it.mode, dg = mode === "diag" ? run?.diag || null : null;
        const ls = dg ? (s.lesson ? [s.lesson] : (dg.topics||[]).find(t=>t.id===s.topic)?.lessons || [L.id]) : [it.l];
        const P = presOf(), pr = [...new Set([...ls.flatMap(l=>P[l]||[]), ...(s.pre? [s.pre] : [])])].filter(l=>!ls.includes(l)), w = weakLessons();
        const raw = it.raw instanceof Set ? [...it.raw].sort((a,b)=>(a>b)-(a<b)) : it.raw && typeof it.raw === "object" ? JSON.parse(JSON.stringify(it.raw)) : it.raw;
        const evDt = EV.dt;
        const a = { s: s._hs || s, item: { mode, l: it.l, i: it.i, key: it.key ?? null, type: it.type, sk: it.sk ?? null, hyp: !!it.hyp }, raw, verdict: it.verdict, try: it.try,
          hint: !!it.hint, final: !!it.final, dt: Number.isFinite(evDt) ? evDt : Math.round(perf() - scrT), t: Date.now(), day: dkey(), lvl: it.key ? (s.lvl ?? null) : null,
          unseen: it.key ? S.seen[it.key] === undefined : undefined, run: runId(), ls, pres: pr, preWeak: pr.some(l=>w.has(l)), done: ls.filter(l=>done(l)), cv: EV.cv ?? null };
        if (s.gv) { a.gv = s.gv; a.genAt = s.genAt; a.genN = s.genN ?? 0; }
        held = true; due = Number.isInteger(EV.n) ? EV.n : null;   // n щойно записаної answer: трекер її ще не бачив
        return a;
      } catch(e) { return null; }
    },
    answer(a) { held = false; if (a) call(() => T.onAnswer(a)); due = null; write(); },
    screen(s) { held = false; due = null; scrT = perf(); if (C?.id === "math") call(() => T.onScreen({ item: evItem(s), t: Date.now(), day: dkey() })); },
    lessonEnd(l, acc) { call(() => T.onLessonEnd({ l, acc, run: runId(), t: Date.now(), day: dkey() })); },   // запис — у save() кінця уроку
    /** Підсумок для diag_end (до EV.log("diag_end")): { skip — «Ще не знаю» цього тесту, rv }; тінь вимкнено — null. Запис — у save() після. */
    diagEnd(id) { if (!on || C?.id !== "math") return null; try { const r = T.onDiagEnd({ diag: id }); dirty = true; return r; } catch(e) { shutdown("error"); return null; } },
    close() { held = false; due = null; call(() => T.flush()); write(); },
    /** «Скинути прогрес»: reset для всіх відкритих — до EV.log("reset") (старий pid), потім ключ геть. */
    reset() { call(() => T.onReset({ t: Date.now(), day: dkey() })); dirty = false; try { localStorage.removeItem(HKEY); } catch(e) {} },
    persist: write
  };
  } catch(e) { hypAfterSave = () => {}; return off; }
})();

/* ---------- Оболонка ---------- */
function applyTheme(subjectId){ const r=document.documentElement; if(S.theme==="system") r.removeAttribute("data-theme"); else r.setAttribute("data-theme",S.theme); if(subjectId) r.dataset.subject=subjectId; else delete r.dataset.subject; }
function renderTop(){
  const st=liveStreak();
  $("#chipStreak").className="chip flame"+(st?"":" off"); $("#chipStreak").innerHTML=icF("flame")+st;
  $("#chipXp").innerHTML=icF("bolt")+S.xp;
  const today=S.days[dkey()]||0, p=Math.min(1,today/DAILY_GOAL), r=14, c=2*Math.PI*r;
  $("#goalRing").innerHTML=`<svg viewBox="0 0 34 34"><circle cx="17" cy="17" r="${r}" fill="none" stroke="var(--line)" stroke-width="4"/><circle cx="17" cy="17" r="${r}" fill="none" stroke="var(--ok)" stroke-width="4" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-p)}" transform="rotate(-90 17 17)"/></svg><span>${p>=1?ic("check"):Math.round(p*100)+"%"}</span>`;
  $("#goalRing").title=`Денна ціль: ${today} з ${DAILY_GOAL} досвіду`;
}
const TABS={path:["Навчання","home"],progress:["Прогрес","chart"],profile:["Профіль","user"]};
let tab="path", nav={v:"home"};
document.querySelectorAll(".tab").forEach(b=>{ const [t,i]=TABS[b.dataset.tab]; b.innerHTML=ic(i)+t; b.onclick=()=>{ if(b.dataset.tab==='path' && tab==='path') nav={v:'home'}; tab=b.dataset.tab; render(); window.scrollTo({top:0}); }; });
function go(n){ nav=n; if(n.id){ S.subject=n.id; save(); } tab='path'; render(); window.scrollTo({top:0}); }
function up(){ if(nav.v==='topic'||nav.v==='practice') go({v:'subject',id:nav.id}); else if(nav.v!=='home') go({v:'home'}); }
function render(){
  applyTheme(tab==="path" && nav.v!=="home" ? nav.id : null); renderTop();
  document.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-current", b.dataset.tab===tab?"page":"false"));
  document.body.classList.toggle("onb-mode", !S.grade);
  if(!S.grade){ $("#view").innerHTML=viewOnboarding(); bindView(); return; }
  $("#view").innerHTML = fmt(tab==="path"? (nav.v==="home"? viewHome() : nav.v==="subject"? viewSubject() : nav.v==="diag"? viewDiag() : nav.v==="plan"? viewPlan() : nav.v==="practice"? viewPractice() : viewTopic()) : tab==="progress"? viewProgress() : viewProfile());
  bindView();
}

/* ---------- Кольори предметів: генеруються з контенту, тож новий предмет не потребує змін у CSS ---------- */
(function subjectCSS(){
  const v=c=>`--accent:${c.accent};--accent-soft:${c.soft};--accent-mid:${c.mid};--accent-ink:${c.ink};`;
  let css="";
  SUBJ.concat(SOON).forEach(x=>{ const Lc=x.colors.light, Dc=x.colors.dark;
    css+=`:root{--c-${x.id}:${Lc.accent}} .s-${x.id}{--c:var(--c-${x.id})}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--c-${x.id}:${Dc.accent}}}
:root[data-theme="dark"]{--c-${x.id}:${Dc.accent}}
`;
    if(Lc.soft) css+=`:root[data-subject="${x.id}"]{${v(Lc)}}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"])[data-subject="${x.id}"]{${v(Dc)}}}
:root[data-theme="dark"][data-subject="${x.id}"]{${v(Dc)}}
`; });
  const el=document.createElement("style"); el.textContent=css; document.head.appendChild(el);
})();

/* ---------- Навчання: предмети → розділи → уроки ---------- */
function starsHtml(n){ return `<div class="stars" aria-label="${n} з 3 зірок">${[0,1,2].map(i=>`<span class="${i<n?"":"off"}">${icF("star")}</span>`).join("")}</div>`; }
function activeSec(c){ const secs=c.sections, ok=x=>x.lessons && x.grade===S.grade; let k=secs.findIndex(x=>ok(x) && !x.lessons.every(l=>done(l.id))); if(k<0) k=secs.findIndex(ok); return k; }
/** «Продовжити» на головній — та сама точка старту, що й у плані: спершу перший невиконаний крок плану (stepsTodo, як рядок
    картки «Твій план»; step — запускається так само, через data-lesson), далі baseline-старт (baseStart), далі перший відкритий
    непройдений урок класу, який тест не позначив «уже вмієш» (known; фінал розділу — лише після всіх його уроків); якщо таких немає — як раніше, перший непройдений активного розділу. */
function nextLesson(c){
  const td=stepsTodo(c), fs=td.length&&findLesson(td[0].l); if(fs) return {c, k:fs.k, sec:fs.sec, i:fs.i, l:fs.l, step:true};
  const bs=baseStart(c), fb=bs&&findLesson(bs); if(fb) return {c, k:fb.k, sec:fb.sec, i:fb.i, l:fb.l};
  for(let k=0;k<c.sections.length;k++){ const sec=c.sections[k]; if(!sec.lessons||sec.grade!==S.grade) continue;
    const i=sec.lessons.findIndex((l,j)=>!done(l.id)&&!known(l.id)&&unlocked(sec,j)&&(!l.boss||sec.lessons.every(x=>x.boss||done(x.id)))); if(i>=0) return {c, k, sec, i, l:sec.lessons[i]}; }
  const k=activeSec(c); if(k<0) return null; const sec=c.sections[k]; const i=sec.lessons.findIndex((l,j)=>!done(l.id)&&unlocked(sec,j)); return i<0? null : {c, k, sec, i, l:sec.lessons[i]}; }
const plural=(n,f)=>{ const a=n%10,b=n%100; return f[a===1&&b!==11?0: a>=2&&a<=4&&(b<10||b>=20)?1:2]; };
const backBtn = label => `<button class="back" type="button" data-up>${ic("back")}<span>${label}</span></button>`;

function viewHome(){
  const nm=S.name? `, ${esc(S.name)}` : "";
  const subs=subjectsFor(), last=subs.find(c=>c.id===S.subject)||subs[0], nx=(last&&nextLesson(last)) || subs.map(nextLesson).find(Boolean);
  const wk=schoolWeek();
  const now=subs.flatMap(c=>secsFor(c).filter(x=>x.weeks && wk>=x.weeks[0] && wk<=x.weeks[1]).map(sec=>({c,sec})));
  return `<div class="stack">
    <div><h1 style="margin-top:2px">Привіт${nm}!</h1><p class="muted" style="margin:4px 0 0">Що вивчаємо сьогодні?</p></div>
    ${subs.map(planOrDiag).join("")}
    ${subs.map(c=>openItems(c).length? practiceEntry(c) : "").join("")}
    ${nx? `<button type="button" class="cont s-${nx.c.id}" ${nx.step? `data-lesson="${nx.l.id}"` : `data-start="${nx.c.id}|${nx.k}|${nx.i}"`}>
        <span class="dot lg s-${nx.c.id}">${ic(nx.l.icon)}</span>
        <span class="grow"><span class="eyebrow">Продовжити · ${nx.c.short}</span><b>${esc(nx.l.title)}</b><span class="muted" style="font-size:13px">${nx.step? `Крок плану · ${nx.sec.grade} клас` : `${esc(nx.sec.title)} · урок ${nx.i+1} з ${nx.sec.lessons.length}`}</span></span>
        <span class="play">${icF("play")}</span></button>` : ""}
    ${now.length? `<div class="card now"><div class="nowhead"><span class="eyebrow">Зараз у школі</span><span class="pill">${S.grade} клас · тиждень ${wk}</span></div>
      ${now.map(({c,sec})=>{ const k=c.sections.indexOf(sec); return sec.lessons
        ? `<button type="button" class="nowrow s-${c.id}" data-jump="${c.id}|${k}"><span class="dot sm s-${c.id}"></span><span class="grow"><span class="muted small">${c.short}</span><b>${esc(sec.title)}</b></span><span class="ready">є уроки</span>${ic("chev","chev")}</button>`
        : `<div class="nowrow s-${c.id}"><span class="dot sm s-${c.id}"></span><span class="grow"><span class="muted small">${c.short}</span><b>${esc(sec.title)}</b></span><span class="muted small">уроки готуються</span></div>`; }).join("")}
    </div>` : ""}
    <div class="eyebrow" style="margin-top:6px">Предмети · ${S.grade} клас</div>
    <div class="subjlist">
      ${subs.map(c=>{ const LS=lessonsOf(c), d=LS.filter(l=>done(l.id)).length, k=activeSec(c);
        return `<button type="button" class="subjcard s-${c.id}" data-subject="${c.id}">
          <span class="dot lg s-${c.id}">${ic(c.icon)}</span>
          <span class="grow"><b>${c.subject}</b><span class="muted small">${S.grade} клас${k>=0?` · зараз: ${esc(c.sections[k].title)}`:""}</span>
          <span class="bar s-${c.id}"><i style="width:${LS.length? d/LS.length*100:0}%"></i></span></span>
          <span class="num muted">${LS.length? d+"/"+LS.length : "план"}</span>${ic("chev","chev")}</button>`; }).join("")}
      ${SOON.map(c=>`<div class="subjcard soon s-${c.id}" aria-disabled="true">
          <span class="dot lg s-${c.id}">${ic(c.icon)}</span>
          <span class="grow"><b>${c.subject}</b><span class="muted small">${c.why}</span></span>
          <span class="pill">скоро</span></div>`).join("")}
    </div>
  </div>`;
}
/* ---------- Тест рівня і персональний план ---------- */
const WHY = { gap:"прогалина з тесту", shaky:"варто закріпити", errors:"повторюються помилки" };
const TST = { ok:["check","засвоєно"], shaky:["bulb","хитко"], gap:["target","прогалина"], known:["check","уже вмієш"], new:["path","попереду"] };
const diagMins = d => Math.max(5, Math.round(d.items.length*0.35));
/** Перерваний запуск тесту рівня поточного класу (зокрема повторний — після завершеного результату). */
const diagPart = c => { const d=diagFor(c); return !!d && Object.keys(S.diagRun[d.id]||{}).length>0; };
/** Запрошення на тест рівня на головній: тест ще не пройдено або його перервано (engine-srs-retest-p3: перерваний повторний тест
    видно на головній поряд із карткою плану, а не лише через «Твій план і тест рівня»). */
function diagInvite(c){
  const d=diagFor(c), part=diagPart(c), was=d&&S.diag[d.id]?.done; if(!d || was&&!part) return "";
  return `<button type="button" class="cont diaginv s-${c.id}" data-diag="${c.id}">
    <span class="dot lg s-${c.id}">${ic("target")}</span>
    <span class="grow"><span class="eyebrow">Тест рівня · ${c.short} · ≈ ${diagMins(d)} хв</span><b>${part?"Продовжити тест":esc(d.title)}</b><span class="muted" style="font-size:13px">${was?"Оновимо твій план":"Складемо план саме для тебе"}</span></span>
    ${ic("chev","chev")}</button>`;
}
/** Картка плану; запрошення до тесту рівня (diagInvite) — коли картки плану немає або тест перервано (тоді обидві). */
const planOrDiag = c => { const pc=planCard(c); return pc&&!diagPart(c)? pc : pc+diagInvite(c); };
function stepRow(st, cls, extra=""){
  const f=findLesson(st.l);
  return `<button type="button" class="${cls} s-${f.c.id}" data-lesson="${st.l}"><span class="dot s-${f.c.id}">${ic(f.l.icon)}</span><span class="grow"><span class="muted small">${WHY[st.why]||""} · ${f.sec.grade} клас</span><b>${esc(f.l.title)}</b>${extra}</span><span class="play sm">${icF("play")}</span></button>`;
}
function baseRow(id){ const f=findLesson(id);
  return `<button type="button" class="nowrow s-${f.c.id}" data-lesson="${id}"><span class="dot s-${f.c.id}">${ic(f.l.icon)}</span><span class="grow"><span class="muted small">з чого почати · ${f.sec.grade} клас</span><b>${esc(f.l.title)}</b></span><span class="play sm">${icF("play")}</span></button>`; }
const baseNames = B => B.map(b=>`«${esc(b.t.title)}»`).join(", ");
function baseBlock(c, withRow=true){
  const B=baseTopics(c); if(!B.length) return ""; const st=baseStart(c);
  return `<div class="rec basegap"><div class="eyebrow">Потренуй з учителем або дорослим</div>
    <p style="margin:0">${B.length>1?"Ці вміння":"Це вміння"} з молодших класів варто потренувати: ${baseNames(B)}. Уроків на ${B.length>1?"них":"нього"} у застосунку поки немає — попроси вчителя або дорослого дати кілька прикладів.${st?` Уроки ${S.grade} класу можна починати вже зараз.`:""}</p>
    ${withRow&&st? baseRow(st) : ""}</div>`;
}
function planCard(c){
  const td=stepsTodo(c);
  if(!td.length){ const B=baseTopics(c); if(!B.length) return ""; const st=baseStart(c);
    return `<div class="card now plancard s-${c.id}"><div class="nowhead"><span class="eyebrow">Твій план · ${c.short}</span><span class="pill">${B.length} ${plural(B.length,["вміння","вміння","вмінь"])}</span></div>
    <p class="small" style="margin:0">Потренуй з учителем або дорослим: ${baseNames(B)}.</p>
    ${st? baseRow(st) : ""}
    <button type="button" class="linkbtn" data-plan="${c.id}">Увесь план${ic("chev","chev")}</button></div>`; }
  const n=activePlan(c).steps.filter(st=>planCtx(c).hasLesson(st.l)).length, dn=n-td.length;
  return `<div class="card now plancard s-${c.id}"><div class="nowhead"><span class="eyebrow">Твій план · ${c.short}</span><span class="pill">${dn} з ${n}</span></div>
    <div class="bar s-${c.id}"><i style="width:${dn/n*100}%"></i></div>
    ${stepRow(td[0],"nowrow")}
    <button type="button" class="linkbtn" data-plan="${c.id}">Увесь план${td.length>1?` · ще ${td.length-1} ${plural(td.length-1,["крок","кроки","кроків"])}`:""}${ic("chev","chev")}</button></div>`;
}
/* ---------- Тренування: задачі з пулу для пройдених тем ---------- */
const strength = id => { const b=S.srs[id]?.box ?? -1; return `<span class="strength" role="img" aria-label="Міцність: ${b+1} з 5">${[0,1,2,3,4].map(i=>`<i class="${i<=b?"on":""}"></i>`).join("")}</span>`; };
function practiceEntry(c){
  const items=poolItems(c); if(!items.length) return "";
  const all=new Set(items.map(it=>it.lesson)), open=[...all].filter(topicOpen), due=open.filter(l=>LEARN.isDue(S,l,dkey())).length;
  return `<button type="button" class="secitem pracentry s-${c.id}" data-practice-view="${c.id}"><span class="secnum">${ic("bolt")}</span><span class="grow"><b>Тренування${S.subject===c.id&&nav.v!=="home"?"":" · "+c.short}</b><span class="muted small">${open.length? `Відкрито ${open.length} з ${all.size} тем${due?` · ${due} ${plural(due,["чекає","чекають","чекають"])} на повторення`:""}` : "Задачі відкриються після першого пройденого уроку"}</span></span>${ic("chev","chev")}</button>`;
}
function viewPractice(){
  const c=course(nav.id), items=poolItems(c), cnt={}; items.forEach(it=>cnt[it.lesson]=(cnt[it.lesson]||0)+1);
  const open=Object.keys(cnt).filter(topicOpen), due=open.filter(l=>LEARN.isDue(S,l,dkey())).length;
  return `${backBtn(c.subject)}
  <section class="sec pat-${c.pattern||"none"}">
    <svg class="deco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P.bolt}</svg>
    <div class="eyebrow">${c.short} · ${S.grade} клас</div>
    <h1 style="color:inherit">Тренування</h1>
    <p class="why">Задачі з підручників до тем, які ти вже пройшов. Відповідь записуєш сам, а потім бачиш розв'язання.</p>
  </section>
  <div class="stack" style="margin-top:14px">
  ${open.length? `<button type="button" class="cont s-${c.id}" data-practice-mix>
      <span class="dot lg s-${c.id}">${ic("bolt")}</span>
      <span class="grow"><span class="eyebrow">Мікс · до 6 задач з різних тем</span><b>Тренування на сьогодні</b><span class="muted" style="font-size:13px">${due? `${due} ${plural(due,["тема чекає","теми чекають","тем чекають"])} на повторення` : "Усе повторено вчасно. Можна потренуватися наперед"}</span></span>
      <span class="play">${icF("play")}</span></button>`
    : `<div class="empty">Тут з'являться задачі, щойно ти пройдеш перший урок: тренуватися можна лише з пройдених тем.</div>`}
  ${[...new Set(poolsFor(c).flatMap(p=>[p.section,...(p.also||[])]))].map(id=>{ const sec=c.sections.find(x=>x.id===id), LS=(sec?.lessons||[]).filter(l=>cnt[l.id]); if(!LS.length) return "";   /* also — уроки пулу, перенесені в інший розділ */
    return `<div class="eyebrow">${esc(sec.title)}</div><div class="seclist">${LS.map(l=> topicOpen(l.id)
      ? `<button type="button" class="secitem" data-practice="${l.id}"><span class="secnum">${ic(l.icon)}</span><span class="grow"><b>${esc(l.title)}</b><span class="muted small">${cnt[l.id]} ${plural(cnt[l.id],["задача","задачі","задач"])}${S.srs[l.id]&&LEARN.isDue(S,l.id,dkey())?" · час повторити":""}</span>${strength(l.id)}</span><span class="play sm">${icF("play")}</span></button>`
      : `<div class="secitem locked"><span class="secnum">${ic("lock")}</span><span class="grow"><b>${esc(l.title)}</b><span class="muted small">Відкриється, коли пройдеш урок</span></span></div>`).join("")}</div>`; }).join("")}
  </div>`;
}
function recCard(st, same){
  const f=findLesson(st.l), skn=st.sk&&f.c.skills[st.sk.split(".")[1]];
  return `<div class="rec"><div class="eyebrow">Варто повторити · додано в план</div><div class="recrow"><span class="dot lg s-${f.c.id}">${ic(f.l.icon)}</span><span class="grow"><b>${esc(f.l.title)}</b><span class="muted small">${f.c.short} · ${f.sec.grade} клас · ${f.l.screens.length} кроків</span></span></div><p class="small" style="margin:0">${skn? `Помилки в навичці «${skn.name}» повторюються в різних уроках. Почнімо з теми, де вона з'являється вперше.` : same? `У ${st.n} з ${st.of} завдань цієї теми були помилки. Пройди урок ще раз — і вона закріпиться.` : `У ${st.n} з ${st.of} останніх завдань на цю тему були помилки. Коротке повторення допоможе.`}</p><button class="btn" type="button" data-lesson="${st.l}">${same?"Пройти ще раз":"Повторити зараз"}</button></div>`;
}
function viewDiag(){
  const c=course(nav.id), d=diagFor(c); if(!d) return viewHome();
  const was=S.diag[d.id]?.done, part=Object.keys(S.diagRun[d.id]||{}).length>0;
  return `${backBtn("На головну")}
  <section class="sec pat-${c.pattern||"none"}">
    <svg class="deco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">${P.target}</svg>
    <div class="eyebrow">${c.short} · ${d.grade} клас · тест рівня</div>
    <h1 style="color:inherit">${esc(d.title)}</h1>
    <p class="why">${d.why}</p>
  </section>
  <div class="learned" style="margin:16px 0">
    <div class="li">${ic("shield")}<span><b>Без оцінок.</b> Під час тесту не видно, правильно чи ні: це не контрольна, а спосіб знайти, що варто згадати.</span></div>
    <div class="li">${ic("bolt")}<span><b>До ${d.items.length} завдань, ≈ ${diagMins(d)} хв.</b> Можна перерватися й продовжити пізніше.</span></div>
    <div class="li">${ic("bulb")}<span><b>Не знаєш — тисни «Ще не знаю».</b> Вгадувати не треба: так план вийде точнішим.</span></div>
    <div class="li">${ic("path")}<span><b>Наприкінці — твій план:</b> ${d.topics.some(t=>t.kind!=="cur"&&!t.baseline)? "спершу теми, які варто повторити," : "які вміння варто потренувати і з чого почати —"} далі уроки ${d.grade} класу.</span></div>
  </div>
  <div style="display:grid;gap:10px">
    <button class="btn" type="button" data-diag-go>${part?"Продовжити тест":was?"Пройти ще раз":"Почати тест"}</button>
    ${was?`<button class="btn ghost" type="button" data-plan="${c.id}">Мій план</button>`:`<button class="btn ghost" type="button" data-diag-skip="${d.id}">Пізніше</button>`}
  </div>`;
}
function topicsHtml(d, topics, kind){
  return d.topics.filter(t=>(t.kind==="cur")===(kind==="cur")).map(t=>{ const st=topics[t.id]|| (kind==="cur"?"new":"gap"); return `<div class="li tst-${st}">${ic(TST[st][0])}<span class="grow">${esc(t.title)}</span><span class="tchip">${TST[st][1]}</span></div>`; }).join("");
}
function levelStats(lv){
  return `<div class="gains"><div class="stat" style="color:var(--ok)">${ic("check")}<b>${lv.ok}</b><span>${plural(lv.ok,["тему","теми","тем"])} засвоєно</span></div>
    <div class="stat" style="color:var(--gold)">${ic("bulb")}<b>${lv.shaky}</b><span>варто закріпити</span></div>
    <div class="stat" style="color:var(--accent)">${ic("target")}<b>${lv.gaps}</b><span>${plural(lv.gaps,["прогалина","прогалини","прогалин"])}</span></div></div>`;
}
function viewPlan(){
  const c=course(nav.id), p=activePlan(c)||{steps:[],known:[]}, d=diagFor(c), rec=d&&S.diag[d.id], lv=rec&&LEARN.level(d,rec.topics);
  const steps=p.steps.filter(st=>planCtx(c).hasLesson(st.l)), td=steps.filter(st=>!st.done), kn=(p.known||[]).filter(known);
  const topicOf=st=>{ const t=d&&st.topic&&d.topics.find(x=>x.id===st.topic); return t? `<span class="why">У тесті: ${esc(t.title)}</span>` : st.why==="errors"? `<span class="why">${st.sk&&c.skills[st.sk.split(".")[1]]? `Навичка «${c.skills[st.sk.split(".")[1]].name}»: помилки в різних уроках` : `Помилки в ${st.n} з ${st.of} останніх завдань теми`}</span>` : ""; };
  return `${backBtn("На головну")}
  <section class="sec pat-${c.pattern||"none"}">
    <svg class="deco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">${P.path}</svg>
    <div class="eyebrow">${c.short} · ${S.grade} клас</div>
    <h1 style="color:inherit">Твій план</h1>
    ${steps.length?`<div class="pbar"><i style="width:${(steps.length-td.length)/steps.length*100}%"></i></div><div style="font:600 13px var(--body)">${steps.length-td.length} з ${steps.length} ${plural(steps.length,["кроку","кроків","кроків"])} на повторення</div>`:""}
  </section>
  <div class="stack" style="margin-top:14px">
  ${lv?`<div class="card" style="display:grid;gap:10px"><div><div class="eyebrow">Тест рівня${rec.date?" · "+rec.date.split("-").reverse().slice(0,2).join("."):""}</div><h3 style="font-size:19px">${lv.title}</h3><p class="muted" style="margin:4px 0 0;font-size:14px">${lv.text}</p></div>
    ${levelStats(lv)}
    <details class="plan"><summary>Теми тесту (${d.topics.length})</summary><div class="learned" style="margin-top:8px">${topicsHtml(d,rec.topics,"pre")}${topicsHtml(d,rec.topics,"cur")}</div></details></div>`:""}
  ${td.length?`<div class="eyebrow">Спершу повтори</div><div class="seclist">${td.map((st,i)=>{ const f=findLesson(st.l); return `<button type="button" class="secitem" data-lesson="${st.l}"><span class="secnum">${i+1}</span><span class="grow"><b>${esc(f.l.title)}</b><span class="muted small">${WHY[st.why]} · ${f.sec.grade} клас · ${f.l.screens.length} кроків</span>${topicOf(st)}</span><span class="play sm">${icF("play")}</span></button>`; }).join("")}</div>`
    : `<div class="empty">${steps.length?"Усі кроки на повторення виконано.":baseTopics(c).length?"Уроків на повторення в застосунку зараз немає.":"Тем на повторення зараз немає."} Якщо в уроках повторюватимуться схожі помилки, тут з'явиться нова порада.</div>`}
  ${baseBlock(c)}
  ${kn.length?`<div class="eyebrow">Уже знайоме з ${S.grade} класу</div><div class="learned">${kn.map(id=>{ const f=findLesson(id); return `<div class="li">${ic("check")}<span class="grow">${esc(f.l.title)}<span class="muted small" style="display:block">${esc(f.sec.title)} · урок відкрито без черги</span></span></div>`; }).join("")}</div>`:""}
  ${steps.some(st=>st.done)?`<details class="plan"><summary>Виконано (${steps.length-td.length})</summary><ol>${steps.filter(st=>st.done).map(st=>`<li>${esc(findLesson(st.l).l.title)}</li>`).join("")}</ol></details>`:""}
  <div class="eyebrow">Далі</div>
  <button type="button" class="secitem" data-goto="${c.id}"><span class="secnum">${ic("book")}</span><span class="grow"><b>Уроки ${S.grade} класу за програмою</b><span class="muted small">План на рік · ${c.subject}</span></span>${ic("chev","chev")}</button>
  ${d?`<button class="btn ghost" type="button" data-diag="${c.id}">${rec?"Пройти тест рівня ще раз":"Пройти тест рівня"}</button>`:""}
  </div>`;
}
function viewSubject(){
  const c=course(nav.id), LS=lessonsOf(c), d=LS.filter(l=>done(l.id)).length, stars=LS.reduce((a,l)=>a+(S.lessons[l.id]?.stars||0),0), SECS=secsFor(c), wk=schoolWeek();
  return `${backBtn("Усі предмети")}
  <section class="sec pat-${c.pattern||"none"}">
    <svg class="deco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">${P[c.icon]}</svg>
    <div class="eyebrow">${S.grade} клас · ${SECS.length} ${plural(SECS.length,["розділ","розділи","розділів"])} на рік</div>
    <h1 style="color:inherit">${c.subject}</h1>
    <div class="pbar"><i style="width:${LS.length? d/LS.length*100:0}%"></i></div>
    <div style="font:600 13px var(--body)">${LS.length? `${d} з ${LS.length} уроків · ${stars} ★` : `План на рік готовий · уроки в розробці`}</div>
  </section>
  <div style="display:grid;gap:10px;margin-top:14px">${practiceEntry(c)}${planOrDiag(c)||(activePlan(c)||diagFor(c)?`<button type="button" class="linkbtn" data-plan="${c.id}">Твій план і тест рівня${ic("chev","chev")}</button>`:"")}</div>
  <div class="eyebrow" style="margin:18px 0 10px">План на рік</div>
  <div class="seclist">
    ${SECS.map((x,num)=>{ const k=c.sections.indexOf(x), open=!!x.lessons, n=open? x.lessons.filter(l=>done(l.id)).length:0, isNow=x.weeks && wk>=x.weeks[0] && wk<=x.weeks[1];
      const tag = isNow? `<span class="pill now">зараз у школі</span>` : "";
      return open? `<button type="button" class="secitem" data-topic="${k}">
          <span class="secnum">${num+1}</span>
          <span class="grow">${tag}<b>${x.title}</b><span class="why"><b>Навіщо:</b> ${x.why}</span>
          <span class="bar s-${c.id}"><i style="width:${n/x.lessons.length*100}%"></i></span><span class="muted small">${n} з ${x.lessons.length} уроків</span></span>${ic("chev","chev")}</button>`
      : `<div class="secitem locked"><span class="secnum">${num+1}</span><span class="grow">${tag}<b>${x.title}</b><span class="why"><b>Навіщо:</b> ${x.why}</span><span class="muted small">${x.weeks?`Тижні ${x.weeks[0]}–${x.weeks[1]} · `:""}уроки готуються</span>${x.plan?`<details class="plan"><summary>Теми уроків (${x.plan.length})</summary><ol>${x.plan.map(t=>`<li>${esc(t)}</li>`).join("")}</ol></details>`:""}</span></div>`; }).join("")}
  </div>`;
}
function viewTopic(){
  const c=course(nav.id), sec=c.sections[nav.sec], LS=sec.lessons;
  const nDone=LS.filter(l=>done(l.id)).length;
  const curIdx=LS.findIndex((l,i)=>!done(l.id)&&unlocked(sec,i));
  return `${backBtn(c.subject)}
  <section class="sec pat-${c.pattern||"none"}">
    <svg class="deco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">${P[c.pattern==="grid"?"frac":"spiral"]}</svg>
    <div class="eyebrow">${c.short} · ${sec.grade} клас · Розділ ${secsFor(c,sec.grade).indexOf(sec)+1}</div>
    <h2>${sec.title}</h2>
    <p class="why"><b>Навіщо:</b> ${sec.why}</p>
    <div class="pbar"><i style="width:${nDone/LS.length*100}%"></i></div>
    <div style="font:600 13px var(--body)">${nDone} з ${LS.length} уроків</div>
  </section>
  ${(sec.requires||[]).length? `<div class="prereq"><div class="eyebrow">Спирається на</div>${sec.requires.map(id=>{ const f=findLesson(id); if(!f) return ""; return `<button type="button" class="prechip" data-lesson="${id}">${ic(done(id)?"check":f.l.icon)}<span><b>${esc(f.l.title)}</b><span class="muted small">${f.sec.grade} клас · ${done(id)?"пройдено":"повторити за 3 хв"}</span></span>${ic("chev","chev")}</button>`; }).join("")}</div>` : ""}
  <div class="path">
    ${LS.map((l,i)=>{
      const d=done(l.id), u=unlocked(sec,i), cur=i===curIdx;
      return `<div class="${["node", d?"done":"", cur?"cur":"", !u?"lock":"", l.boss?"boss":""].join(" ")}">
        ${cur?`<div class="bubble">Почати</div>`:""}
        <button class="nbtn" type="button" data-open="${i}" aria-label="${attr(esc(l.title))}${u?"":", закрито"}">${ic(u?l.icon:"lock")}</button>
        ${d?starsHtml(S.lessons[l.id].stars):""}
        <div class="nlabel">${esc(l.title)}</div>${!d&&known(l.id)?`<div class="knowntag">знайоме</div>`:""}
      </div>`; }).join("")}
  </div>`;
}
const GRADED=["choice","multi","sort","slider","order","align","shade","numline","number","fracin","lab","answer","gaps","pick","stress","word","split"];
function openSheet(i){
  const c=course(nav.id), sec=c.sections[nav.sec], LS=sec.lessons, l=LS[i], u=unlocked(sec,i), rec=S.lessons[l.id];
  const graded=l.screens.filter(s=>GRADED.includes(s.type) && !s.hyp && !s.poll).length;
  $("#sheetHost").innerHTML=fmt(`<div class="scrim" id="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-label="${attr(esc(l.title))}">
    <div class="grab"></div>
    <div class="eyebrow">${c.short} · Урок ${i+1}${l.boss?" · фінал":""}</div>
    <h2>${esc(l.title)}</h2>
    <div class="why-box"><b>Навіщо:</b> ${l.why}</div>
    <div class="meta"><span>${l.screens.length} кроків</span><span>${graded} завдань</span><span>≈ ${Math.round(l.screens.length*0.8)} хв</span>${l.boss?"<span>бали ×2</span>":""}${l.status!=="approved"?`<span class="st-${l.status||"draft"}" title="Статус перевірки контенту">${({draft:"чернетка",verified:"перевірено ШІ"})[l.status||"draft"]||l.status}</span>`:""}${rec?`<span>найкраще: ${rec.stars} ★</span>`:""}</div>
    ${u?`<button class="btn" id="go" type="button">${rec?"Пройти ще раз":"Почати урок"}</button>`:`<div class="empty">Спершу пройди урок «${esc(LS[i-1].title)}».</div>`}
    <button class="btn ghost" id="closeSheet" type="button">Закрити</button>
  </div></div>`);
  const close=()=>$("#sheetHost").innerHTML="";
  $("#scrim").onclick=e=>{ if(e.target.id==="scrim") close(); };
  $("#closeSheet").onclick=close;
  if(u) $("#go").onclick=()=>{ close(); startLesson(c.id,nav.sec,i); };
  ($("#go")||$("#closeSheet")).focus();
}

/* ---------- Знайомство: вибір класу при першому запуску ---------- */
function gradeButtons(cur){ return [4,5,6,7,8,9,10,11].map(g=>{ const has=GRADES_WITH_CONTENT.includes(g); return `<button type="button" class="gbtn" data-grade="${g}" ${has?"":"disabled"} aria-pressed="${cur===g}"><b>${g}</b><span>${has?"клас":"скоро"}</span></button>`; }).join(""); }
function viewOnboarding(){
  return `<div class="onb">
    <svg class="onb-logo" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M16 16a2 2 0 1 1 2 2a4.5 4.5 0 1 1-4.5-4.5a7 7 0 1 1 7 7a9.5 9.5 0 0 1-9.5-9.5"/></svg>
    <h1>Привіт! Це Слід</h1>
    <p class="muted">Короткі уроки, у яких відповідь знаходиш самостійно. Працюють і без інтернету.</p>
    <div class="field" style="width:100%"><label for="onbName"><b>Як тебе звати?</b></label><input id="onbName" maxlength="24" placeholder="Ім'я (можна пропустити)" value="${esc(S.name)}"></div>
    <div style="width:100%;display:grid;gap:8px"><b>У якому ти класі?</b><div class="grades">${gradeButtons(S.grade)}</div>
    <p class="muted small" style="margin:0">Клас можна змінити в профілі. Від нього залежать предмети й теми, які ти побачиш.</p></div>
  </div>`;
}

/* ---------- Екран «Прогрес» ---------- */
function viewProgress(){
  const L=levelOf(S.xp), st=liveStreak();
  const subs=subjectsFor(), all=subs.flatMap(c=>lessonsOf(c)), nDone=all.filter(l=>done(l.id)).length;
  let ok=0,tot=0; Object.values(S.skills).forEach(v=>{ok+=v.ok;tot+=v.total;});
  const acc= tot? Math.round(ok/tot*100)+"%" : "—";
  return `<div class="stack">
    <h1 style="margin-top:4px">Твій прогрес</h1>
    <div class="card lvl">
      <div class="badge-lvl">${L.n}</div>
      <div style="display:grid;gap:6px">
        <div><div class="eyebrow">Рівень ${L.n}</div><h3 style="font-size:19px">${L.title}</h3></div>
        <div class="bar gold"><i style="width:${L.pct*100}%"></i></div>
        <div class="muted" style="font-size:13px">${L.nxt? `${S.xp} / ${L.nxt} досвіду до рівня «${LEVELS[L.n][1]}»` : `${S.xp} досвіду · найвищий рівень`}</div>
      </div>
    </div>
    <div class="stats">
      <div class="stat" style="color:var(--flame)">${icF("flame")}<b>${st}</b><span>днів поспіль</span></div>
      <div class="stat" style="color:var(--ink)">${ic("path")}<b>${nDone}/${all.length}</b><span>уроків пройдено</span></div>
      <div class="stat" style="color:var(--ok)">${ic("target")}<b>${acc}</b><span>з першої спроби</span></div>
    </div>
    ${subs.map(c=>planCard(c)).join("")}
    <div class="card">
      <h3 style="margin-bottom:12px">Предмети</h3>
      <div class="subjrows">${subs.map(c=>{ const LS=lessonsOf(c), d=LS.filter(l=>done(l.id)).length, stars=LS.reduce((a,l)=>a+(S.lessons[l.id]?.stars||0),0);
        return `<button type="button" class="subjrow" data-goto="${c.id}"><span class="dot s-${c.id}">${ic(c.icon)}</span><span class="grow"><b>${c.subject}</b><span class="bar s-${c.id}"><i style="width:${d/LS.length*100}%"></i></span></span><span class="muted num">${d}/${LS.length}<br>${stars}/${LS.length*3} ★</span></button>`; }).join("")}</div>
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:8px"><h3>Досвід за тиждень</h3><span class="muted" style="font-size:13px">усі предмети</span></div>
      ${weekChart()}
    </div>
    <div class="card">
      <h3 style="margin-bottom:4px">Навички</h3>
      ${subs.map(c=>{ const used=new Set(lessonsOf(c).flatMap(l=>l.screens.map(x=>x.sk)).filter(Boolean)); return `<div class="skillgroup"><div class="eyebrow"><span class="dot sm s-${c.id}"></span>${c.short}</div>${Object.entries(c.skills).filter(([k])=>used.has(k)||S.skills[skey(c,k)]).map(([k,v])=>{ const s=S.skills[skey(c,k)]||{ok:0,total:0}; const p=s.total? s.ok/s.total : 0;
        return `<div class="skill"><div class="row"><b>${v.name}</b><span class="muted">${s.total? Math.round(p*100)+"%":"ще не тренувалась"}</span></div><div class="bar s-${c.id}"><i style="width:${p*100}%"></i></div></div>`; }).join("")}</div>`; }).join("")}
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px"><h3>Значки</h3><span class="muted" style="font-size:13px">${BADGES.filter(b=>S.badges[b.id]).length} з ${BADGES.length}</span></div>
      <div class="badges">${BADGES.map(b=>{ const on=!!S.badges[b.id]; return `<div class="bdg ${on?"":"off"}" title="${attr(b.desc)}"><div class="medal">${ic(on?b.icon:"lock")}</div>${b.name}</div>`; }).join("")}</div>
    </div>
    ${tot? "" : `<div class="empty">Пройди перший урок, і тут з'явиться статистика. Щоб подивитися на заповнений прогрес, увімкни демо-дані в «Профілі».</div>`}
  </div>`;
}
function weekChart(){
  const days=[...Array(7)].map((_,i)=>addDays(new Date(),i-6));
  const names=["Нд","Пн","Вт","Ср","Чт","Пт","Сб"];
  const vals=days.map(d=>S.days[dkey(d)]||0);
  const W=320,H=150,pl=28,pr=6,pt=18,pb=24, max=Math.max(DAILY_GOAL*1.5, ...vals);
  const top=Math.ceil(max/20)*20, y=v=>pt+(H-pt-pb)*(1-v/top), bw=(W-pl-pr)/7;
  let g=[0,top/2,top].map(t=>`<line x1="${pl}" x2="${W-pr}" y1="${y(t)}" y2="${y(t)}" stroke="var(--line)" stroke-width="1"/><text x="${pl-6}" y="${y(t)+4}" text-anchor="end" font-size="10" fill="var(--muted)">${Math.round(t)}</text>`).join("");
  g+=`<line x1="${pl}" x2="${W-pr}" y1="${y(DAILY_GOAL)}" y2="${y(DAILY_GOAL)}" stroke="var(--ok)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="${pl+4}" y="${y(DAILY_GOAL)-5}" font-size="10" font-weight="700" fill="var(--ok)">ціль ${DAILY_GOAL}</text>`;
  g+=vals.map((v,i)=>{ const x=pl+i*bw+bw*0.2, w=bw*0.6, h=Math.max(0,(H-pb)-y(v)), today=i===6;
    const bar = v? `<path d="M${x} ${H-pb} v${-(h-4)} q0 -4 4 -4 h${w-8} q4 0 4 4 v${h-4} z" fill="var(--ink)" opacity="${today?.85:.35}"/>` : `<rect x="${x}" y="${H-pb-2}" width="${w}" height="2" rx="1" fill="var(--line)"/>`;
    const lbl = today&&v? `<text x="${x+w/2}" y="${y(v)-5}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">${v}</text>`:"";
    return `<g class="cbar" data-i="${i}">${bar}${lbl}<text x="${x+w/2}" y="${H-6}" text-anchor="middle" font-size="11" fill="${today?"var(--ink)":"var(--muted)"}" font-weight="${today?700:400}">${names[days[i].getDay()]}</text><rect x="${pl+i*bw}" y="${pt}" width="${bw}" height="${H-pt}" fill="transparent"/></g>`; }).join("");
  const dl=d=>d.getDate()+"."+String(d.getMonth()+1).padStart(2,"0");
  return `<div class="chart-wrap" id="wchart" data-vals="${vals.join(",")}" data-days="${days.map(dl).join(",")}"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Досвід за останні 7 днів: ${vals.map((v,i)=>dl(days[i])+": "+v).join("; ")}">${g}</svg><div class="tip" hidden></div></div>`;
}

/* ---------- Екран «Профіль» ---------- */
let confirmReset=false;
function viewProfile(){
  const L=levelOf(S.xp), nm=S.name||"Учень";
  return `<div class="stack">
    <div class="card who"><div class="avatar">${esc(nm[0].toUpperCase())}</div><div><h2>${esc(nm)}</h2><div class="muted">Рівень ${L.n} · ${L.title}</div></div></div>
    <div class="card" style="display:grid;gap:14px">
      <div class="field"><label for="nameIn"><b>Як тебе звати?</b></label><input id="nameIn" maxlength="24" placeholder="Твоє ім'я" value="${esc(S.name)}"></div>
      <div class="field"><b>Клас</b><div class="grades small">${gradeButtons(S.grade)}</div></div>
      <div class="field"><b>Тема</b><div class="seg" id="themeSeg">${[["system","Як у системі"],["light","Світла"],["dark","Темна"]].map(([v,t])=>`<button type="button" data-v="${v}" aria-pressed="${S.theme===v}">${t}</button>`).join("")}</div></div>
    </div>
    <div class="card" style="display:grid;gap:14px">
      <div class="eyebrow">Для тестування прототипу</div>
      <div class="setrow"><div><b>Відкрити всі уроки</b><div class="muted" style="font-size:13px">Не треба проходити по черзі</div></div><button class="switch" id="swUnlock" role="switch" aria-checked="${S.unlockAll}" aria-label="Відкрити всі уроки" type="button"></button></div>
      <div class="setrow"><div><b>Тиждень навчального року</b><div class="muted" style="font-size:13px">Для картки «Зараз у школі»</div></div><select id="weekSel" aria-label="Тиждень навчального року"><option value="">авто (${(()=>{ const o=S.weekOverride; S.weekOverride=null; const w=schoolWeek(); S.weekOverride=o; return w; })()})</option>${[...Array(35)].map((_,i)=>`<option value="${i+1}" ${S.weekOverride===i+1?"selected":""}>${i+1}</option>`).join("")}</select></div>
      <button class="btn ghost" id="demo" type="button">Заповнити демо-прогресом</button>
      <button class="btn ${confirmReset?"danger":"ghost"}" id="reset" type="button">${confirmReset?"Натисни ще раз, щоб стерти все":"Скинути прогрес"}</button>
    </div>
    ${installCard()}
    <div class="card" style="display:grid;gap:8px">
      <h3>Про прототип</h3>
      <p class="muted" style="font-size:14px;margin:0">Уроки, картинки й прогрес зберігаються на пристрої, тож застосунок працює без інтернету — і в укритті під час тривоги теж. Демо-прогрес — це приклад, а не справжні результати.</p>
      <details><summary class="muted" style="font-size:14px;cursor:pointer">Джерела зображень</summary>
        <ul class="credits">${SUBJ.flatMap(c=>c.credits||[]).map(c=>`<li>${c[0]} — ${c[1]}, ${c[2]} (<a href="${urlAttr(c[3])}" target="_blank" rel="noopener">${esc(srcSite(c[3]))}</a>)</li>`).join("")}</ul></details>
    </div>
  </div>`;
}
function installCard(){
  const P=window.SLID_PWA; if(!P || P.standalone) return "";
  if(P.deferred) return `<div class="card install-card"><h3>Встановити застосунок</h3><p class="muted" style="font-size:14px;margin:0">Слід з'явиться на головному екрані й відкриватиметься без інтернету.</p><button class="btn" id="installBtn" type="button">Встановити</button></div>`;
  if(P.ios) return `<div class="card install-card"><h3>Додати на головний екран</h3><ol><li>Натисни «Поділитися» в Safari</li><li>Обери «На початковий екран»</li><li>Натисни «Додати»</li></ol></div>`;
  if(P.swReady) return `<div class="card install-card"><h3>Працює офлайн</h3><p class="muted" style="font-size:14px;margin:0">Уроки збережено на пристрої. Щоб додати застосунок на робочий стіл, скористайся меню браузера «Встановити».</p></div>`;
  return "";
}
function fillDemo(){
  const rec={l1:[95,3],l2:[88,2],l3:[74,3],l4:[62,2],m1:[110,3],m2:[92,2]};
  S.lessons={}; Object.entries(rec).forEach(([k,[x,s]])=>S.lessons[k]={done:true,stars:s,best:x});
  S.days={}; [0,25,48,0,52,41,60].forEach((v,i)=>{ if(v) S.days[dkey(addDays(new Date(),i-6))]=v; });
  S.xp=Object.values(rec).reduce((a,[x])=>a+x,0)+60;
  S.streak={count:3,last:dkey()};
  S.skills={"hist.src":{ok:7,total:8},"hist.date":{ok:5,total:7},"hist.time":{ok:6,total:7},"hist.crit":{ok:8,total:11},"math.frac":{ok:6,total:7},"math.cmp":{ok:4,total:6}};
  S.badges={first:dkey(),perfect:dkey(),combo5:dkey(),streak3:dkey(),multi:dkey(),chrono:dkey(),sceptic:dkey(),cmpr:dkey()};
  S.bestCombo=6; S.polls={l1:1}; if(!S.grade) S.grade=5;
}

function bindView(){
  document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openSheet(+b.dataset.open));
  document.querySelectorAll("button[data-subject]").forEach(b=>b.onclick=()=>go({v:"subject",id:b.dataset.subject}));
  document.querySelectorAll(".subjcard.soon").forEach(b=>b.onclick=()=>toast("Цей предмет ще в розробці"));
  document.querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>go({v:"topic",id:nav.id,sec:+b.dataset.topic}));
  document.querySelectorAll("[data-up]").forEach(b=>b.onclick=up);
  document.querySelectorAll("[data-jump]").forEach(b=>b.onclick=()=>{ const [cid,k]=b.dataset.jump.split("|"); go({v:"topic",id:cid,sec:+k}); });
  document.querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>startById(b.dataset.lesson));
  document.querySelectorAll("[data-grade]").forEach(b=>b.onclick=()=>{ if(b.disabled) return; SUBJ.forEach(activePlan); S.grade=+b.dataset.grade; SUBJ.forEach(activePlan); const n=$("#onbName"); if(n) S.name=n.value.trim()||S.name; const pd=pendingDiag(); nav= pd? {v:"diag",id:pd.id} : {v:"home"}; if(pd) tab="path"; save(); render(); window.scrollTo({top:0}); });
  document.querySelectorAll("[data-practice-view]").forEach(b=>b.onclick=()=>go({v:"practice",id:b.dataset.practiceView}));
  document.querySelectorAll("[data-practice]").forEach(b=>b.onclick=()=>startPractice(nav.id,b.dataset.practice));
  document.querySelectorAll("[data-practice-mix]").forEach(b=>b.onclick=()=>startPractice(nav.id,null));
  document.querySelectorAll("[data-plan]").forEach(b=>b.onclick=()=>go({v:"plan",id:b.dataset.plan}));
  document.querySelectorAll("[data-diag]").forEach(b=>b.onclick=()=>go({v:"diag",id:b.dataset.diag}));
  document.querySelectorAll("[data-diag-go]").forEach(b=>b.onclick=()=>startDiag(nav.id));
  document.querySelectorAll("[data-diag-skip]").forEach(b=>b.onclick=()=>{ const id=b.dataset.diagSkip, r=Object.values(S.diagRun[id]||{});
    EV.log("diag_later", ()=>({ c:nav.id, diag:id, answered:r.length, skipped:r.filter(v=>v===LEARN.SKIP).length }));
    S.diagSkip[id]=true; save(); go({v:"home"}); });
  const wsel=$("#weekSel"); if(wsel) wsel.onchange=()=>{ S.weekOverride= +wsel.value || null; save(); render(); };
  document.querySelectorAll("[data-goto]").forEach(b=>b.onclick=()=>go({v:"subject",id:b.dataset.goto}));
  document.querySelectorAll("[data-start]").forEach(b=>b.onclick=()=>{ const [cid,k,i]=b.dataset.start.split("|"); nav={v:"topic",id:cid,sec:+k}; S.subject=cid; startLesson(cid,+k,+i); });
  const wc=$("#wchart");
  if(wc){ const vals=wc.dataset.vals.split(","), ds=wc.dataset.days.split(","), tip=wc.querySelector(".tip");
    wc.querySelectorAll(".cbar").forEach(g=>{ const show=()=>{ const i=+g.dataset.i, r=g.getBoundingClientRect(), R=wc.getBoundingClientRect();
        tip.hidden=false; tip.textContent=`${ds[i]} · ${vals[i]} досвіду`; tip.style.left=(r.left-R.left+r.width/2)+"px"; tip.style.top=(r.top-R.top+10)+"px"; };
      g.addEventListener("pointerenter",show); g.addEventListener("click",show); g.addEventListener("pointerleave",()=>tip.hidden=true); }); }
  const ni=$("#nameIn"); if(ni) ni.addEventListener("change",()=>{ S.name=ni.value.trim(); save(); render(); });
  document.querySelectorAll("#themeSeg button").forEach(b=>b.onclick=()=>{ S.theme=b.dataset.v; save(); render(); });
  const sw=$("#swUnlock"); if(sw) sw.onclick=()=>{ S.unlockAll=!S.unlockAll; save(); render(); };
  const ib=$("#installBtn"); if(ib) ib.onclick=async()=>{ if(await window.SLID_PWA.install()) toast(ic("check")+"Встановлено"); render(); };
  const dm=$("#demo"); if(dm) dm.onclick=()=>{ fillDemo(); save(); toast(ic("check")+"Демо-прогрес заповнено"); tab="progress"; render(); };
  const rs=$("#reset"); if(rs) rs.onclick=()=>{ if(!confirmReset){ confirmReset=true; render(); setTimeout(()=>{ confirmReset=false; if(tab==="profile") render(); },4000); return; }
    const keep={name:S.name,theme:S.theme,subject:S.subject,grade:S.grade}; HYPS.reset(); EV.log("reset"); EV.newProfile(); S=Object.assign(fresh(),keep); confirmReset=false; save(); toast(ic("check")+"Прогрес скинуто"); render(); };
}
function toast(html){ const t=$("#toast"); t.innerHTML=`<div>${html}</div>`; clearTimeout(toast.t); toast.t=setTimeout(()=>t.innerHTML="",1900); }

/* ---------- Ілюстрації: історія (SVG за назвою) ---------- */
function svgFig(name){
  if(name==="strata"){
    const L=[["А","#9C8B77","Пластикова кришечка"],["Б","#7E6A55","Срібна монета"],["В","#A0643F","Трипільський черепок"],["Г","#5E4A3A","Кремінний ніж"]];
    return `<svg viewBox="0 0 320 190" role="img" aria-label="Розріз ґрунту з чотирма шарами, від А зверху до Г знизу">
      <rect x="0" y="0" width="320" height="16" fill="var(--ok)" opacity=".5"/>
      ${L.map((l,i)=>`<rect x="0" y="${16+i*42}" width="320" height="42" fill="${l[1]}"/><text x="12" y="${42+i*42}" font-size="15" font-weight="700" fill="#fff">${l[0]}</text><rect x="${150+(i%2)*60}" y="${28+i*42}" width="14" height="14" rx="3" fill="#F4EBDD" stroke="#1F1A17" stroke-width="1.5"/><text x="${172+(i%2)*60}" y="${40+i*42}" font-size="11" fill="#fff">${l[2]}</text>`).join("")}
      <path d="M300 30 v140" stroke="#fff" stroke-width="2"/><path d="M294 162 l6 10 l6 -10" fill="#fff"/><text x="292" y="26" font-size="10" fill="#fff" text-anchor="end">новіше</text><text x="292" y="186" font-size="10" fill="var(--ink)" text-anchor="end">давніше</text>
    </svg>`;
  }
  if(name==="rings"){
    let rings="", r=6; const w=[3,5,2,6,4,2,7,3,5,2,4,6]; w.forEach((d,i)=>{ r+=d; rings+=`<circle cx="90" cy="95" r="${r}" fill="none" stroke="#7A4E2D" stroke-width="${i%2?1.2:2}"/>`; });
    const bars=w.map((d,i)=>`<rect x="${190+i*10}" y="${150-d*14}" width="8" height="${d*14}" rx="2" fill="var(--accent)"/>`).join("");
    return `<svg viewBox="0 0 320 180" role="img" aria-label="Кільця дерева і їхній штрихкод: широкі кільця — вологі роки, вузькі — посушливі">
      <circle cx="90" cy="95" r="${r+4}" fill="#E8C9A0"/>${rings}<circle cx="90" cy="95" r="${r+4}" fill="none" stroke="#5A3A20" stroke-width="5"/>
      ${bars}<line x1="186" x2="312" y1="150" y2="150" stroke="var(--line)" stroke-width="1.5"/>
      <text x="250" y="170" text-anchor="middle" font-size="11" fill="var(--muted)">ширина кільця по роках</text>
      <text x="250" y="30" text-anchor="middle" font-size="11" fill="var(--muted)">«штрихкод» дерева</text>
    </svg>`;
  }
  if(name==="decay"){
    const steps=[[0,100],[5730,50],[11460,25],[17190,12.5]];
    return `<svg viewBox="0 0 320 170" role="img" aria-label="Кожні 5730 років вуглецю-14 стає вдвічі менше: 100%, 50%, 25%, 12,5%">
      ${steps.map((s,i)=>{ const x=20+i*76, h=s[1]*1.1; return `<rect x="${x}" y="${130-h}" width="52" height="${h}" rx="4" fill="var(--accent)" opacity="${1-i*0.18}"/><text x="${x+26}" y="${124-h}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">${String(s[1]).replace(".",",")}%</text><text x="${x+26}" y="148" text-anchor="middle" font-size="11" fill="var(--muted)">${s[0]? s[0].toLocaleString("uk-UA"):"0"}</text>`; }).join("")}
      <text x="160" y="166" text-anchor="middle" font-size="11" fill="var(--muted)">років після смерті організму</text>
    </svg>`;
  }
  if(name==="timeline"){
    const pts=[[-3000,"3000 до н. е."],[-1000,"1000 до н. е."],[1,"1 р. н. е."],[1000,"1000"],[2026,"сьогодні"]];
    const x=v=>20+(v+3200)/(5400)*280;
    return `<svg viewBox="0 0 320 110" role="img" aria-label="Лінія часу від 3000 року до нашої ери до сьогодні з точкою відліку">
      <rect x="${x(-3200)}" y="44" width="${x(0)-x(-3200)}" height="10" rx="5" fill="var(--accent)" opacity=".35"/>
      <rect x="${x(0)}" y="44" width="${x(2200)-x(0)}" height="10" rx="5" fill="var(--accent)"/>
      <text x="${(x(-3200)+x(0))/2}" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">до н. е. ←</text>
      <text x="${(x(0)+x(2200))/2}" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">→ н. е.</text>
      ${pts.map((p,i)=>`<line x1="${x(p[0])}" x2="${x(p[0])}" y1="40" y2="58" stroke="var(--ink)" stroke-width="2"/><text x="${x(p[0])}" y="${i%2?96:76}" text-anchor="middle" font-size="10" fill="var(--muted)">${p[1]}</text>`).join("")}
    </svg>`;
  }
  if(name==="legend"){
    return `<svg viewBox="0 0 320 170" role="img" aria-label="Приклад легенди історичної карти: річка, місто, кордон, похід, битва">
      <rect x="4" y="4" width="312" height="162" rx="10" fill="var(--chip)" stroke="var(--line)"/>
      <path d="M20 40c15-12 30 12 45 0" stroke="#3B82C4" stroke-width="4" fill="none"/><text x="80" y="45" font-size="13" fill="var(--ink)">річка</text>
      <circle cx="42" cy="75" r="7" fill="var(--surface)" stroke="var(--ink)" stroke-width="2.5"/><text x="80" y="80" font-size="13" fill="var(--ink)">місто</text>
      <path d="M20 110h45" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="7 4"/><text x="80" y="115" font-size="13" fill="var(--ink)">кордон</text>
      <path d="M20 145h38" stroke="var(--accent)" stroke-width="4"/><path d="M58 138l10 7-10 7z" fill="var(--accent)"/><text x="80" y="150" font-size="13" fill="var(--ink)">похід, рух</text>
      <g transform="translate(200 50)" stroke="var(--bad)" stroke-width="3" stroke-linecap="round"><path d="M0 0l22 22M22 0L0 22"/></g><text x="232" y="66" font-size="13" fill="var(--ink)">битва</text>
      <g transform="translate(210 110)"><circle r="18" fill="none" stroke="var(--muted)"/><path d="M0-15l5 15h-10z" fill="var(--ink)"/><text y="-22" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Пн</text></g><text x="236" y="115" font-size="13" fill="var(--ink)">північ</text>
    </svg>`;
  }
  if(name==="route"){
    const pts=[["Балтійське море",40],["Новгород",78],["Смоленськ",116],["Київ",154],["пороги",192],["Чорне море",230],["Константинополь",262]];
    return `<svg viewBox="0 0 320 290" role="img" aria-label="Схема шляху із варягів у греки з півночі на південь">
      <path d="M150 30 C 170 70, 130 100, 150 140 S 170 200, 150 240 S 140 262, 150 268" stroke="#3B82C4" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${pts.map(([n,y],i)=>`<circle cx="${150+(i%2?8:-6)}" cy="${y}" r="${n==="Київ"?9:6}" fill="${n==="Київ"?"var(--accent)":n==="пороги"?"var(--bad)":"var(--surface)"}" stroke="var(--ink)" stroke-width="2"/><text x="${i%2?170:128}" y="${y+5}" font-size="13" font-weight="${n==="Київ"?700:400}" text-anchor="${i%2?"start":"end"}" fill="var(--ink)">${n}</text>`).join("")}
      <text x="300" y="30" text-anchor="end" font-size="11" fill="var(--muted)">північ ↑</text>
      <text x="300" y="282" text-anchor="end" font-size="11" fill="var(--muted)">південь ↓</text>
    </svg>`;
  }
  if(name==="phone"){
    const msgs=["дерев'яне городище","дерев'яне місто","велике місто з валом","місто з вежами","кам'яний замок з сотнею веж"];
    return `<svg viewBox="0 0 320 210" role="img" aria-label="Ланцюжок із п'яти людей: повідомлення змінюється від дерев'яного городища до кам'яного замку">
      ${msgs.map((m,i)=>`<g transform="translate(0 ${i*40})"><circle cx="22" cy="18" r="13" fill="var(--accent)" opacity="${.4+i*.15}"/><text x="22" y="23" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent-ink)">${i+1}</text><rect x="44" y="4" width="${120+m.length*3.2}" height="28" rx="14" fill="var(--chip)" stroke="var(--line)"/><text x="58" y="23" font-size="12" fill="var(--ink)">«${m}»</text></g>`).join("")}
    </svg>`;
  }
  return "";
}

/** Підпис посилання на джерело зображення: Вікісховище лише для Commons, інакше — домен (digitallibrary.un.org, …). */
function srcSite(u){ let h=""; try{ h=new URL(String(u)).hostname.toLowerCase(); }catch(e){ return "джерело"; }
  return /(^|\.)(commons|upload)\.wikimedia\.org$/.test(h)? "Вікісховище" : h.replace(/^www\./,"") || "джерело"; }

/* ---------- Ілюстрації: математика (за описом) ---------- */
/** «на 2 рівні частини», «на 5 рівних частин», «на 21 рівну частину» (знахідний відмінок після «на»). */
const partsAcc=(n,eq)=> n+" "+plural(n, eq? ["рівну частину","рівні частини","рівних частин"] : ["частину","частини","частин"]);
function sectorPath(cx,cy,r,a0,a1){ const p=a=>[cx+r*Math.cos(a), cy+r*Math.sin(a)]; const [x0,y0]=p(a0),[x1,y1]=p(a1); return `M${cx} ${cy} L${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 ${a1-a0>Math.PI?1:0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`; }
function circleSVG(n, shaded, opt={}){ // shaded: (i)=> 0 | 1 | 2
  const r=opt.r||70, cx=r+6, cy=r+6, A=-Math.PI/2;
  const parts=[...Array(n)].map((_,i)=>{ const s=shaded(i); const fill= s===2? "var(--accent-mid)" : s? "var(--accent)" : "var(--surface)";
    return `<path class="${opt.click?"part":""}" ${opt.click?`data-p="${i}" tabindex="0" role="button" aria-label="Частина ${i+1}"`:""} d="${sectorPath(cx,cy,r,A+i*2*Math.PI/n,A+(i+1)*2*Math.PI/n)}" fill="${fill}" stroke="var(--ink)" stroke-width="1.6" stroke-linejoin="round"/>`; }).join("");
  return `<svg viewBox="0 0 ${2*r+12} ${2*r+12}" style="max-width:${opt.size||200}px" role="img" aria-label="${opt.label||"Круг, поділений на "+partsAcc(n,true)}">${parts}</svg>`;
}
function barSVG(weights, shaded, opt={}){
  const W=300, H=opt.h||56, tot=weights.reduce((a,b)=>a+b,0); let x=3;
  const parts=weights.map((w,i)=>{ const pw=(W-6)*w/tot, s=shaded(i), fill= s===2? "var(--accent-mid)" : s? "var(--accent)" : "var(--surface)";
    const el=`<rect class="${opt.click?"part":""}" ${opt.click?`data-p="${i}" tabindex="0" role="button" aria-label="Частина ${i+1}"`:""} x="${x.toFixed(2)}" y="3" width="${pw.toFixed(2)}" height="${H-6}" fill="${fill}" stroke="var(--ink)" stroke-width="1.6"/>`; x+=pw; return el; }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${opt.label||"Смужка з "+weights.length+" "+(weights.length%10===1&&weights.length%100!==11?"частини":"частин")}">${parts}</svg>`;
}
function mathFig(f){
  if(f.kind==="circle") return `<div class="mfig">${circleSVG(f.n, i=> i<f.k ? (f.split && i<f.split ? 1 : f.split ? 2 : 1) : 0, {label:`Круг на ${partsAcc(f.n,true)}, зафарбовано ${f.k}`})}</div>`;
  if(f.kind==="circles"){ let left=f.k; return `<div class="mfig row">${[...Array(f.count)].map(()=>{ const kk=Math.min(f.n,Math.max(0,left)); left-=f.n; return circleSVG(f.n,i=>i<kk?1:0,{size:120,label:`Круг на ${partsAcc(f.n)}, зафарбовано ${kk}`}); }).join("")}</div>`; }
  if(f.kind==="bar") return `<div class="mfig">${barSVG(Array(f.n).fill(1), i=>i<f.k?1:0)}</div>`;
  if(f.kind==="unequal") return `<div class="mfig">${barSVG(f.parts, i=>i<f.k?1:0, {label:"Смужка з чотирьох неоднакових частин, зафарбовано найменшу"})}</div>`;
  if(f.kind==="bars") return `<div class="mfig bars">${f.rows.map((r,j)=>`<div class="barrow"><span class="m blab">${mathHTML(f.labels[j])}</span>${barSVG(Array(r[0]).fill(1), i=>i<r[1]?1:0, {h:40})}</div>`).join("")}</div>`;
  if(f.kind==="grid"){ const cw=40, W=f.cols*cw+6, H=f.rows*cw+6; let g=""; for(let r=0;r<f.rows;r++) for(let c=0;c<f.cols;c++){ const i=r*f.cols+c; g+=`<rect x="${3+c*cw}" y="${3+r*cw}" width="${cw}" height="${cw}" rx="3" fill="${i<f.k?"var(--surface)":"#6B3F26"}" stroke="${i<f.k?"var(--line)":"#3E2415"}" stroke-width="1.6" ${i<f.k?'stroke-dasharray="4 3"':""}/>`; }
    return `<div class="mfig"><svg viewBox="0 0 ${W} ${H}" style="max-width:220px" role="img" aria-label="Шоколадка з ${f.rows*f.cols} часточок, ${f.k} з'їдено">${g}</svg><div class="fix" style="text-align:center">пунктиром — з'їдені часточки</div></div>`; }
  if(f.kind==="rem"){ const q=Math.floor(f.total/f.d), r=f.total%f.d;
    return `<div class="mfig rem" role="img" aria-label="${f.total} предметів: ${q} групи по ${f.d} і ще ${r} в остачі">${[...Array(f.d)].map((_,g)=>`<div class="dgroup on">${'<i></i>'.repeat(q)}</div>`).join("")}<div class="dgroup left">${'<i></i>'.repeat(r)}</div></div><div class="fix" style="text-align:center">${f.d} друзів по ${q} цукерки · ${r} залишилось</div>`; }
  if(f.kind==="dots"){ const per=f.total/f.groups; return `<div class="mfig dots" style="grid-template-columns:repeat(${f.groups},1fr)" role="img" aria-label="${f.total} учнів у ${f.groups} групах по ${per}">${[...Array(f.groups)].map((_,g)=>`<div class="dgroup ${g<f.k?"on":""}">${'<i></i>'.repeat(per)}</div>`).join("")}</div>`; }
  return "";
}

/* ---------- Плеєр уроку ---------- */
let C=null, L=null, li=0, idx=0, st=null, checked=false, tries=0, tried=null, run=null;
/* відбиток відповіді: друга спроба зараховується лише після зміни відповіді (повторний Enter не витрачає її).
   Записи порівнюємо за значенням: «5,», «05», « 5 » після «5» — та сама відповідь (LEARN.answerSig). */
const answerSig = () => { const s=L.screens[idx], v= LAB && s?.type==="lab"? LAB.get() : st;
  if(typeof v==="string" && s){ const t=v.replace(/\s+/g," ").trim();
    if(s.type==="number"){ const n=numParse(t); return t && Number.isFinite(n)? "n:"+n : "s:"+t; }
    if(s.type==="fracin" && !s.hideDen){ const n=parseInt(t,10); return Number.isFinite(n)? "i:"+n : "s:"+t; }
    if(s.type==="answer") return LEARN.answerSig(s, t);
    if(s.type==="word") return "w:"+LANG.normWord(t, s.keepCase);
    if(s.type==="fracin") return LEARN.answerSig({answerKind:"number"}, t); }
  return v instanceof Set? JSON.stringify([...v].sort((a,b)=>a-b)) : typeof v==="string"? v.replace(/\s+/g," ").trim() : JSON.stringify(v); };
/* правильну відповідь не блокуємо ніколи, навіть якщо відбиток збігся (напр. «5,» без цифри після коми, а потім «5») */
const sameAsTried = () => tried!==null && !checked && answerSig()===tried && !gradeNow(L.screens[idx]);
const letters="АБВГДЕ";
let SEC=null;
function startById(id){ const f=findLesson(id); if(f) startLesson(f.c.id,f.k,f.i,true); }
function startLesson(cid,k,i,linked){
  afterEnd=null;
  C=course(cid); SEC=C.sections[k]; li=i; L=SEC.lessons[i]; idx=0;
  run={ linked:!!linked, weak:new Set(), xp:0, first:0, graded:0, combo:0, best:0, mistakes:0, startLvl:levelOf(S.xp).n };
  EV.log("lesson_start", ()=>({ c:C.id, l:L.id, sec:SEC.id, grade:SEC.grade, boss:!!L.boss, linked:!!linked, screens:L.screens.length })); HYPS.newRun();
  applyTheme(C.id);
  openPlayer();
  renderScreen();
}
/* тест рівня йде в тому самому плеєрі: без підказок і фідбеку, з кнопкою «Ще не знаю»; відповіді зберігаються одразу */
let afterEnd=null;
function startDiag(cid){
  afterEnd=null;
  C=course(cid); const d=diagFor(C); if(!d) return;
  SEC={ grade:d.grade, signed:d.signed!==false, lessons:[] }; li=0; L={ id:d.id, title:d.title, screens:d.items };
  run={ diag:d, res:LEARN.resumeDiag(S,d).res, linked:true, weak:new Set(), xp:0, first:0, graded:0, combo:0, best:0, mistakes:0, startLvl:levelOf(S.xp).n };
  idx=LEARN.nextItem(d,run.res); if(idx<0) idx=d.items.length;
  EV.log("diag_start", ()=>({ c:C.id, diag:d.id, grade:d.grade, rev:LEARN.diagRev(d), items:d.items.length, resumed:Object.keys(run.res).length })); HYPS.newRun();
  applyTheme(C.id);
  openPlayer();
  renderScreen();
}
function diagAnswer(v){ const s=L.screens[idx], ha=evAnswer(s, ()=>{ const vd= v===LEARN.SKIP? "skip" : evVerdict(s, v===LEARN.OK), raw= v===LEARN.SKIP? null : evRaw(s); return { ...evItem(s), try:1, verdict:vd, res:v, raw, hint:false, final:true, ...evKey(s, vd, raw) }; });
  run.res[idx]=v; save(); HYPS.answer(ha); idx=LEARN.nextItem(run.diag,run.res); if(idx<0) idx=L.screens.length; renderScreen(); }
$("#skip").onclick=()=>{ if(run?.diag && idx<L.screens.length) diagAnswer(LEARN.SKIP); };
function renderDiagEnd(){
  const d=run.diag, plan=LEARN.finishDiag(S, C.id, d, run.res, learnCtx(C));
  delete S.diagRun[d.id]; delete S.diagSkip[d.id];
  const hs=HYPS.diagEnd(d.id);   // тінь гіпотез: «Ще не знаю» цього тесту — лічильником у diag_end, не hyp_open (docs/design/diag-hypothesis-math.md §9 [E2-p3])
  EV.log("diag_end", ()=>({ c:C.id, diag:d.id, grade:d.grade, rev:S.diag[d.id]?.rev ?? null, res:run.res, topics:plan.topics, steps:(plan.steps||[]).map(st=>st.l), base:(plan.base||[]).map(b=>b.topic), known:plan.known||[], ...(hs? { hyp:hs } : {}) }));
  const g=gain(20); touchStreak(); save(); renderTop(); pProgress();
  const lv=LEARN.level(d,plan.topics), td=stepsTodo(C), kn=plan.known.length, cid=C.id, start=td.length? null : baseStart(C);
  nav={v:"plan",id:cid}; tab="path";
  $("#stage").innerHTML=fmt(`<section class="screen endhero">
    <div class="bigicon">${ic("target")}</div>
    <div class="eyebrow">${C.short} · тест рівня пройдено <span class="gainchip">+${g}</span></div>
    <h1>${lv.title}</h1>
    <p style="margin:0">${lv.text}</p>
    ${levelStats(lv)}
    <div class="rec"><div class="eyebrow">Твій план</div>
      ${td.length? `<p style="margin:0">Спершу ${td.length} ${plural(td.length,["короткий урок","короткі уроки","коротких уроків"])} на повторення, далі — програма ${d.grade} класу.</p>${td.slice(0,3).map(st=>stepRow(st,"nowrow")).join("")}${td.length>3?`<p class="muted small" style="margin:0">…і ще ${td.length-3}. Увесь план — на головному екрані.</p>`:""}`
        : start? `<p style="margin:0">Уроків на повторення в застосунку немає. Почни з уроків ${d.grade} класу.</p>${baseRow(start)}`
        : baseTopics(C).length? `<p style="margin:0">Уроків на повторення в застосунку немає. Уроки ${d.grade} класу — на сторінці предмета.</p>`
        : `<p style="margin:0">Тем на повторення не знайшлося. Берися за уроки ${d.grade} класу.</p>`}
    </div>
    ${baseBlock(C,false)}
    <div class="learned"><div class="eyebrow">Теми попередніх класів</div>${topicsHtml(d,plan.topics,"pre")}</div>
    ${kn?`<div class="learned"><div class="eyebrow">З програми ${d.grade} класу</div>${topicsHtml(d,plan.topics,"cur")}<p class="muted small" style="margin:0">Уроки тем, які ти вже вмієш, відкрито без черги.</p></div>`:""}
  </section>`);
  setDock("","","", td.length? "Почати з першого кроку" : start? "До першого уроку" : "До уроків");
  // baseline-прогалина не закривається переходом: start — лише доступний урок класу
  afterEnd = td.length? ()=>startById(td[0].l) : start? ()=>startById(start) : ()=>go({v:"subject",id:cid});
  $("#stage").querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>startById(b.dataset.lesson));
}
/* тренування — теж у плеєрі: звичайна перевірка (підказка → друга спроба → розв'язання), наприкінці оновлюється розклад повторень */
function startPractice(cid, focus){
  C=course(cid);
  const items=openItems(C);
  if(focus && !items.some(it=>it.lesson===focus)) return toast("Для цієї теми тренування поки недоступне");
  // генеровані вправи (gen): числа сталі в межах сесії й різні між сесіями; ключ seen/SRS — той самий id вправи (engine-practice-pool)
  const prN=(Number.isSafeInteger(S.prN)? S.prN : 0)+1;
  const picked=LEARN.pickSession(S, { items, focus, n:6, day:dkey(), order:id=>LORD.get(id)??1e9 }).map(it=>genPick(it, "s"+prN)).filter(Boolean);
  if(!picked.length) return toast("Спершу пройди урок цієї теми");
  S.prN=prN;   // лічильник — лише для справді розпочатої сесії
  afterEnd=null;
  SEC={ grade:S.grade, signed:true, lessons:[] }; li=0; idx=0;
  L={ id:"practice", title: focus? findLesson(focus).l.title : "Тренування на сьогодні", screens: picked.map(it=>{ const f=findLesson(it.lesson), [sid,ref]=String(it.src).split(/\s+(.*)/s), src=it.pool.sources.find(x=>x.id===sid);
    const where=LEARN.srcRef(ref, it.srcPage);   // «с. N» не подвоюється, якщо сторінка вже є в src
    return { ...it, _hs:it, grade:f.sec.grade, eyebrow:(it.review?"Повторення · ":"Тренування · ")+esc(f.l.title), body:(it.body||"")+`<p class="srcnote">Джерело: ${esc(src? src.short||src.title : sid)}${where? ", "+esc(where) : ""}${it.adapted? " · адаптовано" : ""}</p>`,
      fbOk:it.fbOk||"Правильно.", fbBad:it.fbBad||"Не зовсім.", fbText:`<span class="steps"><b>Розв'язання</b>${it.steps.map((t,i)=>`<span>${i+1}. ${t}</span>`).join("")}</span>` }; }) };
  run={ practice:{ focus, res:[] }, linked:true, weak:new Set(), xp:0, first:0, graded:0, combo:0, best:0, mistakes:0, startLvl:levelOf(S.xp).n };
  EV.log("practice_start", ()=>({ c:C.id, focus:focus||null, prN, items:picked.map(it=>({ key:it.key, l:it.lesson, review:!!it.review, lvl:it.lvl ?? null })) })); HYPS.newRun();
  applyTheme(C.id);
  openPlayer();
  renderScreen();
}
/** Вправа сесії: gen — конкретний набір (genInstance) і для журналу й гіпотез ще gv (значення змінних, ≤ 8) та genN (скільки наборів). */
function genPick(it, seed){ const g=LEARN.genInstance(it, seed); if(g && it.gen){ const all=LEARN.genAll(it), env=all.envs?.[g.genAt];
  if(env){ g.gv=Object.fromEntries(all.names.slice(0,8).map(n=>[n, env[n]])); g.genN=all.envs.length; } } return g; }
function renderPracticeEnd(){
  pProgress(); $("#pCombo").innerHTML="";
  const pr=run.practice, cid=C.id, upd=LEARN.srsUpdate(S, pr.res, dkey());
  touchStreak();
  const recs=LEARN.detect(S, learnCtx(C)).filter(r=>findLesson(r.l).c.id===cid);
  const newSteps= recs.length? LEARN.syncPlan(S, cid, recs, dkey(), learnCtx(C)) : [];
  EV.log("practice_end", ()=>({ c:cid, focus:pr.focus||null, res:pr.res, first:run.first, graded:run.graded, xp:run.xp, srs:upd, recs:recs.map(r=>({ l:r.l, why:r.why, sk:r.sk||null })), steps:newSteps.map(st=>st.l) }));
  save(); renderTop();
  $("#stage").innerHTML=fmt(`<section class="screen endhero">
    <div class="bigicon">${ic("bolt")}</div>
    <div class="eyebrow">${C.short} · тренування завершено</div>
    <h1>${esc(L.title)}</h1>
    <div class="gains">
      <div class="stat" style="color:var(--gold)">${icF("bolt")}<b>+${run.xp}</b><span>досвіду</span></div>
      <div class="stat" style="color:var(--ok)">${ic("target")}<b>${run.first}/${run.graded}</b><span>з першої спроби</span></div>
      <div class="stat" style="color:var(--flame)">${icF("flame")}<b>${run.best}</b><span>найдовше комбо</span></div>
    </div>
    <div class="learned"><div class="eyebrow">Міцність тем</div>${upd.map(u=>{ const f=findLesson(u.lesson), up=pr.res.filter(r=>r.lesson===u.lesson).every(r=>r.ok);
      return `<div class="li ${up?"":"tst-shaky"}">${ic(up?"check":"bulb")}<span class="grow">${esc(f.l.title)}<span class="muted small" style="display:block">${up? `Без помилок. Повернемося до теми через ${u.days} ${plural(u.days,["день","дні","днів"])}.` : "Були помилки — повторимо завтра."}</span>${strength(u.lesson)}</span></div>`; }).join("")}</div>
    ${newSteps.map(st=>recCard(st,false)).join("")}
    <button class="btn ghost" type="button" id="again" style="width:100%">Ще одне тренування</button>
  </section>`);
  setDock("","","","Готово");
  $("#again").onclick=()=>startPractice(cid, pr.focus);
  $("#stage").querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>startById(b.dataset.lesson));
  confetti(run.first===run.graded?3:1);
}
/* плеєр модальний: фон (застосунок і вкладки) inert, поки урок відкрито — Tab не виходить за межі плеєра (QA 4–5 кл.) */
const PLAYER_BG = ["#app","#tabs","#sheetHost"];
function openPlayer(){ $("#player").hidden=false; document.body.style.overflow="hidden"; $("#pClose").innerHTML=ic("x"); PLAYER_BG.forEach(q=>{ const e=$(q); if(e) e.inert=true; }); }
function closePlayer(){ EV.log("close", ()=>({ mode:evMode(), l:L.id, i:idx, of:L.screens.length, end:idx>=L.screens.length })); HYPS.close();
  $("#player").hidden=true; document.body.style.overflow=""; PLAYER_BG.forEach(q=>{ const e=$(q); if(e) e.inert=false; }); render(); }
/** Фокус на головну дію (Далі / Перевірити / Готово), щоб Enter вів далі. Якщо вона неактивна — на обраний варіант
    (спершу позначений помилкою), далі на перший елемент екрана, а якщо їх немає (lab із самими SVG) — на сам екран.
    Ніколи не на ✕: два Enter на ній за 2,5 с закривають урок без збереження. */
function focusAction(){ const a=$("#action"); if(!a.disabled) return a.focus({preventScroll:true});
  const g=$("#stage"), q=sel=>g.querySelector(sel);
  const el=q('.is-bad[aria-pressed="true"]:not(:disabled), .is-bad [aria-pressed="true"]:not(:disabled)') || q('[aria-pressed="true"]:not(:disabled)')
    || q('button:not(:disabled), input:not(:disabled), [tabindex="0"]') || q('.screen');
  if(el) el.focus({preventScroll:true}); }
$("#pClose").onclick=()=>{ if(idx>=L.screens.length) return closePlayer();
  if(run.diag){ closePlayer(); return toast("Тест збережено. Продовжиш з того самого місця"); }
  if($("#pClose").dataset.armed){ closePlayer(); } else { $("#pClose").dataset.armed="1"; toast("Натисни ✕ ще раз, щоб вийти. Прогрес уроку не збережеться"); setTimeout(()=>delete $("#pClose").dataset.armed,2500); } };

const SAME_MSG="Це та сама відповідь, що й минулого разу. Зміни її, щоб перевірити ще раз.";
function setDock(kind,title,text,label,enabled=true){
  if(label==="Перевірити" && sameAsTried()){ enabled=false; if(!title&&!text) text=SAME_MSG; }
  const d=$("#dock"); d.className="dock fixed"+(kind?" "+kind:"");
  $("#fbTitle").innerHTML=fmt(title); $("#fbText").innerHTML=fmt(text);
  const dg=!!(run&&run.diag) && idx<L.screens.length;
  $("#action").textContent= dg&&label==="Перевірити"? "Відповісти" : label; $("#action").disabled=!enabled;
  // неактивна кнопка пояснює себе: текст у #fbText (aria-live) — і як опис кнопки для читача екрана
  if(!enabled && tried!==null && text) $("#action").setAttribute("aria-describedby","fbText"); else $("#action").removeAttribute("aria-describedby");
  $("#skip").hidden=!dg;
}
function pProgress(){ const na=run.diag? Object.keys(run.res).length : 0, p= run.diag? Math.round(na/Math.max(1,na+LEARN.remaining(run.diag,run.res))*100) : Math.round(idx/L.screens.length*100); $("#pBar").style.width=p+"%"; $("#pBar").parentElement.setAttribute("aria-valuenow",p);
  $("#pCombo").innerHTML= run.combo>=2? icF("flame")+"×"+run.combo : ""; }
function fig(s){
  if(s.img) return `<figure class="${s.tall?"tall":s.fit?"fit":""}"><img src="${s.img}" alt="${attr(s.cap)}"><figcaption>${s.cap}</figcaption></figure>`;
  if(s.svg) return `<figure class="svgfig">${svgFig(s.svg)}</figure>`;
  if(s.fig) return `<figure class="svgfig">${mathFig(s.fig)}</figure>`;
  if(s.lab) return `<div id="labHost"></div>`;
  return "";
}
// Розгортна примітка під текстом екрана: чому джерела дають різні дати, звідки ці дати (D-022).
function noteHtml(s){
  if(!s.note) return "";
  const n = typeof s.note==="string"? {text:s.note} : s.note;
  const links = (n.links||[]).map(([t,u])=>`<li><a href="${urlAttr(u)}" target="_blank" rel="noopener">${t}</a></li>`).join("");
  return `<details class="note"><summary>${ic("info")}<span>${n.label||"Чому дві дати?"}</span></summary><div class="note-b">${n.text}${links?`<ul>${links}</ul>`:""}</div></details>`;
}
function renderScreen(){
  $("#player").scrollTo({top:0, behavior:"instant"});   // і для підсумку: інакше він відкривається з прокруткою попереднього екрана
  if(idx>=L.screens.length){ if(run.diag) renderDiagEnd(); else if(run.practice) renderPracticeEnd(); else renderEnd(); $("#player").scrollTo({top:0, behavior:"instant"}); return focusAction(); }
  const s=L.screens[idx]; checked=false; tries=0; tried=null; pProgress();
  lastAns=null; EV.log("screen", ()=>evItem(s)); HYPS.screen(s);
  let h=`<section class="screen" tabindex="-1"><div class="eyebrow">${run.diag? `Тест рівня · завдання ${Object.keys(run.res).length+1}` : s.eyebrow||""}</div>`;
  h+= s.type==="intro"? `<h1>${s.title}</h1>` : `<h2>${s.title}</h2>`;
  h+= fig(s) + (s.body||"") + noteHtml(s);
  if(s.type==="choice"||s.type==="multi"){
    st= s.type==="multi"? new Set() : null;
    if(s.type==="multi") h+=`<div class="fix">Можна обрати кілька</div>`;
    h+=`<div class="opts">${s.opts.map((o,k)=>`<button class="opt" type="button" data-k="${k}" aria-pressed="false"><span class="k">${letters[k]}</span><span>${o}</span></button>`).join("")}</div>`;
  }
  if(s.type==="sort"){
    st=s.items.map(()=>null);
    h+=`<div class="sort">${s.items.map((it,k)=>`<div class="srow" data-row="${k}"><b>${it[0]}</b><div class="seg">${s.bins.map((b,j)=>`<button type="button" data-r="${k}" data-b="${j}" aria-pressed="false">${b}</button>`).join("")}</div></div>`).join("")}</div>`;
  }
  if(s.type==="order"){
    st=[];
    h+=`<div class="opts" id="ord">${s.shuffle.map(k=>`<button class="opt" type="button" data-k="${k}" aria-pressed="false"><span class="k"></span><span>${s.items[k]}</span></button>`).join("")}</div><div class="fix" style="margin-top:6px">Торкнись ще раз, щоб прибрати номер.</div>`;
  }
  if(s.type==="slider"){
    st=s.start;
    h+=`<div class="slider"><output id="out">${s.start.toLocaleString("uk-UA")}</output><div class="fix" style="text-align:center">${s.unit}</div><input id="rng" type="range" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.start}" aria-label="Твоя оцінка"><div class="scale"><span>${s.min}</span><span>${s.max.toLocaleString("uk-UA")}</span></div></div>`;
  }
  if(s.type==="align"){ st=0; h+=alignHtml(s); }
  if(s.type==="shade"){ st=new Set(); h+=`<div class="shade" id="shade"></div><div class="counter" id="shcount" ${run.diag||s.hideCount?"hidden":""}></div>`; }
  if(s.type==="numline"){ st=0; h+=`<div class="numline"><div id="nlsvg"></div><div class="readout" ${run.diag||s.hideCount?"hidden":""}><span>Точка:</span><b id="nlval"></b></div><input id="nlrng" type="range" min="0" max="${s.max*s.den}" step="1" value="0" aria-label="Положення точки на промені"></div>`; }
  if(s.type==="number"){ st=""; const dec=numDecimal(s), sg=s.signed||s.answer<0||SEC.signed||SEC.grade>=7;   // «±» не має видавати знак відповіді: з 7 класу (або в розділі з signed) — завжди
    h+=`<div class="numbox">${sg?`<button type="button" class="sgn" id="numSign" aria-label="Змінити знак" aria-pressed="false">±</button>`:""}<input id="numIn" inputmode="${dec?"decimal":"numeric"}" ${dec?"":'pattern="[0-9]*"'} autocomplete="off" placeholder="?" aria-label="Відповідь"><span class="unit">${s.unit||""}</span></div>`; }
  if(s.type==="answer"){ st=""; h+=answerInput(s); }
  if(s.type==="fracin"){ st=""; h+=s.hideDen? `<div class="mblock">${mathHTML(s.expr)} =</div>`+answerInput(s) : `<div class="numbox big"><span class="m">${mathHTML(s.expr)}<span class="mo">=</span><span class="fr"><span class="nu"><input id="numIn" inputmode="numeric" pattern="[0-9]*" autocomplete="off" placeholder="?" aria-label="Чисельник відповіді"></span><span class="sr">/</span><span class="de">${s.den}</span></span></span></div>`; }
  if(LANG.TYPES.includes(s.type)) h+=langHtml(s);
  h+=`<div id="hintHost"></div></section>`;
  $("#stage").innerHTML=fmt(h);
  if(s.type==="intro"||s.type==="info"||s.type==="explore") setDock("","","",s.cta||"Далі");
  else if(["slider","align","numline","lab"].includes(s.type)) setDock("","","","Перевірити");
  else setDock("","","","Перевірити",false);
  bindScreen(s);
  if(!$("#numIn")) focusAction();   // поле відповіді отримує фокус саме (bindScreen)
}

/* кільця дерев */
function ringSeries(from,to,seed){ let x=seed*9301+49297; const out={}; for(let y=from;y<=to;y++){ x=(x*9301+49297)%233280; out[y]=0.25+0.75*(x/233280); } return out; }
function alignHtml(s){
  const ref=ringSeries(s.ref.from,s.ref.to,s.ref.seed), n=s.ref.to-s.ref.from+1, cw=10, W=n*cw;
  const refBars=Object.entries(ref).map(([y,v],i)=>`<rect x="${i*cw+1}" y="${40-v*36}" width="${cw-2}" height="${v*36}" rx="1.5" fill="var(--muted)"/>`).join("");
  const yrs=[s.ref.from, s.ref.from+20, s.ref.from+40, s.ref.to].map(y=>`<text x="${(y-s.ref.from)*cw+cw/2}" y="54" text-anchor="middle" font-size="11" fill="var(--muted)">${y}</text>`).join("");
  return `<div class="align"><svg viewBox="0 -2 ${W} 110" role="img" aria-label="Еталонний штрихкод кілець і кільця колоди">${refBars}${yrs}<g id="alsample"></g></svg>
    <div class="readout"><span>Останнє кільце колоди:</span><b id="alyear">—</b></div>
    <input id="alrng" type="range" min="0" max="${n-s.sample.len}" step="1" value="0" aria-label="Зсув колоди">
    <div class="readout"><span>Збіг візерунка</span><span id="almatch">—</span></div></div>`;
}
function alignUpdate(s){
  const ref=ringSeries(s.ref.from,s.ref.to,s.ref.seed), cw=10, start=s.sample.endYear-s.sample.len+1, off=st, sy=s.ref.from+off;
  let bars="", match=0;
  for(let k=0;k<s.sample.len;k++){ const v=ref[start+k], m=Math.abs(v-ref[sy+k])<0.001; if(m) match++;
    bars+=`<rect x="${(off+k)*cw+1}" y="${104-v*36}" width="${cw-2}" height="${v*36}" rx="1.5" fill="${m?"var(--ok)":"var(--accent)"}"/>`; }
  $("#alsample").innerHTML=`<rect x="${off*cw}" y="64" width="${s.sample.len*cw}" height="42" rx="4" fill="var(--accent-soft)"/>`+bars;
  $("#alyear").textContent=sy+s.sample.len-1; $("#almatch").textContent=`${Math.round(match/s.sample.len*100)}%`;
}
/* зафарбуй частини */
/* символьні формати (docs/CONTENT_SCHEMA.md §10): кнопки вставляють знак у місце курсора, «−» — звичайний мінус */
const ANS_UI={
  ratio:[[":","/"],"Запиши відношення через двокрапку: 2 : 3. Порядок чисел важливий."],
  coordinates2:[["(",";",")","-","/","√"],"Координати — у дужках через крапку з комою: (3; −2). Спершу x, потім y."],
  coordinates3:[["(",";",")","-","/","√"],"Координати — у дужках через крапку з комою: (1; −2; 3). Порядок: x, y, z."],
  exactRoot:[["√","π","/","-","(",")"],"Точна відповідь без округлення: 3√5, √2/2, 4π. Корінь спрости."],
  intervalSet:[["(","[",";","]",")","∞","∪","∅","-"],"Проміжок — через крапку з комою: [2; 5), (−∞; 3]. Кілька — через ∪, порожня множина — ∅."],
  expression:[["^","(",")","·","/","√"],"Степінь — ^ (x^2), множення — · або без знака (3ab), дріб — / з дужками: (a + 1)/(a − 1)."],
  periodicSet:[["π","k","±","/","(",")","^",";"],"Серія розв'язків через k: π/6 + 2πk. Кілька серій — через ; або ±."],
  // час і величини: приклад і одиниці — з самої вправи (answerUI), тож підказка не збігається з ключем
  time:[[":"],""],
  quantity:[[],""]};
/** Кнопки й підказка під полем answer: { keys, help, sym }. grade — клас вправи, signed — розділ зі знаковими числами.
    Чиста функція (лише LEARN): test-answer-ui звіряє приклади з help із ключем кожної вправи (SLID_ANS_UI.field). */
function answerUI(s, grade, signed){
  const kind=s.answerKind||"number", sym=ANS_UI[kind];
  // числова відповідь: «−» і дроби — лише коли їх уже вивчають або цього потребує сама вправа (LEARN.numberKeys)
  const nk= kind==="number"? LEARN.numberKeys(s, grade, signed) : null;
  const keys=sym? sym[0].slice() : kind==="comparison"? ["<",">","="] : kind==="list"? ["-","/",";"," "] : kind==="factors"? ["*","^"] : kind==="divrem"? [" ост. "] : [...(nk.minus?["-"]:[]), ...(nk.frac?["/"," "]:[])];
  if(kind==="list" && /[√±]/.test(String(s.answer))) keys.push("√","±");
  if(kind==="expression") for(const c of new Set(String(s.answer).match(/[\u0370-\u03ff]/g)||[])) if(c!=="π") keys.push(c);   // α, β… з ключа
  const units= kind==="quantity"? LEARN.quantityUnits(s)||[] : null;
  if(units) keys.push(...units);
  const pk= kind==="coordinates2"? LEARN.pairKey(s) : null, pv= pk&&pk.some(c=>c.expr)? [...new Set(pk.flatMap(c=>c.vars))].sort() : null;   // компоненти-вирази; приклад у підказці не має збігатися з ключем жодної вправи (test-answer-ui)
  if(pv) keys.push("^","·",...pv);
  // «√» — з 8 класу (квадратні корені) або коли корінь є в самому ключі; клас — розділу вправи, як у numberKeys (QA 7 кл. D-3)
  if(keys.includes("√") && (Number(grade)||0)<8 && !/[√∛∜]|sqrt/.test(Array.isArray(s.answer)? s.answer.join(";") : String(s.answer))) keys.splice(keys.indexOf("√"),1);
  const help=pv? "Координати — у дужках через крапку з комою: (2a; b − 1). Спершу x, потім y. Множення — · або без знака (2a), степінь — ^."
    : kind==="time"? `Час — години й хвилини через двокрапку: ${LEARN.timeExample(s)}.`
    : units? `Запиши число й одиницю (${units.join(", ")}). Кілька одиниць — через пробіл, спершу більші.`
    : sym? sym[1] : kind==="comparison"? "Запиши знак: <, > або =." : kind==="list"? "Запиши всі числа через крапку з комою. Порядок не має значення." : kind==="factors"? "Множники — через · або *. Степінь — через ^, наприклад 2^3 · 5." : kind==="divrem"? "Запиши неповну частку, потім кнопкою «ост.» — остачу: 3 ост. 2." : LEARN.numberHelp(s) || (nk.frac? "Дріб — через риску: 7/12. Мішане число — через пробіл: 2 1/3." : nk.dec? "Десятковий дріб — через кому: 2,5." : "");   // decimals, form "improper" — своя підказка (learn.js numberHelp)
  return { keys, help, sym:!!sym };
}
// Лише для читання (глибоко заморожена копія, рев'ю followup P3-4): test-answer-ui звіряє приклади підказок із ключами вправ.
const deepFreeze=o=>{ Object.values(o).forEach(v=>{ if(v&&typeof v==="object") deepFreeze(v); }); return Object.freeze(o); };
window.SLID_ANS_UI=deepFreeze({...JSON.parse(JSON.stringify(ANS_UI)), field:answerUI});
function answerInput(s){
  const kind=s.answerKind||"number", { keys, help, sym }=answerUI(s, s.grade ?? SEC.grade, !run.practice && SEC.signed);
  const unit=s.unit||(kind==="periodicSet"? "k ∈ ℤ" : "");
  return `<div class="numbox wide"><input id="numIn" inputmode="${kind==="number"||kind==="time"?"decimal":kind==="divrem"?"numeric":"text"}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="?" aria-label="Відповідь"><span class="unit" id="answerUnit">${esc(unit)}</span></div>${keys.length? `<div class="anskeys${sym?" sym":""}">${keys.map(v=>`<button type="button" data-ins="${esc(v)}" aria-label="Вставити ${esc(v===" "?"пробіл":v.trim()==="ост."?"остачу":v)}">${esc(v===" "?"пробіл":v==="-"?"−":v.trim())}</button>`).join("")}</div>` : ""}${help? `<div class="fix" style="text-align:center">${esc(help)}</div>` : ""}`;
}
const answerUnit = (s, value) => { const a=LEARN.parseAns(value); if(!s.unitForms||!a) return s.unit||""; const n=Math.abs(a.n/a.d); return Number.isInteger(n)? plural(n,s.unitForms) : s.unitForms[1]; };
function shadeUpdate(s){
  const box=$("#shade"), click={click:true, size:230};
  box.innerHTML = s.shape==="circle" ? circleSVG(s.n, i=>st.has(i)?1:0, {...click, label:`Круг на ${partsAcc(s.n)}, торкайся частин, щоб зафарбувати`}) : barSVG(Array(s.n).fill(1), i=>st.has(i)?1:0, {...click, h:70, label:`Смужка на ${partsAcc(s.n)}, торкайся частин, щоб зафарбувати`});
  $("#shcount").innerHTML = `Зафарбовано: ${fmt(`$${st.size}/${s.n}$`)}`;
  box.querySelectorAll(".part").forEach(p=>{ const tog=()=>{ if(checked) return; const i=+p.dataset.p; st.has(i)?st.delete(i):st.add(i); shadeUpdate(s); clearMarks(); setDock("","","","Перевірити", st.size>0); const np=$(`#shade [data-p="${i}"]`); if(np) np.focus(); };
    p.addEventListener("click",tog); p.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); tog(); } }); });
}
/* координатний промінь */
function numlineUpdate(s){
  const W=320, pad=20, len=W-2*pad, N=s.max*s.den, x=i=>pad+len*i/N;
  let g=`<line x1="${pad-8}" x2="${W-4}" y1="40" y2="40" stroke="var(--ink)" stroke-width="2"/><path d="M${W-4} 40 l-8 -5 v10 z" fill="var(--ink)"/>`;
  for(let i=0;i<=N;i++){ const whole=i%s.den===0; g+=`<line x1="${x(i)}" x2="${x(i)}" y1="${whole?30:34}" y2="${whole?50:46}" stroke="var(--ink)" stroke-width="${whole?2:1.2}"/>`; if(whole) g+=`<text x="${x(i)}" y="70" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" font-family="var(--mathf)">${i/s.den}</text>`; }
  const col = checked? (st===s.answer?"var(--ok)":"var(--bad)") : "var(--accent)";
  g+=`<circle cx="${x(st)}" cy="40" r="9" fill="${col}" stroke="var(--surface)" stroke-width="3"/>`;
  $("#nlsvg").innerHTML=`<svg viewBox="0 0 ${W} 80" role="img" aria-label="Координатний промінь від 0 до ${s.max}, кожна одиниця поділена на ${partsAcc(s.den)}">${g}</svg>`;
  const whole=Math.floor(st/s.den), rem=st%s.den;
  $("#nlval").innerHTML = fmt(`$${st}/${s.den}$`) + (whole && rem ? ` <span class="muted" style="font:500 15px var(--body)">=</span> ${fmt(`$${whole}~${rem}/${s.den}$`)}` : (st&&!rem? ` <span class="muted" style="font:500 15px var(--body)">= ${whole}</span>`:""));
}

/* числове поле: десяткові й від'ємні відповіді */
const numDecimal = s => true;   // кома дозволена завжди: інакше цифрова клавіатура підказує, що відповідь ціла
const numParse = v => +String(v).replace(/\u2212/g,"-").replace(",",".");
const numOk = (s,v) => String(v).trim()!=="" && Math.abs(numParse(v)-s.answer) <= (s.tol ?? 1e-9);
const numShow = v => String(v).replace(".",",").replace("-","−");
/* мовні вправи (app/lang.js, docs/CONTENT_SCHEMA.md §4.1): розмітка, стан st, позначки */
function langHtml(s){
  if(s.type==="gaps"){ const g=LANG.parseGaps(s.text); st=g.gaps.map(()=>null);
    const gapHtml=p=>`<span class="gap" role="group" aria-label="Пропуск ${p.n+1}">${p.opts.map((o,k)=>`<button type="button" class="gopt" data-g="${p.n}" data-o="${k}" aria-pressed="false"${LANG.optView(o).label?` aria-label="${LANG.optView(o).label}"`:""}>${esc(LANG.optView(o).text)}</button>`).join("")}</span>`;
    // слово з пропуском — у span.gw (white-space: nowrap), щоб рядок не переносився всередині слова поруч із пропуском
    let out="", open=false; const O=()=>{ if(!open){ out+='<span class="gw">'; open=true; } }, X=()=>{ if(open){ out+="</span>"; open=false; } };
    g.parts.forEach((p,k)=>{ const pg=g.parts[k-1]?.t==="gap", ng=g.parts[k+1]?.t==="gap";
      if(p.t==="gap"){ O(); out+=gapHtml(p); return; }
      let v=p.v;
      if(pg){ const h=v.match(/^[^\s<>]*/)[0]; out+=h; v=v.slice(h.length); if(v||!ng) X(); if(!v) return; }
      if(ng){ const t=v.match(/[^\s<>]*$/)[0]; out+=v.slice(0,v.length-t.length); X(); O(); out+=t; } else out+=v; });
    X();
    return `<div class="ltext">${out}</div>${g.gaps.some(p=>p.opts.includes(LANG.NONE))?`<div class="fix">∅ — нічого не писати.</div>`:""}`; }
  if(s.type==="pick"){ const p=LANG.parsePick(s.text); st=new Set();
    return `<div class="ltext">${p.parts.map(x=>x.t==="text"? esc(x.v) : `<button type="button" class="pw" data-w="${x.n}" aria-pressed="false">${esc(x.v)}</button>`).join("")}</div><div class="fix">Торкнись потрібних слів. Ще раз — щоб зняти вибір.</div>`; }
  if(s.type==="stress"){ const ws=s.words.map(LANG.parseStress); st=ws.map(()=>null);
    return `<div class="stress">${ws.map((w,k)=>`<div class="sword" role="group" aria-label="Наголос у слові «${attr(w.word)}»">${w.letters.map(l=>l.v? `<button type="button" class="sv" data-w="${k}" data-i="${l.i}" aria-pressed="false">${esc(l.ch)}</button>` : `<span>${esc(l.ch)}</span>`).join("")}</div>`).join("")}</div><div class="fix">Торкнись голосного, на який падає наголос.</div>`; }
  if(s.type==="split"){ const p=LANG.parseSplit(s.word), ls=[...p.word]; st=new Set();
    return `<div class="split" role="group" aria-label="Поділ слова «${attr(p.word)}»">${ls.map((c,k)=>`<span class="sl">${esc(c)}</span>`+(k<ls.length-1? `<button type="button" class="cut" data-c="${k+1}" aria-pressed="false" aria-label="Межа після «${attr(ls.slice(0,k+1).join(""))}»"></button>` : "")).join("")}</div><div class="fix">Торкнись проміжку між літерами, щоб поставити межу.</div>`; }
  if(s.type==="word"){ st=""; const keys=s.keys||[];
    return `<div class="numbox wide lword">${s.before?`<span class="unit">${esc(s.before)}</span>`:""}<input id="numIn" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="?" aria-label="Відповідь"><span class="unit">${esc(s.after||"")}</span></div>${keys.length?`<div class="anskeys sym">${keys.map(v=>`<button type="button" data-ins="${esc(v)}" aria-label="Вставити ${esc(v)}">${esc(v)}</button>`).join("")}</div>`:""}`; }
  return "";
}
function bindLang(s){
  const stage=$("#stage"), on=(sel,f)=>stage.querySelectorAll(sel).forEach(b=>b.onclick=()=>{ if(checked) return; f(b); clearMarks(); });
  if(s.type==="gaps") on(".gopt",b=>{ const g=+b.dataset.g, o=+b.dataset.o; st[g]=o;
    b.parentElement.querySelectorAll(".gopt").forEach(x=>x.setAttribute("aria-pressed",x===b)); setDock("","","","Перевірити", st.every(x=>x!==null)); });
  if(s.type==="pick") on(".pw",b=>{ const n=+b.dataset.w; st.has(n)?st.delete(n):st.add(n); b.setAttribute("aria-pressed",st.has(n)); setDock("","","","Перевірити", st.size>0); });
  if(s.type==="stress") on(".sv",b=>{ const w=+b.dataset.w, i=+b.dataset.i; st[w]=i;
    stage.querySelectorAll(`.sv[data-w="${w}"]`).forEach(x=>x.setAttribute("aria-pressed",x===b)); setDock("","","","Перевірити", st.every(x=>x!==null)); });
  if(s.type==="split") on(".cut",b=>{ const c=+b.dataset.c; st.has(c)?st.delete(c):st.add(c); b.setAttribute("aria-pressed",st.has(c)); setDock("","","","Перевірити", st.size>0); });
}
function langMarks(s, reveal){
  const stage=$("#stage"), mark=(el,ok)=>{ el.classList.remove("is-ok","is-bad"); if(ok!==null) el.classList.add(ok?"is-ok":"is-bad"); };
  if(s.type==="gaps"){ const g=LANG.parseGaps(s.text).gaps;
    stage.querySelectorAll(".gap").forEach((el,k)=>{ el.querySelectorAll(".gopt").forEach(b=>{ const o=+b.dataset.o; mark(b, o===st[k]? o===g[k].correct : reveal&&o===g[k].correct? true : null); }); }); }
  if(s.type==="pick"){ const ok=new Set(LANG.parsePick(s.text).correct);
    stage.querySelectorAll(".pw").forEach(b=>{ const n=+b.dataset.w; mark(b, st.has(n)? ok.has(n) : reveal&&ok.has(n)? true : null); }); }
  if(s.type==="stress"){ const ws=s.words.map(LANG.parseStress);
    stage.querySelectorAll(".sv").forEach(b=>{ const w=+b.dataset.w, i=+b.dataset.i; mark(b, st[w]===i? i===ws[w].correct : reveal&&i===ws[w].correct? true : null); }); }
  if(s.type==="split"){ const p=LANG.parseSplit(s.word), best=p.variants.map(v=>new Set(v)).sort((a,b)=>[...b].filter(x=>st.has(x)).length-[...a].filter(x=>st.has(x)).length)[0];
    stage.querySelectorAll(".cut").forEach(b=>{ const c=+b.dataset.c; mark(b, st.has(c)? best.has(c) : reveal&&best.has(c)? true : null); if(reveal&&best.has(c)) b.setAttribute("aria-pressed","true"); });
    if(reveal && !LANG.check(s,st)) $("#hintHost").innerHTML=`<div class="hint">${ic("check")}<span>Правильно: <b>${p.variants.map(v=>esc([...p.word].map((ch,k)=>(v.includes(k)?"-":"")+ch).join(""))).join("</b> або <b>")}</b></span></div>`; }
  if(s.type==="word"){ const ni=$("#numIn"), ok=LANG.check(s,st); mark(ni, ok);
    if(reveal && !ok) $("#hintHost").innerHTML=`<div class="hint">${ic("check")}<span>Правильна відповідь: <b>${esc(LANG.wordAnswers(s)[0])}</b></span></div>`; }
}
/* лабораторія: інтерактивна модель на екрані (app/lab.js) */
let LAB=null;
function bindScreen(s){
  const stage=$("#stage");
  LAB=null; window.__slidLab=null;
  if(s.lab && window.SLID_LAB){ LAB=window.SLID_LAB.mount($("#labHost"), s.lab, { fmt, onChange:()=>{ if(checked) return; clearMarks(); LAB.mark(""); if(s.type==="lab") setDock("","","","Перевірити"); } }); window.__slidLab=LAB; }
  if(s.type==="choice"||s.type==="multi") stage.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    if(checked) return; const k=+b.dataset.k;
    if(s.type==="choice"){ stage.querySelectorAll(".opt").forEach(x=>x.setAttribute("aria-pressed","false")); b.setAttribute("aria-pressed","true"); st=k; }
    else { st.has(k)?st.delete(k):st.add(k); b.setAttribute("aria-pressed",st.has(k)); }
    clearMarks(); setDock("","","","Перевірити", s.type==="choice"||st.size>0);
  });
  if(s.type==="order") stage.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    if(checked) return; const k=+b.dataset.k, pos=st.indexOf(k);
    if(pos>=0) st.splice(pos,1); else st.push(k);
    stage.querySelectorAll("#ord .opt").forEach(x=>{ const p=st.indexOf(+x.dataset.k); x.setAttribute("aria-pressed",p>=0); x.querySelector(".k").textContent=p>=0?p+1:""; });
    clearMarks(); setDock("","","","Перевірити", st.length===s.items.length);
  });
  stage.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>{
    if(checked) return; st[+b.dataset.r]=+b.dataset.b;
    b.parentElement.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));
    clearMarks(); setDock("","","","Перевірити", st.every(x=>x!==null));
  });
  const rng=$("#rng"); if(rng) rng.oninput=()=>{ if(checked) return; st=+rng.value; $("#out").textContent=st.toLocaleString("uk-UA"); };
  const al=$("#alrng"); if(al){ alignUpdate(s); al.oninput=()=>{ if(checked) return; st=+al.value; alignUpdate(s); if(tries) setDock("","","","Перевірити"); }; }
  if(s.type==="shade") shadeUpdate(s);
  if(LANG.TYPES.includes(s.type)) bindLang(s);
  const nl=$("#nlrng"); if(nl){ numlineUpdate(s); nl.oninput=()=>{ if(checked) return; st=+nl.value; numlineUpdate(s); if(tries) setDock("","","","Перевірити"); }; }
  const sgn=$("#numSign"); if(sgn) sgn.onclick=()=>{ if(checked) return; const ni=$("#numIn"); ni.value= ni.value.startsWith("-")? ni.value.slice(1) : "-"+ni.value; ni.oninput(); ni.focus(); };
  const ni=$("#numIn"); if(ni){ ni.oninput=()=>{ ni.value= s.type==="word" ? ni.value.slice(0,80) : s.answerKind==="divrem" ? ni.value.replace(/\s+/g," ").slice(0,40) : s.type==="answer"||s.hideDen ? ni.value.replace(/\./g,",").replace(/\u2212/g,"-").slice(0,120) : s.type==="number"&&numDecimal(s) ? ni.value.replace(/\./g,",").replace(/[^0-9,-]/g,"").replace(/(?!^)-/g,"").replace(/(,.*),/g,"$1").slice(0,10) : ni.value.replace(/[^0-9]/g,"").slice(0,6); st=ni.value; if(s.unitForms&&$("#answerUnit")) $("#answerUnit").textContent=answerUnit(s,st); ni.classList.remove("is-ok","is-bad"); setDock("","","","Перевірити", st.trim().length>0); };
    stage.querySelectorAll(".anskeys button").forEach(b=>b.onclick=()=>{ if(checked) return; const v=b.dataset.ins;
      if(b.parentNode.classList.contains("sym")){ const a=ni.selectionStart??ni.value.length, z=ni.selectionEnd??a; ni.value=ni.value.slice(0,a)+v+ni.value.slice(z); ni.oninput(); ni.focus(); ni.setSelectionRange(a+v.length,a+v.length); return; }
      if(v.trim()==="ост." && (!/\d/.test(ni.value) || /ост/i.test(ni.value))) return ni.focus(); ni.value= v==="-"? (ni.value.startsWith("-")? ni.value.slice(1) : "-"+ni.value) : ni.value+v; ni.oninput(); ni.focus(); });
    ni.onkeydown=e=>{ if(e.key!=="Enter") return; e.preventDefault(); if(!$("#action").disabled) $("#action").click(); };   /* preventDefault: той самий Enter не «натисне» ще й «Далі», на яку перейшов фокус */
    // Автофокус поля — лише з мишею/клавіатурою. На телефоні й планшеті (основний вказівник — палець) фокус у полі відкрив би
    // екранну клавіатуру ще до того, як дитина прочитала умову (Android); поле вона торкне сама. Фокус — на екран, щоб Tab вів з його початку.
    if(coarse()) $("#stage .screen")?.focus({preventScroll:true}); else setTimeout(()=>ni.focus({preventScroll:true}),350); }
}
function clearMarks(){ $("#stage").querySelectorAll(".is-ok,.is-bad").forEach(e=>e.classList.remove("is-ok","is-bad")); }
function lock(){ $("#stage").querySelectorAll(".opt,.seg button,input,.sgn,.anskeys button,.gopt,.pw,.sv,.cut").forEach(b=>b.disabled=true); if(LAB) LAB.lock(); }

function gradeNow(s){
  switch(s.type){
    case "choice": return st===s.correct;
    case "multi": { const c=new Set(s.correct); return c.size===st.size && [...c].every(x=>st.has(x)); }
    case "sort": return s.items.every((it,k)=>st[k]===it[1]);
    case "order": return st.every((k,p)=>k===p);
    case "slider": return Math.abs(st-s.answer)/s.answer<=s.tol;
    case "align": return s.ref.from+st+s.sample.len-1===s.sample.endYear;
    case "shade": return st.size===s.target;
    case "numline": return st===s.answer;
    case "number": return numOk(s,st);
    case "fracin": return s.hideDen? LEARN.checkAns({answer:s.answer+"/"+s.den,fractionOnly:true},st)==="ok" : parseInt(st,10)===s.answer;
    case "answer": return (lastAns=LEARN.checkAns(s,st))==="ok";   // lastAns — вердикт для журналу подій (без другої перевірки)
    case "lab": return window.SLID_LAB.check(s.lab, LAB.get(), s.goal);
    case "gaps": case "pick": case "stress": case "word": case "split": return LANG.check(s, st);
  }
}
function showMarks(s, reveal){
  const stage=$("#stage");
  if(s.type==="choice") stage.querySelectorAll(".opt").forEach((el,k)=>{ el.classList.remove("is-ok","is-bad"); if(k===st) el.classList.add(k===s.correct?"is-ok":"is-bad"); else if(reveal&&k===s.correct) el.classList.add("is-ok"); });
  if(s.type==="multi"){ const c=new Set(s.correct); stage.querySelectorAll(".opt").forEach((el,k)=>{ el.classList.remove("is-ok","is-bad"); if(st.has(k)) el.classList.add(c.has(k)?"is-ok":"is-bad"); else if(reveal&&c.has(k)) el.classList.add("is-ok"); }); }
  if(s.type==="sort") stage.querySelectorAll(".srow").forEach((el,k)=>{ el.classList.remove("is-ok","is-bad"); el.classList.add(st[k]===s.items[k][1]?"is-ok":"is-bad"); if(reveal&&st[k]!==s.items[k][1]) el.insertAdjacentHTML("beforeend",`<span class="fix">Правильно: ${fmt(s.bins[s.items[k][1]])}</span>`); });
  if(s.type==="order") stage.querySelectorAll("#ord .opt").forEach(el=>{ const k=+el.dataset.k, p=st.indexOf(k); el.classList.remove("is-ok","is-bad"); el.classList.add(p===k?"is-ok":"is-bad"); if(reveal&&p!==k) el.querySelector(".k").textContent=`${p+1}→${k+1}`; });
  if(s.type==="number"||s.type==="fracin"||s.type==="answer"){ const ni=$("#numIn"), ok=gradeNow(s); ni.classList.remove("is-ok","is-bad"); ni.classList.add(ok?"is-ok":"is-bad"); if(reveal && !ok){ const sym=s.type==="answer"&&ANS_UI[s.answerKind]; const value=s.hideDen? `${s.answer}/${s.den}` : sym? LEARN.ansText(s) : Array.isArray(s.answer)? s.answer.join("; ") : String(s.answer); const a=LEARN.parseAns(value); const unit=s.unitForms&&a? plural(a.n/a.d,s.unitForms) : s.unit||""; $("#hintHost").innerHTML=`<div class="hint">${ic("check")}<span>Правильна відповідь: <b>${s.answerKind==="divrem"? `${s.answer[0]} (ост. ${s.answer[1]})`+(s.unit?" "+esc(s.unit):"") : s.answerKind==="quantity"? esc(value) : sym? fmt("$"+esc(value).replace(/\./g,",")+"$")+(unit?" "+esc(unit):"") : s.type==="answer"||s.hideDen? fmt("$"+esc(value).replace(".",",").replace(" ","~")+"$")+(unit?" "+esc(unit):"") : numShow(s.answer)}</b></span></div>`; } }
  if(s.type==="lab"){ const ok=gradeNow(s); if(reveal && !ok){ LAB.set(s.solution); LAB.mark("is-ok"); $("#hintHost").innerHTML=fmt(`<div class="hint">${ic("check")}<span>${s.reveal||"Ось як має бути — подивись на модель."}</span></div>`); } else LAB.mark(ok?"is-ok":"is-bad"); }
  if(LANG.TYPES.includes(s.type)) langMarks(s, reveal);
  if(s.type==="shade"){ const box=$("#shade"); box.classList.remove("is-ok","is-bad"); box.classList.add(st.size===s.target?"is-ok":"is-bad"); }
  if(s.type==="numline"){ if(reveal){ st=s.answer; $("#nlrng").value=st; } numlineUpdate(s); }
}
function gain(n){ const m=L.boss?2:1; const v=n*m; run.xp+=v; addXp(v); return v; }
function skillHit(s, ok){ if(!s.sk) return; const k=skey(C,s.sk); const r=S.skills[k]||(S.skills[k]={ok:0,total:0}); r.total++; if(ok) r.ok++; }

/* журнал подій: опис екрана/вправи, сирий запис і вердикт (лише читання; EV обчислює в try/catch) */
const evMode = () => run?.diag? "diag" : run?.practice? "practice" : "lesson";
const evItem = s => ({ mode:evMode(), c:C?.id, l: run?.practice? s.lesson : L.id, i:idx, id:s.id ?? null, key:s.key ?? null, pool:s.pool?.id ?? null,
  type:s.type, ak:s.answerKind ?? null, sk:s.sk ?? null, pre:s.pre ?? null, topic:s.topic ?? null, rev:s.rev ?? null, boss:!!L.boss, hyp:!!(s.hyp||s.poll), lvl:s.lvl ?? null });
const evRaw = s => LAB && s.type==="lab"? LAB.get() : st;
// answer: ok/form/bad — той самий результат checkAns, що його щойно дав gradeNow (lastAns), без другої перевірки. У тесті рівня
// вердикт дає diagVerdict (OK / HALF / BAD) і сам checkAns не повертає: для журналу — один checkAns (лише number/time/quantity, дешево),
// щоб бачити form; HALF пише diagHalf з verdict "half"
let lastAns=null;
const evVerdict = (s, ok) => s.type!=="answer"? (ok? "ok" : "bad") : lastAns || (run?.diag? LEARN.checkAns(s,st) : ok? "ok" : "bad");
/* answer: ключ (ans ≤ 60 символів рядком, інакше ansCut: 1; choice — індекс, multi — масив індексів), код причини form/half (fc),
   набір gen (gv, genAt) — для гіпотез і реплею (docs/design/diag-hypothesis-math.md §3.1). fc: formCode викликає checkAns, тож у плеєрі
   ця функція стоїть до власного checkAns гілки помилки (formHint/badHint рахуються заново) — тексти доку не змінюються */
function evKey(s, verdict, raw){ const o={}; try{
  const a = s.type==="choice"? s.correct : s.type==="multi"? [...s.correct] : s.type==="answer"? LEARN.ansText(s) : s.type==="word"? LANG.wordAnswers(s)[0]
    : s.type==="fracin"? (s.hideDen? `${s.answer}/${s.den}` : String(s.answer)) : ["number","numline","slider"].includes(s.type)? String(s.answer) : s.type==="shade"? String(s.target) : undefined;
  if(typeof a==="string" && a.length>60) o.ansCut=1; else if(a!==undefined) o.ans=a;
  if((verdict==="form"||verdict==="half") && s.type==="answer" && typeof raw==="string") o.fc=LEARN.formCode(s, raw);
  if(s.gv && Number.isInteger(s.genAt)){ o.gv=s.gv; o.genAt=s.genAt; } }catch(e){} return o; }
/** item.u — вузли графа вмінь об'єкта за правилом прив'язки (LEARN.nodesOf = graphBind, те саме правило, що в tools/graph-lib.mjs;
    docs/design/skill-graph-math.md §2.4, етап G3): масив id або null (вузла немає); предмет без графа — поля немає. Лише журнал:
    граф нічого не змінює для дитини, трекер гіпотез u не отримує (HYPS.capture будує item сам). Помилка — без u, подія не губиться. */
function evU(rec){ if(!rec || !C?.graph) return rec; let u=null; try{ u=LEARN.nodesOf(C, rec); }catch(e){ u=null; } return { ...rec, u }; }
/** Подія answer у журнал і ті самі дані для трекера гіпотез (HYPS.capture) — на той самий момент, до змін S.seen і екрана.
    Без журналу (немає модуля чи IndexedDB) дані обчислюються лише для гіпотез, і лише коли трекер увімкнено. */
function evAnswer(s, f){ let r=null; EV.log("answer", ()=>(r=evU(f()))); if(!HYPS.on || C?.id!=="math") return null; try{ return HYPS.capture(s, r || f()); }catch(e){ return null; } }
/* тест рівня, answer: півбала (LEARN.HALF; engine-diag-half-credit) — значення правильне, а вимоганого умовою вигляду немає чи корінь
   не обчислено (LEARN.diagVerdict). Вердикт зберігається одразу (закритий плеєр не дасть відповісти вдруге); далі короткий екран-пояснення
   з наявним текстом formHint, без другої спроби й без «Ще не знаю»; «Далі» — наступне завдання тесту (diagNext). */
function diagHalf(s){ const ha=evAnswer(s, ()=>{ const raw=evRaw(s); return { ...evItem(s), try:1, verdict:"half", res:LEARN.HALF, raw, hint:false, final:true, ...evKey(s, "half", raw) }; });
  run.res[idx]=LEARN.HALF; save(); checked=true; lock(); pProgress();
  setDock("info","Зараховано півбала.",LEARN.formHint(s,st),"Далі"); $("#skip").hidden=true; HYPS.answer(ha); focusAction(); }
function diagNext(){ idx=LEARN.nextItem(run.diag,run.res); if(idx<0) idx=L.screens.length; renderScreen(); }
function check(){
  const s=L.screens[idx];
  // answer у тесті: OK / HALF / BAD за LEARN.diagVerdict (інший запис того самого — OK; вимаганий умовою вигляд не показано — HALF)
  if(run.diag){ const v= s.type==="answer"? LEARN.diagVerdict(s,st) : gradeNow(s)? LEARN.OK : LEARN.BAD; return v===LEARN.HALF? diagHalf(s) : diagAnswer(v); }
  if(s.poll||s.hyp){ EV.log("answer", ()=>({ ...evItem(s), try:1, verdict:"hyp", raw:evRaw(s), hint:false, final:true }));
    if(s.poll) S.polls[s.poll]=st; const g=gain(5); checked=true; lock();
    setDock("info", `${s.fbTitle} <span class="gain">+${g}</span>`, s.fbText, "Далі"); return focusAction(); }
  if(sameAsTried()) return refocusAnswer();
  const ok=gradeNow(s);
  const ha=evAnswer(s, ()=>{ const vd=evVerdict(s,ok), raw=evRaw(s); return { ...evItem(s), try:tries+1, verdict:vd, raw, hint:tries>0 && !!s.hint, final: ok || tries>0 || s.type==="slider", ...evKey(s, vd, raw) }; });
  if(!ok && s.pre) run.weak.add(s.pre);
  const preNote = (!ok && s.pre) ? (()=>{ const f=findLesson(s.pre); return f? `<span class="prenote">${ic("bulb")}Ця задача спирається на тему «${f.l.title}» (${f.sec.grade} клас). Наприкінці уроку запропоную її повторити.</span>` : ""; })() : "";
  if(!(ok || tries>0 || s.type==="slider")){
    tries++; showMarks(s,false); run.combo=0; run.mistakes++; pProgress();
    if(s.hint) $("#hintHost").innerHTML=fmt(`<div class="hint">${ic("bulb")}<span><b>Підказка:</b> ${s.hint}</span></div>`);
    const msg = s.type==="sort"? "Червоні рядки розкладено неправильно. Зміни їх і перевір ще раз."
             : s.type==="order"? "Червоні пункти стоять не на своїх місцях. Торкнись, щоб прибрати номер, і спробуй ще."
             : s.type==="align"? "Посувай колоду, поки всі стовпчики не стануть зеленими."
             : s.type==="shade"? `Потрібно зафарбувати ${s.target} ${s.target===1?"частину":s.target<5?"частини":"частин"}, а зафарбовано ${st.size}.`
             : s.type==="numline"? "Точка стоїть не там. Порахуй поділки від нуля."
             : s.type==="lab"? "Ще не те. Зміни модель і перевір ще раз."
             : s.type==="answer"? (r=>r==="form"? LEARN.formHint(s,st) : LEARN.badHint(s,st,r) || "Зміни відповідь і перевір ще раз.")(LEARN.checkAns(s,st))   // badHint: межа перевірки, чужа одиниця, знаменник без дужок
             : s.type==="gaps"? "Червоні літери обрано неправильно. Зміни їх і перевір ще раз."
             : s.type==="pick"? "Червоні слова обрано зайво — або якогось слова бракує. Зміни вибір і перевір ще раз."
             : s.type==="stress"? "Наголос не там. Вимов слово вголос, повільно, і спробуй ще раз."
             : s.type==="split"? "Межі стоять не так. Зміни їх і перевір ще раз."
             : s.type==="choice"? "Обери інший варіант і перевір ще раз."
             : s.type==="multi"? "Зміни вибір і перевір ще раз."
             : "Зміни відповідь і перевір ще раз.";
    tried=answerSig();
    setDock("bad", s.fbBad||"Не зовсім.", msg+preNote, "Спробувати ще раз", false);   // активна знову, щойно відповідь змінено
    HYPS.answer(ha);   // тінь гіпотез — після показаного повідомлення (formHint/badHint уже обчислено)
    return refocusAnswer();
  }
  checked=true; lock(); run.graded++;
  let g=0;
  if(ok){
    g=gain(tries===0?10:5);
    if(tries===0){ run.first++; run.combo++; run.best=Math.max(run.best,run.combo); S.bestCombo=Math.max(S.bestCombo||0,run.combo);
      if(run.combo>=3 && run.combo%2===1){ const b=gain(5); g+=b; toast(icF("flame")+`Комбо ×${run.combo}! +${b}`); $("#pCombo").classList.remove("pop"); void $("#pCombo").offsetWidth; $("#pCombo").classList.add("pop"); } }
    else run.combo=0;
  } else { run.combo=0; run.mistakes++; if(s.type==="slider") g=gain(3); }
  skillHit(s, ok && tries===0);
  // журнал для пошуку повторюваних помилок: помилку приписуємо темі-передумові (pre), якщо вона вказана, інакше — цьому уроку
  if(s.type!=="slider"){ const first=ok && tries===0, here= run.practice? s.lesson : L.id;
    LEARN.record(S, { l: !first && s.pre && findLesson(s.pre)? s.pre : here, at:here, sk: s.sk? skey(C,s.sk) : null, ok:first, day:dkey() });
    if(run.practice){ S.seen[s.key]=first?1:0; run.practice.res.push({ lesson:s.lesson, ok:first }); } }
  showMarks(s, !ok);
  if(!ok && s.type==="align"){ st=s.sample.endYear-s.sample.len+1-s.ref.from; $("#alrng").value=st; alignUpdate(s); }
  pProgress(); save(); renderTop();
  const title = ok? s.fbOk : (s.type==="slider"? s.fbBad : "Ось правильна відповідь.");
  setDock(ok?"ok":"bad", `${title}${g?` <span class="gain">+${g}</span>`:""}`, s.fbText+(ok?"":preNote), "Далі");
  HYPS.answer(ha);
  focusAction();   // поле заблоковано — без цього фокус падає на BODY і Enter нікуди не веде
}
/** Після першої помилки: фокус назад у поле відповіді (текст виділено, щоб одразу виправити) або на обраний елемент.
    Після дотику (телефон, планшет) поле не фокусуємо: інакше знову відкриється екранна клавіатура й закриє підказку
    та пояснення. Фокус — на екран, підказку прокручуємо у видиму частину; поле дитина торкне сама.
    Так само на пристрої, де основний вказівник — палець (pointer: coarse), навіть якщо перевірку запустив Enter:
    «Готово/Go» екранної клавіатури приходить як звичайний keydown Enter, і відрізнити його від фізичної клавіатури не можна.
    Ціна для планшета з фізичною клавіатурою — один Tab або дотик до поля після помилки. */
function coarse(){ try{ return !!(window.matchMedia && matchMedia("(pointer: coarse)").matches); }catch(e){ return false; } }
let lastPointer="";
document.addEventListener("pointerdown", e=>{ lastPointer=e.pointerType; }, true);
document.addEventListener("keydown", ()=>{ lastPointer="key"; }, true);
function refocusAnswer(){ const ni=$("#numIn"), touch= lastPointer==="touch"||lastPointer==="pen"||coarse();
  if(touch){ const h=$("#hintHost .hint"); if(h) h.scrollIntoView({block:"nearest"}); const a=document.activeElement; if(a && a!==document.body && $("#stage").contains(a) && a!==ni) return; $("#stage .screen")?.focus({preventScroll:true}); return; }
  if(ni && !ni.disabled){ ni.focus({preventScroll:true}); ni.select(); return; }
  const a=document.activeElement; if(a && a!==document.body && $("#stage").contains(a)) return; focusAction(); }
$("#action").onclick=()=>{
  if(idx>=L.screens.length){ const f=afterEnd; afterEnd=null; closePlayer(); if(f) f(); return; }
  const s=L.screens[idx];
  if(checked&&run.diag) return diagNext();   // після екрана-пояснення HALF
  if(s.type==="intro"||s.type==="info"||s.type==="explore"||checked){ idx++; renderScreen(); return; }
  check();
};

/* ---------- Кінець уроку ---------- */
function renderEnd(){
  pProgress(); $("#pCombo").innerHTML="";
  const acc = run.graded? run.first/run.graded : 1;
  const stars = acc>=0.9?3 : acc>=0.65?2 : 1;
  const bonus = gain(20 + (run.mistakes===0?10:0));
  const prev=S.lessons[L.id];
  S.lessons[L.id]={ done:true, stars:Math.max(stars, prev?.stars||0), best:Math.max(run.xp, prev?.best||0) };
  touchStreak();
  // персональний план: закриваємо крок, якщо повторення вдалося; шукаємо теми, де помилки повторюються
  const planRes=LEARN.lessonDone(S, C.id, L.id, acc, dkey(), learnCtx(C));
  const recs=LEARN.detect(S, learnCtx(C)).filter(r=>findLesson(r.l).c.id===C.id);
  const newSteps= recs.length? LEARN.syncPlan(S, C.id, recs, dkey(), learnCtx(C)) : [];
  const leftSteps=stepsTodo(C).length;
  const nPool=poolItems(C).filter(it=>it.lesson===L.id).length; if(nPool) LEARN.srsInit(S, L.id, dkey());
  EV.log("lesson_end", ()=>({ c:C.id, l:L.id, grade:SEC.grade, boss:!!L.boss, acc, stars, first:run.first, graded:run.graded, mistakes:run.mistakes, xp:run.xp, linked:run.linked, closed:planRes.closed.map(st=>st.l), retry:!!planRes.retry, recs:recs.map(r=>({ l:r.l, why:r.why, sk:r.sk||null })), steps:newSteps.map(st=>st.l), weak:[...run.weak] }));
  HYPS.lessonEnd(L.id, acc);
  const nb=[];
  award("first",nb);
  if(run.mistakes===0) award("perfect",nb);
  if((S.bestCombo||0)>=5) award("combo5",nb);
  if(liveStreak()>=3) award("streak3",nb);
  if(subjectsFor().length>1 && subjectsFor().every(c=>lessonsOf(c).some(l=>done(l.id)))) award("multi",nb);
  if(L.badge) award(L.badge,nb);
  const star=(C.badges||[]).find(b=>b.allstar); if(star && lessonsOf(C).every(l=>S.lessons[l.id]?.stars===3)) award(star.id,nb);
  save();
  const lvl=levelOf(S.xp), up=lvl.n>run.startLvl, o=L.outro||{};
  const pollLine = (o.pollKey && S.polls[o.pollKey]!=null) ? `<p>Твій вибір на початку: ${o.pollText[S.polls[o.pollKey]]}. ${o.text}</p>` : `<p>${o.text||""}</p>`;
  $("#stage").innerHTML=fmt(`<section class="screen endhero">
    <div class="bigstars" aria-label="${stars} з 3 зірок">${[0,1,2].map(i=>`<span class="${i<stars?"":"off"}">${icF("star")}</span>`).join("")}</div>
    <div class="eyebrow">${C.short} · ${L.boss?"фінал розділу":"урок пройдено"}</div>
    <h1>${esc(L.title)}</h1>
    <div style="text-align:left;width:100%">${pollLine}</div>
    <div class="gains">
      <div class="stat" style="color:var(--gold)">${icF("bolt")}<b>+${run.xp}</b><span>досвіду (з них ${bonus} бонус)</span></div>
      <div class="stat" style="color:var(--ok)">${ic("target")}<b>${run.first}/${run.graded}</b><span>з першої спроби</span></div>
      <div class="stat" style="color:var(--flame)">${icF("flame")}<b>${run.best}</b><span>найдовше комбо</span></div>
    </div>
    ${up?`<div class="levelup"><span class="eyebrow" style="color:inherit;opacity:.7">Новий рівень</span><b>${lvl.n} · ${lvl.title}</b></div>`:""}
    ${nb.map(id=>{ const b=BADGES.find(x=>x.id===id); return `<div class="newbadge" style="width:100%"><div class="medal">${ic(b.icon)}</div><div><div class="eyebrow">Новий значок</div><b>${b.name}</b><div class="muted" style="font-size:13px">${b.desc}</div></div></div>`; }).join("")}
    ${planRes.closed.length?`<div class="planok">${ic("check")}<span><b>Крок плану виконано.</b> ${leftSteps? `У плані ще ${leftSteps} ${plural(leftSteps,["крок","кроки","кроків"])}.` : "План на повторення закрито — далі уроки за програмою."}</span></div>`:""}
    ${planRes.retry?`<div class="planok soft">${ic("bulb")}<span>Тема ще не закріпилась, тож крок лишається в плані. Повернись до нього, коли будеш готовий.</span></div>`:""}
    ${newSteps.map(st=>recCard(st, st.l===L.id)).join("")}
    ${nPool&&!newSteps.some(st=>st.l===L.id)?`<div class="rec prac"><div class="eyebrow">Закріпи тему</div><p class="small" style="margin:0">У тренуванні відкрилися задачі з цієї теми — ${nPool} ${plural(nPool,["задача","задачі","задач"])} з підручників. Відповідь записуєш сам.</p><button class="btn ghost" type="button" data-practice="${L.id}">Потренуватися</button></div>`:""}
    ${!nPool&&run.linked&&SEC.grade<S.grade?`<p class="muted small">Тренувальних задач до цієї теми поки немає. Коли вони з’являться, тренування відкриється без повторного проходження уроку.</p>`:""}
    ${[...run.weak].filter(id=>!newSteps.some(st=>st.l===id)).map(id=>{ const f=findLesson(id); if(!f) return ""; return `<div class="rec"><div class="eyebrow">Варто повторити</div><div class="recrow"><span class="dot lg s-${f.c.id}">${ic(f.l.icon)}</span><span class="grow"><b>${esc(f.l.title)}</b><span class="muted small">${f.c.short} · ${f.sec.grade} клас · ${f.l.screens.length} кроків</span></span></div><p class="small" style="margin:0">Кілька помилок у цьому уроці пов'язані з цією темою. Коротке повторення допоможе.</p><button class="btn" type="button" data-lesson="${id}">Повторити зараз</button></div>`; }).join("")}
    <div class="learned"><div class="eyebrow">Що ти тепер умієш</div>${(o.learned||[]).map(t=>`<div class="li">${ic("check")}<span>${t}</span></div>`).join("")}</div>
  </section>`);
  setDock("","","", run.linked? "Повернутися" : SEC.lessons[li+1]? "До уроків розділу" : "Завершити розділ");
  $("#stage").querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>startById(b.dataset.lesson));
  $("#stage").querySelectorAll("[data-practice]").forEach(b=>b.onclick=()=>startPractice(C.id,b.dataset.practice));
  confetti(stars);
}
function confetti(stars){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv=document.createElement("canvas"); cv.className="confetti"; document.body.appendChild(cv);
  const dpr=devicePixelRatio||1, W=innerWidth, H=innerHeight; cv.width=W*dpr; cv.height=H*dpr; const x=cv.getContext("2d"); x.scale(dpr,dpr);
  const cs=getComputedStyle(document.documentElement); const cols=["--accent","--gold","--ok","--flame"].map(v=>cs.getPropertyValue(v).trim());
  const ps=[...Array(40+stars*30)].map(()=>({x:W/2+(Math.random()-.5)*80,y:H*0.25,vx:(Math.random()-.5)*9,vy:-Math.random()*9-3,r:Math.random()*6+3,c:cols[Math.random()*4|0],a:Math.random()*6}));
  let t=0; (function f(){ x.clearRect(0,0,W,H); ps.forEach(p=>{ p.vy+=.28; p.x+=p.vx; p.y+=p.vy; p.a+=.2; x.save(); x.translate(p.x,p.y); x.rotate(p.a); x.fillStyle=p.c; x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2); x.restore(); }); if(++t<110) requestAnimationFrame(f); else cv.remove(); })();
}

document.addEventListener("slid:pwa",()=>{ if(tab==="profile" && $("#player").hidden) render(); });
document.addEventListener("keydown",e=>{ if(e.key!=="Escape") return; if($("#sheetHost").innerHTML){ $("#sheetHost").innerHTML=""; return; } if($("#player").hidden && tab==="path") up(); });
SUBJ.forEach(activePlan); save();
render();
})();
