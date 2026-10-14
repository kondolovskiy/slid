@AGENTS.md

# Специфіка Claude Code

## Субагенти (`.claude/agents/`)
- `content-writer` — пише один розділ за задачею.
- `content-verifier` — незалежно перевіряє факти, відповіді й педагогіку.
- `style-sync` — вирівнює стиль і складність уроків предмета.
- `memory-curator` — переносить inbox у довгу пам'ять, оновлює handoff.
- `qa-runner` — механічний прогін build/validate/stats/test-*/playtest, звіт ✅/❌ (haiku).

**Моделі:** автори — модель сесії; перевірки дешевші — `content-verifier` = sonnet, `qa-runner` = haiku (frontmatter агентів). У headless-режимі — `claude -p --model sonnet "/verify-section <id>"`.

## Команди (`.claude/commands/`)
- `/parallel <N> <предмет> [клас]` — оркестрація: взяти N задач і запустити N авторів паралельно, потім зібрати й перевірити.
- `/write-section <файл задачі>` — виконати одну задачу автора.
- `/verify-section <id розділу>` — запустити верифікатора.
- `/sync-style <предмет>` — синхронізація стилю.
- `/handoff` — кінець сесії: куратор пам'яті.

## Паралельні агенти
Запускай авторів **одним повідомленням з кількома викликами Agent** (subagent_type: content-writer), кожен зі своєю задачею. Вони пишуть різні файли, тож ізоляція worktree не потрібна. `tools/build.mjs` запускай лише після того, як усі закінчили (через `qa-runner`).
Плейтест бере вільний порт (`--port N` — за потреби фіксований), тож верифікатори можуть ганяти його паралельно.
Верифікатора запускай окремо й пізніше, щоб він не бачив міркувань автора.

Для довгих пакетних запусків без інтерактиву можна використати headless-режим, наприклад:
```bash
for t in $(node tools/claim.mjs list todo --subject hist --grade 6 --ids | head -3); do
  node tools/claim.mjs claim "$t" "writer-$t" && \
  claude -p "/write-section tasks/doing/$t" --permission-mode acceptEdits &
done; wait
node tools/build.mjs && node tools/validate.mjs && node tools/stats.mjs
```
