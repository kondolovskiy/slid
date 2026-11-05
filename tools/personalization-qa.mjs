// Structural acceptance against the curator's matrix; no network and no mathematical verification.
import { pathToFileURL } from 'node:url';
import { loadContent, readJSON } from './lib.mjs';

// Вимогу exactRoot закриває також list, у ключі якого є точний корінь (√, ∛…) і який checkAns справді перевіряє точно:
// ключ як записано — "ok", ключ із десятковими наближеннями коренів — "bad". Наближення, π без кореня, числовий list — ні.
export function rootList(it, learn) {
  if (it.type !== 'answer' || it.answerKind !== 'list' || typeof learn.listKey !== 'function') return false;
  const els = learn.listKey(it);
  if (!els?.length || !els.some(e => e.exact && e.root) || !els.every(e => e.tidy)) return false;
  const key = Array.isArray(it.answer) ? it.answer.join('; ') : String(it.answer);
  // Наближення — лише для коренів; раціональний елемент лишається точним («1/3», не 0.3333333333333333 — такий запис
  // відкидається через довжину, і проба перестала б перевіряти саме корені). Без rat (старий learn.js) — 6 знаків.
  const approx = els.map(e => e.root ? e.approx.toFixed(6) : e.rat ?? e.approx.toFixed(6)).join('; ');
  // Обидві умови (every tidy вище і ключ → ok) потрібні: tidy — розбір ключа, ok — повна перевірка (зокрема reduced/±).
  return learn.checkAns(it, key) === 'ok' && learn.checkAns(it, approx) === 'bad';
}

// Вимогу expression закриває також coordinates2, у ключі якого є компонента-вираз (рішення людини 2026-10-31, №13.5(4)),
// лише якщо checkAns справді перевіряє її як вираз: ключ як записано — "ok"; тотожний інший запис «0 + (…)» — не "bad";
// інший вираз «(…) + змінна» і десяткове наближення «(…) + 0,0000001» — "bad". Числова пара, неканонічний ключ — ні.
export function exprPair(it, learn) {
  if (it.type !== 'answer' || it.answerKind !== 'coordinates2' || typeof learn.pairKey !== 'function') return false;
  const comps = learn.pairKey(it);
  if (comps?.length !== 2 || !comps.some(c => c.expr && c.vars.length) || !comps.every(c => c.tidy)) return false;
  const pair = f => '(' + comps.map(c => c.expr ? f(c) : c.text).join('; ') + ')';
  return learn.checkAns(it, pair(c => c.text)) === 'ok' && learn.checkAns(it, pair(c => `0 + (${c.text})`)) !== 'bad'
    && learn.checkAns(it, pair(c => `(${c.text}) + ${c.vars[0]}`)) === 'bad' && learn.checkAns(it, pair(c => `(${c.text}) + 0,0000001`)) === 'bad';
}

// Навички (sk) рядка матриці: рядок або масив (рішення людини 2026-10-31, engine-math-skill-sync).
export const rowSkills = r => [].concat(r.sk ?? []);
// Навички, які урок справді тренує: sk його екранів. Джерело правди для sk матриці, пулу й проб діагностики.
export const lessonSkills = l => new Set((l?.screens || []).map(s => s.sk).filter(Boolean));

export function audit(subject, matrix, learn, filter = {}) {
  const errors = [], missing = [], unsupported = [], warnings = [];
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
  const homes = p => [p.section, ...(p.also || [])];   // also — розділи, куди перенесено частину уроків пулу (docs/design/math-ister.md §4)
  const selectedPools = subject.pools.filter(p => (!filter.grade || homes(p).some(id => sections.get(id)?.grade === filter.grade)) && (!filter.pool || p.id === filter.pool) && !filter.diag);
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
      if (!!actual.baseline !== !!t.baseline) missing.push(`${d.id}/${t.id}: baseline не збігається з матрицею`);
      const items = d.items.filter(it => it.topic === t.id);
      const itemLessons = items.map(it => it.lesson ?? (actual.lessons?.length === 1 ? actual.lessons[0] : null));
      const itemSkills = items.map(it => it.sk);
      items.forEach((it, i) => { const sks = lessonSkills(lessons.get(itemLessons[i]));
        if (sks.size && !sks.has(it.sk)) warnings.push(`${d.id}/${t.id} №${d.items.indexOf(it) + 1}: sk ${it.sk} не тренує урок ${itemLessons[i]} (${[...sks].join(', ')})`); });
      for (const [key, value] of [['itemLessons', itemLessons], ['itemSkills', itemSkills]]) {
        if (JSON.stringify(value) !== JSON.stringify(t[key])) missing.push(`${d.id}/${t.id}: ${key} не збігається з матрицею`);
      }
      if (t.itemIndices && JSON.stringify(d.items.flatMap((it, i) => it.topic === t.id ? [i] : [])) !== JSON.stringify(t.itemIndices)) missing.push(`${d.id}/${t.id}: itemIndices не збігається з матрицею`);
    }
  }
  for (const d of matrix.diagnostics.filter(d => (!filter.grade || d.grade === filter.grade) && (!filter.diag || d.id === filter.diag) && !filter.pool)) {
    if (!diags.some(x => x.id === d.id)) missing.push(`Діагностика ${d.id} (content/math/diag-g${d.grade}.js)`);
    // forEvidence (рев'ю curate-math-matrix-v8-v9 P3-1; tools-math-ister-p3 п. 15): кожен запис — урок свого розділу, розділ — з for;
    // кожен розділ for має запис. Лише для тем, де forEvidence є (старі матриці його не мають)
    for (const t of d.topics || []) if (Array.isArray(t.forEvidence)) {
      for (const e of t.forEvidence) {
        if (lessons.get(e.lesson)?.section !== e.section) missing.push(`${d.id}/${t.id}: forEvidence ${e.lesson} не з розділу ${e.section}`);
        if (!(t.for || []).includes(e.section)) missing.push(`${d.id}/${t.id}: forEvidence ${e.section} поза for`);
      }
      for (const sec of t.for || []) if (!t.forEvidence.some(e => e.section === sec)) missing.push(`${d.id}/${t.id}: розділ ${sec} з for без forEvidence`);
    }
  }
  // preForSection рядка = pre-теми (не cur) тесту класу з матриці, чий for містить розділ рядка, у порядку тесту (там само P3-1).
  // Лише рядки з diagnostic.preForSection; filter.pool — без діагностик
  for (const r of rows.filter(r => Array.isArray(r.diagnostic?.preForSection) && !filter.pool)) {
    const d = matrix.diagnostics.find(x => x.grade === r.grade);
    const want = (d?.topics || []).filter(t => t.kind !== 'cur' && (t.for || []).includes(r.section)).map(t => t.id);
    if (JSON.stringify(want) !== JSON.stringify(r.diagnostic.preForSection)) missing.push(`${r.lesson}: preForSection ${JSON.stringify(r.diagnostic.preForSection)} ≠ pre-теми ${d?.id ?? `тесту ${r.grade} кл.`} з for ${r.section}: ${JSON.stringify(want)}`);
  }
  for (const p of selectedPools) {
    errors.push(...learn.validatePool(p, ctx).map(e => `${p.id}: ${e}`));
    if (!['verified', 'approved'].includes(p.status)) missing.push(`${p.id}: ще не verified`);
    if (subject.pools.filter(x => x.id === p.id).length !== 1) errors.push(`Повторений пул ${p.id}`);
    for (const it of p.items) if (lessons.get(it.lesson)?.boss) errors.push(`${p.id}/${it.id}: boss не тренується`);
    for (const it of p.items) { const sks = lessonSkills(lessons.get(it.lesson));
      if (sks.size && !sks.has(it.sk)) warnings.push(`${p.id}/${it.id}: sk ${it.sk} не тренує урок ${it.lesson} (${[...sks].join(', ')})`); }
  }
  // sk рядка — для кожного рядка (і без пулу, і optional/pending): оголошений і тренується екранами уроку (джерело правди).
  // Розбіжність з екранами: required — прогалина strict, optional/pending — попередження.
  for (const r of rows.filter(() => !filter.diag)) {
    const sks = rowSkills(r), own = lessonSkills(lessons.get(r.lesson));
    if (!sks.length || sks.some(sk => typeof sk !== 'string' || !subject.skills[sk])) { errors.push(`${r.lesson}: sk матриці ${JSON.stringify(r.sk)} не оголошена`); continue; }
    for (const sk of sks) if (own.size && !own.has(sk)) (r.curricularScope === 'required' ? missing : warnings).push(`${r.lesson}: sk матриці ${sk} не тренує урок (екрани: ${[...own].join(', ')})`);
  }
  for (const r of rows.filter(r => r.curricularScope === 'required' && !filter.diag)) {
    const p = pools.get(r.pool), items = p?.items.filter(it => it.lesson === r.lesson) || [];
    if (!p) { missing.push(`${r.pool}: відсутній пул для ${r.lesson}`); continue; }
    if (!homes(p).includes(r.section)) errors.push(`${r.pool}: section/also не містить ${r.section}`);
    if (items.length < r.exercises.min || items.length > r.exercises.max) missing.push(`${r.pool}/${r.lesson}: ${items.length} вправ, потрібно ${r.exercises.min}–${r.exercises.max}`);
    for (const lvl of [1, 2, 3]) if (!items.some(it => it.lvl === lvl)) missing.push(`${r.pool}/${r.lesson}: немає рівня ${lvl}`);
      // мінімум вправ за рівнями exercises.levels = [рівень 1, рівень 2, рівень 3] (рев'ю curate-math-matrix-v8-v9 P3-2)
      else if (Array.isArray(r.exercises.levels) && items.filter(it => it.lvl === lvl).length < (r.exercises.levels[lvl - 1] ?? 0))
        missing.push(`${r.pool}/${r.lesson}: рівня ${lvl} — ${items.filter(it => it.lvl === lvl).length} вправ, потрібно ≥ ${r.exercises.levels[lvl - 1]} (exercises.levels)`);
    for (const format of r.formats) {
      const present = items.some(it => (it.answerKind || (it.type === 'answer' ? 'number' : it.type)) === format || (format === 'exactRoot' && rootList(it, learn)) || (format === 'expression' && exprPair(it, learn)));
      if (!present) missing.push(`${r.pool}/${r.lesson}: немає формату ${format}`);
    }
    for (const sk of rowSkills(r)) if (!items.some(it => it.sk === sk)) missing.push(`${r.pool}/${r.lesson}: немає навички матриці ${sk}`);
  }
  if (!diags.length && !selectedPools.length) errors.push('Нуль доступних об’єктів для перевірки');
  return { version: matrix.version, errors, missing, unsupported, warnings,
    counts: { sections: sections.size, lessons: actual.length, required: rows.filter(r => r.curricularScope === 'required').length,
      requiredPools: new Set(rows.filter(r => r.curricularScope === 'required').map(r => r.pool)).size,
      diagnostics: diags.length, pools: selectedPools.length,
      // з --grade — лише вправи уроків цього класу: пул з also охоплює кілька класів (рев'ю math-ister-migration, P3-2)
      exercises: selectedPools.reduce((n, p) => n + p.items.filter(it => !filter.grade || lessons.get(it.lesson)?.grade === filter.grade).length, 0) },
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
    for (const [label, key] of [['ПОМИЛКА', 'errors'], ['БРАКУЄ', 'missing'], ['НЕ ПІДТРИМАНО', 'unsupported'], ['ПОПЕРЕДЖЕННЯ', 'warnings']]) for (const line of report[key]) console.log(`${label}: ${line}`);
    console.log(`Optional (${report.optional.length}): ${report.optional.join(', ')}\nPending (${report.pending.length}): ${report.pending.join(', ')}`);
    for (const x of report.exceptions) console.log(`Виняток: ${JSON.stringify(x)}`);
  }
  return report.errors.length || (args.includes('--strict') && (report.missing.length || report.unsupported.length)) ? 1 : 0;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { process.exitCode = run(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exitCode = 1; }
}
