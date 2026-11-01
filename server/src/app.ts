import 'reflect-metadata';
import { Controller, Get, Inject, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { sql } from 'kysely';
import { DatabaseModule, DB, Db } from './db/database';
import { IdentityModule } from './modules/identity';
import { ProgressModule } from './modules/progress';

@Controller('health')
class HealthController {
  constructor(@Inject(DB) private readonly db: Db) {}
  @Get() async check() { await sql`select 1`.execute(this.db); return { ok: true }; }
}

@Module({ imports: [DatabaseModule, IdentityModule, ProgressModule], controllers: [HealthController] })
export class AppModule {}

export const createApp = async () =>
  configureApp(await NestFactory.create<NestExpressApplication>(AppModule, { logger: ['error', 'warn'] }));

export function configureApp(app: NestExpressApplication) {
  app.disable('x-powered-by');
  app.set('trust proxy', Number(process.env.TRUST_PROXY ?? 1)); // Railway: один проксі перед застосунком → справжній IP для лімітів
  app.useBodyParser('json', { limit: '512kb' });
  const origins = process.env.CORS_ORIGINS?.split(',').map((s) => s.trim()).filter(Boolean);
  if (origins?.length) app.enableCors({ origin: origins });
  app.enableShutdownHooks();
  return app;
}
