import { Test, TestingModule } from '@nestjs/testing';
import { VesselService } from './vessel.service';

describe('VesselsService', () => {
  let service: VesselService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselService],
    }).compile();

    service = module.get<VesselService>(VesselService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
