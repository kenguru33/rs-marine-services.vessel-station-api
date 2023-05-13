import { Module } from '@nestjs/common';
import { VesselController } from './vessel.controller';
import { DatabaseModule } from '../../database/database.module';
import { VesselService } from './vessel.service';
import { VesselTypeController } from './vessel-type/vessel-type.controller';
import { VesselTypeService } from './vessel-type/vessel-type.service';
import { VesselClassService } from './vessel-class/vessel-class.service';
import { VesselClassController } from './vessel-class/vessel-class.controller';
import { VesselCapabilityModule } from './modules/vessel-capability/vessel-capability.module';
import { VesselStateModule } from './modules/vessel-state/vessel-state.module';
import { VesselCommunicationEquipmentModule } from './modules/vessel-communication-equipment/vessel-communication-equipment.module';
import { VesselEngineModule } from './vessel-engine/vessel-engine.module';

@Module({
  providers: [VesselService, VesselTypeService, VesselClassService],
  controllers: [VesselController, VesselTypeController, VesselClassController],
  imports: [
    DatabaseModule,
    VesselCapabilityModule,
    VesselStateModule,
    VesselCommunicationEquipmentModule,
    VesselEngineModule,
  ],
  exports: [],
})
export class VesselModule {}
