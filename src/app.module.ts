import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { VesselModule } from './vessel/vessel.module';
import { StationModule } from './station/station.module';


@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    VesselModule,
    StationModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   playground: true,
    //   autoSchemaFile: true,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
