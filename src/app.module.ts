import { Module } from '@nestjs/common';
import { VesselsModule } from './vessels/vessels.module';
import { StationsModule } from './stations/stations.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { VesselCapabilitiesModule } from './vessel-capabilities/vessel-capabilities.module';
import { VesselClassesModule } from './vessel-classes/vessel-classes.module';
import { VesselStatesModule } from './vessel-states/VesselStates.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    VesselsModule,
    StationsModule,
    VesselStatesModule,
    VesselClassesModule,
    VesselCapabilitiesModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
