import { Injectable } from '@nestjs/common';
import { Prisma, Vessel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VesselsRepository {
  constructor(private prisma: PrismaService) {}

  async vessel(vesselWhereUniqueInput: Prisma.VesselWhereUniqueInput) {
    return this.prisma.vessel.findUnique({
      where: vesselWhereUniqueInput,
      include: {
        capabilities: true,
      },
    });
  }

  async vessels(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VesselWhereUniqueInput;
    where?: Prisma.VesselWhereInput;
    orderBy?: Prisma.VesselOrderByWithRelationInput;
  }): Promise<Vessel[]> {
    return this.prisma.vessel.findMany(params);
  }

  async createVessel(data: Prisma.VesselCreateInput) {
    return this.prisma.vessel.create({
      data,
      include: {
        vesselClass: true,
        capabilities: true,
      },
    });
  }

  async updateVessel(params: {
    where: { id: number },
    data: Prisma.VesselUpdateInput,
  }): Promise<Vessel> {
    return this.prisma.vessel.update({
      data: params.data,
      where: params.where,
      include: {
        capabilities: true,
        vesselClass: true,
      },
    });
  }

  async deleteVessel(params: { id: number }): Promise<Vessel> {
    return this.prisma.vessel.delete({
      where: {
        id: params.id,
      },
    });
  }
}
