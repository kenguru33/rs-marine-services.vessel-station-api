import { Injectable } from '@nestjs/common';
import { Prisma, Vessel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { VesselsRepository } from './vessels.repository';

@Injectable()
export class VesselsService {
  constructor(private vesselsRepository: VesselsRepository) {}

  async vessel(id: number): Promise<Vessel> {
    return this.vesselsRepository.vessel({ id });
  }

  async vessels(): Promise<Vessel[]> {
    return this.vesselsRepository.vessels({
      include: { vesselClass: true, capabilities: true },
    });
  }

  async createVessel(data: CreateVesselDto): Promise<Vessel> {
    const { name, rs, capabilityIds, vesselClassId } = data;
    return this.vesselsRepository.createVessel({
      name,
      rs,
      vesselClass: { connect: { id: vesselClassId } },
      capabilities: {
        connect: capabilityIds ? capabilityIds.map((id) => ({ id })) : [],
      },
    });
  }

  async updateVessel(id: number, data: UpdateVesselDto): Promise<Vessel> {
    const { name, rs, capabilityIds, vesselClassId } = data;
    return this.vesselsRepository.updateVessel({
      where: { id },
      data: {
        name,
        rs,
        vesselClass: { connect: { id: vesselClassId } },
        capabilities: {
          set: capabilityIds && capabilityIds.map((id) => ({ id })),
        },
      },
    });
  }

  async deleteVessel(id: number): Promise<Vessel> {
    return this.vesselsRepository.deleteVessel(id);
  }

  async addCapability(params: {
    vesselId: number;
    capabilityId: number;
  }): Promise<Vessel> {
    const { vesselId, capabilityId } = params;
    return this.vesselsRepository.updateVessel({
      where: { id: vesselId },
      data: {
        capabilities: {
          connect: { id: capabilityId },
        },
      },
    });
  }

  async removeCapability(params: {
    vesselId: number;
    capabilityId: number;
  }): Promise<Vessel> {
    const { vesselId, capabilityId } = params;
    return this.vesselsRepository.updateVessel({
      where: { id: vesselId },
      data: {
        capabilities: {
          disconnect: { id: capabilityId },
        },
      },
    });
  }
}
