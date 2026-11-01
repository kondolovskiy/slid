import { Kysely, Migration, sql } from 'kysely';

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
  // Кілька пристроїв на учня (токени окремо), шкільний Google-акаунт, коди привʼязки.
  '002-tokens-google-pairing': {
    async up(db: Kysely<unknown>) {
      // Міграція йде в транзакції; блокування — щоб учень, створений старою версією під час деплою, не загубив токен.
      await sql`lock table identity.learners in access exclusive mode`.execute(db);
      const s = db.schema.withSchema('identity');
      await s.createTable('tokens')
        .addColumn('token_hash', 'text', (c) => c.primaryKey())
        .addColumn('learner_id', 'uuid', (c) => c.notNull().references('identity.learners.id').onDelete('cascade'))
        .addColumn('created_at', 'timestamptz', (c) => c.notNull().defaultTo(sql`now()`))
        .execute();
      await sql`insert into identity.tokens (token_hash, learner_id, created_at) select token_hash, id, created_at from identity.learners`.execute(db);
      await s.alterTable('learners').dropColumn('token_hash').execute();
      await s.alterTable('learners').addColumn('google_sub', 'text', (c) => c.unique()).execute();
      await s.alterTable('learners').addColumn('google_hd', 'text').execute();
      await s.createTable('pairing_codes')
        .addColumn('code_hash', 'text', (c) => c.primaryKey())
        .addColumn('learner_id', 'uuid', (c) => c.notNull().references('identity.learners.id').onDelete('cascade'))
        .addColumn('expires_at', 'timestamptz', (c) => c.notNull())
        .execute();
    },
  },
};
