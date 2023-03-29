import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StationsController } from './stations.controller';
import { StationsRepository } from './stations.repository';
import { StationsService } from './stations.service';

@Module({
  imports: [DatabaseModule],
  providers: [StationsService, StationsRepository],
  controllers: [StationsController],
})
export class StationsModule {}
