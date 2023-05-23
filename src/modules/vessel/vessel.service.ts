import { Injectable } from '@nestjs/common';
import { Prisma, Vessel } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { QueryVesselFilterDto } from './dto/query-vessel-filter.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { QueryVesselIncludeDto } from './dto/query-vessel-include.dto';

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

  async getVessel(
    id: number,
    queryVesselIncludeDto: QueryVesselIncludeDto,
  ): Promise<Vessel> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      queryVesselIncludeDto.include,
    );
    return this.prisma.vessel.findUniqueOrThrow({
      where: { id },
      include: vesselInclude,
    });
    ('');
  }

  async getVessels(
    queryVesselIncludeDto: QueryVesselIncludeDto,
    filter: QueryVesselFilterDto,
  ): Promise<Vessel[] | VesselWithRelation[]> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      queryVesselIncludeDto.include,
    );
    return this.prisma.vessel.findMany({
      where: { name: { contains: filter.name }, rs: filter.rs },
      include: vesselInclude,
    });
  }

  async create(
    data: CreateVesselDto,
    queryVesselIncludeDto: QueryVesselIncludeDto,
  ) {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      queryVesselIncludeDto.include,
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
    queryVesselInclude: QueryVesselIncludeDto,
  ): Promise<Vessel> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      queryVesselInclude.include,
    );
    return this.prisma.vessel.update({
      where: { id },
      data: {
        mmsi: data.mmsi,
        name: data.name,
        rs: data.rs,
        state: {
          connect: data.stateId ? { id: data.stateId } : undefined,
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
          set: data.inspectorIds ? data.inspectorIds.map((id) => ({ id })) : [],
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
