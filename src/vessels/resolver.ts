import { Query, Resolver } from '@nestjs/graphql';
import { VesselsService } from './vessels.service';
import { VesselModel } from './vessel.model';

@Resolver()
export class VesselResolver {
  constructor(private vesselService: VesselsService) {}

  @Query(() => [VesselModel])
  async getVessels() {
    const vessel = await this.vesselService.findAll();
    console.log(vessel);
    return vessel;
  }
}
