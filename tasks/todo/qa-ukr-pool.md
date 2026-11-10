---
id: qa-ukr-pool
type: qa
subject: ukr
status: todo
claimed_by:
created: 2026-11-10
depends_on: [engine-pool-lang, write-ukr-pool-u5s1, write-ukr-pool-u5s10, write-ukr-pool-u5s2, write-ukr-pool-u5s3, write-ukr-pool-u5s4, write-ukr-pool-u5s5, write-ukr-pool-u5s6, write-ukr-pool-u5s7, write-ukr-pool-u5s8, write-ukr-pool-u5s9, write-ukr-pool-u6s1, write-ukr-pool-u6s10, write-ukr-pool-u6s11, write-ukr-pool-u6s12, write-ukr-pool-u6s13, write-ukr-pool-u6s2, write-ukr-pool-u6s3, write-ukr-pool-u6s4, write-ukr-pool-u6s5, write-ukr-pool-u6s6, write-ukr-pool-u6s7, write-ukr-pool-u6s8, write-ukr-pool-u6s9, write-ukr-pool-u7s1, write-ukr-pool-u7s10, write-ukr-pool-u7s11, write-ukr-pool-u7s12, write-ukr-pool-u7s2, write-ukr-pool-u7s3, write-ukr-pool-u7s4, write-ukr-pool-u7s5, write-ukr-pool-u7s6, write-ukr-pool-u7s7, write-ukr-pool-u7s8, write-ukr-pool-u7s9, write-ukr-pool-u8s1, write-ukr-pool-u8s10, write-ukr-pool-u8s11, write-ukr-pool-u8s12, write-ukr-pool-u8s13, write-ukr-pool-u8s2, write-ukr-pool-u8s3, write-ukr-pool-u8s4, write-ukr-pool-u8s5, write-ukr-pool-u8s6, write-ukr-pool-u8s7, write-ukr-pool-u8s8, write-ukr-pool-u8s9]
---
# Браузерне приймання пулів тренування української 5–8 кл.

## Навіщо
Після верифікації пулів `pu*` (48 розділів 5–8 кл., без «Пишемо самі») — перевірити тренування як дитина. Можна запускати частинами по класу, щойно пули класу verified (звіт — розділ на клас).

## Що зробити (агент qa-runner або CI)
1. `npm run check` зелений; `node tools/personalization-qa.mjs --pool <id>` для кожного пулу.
2. Браузер (CI job `browser` / test-ui): пройти урок → тренування відкрилось; сесія 6 вправ (4 теми + 2 повторення); помилка → hint → друга спроба; SRS-коробки після сесії; мовні вправи на телефонній ширині (gaps, stress, pick — дотик, клавіатура); повторення наступного дня (підміна дати).
3. Вибірково (≥ 10 вправ на клас) — розв'язати заново й звірити вердикт рушія з нормою.
4. Звіт `reports/qa/qa-ukr-pool.md` ✅/❌; знахідки — BUG/ENGINE в inbox, блокувальні — задачі fix-*.

## Нотатки виконавця
