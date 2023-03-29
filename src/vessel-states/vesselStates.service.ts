import { Injectable } from '@nestjs/common';
import { VesselStatesRepository } from './vesselStates.repository';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { VesselSubState } from '@prisma/client';
import { VesselSubStatesRepository } from './vesselSubStates.repository';

@Injectable()
export class VesselStatesService {
  constructor(private vesselStateRepository: VesselStatesRepository, private vesselSubStatesRepository: VesselSubStatesRepository) {}

  async state(id: number) {
    return this.vesselStateRepository.state({ id });
  }

  async states() {
    return this.vesselStateRepository.states({});
  }

  async createState(data: CreateVesselStateDto) {
    return this.vesselStateRepository.createState(data);
  }

  async createSubState(data: CreateVesselSubStateDto) {
    return this.vesselSubStatesRepository.createSubState(data);
  }

  async deleteState(id: number) {
    return this.vesselStateRepository.deleteState({ id });
  }

  async updateState(
    id: number,
    data: {
      name?: string;
      description?: string;
      inUse?: boolean;
    },
  ) {
    return this.vesselStateRepository.updateState({ id, data });
  }
}
