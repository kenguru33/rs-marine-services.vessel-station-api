import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselBuildInfoDto } from './dto/query-vessel-build-info.dto';
import { Prisma } from '@prisma/client';
import { CreateVesselBuildInfoDto } from './dto/create-vessel-build-info.dto';
import { UpdateVesselBuildInfoDto } from './dto/update-vessel-build-info.dto';

@Injectable()
export class VesselBuildInfoService {
  constructor(private prisma: PrismaService) {}

  async getVesselBuildInfos(query: QueryVesselBuildInfoDto) {
    const { include, ...where } = query;
    const vesselBuildInfoIncludes =
      await this.prisma.parseInclude<Prisma.VesselBuildInfoInclude>(include);
    return this.prisma.vesselBuildInfo.findMany({
      include: vesselBuildInfoIncludes,
      where,
    });
  }

  async getVesselBuildInfo(id: number, query: QueryVesselBuildInfoDto) {
    return this.prisma.vesselBuildInfo.findUnique({
      where: { id },
    });
  }

  async createVesselBuildInfo(
    data: CreateVesselBuildInfoDto,
    query: QueryVesselBuildInfoDto,
  ) {
    const vesselBuildInfoIncludes =
      await this.prisma.parseInclude<Prisma.VesselBuildInfoInclude>(
        query.include,
      );
    return this.prisma.vesselBuildInfo.create({
      data,
      include: vesselBuildInfoIncludes,
    });
  }

  async updateVesselBuildInfo(
    id: number,
    data: UpdateVesselBuildInfoDto,
    query: QueryVesselBuildInfoDto,
  ) {
    const vesselBuildInfoIncludes =
      await this.prisma.parseInclude<Prisma.VesselBuildInfoInclude>(
        query.include,
      );
    return this.prisma.vesselBuildInfo.update({
      where: { id },
      data,
      include: vesselBuildInfoIncludes,
    });
  }

  async deleteVesselBuildInfo(id: number) {
    return this.prisma.vesselBuildInfo.delete({
      where: { id },
    });
  }
}
