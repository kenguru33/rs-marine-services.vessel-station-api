import { Query, Resolver } from '@nestjs/graphql';
import { VesselCapabilitiesService } from './vessel-capabilities.service';
import { VesselCapabilityModel } from './vesselCapability.model';


@Resolver()
export class VesselCapabilitiesResolver {
  constructor(private vesselCapabilitiesService: VesselCapabilitiesService) {}

  @Query(() => [VesselCapabilityModel])
  async getVesselCapabilities() {
    const vesselClasses = await this.vesselCapabilitiesService.capabilities()
    return vesselClasses;
  }
}
