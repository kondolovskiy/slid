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

  it.each(sources.filter((f) => moduleOf(f)[0] !== '..').map((f) => [relative(SRC, f), f]))(
    '%s пише SQL лише у схему свого модуля', (_, file) => {
      const [own] = moduleOf(file);
      for (const [, schema] of readFileSync(file, 'utf8').matchAll(/withSchema\(\s*['"`]([^'"`]+)/g)) expect(schema).toBe(own);
    });
});
