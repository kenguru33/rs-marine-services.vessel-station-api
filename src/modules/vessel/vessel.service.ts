import { Injectable } from '@nestjs/common';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { Prisma, Vessel } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { QueryVesselDto } from './dto/query-vessel.dto';

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
    type?: true;
    communicationEquipments?: {
      include: {
        type?: true;
      };
    };
  };
}>;

@Injectable()
export class VesselService {
  constructor(private prisma: PrismaService) {}

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

  async getVessels(
    query: QueryVesselDto,
  ): Promise<Vessel[] | VesselWithRelation[]> {
    const { include, ...where } = query;
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      include,
    );
    return this.prisma.vessel.findMany({
      where: { name: { contains: where.name }, rs: where.rs },
      include: vesselInclude,
    });
  }

  async create(data: CreateVesselDto, query: QueryVesselDto) {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      query.include,
    );

    return this.prisma.vessel.create({
      data: {
        mmsi: data.mmsi,
        name: data.name,
        rs: data.rs,
        state: {
          connect: { id: data.stateId },
        },
        station: {
          connect: data.stationId ? { id: data.stationId } : undefined,
        },
        class: {
          connect: data.classId ? { id: data.classId } : undefined,
        },
        capabilities: {
          connect: data.capabilityIds
            ? data.capabilityIds.map((id) => ({ id }))
            : [],
        },
        type: {
          connect: data.typeId ? { id: data.typeId } : undefined,
        },
        inspectors: {
          connect: data.inspectorIds
            ? data.inspectorIds.map((id) => ({ id }))
            : [],
        },
      },
      include: vesselInclude,
    });

    //   data: {
    //     name,
    //     rs,
    //     mmsi,
    //     state: {
    //       connect: { id: stateId },
    //     },
    //     station: {
    //       connect: stationId ? { id: stationId } : undefined,
    //     },
    //     class: {
    //       connect: classId ? { id: classId } : undefined,
    //     },
    //     capabilities: {
    //       connect: capabilityIds ? capabilityIds.map((id) => ({ id })) : [],
    //     },
    //     typeId: typeId,
    //     inspectors: {
    //       connect: inspectorIds ? inspectorIds.map((id) => ({ id })) : [],
    //     },
    //   }
    // });
  }

  async update(
    id: number,
    data: UpdateVesselDto,
    query: QueryVesselDto,
  ): Promise<Vessel> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      query.include,
    );
    return this.prisma.vessel.update({
      where: { id },
      data: {
        mmsi: data.mmsi,
        name: data.name,
        rs: data.rs,
        state: {
          connect: { id: data.stateId },
        },
        station: {
          connect: data.stationId ? { id: data.stationId } : undefined,
        },
        class: {
          connect: data.classId ? { id: data.classId } : undefined,
        },
        capabilities: {
          connect: data.capabilityIds
            ? data.capabilityIds.map((id) => ({ id }))
            : [],
        },
        type: {
          connect: data.typeId ? { id: data.typeId } : undefined,
        },
        inspectors: {
          connect: data.inspectorIds
            ? data.inspectorIds.map((id) => ({ id }))
            : [],
        },
      },
      include: vesselInclude,
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
