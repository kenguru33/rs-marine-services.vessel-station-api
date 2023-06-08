import { Module } from '@nestjs/common';
import { StationPierService } from './station-pier.service';
import { StationPierController } from './station-pier.controller';
import { StationPierTypeService } from './station-pier-type/station-pier-type.service';
import { StationPierTypeController } from './station-pier-type/station-pier-type.controller';
import { DatabaseModule } from '../../../../database/database.module';
import { StationPierElectricityTypeController } from './station-pier-electricity-type/station-pier-electricity-type.constroller';
import { StationPierElectricityTypeService } from './station-pier-electricity-type/station-pier-electricity-type.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    StationPierController,
    StationPierTypeController,
    StationPierElectricityTypeController,
  ],
  providers: [
    StationPierService,
    StationPierTypeService,
    StationPierElectricityTypeService,
  ],
})
export class StationPierModule {}
