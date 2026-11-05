import { Controller, Get, Headers, Inject, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { createHash, timingSafeEqual } from 'crypto';
import { Metrics } from './metrics';

export const ADMIN_TOKEN = Symbol('AdminToken');
const sha = (s: string) => createHash('sha256').update(s).digest();

/** Токен адміністратора — щонайменше 32 символи (інакше ендпоінт вимкнено); порівняння за сталий час. */
export function adminAccess(header: string | undefined, token: string | undefined): 'ok' | 'denied' | 'disabled' {
  if (!token || token.length < 32) return 'disabled';
  const given = /^Bearer (.+)$/.exec(header ?? '')?.[1];
  return given && timingSafeEqual(sha(given), sha(token)) ? 'ok' : 'denied';
}

/** Лічильники поточного й попереднього вікна для адміністратора. Без ADMIN_TOKEN — 404, ніби ендпоінта немає. */
@Controller('v1/admin')
export class AdminController {
  constructor(private readonly metrics: Metrics, @Inject(ADMIN_TOKEN) private readonly token: string | undefined) {}

  @Get('metrics')
  get(@Headers('authorization') auth?: string) {
    const access = adminAccess(auth, this.token);
    if (access === 'disabled') throw new NotFoundException();
    if (access === 'denied') throw new UnauthorizedException();
    return { now: this.metrics.snapshot(), last: this.metrics.last, rules: this.metrics.rules };
  }
}
