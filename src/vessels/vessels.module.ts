import { Module } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VesselCapabilitiesModule } from 'src/vessel-capabilities/vessel-capabilities.module';
import { VesselClassesModule } from 'src/vessel-classes/vessel-classes.module';
import { VesselStatesModule } from 'src/vessel-states/VesselStates.module';

@Module({
  providers: [VesselsService],
  controllers: [VesselsController],
  imports: [
    DatabaseModule,
    VesselStatesModule,
    VesselClassesModule,
    VesselCapabilitiesModule,
  ],
  exports: [VesselsService],
})
export class VesselsModule {}
