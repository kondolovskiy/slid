// Регресійний тест tools/diff-answers.mjs, блок «вердикт тесту рівня» (engine-half-p3, T-1 з reports/review/engine-evidence-p3.md).
// 1) --old HEAD: старий learn.js уже має diagVerdict → порівнюється вердикт з вердиктом; якщо learn.js не змінено відносно HEAD,
//    змін у блоці 0 і rc 0 (раніше diagAnswerOk → diagVerdict давав хибні «BAD → HALF» і rc 1).
// 2) --old b799dfa (до half-credit, немає diagVerdict): як і раніше diagAnswerOk → diagVerdict, усі HALF пояснені категоріями.
// Запуск: node tools/test-diff-answers.mjs (≈ 15 с; потрібна історія git із b799dfa).
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let pass = 0, fail = 0;
const ok = (c, msg) => { if (c) pass++; else { fail++; console.log("✗ " + msg); } };
const run = rev => {
  const r = spawnSync(process.execPath, [path.join(ROOT, "tools/diff-answers.mjs"), "--old", rev, "--grades", "4-11"], { cwd: ROOT, encoding: "utf8", maxBuffer: 64 << 20 });
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

// 2) --old b799dfa — до half-credit
const has = spawnSync("git", ["cat-file", "-e", "b799dfa^{commit}"], { cwd: ROOT }).status === 0;
ok(has, "у історії git немає b799dfa (неглибокий клон?)");
if (has) {
  const b = run("b799dfa");
  ok(/diagAnswerOk → diagVerdict/.test(b.head), `--old b799dfa: очікувано diagAnswerOk → diagVerdict, а «${b.head}»`);
  ok(b.form > 0 && b.root > 0, `--old b799dfa: обидві категорії half мають бути непорожні (вимаганий вигляд ${b.form}, корінь ${b.root})`);
  ok(b.bad === 0, `--old b799dfa: ${b.bad} непояснених у блоці тесту рівня`);
  ok(b.rc === 0, `--old b799dfa: rc ${b.rc}, очікувано 0`);
  console.log(`  b799dfa: пояснено ${b.form} (вимаганий вигляд) + ${b.root} (корінь) з ${b.total}`);
}
// 3) --content-old: поле u (прив'язка до графа вмінь, CONTENT_SCHEMA §11) у TEXT_ONLY — rev для нього не потрібен,
//    але u не ховає інших змін завдання (рев'ю engine-skg-g1, P3-2). Окремий тимчасовий git-репозиторій з app/, content/, tools/.
{ const fs = await import("node:fs"), os = await import("node:os"), { execFileSync } = await import("node:child_process");
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "slid-test-diff-u-"));
  try {
    for (const d of ["app", "content", "tools"]) fs.cpSync(path.join(ROOT, d), path.join(tmp, d), { recursive: true });
    const g = (...a) => execFileSync("git", a, { cwd: tmp, stdio: ["ignore", "pipe", "pipe"] });
    g("init", "-q"); g("config", "user.email", "t@example.org"); g("config", "user.name", "test"); g("add", "-A"); g("commit", "-qm", "base");
    const f = path.join(tmp, "content/math/diag-g6.js"), orig = fs.readFileSync(f, "utf8");
    const at = orig.indexOf('topic: "frac",'); ok(at > 0, "фікстура: у dg6 є завдання теми frac");
    const runC = extra => { fs.writeFileSync(f, orig.slice(0, at) + `u: "frac-read", ${extra}` + orig.slice(at));
      const r = spawnSync(process.execPath, [path.join(tmp, "tools/diff-answers.mjs"), "--content-old", "HEAD", "--grades", "6-6"], { cwd: tmp, encoding: "utf8", maxBuffer: 64 << 20 });
      const m = (r.stdout || "").match(/(\d+)\s+ТЕСТИ РІВНЯ без rev/); return { rc: r.status, n: m ? +m[1] : NaN, out: r.stdout + r.stderr }; };
    const a = runC("");
    ok(a.n === 0 && a.rc === 0, `--content-old: завдання тесту отримало лише u — 0 «без rev», rc 0 (${a.n}, rc ${a.rc})`);
    const b = runC("zzCore: 1, ");
    ok(b.n === 1 && b.rc === 1, `--content-old: u разом зі зміною суті — «без rev» лишається (${b.n}, rc ${b.rc})`);
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); } }

console.log(`test-diff-answers: ${pass} ok, ${fail} ✗`);
process.exit(fail ? 1 : 0);
