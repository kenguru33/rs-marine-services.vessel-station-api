import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselStateService } from './vessel-state.service';
import { VesselStateController } from './vessel-state.controller';
import { VesselStateCategoryService } from './vessel-state-category/vessel-state-category.service';
import { VesselStateCategoryController } from './vessel-state-category/vessel-state-category.controller';

@Module({
  imports: [DatabaseModule],
  providers: [VesselStateService, VesselStateCategoryService],
  controllers: [VesselStateController, VesselStateCategoryController],
})
export class VesselStateModule {}
