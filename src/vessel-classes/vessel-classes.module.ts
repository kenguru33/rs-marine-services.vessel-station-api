import { Module } from '@nestjs/common';
import { VesselClassesService } from './vessel-classes.service';
import { VesselClassesController } from './vessel-classes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VesselClassesResolver } from './resolver';

@Module({
  imports: [DatabaseModule],
  providers: [VesselClassesService, VesselClassesResolver],
  controllers: [VesselClassesController],
  exports: [VesselClassesService],
})
export class VesselClassesModule {}
