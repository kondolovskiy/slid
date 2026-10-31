// Guard the acceptance tool itself: missing content, invalid references, filters and denominators.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import * as qa from './personalization-qa.mjs';
const { audit } = qa;
import { loadContent, readJSON, ROOT } from './lib.mjs';
const { subjects, learn } = loadContent(), subject = subjects.find(s => s.id === 'math');
const matrix = readJSON('docs/math-personalization-coverage.json');
let checks = 0;
function check(fn) { fn(); checks++; }
const all = audit(subject, matrix, learn);
check(() => assert.deepEqual(all.counts, { sections: 50, lessons: 182, required: 169, requiredPools: 48,
  diagnostics: subject.diags.length, pools: subject.pools.length, exercises: subject.pools.reduce((n, p) => n + p.items.length, 0) }));
check(() => assert.equal(all.errors.length, 0));
check(() => assert.equal(all.optional.length, 7));
check(() => assert.equal(all.pending.length, 6));
check(() => assert.equal(all.missing.filter(e => /^Діагностика/.test(e)).length,
  matrix.diagnostics.filter(d => !subject.diags.some(x => x.id === d.id)).length));
check(() => assert(!all.missing.some(e => /^pg11m[26]:/.test(e))));
const clone = () => JSON.parse(JSON.stringify(subject));
const broken = clone(); broken.pools[0].items[0].lesson = 'missing';
check(() => assert(audit(broken, matrix, learn).errors.some(e => e.includes('missing'))));
const src = clone(); src.pools[0].sources[0].url = 'invalid';
check(() => assert(audit(src, matrix, learn).errors.some(e => e.includes('url'))));
const level = clone(); level.pools[0].items = level.pools[0].items.filter(it => it.lvl !== 3);
check(() => assert(audit(level, matrix, learn).missing.some(e => e.includes('немає рівня 3'))));
const empty = clone(); empty.diags = []; empty.pools = [];
check(() => assert(audit(empty, matrix, learn).errors.some(e => e.includes('Нуль'))));
const changed = JSON.parse(JSON.stringify(matrix)); changed.lessons.pop();
check(() => assert(audit(subject, changed, learn).errors.some(e => e.includes('поза матрицею'))));
const lostLinks = clone(); lostLinks.diags.find(d => d.id === 'dg6').items.forEach(it => { it.sk = 'num'; delete it.lesson; });
const linksReport = audit(lostLinks, matrix, learn, { diag: 'dg6' });
check(() => assert(linksReport.missing.some(e => e.includes('dec-ops: itemLessons'))));
check(() => assert(linksReport.missing.some(e => e.includes('g6-eq: itemSkills'))));
const swapped = clone(), dd = swapped.diags.find(d => d.id === 'dg6');
[dd.items[0], dd.items[1]] = [dd.items[1], dd.items[0]];
check(() => assert(audit(swapped, matrix, learn, { diag: 'dg6' }).missing.some(e => e.includes('itemIndices'))));
check(() => assert.deepEqual(audit(subject, matrix, learn, { diag: 'dg6' }).missing, []));
// baseline 4 класу: тест за матрицею проходить структурно, без «не підтримано»; розбіжність прапорця видно
const dg4 = matrix.diagnostics.find(d => d.id === 'dg4'), withDg4 = clone();
withDg4.diags = withDg4.diags.filter(d => d.grade !== 4).concat({ id: 'dg4', grade: 4, title: 'QA', why: 'QA', status: 'verified',
  topics: dg4.topics.map(t => ({ id: t.id, title: t.title, kind: t.kind, lessons: t.lessons, ...(t.for?.length ? { for: t.for } : {}), ...(t.baseline ? { baseline: true } : {}) })),
  items: dg4.topics.flatMap(t => t.itemSkills.map((sk, i) => ({ topic: t.id, type: 'number', sk, title: 'QA', answer: 1, ...(t.itemLessons[i] && t.lessons.length > 1 ? { lesson: t.itemLessons[i] } : {}) }))) });
const base4 = audit(withDg4, matrix, learn, { diag: 'dg4' });
check(() => assert.deepEqual([base4.errors, base4.missing, base4.unsupported], [[], [], []], JSON.stringify(base4)));
const noFlag = JSON.parse(JSON.stringify(withDg4)); delete noFlag.diags.find(d => d.id === 'dg4').topics[0].baseline;
const noFlagReport = audit(noFlag, matrix, learn, { diag: 'dg4' });
check(() => assert(noFlagReport.errors.some(e => e.includes('1–2 id уроків')) && noFlagReport.missing.some(e => e.includes('place: baseline'))));
// exactRoot закриває list із точним коренем, який checkAns перевіряє точно (рішення людини 2026-10-31, tools-pqa-exactroot-in-list)
const rootGap = (r, l) => r.missing.includes(`pg8m5/${l}: немає формату exactRoot`);
check(() => assert(!rootGap(audit(subject, matrix, learn, { pool: 'pg8m5' }), 'g8m5l1')));   // a04 «±√5»
const withKey = answer => { const c = clone(); c.pools.find(p => p.id === 'pg8m5').items.find(it => it.id === 'a04').answer = answer; return audit(c, matrix, learn, { pool: 'pg8m5' }); };
check(() => assert(rootGap(withKey([-3, 3]), 'g8m5l1')));                 // list без кореня
check(() => assert(rootGap(withKey('2,236; -2,236'), 'g8m5l1')));         // десяткове наближення
check(() => assert(rootGap(withKey([2.236, -2.236]), 'g8m5l1')));
check(() => assert(rootGap(withKey('π; 2π'), 'g8m5l1')));                 // π без кореня — не корінь
check(() => assert(!rootGap(withKey('-√5; √5'), 'g8m5l1')));
check(() => assert(!rootGap(withKey('0; √5'), 'g8m5l1')));                // хоч один елемент — корінь
const g8m5 = subject.pools.find(p => p.id === 'pg8m5').items, item = id => g8m5.find(it => it.id === id);
check(() => assert.deepEqual(['a04', 'b05', 'a05', 'a01'].map(id => qa.rootList(item(id), learn)), [true, true, false, false]));
check(() => assert.equal(qa.rootList({ ...item('a04'), answerKind: 'exactRoot' }, learn), false));
// перевірка справді має відкидати наближення: якщо checkAns приймає будь-що, вправа не рахується
check(() => assert.equal(qa.rootList(item('a04'), { ...learn, checkAns: () => 'ok' }), false));
check(() => assert.equal(qa.rootList(item('a04'), { ...learn, listKey: undefined }), false));
// expression закриває coordinates2 з компонентою-виразом, яку checkAns справді перевіряє як вираз (рішення людини 2026-10-31, engine-coordinates2-expression)
const exprGap = r => r.missing.includes('pg9m2/g9m2l3: немає формату expression');
const withPair = (answer, extra = {}) => { const c = clone(); Object.assign(c.pools.find(p => p.id === 'pg9m2').items.find(it => it.id === 'c01'), { answer }, extra); return audit(c, matrix, learn, { pool: 'pg9m2' }); };
check(() => assert(exprGap(audit(subject, matrix, learn, { pool: 'pg9m2' }))));       // вправи №13.5(4) ще немає
check(() => assert(!exprGap(withPair('(p - m; k - n)'))));
check(() => assert(!exprGap(withPair(['p - m', 'k - n']))));
check(() => assert(!exprGap(withPair('(2a; 3)'))));                                   // одна компонента-вираз
check(() => assert(!exprGap(withPair('(2a; b^2)', { form: 'simplified' }))));
check(() => assert(exprGap(withPair('(-3; 1)'))));                                    // числова пара
check(() => assert(exprGap(withPair([-3, 1]))));
check(() => assert(exprGap(withPair('(√2; π)'))));                                    // точні числа — не вирази
check(() => assert(exprGap(withPair('(a + a; b)', { form: 'simplified' }))));         // неканонічний ключ
check(() => assert(exprGap(withPair('(p - m; k - n; 0)'))));                         // не пара
check(() => assert(exprGap(withPair('(p - m = 0; k)'))));
const pairItem = { ...subject.pools.find(p => p.id === 'pg9m2').items.find(it => it.id === 'c01'), answer: '(p - m; k - n)' };
check(() => assert.equal(qa.exprPair(pairItem, learn), true));
check(() => assert.equal(qa.exprPair({ ...pairItem, answerKind: 'expression' }, learn), false));
check(() => assert.equal(subject.pools.flatMap(p => p.items).filter(it => qa.exprPair(it, learn)).length, 0));
// перевірка справді має розбирати вирази: «приймає все», лише рядок ключа, наближення чи немає pairKey — не рахується
const keyOnly = { ...learn, checkAns: (it, v) => String(v).replace(/\s/g, '') === '(p-m;k-n)' ? 'ok' : 'bad' };
check(() => assert.equal(qa.exprPair(pairItem, { ...learn, checkAns: () => 'ok' }), false));
check(() => assert.equal(qa.exprPair(pairItem, keyOnly), false));
check(() => assert.equal(qa.exprPair(pairItem, { ...learn, checkAns: (it, v) => /0,0000001/.test(v) ? 'ok' : learn.checkAns(it, v) }), false));
check(() => assert.equal(qa.exprPair(pairItem, { ...learn, pairKey: undefined }), false));
for (const args of [['--pool','typo'], ['--diag','typo'], ['--grade','12'], ['--pool','pg6m1','--grade','5'], ['--pool','pg6m1','--grade','7'], ['--wat'], ['--diag'], ['--diag','dg6','--pool','pg6m1']]) {
  check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs', ...args], { cwd: ROOT }).status, 1));
}
check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs','--diag','dg6'], { cwd: ROOT }).status, 0));
check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs','--strict'], { cwd: ROOT }).status,
  all.errors.length || all.missing.length || all.unsupported.length ? 1 : 0));
console.log(`Personalization QA: ${checks} checks green`);
