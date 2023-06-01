import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { StationAccommodationModule } from './modules/station-accommodation/station.accommodation.module';
import { StationAgreementModule } from './modules/station-agreement/station-agreement.module';
import { StationPierModule } from './modules/station-pier/station-pier.module';
import { StationTypeController } from './station-type/station-type.controller';
import { StationTypeService } from './station-type/station-type.service';
import { StationController } from './station.controller';
import { StationService } from './station.service';

@Module({
  imports: [
    DatabaseModule,
    StationAgreementModule,
    StationPierModule,
    StationAccommodationModule,
  ],
  providers: [StationService, StationTypeService],
  controllers: [StationController, StationTypeController],
  exports: [StationService],
})
export class StationModule {}
