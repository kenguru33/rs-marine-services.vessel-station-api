import { Module } from '@nestjs/common';
import { VesselCapabilityService } from './vessel-capabilities.service';
import { DatabaseModule } from '../../../../database/database.module';
import { VesselCapabilityController } from './vessel-capability.controller';

@Module({
  imports: [DatabaseModule],
  providers: [VesselCapabilityService],
  controllers: [VesselCapabilityController],
})
export class VesselCapabilityModule {}
