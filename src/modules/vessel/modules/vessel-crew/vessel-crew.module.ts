import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselCrewController } from './vessel-crew.controller';
import { VesselCrewService } from './vessel-crew.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VesselCrewController],
  providers: [VesselCrewService]
})
export class VesselCrewModule {}
