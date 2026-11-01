import { Global, Inject, Module, OnModuleDestroy } from '@nestjs/common';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

/** Спільне підключення. Кожен модуль працює лише у своїй схемі Postgres (withSchema) — без FK між схемами. */
export const DB = Symbol('DB');
export type Db = Kysely<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export const createDb = (connectionString: string): Db =>
  new Kysely({ dialect: new PostgresDialect({ pool: new Pool({ connectionString }) }) });

@Global()
@Module({
  providers: [{ provide: DB, useFactory: () => createDb(requireEnv('DATABASE_URL')) }],
  exports: [DB],
})
export class DatabaseModule implements OnModuleDestroy {
  constructor(@Inject(DB) private readonly db: Db) {}
  onModuleDestroy() { return this.db.destroy(); }
}

export function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Не задано змінну середовища ${name}`);
  return v;
}
