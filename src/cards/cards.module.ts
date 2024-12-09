import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  imports: [HttpModule],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
