# Handoff — стан проєкту

_Оновлено: 2026-10-31, куратор пам'яті (журнал sessions/2026-10-31-2.md)._

## Стан
- **Історія, D-027 виконано:** усі 34 розділи (5–11 кл.) мають verified-зображення в кожному уроці; урок без `img` — **помилка** validate (`IMG_REQUIRED.hist = "error"`), регресія `tools/test-validate.mjs` (25 перевірок) у CI і `npm run check`. validate: 0 помилок, 255 попереджень; build: sw.js e122de9328, 319 файлів.
- **Математика, персоналізація:** 4, 5, 7, 8, 9 кл. — діагностики й пули verified, qa прийнято, `personalization-qa --strict` rc 0. 6 кл. — strict rc 1 (8 форматних прогалин → refine-math-diag-g6-coverage). 10–11 кл. — пули й діагностики не почато. Pending без матеріалу: g4m1l4, ms0bl3, ms3l3.
- **Рушій 31.10 (усе з незалежним рев'ю, D-026):** engine-math-skill-sync (D-029: sk матриці = sk уроку, `SLID_LEARN.migrateSk`), engine-math-answer-kinds-new (D-030: time, quantity, improper, decimals, multiset), tools-hist-image-error — done.
- Контент: жодного `approved`. Довга пам'ять: facts/hist №1–313, facts/math №1–190, decisions до **D-030**.
- PR https://github.com/kondolovskiy/slid/pull/6, гілка `claude/intelligent-brahmagupta-zyjilv`. Зміни memory/ цієї сесії куратор не комітив.

## У роботі (`node tools/claim.mjs list doing`)
- doing і review порожні; todo — 33.

## Що далі (пріоритет)
1. **6 кл.:** refine-math-diag-g6-coverage (personalization-shared) → verify-math-personalization-g6 → qa-math-personalization-g6.
2. **10–11 кл.:** write-math-diag-g10/g11, write-math-pool-g10m1–m6, g11m1–m6 (по класу, автори паралельно) → verify-… → qa-…; формати — CONTENT_SCHEMA §10, D-028, D-030.
3. **refine-math-pools-new-kinds** — увімкнути нові answerKind у пулах (D-030); `time` у діагностиці — окрема задача (answer у SLID.diag), ще не створена.
4. **Інженерні з рев'ю (D-026):** engine-player-a11y-followup, engine-answer-kinds-p3, tools-test-validate-p3, tools-validate-tex-escapes (TeX з одним `\` у JS-рядку).
5. **fix-math-terms-g8m4-g9m1**, **curate-math-matrix-v3** (формати/evidence/назви; hint `cmp` у subjects/math.js пояснює лише дроби, а вживається й для натуральних — g4m1l3, dg5), **refine-math-lessons-g7-g9-support** (низький).
6. **qa-math-personalization-release** — наприкінці (dg6 → ms2l4 → pms2, 4 → 5 → 6 → 7 → 11 → 6).
7. Бажане без задачі: credits у app/app.js:496 завжди підписує посилання «Вікісховище» (ООН, музеї) — виводити домен або окреме поле (інженерна задача з рев'ю); g7s4 boss l6 — краще аркуш літопису замість фото церкви (Khlebnikov_Codex.pdf p.313, 429); кінцева крапка «3.» у number/list; `playtest.py --help` запускає повний прогін; P3 рев'ю злиття main+PR6; `sources.short`; єдиний title `mer5` у pms0/1/3; сигли `g7` → `mer7g`, `mer9a` → `a9`; давнє — калібрування профілів (D-011), style-sync hist 7 і math «7-9»/«10-11», engine-practice-pool, engine-ai-solution-check, research-math-diag-duration (пілот — переглянути пороги D-030).

## На рішення людини (пропозиції, ще не в decisions.md)
- **docs/IMAGES.md:** дописати «або рівнозначна вільна ліцензія лише з указанням автора (шаблон Attribution на Commons)» — прийнято в s3 h34 (G. Dall'Orto).
- **Спільні зображення між розділами** (s1 ↔ g8s3, s4 ↔ g7s2, s3 ↔ g7s4, g9s5 ↔ g10s1 тощо): дозволити посилання на один файл чи лишити копії в теках розділів (docs/IMAGES.md: «лише своя тека»).
- style/common.md: «5–10 екранів; 10–11 кл. — до 12»; чутливі boss — «Уяви…»; banned «Як справжній», «Ти — <роль>»; eyebrow «Здогадка» лише з `hyp`; math `signed`, `show`, π+`tol`; hist «традиційно датують…». s4 h45 sentenceWords 4,8 < 5 (репліки боса).

## Відкриті питання
**Історія (зображення, не блокують):**
1. Марка СРСР 1991 «Декларація…»: художник — котрий Олександр Івахненко (Commons Creator 1931–2003 vs uk.wiki 1949–2014)? Дата 10.07.1991 — одне джерело (facts №308). У `cap` ім'я не пишемо.
2. Полотнище «Наші вимоги» 1990 (g11s3 l1) — оригінал чи виставкова копія (фото 2012).
3. Фото Майдану 22.11.2004 (g11s4 l2) з монументом Незалежності — de minimis чи потрібна свобода панорами.
4. **Геткант / Ґеткант** (glossary «Не вирішено»).
5. **Андрусівське перемир'я:** facts №117 «30.01.1667 (13.01 ст. ст.)», урок g8s4 l4 «30 січня 1667»; en.wiki — 9.02 [ст. ст. 30.01] 1667, BRE (сніпет) — 20 (30) січня. Звірити стиль дат.
6. **Львів, Магдебурзьке право:** facts №27 і уроки — 1356; EoU — «before 1352». До рішення лишати 1356.
7. Ліцензія Gnatoush (g11s4 l3): Flickr зараз CC BY-NC 2.0, FlickreviewR 2.12.2013 — CC BY 2.0 (вважаємо дійсною CC BY 2.0).
8. Дублікати зображень у кількох теках (див. «На рішення»).
9. Молотовська обл. (g11s1) — одне джерело (№247); плакат Михайлова — рік невідомий; Open Kurbas CC BY-NC-ND vs PD-Ukraine (№235); Скоропадський — Кассель/Spa (№229); кращі зображення g10s2/g10s5 boss.
10. Давні: Сандармох 287/290/≈ 300 (№176); українізація 1923 (№173); «Червона калина» (№162); Межиріч, гончарний круг (№128); glossary hist «Не вирішено»; g11s1 без окремого hyp/poll.

**Математика:**
11. Автори a7: pg7m5 — «Мерзляк, Полонський, Якір», інші — «Мерзляк, Якір»; титул не звірено (facts №168).
12. mer7g №358(2): сума різносторонніх ∠3 + ∠5 не визначена — погляд учителя.
13. «проєкція», «перетин» за D-023/D-024 — якщо людина проти, відкотити glossary/math 148, 172.
14. Прогалини без вправ: g9m7l3 кругова діаграма; п. 22–23 a8; «скільки човнів» (4 кл.). Pending g4m1l4, ms0bl3, ms3l3 — не робити required мовчки; dg4 №18; ISBN Логачевської ч. 2 (№155). Бажані речення 4–5 кл. (журнал 30.10).
15. Давні: медіана парного ряду; рівняння площини (g11m2 l3); координати в просторі (10 vs 11); m4s1 без boss; `requires`; алгебра/геометрія окремо з 7 кл. (D-008)?; хто рецензент; ms0 `$3 * x$`, g9m6 `$C = 2πr$`.

## Запити до рушія (без задачі)
- `fig` у пулах для геометрії (mer7g рис. 17–39, 86–91, 128–172, 226–256, 313); `fig kind: "box"`/`lab solid`; транспортир із двома шкалами.
- SVG-карти hist (g9s1, g6s5, g10s2, g10s5); lab: «space», solid cylinder/cone/sphere, логарифм без a = 1, plane snap/rays.

## Обмеження середовища
- Commons: `thumb.wikimedia.org` замість upload (pitfalls 31.10-2), ≤ 2 агенти з фото, власна підтека scratchpad. Недоступні: chtyvo, dlibra.kul.pl, archives.gov.ua, web.archive.org, bigenc.ru, zakon.rada (503), lib.imzo. Паралельні агенти: ніколи `git stash/checkout/reset`; злиття worktree — лише файли задачі.

## Як продовжити
«Прочитай AGENTS.md і handoff; візьми refine-math-diag-g6-coverage (personalization-shared), паралельно — пакет 10 кл. (write-math-diag-g10, write-math-pool-g10m1–m6)».
