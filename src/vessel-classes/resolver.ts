import { Query, Resolver } from '@nestjs/graphql';
import { VesselClassesService } from './vessel-classes.service';
import { VesselClassModel } from './vesselClass.model';


@Resolver()
export class VesselClassesResolver {
  constructor(private vesselClassService: VesselClassesService) {}

  @Query(() => [VesselClassModel])
  async getVesselClasses() {
    const vesselClasses = await this.vesselClassService.vesselClasses()
    return vesselClasses;
  }
}
