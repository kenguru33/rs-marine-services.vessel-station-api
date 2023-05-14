import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselMaintenanceController } from './vessel-maintenance.controller';
import { VesselMaintenanceService } from './vessel-maintenance.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VesselMaintenanceController],
  providers: [VesselMaintenanceService],
})
export class VesselMaintenanceModule {}
