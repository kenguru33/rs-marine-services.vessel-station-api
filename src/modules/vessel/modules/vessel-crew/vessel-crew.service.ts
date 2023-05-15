import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateVesselCrewDto } from './dto/update-vessel-crew.dto';
import { CreateVesselCrewDto } from './dto/create-vessel-crew.dto';
import { QueryVesselCrewDto } from './dto/query-vessel-crew.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class VesselCrewService {
  constructor(private prisma: PrismaService) {}

  async getVesselCrews(query: QueryVesselCrewDto) {
    const { include, ...filter } = query;
    const vesselCrewInclude =
      await this.prisma.parseInclude<Prisma.VesselCrewInclude>(include);
    return await this.prisma.vesselCrew.findMany({
      include: vesselCrewInclude,
      where: {
        name: { contains: filter.name },
      },
    });
  }

  async getVesselCrew(id: number, query: QueryVesselCrewDto) {
    const vesselCrewInclude =
      await this.prisma.parseInclude<Prisma.VesselCrewInclude>(query.include);
    return await this.prisma.vesselCrew.findUnique({
      where: { id },
      include: vesselCrewInclude,
    });
  }

  async createVesselCrew(data: CreateVesselCrewDto, query: QueryVesselCrewDto) {
    const vesselCrewInclude = await this.prisma.parseInclude<Prisma.VesselCrewInclude>(query.include)
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

  async updateVesselCrew(id: number, data: UpdateVesselCrewDto, query: QueryVesselCrewDto) {
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
