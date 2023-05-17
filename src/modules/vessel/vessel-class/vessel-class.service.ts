import { Injectable } from '@nestjs/common';
import { CreateVesselClassDto } from './dto/createVesselClass.dto';
import { UpdateVesselClassDto } from './dto/updateVesselClass.dto';
import { Prisma, VesselClass } from '@prisma/client';
import { PrismaService } from '../../../database/prisma.service';
import { QueryVesselClassDto } from './dto/query-vessel-class.dto';

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

  async vesselClass(
    id: number,
    query: QueryVesselClassDto,
  ): Promise<VesselClass> {
    const vesselcClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(query.include);
    return this.prisma.vesselClass.findUniqueOrThrow({
      where: { id },
      include: vesselcClassIncludes,
    });
  }

  async vesselClasses(query: QueryVesselClassDto): Promise<VesselClass[]> {
    const { include, ...where } = query;
    const vesselClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(include);
    return this.prisma.vesselClass.findMany({
      include: vesselClassIncludes,
      where: { name: { contains: where.name } },
    });
  }

  async createVesselClass(
    data: CreateVesselClassDto,
    query: QueryVesselClassDto,
  ): Promise<VesselClass> {
    const vesselClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(query.include);
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
    query: QueryVesselClassDto,
  ): Promise<VesselClass> {
    const vesselClassIncludes =
      await this.prisma.parseInclude<Prisma.VesselClassInclude>(query.include);
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
