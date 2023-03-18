import { Injectable } from '@nestjs/common';
import { Capability, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CapabilitiesService {
  constructor(private prisma: PrismaService) {}

  async capability(
    capabilityWhereUniqueInput: Prisma.CapabilityWhereUniqueInput,
  ) {
    return this.prisma.capability.findUnique({
      where: capabilityWhereUniqueInput,
    });
  }

  async capabilities(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CapabilityWhereUniqueInput;
    where?: Prisma.CapabilityWhereInput;
    orderBy?: Prisma.CapabilityOrderByWithRelationInput;
  }): Promise<Capability[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.capability.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCapability(data: Prisma.CapabilityCreateInput) {
    return this.prisma.capability.create({
      data,
    });
  }
}
