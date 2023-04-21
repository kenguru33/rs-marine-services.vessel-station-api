import { Module } from '@nestjs/common';
import { VesselClassService } from './vessel-class.service';
import { VesselClassController } from './vessel-class.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [VesselClassService],
  controllers: [VesselClassController],
  exports: [VesselClassService],
})
export class VesselClasseModule {}
