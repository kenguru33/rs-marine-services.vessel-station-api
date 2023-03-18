import { Module } from '@nestjs/common';
import { VesselsModule } from './vessels/vessels.module';
import { StationsModule } from './stations/stations.module';

@Module({
  imports: [VesselsModule, StationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
