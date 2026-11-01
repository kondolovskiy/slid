import { Controller, Post } from '@nestjs/common';
import { IdentityService } from './identity.service';

@Controller('v1/learners')
export class IdentityController {
  constructor(private readonly identity: IdentityService) {}
  @Post() register() { return this.identity.register(); }
}
