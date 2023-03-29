import { Injectable } from '@nestjs/common';
import { Prisma, VesselState } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class VesselStatesRepository {
  constructor(private prisma: PrismaService) {}

  async state(stateWhereUniqueInput: Prisma.VesselStateWhereUniqueInput) {
    return this.prisma.vesselState.findUnique({
      where: stateWhereUniqueInput,
    });
  }

  async states(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VesselStateWhereUniqueInput;
    where?: Prisma.VesselStateWhereInput;
    orderBy?: Prisma.VesselStateOrderByWithRelationInput;
  }): Promise<VesselState[]> {
    return this.prisma.vesselState.findMany({
      ...params,
      include: {
        subStates: true,
      },
    });
  }

  async createState(data: Prisma.VesselStateCreateInput) {
    console.log(data);
    return this.prisma.vesselState.create({
      data,
    });
  }

  async deleteState(params: { id: number }): Promise<VesselState> {
    const { id } = params;
    return this.prisma.vesselState.delete({
      where: {
        id,
      },
    });
  }

  async updateState(params: {
    id: number;
    data: Prisma.VesselStateUpdateInput;
  }): Promise<VesselState> {
    const { id, data } = params;
    return this.prisma.vesselState.update({
      where: {
        id,
      },
      data,
    });
  }
}
