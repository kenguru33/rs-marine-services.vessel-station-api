import { Injectable } from '@nestjs/common';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { Prisma, Vessel } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

export type VesselWithRelation = Prisma.VesselGetPayload<{
  include: {
    capabilities?: true;
    class?: true;
    station?: true;
    state?: {
      include: {
        stateCategory?: true;
      };
    };
  };
}>;

@Injectable()
export class VesselService {
  constructor(private prisma: PrismaService) {}

  async getVesselByRs(rs: number): Promise<Vessel> {
    return this.prisma.vessel.findFirstOrThrow({
      where: { rs },
    });
  }

  async getVessel(id: number, include?: string): Promise<Vessel> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      include,
    );
    return this.prisma.vessel.findUniqueOrThrow({
      where: { id },
      include: vesselInclude,
    });
    ('');
  }

  async getVessels(include?: string): Promise<Vessel[] | VesselWithRelation[]> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      include,
    );
    return this.prisma.vessel.findMany({
      include: vesselInclude,
    });
  }

  create(data: CreateVesselDto): Promise<Vessel> {
    const {
      name,
      rs,
      capabilityIds,
      classId,
      stationId,
      stateId,
      typeId,
    } = data;
    const vessel = this.prisma.vessel.create({
      data: {
        name,
        rs,
        stateId: stateId,
        stationId: stationId,
        classId: classId,
        capabilities: {
          connect: capabilityIds ? capabilityIds.map((id) => ({ id })) : [],
        },
        typeId: typeId,
      },
    });
    return vessel;
  }

  async update(id: number, data: UpdateVesselDto): Promise<Vessel> {
    const { name, rs, capabilityIds, classId, stateId, stationId } = data;
    return this.prisma.vessel.update({
      where: { id },
      data: {
        name: name,
        rs: rs,
        classId: classId,
        stateId: stateId,
        stationId: stationId,
        capabilities: {
          set: capabilityIds && capabilityIds.map((id) => ({ id })),
        },
      },
    });
  }

  async delete(id: number): Promise<Vessel> {
    return this.prisma.vessel.delete({
      where: { id },
    });
  }

  // async addCapability(params: {
  //   vesselId: number;
  //   capabilityId: number;
  // }): Promise<Vessel> {
  //   const { vesselId, capabilityId } = params;
  //   return this.prisma.vessel.update({
  //     where: { id: vesselId },
  //     data: {
  //       capabilities: {
  //         connect: { id: capabilityId },
  //       },
  //     },
  //     include: {
  //       capabilities: true,
  //       class: true,
  //       station: true,
  //       subState: {
  //         include: { parentState: true },
  //       },
  //     },
  //   });
  // }

  // async removeCapability(params: {
  //   vesselId: number;
  //   capabilityId: number;
  // }): Promise<Vessel> {
  //   const { vesselId, capabilityId } = params;
  //   return this.prisma.vessel.update({
  //     where: { id: vesselId },
  //     data: {
  //       capabilities: {
  //         disconnect: { id: capabilityId },
  //       },
  //     },
  //     include: {
  //       capabilities: true,
  //       class: true,
  //       station: true,
  //       subState: {
  //         include: { parentState: true },
  //       },
  //     },
  //   });
  // }
}
