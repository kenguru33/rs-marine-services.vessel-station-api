import { Injectable } from '@nestjs/common';
import { Prisma, Vessel } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CreateVesselDto } from './dto/createVessel.dto';
import { QueryVesselFilterDto } from './dto/query-vessel-filter.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { QueryIncludeDto } from '../../shared/dto/query-include.dto';

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

  async getVessel(id: number, queryIncludeDto: QueryIncludeDto ): Promise<Vessel> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      queryIncludeDto.include,
    );
    return this.prisma.vessel.findUniqueOrThrow({
      where: { id },
      include: vesselInclude,
    });
    ('');
  }

  async getVessels(
    queryIncludeDto: QueryIncludeDto,
    filter: QueryVesselFilterDto,
  ): Promise<Vessel[] | VesselWithRelation[]> {
    
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      queryIncludeDto.include,
    );
    console.log('vesselInclude', vesselInclude);
    return this.prisma.vessel.findMany({
      where: { name: { contains: filter.name }, rs: filter.rs },
      include: vesselInclude,
    });
  }

  async create(data: CreateVesselDto, query: QueryVesselFilterDto) {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      '',
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
    query: QueryVesselFilterDto,
  ): Promise<Vessel> {
    const vesselInclude = await this.prisma.parseInclude<Prisma.VesselInclude>(
      '',
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
