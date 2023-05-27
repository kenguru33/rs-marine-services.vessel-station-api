import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselInspectorDto } from './dto/update-vessel-inspector.dto';
import { CreateVesselInspectorDto } from './dto/create-vessel-inspector.dto';
import { QueryVesselInspectorFilterDto } from './dto/query-vessel-inspector-filter.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class VesselInspectorService {
  constructor(private prisma: PrismaService) {}

  async getVesselInspector(id: number) {
    return await this.prisma.vesselInspector.findUnique({
      where: { id },
    });
  }

  async getVesselInspectors(query: QueryVesselInspectorFilterDto) {
    const { include, ...filter } = query;
    const vesselInspectorInlcudes =
      await this.prisma.parseInclude<Prisma.VesselInspectorInclude>(include);
    return await this.prisma.vesselInspector.findMany({
      where: {
        name: {
          contains: filter.name,
        },
      },
      include: vesselInspectorInlcudes,
    });
  }

  async createVesselInspector(
    data: CreateVesselInspectorDto,
    query: QueryVesselInspectorFilterDto,
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
    query: QueryVesselInspectorFilterDto,
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
