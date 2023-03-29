import { Test, TestingModule } from '@nestjs/testing';
import { VesselStatesController } from '../vesselStates.controller';

describe('VesselStatesController', () => {
  let controller: VesselStatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VesselStatesController],
    }).compile();

    controller = module.get<VesselStatesController>(VesselStatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
