import { Inject, Injectable } from '@nestjs/common';
import { createHash, randomBytes, randomUUID } from 'crypto';
import { IdentityPort } from './identity.port';
import { LEARNER_STORE, LearnerStore } from './learner.store';

const hash = (token: string) => createHash('sha256').update(token).digest('hex');

/** Анонімний учень: жодних імен чи email — лише випадковий id і токен пристрою. */
@Injectable()
export class IdentityService implements IdentityPort {
  constructor(@Inject(LEARNER_STORE) private readonly store: LearnerStore) {}

  async register(): Promise<{ id: string; token: string }> {
    const id = randomUUID();
    const token = randomBytes(32).toString('base64url');
    await this.store.insert(id, hash(token));
    return { id, token };
  }

  async authenticate(token: string | undefined): Promise<string | null> {
    return token ? this.store.findIdByTokenHash(hash(token)) : null;
  }
}
