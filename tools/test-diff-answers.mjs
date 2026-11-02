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
// Запуск: node tools/test-diff-answers.mjs (≈ 30 с). Від git-історії проєкту не залежить (1б, 2, 3 — тимчасові репозиторії, 1 — лише
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

console.log(`test-diff-answers: ${pass} ok, ${fail} ✗`);
process.exit(fail ? 1 : 0);
