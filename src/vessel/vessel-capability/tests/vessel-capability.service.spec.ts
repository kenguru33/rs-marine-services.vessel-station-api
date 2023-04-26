import { Test, TestingModule } from '@nestjs/testing';
import { VesselCapabilityService } from '../vessel-capabilities.service';

describe('VesselCapabilitiesService', () => {
  let service: VesselCapabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselCapabilityService],
    }).compile();

    service = module.get<VesselCapabilityService>(VesselCapabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
