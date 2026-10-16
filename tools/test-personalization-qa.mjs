// Guard the acceptance tool itself: missing content, invalid references, filters and denominators.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { audit } from './personalization-qa.mjs';
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
for (const args of [['--pool','typo'], ['--diag','typo'], ['--grade','12'], ['--pool','pg6m1','--grade','5'], ['--pool','pg6m1','--grade','7'], ['--wat'], ['--diag'], ['--diag','dg6','--pool','pg6m1']]) {
  check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs', ...args], { cwd: ROOT }).status, 1));
}
check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs','--diag','dg6'], { cwd: ROOT }).status, 0));
check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs','--strict'], { cwd: ROOT }).status,
  all.errors.length || all.missing.length || all.unsupported.length ? 1 : 0));
console.log(`Personalization QA: ${checks} checks green`);
