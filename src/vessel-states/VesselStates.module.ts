import { Module } from '@nestjs/common';
import { VesselStatesService } from './vesselStates.service';
import { VesselStatesController } from './vesselStates.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    VesselStatesService,
  ],
  controllers: [VesselStatesController],
})
export class VesselStatesModule {}
