import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselMaintenanceController } from './vessel-maintenance.controller';
import { VesselMaintenanceService } from './vessel-maintenance.service';
import { VesselMaintenanceApproverController } from './maintenance-approver/vessel-maintenance-approver.controller';
import { VesselMaintenanceApproverService } from './maintenance-approver/vessel-maintenance-approver.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    VesselMaintenanceController,
    VesselMaintenanceApproverController,
  ],
  providers: [VesselMaintenanceService, VesselMaintenanceApproverService],
})
export class VesselMaintenanceModule {}
