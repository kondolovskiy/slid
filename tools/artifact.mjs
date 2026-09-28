#!/usr/bin/env node
// Слід · версія index.html для публікації як артефакт Claude: артефакт сам додає <!doctype>, <head> і <body>,
// тому тут лишаємо лише вміст head (title, meta, style) і body. Результат: build/artifact.html.
// Supporting files для публікації: app/, content/, img/ (service worker в артефакті вимикається сам).
import fs from "node:fs"; import path from "node:path"; import { ROOT } from "./build.mjs";
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<meta charset[^>]*>\n?|<meta name="viewport"[^>]*>\n?/g, "");
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
fs.mkdirSync(path.join(ROOT, "build"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "build/artifact.html"), head.trim() + "\n" + body.trim() + "\n");
console.log("build/artifact.html");
