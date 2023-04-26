import { Test, TestingModule } from '@nestjs/testing';
import { VesselStatesService } from '../../vesste-state-category/vessel-state-category.service';

describe('StatesService', () => {
  let service: VesselStatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselStatesService],
    }).compile();

    service = module.get<VesselStatesService>(VesselStatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
