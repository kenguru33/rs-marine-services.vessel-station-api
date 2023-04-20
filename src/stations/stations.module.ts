import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';
import { StationsResolver } from './resolver';

@Module({
  imports: [DatabaseModule],
  providers: [StationsService, StationsResolver],
  controllers: [StationsController],
  exports: [StationsService],
})
export class StationsModule {}
