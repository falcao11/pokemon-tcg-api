import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';

@Module({
  imports: [HttpModule],
  controllers: [SetsController],
  providers: [SetsService],
})
export class SetsModule {}
