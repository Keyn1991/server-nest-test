import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaService } from './core/orm/prisma.service';
import * as process from 'process';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('clone auto ria ua')
    .setDescription('Документація REST API')
    .setVersion('1.0')
    .addTag('clone auto ria')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(PORT);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  console.log(`Server is running on port ${PORT}`);
}
bootstrap();
