import { Module } from '@nestjs/common';
import { VesselClassesService } from './vessel-classes.service';
import { VesselClassesController } from './vessel-classes.controller';
import { VesselClassesRepository } from './vesselClasses.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [VesselClassesService, VesselClassesRepository],
  controllers: [VesselClassesController],
})
export class VesselClassesModule {}
