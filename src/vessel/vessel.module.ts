import { Module } from '@nestjs/common';
import { VesselController } from './vessel.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VesselCapabilitiesModule } from 'src/vessel-capability/vessel-capabilities.module';
import { VesselClasseModule } from 'src/vessel-class/vessel-class.module';
import { VesselStateModule } from 'src/vessel-state/vessel-state.module';
import { VesselService } from './vessel.service';

@Module({
  providers: [VesselService],
  controllers: [VesselController],
  imports: [
    DatabaseModule,
    VesselStateModule,
    VesselClasseModule,
    VesselCapabilitiesModule,
  ],
  exports: [VesselService],
})
export class VesselsModule {}
