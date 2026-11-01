import { Inject, Injectable } from '@nestjs/common';
import { sql } from 'kysely';
import { DB, Db } from '../../db/database';

export const LEARNER_STORE = Symbol('LearnerStore');
export interface LearnerStore {
  create(id: string, google?: { sub: string; hd: string }): Promise<void>;
  /** id учня з цим Google sub; при гонці створення повертає того, хто встиг першим. */
  createOrGetByGoogle(id: string, sub: string, hd: string): Promise<string>;
  findIdByGoogleSub(sub: string): Promise<string | null>;
  /** Привʼязує sub до учня без Google-акаунта; false — учень уже привʼязаний або sub зайнятий. */
  linkGoogle(learnerId: string, sub: string, hd: string): Promise<boolean>;
  school(learnerId: string): Promise<string | null>;
  addToken(learnerId: string, tokenHash: string): Promise<void>;
  findIdByTokenHash(tokenHash: string): Promise<string | null>;
  savePairing(codeHash: string, learnerId: string, expiresAt: Date): Promise<void>;
  /** Атомарно забирає непрострочений код; повертає id учня або null. */
  claimPairing(codeHash: string): Promise<string | null>;
}

const UNIQUE_VIOLATION = '23505';

@Injectable()
export class PgLearnerStore implements LearnerStore {
  constructor(@Inject(DB) private readonly db: Db) {}
  private get t() { return this.db.withSchema('identity'); }

  async create(id: string) {
    await this.t.insertInto('learners').values({ id }).execute();
  }
  async createOrGetByGoogle(id: string, sub: string, hd: string) {
    const row = await this.t.insertInto('learners').values({ id, google_sub: sub, google_hd: hd })
      .onConflict((oc) => oc.column('google_sub').doNothing()).returning('id').executeTakeFirst();
    return row?.id ?? (await this.findIdByGoogleSub(sub))!;
  }
  async findIdByGoogleSub(sub: string) {
    const row = await this.t.selectFrom('learners').select('id').where('google_sub', '=', sub).executeTakeFirst();
    return row?.id ?? null;
  }
  async linkGoogle(learnerId: string, sub: string, hd: string) {
    try {
      const r = await this.t.updateTable('learners').set({ google_sub: sub, google_hd: hd })
        .where('id', '=', learnerId).where('google_sub', 'is', null).executeTakeFirst();
      return r.numUpdatedRows === 1n;
    } catch (e) {
      if ((e as { code?: string }).code === UNIQUE_VIOLATION) return false;
      throw e;
    }
  }
  async school(learnerId: string) {
    const row = await this.t.selectFrom('learners').select('google_hd').where('id', '=', learnerId).executeTakeFirst();
    return row?.google_hd ?? null;
  }
  async addToken(learnerId: string, tokenHash: string) {
    await this.t.insertInto('tokens').values({ token_hash: tokenHash, learner_id: learnerId }).execute();
  }
  async findIdByTokenHash(tokenHash: string) {
    const row = await this.t.selectFrom('tokens').select('learner_id').where('token_hash', '=', tokenHash).executeTakeFirst();
    return row?.learner_id ?? null;
  }
  async savePairing(codeHash: string, learnerId: string, expiresAt: Date) {
    await this.t.deleteFrom('pairing_codes').where('expires_at', '<', sql<Date>`now()`).execute(); // прибирання
    await this.t.insertInto('pairing_codes').values({ code_hash: codeHash, learner_id: learnerId, expires_at: expiresAt }).execute();
  }
  async claimPairing(codeHash: string) {
    const row = await this.t.deleteFrom('pairing_codes').where('code_hash', '=', codeHash)
      .where('expires_at', '>', sql<Date>`now()`).returning('learner_id').executeTakeFirst();
    return row?.learner_id ?? null;
  }
}

/** Памʼятний адаптер того самого порту — для модульних тестів. */
export class MemoryLearnerStore implements LearnerStore {
  private readonly learners = new Map<string, { sub?: string; hd?: string }>();
  private readonly tokens = new Map<string, string>(); // hash → learnerId
  private readonly codes = new Map<string, { learnerId: string; expiresAt: Date }>();

  dump() { return { learners: [...this.learners], tokens: [...this.tokens], codes: [...this.codes] }; }

  async create(id: string) { this.learners.set(id, {}); }
  async createOrGetByGoogle(id: string, sub: string, hd: string) {
    const found = await this.findIdByGoogleSub(sub);
    if (found) return found;
    this.learners.set(id, { sub, hd });
    return id;
  }
  async findIdByGoogleSub(sub: string) {
    for (const [id, l] of this.learners) if (l.sub === sub) return id;
    return null;
  }
  async linkGoogle(learnerId: string, sub: string, hd: string) {
    const l = this.learners.get(learnerId);
    if (!l || l.sub || (await this.findIdByGoogleSub(sub))) return false;
    Object.assign(l, { sub, hd });
    return true;
  }
  async school(learnerId: string) { return this.learners.get(learnerId)?.hd ?? null; }
  async addToken(learnerId: string, tokenHash: string) { this.tokens.set(tokenHash, learnerId); }
  async findIdByTokenHash(tokenHash: string) { return this.tokens.get(tokenHash) ?? null; }
  async savePairing(codeHash: string, learnerId: string, expiresAt: Date) { this.codes.set(codeHash, { learnerId, expiresAt }); }
  async claimPairing(codeHash: string) {
    const c = this.codes.get(codeHash);
    this.codes.delete(codeHash);
    return c && c.expiresAt.getTime() > Date.now() ? c.learnerId : null;
  }
}
