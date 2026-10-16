// Structural acceptance against the curator's matrix; no network and no mathematical verification.
import { pathToFileURL } from 'node:url';
import { loadContent, readJSON } from './lib.mjs';

export function audit(subject, matrix, learn, filter = {}) {
  const errors = [], missing = [], unsupported = [];
  const sections = new Map(subject.sections.filter(s => s.lessons?.length).map(s => [s.id, s]));
  const lessons = new Map([...sections.values()].flatMap(s => s.lessons.map(l => [l.id, { ...l, grade: s.grade, section: s.id }])));
  const pools = new Map(subject.pools.map(p => [p.id, p]));
  const selected = row => (!filter.grade || row.grade === filter.grade) &&
    (!filter.pool || row.pool === filter.pool) && (!filter.diag || row.grade === matrix.diagnostics.find(d => d.id === filter.diag)?.grade);
  const rows = matrix.lessons.filter(selected);
  if (!rows.length) errors.push('Фільтр не вибрав жодного уроку матриці');
  const inventory = matrix.lessons.map(r => r.lesson), actual = [...lessons.values()].filter(l => !l.boss).map(l => l.id);
  if (new Set(inventory).size !== inventory.length) errors.push('Повторені уроки в матриці');
  for (const id of actual) if (!inventory.includes(id)) errors.push(`Урок поза матрицею: ${id}`);
  for (const r of matrix.lessons) if (lessons.get(r.lesson)?.section !== r.section || lessons.get(r.lesson)?.grade !== r.grade) errors.push(`Інвентар не збігається: ${r.lesson}`);
  if (new Set(matrix.lessons.map(r => r.section)).size !== sections.size) errors.push('Кількість розділів не збігається з матрицею');
  const ctx = { lessons, sections: new Map([...sections].map(([id, s]) => [id, { ...s, lessons: s.lessons.map(l => l.id) }])), skills: subject.skills };
  const diags = subject.diags.filter(d => (!filter.grade || d.grade === filter.grade) && (!filter.diag || d.id === filter.diag) && !filter.pool);
  const selectedPools = subject.pools.filter(p => (!filter.grade || sections.get(p.section)?.grade === filter.grade) && (!filter.pool || p.id === filter.pool) && !filter.diag);
  for (const d of diags) {
    errors.push(...learn.validate(d, ctx).map(e => `${d.id}: ${e}`));
    if (subject.diags.filter(x => x.grade === d.grade).length !== 1) errors.push(`${d.grade}: потрібно один тест на клас`);
    if (!['verified', 'approved'].includes(d.status)) missing.push(`${d.id}: ще не verified`);
    const expected = matrix.diagnostics.find(x => x.id === d.id);
    if (!expected || expected.grade !== d.grade) errors.push(`${d.id}: тест поза матрицею свого класу`);
    for (const t of expected?.topics || []) {
      const actual = d.topics.find(x => x.id === t.id);
      if (!actual) { missing.push(`${d.id}: немає теми ${t.id}`); continue; }
      for (const key of ['kind', 'lessons', 'for']) if (JSON.stringify(actual[key] || []) !== JSON.stringify(t[key] || [])) missing.push(`${d.id}/${t.id}: ${key} не збігається з матрицею`);
      const items = d.items.filter(it => it.topic === t.id);
      const itemLessons = items.map(it => it.lesson ?? (actual.lessons?.length === 1 ? actual.lessons[0] : null));
      const itemSkills = items.map(it => it.sk);
      for (const [key, value] of [['itemLessons', itemLessons], ['itemSkills', itemSkills]]) {
        if (JSON.stringify(value) !== JSON.stringify(t[key])) missing.push(`${d.id}/${t.id}: ${key} не збігається з матрицею`);
      }
      if (t.itemIndices && JSON.stringify(d.items.flatMap((it, i) => it.topic === t.id ? [i] : [])) !== JSON.stringify(t.itemIndices)) missing.push(`${d.id}/${t.id}: itemIndices не збігається з матрицею`);
    }
    if (d.grade === 4 && d.topics.some(t => t.baseline)) unsupported.push(`${d.id}: baseline потребує engine-math-diag-g4-baseline і його регресій`);
  }
  for (const d of matrix.diagnostics.filter(d => (!filter.grade || d.grade === filter.grade) && (!filter.diag || d.id === filter.diag) && !filter.pool)) {
    if (!diags.some(x => x.id === d.id)) missing.push(`Діагностика ${d.id} (content/math/diag-g${d.grade}.js)`);
  }
  for (const p of selectedPools) {
    errors.push(...learn.validatePool(p, ctx).map(e => `${p.id}: ${e}`));
    if (!['verified', 'approved'].includes(p.status)) missing.push(`${p.id}: ще не verified`);
    if (subject.pools.filter(x => x.id === p.id).length !== 1) errors.push(`Повторений пул ${p.id}`);
    for (const it of p.items) if (lessons.get(it.lesson)?.boss) errors.push(`${p.id}/${it.id}: boss не тренується`);
  }
  for (const r of rows.filter(r => r.curricularScope === 'required' && !filter.diag)) {
    const p = pools.get(r.pool), items = p?.items.filter(it => it.lesson === r.lesson) || [];
    if (!p) { missing.push(`${r.pool}: відсутній пул для ${r.lesson}`); continue; }
    if (p.section !== r.section) errors.push(`${r.pool}: section не збігається з ${r.section}`);
    if (items.length < r.exercises.min || items.length > r.exercises.max) missing.push(`${r.pool}/${r.lesson}: ${items.length} вправ, потрібно ${r.exercises.min}–${r.exercises.max}`);
    for (const lvl of [1, 2, 3]) if (!items.some(it => it.lvl === lvl)) missing.push(`${r.pool}/${r.lesson}: немає рівня ${lvl}`);
    for (const format of r.formats) {
      const present = items.some(it => (it.answerKind || (it.type === 'answer' ? 'number' : it.type)) === format);
      if (!present) missing.push(`${r.pool}/${r.lesson}: немає формату ${format}`);
    }
    if (!items.some(it => it.sk === r.sk)) missing.push(`${r.pool}/${r.lesson}: немає навички матриці ${r.sk}`);
  }
  if (!diags.length && !selectedPools.length) errors.push('Нуль доступних об’єктів для перевірки');
  return { version: matrix.version, errors, missing, unsupported,
    counts: { sections: sections.size, lessons: actual.length, required: rows.filter(r => r.curricularScope === 'required').length,
      requiredPools: new Set(rows.filter(r => r.curricularScope === 'required').map(r => r.pool)).size,
      diagnostics: diags.length, pools: selectedPools.length, exercises: selectedPools.reduce((n, p) => n + p.items.length, 0) },
    optional: rows.filter(r => r.curricularScope === 'optional').map(r => r.lesson),
    pending: rows.filter(r => r.curricularScope === 'pending').map(r => r.lesson),
    exceptions: rows.filter(r => r.curricularScope === 'required' && r.exercises?.min < 6).map(r => ({ lesson: r.lesson, exercises: r.exercises, reason: r.reason })),
    diags, pools: selectedPools };
}

export function run(args) {
  const filter = {}, flags = new Set(['--strict', '--json']);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (['--grade', '--diag', '--pool'].includes(arg)) {
      const value = args[++i];
      if (!value || value.startsWith('--')) throw new Error(`Немає значення ${arg}`);
      filter[arg.slice(2)] = arg === '--grade' ? Number(value) : value;
    } else if (!flags.has(arg)) throw new Error(`Невідомий аргумент ${arg}`);
  }
  if ('grade' in filter && (!Number.isInteger(filter.grade) || filter.grade < 4 || filter.grade > 11)) throw new Error('Клас має бути 4–11');
  if (filter.diag && filter.pool) throw new Error('--diag і --pool взаємовиключні');
  const { subjects, learn } = loadContent(), matrix = readJSON('docs/math-personalization-coverage.json');
  if (filter.diag && !matrix.diagnostics.some(d => d.id === filter.diag)) throw new Error(`Невідома діагностика ${filter.diag}`);
  if (filter.pool && !matrix.lessons.some(r => r.pool === filter.pool)) throw new Error(`Невідомий пул ${filter.pool}`);
  const report = audit(subjects.find(c => c.id === 'math'), matrix, learn, filter);
  if (args.includes('--json')) console.log(JSON.stringify(report));
  else {
    console.log(`Матриця ${report.version}: ${JSON.stringify(report.counts)}`);
    for (const [label, key] of [['ПОМИЛКА', 'errors'], ['БРАКУЄ', 'missing'], ['НЕ ПІДТРИМАНО', 'unsupported']]) for (const line of report[key]) console.log(`${label}: ${line}`);
    console.log(`Optional (${report.optional.length}): ${report.optional.join(', ')}\nPending (${report.pending.length}): ${report.pending.join(', ')}`);
    for (const x of report.exceptions) console.log(`Виняток: ${JSON.stringify(x)}`);
  }
  return report.errors.length || (args.includes('--strict') && (report.missing.length || report.unsupported.length)) ? 1 : 0;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { process.exitCode = run(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exitCode = 1; }
}
