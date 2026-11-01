import { Inject, Injectable } from '@nestjs/common';
import { DB, Db } from '../../db/database';

export const LEARNER_STORE = Symbol('LearnerStore');
export interface LearnerStore {
  insert(id: string, tokenHash: string): Promise<void>;
  findIdByTokenHash(tokenHash: string): Promise<string | null>;
}

@Injectable()
export class PgLearnerStore implements LearnerStore {
  constructor(@Inject(DB) private readonly db: Db) {}
  private get t() { return this.db.withSchema('identity'); }

  async insert(id: string, tokenHash: string) {
    await this.t.insertInto('learners').values({ id, token_hash: tokenHash }).execute();
  }
  async findIdByTokenHash(tokenHash: string) {
    const row = await this.t.selectFrom('learners').select('id').where('token_hash', '=', tokenHash).executeTakeFirst();
    return row?.id ?? null;
  }
}

/** Для модульних тестів і локальних експериментів без БД. */
export class MemoryLearnerStore implements LearnerStore {
  readonly rows = new Map<string, string>(); // tokenHash → id
  async insert(id: string, tokenHash: string) { this.rows.set(tokenHash, id); }
  async findIdByTokenHash(tokenHash: string) { return this.rows.get(tokenHash) ?? null; }
}
