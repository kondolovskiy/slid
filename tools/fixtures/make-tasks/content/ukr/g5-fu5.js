/* Фікстура tools/test-make-tasks.mjs (--write-pool --subject ukr, engine-pool-lang): розділи з уроками — кандидати на задачу пулу.
   fu5a — задача створюється (boss у переліку не з'являється); fu5b — пул уже є (файл pool-g5-fu5b.js); fu5c — задача вже є (у тимчасовій
   черзі тесту); fu5d — пул уже є лише за id (pfu5d зареєстровано в іншому файлі); fu5rm — «Пишемо самі…» (розвиток мовлення) — без пулу;
   fu6a — 6 клас (для --grade). Розділів лише з планом тут немає: звичайний режим make-tasks ukr-фікстури не чіпає. */
SLID.section("ukr", { id: "fu5a", grade: 5, weeks: [1, 3], title: "Фікстура правопису", lessons: [
  { id: "fu5al1", title: "Перший урок", screens: [] }, { id: "fu5al2", title: "Другий урок", screens: [] }, { id: "fu5ab", title: "Фінал", boss: true, screens: [] }] });
SLID.section("ukr", { id: "fu5b", grade: 5, weeks: [4, 5], title: "Фікстура з пулом", lessons: [{ id: "fu5bl1", title: "Урок", screens: [] }] });
SLID.section("ukr", { id: "fu5c", grade: 5, weeks: [6, 7], title: "Фікстура з задачею", lessons: [{ id: "fu5cl1", title: "Урок", screens: [] }] });
SLID.section("ukr", { id: "fu5d", grade: 5, weeks: [8, 8], title: "Фікстура з пулом за id", lessons: [{ id: "fu5dl1", title: "Урок", screens: [] }] });
SLID.section("ukr", { id: "fu5rm", grade: 5, weeks: [9, 10], title: "Пишемо самі: фікстура", lessons: [{ id: "fu5rml1", title: "Урок", screens: [] }] });
SLID.section("ukr", { id: "fu6a", grade: 6, weeks: [1, 2], title: "Фікстура 6 класу", lessons: [{ id: "fu6al1", title: "Урок", screens: [] }] });
SLID.pool("ukr", { id: "pfu5d", section: "fu5d", status: "draft", sources: [], items: [] });
