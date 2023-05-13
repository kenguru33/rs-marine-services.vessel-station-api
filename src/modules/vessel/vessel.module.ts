import { Module } from '@nestjs/common';
import { VesselController } from './vessel.controller';
import { DatabaseModule } from '../../database/database.module';
import { VesselService } from './vessel.service';
import { VesselTypeController } from './vessel-type/vessel-type.controller';
import { VesselTypeService } from './vessel-type/vessel-type.service';
import { VesselClassService } from './vessel-class/vessel-class.service';
import { VesselClassController } from './vessel-class/vessel-class.controller';
import { VesselCapabilityService } from './modules/vessel-capability/vessel-capabilities.service';
import { VesselCapabilityController } from './modules/vessel-capability/vessel-capability.controller';
import { VesselStateController } from './modules/vessel-state/vessel-state.controller';
import { VesselStateService } from './modules/vessel-state/vessel-state.service';
import { VesselStateCategoryService } from './modules/vessel-state/vessel-state-category/vessel-state-category.service';
import { VesselStateCategoryController } from './modules/vessel-state/vessel-state-category/vessel-state-category.controller';
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
