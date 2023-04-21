import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StationController } from './station.controller';
import { StationService } from './station.service';

@Module({
  imports: [DatabaseModule],
  providers: [StationService],
  controllers: [StationController],
  exports: [StationService],
})
export class StationsModule {}
