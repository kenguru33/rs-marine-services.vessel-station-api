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
import { VesselCommEquipModule } from './modules/vessel-comm-equip/vessel-comm-equip.module';
import { VesselInspectorModule } from './modules/vessel-inspector/vessel-inspector.module';
import { VesselMaintenanceModule } from './modules/vessel-maintenance/vessel-maintenance.module';
import { VesselCrewModule } from './modules/vessel-crew/vessel-crew.module';

@Module({
  providers: [VesselService, VesselTypeService, VesselClassService],
  controllers: [VesselController, VesselTypeController, VesselClassController],
  imports: [
    DatabaseModule,
    VesselCapabilityModule,
    VesselStateModule,
    VesselCommEquipModule,
    VesselInspectorModule,
    VesselMaintenanceModule,
    VesselCrewModule,
  ],
  exports: [],
})
export class VesselModule {}
