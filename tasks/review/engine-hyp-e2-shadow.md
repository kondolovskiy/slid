---
claimed_from: todo
claimed_at: 2026-11-01T20:01:57.542Z
id: engine-hyp-e2-shadow
type: engine
subject: math
status: review
claimed_by: engineer-hyp-e2
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

## Нотатки інженера (engineer-hyp-e2, 2026-11-01)
Що зроблено (worktree wt-hyp2):
- **app/hyp.js** (rv hyp-1 без змін правил): `state()` тепер має `closed` (≤ 200 hid закритих), `scr` і `pend` (без `s`); `load(st, resolve)` відновлює їх (вправу для `pend` знаходить app.js); `drop(hids)`, `setPersist(0|1)`, `pending`; чиста `mergeState(mine, stored)` — злиття вкладок. Виправлено коментар S8 (P3-4 E1).
- **app/evidence.js:** `hyp_*` пасивні для `cause` і без `by`; `SLID_EVIDENCE.cv` (версія без очікування).
- **app/app.js:** блок `HYPS` (лише математика; заглушка без hyp.js): дані спроби — у момент `EV.log("answer")` (`evAnswer`), `onAnswer` — після `setDock` (у тесті рівня — після `save()`, до наступного завдання), try/catch, бюджет 400 мс (перевищення чи виняток вимикають тінь до перезавантаження); `onScreen`, `onLessonEnd` (усі предмети), `flush` на `close`, `tick` після `boot`, `onReset` до `EV.log("reset")`. Передаються `done` (S.lessons), `gv`/`genAt`/`genN`, `preWeak` (S.diag), `pres` (preIndex), власний `dt`, `run`. Журнал `answer`: `ans`/`ansCut`, `fc`, `gv`/`genAt`, `item.lvl`. `save()` за браку квоти видаляє ще й `slid.hyp`; `slid.hyp` пишеться лише після вдалого `slid.v1` (і після відповіді, закриття плеєра, у pagehide/hidden), невдалий запис або `save()`, що звільняв місце, — ключ геть до перезавантаження, `persist: 0`. Запис на старті — лише якщо щось змінилося (інакше ламався сторож skFix).
- **tools/build.mjs:** `app/hyp.js` після learn.js, лише якщо файл є. index.html/sw.js/manifest перезібрано (не закомічено, як просили).
- **tools/hyp-replay.mjs:** `boot` → `tick`; `done` з `lesson_end`; `weak` за останнім `diag_end` кожного тесту; gen — екземпляр за `genAt`; `supersededByMode` у звіті (P3-R2-1); `--events`.
- **Тести:** test-hyp 538 → 564 (межа 0,765 між 0,7 і 0,8 — R03; Brier n лише fresh — R05; state/load/pend/scr/closed/merge/drop/persist; реплей: done, gen, weak, boot; підключення в manifest і стара ревізія без файлу); test-evidence 145 (розділ 11: by після practice_end, cv, розмір hyp_* на всьому змісті ≤ 0,6 КБ, answer з новими полями 0,95 КБ); test-answer-ui `hyp_checks` (у кінці файлу, один рядок у main).
- **Документи:** docs/EVIDENCE.md (slid.hyp, нові поля, типи hyp_*, cause, cv, sync), дизайн §9 п. 16–17 оновлено, п. 18–24 [E2].

Перевірки (сам): `node tools/build.mjs`; `npm run check` — зелено; test-hyp 564/564, test-evidence 145/145; `test-answer-ui.py --suite regression` — green (з hyp_checks: застосунок = реплей, 39 подій hyp_*); `diff-answers --old aab2e44 --grades 4-11` — 0 змін, 0 непояснених; `--content-old aab2e44` і `--content-old 8a1bbcd` (ревізія без app/hyp.js) — 0 змін; `personalization-qa --strict --grade 4…11` — rc 0. Мутанти: scratchpad/hyp2-mut-node — 12 (evidence cause, pend/scr/closed у стані, merge, реплей boot/done/weak/gen, поріг 0,7, build без перевірки файлу), усі вбито; scratchpad/hyp2-mut-ui — 7 браузерних: вбито save() без видалення slid.hyp, запис slid.hyp після «стиснутого» save(), unseen після S.seen, без запису після відповіді, без onLessonEnd; вижили запис у pagehide (дублюється записом після відповіді — pend і так на диску) і пасивність cause у браузері (у маршруті між явною подією й srs немає hyp_*; ловить test-evidence, M1).

Відхилення й рішення:
- **pend при закритті вкладки:** не `flush()` у pagehide, а збереження `pend` у slid.hyp (відкриває перша подія після перезавантаження — так само, як реплей); flush лише без сховища (+ `EV.stash`). Причина: flush дав би hyp_open без S10 там, де реплей бачить другу спробу (bfcache), і порушив би «застосунок = реплей». §9 п. 17.
- Реплей змінено (weak — останній тест, а не накопичення; done; tick на boot; gen-екземпляр), щоб модель збігалася з app.js; на синтетичному журналі E1 результати ті самі.
- `pend` іншої вкладки не зливається (може загубитися, якщо та вкладка закрилася без запису) — §9 п. 20.

Відкриті питання:
- Обсяг: 39 hyp_* на 50 answer на маршруті регресії (P9 на кожне «Ще не знаю» тесту рівня) — більше за оцінку §3.2; чи писати P9 зі skip лічильником у diag_end (до E4).
- Реплей ще не враховує `persist: 0` (гіпотези без сховища між сесіями — §3.3 «реплей такі відкритими не вважає»); у тіні це не впливає на події застосунку, але метрики E4 мають це врахувати.
- Розміщення виклику після `setDock` регресія не відрізняє від «до» (гілка помилки рахує checkAns/formHint заново) — тримається порядком коду й коментарем.
