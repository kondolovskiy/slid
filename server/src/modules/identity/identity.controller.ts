import { Body, Controller, Get, Headers, HttpCode, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { IdentityService, Session } from './identity.service';
import { bearer, LearnerGuard, LearnerId } from './learner.guard';

const orUnauthorized = (s: Session | null) => { if (!s) throw new UnauthorizedException(); return s; };

@Controller('v1')
@UseGuards(ThrottlerGuard)
export class IdentityController {
  constructor(private readonly identity: IdentityService) {}

  @Post('learners') register() { return this.identity.register(); }

  @Get('me') @UseGuards(LearnerGuard)
  me(@LearnerId() id: string) { return this.identity.me(id); }

  /** Шкільний Google-акаунт. `link: true` + Bearer анонімного учня — привʼязати акаунт до нього (прогрес лишається). */
  @Post('auth/google') @HttpCode(200)
  async google(@Body() body: { idToken?: unknown; link?: unknown }, @Headers('authorization') auth?: string) {
    const idToken = typeof body?.idToken === 'string' ? body.idToken : '';
    return orUnauthorized(await this.identity.signInWithGoogle(idToken, bearer(auth), body?.link === true));
  }

  @Post('pairing') @UseGuards(LearnerGuard)
  pair(@LearnerId() id: string) { return this.identity.createPairingCode(id); }

  @Post('pairing/claim') @HttpCode(200) @Throttle({ default: { limit: 10, ttl: 60_000 } })
  async claim(@Body() body: { code?: unknown }) {
    return orUnauthorized(await this.identity.claimPairingCode(typeof body?.code === 'string' ? body.code : undefined));
  }
}
