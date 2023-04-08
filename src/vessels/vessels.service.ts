import { HttpException, Injectable } from '@nestjs/common';
import { Vessel } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';

@Injectable()
export class VesselsService {
  constructor(private prisma: PrismaService) {}

  async vessel(id: number): Promise<Vessel> {
    return this.prisma.vessel.findUniqueOrThrow({
      where: { id },
      include: { capabilities: true, class: true, station: true },
    });
  }

  async vessels(): Promise<Vessel[]> {
    return this.prisma.vessel.findMany({
      include: { capabilities: true, class: true, station: true },
    });
  }

  async createVessel(data: CreateVesselDto): Promise<Vessel> {
    const { name, rs, capabilityIds, vesselClassId, stationId } = data;

    for await (const id of capabilityIds) {
      const capability = await this.prisma.vesselCapability.findUnique({
        where: { id },
      });
      if (!capability) {
        throw new HttpException(`Capability with id ${id} does not exist`, 400);
      }
    }

    const vesselClass = await this.prisma.vesselClass.findUnique({
      where: { id: vesselClassId },
    });

    if (stationId) {
      const station = await this.prisma.station.findUnique({
        where: { id: stationId },
      });
      if (!station) {
        throw new HttpException(
          `Station with id ${stationId} does not exist`,
          400,
        );
      }
    }

    if (!vesselClass) {
      throw new HttpException(
        `Vessel class with id ${vesselClassId} does not exist`,
        400,
      );
    }

    const vessel = this.prisma.vessel.create({
      data: {
        name,
        rs,
        station: stationId ? { connect: { id: stationId } } : undefined,
        class: { connect: { id: vesselClassId } },
        capabilities: {
          connect: capabilityIds ? capabilityIds.map((id) => ({ id })) : [],
        },
      },
      include: { capabilities: true, class: true, station: true },
    });
    return vessel;
  }
  async updateVessel(id: number, data: UpdateVesselDto): Promise<Vessel> {
    const { name, rs, capabilityIds, vesselClassId } = data;
    return this.prisma.vessel.update({
      where: { id },
      data: {
        name: name || undefined,
        rs: rs || undefined,
        class: {
          connect: vesselClassId ? { id: vesselClassId } : undefined,
        },
        capabilities: {
          set: capabilityIds && capabilityIds.map((id) => ({ id })),
        },
      },
      include: { capabilities: true, class: true, station: true },
    });
  }

  async deleteVessel(id: number): Promise<Vessel> {
    return this.prisma.vessel.delete({
      where: { id },
    });
  }

  async addCapability(params: {
    vesselId: number;
    capabilityId: number;
  }): Promise<Vessel> {
    const { vesselId, capabilityId } = params;
    return this.prisma.vessel.update({
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
    return this.prisma.vessel.update({
      where: { id: vesselId },
      data: {
        capabilities: {
          disconnect: { id: capabilityId },
        },
      },
    });
  }
}
