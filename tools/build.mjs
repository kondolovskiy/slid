#!/usr/bin/env node
// Слід · збирач: знаходить усі файли контенту й прописує їх у index.html між маркерами CONTENT:START/END.
// Запуск: node tools/build.mjs   (після додавання чи видалення файлу в content/)
import fs from "node:fs"; import path from "node:path"; import crypto from "node:crypto"; import { fileURLToPath } from "node:url";
export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function manifest() {
  const rel = p => path.relative(ROOT, p).split(path.sep).join("/");
  const js = d => fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith(".js")).sort() : [];
  const files = [rel(path.join(ROOT, "app/registry.js"))];
  js(path.join(ROOT, "content/subjects")).forEach(f => files.push(`content/subjects/${f}`));
  const subjDirs = fs.readdirSync(path.join(ROOT, "content"), { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== "subjects").map(d => d.name).sort();
  for (const d of subjDirs) {
    const list = js(path.join(ROOT, "content", d));
    if (list.includes("plan.js")) files.push(`content/${d}/plan.js`);      // план першим: розділи з уроками його перекривають
    list.filter(f => f !== "plan.js").forEach(f => files.push(`content/${d}/${f}`));
  }
  if (fs.existsSync(path.join(ROOT, "content/catalog.js"))) files.push("content/catalog.js");
  files.push("app/lab.js", "app/learn.js", "app/app.js");
  return files;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = manifest();
  const idx = path.join(ROOT, "index.html");
  const html = fs.readFileSync(idx, "utf8");
  const a = html.indexOf("<!-- CONTENT:START"), b = html.indexOf("<!-- CONTENT:END -->");
  if (a < 0 || b < 0) { console.error("У index.html немає маркерів CONTENT:START / CONTENT:END"); process.exit(1); }
  const head = html.slice(0, html.indexOf("-->", a) + 3);
  const out = head + "\n" + files.map(f => `<script src="${f}"></script>`).join("\n") + "\n" + html.slice(b);
  fs.writeFileSync(idx, out);
  fs.writeFileSync(path.join(ROOT, "content/manifest.json"), JSON.stringify(files, null, 2) + "\n");
  console.log(`index.html: ${files.length} скриптів`);
  writeServiceWorker(files);
}

/** Генерує sw.js: список файлів для офлайн-кешу + версія (хеш вмісту). Змінився будь-який файл — нова версія кешу. */
export function writeServiceWorker(files = manifest()) {
  const walk = d => fs.existsSync(path.join(ROOT, d)) ? fs.readdirSync(path.join(ROOT, d), { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name, "en")).flatMap(e => e.isDirectory() ? walk(`${d}/${e.name}`) : [`${d}/${e.name}`]) : [];
  const assets = ["index.html", "manifest.webmanifest", "app/pwa.js", ...files,
    ...walk("img").filter(f => /\.(jpe?g|png|webp|svg)$/i.test(f)), ...walk("icons")];
  const uniq = [...new Set(assets)];
  const h = crypto.createHash("sha1");
  for (const f of uniq) h.update(f).update(fs.readFileSync(path.join(ROOT, f)));
  const version = h.digest("hex").slice(0, 10);
  const tpl = fs.readFileSync(path.join(ROOT, "tools/sw.template.js"), "utf8");
  fs.writeFileSync(path.join(ROOT, "sw.js"), tpl.replace("__VERSION__", version).replace("__ASSETS__", JSON.stringify(uniq.map(f => "./" + f), null, 2)));
  console.log(`sw.js: версія ${version}, ${uniq.length} файлів для офлайну`);
}
