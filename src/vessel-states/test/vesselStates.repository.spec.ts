import { Test, TestingModule } from '@nestjs/testing';
import { VesselStatesRepository } from '../vesselStates.repository';

describe('VesselStatesRepository', () => {
  let service: VesselStatesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselStatesRepository],
    }).compile();

    service = module.get<VesselStatesRepository>(VesselStatesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
