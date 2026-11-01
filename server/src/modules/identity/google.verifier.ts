import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

export interface GoogleAccount { sub: string; hd?: string }

/** Порт: перевірка Google id_token (підпис, строк, aud). Лише стабільний sub і домен Workspace — без email/імені. */
export const GOOGLE_VERIFIER = Symbol('GoogleVerifier');
export interface GoogleVerifier {
  verify(idToken: string): Promise<GoogleAccount | null>;
}

@Injectable()
export class GoogleAuthVerifier implements GoogleVerifier {
  constructor(private readonly clientId: string | undefined, private readonly client = new OAuth2Client()) {}

  async verify(idToken: string) {
    if (!this.clientId) throw new ServiceUnavailableException('Вхід через Google не налаштовано');
    if (!idToken) return null;
    // Сертифікати окремо (бібліотека їх кешує): збій мережі — «спробуй пізніше», а не «невалідний токен».
    await this.client.getFederatedSignonCertsAsync().catch(() => { throw new ServiceUnavailableException('Google недоступний'); });
    try {
      const p = (await this.client.verifyIdToken({ idToken, audience: this.clientId })).getPayload();
      return p?.sub ? { sub: p.sub, hd: p.hd } : null;
    } catch {
      return null;
    }
  }
}
