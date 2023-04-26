import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { StationTypeService } from './station-type/station-type.service';
import { StationTypeController } from './station-type/station-type.controller';
import { StationApartmentService } from './station-apartment/station-apartment.service';
import { StationApartmentController } from './station-apartment/station-apartment.controller';

@Module({
  imports: [DatabaseModule],
  providers: [StationService, StationTypeService, StationApartmentService],
  controllers: [StationController, StationTypeController, StationApartmentController],
  exports: [StationService],
})
export class StationsModule {}
