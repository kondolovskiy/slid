import { readdirSync, readFileSync, statSync } from 'fs';
import { dirname, join, relative, resolve, sep } from 'path';

// Межі модулів: модуль (і решта коду) бачить модуль лише через його index.ts (публічний API: модуль + порти + міграції),
// а SQL пише лише у власну схему Postgres. Так модуль можна винести в сервіс разом зі схемою, замінивши адаптер порту.
const SRC = join(__dirname, '..', 'src');
const MODULES = join(SRC, 'modules');
const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? files(join(dir, f)) : [join(dir, f)]));
const moduleOf = (p: string) => relative(MODULES, p).split(sep); // ['..', …] — поза modules/

/** Усі відносні специфікатори: import … from, import '…', export … from, import(…), require(…); будь-які лапки. */
export const relativeImports = (code: string) =>
  [...code.matchAll(/(?:\bfrom|\bimport|\brequire)\s*\(?\s*(['"`])(\.[^'"`]*)\1/g)].map((m) => m[2]);

/** Аргументи withSchema(…) як написано в коді: дозволено лише рядковий літерал (змінну тест перевірити не може). */
export const withSchemaArgs = (code: string) => [...code.matchAll(/withSchema\(\s*([^)]*?)\s*\)/g)].map((m) => m[1]);
const literal = (arg: string) => /^(['"`])([a-z_]\w*)\1$/.exec(arg)?.[2];

/**
 * Схеми, названі в рядках коду у формі «схема.обʼєкт» (selectFrom('identity.learners'), references('x.y.id'),
 * сирий sql`… from identity.learners …` тощо). Шукаємо лише імена схем модулів, щоб не плутати з 'таблиця.колонка'.
 */
export const schemaRefs = (code: string, schemas: string[]) => {
  const strings = [...code.matchAll(/(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g)].map((m) => m[2]);
  const re = new RegExp(`(?<![\\w.])(${schemas.join('|')})\\.[a-z_]\\w*`, 'g');
  return strings.flatMap((s) => [...s.matchAll(re)].map((m) => m[1]));
};

describe('межі модулів', () => {
  const sources = files(SRC).filter((f) => f.endsWith('.ts'));

  it('знаходить модулі й файли (не порожній прогін)', () => {
    expect(readdirSync(MODULES).length).toBeGreaterThanOrEqual(2);
    expect(sources.length).toBeGreaterThanOrEqual(10);
  });

  it('розпізнає всі форми імпорту', () => {
    const code = `import a from "../x/a"; import '../x/b'; export * from '../x/c'; const d = require('../x/d'); await import(\`../x/e\`);`;
    expect(relativeImports(code)).toEqual(['../x/a', '../x/b', '../x/c', '../x/d', '../x/e']);
  });

  it.each(sources.map((f) => [relative(SRC, f), f]))('%s імпортує чужі модулі лише через index', (_, file) => {
    const [own] = moduleOf(file);
    for (const spec of relativeImports(readFileSync(file, 'utf8'))) {
      const [mod, ...rest] = moduleOf(resolve(dirname(file), spec));
      if (mod === '..' || mod === own) continue;
      expect(`${spec} → ${rest.join('/') || 'index'}`).toMatch(/→ index$/);
    }
  });

  const modules = readdirSync(MODULES);

  it('розпізнає звернення до схем і форми withSchema', () => {
    const code = `db.selectFrom('identity.learners'); t.insertInto("progress.docs"); x.innerJoin(\`identity.tokens as t\`, 't.id', 'docs.id');
      c.references('identity.learners.id'); sql\`select * from identity.learners\`; db.withSchema(SCHEMA); db.withSchema('identity');
      selectFrom('docs.id'); const identity = { learners: 1 }; identity.learners; 'myidentity.x'`;
    expect(schemaRefs(code, modules)).toEqual(['identity', 'progress', 'identity', 'identity', 'identity']);
    expect(withSchemaArgs(code).map(literal)).toEqual([undefined, 'identity']);
  });

  it.each(sources.filter((f) => moduleOf(f)[0] !== '..').map((f) => [relative(SRC, f), f]))(
    '%s пише SQL лише у схему свого модуля', (_, file) => {
      const [own] = moduleOf(file);
      const code = readFileSync(file, 'utf8');
      for (const arg of withSchemaArgs(code)) expect(`withSchema(${arg}) → ${literal(arg)}`).toBe(`withSchema(${arg}) → ${own}`);
      for (const schema of schemaRefs(code, modules)) expect(`${schema}.…`).toBe(`${own}.…`);
    });
});
