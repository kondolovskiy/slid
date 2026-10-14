// Слід · спільні функції для інструментів: завантаження контенту поза браузером, текстові метрики.
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path";
import { ROOT, manifest } from "./build.mjs";
export { ROOT };

/** Завантажує весь контент так само, як браузер, і повертає { subjects, soon, files }. */
export function loadContent() {
  const ctx = { console }; vm.createContext(ctx); ctx.window = ctx;
  const files = manifest().filter(f => f !== "app/app.js");
  for (const f of files) {
    try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f }); }
    catch (e) { throw new Error(`Помилка у ${f}: ${e.message}`); }
  }
  // звідки прийшов кожен розділ — щоб повідомлення вказували на файл
  const origin = {};
  for (const f of files.filter(f => f.startsWith("content/") && !f.startsWith("content/subjects"))) {
    const src = fs.readFileSync(path.join(ROOT, f), "utf8");
    for (const m of src.matchAll(/SLID\.section\(\s*"[^"]+",\s*\{\s*id:\s*"([^"]+)"/g)) origin[m[1]] = f;
  }
  ctx.SLID.finalize();
  return { subjects: ctx.SLID_SUBJECTS, soon: ctx.SLID_SOON, files, origin, lab: ctx.SLID_LAB, learn: ctx.SLID_LEARN };
}

export const GRADED = ["choice","multi","sort","slider","order","align","shade","numline","number","fracin","lab","answer"];
export const TYPES = ["intro","info","explore", ...GRADED];

/** Прибирає HTML і формули, повертає чистий текст. */
export function plain(s = "") {
  return String(s).replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, " Ф ").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim();
}
const VOW = /[аеєиіїоуюяaeiouy]/gi;
export const words = t => (t.match(/[\p{L}\p{N}'’ʼ-]+/gu) || []);
export const syllables = w => (w.match(VOW) || []).length;
export function sentences(t) {
  // Protect abbreviation periods only when the following text continues the sentence.
  const text = String(t).replace(/(?<![\p{L}])н\.(?=\s*е\.)/gu, "н\uE000")
    .replace(/(?<![\p{L}])(?:е\.|рр?\.|ст\.|тис\.|млн\.|[Дд]ив\.)\s*(?=[\p{Ll}\d])/gu,
    m => m.replace(/\./g, "\uE000"));
  return text.split(/(?<=[.!?…])\s+/).map(x => x.replace(/\uE000/g, ".").trim()).filter(x => words(x).length > 0);
}

/** Текст, який дитина читає на екрані (без варіантів відповідей і фідбеку). */
export function screenReadText(s) { return plain([s.title, s.body].filter(Boolean).join(" ")); }
/** Увесь текст екрана, включно з варіантами й поясненнями. */
export function screenAllText(s) {
  const parts = [s.title, s.body, s.fbText, s.fbOk, s.fbBad, s.hint, ...(s.opts || []), ...(s.items || []).map(i => Array.isArray(i) ? i[0] : i)];
  return parts.filter(Boolean).map(plain).filter(Boolean).map(t => /[.!?…]$/.test(t) ? t : t + ".").join(" ");
}

/** Метрики уроку для синхронізації стилю й складності. */
export function lessonMetrics(l) {
  const all = l.screens.map(screenAllText).join(" ");
  const w = words(all), sents = sentences(all);
  const long = w.filter(x => syllables(x) >= 5).length;
  const graded = l.screens.filter(s => GRADED.includes(s.type) && !s.poll && !s.hyp);
  const types = {}; l.screens.forEach(s => types[s.type] = (types[s.type] || 0) + 1);
  const readWordsPerScreen = l.screens.map(s => words(screenReadText(s)).length);
  return {
    screens: l.screens.length,
    graded: graded.length,
    gradedShare: +(graded.length / l.screens.length).toFixed(2),
    infoShare: +((types.info || 0) / l.screens.length).toFixed(2),
    wordsTotal: w.length,
    readWordsPerScreen: Math.round(readWordsPerScreen.reduce((a, b) => a + b, 0) / l.screens.length),
    maxReadWords: Math.max(...readWordsPerScreen),
    sentenceWords: +(w.length / Math.max(1, sents.length)).toFixed(1),
    longWordShare: +(long / Math.max(1, w.length)).toFixed(3),
    hints: l.screens.filter(s => s.hint).length,
    typeVariety: Object.keys(types).filter(t => GRADED.includes(t)).length,
    types
  };
}

export function gradeBand(g) { return g <= 4 ? "4" : g <= 6 ? "5-6" : g <= 9 ? "7-9" : "10-11"; }
export function readJSON(p) { return JSON.parse(fs.readFileSync(path.join(ROOT, p), "utf8")); }
