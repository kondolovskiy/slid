import { Inject, Injectable, ServiceUnavailableException } from '@nestjs/common';
import { createHash, randomBytes, randomInt, randomUUID } from 'crypto';
import { GOOGLE_VERIFIER, GoogleVerifier } from './google.verifier';
import { IdentityPort } from './identity.port';
import { LEARNER_STORE, LearnerStore } from './learner.store';

export const IDENTITY_OPTIONS = Symbol('IdentityOptions');
export interface IdentityOptions { /** Домени Google Workspace шкіл, яким дозволено вхід. Порожньо — вхід через Google вимкнено. */ googleDomains: string[] }

export const PAIRING_TTL_MS = 10 * 60 * 1000;
const PAIRING_ATTEMPTS = 5;
const CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // без 0/O, 1/I/L
const hash = (s: string) => createHash('sha256').update(s).digest('hex');

export interface Session { id: string; token: string }

/**
 * Учень — випадковий id. Входи: анонімний токен пристрою, шкільний Google-акаунт (лише sub і домен), код привʼязки пристрою.
 * Імені, email, телефону не зберігаємо. Токени й коди — лише SHA-256.
 */
@Injectable()
export class IdentityService implements IdentityPort {
  constructor(
    @Inject(LEARNER_STORE) private readonly store: LearnerStore,
    @Inject(GOOGLE_VERIFIER) private readonly google: GoogleVerifier,
    @Inject(IDENTITY_OPTIONS) private readonly options: IdentityOptions,
  ) {}

  async register(): Promise<Session> {
    const id = randomUUID();
    await this.store.create(id);
    return { id, token: await this.issueToken(id) };
  }

  async authenticate(token: string | undefined): Promise<string | null> {
    return token ? this.store.findIdByTokenHash(hash(token)) : null;
  }

  async me(learnerId: string) {
    return { id: learnerId, school: await this.store.school(learnerId) };
  }

  /**
   * null — токен невалідний, особистий акаунт або домен не дозволено.
   * link — явна згода в інтерфейсі привʼязати акаунт до анонімного учня цього пристрою (currentToken).
   * Без неї не привʼязуємо: на спільному шкільному ПК токен міг лишитися від іншої дитини.
   */
  async signInWithGoogle(idToken: string, currentToken?: string, link = false): Promise<Session | null> {
    const acc = await this.google.verify(idToken);
    const hd = acc?.hd?.toLowerCase();
    if (!acc || !hd || !this.options.googleDomains.some((d) => d.toLowerCase() === hd)) return null;
    let id = await this.store.findIdByGoogleSub(acc.sub);
    const current = id || !link ? null : await this.authenticate(currentToken);
    if (current && (await this.store.linkGoogle(current, acc.sub, hd))) id = current;
    id ??= await this.store.createOrGetByGoogle(randomUUID(), acc.sub, hd);
    return { id, token: await this.issueToken(id) };
  }

  async createPairingCode(learnerId: string) {
    // Збіг із живим кодом малоймовірний (≈ 8,9·10⁸ кодів), але можливий — тоді інший код, а не 500.
    for (let attempt = 0; attempt < PAIRING_ATTEMPTS; attempt++) {
      const code = Array.from({ length: 6 }, () => CODE_ALPHABET[randomInt(CODE_ALPHABET.length)]).join('');
      const expiresAt = new Date(Date.now() + PAIRING_TTL_MS);
      if (await this.store.savePairing(hash(code), learnerId, expiresAt)) return { code, expiresAt: expiresAt.toISOString() };
    }
    throw new ServiceUnavailableException('Не вдалося згенерувати вільний код привʼязки, спробуй ще раз'); // 503, а не 500 (рев’ю P3-2)
  }

  async claimPairingCode(code: string | undefined): Promise<Session | null> {
    const normalized = (code ?? '').toUpperCase().replace(/[\s-]/g, '');
    const id = normalized && (await this.store.claimPairing(hash(normalized)));
    return id ? { id, token: await this.issueToken(id) } : null;
  }

  private async issueToken(learnerId: string) {
    const token = randomBytes(32).toString('base64url');
    await this.store.addToken(learnerId, hash(token));
    return token;
  }
}
