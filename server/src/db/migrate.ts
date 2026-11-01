import { Migration, Migrator } from 'kysely';
import { createDb, Db, requireEnv } from './database';
import { identityMigrations } from '../modules/identity';
import { progressMigrations } from '../modules/progress';

/** Кожен модуль — своя схема і своя таблиця міграцій: модуль можна винести разом зі схемою. */
const MODULES: Record<string, Record<string, Migration>> = {
  identity: identityMigrations,
  progress: progressMigrations,
};

export async function migrate(db: Db): Promise<void> {
  for (const [schema, migrations] of Object.entries(MODULES)) {
    const migrator = new Migrator({ db, migrationTableSchema: schema, provider: { getMigrations: async () => migrations } });
    const { error, results } = await migrator.migrateToLatest();
    results?.forEach((r) => console.log(`${schema}/${r.migrationName}: ${r.status}`));
    if (error) throw error;
  }
}

if (require.main === module) {
  const db = createDb(requireEnv('DATABASE_URL'));
  migrate(db).finally(() => db.destroy()).catch((e) => { console.error(e); process.exit(1); });
}
