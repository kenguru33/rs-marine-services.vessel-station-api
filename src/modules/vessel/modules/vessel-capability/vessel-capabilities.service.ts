import { Injectable } from '@nestjs/common';
import { VesselCapability, Prisma } from '@prisma/client';
import { CreateVesselCapabilityDto } from './dto/create-vessel-capability.dto';
import { UpdateVesselCapabilityDto } from './dto/update-vessel-capability.dto';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselCapabilityIncludeDto } from './dto/query-vessel-capability-include.dto';
import { QueryVesselCapabilityFilterDto } from './dto/query-vessel-capability-filter.dto';

export type VesselCapabilityWithRelation = Prisma.VesselCapabilityGetPayload<{
  include: {
    vessels: true;
  };
}>;

@Injectable()
export class VesselCapabilityService {
  constructor(private prisma: PrismaService) {}

  async getCapability(
    id: number,
    queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
  ): Promise<VesselCapability> {
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(
        queryVesselCapabilityIncludeDto.include,
      );
    return this.prisma.vesselCapability.findUniqueOrThrow({
      where: { id },
      include: vesselCapabilityPrismaInclude,
    });
  }

  async getCapabilities(
    queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
    queryVesselCapabilityFilterDto: QueryVesselCapabilityFilterDto,
  ): Promise<VesselCapability[]> {
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(
        queryVesselCapabilityIncludeDto.include,
      );
    return this.prisma.vesselCapability.findMany({
      include: vesselCapabilityPrismaInclude,
      where: { name: { equals: queryVesselCapabilityFilterDto.name } },
    });
  }

  async createCapability(
    data: CreateVesselCapabilityDto,
    queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
  ): Promise<VesselCapability> {
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(
        queryVesselCapabilityIncludeDto.include,
      );
    return this.prisma.vesselCapability.create({
      data,
      include: vesselCapabilityPrismaInclude,
    });
  }

  async updateCapability(
    id: number,
    data: UpdateVesselCapabilityDto,
    queryVesselCapabilityIncludeDto: QueryVesselCapabilityIncludeDto,
  ): Promise<VesselCapability> {
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(
        queryVesselCapabilityIncludeDto.include,
      );
    return this.prisma.vesselCapability.update({
      data,
      where: { id },
      include: vesselCapabilityPrismaInclude,
    });
  }

  async deleteCapability(id: number): Promise<VesselCapability> {
    return this.prisma.vesselCapability.delete({
      where: { id },
    });
  }
}
