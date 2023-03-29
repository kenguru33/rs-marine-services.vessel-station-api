import { Test, TestingModule } from '@nestjs/testing';
import { VesselClassesService } from './vessel-classes.service';

describe('VesselClassesService', () => {
  let service: VesselClassesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VesselClassesService],
    }).compile();

    service = module.get<VesselClassesService>(VesselClassesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
