// Guard the acceptance tool itself: missing content, invalid references, filters and denominators.
// Лічильники, optional/pending, діагностики й формати перевіряються на синтетичній фікстурі (предмет + матриця нижче), а не на
// живому змісті: додавання пулу чи вправи в content/ не має ламати цей тест і CI (pitfalls 2026-10-31, рев'ю followup P3-7).
// Живий зміст — лише там, де саме він предмет перевірки: 0 помилок, узгодженість --strict і CLI.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import * as qa from './personalization-qa.mjs';
const { audit } = qa;
import { loadContent, readJSON, ROOT } from './lib.mjs';
const { subjects, learn } = loadContent(), subject = subjects.find(s => s.id === 'math');
const matrix = readJSON('docs/math-personalization-coverage.json');
let checks = 0;
function check(fn) { fn(); checks++; }

// ---------- живий зміст: структурних помилок немає, strict узгоджений із звітом ----------
const all = audit(subject, matrix, learn);
check(() => assert.equal(all.errors.length, 0, JSON.stringify(all.errors.slice(0, 5))));
check(() => assert.equal(all.missing.filter(e => /^Діагностика/.test(e)).length,
  matrix.diagnostics.filter(d => !subject.diags.some(x => x.id === d.id)).length));
// «Якорі» живого змісту без лічильників (рев'ю engine-math-answer-kinds-new P3-7, engine-answer-kinds-p3): додавання пулу чи вправи
// їх не ламає, а втрату перевірки — ловить. Пули 11 кл. є й перевіряються без помилок; розділи 11 кл. без пулу не дають прогалин.
const pools11 = subject.pools.filter(p => /^pg11m/.test(p.id));
check(() => assert(pools11.length > 0, 'немає жодного пулу pg11m'));
for (const p of pools11) check(() => assert.deepEqual(audit(subject, matrix, learn, { pool: p.id }).errors, [], p.id));
check(() => assert(!all.missing.some(e => /^pg11m[26]:/.test(e))));
// dg6 перевіряє сам зміст, а не лише узгодженість із собою: живий dg6 без прогалин, а зіпсовані зв'язки (sk, lesson) і порядок
// завдань у копії живого dg6 — прогалини itemSkills / itemIndices.
const cloneMath = () => JSON.parse(JSON.stringify(subject));
// статус (draft до повторної перевірки, D-043 verify-math-ister-diag) — стан процесу, не зв'язок змісту; якір — лише зв'язки
check(() => assert.deepEqual(audit(subject, matrix, learn, { diag: 'dg6' }).missing.filter(e => e !== 'dg6: ще не verified'), []));
{ const lost = cloneMath(); lost.diags.find(d => d.id === 'dg6').items.forEach(it => { it.sk = 'num'; delete it.lesson; });
  check(() => assert(audit(lost, matrix, learn, { diag: 'dg6' }).missing.some(e => e.startsWith('dg6/') && e.includes('itemSkills')))); }
{ const sw = cloneMath(), dd = sw.diags.find(d => d.id === 'dg6'); [dd.items[0], dd.items[1]] = [dd.items[1], dd.items[0]];
  check(() => assert(audit(sw, matrix, learn, { diag: 'dg6' }).missing.some(e => e.startsWith('dg6/') && e.includes('itemIndices')))); }

// ---------- синтетична фікстура: 4 розділи з уроками (+ один лише з планом), 10 тематичних уроків, 3 пули, 2 тести ----------
// урок фікстури тренує свою навичку екраном (sk матриці має тренуватися екранами уроку — engine-math-skill-sync)
const L = (id, sk, extra = {}) => ({ id, title: id, icon: 'book', screens: [{ type: 'number', title: 'QA', answer: 1, sk }], ...extra });
const SRC = [{ id: 'fxb', title: 'Фікстура QA', url: 'https://example.org/fx' }];
const ex = (lesson, lvl, n, extra = {}) => ({ id: `${lesson}-${lvl}-${n}`, lesson, lvl, sk: 'num', src: 'fxb №' + n, type: 'answer', title: 'QA', steps: ['QA'], answer: n, ...extra });
const levels = (lesson, extra = {}) => [1, 2, 3].map(lvl => ex(lesson, lvl, lvl, extra));
function fixture() {
  const subj = { id: 'math', skills: { num: { name: 'Числа' }, alg: { name: 'Алгебра' }, coord: { name: 'Координати' }, meas: { name: 'Величини' } },
    sections: [
      { id: 'fx4a', grade: 4, lessons: [L('fx4a1', 'num'), L('fx4a2', 'num'), L('fx4ab', 'num', { boss: true })] },
      { id: 'fx5a', grade: 5, lessons: [L('fx5a1', 'num'), L('fx5a2', 'alg'), L('fx5a3', 'num')] },
      { id: 'fx6a', grade: 6, lessons: [L('fx6a1', 'coord'), L('fx6a2', 'coord'), L('fx6a3', 'alg'), L('fx6a4', 'alg')] },
      { id: 'fx6b', grade: 6, lessons: [L('fx6b1', 'meas')] },
      { id: 'fx6plan', grade: 6, plan: ['тема'] }],
    pools: [
      { id: 'pfx4a', section: 'fx4a', status: 'verified', sources: SRC, items: [...levels('fx4a1'), ...[1, 2, 3].map(lvl => ex('fx4a1', lvl, lvl + 10))] },
      { id: 'pfx5a', section: 'fx5a', status: 'verified', sources: SRC, items: [...levels('fx5a1'), ex('fx5a1', 1, 9, { answerKind: 'list', answer: '1; 2' }),
        ...levels('fx5a2', { sk: 'alg' }), { ...ex('fx5a2', 2, 8, { sk: 'alg' }), id: 'root', answerKind: 'list', answer: '±√5' }] },
      { id: 'pfx6a', section: 'fx6a', status: 'verified', sources: SRC, items: [...levels('fx6a1', { sk: 'coord' }), { ...ex('fx6a1', 2, 4, { sk: 'coord' }), id: 'expr', answerKind: 'expression', answer: '2a + b' }] }],
    diags: [] };
  const row = (lesson, section, grade, curricularScope, extra = {}) => ({ lesson, section, grade, curricularScope, title: lesson, ...extra });
  const req = (lesson, section, grade, pool, formats, sk, min = 3) => row(lesson, section, grade, 'required', { pool, formats, sk, exercises: { min, max: 8 } });
  const mtx = { version: 'fx.v1', diagnostics: [
      { id: 'dgfx6', grade: 6, topics: [
        { id: 'p1', title: 'P1', kind: 'pre', lessons: ['fx5a1', 'fx5a2'], for: ['fx6a'], itemLessons: ['fx5a1', 'fx5a2'], itemSkills: ['num', 'alg'], itemIndices: [0, 2] },
        { id: 'p2', title: 'P2', kind: 'pre', lessons: ['fx5a1'], for: ['fx6a'], itemLessons: ['fx5a1', 'fx5a1'], itemSkills: ['num', 'num'], itemIndices: [1, 3] },
        { id: 'c1', title: 'C1', kind: 'cur', lessons: ['fx6a1'], itemLessons: ['fx6a1'], itemSkills: ['coord'], itemIndices: [4] }] },
      { id: 'dgfx4', grade: 4, topics: [
        { id: 'place', title: 'Розряди', kind: 'pre', lessons: [], for: ['fx4a'], baseline: true, itemLessons: [null, null], itemSkills: ['num', 'num'] },
        { id: 'c4', title: 'C4', kind: 'cur', lessons: ['fx4a1'], itemLessons: ['fx4a1'], itemSkills: ['num'] }] }],
    lessons: [
      req('fx4a1', 'fx4a', 4, 'pfx4a', ['number'], 'num', 6), row('fx4a2', 'fx4a', 4, 'optional', { pool: 'pfx4a', sk: 'num' }),
      req('fx5a1', 'fx5a', 5, 'pfx5a', ['number', 'list'], 'num'), req('fx5a2', 'fx5a', 5, 'pfx5a', ['exactRoot'], 'alg', 1), row('fx5a3', 'fx5a', 5, 'pending', { sk: 'num' }),
      req('fx6a1', 'fx6a', 6, 'pfx6a', ['expression'], 'coord', 1), row('fx6a2', 'fx6a', 6, 'optional', { sk: 'coord' }), row('fx6a3', 'fx6a', 6, 'optional', { sk: 'alg' }), row('fx6a4', 'fx6a', 6, 'pending', { sk: ['alg'] }),
      row('fx6b1', 'fx6b', 6, 'pending', { sk: 'meas' })] };
  // тести рівня — за матрицею фікстури: пункт кожної проби з тим уроком і навичкою, які записано в матриці
  const diagOf = d => ({ id: d.id, grade: d.grade, title: 'QA', why: 'QA', status: 'verified',
    topics: d.topics.map(t => ({ id: t.id, title: t.title, kind: t.kind, lessons: t.lessons, ...(t.for?.length ? { for: t.for } : {}), ...(t.baseline ? { baseline: true } : {}) })),
    items: d.topics.flatMap(t => t.itemSkills.map((sk, i) => ({ at: t.itemIndices?.[i] ?? 0, topic: t.id, type: 'number', sk, title: 'QA', answer: 1, ...(t.itemLessons[i] && t.lessons.length > 1 ? { lesson: t.itemLessons[i] } : {}) })))
      .sort((a, b) => a.at - b.at).map(({ at, ...it }) => it) });
  subj.diags = mtx.diagnostics.map(diagOf);
  return { subj, mtx };
}
const { subj: FX, mtx: FM } = fixture(), clone = () => JSON.parse(JSON.stringify(FX));
const fx = audit(FX, FM, learn);
check(() => assert.deepEqual(fx.errors, [], JSON.stringify(fx.errors)));
check(() => assert.deepEqual(fx.missing, [], JSON.stringify(fx.missing)));
check(() => assert.deepEqual(fx.warnings, [], JSON.stringify(fx.warnings)));
check(() => assert.deepEqual(fx.counts, { sections: 4, lessons: 10, required: 4, requiredPools: 3, diagnostics: 2, pools: 3, exercises: 6 + 4 + 4 + 4 }));
check(() => assert.deepEqual(fx.optional, ['fx4a2', 'fx6a2', 'fx6a3']));
check(() => assert.deepEqual(fx.pending, ['fx5a3', 'fx6a4', 'fx6b1']));
check(() => assert.deepEqual(fx.exceptions.map(x => x.lesson), ['fx5a1', 'fx5a2', 'fx6a1']));                  // exercises.min < 6
check(() => assert(!fx.missing.some(e => /fx4a2|fx6a2|fx6a3|fx5a3|fx6a4|fx6b1/.test(e))));            // optional/pending не вимагають пулу
check(() => assert.deepEqual(audit(FX, FM, learn, { grade: 5 }).counts, { sections: 4, lessons: 10, required: 2, requiredPools: 1, diagnostics: 0, pools: 1, exercises: 8 }));
// пул для pending-уроку чи нова вправа не змінюють required-лічильники (саме це раніше ламало CI)
const morePools = clone(); morePools.pools[1].items.push(ex('fx5a3', 1, 7));
check(() => assert.deepEqual([audit(morePools, FM, learn).errors, audit(morePools, FM, learn).counts.required], [[], 4]));
// also (docs/design/math-ister.md §4): урок fx5a3 переїхав у fx6b, вправи лишилися в pfx5a — пул охоплює обидва розділи
const moved = clone(); const mvL = moved.sections[1].lessons.splice(2, 1)[0]; moved.sections[3].lessons.push(mvL); moved.pools[1].also = ['fx6b'];
moved.pools[1].items.push(...levels('fx5a3'));
const mvM = JSON.parse(JSON.stringify(FM)); Object.assign(mvM.lessons.find(r => r.lesson === 'fx5a3'), { section: 'fx6b', grade: 6, curricularScope: 'required', pool: 'pfx5a', formats: ['number'], exercises: { min: 3, max: 8 } });
const mvA = audit(moved, mvM, learn);
check(() => assert.deepEqual([mvA.errors, mvA.missing], [[], []], JSON.stringify([mvA.errors, mvA.missing])));
check(() => assert.deepEqual(audit(moved, mvM, learn, { grade: 6 }).counts.pools, 2));          // pfx5a потрапляє і в 6 кл. через also
const noAlso = clone(); noAlso.sections[3].lessons.push(noAlso.sections[1].lessons.splice(2, 1)[0]); noAlso.pools[1].items.push(...levels('fx5a3'));
check(() => assert(audit(noAlso, mvM, learn).errors.some(e => e.includes('section/also не містить fx6b')), 'без also — помилка'));
// посилання, джерела, рівні, порожній набір, інвентар
const broken = clone(); broken.pools[0].items[0].lesson = 'missing';
check(() => assert(audit(broken, FM, learn).errors.some(e => e.includes('missing'))));
const src = clone(); src.pools[0].sources[0].url = 'invalid';
check(() => assert(audit(src, FM, learn).errors.some(e => e.includes('url'))));
const level = clone(); level.pools[0].items = level.pools[0].items.filter(it => it.lvl !== 3);
check(() => assert(audit(level, FM, learn).missing.some(e => e.includes('немає рівня 3'))));
const few = clone(); few.pools[0].items = few.pools[0].items.slice(0, 2);
check(() => assert(audit(few, FM, learn).missing.includes('pfx4a/fx4a1: 2 вправ, потрібно 6–8')));
const fmt = clone(); fmt.pools[1].items = fmt.pools[1].items.filter(it => it.answerKind !== 'list' || it.lesson !== 'fx5a1');
check(() => assert(audit(fmt, FM, learn).missing.includes('pfx5a/fx5a1: немає формату list')));
const skill = clone(); skill.pools[2].items.forEach(it => { it.sk = 'num'; });
check(() => assert(audit(skill, FM, learn).missing.includes('pfx6a/fx6a1: немає навички матриці coord')));
const draft = clone(); draft.pools[0].status = 'draft';
check(() => assert(audit(draft, FM, learn).missing.includes('pfx4a: ще не verified')));
const noPool = clone(); noPool.pools = noPool.pools.filter(p => p.id !== 'pfx4a');
check(() => assert(audit(noPool, FM, learn).missing.includes('pfx4a: відсутній пул для fx4a1')));
const empty = clone(); empty.diags = []; empty.pools = [];
check(() => assert(audit(empty, FM, learn).errors.some(e => e.includes('Нуль'))));
const changed = JSON.parse(JSON.stringify(FM)); changed.lessons.pop();
check(() => assert(audit(FX, changed, learn).errors.some(e => e.includes('поза матрицею'))));
check(() => assert(audit(FX, FM, learn, { pool: 'nope' }).errors.some(e => e.includes('Фільтр не вибрав'))));
// діагностики: прив'язки проб до уроків, навичок і порядку
const lostLinks = clone(); lostLinks.diags.find(d => d.id === 'dgfx6').items.forEach(it => { it.sk = 'num'; delete it.lesson; });
const linksReport = audit(lostLinks, FM, learn, { diag: 'dgfx6' });
check(() => assert(linksReport.missing.some(e => e.includes('p1: itemLessons'))));
check(() => assert(linksReport.missing.some(e => e.includes('p1: itemSkills'))));
const swapped = clone(), dd = swapped.diags.find(d => d.id === 'dgfx6');
[dd.items[0], dd.items[1]] = [dd.items[1], dd.items[0]];
check(() => assert(audit(swapped, FM, learn, { diag: 'dgfx6' }).missing.some(e => e.includes('itemIndices'))));
check(() => assert.deepEqual(audit(FX, FM, learn, { diag: 'dgfx6' }).missing, []));
const noDiag = clone(); noDiag.diags = noDiag.diags.filter(d => d.id !== 'dgfx6');
check(() => assert(audit(noDiag, FM, learn).missing.includes('Діагностика dgfx6 (content/math/diag-g6.js)')));
// baseline 4 класу: тест за матрицею проходить структурно, без «не підтримано»; розбіжність прапорця видно
const base4 = audit(FX, FM, learn, { diag: 'dgfx4' });
check(() => assert.deepEqual([base4.errors, base4.missing, base4.unsupported], [[], [], []], JSON.stringify(base4)));
const noFlag = clone(); delete noFlag.diags.find(d => d.id === 'dgfx4').topics[0].baseline;
const noFlagReport = audit(noFlag, FM, learn, { diag: 'dgfx4' });
check(() => assert(noFlagReport.errors.some(e => e.includes('1–2 id уроків')) && noFlagReport.missing.some(e => e.includes('place: baseline'))));
// exactRoot закриває list із точним коренем, який checkAns перевіряє точно (рішення людини 2026-10-31, tools-pqa-exactroot-in-list)
const rootGap = r => r.missing.includes('pfx5a/fx5a2: немає формату exactRoot');
const withKey = answer => { const c = clone(); c.pools[1].items.find(it => it.id === 'root').answer = answer; return audit(c, FM, learn, { pool: 'pfx5a' }); };
check(() => assert(!rootGap(audit(FX, FM, learn, { pool: 'pfx5a' }))));   // «±√5»
check(() => assert(rootGap(withKey([-3, 3]))));                 // list без кореня
check(() => assert(rootGap(withKey('2,236; -2,236'))));         // десяткове наближення
check(() => assert(rootGap(withKey([2.236, -2.236]))));
check(() => assert(rootGap(withKey('π; 2π'))));                 // π без кореня — не корінь
check(() => assert(!rootGap(withKey('-√5; √5'))));
check(() => assert(!rootGap(withKey('0; √5'))));                // хоч один елемент — корінь
const rootItem = answer => ({ ...ex('fx5a2', 2, 8), answerKind: 'list', answer });
check(() => assert.deepEqual(['±√5', '2 ± √3', '1 + √2', '1/2; 3'].map(a => qa.rootList({ ...rootItem(a), answerKind: a === '1 + √2' ? 'exactRoot' : 'list' }, learn)), [true, true, false, false]));
// перевірка справді має відкидати наближення: якщо checkAns приймає будь-що, вправа не рахується
check(() => assert.equal(qa.rootList(rootItem('±√5'), { ...learn, checkAns: () => 'ok' }), false));
check(() => assert.equal(qa.rootList(rootItem('±√5'), { ...learn, listKey: undefined }), false));
// рев'ю tools-pqa-exactroot-in-list P3-1: неканонічний ключ із коренем не закриває exactRoot (і validatePool його відкидає)
check(() => assert(rootGap(withKey('√8; -√8'))));
check(() => assert.equal(qa.rootList(rootItem('√8; -√8'), learn), false));
// P3-2: раціональний елемент у пробі лишається точним, тож проба перевіряє саме наближення кореня. Заглушка «приймає все, що
// розбирається» (числа до 16 цифр, як lex) раніше давала bad через 0.3333333333333333 і хибно закривала exactRoot.
const parsesAll = { ...learn, checkAns: (it, v) => /\d{16}/.test(String(v)) ? 'bad' : 'ok' };
check(() => assert.equal(qa.rootList(rootItem('1/3; √5'), parsesAll), false));
check(() => assert.equal(qa.rootList(rootItem('1/3; √5'), learn), true));
check(() => assert.equal(JSON.stringify(learn.listKey({ answerKind: 'list', answer: '1/3; √5; -2' }).map(e => e.rat)), '["1/3",null,"-2"]'));
// expression закриває coordinates2 з компонентою-виразом, яку checkAns справді перевіряє як вираз (рішення людини 2026-10-31, engine-coordinates2-expression)
const exprGap = r => r.missing.includes('pfx6a/fx6a1: немає формату expression');
const fxItem = (answer, extra = {}) => ({ ...ex('fx6a1', 2, 5, { sk: 'coord' }), id: 'fx', answerKind: 'coordinates2', answer, ...extra });
// без вправи-виразу expr: формат закриває лише контрольована вправа fx
const pairFixture = items => { const c = clone(); c.pools[2].items = c.pools[2].items.filter(it => it.id !== 'expr').concat(items); return c; };
const withPair = (answer, extra = {}) => audit(pairFixture([fxItem(answer, extra)]), FM, learn, { pool: 'pfx6a' });
check(() => assert(exprGap(audit(pairFixture([]), FM, learn, { pool: 'pfx6a' }))));   // без жодної вправи-виразу — прогалина
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
const pairItem = fxItem('(p - m; k - n)');
check(() => assert.equal(qa.exprPair(pairItem, learn), true));
check(() => assert.equal(qa.exprPair({ ...pairItem, answerKind: 'expression' }, learn), false));
// перевірка справді має розбирати вирази: «приймає все», лише рядок ключа, наближення чи немає pairKey — не рахується
const keyOnly = { ...learn, checkAns: (it, v) => String(v).replace(/\s/g, '') === '(p-m;k-n)' ? 'ok' : 'bad' };
check(() => assert.equal(qa.exprPair(pairItem, { ...learn, checkAns: () => 'ok' }), false));
check(() => assert.equal(qa.exprPair(pairItem, keyOnly), false));
check(() => assert.equal(qa.exprPair(pairItem, { ...learn, checkAns: (it, v) => /0,0000001/.test(v) ? 'ok' : learn.checkAns(it, v) }), false));
check(() => assert.equal(qa.exprPair(pairItem, { ...learn, pairKey: undefined }), false));
// рев'ю P3-3: «усе без десяткових — ok» відкидає лише проба «(…) + змінна»
check(() => assert.equal(qa.exprPair(pairItem, { ...learn, checkAns: (it, v) => /\d,\d/.test(v) ? 'bad' : 'ok' }), false));
// sk матриці — рядок або масив; кожна навичка рядка має бути в пулі уроку й тренуватися екранами уроку; sk пулу поза
// навичками уроку — попередження (engine-math-skill-sync; перенесено з живих g8m6l1/pg8m6/dg8/g10m3l3 на фікстуру).
const skFixture = (extra = []) => { const c = clone(); c.pools[2].items.push(...extra); return c; };
const skMatrix = (sk, edit = () => {}) => { const m = JSON.parse(JSON.stringify(FM)); const r = m.lessons.find(r => r.lesson === 'fx6a1'); r.sk = sk; edit(r, m); return m; };
const skAudit = (extra, sk = 'coord') => audit(skFixture(extra), skMatrix(sk), learn, { pool: 'pfx6a' });
const skGap = (r, sk) => r.missing.includes(`pfx6a/fx6a1: немає навички матриці ${sk}`);
const sideMeas = [{ ...ex('fx6a1', 2, 7, { sk: 'meas' }), id: 'q7' }];
check(() => assert(!skGap(skAudit([]), 'coord')));
check(() => assert(skGap(skAudit([], 'meas'), 'meas')));
check(() => assert(!['coord', 'meas'].some(sk => skGap(skAudit(sideMeas, ['coord', 'meas']), sk))));   // масив: обидві навички є
check(() => assert(skGap(skAudit([], ['coord', 'meas']), 'meas') && !skGap(skAudit([], ['coord', 'meas']), 'coord')));
for (const sk of [[], 'nope', ['coord', 'nope'], null]) check(() => assert(skAudit([], sk).errors.some(e => e.startsWith('fx6a1: sk матриці'))));
check(() => assert.deepEqual(skAudit([]).warnings, []));
check(() => assert.deepEqual(skAudit(sideMeas).warnings, ['pfx6a/q7: sk meas не тренує урок fx6a1 (coord)']));
check(() => assert.deepEqual([skAudit(sideMeas).errors, skAudit(sideMeas).missing.filter(e => e.includes('fx6a1'))], [[], []]));   // попередження не блокує
const notTrained = (r, sk) => r.missing.includes(`fx6a1: sk матриці ${sk} не тренує урок (екрани: coord)`);
check(() => assert(notTrained(skAudit(sideMeas, 'meas'), 'meas')));
check(() => assert(notTrained(skAudit(sideMeas, ['coord', 'meas']), 'meas') && !notTrained(skAudit(sideMeas, ['coord', 'meas']), 'coord')));
check(() => assert(!notTrained(skAudit([]), 'coord')));
const scoped = (scope, sk) => audit(skFixture(), skMatrix(sk, r => { r.curricularScope = scope; }), learn, { pool: 'pfx6a' });
check(() => assert(scoped('optional', 'meas').warnings.includes('fx6a1: sk матриці meas не тренує урок (екрани: coord)') && !notTrained(scoped('optional', 'meas'), 'meas')));
check(() => assert(scoped('pending', []).errors.some(e => e.startsWith('fx6a1: sk матриці'))));
// sk рядка перевіряється і без пулу (required fx6a3 без пулу), і для optional/pending
const skNoPool = sk => { const m = JSON.parse(JSON.stringify(FM)); Object.assign(m.lessons.find(r => r.lesson === 'fx6a3'), { sk, curricularScope: 'required', pool: 'pnone', formats: [], exercises: { min: 1, max: 8 } }); return audit(FX, m, learn, { grade: 6 }); };
check(() => assert(skNoPool('nope').errors.some(e => e.startsWith('fx6a3: sk матриці'))));
check(() => assert(!skNoPool('alg').errors.some(e => e.startsWith('fx6a3:')) && !skNoPool('alg').missing.some(e => e.startsWith('fx6a3: sk'))));
check(() => assert(skNoPool('meas').missing.some(e => e.startsWith('fx6a3: sk матриці meas не тренує урок'))));
check(() => assert(audit(FX, skMatrix('coord', (r, m) => { m.lessons.find(x => x.lesson === 'fx6b1').sk = 'coord'; }), learn).warnings.includes('fx6b1: sk матриці coord не тренує урок (екрани: meas)')));
const skDiag = sk => { const c = clone(); c.diags.find(d => d.id === 'dgfx6').items.filter(it => it.topic === 'c1').forEach(it => { it.sk = sk; }); return audit(c, FM, learn, { diag: 'dgfx6' }); };
check(() => assert(skDiag('meas').warnings.some(w => w.startsWith('dgfx6/c1 №') && w.includes('sk meas не тренує урок fx6a1 (coord)'))));
check(() => assert(skDiag('meas').missing.includes('dgfx6/c1: itemSkills не збігається з матрицею')));
check(() => assert(!skDiag('coord').warnings.some(w => w.startsWith('dgfx6/c1'))));

// ---------- CLI на живому змісті: аргументи й коди виходу ----------
for (const args of [['--pool','typo'], ['--diag','typo'], ['--grade','12'], ['--pool','pg6m1','--grade','6'], ['--pool','pg6m1','--grade','7'], ['--wat'], ['--diag'], ['--diag','dg6','--pool','pg6m1']]) {
  check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs', ...args], { cwd: ROOT }).status, 1));
}
check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs','--diag','dg6'], { cwd: ROOT }).status, audit(subject, matrix, learn, { diag: 'dg6' }).errors.length ? 1 : 0));
check(() => assert.equal(spawnSync(process.execPath, ['tools/personalization-qa.mjs','--strict'], { cwd: ROOT }).status,
  all.errors.length || all.missing.length || all.unsupported.length ? 1 : 0));
console.log(`Personalization QA: ${checks} checks green`);
