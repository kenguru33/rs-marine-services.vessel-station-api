import { Injectable } from '@nestjs/common';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { VesselClassesRepository } from './vesselClasses.repository';

@Injectable()
export class VesselClassesService {
  constructor(private vesselClassesRepository: VesselClassesRepository) {}

  async vesselClass(id: number): Promise<CreateVesselClassDto> {
    return this.vesselClassesRepository.vesselClass(id);
  }

  async vesselClasses(): Promise<CreateVesselClassDto[]> {
    return this.vesselClassesRepository.vesselClasses();
  }

  async createVesselClass(data: CreateVesselClassDto) {
    return this.vesselClassesRepository.createVesselClass(data);
  }
}
