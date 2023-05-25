import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselCrewDto } from './dto/update-vessel-crew.dto';
import { CreateVesselCrewDto } from './dto/create-vessel-crew.dto';
import { QueryVesselCrewFilterDto } from './dto/query-vessel-crew-filter.dto';
import { Prisma } from '@prisma/client';
import { QueryVesselCrewIncludeDto } from './dto/query-vesel-cew-include.dto';

@Injectable()
export class VesselCrewService {
  constructor(private prisma: PrismaService) {}

  async getVesselCrews(
    queryInclude: QueryVesselCrewIncludeDto,
    queryFilter: QueryVesselCrewFilterDto,
  ) {
    const vesselCrewInclude =
      await this.prisma.parseInclude<Prisma.VesselCrewInclude>(
        queryInclude.include,
      );
    return await this.prisma.vesselCrew.findMany({
      include: vesselCrewInclude,
      where: {
        name: { contains: queryFilter.name },
      },
    });
  }

  async getVesselCrew(id: number, query: QueryVesselCrewIncludeDto) {
    const vesselCrewInclude =
      await this.prisma.parseInclude<Prisma.VesselCrewInclude>(query.include);
    return await this.prisma.vesselCrew.findUnique({
      where: { id },
      include: vesselCrewInclude,
    });
  }

  async createVesselCrew(
    data: CreateVesselCrewDto,
    query: QueryVesselCrewIncludeDto,
  ) {
    const vesselCrewInclude =
      await this.prisma.parseInclude<Prisma.VesselCrewInclude>(query.include);
    return await this.prisma.vesselCrew.create({
      data: {
        name: data.name,
        title: data.title,
        vessel: {
          connect: data.vesselId ? { id: data.vesselId } : undefined,
        },
      },
      include: vesselCrewInclude,
    });
  }

  async updateVesselCrew(
    id: number,
    data: UpdateVesselCrewDto,
    query: QueryVesselCrewIncludeDto,
  ) {
    return await this.prisma.vesselCrew.update({
      where: { id },
      data: {
        name: data.name,
        title: data.title,
        vessel: {
          connect: { id: data.vesselId },
        },
      },
      include: {
        vessel: true,
      },
    });
  }

  async deleteVesselCrew(id: number) {
    return await this.prisma.vesselCrew.delete({
      where: { id },
    });
  }
}
