import { Module } from '@nestjs/common';
import { StationPierService } from './station-pier.service';
import { StationPierController } from './station-pier.controller';
import { StationPierTypeService } from './station-pier-type/station-pier-type.service';
import { StationPierTypeController } from './station-pier-type/station-pier-type.controller';
import { DatabaseModule } from '../../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StationPierController, StationPierTypeController],
  providers: [StationPierService, StationPierTypeService],
})
export class StationPierModule {}
