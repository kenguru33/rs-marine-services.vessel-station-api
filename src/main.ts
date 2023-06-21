import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionsFilter } from './database/prisma-client-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { StationModule } from './modules/station/station.module';
import { VesselModule } from './modules/vessel/vessel.module';
import { VesselCapabilityModule } from './modules/vessel/modules/vessel-capability/vessel-capability.module';
import { VesselCommunicationEquipmentModule } from './modules/vessel/modules/vessel-communication-equipment/vessel-communication-equipment.module';
import { VesselCrewModule } from './modules/vessel/modules/vessel-crew/vessel-crew.module';
import { VesselInspectorModule } from './modules/vessel/modules/vessel-inspector/vessel-inspector.module';
import { VesselMaintenanceModule } from './modules/vessel/modules/vessel-maintenance/vessel-maintenance.module';
import { VesselStateModule } from './modules/vessel/modules/vessel-state/vessel-state.module';
import { StationAccommodationModule } from './modules/station/modules/station-accommodation/station.accommodation.module';
import { StationPierModule } from './modules/station/modules/station-pier/station-pier.module';
import { StationAgreementModule } from './modules/station/modules/station-agreement/station-agreement.module';

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
    .setTitle('Vessels and Stations API')
    .setDescription('The vessel and station API description')
    .setVersion('1.0')
    .addTag('vessels and stations')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [
      VesselModule,
      VesselCapabilityModule,
      VesselCommunicationEquipmentModule,
      VesselCrewModule,
      VesselInspectorModule,
      VesselMaintenanceModule,
      VesselStateModule,
      StationModule,
      StationAccommodationModule,
      StationPierModule,
      StationAgreementModule,
    ],
  });
  SwaggerModule.setup('api', app, swaggerDocument, {});

  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
