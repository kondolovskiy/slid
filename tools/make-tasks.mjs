#!/usr/bin/env node
// Слід · створює задачі на написання розділів з плану (content/<предмет>/plan.js).
// Для кожного розділу без уроків, для якого ще немає задачі в tasks/*, з'являється tasks/todo/write-<предмет>-<id>.md.
// Запуск: node tools/make-tasks.mjs [--subject math] [--grade 6]
import fs from "node:fs"; import path from "node:path";
import { loadContent, ROOT } from "./lib.mjs";

const args = process.argv.slice(2);
const opt = k => args.includes(k) ? args[args.indexOf(k) + 1] : null;
const onlySubj = opt("--subject"), onlyGrade = opt("--grade") ? +opt("--grade") : null;
const { subjects } = loadContent();
const existing = new Set(["todo","doing","review","done"].flatMap(d => fs.existsSync(path.join(ROOT, "tasks", d)) ? fs.readdirSync(path.join(ROOT, "tasks", d)) : []));
const exemplar = { hist: "content/hist/g5-s2.js", math: "content/math/g5-ms1.js" };
let made = 0;
for (const c of subjects) {
  if (onlySubj && c.id !== onlySubj) continue;
  c.sections.forEach((sec, k) => {
    if (sec.lessons || !sec.plan) return;
    if (onlyGrade && sec.grade !== onlyGrade) return;
    const name = `write-${c.id}-${sec.id}.md`;
    if (existing.has(name)) return;
    const prev = c.sections.filter(s => s.grade === sec.grade && s.lessons).map(s => s.id);
    const body = `---
id: write-${c.id}-${sec.id}
type: write-section
subject: ${c.id}
grade: ${sec.grade}
section: ${sec.id}
weeks: [${sec.weeks.join(", ")}]
status: todo
claimed_by:
created: ${new Date().toISOString().slice(0, 10)}
---
# Написати розділ «${sec.title}» (${c.subject}, ${sec.grade} клас)

## Навіщо (з плану, можна уточнити)
${sec.why}

## Теми уроків (з плану)
${sec.plan.map((t, i) => `${i + 1}. ${t}`).join("\n")}
${sec.plan.length + 1}. Фінальний урок розділу (boss: true, бали ×2, свій значок у sec.badges)

## Прочитати перед роботою
- AGENTS.md → розділ «Роль: автор контенту»
- style/common.md, style/${c.id}.md, style/profiles.json
- memory/long/glossary/${c.id}.md і memory/long/facts/${c.id}.md — використовуй ці формулювання й дати
- memory/long/pitfalls.md
- Еталон стилю: ${exemplar[c.id] || "будь-який розділ предмета зі статусом verified/approved"}${prev.length ? `\n- Розділи цього ж класу з уроками: ${prev.join(", ")} — вирівнюйся по них` : ""}

## Результат
- Файл \`content/${c.id}/g${sec.grade}-${sec.id}.js\` з \`SLID.section("${c.id}", { id: "${sec.id}", ... })\` — той самий id, що в плані
- Фото (якщо є) у \`img/${c.id}/${sec.id}/\`, з \`credits\` у розділі
- Нові факти — рядками в «Нотатках агента» нижче (куратор перенесе в memory/long/facts/${c.id}.md)

## Готово, коли
- [ ] \`node tools/build.mjs && node tools/validate.mjs --section ${sec.id}\` — 0 помилок
- [ ] Попередження або виправлено, або пояснено нижче
- [ ] \`node tools/stats.mjs --subject ${c.id}\` — уроки розділу без прапорців «нетипово для сім'ї»
- [ ] Кожен урок: status: "draft", проблема на першому екрані, теорія після проблеми, ≥ 1 hint, outro з 2–4 пунктами
- [ ] Задачу переміщено в tasks/review/, у нотатках — перелік фактів з джерелами

## Нотатки агента
<!-- Виконавець: що зроблено, спірні місця, факти з джерелами, пропозиції до style/ чи glossary/ -->
`;
    fs.writeFileSync(path.join(ROOT, "tasks/todo", name), body); made++;
  });
}
console.log(`Створено задач: ${made}`);
