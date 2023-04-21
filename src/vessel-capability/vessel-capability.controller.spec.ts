import { Test, TestingModule } from '@nestjs/testing';
import { VesselCapabilityController } from './vessel-capability.controller';

describe('VesselCapabilitiesController', () => {
  let controller: VesselCapabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VesselCapabilityController],
    }).compile();

    controller = module.get<VesselCapabilityController>(
      VesselCapabilityController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
