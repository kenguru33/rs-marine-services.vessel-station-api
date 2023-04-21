import { Test, TestingModule } from '@nestjs/testing';
import { VesselClassService } from './vessel-class.service';

describe('VesselClassesService', () => {
  let service: VesselClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselClassService],
    }).compile();

    service = module.get<VesselClassService>(VesselClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
