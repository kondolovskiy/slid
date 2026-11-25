/* Фікстура tools/test-make-tasks.mjs (engine-eng-tools): розділи плану предмета з targetLang.
   fe4a, fe5a — задачі створюються (write-eng-g<клас>-<розділ>); fe5b — задача є під іншим іменем (section: fe5b у frontmatter);
   fe5q — задача є під старим іменем write-eng-fe5q.md (без frontmatter); fe5p — є лише задача пулу (section: fe5p, type: write-pool) —
   задачу розділу вона не заступає; fe5n — noPool: true у плані (файл розділу з уроками його не скасовує: реєстр зливає записи). */
SLID.section("eng", { id: "fe4a", grade: 4, weeks: [1, 4], title: "Fixture: my school", why: "To talk about school.", plan: ["School things", "My classroom"] });
SLID.section("eng", { id: "fe5a", grade: 5, weeks: [1, 4], title: "Fixture: my family", why: "To talk about family.", plan: ["Family words"] });
SLID.section("eng", { id: "fe5b", grade: 5, weeks: [5, 8], title: "Fixture: task renamed", why: "Task exists.", plan: ["Topic"] });
SLID.section("eng", { id: "fe5q", grade: 5, weeks: [9, 10], title: "Fixture: old task name", why: "Task exists.", plan: ["Topic"] });
SLID.section("eng", { id: "fe5p", grade: 5, weeks: [11, 12], title: "Fixture: only pool task", why: "Pool task only.", plan: ["Topic"] });
SLID.section("eng", { id: "fe5n", grade: 5, weeks: [13, 14], title: "Fixture: no pool in plan", why: "No pool.", noPool: true, plan: ["Topic"] });
