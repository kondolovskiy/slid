import { Kysely, sql } from 'kysely';
import { Migration } from 'kysely';

export const identityMigrations: Record<string, Migration> = {
  '001-learners': {
    async up(db: Kysely<unknown>) {
      await db.schema.withSchema('identity').createTable('learners')
        .addColumn('id', 'uuid', (c) => c.primaryKey())
        .addColumn('token_hash', 'text', (c) => c.notNull().unique())
        .addColumn('created_at', 'timestamptz', (c) => c.notNull().defaultTo(sql`now()`))
        .execute();
    },
  },
};
