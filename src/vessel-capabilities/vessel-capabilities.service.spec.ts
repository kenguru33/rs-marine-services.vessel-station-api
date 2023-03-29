import { Test, TestingModule } from '@nestjs/testing';
import { VesselCapabilitiesService } from './vessel-capabilities.service';

describe('VesselCapabilitiesService', () => {
  let service: VesselCapabilitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselCapabilitiesService],
    }).compile();

    service = module.get<VesselCapabilitiesService>(VesselCapabilitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
