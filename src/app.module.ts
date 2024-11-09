import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './collections/collections.module';
import { UsersModule } from './users/users.module';
import { CardCollectionsModule } from './card-collections/card-collections.module';

@Module({
  imports: [CollectionsModule, UsersModule, CardCollectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
