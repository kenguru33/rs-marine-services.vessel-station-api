import { Injectable } from '@nestjs/common';
import { VesselCapability, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class VesselCapabilitiesService {
  constructor(private prisma: PrismaService) {}

  async capability(
    capabilityWhereUniqueInput: Prisma.VesselCapabilityWhereUniqueInput,
  ) {
    return this.prisma.vesselCapability.findUnique({
      where: capabilityWhereUniqueInput,
    });
  }

  async capabilities(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VesselCapabilityWhereUniqueInput;
    where?: Prisma.VesselCapabilityWhereInput;
    orderBy?: Prisma.VesselCapabilityOrderByWithRelationInput;
  }): Promise<VesselCapability[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.vesselCapability.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCapability(data: Prisma.VesselCapabilityCreateInput) {
    return this.prisma.vesselCapability.create({
      data,
    });
  }
}
