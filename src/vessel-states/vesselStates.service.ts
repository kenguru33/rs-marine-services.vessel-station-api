import { Injectable } from '@nestjs/common';
import { CreateVesselStateDto } from './dto/createVesselState.dto';
import { CreateVesselSubStateDto } from './dto/createVesselSubState.dto';
import { VesselState, VesselSubState } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateVesselStateDto } from './dto/updateVesselState.dto';
import { UpdateVesselSubStateDto } from './dto/updateVesselSubState.dto';

@Injectable()
export class VesselStatesService {
  constructor(private prisma: PrismaService) {}

  async state(id: number): Promise<VesselState> {
    return this.prisma.vesselState.findUnique({
      where: { id },
      include: { subStates: true },
    });
  }

  async states(): Promise<VesselState[]> {
    return this.prisma.vesselState.findMany({
      include: {
        subStates: true,
      },
    });
  }

  async createState(data: CreateVesselStateDto) {
    const { name, description } = data;
    return this.prisma.vesselState.create({
      data: {
        name,
        description,
      },
    });
  }

  async deleteState(id: number) {
    return this.prisma.vesselState.delete({
      where: {
        id,
      },
      include: {
        subStates: true,
      },
    });
  }

  async updateState(id: number, data: UpdateVesselStateDto) {
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
