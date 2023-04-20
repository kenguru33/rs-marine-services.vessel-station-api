import { Injectable } from '@nestjs/common';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { Prisma, VesselState, VesselSubState } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { UpdateVesselSubStateDto } from './dto/updateVesselSubState.dto';

export type VesselStateWithRelation = Prisma.VesselStateGetPayload<{
  include: {
    subStates: true;
  };
}>;

@Injectable()
export class VesselStatesService {
  constructor(private prisma: PrismaService) {}

  async state(id: number): Promise<VesselStateWithRelation> {
    return this.prisma.vesselState.findUnique({
      where: { id },
      include: { subStates: true },
    });
  }

  async states(): Promise<VesselStateWithRelation[]> {
    return this.prisma.vesselState.findMany({
      include: {
        subStates: true,
      },
    });
  }

  async createState(data: CreateVesselStateDto): Promise<VesselState> {
    const { name, description } = data;
    return this.prisma.vesselState.create({
      data: {
        name,
        description,
      },
    });
  }

  async deleteState(id: number): Promise<VesselState> {
    return this.prisma.vesselState.delete({
      where: {
        id,
      },
    });
  }

  async updateState(
    id: number,
    data: UpdateVesselStateDto,
  ): Promise<VesselStateWithRelation> {
    const { description, inUse, legacyStateId, name } = data;
    return this.prisma.vesselState.update({
      where: {
        id,
      },
      data: {
        name: name || undefined,
        description: description || undefined,
        inUse: inUse || undefined,
        legacyStateId: legacyStateId || undefined,
      },
      include: {
        subStates: true,
      },
    });
  }
}
