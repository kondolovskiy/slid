---
claimed_from: todo
claimed_at: 2026-11-18T12:05:20.127Z
id: engine-demo-guard-p3-1118
type: engine
subject: all
status: todo
claimed_by: agent-engine-demo2
created: 2026-11-18
source: engine-demo-guard-1118
priority: P3
---
# Дрібниці демо-кнопки після рев'ю engine-demo-guard-1118

Скіл `engine-change`; незалежне рев'ю D-026. Знахідки — reports/review/engine-demo-guard-1118.md (P3-1…P3-4).

1. **P3-1:** таймер першого натискання `#demo` не скасовується після другого → наступне вікно підтвердження може бути ≈ 1 с замість 4. `clearTimeout` (app/app.js ~837). Те саме для `confirmReset` («Скинути прогрес»).
2. **P3-2:** test-ui — перевірку «ключа немає в slid.v1/localStorage» повторити після заповнення демо; у syncScenarios перевірити, що тіла запитів не містять ключа.
3. **P3-3:** підпис другого натискання: якщо пристрій увійшов в акаунт (SYNC.signedIn()), попередити, що демо-прогрес піде в акаунт (коротко, без канцеляриту; D-020 без роду).
4. **P3-4:** коментар «9) Синхронізація…» в tools/test-ui.mjs — над своїм сценарієм; абзац про демо-ключ у docs/ARCHITECTURE.md — під відповідним заголовком.

## Критерії готовності
- Тести на п. 1–3 падають на старому коді; node-тести й test-ui зелені; reports/review/engine-demo-guard-p3-1118.md — «прийнято».

## Нотатки виконавця (agent-engine-demo2)
- P3-1: `demoTimer`/`resetTimer` + `clearTimeout` перед новим і після другого натискання (app/app.js). P3-3: підпис «…і піде в акаунт» при `SYNC.signedIn()`. P3-2: перевірка localStorage після заповнення; у syncScenarios тіла запитів не містять ключа. P3-4: коментар «9)» над `syncScenarios`; абзац у ARCHITECTURE — новий розділ «Демо-прогрес».
- Тести: `NODE_PATH=/opt/node22/lib/node_modules node tools/test-ui.mjs` → 293 ok, 0 ✗. На старому app.js (HEAD) падають 3 нові перевірки (обидва таймери, підпис акаунта). Перевірки P3-2 — сторожові (мутант «ключ у slid.v1» не вводився), на старому коді зелені.
- build.mjs не запускався (оркестратор): змінено app/app.js.
