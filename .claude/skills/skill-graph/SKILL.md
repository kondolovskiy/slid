---
name: skill-graph
description: Use when editing content/<subject>/graph.js, processing «IDEA GRAPH» lines from the inbox, investigating graph drift warnings from validate or graph-report, or accepting a graph line with graph-report --strict.
---

# Граф умінь (`SLID.graph`)

Схема — CONTENT_SCHEMA §11; дизайн — docs/design/skill-graph-math.md; рішення — D-038 (decisions.md). Зараз є `content/math/graph.js` (лінія «дроби» 4–6 `verified`; дитині граф ще нічого не змінює до G4).

## Хто що змінює
- `graph.js` — **лише куратор графа** (і верифікатор лінії в межах звіту). Під час паралельного запуску авторів — не чіпати.
- Автор розділу змінює лише прив'язку `u` у своєму файлі; дрейф графа повідомляє рядком `IDEA GRAPH: …` в inbox.
- Ребра затверджує верифікатор; учитель вибірково переглядає лінію перед тим, як нею користується рушій (D-038 2б).

## Процедура
1. Збери вхід: рядки `IDEA GRAPH` в `memory/short/inbox.md`, попередження «граф, дрейф» з `node tools/validate.mjs`, `reports/graph-<предмет>.md`.
2. Подивись вплив:
   ```bash
   node tools/graph-report.mjs --uses <вузол>          # хто посилається на вузол
   node tools/graph-report.mjs --since <коміт>         # що змінилося з коміту
   ```
3. Правки: окремий вузол на кожне окремо перевірне вміння (1–2 на урок); id вузлів — ключі історії спроб: не перейменовуй, застарілий вузол — `gone` з перенаправленням.
4. Перевір:
   ```bash
   node tools/graph-report.mjs --line <id> --strict    # 0 порушень для лінії
   node tools/validate.mjs
   node tools/test-graph-report.mjs
   ```
   У `npm run check` — лише `graph-report --quiet` (без `--strict`, щоб дрейф не блокував авторів).
5. Змінена лінія повертається з `verified` на перевірку: задача для `content-verify` (звіт `reports/verify/graph-<лінія>.md`).
6. Відкриті питання людині (ребра, вага, перегляд учителем) — у handoff, не вирішуй сам.
