import { Injectable } from '@nestjs/common';
import { VesselCapability, Prisma } from '@prisma/client';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';
import { UpdateVesselCapabilityDto } from './dto/updateVesselCapability.dto';
import { PrismaService } from '../../../../database/prisma.service';
import { QueryVesselCapabilityDto } from './dto/query-vessel-capability.dto';

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
    query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability> {
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(
        query.include,
      );
    return this.prisma.vesselCapability.findUniqueOrThrow({
      where: { id },
      include: vesselCapabilityPrismaInclude,
    });
  }

  async getCapabilities(
    query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability[]> {
    const { include, ...where } = query;
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(include);
    return this.prisma.vesselCapability.findMany({
      include: vesselCapabilityPrismaInclude,
      where,
    });
  }

  async createCapability(
    data: CreateVesselCapabilityDto,
    query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability> {
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(
        query.include,
      );
    return this.prisma.vesselCapability.create({
      data,
      include: vesselCapabilityPrismaInclude,
    });
  }

  async updateCapability(
    id: number,
    data: UpdateVesselCapabilityDto,
    query: QueryVesselCapabilityDto,
  ): Promise<VesselCapability> {
    const vesselCapabilityPrismaInclude =
      await this.prisma.parseInclude<Prisma.VesselCapabilityInclude>(
        query.include,
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
