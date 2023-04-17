import { Module } from '@nestjs/common';
import { VesselStatesService } from './vesselStates.service';
import { VesselStatesController } from './vesselStates.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VesselSubStatesService } from './vesselSubStates.service';
import { VesselSubStatesController } from './vesselSubState.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    VesselStatesService, VesselSubStatesService
  ],
  controllers: [VesselStatesController, VesselSubStatesController],
  exports: [VesselStatesService],
})
export class VesselStatesModule {}
