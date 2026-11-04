// Регресійний тест tools/diff-answers.mjs, блок «вердикт тесту рівня» (engine-half-p3, T-1 з reports/review/engine-evidence-p3.md).
// 1) --old HEAD: старий learn.js уже має diagVerdict → порівнюється вердикт з вердиктом; якщо learn.js не змінено відносно HEAD,
//    змін у блоці 0 і rc 0 (раніше diagAnswerOk → diagVerdict давав хибні «BAD → HALF» і rc 1).
// 1б) фікстура «старого» learn.js з відомою різницею diagVerdict (tools-diff-answers-p3, рев'ю engine-half-p3 P3-1): тимчасовий
//    git-репозиторій, у коміті — learn.js, де diagVerdict не дає HALF (вимаганий вигляд → OK; неперерахований корінь → BAD), у робочому
//    дереві — поточний. Режим вердикт↔вердикт: кожна різниця — НЕПОЯСНЕНА (категорій half тут немає), rc 1 лише через блок тесту рівня.
//    Сторожить мутанти D3 (різниці сховано), D4 (категорії half у режимі вердикт↔вердикт), D6 (rc без halfBad), яких 1) на чистому дереві
//    не бачить (старий і новий learn.js однакові).
// 2) старий learn.js до half-credit (фікстура tools/fixtures/learn-b799dfa.js — app/learn.js з b799dfa, у тимчасовому репозиторії як «старий»;
//    немає diagVerdict): diagAnswerOk → diagVerdict, усі HALF пояснені категоріями. Тут вимагається rc 0 від УСЬОГО diff-answers (основний
//    блок checkAns теж): будь-яка майбутня навмисна зміна вердиктів checkAns / diagVerdict потребує нової категорії в diff-answers
//    (з незалежною класифікацією), інакше npm run check і CI червоні (так задумано; docs/PERSONALIZATION_QA.md, «diff-answers»).
// 3) --content-old: поле u не вимагає rev і не ховає інших змін.
// 4) мінімальна фікстура змісту: точні кількості категорій half і нове правило HALF поза категоріями — НЕПОЯСНЕНЕ (мутант M2).
// 5) engine-unit-hint: «--grades 4» (один клас) і хибні --grades — rc 2; категорія «uh …» і мутант «підказка для не рівної величини».
// Запуск: node tools/test-diff-answers.mjs (≈ 30 с). Від git-історії проєкту не залежить (1б, 2, 3, 4 — тимчасові репозиторії, 1 — лише
// HEAD), тож працює в неглибокому клоні й після squash-злиття; тому він і в CI (.github/workflows/pages.yml), і в npm run check.
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let pass = 0, fail = 0;
const ok = (c, msg) => { if (c) pass++; else { fail++; console.log("✗ " + msg); } };
const run = (rev, root = ROOT) => {
  const r = spawnSync(process.execPath, [path.join(root, "tools/diff-answers.mjs"), "--old", rev, "--grades", "4-11", "--show", "1000000"], { cwd: root, encoding: "utf8", maxBuffer: 256 << 20 });
  const out = r.stdout || "", i = out.indexOf("Вердикт тесту рівня");
  const block = i < 0 ? "" : out.slice(i);
  const num = re => { const m = block.match(re); return m ? +m[1] : NaN; };
  return { rc: r.status, out, block, head: block.split("\n")[0],
    total: num(/записів (\d+)/), form: num(/(\d+)\s+half вимаганий вигляд/), root: num(/(\d+)\s+half корінь/), bad: num(/(\d+)\s+НЕПОЯСНЕНІ \(тест рівня\)/),
    mainBad: (() => { const m = out.slice(0, i < 0 ? out.length : i).match(/(\d+)\s+НЕПОЯСНЕНІ\s*$/m); return m ? +m[1] : NaN; })() };
};

// 1) --old HEAD
const dirty = spawnSync("git", ["diff", "--quiet", "HEAD", "--", "app/learn.js"], { cwd: ROOT }).status !== 0;
const h = run("HEAD");
ok(/diagVerdict → diagVerdict/.test(h.head), `--old HEAD: блок має порівнювати diagVerdict з diagVerdict, а заголовок «${h.head}»`);
ok(h.total > 1000, `--old HEAD: записів у блоці тесту рівня ${h.total} (очікувано > 1000 — блок не порожній)`);
if (dirty) console.log("  (app/learn.js змінено відносно HEAD — нульові зміни й rc 0 для --old HEAD не перевіряю; закоміть і повтори)");
else {
  ok(h.form === 0 && h.root === 0 && h.bad === 0, `--old HEAD: у блоці тесту рівня очікувано 0/0/0, а ${h.form}/${h.root}/${h.bad}`);
  ok(h.mainBad === 0, `--old HEAD: основний блок — ${h.mainBad} непояснених`);
  ok(h.rc === 0, `--old HEAD: rc ${h.rc}, очікувано 0`);
}

// 1б) фікстура «старого» learn.js з відомою різницею (тимчасовий git-репозиторій; див. шапку)
const fs = await import("node:fs"), os = await import("node:os"), { execFileSync } = await import("node:child_process");
/** Тимчасовий git-репозиторій з копією app/, content/, tools/ (коміт «base»); f(tmp, git) — тест; потім каталог видаляється. */
async function tmpRepo(prefix, f) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  try {
    for (const d of ["app", "content", "tools"]) fs.cpSync(path.join(ROOT, d), path.join(tmp, d), { recursive: true });
    const g = (...a) => execFileSync("git", a, { cwd: tmp, stdio: ["ignore", "pipe", "pipe"] });
    g("init", "-q"); g("config", "user.email", "t@example.org"); g("config", "user.name", "test"); g("add", "-A"); g("commit", "-qm", "base");
    await f(tmp, g);
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
}
await tmpRepo("slid-test-diff-v-", async (tmp, g) => {
  const lf = path.join(tmp, "app/learn.js"), cur = fs.readFileSync(lf, "utf8");
  const MUT = {
    form: ['return checkAns(req, v) === "form" ? HALF : OK;', "return OK;", "OK → HALF"],
    root: ["if (a && limited(() => rootNum(t, a), () => false)) return HALF;", "if (a && limited(() => rootNum(t, a), () => false)) return BAD;", "BAD → HALF"] };
  for (const [name, [from, to, shape]] of Object.entries(MUT)) {
    ok(cur.split(from).length === 2, `фікстура ${name}: у diagVerdict поточного learn.js рядок «${from}» має бути рівно один`);
    fs.writeFileSync(lf, cur.replace(from, to)); g("commit", "-qam", "old " + name); fs.writeFileSync(lf, cur);   // коміт — «старий», робоче дерево — поточний
    const r = run("HEAD", tmp);
    ok(/diagVerdict → diagVerdict/.test(r.head), `фікстура ${name}: режим вердикт↔вердикт, а заголовок «${r.head}»`);
    ok(r.bad > 0 && r.form === 0 && r.root === 0, `фікстура ${name}: різниці мають бути НЕПОЯСНЕНІ без категорій half, а ${r.form}/${r.root}/${r.bad}`);
    ok(new RegExp(`тест ${shape}`).test(r.block), `фікстура ${name}: серед непояснених — «${shape}»`);
    ok(r.mainBad === 0, `фікстура ${name}: основний блок (checkAns не змінено) — ${r.mainBad} непояснених`);
    ok(r.rc === 1, `фікстура ${name}: rc ${r.rc}, очікувано 1 (непояснені в тесті рівня)`);
    console.log(`  фікстура ${name}: ${r.bad} непояснених «${shape}» з ${r.total}`);
  }
});

// 2) старий learn.js до half-credit (немає diagVerdict, лише diagAnswerOk) — фікстура tools/fixtures/learn-b799dfa.js (app/learn.js з
//    b799dfa дослівно), закомічена в тимчасовому репозиторії як «старий»: від історії проєкту тест не залежить (рев'ю tools-diff-answers-p3, P2-1)
await tmpRepo("slid-test-diff-h-", async (tmp, g) => {
  const lf = path.join(tmp, "app/learn.js"), cur = fs.readFileSync(lf, "utf8"), old = fs.readFileSync(path.join(ROOT, "tools/fixtures/learn-b799dfa.js"), "utf8");
  ok(!/diagVerdict/.test(old) && /diagAnswerOk/.test(old), "фікстура learn-b799dfa.js: є diagAnswerOk, немає diagVerdict");
  fs.writeFileSync(lf, old); g("commit", "-qam", "old b799dfa"); fs.writeFileSync(lf, cur);
  const b = run("HEAD", tmp);
  ok(/diagAnswerOk → diagVerdict/.test(b.head), `до half-credit: очікувано diagAnswerOk → diagVerdict, а «${b.head}»`);
  ok(b.form > 0 && b.root > 0, `до half-credit: обидві категорії half мають бути непорожні (вимаганий вигляд ${b.form}, корінь ${b.root})`);
  ok(b.bad === 0, `до half-credit: ${b.bad} непояснених у блоці тесту рівня`);
  ok(b.mainBad === 0, `до half-credit: основний блок — ${b.mainBad} непояснених`);
  ok(b.rc === 0, `до half-credit: rc ${b.rc}, очікувано 0`);
  console.log(`  до half-credit (b799dfa): пояснено ${b.form} (вимаганий вигляд) + ${b.root} (корінь) з ${b.total}`);
});
// 4) мінімальна фікстура змісту з відомими кількостями (рев'ю tools-diff-answers-p3, раунд 2, P3-4; мутант M2 — «вимаганий вигляд» без need):
//    п'ять вправ уроку qa6l1, старий learn.js — фікстура b799dfa. Точні кількості категорій half (7 / 5 з 167) не залежать від змісту
//    проєкту. Потім «новий» learn.js розширює HALF новою ознакою вигляду form: "qa" (ні в diff-answers, ні в need її немає): ці різниці мають
//    лишитися НЕПОЯСНЕНИМИ, а «вимаганий вигляд» — тим самим 7, інакше категорія мовчки поглинає нове правило.
//    Кількості змінюються лише зі зміною records() / probes() у diff-answers чи diagVerdict у learn.js — тоді їх оновлюють тут свідомо.
const FIXTURE = `SLID.section("math", { id: "qa6", grade: 6, title: "QA", lessons: [{ id: "qa6l1", title: "QA", screens: [
  { type: "answer", title: "Скороти 4/10", answer: "2/5", reduced: true },
  { type: "answer", title: "Мішане 7/2", answer: "3 1/2", mixed: true },
  { type: "answer", title: "Корінь", answer: 24 },
  { type: "answer", title: "Половина", answer: "0,5", form: "qa" },
  { type: "answer", title: "Просте", answer: 7 } ] }] });\n`;
await tmpRepo("slid-test-diff-f-", async (tmp, g) => {
  for (const d of fs.readdirSync(path.join(tmp, "content"))) if (d !== "subjects") fs.rmSync(path.join(tmp, "content", d), { recursive: true, force: true });
  for (const f of fs.readdirSync(path.join(tmp, "content/subjects"))) if (f !== "math.js") fs.rmSync(path.join(tmp, "content/subjects", f));
  fs.mkdirSync(path.join(tmp, "content/math")); fs.writeFileSync(path.join(tmp, "content/math/g6-qa.js"), FIXTURE);
  const lf = path.join(tmp, "app/learn.js"), cur = fs.readFileSync(lf, "utf8");
  fs.writeFileSync(lf, fs.readFileSync(path.join(ROOT, "tools/fixtures/learn-b799dfa.js"), "utf8")); g("add", "-A"); g("commit", "-qm", "fixture + old b799dfa"); fs.writeFileSync(lf, cur);
  const a = run("HEAD", tmp);
  ok(a.total === 177 && a.form === 7 && a.root === 5 && a.bad === 0 && a.mainBad === 0 && a.rc === 0,
    `фікстура змісту: очікувано записів 177, half 7 (вигляд) / 5 (корінь), 0 непояснених, rc 0, а ${a.total}, ${a.form} / ${a.root}, ${a.bad} + ${a.mainBad}, rc ${a.rc}`);
  const W = [['    if (s.form === "improper" && (!u.frac || u.whole)) return "form";', '    if (s.form === "qa" && u.frac) return "form";\n'],
    ["const DIAG_FORM = s => !!(", 'const DIAG_FORM = s => !!(s.form === "qa" || ']];
  let wide = cur; for (const [at, add] of W) { ok(cur.split(at).length === 2, `фікстура «form: qa»: у learn.js рядок «${at}» має бути рівно один`); wide = wide.replace(at, at.startsWith("const") ? add : add + at); }
  fs.writeFileSync(lf, wide);
  const b = run("HEAD", tmp);
  ok(b.form === 7 && b.root === 5 && b.bad === 3 && /qa6l1#3 "0,5" ← «5\/10»: тест OK → HALF/.test(b.block) && b.rc === 1,
    `нове правило HALF (form: qa) — 3 НЕПОЯСНЕНІ, «вимаганий вигляд» лишається 7, rc 1; а ${b.form} / ${b.root}, ${b.bad}, rc ${b.rc}`);
  console.log(`  фікстура змісту: ${a.form} + ${a.root} з ${a.total}; розширене правило (form: qa) — ${b.bad} непояснених`);
});
// 3) --content-old: поле u (прив'язка до графа вмінь, CONTENT_SCHEMA §11) у TEXT_ONLY — rev для нього не потрібен,
//    але u не ховає інших змін завдання (рев'ю engine-skg-g1, P3-2). Окремий тимчасовий git-репозиторій з app/, content/, tools/.
await tmpRepo("slid-test-diff-u-", async tmp => {
  const f = path.join(tmp, "content/math/diag-g6.js"), orig = fs.readFileSync(f, "utf8");
  const at = orig.indexOf('topic: "frac",'); ok(at > 0, "фікстура: у dg6 є завдання теми frac");
  const runC = extra => { fs.writeFileSync(f, orig.slice(0, at) + `u: "frac-read", ${extra}` + orig.slice(at));
    const r = spawnSync(process.execPath, [path.join(tmp, "tools/diff-answers.mjs"), "--content-old", "HEAD", "--grades", "6-6"], { cwd: tmp, encoding: "utf8", maxBuffer: 64 << 20 });
      const m = (r.stdout || "").match(/(\d+)\s+ТЕСТИ РІВНЯ без rev/); return { rc: r.status, n: m ? +m[1] : NaN, out: r.stdout + r.stderr }; };
    const a = runC("");
    ok(a.n === 0 && a.rc === 0, `--content-old: завдання тесту отримало лише u — 0 «без rev», rc 0 (${a.n}, rc ${a.rc})`);
    const b = runC("zzCore: 1, ");
    ok(b.n === 1 && b.rc === 1, `--content-old: u разом зі зміною суті — «без rev» лишається (${b.n}, rc ${b.rc})`);
});

// 5) engine-unit-hint: (а) «--grades 4» — один клас 4–4, а не мовчазний прогін 0 вправ («Класи 4–undefined»); хибне значення — rc 2.
//    (б) категорія «uh …»: «старий» learn.js без підказки для тієї самої величини в іншій одиниці (лише «bare», п. 7) → усі різниці
//    пояснені, вердикти ті самі; мутант «підказка для будь-якої одиниці тієї самої величини» (і для не рівної) → НЕПОЯСНЕНІ, rc 1.
{
  const da = (root, ...a) => spawnSync(process.execPath, [path.join(root, "tools/diff-answers.mjs"), ...a], { cwd: root, encoding: "utf8", maxBuffer: 256 << 20 });
  const head = r => (r.stdout || "").match(/Вправ (\d+) \(класи (\d+)–(\S+?)\)/);
  const one = da(ROOT, "--old", "HEAD", "--grades", "4"), four = da(ROOT, "--old", "HEAD", "--grades", "4-4"), h1 = head(one), h4 = head(four);
  ok(h1 && h1[2] === "4" && h1[3] === "4" && +h1[1] > 0 && h4 && h1[1] === h4[1], `--grades 4: очікувано «класи 4–4», вправ > 0 і стільки ж, як --grades 4-4; а «${h1 && h1[0]}» / «${h4 && h4[0]}»`);
  for (const g of ["", "4-", "11-4", "x", "4-x", "4-5-6"]) { const r = da(ROOT, "--old", "HEAD", "--grades", g);
    ok(r.status === 2 && /--grades/.test(r.stderr), `--grades «${g}»: rc ${r.status}, очікувано 2 з повідомленням`); }
  await tmpRepo("slid-test-diff-uh-", async (tmp, g) => {
    const lf = path.join(tmp, "app/learn.js"), cur = fs.readFileSync(lf, "utf8");
    const HINT = '    if (s.unit && foreignUnit(s, t)) { const e = unitEq(s, t); return e === "bare" ? unitMsg(s) : e === "conv" ? unitConvMsg(s) : null; }', CONV = '    return checkAns(s, w) !== "bad" ? "conv" : null;';
    ok(cur.split(HINT).length === 2 && cur.split(CONV).length === 2, "фікстура uh: рядки badHint / unitEq у learn.js — рівно по одному");
    fs.writeFileSync(lf, cur.replace(HINT, HINT.replace('e === "conv" ? unitConvMsg(s) : null', "null"))); g("commit", "-qam", "old: без uh"); fs.writeFileSync(lf, cur);
    const cnt = r => { const o = r.stdout || "", m = o.match(/(\d+)\s+uh «Перевір одиницю»/), u = o.match(/(\d+)\s+НЕПОЯСНЕНІ\s*$/m); return [m ? +m[1] : NaN, u ? +u[1] : NaN, r.status]; };
    const a = cnt(da(tmp, "--old", "HEAD", "--grades", "4"));
    ok(a[0] > 0 && a[1] === 0 && a[2] === 0, `uh: старий без підказки → категорія uh > 0, 0 непояснених, rc 0; а ${a.join(" / ")}`);
    fs.writeFileSync(lf, cur.replace(CONV, '    return "conv";'));
    const b = cnt(da(tmp, "--old", "HEAD", "--grades", "4", "--show", "3"));
    ok(b[1] > 0 && b[2] === 1, `uh: мутант (підказка й для не рівної величини) → НЕПОЯСНЕНІ > 0, rc 1; а ${b.join(" / ")}`);
    console.log(`  uh: пояснено ${a[0]} (4 клас); мутант «завжди conv» — ${b[1]} непояснених`);
  });
}

// 6) клас вправи пулу — за розділом її уроку, а не за section пулу (also, docs/design/math-ister.md §4; рев'ю math-ister-migration, P3-3):
//    мінімальний зміст — урок 5 кл. і урок 6 кл. по одному екрану answer, пул section «qa5» з also «qa6»: вправа «a» уроку 5 кл., «b», «c» — 6 кл.
//    --grades 5 — 1 екран + 1 вправа, --grades 6 — 1 екран + 2 вправи (мутант «клас за p.section» дав би 4 і 1).
await tmpRepo("slid-test-diff-also-", async tmp => {
  for (const d of fs.readdirSync(path.join(tmp, "content"))) if (d !== "subjects") fs.rmSync(path.join(tmp, "content", d), { recursive: true, force: true });
  for (const f of fs.readdirSync(path.join(tmp, "content/subjects"))) if (f !== "math.js") fs.rmSync(path.join(tmp, "content/subjects", f));
  fs.mkdirSync(path.join(tmp, "content/math"));
  const sec = (g, n) => `SLID.section("math", { id: "qa${g}", grade: ${g}, title: "QA", lessons: [{ id: "qa${g}l1", title: "QA", screens: [{ type: "answer", title: "QA", answer: ${n} }] }] });\n`;
  const it = (id, g, n) => `{ id: "${id}", lesson: "qa${g}l1", lvl: 1, sk: "num", type: "answer", title: "QA", steps: ["QA"], answer: ${n} }`;
  fs.writeFileSync(path.join(tmp, "content/math/g5-qa.js"), sec(5, 1)); fs.writeFileSync(path.join(tmp, "content/math/g6-qa.js"), sec(6, 2));
  fs.writeFileSync(path.join(tmp, "content/math/pool-g5-qa.js"), `SLID.pool("math", { id: "pqa", section: "qa5", also: ["qa6"], status: "draft", items: [${it("a", 5, 3)}, ${it("b", 6, 4)}, ${it("c", 6, 5)}] });\n`);
  const n = g => { const r = spawnSync(process.execPath, [path.join(tmp, "tools/diff-answers.mjs"), "--old", "HEAD", "--grades", g], { cwd: tmp, encoding: "utf8", maxBuffer: 64 << 20 });
    const m = (r.stdout || "").match(/Вправ (\d+) \(класи/); return m ? +m[1] : `rc ${r.status}: ${(r.stderr || "").slice(0, 300)}`; };
  // --old HEAD: learn.js той самий, тож рахуємо лише вправи («Вправ N (класи …)»); коміт фікстури — для порядку
  execFileSync("git", ["add", "-A"], { cwd: tmp }); execFileSync("git", ["commit", "-qm", "fixture also"], { cwd: tmp });
  const got = [n("5"), n("6")];
  ok(got[0] === 2 && got[1] === 3, `also: вправи пулу за класом уроку — очікувано 2 (5 кл.) і 3 (6 кл.), а ${got.join(" / ")}`);
  console.log(`  also: 5 кл. — ${got[0]}, 6 кл. — ${got[1]} вправ`);
});

console.log(`test-diff-answers: ${pass} ok, ${fail} ✗`);
process.exit(fail ? 1 : 0);
