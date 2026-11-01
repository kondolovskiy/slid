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
  ok(i > 0 && i < r && /root-index" style="order:-1"/.test(h) && h.startsWith('<span class="sqrt">'), `показник кореня — перед знаком √ (order:-1) і всередині .sqrt (${h})`); }
ok(!M.mathHTML("\\sqrt{x}").includes("root-index"), "квадратний корінь без показника");
ok(M.mathHTML("1 \\to 4") === '1<span class="mo">→</span>4', "\\to — бінарний знак з відступами (.mo)");
ok(M.mathHTML("0 \\to -1").includes('<span class="mo">→</span><span class="mu">−</span>1'), "\\to: мінус після стрілки унарний");
ok(M.mathHTML("A \\rightarrow B").includes('class="mo">→') && M.mathHTML("a \\leftrightarrow b").includes('class="mo">↔'), "\\rightarrow, \\leftrightarrow — теж з відступами");
console.log(`${n - fails}/${n} тестів формул пройдено`);
process.exit(fails ? 1 : 0);
