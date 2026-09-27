/* Слід — реєстр контенту.
   Кожен файл у content/ викликає SLID.subject(...), SLID.section(...) або SLID.soon(...).
   Файли не редагують одне одного: розділ з уроками з тим самим id, що й запис у plan.js,
   просто замінює плановий запис (його перелік тем plan зберігається). Це дозволяє
   паралельним агентам писати різні розділи без конфліктів. */
window.SLID = (() => {
  const subjects = [], soonList = [];
  const find = id => subjects.find(s => s.id === id);
  const api = {
    subjects, soonList,
    subject(meta) {
      if (find(meta.id)) throw new Error(`Предмет «${meta.id}» уже зареєстровано`);
      subjects.push(Object.assign({ sections: [], badges: [], credits: [], skills: {} }, meta));
    },
    section(subjectId, sec) {
      const s = find(subjectId);
      if (!s) throw new Error(`Невідомий предмет «${subjectId}» у розділі «${sec.id}»`);
      const i = s.sections.findIndex(x => x.id === sec.id);
      if (i >= 0) { const old = s.sections[i]; s.sections[i] = Object.assign({}, old, sec, { plan: sec.plan || old.plan }); }
      else s.sections.push(sec);
    },
    soon(meta) { soonList.push(meta); },
    finalize() {
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
