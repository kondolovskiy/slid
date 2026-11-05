import { ThrottlerStorage, ThrottlerStorageService } from '@nestjs/throttler';

/**
 * Порт сховища лімітів частоти — інтерфейс ThrottlerStorage з @nestjs/throttler (бібліотека — і є контракт).
 * Зараз — памʼять процесу (одна репліка). Спільне сховище (Postgres чи Redis) — новий адаптер цього порту,
 * що проходить контракт із rate-limit.spec.ts, і заміна провайдера RATE_LIMIT_STORAGE в OpsModule; модулі не змінюються.
 * Коли — вирішує людина (docs/BACKEND.md «Відкриті питання»).
 */
export const RATE_LIMIT_STORAGE = Symbol('RateLimitStorage');
export type RateLimitStorage = ThrottlerStorage;
export { ThrottlerStorageService as MemoryRateLimitStorage };
