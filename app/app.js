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
function schoolWeek(){ if(S.weekOverride) return S.weekOverride; const now=new Date(); const y=now.getMonth()>=7? now.getFullYear() : now.getFullYear()-1;
  const d0=new Date(y,8,1); d0.setDate(d0.getDate()-((d0.getDay()+6)%7)); return Math.max(1, Math.min(35, Math.floor((now-d0)/(7*864e5))+1)); }

/* ---------- Формули: $…$ у рядку, $$…$$ окремим рядком ---------- */
const MTOK = /"[^"]*"|\([^()]*\)|\d+(?:,\d+)?|[a-zA-Z]|\?|~|\/|\*|:|<|>|=|\+|-|\s+|[^\s]/g;
const isAtom = t => t && (/^\(.*\)$/.test(t) || /^\d/.test(t) || /^[a-zA-Z?]$/.test(t));
function atomHTML(t, inFrac){
  if(/^\(.*\)$/.test(t)) return inFrac ? mathHTML(t.slice(1,-1)) : `(${mathHTML(t.slice(1,-1))})`;
  if(/^[a-zA-Z]$/.test(t)) return `<i class="mv">${t}</i>`;
  if(t==="?") return `<span class="mq">?</span>`;
  return t;
}
function mathHTML(src){
  const T = src.match(MTOK) || []; let out = "";
  const OPS = {"*":"·","-":"−","+":"+","=":"=",":":":","<":"&lt;",">":"&gt;"};
  for(let i=0;i<T.length;i++){
    const t=T[i];
    if(/^\s+$/.test(t) || t==="~") continue;
    if(t[0]==='"'){ out += `<span class="mt">${t.slice(1,-1)}</span>`; continue; }
    if(isAtom(t) && T[i+1]==="/" && isAtom(T[i+2])){
      out += `<span class="fr"><span class="nu">${atomHTML(t,true)}</span><span class="sr">/</span><span class="de">${atomHTML(T[i+2],true)}</span></span>`; i+=2; continue;
    }
    if(OPS[t]) { out += `<span class="mo">${OPS[t]}</span>`; continue; }
    out += isAtom(t) ? atomHTML(t,false) : t;
  }
  return out;
}
const fmt = s => String(s??"")
  .replace(/\$\$([\s\S]+?)\$\$/g, (_,m)=>`<span class="mblock">${mathHTML(m)}</span>`)
  .replace(/\$([^$]+)\$/g, (_,m)=>`<span class="m">${mathHTML(m)}</span>`);

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
  cake:'<path d="M4 21h16M5 21v-8h14v8M5 16c2 1.5 3.5-1 5 0s3 1.5 5 0 3-1 4 0"/><path d="M12 13V9M12 6.5c-.8-.8-.8-1.8 0-3 .8 1.2.8 2.2 0 3z"/>'
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
const fresh = () => ({ name:"", grade:null, weekOverride:null, theme:"system", subject:SUBJ[0].id, unlockAll:false, xp:0, lessons:{}, days:{}, streak:{count:0,last:null}, badges:{}, skills:{}, polls:{}, bestCombo:0 });
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch(e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} };

const dkey = (d=new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const addDays = (d,n) => { const x=new Date(d); x.setDate(x.getDate()+n); return x; };
function liveStreak(){ const t=dkey(), y=dkey(addDays(new Date(),-1)); return (S.streak.last===t || S.streak.last===y) ? S.streak.count : 0; }
function touchStreak(){ const t=dkey(), y=dkey(addDays(new Date(),-1)); if (S.streak.last===t) return; S.streak.count = S.streak.last===y ? S.streak.count+1 : 1; S.streak.last = t; }
function levelOf(xp){ let i=0; while(i+1<LEVELS.length && xp>=LEVELS[i+1][0]) i++; const cur=LEVELS[i][0], nxt=LEVELS[i+1]?.[0]; return { n:i+1, title:LEVELS[i][1], cur, nxt, pct: nxt? (xp-cur)/(nxt-cur) : 1 }; }
function addXp(n){ S.xp+=n; const k=dkey(); S.days[k]=(S.days[k]||0)+n; }
const done = id => !!S.lessons[id]?.done;
const unlocked = (sec,i) => S.unlockAll || i===0 || done(sec.lessons[i-1].id);
function award(id, list){ if(!S.badges[id]){ S.badges[id]=dkey(); list.push(id); } }
const skey = (c,k) => c.id+"."+k;

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
function up(){ if(nav.v==='topic') go({v:'subject',id:nav.id}); else if(nav.v==='subject') go({v:'home'}); }
function render(){
  applyTheme(tab==="path" && nav.v!=="home" ? nav.id : null); renderTop();
  document.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-current", b.dataset.tab===tab?"page":"false"));
  document.body.classList.toggle("onb-mode", !S.grade);
  if(!S.grade){ $("#view").innerHTML=viewOnboarding(); bindView(); return; }
  $("#view").innerHTML = fmt(tab==="path"? (nav.v==="home"? viewHome() : nav.v==="subject"? viewSubject() : viewTopic()) : tab==="progress"? viewProgress() : viewProfile());
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
function nextLesson(c){ const k=activeSec(c); if(k<0) return null; const sec=c.sections[k]; const i=sec.lessons.findIndex((l,j)=>!done(l.id)&&unlocked(sec,j)); return i<0? null : {c, k, sec, i, l:sec.lessons[i]}; }
const plural=(n,f)=>{ const a=n%10,b=n%100; return f[a===1&&b!==11?0: a>=2&&a<=4&&(b<10||b>=20)?1:2]; };
const backBtn = label => `<button class="back" type="button" data-up>${ic("back")}<span>${label}</span></button>`;

function viewHome(){
  const nm=S.name? `, ${esc(S.name)}` : "";
  const subs=subjectsFor(), last=subs.find(c=>c.id===S.subject)||subs[0], nx=(last&&nextLesson(last)) || subs.map(nextLesson).find(Boolean);
  const wk=schoolWeek();
  const now=subs.flatMap(c=>secsFor(c).filter(x=>x.weeks && wk>=x.weeks[0] && wk<=x.weeks[1]).map(sec=>({c,sec})));
  return `<div class="stack">
    <div><h1 style="margin-top:2px">Привіт${nm}!</h1><p class="muted" style="margin:4px 0 0">Що вивчаємо сьогодні?</p></div>
    ${nx? `<button type="button" class="cont s-${nx.c.id}" data-start="${nx.c.id}|${nx.k}|${nx.i}">
        <span class="dot lg s-${nx.c.id}">${ic(nx.l.icon)}</span>
        <span class="grow"><span class="eyebrow">Продовжити · ${nx.c.short}</span><b>${esc(nx.l.title)}</b><span class="muted" style="font-size:13px">${esc(nx.sec.title)} · урок ${nx.i+1} з ${nx.sec.lessons.length}</span></span>
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
        <button class="nbtn" type="button" data-open="${i}" aria-label="${esc(l.title)}${u?"":", закрито"}">${ic(u?l.icon:"lock")}</button>
        ${d?starsHtml(S.lessons[l.id].stars):""}
        <div class="nlabel">${esc(l.title)}</div>
      </div>`; }).join("")}
  </div>`;
}
const GRADED=["choice","multi","sort","slider","order","align","shade","numline","number","fracin"];
function openSheet(i){
  const c=course(nav.id), sec=c.sections[nav.sec], LS=sec.lessons, l=LS[i], u=unlocked(sec,i), rec=S.lessons[l.id];
  const graded=l.screens.filter(s=>GRADED.includes(s.type) && !s.hyp && !s.poll).length;
  $("#sheetHost").innerHTML=fmt(`<div class="scrim" id="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(l.title)}">
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
    <p class="muted">Короткі уроки, у яких ти сам знаходиш відповідь. Працюють і без інтернету.</p>
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
      ${subs.map(c=>`<div class="skillgroup"><div class="eyebrow"><span class="dot sm s-${c.id}"></span>${c.short}</div>${Object.entries(c.skills).map(([k,v])=>{ const s=S.skills[skey(c,k)]||{ok:0,total:0}; const p=s.total? s.ok/s.total : 0;
        return `<div class="skill"><div class="row"><b>${v.name}</b><span class="muted">${s.total? Math.round(p*100)+"%":"ще не тренувалась"}</span></div><div class="bar s-${c.id}"><i style="width:${p*100}%"></i></div></div>`; }).join("")}</div>`).join("")}
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px"><h3>Значки</h3><span class="muted" style="font-size:13px">${BADGES.filter(b=>S.badges[b.id]).length} з ${BADGES.length}</span></div>
      <div class="badges">${BADGES.map(b=>{ const on=!!S.badges[b.id]; return `<div class="bdg ${on?"":"off"}" title="${esc(b.desc)}"><div class="medal">${ic(on?b.icon:"lock")}</div>${b.name}</div>`; }).join("")}</div>
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
        <ul class="credits">${SUBJ.flatMap(c=>c.credits||[]).map(c=>`<li>${c[0]} — ${c[1]}, ${c[2]} (<a href="${c[3]}" target="_blank" rel="noopener">Вікісховище</a>)</li>`).join("")}</ul></details>
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
  document.querySelectorAll("[data-grade]").forEach(b=>b.onclick=()=>{ if(b.disabled) return; S.grade=+b.dataset.grade; const n=$("#onbName"); if(n) S.name=n.value.trim()||S.name; nav={v:"home"}; save(); render(); });
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
    const keep={name:S.name,theme:S.theme,subject:S.subject,grade:S.grade}; S=Object.assign(fresh(),keep); confirmReset=false; save(); toast(ic("check")+"Прогрес скинуто"); render(); };
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

/* ---------- Ілюстрації: математика (за описом) ---------- */
function sectorPath(cx,cy,r,a0,a1){ const p=a=>[cx+r*Math.cos(a), cy+r*Math.sin(a)]; const [x0,y0]=p(a0),[x1,y1]=p(a1); return `M${cx} ${cy} L${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 ${a1-a0>Math.PI?1:0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`; }
function circleSVG(n, shaded, opt={}){ // shaded: (i)=> 0 | 1 | 2
  const r=opt.r||70, cx=r+6, cy=r+6, A=-Math.PI/2;
  const parts=[...Array(n)].map((_,i)=>{ const s=shaded(i); const fill= s===2? "var(--accent-mid)" : s? "var(--accent)" : "var(--surface)";
    return `<path class="${opt.click?"part":""}" ${opt.click?`data-p="${i}" tabindex="0" role="button" aria-label="Частина ${i+1}"`:""} d="${sectorPath(cx,cy,r,A+i*2*Math.PI/n,A+(i+1)*2*Math.PI/n)}" fill="${fill}" stroke="var(--ink)" stroke-width="1.6" stroke-linejoin="round"/>`; }).join("");
  return `<svg viewBox="0 0 ${2*r+12} ${2*r+12}" style="max-width:${opt.size||200}px" role="img" aria-label="${opt.label||"Круг, поділений на "+n+" рівних частин"}">${parts}</svg>`;
}
function barSVG(weights, shaded, opt={}){
  const W=300, H=opt.h||56, tot=weights.reduce((a,b)=>a+b,0); let x=3;
  const parts=weights.map((w,i)=>{ const pw=(W-6)*w/tot, s=shaded(i), fill= s===2? "var(--accent-mid)" : s? "var(--accent)" : "var(--surface)";
    const el=`<rect class="${opt.click?"part":""}" ${opt.click?`data-p="${i}" tabindex="0" role="button" aria-label="Частина ${i+1}"`:""} x="${x.toFixed(2)}" y="3" width="${pw.toFixed(2)}" height="${H-6}" fill="${fill}" stroke="var(--ink)" stroke-width="1.6"/>`; x+=pw; return el; }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${opt.label||"Смужка з "+weights.length+" частин"}">${parts}</svg>`;
}
function mathFig(f){
  if(f.kind==="circle") return `<div class="mfig">${circleSVG(f.n, i=> i<f.k ? (f.split && i<f.split ? 1 : f.split ? 2 : 1) : 0, {label:`Круг на ${f.n} рівних частин, зафарбовано ${f.k}`})}</div>`;
  if(f.kind==="circles"){ let left=f.k; return `<div class="mfig row">${[...Array(f.count)].map(()=>{ const kk=Math.min(f.n,Math.max(0,left)); left-=f.n; return circleSVG(f.n,i=>i<kk?1:0,{size:120,label:`Круг на ${f.n} частин, зафарбовано ${kk}`}); }).join("")}</div>`; }
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
let C=null, L=null, li=0, idx=0, st=null, checked=false, tries=0, run=null;
const letters="АБВГҐД";
let SEC=null;
function startById(id){ const f=findLesson(id); if(f) startLesson(f.c.id,f.k,f.i,true); }
function startLesson(cid,k,i,linked){
  C=course(cid); SEC=C.sections[k]; li=i; L=SEC.lessons[i]; idx=0;
  run={ linked:!!linked, weak:new Set(), xp:0, first:0, graded:0, combo:0, best:0, mistakes:0, startLvl:levelOf(S.xp).n };
  applyTheme(C.id);
  $("#player").hidden=false; document.body.style.overflow="hidden"; $("#pClose").innerHTML=ic("x");
  renderScreen();
}
function closePlayer(){ $("#player").hidden=true; document.body.style.overflow=""; render(); }
$("#pClose").onclick=()=>{ if(idx>=L.screens.length) return closePlayer();
  if($("#pClose").dataset.armed){ closePlayer(); } else { $("#pClose").dataset.armed="1"; toast("Натисни ✕ ще раз, щоб вийти. Прогрес уроку не збережеться"); setTimeout(()=>delete $("#pClose").dataset.armed,2500); } };

function setDock(kind,title,text,label,enabled=true){
  const d=$("#dock"); d.className="dock fixed"+(kind?" "+kind:"");
  $("#fbTitle").innerHTML=fmt(title); $("#fbText").innerHTML=fmt(text);
  $("#action").textContent=label; $("#action").disabled=!enabled;
}
function pProgress(){ const p=Math.round(idx/L.screens.length*100); $("#pBar").style.width=p+"%"; $("#pBar").parentElement.setAttribute("aria-valuenow",p);
  $("#pCombo").innerHTML= run.combo>=2? icF("flame")+"×"+run.combo : ""; }
function fig(s){
  if(s.img) return `<figure class="${s.tall?"tall":s.fit?"fit":""}"><img src="${s.img}" alt="${esc(s.cap)}"><figcaption>${s.cap}</figcaption></figure>`;
  if(s.svg) return `<figure class="svgfig">${svgFig(s.svg)}</figure>`;
  if(s.fig) return `<figure class="svgfig">${mathFig(s.fig)}</figure>`;
  return "";
}
function renderScreen(){
  if(idx>=L.screens.length) return renderEnd();
  const s=L.screens[idx]; checked=false; tries=0; pProgress(); $("#player").scrollTo({top:0});
  let h=`<section class="screen"><div class="eyebrow">${s.eyebrow||""}</div>`;
  h+= s.type==="intro"? `<h1>${s.title}</h1>` : `<h2>${s.title}</h2>`;
  h+= fig(s) + (s.body||"");
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
  if(s.type==="shade"){ st=new Set(); h+=`<div class="shade" id="shade"></div><div class="counter" id="shcount"></div>`; }
  if(s.type==="numline"){ st=0; h+=`<div class="numline"><div id="nlsvg"></div><div class="readout"><span>Точка:</span><b id="nlval"></b></div><input id="nlrng" type="range" min="0" max="${s.max*s.den}" step="1" value="0" aria-label="Положення точки на промені"></div>`; }
  if(s.type==="number"){ st=""; h+=`<div class="numbox"><input id="numIn" inputmode="numeric" pattern="[0-9]*" autocomplete="off" placeholder="?" aria-label="Відповідь"><span class="unit">${s.unit||""}</span></div>`; }
  if(s.type==="fracin"){ st=""; h+=`<div class="numbox big"><span class="m">${mathHTML(s.expr)}<span class="mo">=</span><span class="fr"><span class="nu"><input id="numIn" inputmode="numeric" pattern="[0-9]*" autocomplete="off" placeholder="?" aria-label="Чисельник відповіді"></span><span class="sr">/</span><span class="de">${s.den}</span></span></span></div>`; }
  h+=`<div id="hintHost"></div></section>`;
  $("#stage").innerHTML=fmt(h);
  if(s.type==="intro"||s.type==="info") setDock("","","",s.cta||"Далі");
  else if(["slider","align","numline"].includes(s.type)) setDock("","","","Перевірити");
  else setDock("","","","Перевірити",false);
  bindScreen(s);
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
function shadeUpdate(s){
  const box=$("#shade"), click={click:true, size:230};
  box.innerHTML = s.shape==="circle" ? circleSVG(s.n, i=>st.has(i)?1:0, {...click, label:`Круг на ${s.n} частин, торкайся частин, щоб зафарбувати`}) : barSVG(Array(s.n).fill(1), i=>st.has(i)?1:0, {...click, h:70, label:`Смужка на ${s.n} частин, торкайся частин, щоб зафарбувати`});
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
  $("#nlsvg").innerHTML=`<svg viewBox="0 0 ${W} 80" role="img" aria-label="Координатний промінь від 0 до ${s.max}, кожна одиниця поділена на ${s.den} частин">${g}</svg>`;
  const whole=Math.floor(st/s.den), rem=st%s.den;
  $("#nlval").innerHTML = fmt(`$${st}/${s.den}$`) + (whole && rem ? ` <span class="muted" style="font:500 15px var(--body)">=</span> ${fmt(`$${whole}~${rem}/${s.den}$`)}` : (st&&!rem? ` <span class="muted" style="font:500 15px var(--body)">= ${whole}</span>`:""));
}

function bindScreen(s){
  const stage=$("#stage");
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
  const al=$("#alrng"); if(al){ alignUpdate(s); al.oninput=()=>{ if(checked) return; st=+al.value; alignUpdate(s); }; }
  if(s.type==="shade") shadeUpdate(s);
  const nl=$("#nlrng"); if(nl){ numlineUpdate(s); nl.oninput=()=>{ if(checked) return; st=+nl.value; numlineUpdate(s); }; }
  const ni=$("#numIn"); if(ni){ ni.oninput=()=>{ ni.value=ni.value.replace(/[^0-9]/g,"").slice(0,6); st=ni.value; ni.classList.remove("is-ok","is-bad"); setDock("","","","Перевірити", st.length>0); };
    ni.onkeydown=e=>{ if(e.key==="Enter" && !$("#action").disabled) $("#action").click(); }; setTimeout(()=>ni.focus({preventScroll:true}),350); }
}
function clearMarks(){ $("#stage").querySelectorAll(".is-ok,.is-bad").forEach(e=>e.classList.remove("is-ok","is-bad")); }
function lock(){ $("#stage").querySelectorAll(".opt,.seg button,input").forEach(b=>b.disabled=true); }

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
    case "number": case "fracin": return parseInt(st,10)===s.answer;
  }
}
function showMarks(s, reveal){
  const stage=$("#stage");
  if(s.type==="choice") stage.querySelectorAll(".opt").forEach((el,k)=>{ el.classList.remove("is-ok","is-bad"); if(k===st) el.classList.add(k===s.correct?"is-ok":"is-bad"); else if(reveal&&k===s.correct) el.classList.add("is-ok"); });
  if(s.type==="multi"){ const c=new Set(s.correct); stage.querySelectorAll(".opt").forEach((el,k)=>{ el.classList.remove("is-ok","is-bad"); if(st.has(k)) el.classList.add(c.has(k)?"is-ok":"is-bad"); else if(reveal&&c.has(k)) el.classList.add("is-ok"); }); }
  if(s.type==="sort") stage.querySelectorAll(".srow").forEach((el,k)=>{ el.classList.remove("is-ok","is-bad"); el.classList.add(st[k]===s.items[k][1]?"is-ok":"is-bad"); if(reveal&&st[k]!==s.items[k][1]) el.insertAdjacentHTML("beforeend",`<span class="fix">Правильно: ${fmt(s.bins[s.items[k][1]])}</span>`); });
  if(s.type==="order") stage.querySelectorAll("#ord .opt").forEach(el=>{ const k=+el.dataset.k, p=st.indexOf(k); el.classList.remove("is-ok","is-bad"); el.classList.add(p===k?"is-ok":"is-bad"); if(reveal&&p!==k) el.querySelector(".k").textContent=`${p+1}→${k+1}`; });
  if(s.type==="number"||s.type==="fracin"){ const ni=$("#numIn"); ni.classList.remove("is-ok","is-bad"); ni.classList.add(parseInt(st,10)===s.answer?"is-ok":"is-bad"); if(reveal && parseInt(st,10)!==s.answer){ $("#hintHost").innerHTML=`<div class="hint">${ic("check")}<span>Правильна відповідь: <b>${s.answer}</b></span></div>`; } }
  if(s.type==="shade"){ const box=$("#shade"); box.classList.remove("is-ok","is-bad"); box.classList.add(st.size===s.target?"is-ok":"is-bad"); }
  if(s.type==="numline"){ if(reveal){ st=s.answer; $("#nlrng").value=st; } numlineUpdate(s); }
}
function gain(n){ const m=L.boss?2:1; const v=n*m; run.xp+=v; addXp(v); return v; }
function skillHit(s, ok){ if(!s.sk) return; const k=skey(C,s.sk); const r=S.skills[k]||(S.skills[k]={ok:0,total:0}); r.total++; if(ok) r.ok++; }

function check(){
  const s=L.screens[idx];
  if(s.poll||s.hyp){ if(s.poll) S.polls[s.poll]=st; const g=gain(5); checked=true; lock();
    return setDock("info", `${s.fbTitle} <span class="gain">+${g}</span>`, s.fbText, "Далі"); }
  const ok=gradeNow(s);
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
             : "Спробуй ще раз.";
    return setDock("bad", s.fbBad||"Не зовсім.", msg+preNote, "Спробувати ще раз");
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
  showMarks(s, !ok);
  if(!ok && s.type==="align"){ st=s.sample.endYear-s.sample.len+1-s.ref.from; $("#alrng").value=st; alignUpdate(s); }
  pProgress(); save(); renderTop();
  const title = ok? s.fbOk : (s.type==="slider"? s.fbBad : "Ось правильна відповідь.");
  setDock(ok?"ok":"bad", `${title}${g?` <span class="gain">+${g}</span>`:""}`, s.fbText+(ok?"":preNote), "Далі");
}
$("#action").onclick=()=>{
  if(idx>=L.screens.length) return closePlayer();
  const s=L.screens[idx];
  if(s.type==="intro"||s.type==="info"||checked){ idx++; renderScreen(); return; }
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
  const pollLine = (o.pollKey && S.polls[o.pollKey]!=null) ? `<p>На початку ти обрав ${o.pollText[S.polls[o.pollKey]]}. ${o.text}</p>` : `<p>${o.text||""}</p>`;
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
    ${[...run.weak].map(id=>{ const f=findLesson(id); if(!f) return ""; return `<div class="rec"><div class="eyebrow">Варто повторити</div><div class="recrow"><span class="dot lg s-${f.c.id}">${ic(f.l.icon)}</span><span class="grow"><b>${esc(f.l.title)}</b><span class="muted small">${f.c.short} · ${f.sec.grade} клас · ${f.l.screens.length} кроків</span></span></div><p class="small" style="margin:0">Кілька помилок у цьому уроці пов'язані з цією темою. Коротке повторення допоможе.</p><button class="btn" type="button" data-lesson="${id}">Повторити зараз</button></div>`; }).join("")}
    <div class="learned"><div class="eyebrow">Що ти тепер умієш</div>${(o.learned||[]).map(t=>`<div class="li">${ic("check")}<span>${t}</span></div>`).join("")}</div>
  </section>`);
  setDock("","","", run.linked? "Повернутися" : SEC.lessons[li+1]? "До уроків розділу" : "Завершити розділ");
  $("#stage").querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>startById(b.dataset.lesson));
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
render();
})();
