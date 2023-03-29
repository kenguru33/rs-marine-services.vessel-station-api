import { Module } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { VesselStatesModule } from '../vessel-states/VesselStates.module';
import { VesselCapabilitiesModule } from '../vessel-capabilities/vessel-capabilities.module';
import { VesselClassesModule } from '../vessel-classes/vessel-classes.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [VesselsService],
  controllers: [VesselsController],
  imports: [
    DatabaseModule,
    VesselStatesModule,
    VesselClassesModule,
    VesselCapabilitiesModule,
  ],
})
export class VesselsModule {}
