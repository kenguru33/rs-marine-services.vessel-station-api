import { Injectable } from '@nestjs/common';
import { VesselCapability, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselCapabilityDto } from './dto/createVesselCapability.dto';
import { UpdateVesselCapabilityDto } from './dto/updateVesselCapability.dto';

export type VesselCapabilityWithRelation = Prisma.VesselCapabilityGetPayload<{
  include: {
    vessels: true;
  };
}>;

@Injectable()
export class VesselCapabilityService {
  constructor(private prisma: PrismaService) {}

  async getCapability(id: number): Promise<VesselCapability> {
    return this.prisma.vesselCapability.findUniqueOrThrow({
      where: { id },
    });
  }

  async getCapabilities(): Promise<VesselCapability[]> {
    return this.prisma.vesselCapability.findMany();
  }

  async createCapability(
    data: CreateVesselCapabilityDto,
  ): Promise<VesselCapability> {
    return this.prisma.vesselCapability.create({
      data,
    });
  }

  async updateCapability(
    id: number,
    data: UpdateVesselCapabilityDto,
  ): Promise<VesselCapability> {
    return this.prisma.vesselCapability.update({ data, where: { id } });
  }

  async deleteCapability(id: number): Promise<VesselCapability> {
    return this.prisma.vesselCapability.delete({
      where: { id },
    });
  }
}
