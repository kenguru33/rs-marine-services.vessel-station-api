import { Module } from '@nestjs/common';
import { VesselController } from './vessel.controller';
import { DatabaseModule } from '../database/database.module';
import { VesselService } from './vessel.service';
import { VesselTypeController } from './vessel-type/vessel-type.controller';
import { VesselTypeService } from './vessel-type/vessel-type.service';
import { VesselClassService } from './vessel-class/vessel-class.service';
import { VesselClassController } from './vessel-class/vessel-class.controller';
import { VesselCapabilityService } from './vessel-capability/vessel-capabilities.service';
import { VesselCapabilityController } from './vessel-capability/vessel-capability.controller';
import { VesselStateController } from './vessel-state/vessel-state.controller';
import { VesselStateService } from './vessel-state/vessel-state.service';
import { VesselStateCategoryService } from './vesste-state-category/vessel-state-category.service';
import { VesselStateCategoryController } from './vesste-state-category/vessel-state-category.controller';

@Module({
  providers: [
    VesselService,
    VesselTypeService,
    VesselClassService,
    VesselCapabilityService,
    VesselStateService,
    VesselStateCategoryService
  ],
  controllers: [
    VesselController,
    VesselTypeController,
    VesselClassController,
    VesselCapabilityController,
    VesselStateController,
    VesselStateCategoryController
  ],
  imports: [DatabaseModule],
  exports: [],
})
export class VesselModule {}
