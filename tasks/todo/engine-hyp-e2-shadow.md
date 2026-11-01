---
id: engine-hyp-e2-shadow
type: engine
subject: math
status: todo
claimed_by:
created: 2026-11-01
depends_on: [engine-hyp-e1-module, engine-evidence-p3]
---
# Гіпотези, етап E2: поля Evidence і тіньовий режим у застосунку

Дизайн: docs/design/diag-hypothesis-math.md §3 (контракт), §2.3 (тінь), §6.1 E2. У тіні дитина нічого нового не бачить, а `slid.v1` не змінюється.

## Що зробити
1. Evidence (app/evidence.js, app/app.js, docs/EVIDENCE.md): `d.ans` (≤ 60 символів, інакше `ansCut: 1`; choice — індекс, multi — масив), `d.gv` (gen), `d.fc` (`formCode`), `item.lvl`; типи `hyp_open/hyp_probe/hyp_close/hyp_fmt` **пасивні для `cause`** (як `srs`/`plan`/`grade`); `v` схеми не змінюється.
2. Підключення тіні в app.js: `SLID_HYP.onAnswer(...)` з даними з app.js напряму (власний `dt`), **після `setDock`**, у `try/catch` і з бюджетом часу; події — через `EV.log`. Працює без IndexedDB і без app/evidence.js.
3. `slid.hyp` (§3.3): `open`, `probed`, `gens` (`gv` + `cv`); ліміти (≤ 50 гіпотез, найстаріша → `expired, cap: 1`; `probed` ≤ 200; `gens` ≤ 10 на ключ); запис лише після `slid.v1`, при помилці запису — самоочищення; злиття вкладок за `hid`; на старті `expired` > 7 днів; «Скинути прогрес» — `hyp_close reset` до `EV.log("reset")`/`EV.newProfile()`.
4. `app/hyp.js` в index.html і `sw.js` (`node tools/build.mjs`).

## Критерії приймання
- test-evidence: нові поля, розмір подій (≤ 2 КБ), `cause` не змінюють `hyp_*` (зміни SRS/плану після `practice_end` мають `by` = `practice_end`).
- Регресія (test-answer-ui, як evidence_checks): `slid.v1` однаковий з hyp.js / без нього / без IndexedDB; тексти доку (formHint/badHint) однакові з hyp.js і без; заповнене сховище → `slid.v1` записано, `slid.hyp` очищено; офлайн.
- Застосунок = реплей: події `hyp_*` застосунку для сценарію з помилками збігаються з `tools/hyp-replay.mjs` на тому самому журналі.
- `npm run check` зелений; незалежне рев'ю D-026.

## На майбутні етапи (не в цій задачі)
- E3 — `mis` (CONTENT_SCHEMA, validate, ≈ 25 пілотних задач dg6/pg6m2/pg7m3, автор + верифікатор); E3g — `gen` у пілотних уроках до E4 (умови — §6.3 п. 7); E4 — тінь у пілоті (залежить від бекенду, §4.2 п. 3).
- **E5 (умова рев'ю R4-P2-1, рішення оркестратора):** одиниця вставленої перевірки — **пара (урок, sk)**; одна перевірка наступного дня на початку сесії оновлює всі відкриті гіпотези пари (`hyp_probe` по події на `hid` зі спільним `prb`); перевірка — звичайна вправа (`S.seen`, `record`, SRS), без кнопки «Пропустити»; без ліміту на сесію.
- E6 — лише кроки плану для `rule`/`pre` після рішення людини; SRS не змінюється.

## Із рев'ю E1 (reports/review/engine-hyp-e1-module.md, P3-5; додав engineer-hyp-e1)
- Гіпотеза, що чекає другої спроби (`pend` у `SLID_HYP.tracker`), живе лише в пам'яті: якщо вкладку закрито до `close`/наступного екрана, гіпотезу втрачено. E2: у `pagehide` / при збереженні `slid.hyp` викликати `tracker.flush()` і записати події (docs/design §9 п. 17).
- app.js має передавати в `onAnswer` `done` (уроки пари з `S.lessons[l].done`) — для `superseded` (§9 п. 10), а в журнал `answer` — `gv`, `genAt` для Dg у реплеї (§9 п. 16).

## P3 з повторного рев'ю E1 (reports/review/engine-hyp-e1-module.md, «Раунд 2»)
- Гіпотези з тесту рівня по темі з уже пройденим уроком закриваються `superseded` на першому повторному проході — рахувати `superseded` окремо для гіпотез з тесту рівня (у звіті реплею й у E4); переглянути правило, якщо частка помітна.
- Тести: межовий випадок порогу групи (0,8 vs 0,7); профілі не з початку журналу не потрапляють у Brier — перевірка на такому журналі.
- Реплей не передає трекеру `done` (пройдені уроки) — для профілів не з початку журналу; згадати в §9 п. 16 або передавати з першої події стану.
