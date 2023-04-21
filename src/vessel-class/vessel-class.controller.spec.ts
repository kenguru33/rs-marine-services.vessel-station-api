import { Test, TestingModule } from '@nestjs/testing';
import { VesselClassController } from './vessel-class.controller';

describe('VesselClassesController', () => {
  let controller: VesselClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VesselClassController],
    }).compile();

    controller = module.get<VesselClassController>(VesselClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
