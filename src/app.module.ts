import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './collections/collections.module';
import { UsersModule } from './users/users.module';
import { CardCollectionsModule } from './card-collections/card-collections.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './error/all-exceptions.filter';
import { AuthGuard } from './auth/auth.guard';
import { MeModule } from './me/me.module';

@Module({
  imports: [CollectionsModule, UsersModule, CardCollectionsModule, AuthModule, MeModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: 'APP_GUARD', useClass: AuthGuard },
  ],
})
export class AppModule {}
