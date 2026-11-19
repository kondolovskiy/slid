/* Фікстура tools/test-make-tasks.mjs (--write-pool --subject eng, engine-eng-tools): розділи з уроками.
   fe5c — задача пулу створюється (boss не в переліку); fe5d — задача пулу є під іншим іменем (section: fe5d, type: write-pool);
   fe5w — noPool: true у файлі розділу; fe5n — noPool з plan.js. */
SLID.section("eng", { id: "fe5c", grade: 5, weeks: [15, 17], title: "Fixture: food", lessons: [
  { id: "fe5cl1", title: "Fruit", screens: [] }, { id: "fe5cl2", title: "Breakfast", screens: [] }, { id: "fe5cb", title: "Final", boss: true, screens: [] }] });
SLID.section("eng", { id: "fe5d", grade: 5, weeks: [18, 19], title: "Fixture: pool task renamed", lessons: [{ id: "fe5dl1", title: "Lesson", screens: [] }] });
SLID.section("eng", { id: "fe5w", grade: 5, weeks: [20, 21], title: "Fixture: write it yourself", noPool: true, lessons: [{ id: "fe5wl1", title: "Lesson", screens: [] }] });
SLID.section("eng", { id: "fe5n", grade: 5, weeks: [13, 14], title: "Fixture: no pool in plan", lessons: [{ id: "fe5nl1", title: "Lesson", screens: [] }] });
