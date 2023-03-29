import { Module } from '@nestjs/common';
import { VesselStatesService } from './vesselStates.service';
import { VesselStatesController } from './vesselStates.controller';
import { VesselStatesRepository } from './vesselStates.repository';
import { VesselSubStatesRepository } from './vesselSubStates.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    VesselStatesService,
    VesselStatesRepository,
    VesselSubStatesRepository,
  ],
  controllers: [VesselStatesController],
})
export class VesselStatesModule {}
