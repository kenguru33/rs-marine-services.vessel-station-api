import { Module } from '@nestjs/common';
import { VesselCapabilitiesService } from './vessel-capabilities.service';
import { VesselCapabilitiesController } from './vessel-capabilities.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [VesselCapabilitiesService],
  controllers: [VesselCapabilitiesController],
  exports: [VesselCapabilitiesService],
})
export class VesselCapabilitiesModule {}
