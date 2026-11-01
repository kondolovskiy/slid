import { Body, ConflictException, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { LearnerGuard, LearnerId } from '../identity';
import { parseProgressInput } from './progress.input';
import { ProgressService } from './progress.service';

@Controller('v1/progress')
@UseGuards(LearnerGuard)
export class ProgressController {
  constructor(private readonly progress: ProgressService) {}

  @Get() get(@LearnerId() learnerId: string) { return this.progress.get(learnerId); }

  @Put() async put(@LearnerId() learnerId: string, @Body() body: unknown) {
    const { rev, data } = parseProgressInput(body);
    const res = await this.progress.put(learnerId, rev, data);
    if (!res.ok) throw new ConflictException(res.doc); // 409 + поточна версія для злиття
    return res.doc;
  }
}
