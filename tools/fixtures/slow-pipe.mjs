// Слід · запуск інструмента з stdout у pipe і «незручним» читачем (tools-euphony-json-pipe; тести test-euphony, test-validate,
// test-graph-report, test-diff-answers). Захист від process.exit() одразу після великого виводу: у pipe stdout асинхронний,
// і такий вихід обрізає вивід на 64 КБ (розмір буфера pipe) — але лише коли читач не встигає, тож читач тут навмисно повільний.
import { spawn } from "node:child_process";

/** Повільний читач: delay мс не читає stdout (дочірній процес упирається в заповнений буфер), потім збирає все.
 *  closeEarly: прочитати перший шматок і закрити pipe (як `| head -c N`) — перевірка EPIPE. → { status, signal, stdout, stderr } */
export function slowPipe(script, args = [], { cwd, delay = 300, closeEarly = false } = {}) {
  return new Promise(res => {
    const p = spawn(process.execPath, [script, ...args], { cwd });
    let out = "", err = "";
    p.stderr.setEncoding("utf8"); p.stderr.on("data", d => err += d);
    p.stdout.on("error", () => {});   // EPIPE на нашому боці після destroy — не помилка тесту
    setTimeout(() => {
      p.stdout.setEncoding("utf8");
      if (closeEarly) p.stdout.once("data", d => { out += d; p.stdout.destroy(); });
      else p.stdout.on("data", d => out += d);
    }, delay);
    p.on("close", (status, signal) => res({ status, signal, stdout: out, stderr: err }));
  });
}
