import { Injectable } from '@nestjs/common';
import { Prisma, VesselState } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

Injectable();
export class VesselSubStatesRepository {
  constructor(private prisma: PrismaService) {}
  
  async subState(
    subStateWhereUniqueInput: Prisma.VesselSubStateWhereUniqueInput,
  ) {
    return this.prisma.vesselSubState.findUnique({
      where: subStateWhereUniqueInput,
    });
  }

  async subStates(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VesselSubStateWhereUniqueInput;
    where?: Prisma.VesselSubStateWhereInput;
    orderBy?: Prisma.VesselSubStateOrderByWithRelationInput;
  }): Promise<VesselState[]> {
    return this.prisma.vesselSubState.findMany({});
  }

  async createSubState(data: Prisma.VesselSubStateCreateInput) {
    return this.prisma.vesselSubState.create({
      data,
    });
  }
}
