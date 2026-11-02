/* Слід — реєстр контенту.
   Кожен файл у content/ викликає SLID.subject(...), SLID.section(...), SLID.diag(...), SLID.pool(...), SLID.graph(...) або SLID.soon(...).
   Файли не редагують одне одного: розділ з уроками з тим самим id, що й запис у plan.js,
   просто замінює плановий запис (його перелік тем plan зберігається). Це дозволяє
   паралельним агентам писати різні розділи без конфліктів. */
window.SLID = (() => {
  const subjects = [], soonList = [], graphs = [];
  const find = id => subjects.find(s => s.id === id);
  const api = {
    subjects, soonList, graphs,
    subject(meta) {
      if (find(meta.id)) throw new Error(`Предмет «${meta.id}» уже зареєстровано`);
      subjects.push(Object.assign({ sections: [], badges: [], credits: [], skills: {}, diags: [], pools: [], graph: null }, meta));
    },
    section(subjectId, sec) {
      const s = find(subjectId);
      if (!s) throw new Error(`Невідомий предмет «${subjectId}» у розділі «${sec.id}»`);
      const i = s.sections.findIndex(x => x.id === sec.id);
      if (i >= 0) { const old = s.sections[i]; s.sections[i] = Object.assign({}, old, sec, { plan: sec.plan || old.plan }); }
      else s.sections.push(sec);
    },
    /* діагностичний тест класу: content/<предмет>/diag-g<клас>.js (docs/CONTENT_SCHEMA.md §9) */
    diag(subjectId, d) {
      const s = find(subjectId);
      if (!s) throw new Error(`Невідомий предмет «${subjectId}» у діагностиці «${d.id}»`);
      if (subjects.some(x => x.diags.some(y => y.id === d.id))) throw new Error(`Діагностику «${d.id}» уже зареєстровано`);
      s.diags.push(d);
    },
    /* пул задач для тренування: content/<предмет>/pool-g<клас>-<розділ>.js (docs/CONTENT_SCHEMA.md §10) */
    pool(subjectId, p) {
      const s = find(subjectId);
      if (!s) throw new Error(`Невідомий предмет «${subjectId}» у пулі «${p.id}»`);
      if (subjects.some(x => x.pools.some(y => y.id === p.id))) throw new Error(`Пул «${p.id}» уже зареєстровано`);
      s.pools.push(p);
    },
    /* граф умінь предмета: content/<предмет>/graph.js (docs/CONTENT_SCHEMA.md §11; лише куратор). Рушій його поки не читає (етап G1):
       дані лише реєструються й прив'язуються до предмета у finalize(), тож порядок завантаження файлів не важливий.
       Невідомий предмет не ламає застосунок — це помилка tools/validate.mjs. */
    graph(subjectId, g) {
      if (!g || typeof g !== "object" || Array.isArray(g)) throw new Error(`Граф предмета «${subjectId}»: потрібен об'єкт { v, lines, nodes }`);
      if (graphs.some(x => x.subject === subjectId)) throw new Error(`Граф предмета «${subjectId}» уже зареєстровано`);
      graphs.push({ subject: subjectId, graph: g });
    },
    soon(meta) { soonList.push(meta); },
    finalize() {
      graphs.forEach(x => { const s = find(x.subject); if (s) s.graph = x.graph; });
      subjects.forEach(s => {
        s.sections.sort((a, b) => a.grade - b.grade || (a.weeks?.[0] ?? 99) - (b.weeks?.[0] ?? 99));
        s.sections.forEach(x => {
          (x.badges || []).forEach(b => { if (!s.badges.some(y => y.id === b.id)) s.badges.push(b); });
          (x.credits || []).forEach(c => s.credits.push(c));
        });
      });
      window.SLID_SUBJECTS = subjects;
      window.SLID_SOON = soonList;
    }
  };
  return api;
})();
