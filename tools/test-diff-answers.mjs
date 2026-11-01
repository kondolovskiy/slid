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
console.log(`test-diff-answers: ${pass} ok, ${fail} ✗`);
process.exit(fail ? 1 : 0);
