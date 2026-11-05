#!/usr/bin/env node
// Слід · тести tools/playtest-pick.mjs (tools-ci-answer-ui): піднабір плейтесту в CI. Лише фікстури, не живий склад змісту;
// справжній зміст — один інваріант (CLI дає непорожній список відомих id, код 0).
// Запуск: node tools/test-playtest-pick.mjs   (без залежностей)
import path from "node:path"; import { spawnSync } from "node:child_process"; import { fileURLToPath } from "node:url";
import { features, cover, changedIds, pick } from "./playtest-pick.mjs";
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
let fails = 0, n = 0;
const ok = (cond, what, extra = "") => { n++; if (!cond) { fails++; console.log(`ПОМИЛКА ${what}${extra ? "\n  " + extra : ""}`); } };
const eq = (a, b, what) => ok(JSON.stringify(a) === JSON.stringify(b), what, `${JSON.stringify(a)} ≠ ${JSON.stringify(b)}`);

const L = (...types) => ({ screens: types.map(t => typeof t === "string" ? { type: t } : t) });
const SUBJ = [
  { id: "m", diags: [{ id: "dm" }], sections: [
    { id: "big", lessons: [L("intro", "choice", "sort"), L("order", { type: "lab", lab: { kind: "plane" } }), L("number")] },  // усе, але 3 уроки
    { id: "a", lessons: [L("intro", "choice", "sort", "order")] },
    { id: "b", lessons: [L({ type: "lab", lab: { kind: "plane" } }, "number")] },
    { id: "plan", plan: ["тема"] } ] },                                                                       // без уроків — не кандидат
  { id: "u", diags: [], sections: [
    { id: "g", lessons: [L("gaps", { type: "pick", hyp: true })] } ] } ];
const content = { subjects: SUBJ, origin: { big: "content/m/g5-big.js", a: "content/m/g5-a.js", b: "content/m/g5-b.js", g: "content/u/g5-g.js" }, diagOrigin: { dm: "content/m/diag-g5.js" } };

// 1. Ознаки: предмет, тип, вид лабораторії, answerKind, здогадка (лише для оцінюваних екранів)
eq([...features("m", { lessons: [L("intro", { type: "info", hyp: true }, { type: "answer", answerKind: "list" }, { type: "lab", lab: { kind: "chart" } }, { type: "choice", poll: true })] })].sort(),
  ["answerKind:list", "hyp:choice", "lab:chart", "subject:m", "type:answer", "type:choice", "type:info", "type:intro", "type:lab"], "features: ознаки екранів");
eq([...features("m", { lessons: [] })], ["subject:m"], "features: розділ без уроків — лише предмет");

// 2. Покриття: два дешеві розділи (a, b — по 1 уроку) замість одного дорогого (big — 3 уроки); кожен предмет; без уроків — не береться
const cv = cover(SUBJ).map(x => x.id);
eq(cv.slice().sort(), ["a", "b", "g"], "cover: a + b + g (дешевше за big)");
const all = new Set(SUBJ.flatMap(c => c.sections.flatMap(s => [...features(c.id, s)])));
const got = new Set(cover(SUBJ).flatMap(x => x.why));
eq([...all].filter(k => !got.has(k)), [], "cover: кожна ознака змісту покрита");
eq(cover([]), [], "cover: порожній зміст — порожньо");
eq(cover(SUBJ), cover(SUBJ), "cover: детерміновано");

// 3. Змінені файли → id: файл розділу, файл тесту рівня, тека img/<предмет>/<id>/; невідоме, план, рушій, видалений розділ — ні
eq(changedIds(["content/m/g5-b.js", "content/m/diag-g5.js", "img/u/g/pic.jpg", "img/m/nope/x.png", "app/app.js", "content/m/plan.js", "content/m/g5-gone.js", "", "content/m/g5-b.js"], content),
  ["b", "dm", "g"], "changedIds: розділ, тест рівня, img, без дублів і зайвого");
eq(changedIds(["content\\m\\g5-a.js  "], content), ["a"], "changedIds: зворотні скісні й пробіли");
eq(changedIds(["img/m/plan/x.png"], content), [], "changedIds: img розділу без уроків — ні");

// 4. pick: змінені першими, далі покриття, далі всі тести рівня; без повторів
const p = pick(content, ["content/m/g5-big.js", "content/m/g5-a.js"]);
eq(p.ids.slice(0, 2), ["big", "a"], "pick: змінені першими");
ok(p.ids.includes("b") && p.ids.includes("g") && p.ids.at(-1) === "dm", "pick: покриття й тест рівня", JSON.stringify(p.ids));
eq(p.ids.length, new Set(p.ids).size, "pick: без повторів");
ok(p.why.a.length === 2 && p.why.a[0] === "змінено", "pick: причина кожного id (a — змінено й покриття)", JSON.stringify(p.why.a));

// 5. Бюджет уроків для змінених: по черзі між предметами (m: big 3, a 1, b 1; u: g 1); понад бюджет — dropped, покриття й тести рівня — завжди
{ const files = ["content/m/g5-big.js", "content/m/g5-a.js", "content/m/g5-b.js", "content/u/g5-g.js"];
  const q = pick(content, files, { maxLessons: 4 });
  eq(q.ids.slice(0, 3), ["big", "g", "a"], "бюджет 4: big (3) + g (1) з іншого предмета, a — вже понад");
  eq(q.why.a[0].startsWith("покриття"), true, "бюджет: a все одно в покритті, але не як «змінено»");
  eq(q.dropped, [], "бюджет: dropped без розділів, що потрапили через покриття");
  const z = pick(content, ["content/m/g5-big.js"], { maxLessons: 0 });
  eq(z.dropped, ["big"], "бюджет 0: змінений big — у dropped");
  ok(!z.ids.includes("big") && z.ids.includes("dm"), "бюджет 0: big не пройдено, тест рівня — так", JSON.stringify(z.ids));
  eq(pick(content, ["content/m/diag-g5.js"], { maxLessons: 0 }).ids[0], "dm", "бюджет 0: тест рівня (0 уроків) — у межах"); }

// 6. CLI на справжньому змісті — лише інваріанти: код 0, непорожній список id через кому, файл розділу дає свій id першим
{ const r = spawnSync(process.execPath, [path.join(ROOT, "tools/playtest-pick.mjs"), "no/such/file.js"], { cwd: ROOT, encoding: "utf8" });
  ok(r.status === 0 && /^[\w-]+(,[\w-]+)*\n$/.test(r.stdout), "CLI: код 0, id через кому", r.stdout + r.stderr);
  ok(/Разом: \d+ id, \d+ уроків/.test(r.stderr), "CLI: підсумок у stderr", r.stderr); }
{ const r = spawnSync(process.execPath, [path.join(ROOT, "tools/playtest-pick.mjs"), "--max-lessons", "x"], { cwd: ROOT, encoding: "utf8" });
  ok(r.status === 2 && !r.stdout, "CLI: --max-lessons не число — код 2, порожній stdout", r.stdout + r.stderr); }

console.log(fails ? `\n${fails} з ${n} перевірок не пройшли` : `test-playtest-pick: усі ${n} перевірок пройшли`);
process.exit(fails ? 1 : 0);
