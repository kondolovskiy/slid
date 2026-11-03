---
name: parallel-run
description: Use when orchestrating several writer or verifier agents at once (picking N tasks, claiming them, launching agents in parallel, running QA afterwards) or merging parallel branches/worktrees back together.
---

# Оркестрація паралельних агентів

Головна сесія планує, роздає задачі, запускає агентів, збирає результат. Процес — docs/WORKFLOW.md.

## 1. Підготовка
1. Прочитай `memory/short/handoff.md`, `node tools/claim.mjs list`.
2. Обери N задач **одного типу** — краще один предмет і клас, щоб агенти вирівнювалися по одних еталонах:
   - автори: `node tools/claim.mjs list todo --subject <предмет> --grade <клас>` → агент `content-writer` (скіл `content-author` / `math-pool-diag` / `hist-images`);
   - верифікатори: `node tools/claim.mjs list review` → агент `content-verifier` (скіл `content-verify`).
3. Для кожної: `node tools/claim.mjs claim <task-id> <agent-name>` (`writer-<id>` / `verifier-<id>`). Claim не вдався — бери наступну. `depends_on` claim не перевіряє — дивись сам. Для verify задача лишається в review.
4. Агентам з фото — ≤ 2 одночасно (Commons 429). Кожному агенту — власна підтека scratchpad `<scratchpad>/<task-id>/`.

## 2. Запуск
- **В одному повідомленні** N викликів Agent, кожному промпт: «Виконай задачу tasks/<doing|review>/<task-id>.md за AGENTS.md». Агенти пишуть різні файли — worktree не потрібен.
- Моделі задано у frontmatter агентів: автори й верифікатори — модель сесії (зміст і факти; слабша модель-верифікатор звіряла «за власним знанням», 0 URL у звітах); `qa-runner` — дешева. Не перевизначай `model` без потреби.
- Поки агенти працюють, **не запускай** `tools/build.mjs` і не змінюй спільні файли.
- Верифікаторів запускай **окремо й пізніше** за авторів, зі свіжим контекстом — щоб не бачили міркувань автора.

Headless-варіант (без інтерактиву):
```bash
for t in $(node tools/claim.mjs list todo --subject hist --grade 6 --ids | head -3); do
  node tools/claim.mjs claim "$t" "writer-$t" && \
  claude -p "/write-section tasks/doing/$t" --permission-mode acceptEdits &
done; wait
node tools/build.mjs && node tools/validate.mjs && node tools/stats.mjs
```

## 3. Після всіх
1. **Один** субагент `qa-runner` зі списком нових id (build, `npm run check`, validate, stats, playtest кожного розділу). Сам ці команди не ганяй, якщо qa-runner дав ✅ — лише читай звіт.
2. ❌ — поверни конкретному агенту (SendMessage) або виправ сам, потім qa-runner лише для зачеплених id.
3. «Граф, дрейф» у validate/graph-report — передай куратору графа (скіл `skill-graph`).
4. Для інженерних задач — незалежний рецензент (скіл `engineering-review`), не автор.
5. ≥ 3 нових розділів одного предмета → `/sync-style <предмет>`. Наприкінці — `/handoff`.
6. Звіт людині: що готово, що verified, що потребує людини.

## 4. Злиття гілок і worktree
- `memory/short/inbox.md` при конфлікті — **обидві сторони** (inbox лише дописується); прибери рядки, які main уже переніс у довгу пам'ять.
- Злиття worktree може захопити незакомічені правки паралельних агентів — перед злиттям перевір `git status` і diff по файлах розділів.
- Після злиття — `node tools/build.mjs` окремим комітом (`VERSION` у `sw.js` залежить від усіх `app/*.js`).
- Ніколи `git stash`, `git checkout -- …`, `git reset` у спільному дереві. Після злиття PR — нова гілка від свіжого `main`.
