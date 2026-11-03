# QA: hist-artynov-gaps + hist-world-7-9 (2026-11-03)

Прогін — qa-runner після build (коміт «build: нові розділи hist g5s5–g6s8, world w7s1–w7s5»).

- `npm run check` — ✅ (build, 12 тестових наборів, validate 0 помилок / 266 попереджень, graph math 0/0, stats).

| Розділ | validate --section | playtest --section |
|---|---|---|
| g5s5 | ✅ 0/0 | ✅ 7 уроків |
| g5s6 | ✅ 0/0 | ✅ 7 |
| g6s6 | ✅ 0/0 | ✅ 6 |
| g6s7 | ✅ 0/0 | ✅ 7 |
| g6s8 | ✅ 0/0 | ✅ 7 |
| g7s4 | ✅ 0/1 (sentenceWords l6, давнє) | ✅ 6 |
| g7s5 | ✅ 0/2 (давні) | ✅ 6 |
| g8s1 | ✅ 0/2 (давні) | ✅ 6 |
| g8s5 | ✅ 0/7 (sentenceWords, як у незмінених) | ✅ 8 |
| w7s1 | ✅ 0/0 | ✅ 5 |
| w7s2 | ✅ 0/0 | ✅ 6 |
| w7s3 | ✅ 0/0 | ✅ 6 |
| w7s4 | ✅ 0/0 | ✅ 5 |
| w7s5 | ✅ 0/0 | ✅ 6 |

Прапорці stats world: w7s1l1, w7s1l5, w7s3l4, w7s5l1 → style-sync.
