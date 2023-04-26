import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { StationTypeService } from './station-type/station-type.service';
import { StationTypeController } from './station-type/station-type.controller';

@Module({
  imports: [DatabaseModule],
  providers: [StationService, StationTypeService],
  controllers: [StationController, StationTypeController],
  exports: [StationService],
})
export class StationsModule {}
