import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { Vessel } from './models/vessel';

@Injectable()
export class VesselsService {
  constructor(private prisma: PrismaService) {}

  async findByRs(rs: number): Promise<Vessel> {
    return this.prisma.vessel.findFirstOrThrow({
      where: { rs },
      include: {
        capabilities: true,
        subState: {
          include: { parentState: true },
        },
        station: true,
        class: true,
      },
    });
  }

  async findOne(id: number): Promise<Vessel> {
    return this.prisma.vessel.findUniqueOrThrow({
      where: { id },
      include: {
        capabilities: true,
        class: true,
        station: true,
        subState: {
          include: { parentState: true },
        },
      },
    });
  }

  async findAll(): Promise<Vessel[]> {
    return this.prisma.vessel.findMany({
      include: {
        capabilities: true,
        class: true,
        station: true,
        subState: {
          include: { parentState: true },
        },
      },
    });
  }

  create(data: CreateVesselDto): Promise<Vessel> {
    const { name, rs, capabilityIds, vesselClassId, stationId, subStateId } =
      data;
    const vessel = this.prisma.vessel.create({
      data: {
        name,
        rs,
        subState: { connect: { id: subStateId } },
        station: stationId ? { connect: { id: stationId } } : undefined,
        class: { connect: { id: vesselClassId } },
        capabilities: {
          connect: capabilityIds ? capabilityIds.map((id) => ({ id })) : [],
        },
      },
      include: {
        capabilities: true,
        class: true,
        station: true,
        subState: {
          include: { parentState: true },
        },
      },
    });
    return vessel;
  }

  async update(id: number, data: UpdateVesselDto): Promise<Vessel> {
    const { name, rs, capabilityIds, vesselClassId } = data;
    return this.prisma.vessel.update({
      where: { id },
      data: {
        name: name || undefined,
        rs: rs || undefined,
        class: {
          connect: vesselClassId ? { id: vesselClassId } : undefined,
        },
        subState: { connect: { id: data.subStateId } },
        capabilities: {
          set: capabilityIds && capabilityIds.map((id) => ({ id })),
        },
      },
      include: {
        capabilities: true,
        class: true,
        station: true,
        subState: {
          include: { parentState: true },
        },
      },
    });
  }

  async delete(id: number): Promise<Vessel> {
    return this.prisma.vessel.delete({
      where: { id },
      include: {
        capabilities: true,
        class: true,
        station: true,
        subState: {
          include: { parentState: true },
        },
      },
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
      include: {
        capabilities: true,
        class: true,
        station: true,
        subState: {
          include: { parentState: true },
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
      include: {
        capabilities: true,
        class: true,
        station: true,
        subState: {
          include: { parentState: true },
        },
      },
    });
  }
}
