import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './error/prisma-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('api/v1');

  const { httpAdapter } = app.get(HttpAdapterHost);

  const config = new DocumentBuilder()
    .setTitle('Pokemon TCG API')
    .setDescription('API to manage Pokemon TCG cards')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document),
    {
      ignoreGlobalPrefix: false,
    };

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  app.enableShutdownHooks();
  await app.listen(process.env.PORT || 3333);

  Logger.log(`Application is running on: ${await app.getUrl()}/api/v1`);
  // log current date
  Logger.log(new Date().toISOString());
}
bootstrap();
