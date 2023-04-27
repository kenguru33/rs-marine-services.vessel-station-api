import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { StationTypeService } from './station-type/station-type.service';
import { StationTypeController } from './station-type/station-type.controller';
import { StationAccommodationController } from './station-accommodation/station-accommodation.controller';
import { StationAccommodationService } from './station-accommodation/station-accommodation.service';
import { StationAccommodationTypeService } from './station-accommodation-type/station-accommodation-type.service';
import { StationAccommodationTypeController } from './station-accommodation-type/station-accommodation-type.controller';
import { StationPierService } from './station-pier/station-pier.service';
import { StationPierController } from './station-pier/station-pier.controller';


@Module({
  imports: [DatabaseModule],
  providers: [
    StationService,
    StationTypeService,
    StationAccommodationService,
    StationAccommodationTypeService,
    StationPierService
  ],
  controllers: [
    StationController,
    StationTypeController,
    StationAccommodationController,
    StationAccommodationTypeController,
    StationPierController
  ],
  exports: [StationService],
})
export class StationModule {}
