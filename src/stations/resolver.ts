import { Query, Resolver } from '@nestjs/graphql';
import { StationsService } from './stations.service';
import { StationModel } from './station.model';


@Resolver()
export class StationsResolver {
  constructor(private stationsService: StationsService) {}

  @Query(() => [StationModel])
  async getStations() {
    return await this.stationsService.stations();
  }
}
