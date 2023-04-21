import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { VesselStateService } from './vessel-state.service';
import { VesselStateController } from './vessel-state.controller';
import { VesselStateCategoryService } from './vessel-state-category.service';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { VesselStateCategoryController } from './vessel-state-category.controller';

@Module({
  imports: [DatabaseModule],
  providers: [VesselStateCategoryService, VesselStateService],
  controllers: [VesselStateCategoryController, VesselStateController],
  exports: [],
})
export class VesselStateModule {}
