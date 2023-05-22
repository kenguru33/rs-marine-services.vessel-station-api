import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionsFilter } from './database/prisma-client-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { StationModule } from './modules/station/station.module';
import { VesselModule } from './modules/vessel/vessel.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { snapshot: true });
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(
    new PrismaClientExceptionsFilter(
      httpAdapter,
      new Logger(PrismaClientExceptionsFilter.name),
    ),
  );

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Vessels and Statios API')
    .setDescription('The vessel and station API description')
    .setVersion('1.0')
    .addTag('vessels and stations')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [VesselModule, StationModule],
  });
  SwaggerModule.setup('api', app, swaggerDocument, {});

  await app.listen(3000);
}
bootstrap();
