import { Injectable } from '@nestjs/common';
import { Prisma, Vessel } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CreateVesselDto } from './dto/createVessel.dto';
import { QueryVesselDto } from './dto/query-vessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';

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

  async getVessel(id: number, include: string | undefined): Promise<Vessel> {
    console.log('service', include);
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
      where: {
        name: { contains: where.name },
        rs: where.rs,
      },
      include: vesselInclude,
    });
  }

  async create(data: CreateVesselDto, include: QueryVesselDto['include']) {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      include,
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
  }

  async update(
    id: number,
    data: UpdateVesselDto,
    include: QueryVesselDto['include'],
  ): Promise<Vessel> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      include,
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
}
