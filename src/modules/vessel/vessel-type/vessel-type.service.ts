import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateVesselTypeDto } from './dto/create-vessel-type.dto';
import { UpdateVesselTypeDto } from './dto/update-vessel-type.dto';
import { QueryVesselTypeDto } from './dto/query-vessel-type.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class VesselTypeService {
  constructor(private prisma: PrismaService) {}

  async getVesselTypes(query: QueryVesselTypeDto) {
    const { include, ...filter } = query;
    const vesselTypesIncludes =
      await this.prisma.parseInclude<Prisma.VesselTypeInclude>(include);
    return this.prisma.vesselType.findMany({
      where: {
        name: {
          contains: filter.name,
        },
        prefix: {
          equals: filter.prefix,
        },
      },
      include: vesselTypesIncludes,
    });
  }

  async getVesselType(id: number, query: QueryVesselTypeDto) {
    const vesselTypeIncludes =
      await this.prisma.parseInclude<Prisma.VesselTypeInclude>(query.include);
    return this.prisma.vesselType.findUniqueOrThrow({
      where: { id },
      include: vesselTypeIncludes,
    });
  }

  async createVesselType(data: CreateVesselTypeDto, query: QueryVesselTypeDto) {
    const vesselTypeIncludes =
      await this.prisma.parseInclude<Prisma.VesselTypeInclude>(query.include);
    return this.prisma.vesselType.create({
      data: {
        name: data.name,
        description: data.description,
        prefix: data.prefix,
      },
      include: vesselTypeIncludes,
    });
  }

  async updateVesselType(
    id: number,
    data: UpdateVesselTypeDto,
    query: QueryVesselTypeDto,
  ) {
    const vesselTypeIncludes =
      await this.prisma.parseInclude<Prisma.VesselTypeInclude>(query.include);
    return this.prisma.vesselType.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        prefix: data.prefix,
      },
      include: vesselTypeIncludes,
    });
  }

  async deleteVesselType(id: number) {
    return this.prisma.vesselType.delete({
      where: { id },
    });
  }
}
