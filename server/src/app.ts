import 'reflect-metadata';
import { Controller, Get, Inject, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { sql } from 'kysely';
import { DatabaseModule, DB, Db } from './db/database';
import { IdentityModule } from './modules/identity';
import { ProgressModule } from './modules/progress';
import { APP_LOG, httpLog, jsonLogger, LEARNER_HASH, Metrics, OpsModule } from './ops';

@Controller('health')
class HealthController {
  constructor(@Inject(DB) private readonly db: Db) {}
  @Get() async check() { await sql`select 1`.execute(this.db); return { ok: true }; }
}

@Module({ imports: [DatabaseModule, OpsModule, IdentityModule, ProgressModule], controllers: [HealthController] })
export class AppModule {}

export const createApp = async () =>
  configureApp(await NestFactory.create<NestExpressApplication>(AppModule, { logger: jsonLogger(['error', 'warn', 'fatal']) }));

export function configureApp(app: NestExpressApplication) {
  app.disable('x-powered-by');
  app.use(httpLog(app.get(Metrics), app.get(APP_LOG), app.get(LEARNER_HASH))); // JSON-рядок і лічильник на кожен запит (src/ops)
  // Кількість проксі перед сервером (Railway — 1), щоб ліміти бачили справжній IP. Типово 0: інакше X-Forwarded-For можна підробити.
  app.set('trust proxy', Number(process.env.TRUST_PROXY ?? 0));
  app.useBodyParser('json', { limit: '512kb' });
  const origins = process.env.CORS_ORIGINS?.split(',').map((s) => s.trim()).filter(Boolean);
  if (origins?.length) app.enableCors({ origin: origins });
  app.enableShutdownHooks();
  return app;
}
