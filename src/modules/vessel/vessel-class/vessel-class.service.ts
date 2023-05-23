import { Injectable } from '@nestjs/common';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { Prisma, VesselClass } from '@prisma/client';
import { PrismaService } from '../../../database/prisma.service';
import { QueryVesselClassIncludeDto } from './dto/query-vessel-class-include.dto';
import { QueryVesselClassFilterDto } from './dto/query-vessel-class-filter.dto';

export type VesselClassWithRelation = Prisma.VesselClassGetPayload<{
  include: {
    vessels: {
      include: { class: true; capabilities: true; subState: true };
    };
  };
}>;

@Injectable()
export class VesselClassService {
  constructor(private prisma: PrismaService) {}

  async getVesselClass(
    id: number,
    queryVesselClassIncludeDto: QueryVesselClassIncludeDto,
  ): Promise<VesselClass> {
    const vesselcClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(
        queryVesselClassIncludeDto.include,
      );
    return this.prisma.vesselClass.findUniqueOrThrow({
      where: { id },
      include: vesselcClassIncludes,
    });
  }

  async getVesselClasses(
    queryVesselClassIncludeDto: QueryVesselClassIncludeDto,
    queryVesselClassFilterDto: QueryVesselClassFilterDto,
  ) {
    const vesselClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(
        queryVesselClassIncludeDto.include,
      );
    return this.prisma.vesselClass.findMany({
      include: vesselClassIncludes,
      where: { name: { contains: queryVesselClassFilterDto.name } },
    });
  }

  async createVesselClass(
    data: CreateVesselClassDto,
    queryVesselIncludeDto: QueryVesselClassIncludeDto,
  ): Promise<VesselClass> {
    const vesselClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(
        queryVesselIncludeDto.include,
      );
    return this.prisma.vesselClass.create({
      data: {
        name: data.name,
        description: data.description,
      },
      include: vesselClassIncludes,
    });
  }

  async updateVesselClass(
    id: number,
    data: UpdateVesselClassDto,
    queryVesselClassIncludeDto: QueryVesselClassIncludeDto,
  ): Promise<VesselClass> {
    const vesselClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(
        queryVesselClassIncludeDto.include,
      );
    return this.prisma.vesselClass.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
      include: vesselClassIncludes,
    });
  }

  async deleteVesselClass(id: number): Promise<VesselClass> {
    return this.prisma.vesselClass.delete({
      where: { id },
    });
  }
}
