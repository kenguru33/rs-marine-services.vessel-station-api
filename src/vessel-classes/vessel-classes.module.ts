import { Module } from '@nestjs/common';
import { VesselClassesService } from './vessel-classes.service';
import { VesselClassesController } from './vessel-classes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [VesselClassesService],
  controllers: [VesselClassesController],
  exports: [VesselClassesService],
})
export class VesselClassesModule {}
