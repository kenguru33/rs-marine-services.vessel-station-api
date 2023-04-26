import { Module } from '@nestjs/common';
import { VesselCapabilityService } from './vessel-capabilities.service';
import { VesselCapabilityController } from './vessel-capability.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [VesselCapabilityService],
  controllers: [VesselCapabilityController],
  exports: [VesselCapabilityService],
})
export class VesselCapabilitiesModule {}
