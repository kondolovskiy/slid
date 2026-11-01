#!/usr/bin/env node
// Слід · модульні тести мініпарсера формул (app/math.js).
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path";
import { ROOT } from "./build.mjs";
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "app/math.js"), "utf8"), ctx, { filename:"app/math.js" });
const M = ctx.SLID_MATH; let n = 0, fails = 0;
const ok = (yes, what) => { n++; if (!yes) { fails++; console.log(`ПОМИЛКА ${what}`); } };
const noRaw = (s, what) => { const h = M.mathHTML(s); ok(!/\\(?:sqrt|frac|infty|begin|vec|mathbb|lim|to)/.test(h), `${what}: немає сирого LaTeX (${h})`); return h; };
ok(noRaw("\\sqrt[3]{x_2}", "корінь та індекс").includes("root-index"), "корінь n-го степеня");
ok(noRaw("\\dfrac{\\sqrt{a}}{b}", "вкладений дріб").includes('class="fr"'), "дріб стовпчиком");
ok(noRaw("\\vec{a} \\parallel \\overrightarrow{BC}", "вектори").includes("∥"), "символ паралельності");
ok(noRaw("\\mathbb{R} \\cup \\varnothing", "множини").includes("∅"), "множини");
ok(noRaw("\\lim_{h \\to 0}\\frac{f(x_0+h)-f(x_0)}{h}", "границя").includes("→"), "границя");
ok(noRaw("\\begin{cases}x+y=3\\\\x-y=1\\end{cases}", "система").includes("case-rows"), "система рівнянь");
ok(M.mathHTML("90^\\circ").includes("°") && !M.mathHTML("90^\\circ").includes("sup"), "градус без зайвого степеня");
ok(M.mathHTML("x₁ - x₂").includes('class="mo">−'), "мінус після Unicode-індексу бінарний");
ok(M.mathHTML("3/4").includes('class="fr"'), "звичайний дріб лишився стовпчиком");
ok(M.fmt("$x_0$ і $$\\sqrt{x}$$").includes("mblock"), "рядкова й блокова формули");
ok(!M.mathHTML("P(4;\\,2)").includes("\\"), "тонкий пробіл не показує сирий слеш");
// {,} — TeX-запис десяткової коми (engine-math-render-tex-gaps): так само, як «0,6», без сирих дужок
ok(M.mathHTML("M(-0{,}6;\\,0{,}8)") === M.mathHTML("M(-0,6;\\,0,8)") && !/[{}]/.test(M.mathHTML("M(-0{,}6;\\,0{,}8)")), "{,} у координатах");
ok(M.mathHTML("2 · (-0{,}6) · 0{,}8 = -0{,}96") === M.mathHTML("2 · (-0,6) · 0,8 = -0,96"), "{,} у добутку з унарним мінусом");
ok(M.mathHTML("0{,}6/2").includes('class="nu">0,6<'), "{,} у чисельнику дробу");
ok(M.mathHTML("\\begin{cases}x=0{,}5\\\\y=1\\end{cases}").includes("0,5"), "{,} у системі");
ok(M.fmt("$k = 0{,}5$").includes("0,5") && !M.fmt("$k = 0{,}5$").includes("{"), "{,} через fmt");
// engine-math-answer-g11-issues п. 6–7, engine-render-tex-p3: \lg, показник кореня перед знаком, відступи навколо \to
ok(M.commands.has("lg") && !M.mathHTML("\\lg 100").includes("munknown") && M.mathHTML("\\lg 100").startsWith('<span class="mfn">lg</span>'), "\\lg — назва функції прямим шрифтом, як \\log");
ok(M.mathHTML("\\lg 100") === '<span class="mfn">lg</span><span class="mspace thin"></span>100', "\\lg 100: тонкий пробіл перед аргументом («lg 100», як в уроках)");
ok(M.mathHTML("\\ln x").includes('mfn">ln</span><span class="mspace thin">'), "\\ln x: пробіл перед аргументом");
for (const [src, what] of [["\\lg(25 \\cdot 4)", "дужки"], ["\\log_2 8", "індекс"], ["\\sin^2 x", "степінь"], ["\\lim_{h \\to 0} f", "границя"], ["\\lg = 3", "оператор"]])
  ok(!/mfn">[^<]+<\/span><span class="mspace thin">/.test(M.mathHTML(src)), `після назви функції без пробілу: ${what} (${M.mathHTML(src)})`);
ok(M.mathHTML("\\lg\\,x").split("mspace thin").length === 2, "\\lg\\,x: один тонкий пробіл, не два");
{ const h = M.mathHTML("\\sqrt[3]{x^2}"), i = h.indexOf("root-index"), r = h.indexOf("radicand");
  ok(i > 0 && i < r && h.startsWith('<span class="sqrt"><sup class="root-index">'), `показник кореня — всередині .sqrt перед підкореневим (місце задає CSS .root-index, геометрію перевіряє test-answer-ui) (${h})`); }
ok(!M.mathHTML("\\sqrt{x}").includes("root-index"), "квадратний корінь без показника");
ok(M.mathHTML("1 \\to 4") === '1<span class="mo">→</span>4', "\\to — бінарний знак з відступами (.mo)");
ok(M.mathHTML("0 \\to -1").includes('<span class="mo">→</span><span class="mu">−</span>1'), "\\to: мінус після стрілки унарний");
ok(M.mathHTML("A \\rightarrow B").includes('class="mo">→') && M.mathHTML("a \\leftrightarrow b").includes('class="mo">↔'), "\\rightarrow, \\leftrightarrow — теж з відступами");
// engine-math-sqrt-precedence: «√» без дужок бере найближчий атом — √3/2 = (√3)/2 (так само розбирає відповідь learn.js), а не √(3/2)
{ const H = M.mathHTML, FR = (nu, de) => `<span class="fr"><span class="nu">${nu}</span><span class="sr">/</span><span class="de">${de}</span></span>`;
  const noRootOverFrac = src => ok(!/[√∛∜]<span class="fr">/.test(H(src)), `${src}: знак кореня не стоїть над дробом (${H(src)})`);
  ok(H("√3/2") === FR("√3", "2"), `√3/2 — дріб з √3 у чисельнику (${H("√3/2")})`);
  ok(H("-√2/2") === '<span class="mu">−</span>' + FR("√2", "2"), `-√2/2 — унарний мінус перед дробом (${H("-√2/2")})`);
  ok(H("√x/2") === FR('√<i class="mv">x</i>', "2"), `√x/2 — змінна під коренем, дріб (${H("√x/2")})`);
  ok(H("2√3/3") === FR("2√3", "3"), `2√3/3 — коефіцієнт у тому ж чисельнику, не мішане число (${H("2√3/3")})`);
  ok(H("∛8/2") === FR("∛8", "2"), `∛8/2 — те саме для кубічного кореня (${H("∛8/2")})`);
  ok(H("(4√2 · √3/2)/(√2/2)").split('<span class="nu">√').length === 3, `вкладені √3/2 і √2/2 у дужках дробу (${H("(4√2 · √3/2)/(√2/2)")})`);
  // корінь із дробу — лише з дужками: дужки лишаються під знаком, √ у чисельник дробу 3/2 не потрапляє
  ok(H("√(3/2)") === "√(" + FR("3", "2") + ")", `√(3/2) — корінь із дробу в дужках (${H("√(3/2)")})`);
  ok(H("√(3/2)/2") === FR("√(" + FR("3", "2") + ")", "2"), `√(3/2)/2 — дужки під коренем не губляться в чисельнику (${H("√(3/2)/2")})`);
  ok(H("\\sqrt{3}/2") === '<span class="sqrt"><span class="radicand">3</span></span>/2', `\\sqrt{3}/2 — корінь лише з 3 (${H("\\sqrt{3}/2")})`);
  ok(H("\\sqrt{3/2}") === `<span class="sqrt"><span class="radicand">${FR("3", "2")}</span></span>`, `\\sqrt{3/2} — дріб під коренем (${H("\\sqrt{3/2}")})`);
  // без «/» за коренем розмітка та сама, що й до правки
  ok(H("√3²") === "√3²" && H("√3^2") === '√3<sup class="mp">2</sup>' && H("√x²") === '√<i class="mv">x</i>²', `√3², √3^2, √x² — без дробу, як були (${H("√3^2")})`);
  ok(H("2√25") === "2√25" && H("√a · b") === '√<i class="mv">a</i>·<i class="mv">b</i>', `2√25, √a · b — як були (${H("2√25")}, ${H("√a · b")})`);
  ok(H("1/√2") === "1/√2" && H("√50/√2") === "√50/√2" && H("2√3/√2") === "2√3/√2", `знаменник з коренем — як був, рядком (${H("1/√2")}, ${H("2√3/√2")})`);
  ok(!H("√3 / 2").includes('class="fr"'), `√3 / 2 з пробілами — не дріб стовпчиком, як і 3 / 4 (${H("√3 / 2")})`);
  ok(H("3/4") === FR("3", "4") && H("2 3/4") === "2" + FR("3", "4"), `звичайний дріб і мішане число не змінились (${H("2 3/4")})`);
  for (const src of ["√3/2", "-√3/2", "√x/2", "2√3/3", "∛8/2", '"cos"\\,45° = √2/2', '"arcsin"(√2/2)', "√(3/2)", "√(3/2)/2"]) noRootOverFrac(src);
  // engine-p3-1101 (рев'ю engine-math-sqrt-precedence, P3-1…P3-3): мутанти, що виживали, і крайні випадки
  // корінь без «/» лишається операндом: мінус за ним бінарний (мутант push(nu, false))
  ok(H("√3 - 1") === '√3<span class="mo">−</span>1' && H("2√3 - 1").includes('class="mo">−'), `√3 - 1 — бінарний мінус після кореня (${H("√3 - 1")})`);
  ok(H("√x + 1").includes('class="mo">+') && !H("√x + 1").includes('class="mu"'), `√x + 1 — бінарний плюс (${H("√x + 1")})`);
  // дужки знаменника не малюються (мутант atomHTML(den, false))
  ok(H("√3/(2)") === FR("√3", "2"), `√3/(2) — знаменник без дужок (${H("√3/(2)")})`);
  ok(H("√3/(x+1)") === FR("√3", H("x+1")) && !H("√3/(x+1)").includes("(") , `√3/(x+1) — знаменник без дужок (${H("√3/(x+1)")})`);
  // коефіцієнт через пробіл чи «~» — у чисельнику, не мішане число (learn.js так само читає «2 √3/3» як 2√3/3)
  for (const src of ["2 √3/3", "2~√3/3", "2  √3/3"]) ok(H(src) === FR("2√3", "3"), `${src} — коефіцієнт у чисельнику (${H(src)})`);
  ok(H("x = 2 √3/(x+1)") === H("x = 2√3/(x+1)"), `коефіцієнт через пробіл перед знаменником-групою (${H("x = 2 √3/(x+1)")})`);
  // без дробу за коренем чи без кореня — як були: «2 √25», «2 3/4», «2 √3/ 3» (не дріб стовпчиком)
  ok(H("2 √25") === "2√25" && H("2 3/4") === "2" + FR("3", "4") && !H("2 √3/ 3").includes('class="fr"'), `2 √25, 2 3/4, 2 √3/ 3 — як були (${H("2 √3/ 3")})`);
  ok(H("1/2 √3/2") === FR("1", "2") + FR("√3", "2"), `1/2 √3/2 — два дроби, коефіцієнтом не стає знаменник (${H("1/2 √3/2")})`);
  // корінь із кореня: зовнішній знак не стоїть над дробом
  ok(H("√√2/2") === FR("√√2", "2") && H("√√2") === "√√2" && H("2 √√2/2") === FR("2√√2", "2"), `√√2/2 — (√√2)/2 (${H("√√2/2")})`);
  for (const src of ["2 √3/3", "2~√3/3", "√√2/2", "√∛8/2"]) noRootOverFrac(src);
}
console.log(`${n - fails}/${n} тестів формул пройдено`);
process.exit(fails ? 1 : 0);
