import { Module } from '@nestjs/common';
import { VesselsModule } from './vessel/vessel.module';
import { StationsModule } from './station/station.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    VesselsModule,
    StationsModule,
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
