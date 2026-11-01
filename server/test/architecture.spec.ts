import { readdirSync, readFileSync, statSync } from 'fs';
import { dirname, join, relative, resolve, sep } from 'path';

// Межі модулів: модуль бачить інший модуль лише через його index.ts (публічний API: модуль + порти).
// Так модуль можна винести в окремий сервіс, замінивши тільки адаптер порту.
const MODULES = join(__dirname, '..', 'src', 'modules');
const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? files(join(dir, f)) : [join(dir, f)]));

describe('межі модулів', () => {
  const sources = files(MODULES).filter((f) => f.endsWith('.ts'));

  it('знаходить модулі (не порожній прогін)', () => {
    expect(readdirSync(MODULES).length).toBeGreaterThanOrEqual(2);
  });

  it.each(sources.map((f) => [relative(MODULES, f), f]))('%s імпортує інші модулі лише через index', (_, file) => {
    const moduleOf = (p: string) => relative(MODULES, p).split(sep);
    const [own] = moduleOf(file);
    const imports = [...readFileSync(file, 'utf8').matchAll(/from\s+'(\.[^']+)'/g)].map((m) => resolve(dirname(file), m[1]));
    for (const target of imports) {
      const [mod, ...rest] = moduleOf(target);
      if (mod === '..' || mod === own) continue; // поза modules/ (db, shared) або свій модуль
      expect(rest.join('/')).toMatch(/^(index)?$/);
    }
  });
});
