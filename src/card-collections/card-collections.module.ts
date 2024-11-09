import { Module } from '@nestjs/common';
import { CardCollectionsService } from './card-collections.service';
import { CardCollectionsController } from './card-collections.controller';
import { Prisma } from '@prisma/client';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CardCollectionsController],
  providers: [CardCollectionsService],
})
export class CardCollectionsModule {}
