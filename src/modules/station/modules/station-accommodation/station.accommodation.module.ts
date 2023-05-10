import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { StationAccommodationService } from './station-accommodation.service';
import { StationAccommodationController } from './station-accommodation.controller';
import { StationAccommodationTypeService } from './station-accommodation-type/station-accommodation-type.service';
import { StationAccommodationTypeController } from './station-accommodation-type/station-accommodation-type.controller';

@Module({
  imports: [DatabaseModule],
  providers: [StationAccommodationService, StationAccommodationTypeService],
  controllers: [
    StationAccommodationController,
    StationAccommodationTypeController,
  ],
})
export class StationAccommodationModule {}
