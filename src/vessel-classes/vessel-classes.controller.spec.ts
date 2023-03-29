import { Test, TestingModule } from '@nestjs/testing';
import { VesselClassesController } from './vessel-classes.controller';

describe('VesselClassesController', () => {
  let controller: VesselClassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VesselClassesController],
    }).compile();

    controller = module.get<VesselClassesController>(VesselClassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
