import { Global, Inject, LoggerService, Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ADMIN_TOKEN, AdminController } from './admin';
import { jsonLogger } from './log';
import { Metrics } from './metrics';
import { MemoryRateLimitStorage, RATE_LIMIT_STORAGE } from './rate-limit';

/** Логер подій застосунку (http, metrics, alert): JSON, рівні log/warn/error. Внутрішні повідомлення Nest — лише warn/error (app.ts). */
export const APP_LOG = Symbol('AppLog');

/**
 * Експлуатація (інфраструктура, як db/): структуровані логи, лічильники й сигнали, порт сховища лімітів.
 * Глобальний: модулі беруть Metrics і RATE_LIMIT_STORAGE через DI.
 */
@Global()
@Module({
  controllers: [AdminController],
  providers: [
    { provide: APP_LOG, useFactory: () => jsonLogger(['log', 'warn', 'error', 'fatal']) },
    { provide: Metrics, inject: [APP_LOG], useFactory: (log: LoggerService) => new Metrics(log) },
    { provide: RATE_LIMIT_STORAGE, useClass: MemoryRateLimitStorage },
    { provide: ADMIN_TOKEN, useFactory: () => process.env.ADMIN_TOKEN },
  ],
  exports: [APP_LOG, Metrics, RATE_LIMIT_STORAGE],
})
export class OpsModule implements OnModuleInit, OnModuleDestroy {
  private timer?: NodeJS.Timeout;
  constructor(@Inject(Metrics) private readonly metrics: Metrics) {}
  onModuleInit() { this.timer = setInterval(() => this.metrics.tick(), 60_000).unref(); }
  onModuleDestroy() { clearInterval(this.timer); this.metrics.rollover(); } // підсумок неповного вікна перед перезапуском
}

export { httpLog, jsonLogger, learnerHash } from './log';
export { Metrics } from './metrics';
export { RATE_LIMIT_STORAGE, RateLimitStorage } from './rate-limit';
