import { Test, TestingModule } from '@nestjs/testing';
import { VesselCapabilitiesController } from './vessel-capabilities.controller';

describe('VesselCapabilitiesController', () => {
  let controller: VesselCapabilitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VesselCapabilitiesController],
    }).compile();

    controller = module.get<VesselCapabilitiesController>(
      VesselCapabilitiesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
