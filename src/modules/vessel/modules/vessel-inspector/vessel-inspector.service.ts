import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselInspectorDto } from './dto/update-vessel-inspector.dto';
import { CreateVesselInspectorDto } from './dto/create-vessel-inspector.dto';
import { QueryVesselInspectorFilterDto } from './dto/query-vessel-inspector-filter.dto';
import { Prisma } from '@prisma/client';
import { QueryVesselInspectorIncludeDto } from './dto/query-vessel-inspector-include.dto';
import { query } from 'express';

@Injectable()
export class VesselInspectorService {
  constructor(private prisma: PrismaService) {}

  async getVesselInspector(id: number, query: QueryVesselInspectorIncludeDto) {
    const vesselInspectorInlcudes =
      await this.prisma.parseInclude<Prisma.VesselInspectorInclude>(
        query.include,
      );
    return await this.prisma.vesselInspector.findUnique({
      where: { id },
      include: vesselInspectorInlcudes,
    });
  }

  async getVesselInspectors(
    queryInclude: QueryVesselInspectorIncludeDto,
    queryFilter: QueryVesselInspectorFilterDto,
  ) {
    const vesselInspectorInlcudes =
      await this.prisma.parseInclude<Prisma.VesselInspectorInclude>(
        queryInclude.include,
      );
    return await this.prisma.vesselInspector.findMany({
      where: {
        name: {
          contains: queryFilter.name,
        },
      },
      include: vesselInspectorInlcudes,
    });
  }

  async createVesselInspector(
    data: CreateVesselInspectorDto,
    query: QueryVesselInspectorIncludeDto,
  ) {
    const vesselInspectorInlcudes =
      await this.prisma.parseInclude<Prisma.VesselInspectorInclude>(
        query.include,
      );
    return await this.prisma.vesselInspector.create({
      data: {
        vessels: {
          connect: data.vesselIds
            ? data.vesselIds.map((id: number) => ({ id }))
            : [],
        },

        ...data,
      },
      include: vesselInspectorInlcudes,
    });
  }

  async updateVesselInspector(
    id: number,
    data: UpdateVesselInspectorDto,
    query: QueryVesselInspectorIncludeDto,
  ) {
    const vesselInspectorInlcudes =
      await this.prisma.parseInclude<Prisma.VesselInspectorInclude>(
        query.include,
      );
    return await this.prisma.vesselInspector.update({
      where: { id },
      data: {
        vessels: {
          set: data.vesselIds?.map((id: number) => ({ id })),
        },
        ...data,
      },
      include: vesselInspectorInlcudes,
    });
  }

  async deleteVesselInspector(id: number) {
    return await this.prisma.vesselInspector.delete({
      where: { id },
    });
  }
}
