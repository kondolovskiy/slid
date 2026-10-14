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
console.log(`${n - fails}/${n} тестів формул пройдено`);
process.exit(fails ? 1 : 0);
