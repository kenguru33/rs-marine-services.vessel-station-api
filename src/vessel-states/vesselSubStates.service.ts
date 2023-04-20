import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { UpdateVesselSubStateDto } from './dto/updateVesselSubState.dto';
import { Prisma, VesselState } from '@prisma/client';

export type VesselSubStateWithRelation = Prisma.VesselSubStateGetPayload<{
  include: {
    parentState: {
      include: {
        subStates: true;
      };
    };
  };
}>;

@Injectable()
export class VesselSubStatesService {
  constructor(private prisma: PrismaService) {}

  async subState(id: number): Promise<VesselSubStateWithRelation> {
    return this.prisma.vesselSubState.findUnique({
      where: { id },
      include: { parentState: { include: { subStates: true } } },
    });
  }

  async subStates(): Promise<VesselSubStateWithRelation[]> {
    return this.prisma.vesselSubState.findMany({
      include: { parentState: { include: { subStates: true } } },
    });
  }

  async createSubState(
    data: CreateVesselSubStateDto,
  ): Promise<VesselSubStateWithRelation> {
    const { name, description, parentStateId, legacyStateId } = data;
    return this.prisma.vesselSubState.create({
      data: {
        name,
        description,
        parentState: { connect: { id: parentStateId } },
      },
      include: {
        parentState: { include: { subStates: true } },
      },
    });
  }

  async updateSubState(
    id: number,
    data: UpdateVesselSubStateDto,
  ): Promise<VesselSubStateWithRelation> {
    const { description, inUse, legacyStateId, name, parentStateId } = data;
    return this.prisma.vesselSubState.update({
      where: {
        id,
      },
      data: {
        name: name || undefined,
        description: description || undefined,
        inUse: inUse || undefined,
        legacyStateId: legacyStateId || undefined,
        parentState: { connect: { id: parentStateId } },
      },
      include: {
        parentState: { include: { subStates: true } },
      },
    });
  }

  async deleteSubState(id: number): Promise<VesselState> {
    return this.prisma.vesselSubState.delete({
      where: {
        id,
      },
    });
  }
}
