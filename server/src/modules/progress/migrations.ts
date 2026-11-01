import { Kysely, sql } from 'kysely';
import { Migration } from 'kysely';

export const progressMigrations: Record<string, Migration> = {
  '001-docs': {
    async up(db: Kysely<unknown>) {
      // learner_id без FK на identity: схеми модулів незалежні.
      await db.schema.withSchema('progress').createTable('docs')
        .addColumn('learner_id', 'uuid', (c) => c.primaryKey())
        .addColumn('rev', 'integer', (c) => c.notNull())
        .addColumn('data', 'jsonb', (c) => c.notNull())
        .addColumn('updated_at', 'timestamptz', (c) => c.notNull().defaultTo(sql`now()`))
        .execute();
    },
  },
};
